# Graph Report - ML-hackathon  (2026-10-31)

## Corpus Check
- 23 files · ~21,858 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: (none) 2, .css 1)

## Summary
- 265 nodes · 507 edges · 14 communities (8 shown, 6 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 8 edges (avg confidence: 0.94)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a1256d64`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Backend Configuration & Settings
- Sketch Validation & Processing Core
- Vision Model Testing & Fixtures
- Preprocessing Pytest Fixtures
- React Frontend Package & Build Tooling
- DESIGN.md
- test_preprocessing.py
- System Architecture & Model Backbones
- FastAPI Dependency
- NumPy Dependency
- OpenCV Dependency
- Pillow Dependency

## God Nodes (most connected - your core abstractions)
1. `preprocess_sketch()` - 27 edges
2. `analyze_sketch_with_llama_vision()` - 20 edges
3. `api_preprocess_sketch()` - 15 edges
4. `validate_processed_image()` - 15 edges
5. `TestSketchPreprocessing` - 15 edges
6. `api_reconstruct_sketch_to_3d()` - 13 edges
7. `SketchAnalysisResult` - 11 edges
8. `react` - 11 edges
9. `TestLlamaVisionSketchUnderstanding` - 11 edges
10. `PreprocessingConfig` - 10 edges

## Surprising Connections (you probably didn't know these)
- `TestLlamaVisionSketchUnderstanding` --uses--> `SketchAnalysisResult`  [INFERRED]
  tests/test_vision.py → backend/vision_analysis.py
- `TestSketchPreprocessing` --uses--> `PreprocessingConfig`  [INFERRED]
  tests/test_preprocessing.py → backend/config.py
- `TestLlamaVisionSketchUnderstanding` --uses--> `LlamaVisionConfig`  [INFERRED]
  tests/test_vision.py → backend/config.py
- `Frontend Vite HTML Entry Point` --conceptually_related_to--> `Sketch2Shape AI`  [INFERRED]
  frontend/index.html → README.md
- `api_preprocess_sketch()` --uses--> `PreprocessingConfig`  [INFERRED]
  backend/main.py → backend/config.py

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Sketch-to-3D Reconstruction Flow** — readme_opencv_preprocessing, readme_llama_vision_analysis, readme_instantmesh_reconstruction [EXTRACTED 1.00]

## Communities (14 total, 6 thin omitted)

### Community 0 - "Backend Configuration & Settings"
Cohesion: 0.14
Nodes (4): AppConfig, _create_mock_3d_obj(), reconstruct_3d(), ReconstructionResult

### Community 1 - "Sketch Validation & Processing Core"
Cohesion: 0.07
Nodes (13): PreprocessingConfig, apply_optional_threshold(), enhance_contrast(), extract_diagnostic_edges(), load_image_safely(), normalize_background_polarity(), preprocess_sketch(), reduce_noise() (+5 more)

### Community 2 - "Vision Model Testing & Fixtures"
Cohesion: 0.06
Nodes (13): LlamaVisionConfig, analyze_sketch_with_llama_vision(), _clean_json_text(), encode_image_to_base64(), GeometryFeatures, _heuristic_sketch_analysis(), LlamaVisionConfig, VisiblePart (+5 more)

### Community 3 - "Preprocessing Pytest Fixtures"
Cohesion: 0.12
Nodes (12): black_on_white_sketch(), corrupted_image(), empty_image(), grayscale_sketch(), low_contrast_sketch(), noisy_sketch(), non_square_sketch(), rgb_sketch() (+4 more)

### Community 5 - "React Frontend Package & Build Tooling"
Cohesion: 0.09
Nodes (28): dependencies, react@^18.3.1, react-dom@^18.3.1, three@^0.187.0, devDependencies, vite@^5.4.2, @vitejs/plugin-react@^4.3.1, name (+20 more)

### Community 6 - "DESIGN.md"
Cohesion: 0.15
Nodes (12): Brand & Style, Buttons, Chips & Badges, Colors, Components, Elevation & Depth, Input Fields & Prompt Zone, Layout & Spacing (+4 more)

### Community 7 - "test_preprocessing.py"
Cohesion: 0.10
Nodes (9): AnalysisResponse, api_analyze_sketch(), api_preprocess_sketch(), api_reconstruct_sketch_to_3d(), health_check(), PreprocessResponse, ReconstructionResponse, SketchAnalysisResult (+1 more)

### Community 8 - "System Architecture & Model Backbones"
Cohesion: 0.43
Nodes (5): Frontend Vite HTML Entry Point, InstantMesh 3D Reconstruction Pipeline, Llama 3.2 Vision Semantic Understanding, Sketch2Shape AI, Structured Vision Analysis Schema

## Knowledge Gaps
- **6 isolated node(s):** `FastAPI Dependency`, `NumPy Dependency`, `OpenCV Python Headless Dependency`, `Pillow Dependency`, `Frontend Vite HTML Entry Point` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 113 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `preprocess_sketch()` connect `Sketch Validation & Processing Core` to `test_preprocessing.py`?**
  _High betweenness centrality (0.096) - this node is a cross-community bridge._
- **What connects `FastAPI Dependency`, `NumPy Dependency`, `OpenCV Python Headless Dependency` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Backend Configuration & Settings` be split into smaller, more focused modules?**
  _Cohesion score 0.1437908496732026 - nodes in this community are weakly interconnected._
- **Why does `analyze_sketch_with_llama_vision()` connect `Vision Model Testing & Fixtures` to `test_preprocessing.py`?**
  _High betweenness centrality (0.072) - this node is a cross-community bridge._
- **Should `Sketch Validation & Processing Core` be split into smaller, more focused modules?**
  _Cohesion score 0.06994535519125683 - nodes in this community are weakly interconnected._
- **Why does `validate_processed_image()` connect `Sketch Validation & Processing Core` to `test_preprocessing.py`?**
  _High betweenness centrality (0.042) - this node is a cross-community bridge._
- **Should `Vision Model Testing & Fixtures` be split into smaller, more focused modules?**
  _Cohesion score 0.06168831168831169 - nodes in this community are weakly interconnected._