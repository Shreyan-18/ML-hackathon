"""Robust Sketch Image Preprocessing Module for Sketch2Shape AI.

This module prepares hand-drawn 2D sketches for 3D reconstruction models
(such as InstantMesh, Zero123++, TripoSR). It handles multi-format loading,
transparency compositing, aspect-ratio preserving canvas resizing, conservative
CLAHE contrast enhancement, edge-preserving bilateral denoising, and validation.
"""

from __future__ import annotations

import logging
import os
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Dict, Optional, Tuple, Union

_project_root = str(Path(__file__).resolve().parent.parent)
if _project_root not in sys.path:
    sys.path.insert(0, _project_root)

import cv2
import numpy as np
from PIL import Image, ImageOps, UnidentifiedImageError

from backend.config import PreprocessingConfig

logger = logging.getLogger("sketch2shape.preprocessing")


@dataclass
class ValidationResult:
    """Represents the outcome of processed image validation."""

    is_valid: bool
    width: int
    height: int
    channels: int
    min_pixel: float
    max_pixel: float
    mean_pixel: float
    std_pixel: float
    message: str
    metadata: Dict[str, Any]


def validate_processed_image(
    image_path: Union[str, Path],
    expected_size: Tuple[int, int],
    expected_channels: int = 3,
) -> ValidationResult:
    """Validate that the processed image meets model-ready specifications.

    Args:
        image_path: Path to the image file to validate.
        expected_size: Expected (width, height) tuple.
        expected_channels: Expected channel count (3 for RGB, 1 for Grayscale).

    Returns:
        ValidationResult containing validation status and image statistics.

    Raises:
        ValueError: If image fails critical validation checks.
        FileNotFoundError: If image file does not exist.
    """
    path = Path(image_path)
    if not path.exists():
        raise FileNotFoundError(f"Image not found at {path}")

    if path.stat().st_size == 0:
        raise ValueError(f"Image file at {path} is empty (0 bytes)")

    # Read image using OpenCV
    if expected_channels == 1:
        img = cv2.imread(str(path), cv2.IMREAD_GRAYSCALE)
    else:
        img = cv2.imread(str(path), cv2.IMREAD_COLOR)

    if img is None:
        raise ValueError(f"Failed to decode image at {path}. File may be corrupted.")

    # Determine dimensions and channels
    if img.ndim == 2:
        h, w = img.shape
        channels = 1
    elif img.ndim == 3:
        h, w, channels = img.shape
    else:
        raise ValueError(f"Unexpected image array shape: {img.shape}")

    expected_w, expected_h = expected_size
    if (w, h) != (expected_w, expected_h):
        raise ValueError(
            f"Image dimensions ({w}, {h}) do not match expected size ({expected_w}, {expected_h})"
        )

    if channels != expected_channels:
        raise ValueError(
            f"Image channels ({channels}) do not match expected count ({expected_channels})"
        )

    min_val = float(np.min(img))
    max_val = float(np.max(img))
    mean_val = float(np.mean(img))
    std_val = float(np.std(img))

    # Check for completely blank / degenerate image
    if std_val < 1e-3:
        raise ValueError(
            f"Processed image is degenerate (uniform color, standard deviation {std_val:.4f})."
        )

    return ValidationResult(
        is_valid=True,
        width=w,
        height=h,
        channels=channels,
        min_pixel=min_val,
        max_pixel=max_val,
        mean_pixel=mean_val,
        std_pixel=std_val,
        message="Image successfully validated for 3D model input.",
        metadata={
            "path": str(path),
            "file_size_bytes": path.stat().st_size,
        },
    )


