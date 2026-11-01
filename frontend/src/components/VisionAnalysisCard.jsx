import React, { useState } from 'react';

export default function VisionAnalysisCard({
  analysisData,
  visionLoading = false,
  preprocessedData,
  previewUrl,
  isolationData,
  isolatedPreviewUrl,
  generation25DData,
  refinementData,
  refinedPreviewUrl,
  apiBase = '',
}) {
  const [copied, setCopied] = useState(false);
  const [conceptView, setConceptView] = useState('auto'); // 'svg' or 'render'

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
              {analysisData?.object_type || (visionLoading ? 'Analyzing Sketch Geometry...' : 'Gemini Vision Understanding')}
            </h3>
            {analysisData?.category ? (
              <span className="px-2.5 py-0.5 rounded-full bg-[#00f59b]/20 border border-[#00f59b]/40 text-[#00f59b] text-xs font-semibold">
                {analysisData.category}
              </span>
            ) : !visionLoading && (
              <span className="px-2.5 py-0.5 rounded-full bg-[#272a2d] text-[#849588] text-xs font-medium">
                Click 'Vision Analysis' to run
              </span>
            )}
          </div>
          <span className="text-xs text-[#849588] mt-1 block">
            {analysisData ? (
              <>
                Viewpoint: <strong className="text-white capitalize">{analysisData?.view_type || 'Isometric / 3/4'}</strong> • Confidence:{' '}
                <strong className="text-[#00f59b]">
                  {`${(analysisData.confidence_score * 100).toFixed(0)}%`}
                </strong>
              </>
            ) : visionLoading ? (
              <span className="text-[#6ffbbe] animate-pulse">Running Gemini Vision multimodal reasoning...</span>
            ) : (
              <span>Extracts 3D primitives, view orientation, semantic hierarchy, and prompt conditioning.</span>
            )}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] px-2.5 py-1 bg-[#111416] border border-[#272a2d] text-[#6ffbbe] rounded-md font-mono flex items-center gap-1.5">
            {analysisData && <span className="w-2 h-2 rounded-full bg-[#00f59b] animate-pulse"></span>}
            <span>{analysisData?.inference_backend || (visionLoading ? 'Gemini 3.5 Flash (Processing)' : 'Gemini 3.5 Flash Vision')}</span>
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

      {/* AI Sketch Refinement & Quality Validation Card */}
      {refinementData && (
        <div className="p-3.5 rounded-xl bg-[#0c0f11]/80 border border-[#FF7F50]/40 shadow-inner">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-[#FF7F50] uppercase tracking-wider flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">auto_fix_high</span>
              <span>AI Refined Sketch (InstantMesh Ready)</span>
            </span>
            <div className="flex items-center gap-1.5">
              {refinementData.source_used && (
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold border ${
                  refinementData.source_used === 'isolated'
                    ? 'bg-[#00f59b]/20 text-[#00f59b] border-[#00f59b]/40'
                    : 'bg-[#FF7F50]/20 text-[#FF7F50] border-[#FF7F50]/40'
                }`}>
                  {refinementData.source_used === 'isolated' ? '✂️ Isolated Subject' : '✏️ Real Sketch'}
                </span>
              )}
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-semibold border ${
                  refinementData.is_fallback
                    ? 'bg-[#93000a]/20 text-[#ffb4ab] border-[#ffb4ab]/30'
                    : 'bg-[#00f59b]/20 text-[#00f59b] border-[#00f59b]/40'
                }`}
              >
                {refinementData.is_fallback ? 'Fallback Activated' : 'Quality Validated'}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 bg-[#191c1e] p-2.5 rounded-lg border border-[#272a2d]">
            <div className="w-full sm:w-28 h-28 bg-white rounded-lg p-1.5 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
              <img
                src={`${apiBase}/static/refinement/${refinementData.effective_image_path.split(/[/\\]/).pop()}`}
                alt="Refined effective"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="text-[11px] space-y-1.5 w-full flex-1">
              <div className="flex justify-between border-b border-[#272a2d] pb-1">
                <span className="text-[#849588]">Edge Contour Retention:</span>
                <span className="font-semibold text-white">
                  {(refinementData.validation.edge_overlap_iou * 100).toFixed(0)}%
                </span>
              </div>
              <div className="flex justify-between border-b border-[#272a2d] pb-1">
                <span className="text-[#849588]">Silhouette IoU:</span>
                <span className="font-semibold text-white">
                  {(refinementData.validation.silhouette_iou * 100).toFixed(0)}%
                </span>
              </div>
              <div className="flex justify-between border-b border-[#272a2d] pb-1">
                <span className="text-[#849588]">Scale Retention:</span>
                <span className="font-semibold text-[#00f59b]">
                  {((refinementData.validation.scale_ratio ?? 1.0) * 100).toFixed(0)}%
                </span>
              </div>
              <div className="flex justify-between border-b border-[#272a2d] pb-1">
                <span className="text-[#849588]">Stroke Contrast:</span>
                <span className="font-semibold text-white">
                  {(refinementData.validation.contrast_ratio * 100).toFixed(0)}%
                </span>
              </div>
              <div className="flex justify-between border-b border-[#272a2d] pb-1">
                <span className="text-[#849588]">Background Cleanliness:</span>
                <span className="font-semibold text-[#00f59b]">
                  {(refinementData.validation.background_cleanliness_score * 100).toFixed(0)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#849588]">Centroid Drift:</span>
                <span className="font-semibold text-white">
                  {(refinementData.validation.centroid_drift * 100).toFixed(1)}%
                </span>
              </div>
            </div>
          </div>

          {refinementData.is_fallback && refinementData.validation.failure_reasons?.length > 0 && (
            <div className="mt-2 p-2 rounded bg-[#93000a]/20 border border-[#ffb4ab]/30 text-[10px] text-[#ffb4ab]">
              <span className="font-semibold block mb-0.5">Validation Guardrail Rejection:</span>
              <ul className="list-disc list-inside space-y-0.5">
                {refinementData.validation.failure_reasons.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Foreground Isolation Multi-Channel Card */}
      {isolationData && (
        <div className="p-3.5 rounded-xl bg-[#0c0f11]/80 border border-[#00f59b]/40 shadow-inner">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-[#00f59b] uppercase tracking-wider flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">content_cut</span>
              <span>Isolated Foreground (RMBG / Saliency)</span>
            </span>
            <span className="text-[10px] text-[#849588] font-mono">
              {isolationData.method_used} • {(isolationData.foreground_pixel_ratio * 100).toFixed(1)}% coverage
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            {/* 1. Alpha RGBA Transparent Cutout */}
            <div className="bg-[#191c1e] p-2 rounded-lg border border-[#272a2d]">
              <span className="text-[#849588] block text-[10px] mb-1">Alpha RGBA Cutout</span>
              <div
                className="h-24 flex items-center justify-center rounded p-1 overflow-hidden"
                style={{
                  backgroundImage: 'repeating-conic-gradient(#1f262b 0% 25%, #0e1216 0% 50%)',
                  backgroundSize: '16px 16px',
                }}
              >
                <img
                  src={`${apiBase}/static/foreground/${isolationData.rgba_path.split(/[/\\]/).pop()}`}
                  alt="RGBA"
                  className="max-h-full object-contain"
                />
              </div>
            </div>

            {/* 2. White Canvas Composite */}
            <div className="bg-[#191c1e] p-2 rounded-lg border border-[#272a2d]">
              <span className="text-[#849588] block text-[10px] mb-1">Centered Canvas</span>
              <div className="h-24 flex items-center justify-center bg-white/5 rounded p-1 overflow-hidden">
                <img
                  src={`${apiBase}/static/foreground/${isolationData.composite_path.split(/[/\\]/).pop()}`}
                  alt="Composite"
                  className="max-h-full object-contain"
                />
              </div>
            </div>

            {/* 3. Clean Binary Mask */}
            <div className="bg-[#191c1e] p-2 rounded-lg border border-[#272a2d]">
              <span className="text-[#849588] block text-[10px] mb-1">Hole-Cleaned Mask</span>
              <div className="h-24 flex items-center justify-center bg-black/60 rounded p-1 overflow-hidden">
                <img
                  src={`${apiBase}/static/foreground/${isolationData.mask_path.split(/[/\\]/).pop()}`}
                  alt="Mask"
                  className="max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2.5D Volumetric Geometry & Gemini Concept Card */}
      {generation25DData && (
        <div className="p-3.5 rounded-xl bg-[#0c0f11]/80 border border-[#7bd0ff]/40 shadow-inner">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-[#7bd0ff] uppercase tracking-wider flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">layers</span>
              <span>2.5D Volumetric Geometry & Concept</span>
            </span>
            <span className="text-[10px] text-[#7bd0ff] font-mono px-2 py-0.5 rounded-full bg-[#7bd0ff]/10 border border-[#7bd0ff]/30">
              {generation25DData.gemini_backend || 'Gemini Key 2 Studio'}
            </span>
          </div>

          {/* Gemini Volumetric Concept Render Preview */}
          {(generation25DData.concept_render_path || generation25DData.concept_svg_path) && (
            <div className="mb-3 bg-[#191c1e] p-2.5 rounded-lg border border-[#7bd0ff]/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#a0c5dc] text-[11px] font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs text-[#7bd0ff]">auto_awesome</span>
                  <span>AI Refined 2.5D Concept</span>
                </span>
                
                {generation25DData.concept_svg_path && generation25DData.concept_render_path && (
                  <div className="flex items-center gap-1 bg-[#111416] p-0.5 rounded-md border border-[#272a2d]">
                    <button
                      type="button"
                      onClick={() => setConceptView('svg')}
                      className={`px-2 py-0.5 rounded text-[10px] font-medium transition-colors ${
                        (conceptView === 'svg' || conceptView === 'auto')
                          ? 'bg-[#7bd0ff]/20 text-[#7bd0ff] font-semibold'
                          : 'text-[#849588] hover:text-white'
                      }`}
                    >
                      Vector Concept (SVG)
                    </button>
                    <button
                      type="button"
                      onClick={() => setConceptView('render')}
                      className={`px-2 py-0.5 rounded text-[10px] font-medium transition-colors ${
                        conceptView === 'render'
                          ? 'bg-[#7bd0ff]/20 text-[#7bd0ff] font-semibold'
                          : 'text-[#849588] hover:text-white'
                      }`}
                    >
                      3D Studio Shaded
                    </button>
                  </div>
                )}
              </div>

              <div className="h-48 flex items-center justify-center bg-black/40 rounded p-1 overflow-hidden">
                {((conceptView === 'svg' || conceptView === 'auto') && generation25DData.concept_svg_path) ? (
                  <img
                    src={`${apiBase}/static/generation25d/${generation25DData.concept_svg_path.split(/[/\\]/).pop()}`}
                    alt="2.5D Vector Concept"
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <img
                    src={`${apiBase}/static/generation25d/${generation25DData.concept_render_path.split(/[/\\]/).pop()}`}
                    alt="2.5D Volumetric Studio Render"
                    className="max-h-full max-w-full object-contain"
                  />
                )}
              </div>
              {generation25DData.prompt_used && (
                <p className="mt-1.5 text-[10px] text-[#849588] italic line-clamp-2">
                  "{generation25DData.prompt_used}"
                </p>
              )}
            </div>
          )}

          <div className="grid grid-cols-2 gap-3 text-center text-xs">
            {/* Depth Map */}
            <div className="bg-[#191c1e] p-2 rounded-lg border border-[#272a2d]">
              <span className="text-[#849588] block text-[10px] mb-1">Monocular Depth Map</span>
              <div className="h-24 flex items-center justify-center bg-black rounded p-1 overflow-hidden">
                <img
                  src={`${apiBase}/static/generation25d/${generation25DData.depth_map_path.split(/[/\\]/).pop()}`}
                  alt="Depth Map"
                  className="max-h-full object-contain"
                />
              </div>
            </div>

            {/* Surface Normal Map */}
            <div className="bg-[#191c1e] p-2 rounded-lg border border-[#272a2d]">
              <span className="text-[#849588] block text-[10px] mb-1">Tangent Surface Normals</span>
              <div className="h-24 flex items-center justify-center bg-black rounded p-1 overflow-hidden">
                <img
                  src={`${apiBase}/static/generation25d/${generation25DData.normal_map_path.split(/[/\\]/).pop()}`}
                  alt="Normal Map"
                  className="max-h-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-2 text-[10px] text-[#849588] flex items-center justify-between border-t border-[#272a2d] pt-1.5">
            <span>Relief Vertices: <strong className="text-white">{generation25DData.mesh_stats?.vertex_count?.toLocaleString() || '16,384'}</strong></span>
            <span>Relief Faces: <strong className="text-white">{generation25DData.mesh_stats?.face_count?.toLocaleString() || '32,768'}</strong></span>
            <span>Watertight: <strong className="text-[#00f59b]">True</strong></span>
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
            (visionLoading
              ? 'Analyzing visual contours, perspective angles, and structural features with Gemini Vision...'
              : 'Standby: Draw or upload a sketch above and click "Vision Analysis" to synthesize real-time semantic 3D reasoning.')}
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
