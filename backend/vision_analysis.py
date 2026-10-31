"""Llama 3.2 Vision Integration for Sketch Understanding in Sketch2Shape AI.

Analyzes hand-drawn sketches to extract structured semantic understanding:
- Main object category and detected object type
- Visible components (distinguishing observed strokes from inferred 3D semantics)
- Geometric features (overall shape, symmetry, proportions, stroke style)
- Likely camera view/orientation
- Ambiguities, occlusions, and missing details
- 3D reconstruction prompt for downstream metadata and optional refinement

Supports OpenAI-compatible vision endpoints (Groq, Together AI, OpenRouter, vLLM, Ollama)
and provides an intelligent OpenCV heuristic fallback when no remote credentials are configured.
"""

from __future__ import annotations

import base64
import json
import logging
import os
import re
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple, Union

_project_root = str(Path(__file__).resolve().parent.parent)
if _project_root not in sys.path:
    sys.path.insert(0, _project_root)

import cv2
import httpx
import numpy as np
from pydantic import BaseModel, Field

logger = logging.getLogger("sketch2shape.vision")


# ============================================================================
# Structured Pydantic Schemas
# ============================================================================

class VisiblePart(BaseModel):
    """Represents an identified component or section of the sketch."""

    name: str = Field(..., description="Name of the component (e.g. 'seat', 'handle', 'wheel')")
    observed: str = Field(..., description="Concrete features directly visible in sketch strokes")
    inferred: str = Field(..., description="Likely 3D physical role, volume, or semantics inferred")
    relationships: str = Field(..., description="Spatial relationship to other visible parts")


class GeometryFeatures(BaseModel):
    """Geometric and proportional characteristics extracted from the sketch."""

    overall_shape: str = Field(..., description="Primary geometric silhouette (e.g. 'cylindrical', 'cuboid', 'ellipsoid')")
    symmetry: str = Field(..., description="Observed symmetry (e.g. 'bilaterally symmetric along vertical axis', 'radial', 'asymmetric')")
    proportions: str = Field(..., description="Approximate observed proportions (height-to-width, component scale)")
    stroke_characteristics: str = Field(..., description="Style of strokes (e.g. 'continuous single-line contours', 'rough hatching', 'loose sketchy lines')")
    observed_geometric_primitives: List[str] = Field(
        default_factory=list,
        description="List of detected primitives (e.g. ['ellipse', 'rectangle', 'parallel lines'])"
    )


class SketchAnalysisResult(BaseModel):
    """Full structured understanding of a hand-drawn sketch."""

    object_type: str = Field(..., description="Identified main object (e.g. 'chair', 'coffee mug', 'car')")
    category: str = Field(..., description="High-level category (e.g. 'furniture', 'tableware', 'vehicle', 'electronics')")
    view_type: str = Field(..., description="Estimated viewing perspective (e.g. 'three-quarter perspective', 'front orthographic', 'side profile')")
    confidence_score: float = Field(default=0.85, description="Confidence in primary classification [0.0 - 1.0]")
    description: str = Field(..., description="Comprehensive description distinguishing observed strokes from inferred 3D semantics")
    visible_parts: List[VisiblePart] = Field(default_factory=list, description="Detailed breakdown of components")
    geometry_features: GeometryFeatures = Field(..., description="Geometric properties and proportions")
    uncertainties: List[str] = Field(default_factory=list, description="Ambiguous, hidden, occluded, or missing details")
    reconstruction_prompt: str = Field(..., description="Synthesized prompt describing the 3D asset for metadata or refinement")
    inference_backend: str = Field(default="llama-3.2-vision", description="Inference engine used ('llama-3.2-vision', 'ollama', or 'heuristic-fallback')")
    raw_response: Optional[str] = Field(default=None, description="Raw text response from the vision model if available")


# ============================================================================
# Configuration
# ============================================================================

@dataclass
class LlamaVisionConfig:
    """Settings for Llama 3.2 Vision model inference.
    
    Reads credentials strictly from environment variables to prevent accidental exposure.
    """

    api_key: Optional[str] = field(
        default_factory=lambda: (
            os.getenv("LLAMA_VISION_API_KEY")
            or os.getenv("GROQ_API_KEY")
            or os.getenv("TOGETHER_API_KEY")
            or os.getenv("OPENAI_API_KEY")
        )
    )
    base_url: str = field(
        default_factory=lambda: (
            os.getenv("LLAMA_VISION_BASE_URL")
            or ("https://api.groq.com/openai/v1" if os.getenv("GROQ_API_KEY") else "http://localhost:11434/v1")
        )
    )
    model: str = field(
        default_factory=lambda: (
            os.getenv("LLAMA_VISION_MODEL")
            or ("qwen/qwen3.8-27b" if "groq.com" in os.getenv("LLAMA_VISION_BASE_URL", "") or os.getenv("GROQ_API_KEY") else "meta-llama/Llama-3.2-11B-Vision-Instruct")
        )
    )
    timeout_seconds: float = 30.0
    temperature: float = 0.2
    max_tokens: int = 1500


