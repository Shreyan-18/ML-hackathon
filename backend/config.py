"""Configuration module for Sketch2Shape AI Preprocessing, Vision, and Backend."""

import os
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import List, Optional, Tuple

_project_root = str(Path(__file__).resolve().parent.parent)
if _project_root not in sys.path:
    sys.path.insert(0, _project_root)

# Auto-load .env configuration if present
_env_file = Path(_project_root) / ".env"
if _env_file.exists():
    try:
        for _line in _env_file.read_text(encoding="utf-8").splitlines():
            _line = _line.strip()
            if _line and not _line.startswith("#") and "=" in _line:
                _k, _v = _line.split("=", 1)
                _k, _v = _k.strip(), _v.strip().strip("'\"")
                if _k and _k not in os.environ:
                    os.environ[_k] = _v
    except Exception:
        pass


def _collect_hf_tokens() -> List[str]:
    """Collects all available Hugging Face tokens from environment for quota rotation."""
    candidates = [
        os.getenv("HUGGINGFACE_API_KEY"),
        os.getenv("HF_TOKEN"),
        os.getenv("HUGGINGFACE_TOKEN"),
        os.getenv("HF_API_KEY"),
    ]
    tokens: List[str] = []
    for t in candidates:
        if t and t.strip() and t.strip() not in tokens:
            tokens.append(t.strip())
    return tokens


@dataclass
class PreprocessingConfig:
    """Configuration options for sketch image preprocessing."""

    target_size: Tuple[int, int] = (320, 320)
    preserve_aspect_ratio: bool = True
    padding_ratio: float = 0.1
    background_color: Tuple[int, int, int] = (255, 255, 255)
    color_mode: str = "RGB"
    auto_invert_dark_background: bool = True
    enable_contrast_enhancement: bool = True
    contrast_method: str = "clahe"
    clahe_clip_limit: float = 1.5
    clahe_grid_size: Tuple[int, int] = (8, 8)
    enable_noise_reduction: bool = True
    noise_filter_type: str = "bilateral"
    bilateral_d: int = 5
    bilateral_sigma_color: float = 25.0
    bilateral_sigma_space: float = 25.0
    gaussian_ksize: Tuple[int, int] = (3, 3)
    gaussian_sigma: float = 0.5
    median_ksize: int = 3
    apply_thresholding: bool = False
    threshold_type: str = "otsu"
    generate_diagnostic_edges: bool = False
    debug: bool = False
    debug_dir: Optional[str] = None


@dataclass
class VisionConfig:
    """Settings for Vision model inference (Google Gemini or OpenAI/Llama/Groq compatible)."""

    provider: str = field(
        default_factory=lambda: (
            os.getenv("VISION_PROVIDER")
            or ("gemini" if (os.getenv("GEMINI_API_KEY") or os.getenv("GOOGLE_API_KEY")) else "gemini")
        )
    )
    api_key: Optional[str] = field(
        default_factory=lambda: (
            os.getenv("GEMINI_API_KEY")
            or os.getenv("GOOGLE_API_KEY")
            or os.getenv("LLAMA_VISION_API_KEY")
            or os.getenv("GROQ_API_KEY")
            or os.getenv("TOGETHER_API_KEY")
            or os.getenv("OPENAI_API_KEY")
        )
    )
    base_url: str = field(
        default_factory=lambda: (
            os.getenv("GEMINI_BASE_URL")
            or (
                "https://generativelanguage.googleapis.com/v1beta"
                if (
                    os.getenv("VISION_PROVIDER", "gemini") == "gemini"
                    or os.getenv("GEMINI_API_KEY")
                    or os.getenv("GOOGLE_API_KEY")
                    or not os.getenv("GROQ_API_KEY")
                )
                else ("https://api.groq.com/openai/v1" if os.getenv("GROQ_API_KEY") else "http://localhost:11434/v1")
            )
        )
    )
    model: str = field(
        default_factory=lambda: (
            os.getenv("GEMINI_MODEL")
            or (
                "gemini-2.5-flash"
                if (
                    os.getenv("VISION_PROVIDER", "gemini") == "gemini"
                    or os.getenv("GEMINI_API_KEY")
                    or os.getenv("GOOGLE_API_KEY")
                    or not os.getenv("GROQ_API_KEY")
                )
                else (
                    os.getenv("LLAMA_VISION_MODEL")
                    or (
                        "qwen/qwen3.8-27b"
                        if "groq.com" in os.getenv("LLAMA_VISION_BASE_URL", "") or os.getenv("GROQ_API_KEY")
                        else "meta-llama/Llama-3.2-11B-Vision-Instruct"
                    )
                )
            )
        )
    )
    timeout_seconds: float = 20.0
    temperature: float = 0.2
    max_tokens: int = 1500


