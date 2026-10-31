"""Unit and Integration Tests for AI Sketch Image Refinement Module."""

from pathlib import Path
import cv2
import numpy as np
import pytest
from fastapi.testclient import TestClient
from PIL import Image, ImageDraw

from backend.config import RefinementConfig
from backend.main import app
from backend.refinement import (
    build_conditioned_prompts,
    preprocess_and_enhance_contrast,
    preserve_and_denoise_lines,
    refine_sketch_pipeline,
    validate_refinement_quality,
)
from backend.vision_analysis import GeometryFeatures, SketchAnalysisResult, VisiblePart


@pytest.fixture
def mock_clean_sketch(tmp_path: Path) -> Path:
    """Creates a sample high-contrast geometric sketch on white background."""
    img_path = tmp_path / "clean_chair_sketch.png"
    img = Image.new("RGB", (320, 320), color=(255, 255, 255))
    draw = ImageDraw.Draw(img)
    # Draw chair seat & backrest
    draw.rectangle([100, 140, 220, 180], outline=(0, 0, 0), width=4)
    draw.rectangle([100, 80, 220, 140], outline=(0, 0, 0), width=4)
    # Draw 4 legs
    draw.line([(110, 180), (110, 260)], fill=(0, 0, 0), width=4)
    draw.line([(210, 180), (210, 260)], fill=(0, 0, 0), width=4)
    draw.line([(130, 180), (130, 240)], fill=(0, 0, 0), width=3)
    draw.line([(190, 180), (190, 240)], fill=(0, 0, 0), width=3)
    img.save(img_path)
    return img_path


@pytest.fixture
def mock_faint_noisy_sketch(tmp_path: Path) -> Path:
    """Creates a faint pencil sketch with paper background noise."""
    img_path = tmp_path / "faint_sketch.png"
    # Grayish paper background
    arr = np.random.randint(235, 250, (300, 300, 3), dtype=np.uint8)
    # Faint pencil strokes (light gray ~190 instead of black)
    arr[100:104, 80:220] = 180
    arr[100:220, 80:84] = 180
    arr[100:220, 216:220] = 180
    arr[216:220, 80:220] = 180
    Image.fromarray(arr).save(img_path)
    return img_path


def test_contrast_enhancement_and_line_preservation(mock_faint_noisy_sketch: Path):
    """Verifies that faint pencil strokes are enhanced and borders cleaned."""
    orig_rgb = np.array(Image.open(mock_faint_noisy_sketch).convert("RGB"))
    enhanced = preprocess_and_enhance_contrast(orig_rgb, target_size=(320, 320), contrast_clip=2.0)

    assert enhanced.shape == (320, 320, 3)
    # Border pixels must be pure white (255)
    assert np.all(enhanced[:3, :, :] == 255)
    assert np.all(enhanced[-3:, :, :] == 255)

    # Edge-preserving denoising must keep dimensions
    denoised = preserve_and_denoise_lines(enhanced)
    assert denoised.shape == (320, 320, 3)


def test_conditioned_prompt_synthesis():
    """Verifies that Llama structured output is converted into explicit conditioning prompts."""
    analysis = SketchAnalysisResult(
        object_type="drone",
        category="robotics",
        view_type="isometric",
        confidence_score=0.92,
        description="A 4-rotor recon drone with central cockpit dome.",
        visible_parts=[
            VisiblePart(
                name="cockpit",
                observed="oval canopy dome",
                inferred="sensor array",
                relationships="mounted center top",
            ),
            VisiblePart(
                name="rotors",
                observed="four blade disks on arms",
                inferred="propulsion pods",
                relationships="quad perimeter",
            ),
        ],
        geometry_features=GeometryFeatures(
            overall_shape="aerodynamic fuselage",
            symmetry="bilaterally symmetric",
            proportions="width 1.5x height",
            stroke_characteristics="clean technical lines",
            observed_geometric_primitives=["ellipse", "cylinder"],
        ),
        uncertainties=["hidden landing gear"],
        reconstruction_prompt="Cyber drone concept mesh",
        inference_backend="mock-test",
    )

    pos, neg = build_conditioned_prompts(analysis, user_prompt="make thruster pods metallic blue")
    assert "drone" in pos
    assert "cockpit" in pos
    assert "rotors" in pos
    assert "make thruster pods metallic blue" in pos
    assert "pure white background" in pos
    assert "color noise" in neg
    assert "distorted geometry" in neg


