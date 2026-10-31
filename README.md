# Sketch2Shape AI: Sketch Understanding & 3D Reconstruction

Sketch2Shape AI is an end-to-end hackathon system that converts hand-drawn 2D sketches into 3D models using **Llama 3.2 Vision** for deep semantic understanding, **2.5D Volumetric Generation** (Depth and Normal mapping), and **InstantMesh** for sparse-view 3D mesh reconstruction.

---

## 1. Project Architecture

```text
ML-hackathon/
├── backend/
│   ├── __init__.py
│   ├── config.py                  # Configuration dataclasses (PreprocessingConfig, ForegroundIsolationConfig, Generation25DConfig, AppConfig)
│   ├── preprocessing.py           # OpenCV/Pillow sketch preprocessing (resizing, padding, CLAHE, bilateral filtering)
│   ├── foreground_isolation.py    # rembg & OpenCV morphological background removal, mask hole-filling & centering
│   ├── generation_25d.py          # Monocular Depth estimation, Tangent-space Normal maps, Watertight 3D Relief meshes
│   ├── vision_analysis.py         # Llama 3.2 Vision semantic analysis with resilient OpenCV heuristic fallback
│   ├── reconstruction.py          # Reconstruction engine interface (InstantMesh adapter)
│   └── main.py                    # FastAPI backend endpoints (/api/preprocess, /api/foreground-isolate, /api/generate-25d, /api/reconstruct)
├── frontend/
│   ├── index.html                 # Vite entry point
│   ├── package.json               # React frontend package definition
│   ├── vite.config.js             # Vite configuration with API proxying
│   ├── dist/                      # Built standalone React SPA (served directly by FastAPI at http://localhost:8000)
│   └── src/
│       ├── App.jsx                # Interactive drawing canvas, sample sketches, vision cards, and 3D mesh viewer
│       ├── main.jsx               # React DOM root
│       └── index.css              # Tailwind / modern styling
├── tests/
│   ├── __init__.py
│   ├── conftest.py                # Test image fixtures for 10 sketch categories
│   ├── test_preprocessing.py      # 16 unit and functional tests for OpenCV preprocessing
│   ├── test_foreground_isolation.py # 3 tests for background removal, alpha cleaning & re-centering
│   ├── test_generation_25d.py     # 4 tests for depth estimation, normal map encoding & 3D relief mesh
│   └── test_vision.py             # 9 tests for Llama 3.2 Vision understanding and API routes
├── requirements.txt               # Python backend dependencies
└── README.md
```

---

## 2. End-to-End Pipeline

```text
User Sketch (Interactive Canvas or Upload: PNG/JPEG/WebP)
                      ↓
[1] OpenCV Preprocessing Module
    - Alpha compositing over solid white canvas (eliminates black halo borders)
    - Background polarity detection & auto-inversion (supports chalkboard sketches)
    - Aspect-ratio preserving uniform scaling & square canvas padding (320x320)
    - Conservative CLAHE on CIELAB Lightness channel (enhances faint lines)
    - Edge-preserving Bilateral Filter (removes paper grain while keeping thin lines crisp)
                      ↓
[2] Llama 3.2 Vision Semantic Understanding
    - Analyzes visible components, geometric silhouette, symmetry, viewing angle
    - Generates 3D reconstruction prompt
    - Returns structured JSON validated via Pydantic (with local CV heuristic fallback)
                      ↓
[3] Foreground Isolation (rembg + OpenCV)
    - Isolates sketch foreground from paper background / scanner noise
    - Morphological closing (cv2.MORPH_CLOSE) seals broken line gaps
    - Connected component filtering removes noise specks (<0.5% image area)
    - Crops to bounding box and re-centers on white canvas with 10% safety margin
                      ↓
[4] 2.5D Volumetric Generation
    - Monocular Depth Estimation: Balloon inflation model using Euclidean distance transform + surface shading
    - Surface Normal Map: Calculates spatial gradients (dx, dy) mapped to tangent-space RGB colors
    - Watertight 3D Relief Mesh: Displaces heightfield grid and builds base + side skirts (.obj/.glb)
                      ↓
[5] InstantMesh 3D Reconstruction Pipeline
    - Generates 6 sparse multi-view projections
    - Uses vision reconstruction prompt for metadata and downstream refinement
    - Produces downloadable Wavefront OBJ / GLB 3D mesh asset
```

