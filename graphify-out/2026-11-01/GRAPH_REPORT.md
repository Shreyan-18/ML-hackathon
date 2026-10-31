# Graph Report - ML-hackathon  (2026-11-01)

## Corpus Check
- 31 files · ~42,733 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 3, .css 1, .ipynb 1)

## Summary
- 513 nodes · 1217 edges · 17 communities (14 shown, 3 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 32 edges (avg confidence: 0.92)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a4dc6365`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- refinement.py
- validate_processed_image
- 2.5D Volumetric Mesh Generation
- FastAPI REST Server Endpoints
- Frontend UI Components & Dependencies
- Llama & Gemini Vision Analysis
- Image Refinement & Denoising
- Design Specifications & Colab Architecture
- Colab GPU Server Routes
- Test Suite Fixtures
- preprocess_sketch
- Zephyr3D Studio UI & Viewport
- Application Configuration Settings
- Canvas Touch Input Controller
- isolate_foreground
- strip_border_connected_background

## God Nodes (most connected - your core abstractions)
1. `preprocess_sketch()` - 28 edges
2. `analyze_sketch_with_llama_vision()` - 25 edges
3. `SketchAnalysisResult` - 22 edges
4. `generate_25d()` - 20 edges
5. `refine_sketch_pipeline()` - 20 edges
6. `api_preprocess_sketch()` - 18 edges
7. `isolate_foreground()` - 17 edges
8. `validate_processed_image()` - 15 edges
9. `load_image_safely()` - 15 edges
10. `TestSketchPreprocessing` - 15 edges

## Surprising Connections (you probably didn't know these)
- `TestSketchPreprocessing` --uses--> `PreprocessingConfig`  [INFERRED]
  tests/test_preprocessing.py → backend/config.py
- `Tailwind Theme Configuration` --implements--> `Obsidian Synth 3D Design Theme`  [INFERRED]
  frontend/index.html → stitch_sketch_to_3d_generator/DESIGN.md
- `test_isolate_foreground_end_to_end()` --calls--> `ForegroundIsolationConfig`  [EXTRACTED]
  tests/test_foreground_isolation.py → backend/config.py
- `TestLlamaVisionSketchUnderstanding` --uses--> `SketchAnalysisResult`  [INFERRED]
  tests/test_vision.py → backend/vision_analysis.py
- `ZEPHYR 3D Web Studio Application` --implements--> `Sketch2Shape AI System`  [INFERRED]
  frontend/index.html → README.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Sketch2Shape Core End-to-End Pipeline** — readme_opencv_preprocessing_module, readme_llama_vision_understanding, readme_foreground_isolation_module, readme_generation_25d_module, readme_instantmesh_reconstruction_pipeline [EXTRACTED 1.00]
- **2.5D Volumetric Generation Suite** — readme_generation_25d_module, readme_balloon_inflation_depth, readme_tangent_space_normal_mapping, readme_watertight_relief_mesh [EXTRACTED 1.00]
- **Obsidian Synth 3D Studio Architecture** — stitch_sketch_to_3d_generator_design_obsidian_synth_theme, stitch_sketch_to_3d_generator_code_studio_dashboard, frontend_index_tailwind_theme_config, frontend_index_zephyr_3d_app [INFERRED 0.85]

## Communities (17 total, 3 thin omitted)

### Community 0 - "refinement.py"
Cohesion: 0.16
Nodes (4): _collect_hf_tokens(), ForegroundIsolationConfig, InstantMeshConfig, NvidiaTrellisConfig

### Community 1 - "validate_processed_image"
Cohesion: 0.10
Nodes (4): validate_processed_image(), ValidationResult, _compute_hash(), TestSketchPreprocessing

### Community 2 - "2.5D Volumetric Mesh Generation"
Cohesion: 0.07
Nodes (28): Generation25DConfig, compute_surface_normals(), estimate_depth_map(), export_relief_3d_mesh(), extract_clean_object_mask(), generate_25d(), Generation25DResult, get_solid_sketch_silhouette() (+20 more)

### Community 3 - "FastAPI REST Server Endpoints"
Cohesion: 0.09
Nodes (16): AnalysisResponse, api_analyze_sketch(), api_full_pipeline(), api_generate_25d(), api_isolate_foreground(), api_preprocess_sketch(), api_reconstruct_sketch_to_3d(), api_refine_sketch() (+8 more)

### Community 4 - "Frontend UI Components & Dependencies"
Cohesion: 0.07
Nodes (36): dependencies, react@^18.3.1, react-dom@^18.3.1, three@^0.187.0, devDependencies, autoprefixer@^10.6.2, postcss@^8.5.32, tailwindcss@^4.3.3 (+28 more)

### Community 5 - "Llama & Gemini Vision Analysis"
Cohesion: 0.06
Nodes (16): VisionConfig, build_conditioned_prompts(), analyze_sketch_with_llama_vision(), _analyze_with_gemini(), _clean_json_text(), encode_image_to_base64(), GeometryFeatures, _heuristic_sketch_analysis() (+8 more)

### Community 6 - "Image Refinement & Denoising"
Cohesion: 0.08
Nodes (16): RefinementConfig, preprocess_and_enhance_contrast(), preserve_and_denoise_lines(), QualityValidationResult, refine_sketch_pipeline(), _refine_with_neural_heuristic(), RefinementResult, validate_refinement_quality() (+8 more)

### Community 7 - "Design Specifications & Colab Architecture"
Cohesion: 0.06
Nodes (35): Colab GPU Backend Architecture, Google Gemini Vision API Sketch Understanding, Public Tunnel (pyngrok / localtunnel), Ultra-HD 3D Reconstruction (Hunyuan3D-2 / TRELLIS), Fast 3D Reconstruction (TripoSR), React DOM Mount Root, Tailwind Theme Configuration, ZEPHYR 3D Web Studio Application (+27 more)

### Community 8 - "Colab GPU Server Routes"
Cohesion: 0.07
Nodes (24): AnalysisResponse, analyze_sketch(), api_analyze(), api_foreground_isolate(), api_full_pipeline(), api_generate_25d(), api_preprocess(), api_reconstruct() (+16 more)

### Community 9 - "Test Suite Fixtures"
Cohesion: 0.13
Nodes (12): black_on_white_sketch(), corrupted_image(), empty_image(), grayscale_sketch(), low_contrast_sketch(), noisy_sketch(), non_square_sketch(), rgb_sketch() (+4 more)

### Community 10 - "preprocess_sketch"
Cohesion: 0.13
Nodes (8): PreprocessingConfig, apply_optional_threshold(), enhance_contrast(), extract_diagnostic_edges(), normalize_background_polarity(), preprocess_sketch(), reduce_noise(), resize_and_pad()

### Community 11 - "Zephyr3D Studio UI & Viewport"
Cohesion: 0.22
Nodes (9): Interactive 3D GLB Viewport, Community Explorations and Remix Hub, Zephyr 3D Pro Studio UI Screenshot, Target Quality Configuration, Realtime Neural Trace and Reconstruction Engine, SDF and Image Preprocessing Pipeline, Sparks Credit and Compute Economy, Hero Vector Studio Canvas (+1 more)

### Community 15 - "isolate_foreground"
Cohesion: 0.14
Nodes (6): composite_and_center(), ForegroundIsolationResult, isolate_foreground(), load_image_safely(), test_composite_and_center_geometry(), test_isolate_foreground_end_to_end()

### Community 16 - "strip_border_connected_background"
Cohesion: 0.17
Nodes (6): clean_alpha_mask(), _extract_with_opencv_saliency(), _extract_with_rembg(), _get_rembg_session(), strip_border_connected_background(), test_clean_alpha_mask_removes_specks()

## Knowledge Gaps
- **25 isolated node(s):** `Community Explorations and Remix Hub`, `Target Quality Configuration`, `Sparks Credit and Compute Economy`, `Zephyr 3D Pro Studio UI Screenshot`, `touchHandler` (+20 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 211 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `preprocess_sketch()` connect `preprocess_sketch` to `refinement.py`, `validate_processed_image`, `2.5D Volumetric Mesh Generation`, `FastAPI REST Server Endpoints`, `isolate_foreground`?**
  _High betweenness centrality (0.057) - this node is a cross-community bridge._
- **Are the 11 inferred relationships involving `SketchAnalysisResult` (e.g. with `AnalysisResponse` and `api_full_pipeline()`) actually correct?**
  _`SketchAnalysisResult` has 11 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Community Explorations and Remix Hub`, `Target Quality Configuration`, `Sparks Credit and Compute Economy` to the rest of the system?**
  _25 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `validate_processed_image` be split into smaller, more focused modules?**
  _Cohesion score 0.09885057471264368 - nodes in this community are weakly interconnected._
- **Why does `analyze_sketch_with_llama_vision()` connect `Llama & Gemini Vision Analysis` to `refinement.py`, `2.5D Volumetric Mesh Generation`, `FastAPI REST Server Endpoints`, `Image Refinement & Denoising`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **Should `2.5D Volumetric Mesh Generation` be split into smaller, more focused modules?**
  _Cohesion score 0.06666666666666667 - nodes in this community are weakly interconnected._
- **Should `FastAPI REST Server Endpoints` be split into smaller, more focused modules?**
  _Cohesion score 0.08859357696567 - nodes in this community are weakly interconnected._