def test_quality_validation_detects_severe_structural_alteration(mock_clean_sketch: Path):
    """Verifies that if refinement alters the geometry/silhouette, quality validation rejects it."""
    orig_rgb = np.array(Image.open(mock_clean_sketch).convert("RGB"))

    # Synthesize an altered image where the object is shifted and mutilated
    corrupted_rgb = np.full((320, 320, 3), 255, dtype=np.uint8)
    # Draw a circle on the far right instead of a centered chair
    cv2.circle(corrupted_rgb, (290, 50), 30, (0, 0, 0), -1)

    val_res = validate_refinement_quality(orig_rgb, corrupted_rgb, config=RefinementConfig(strict_validation=True))

    assert val_res.passed is False
    assert val_res.is_fallback is True
    assert len(val_res.failure_reasons) > 0
    # Must catch low edge overlap or centroid drift
    assert any("overlap" in r.lower() or "centroid" in r.lower() or "silhouette" in r.lower() for r in val_res.failure_reasons)


def test_refine_sketch_pipeline_end_to_end(mock_clean_sketch: Path, tmp_path: Path):
    """Tests the full refinement pipeline on a real sketch and validates fallback safety."""
    out_dir = tmp_path / "refine_out"
    config = RefinementConfig(strict_validation=True)

    res = refine_sketch_pipeline(
        input_image_path=mock_clean_sketch,
        user_prompt="clean geometric lines",
        output_dir=out_dir,
        target_size=(320, 320),
        config=config,
        perform_vision_analysis=False,
    )

    assert res.success is True
    assert Path(res.refined_image_path).exists()
    assert Path(res.preprocessed_image_path).exists()
    assert Path(res.effective_image_path).exists()
    assert res.validation.edge_overlap_iou > 0.40
    assert res.validation.background_cleanliness_score >= 0.80
    assert res.validation.passed is True
    assert res.is_fallback is False
    assert 0.85 <= res.validation.scale_ratio <= 1.15


def test_faint_pencil_sketch_contrast_enhancement(mock_faint_noisy_sketch: Path, tmp_path: Path):
    """Verifies that faint pencil strokes are boosted into high-contrast outlines and pass validation."""
    res = refine_sketch_pipeline(
        input_image_path=mock_faint_noisy_sketch,
        output_dir=tmp_path / "faint_out",
        target_size=(320, 320),
        perform_vision_analysis=False,
    )
    assert res.success is True
    assert res.validation.passed is True
    assert res.is_fallback is False
    assert res.validation.contrast_ratio >= 0.50
    assert res.validation.background_cleanliness_score >= 0.90


def test_quality_validation_detects_excessive_object_shrinkage(mock_clean_sketch: Path):
    """Verifies that if an image process shrinks the object excessively (>30%), validation catches it."""
    orig_rgb = np.array(Image.open(mock_clean_sketch).convert("RGB"))
    # Create shrunken version (35% scale of original)
    shrunken_rgb = np.full((320, 320, 3), 255, dtype=np.uint8)
    cv2.rectangle(shrunken_rgb, (140, 150), (180, 160), (0, 0, 0), 2)

    val_res = validate_refinement_quality(orig_rgb, shrunken_rgb, config=RefinementConfig(strict_validation=True))
    assert val_res.passed is False
    assert val_res.is_fallback is True
    assert any("shrank" in r.lower() for r in val_res.failure_reasons)


def test_api_refine_sketch_endpoint(mock_clean_sketch: Path):
    """Tests FastAPI /api/refine-sketch endpoint returns valid RefinementResponse."""
    client = TestClient(app)
    with open(mock_clean_sketch, "rb") as f:
        response = client.post(
            "/api/refine-sketch?target_size=320&user_prompt=streamlined",
            files={"file": ("sketch.png", f, "image/png")},
        )

    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True
    assert "refined_image_path" in data
    assert "effective_image_path" in data
    assert "validation" in data
    assert "edge_overlap_iou" in data["validation"]
    assert "prompt_used" in data
