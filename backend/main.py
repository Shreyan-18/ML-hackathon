"""FastAPI Application for Sketch2Shape AI Backend.

Provides endpoints for:
- Step 1: Sketch image upload & OpenCV preprocessing
- Step 2: Llama 3.2 Vision sketch understanding
- Step 3: Foreground isolation and background removal (rembg / OpenCV)
- Step 4: 2.5D Volumetric generation (Depth map, Normal map, and 3D Relief mesh)
- Step 5 & 6: 3D mesh reconstruction (InstantMesh) and export
"""

from __future__ import annotations

import logging
import os
import shutil
import sys
import uuid
from pathlib import Path
from typing import Any, Dict, Optional

# Ensure project root is in sys.path for direct script execution on Windows & Mac
_project_root = str(Path(__file__).resolve().parent.parent)
if _project_root not in sys.path:
    sys.path.insert(0, _project_root)

from fastapi import FastAPI, File, HTTPException, Query, UploadFile, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

from backend.config import (
    ForegroundIsolationConfig,
    Generation25DConfig,
    PreprocessingConfig,
    app_config,
    foreground_config,
    generation_25d_config,
    vision_config,
)
from backend.foreground_isolation import isolate_foreground
from backend.generation_25d import generate_25d
from backend.preprocessing import preprocess_sketch, validate_processed_image
from backend.reconstruction import reconstruct_3d
from backend.vision_analysis import (
    SketchAnalysisResult,
    analyze_sketch_with_llama_vision,
)

# Configure logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(name)s: %(message)s")
logger = logging.getLogger("sketch2shape.api")

app = FastAPI(
    title="Sketch2Shape AI API",
    description="Backend API for converting hand-drawn 2D sketches into 3D models with 2.5D Volumetric generation and InstantMesh.",
    version="1.2.0",
)

# CORS setup for web frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount static asset folders for frontend image previews and downloads
app.mount("/static/uploads", StaticFiles(directory=str(app_config.upload_dir)), name="uploads")
app.mount("/static/outputs", StaticFiles(directory=str(app_config.output_dir)), name="outputs")
app.mount("/static/foreground", StaticFiles(directory=str(app_config.foreground_output_dir)), name="foreground")
app.mount("/static/generation25d", StaticFiles(directory=str(app_config.generation_25d_output_dir)), name="generation25d")

ALLOWED_EXTENSIONS = {".png", ".jpg", ".jpeg", ".webp", ".bmp"}


# ============================================================================
# API Response Models
# ============================================================================

class PreprocessResponse(BaseModel):
    success: bool
    message: str
    original_image_path: str
    processed_image_path: str
    target_dimensions: list[int]
    debug_dir: Optional[str] = None
    validation: Dict[str, Any]


class AnalysisResponse(BaseModel):
    success: bool
    message: str
    original_image_path: str
    processed_image_path: str
    analysis: SketchAnalysisResult


class ForegroundIsolationResponse(BaseModel):
    success: bool
    message: str
    original_image_path: str
    rgba_path: str
    composite_path: str
    mask_path: str
    bounding_box: list[int]
    foreground_pixel_ratio: float
    method_used: str
    details: Dict[str, Any]


class Generation25DResponse(BaseModel):
    success: bool
    message: str
    original_image_path: str
    depth_map_path: str
    normal_map_path: str
    relief_mesh_path: Optional[str] = None
    depth_stats: Dict[str, float]
    mesh_stats: Dict[str, Any]
    details: Dict[str, Any]


class FullPipelineResponse(BaseModel):
    success: bool
    message: str
    original_image_path: str
    preprocessed_image_path: str
    foreground_composite_path: str
    mask_path: str
    depth_map_path: str
    normal_map_path: str
    relief_mesh_path: Optional[str] = None
    reconstructed_3d_path: str
    format: str
    analysis: Optional[SketchAnalysisResult] = None
    details: Dict[str, Any]


class ReconstructionResponse(BaseModel):
    success: bool
    message: str
    original_image_path: str
    processed_image_path: str
    model_3d_path: str
    format: str
    analysis: Optional[SketchAnalysisResult] = None
    details: Dict[str, Any]


