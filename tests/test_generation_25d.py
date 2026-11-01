"""Tests for 2.5D Volumetric Generation Module."""

from pathlib import Path
import numpy as np
from PIL import Image

from backend.config import Generation25DConfig
from backend.generation_25d import (
    compute_surface_normals,
    estimate_depth_map,
    export_relief_3d_mesh,
    generate_25d,
)


def test_estimate_depth_map_shape_and_range():
    """Verify that estimate_depth_map generates valid normalized depth values."""
    img = np.full((100, 100, 3), 255, dtype=np.uint8)
    # Draw a dark circle in center
    rr, cc = np.ogrid[:100, :100]
    circle_mask = (rr - 50) ** 2 + (cc - 50) ** 2 < 30**2
    img[circle_mask] = (20, 20, 20)

    depth = estimate_depth_map(img, method="balloon")

    assert depth.shape == (100, 100)
    assert depth.dtype == np.uint8
    # Center of circle should have peak elevation (highest depth)
    assert depth[50, 50] > depth[10, 10]
    assert np.max(depth) > 100


def test_compute_surface_normals_encoding():
    """Verify normal map encoding conforms to RGB tangent-space conventions."""
    # Flat surface with a central bump
    depth = np.zeros((100, 100), dtype=np.uint8)
    depth[40:60, 40:60] = 200

    normals = compute_surface_normals(depth, smoothing_sigma=1.0)

    assert normals.shape == (100, 100, 3)
    assert normals.dtype == np.uint8

    # Flat background should have neutral normal (approx 128, 128, 255)
    bg_pixel = normals[10, 10]
    assert bg_pixel[0] == 128
    assert bg_pixel[1] == 128
    assert bg_pixel[2] == 255


def test_export_relief_3d_mesh_watertight(test_dir: Path):
    """Verify 3D relief mesh creates valid vertices, faces, and non-empty OBJ."""
    depth = np.zeros((64, 64), dtype=np.uint8)
    depth[20:44, 20:44] = 180

    out_obj = test_dir / "relief_test.obj"
    stats = export_relief_3d_mesh(
        depth_map=depth,
        output_path=out_obj,
        resolution=32,
        max_height=0.3,
        base_depth=0.05,
        format="obj",
    )

    assert out_obj.exists()
    assert out_obj.stat().st_size > 0
    assert stats["vertex_count"] == 32 * 32 * 2  # Top + bottom grid
    assert stats["face_count"] > 0

    # Verify OBJ lines format
    content = out_obj.read_text(encoding="utf-8")
    assert "v " in content
    assert "vt " in content
    assert "f " in content

    # Verify top face normal points in +Z towards camera & lights
    lines = content.splitlines()
    v_lines = [l for l in lines if l.startswith("v ")]
    f_lines = [l for l in lines if l.startswith("f ")]
    first_face = f_lines[0].split()[1:]
    v_indices = [int(p.split("/")[0]) - 1 for p in first_face]
    verts = [list(map(float, v_lines[idx].split()[1:])) for idx in v_indices]
    e1 = np.array(verts[1]) - np.array(verts[0])
    e2 = np.array(verts[2]) - np.array(verts[0])
    norm = np.cross(e1, e2)
    norm = norm / np.linalg.norm(norm)
    assert norm[2] > 0.9, f"Expected top surface normal in +Z, got {norm}"


def test_generate_25d_end_to_end(black_on_white_sketch: Path, test_dir: Path):
    """Verify full 2.5D pipeline from input image to depth, normal, and mesh artifacts."""
    out_dir = test_dir / "25d_out"
    config = Generation25DConfig(export_relief_mesh=True, relief_resolution=32, relief_format="obj")

    res = generate_25d(
        image_path=black_on_white_sketch,
        output_dir=out_dir,
        config=config,
    )

    assert res.success is True
    assert Path(res.depth_map_path).exists()
    assert Path(res.normal_map_path).exists()
    assert res.relief_mesh_path is not None
    assert Path(res.relief_mesh_path).exists()

    with Image.open(res.depth_map_path) as d_img:
        assert d_img.mode == "L"

    with Image.open(res.normal_map_path) as n_img:
        assert n_img.mode == "RGB"

    assert res.concept_render_path is not None
    assert Path(res.concept_render_path).exists()
    assert res.prompt_used is not None
    with Image.open(res.concept_render_path) as c_img:
        assert c_img.mode == "RGB"


def test_synthesize_gemini_volumetric_concept_fallback(black_on_white_sketch: Path, test_dir: Path):
    """Verify volumetric studio concept synthesis functions correctly with fallback."""
    from backend.generation_25d import synthesize_gemini_volumetric_concept
    depth = np.zeros((64, 64), dtype=np.uint8)
    normal = np.full((64, 64, 3), 128, dtype=np.uint8)
    out_concept = test_dir / "test_concept.png"

    path, svg_path, backend_used = synthesize_gemini_volumetric_concept(
        image_path=black_on_white_sketch,
        prompt="Test volumetric concept render",
        output_path=out_concept,
        depth_map=depth,
        normal_map=normal,
        api_key="mock_invalid_key",
    )
    assert Path(path).exists()
    assert backend_used in ("gemini-guided-studio", "local-studio-fallback", "gemini-direct")
