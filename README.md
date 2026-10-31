# Sketch2Shape AI: Sketch Understanding & 3D Reconstruction

Sketch2Shape AI is an end-to-end hackathon system that converts hand-drawn 2D sketches into 3D models using **Llama 3.2 Vision** for deep semantic understanding and **InstantMesh** for sparse-view 3D mesh reconstruction.

---

## 1. Project Architecture

```text
ML-hackathon/
├── backend/
│   ├── __init__.py
│   ├── config.py              # Configuration dataclasses (PreprocessingConfig, LlamaVisionConfig, AppConfig)
│   ├── preprocessing.py       # OpenCV/Pillow sketch preprocessing (resizing, padding, CLAHE, bilateral filtering)
│   ├── vision_analysis.py     # Llama 3.2 Vision semantic analysis with resilient OpenCV heuristic fallback
│   ├── reconstruction.py      # Reconstruction engine interface (InstantMesh adapter)
│   └── main.py                # FastAPI backend endpoints (/api/preprocess, /api/analyze-sketch, /api/reconstruct)
├── frontend/
│   ├── index.html             # Vite entry point
│   ├── package.json           # React frontend package definition
│   ├── vite.config.js         # Vite configuration with API proxying
│   ├── dist/                  # Built standalone React SPA (served directly by FastAPI at http://localhost:8000)
│   └── src/
│       ├── App.jsx            # Interactive drawing canvas, sample sketches, vision cards, and 3D mesh viewer
│       ├── main.jsx           # React DOM root
│       └── index.css          # Tailwind / modern styling
├── tests/
│   ├── __init__.py
│   ├── conftest.py            # Test image fixtures for 10 sketch categories
│   ├── test_preprocessing.py  # 16 unit and functional tests for OpenCV preprocessing
│   └── test_vision.py         # 9 tests for Llama 3.2 Vision understanding and API routes
├── requirements.txt           # Python backend dependencies
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
    - Encodes preprocessed image to base64
    - Analyzes:
      * Primary object and category
      * Visible components (strictly distinguishing observed strokes from inferred 3D semantics)
      * Geometric silhouette, symmetry, proportions, and primitives
      * Viewing angle / orientation (three-quarter perspective, front, side, etc.)
      * Uncertainties, occlusions, and missing details
      * 3D reconstruction prompt
    - Returns structured JSON validated via Pydantic
    - Resilient fallback to local OpenCV heuristic analysis when no remote API key is set
                      ↓
[3] InstantMesh 3D Reconstruction Pipeline
    - Receives clean, preprocessed 320x320 RGB image tensor
    - Generates 6 sparse multi-view projections
    - Uses vision reconstruction prompt for metadata and optional downstream refinement
    - Produces downloadable Wavefront OBJ / GLB 3D mesh asset
```

---

## 3. Llama 3.2 Vision Configuration

To use remote Llama 3.2 Vision inference, set one of the following environment variables:

```bash
# Option A: Groq Cloud (Free / Ultra-fast Llama 3.2 Vision)
export GROQ_API_KEY="your_groq_api_key_here"
# or in PowerShell:
$env:GROQ_API_KEY="your_groq_api_key_here"

# Option B: Together AI
export TOGETHER_API_KEY="your_together_api_key_here"

# Option C: Local Ollama (Completely offline & private)
# Start Ollama with llama3.2-vision:
# ollama run llama3.2-vision
export LLAMA_VISION_BASE_URL="http://localhost:11434/v1"
```

> **Zero-Config Resilient Fallback:** If no cloud API key is configured or if the remote endpoint times out, the backend automatically triggers an internal OpenCV Heuristic Computer Vision Engine. It detects stroke density, contours, aspect ratio, primitives (rectangles, ellipses), and orientation to return valid structured JSON without crashing.

---

## 4. Structured JSON Schema

The Llama 3.2 Vision analysis returns structured JSON with the following schema:

```json
{
  "object_type": "chair",
  "category": "furniture",
  "view_type": "three-quarter perspective",
  "confidence_score": 0.88,
  "description": "Hand-drawn sketch depicting a minimalist four-legged wooden chair. Observed strokes delineate a horizontal rectangular seat and vertical backrest, while inferred 3D semantics indicate four load-bearing leg posts.",
  "visible_parts": [
    {
      "name": "seat surface",
      "observed": "horizontal planar boundary stroke",
      "inferred": "flat horizontal seating platform",
      "relationships": "connects backrest to support legs"
    },
    {
      "name": "backrest",
      "observed": "vertical upward boundary strokes above seat level",
      "inferred": "lumbar support frame",
      "relationships": "extends upward from rear edge of seat"
    },
    {
      "name": "legs",
      "observed": "four downward vertical stroke lines",
      "inferred": "four load-bearing vertical support posts",
      "relationships": "extend downward from underside of seat to ground"
    }
  ],
  "geometry_features": {
    "overall_shape": "prismatic silhouette with slender supports",
    "symmetry": "bilaterally symmetric along vertical axis",
    "proportions": "width-to-height ratio approximately 0.85:1",
    "stroke_characteristics": "clean continuous pencil strokes",
    "observed_geometric_primitives": ["rectangle", "parallel lines"]
  },
  "uncertainties": [
    "Rear leg thickness and joint connections are simplified in 2D line work",
    "Cushion depth is ambiguous from single contour"
  ],
  "reconstruction_prompt": "A minimalist modern chair 3D model, four straight vertical legs, flat seat base, vertical backrest, clean wooden or matte plastic texture, centered on white background, 3D asset ready for reconstruction."
}
```

---

## 5. API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/health` | Service health status and vision model configuration |
| `POST` | `/api/preprocess` | OpenCV sketch validation, aspect ratio padding, CLAHE, and denoising |
| `POST` | `/api/analyze-sketch` | Preprocessing + Llama 3.2 Vision structured semantic analysis |
| `POST` | `/api/reconstruct` | End-to-end pipeline: Preprocess → Vision Analysis → InstantMesh 3D Asset |
| `GET` | `/` | Serves the interactive React single page application |

---

## 6. How to Run the Application

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
- InstantMesh 3D asset generation and `.obj` mesh download

### 2. Optional: Run React Frontend in Vite Dev Server
```bash
cd frontend
npm install
npm run dev
```

---

## 7. How to Run Tests

Execute the complete pytest suite (25/25 tests passing):

```bash
# Run all tests with verbose output:
.venv\Scripts\python.exe -m pytest -v
```

Test coverage includes:
- ✅ 10 required OpenCV preprocessing test cases (black-on-white, white-on-black, RGB, grayscale, RGBA transparency, non-square aspect ratio, low contrast, thin 1px lines, noisy sketch, corrupted image)
- ✅ Llama 3.2 Vision semantic understanding (chair, coffee mug, rough ambiguous sketch)
- ✅ Distinguishing observed strokes from inferred 3D semantics
- ✅ Structured JSON schema validation
- ✅ Remote vision API inference mocking and error fallback
- ✅ FastAPI `/api/preprocess`, `/api/analyze-sketch`, and `/api/reconstruct` endpoints
