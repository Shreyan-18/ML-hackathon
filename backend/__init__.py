"""Sketch2Shape AI Backend Package."""

import sys
from pathlib import Path

_project_root = str(Path(__file__).resolve().parent.parent)
if _project_root not in sys.path:
    sys.path.insert(0, _project_root)

from backend.config import app_config, foreground_config, generation_25d_config
from backend.preprocessing import preprocess_sketch
from backend.foreground_isolation import isolate_foreground
from backend.generation_25d import generate_25d
from backend.reconstruction import reconstruct_3d

__all__ = [
    "app_config",
    "foreground_config",
    "generation_25d_config",
    "preprocess_sketch",
    "isolate_foreground",
    "generate_25d",
    "reconstruct_3d",
]
