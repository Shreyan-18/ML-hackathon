# Graph Report - ML-hackathon  (2026-10-31)

## Corpus Check
- 27 files · ~27,996 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 3, .css 1)

## Summary
- 339 nodes · 725 edges · 14 communities (9 shown, 5 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 13 edges (avg confidence: 0.94)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5c3af5ca`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- main.py
- Sketch Validation & Processing Core
- Vision Model Testing & Fixtures
- Preprocessing Pytest Fixtures
- numpy
- React Frontend Package & Build Tooling
- DESIGN.md
- api_preprocess_sketch
- System Architecture & Model Backbones
- FastAPI Dependency
- NumPy Dependency
- OpenCV Dependency
- Pillow Dependency

## God Nodes (most connected - your core abstractions)
1. `preprocess_sketch()` - 28 edges
2. `analyze_sketch_with_llama_vision()` - 21 edges
3. `isolate_foreground()` - 17 edges
4. `generate_25d()` - 17 edges
5. `api_preprocess_sketch()` - 17 edges
6. `validate_processed_image()` - 15 edges
7. `TestSketchPreprocessing` - 15 edges
8. `api_reconstruct_sketch_to_3d()` - 13 edges
9. `SketchAnalysisResult` - 13 edges
10. `api_full_pipeline()` - 12 edges

## Surprising Connections (you probably didn't know these)
- `TestSketchPreprocessing` --uses--> `PreprocessingConfig`  [INFERRED]
  tests/test_preprocessing.py → backend/config.py
- `TestLlamaVisionSketchUnderstanding` --uses--> `LlamaVisionConfig`  [INFERRED]
  tests/test_vision.py → backend/config.py
- `test_isolate_foreground_end_to_end()` --calls--> `isolate_foreground()`  [EXTRACTED]
  tests/test_foreground_isolation.py → backend/foreground_isolation.py
- `TestLlamaVisionSketchUnderstanding` --uses--> `SketchAnalysisResult`  [INFERRED]
  tests/test_vision.py → backend/vision_analysis.py
- `Frontend Vite HTML Entry Point` --conceptually_related_to--> `Sketch2Shape AI`  [INFERRED]
  frontend/index.html → README.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Sketch-to-3D Reconstruction Flow** — readme_opencv_preprocessing, readme_llama_vision_analysis, readme_instantmesh_reconstruction [EXTRACTED 1.00]

## Communities (14 total, 5 thin omitted)

### Community 0 - "main.py"
Cohesion: 0.11
Nodes (7): AppConfig, ForegroundIsolationConfig, PreprocessingConfig, _create_mock_3d_obj(), reconstruct_3d(), ReconstructionResult, test_isolate_foreground_end_to_end()

### Community 1 - "Sketch Validation & Processing Core"
Cohesion: 0.07
Nodes (7): health_check(), preprocess_sketch(), validate_processed_image(), ValidationResult, _compute_hash(), TestFastAPIBackendIntegration, TestSketchPreprocessing

### Community 2 - "Vision Model Testing & Fixtures"
Cohesion: 0.06
Nodes (16): LlamaVisionConfig, api_reconstruct_sketch_to_3d(), ReconstructionResponse, analyze_sketch_with_llama_vision(), _clean_json_text(), encode_image_to_base64(), GeometryFeatures, _heuristic_sketch_analysis() (+8 more)

### Community 3 - "Preprocessing Pytest Fixtures"
Cohesion: 0.12
Nodes (12): black_on_white_sketch(), corrupted_image(), empty_image(), grayscale_sketch(), low_contrast_sketch(), noisy_sketch(), non_square_sketch(), rgb_sketch() (+4 more)

### Community 4 - "numpy"
Cohesion: 0.05
Nodes (25): Generation25DConfig, clean_alpha_mask(), composite_and_center(), _extract_with_opencv_saliency(), _extract_with_rembg(), ForegroundIsolationResult, isolate_foreground(), compute_surface_normals() (+17 more)

### Community 5 - "React Frontend Package & Build Tooling"
Cohesion: 0.07
Nodes (36): dependencies, react@^18.3.1, react-dom@^18.3.1, three@^0.187.0, devDependencies, autoprefixer@^10.6.2, postcss@^8.5.32, tailwindcss@^4.3.3 (+28 more)

### Community 6 - "DESIGN.md"
Cohesion: 0.15
Nodes (12): Brand & Style, Buttons, Chips & Badges, Colors, Components, Elevation & Depth, Input Fields & Prompt Zone, Layout & Spacing (+4 more)

### Community 7 - "api_preprocess_sketch"
Cohesion: 0.15
Nodes (10): AnalysisResponse, api_analyze_sketch(), api_full_pipeline(), api_generate_25d(), api_isolate_foreground(), api_preprocess_sketch(), ForegroundIsolationResponse, FullPipelineResponse (+2 more)

### Community 8 - "System Architecture & Model Backbones"
Cohesion: 0.43
Nodes (5): Frontend Vite HTML Entry Point, InstantMesh 3D Reconstruction Pipeline, Llama 3.2 Vision Semantic Understanding, Sketch2Shape AI, Structured Vision Analysis Schema

## Knowledge Gaps
- **6 isolated node(s):** `FastAPI Dependency`, `NumPy Dependency`, `OpenCV Python Headless Dependency`, `Pillow Dependency`, `Frontend Vite HTML Entry Point` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 142 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `preprocess_sketch()` connect `Sketch Validation & Processing Core` to `main.py`, `numpy`, `api_preprocess_sketch`?**
  _High betweenness centrality (0.081) - this node is a cross-community bridge._
- **What connects `FastAPI Dependency`, `NumPy Dependency`, `OpenCV Python Headless Dependency` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `main.py` be split into smaller, more focused modules?**
  _Cohesion score 0.1091753774680604 - nodes in this community are weakly interconnected._
- **Why does `analyze_sketch_with_llama_vision()` connect `Vision Model Testing & Fixtures` to `main.py`, `api_preprocess_sketch`?**
  _High betweenness centrality (0.061) - this node is a cross-community bridge._
- **Should `Sketch Validation & Processing Core` be split into smaller, more focused modules?**
  _Cohesion score 0.070578231292517 - nodes in this community are weakly interconnected._
- **Why does `validate_processed_image()` connect `Sketch Validation & Processing Core` to `main.py`, `numpy`, `api_preprocess_sketch`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **Should `Vision Model Testing & Fixtures` be split into smaller, more focused modules?**
  _Cohesion score 0.059562841530054644 - nodes in this community are weakly interconnected._