# ============================================================================
# Endpoints
# ============================================================================

@app.get("/health")
def health_check() -> Dict[str, Any]:
    """Health check endpoint to verify backend service and model status."""
    return {
        "status": "ok",
        "service": "Sketch2Shape AI",
        "version": "1.2.0",
        "modules": [
            "OpenCV Preprocessing",
            "Llama 3.2 Vision Understanding",
            "Foreground Isolation (rembg/OpenCV)",
            "2.5D Volumetric Generation (Depth/Normal/Relief)",
            "3D Mesh Reconstruction (InstantMesh)",
        ],
        "vision_model": vision_config.model,
        "vision_configured": bool(vision_config.api_key),
    }


@app.post("/api/preprocess", response_model=PreprocessResponse)
def api_preprocess_sketch(
    file: UploadFile = File(..., description="Uploaded sketch image (PNG, JPEG, etc.)"),
    target_size: int = Query(320, description="Target square resolution (e.g. 320 or 512)"),
    debug: bool = Query(False, description="Save intermediate debug pipeline stages"),
    auto_invert: bool = Query(True, description="Automatically invert chalkboard/dark backgrounds"),
):
    """Preprocesses an uploaded hand-drawn sketch to make it model-ready."""
    ext = Path(file.filename or "upload.png").suffix.lower()
    if ext not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Unsupported file format '{ext}'. Allowed: {', '.join(ALLOWED_EXTENSIONS)}",
        )

    file_id = uuid.uuid4().hex[:12]
    orig_save_path = app_config.upload_dir / f"{file_id}_original{ext}"
    processed_save_path = app_config.output_dir / "preprocessing" / f"{file_id}_processed.png"
    debug_save_dir = app_config.debug_dir / file_id if debug else None

    # Step 1: Save original uploaded image safely
    try:
        with orig_save_path.open("wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
    except Exception as err:
        logger.error("Failed to save uploaded file: %s", err)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Could not save uploaded file: {err}",
        )

    # Step 2: Configure and run preprocessing pipeline
    config = PreprocessingConfig(
        target_size=(target_size, target_size),
        auto_invert_dark_background=auto_invert,
        debug=debug,
        debug_dir=str(debug_save_dir) if debug_save_dir else None,
    )

    try:
        final_processed_path = preprocess_sketch(
            input_path=str(orig_save_path),
            output_path=str(processed_save_path),
            config=config,
        )
    except ValueError as err:
        logger.warning("Preprocessing rejected invalid image: %s", err)
        raise HTTPException(status_code=status.HTTP_422_UNPROCESSABLE_ENTITY, detail=str(err))
    except Exception as err:
        logger.exception("Unexpected error during preprocessing: %s", err)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Preprocessing error: {err}",
        )

    # Step 3: Validate output image
    try:
        validation_res = validate_processed_image(
            image_path=final_processed_path,
            expected_size=(target_size, target_size),
            expected_channels=3,
        )
    except Exception as err:
        logger.error("Validation failed for processed image: %s", err)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Image validation failed: {err}",
        )

    return PreprocessResponse(
        success=True,
        message="Sketch preprocessed and validated successfully.",
        original_image_path=str(orig_save_path),
        processed_image_path=str(final_processed_path),
        target_dimensions=[target_size, target_size],
        debug_dir=str(debug_save_dir) if debug_save_dir else None,
        validation={
            "width": validation_res.width,
            "height": validation_res.height,
            "channels": validation_res.channels,
            "mean_pixel": round(validation_res.mean_pixel, 2),
            "std_pixel": round(validation_res.std_pixel, 2),
            "status": "passed",
        },
    )


