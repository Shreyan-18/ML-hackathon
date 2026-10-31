import React, { useState, useRef } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import VectorStudio from './components/VectorStudio';
import Viewport3D from './components/Viewport3D';
import VisionAnalysisCard from './components/VisionAnalysisCard';
import ShowcaseGallery from './components/ShowcaseGallery';
import BriefingModal from './components/BriefingModal';

const API_BASE = window.location.origin.includes('5173') ? 'http://localhost:8000' : '';

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
      let fileToUpload = selectedFile;
      if (!fileToUpload) {
        fileToUpload = await getCanvasFile();
      }

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
            onAnalyzeVision={handleAnalyzeVision}
            loading={loading}
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
          />

          {/* Dual Panel Grid: 3D Viewport (8 cols) & Llama 3.2 Vision Analysis (4 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Interactive Three.js 3D Viewport (8 cols) */}
            <div className="lg:col-span-8">
              <Viewport3D
                reconstructionData={reconstructionData}
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
