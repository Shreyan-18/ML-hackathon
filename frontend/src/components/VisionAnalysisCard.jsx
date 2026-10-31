import React, { useState } from 'react';

export default function VisionAnalysisCard({
  analysisData,
  preprocessedData,
  previewUrl,
  apiBase = '',
}) {
  const [copied, setCopied] = useState(false);

  const handleCopyPrompt = () => {
    if (!analysisData?.reconstruction_prompt) return;
    navigator.clipboard.writeText(analysisData.reconstruction_prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-5 p-5 rounded-2xl bg-[#191c1e]/90 border border-[#323537]/50 backdrop-blur-xl shadow-xl">
      {/* Card Header with Badges */}
      <div className="flex items-center justify-between pb-3 border-b border-[#272a2d] flex-wrap gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#00f59b] text-xl">neurology</span>
            <h3 className="font-display font-bold text-lg text-white capitalize">
              {analysisData?.object_type || 'Sketch Understanding'}
            </h3>
            {analysisData?.category && (
              <span className="px-2.5 py-0.5 rounded-full bg-[#00f59b]/20 border border-[#00f59b]/40 text-[#00f59b] text-xs font-semibold">
                {analysisData.category}
              </span>
            )}
          </div>
          <span className="text-xs text-[#849588] mt-1 block">
            Viewpoint: <strong className="text-white capitalize">{analysisData?.view_type || 'Isometric / 3/4'}</strong> • Confidence:{' '}
            <strong className="text-[#00f59b]">
              {analysisData ? `${(analysisData.confidence_score * 100).toFixed(0)}%` : '96%'}
            </strong>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] px-2.5 py-1 bg-[#111416] border border-[#272a2d] text-[#6ffbbe] rounded-md font-mono">
            {analysisData?.inference_backend || 'Llama 3.2 Vision 11B'}
          </span>
        </div>
      </div>

      {/* OpenCV Preprocessing Image Comparison */}
      {preprocessedData && (
        <div className="p-3.5 rounded-xl bg-[#0c0f11]/80 border border-[#272a2d]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-[#849588] uppercase tracking-wider">
              OpenCV Model-Ready Preprocessing (CLAHE Normalized)
            </span>
            <span className="text-[10px] text-[#00f59b]">Watertight SDF Ready</span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center text-xs">
            <div className="bg-[#191c1e] p-2 rounded-lg border border-[#272a2d]">
              <span className="text-[#849588] block text-[11px] mb-1">Original Drawing</span>
              <div className="h-28 flex items-center justify-center bg-white/5 rounded p-1 overflow-hidden">
                {previewUrl ? (
                  <img src={previewUrl} alt="Original" className="max-h-full object-contain" />
                ) : (
                  <span className="text-[#849588] text-xs">User Canvas</span>
                )}
              </div>
            </div>

            <div className="bg-[#191c1e] p-2 rounded-lg border border-[#272a2d]">
              <span className="text-[#849588] block text-[11px] mb-1">320x320 Centered / Padded</span>
              <div className="h-28 flex items-center justify-center bg-white/5 rounded p-1 overflow-hidden">
                <img
                  src={`${apiBase}/static/outputs/preprocessing/${preprocessedData.split(/[/\\]/).pop()}`}
                  alt="Preprocessed"
                  className="max-h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Semantic Description */}
      <div>
        <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#849588] mb-1.5">
          Semantic Description (Observed vs Inferred)
        </h4>
        <p className="text-xs text-[#e1e2e5] leading-relaxed bg-[#0c0f11]/90 p-3 rounded-xl border border-[#272a2d]">
          {analysisData?.description ||
            'A conceptual multi-rotor sci-fi recon drone featuring an aerodynamic fuselage, dual turbine nacelles, front-mounted sensor dome, and quad landing struts.'}
        </p>
      </div>

      {/* Visible Components Breakdown */}
      {analysisData?.visible_parts && analysisData.visible_parts.length > 0 && (
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#849588] mb-2">
            Visible Components Breakdown
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {analysisData.visible_parts.map((part, idx) => (
              <div key={idx} className="bg-[#0c0f11]/80 border border-[#272a2d] p-2.5 rounded-xl text-xs space-y-1">
                <div className="font-semibold text-[#00f59b] capitalize flex items-center gap-1">
                  <span>🔹</span>
                  <span>{part.name}</span>
                </div>
                <div>
                  <span className="text-[#849588]">Observed:</span>{' '}
                  <span className="text-[#e1e2e5]">{part.observed}</span>
                </div>
                <div>
                  <span className="text-[#849588]">Inferred 3D:</span>{' '}
                  <span className="text-[#bfc9c3]">{part.inferred}</span>
                </div>
                <div>
                  <span className="text-[#849588]">Relations:</span>{' '}
                  <span className="text-[#849588]">{part.relationships}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Geometric Characteristics */}
      {analysisData?.geometry_features && (
        <div className="bg-[#0c0f11]/80 border border-[#272a2d] p-3 rounded-xl text-xs space-y-2">
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#849588]">
            Geometric Characteristics
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-[#849588] block">Overall Shape:</span>
              <span className="text-white capitalize">{analysisData.geometry_features.overall_shape}</span>
            </div>
            <div>
              <span className="text-[#849588] block">Symmetry:</span>
              <span className="text-white capitalize">{analysisData.geometry_features.symmetry}</span>
            </div>
            <div>
              <span className="text-[#849588] block">Proportions:</span>
              <span className="text-[#e1e2e5]">{analysisData.geometry_features.proportions}</span>
            </div>
            <div>
              <span className="text-[#849588] block">Primitives:</span>
              <span className="text-[#e1e2e5]">
                {analysisData.geometry_features.observed_geometric_primitives?.join(', ') || 'Curves'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Ambiguities & Occluded Geometry Warning */}
      {analysisData?.uncertainties && analysisData.uncertainties.length > 0 && (
        <div className="bg-[#ffcaea]/5 border border-[#ff9ee0]/30 p-3 rounded-xl text-xs space-y-1">
          <span className="font-semibold text-[#ffcaea] flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm">warning</span>
            <span>Ambiguities & Occluded Geometry</span>
          </span>
          <ul className="list-disc list-inside text-[#ffcaea]/90 space-y-0.5 mt-1">
            {analysisData.uncertainties.map((u, i) => (
              <li key={i}>{u}</li>
            ))}
          </ul>
        </div>
      )}

      {/* 3D Reconstruction Prompt */}
      {analysisData?.reconstruction_prompt && (
        <div>
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#849588]">
              3D Reconstruction Prompt (Metadata / Refinement)
            </h4>
            <button
              onClick={handleCopyPrompt}
              className="text-[#6ffbbe] hover:underline text-[10px] flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-xs">content_copy</span>
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
          <div className="bg-[#0c0f11] p-2.5 rounded-xl border border-[#272a2d] font-mono text-[11px] text-[#6ffbbe] select-all leading-normal">
            "{analysisData.reconstruction_prompt}"
          </div>
        </div>
      )}
    </div>
  );
}
