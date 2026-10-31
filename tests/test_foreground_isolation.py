"""Tests for Foreground Isolation and Background Removal Module."""

from pathlib import Path
import numpy as np
from PIL import Image

from backend.config import ForegroundIsolationConfig
from backend.foreground_isolation import (
    clean_alpha_mask,
    composite_and_center,
    isolate_foreground,
)


def test_clean_alpha_mask_removes_specks():
    """Verify that clean_alpha_mask filters small noise specks and fills holes."""
    mask = np.zeros((100, 100), dtype=np.uint8)
    # Main object: 30x30 square
    mask[20:50, 20:50] = 255
    # Small internal hole
    mask[30:35, 30:35] = 0
    # Stray dust speck: 2x2 pixels (<0.5% area)
    mask[80:82, 80:82] = 255

    cleaned = clean_alpha_mask(mask, min_area_ratio=0.01, morph_kernel_size=7)

    # Main object retained
    assert cleaned[25, 25] == 255
    # Internal hole sealed by morphological closing
    assert cleaned[32, 32] == 255
    # Stray speck removed
    assert cleaned[81, 81] == 0


def test_composite_and_center_geometry(test_dir: Path):
    """Verify that composite_and_center calculates bounds, preserves aspect ratio and centers."""
    # Create 200x200 canvas with off-center 40x80 object
    rgba = np.zeros((200, 200, 4), dtype=np.uint8)
    rgba[50:130, 20:60, :3] = (0, 0, 0)
    rgba[50:130, 20:60, 3] = 255

    centered_rgba, centered_comp, bbox = composite_and_center(
        rgba, target_size=(320, 320), padding_ratio=0.1
    )

    assert centered_rgba.shape == (320, 320, 4)
    assert centered_comp.shape == (320, 320, 3)
    assert bbox == (20, 50, 40, 80)

    # Check that object is roughly centered: center of mass near (160, 160)
    alpha = centered_rgba[:, :, 3]
    y_indices, x_indices = np.nonzero(alpha)
    assert abs(np.mean(x_indices) - 160) < 10
    assert abs(np.mean(y_indices) - 160) < 10


def test_isolate_foreground_end_to_end(black_on_white_sketch: Path, test_dir: Path):
    """Verify end-to-end foreground isolation pipeline with generated sketch."""
    out_dir = test_dir / "fg_out"
    config = ForegroundIsolationConfig(method="contour")

    res = isolate_foreground(
        input_image_path=black_on_white_sketch,
        output_dir=out_dir,
        target_size=(320, 320),
        config=config,
    )

    assert res.success is True
    assert Path(res.rgba_path).exists()
    assert Path(res.composite_path).exists()
    assert Path(res.mask_path).exists()
    assert res.foreground_pixel_ratio > 0.0

    # Validate output dimensions
    with Image.open(res.composite_path) as img:
        assert img.size == (320, 320)
        assert img.mode == "RGB"

    with Image.open(res.rgba_path) as img:
        assert img.size == (320, 320)
        assert img.mode == "RGBA"
