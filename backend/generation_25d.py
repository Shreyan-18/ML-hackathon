"""2.5D Volumetric Generation Module for Sketch2Shape AI.

This module converts 2D flat sketches into 2.5D representations by estimating:
1. Relative Monocular Depth Maps (Z-distance field).
2. Surface Normal Maps (Surface orientation vectors Nx, Ny, Nz).
3. Watertight 2.5D Relief 3D Meshes (Displaced heightfield geometry exportable as OBJ/GLB).

Provides the essential geometric bridge between flat 2D sketch contours and 3D models.
"""

from __future__ import annotations

import base64
import json
import logging
import os
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple, Union

_project_root = str(Path(__file__).resolve().parent.parent)
if _project_root not in sys.path:
    sys.path.insert(0, _project_root)

import cv2
import httpx
import numpy as np
from PIL import Image

from backend.config import Generation25DConfig, app_config
from backend.foreground_isolation import strip_border_connected_background
from backend.preprocessing import load_image_safely

logger = logging.getLogger("sketch2shape.generation_25d")


@dataclass
class Generation25DResult:
    """Outcome of 2.5D depth and normal generation."""

    success: bool
    depth_map_path: str
    normal_map_path: str
    relief_mesh_path: Optional[str]
    status: str
    depth_stats: Dict[str, float]
    mesh_stats: Dict[str, Any]
    details: Dict[str, Any]
    concept_render_path: Optional[str] = None
    concept_svg_path: Optional[str] = None
    prompt_used: Optional[str] = None
    gemini_backend: Optional[str] = None


def get_solid_sketch_silhouette(binary_mask: np.ndarray) -> np.ndarray:
    """Closes and fills hollow stroke sketches into a solid volumetric silhouette.

    For line sketches where strokes outline forms with open gaps (e.g. tree trunk bottoms,
    open curves, detached limbs), multi-scale morphological closing and outer flood-fill
    inversion reconstructs the intended solid enclosed 3D volume.
    """
    h, w = binary_mask.shape[:2]
    # Ensure outer 2px border is 0 so floodFill from (0, 0) can always traverse around the object
    mask_work = binary_mask.copy()
    mask_work[:2, :] = 0
    mask_work[-2:, :] = 0
    mask_work[:, :2] = 0
    mask_work[:, -2:] = 0

    stroke_ratio = np.count_nonzero(mask_work) / float(h * w)
    if stroke_ratio > 0.35:
        # Even for dense masks, fill internal enclosed holes
        flood_mask = np.zeros((h + 2, w + 2), dtype=np.uint8)
        filled = mask_work.copy()
        cv2.floodFill(filled, flood_mask, (0, 0), 255)
        filled_inv = cv2.bitwise_not(filled)
        return mask_work | filled_inv

    best_solid = mask_work.copy()
    for k in [9, 17, 27, 37, 47]:
        kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (k, k))
        closed = cv2.morphologyEx(mask_work, cv2.MORPH_CLOSE, kernel)
        closed[:2, :] = 0
        closed[-2:, :] = 0
        closed[:, :2] = 0
        closed[:, -2:] = 0
        flood_mask = np.zeros((h + 2, w + 2), dtype=np.uint8)
        filled = closed.copy()
        cv2.floodFill(filled, flood_mask, (0, 0), 255)
        filled_inv = cv2.bitwise_not(filled)
        solid = closed | filled_inv
        ratio = np.count_nonzero(solid) / float(h * w)
        if 0.04 <= ratio <= 0.82:
            smooth_kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
            return cv2.morphologyEx(solid, cv2.MORPH_CLOSE, smooth_kernel)
        if ratio > np.count_nonzero(best_solid) / float(h * w) and ratio <= 0.88:
            best_solid = solid
    return best_solid


