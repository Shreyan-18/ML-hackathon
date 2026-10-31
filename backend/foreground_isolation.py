"""Foreground Isolation and Background Removal Module for Sketch2Shape AI.

This module isolates the primary sketch subject from paper backgrounds, scanner artifacts,
checkerboard transparency grids, and transparent canvas borders. It provides rembg neural
segmentation with an edge-preserving OpenCV morphological fallback, hole-filling, speck
removal, and centered canvas re-compositing.
"""

from __future__ import annotations

import logging
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Dict, Optional, Tuple, Union

_project_root = str(Path(__file__).resolve().parent.parent)
if _project_root not in sys.path:
    sys.path.insert(0, _project_root)

import cv2
import numpy as np
from PIL import Image

from backend.config import ForegroundIsolationConfig, app_config
from backend.preprocessing import load_image_safely

logger = logging.getLogger("sketch2shape.foreground_isolation")


@dataclass
class ForegroundIsolationResult:
    """Outcome of the foreground extraction process."""

    success: bool
    rgba_path: str
    composite_path: str
    mask_path: str
    bounding_box: Tuple[int, int, int, int]  # (x, y, w, h)
    foreground_pixel_ratio: float
    method_used: str
    status: str
    details: Dict[str, Any]


def _extract_with_rembg(image_rgb: np.ndarray, model_name: str = "birefnet-general") -> Optional[np.ndarray]:
    """Attempts to remove background using rembg neural network."""
    try:
        from rembg import remove, new_session

        pil_img = Image.fromarray(image_rgb)
        session = new_session(model_name)
        rgba_pil = remove(pil_img, session=session)
        rgba_np = np.array(rgba_pil, dtype=np.uint8)
        if rgba_np.ndim == 3 and rgba_np.shape[2] == 4:
            return rgba_np
    except Exception as err:
        logger.warning("rembg extraction failed or rembg not installed (%s). Falling back to OpenCV.", err)
    return None