@app.post("/api/foreground-isolate", response_model=ForegroundIsolationResponse)
def api_isolate_foreground(
    file: UploadFile = File(..., description="Uploaded sketch image"),
    target_size: int = Query(320, description="Target canvas size"),
    method: str = Query("auto", description="Extraction method: auto, rembg, or contour"),
):
    """Isolates the sketch foreground, removes background paper noise, and centers on canvas."""
    preprocess_res = api_preprocess_sketch(file=file, target_size=target_size)
    processed_path = preprocess_res.processed_image_path

    config = ForegroundIsolationConfig(method=method)

    try:
        iso_res = isolate_foreground(
            input_image_path=processed_path,
            target_size=(target_size, target_size),
            config=config,
        )
    except Exception as err:
        logger.exception("Foreground isolation failed: %s", err)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Foreground isolation error: {err}",
        )

    return ForegroundIsolationResponse(
        success=True,
        message="Foreground successfully isolated and centered.",
        original_image_path=preprocess_res.original_image_path,
        rgba_path=iso_res.rgba_path,
        composite_path=iso_res.composite_path,
        mask_path=iso_res.mask_path,
        bounding_box=list(iso_res.bounding_box),
        foreground_pixel_ratio=round(iso_res.foreground_pixel_ratio, 4),
        method_used=iso_res.method_used,
        details=iso_res.details,
    )


@app.post("/api/generate-25d", response_model=Generation25DResponse)
def api_generate_25d(
    file: UploadFile = File(..., description="Uploaded sketch image"),
    target_size: int = Query(320, description="Target resolution"),
    export_relief: bool = Query(True, description="Export watertight 3D relief mesh"),
    format: str = Query("obj", description="Relief mesh format (obj, glb)"),
):
    """Generates 2.5D Volumetric data: Monocular Depth Map, Normal Map, and 3D Relief Mesh."""
    # 1. Preprocess & Isolate Foreground
    iso_res = api_isolate_foreground(file=file, target_size=target_size)

    config = Generation25DConfig(
        export_relief_mesh=export_relief,
        relief_format=format,
    )

    try:
        gen_res = generate_25d(
            image_path=iso_res.composite_path,
            mask_path=iso_res.mask_path,
            config=config,
        )
    except Exception as err:
        logger.exception("2.5D generation failed: %s", err)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"2.5D generation error: {err}",
        )

    return Generation25DResponse(
        success=True,
        message="2.5D Depth, Normal map, and 3D relief mesh generated successfully.",
        original_image_path=iso_res.original_image_path,
        depth_map_path=gen_res.depth_map_path,
        normal_map_path=gen_res.normal_map_path,
        relief_mesh_path=gen_res.relief_mesh_path,
        depth_stats=gen_res.depth_stats,
        mesh_stats=gen_res.mesh_stats,
        details=gen_res.details,
    )


@app.post("/api/pipeline/full", response_model=FullPipelineResponse)
def api_full_pipeline(
    file: UploadFile = File(..., description="Uploaded sketch image"),
    target_size: int = Query(320, description="Target resolution"),
    output_format: str = Query("obj", description="3D mesh format (obj, glb)"),
):
    """Executes the complete end-to-end hackathon pipeline:

    [1] OpenCV Preprocess -> [2] Vision Understanding -> [3] Foreground Isolation ->
    [4] 2.5D Volumetric Generation -> [5] InstantMesh 3D Reconstruction
    """
    # Step 1: Preprocess
    prep_res = api_preprocess_sketch(file=file, target_size=target_size)

    # Step 2: Vision Analysis
    analysis_res: Optional[SketchAnalysisResult] = None
    try:
        analysis_res = analyze_sketch_with_llama_vision(
            image_path=prep_res.processed_image_path,
            config=vision_config,
        )
    except Exception as err:
        logger.warning("Optional vision analysis failed during full pipeline: %s", err)

    # Step 3: Foreground Isolation
    iso_res = isolate_foreground(
        input_image_path=prep_res.processed_image_path,
        target_size=(target_size, target_size),
    )

    # Step 4: 2.5D Volumetric Generation
    gen25d_res = generate_25d(
        image_path=iso_res.composite_path,
        mask_path=iso_res.mask_path,
        config=Generation25DConfig(export_relief_mesh=True, relief_format=output_format),
    )

    # Step 5: 3D Reconstruction
    refinement_prompt = analysis_res.reconstruction_prompt if analysis_res else None
    recon_res = reconstruct_3d(
        processed_image_path=iso_res.composite_path,
        output_format=output_format,
        refinement_prompt=refinement_prompt,
    )

    return FullPipelineResponse(
        success=True,
        message="Complete Sketch2Shape AI pipeline executed successfully.",
        original_image_path=prep_res.original_image_path,
        preprocessed_image_path=prep_res.processed_image_path,
        foreground_composite_path=iso_res.composite_path,
        mask_path=iso_res.mask_path,
        depth_map_path=gen25d_res.depth_map_path,
        normal_map_path=gen25d_res.normal_map_path,
        relief_mesh_path=gen25d_res.relief_mesh_path,
        reconstructed_3d_path=recon_res.model_path,
        format=recon_res.format,
        analysis=analysis_res,
        details={
            "bounding_box": list(iso_res.bounding_box),
            "depth_stats": gen25d_res.depth_stats,
            "mesh_stats": gen25d_res.mesh_stats,
            "recon_details": recon_res.details,
        },
    )