# Backward compatibility alias
LlamaVisionConfig = VisionConfig


@dataclass
class ForegroundIsolationConfig:
    """Settings for foreground extraction and background removal."""

    method: str = "auto"  # "auto", "rembg", or "contour"
    rembg_model: str = os.getenv("REMBG_MODEL", "bria-rmbg")  # "bria-rmbg", "u2net", "isnet-general-use"
    clean_mask_holes: bool = True
    morphology_kernel_size: int = 5
    min_contour_area_ratio: float = 0.005  # filters specks < 0.5% image area
    padding_ratio: float = 0.1
    background_color: Tuple[int, int, int] = (255, 255, 255)
    debug: bool = False


@dataclass
class Generation25DConfig:
    """Settings for 2.5D depth estimation, normal map generation, relief mesh, and Gemini volumetric concept render."""

    depth_method: str = "balloon"  # "balloon" (distance transform + shading), "gradient", or "model"
    depth_scale: float = 1.0
    invert_depth: bool = False
    normal_smoothing_sigma: float = 1.0
    export_relief_mesh: bool = True
    relief_resolution: int = 128
    relief_max_height: float = 0.35
    relief_base_depth: float = 0.05
    relief_format: str = "obj"  # "obj" or "glb"
    debug: bool = False

    # Gemini 2.5D Volumetric Concept Generation (using dedicated Key 2)
    gemini_api_key: Optional[str] = field(
        default_factory=lambda: (
            os.getenv("GEMINI_25D_API_KEY")
            or os.getenv("GEMINI_IMAGE_API_KEY")
            or os.getenv("GEMINI_API_KEY")
        )
    )
    gemini_model: str = field(
        default_factory=lambda: os.getenv("GEMINI_25D_MODEL") or "gemini-2.5-flash-image"
    )
    prompt: str = "Refine and transform this rough sketch into a polished 2.5D volumetric studio concept with smooth contours, rich 3D shading gradients, and solid depth."


@dataclass
class RefinementConfig:
    """Settings for AI sketch image refinement, prompt conditioning, and quality validation."""

    engine: str = "auto"  # "auto", "diffusers", "api", "neural_heuristic"
    model_id: str = "lllyasviel/control_v11p_sd15_scribble"
    denoising_strength: float = 0.35  # Conservative to preserve sketch structure
    guidance_scale: float = 7.5
    num_inference_steps: int = 20
    preserve_strokes: bool = True
    contrast_enhancement_clip: float = 2.0
    line_smoothing_sigma: float = 1.0

    # Quality Validation Thresholds (Rejection & Fallback Guardrails)
    strict_validation: bool = True
    min_edge_overlap_iou: float = 0.30  # Minimum edge contour retention (adapted for line drawings)
    min_silhouette_iou: float = 0.35    # Minimum bounding box/silhouette retention
    max_centroid_drift: float = 0.15     # Maximum 15% centroid shift allowed
    min_background_cleanliness: float = 0.80  # Minimum 80% background purity
    min_contrast_ratio: float = 0.20    # Foreground stroke-to-background contrast ratio
    max_component_ratio: float = 3.5    # Prevents hallucinating > 3.5x extra disjoint parts
    min_scale_ratio: float = 0.70       # Detects excessive object shrinkage below 70%
    max_scale_ratio: float = 1.45       # Detects excessive object enlargement above 145%

    debug: bool = False


