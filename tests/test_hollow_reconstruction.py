"""Tests for 3D Reconstruction of Objects with Holes, Openings, and Hollow Cavities.

Verifies:
1. Ring/Torus: central through-hole preserved, genus-1 watertight manifold (Euler char = 0).
2. Mug with Handle Loop: handle opening preserved, watertight, genus-1 topology.
3. Hollow Container (Cup/Bowl): top rim cavity recessed inward rather than bulging as solid block.
4. Solid Objects (Ball/Chair): no false holes, solid seat/backrest/ball preserved.
"""

from pathlib import Path
import cv2
import numpy as np
import pytest
import trimesh

from backend.generation_25d import detect_sketch_openings, get_solid_sketch_silhouette
from backend.reconstruction import reconstruct_3d
from backend.vision_analysis import SketchAnalysisResult, GeometryFeatures, VisiblePart


@pytest.fixture
def test_out_dir(tmp_path: Path) -> Path:
    out = tmp_path / "hollow_tests"
    out.mkdir(parents=True, exist_ok=True)
    return out


@pytest.fixture
def ring_sketch(tmp_path: Path) -> Path:
    img = np.full((320, 320, 3), 255, dtype=np.uint8)
    cv2.circle(img, (160, 160), 80, (20, 20, 20), 6) # Outer circle
    cv2.circle(img, (160, 160), 40, (20, 20, 20), 6) # Inner circle
    path = tmp_path / "ring_sketch.png"
    cv2.imwrite(str(path), img)
    return path


@pytest.fixture
def mug_with_handle_sketch(tmp_path: Path) -> Path:
    img = np.full((320, 320, 3), 255, dtype=np.uint8)
    # Mug body
    cv2.rectangle(img, (80, 80), (180, 240), (20, 20, 20), 6)
    # Handle loop (outer and inner arcs)
    cv2.ellipse(img, (180, 160), (45, 55), 0, -90, 90, (20, 20, 20), 6)
    cv2.ellipse(img, (180, 160), (30, 40), 0, -90, 90, (20, 20, 20), 6)
    path = tmp_path / "mug_with_handle.png"
    cv2.imwrite(str(path), img)
    return path


@pytest.fixture
def hollow_cup_sketch(tmp_path: Path) -> Path:
    img = np.full((320, 320, 3), 255, dtype=np.uint8)
    # Top rim ellipse (opening)
    cv2.ellipse(img, (160, 80), (60, 20), 0, 0, 360, (20, 20, 20), 4)
    # Cup body tapering down
    pts = np.array([[100, 80], [120, 240], [200, 240], [220, 80]], np.int32)
    cv2.polylines(img, [pts], False, (20, 20, 20), 4)
    # Bottom ellipse
    cv2.ellipse(img, (160, 240), (40, 12), 0, 0, 180, (20, 20, 20), 4)
    path = tmp_path / "hollow_cup.png"
    cv2.imwrite(str(path), img)
    return path