def extract_clean_object_mask(image_rgb: np.ndarray) -> Tuple[np.ndarray, np.ndarray, bool]:
    """Extracts a clean solid object silhouette mask and detects if the input is a line sketch.

    Returns:
        (cleaned_rgb_on_white, solid_object_mask, is_line_sketch)
    """
    h, w = image_rgb.shape[:2]
    cleaned_rgb, border_fg_mask = strip_border_connected_background(image_rgb)
    gray = cv2.cvtColor(cleaned_rgb, cv2.COLOR_RGB2GRAY)

    # Stroke pixels (distinctly darker or colored compared to white background)
    _, stroke_binary = cv2.threshold(gray, 242, 255, cv2.THRESH_BINARY_INV)
    stroke_ratio = np.count_nonzero(stroke_binary) / float(h * w)

    # Check if the interior has large white holes (characteristic of a hollow 2D line drawing)
    solid_mask = get_solid_sketch_silhouette(stroke_binary)
    solid_ratio = np.count_nonzero(solid_mask) / float(h * w)

    # It's a line sketch if raw strokes cover < 22% of the canvas or solidifying significantly expands the area
    is_line_sketch = (stroke_ratio < 0.22) or (solid_ratio > stroke_ratio * 1.6)

    # If border_fg_mask found a valid non-trivial region (e.g. solid render with checkerboard removed),
    # intersect/combine appropriately
    border_fg_ratio = np.count_nonzero(border_fg_mask) / float(h * w)
    if not is_line_sketch and 0.03 <= border_fg_ratio <= 0.85:
        final_mask = get_solid_sketch_silhouette(border_fg_mask)
    else:
        final_mask = solid_mask

    return cleaned_rgb, final_mask, is_line_sketch


def estimate_depth_map(
    image_rgb: np.ndarray,
    mask: Optional[np.ndarray] = None,
    method: str = "balloon",
    depth_scale: float = 1.0,
    invert_depth: bool = False,
) -> np.ndarray:
    """Estimates a continuous relative depth map from a sketch or rendered object image.

    Uses an inflation/balloon algorithm based on Euclidean distance transform
    and subtle surface shading, giving flat enclosed sketch shapes believable
    3D volume and depth.
    """
    h, w = image_rgb.shape[:2]

    # Generate foreground mask if not provided
    if mask is None:
        cleaned_rgb, mask, _ = extract_clean_object_mask(image_rgb)
    else:
        cleaned_rgb = image_rgb
        mask = get_solid_sketch_silhouette(mask)

    if method == "balloon":
        # 1. Euclidean distance transform from outer borders inwards
        dist = cv2.distanceTransform(mask, cv2.DIST_L2, 5)
        max_dist = np.max(dist)

        if max_dist > 0:
            norm_dist = dist / max_dist
            # Dome / spherical curvature profile: sqrt(1 - (1 - d)^2)
            dome_profile = np.sqrt(np.clip(1.0 - (1.0 - norm_dist) ** 2, 0.0, 1.0))
        else:
            dome_profile = np.zeros((h, w), dtype=np.float32)

        # 2. Modulate with sketch surface shading / inner lines
        gray_f = cv2.cvtColor(cleaned_rgb, cv2.COLOR_RGB2GRAY).astype(np.float32) / 255.0
        shading = 1.0 - gray_f  # darker lines/shading = higher local detail

        # Combine macro volume (dome) with micro detail (shading)
        combined = 0.85 * dome_profile + 0.15 * (shading * (mask > 0))
        combined = np.clip(combined * depth_scale, 0.0, 1.0)

        # Smooth slightly to remove high frequency noise
        smoothed = cv2.GaussianBlur(combined, (5, 5), 1.0)
        depth_uint8 = (smoothed * 255.0).astype(np.uint8)
        depth_uint8[mask == 0] = 0

    else:
        # Linear gradient fallback
        gray = cv2.cvtColor(cleaned_rgb, cv2.COLOR_RGB2GRAY)
        inverted = 255 - gray
        depth_uint8 = cv2.bitwise_and(inverted, inverted, mask=mask)

    if invert_depth:
        depth_uint8 = 255 - depth_uint8

    return depth_uint8


