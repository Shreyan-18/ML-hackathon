"""Comprehensive Pytest Suite for Sketch2Shape AI Preprocessing Module."""

import hashlib
import io
from pathlib import Path

import cv2
import numpy as np
import pytest
from fastapi import HTTPException, UploadFile

from backend.config import PreprocessingConfig
from backend.main import (
    api_preprocess_sketch,
    api_reconstruct_sketch_to_3d,
    health_check,
)
from backend.preprocessing import (
    preprocess_sketch,
    validate_processed_image,
)


def _compute_hash(file_path: Path) -> str:
    """Computes SHA-256 hash of a file for integrity verification."""
    hasher = hashlib.sha256()
    hasher.update(file_path.read_bytes())
    return hasher.hexdigest()


class TestSketchPreprocessing:
    """Unit and functional tests covering the 10 required test cases."""

    def test_case1_black_on_white(self, black_on_white_sketch: Path, test_dir: Path):
        """Case 1: Black sketch on white background produces valid 320x320 RGB output."""
        output_path = test_dir / "out_case1.png"
        original_hash = _compute_hash(black_on_white_sketch)

        result_path = preprocess_sketch(
            str(black_on_white_sketch),
            str(output_path),
            target_size=(320, 320),
        )

        assert Path(result_path).exists()
        val = validate_processed_image(output_path, expected_size=(320, 320), expected_channels=3)
        assert val.is_valid
        assert val.width == 320
        assert val.height == 320
        assert val.channels == 3

        # Check that original file was not mutated
        assert _compute_hash(black_on_white_sketch) == original_hash

    def test_case2_white_on_black(self, white_on_black_sketch: Path, test_dir: Path):
        """Case 2: White sketch on black background is normalized for 3D reconstruction."""
        output_path = test_dir / "out_case2.png"
        config = PreprocessingConfig(auto_invert_dark_background=True)

        preprocess_sketch(
            str(white_on_black_sketch),
            str(output_path),
            target_size=(320, 320),
            config=config,
        )

        img = cv2.imread(str(output_path), cv2.IMREAD_COLOR)
        assert img is not None
        assert img.shape == (320, 320, 3)

        # After normalization, border background should be light (> 180), not black (< 50)
        border_sample = np.concatenate([img[:10, :, :], img[-10:, :, :]], axis=0)
        assert np.mean(border_sample) > 180, "Dark background was not inverted to light canvas."

    def test_case3_rgb_image(self, rgb_sketch: Path, test_dir: Path):
        """Case 3: Color RGB image is processed preserving 3 channels without blind grayscale conversion."""
        output_path = test_dir / "out_case3.png"

        preprocess_sketch(
            str(rgb_sketch),
            str(output_path),
            target_size=(320, 320),
        )

        val = validate_processed_image(output_path, expected_size=(320, 320), expected_channels=3)
        assert val.channels == 3
        img = cv2.imread(str(output_path), cv2.IMREAD_COLOR)
        # Verify color diversity (not identical R, G, B channels across image)
        channel_diff = np.max(np.abs(img[:, :, 0].astype(int) - img[:, :, 2].astype(int)))
        assert channel_diff > 10, "Color information was discarded unnecessarily."

    def test_case4_grayscale_image(self, grayscale_sketch: Path, test_dir: Path):
        """Case 4: Grayscale (mode 'L') input is safely converted to 3-channel model-ready format."""
        output_path = test_dir / "out_case4.png"

        preprocess_sketch(
            str(grayscale_sketch),
            str(output_path),
            target_size=(320, 320),
        )

        val = validate_processed_image(output_path, expected_size=(320, 320), expected_channels=3)
        assert val.channels == 3
        assert val.width == 320
        assert val.height == 320

    def test_case5_rgba_transparency(self, rgba_sketch_with_transparency: Path, test_dir: Path):
        """Case 5: Transparent RGBA sketch is composited cleanly against solid white background."""
        output_path = test_dir / "out_case5.png"

        preprocess_sketch(
            str(rgba_sketch_with_transparency),
            str(output_path),
            target_size=(320, 320),
        )

        img = cv2.imread(str(output_path), cv2.IMREAD_COLOR)
        assert img is not None
        # Corners should be clean white (255, 255, 255), not black/transparent (0, 0, 0)
        assert np.all(img[5, 5] >= 250)
        assert np.all(img[-5, -5] >= 250)

    def test_case6_non_square_aspect_ratio(self, non_square_sketch: Path, test_dir: Path):
        """Case 6: Non-square sketch (e.g. 900x300) is centered on square canvas without distortion."""
        output_path = test_dir / "out_case6.png"

        preprocess_sketch(
            str(non_square_sketch),
            str(output_path),
            target_size=(320, 320),
        )

        val = validate_processed_image(output_path, expected_size=(320, 320), expected_channels=3)
        assert val.width == 320
        assert val.height == 320

        # With 900x300 scaled uniformly inside 320x320 with margin, top and bottom regions must be padding
        img = cv2.imread(str(output_path), cv2.IMREAD_COLOR)
        top_row_mean = np.mean(img[:15, :, :])
        bottom_row_mean = np.mean(img[-15:, :, :])
        assert top_row_mean >= 250, "Top padding is missing or distorted."
        assert bottom_row_mean >= 250, "Bottom padding is missing or distorted."

    def test_case7_low_contrast(self, low_contrast_sketch: Path, test_dir: Path):
        """Case 7: Low contrast faint pencil sketch has contrast enhanced without clipping."""
        output_path = test_dir / "out_case7.png"

        preprocess_sketch(
            str(low_contrast_sketch),
            str(output_path),
            target_size=(320, 320),
        )

        val = validate_processed_image(output_path, expected_size=(320, 320), expected_channels=3)
        # Contrast range (max - min) in processed image should be higher than original faint difference
        assert (val.max_pixel - val.min_pixel) > 30

    def test_case8_thin_lines_preserved(self, thin_lines_sketch: Path, test_dir: Path):
        """Case 8: 1px thin, light sketch strokes remain clearly detectable and not blurred away."""
        output_path = test_dir / "out_case8.png"

        preprocess_sketch(
            str(thin_lines_sketch),
            str(output_path),
            target_size=(320, 320),
        )

        img = cv2.imread(str(output_path), cv2.IMREAD_GRAYSCALE)
        # Ensure strokes are still visible: min pixel should be distinctly darker than background 255
        min_stroke_val = np.min(img)
        assert min_stroke_val < 220, "Thin sketch lines were smoothed away completely."

    def test_case9_mild_noise_reduction(self, noisy_sketch: Path, test_dir: Path):
        """Case 9: Sensor and paper texture noise is reduced while preserving sketch structure."""
        output_path = test_dir / "out_case9.png"

        preprocess_sketch(
            str(noisy_sketch),
            str(output_path),
            target_size=(320, 320),
        )

        img = cv2.imread(str(output_path), cv2.IMREAD_GRAYSCALE)
        # Corner background area should have low local variance after bilateral filtering
        corner_patch = img[:40, :40]
        std_patch = np.std(corner_patch)
        assert std_patch < 10.0, f"Background noise was not properly smoothed (std={std_patch:.2f})."

    def test_case10_invalid_and_corrupted(
        self, corrupted_image: Path, empty_image: Path, test_dir: Path
    ):
        """Case 10: Corrupted and empty files produce clear, informative errors."""
        out1 = test_dir / "out_corrupted.png"
        out2 = test_dir / "out_empty.png"
        out3 = test_dir / "out_nonexistent.png"

        with pytest.raises(ValueError, match="Invalid or corrupted image"):
            preprocess_sketch(str(corrupted_image), str(out1))

        with pytest.raises(ValueError, match="empty"):
            preprocess_sketch(str(empty_image), str(out2))

        with pytest.raises(FileNotFoundError, match="does not exist"):
            preprocess_sketch(str(test_dir / "ghost.png"), str(out3))

    def test_prevent_overwriting_original(self, black_on_white_sketch: Path):
        """Safety check: output path cannot overwrite input path."""
        with pytest.raises(ValueError, match="preserves original sketch"):
            preprocess_sketch(str(black_on_white_sketch), str(black_on_white_sketch))

    def test_debug_mode_artifacts(self, black_on_white_sketch: Path, test_dir: Path):
        """Verifies that debug mode exports all intermediate stages."""
        debug_dir = test_dir / "debug_outputs"
        output_path = test_dir / "final_model_ready.png"
        config = PreprocessingConfig(
            debug=True,
            debug_dir=str(debug_dir),
            generate_diagnostic_edges=True,
        )

        preprocess_sketch(
            str(black_on_white_sketch),
            str(output_path),
            config=config,
            debug=True,
        )

        assert (debug_dir / "original.png").exists()
        assert (debug_dir / "resized.png").exists()
        assert (debug_dir / "contrast.png").exists()
        assert (debug_dir / "denoised.png").exists()
        assert (debug_dir / "final.png").exists()
        assert (debug_dir / "diagnostic_edges.png").exists()