@app.post("/api/analyze-sketch", response_model=AnalysisResponse)
def api_analyze_sketch(
    file: UploadFile = File(..., description="Uploaded sketch image"),
    target_size: int = Query(320, description="Target preprocessing resolution"),
):
    """Understands and extracts 3D semantic information from a sketch using Llama 3.2 Vision."""
    preprocess_result = api_preprocess_sketch(
        file=file,
        target_size=target_size,
        debug=False,
    )
    processed_path = preprocess_result.processed_image_path

    try:
        analysis_result = analyze_sketch_with_llama_vision(
            image_path=processed_path,
            config=vision_config,
        )
    except Exception as err:
        logger.exception("Sketch vision analysis failed: %s", err)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Vision analysis failed: {err}",
        )

    return AnalysisResponse(
        success=True,
        message="Sketch successfully understood and analyzed with Llama 3.2 Vision.",
        original_image_path=preprocess_result.original_image_path,
        processed_image_path=processed_path,
        analysis=analysis_result,
    )


@app.post("/api/reconstruct", response_model=ReconstructionResponse)
def api_reconstruct_sketch_to_3d(
    file: UploadFile = File(..., description="Uploaded sketch image"),
    target_size: int = Query(320, description="Target input size for 3D model"),
    output_format: str = Query("obj", description="Output 3D mesh format (obj, glb)"),
    debug: bool = Query(False, description="Save intermediate stages for inspection"),
):
    """End-to-end pipeline: Upload -> OpenCV Preprocess -> Llama Vision Understanding -> InstantMesh 3D."""
    preprocess_result = api_preprocess_sketch(
        file=file,
        target_size=target_size,
        debug=debug,
    )
    processed_path = preprocess_result.processed_image_path

    analysis_result: Optional[SketchAnalysisResult] = None
    try:
        analysis_result = analyze_sketch_with_llama_vision(
            image_path=processed_path,
            config=vision_config,
        )
    except Exception as err:
        logger.warning("Optional vision analysis failed during reconstruction pipeline: %s", err)

    refinement_prompt = analysis_result.reconstruction_prompt if analysis_result else None

    try:
        recon_result = reconstruct_3d(
            processed_image_path=processed_path,
            output_format=output_format,
            refinement_prompt=refinement_prompt,
        )
    except Exception as err:
        logger.exception("3D reconstruction failed: %s", err)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"3D reconstruction failed: {err}",
        )

    return ReconstructionResponse(
        success=True,
        message="3D model reconstructed successfully from preprocessed sketch and vision analysis.",
        original_image_path=preprocess_result.original_image_path,
        processed_image_path=processed_path,
        model_3d_path=recon_result.model_path,
        format=recon_result.format,
        analysis=analysis_result,
        details=recon_result.details,
    )


# Mount static frontend SPA at root if built
if app_config.frontend_dist_dir.exists():
    app.mount("/", StaticFiles(directory=str(app_config.frontend_dist_dir), html=True), name="frontend")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.main:app", host="0.0.0.0", port=8000, reload=True)

