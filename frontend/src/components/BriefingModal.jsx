import React from 'react';

export default function BriefingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#191c1e] border border-[#FF7F50]/40 p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#272a2d]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#272a2d] to-[#0c0f11] border border-[#FF7F50]/50 flex items-center justify-center text-[#FF7F50]">
              <span className="material-symbols-outlined text-2xl">campaign</span>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white">
                TechZephyr 4.0 Hackathon Briefing
              </h3>
              <p className="text-xs text-[#849588]">
                Production-Grade 2D Sketch to 3D Shape Synthesis Architecture
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#111416] hover:bg-[#272a2d] text-[#bfc9c3] hover:text-white flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="py-5 space-y-5 text-xs text-[#bfc9c3] leading-relaxed">
          {/* Mission */}
          <div className="p-4 rounded-xl bg-[#0c0f11] border border-[#272a2d]">
            <h4 className="font-semibold text-[#00f59b] uppercase tracking-wider text-[11px] mb-1">
              🏆 Project Objective
            </h4>
            <p>
              Transform arbitrary 2D hand-drawn concept sketches into watertight, game-engine-ready 3D meshes
              using a state-of-the-art hybrid pipeline combining OpenCV geometric normalization, Llama 3.2 Vision
              semantic decomposition, and InstantMesh sparse-view Large Reconstruction Models.
            </p>
          </div>

          {/* 4-Stage Architecture Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div className="p-3.5 rounded-xl bg-[#111416] border border-[#272a2d] space-y-1">
              <span className="font-bold text-[#FF7F50] flex items-center gap-1.5">
                <span>01.</span>
                <span>OpenCV Preprocessing Engine</span>
              </span>
              <p className="text-[11px] text-[#849588]">
                Auto-polar inversion (white sketch on black ground), bounding box aspect ratio preservation,
                CLAHE local contrast enhancement, and bilateral noise filtering to create 320x320/512x512
                model-ready tensors.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#111416] border border-[#272a2d] space-y-1">
              <span className="font-bold text-[#00f59b] flex items-center gap-1.5">
                <span>02.</span>
                <span>Llama 3.2 Vision Understanding</span>
              </span>
              <p className="text-[11px] text-[#849588]">
                Decomposes 2D strokes into structured JSON with object classification, visible part breakdown
                (observed vs inferred 3D depth), symmetry planes, occluded geometry cues, and prompt synthesis.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#111416] border border-[#272a2d] space-y-1">
              <span className="font-bold text-[#7bd0ff] flex items-center gap-1.5">
                <span>03.</span>
                <span>InstantMesh 3D Reconstruction</span>
              </span>
              <p className="text-[11px] text-[#849588]">
                Feeds preprocessed silhouettes and multi-view priors into a feed-forward transformer (LRM),
                extracting watertight meshes via Marching Tetrahedra with topology validation in under 25 seconds.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#111416] border border-[#272a2d] space-y-1">
              <span className="font-bold text-[#ffcaea] flex items-center gap-1.5">
                <span>04.</span>
                <span>Export & Interactive Viewport</span>
              </span>
              <p className="text-[11px] text-[#849588]">
                Real-time WebGL Three.js viewport featuring PBR metallic textures, glowing wireframes, normal map
                inspectors, turntable rotation, and direct .OBJ download ready for Blender and 3D printing.
              </p>
            </div>
          </div>

          {/* Quick API Endpoints Table */}
          <div className="p-4 rounded-xl bg-[#0c0f11] border border-[#272a2d]">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-2">
              FastAPI Endpoints Active
            </h4>
            <div className="space-y-1.5 font-mono text-[11px]">
              <div className="flex justify-between p-1.5 rounded bg-[#191c1e] text-white">
                <span className="text-[#00f59b]">POST /api/preprocess</span>
                <span className="text-[#849588]">CLAHE Resizing & Normalization</span>
              </div>
              <div className="flex justify-between p-1.5 rounded bg-[#191c1e] text-white">
                <span className="text-[#00f59b]">POST /api/analyze-sketch</span>
                <span className="text-[#849588]">Llama 3.2 Vision VLM Analysis</span>
              </div>
              <div className="flex justify-between p-1.5 rounded bg-[#191c1e] text-white">
                <span className="text-[#00f59b]">POST /api/reconstruct</span>
                <span className="text-[#849588]">InstantMesh End-to-End 3D OBJ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#272a2d] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#FF7F50] hover:bg-[#e06336] text-white font-semibold text-xs transition-colors shadow-lg shadow-[#FF7F50]/20"
          >
            Got it, Let's Create
          </button>
        </div>
      </div>
    </div>
  );
}