def load_image_safely(
    input_path: Union[str, Path],
    background_color: Tuple[int, int, int] = (255, 255, 255),
) -> np.ndarray:
    """Safely loads an input image, handling formats, transparency, and modes.

    Supports PNG, JPEG, WEBP, BMP, etc. Properly composites RGBA / palette
    images over a clean background to eliminate transparent halo artifacts.

    Args:
        input_path: Path to the input sketch image.
        background_color: RGB tuple to use as the background for alpha blending.

    Returns:
        RGB numpy array with dtype=np.uint8, shape (H, W, 3).

    Raises:
        FileNotFoundError: If the input file does not exist.
        ValueError: If the file is empty, corrupted, or unsupported.
    """
    path = Path(input_path)
    if not path.exists():
        raise FileNotFoundError(f"Input image does not exist: {path}")

    if not path.is_file():
        raise ValueError(f"Input path is not a file: {path}")

    if path.stat().st_size == 0:
        raise ValueError(f"Input image file is empty (0 bytes): {path}")

    try:
        with Image.open(path) as pil_img:
            # Handle EXIF orientation if present
            pil_img = ImageOps.exif_transpose(pil_img) or pil_img

            # Handle alpha transparency / RGBA compositing
            if pil_img.mode in ("RGBA", "LA") or (
                pil_img.mode == "P" and "transparency" in pil_img.info
            ):
                rgba_img = pil_img.convert("RGBA")
                bg_img = Image.new("RGB", rgba_img.size, background_color)
                # Alpha composite
                bg_img.paste(rgba_img, mask=rgba_img.split()[3])
                rgb_img = bg_img
            elif pil_img.mode == "L":
                # Convert grayscale to 3-channel RGB
                rgb_img = pil_img.convert("RGB")
            elif pil_img.mode != "RGB":
                rgb_img = pil_img.convert("RGB")
            else:
                rgb_img = pil_img.copy()

            img_np = np.array(rgb_img, dtype=np.uint8)

    except (UnidentifiedImageError, OSError, ValueError) as err:
        raise ValueError(f"Invalid or corrupted image file: {path}. Error: {err}") from err

    if img_np is None or img_np.size == 0:
        raise ValueError(f"Decoded image contains no pixel data: {path}")

    return img_np


