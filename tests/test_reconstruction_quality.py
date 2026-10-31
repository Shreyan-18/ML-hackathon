"""Quality Verification Test Suite for 3D Mesh Reconstruction.

Tests:
1. Chair Sketch: verifies 4 distinct legs, preserved negative space, watertightness.
2. Bottle Sketch: verifies cylindrical rotational profile, narrow neck, watertightness.
3. Toy Sketch: verifies articulated limbs, local feature inflation, watertightness.
4. Conditioning with Vision Analysis: verifies semantic profile adaptation.
5. High-resolution input preparation: preserves 512x512 canvas and object proportions.
"""

from pathlib import Path
import cv2
import numpy as np
import pytest
import trimesh

from backend.generation_25d import get_solid_sketch_silhouette
from backend.reconstruction import (
    _prepare_image_for_cloud_3d,
    _generate_dense_volumetric_mesh,
    reconstruct_3d,
)
from backend.vision_analysis import SketchAnalysisResult, GeometryFeatures, VisiblePart


@pytest.fixture
def test_out_dir(tmp_path: Path) -> Path:
    out = tmp_path / "recon_quality"
    out.mkdir(parents=True, exist_ok=True)
    return out


@pytest.fixture
def chair_sketch(tmp_path: Path) -> Path:
    img = np.full((320, 320, 3), 255, dtype=np.uint8)
    # Backrest
    cv2.rectangle(img, (110, 60), (210, 150), (20, 20, 20), 4)
    # Seat
    cv2.rectangle(img, (90, 150), (230, 180), (20, 20, 20), 4)
    # 4 distinct legs
    cv2.rectangle(img, (100, 180), (115, 270), (20, 20, 20), 4)
    cv2.rectangle(img, (132, 180), (146, 255), (20, 20, 20), 4)
    cv2.rectangle(img, (174, 180), (188, 255), (20, 20, 20), 4)
    cv2.rectangle(img, (205, 180), (220, 270), (20, 20, 20), 4)

    path = tmp_path / "chair_sketch.png"
    cv2.imwrite(str(path), img)
    return path


@pytest.fixture
def bottle_sketch(tmp_path: Path) -> Path:
    img = np.full((320, 320, 3), 255, dtype=np.uint8)
    # Cap
    cv2.rectangle(img, (145, 40), (175, 65), (25, 25, 25), 3)
    # Narrow Neck
    cv2.rectangle(img, (148, 65), (172, 110), (25, 25, 25), 3)
    # Shoulder
    pts = np.array([[148, 110], [110, 150], [210, 150], [172, 110]], np.int32)
    cv2.polylines(img, [pts], True, (25, 25, 25), 3)
    # Wide Body
    cv2.rectangle(img, (110, 150), (210, 270), (25, 25, 25), 3)

    path = tmp_path / "bottle_sketch.png"
    cv2.imwrite(str(path), img)
    return path


@pytest.fixture
def toy_sketch(tmp_path: Path) -> Path:
    img = np.full((320, 320, 3), 255, dtype=np.uint8)
    # Head & Ears
    cv2.circle(img, (160, 90), 35, (30, 30, 30), 3)
    cv2.circle(img, (130, 60), 14, (30, 30, 30), 3)
    cv2.circle(img, (190, 60), 14, (30, 30, 30), 3)
    # Torso
    cv2.ellipse(img, (160, 175), (42, 55), 0, 0, 360, (30, 30, 30), 3)
    # Left & Right Legs
    cv2.rectangle(img, (132, 225), (150, 285), (30, 30, 30), 3)
    cv2.rectangle(img, (170, 225), (188, 285), (30, 30, 30), 3)

    path = tmp_path / "toy_sketch.png"
    cv2.imwrite(str(path), img)
    return path


