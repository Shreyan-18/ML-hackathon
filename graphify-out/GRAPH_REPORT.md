# Graph Report - ML-hackathon  (2026-11-01)

## Corpus Check
- 37 files · ~142,595 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 3, .css 1, .ipynb 1)

## Summary
- 548 nodes · 1173 edges · 22 communities (17 shown, 5 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 33 edges (avg confidence: 0.93)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `04c8b061`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- refinement.py
- preprocess_sketch
- generate_25d
- api_preprocess_sketch
- StudioApp.jsx
- analyze_sketch_with_llama_vision
- test_refinement.py
- Design Specifications & Colab Architecture
- colab_backend.py
- conftest.py
- reconstruct_3d
- Zephyr3D Studio UI & Viewport
- Application Configuration Settings
- Test Package Modules
- Canvas Touch Input Controller
- rules/graphify.md
- workflows/graphify.md
- refine_sketch_pipeline
- main.py
- health_check
- test_prompt_priority_and_studio_refinement.py
- build_conditioned_prompts

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
- `TestSketchPreprocessing` --uses--> `PreprocessingConfig`  [INFERRED]
  tests/test_preprocessing.py → backend/config.py
- `TestLlamaVisionSketchUnderstanding` --uses--> `SketchAnalysisResult`  [INFERRED]
  tests/test_vision.py → backend/vision_analysis.py
- `Tailwind Theme Configuration` --implements--> `Obsidian Synth 3D Design Theme`  [INFERRED]
  frontend/index.html → stitch_sketch_to_3d_generator/DESIGN.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Sketch2Shape Core End-to-End Pipeline** — readme_opencv_preprocessing_module, readme_llama_vision_understanding, readme_foreground_isolation_module, readme_generation_25d_module, readme_instantmesh_reconstruction_pipeline [EXTRACTED 1.00]
- **2.5D Volumetric Generation Suite** — readme_generation_25d_module, readme_balloon_inflation_depth, readme_tangent_space_normal_mapping, readme_watertight_relief_mesh [EXTRACTED 1.00]
- **Obsidian Synth 3D Studio Architecture** — stitch_sketch_to_3d_generator_design_obsidian_synth_theme, stitch_sketch_to_3d_generator_code_studio_dashboard, frontend_index_tailwind_theme_config, frontend_index_zephyr_3d_app [INFERRED 0.85]

## Communities (22 total, 5 thin omitted)

### Community 0 - "refinement.py"
Cohesion: 0.06
Nodes (70): _collect_hf_tokens(), ForegroundIsolationConfig, InstantMeshConfig, NvidiaTrellisConfig, PreprocessingConfig, Configuration module for Sketch2Shape AI Preprocessing, Vision, and Backend., Settings for foreground extraction and background removal., Settings for cloud-accelerated 3D reconstruction via Hugging Face Spaces. (+62 more)

### Community 1 - "preprocess_sketch"
Cohesion: 0.06
Nodes (37): apply_optional_threshold(), enhance_contrast(), extract_diagnostic_edges(), normalize_background_polarity(), preprocess_sketch(), ndarray, Path, Detects chalkboard/dark backgrounds and inverts to dark-strokes-on-white. 3D… (+29 more)

### Community 2 - "generate_25d"
Cohesion: 0.09
Nodes (37): Generation25DConfig, Settings for 2.5D depth estimation, normal map generation, relief mesh, and…, compute_surface_normals(), estimate_depth_map(), export_relief_3d_mesh(), extract_clean_object_mask(), generate_25d(), Generation25DResult (+29 more)

### Community 3 - "api_preprocess_sketch"
Cohesion: 0.22
Nodes (16): api_analyze_sketch(), api_full_pipeline(), api_generate_25d(), api_isolate_foreground(), api_preprocess_sketch(), api_refine_sketch(), post, UploadFile (+8 more)

### Community 4 - "StudioApp.jsx"
Cohesion: 0.05
Nodes (44): dependencies, react, react-dom, react-router-dom, three, devDependencies, autoprefixer, postcss (+36 more)

### Community 5 - "analyze_sketch_with_llama_vision"
Cohesion: 0.06
Nodes (39): analyze_sketch_with_llama_vision(), _analyze_with_gemini(), _clean_json_text(), encode_image_to_base64(), GeometryFeatures, _heuristic_sketch_analysis(), BaseModel, Path (+31 more)

### Community 6 - "test_refinement.py"
Cohesion: 0.12
Nodes (24): Settings for AI sketch image refinement, prompt conditioning, and quality…, RefinementConfig, QualityValidationResult, Rigorous structural and visual validation. Checks: - Shape, dimensions, and…, Rigorous evaluation of refined image vs original sketch structure., validate_refinement_quality(), fastapi_testclient, mock_clean_sketch() (+16 more)

### Community 7 - "Design Specifications & Colab Architecture"
Cohesion: 0.06
Nodes (38): Colab GPU Backend Architecture, Google Gemini Vision API Sketch Understanding, Public Tunnel (pyngrok / localtunnel), Ultra-HD 3D Reconstruction (Hunyuan3D-2 / TRELLIS), Fast 3D Reconstruction (TripoSR), GPU Memory & VRAM Management, React DOM Mount Root, Tailwind Theme Configuration (+30 more)

### Community 8 - "colab_backend.py"
Cohesion: 0.06
Nodes (58): AnalysisResponse, analyze_sketch(), api_analyze(), api_foreground_isolate(), api_full_pipeline(), api_generate_25d(), api_preprocess(), api_reconstruct() (+50 more)

### Community 9 - "conftest.py"
Cohesion: 0.13
Nodes (27): black_on_white_sketch(), corrupted_image(), empty_image(), grayscale_sketch(), low_contrast_sketch(), noisy_sketch(), non_square_sketch(), fixture (+19 more)

### Community 10 - "reconstruct_3d"
Cohesion: 0.15
Nodes (23): _clean_trellis_prompt(), _generate_dense_volumetric_mesh(), _is_testing_env(), _parse_obj_stats(), _prepare_image_for_cloud_3d(), Any, ndarray, Path (+15 more)

### Community 11 - "Zephyr3D Studio UI & Viewport"
Cohesion: 0.22
Nodes (10): Interactive 3D GLB Viewport, Community Explorations and Remix Hub, Zephyr 3D Pro Studio UI Screenshot, Target Quality Configuration, Realtime Neural Trace and Reconstruction Engine, SDF and Image Preprocessing Pipeline, Instant 2D-to-3D Synthesis UI Design Rationale, Sparks Credit and Compute Economy (+2 more)

### Community 17 - "refine_sketch_pipeline"
Cohesion: 0.14
Nodes (18): preprocess_and_enhance_contrast(), preserve_and_denoise_lines(), ndarray, Path, Applies conservative edge-preserving bilateral filtering to suppress noise…, High-fidelity sketch refinement synthesizer. Produces crisp, studio-grade…, Attempts to run pretrained ControlNet Scribble / SD img2img if diffusers &…, Generates an ultra-clean, solid 3D studio concept graphic using Gemini Vision +… (+10 more)

### Community 18 - "main.py"
Cohesion: 0.23
Nodes (15): AnalysisResponse, api_reconstruct_sketch_to_3d(), ForegroundIsolationResponse, FullPipelineResponse, Generation25DResponse, PreprocessResponse, BaseModel, FastAPI Application for Sketch2Shape AI Backend. Provides endpoints for: - Step… (+7 more)

### Community 19 - "health_check"
Cohesion: 0.33
Nodes (5): health_check(), Any, get, Health check endpoint to verify backend service and model status., serve_frontend_spa()

### Community 20 - "test_prompt_priority_and_studio_refinement.py"
Cohesion: 0.20
Nodes (11): fastapi_datastructures, pytest, fixture, Path, Unit and integration tests for user prompt priority, solid foreground…, Creates a synthetic conical sketch resembling an adapter or shuttlecock., Verifies that an explicit user prompt defines the object identity and…, Verifies that sketch foreground isolation preserves solid interiors (not hollow… (+3 more)

### Community 21 - "build_conditioned_prompts"
Cohesion: 0.50
Nodes (4): build_conditioned_prompts(), Synthesizes structured refinement prompts combining Llama analysis and user…, Verifies that Llama structured output is converted into explicit conditioning…, test_conditioned_prompt_synthesis()

## Knowledge Gaps
- **47 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+42 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 239 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `preprocess_sketch()` connect `preprocess_sketch` to `refinement.py`, `main.py`, `api_preprocess_sketch`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._
- **Why does `analyze_sketch_with_llama_vision()` connect `analyze_sketch_with_llama_vision` to `refinement.py`, `api_preprocess_sketch`, `refine_sketch_pipeline`, `main.py`, `test_prompt_priority_and_studio_refinement.py`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Are the 12 inferred relationships involving `SketchAnalysisResult` (e.g. with `AnalysisResponse` and `api_full_pipeline()`) actually correct?**
  _`SketchAnalysisResult` has 12 INFERRED edges - model-reasoned connections that need verification._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _47 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `refinement.py` be split into smaller, more focused modules?**
  _Cohesion score 0.06487341772151899 - nodes in this community are weakly interconnected._
- **Should `preprocess_sketch` be split into smaller, more focused modules?**
  _Cohesion score 0.06334841628959276 - nodes in this community are weakly interconnected._
- **Should `generate_25d` be split into smaller, more focused modules?**
  _Cohesion score 0.09103840682788052 - nodes in this community are weakly interconnected._