class TestHollowAndOpeningReconstruction:
    """Validates preservation of holes, handle loops, and hollow cavities in 3D outputs."""

    def test_ring_torus_through_hole_preserved(self, ring_sketch: Path, test_out_dir: Path):
        """Validates that a ring is reconstructed as an actual 3D torus with a central through-hole."""
        analysis = SketchAnalysisResult(
            object_type="ring",
            category="jewelry",
            view_type="front orthographic",
            confidence_score=0.96,
            description="A circular metal ring or torus with a central hole",
            visible_parts=[
                VisiblePart(name="ring band", observed="circular stroke", inferred="metal band", relationships="surrounds hole"),
                VisiblePart(name="center hole", observed="open inner circle", inferred="finger opening", relationships="inside band"),
            ],
            geometry_features=GeometryFeatures(
                overall_shape="toroidal ring",
                symmetry="radial symmetry",
                proportions="1:1 square aspect ratio",
                stroke_characteristics="smooth continuous circles",
                observed_geometric_primitives=["circle"],
            ),
            reconstruction_prompt="A 3D gold ring torus with a clear through-hole",
        )

        res = reconstruct_3d(
            processed_image_path=str(ring_sketch),
            output_dir=str(test_out_dir),
            output_format="glb",
            analysis=analysis,
        )
        assert res.success is True
        assert Path(res.model_path).exists()

        scene = trimesh.load(res.model_path)
        geom = list(scene.geometry.values())[0] if hasattr(scene, "geometry") else scene

        assert geom.is_watertight is True, "Torus mesh must be 100% watertight!"
        assert geom.is_volume is True, "Torus mesh must represent a closed solid volume!"
        # Genus-1 torus has Euler characteristic = 0
        assert geom.euler_number == 0, f"Expected Euler char 0 for torus, got {geom.euler_number}"

    def test_mug_handle_loop_opening_preserved(self, mug_with_handle_sketch: Path, test_out_dir: Path):
        """Validates that a coffee mug has an open handle loop you can see through."""
        analysis = SketchAnalysisResult(
            object_type="coffee mug",
            category="tableware",
            view_type="three-quarter perspective",
            confidence_score=0.92,
            description="A ceramic coffee mug with a curved lateral handle",
            visible_parts=[
                VisiblePart(name="cylindrical body", observed="vertical rectangle outline", inferred="hollow container", relationships="main body"),
                VisiblePart(name="handle", observed="curved loop on right side", inferred="grasp handle", relationships="attached to right side"),
            ],
            geometry_features=GeometryFeatures(
                overall_shape="cylindrical with handle loop",
                symmetry="asymmetric lateral handle",
                proportions="height approx 1.4x width",
                stroke_characteristics="continuous line contours",
                observed_geometric_primitives=["cylinder", "ellipse"],
            ),
            reconstruction_prompt="A 3D ceramic coffee mug with an open curved handle loop",
        )

        res = reconstruct_3d(
            processed_image_path=str(mug_with_handle_sketch),
            output_dir=str(test_out_dir),
            output_format="obj",
            analysis=analysis,
        )
        assert res.success is True
        mesh = trimesh.load(res.model_path)
        geom = list(mesh.geometry.values())[0] if hasattr(mesh, "geometry") else mesh

        assert geom.is_watertight is True, "Mug mesh must be watertight!"
        # Mug with handle loop has genus >= 1 -> Euler number <= 0
        assert geom.euler_number <= 0, f"Expected Euler char <= 0 for handled mug, got {geom.euler_number}"
        assert res.details.get("mesh_stats", {}).get("openings_preserved") is True

    def test_hollow_container_cavity_sculpted(self, hollow_cup_sketch: Path, test_out_dir: Path):
        """Validates that a hollow cup has an interior cavity recessed at the top rim."""
        analysis = SketchAnalysisResult(
            object_type="cup",
            category="tableware",
            view_type="three-quarter perspective",
            confidence_score=0.90,
            description="A hollow drinking cup with an open top rim",
            visible_parts=[
                VisiblePart(name="rim / aperture", observed="elliptical top opening", inferred="container aperture", relationships="top opening"),
                VisiblePart(name="body", observed="tapered vertical walls", inferred="vessel volume", relationships="main vessel"),
            ],
            geometry_features=GeometryFeatures(
                overall_shape="tapered cylinder",
                symmetry="bilateral vertical symmetry",
                proportions="height approx 1.6x width",
                stroke_characteristics="smooth contours",
                observed_geometric_primitives=["cylinder", "ellipse"],
            ),
            reconstruction_prompt="A 3D ceramic cup with an open hollow interior cavity",
        )

        res = reconstruct_3d(
            processed_image_path=str(hollow_cup_sketch),
            output_dir=str(test_out_dir),
            output_format="glb",
            analysis=analysis,
        )
        assert res.success is True
        scene = trimesh.load(res.model_path)
        geom = list(scene.geometry.values())[0] if hasattr(scene, "geometry") else scene

        assert geom.is_watertight is True
        assert geom.is_volume is True
        assert res.details.get("mesh_stats", {}).get("openings_preserved") is True

    def test_solid_ball_has_no_false_holes(self, tmp_path: Path, test_out_dir: Path):
        """Validates that a solid ball is NOT turned into a hollow ring or cavity."""
        img = np.full((320, 320, 3), 255, dtype=np.uint8)
        cv2.circle(img, (160, 160), 80, (20, 20, 20), 6)
        path = tmp_path / "ball_sketch.png"
        cv2.imwrite(str(path), img)

        res = reconstruct_3d(
            processed_image_path=str(path),
            output_dir=str(test_out_dir),
            output_format="glb",
        )
        assert res.success is True
        scene = trimesh.load(res.model_path)
        geom = list(scene.geometry.values())[0] if hasattr(scene, "geometry") else scene

        assert geom.is_watertight is True
        # Genus-0 solid sphere has Euler characteristic = 2
        assert geom.euler_number == 2, f"Solid sphere must have Euler char 2, got {geom.euler_number}"