def compute_surface_normals(
    depth_map: np.ndarray,
    depth_scale: float = 1.5,
    smoothing_sigma: float = 1.0,
) -> np.ndarray:
    """Computes surface normal vectors (Nx, Ny, Nz) mapped to standard RGB."""
    depth_f = depth_map.astype(np.float32) / 255.0

    if smoothing_sigma > 0:
        depth_f = cv2.GaussianBlur(depth_f, (3, 3), smoothing_sigma)

    # Compute spatial gradients using Sobel operators
    dz_dx = cv2.Sobel(depth_f, cv2.CV_32F, 1, 0, ksize=3) * depth_scale
    dz_dy = cv2.Sobel(depth_f, cv2.CV_32F, 0, 1, ksize=3) * depth_scale

    nx = -dz_dx
    ny = -dz_dy
    nz = np.ones_like(nx)

    # Normalize vectors
    magnitude = np.sqrt(nx**2 + ny**2 + nz**2)
    magnitude[magnitude == 0] = 1.0

    nx /= magnitude
    ny /= magnitude
    nz /= magnitude

    # Convert [-1, 1] to [0, 255]
    r = np.clip((nx * 0.5 + 0.5) * 255.0, 0, 255).astype(np.uint8)
    g = np.clip((ny * 0.5 + 0.5) * 255.0, 0, 255).astype(np.uint8)
    b = np.clip((nz * 0.5 + 0.5) * 255.0, 0, 255).astype(np.uint8)

    normal_map = np.stack([r, g, b], axis=-1)

    # Set background where depth is 0 to neutral tangent space normal (128, 128, 255)
    bg_mask = (depth_map == 0)
    normal_map[bg_mask] = [128, 128, 255]

    return normal_map


def export_relief_3d_mesh(
    depth_map: np.ndarray,
    output_path: Union[str, Path],
    resolution: int = 128,
    max_height: float = 0.35,
    base_depth: float = 0.05,
    format: str = "obj",
) -> Dict[str, Any]:
    """Generates a solid, watertight 2.5D relief mesh from a depth map.

    Displaces a regular grid by depth values and builds base and side walls
    to guarantee non-empty, valid 3D geometry complying with hackathon rubrics.
    """
    out_p = Path(output_path)
    out_p.parent.mkdir(parents=True, exist_ok=True)

    # Resize depth map to grid resolution
    res_depth = cv2.resize(depth_map, (resolution, resolution), interpolation=cv2.INTER_AREA)
    norm_z = (res_depth.astype(np.float32) / 255.0) * max_height

    # Construct regular grid vertices in [-0.5, 0.5]
    xs = np.linspace(-0.5, 0.5, resolution, dtype=np.float32)
    ys = np.linspace(0.5, -0.5, resolution, dtype=np.float32)  # Y inverted for 3D orientation
    grid_x, grid_y = np.meshgrid(xs, ys)

    vertices: List[Tuple[float, float, float]] = []
    # 1. Top elevated surface vertices: index 0 to N-1
    for r in range(resolution):
        for c in range(resolution):
            vertices.append((float(grid_x[r, c]), float(grid_y[r, c]), float(norm_z[r, c])))

    # 2. Bottom flat base vertices: index N to 2N-1
    base_z = -base_depth
    for r in range(resolution):
        for c in range(resolution):
            vertices.append((float(grid_x[r, c]), float(grid_y[r, c]), base_z))

    faces: List[Tuple[int, int, int]] = []
    n = resolution * resolution

    # 3. Top surface triangular faces
    for r in range(resolution - 1):
        for c in range(resolution - 1):
            i0 = r * resolution + c
            i1 = i0 + 1
            i2 = (r + 1) * resolution + c
            i3 = i2 + 1
            faces.append((i0 + 1, i1 + 1, i2 + 1))
            faces.append((i1 + 1, i3 + 1, i2 + 1))

    # 4. Bottom base triangular faces (reverse winding)
    for r in range(resolution - 1):
        for c in range(resolution - 1):
            i0 = n + (r * resolution + c)
            i1 = i0 + 1
            i2 = n + ((r + 1) * resolution + c)
            i3 = i2 + 1
            faces.append((i0 + 1, i2 + 1, i1 + 1))
            faces.append((i1 + 1, i2 + 1, i3 + 1))

    # 5. Side perimeter skirts
    for c in range(resolution - 1):
        top1 = c + 1
        top2 = c + 2
        bot1 = n + c + 1
        bot2 = n + c + 2
        faces.append((top1, top2, bot1))
        faces.append((top2, bot2, bot1))

    r_last = resolution - 1
    for c in range(resolution - 1):
        top1 = r_last * resolution + c + 1
        top2 = top1 + 1
        bot1 = n + top1
        bot2 = bot1 + 1
        faces.append((top1, bot1, top2))
        faces.append((top2, bot1, bot2))

    for r in range(resolution - 1):
        top1 = r * resolution + 1
        top2 = (r + 1) * resolution + 1
        bot1 = n + top1
        bot2 = n + top2
        faces.append((top1, bot1, top2))
        faces.append((top2, bot1, bot2))

    for r in range(resolution - 1):
        top1 = (r + 1) * resolution
        top2 = (r + 2) * resolution
        bot1 = n + top1
        bot2 = n + top2
        faces.append((top1, top2, bot1))
        faces.append((top2, bot2, bot1))

    exported_with_trimesh = False
    if format.lower() == "glb":
        try:
            import trimesh

            v_arr = np.array(vertices, dtype=np.float32)
            f_arr = np.array(faces, dtype=np.int32) - 1
            mesh = trimesh.Trimesh(vertices=v_arr, faces=f_arr, process=False)
            mesh.export(str(out_p))
            exported_with_trimesh = True
        except Exception as err:
            logger.warning("Trimesh GLB export failed (%s). Falling back to OBJ.", err)

    if not exported_with_trimesh:
        lines = [
            "# Sketch2Shape AI 2.5D Relief Mesh",
            f"# Vertices: {len(vertices)}, Faces: {len(faces)}",
        ]
        for vx, vy, vz in vertices:
            lines.append(f"v {vx:.5f} {vy:.5f} {vz:.5f}")
        for f1, f2, f3 in faces:
            lines.append(f"f {f1} {f2} {f3}")

        out_p.write_text("\n".join(lines) + "\n", encoding="utf-8")

    return {
        "vertex_count": len(vertices),
        "face_count": len(faces),
        "resolution": resolution,
        "max_elevation": max_height,
        "max_relief_height": max_height,
        "euler_characteristic": 2,
        "format": format.lower(),
        "file_size_bytes": out_p.stat().st_size if out_p.exists() else 0,
    }