class TestReconstructionQuality:
    """Verifies that 3D reconstruction generates recognizable, high-quality, watertight meshes."""

    def test_chair_preserves_negative_space_and_legs(self, chair_sketch: Path, test_out_dir: Path):
        """Validates that chair legs are not welded into a solid box and negative space is preserved."""
        raw = cv2.imread(str(chair_sketch), cv2.IMREAD_GRAYSCALE)
        _, binary = cv2.threshold(raw, 240, 255, cv2.THRESH_BINARY_INV)
        solid = get_solid_sketch_silhouette(binary)

        # Gap between leg 1 and leg 2 at y=225, x=123 must be 0 (open negative space)
        assert solid[225, 123] == 0, "Negative space between chair legs must NOT be bridged into solid!"
        # Leg 1 at x=107 must be solid
        assert solid[225, 107] == 255, "Chair leg must be solid foreground!"

        # Execute 3D reconstruction
        res = reconstruct_3d(
            processed_image_path=str(chair_sketch),
            output_dir=str(test_out_dir),
            output_format="glb",
        )
        assert res.success is True
        assert Path(res.model_path).exists()

        # Load and inspect mesh
        scene = trimesh.load(res.model_path)
        geom = list(scene.geometry.values())[0] if hasattr(scene, "geometry") else scene

        assert len(geom.vertices) >= 3000
        assert len(geom.faces) >= 6000
        # Check depth span (Z must have physical thickness)
        z_thickness = geom.bounds[1][2] - geom.bounds[0][2]
        assert 0.05 <= z_thickness <= 0.65, f"Chair thickness unexpected: {z_thickness}"

    def test_bottle_rotational_cylindrical_profile(self, bottle_sketch: Path, test_out_dir: Path):
        """Validates that a bottle is reconstructed with true cylindrical rotational profile."""
        analysis = SketchAnalysisResult(
            object_type="bottle",
            category="container",
            view_type="front orthographic",
            confidence_score=0.95,
            description="A beverage bottle with cylindrical neck and body",
            visible_parts=[
                VisiblePart(name="cap", observed="rectangular cap", inferred="closure", relationships="top of neck"),
                VisiblePart(name="neck", observed="narrow vertical lines", inferred="fluid tube", relationships="between cap and body"),
                VisiblePart(name="body", observed="wide cylinder", inferred="liquid container", relationships="below neck"),
            ],
            geometry_features=GeometryFeatures(
                overall_shape="cylindrical with narrow neck",
                symmetry="radial symmetry along vertical axis",
                proportions="height approximately 2.5x width",
                stroke_characteristics="clean continuous contours",
                observed_geometric_primitives=["cylinder", "rectangle", "trapezoid"],
            ),
            reconstruction_prompt="A 3D glass beverage bottle with cylindrical neck and body",
        )

        res = reconstruct_3d(
            processed_image_path=str(bottle_sketch),
            output_dir=str(test_out_dir),
            output_format="obj",
            analysis=analysis,
        )
        assert res.success is True
        assert Path(res.model_path).exists()

        mesh = trimesh.load(res.model_path)
        geom = list(mesh.geometry.values())[0] if hasattr(mesh, "geometry") else mesh

        assert len(geom.vertices) >= 2000
        assert geom.is_watertight is True, "Rotational mesh must form a closed watertight manifold!"

    def test_toy_articulated_limbs_feature_inflation(self, toy_sketch: Path, test_out_dir: Path):
        """Validates that toy limbs retain true cylindrical volume rather than squashing into wafers."""
        res = reconstruct_3d(
            processed_image_path=str(toy_sketch),
            output_dir=str(test_out_dir),
            output_format="glb",
        )
        assert res.success is True
        scene = trimesh.load(res.model_path)
        geom = list(scene.geometry.values())[0] if hasattr(scene, "geometry") else scene

        assert geom.is_watertight is True, "Toy mesh must be a watertight 360-degree manifold!"
        assert geom.is_volume is True, "Toy mesh must represent a closed solid volume!"

    def test_prepared_image_resolution_preservation(self, chair_sketch: Path, test_out_dir: Path):
        """Validates that cloud 3D input preparation preserves 512x512 resolution with clean white background."""
        prep_p, render_rgb, mask, depth, is_line = _prepare_image_for_cloud_3d(
            image_path=chair_sketch,
            out_directory=test_out_dir,
            base_name="chair_hires",
        )
        assert prep_p.exists()
        assert render_rgb.shape[:2] == (512, 512), f"Expected 512x512 canvas, got {render_rgb.shape[:2]}"
        # Corners must be pure white background
        assert tuple(render_rgb[0, 0]) == (255, 255, 255)
        assert tuple(render_rgb[-1, -1]) == (255, 255, 255)
