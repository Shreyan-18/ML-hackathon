"""Test suite for Llama 3.2 Vision Sketch Understanding in Sketch2Shape AI."""

import json
from pathlib import Path
from unittest.mock import MagicMock, patch

import pytest
from fastapi import UploadFile
from PIL import Image, ImageDraw

from backend.config import LlamaVisionConfig
from backend.main import api_analyze_sketch, api_reconstruct_sketch_to_3d
from backend.vision_analysis import (
    GeometryFeatures,
    SketchAnalysisResult,
    VisiblePart,
    _clean_json_text,
    analyze_sketch_with_llama_vision,
)


@pytest.fixture
def chair_sketch(test_dir: Path) -> Path:
    """Generates a clean chair sketch."""
    path = test_dir / "test_chair_sketch.png"
    img = Image.new("RGB", (400, 400), color=(255, 255, 255))
    draw = ImageDraw.Draw(img)
    # Seat
    draw.rectangle([120, 180, 280, 200], outline=(20, 20, 20), width=4)
    # Backrest
    draw.rectangle([120, 60, 280, 180], outline=(20, 20, 20), width=4)
    # Legs
    draw.line([130, 200, 130, 340], fill=(20, 20, 20), width=4)
    draw.line([270, 200, 270, 340], fill=(20, 20, 20), width=4)
    draw.line([150, 200, 150, 310], fill=(40, 40, 40), width=3)
    draw.line([250, 200, 250, 310], fill=(40, 40, 40), width=3)
    img.save(path)
    return path


@pytest.fixture
def mug_sketch(test_dir: Path) -> Path:
    """Generates a clean coffee mug sketch."""
    path = test_dir / "test_mug_sketch.png"
    img = Image.new("RGB", (400, 400), color=(255, 255, 255))
    draw = ImageDraw.Draw(img)
    # Cylindrical body
    draw.rectangle([130, 120, 270, 280], outline=(20, 20, 20), width=4)
    # Rim ellipse
    draw.ellipse([130, 100, 270, 140], outline=(20, 20, 20), width=4)
    # Handle
    draw.arc([240, 140, 340, 240], start=-90, end=90, fill=(20, 20, 20), width=4)
    img.save(path)
    return path


@pytest.fixture
def rough_ambiguous_sketch(test_dir: Path) -> Path:
    """Generates a rough, loose, ambiguous drawing."""
    path = test_dir / "test_rough_sketch.png"
    img = Image.new("RGB", (400, 400), color=(255, 255, 255))
    draw = ImageDraw.Draw(img)
    # Scribbled ambiguous shapes
    draw.line([(100, 120), (220, 130), (280, 240), (140, 260), (100, 120)], fill=(30, 30, 30), width=3)
    draw.line([(140, 260), (120, 330)], fill=(30, 30, 30), width=2)
    draw.line([(280, 240), (290, 320)], fill=(30, 30, 30), width=2)
    img.save(path)
    return path