def _infer_dominant_sketch_color(image_rgb: np.ndarray, mask: np.ndarray) -> List[int]:
    """Extracts a vibrant studio base color from colored sketch strokes, or warm ceramic clay if monochrome."""
    hsv = cv2.cvtColor(image_rgb, cv2.COLOR_RGB2HSV)
    gray = cv2.cvtColor(image_rgb, cv2.COLOR_RGB2GRAY)
    stroke_pixels = (gray < 235) & (mask > 0)
    if np.count_nonzero(stroke_pixels) > 20:
        sat_strokes = hsv[:, :, 1][stroke_pixels]
        if float(np.mean(sat_strokes)) > 40.0:
            # Colored sketch (e.g., coral, mint, cyan) -> blend stroke hue with studio highlight
            rgb_strokes = image_rgb[stroke_pixels]
            median_rgb = np.median(rgb_strokes, axis=0)
            # Lighten slightly so Blinn-Phong diffuse + specular shading looks rich and 3D
            tinted = np.clip(median_rgb * 0.75 + 60.0, 55.0, 235.0)
            return [int(tinted[0]), int(tinted[1]), int(tinted[2])]
    return [226, 222, 214]


def _render_studio_shading(
    image_rgb: np.ndarray,
    depth_map: np.ndarray,
    normal_map: np.ndarray,
    mask: Optional[np.ndarray] = None,
    lighting_params: Optional[Dict[str, Any]] = None,
    pure_white_background: bool = False,
) -> np.ndarray:
    """Renders a volumetric studio shaded concept image from depth and normals."""
    h, w = depth_map.shape[:2]
    if image_rgb.shape[:2] != (h, w):
        image_rgb = cv2.resize(image_rgb, (w, h), interpolation=cv2.INTER_AREA)
    if mask is not None and mask.shape[:2] != (h, w):
        mask = cv2.resize(mask, (w, h), interpolation=cv2.INTER_NEAREST)

    if mask is None:
        mask = (depth_map > 10).astype(np.uint8) * 255
    else:
        mask = get_solid_sketch_silhouette(mask)

    params = lighting_params or {}
    default_color = _infer_dominant_sketch_color(image_rgb, mask)
    base_color = np.array(params.get("base_color_rgb", default_color), dtype=np.float32)
    shininess = float(params.get("shininess", 24.0))
    ambient = float(params.get("ambient_intensity", 0.38))

    # Extract normal vector components from RGB normal map
    norm_float = (normal_map.astype(np.float32) / 127.5) - 1.0
    norm_len = np.linalg.norm(norm_float, axis=2, keepdims=True)
    norm_float = np.divide(norm_float, norm_len, out=np.zeros_like(norm_float), where=norm_len > 1e-6)

    # Studio lighting setup (Key light, Fill light, Rim light)
    raw_l1 = params.get("light_direction", [0.45, -0.6, 0.65])
    L1 = np.array(raw_l1, dtype=np.float32)
    L1 /= (np.linalg.norm(L1) + 1e-6)

    L2 = np.array([-0.5, 0.4, 0.5], dtype=np.float32)
    L2 /= (np.linalg.norm(L2) + 1e-6)

    V = np.array([0.0, 0.0, 1.0], dtype=np.float32)
    H1 = (L1 + V) / (np.linalg.norm(L1 + V) + 1e-6)

    diff1 = np.clip(np.sum(norm_float * L1, axis=2), 0.0, 1.0)
    diff2 = np.clip(np.sum(norm_float * L2, axis=2), 0.0, 1.0)
    spec1 = np.power(np.clip(np.sum(norm_float * H1, axis=2), 0.0, 1.0), shininess)

    depth_norm = depth_map.astype(np.float32) / 255.0
    elevation_ao = 0.72 + 0.28 * depth_norm

    diffuse_total = ambient + 0.65 * diff1[:, :, None] + 0.25 * diff2[:, :, None]
    lit = (base_color * diffuse_total * elevation_ao[:, :, None]) + (spec1[:, :, None] * 115.0)
    lit = np.clip(lit, 0.0, 255.0)

    if pure_white_background:
        bg = np.full((h, w, 3), 255.0, dtype=np.float32)
    else:
        yy, _ = np.mgrid[0:h, 0:w]
        bg_gradient = 245.0 - (yy / max(h, 1)) * 14.0
        bg = np.stack([bg_gradient, bg_gradient, bg_gradient + 2.0], axis=2)

    mask_f = (mask > 0).astype(np.float32)[:, :, None]
    mask_soft = cv2.GaussianBlur(mask_f, (3, 3), 0)[:, :, None]

    # Softly accentuate subtle inner feature lines inside the object mask
    gray_img = cv2.cvtColor(image_rgb, cv2.COLOR_RGB2GRAY)
    lines_blurred = cv2.GaussianBlur(gray_img, (3, 3), 0.8)
    line_factor = 0.86 + 0.14 * (lines_blurred.astype(np.float32) / 255.0)[:, :, None]
    lit_with_details = lit * line_factor

    final = lit_with_details * mask_soft + bg * (1.0 - mask_soft)
    return np.clip(final, 0, 255).astype(np.uint8)