# ============================================================================
# Llama 3.2 Vision Prompt Templates
# ============================================================================

LLAMA_VISION_SYSTEM_PROMPT = """You are an expert 3D Reconstruction and Computer Vision Assistant analyzing a 2D hand-drawn sketch to assist an image-to-3D pipeline (InstantMesh).

CRITICAL INSTRUCTIONS:
1. Distinguish OBSERVED features (features clearly drawn with strokes) from INFERRED features (reasonable 3D semantic assumptions).
2. DO NOT hallucinate exact millimeter dimensions or hidden details. Clearly state uncertainties for occluded, missing, or rough strokes.
3. Output MUST be strictly valid JSON matching the specified schema without Markdown fences or conversational text.
"""

LLAMA_VISION_USER_PROMPT = """Analyze this hand-drawn sketch and extract its 3D semantic and geometric structure.

Return a JSON object with this exact structure:
{
  "object_type": "<e.g. chair, coffee mug, car, lamp, bottle>",
  "category": "<e.g. furniture, tableware, vehicle, lighting, container>",
  "view_type": "<e.g. three-quarter perspective, front view, side profile, top-down isometric>",
  "confidence_score": 0.85,
  "description": "<detailed paragraph explaining what is drawn, explicitly distinguishing observed strokes from inferred 3D semantics>",
  "visible_parts": [
    {
      "name": "<part name, e.g. seat, rim, wheel, handle>",
      "observed": "<what is explicitly visible in the strokes>",
      "inferred": "<3D role or probable shape>",
      "relationships": "<how it connects to other parts>"
    }
  ],
  "geometry_features": {
    "overall_shape": "<e.g. cylindrical, cuboid, truncated cone>",
    "symmetry": "<e.g. bilaterally symmetric along vertical plane, radial, asymmetric>",
    "proportions": "<e.g. height is roughly 1.5x diameter, seat height is half total height>",
    "stroke_characteristics": "<e.g. clean continuous lines, rough hatching, stylized curves>",
    "observed_geometric_primitives": ["<e.g. ellipse, rectangle, cylinder, circle>"]
  },
  "uncertainties": [
    "<e.g. rear side is occluded by perspective>",
    "<e.g. thickness is ambiguous due to single-line contour>"
  ],
  "reconstruction_prompt": "<a high-fidelity description of the 3D object on clean white background suitable for asset tagging or texture refinement>"
}
"""


# ============================================================================
# Core Analysis Functions
# ============================================================================

def encode_image_to_base64(image_path: Union[str, Path]) -> str:
    """Reads an image file and converts it to a base64 data string."""
    path = Path(image_path)
    if not path.exists():
        raise FileNotFoundError(f"Image not found at {path}")
    raw_bytes = path.read_bytes()
    return base64.b64encode(raw_bytes).decode("utf-8")


def _clean_json_text(text: str) -> str:
    """Strips Markdown fences or surrounding conversational wrappers from JSON output."""
    text = text.strip()
    match = re.search(r"```(?:json)?\s*(\{.*?\})\s*```", text, re.DOTALL)
    if match:
        return match.group(1).strip()
    # Try finding outer braces
    first_brace = text.find("{")
    last_brace = text.rfind("}")
    if first_brace != -1 and last_brace != -1 and last_brace > first_brace:
        return text[first_brace : last_brace + 1].strip()
    return text