class TestLlamaVisionSketchUnderstanding:
    """Tests for sketch understanding and structured JSON extraction."""

    def test_chair_sketch_analysis(self, chair_sketch: Path):
        """Verifies semantic identification of chair parts, proportions, and view."""
        result = analyze_sketch_with_llama_vision(chair_sketch)

        assert isinstance(result, SketchAnalysisResult)
        assert result.object_type in ("chair", "furniture")
        assert result.category == "furniture"
        assert "perspective" in result.view_type.lower() or "view" in result.view_type.lower()
        assert len(result.visible_parts) >= 2

        # Check that observed is distinguished from inferred
        part_names = [p.name.lower() for p in result.visible_parts]
        assert any("seat" in n or "leg" in n or "back" in n for n in part_names)

        for part in result.visible_parts:
            assert len(part.observed) > 0
            assert len(part.inferred) > 0
            assert len(part.relationships) > 0

        assert len(result.uncertainties) > 0
        assert "chair" in result.reconstruction_prompt.lower()

    def test_mug_sketch_analysis(self, mug_sketch: Path):
        """Verifies semantic identification of coffee mug with handle and rim."""
        result = analyze_sketch_with_llama_vision(mug_sketch)

        assert isinstance(result, SketchAnalysisResult)
        assert "mug" in result.object_type.lower() or "cup" in result.object_type.lower()
        assert result.category.lower() in ("tableware", "drinkware", "kitchenware", "container")
        assert "cylind" in result.geometry_features.overall_shape.lower()

        part_names = [p.name.lower() for p in result.visible_parts]
        assert any("handle" in n for n in part_names)
        assert any("rim" in n or "body" in n for n in part_names)

    def test_rough_ambiguous_sketch_handling(self, rough_ambiguous_sketch: Path):
        """Tests that rough/ambiguous drawings produce valid analysis with stated uncertainties."""
        result = analyze_sketch_with_llama_vision(rough_ambiguous_sketch)

        assert isinstance(result, SketchAnalysisResult)
        assert len(result.description) > 20
        assert len(result.uncertainties) >= 1
        # Proportions should not invent exact millimeter dimensions
        assert "mm" not in result.geometry_features.proportions.lower()
        prop_str = result.geometry_features.proportions.lower()
        assert any(w in prop_str for w in ("ratio", "height", "width", "depth", "comparable", "scale", "proportion")) or len(prop_str) > 5

    def test_json_cleaner_utility(self):
        """Tests that markdown fences and raw text are stripped properly."""
        raw_with_fences = '```json\n{"object_type": "chair", "category": "furniture"}\n```'
        cleaned = _clean_json_text(raw_with_fences)
        assert json.loads(cleaned) == {"object_type": "chair", "category": "furniture"}

        raw_conversational = 'Here is the analysis:\n{"object_type": "mug", "category": "tableware"}\nHope this helps!'
        cleaned2 = _clean_json_text(raw_conversational)
        assert json.loads(cleaned2) == {"object_type": "mug", "category": "tableware"}

    def test_remote_llama_vision_mock_success(self, chair_sketch: Path):
        """Tests remote Llama 3.2 Vision inference pipeline using mock HTTP response."""
        mock_response_payload = {
            "choices": [
                {
                    "message": {
                        "content": json.dumps({
                            "object_type": "armchair",
                            "category": "furniture",
                            "view_type": "three-quarter perspective",
                            "confidence_score": 0.92,
                            "description": "Hand-drawn sketch depicting a four-legged modern chair. Observed parallel strokes define the legs while inferred semantics indicate wooden joinery.",
                            "visible_parts": [
                                {
                                    "name": "seat",
                                    "observed": "horizontal rectangular planar contour",
                                    "inferred": "cushioned seating surface",
                                    "relationships": "fastened to four legs"
                                }
                            ],
                            "geometry_features": {
                                "overall_shape": "cubic silhouette",
                                "symmetry": "bilaterally symmetric along vertical axis",
                                "proportions": "height is roughly 1.8x width",
                                "stroke_characteristics": "clean continuous pencil strokes",
                                "observed_geometric_primitives": ["rectangle", "vertical lines"]
                            },
                            "uncertainties": ["Cushion density is unknown from single contour line"],
                            "reconstruction_prompt": "A clean 3D asset of a minimalist wooden chair on white background."
                        })
                    }
                }
            ]
        }

        cfg = LlamaVisionConfig(
            api_key="mock_test_key_12345",
            base_url="https://api.groq.com/openai/v1",
            model="llama-3.2-11b-vision-preview",
        )

        with patch("httpx.Client.post") as mock_post:
            mock_resp = MagicMock()
            mock_resp.json.return_value = mock_response_payload
            mock_resp.raise_for_status = MagicMock()
            mock_post.return_value = mock_resp

            result = analyze_sketch_with_llama_vision(chair_sketch, config=cfg)

            assert result.object_type == "armchair"
            assert result.confidence_score == 0.92
            assert "llama-3.2-vision" in result.inference_backend

    def test_remote_llama_vision_error_graceful_fallback(self, chair_sketch: Path):
        """Tests that remote HTTP errors gracefully fall back to local heuristic analysis."""
        cfg = LlamaVisionConfig(
            api_key="invalid_or_expired_key",
            base_url="https://api.groq.com/openai/v1",
        )

        with patch("httpx.Client.post", side_effect=Exception("Connection timed out")):
            result = analyze_sketch_with_llama_vision(chair_sketch, config=cfg)

            assert isinstance(result, SketchAnalysisResult)
            assert result.inference_backend == "heuristic-fallback"
            assert "chair" in result.object_type.lower()

    def test_invalid_image_raises_error(self, test_dir: Path):
        """Verifies that non-existent image paths raise FileNotFoundError."""
        with pytest.raises(FileNotFoundError):
            analyze_sketch_with_llama_vision(test_dir / "non_existent_file.png")


class TestFastAPIVisionIntegration:
    """Tests for the vision endpoints in FastAPI."""

    def test_api_analyze_sketch_endpoint(self, chair_sketch: Path):
        with open(chair_sketch, "rb") as f:
            upload_file = UploadFile(filename="chair.png", file=f, headers={"content-type": "image/png"})
            res = api_analyze_sketch(file=upload_file, target_size=320)

            assert res.success is True
            assert res.analysis.object_type in ("chair", "furniture")
            assert len(res.analysis.visible_parts) >= 1
            assert Path(res.processed_image_path).exists()

    def test_api_reconstruct_with_vision_analysis(self, mug_sketch: Path):
        with open(mug_sketch, "rb") as f:
            upload_file = UploadFile(filename="mug.png", file=f, headers={"content-type": "image/png"})
            res = api_reconstruct_sketch_to_3d(file=upload_file, target_size=320, output_format="obj")

            assert res.success is True
            assert res.analysis is not None
            assert "mug" in res.analysis.object_type.lower() or "cup" in res.analysis.object_type.lower()
            assert Path(res.model_3d_path).exists()
            assert res.details["refinement_prompt_available"] is True
