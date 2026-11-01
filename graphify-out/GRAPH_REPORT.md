# Graph Report - ML-hackathon  (2026-11-01)

## Corpus Check
- 37 files · ~44,497 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 3, .css 1, .ipynb 1)

## Summary
- 529 nodes · 1154 edges · 17 communities (13 shown, 4 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 28 edges (avg confidence: 0.93)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1c2cf083`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- refinement.py
- preprocess_sketch
- generate_25d
- isolate_foreground
- StudioApp.jsx
- test_vision.py
- test_refinement.py
- 2.5D Volumetric Generation Module
- colab_backend.py
- conftest.py
- Test Package Modules
- rules/graphify.md
- workflows/graphify.md
- refine_sketch_pipeline
- main.py
- test_prompt_priority_and_studio_refinement.py

## God Nodes (most connected - your core abstractions)
1. `preprocess_sketch()` - 27 edges
2. `analyze_sketch_with_llama_vision()` - 24 edges
3. `SketchAnalysisResult` - 23 edges
4. `refine_sketch_pipeline()` - 22 edges
5. `isolate_foreground()` - 19 edges
6. `generate_25d()` - 18 edges
7. `api_preprocess_sketch()` - 16 edges
8. `TestSketchPreprocessing` - 15 edges
9. `api_reconstruct_sketch_to_3d()` - 14 edges
10. `load_image_safely()` - 14 edges

## Surprising Connections (you probably didn't know these)
- `Google Gemini Vision API Sketch Understanding` --semantically_similar_to--> `Llama 3.2 Vision Semantic Understanding`  [INFERRED] [semantically similar]
  colab_gemini_prompt.md → README.md
- `Fast 3D Reconstruction (TripoSR)` --semantically_similar_to--> `InstantMesh 3D Reconstruction Pipeline`  [INFERRED] [semantically similar]
  colab_gemini_prompt.md → README.md
- `TestLlamaVisionSketchUnderstanding` --uses--> `SketchAnalysisResult`  [INFERRED]
  tests/test_vision.py → backend/vision_analysis.py
- `Sketch2Shape AI System` --references--> `fastapi Dependency`  [INFERRED]
  README.md → requirements.txt
- `OpenCV Preprocessing Module` --references--> `opencv-python-headless Dependency`  [INFERRED]
  README.md → requirements.txt

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Sketch2Shape Core End-to-End Pipeline** — readme_opencv_preprocessing_module, readme_llama_vision_understanding, readme_foreground_isolation_module, readme_generation_25d_module, readme_instantmesh_reconstruction_pipeline [EXTRACTED 1.00]
- **2.5D Volumetric Generation Suite** — readme_generation_25d_module, readme_balloon_inflation_depth, readme_tangent_space_normal_mapping, readme_watertight_relief_mesh [EXTRACTED 1.00]

## Communities (17 total, 4 thin omitted)

### Community 0 - "refinement.py"
Cohesion: 0.07
Nodes (59): AppConfig, _collect_hf_tokens(), InstantMeshConfig, NvidiaTrellisConfig, Configuration module for Sketch2Shape AI Preprocessing, Vision, and Backend., Settings for cloud-accelerated 3D reconstruction via Hugging Face Spaces., Settings for Microsoft TRELLIS 3D model inference on NVIDIA DGX Cloud NIM., Application-wide paths and settings. (+51 more)

### Community 1 - "preprocess_sketch"
Cohesion: 0.05
Nodes (47): PreprocessingConfig, Configuration options for sketch image preprocessing., health_check(), Any, get, Health check endpoint to verify backend service and model status., serve_frontend_spa(), apply_optional_threshold() (+39 more)

### Community 2 - "generate_25d"
Cohesion: 0.06
Nodes (60): Generation25DConfig, Settings for 2.5D depth estimation, normal map generation, relief mesh, and…, compute_surface_normals(), estimate_depth_map(), export_relief_3d_mesh(), extract_clean_object_mask(), generate_25d(), Generation25DResult (+52 more)

### Community 3 - "isolate_foreground"
Cohesion: 0.22
Nodes (11): ForegroundIsolationConfig, Settings for foreground extraction and background removal., _extract_solid_sketch_silhouette(), _extract_with_gemini_isolation(), isolate_foreground(), Path, Extracts a watertight, solid subject silhouette from sketch strokes. Prevents…, Uses Gemini Vision API to detect the subject bounding box, ignore desk/paper… (+3 more)

### Community 4 - "StudioApp.jsx"
Cohesion: 0.05
Nodes (44): dependencies, react, react-dom, react-router-dom, three, devDependencies, autoprefixer, postcss (+36 more)

### Community 5 - "test_vision.py"
Cohesion: 0.06
Nodes (36): _analyze_with_gemini(), _clean_json_text(), encode_image_to_base64(), GeometryFeatures, _heuristic_sketch_analysis(), BaseModel, Path, Reads an image file and converts it to a base64 data string. (+28 more)

### Community 6 - "test_refinement.py"
Cohesion: 0.11
Nodes (26): Settings for AI sketch image refinement, prompt conditioning, and quality…, RefinementConfig, build_conditioned_prompts(), Synthesizes structured refinement prompts combining Llama analysis and user…, Rigorous structural and visual validation. Checks: - Shape, dimensions, and…, validate_refinement_quality(), fastapi_testclient, mock_clean_sketch() (+18 more)

### Community 7 - "2.5D Volumetric Generation Module"
Cohesion: 0.08
Nodes (29): Colab GPU Backend Architecture, Google Gemini Vision API Sketch Understanding, Public Tunnel (pyngrok / localtunnel), Ultra-HD 3D Reconstruction (Hunyuan3D-2 / TRELLIS), Fast 3D Reconstruction (TripoSR), GPU Memory & VRAM Management, React DOM Mount Root, Tailwind Theme Configuration (+21 more)

### Community 8 - "colab_backend.py"
Cohesion: 0.06
Nodes (58): AnalysisResponse, analyze_sketch(), api_analyze(), api_foreground_isolate(), api_full_pipeline(), api_generate_25d(), api_preprocess(), api_reconstruct() (+50 more)

### Community 9 - "conftest.py"
Cohesion: 0.12
Nodes (28): pytest, black_on_white_sketch(), corrupted_image(), empty_image(), grayscale_sketch(), low_contrast_sketch(), noisy_sketch(), non_square_sketch() (+20 more)

### Community 17 - "refine_sketch_pipeline"
Cohesion: 0.14
Nodes (18): preprocess_and_enhance_contrast(), preserve_and_denoise_lines(), ndarray, Path, Applies conservative edge-preserving bilateral filtering to suppress noise…, High-fidelity sketch refinement synthesizer. Produces crisp, studio-grade…, Attempts to run pretrained ControlNet Scribble / SD img2img if diffusers &…, Generates an ultra-clean, solid 3D studio concept graphic using Gemini Vision +… (+10 more)

### Community 18 - "main.py"
Cohesion: 0.15
Nodes (31): AnalysisResponse, api_analyze_sketch(), api_full_pipeline(), api_generate_25d(), api_isolate_foreground(), api_preprocess_sketch(), api_reconstruct_sketch_to_3d(), api_refine_sketch() (+23 more)

### Community 20 - "test_prompt_priority_and_studio_refinement.py"
Cohesion: 0.19
Nodes (12): fastapi_datastructures, fixture, Path, Unit and integration tests for user prompt priority, solid foreground…, Creates a synthetic conical sketch resembling an adapter or shuttlecock., Verifies that an explicit user prompt defines the object identity and…, Verifies that sketch foreground isolation preserves solid interiors (not hollow…, Verifies all endpoints accept user_prompt without error and propagate it. (+4 more)

## Knowledge Gaps
- **37 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+32 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 230 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `preprocess_sketch()` connect `preprocess_sketch` to `refinement.py`, `main.py`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **Why does `analyze_sketch_with_llama_vision()` connect `main.py` to `refinement.py`, `refine_sketch_pipeline`, `test_prompt_priority_and_studio_refinement.py`, `test_vision.py`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **Are the 12 inferred relationships involving `SketchAnalysisResult` (e.g. with `AnalysisResponse` and `api_full_pipeline()`) actually correct?**
  _`SketchAnalysisResult` has 12 INFERRED edges - model-reasoned connections that need verification._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _37 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `refinement.py` be split into smaller, more focused modules?**
  _Cohesion score 0.0711849957374254 - nodes in this community are weakly interconnected._
- **Should `preprocess_sketch` be split into smaller, more focused modules?**
  _Cohesion score 0.052083333333333336 - nodes in this community are weakly interconnected._
- **Should `generate_25d` be split into smaller, more focused modules?**
  _Cohesion score 0.05792349726775956 - nodes in this community are weakly interconnected._