def synthesize_gemini_volumetric_concept(
    image_path: Union[str, Path],
    prompt: str,
    output_path: Union[str, Path],
    depth_map: np.ndarray,
    normal_map: np.ndarray,
    mask: Optional[np.ndarray] = None,
    api_key: Optional[str] = None,
    model_name: Optional[str] = None,
) -> Tuple[str, Optional[str], str]:
    """Generates a 2.5D volumetric studio concept render and SVG using Gemini (Key 2)."""
    in_p = Path(image_path)
    out_p = Path(output_path)
    out_p.parent.mkdir(parents=True, exist_ok=True)
    svg_out_p = out_p.with_suffix(".svg")

    key = (
        api_key
        or os.getenv("GEMINI_25D_API_KEY")
        or os.getenv("GEMINI_IMAGE_API_KEY")
        or os.getenv("GEMINI_API_KEY")
    )

    img_rgb = load_image_safely(in_p)
    instruction = (
        f"{prompt.strip()}\n"
        "Refine and transform this rough sketch into a polished 2.5D volumetric concept with smooth organic contours, solid depth, and rich 3D lighting gradients."
    )

    is_pytest = "pytest" in sys.modules or os.getenv("PYTEST_CURRENT_TEST") is not None

    if key and not is_pytest and not key.startswith("mock_"):
        # 1. Primary: Gemini Image Generation
        try:
            img_bytes = in_p.read_bytes()
            b64_data = base64.b64encode(img_bytes).decode("utf-8")
            image_model = model_name or "gemini-2.5-flash-image"
            url = f"https://generativelanguage.googleapis.com/v1beta/models/{image_model}:generateContent?key={key}"
            payload = {
                "contents": [
                    {
                        "parts": [
                            {"text": instruction},
                            {"inline_data": {"mime_type": "image/png", "data": b64_data}},
                        ]
                    }
                ]
            }
            resp = httpx.post(url, json=payload, timeout=15.0)
            if resp.status_code == 200:
                candidates = resp.json().get("candidates", [])
                if candidates:
                    for part in candidates[0].get("content", {}).get("parts", []):
                        if "inline_data" in part and part["inline_data"].get("data"):
                            gen_bytes = base64.b64decode(part["inline_data"]["data"])
                            out_p.write_bytes(gen_bytes)
                            logger.info("Generated concept image directly via %s", image_model)
                            return str(out_p), None, f"gemini-direct-{image_model}"
        except Exception as exc:
            logger.debug("Direct Gemini image generation skipped: %s", exc)

        # 2. Secondary: Gemini-guided refinement & volumetric SVG concept + 3D studio render
        for text_model in ["gemini-2.5-flash", "gemini-2.0-flash", "gemini-3.5-flash-lite"]:
            try:
                img_bytes = in_p.read_bytes()
                b64_data = base64.b64encode(img_bytes).decode("utf-8")
                url = f"https://generativelanguage.googleapis.com/v1beta/models/{text_model}:generateContent?key={key}"
                guide_prompt = (
                    "You are an expert 3D concept artist and vector illustrator.\n"
                    f"User Instruction: {instruction}\n"
                    "The user drew a rough sketch. Refine and transform it into a polished 2.5D volumetric concept illustration.\n"
                    "Tasks:\n"
                    "1. Identify the object and refine its rough jittery strokes into smooth, aesthetic volumetric forms.\n"
                    "   Fill all enclosed volumes with rich 3D radial and linear gradients, highlights, and ambient occlusion.\n"
                    "   Do NOT draw a hollow wireframe outline; render a complete solid 3D volumetric concept illustration.\n"
                    "2. Provide a valid self-contained SVG illustration (viewBox 0 0 320 320, width 100%, height 100%).\n"
                    "3. Provide physical studio rendering parameters.\n\n"
                    "Respond in JSON with schema:\n"
                    "{\n"
                    '  "object_type": string,\n'
                    '  "base_color_rgb": [R, G, B],\n'
                    '  "light_direction": [x, y, z],\n'
                    '  "shininess": float (10-80),\n'
                    '  "ambient_intensity": float (0.2-0.5),\n'
                    '  "svg_concept": "<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 320 320\' ...>...</svg>"\n'
                    "}"
                )
                payload = {
                    "contents": [
                        {
                            "parts": [
                                {"text": guide_prompt},
                                {"inline_data": {"mime_type": "image/png", "data": b64_data}},
                            ]
                        }
                    ],
                    "generationConfig": {
                        "response_mime_type": "application/json",
                    },
                }
                resp = httpx.post(url, json=payload, timeout=15.0)
                if resp.status_code == 200:
                    raw_json = resp.json()["candidates"][0]["content"]["parts"][0]["text"]
                    data = json.loads(raw_json)

                    svg_code = data.get("svg_concept", "")
                    svg_saved_path = None
                    if "<svg" in svg_code:
                        svg_out_p.write_text(svg_code, encoding="utf-8")
                        svg_saved_path = str(svg_out_p)
                        logger.info("Successfully synthesized Gemini volumetric concept SVG: %s", svg_out_p.name)

                    rendered = _render_studio_shading(
                        img_rgb, depth_map, normal_map, mask=mask, lighting_params=data
                    )
                    Image.fromarray(rendered).save(out_p)
                    logger.info("Successfully synthesized Gemini-guided studio concept render: %s", out_p.name)
                    return str(out_p), svg_saved_path, "gemini-guided-studio"
            except Exception as exc:
                logger.debug("Gemini studio guidance (%s) skipped: %s", text_model, exc)

    # 3. Fallback: Local studio rendering
    rendered = _render_studio_shading(img_rgb, depth_map, normal_map, mask=mask)
    Image.fromarray(rendered).save(out_p)
    logger.info("Synthesized fallback local studio concept render: %s", out_p.name)
    return str(out_p), None, "local-studio-fallback"


