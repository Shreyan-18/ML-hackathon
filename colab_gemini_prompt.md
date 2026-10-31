# Prompt for Google Colab Gemini

Copy and paste the prompt below into the Gemini chat panel inside your Google Colab notebook:

---

```markdown
I am running the **Sketch2Shape AI** GPU backend in this Google Colab environment. The backend exposes FastAPI REST endpoints to convert hand-drawn sketches into 3D meshes for a Three.js web application.

Here is the implementation plan and architecture running in `colab_backend.py`:
1. **Stage 1: Preprocessing**: OpenCV CLAHE, aspect ratio padding, polarity inversion.
2. **Stage 2: Sketch Understanding**: Google Gemini Vision API (Key 1).
3. **Stage 3: 2.5D Concept Generation**: Gemini Key 2 for SVG concept generation + 3D clay studio rendering.
4. **Stage 4: Foreground Isolation**: rembg (BiRefNet on GPU).
5. **Stage 5A: Fast 3D Reconstruction**: TripoSR (6 GB VRAM, 0.5s–12s).
6. **Stage 5B: Ultra-HD 3D Reconstruction**: Hunyuan3D-2mini / TRELLIS (12 GB VRAM, 15s–28s).
7. **Stage 6: Mesh Validation & Optimization**: Trimesh manifold validation and GLB/OBJ export.
8. **Public Tunnel**: Exposes port 8000 via pyngrok / localtunnel so the React frontend can connect.

Please inspect my current Colab runtime and fix any loose ends:
1. **Check GPU & CUDA**: Run `!nvidia-smi` and confirm `torch.cuda.is_available()` returns `True`. Note total VRAM.
2. **Verify Dependencies**: Confirm all packages (`fastapi`, `uvicorn`, `pydantic`, `pyngrok`, `rembg`, `trimesh`, `opencv-python-headless`, `torch`, `torchvision`, `tsr`, `einops`) are imported without errors.
3. **Check Model Weights for 5A & 5B**:
   - For 5A: Verify that TripoSR (`stabilityai/TripoSR`) can load onto `cuda:0` without errors.
   - For 5B: Check the downloaded Hunyuan3D-2 / TRELLIS model files in this Colab session, ensure the path points correctly to them in `ReconstructionEngine.load_5b_hunyuan()`, and ensure any required CUDA extensions (e.g. `spconv` or `diff-gaussian-rasterization`) are installed.
4. **Memory Management**: Verify that `torch.cuda.empty_cache()` and `gc.collect()` are called before switching between 5A and 5B so the GPU doesn't run into Out-Of-Memory (OOM) errors.
5. **Launch & Test**:
   - Start `colab_backend.py` on port 8000.
   - Test `GET http://localhost:8000/health` and verify HTTP 200 with GPU details.
   - Start the public tunnel (ngrok or localtunnel) and print the active public HTTPS URL so I can paste it into my frontend.
```