def normalize_background_polarity(
    image: np.ndarray,
    auto_invert: bool = True,
    dark_threshold: float = 127.0,
) -> np.ndarray:
    """Detects chalkboard/dark backgrounds and inverts to dark-strokes-on-white.

    3D reconstruction models like InstantMesh expect an object/sketch placed
    on a clean white or light background. If a user sketches with white chalk
    on a black background, this function inverts it so the strokes are dark
    on a white background.

    Args:
        image: RGB image numpy array (H, W, 3).
        auto_invert: Whether to perform automatic detection and inversion.
        dark_threshold: Luminance threshold below which background is considered dark.

    Returns:
        RGB image numpy array with consistent polarity.
    """
    if not auto_invert:
        return image

    h, w = image.shape[:2]
    # Sample perimeter/border pixels to estimate background luminance
    border_pixels = []
    margin = max(1, min(h, w) // 20)  # 5% margin
    border_pixels.append(image[:margin, :, :])
    border_pixels.append(image[-margin:, :, :])
    border_pixels.append(image[:, :margin, :])
    border_pixels.append(image[:, -margin:, :])

    sampled = np.concatenate([bp.reshape(-1, 3) for bp in border_pixels], axis=0)
    # Relative luminance Y = 0.299 R + 0.587 G + 0.114 B
    luminance = 0.299 * sampled[:, 0] + 0.587 * sampled[:, 1] + 0.114 * sampled[:, 2]
    mean_bg_lum = np.mean(luminance)

    if mean_bg_lum < dark_threshold:
        logger.info(
            "Detected dark background (mean border lum: %.1f). Inverting for 3D model compatibility.",
            mean_bg_lum,
        )
        return 255 - image

    return image


def resize_and_pad(
    image: np.ndarray,
    target_size: Tuple[int, int],
    preserve_aspect_ratio: bool = True,
    padding_ratio: float = 0.1,
    background_color: Tuple[int, int, int] = (255, 255, 255),
) -> np.ndarray:
    """Resizes the sketch to target dimensions, preserving aspect ratio and centering.

    Places the sketch onto a square or target-sized canvas with configurable safety
    padding to avoid cutting off perimeter strokes during multi-view 3D reconstruction.

    Args:
        image: RGB image numpy array (H, W, 3).
        target_size: Target (width, height) tuple.
        preserve_aspect_ratio: If True, scales uniformly and pads the canvas.
        padding_ratio: Proportion of target canvas to keep as padding margin.
        background_color: RGB tuple for the padded canvas area.

    Returns:
        RGB numpy array of shape (target_height, target_width, 3).
    """
    target_w, target_h = target_size
    orig_h, orig_w = image.shape[:2]

    if not preserve_aspect_ratio:
        interp = cv2.INTER_AREA if (orig_w > target_w or orig_h > target_h) else cv2.INTER_CUBIC
        return cv2.resize(image, (target_w, target_h), interpolation=interp)

    # Compute bounding region inside the canvas honoring padding margin
    pad_w = int(target_w * padding_ratio)
    pad_h = int(target_h * padding_ratio)
    avail_w = max(1, target_w - (2 * pad_w))
    avail_h = max(1, target_h - (2 * pad_h))

    # Scale factor
    scale = min(avail_w / orig_w, avail_h / orig_h)
    new_w = max(1, int(round(orig_w * scale)))
    new_h = max(1, int(round(orig_h * scale)))

    # Choose interpolation method
    interp = cv2.INTER_AREA if scale < 1.0 else cv2.INTER_CUBIC
    resized_content = cv2.resize(image, (new_w, new_h), interpolation=interp)

    # Create canvas filled with background color
    canvas = np.full((target_h, target_w, 3), background_color, dtype=np.uint8)

    # Center placement
    offset_x = (target_w - new_w) // 2
    offset_y = (target_h - new_h) // 2

    canvas[offset_y : offset_y + new_h, offset_x : offset_x + new_w] = resized_content
    return canvas


def enhance_contrast(
    image: np.ndarray,
    method: str = "clahe",
    clip_limit: float = 1.5,
    grid_size: Tuple[int, int] = (8, 8),
) -> np.ndarray:
    """Conservatively enhances sketch contrast without blowing out highlights or losing faint strokes.

    Applies CLAHE on the Lightness channel of the CIELAB color space, preserving hue and
    original line geometry.

    Args:
        image: RGB image numpy array (H, W, 3).
        method: "clahe", "linear_stretch", or "none".
        clip_limit: CLAHE clip limit (conservative: 1.5 - 2.0).
        grid_size: Tile grid size for CLAHE.

    Returns:
        Contrast-enhanced RGB numpy array.
    """
    if method == "none" or not method:
        return image

    if method == "clahe":
        # Convert RGB to CIELAB
        lab = cv2.cvtColor(image, cv2.COLOR_RGB2LAB)
        l_channel, a_channel, b_channel = cv2.split(lab)

        # Apply CLAHE only on L channel
        clahe = cv2.createCLAHE(clipLimit=clip_limit, tileGridSize=grid_size)
        enhanced_l = clahe.apply(l_channel)

        # Merge and convert back to RGB
        enhanced_lab = cv2.merge([enhanced_l, a_channel, b_channel])
        return cv2.cvtColor(enhanced_lab, cv2.COLOR_LAB2RGB)

    if method == "linear_stretch":
        # Conservative percentile stretch (1st to 99th percentile)
        p1, p99 = np.percentile(image, (1, 99))
        if p99 > p1:
            stretched = np.clip((image.astype(np.float32) - p1) * (255.0 / (p99 - p1)), 0, 255)
            return stretched.astype(np.uint8)

    return image


def reduce_noise(
    image: np.ndarray,
    filter_type: str = "bilateral",
    bilateral_d: int = 5,
    bilateral_sigma_color: float = 25.0,
    bilateral_sigma_space: float = 25.0,
    gaussian_ksize: Tuple[int, int] = (3, 3),
    gaussian_sigma: float = 0.5,
    median_ksize: int = 3,
) -> np.ndarray:
    """Applies edge-preserving noise reduction to smooth background noise while keeping thin strokes crisp.

    Args:
        image: RGB image numpy array (H, W, 3).
        filter_type: "bilateral" (recommended), "gaussian", "median", or "none".
        bilateral_d: Neighborhood diameter for bilateral filter.
        bilateral_sigma_color: Color space sigma for bilateral filter.
        bilateral_sigma_space: Coordinate space sigma for bilateral filter.
        gaussian_ksize: Kernel size for Gaussian blur.
        gaussian_sigma: Gaussian sigma.
        median_ksize: Aperture size for median filter.

    Returns:
        Denoised RGB numpy array.
    """
    if filter_type == "none" or not filter_type:
        return image

    if filter_type == "bilateral":
        # Bilateral filter operates on BGR/RGB natively
        # Smooths flat regions (paper grain) while respecting gradient edges
        return cv2.bilateralFilter(
            image,
            d=bilateral_d,
            sigmaColor=bilateral_sigma_color,
            sigmaSpace=bilateral_sigma_space,
        )

    if filter_type == "gaussian":
        return cv2.GaussianBlur(image, gaussian_ksize, gaussian_sigma)

    if filter_type == "median":
        ksize = median_ksize if (median_ksize % 2 == 1) else (median_ksize + 1)
        return cv2.medianBlur(image, ksize)

    return image


def apply_optional_threshold(
    image: np.ndarray,
    threshold_type: str = "otsu",
) -> np.ndarray:
    """Applies optional binarization thresholding if explicitly enabled."""
    gray = cv2.cvtColor(image, cv2.COLOR_RGB2GRAY)
    if threshold_type == "adaptive":
        bin_img = cv2.adaptiveThreshold(
            gray, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 11, 2
        )
    else:  # otsu
        _, bin_img = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    # Reconvert to 3-channel RGB
    return cv2.cvtColor(bin_img, cv2.COLOR_GRAY2RGB)


def extract_diagnostic_edges(image: np.ndarray) -> np.ndarray:
    """Generates an optional diagnostic Canny edge map for inspection."""
    gray = cv2.cvtColor(image, cv2.COLOR_RGB2GRAY)
    edges = cv2.Canny(gray, threshold1=50, threshold2=150)
    return cv2.cvtColor(edges, cv2.COLOR_GRAY2RGB)


def preprocess_sketch(
    input_path: str,
    output_path: str,
    target_size: Optional[Union[Tuple[int, int], int]] = None,
    config: Optional[PreprocessingConfig] = None,
    debug: Optional[bool] = None,
) -> str:
    """Main preprocessing entry point for hand-drawn sketches.

    Transforms uploaded sketches of varying resolutions, colors, and formats
    into clean, centered, aspect-ratio preserved, model-ready images for 3D
    reconstruction models like InstantMesh.

    Pipeline stages:
        1. Safe loading and format/transparency decoding
        2. Polarity normalization (chalkboard/dark background check)
        3. Aspect-ratio preserving resize and canvas padding
        4. Conservative CLAHE contrast enhancement
        5. Edge-preserving bilateral denoising
        6. Optional thresholding/edge diagnostics
        7. Validation and atomic output writing
        8. Intermediate debug image export (if debug enabled)

    Args:
        input_path: Path to the input sketch image.
        output_path: Destination path for the processed model-ready image.
        target_size: Optional target size (w, h) or int (size, size). Overrides config.
        config: Optional PreprocessingConfig instance. Uses sensible defaults if None.
        debug: Optional flag to enable debug intermediate image saving. Overrides config.

    Returns:
        The resolved output_path string upon success.

    Raises:
        FileNotFoundError: If input_path does not exist.
        ValueError: If image is empty, invalid, corrupted, or fails validation.
    """
    cfg = config or PreprocessingConfig()

    # Allow target_size override
    if target_size is not None:
        if isinstance(target_size, int):
            target_dimensions = (target_size, target_size)
        elif isinstance(target_size, (tuple, list)) and len(target_size) == 2:
            target_dimensions = (int(target_size[0]), int(target_size[1]))
        else:
            raise ValueError(f"Invalid target_size format: {target_size}. Expected (w, h) or int.")
    else:
        target_dimensions = cfg.target_size

    is_debug = debug if debug is not None else cfg.debug

    # Prevent accidental overwriting of the source image
    in_p = Path(input_path).resolve()
    out_p = Path(output_path).resolve()
    if in_p == out_p:
        raise ValueError("output_path must not be identical to input_path (preserves original sketch)")

    out_p.parent.mkdir(parents=True, exist_ok=True)

    # Stage 1: Safe image loading with RGBA alpha compositing
    original_rgb = load_image_safely(in_p, background_color=cfg.background_color)

    # Stage 2: Polarity normalization (detect white-on-black vs black-on-white)
    normalized_rgb = normalize_background_polarity(
        original_rgb,
        auto_invert=cfg.auto_invert_dark_background,
    )

    # Stage 3: Aspect-ratio preserving resize and canvas padding
    resized_rgb = resize_and_pad(
        normalized_rgb,
        target_size=target_dimensions,
        preserve_aspect_ratio=cfg.preserve_aspect_ratio,
        padding_ratio=cfg.padding_ratio,
        background_color=cfg.background_color,
    )

    # Stage 4: Conservative contrast enhancement
    if cfg.enable_contrast_enhancement:
        contrast_rgb = enhance_contrast(
            resized_rgb,
            method=cfg.contrast_method,
            clip_limit=cfg.clahe_clip_limit,
            grid_size=cfg.clahe_grid_size,
        )
    else:
        contrast_rgb = resized_rgb.copy()

    # Stage 5: Edge-preserving noise reduction
    if cfg.enable_noise_reduction:
        denoised_rgb = reduce_noise(
            contrast_rgb,
            filter_type=cfg.noise_filter_type,
            bilateral_d=cfg.bilateral_d,
            bilateral_sigma_color=cfg.bilateral_sigma_color,
            bilateral_sigma_space=cfg.bilateral_sigma_space,
            gaussian_ksize=cfg.gaussian_ksize,
            gaussian_sigma=cfg.gaussian_sigma,
            median_ksize=cfg.median_ksize,
        )
    else:
        denoised_rgb = contrast_rgb.copy()

    # Stage 6: Optional thresholding / color mode conversion
    final_img = denoised_rgb
    if cfg.apply_thresholding:
        final_img = apply_optional_threshold(final_img, threshold_type=cfg.threshold_type)

    if cfg.color_mode.upper() == "GRAY":
        final_img = cv2.cvtColor(final_img, cv2.COLOR_RGB2GRAY)
        expected_channels = 1
    else:
        expected_channels = 3

    # Stage 7: Save final image
    # Note: cv2.imwrite expects BGR for 3-channel images
    if expected_channels == 3:
        save_array = cv2.cvtColor(final_img, cv2.COLOR_RGB2BGR)
    else:
        save_array = final_img

    success = cv2.imwrite(str(out_p), save_array)
    if not success:
        # Cross-platform fallback for Windows paths with unicode or spaces
        is_success, buf = cv2.imencode(out_p.suffix or ".png", save_array)
        if is_success:
            out_p.write_bytes(buf.tobytes())
            success = True
        else:
            raise ValueError(f"Failed to write processed image to {out_p}")

    # Stage 8: Validate output image
    validate_processed_image(
        image_path=out_p,
        expected_size=target_dimensions,
        expected_channels=expected_channels,
    )

    # Stage 9: Debug intermediate outputs
    if is_debug:
        debug_directory = Path(cfg.debug_dir) if cfg.debug_dir else out_p.parent / "debug"
        debug_directory.mkdir(parents=True, exist_ok=True)

        cv2.imwrite(str(debug_directory / "original.png"), cv2.cvtColor(original_rgb, cv2.COLOR_RGB2BGR))
        cv2.imwrite(str(debug_directory / "resized.png"), cv2.cvtColor(resized_rgb, cv2.COLOR_RGB2BGR))
        cv2.imwrite(str(debug_directory / "contrast.png"), cv2.cvtColor(contrast_rgb, cv2.COLOR_RGB2BGR))
        cv2.imwrite(str(debug_directory / "denoised.png"), cv2.cvtColor(denoised_rgb, cv2.COLOR_RGB2BGR))
        cv2.imwrite(str(debug_directory / "final.png"), save_array)

        if cfg.generate_diagnostic_edges:
            edges = extract_diagnostic_edges(denoised_rgb)
            cv2.imwrite(str(debug_directory / "diagnostic_edges.png"), cv2.cvtColor(edges, cv2.COLOR_RGB2BGR))

        logger.info("Saved intermediate debug images to %s", debug_directory)

    return str(out_p)
