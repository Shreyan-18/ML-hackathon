# Graph Report - ML-hackathon  (2026-10-31)

## Corpus Check
- Corpus is ~6,371 words - fits in a single context window. You may not need a graph.

## Summary
- 158 nodes · 277 edges · 13 communities (9 shown, 4 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.93)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Sketch Validation & Processing Core
- Pytest Test Fixtures & Suites
- Backend Architecture & Configuration Modules
- Image Transforms & Filtering Operations
- Processing Principles & Model Pipeline Concepts
- FastAPI Endpoints & API Schemas
- 3D Reconstruction & Mesh Generation
- Health Check Service Endpoint
- Graphify Workflow & Agent Tooling
- Application Configuration & Paths
- Backend Package Init
- Test Suite Package Init
- Core Dependencies

## God Nodes (most connected - your core abstractions)
1. `preprocess_sketch()` - 26 edges
2. `TestSketchPreprocessing` - 15 edges
3. `validate_processed_image()` - 13 edges
4. `api_preprocess_sketch()` - 12 edges
5. `Sketch Preprocessing Pipeline` - 11 edges
6. `PreprocessingConfig` - 10 edges
7. `api_reconstruct_sketch_to_3d()` - 9 edges
8. `reconstruct_3d()` - 6 edges
9. `TestFastAPIBackendIntegration` - 6 edges
10. `health_check()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `TestSketchPreprocessing` --uses--> `PreprocessingConfig`  [INFERRED]
  tests/test_preprocessing.py → backend/config.py
- `Sketch Preprocessing Pipeline` --references--> `OpenCV Python Headless Dependency`  [INFERRED]
  README.md → requirements.txt
- `Sketch Preprocessing Pipeline` --references--> `Pillow Dependency`  [INFERRED]
  README.md → requirements.txt
- `POST /api/preprocess Endpoint` --references--> `FastAPI Dependency`  [INFERRED]
  README.md → requirements.txt
- `api_preprocess_sketch()` --uses--> `PreprocessingConfig`  [INFERRED]
  backend/main.py → backend/config.py

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Sketch Preprocessing Transformation Stages** — readme_alpha_compositing, readme_polarity_normalization, readme_aspect_ratio_padding, readme_clahe_contrast, readme_bilateral_filtering [EXTRACTED 1.00]
- **Image to 3D Reconstruction Backbones** — readme_instantmesh, readme_zero123plusplus, readme_triposr [EXTRACTED 1.00]

## Communities (13 total, 4 thin omitted)

### Community 0 - "Sketch Validation & Processing Core"
Cohesion: 0.10
Nodes (23): preprocess_sketch(), Main preprocessing entry point for hand-drawn sketches. Transforms uploaded…, Validate that the processed image meets model-ready specifications. Args:…, validate_processed_image(), _compute_hash(), Path, Case 5: Transparent RGBA sketch is composited cleanly against solid white…, Case 6: Non-square sketch (e.g. 900x300) is centered on square canvas without… (+15 more)

### Community 1 - "Pytest Test Fixtures & Suites"
Cohesion: 0.12
Nodes (29): fixture, numpy, pytest, black_on_white_sketch(), corrupted_image(), empty_image(), grayscale_sketch(), low_contrast_sketch() (+21 more)

### Community 2 - "Backend Architecture & Configuration Modules"
Cohesion: 0.13
Nodes (22): PreprocessingConfig, Configuration module for Sketch2Shape AI Preprocessing and Backend., Configuration options for sketch image preprocessing. Attributes: target_size:…, FastAPI Application for Sketch2Shape AI Backend. Provides endpoints for sketch…, Robust Sketch Image Preprocessing Module for Sketch2Shape AI. This module…, Represents the outcome of processed image validation., ValidationResult, Image-to-3D Reconstruction Model Integration for Sketch2Shape AI. This module… (+14 more)

### Community 3 - "Image Transforms & Filtering Operations"
Cohesion: 0.12
Nodes (16): apply_optional_threshold(), enhance_contrast(), extract_diagnostic_edges(), load_image_safely(), normalize_background_polarity(), Path, Safely loads an input image, handling formats, transparency, and modes.…, Detects chalkboard/dark backgrounds and inverts to dark-strokes-on-white. 3D… (+8 more)

### Community 4 - "Processing Principles & Model Pipeline Concepts"
Cohesion: 0.14
Nodes (16): Alpha Blending Compositing, POST /api/preprocess Endpoint, POST /api/reconstruct Endpoint, Aspect-Ratio Preserving Resize and Canvas Padding, Edge-Preserving Bilateral Noise Reduction, Conservative CLAHE Contrast Enhancement, InstantMesh 3D Reconstruction Backbone, Polarity Normalization (+8 more)

### Community 5 - "FastAPI Endpoints & API Schemas"
Cohesion: 0.27
Nodes (9): api_preprocess_sketch(), api_reconstruct_sketch_to_3d(), PreprocessResponse, End-to-end pipeline: Sketch Upload -> Preprocessing -> 3D Reconstruction., Preprocesses an uploaded hand-drawn sketch to make it model-ready. Note:…, ReconstructionResponse, BaseModel, post (+1 more)

### Community 6 - "3D Reconstruction & Mesh Generation"
Cohesion: 0.29
Nodes (7): _create_mock_3d_obj(), Path, Generates a standard 3D Wavefront OBJ mesh file with vertices and faces., Result of 3D reconstruction inference., Executes image-to-3D reconstruction from a preprocessed model-ready sketch.…, reconstruct_3d(), ReconstructionResult

### Community 7 - "Health Check Service Endpoint"
Cohesion: 0.50
Nodes (3): health_check(), Health check endpoint to verify backend service status., get

### Community 8 - "Graphify Workflow & Agent Tooling"
Cohesion: 0.67
Nodes (3): Graphify Knowledge Graph, Graphify Agent Rules, Graphify Pipeline Workflow

## Knowledge Gaps
- **8 isolated node(s):** `Graphify Knowledge Graph`, `Graphify Pipeline Workflow`, `Zero123++ Backbone`, `TripoSR Backbone`, `FastAPI Dependency` (+3 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 77 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `preprocess_sketch()` connect `Sketch Validation & Processing Core` to `Backend Architecture & Configuration Modules`, `Image Transforms & Filtering Operations`, `FastAPI Endpoints & API Schemas`?**
  _High betweenness centrality (0.178) - this node is a cross-community bridge._
- **Why does `validate_processed_image()` connect `Sketch Validation & Processing Core` to `Backend Architecture & Configuration Modules`, `Image Transforms & Filtering Operations`, `FastAPI Endpoints & API Schemas`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **Why does `api_preprocess_sketch()` connect `FastAPI Endpoints & API Schemas` to `Sketch Validation & Processing Core`, `Backend Architecture & Configuration Modules`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._
- **What connects `Graphify Knowledge Graph`, `Graphify Pipeline Workflow`, `Zero123++ Backbone` to the rest of the system?**
  _8 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Sketch Validation & Processing Core` be split into smaller, more focused modules?**
  _Cohesion score 0.09759759759759759 - nodes in this community are weakly interconnected._
- **Should `Pytest Test Fixtures & Suites` be split into smaller, more focused modules?**
  _Cohesion score 0.11724137931034483 - nodes in this community are weakly interconnected._
- **Should `Backend Architecture & Configuration Modules` be split into smaller, more focused modules?**
  _Cohesion score 0.1339031339031339 - nodes in this community are weakly interconnected._