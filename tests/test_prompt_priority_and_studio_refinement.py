"""Unit and integration tests for user prompt priority, solid foreground isolation,
and studio concept refinement in Sketch2Shape AI.
"""

from pathlib import Path
import cv2
import numpy as np
import pytest
from fastapi.datastructures import UploadFile

from backend.foreground_isolation import isolate_foreground, _extract_solid_sketch_silhouette
from backend.main import (
    api_analyze_sketch,
    api_isolate_foreground,
    api_refine_sketch,
    api_reconstruct_sketch_to_3d,
)
from backend.refinement import refine_sketch_pipeline
from backend.vision_analysis import analyze_sketch_with_llama_vision


@pytest.fixture
def synthetic_adapter_sketch(tmp_path: Path) -> Path:
    """Creates a synthetic conical sketch resembling an adapter or shuttlecock."""
    img = np.full((320, 320, 3), 255, dtype=np.uint8)
    # Top neck
    cv2.rectangle(img, (135, 40), (185, 100), (30, 30, 30), 4)
    # Conical body
    pts = np.array([[135, 100], [80, 240], [240, 240], [185, 100]], np.int32)
    cv2.polylines(img, [pts], True, (30, 30, 30), 4)
    # Base collar
    cv2.rectangle(img, (75, 240), (245, 275), (30, 30, 30), 4)

    file_path = tmp_path / "adapter_sketch.png"
    cv2.imwrite(str(file_path), img)
    return file_path


def test_user_prompt_priority_in_vision_analysis(synthetic_adapter_sketch: Path):
    """Verifies that an explicit user prompt defines the object identity and classification."""
    user_prompt = "one inch to two inch cylindrical adaptor"
    res = analyze_sketch_with_llama_vision(
        synthetic_adapter_sketch,
        user_prompt=user_prompt,
    )
    assert res.object_type == user_prompt
    assert "cylindrical adaptor" in res.reconstruction_prompt.lower()
    assert res.confidence_score >= 0.90


def test_solid_foreground_isolation_prevents_hollow_wireframe(synthetic_adapter_sketch: Path, tmp_path: Path):
    """Verifies that sketch foreground isolation preserves solid interiors (not hollow wireframes)."""
    iso_res = isolate_foreground(
        synthetic_adapter_sketch,
        output_dir=tmp_path / "iso_out",
        target_size=(320, 320),
        user_prompt="cylindrical adaptor",
    )
    assert iso_res.success is True
    assert iso_res.foreground_pixel_ratio > 0.15  # Solid filled volume, not hollow ~0.05
    assert Path(iso_res.composite_path).exists()
    assert Path(iso_res.rgba_path).exists()


def test_api_endpoints_accept_user_prompt(synthetic_adapter_sketch: Path):
    """Verifies all endpoints accept user_prompt without error and propagate it."""
    with open(synthetic_adapter_sketch, "rb") as f:
        upload_file = UploadFile(filename="adapter.png", file=f, headers={"content-type": "image/png"})
        analysis = api_analyze_sketch(
            file=upload_file,
            target_size=320,
            user_prompt="one inch to two inch cylindrical adaptor",
        )
        assert analysis.success is True
        assert analysis.analysis.object_type == "one inch to two inch cylindrical adaptor"

    with open(synthetic_adapter_sketch, "rb") as f:
        upload_file = UploadFile(filename="adapter.png", file=f, headers={"content-type": "image/png"})
        iso = api_isolate_foreground(
            file=upload_file,
            target_size=320,
            method="auto",
            user_prompt="one inch to two inch cylindrical adaptor",
        )
        assert iso.success is True
        assert iso.foreground_pixel_ratio > 0.15