---

## 3. 2.5D Volumetric Generation & Foreground Isolation Details

### 1. Foreground Isolation (`backend/foreground_isolation.py`)
- **Neural & Morphological Isolation**: Employs `rembg` (BiRefNet) with an edge-preserving OpenCV fallback.
- **Mask Denoising & Hole-Sealing**: Morphological closing (`cv2.MORPH_CLOSE`) seals broken line strokes; connected component filtering eliminates background dust specks smaller than 0.5% image area.
- **Aspect-Preserved Centering**: Crops to the tight bounding box and composites onto a pure white canvas with configurable safety padding.

### 2. 2.5D Generation (`backend/generation_25d.py`)
- **Monocular Depth Estimation**: Balloon inflation model utilizing Euclidean distance transform combined with surface shading gradients to predict relative distance ($Z$).
- **Tangent-Space Normal Map**: Computes spatial gradients ($\partial Z / \partial x$, $\partial Z / \partial y$) mapped to standard OpenGL tangent-space RGB colors (`#8080FF` neutral background).
- **Watertight 3D Relief Mesh**: Displaces an elevation grid and constructs base + side walls, exporting verified `.obj` and `.glb` files via Trimesh.

---

## 4. API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/health` | Service health status and module configuration |
| `POST` | `/api/preprocess` | OpenCV sketch validation, aspect ratio padding, CLAHE, and denoising |
| `POST` | `/api/analyze-sketch` | Preprocessing + Llama 3.2 Vision structured semantic analysis |
| `POST` | `/api/foreground-isolate` | Isolates sketch foreground, denoises mask, re-centers on white canvas |
| `POST` | `/api/generate-25d` | Generates Depth Map, Surface Normal Map, and 3D Relief Mesh |
| `POST` | `/api/pipeline/full` | Full chained pipeline: Preprocess ➔ Vision ➔ Foreground ➔ 2.5D ➔ 3D |
| `POST` | `/api/reconstruct` | Preprocess → Vision Analysis → InstantMesh 3D Asset |
| `GET` | `/` | Serves the interactive React single page application |

---

## 5. How to Run the Application

### 1. Backend Server & Frontend UI
```bash
# Start FastAPI backend (automatically serves API + React UI at http://localhost:8000)
.venv\Scripts\python.exe -m uvicorn backend.main:app --host 0.0.0.0 --port 8000 --reload
```

Open `http://localhost:8000` in any browser to access:
- Interactive HTML5 sketch drawing pad with brush controls
- Quick 1-click sample sketches (Chair, Coffee Mug, Vehicle, Rough Ambiguous)
- Side-by-side OpenCV preprocessed image comparison
- Full Llama 3.2 Vision analysis dashboard
- Foreground isolation and 2.5D Depth & Normal maps
- InstantMesh 3D asset generation and `.obj` mesh download

### 2. Optional: Run React Frontend in Vite Dev Server
```bash
cd frontend
npm install
npm run dev
```

---

## 6. How to Run Tests

Execute the complete pytest suite (32/32 tests passing):

```bash
# Run all tests with verbose output:
.venv\Scripts\python.exe -m pytest -v
```

Test coverage includes:
- ✅ 10 required OpenCV preprocessing test cases
- ✅ Llama 3.2 Vision semantic understanding
- ✅ Foreground isolation, alpha mask denoising, and canvas centering
- ✅ 2.5D monocular depth map, surface normal map, and watertight relief mesh generation
- ✅ FastAPI `/api/preprocess`, `/api/foreground-isolate`, `/api/generate-25d`, `/api/pipeline/full`, and `/api/reconstruct` endpoints
