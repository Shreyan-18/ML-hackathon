"""Pytest fixtures for Sketch2Shape AI Preprocessing Test Suite."""

from pathlib import Path
import numpy as np
from PIL import Image, ImageDraw
import pytest


@pytest.fixture
def test_dir(tmp_path: Path) -> Path:
    """Fixture providing a clean temporary directory for test artifacts."""
    d = tmp_path / "test_scratch"
    d.mkdir(parents=True, exist_ok=True)
    return d


@pytest.fixture
def black_on_white_sketch(test_dir: Path) -> Path:
    """Test Case 1: Black sketch on white background."""
    path = test_dir / "case1_black_on_white.png"
    img = Image.new("RGB", (500, 500), color=(255, 255, 255))
    draw = ImageDraw.Draw(img)
    # Draw simple chair/cup sketch
    draw.rectangle([150, 200, 350, 400], outline=(0, 0, 0), width=4)
    draw.line([150, 300, 350, 300], fill=(0, 0, 0), width=3)
    draw.ellipse([200, 100, 300, 200], outline=(0, 0, 0), width=4)
    img.save(path)
    return path


@pytest.fixture
def white_on_black_sketch(test_dir: Path) -> Path:
    """Test Case 2: White sketch on black background (chalkboard / inverted)."""
    path = test_dir / "case2_white_on_black.png"
    img = Image.new("RGB", (500, 500), color=(0, 0, 0))
    draw = ImageDraw.Draw(img)
    # White sketch lines
    draw.rectangle([120, 180, 380, 380], outline=(255, 255, 255), width=4)
    draw.ellipse([200, 100, 300, 200], outline=(255, 255, 255), width=4)
    draw.line([120, 380, 250, 460], fill=(255, 255, 255), width=4)
    img.save(path)
    return path


@pytest.fixture
def rgb_sketch(test_dir: Path) -> Path:
    """Test Case 3: Colored RGB sketch image."""
    path = test_dir / "case3_rgb_sketch.jpg"
    img = Image.new("RGB", (450, 450), color=(245, 240, 235))
    draw = ImageDraw.Draw(img)
    # Multicolored pencil sketch
    draw.ellipse([100, 100, 350, 350], outline=(40, 60, 180), width=5)
    draw.line([100, 225, 350, 225], fill=(200, 50, 50), width=4)
    draw.polygon([(225, 120), (280, 220), (170, 220)], outline=(30, 150, 60), width=3)
    img.save(path, format="JPEG")
    return path


@pytest.fixture
def grayscale_sketch(test_dir: Path) -> Path:
    """Test Case 4: Grayscale (mode 'L') sketch image."""
    path = test_dir / "case4_grayscale.png"
    img = Image.new("L", (400, 400), color=255)
    draw = ImageDraw.Draw(img)
    draw.arc([80, 80, 320, 320], start=0, end=270, fill=30, width=4)
    draw.line([80, 200, 320, 200], fill=60, width=3)
    img.save(path)
    return path


@pytest.fixture
def rgba_sketch_with_transparency(test_dir: Path) -> Path:
    """Test Case 5: RGBA image with alpha transparency."""
    path = test_dir / "case5_rgba_transparent.png"
    # Transparent canvas
    img = Image.new("RGBA", (500, 500), color=(0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    # Dark strokes with full opacity
    draw.rectangle([100, 100, 400, 400], outline=(20, 20, 20, 255), width=5)
    draw.ellipse([150, 150, 350, 350], outline=(50, 50, 50, 200), width=4)
    img.save(path)
    return path


@pytest.fixture
def non_square_sketch(test_dir: Path) -> Path:
    """Test Case 6: Non-square aspect ratio image (e.g. 900x300 wide banner)."""
    path = test_dir / "case6_non_square_wide.png"
    img = Image.new("RGB", (900, 300), color=(255, 255, 255))
    draw = ImageDraw.Draw(img)
    draw.line([50, 150, 850, 150], fill=(0, 0, 0), width=5)
    draw.ellipse([350, 50, 550, 250], outline=(0, 0, 0), width=4)
    img.save(path)
    return path


@pytest.fixture
def low_contrast_sketch(test_dir: Path) -> Path:
    """Test Case 7: Low contrast faint pencil drawing."""
    path = test_dir / "case7_low_contrast.png"
    # Background light gray (245), strokes very faint gray (225)
    arr = np.full((400, 400), 245, dtype=np.uint8)
    # Faint sketch lines
    arr[150:250, 150:152] = 220
    arr[150:152, 150:250] = 220
    arr[248:250, 150:250] = 220
    arr[150:250, 248:250] = 220
    img = Image.fromarray(arr, mode="L")
    img.save(path)
    return path


@pytest.fixture
def thin_lines_sketch(test_dir: Path) -> Path:
    """Test Case 8: Sketch containing very light and 1px thin lines."""
    path = test_dir / "case8_thin_lines.png"
    img = Image.new("RGB", (400, 400), color=(255, 255, 255))
    draw = ImageDraw.Draw(img)
    # 1px thin strokes
    draw.line([50, 50, 350, 350], fill=(100, 100, 100), width=1)
    draw.line([50, 350, 350, 50], fill=(120, 120, 120), width=1)
    draw.arc([100, 100, 300, 300], start=45, end=315, fill=(80, 80, 80), width=1)
    img.save(path)
    return path


@pytest.fixture
def noisy_sketch(test_dir: Path) -> Path:
    """Test Case 9: Sketch with sensor / paper texture noise."""
    path = test_dir / "case9_noisy.png"
    np.random.seed(42)
    base = np.full((400, 400), 245, dtype=np.float32)
    # Add dark sketch box
    base[100:300, 98:102] = 30
    base[100:300, 298:302] = 30
    base[98:102, 100:300] = 30
    base[298:302, 100:300] = 30
    # Add Gaussian noise
    noise = np.random.normal(0, 12, (400, 400))
    noisy = np.clip(base + noise, 0, 255).astype(np.uint8)
    img = Image.fromarray(noisy, mode="L")
    img.save(path)
    return path


@pytest.fixture
def corrupted_image(test_dir: Path) -> Path:
    """Test Case 10a: Corrupted file with invalid image payload."""
    path = test_dir / "case10_corrupted.png"
    with open(path, "wb") as f:
        f.write(b"NOT_A_VALID_IMAGE_HEADER_DATA_1234567890")
    return path


@pytest.fixture
def empty_image(test_dir: Path) -> Path:
    """Test Case 10b: Empty 0-byte file."""
    path = test_dir / "case10_empty.png"
    path.touch()
    return path