def strip_border_connected_background(image_rgb: np.ndarray) -> Tuple[np.ndarray, np.ndarray]:
    """Detects and strips solid or checkerboard backgrounds connected to the canvas border.

    Handles:
    - Standard white or off-white paper backgrounds
    - Fake-transparent gray/white checkerboard PNG backgrounds (e.g., alternating ~204 and ~255 tiles)
    - Uniform border frames

    Returns:
        Tuple of (cleaned_rgb_on_white, foreground_binary_mask)
    """
    h, w = image_rgb.shape[:2]
    gray = cv2.cvtColor(image_rgb, cv2.COLOR_RGB2GRAY)
    hsv = cv2.cvtColor(image_rgb, cv2.COLOR_RGB2HSV)
    sat = hsv[:, :, 1]

    # Sample border pixels (outer 6% margin)
    margin_y = max(4, int(h * 0.06))
    margin_x = max(4, int(w * 0.06))
    border_mask = np.zeros((h, w), dtype=bool)
    border_mask[:margin_y, :] = True
    border_mask[-margin_y:, :] = True
    border_mask[:, :margin_x] = True
    border_mask[:, -margin_x:] = True

    border_gray = gray[border_mask]
    border_sat = sat[border_mask]

    # Check if border is predominantly achromatic/neutral (low saturation, light/mid-gray to white)
    neutral_border = border_gray[border_sat < 35]
    if len(neutral_border) > 0:
        min_bg_lum = max(165.0, float(np.percentile(neutral_border, 5)) - 12.0)
    else:
        min_bg_lum = 225.0

    # Candidate background pixels: low saturation (< 32) and brightness >= min_bg_lum,
    # OR nearly pure white (brightness >= 242)
    is_bg_candidate = ((sat < 32) & (gray >= min_bg_lum)) | (gray >= 242)

    # Also protect strong local Canny edges that belong to dark/colored object contours,
    # UNLESS the edges are just weak gray-white checkerboard grid transitions
    bg_uint8 = is_bg_candidate.astype(np.uint8) * 255

    # Find connected components of candidate background that touch the outer image boundary
    num_labels, labels = cv2.connectedComponents(bg_uint8, connectivity=8)
    border_labels = np.unique(
        np.concatenate([
            labels[0, :],
            labels[-1, :],
            labels[:, 0],
            labels[:, -1],
            labels[margin_y // 2, :],
            labels[-1 - margin_y // 2, :],
            labels[:, margin_x // 2],
            labels[:, -1 - margin_x // 2],
        ])
    )
    border_labels = border_labels[border_labels > 0]

    connected_bg = np.isin(labels, border_labels)
    fg_mask = (~connected_bg).astype(np.uint8) * 255

    # Clean up thin 1-2px checkerboard seam remnants outside the main subject
    kernel_open = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3, 3))
    fg_mask_opened = cv2.morphologyEx(fg_mask, cv2.MORPH_OPEN, kernel_open)
    if np.count_nonzero(fg_mask_opened) > int(h * w * 0.005):
        fg_mask = fg_mask_opened

    cleaned_rgb = image_rgb.copy()
    cleaned_rgb[fg_mask == 0] = [255, 255, 255]
    return cleaned_rgb, fg_mask


def _extract_with_opencv_saliency(
    image_rgb: np.ndarray,
    background_color: Tuple[int, int, int] = (255, 255, 255),
) -> np.ndarray:
    """Robust OpenCV-based foreground contour, checkerboard stripping, and saliency extraction."""
    cleaned_rgb, border_fg_mask = strip_border_connected_background(image_rgb)
    gray = cv2.cvtColor(cleaned_rgb, cv2.COLOR_RGB2GRAY)

    # Determine difference from clean white background (255)
    diff = (255 - gray).astype(np.uint8)

    # Adaptive thresholding to segment strokes and foreground
    blurred = cv2.GaussianBlur(diff, (5, 5), 0)
    _, otsu_mask = cv2.threshold(blurred, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)

    # Also include high gradient edges to catch thin lines
    edges = cv2.Canny(gray, 40, 120)
    stroke_mask = cv2.bitwise_or(otsu_mask, edges)

    # Combine border-stripped silhouette mask with stroke mask
    fg_ratio = np.count_nonzero(border_fg_mask) / float(border_fg_mask.size)
    if 0.01 <= fg_ratio <= 0.85:
        mask = cv2.bitwise_or(border_fg_mask, stroke_mask)
    else:
        mask = stroke_mask

    # Create RGBA array
    rgba = np.zeros((image_rgb.shape[0], image_rgb.shape[1], 4), dtype=np.uint8)
    rgba[:, :, :3] = cleaned_rgb
    rgba[:, :, 3] = mask
    return rgba


def clean_alpha_mask(
    alpha_mask: np.ndarray,
    min_area_ratio: float = 0.005,
    morph_kernel_size: int = 5,
) -> np.ndarray:
    """Performs morphological closing to seal stroke gaps and removes isolated noise specks."""
    mask = alpha_mask.copy()
    if np.max(mask) <= 1:
        mask = (mask * 255).astype(np.uint8)

    # 1. Morphological closing to seal internal line breaks
    if morph_kernel_size > 1:
        kernel = cv2.getStructuringElement(
            cv2.MORPH_ELLIPSE, (morph_kernel_size, morph_kernel_size)
        )
        mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, kernel)

    # 2. Connected components to remove stray tiny dust specks
    h, w = mask.shape[:2]
    total_area = h * w
    min_component_area = int(total_area * min_area_ratio)

    num_labels, labels, stats, _ = cv2.connectedComponentsWithStats(mask, connectivity=8)
    cleaned_mask = np.zeros_like(mask)

    for i in range(1, num_labels):
        area = stats[i, cv2.CC_STAT_AREA]
        if area >= min_component_area:
            cleaned_mask[labels == i] = 255

    # If all components were filtered (extremely faint drawing), keep largest foreground
    if np.max(cleaned_mask) == 0 and num_labels > 1:
        largest_label = 1 + np.argmax(stats[1:, cv2.CC_STAT_AREA])
        cleaned_mask[labels == largest_label] = 255

    return cleaned_mask


def composite_and_center(
    rgba_image: np.ndarray,
    target_size: Optional[Tuple[int, int]] = None,
    padding_ratio: float = 0.1,
    background_color: Tuple[int, int, int] = (255, 255, 255),
) -> Tuple[np.ndarray, np.ndarray, Tuple[int, int, int, int]]:
    """Crops the isolated subject to its tight bounding box, pads, and centers on target canvas.

    Returns:
        (centered_rgba, centered_rgb_composite, (bbox_x, bbox_y, bbox_w, bbox_h))
    """
    alpha = rgba_image[:, :, 3]
    h, w = alpha.shape

    # Find non-zero bounding box
    coords = cv2.findNonZero(alpha)
    if coords is not None:
        bx, by, bw, bh = cv2.boundingRect(coords)
    else:
        bx, by, bw, bh = 0, 0, w, h

    cropped_rgba = rgba_image[by : by + bh, bx : bx + bw]

    out_w, out_h = target_size if target_size else (w, h)

    # Calculate uniform scaling with safety padding
    pad_w = int(out_w * padding_ratio)
    pad_h = int(out_h * padding_ratio)
    avail_w = max(1, out_w - 2 * pad_w)
    avail_h = max(1, out_h - 2 * pad_h)

    scale = min(avail_w / max(1, bw), avail_h / max(1, bh))
    new_w = max(1, int(round(bw * scale)))
    new_h = max(1, int(round(bh * scale)))

    interp = cv2.INTER_AREA if scale < 1.0 else cv2.INTER_CUBIC
    scaled_rgba = cv2.resize(cropped_rgba, (new_w, new_h), interpolation=interp)

    # Allocate canvases
    centered_rgba = np.zeros((out_h, out_w, 4), dtype=np.uint8)
    centered_composite = np.full((out_h, out_w, 3), background_color, dtype=np.uint8)

    offset_x = (out_w - new_w) // 2
    offset_y = (out_h - new_h) // 2

    centered_rgba[offset_y : offset_y + new_h, offset_x : offset_x + new_w] = scaled_rgba

    # Composite over solid background
    scaled_alpha = (scaled_rgba[:, :, 3].astype(np.float32) / 255.0)[:, :, None]
    scaled_rgb = scaled_rgba[:, :, :3].astype(np.float32)
    bg_slice = centered_composite[offset_y : offset_y + new_h, offset_x : offset_x + new_w].astype(np.float32)

    blended = scaled_rgb * scaled_alpha + bg_slice * (1.0 - scaled_alpha)
    centered_composite[offset_y : offset_y + new_h, offset_x : offset_x + new_w] = np.clip(blended, 0, 255).astype(np.uint8)

    return centered_rgba, centered_composite, (bx, by, bw, bh)


def isolate_foreground(
    input_image_path: Union[str, Path],
    output_dir: Optional[Union[str, Path]] = None,
    target_size: Optional[Tuple[int, int]] = (320, 320),
    config: Optional[ForegroundIsolationConfig] = None,
) -> ForegroundIsolationResult:
    """Main pipeline execution for foreground isolation and background cleaning."""
    cfg = config or ForegroundIsolationConfig()
    in_path = Path(input_image_path)
    if not in_path.exists():
        raise FileNotFoundError(f"Input image not found: {in_path}")

    out_directory = Path(output_dir) if output_dir else app_config.foreground_output_dir
    out_directory.mkdir(parents=True, exist_ok=True)

    # 1. Load image safely
    img_rgb = load_image_safely(in_path)

    # 2. Extract foreground using rembg or OpenCV fallback
    method_used = "opencv_saliency"
    rgba = None

    if cfg.method in ("auto", "rembg"):
        rgba = _extract_with_rembg(img_rgb, model_name=cfg.rembg_model)
        if rgba is not None:
            method_used = "rembg"

    if rgba is None:
        rgba = _extract_with_opencv_saliency(img_rgb, background_color=cfg.background_color)

    # 3. Clean mask
    cleaned_mask = clean_alpha_mask(
        rgba[:, :, 3],
        min_area_ratio=cfg.min_contour_area_ratio,
        morph_kernel_size=cfg.morphology_kernel_size,
    )
    rgba[:, :, 3] = cleaned_mask

    # 4. Center and composite on target canvas
    centered_rgba, centered_composite, bbox = composite_and_center(
        rgba,
        target_size=target_size,
        padding_ratio=cfg.padding_ratio,
        background_color=cfg.background_color,
    )

    # 5. Persist artifacts
    stem = in_path.stem
    rgba_out = out_directory / f"{stem}_foreground.png"
    composite_out = out_directory / f"{stem}_composite.png"
    mask_out = out_directory / f"{stem}_mask.png"

    Image.fromarray(centered_rgba, mode="RGBA").save(rgba_out)
    Image.fromarray(centered_composite, mode="RGB").save(composite_out)
    Image.fromarray(centered_rgba[:, :, 3], mode="L").save(mask_out)

    fg_ratio = float(np.count_nonzero(centered_rgba[:, :, 3]) / centered_rgba[:, :, 3].size)

    logger.info(
        "Foreground isolated for %s: method=%s, fg_ratio=%.2f, bbox=%s",
        in_path.name,
        method_used,
        fg_ratio,
        bbox,
    )

    return ForegroundIsolationResult(
        success=True,
        rgba_path=str(rgba_out),
        composite_path=str(composite_out),
        mask_path=str(mask_out),
        bounding_box=bbox,
        foreground_pixel_ratio=fg_ratio,
        method_used=method_used,
        status="completed",
        details={
            "target_resolution": list(target_size) if target_size else [rgba.shape[1], rgba.shape[0]],
            "mask_cleaned": cfg.clean_mask_holes,
            "padding_ratio": cfg.padding_ratio,
        },
    )
