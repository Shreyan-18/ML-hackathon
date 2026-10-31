# Graph Report - ML-hackathon  (2026-10-31)

## Corpus Check
- 33 files · ~133,721 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 3, .css 1, .ipynb 1)

## Summary
- 462 nodes · 962 edges · 21 communities (12 shown, 9 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 20 edges (avg confidence: 0.94)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d43376f8`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- main.py
- preprocess_sketch
- analyze_sketch_with_llama_vision
- conftest.py
- generate_25d
- React Frontend Package & Build Tooling
- DESIGN.md
- api_preprocess_sketch
- System Architecture & Model Backbones
- Path
- rules/graphify.md
- Test Suite Package Init
- FastAPI Dependency
- NumPy Dependency
- OpenCV Dependency
- Pillow Dependency
- AppConfig
- workflows/graphify.md
- colab_backend.py
- isolate_foreground
- colab_gemini_prompt.md

## God Nodes (most connected - your core abstractions)
1. `preprocess_sketch()` - 27 edges
2. `SketchAnalysisResult` - 22 edges
3. `analyze_sketch_with_llama_vision()` - 22 edges
4. `refine_sketch_pipeline()` - 19 edges
5. `isolate_foreground()` - 16 edges
6. `generate_25d()` - 16 edges
7. `api_preprocess_sketch()` - 16 edges
8. `TestSketchPreprocessing` - 15 edges
9. `api_reconstruct_sketch_to_3d()` - 13 edges
10. `validate_processed_image()` - 13 edges

## Surprising Connections (you probably didn't know these)
- `TestSketchPreprocessing` --uses--> `PreprocessingConfig`  [INFERRED]
  tests/test_preprocessing.py → backend/config.py
- `test_isolate_foreground_end_to_end()` --calls--> `ForegroundIsolationConfig`  [EXTRACTED]
  tests/test_foreground_isolation.py → backend/config.py
- `test_generate_25d_end_to_end()` --calls--> `Generation25DConfig`  [EXTRACTED]
  tests/test_generation_25d.py → backend/config.py
- `TestLlamaVisionSketchUnderstanding` --uses--> `SketchAnalysisResult`  [INFERRED]
  tests/test_vision.py → backend/vision_analysis.py
- `Frontend Vite HTML Entry Point` --conceptually_related_to--> `Sketch2Shape AI`  [INFERRED]
  frontend/index.html → README.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Sketch-to-3D Reconstruction Flow** — readme_opencv_preprocessing, readme_llama_vision_analysis, readme_instantmesh_reconstruction [EXTRACTED 1.00]

## Communities (21 total, 9 thin omitted)

### Community 0 - "main.py"
Cohesion: 0.06
Nodes (71): ForegroundIsolationConfig, Generation25DConfig, Configuration module for Sketch2Shape AI Preprocessing, Vision, and Backend., Settings for foreground extraction and background removal., Settings for 2.5D depth estimation, normal map generation, relief mesh, and…, Settings for AI sketch image refinement, prompt conditioning, and quality…, Settings for Vision model inference (Google Gemini or OpenAI/Llama/Groq…, RefinementConfig (+63 more)

### Community 1 - "preprocess_sketch"
Cohesion: 0.05
Nodes (46): PreprocessingConfig, Configuration options for sketch image preprocessing. Attributes: target_size:…, health_check(), Any, get, Health check endpoint to verify backend service and model status., apply_optional_threshold(), enhance_contrast() (+38 more)

### Community 2 - "analyze_sketch_with_llama_vision"
Cohesion: 0.06
Nodes (44): build_conditioned_prompts(), Synthesizes structured refinement prompts combining Llama analysis and user…, analyze_sketch_with_llama_vision(), _analyze_with_gemini(), _clean_json_text(), encode_image_to_base64(), GeometryFeatures, _heuristic_sketch_analysis() (+36 more)

### Community 3 - "conftest.py"
Cohesion: 0.12
Nodes (28): pytest, black_on_white_sketch(), corrupted_image(), empty_image(), grayscale_sketch(), low_contrast_sketch(), noisy_sketch(), non_square_sketch() (+20 more)

### Community 4 - "generate_25d"
Cohesion: 0.08
Nodes (33): compute_surface_normals(), estimate_depth_map(), export_relief_3d_mesh(), generate_25d(), Generation25DResult, get_solid_sketch_silhouette(), Any, ndarray (+25 more)

### Community 5 - "React Frontend Package & Build Tooling"
Cohesion: 0.06
Nodes (37): dependencies, react, react-dom, three, devDependencies, autoprefixer, postcss, tailwindcss (+29 more)

### Community 6 - "DESIGN.md"
Cohesion: 0.15
Nodes (12): Brand & Style, Buttons, Chips & Badges, Colors, Components, Elevation & Depth, Input Fields & Prompt Zone, Layout & Spacing (+4 more)

### Community 7 - "api_preprocess_sketch"
Cohesion: 0.15
Nodes (24): AnalysisResponse, api_analyze_sketch(), api_full_pipeline(), api_generate_25d(), api_isolate_foreground(), api_preprocess_sketch(), api_reconstruct_sketch_to_3d(), api_refine_sketch() (+16 more)

### Community 8 - "System Architecture & Model Backbones"
Cohesion: 0.43
Nodes (7): Frontend Vite HTML Entry Point, InstantMesh 3D Reconstruction Pipeline, Llama 3.2 Vision Semantic Understanding, OpenCV Heuristic CV Engine Fallback, OpenCV Sketch Preprocessing Module, Sketch2Shape AI, Structured Vision Analysis Schema

### Community 9 - "Path"
Cohesion: 0.29
Nodes (8): mock_clean_sketch(), mock_faint_noisy_sketch(), fixture, Path, Tests FastAPI /api/refine-sketch endpoint returns valid RefinementResponse., Creates a sample high-contrast geometric sketch on white background., Creates a faint pencil sketch with paper background noise., test_api_refine_sketch_endpoint()

### Community 18 - "colab_backend.py"
Cohesion: 0.06
Nodes (57): AnalysisResponse, analyze_sketch(), api_analyze(), api_foreground_isolate(), api_full_pipeline(), api_generate_25d(), api_preprocess(), api_reconstruct() (+49 more)

### Community 19 - "isolate_foreground"
Cohesion: 0.11
Nodes (21): clean_alpha_mask(), composite_and_center(), _extract_with_opencv_saliency(), _extract_with_rembg(), ForegroundIsolationResult, isolate_foreground(), ndarray, Path (+13 more)

## Knowledge Gaps
- **39 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+34 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 209 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `preprocess_sketch()` connect `preprocess_sketch` to `main.py`, `generate_25d`, `api_preprocess_sketch`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **Why does `analyze_sketch_with_llama_vision()` connect `analyze_sketch_with_llama_vision` to `main.py`, `api_preprocess_sketch`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._
- **Are the 11 inferred relationships involving `SketchAnalysisResult` (e.g. with `AnalysisResponse` and `api_full_pipeline()`) actually correct?**
  _`SketchAnalysisResult` has 11 INFERRED edges - model-reasoned connections that need verification._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _39 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `main.py` be split into smaller, more focused modules?**
  _Cohesion score 0.061416397296503084 - nodes in this community are weakly interconnected._
- **Should `preprocess_sketch` be split into smaller, more focused modules?**
  _Cohesion score 0.05325140809011777 - nodes in this community are weakly interconnected._
- **Should `analyze_sketch_with_llama_vision` be split into smaller, more focused modules?**
  _Cohesion score 0.06219426974143955 - nodes in this community are weakly interconnected._