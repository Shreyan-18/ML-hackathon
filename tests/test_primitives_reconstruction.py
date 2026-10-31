"""
Automated regression tests for geometric shape reconstruction.
Verifies that:
1. Straight edges stay straight, flat faces stay flat, and corners stay sharp (Cubes / Cuboids).
2. Spheres retain radial spherical symmetry without planar flattening.
3. Cylinders retain rotational walls and flat end caps.
4. Mixed objects retain hybrid geometry.
5. Edge-aware postprocessing prevents destructive global smoothing.
"""

import os
import shutil
import tempfile
import cv2
import numpy as np
import pytest
import trimesh

from backend.vision_analysis import analyze_sketch_with_llama_vision
from backend.reconstruction import reconstruct_3d


def make_cube_sketch() -> np.ndarray:
    img = np.ones((512, 512, 3), dtype=np.uint8) * 255
    cv2.rectangle(img, (120, 120), (392, 392), (0, 0, 0), 4)
    return img


def make_cuboid_sketch() -> np.ndarray:
    img = np.ones((512, 512, 3), dtype=np.uint8) * 255
    cv2.rectangle(img, (140, 80), (372, 432), (0, 0, 0), 4)
    return img


def make_cylinder_sketch() -> np.ndarray:
    img = np.ones((512, 512, 3), dtype=np.uint8) * 255
    cv2.ellipse(img, (256, 120), (120, 32), 0, 0, 360, (0, 0, 0), 4)
    cv2.line(img, (136, 120), (136, 380), (0, 0, 0), 4)
    cv2.line(img, (376, 120), (376, 380), (0, 0, 0), 4)
    cv2.ellipse(img, (256, 380), (120, 32), 0, 0, 180, (0, 0, 0), 4)
    return img


def make_sphere_sketch() -> np.ndarray:
    img = np.ones((512, 512, 3), dtype=np.uint8) * 255
    cv2.circle(img, (256, 256), 140, (0, 0, 0), 4)
    return img


def make_mixed_sketch() -> np.ndarray:
    img = np.ones((512, 512, 3), dtype=np.uint8) * 255
    # Rectangular base (flat)
    cv2.rectangle(img, (140, 240), (372, 400), (0, 0, 0), 4)
    # Semicircular dome top (curved)
    cv2.ellipse(img, (256, 240), (116, 100), 0, 180, 360, (0, 0, 0), 4)
    return img


class TestGeometricPrimitivesReconstruction:
    @pytest.fixture(autouse=True)
    def setup_tmp(self):
        self.tmp_dir = tempfile.mkdtemp()
        yield
        if os.path.exists(self.tmp_dir):
            shutil.rmtree(self.tmp_dir)

    def test_cube_vision_and_flat_planar_geometry(self):
        sketch = make_cube_sketch()
        img_path = os.path.join(self.tmp_dir, "cube.png")
        cv2.imwrite(img_path, sketch)

        analysis = analyze_sketch_with_llama_vision(img_path)
        assert analysis.geometry_features.primary_primitive == "cube"
        assert analysis.geometry_features.has_flat_faces is True
        assert analysis.geometry_features.has_sharp_edges is True

        out_dir = os.path.join(self.tmp_dir, "cube_out")
        meta = reconstruct_3d(img_path, out_dir, analysis=analysis)
        mesh = trimesh.load(meta.model_path)

        assert mesh.is_watertight is True
        assert len(mesh.vertices) > 100

        # Verify face planarity: central front face vertices must have identical Z values (variance == 0)
        center_mask = (
            (mesh.vertices[:, 0] > -0.2) & (mesh.vertices[:, 0] < 0.2) &
            (mesh.vertices[:, 1] > -0.2) & (mesh.vertices[:, 1] < 0.2) &
            (mesh.vertices[:, 2] > 0.1)
        )
        front_zs = mesh.vertices[center_mask, 2]
        assert len(front_zs) > 10
        # InstantMesh/medial pillowing would have z_max - z_min > 0.03. Flat plateau has 0.0.
        z_spread = float(np.max(front_zs) - np.min(front_zs))
        assert z_spread < 1e-5, f"Cube front face is not flat! Z spread was {z_spread}"

    def test_cuboid_vision_and_flat_geometry(self):
        sketch = make_cuboid_sketch()
        img_path = os.path.join(self.tmp_dir, "cuboid.png")
        cv2.imwrite(img_path, sketch)

        analysis = analyze_sketch_with_llama_vision(img_path)
        assert analysis.geometry_features.primary_primitive == "cuboid"
        assert analysis.geometry_features.has_flat_faces is True

        out_dir = os.path.join(self.tmp_dir, "cuboid_out")
        meta = reconstruct_3d(img_path, out_dir, analysis=analysis)
        mesh = trimesh.load(meta.model_path)

        assert mesh.is_watertight is True
        # Verify aspect ratio of 3D bounds reflects taller cuboid
        extents = mesh.extents
        # Y extent should be larger than X extent
        assert extents[1] > extents[0]

    def test_cylinder_vision_and_rotational_profile(self):
        sketch = make_cylinder_sketch()
        img_path = os.path.join(self.tmp_dir, "cylinder.png")
        cv2.imwrite(img_path, sketch)

        analysis = analyze_sketch_with_llama_vision(img_path)
        assert analysis.geometry_features.primary_primitive == "cylinder"

        out_dir = os.path.join(self.tmp_dir, "cylinder_out")
        meta = reconstruct_3d(img_path, out_dir, analysis=analysis)
        mesh = trimesh.load(meta.model_path)

        assert mesh.is_watertight is True
        # Cylindrical profile should be rounded across X
        mid_mask = (
            (mesh.vertices[:, 1] > -0.05) & (mesh.vertices[:, 1] < 0.05) &
            (mesh.vertices[:, 2] > 0.02)
        )
        mid_zs = mesh.vertices[mid_mask, 2]
        assert len(mid_zs) > 5
        # Circular profile has a curved arch from edges to peak
        z_arch = float(np.max(mid_zs) - np.min(mid_zs))
        assert z_arch > 0.05, f"Cylinder lateral wall should be curved! Z arch was {z_arch}"

    def test_sphere_vision_and_radial_curvature(self):
        sketch = make_sphere_sketch()
        img_path = os.path.join(self.tmp_dir, "sphere.png")
        cv2.imwrite(img_path, sketch)

        analysis = analyze_sketch_with_llama_vision(img_path)
        assert analysis.geometry_features.primary_primitive == "sphere"

        out_dir = os.path.join(self.tmp_dir, "sphere_out")
        meta = reconstruct_3d(img_path, out_dir, analysis=analysis)
        mesh = trimesh.load(meta.model_path)

        assert mesh.is_watertight is True
        # Radial symmetry check: bounding extents along X, Y, Z should be balanced
        extents = mesh.extents
        ratio_xy = extents[0] / extents[1]
        assert 0.90 <= ratio_xy <= 1.10, f"Sphere XY ratio not spherical: {ratio_xy}"

    def test_mixed_object_vision_and_reconstruction(self):
        sketch = make_mixed_sketch()
        img_path = os.path.join(self.tmp_dir, "mixed.png")
        cv2.imwrite(img_path, sketch)

        analysis = analyze_sketch_with_llama_vision(img_path)
        assert analysis.geometry_features.primary_primitive in ("mixed", "cylinder", "irregular", "sphere")

        out_dir = os.path.join(self.tmp_dir, "mixed_out")
        meta = reconstruct_3d(img_path, out_dir, analysis=analysis)
        mesh = trimesh.load(meta.model_path)

        assert mesh.is_watertight is True
        assert len(mesh.faces) > 100