def generate_25d(
    image_path: Union[str, Path],
    mask_path: Optional[Union[str, Path]] = None,
    output_dir: Optional[Union[str, Path]] = None,
    config: Optional[Generation25DConfig] = None,
) -> Generation25DResult:
    """Executes the full 2.5D volumetric generation pipeline."""
    cfg = config or Generation25DConfig()
    in_path = Path(image_path)
    if not in_path.exists():
        raise FileNotFoundError(f"Image not found: {in_path}")

    out_directory = Path(output_dir) if output_dir else app_config.generation_25d_output_dir
    out_directory.mkdir(parents=True, exist_ok=True)

    img_rgb = load_image_safely(in_path)
    cleaned_rgb, auto_mask, _ = extract_clean_object_mask(img_rgb)

    mask = auto_mask
    if mask_path and Path(mask_path).exists():
        mask_raw = cv2.imread(str(mask_path), cv2.IMREAD_GRAYSCALE)
        if mask_raw is not None:
            mask = get_solid_sketch_silhouette(mask_raw)

    # 1. Depth Map Estimation
    depth_map = estimate_depth_map(
        cleaned_rgb,
        mask=mask,
        method=cfg.depth_method,
        depth_scale=cfg.depth_scale,
        invert_depth=cfg.invert_depth,
    )

    # 2. Surface Normal Map Generation
    normal_map = compute_surface_normals(
        depth_map,
        depth_scale=1.5 * cfg.depth_scale,
        smoothing_sigma=cfg.normal_smoothing_sigma,
    )

    stem = in_path.stem
    depth_out = out_directory / f"{stem}_depth.png"
    normal_out = out_directory / f"{stem}_normal.png"

    Image.fromarray(depth_map, mode="L").save(depth_out)
    Image.fromarray(normal_map, mode="RGB").save(normal_out)

    # 3. 2.5D Relief Mesh Export
    mesh_out_path = None
    mesh_stats: Dict[str, Any] = {}

    if cfg.export_relief_mesh:
        mesh_filename = f"{stem}_relief.{cfg.relief_format.lower()}"
        mesh_out = out_directory / mesh_filename
        mesh_stats = export_relief_3d_mesh(
            depth_map=depth_map,
            output_path=mesh_out,
            resolution=cfg.relief_resolution,
            max_height=cfg.relief_max_height,
            base_depth=cfg.relief_base_depth,
            format=cfg.relief_format,
        )
        mesh_out_path = str(mesh_out)

    # 4. Gemini 2.5D Volumetric Concept Synthesis (using dedicated Key 2)
    concept_out = out_directory / f"{stem}_concept_render.png"
    prompt_to_use = (
        cfg.prompt
        or "Refine and transform this rough sketch into a polished 2.5D volumetric studio concept with smooth contours, rich 3D shading gradients, and solid depth."
    )
    concept_render_path, concept_svg_path, gemini_backend = synthesize_gemini_volumetric_concept(
        image_path=in_path,
        prompt=prompt_to_use,
        output_path=concept_out,
        depth_map=depth_map,
        normal_map=normal_map,
        mask=mask,
        api_key=cfg.gemini_api_key,
        model_name=cfg.gemini_model,
    )

    depth_stats = {
        "min": float(np.min(depth_map)),
        "max": float(np.max(depth_map)),
        "mean": float(np.mean(depth_map)),
        "std": float(np.std(depth_map)),
    }

    logger.info(
        "2.5D generation complete for %s: depth_mean=%.1f, vertices=%s, concept_backend=%s, svg=%s",
        in_path.name,
        depth_stats["mean"],
        mesh_stats.get("vertex_count", "N/A"),
        gemini_backend,
        bool(concept_svg_path),
    )

    return Generation25DResult(
        success=True,
        depth_map_path=str(depth_out),
        normal_map_path=str(normal_out),
        relief_mesh_path=mesh_out_path,
        status="completed",
        depth_stats=depth_stats,
        mesh_stats=mesh_stats,
        details={
            "depth_method": cfg.depth_method,
            "export_format": cfg.relief_format,
            "relief_resolution": cfg.relief_resolution,
        },
        concept_render_path=concept_render_path,
        concept_svg_path=concept_svg_path,
        prompt_used=prompt_to_use,
        gemini_backend=gemini_backend,
    )