@dataclass
class InstantMeshConfig:
    """Settings for cloud-accelerated 3D reconstruction via Hugging Face Spaces."""

    hf_token: Optional[str] = field(
        default_factory=lambda: (
            os.getenv("HUGGINGFACE_API_KEY")
            or os.getenv("HF_TOKEN")
        )
    )
    hf_tokens: List[str] = field(default_factory=_collect_hf_tokens)
    space_id: str = "TencentARC/InstantMesh"
    fallback_spaces: List[str] = field(
        default_factory=lambda: [
            "tencent/Hunyuan3D-2",
            "stabilityai/stable-fast-3d",
            "AshishGarg/InstantMesh",
            "stabilityai/TripoSR",
        ]
    )
    sample_steps: int = 75
    sample_seed: int = 42
    input_resolution: int = 512
    do_remove_background: bool = False
    timeout: float = 90.0
    enabled: bool = True


@dataclass
class NvidiaTrellisConfig:
    """Settings for Microsoft TRELLIS 3D model inference on NVIDIA DGX Cloud NIM."""

    api_key: Optional[str] = field(
        default_factory=lambda: (
            os.getenv("NVIDIA_API_KEY")
            or os.getenv("NVAPI_KEY")
        )
    )
    endpoint: str = "https://ai.api.nvidia.com/v1/genai/microsoft/trellis"
    timeout: float = 25.0
    enabled: bool = True
    max_prompt_chars: int = 75
    seed: int = 42
    no_texture: bool = False
    slat_cfg_scale: float = 3.0
    ss_cfg_scale: float = 7.5
    slat_sampling_steps: int = 25
    ss_sampling_steps: int = 25


@dataclass
class AppConfig:
    """Application-wide paths and settings."""

    base_dir: Path = field(default_factory=lambda: Path(__file__).resolve().parent.parent)
    upload_dir: Path = field(default_factory=lambda: Path(__file__).resolve().parent.parent / "uploads")
    output_dir: Path = field(default_factory=lambda: Path(__file__).resolve().parent.parent / "outputs")
    debug_dir: Path = field(default_factory=lambda: Path(__file__).resolve().parent.parent / "outputs" / "preprocessing")
    foreground_output_dir: Path = field(default_factory=lambda: Path(__file__).resolve().parent.parent / "outputs" / "foreground_isolation")
    generation_25d_output_dir: Path = field(default_factory=lambda: Path(__file__).resolve().parent.parent / "outputs" / "2.5d_generation")
    refinement_output_dir: Path = field(default_factory=lambda: Path(__file__).resolve().parent.parent / "outputs" / "refinement")
    reconstruction_output_dir: Path = field(default_factory=lambda: Path(__file__).resolve().parent.parent / "outputs" / "reconstructions")
    frontend_dist_dir: Path = field(default_factory=lambda: Path(__file__).resolve().parent.parent / "frontend" / "dist")

    def __post_init__(self):
        self.upload_dir.mkdir(parents=True, exist_ok=True)
        self.output_dir.mkdir(parents=True, exist_ok=True)
        self.debug_dir.mkdir(parents=True, exist_ok=True)
        self.foreground_output_dir.mkdir(parents=True, exist_ok=True)
        self.generation_25d_output_dir.mkdir(parents=True, exist_ok=True)
        self.refinement_output_dir.mkdir(parents=True, exist_ok=True)
        self.reconstruction_output_dir.mkdir(parents=True, exist_ok=True)


app_config = AppConfig()
vision_config = LlamaVisionConfig()
foreground_config = ForegroundIsolationConfig()
generation_25d_config = Generation25DConfig()
refinement_config = RefinementConfig()
instantmesh_config = InstantMeshConfig()
trellis_config = NvidiaTrellisConfig()