def analyze_sketch_with_llama_vision(
    image_path: Union[str, Path],
    config: Optional[LlamaVisionConfig] = None,
) -> SketchAnalysisResult:
    """Analyzes a sketch using Llama 3.2 Vision or local heuristic fallback.

    Args:
        image_path: Path to the sketch image (preferably preprocessed).
        config: Optional LlamaVisionConfig instance.

    Returns:
        Structured SketchAnalysisResult.
    """
    cfg = config or LlamaVisionConfig()
    path = Path(image_path)
    if not path.exists():
        raise FileNotFoundError(f"Sketch file not found at {path}")

    # Check if a remote API key or local Ollama endpoint is configured
    has_api_key = bool(cfg.api_key and cfg.api_key.strip())
    is_local_ollama = "localhost" in cfg.base_url or "127.0.0.1" in cfg.base_url

    if not has_api_key and not is_local_ollama:
        logger.info(
            "No LLAMA_VISION_API_KEY found and no local Ollama endpoint specified. "
            "Using OpenCV Heuristic Sketch Analysis engine."
        )
        return _heuristic_sketch_analysis(path)

    # Encode image for API payload
    try:
        base64_image = encode_image_to_base64(path)
        mime_type = "image/png" if path.suffix.lower() == ".png" else "image/jpeg"
        image_data_url = f"data:{mime_type};base64,{base64_image}"

        headers = {
            "Content-Type": "application/json",
        }
        if cfg.api_key:
            headers["Authorization"] = f"Bearer {cfg.api_key}"

        payload = {
            "model": cfg.model,
            "messages": [
                {
                    "role": "system",
                    "content": LLAMA_VISION_SYSTEM_PROMPT,
                },
                {
                    "role": "user",
                    "content": [
                        {"type": "text", "text": LLAMA_VISION_USER_PROMPT},
                        {"type": "image_url", "image_url": {"url": image_data_url}},
                    ],
                },
            ],
            "temperature": cfg.temperature,
            "max_tokens": cfg.max_tokens,
            "response_format": {"type": "json_object"},
        }

        api_endpoint = f"{cfg.base_url.rstrip('/')}/chat/completions"
        logger.info("Calling Llama 3.2 Vision at %s (model: %s)", api_endpoint, cfg.model)

        with httpx.Client(timeout=cfg.timeout_seconds) as client:
            response = client.post(api_endpoint, headers=headers, json=payload)
            response.raise_for_status()
            response_json = response.json()

        content = response_json["choices"][0]["message"]["content"]
        cleaned_json = _clean_json_text(content)
        parsed = json.loads(cleaned_json)

        result = SketchAnalysisResult(
            **parsed,
            inference_backend=f"llama-3.2-vision ({cfg.model})",
            raw_response=content,
        )
        return result

    except Exception as err:
        logger.warning(
            "Remote Llama 3.2 Vision inference failed or timed out: %s. "
            "Falling back to OpenCV Heuristic Analysis.",
            err,
        )
        fallback = _heuristic_sketch_analysis(path)
        fallback.raw_response = f"Remote inference fallback: {err}"
        return fallback


# ============================================================================
# Resilient OpenCV Heuristic Analysis Engine
# ============================================================================

