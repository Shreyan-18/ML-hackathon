import React, { useState, useRef } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import VectorStudio from './components/VectorStudio';
import Viewport3D from './components/Viewport3D';
import VisionAnalysisCard from './components/VisionAnalysisCard';
import ShowcaseGallery from './components/ShowcaseGallery';
import BriefingModal from './components/BriefingModal';

const API_BASE = import.meta.env.VITE_API_BASE || '';

export default function App() {
  const [activeNav, setActiveNav] = useState('create');
  const [selectedModel, setSelectedModel] = useState('ZephyrMesh 2.5 Flagship');
  const [searchQuery, setSearchQuery] = useState('');
  const [briefingOpen, setBriefingOpen] = useState(false);

  // Studio & Model States
  const [currentSketchType, setCurrentSketchType] = useState('drone');
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [targetSize, setTargetSize] = useState(320);
  const [debugMode, setDebugMode] = useState(false);

  // Foreground Isolation States (Teammate backend integration)
  const [isolateForeground, setIsolateForeground] = useState(false); // Disabled by default
  const [isolationLoading, setIsolationLoading] = useState(false);
  const [isolationError, setIsolationError] = useState(null);
  const [isolationData, setIsolationData] = useState(null);
  const [isolatedFile, setIsolatedFile] = useState(null);
  const [isolatedPreviewUrl, setIsolatedPreviewUrl] = useState(null);
  const [selectedInput, setSelectedInput] = useState('original'); // 'original', 'isolated', or 'refined'

  // AI Sketch Refinement States (Zephyr 3D Refinement Pipeline)
  const [refineSketch, setRefineSketch] = useState(false); // Optional, disabled by default
  const [refinementLoading, setRefinementLoading] = useState(false);
  const [refinementError, setRefinementError] = useState(null);
  const [refinementData, setRefinementData] = useState(null);
  const [refinedFile, setRefinedFile] = useState(null);
  const [refinedPreviewUrl, setRefinedPreviewUrl] = useState(null);
  const [refinementUserPrompt, setRefinementUserPrompt] = useState('');

  // 2.5D Volumetric Generation States
  const [generation25DData, setGeneration25DData] = useState(null);
  const [generation25DLoading, setGeneration25DLoading] = useState(false);
  const [active3DTab, setActive3DTab] = useState('mesh3d'); // 'mesh3d' or 'relief25d'

  // Async API States
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [error, setError] = useState(null);
  const [successToast, setSuccessToast] = useState(null);

  // Backend Data
  const [preprocessedData, setPreprocessedData] = useState(null);
  const [analysisData, setAnalysisData] = useState(null);
  const [reconstructionData, setReconstructionData] = useState(null);

  const canvasRef = useRef(null);
  const galleryRef = useRef(null);

  // Helper to get file from canvas if none selected
  const getCanvasFile = () => {
    return new Promise((resolve) => {
      const canvas = canvasRef.current;
      if (!canvas) {
        resolve(null);
        return;
      }
      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], `${currentSketchType}_sketch.png`, { type: 'image/png' });
          resolve(file);
        } else {
          resolve(null);
        }
      }, 'image/png');
    });
  };

  // Helper to resolve the active image (refined, isolated, or original)
  const getActiveFile = async () => {
    if (refineSketch && selectedInput === 'refined' && refinedFile) {
      return refinedFile;
    }
    if (isolateForeground && selectedInput === 'isolated' && isolatedFile) {
      return isolatedFile;
    }
    if (selectedFile) {
      return selectedFile;
    }
    return await getCanvasFile();
  };

  // Reset isolation and refinement caches when sketch changes
  const handleResetIsolation = (triggerReisolate = false) => {
    setIsolationData(null);
    setIsolatedFile(null);
    setIsolatedPreviewUrl(null);
    setRefinementData(null);
    setRefinedFile(null);
    setRefinedPreviewUrl(null);
    setSelectedInput('original');
    setIsolationError(null);
    setRefinementError(null);

    if (isolateForeground && triggerReisolate) {
      setTimeout(() => {
        handleIsolateForeground();
      }, 50);
    }
    if (refineSketch && triggerReisolate) {
      setTimeout(() => {
        handleRefineSketch();
      }, 80);
    }
  };

  // AI Sketch Refinement Trigger
  const handleRefineSketch = async (promptOverride = null) => {
    setRefinementError(null);
    setRefinementLoading(true);

    try {
      let fileToUpload = selectedFile;
      if (!fileToUpload) {
        fileToUpload = await getCanvasFile();
      }

      if (!fileToUpload) {
        throw new Error('Please draw or upload a sketch first before refining.');
      }

      const formData = new FormData();
      formData.append('file', fileToUpload);

      const promptParam = promptOverride !== null ? promptOverride : refinementUserPrompt;
      const url = `${API_BASE}/api/refine-sketch?target_size=${targetSize}${
        promptParam ? `&user_prompt=${encodeURIComponent(promptParam)}` : ''
      }&strict_validation=true`;

      const res = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.detail || `Server returned ${res.status}`);
      }

      const data = await res.json();
      setRefinementData(data);

      const effectiveFilename = data.effective_image_path.split(/[/\\]/).pop();
      const effectiveUrl = `${API_BASE}/static/refinement/${effectiveFilename}`;
      setRefinedPreviewUrl(effectiveUrl);

      // Cache effective image blob for downstream pipelines
      try {
        const blobRes = await fetch(effectiveUrl);
        if (blobRes.ok) {
          const blob = await blobRes.blob();
          const file = new File([blob], `refined_${effectiveFilename}`, { type: 'image/png' });
          setRefinedFile(file);
        }
      } catch (cacheErr) {
        console.warn('Could not cache refined blob locally:', cacheErr);
      }

      if (!data.is_fallback) {
        setSelectedInput('refined');
        setSuccessToast(`Sketch refined! Structure validated (Edge IoU: ${(data.validation.edge_overlap_iou * 100).toFixed(0)}%)`);
      } else {
        setSelectedInput('original');
        setSuccessToast(`Refinement rejected by validation; fell back to preprocessed sketch.`);
      }
      setTimeout(() => setSuccessToast(null), 3500);
    } catch (err) {
      console.error(err);
      setRefinementError(err.message || 'Sketch refinement failed.');
    } finally {
      setRefinementLoading(false);
    }
  };

  // Toggle Refinement Switch
  const handleToggleRefinement = (enabled) => {
    setRefineSketch(enabled);
    if (enabled) {
      if (refinementData && !refinementData.is_fallback) {
        setSelectedInput('refined');
      } else {
        handleRefineSketch();
      }
    } else {
      if (selectedInput === 'refined') {
        setSelectedInput(isolateForeground && isolationData ? 'isolated' : 'original');
      }
    }
  };

  // Foreground Isolation Trigger
  const handleIsolateForeground = async (overrideFile = null) => {
    setIsolationError(null);
    setIsolationLoading(true);

    try {
      let fileToUpload = overrideFile || selectedFile;
      if (!fileToUpload) {
        fileToUpload = await getCanvasFile();
      }

      if (!fileToUpload) {
        throw new Error('Please draw or upload a sketch first before isolating foreground.');
      }

      const formData = new FormData();
      formData.append('file', fileToUpload);

      const res = await fetch(
        `${API_BASE}/api/foreground-isolate?target_size=${targetSize}&method=auto`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.detail || `Server returned ${res.status}`);
      }

      const data = await res.json();
      setIsolationData(data);

      const rgbaFilename = data.rgba_path.split(/[/\\]/).pop();
      const compositeFilename = data.composite_path.split(/[/\\]/).pop();
      const rgbaUrl = `${API_BASE}/static/foreground/${rgbaFilename}`;
      const compositeUrl = `${API_BASE}/static/foreground/${compositeFilename}`;

      setIsolatedPreviewUrl(rgbaUrl);

      // Cache isolated composite file for 2.5D and 3D pipelines to avoid duplicate processing
      try {
        const blobRes = await fetch(compositeUrl);
        if (blobRes.ok) {
          const blob = await blobRes.blob();
          const file = new File([blob], `isolated_${compositeFilename}`, { type: 'image/png' });
          setIsolatedFile(file);
        }
      } catch (cacheErr) {
        console.warn('Could not cache isolated blob locally; fallback to original:', cacheErr);
      }

      setSelectedInput('isolated');
      setSuccessToast('Foreground isolated! Alpha transparency preserved.');
      setTimeout(() => setSuccessToast(null), 3000);
    } catch (err) {
      console.error(err);
      setIsolationError(err.message || 'Foreground isolation failed.');
    } finally {
      setIsolationLoading(false);
    }
  };

  // Toggle Isolate Foreground Switch
  const handleToggleIsolateForeground = (enabled) => {
    setIsolateForeground(enabled);
    if (enabled) {
      if (isolationData) {
        setSelectedInput('isolated');
      } else {
        handleIsolateForeground();
      }
    } else {
      setSelectedInput('original');
    }
  };

  // Perform 2.5D Volumetric Generation (Depth Map, Surface Normals, 3D Relief Mesh)
  const handleGenerate25D = async () => {
    setError(null);
    setGeneration25DLoading(true);
    setStatusMessage('Synthesizing 2.5D Depth, Normals & Watertight Relief Mesh...');

    try {
      const fileToUpload = await getActiveFile();
      if (!fileToUpload) {
        throw new Error('Please draw or upload a sketch first.');
      }

      const formData = new FormData();
      formData.append('file', fileToUpload);

      const res = await fetch(
        `${API_BASE}/api/generate-25d?target_size=${targetSize}&export_relief=true&format=obj`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.detail || `Server returned ${res.status}`);
      }

      const data = await res.json();
      setGeneration25DData(data);
      setActive3DTab('relief25d');
      setSuccessToast('2.5D Volumetric Relief Mesh & Surface Normals Synthesized!');
      setTimeout(() => setSuccessToast(null), 3500);
    } catch (err) {
      console.error(err);
      setError(err.message || '2.5D generation failed.');
    } finally {
      setGeneration25DLoading(false);
      setStatusMessage('');
    }
  };

  // Perform Vision Understanding with Llama 3.2 Vision
  const handleAnalyzeVision = async () => {
    setError(null);
    setLoading(true);
    setStatusMessage('Analyzing sketch with Llama 3.2 Vision...');

    try {
      let fileToUpload = selectedFile;
      if (!fileToUpload) {
        fileToUpload = await getCanvasFile();
      }

      if (!fileToUpload) {
        throw new Error('Please draw or upload a sketch first.');
      }

      const formData = new FormData();
      formData.append('file', fileToUpload);

      const res = await fetch(`${API_BASE}/api/analyze-sketch?target_size=${targetSize}`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.detail || `Server returned ${res.status}`);
      }

      const data = await res.json();
      setAnalysisData(data.analysis);
      setPreprocessedData(data.processed_image_path);
      setSuccessToast('Sketch analyzed with Llama 3.2 Vision!');
      setTimeout(() => setSuccessToast(null), 3000);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Vision analysis failed.');
    } finally {
      setLoading(false);
      setStatusMessage('');
    }
  };

  // Perform End-to-End 3D Reconstruction
  const handleGenerate3D = async () => {
    setError(null);
    setLoading(true);
    setStatusMessage('Synthesizing Mesh (SDF & InstantMesh LRM)...');

    try {
      const fileToUpload = await getActiveFile();
      if (!fileToUpload) {
        throw new Error('Please draw or upload a sketch first.');
      }

      const formData = new FormData();
      formData.append('file', fileToUpload);

      const res = await fetch(
        `${API_BASE}/api/reconstruct?target_size=${targetSize}&output_format=obj&debug=${debugMode}`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.detail || `Server returned ${res.status}`);
      }

      const data = await res.json();
      setReconstructionData(data);
      setActive3DTab('mesh3d');
      if (data.analysis) {
        setAnalysisData(data.analysis);
      }
      setPreprocessedData(data.processed_image_path);
      setSuccessToast('3D Asset Reconstructed & Validated Watertight!');
      setTimeout(() => setSuccessToast(null), 3500);
    } catch (err) {
      console.error(err);
      setError(err.message || '3D reconstruction failed.');
    } finally {
      setLoading(false);
      setStatusMessage('');
    }
  };

  // Remix model from showcase
  const handleRemixModel = (card) => {
    setCurrentSketchType(card.type);
    setSuccessToast(`Loaded ${card.title} into Studio Canvas!`);
    setTimeout(() => setSuccessToast(null), 2500);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (navId) => {
    setActiveNav(navId);
    if (navId === 'gallery') {
      galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (navId === 'api-docs') {
      setBriefingOpen(true);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0f11] text-[#e1e2e5] font-sans antialiased relative selection:bg-[#FF7F50]/30 selection:text-white">
      {/* Background ambient light glow */}
      <div className="pointer-events-none fixed top-0 left-64 right-0 h-96 bg-gradient-to-b from-[#00f59b]/8 via-[#FF7F50]/4 to-transparent z-10 blur-3xl" />

      {/* Left Navigation Rail */}
      <Sidebar
        activeNav={activeNav}
        setActiveNav={handleNavClick}
        onUpgradeSparks={() => alert('Sparks Balance: Unlimited for TechZephyr 4.0 Hackathon evaluation!')}
      />

      {/* Top Header */}
      <Header
        onOpenBriefing={() => setBriefingOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
      />

      {/* Main Studio Viewport */}
      <main className="pl-64 pt-24 min-h-screen relative z-20">
        <div className="max-w-[1480px] mx-auto px-6 py-6 flex flex-col gap-8">
          {/* Toast Notification */}
          {successToast && (
            <div className="fixed top-28 right-8 z-50 p-3 px-4 rounded-xl bg-[#00f59b] text-[#003920] font-semibold text-xs shadow-2xl flex items-center gap-2 animate-bounce">
              <span className="material-symbols-outlined text-base">check_circle</span>
              <span>{successToast}</span>
            </div>
          )}

          {/* Error Banner */}
          {error && (
            <div className="p-4 rounded-xl bg-[#93000a]/20 border border-[#ffb4ab]/40 text-[#ffb4ab] text-xs flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base">error</span>
                <span>{error}</span>
              </div>
              <button onClick={() => setError(null)} className="text-white hover:underline">
                Dismiss
              </button>
            </div>
          )}

          {/* Studio Workspace: Drawing & File Input */}
          <VectorStudio
            onGenerate3D={handleGenerate3D}
            onGenerate25D={handleGenerate25D}
            onAnalyzeVision={handleAnalyzeVision}
            loading={loading}
            generation25DLoading={generation25DLoading}
            statusMessage={statusMessage}
            currentSketchType={currentSketchType}
            setCurrentSketchType={setCurrentSketchType}
            targetSize={targetSize}
            setTargetSize={setTargetSize}
            debugMode={debugMode}
            setDebugMode={setDebugMode}
            canvasRef={canvasRef}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            previewUrl={previewUrl}
            setPreviewUrl={setPreviewUrl}
            // Foreground Isolation Props
            isolateForeground={isolateForeground}
            onToggleIsolateForeground={handleToggleIsolateForeground}
            onIsolateForeground={handleIsolateForeground}
            isolationLoading={isolationLoading}
            isolationError={isolationError}
            isolationData={isolationData}
            isolatedPreviewUrl={isolatedPreviewUrl}
            selectedInput={selectedInput}
            onSelectInput={setSelectedInput}
            onResetIsolation={handleResetIsolation}
            // AI Image Refinement Props
            refineSketch={refineSketch}
            onToggleRefinement={handleToggleRefinement}
            onRefineSketch={handleRefineSketch}
            refinementLoading={refinementLoading}
            refinementError={refinementError}
            refinementData={refinementData}
            refinedPreviewUrl={refinedPreviewUrl}
            refinementUserPrompt={refinementUserPrompt}
            setRefinementUserPrompt={setRefinementUserPrompt}
          />

          {/* Dual Panel Grid: 3D Viewport (8 cols) & Llama 3.2 Vision Analysis (4 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Interactive Three.js 3D Viewport (8 cols) */}
            <div className="lg:col-span-8">
              <Viewport3D
                reconstructionData={reconstructionData}
                generation25DData={generation25DData}
                active3DTab={active3DTab}
                setActive3DTab={setActive3DTab}
                sketchType={currentSketchType}
                apiBase={API_BASE}
              />
            </div>

            {/* Right: Llama 3.2 Vision Understanding Analysis (4 cols) */}
            <div className="lg:col-span-4">
              <VisionAnalysisCard
                analysisData={analysisData}
                preprocessedData={preprocessedData}
                previewUrl={previewUrl}
                isolationData={isolationData}
                isolatedPreviewUrl={isolatedPreviewUrl}
                generation25DData={generation25DData}
                refinementData={refinementData}
                refinedPreviewUrl={refinedPreviewUrl}
                apiBase={API_BASE}
              />
            </div>
          </div>

          {/* Community & Template Showcase (Meshy Discovery Section) */}
          <div ref={galleryRef} className="mt-4 pt-6 border-t border-[#272a2d]/60">
            <ShowcaseGallery onRemixModel={handleRemixModel} />
          </div>
        </div>
      </main>

      {/* Briefing / Architecture Modal */}
      <BriefingModal isOpen={briefingOpen} onClose={() => setBriefingOpen(false)} />
    </div>
  );
}
