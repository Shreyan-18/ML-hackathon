"""Configuration module for Sketch2Shape AI Preprocessing, Vision, and Backend."""

import os
from dataclasses import dataclass, field
from pathlib import Path
from typing import Optional, Tuple


@dataclass
class PreprocessingConfig:
    """Configuration options for sketch image preprocessing.
    
    Attributes:
        target_size: Desired (width, height) output dimensions. Defaults to (320, 320)
                     which matches InstantMesh / Zero123++ native multi-view grid resolution.
        preserve_aspect_ratio: Whether to preserve original sketch aspect ratio.
        padding_ratio: Proportion of canvas reserved as safety margin around the sketch
                       (prevents boundary clipping during 3D camera rotation).
        background_color: RGB background color for compositing transparency and canvas
                          padding. Defaults to (255, 255, 255) for white background.
        color_mode: Output color mode ("RGB" or "GRAY"). InstantMesh expects "RGB".
        auto_invert_dark_background: If True, detects dark/chalkboard backgrounds (e.g.
                                     white strokes on black canvas) and inverts them to
                                     dark strokes on white background.
        enable_contrast_enhancement: Whether to apply conservative contrast improvement.
        contrast_method: "clahe" (Contrast Limited Adaptive Histogram Equalization) or
                         "linear_stretch" or "none".
        clahe_clip_limit: Threshold for contrast limiting in CLAHE (conservative: 1.5).
        clahe_grid_size: Tile grid size for CLAHE (default: (8, 8)).
        enable_noise_reduction: Whether to apply edge-preserving noise reduction.
        noise_filter_type: "bilateral" (edge-preserving, recommended), "gaussian",
                           "median", or "none".
        bilateral_d: Diameter of each pixel neighborhood for bilateral filter.
        bilateral_sigma_color: Filter sigma in color space for bilateral filter.
        bilateral_sigma_space: Filter sigma in coordinate space for bilateral filter.
        gaussian_ksize: Kernel size for Gaussian filter.
        gaussian_sigma: Gaussian kernel standard deviation.
        median_ksize: Aperture linear size for median filter (odd integer).
        apply_thresholding: Whether to binarize sketch. Default False to preserve delicate
                            strokes and anti-aliasing.
        threshold_type: "otsu" or "adaptive".
        generate_diagnostic_edges: Optional diagnostic edge-map generation (saved in debug mode).
        debug: Whether to save intermediate pipeline images for debugging.
        debug_dir: Custom directory to write intermediate debug images to.
    """

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
            or ("llama-3.2-11b-vision-preview" if "groq.com" in os.getenv("LLAMA_VISION_BASE_URL", "") or os.getenv("GROQ_API_KEY") else "meta-llama/Llama-3.2-11B-Vision-Instruct")
        )
    )
    timeout_seconds: float = 30.0
    temperature: float = 0.2
    max_tokens: int = 1500


@dataclass
class ForegroundIsolationConfig:
    """Settings for foreground extraction and background removal."""

    method: str = "auto"  # "auto", "rembg", or "contour"
    rembg_model: str = "birefnet-general"  # or "isnet-general-use", "u2net"
    clean_mask_holes: bool = True
    morphology_kernel_size: int = 5
    min_contour_area_ratio: float = 0.005  # filters specks < 0.5% image area
    padding_ratio: float = 0.1
    background_color: Tuple[int, int, int] = (255, 255, 255)
    debug: bool = False


@dataclass
class Generation25DConfig:
    """Settings for 2.5D depth estimation, normal map generation, and relief mesh."""

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


@dataclass
class AppConfig:
    """Application-wide paths and settings."""

    base_dir: Path = field(default_factory=lambda: Path(__file__).resolve().parent.parent)
    upload_dir: Path = field(default_factory=lambda: Path(__file__).resolve().parent.parent / "uploads")
    output_dir: Path = field(default_factory=lambda: Path(__file__).resolve().parent.parent / "outputs")
    debug_dir: Path = field(default_factory=lambda: Path(__file__).resolve().parent.parent / "outputs" / "preprocessing")
    foreground_output_dir: Path = field(default_factory=lambda: Path(__file__).resolve().parent.parent / "outputs" / "foreground_isolation")
    generation_25d_output_dir: Path = field(default_factory=lambda: Path(__file__).resolve().parent.parent / "outputs" / "2.5d_generation")
    reconstruction_output_dir: Path = field(default_factory=lambda: Path(__file__).resolve().parent.parent / "outputs" / "reconstructions")
    frontend_dist_dir: Path = field(default_factory=lambda: Path(__file__).resolve().parent.parent / "frontend" / "dist")

    def __post_init__(self):
        self.upload_dir.mkdir(parents=True, exist_ok=True)
        self.output_dir.mkdir(parents=True, exist_ok=True)
        self.debug_dir.mkdir(parents=True, exist_ok=True)
        self.foreground_output_dir.mkdir(parents=True, exist_ok=True)
        self.generation_25d_output_dir.mkdir(parents=True, exist_ok=True)
        self.reconstruction_output_dir.mkdir(parents=True, exist_ok=True)


app_config = AppConfig()
vision_config = LlamaVisionConfig()
foreground_config = ForegroundIsolationConfig()
generation_25d_config = Generation25DConfig()
