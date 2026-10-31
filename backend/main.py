"""FastAPI Application for Sketch2Shape AI Backend.

Provides endpoints for sketch image upload, preprocessing, and 3D reconstruction.
"""

from __future__ import annotations

import logging
import shutil
import uuid
from pathlib import Path
from typing import Any, Dict, Optional

from fastapi import FastAPI, File, HTTPException, Query, UploadFile, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from backend.config import PreprocessingConfig, app_config
from backend.preprocessing import preprocess_sketch, validate_processed_image
from backend.reconstruction import reconstruct_3d

# Configure logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(name)s: %(message)s")
logger = logging.getLogger("sketch2shape.api")

app = FastAPI(
    title="Sketch2Shape AI API",
    description="Backend API for converting hand-drawn 2D sketches into 3D models with InstantMesh.",
    version="1.0.0",
)

# CORS setup for web frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

ALLOWED_EXTENSIONS = {".png", ".jpg", ".jpeg", ".webp", ".bmp"}


class PreprocessResponse(BaseModel):
    success: bool
    message: str
    original_image_path: str
    processed_image_path: str
    target_dimensions: list[int]
    debug_dir: Optional[str] = None
    validation: Dict[str, Any]


class ReconstructionResponse(BaseModel):
    success: bool
    message: str
    original_image_path: str
    processed_image_path: str
    model_3d_path: str
    format: str
    details: Dict[str, Any]


@app.get("/health")
def health_check() -> Dict[str, str]:
    """Health check endpoint to verify backend service status."""
    return {"status": "ok", "service": "Sketch2Shape AI", "version": "1.0.0"}


@app.post("/api/preprocess", response_model=PreprocessResponse)
def api_preprocess_sketch(
    file: UploadFile = File(..., description="Uploaded sketch image (PNG, JPEG, etc.)"),
    target_size: int = Query(320, description="Target square resolution (e.g. 320 or 512)"),
    debug: bool = Query(False, description="Save intermediate debug pipeline stages"),
    auto_invert: bool = Query(True, description="Automatically invert chalkboard/dark backgrounds"),
):
    """Preprocesses an uploaded hand-drawn sketch to make it model-ready.

    Note: Defined as standard `def` rather than `async def` so FastAPI runs
    the CPU-bound OpenCV and Pillow pipeline in worker threadpools without
    blocking the main asynchronous event loop.
    """
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
            detail=f"Failed to save upload: {err}",
        )

    if orig_save_path.stat().st_size == 0:
        orig_save_path.unlink(missing_ok=True)
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Uploaded file is empty (0 bytes).",
        )

    # Step 2: Configure preprocessing
    config = PreprocessingConfig(
        target_size=(target_size, target_size),
        auto_invert_dark_background=auto_invert,
        debug=debug,
        debug_dir=str(debug_save_dir) if debug_save_dir else None,
    )

    # Step 3: Run preprocessing
    try:
        preprocess_sketch(
            input_path=str(orig_save_path),
            output_path=str(processed_save_path),
            target_size=(target_size, target_size),
            config=config,
            debug=debug,
        )
    except (ValueError, FileNotFoundError) as err:
        logger.warning("Preprocessing rejected image: %s", err)
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Image preprocessing failed: {err}",
        )
    except Exception as err:
        logger.exception("Unexpected error during sketch preprocessing: %s", err)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Internal error processing sketch: {err}",
        )

    # Step 4: Validate output
    try:
        val_result = validate_processed_image(
            processed_save_path, expected_size=(target_size, target_size), expected_channels=3
        )
    except Exception as err:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Processed image failed quality validation: {err}",
        )

    return PreprocessResponse(
        success=True,
        message="Sketch preprocessed successfully into model-ready image.",
        original_image_path=str(orig_save_path),
        processed_image_path=str(processed_save_path),
        target_dimensions=[target_size, target_size],
        debug_dir=str(debug_save_dir) if debug_save_dir else None,
        validation={
            "width": val_result.width,
            "height": val_result.height,
            "channels": val_result.channels,
            "min_pixel": val_result.min_pixel,
            "max_pixel": val_result.max_pixel,
            "std_pixel": val_result.std_pixel,
        },
    )


@app.post("/api/reconstruct", response_model=ReconstructionResponse)
def api_reconstruct_sketch_to_3d(
    file: UploadFile = File(..., description="Uploaded sketch image"),
    target_size: int = Query(320, description="Target input size for 3D model"),
    output_format: str = Query("obj", description="Output 3D mesh format (obj, glb)"),
    debug: bool = Query(False, description="Save intermediate stages for inspection"),
):
    """End-to-end pipeline: Sketch Upload -> Preprocessing -> 3D Reconstruction."""
    # 1. Preprocess the sketch first
    preprocess_result = api_preprocess_sketch(
        file=file,
        target_size=target_size,
        debug=debug,
    )

    processed_path = preprocess_result.processed_image_path

    # 2. Reconstruct 3D model
    try:
        recon_result = reconstruct_3d(
            processed_image_path=processed_path,
            output_format=output_format,
        )
    except Exception as err:
        logger.exception("3D reconstruction failed: %s", err)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"3D reconstruction failed: {err}",
        )

    return ReconstructionResponse(
        success=True,
        message="3D model reconstructed successfully from preprocessed sketch.",
        original_image_path=preprocess_result.original_image_path,
        processed_image_path=processed_path,
        model_3d_path=recon_result.model_path,
        format=recon_result.format,
        details=recon_result.details,
    )
