# Sketch2Shape AI: Sketch Preprocessing & Backend

Sketch2Shape AI is a hackathon system designed to convert hand-drawn 2D sketches into high-fidelity 3D models using pretrained image-to-3D reconstruction backbones (e.g., **InstantMesh**, Zero123++, TripoSR).

This module delivers a robust, deterministic image preprocessing pipeline built using **Python, OpenCV, and Pillow** that transforms noisy, multi-format user sketches into clean, centered, aspect-ratio-preserved, model-ready images without distorting geometry or eliminating delicate strokes.

---

## 1. Project Structure

```text
ML-hackathon/
├── backend/
│   ├── __init__.py
│   ├── config.py              # Configuration dataclasses (PreprocessingConfig, AppConfig)
│   ├── preprocessing.py       # Core OpenCV/Pillow sketch preprocessing pipeline
│   ├── reconstruction.py      # Reconstruction engine interface (InstantMesh adapter)
│   └── main.py                # FastAPI backend endpoints (/api/preprocess, /api/reconstruct)
├── tests/
│   ├── __init__.py
│   ├── conftest.py            # Test image fixtures for 10 distinct edge-case categories
│   └── test_preprocessing.py  # Comprehensive pytest suite (16 tests, 100% pass)
├── requirements.txt           # Project dependencies
└── README.md
```

---

## 2. Preprocessing Pipeline Architecture

The preprocessing pipeline follows 9 explicit stages:

```text
Uploaded Sketch (PNG / JPEG / WebP / BMP)
          ↓
[1] Safe File Loading & Alpha Blending (Pillow)
    - Composites RGBA/LA/P transparency over solid white canvas
    - Prevents black/magenta transparent halo artifacts
          ↓
[2] Polarity Normalization (OpenCV / NumPy)
    - Detects chalkboard / dark canvas inputs
    - Automatically inverts white-on-black strokes to dark-on-white
          ↓
[3] Aspect-Ratio Preserving Resize & Safety Margin Padding (OpenCV)
    - Calculates uniform scale factor to prevent geometric distortion
    - Uses cv2.INTER_AREA for downscaling (preserves thin strokes)
    - Centers sketch on square canvas (e.g. 320x320) with 10% safety margin
          ↓
[4] Conservative Contrast Enhancement (OpenCV CLAHE)
    - Converts RGB → CIELAB color space
    - Applies CLAHE (clipLimit=1.5, grid=8x8) only to Lightness (L) channel
    - Enhances faint pencil strokes without color shifts or blown highlights
          ↓
[5] Edge-Preserving Noise Reduction (OpenCV Bilateral Filter)
    - Applies cv2.bilateralFilter (d=5, sigmaColor=25, sigmaSpace=25)
    - Smooths paper grain and background noise while preserving sharp contours
          ↓
[6] Color Mode Format & Compatibility
    - Output formatted as 3-channel RGB (uint8 [0, 255])
          ↓
[7] Quality & Specification Validation
    - Verifies exact target dimensions, channels, pixel variance, and data integrity
          ↓
[8] Atomic Disk Persistence
    - Saves model-ready image to destination path without mutating original sketch
          ↓
[9] Debug Intermediate Stage Export (Optional)
    - Exports original, resized, contrast, denoised, and final stages for inspection
```

---

## 3. Why These OpenCV Operations Were Chosen

| Stage | Operation | Rationale & Why It Was Selected |
| :--- | :--- | :--- |
| **Alpha Compositing** | `Image.paste(..., mask=alpha)` over white | Transparent PNG sketches often have black or zero RGB in transparent regions. Direct conversion without alpha compositing creates black halo borders that destroy 3D silhouette reconstruction. |
| **Canvas Padding & Centering** | `cv2.resize(..., cv2.INTER_AREA)` + canvas centering | 3D models like InstantMesh evaluate multi-view camera projections rotated around the center. Stretching an image distorts the object's 3D proportions; placing it too close to the edge causes clipping during novel view synthesis. `INTER_AREA` avoids pixel-skipping on thin lines. |
| **Contrast Enhancement** | CLAHE on LAB Lightness (`L`) | Global histogram equalization or aggressive thresholding destroys pencil shading and blows out faint lines. CLAHE on the `L` channel enhances faint pencil strokes adaptively while preserving chromaticity and preventing overexposure. |
| **Noise Filtering** | Bilateral Filter (`cv2.bilateralFilter`) | Standard Gaussian blur softens lines, corners, and thin curves. Morphological operations alter contour geometry. Bilateral filtering weights pixels by both spatial distance and radiometric similarity, smoothing flat paper grain while leaving sharp strokes crisp. |
| **Thresholding / Binarization** | Disabled by default (conservative) | Binarization destroys anti-aliasing and stroke pressure variations, which image-to-3D diffusion priors rely on for depth estimation. Kept as an explicit opt-in setting. |