def _heuristic_sketch_analysis(image_path: Path) -> SketchAnalysisResult:
    """Extracts structural and geometric features using OpenCV contour and geometry metrics.

    Ensures that testing, CI, offline environments, and hackathon demos operate
    deterministically without requiring live cloud tokens.
    """
    img = cv2.imread(str(image_path), cv2.IMREAD_GRAYSCALE)
    if img is None:
        raise ValueError(f"Unable to read sketch image for analysis at {image_path}")

    h, w = img.shape
    # Detect stroke pixels (dark pixels on light background)
    _, binary = cv2.threshold(img, 220, 255, cv2.THRESH_BINARY_INV)
    contours, _ = cv2.findContours(binary, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Calculate stroke bounding box
    stroke_coords = np.argwhere(binary > 0)
    if len(stroke_coords) == 0:
        # Uniform image
        y_min, x_min, y_max, x_max = 0, 0, h, w
        bbox_w, bbox_h = w, h
    else:
        y_min, x_min = stroke_coords.min(axis=0)
        y_max, x_max = stroke_coords.max(axis=0)
        bbox_w = max(1, x_max - x_min)
        bbox_h = max(1, y_max - y_min)

    aspect_ratio = bbox_w / float(bbox_h)
    stroke_pixel_count = int(np.count_nonzero(binary))
    density = stroke_pixel_count / float(bbox_w * bbox_h)

    # Detect geometric primitives
    primitives = []
    has_ellipse = False
    has_rectangle = False
    has_vertical_lines = False
    has_horizontal_lines = False

    for cnt in contours:
        if cv2.contourArea(cnt) < 20:
            continue
        peri = cv2.arcLength(cnt, True)
        approx = cv2.approxPolyDP(cnt, 0.04 * peri, True)
        if len(approx) == 4:
            has_rectangle = True
        if len(cnt) >= 5:
            try:
                ellipse = cv2.fitEllipse(cnt)
                axes = ellipse[1]
                if min(axes) > 10 and max(axes) / min(axes) < 3.0:
                    has_ellipse = True
            except cv2.error:
                pass

    if has_rectangle:
        primitives.append("rectangle")
    if has_ellipse:
        primitives.append("ellipse / circle")
    if aspect_ratio < 0.8:
        has_vertical_lines = True
        primitives.append("vertical linear supports")
    elif aspect_ratio > 1.2:
        has_horizontal_lines = True
        primitives.append("horizontal elongated contours")

    # Heuristic Classification based on geometry
    if 0.75 <= aspect_ratio <= 1.25 and has_ellipse:
        obj_type = "coffee mug"
        cat = "tableware"
        view = "three-quarter perspective"
        shape = "cylindrical with lateral curved appendage"
        symm = "asymmetric due to handle, bilaterally symmetric body"
        parts = [
            VisiblePart(
                name="cylindrical body",
                observed="closed vertical boundary with curved top/bottom rim strokes",
                inferred="hollow ceramic vessel container",
                relationships="forms central axis and main volume",
            ),
            VisiblePart(
                name="handle",
                observed="curved looped stroke attached to lateral side",
                inferred="ergonomic grasp handle",
                relationships="connected to side of cylindrical body",
            ),
            VisiblePart(
                name="rim / aperture",
                observed="elliptical contour at the upper terminus",
                inferred="open circular top mouth viewed at an angle",
                relationships="bounds upper lip of main body",
            ),
        ]
        uncertainties = [
            "Internal wall thickness cannot be determined from single contour",
            "Base bottom contour is partially hidden from this perspective",
        ]
        prompt = (
            "A clean 3D model of a ceramic coffee mug, cylindrical body with smooth curved handle on the side, "
            "circular rim opening, flat bottom base, centered on a neutral white background, studio lighting."
        )

    elif aspect_ratio < 0.85:
        obj_type = "chair"
        cat = "furniture"
        view = "three-quarter perspective"
        shape = "rectangular / prismatic with slender supports"
        symm = "bilaterally symmetric along vertical axis"
        parts = [
            VisiblePart(
                name="seat surface",
                observed="horizontal planar boundary stroke",
                inferred="flat horizontal seating platform",
                relationships="connects backrest to support legs",
            ),
            VisiblePart(
                name="backrest",
                observed="vertical upward boundary strokes above seat level",
                inferred="lumbar support frame or panel",
                relationships="extends upward from rear edge of seat",
            ),
            VisiblePart(
                name="legs",
                observed="multiple downward vertical stroke lines",
                inferred="four load-bearing vertical support posts",
                relationships="extend downward from underside of seat to floor plane",
            ),
        ]
        uncertainties = [
            "Rear leg thickness and exact joint junctions are simplified",
            "Cushioning volume or depth is not fully rendered in 2D line work",
        ]
        prompt = (
            "A minimalist modern chair 3D model, four straight vertical legs, flat seat base, vertical backrest, "
            "clean wooden or matte plastic texture, centered on white background, 3D asset ready for reconstruction."
        )

    elif aspect_ratio > 1.3:
        obj_type = "vehicle / horizontal prop"
        cat = "transportation / prop"
        view = "side profile view"
        shape = "horizontally elongated aerodynamic silhouette"
        symm = "bilaterally symmetric along longitudinal axis"
        parts = [
            VisiblePart(
                name="main body chassis",
                observed="continuous elongated horizontal contour",
                inferred="cabin and lower body structure",
                relationships="supported above ground plane",
            ),
            VisiblePart(
                name="wheel apertures / wheels",
                observed="circular or curved bottom regions",
                inferred="rotational wheel assemblies",
                relationships="positioned at lower front and rear base",
            ),
        ]
        uncertainties = [
            "Opposite side is completely occluded from side perspective",
            "Wheel hub depth is flattened in 2D sketch",
        ]
        prompt = (
            "A 3D model of a compact vehicle, clean streamlined chassis, detailed wheel arches, "
            "solid body geometry on white background."
        )

    else:
        obj_type = "geometric object / prop"
        cat = "general prop"
        view = "perspective view"
        shape = "compact geometric form"
        symm = "approximately symmetric"
        parts = [
            VisiblePart(
                name="main outer boundary",
                observed="closed contour defining principal silhouette",
                inferred="primary 3D volume envelope",
                relationships="encloses interior stroke features",
            )
        ]
        uncertainties = [
            "Internal volume depth is inferred from outer silhouette boundaries",
            "Rear facets are occluded by viewpoint",
        ]
        prompt = (
            "A clean 3D reconstruction of a hand-drawn geometric object, solid manifold mesh, "
            "centered on neutral white background."
        )

    desc = (
        f"Hand-drawn sketch depicting a {obj_type} in {view}. "
        f"Observed features include {len(contours)} primary stroke contours occupying roughly "
        f"{density*100:.1f}% bounding density with an aspect ratio of {aspect_ratio:.2f} (w/h). "
        f"Inferred 3D semantics describe a {shape} belonging to the {cat} category with {symm}."
    )

    return SketchAnalysisResult(
        object_type=obj_type,
        category=cat,
        view_type=view,
        confidence_score=0.82,
        description=desc,
        visible_parts=parts,
        geometry_features=GeometryFeatures(
            overall_shape=shape,
            symmetry=symm,
            proportions=f"width-to-height ratio approximately {aspect_ratio:.2f}:1",
            stroke_characteristics="hand-drawn outline contours with clean silhouette boundary",
            observed_geometric_primitives=primitives or ["curved contours", "planar lines"],
        ),
        uncertainties=uncertainties,
        reconstruction_prompt=prompt,
        inference_backend="heuristic-fallback",
        raw_response=None,
    )