class TestFastAPIBackendIntegration:
    """Integration tests for the FastAPI upload, preprocess, and reconstruct endpoints."""

    def test_health_check(self):
        response = health_check()
        assert response["status"] == "ok"
        assert response["service"] == "Sketch2Shape AI"

    def test_api_preprocess_endpoint(self, black_on_white_sketch: Path):
        with open(black_on_white_sketch, "rb") as f:
            upload_file = UploadFile(
                filename="sketch.png",
                file=f,
                headers={"content-type": "image/png"},
            )
            response = api_preprocess_sketch(
                file=upload_file,
                target_size=320,
                debug=True,
            )
            assert response.success is True
            assert Path(response.processed_image_path).exists()
            assert response.target_dimensions == [320, 320]
            assert response.validation["channels"] == 3

    def test_api_reconstruct_endpoint(self, black_on_white_sketch: Path):
        with open(black_on_white_sketch, "rb") as f:
            upload_file = UploadFile(
                filename="sketch.png",
                file=f,
                headers={"content-type": "image/png"},
            )
            response = api_reconstruct_sketch_to_3d(
                file=upload_file,
                target_size=320,
                output_format="obj",
            )
            assert response.success is True
            assert Path(response.model_3d_path).exists()
            assert response.format == "obj"

    def test_api_rejects_unsupported_file(self):
        fake_txt = io.BytesIO(b"some plain text")
        upload_file = UploadFile(filename="notes.txt", file=fake_txt)
        with pytest.raises(HTTPException) as exc_info:
            api_preprocess_sketch(file=upload_file)
        assert exc_info.value.status_code == 400
        assert "Unsupported file format" in exc_info.value.detail