---

## 4. Integration with the Backend

The FastAPI backend provides two primary endpoints:

1. **`POST /api/preprocess`**: Preprocesses uploaded sketches and returns validated image paths, dimensional metadata, and debug directory paths.
2. **`POST /api/reconstruct`**: Executes the end-to-end pipeline:
   - Validates upload format and file size
   - Preserves the original uploaded file in `uploads/`
   - Executes `preprocess_sketch()` to generate a clean 320x320 image
   - Passes the processed path to `reconstruct_3d()`
   - Outputs the generated 3D mesh (`.obj` or `.glb`)

---

## 5. Installation & Setup

### Environment Requirements
- Python 3.10+ (tested on Python 3.14)
- Dependencies installed via pip or uv:

```bash
# Using standard pip:
pip install -r requirements.txt

# Or using uv:
uv pip install -r requirements.txt
```

---

## 6. How to Run the Tests

Execute pytest against the test suite:

```bash
# Run all tests with verbose output:
python -m pytest -v

# Run with stdout printing:
python -m pytest -s -v
```

All 16 test cases verify:
- ✅ Black sketch on white background
- ✅ White sketch on black chalkboard background (auto-inversion)
- ✅ Colored RGB sketch preservation
- ✅ Grayscale (mode 'L') safe conversion
- ✅ RGBA transparent sketch compositing
- ✅ Non-square aspect ratio canvas padding (900x300 banner)
- ✅ Low-contrast faint pencil enhancement
- ✅ Preservation of 1px thin sketch lines
- ✅ Mild paper texture/sensor noise reduction
- ✅ Error handling for corrupted, empty, and missing files
- ✅ Non-mutation check (original input file SHA-256 untouched)
- ✅ Debug intermediate stage image generation
- ✅ FastAPI `/health`, `/api/preprocess`, and `/api/reconstruct` integration

---

## 7. Python Usage Example

```python
from backend.preprocessing import preprocess_sketch
from backend.config import PreprocessingConfig

# 1. Simple call with default settings (320x320 RGB for InstantMesh):
output_image_path = preprocess_sketch(
    input_path="uploads/user_sketch.png",
    output_path="outputs/preprocessing/model_ready.png",
    target_size=(320, 320),
)

# 2. Configurable call with custom parameters and debug mode enabled:
custom_cfg = PreprocessingConfig(
    target_size=(512, 512),
    padding_ratio=0.15,
    clahe_clip_limit=2.0,
    noise_filter_type="bilateral",
    auto_invert_dark_background=True,
    debug=True,
    debug_dir="outputs/preprocessing/debug_session_1",
)

output_image_path = preprocess_sketch(
    input_path="uploads/faint_sketch.jpg",
    output_path="outputs/preprocessing/model_ready_512.png",
    config=custom_cfg,
    debug=True,
)
```

---

## 8. Debug Image Output

When `debug=True` (or passing `?debug=true` to `/api/preprocess`), the intermediate images are saved to `outputs/preprocessing/<debug_dir>/`:

1. `original.png`: Loaded image after alpha compositing.
2. `resized.png`: Uniformly scaled and centered on the padded square canvas.
3. `contrast.png`: After conservative CLAHE contrast adjustment.
4. `denoised.png`: After edge-preserving bilateral filtering.
5. `final.png`: Final model-ready output.
6. `diagnostic_edges.png`: (Optional) Canny edge diagnostic map.

During normal production inference (`debug=False`), no intermediate images are written to disk.

---

## 9. Reconstruction Model Specifications (InstantMesh)

- **Target Resolution**: InstantMesh natively operates with multi-view Zero123++ diffusion backbones expecting **`320x320`** (or **`512x512`** in high-resolution variants) RGB tensors.
- **Background**: Solid white (`[255, 255, 255]`) background.
- **Padding Margin**: A 10-15% safety margin around the sketch object is essential to avoid clipping the object geometry when camera views rotate during 3D reconstruction.
- **Normalization**: Pixel values are uint8 `[0, 255]` on disk; reconstruction models normalize internally to `[0.0, 1.0]` or `[-1.0, 1.0]`.
