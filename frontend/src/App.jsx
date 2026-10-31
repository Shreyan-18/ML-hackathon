import React, { useState, useRef, useEffect } from 'react';

const API_BASE = window.location.origin.includes('5173') ? 'http://localhost:8000' : '';

export default function App() {
  const [activeTab, setActiveTab] = useState('draw'); // 'draw' or 'upload'
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [targetSize, setTargetSize] = useState(320);
  const [debugMode, setDebugMode] = useState(false);

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [error, setError] = useState(null);

  // Pipeline stage data
  const [preprocessedData, setPreprocessedData] = useState(null);
  const [analysisData, setAnalysisData] = useState(null);
  const [foregroundData, setForegroundData] = useState(null);
  const [generation25dData, setGeneration25dData] = useState(null);
  const [reconstructionData, setReconstructionData] = useState(null);

  // Canvas drawing state
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushSize, setBrushSize] = useState(3);
  const [brushColor, setBrushColor] = useState('#000000');

  useEffect(() => {
    if (activeTab === 'draw') {
      initCanvas();
    }
  }, [activeTab]);

  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  };

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineWidth = brushSize;
    ctx.strokeStyle = brushColor;
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    initCanvas();
    setPreviewUrl(null);
    setSelectedFile(null);
    setPreprocessedData(null);
    setAnalysisData(null);
    setForegroundData(null);
    setGeneration25dData(null);
    setReconstructionData(null);
    setError(null);
  };

  // Convert canvas to file
  const getCanvasFile = () => {
    return new Promise((resolve) => {
      const canvas = canvasRef.current;
      canvas.toBlob((blob) => {
        const file = new File([blob], 'drawn_sketch.png', { type: 'image/png' });
        resolve(file);
      }, 'image/png');
    });
  };

  // Handle uploaded file
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setError(null);
    }
  };

  // Preset sample sketches for instant testing
  const loadSampleSketch = (type) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 3;

    if (type === 'chair') {
      ctx.strokeRect(120, 160, 160, 20); // seat
      ctx.strokeRect(120, 60, 160, 100); // backrest
      ctx.beginPath();
      ctx.moveTo(130, 180); ctx.lineTo(130, 320); // leg 1
      ctx.moveTo(270, 180); ctx.lineTo(270, 320); // leg 2
      ctx.moveTo(150, 180); ctx.lineTo(150, 290); // leg 3
      ctx.moveTo(250, 180); ctx.lineTo(250, 290); // leg 4
      ctx.stroke();
    } else if (type === 'mug') {
      ctx.beginPath();
      ctx.ellipse(200, 100, 70, 25, 0, 0, Math.PI * 2); // rim
      ctx.moveTo(130, 100); ctx.lineTo(130, 250); // left body
      ctx.moveTo(270, 100); ctx.lineTo(270, 250); // right body
      ctx.ellipse(200, 250, 70, 25, 0, 0, Math.PI); // bottom
      ctx.moveTo(270, 130);
      ctx.bezierCurveTo(340, 130, 340, 220, 270, 220); // handle
      ctx.stroke();
    } else if (type === 'car') {
      ctx.beginPath();
      ctx.moveTo(60, 220);
      ctx.lineTo(110, 220);
      ctx.lineTo(150, 140);
      ctx.lineTo(270, 140);
      ctx.lineTo(310, 220);
      ctx.lineTo(360, 220);
      ctx.lineTo(360, 250);
      ctx.lineTo(60, 250);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(130, 250, 25, 0, Math.PI * 2);
      ctx.arc(290, 250, 25, 0, Math.PI * 2);
      ctx.stroke();
    } else if (type === 'ambiguous') {
      ctx.beginPath();
      ctx.moveTo(120, 100);
      ctx.lineTo(260, 110);
      ctx.lineTo(240, 230);
      ctx.lineTo(140, 220);
      ctx.closePath();
      ctx.moveTo(140, 220); ctx.lineTo(100, 290);
      ctx.moveTo(240, 230); ctx.lineTo(270, 300);
      ctx.moveTo(190, 110); ctx.lineTo(180, 50);
      ctx.stroke();
    }

    canvas.toBlob((blob) => {
      const file = new File([blob], `sample_${type}.png`, { type: 'image/png' });
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(blob));
    });
  };

  const getUploadFile = async () => {
    let fileToUpload = selectedFile;
    if (activeTab === 'draw' && (!fileToUpload || !previewUrl)) {
      fileToUpload = await getCanvasFile();
    }
    if (!fileToUpload) {
      throw new Error('Please draw or upload a sketch first.');
    }
    return fileToUpload;
  };

  // Action 1: Preprocessing & Vision Understanding
  const handleAnalyzeSketch = async () => {
    setError(null);
    setLoading(true);
    setStatusMessage('Analyzing sketch with Llama 3.2 Vision...');

    try {
      const fileToUpload = await getUploadFile();
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
      setStatusMessage('Analysis complete!');
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Action 2: Foreground Isolation
  const handleIsolateForeground = async () => {
    setError(null);
    setLoading(true);
    setStatusMessage('Extracting foreground & cleaning background...');

    try {
      const fileToUpload = await getUploadFile();
      const formData = new FormData();
      formData.append('file', fileToUpload);

      const res = await fetch(`${API_BASE}/api/foreground-isolate?target_size=${targetSize}`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.detail || `Server returned ${res.status}`);
      }

      const data = await res.json();
      setForegroundData(data);
      setPreprocessedData(data.composite_path);
      setStatusMessage('Foreground isolation complete!');
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Action 3: 2.5D Volumetric Generation (Depth & Normal Maps, 3D Relief)
  const handleGenerate25D = async () => {
    setError(null);
    setLoading(true);
    setStatusMessage('Generating 2.5D Depth, Normal map, and 3D Relief mesh...');

    try {
      const fileToUpload = await getUploadFile();
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
      setGeneration25dData(data);
      setStatusMessage('2.5D Volumetric generation complete!');
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Action 4: Run Full Chained Pipeline
  const handleFullPipeline = async () => {
    setError(null);
    setLoading(true);
    setStatusMessage('Executing end-to-end pipeline: Preprocess ➔ Vision ➔ Foreground ➔ 2.5D ➔ 3D...');

    try {
      const fileToUpload = await getUploadFile();
      const formData = new FormData();
      formData.append('file', fileToUpload);

      const res = await fetch(
        `${API_BASE}/api/pipeline/full?target_size=${targetSize}&output_format=obj`,
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
      setPreprocessedData(data.preprocessed_image_path);
      if (data.analysis) setAnalysisData(data.analysis);
      setForegroundData({
        rgba_path: data.foreground_composite_path,
        composite_path: data.foreground_composite_path,
        mask_path: data.mask_path,
        bounding_box: data.details.bounding_box,
        method_used: 'rembg/opencv',
      });
      setGeneration25dData({
        depth_map_path: data.depth_map_path,
        normal_map_path: data.normal_map_path,
        relief_mesh_path: data.relief_mesh_path,
        depth_stats: data.details.depth_stats,
        mesh_stats: data.details.mesh_stats,
      });
      setReconstructionData({
        model_3d_path: data.reconstructed_3d_path,
        format: data.format,
        details: data.details.recon_details,
      });
      setStatusMessage('Full pipeline executed successfully!');
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Helper for asset URLs
  const getAssetUrl = (filePath, subfolder = '') => {
    if (!filePath) return '';
    const filename = filePath.split(/[/\\]/).pop();
    return `${API_BASE}/static/${subfolder}/${filename}`;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Navigation */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur-md sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 font-black text-xl">
            S
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Sketch2Shape AI
            </h1>
            <p className="text-xs text-slate-400">
              2.5D Volumetric Generation & 3D Reconstruction Pipeline
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-xs">
          <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full font-medium">
            OpenCV Ready
          </span>
          <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full font-medium">
            2.5D Depth & Normal
          </span>
          <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full font-medium">
            Llama 3.2 Vision
          </span>
          <span className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full font-medium">
            InstantMesh 3D
          </span>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Sketch Input (5 cols) */}
        <section className="lg:col-span-5 flex flex-col space-y-6">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl">
            {/* Input Mode Toggle */}
            <div className="flex bg-slate-950 p-1 rounded-xl mb-4 border border-slate-800">
              <button
                onClick={() => setActiveTab('draw')}
                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeTab === 'draw'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ✏️ Draw Sketch
              </button>
              <button
                onClick={() => setActiveTab('upload')}
                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeTab === 'upload'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                📁 Upload File
              </button>
            </div>

            {/* Quick Sample Sketch Chips */}
            <div className="mb-4">
              <span className="text-xs text-slate-400 font-medium mr-2">Try Sample:</span>
              <div className="flex flex-wrap gap-2 mt-2">
                <button
                  onClick={() => { setActiveTab('draw'); loadSampleSketch('chair'); }}
                  className="px-2.5 py-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 transition"
                >
                  Chair
                </button>
                <button
                  onClick={() => { setActiveTab('draw'); loadSampleSketch('mug'); }}
                  className="px-2.5 py-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 transition"
                >
                  Coffee Mug
                </button>
                <button
                  onClick={() => { setActiveTab('draw'); loadSampleSketch('car'); }}
                  className="px-2.5 py-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 transition"
                >
                  Vehicle
                </button>
                <button
                  onClick={() => { setActiveTab('draw'); loadSampleSketch('ambiguous'); }}
                  className="px-2.5 py-1 text-xs bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 rounded-lg border border-amber-500/30 transition"
                >
                  Rough Ambiguous
                </button>
              </div>
            </div>

            {/* Draw Tab */}
            {activeTab === 'draw' && (
              <div className="flex flex-col items-center">
                <div className="relative border-2 border-dashed border-slate-700 rounded-xl overflow-hidden bg-white shadow-inner">
                  <canvas
                    ref={canvasRef}
                    width={400}
                    height={400}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    className="cursor-crosshair touch-none"
                  />
                </div>

                <div className="flex items-center justify-between w-full mt-3 px-1 text-xs text-slate-400">
                  <div className="flex items-center space-x-2">
                    <span>Brush:</span>
                    <input
                      type="range"
                      min="1"
                      max="12"
                      value={brushSize}
                      onChange={(e) => setBrushSize(Number(e.target.value))}
                      className="w-20 accent-indigo-500"
                    />
                    <span>{brushSize}px</span>
                  </div>
                  <button
                    onClick={clearCanvas}
                    className="px-3 py-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-lg border border-rose-500/30 transition"
                  >
                    Clear Canvas
                  </button>
                </div>
              </div>
            )}

            {/* Upload Tab */}
            {activeTab === 'upload' && (
              <div className="flex flex-col items-center justify-center border-2 border-dashed border-slate-700 rounded-xl p-8 bg-slate-950/50 hover:bg-slate-950 transition text-center">
                <input
                  type="file"
                  id="sketch-upload"
                  accept="image/png, image/jpeg, image/webp"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="sketch-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <div className="w-14 h-14 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-2xl mb-3">
                    📤
                  </div>
                  <span className="text-sm font-semibold text-slate-200">
                    Click to select sketch image
                  </span>
                  <span className="text-xs text-slate-500 mt-1">
                    Supports PNG, JPEG, WebP, RGBA transparency
                  </span>
                </label>

                {previewUrl && (
                  <div className="mt-4 border border-slate-700 rounded-lg overflow-hidden max-h-48">
                    <img src={previewUrl} alt="Preview" className="max-h-48 object-contain" />
                  </div>
                )}
              </div>
            )}

            {/* Preprocessing Options */}
            <div className="mt-5 pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-2">
              <div className="flex justify-between items-center">
                <span>Model Target Resolution:</span>
                <select
                  value={targetSize}
                  onChange={(e) => setTargetSize(Number(e.target.value))}
                  className="bg-slate-800 border border-slate-700 text-slate-200 rounded px-2 py-1"
                >
                  <option value={320}>320 x 320 (InstantMesh Native)</option>
                  <option value={512}>512 x 512 (High Resolution)</option>
                </select>
              </div>
            </div>

            {/* Pipeline Action Buttons */}
            <div className="mt-6 flex flex-col space-y-2.5">
              <button
                onClick={handleFullPipeline}
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/30 transition disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                <span>🚀</span>
                <span>Run Full Chained Pipeline</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleIsolateForeground}
                  disabled={loading}
                  className="py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs rounded-xl border border-slate-700 transition disabled:opacity-50 flex items-center justify-center space-x-1.5"
                >
                  <span>✂️</span>
                  <span>Isolate Foreground</span>
                </button>

                <button
                  onClick={handleGenerate25D}
                  disabled={loading}
                  className="py-2.5 bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 font-medium text-xs rounded-xl border border-cyan-500/30 transition disabled:opacity-50 flex items-center justify-center space-x-1.5"
                >
                  <span>⛰️</span>
                  <span>2.5D Volumetric</span>
                </button>
              </div>

              <button
                onClick={handleAnalyzeSketch}
                disabled={loading}
                className="w-full py-2.5 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 font-medium text-xs rounded-xl border border-indigo-500/30 transition disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                <span>🔍</span>
                <span>Analyze with Llama 3.2 Vision</span>
              </button>
            </div>

            {/* Status / Error Toast */}
            {loading && (
              <div className="mt-4 p-3 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 rounded-xl text-xs flex items-center space-x-2 animate-pulse">
                <span className="animate-spin">⏳</span>
                <span>{statusMessage}</span>
              </div>
            )}

            {error && (
              <div className="mt-4 p-3 bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl text-xs">
                ⚠️ {error}
              </div>
            )}
          </div>
        </section>

        {/* Right Column: Visual Showcase & Results (7 cols) */}
        <section className="lg:col-span-7 flex flex-col space-y-6">
          {/* 1. Preprocessed & Foreground Isolation Card */}
          {(preprocessedData || foregroundData) && (
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl">
              <h3 className="text-sm font-bold text-slate-300 mb-3 flex items-center space-x-2">
                <span>🎨</span>
                <span>Stage 1: Preprocessing & Foreground Cleaning</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs text-center">
                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block mb-1.5 font-medium">Original</span>
                  <div className="h-32 flex items-center justify-center bg-white rounded-lg p-2 overflow-hidden">
                    {previewUrl ? (
                      <img src={previewUrl} alt="Original" className="max-h-full object-contain" />
                    ) : (
                      <span className="text-slate-400">User Canvas</span>
                    )}
                  </div>
                </div>

                {preprocessedData && (
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block mb-1.5 font-medium">Model-Ready (320x320)</span>
                    <div className="h-32 flex items-center justify-center bg-white rounded-lg p-2 overflow-hidden">
                      <img
                        src={getAssetUrl(preprocessedData, 'outputs/preprocessing')}
                        alt="Preprocessed"
                        className="max-h-full object-contain"
                      />
                    </div>
                  </div>
                )}

                {foregroundData && (
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block mb-1.5 font-medium">Binary Alpha Mask</span>
                    <div className="h-32 flex items-center justify-center bg-black rounded-lg p-2 overflow-hidden">
                      <img
                        src={getAssetUrl(foregroundData.mask_path, 'foreground')}
                        alt="Mask"
                        className="max-h-full object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 2. 2.5D Volumetric Generation Card */}
          {generation25dData && (
            <div className="bg-gradient-to-br from-cyan-950/40 via-slate-900/90 to-slate-900/90 border border-cyan-500/30 rounded-2xl p-5 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-xl">⛰️</span>
                  <h3 className="font-bold text-white text-base">Stage 2: 2.5D Volumetric Representation</h3>
                </div>
                <span className="px-2.5 py-0.5 text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-full font-mono">
                  Depth & Normal Map
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs text-center">
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block mb-2 font-medium">Monocular Depth Map (Z-Elevation)</span>
                  <div className="h-40 flex items-center justify-center bg-black rounded-lg p-2 overflow-hidden">
                    <img
                      src={getAssetUrl(generation25dData.depth_map_path, 'generation25d')}
                      alt="Depth Map"
                      className="max-h-full object-contain"
                    />
                  </div>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block mb-2 font-medium">Tangent Surface Normal Map (Nx, Ny, Nz)</span>
                  <div className="h-40 flex items-center justify-center bg-slate-900 rounded-lg p-2 overflow-hidden">
                    <img
                      src={getAssetUrl(generation25dData.normal_map_path, 'generation25d')}
                      alt="Normal Map"
                      className="max-h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* 3D Relief Mesh Download */}
              {generation25dData.relief_mesh_path && (
                <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-slate-200 block">Watertight 2.5D Relief Mesh</span>
                    <span className="text-slate-500">
                      Vertices: {generation25dData.mesh_stats?.vertex_count || 'N/A'} • Faces: {generation25dData.mesh_stats?.face_count || 'N/A'}
                    </span>
                  </div>
                  <a
                    href={getAssetUrl(generation25dData.relief_mesh_path, 'generation25d')}
                    download
                    className="px-3.5 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg shadow-md transition flex items-center space-x-1.5"
                  >
                    <span>💾</span>
                    <span>Download Relief (.OBJ)</span>
                  </a>
                </div>
              )}
            </div>
          )}

          {/* 3. Llama 3.2 Vision Structured Analysis Card */}
          {analysisData && (
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
                <div className="flex items-center space-x-2">
                  <h2 className="text-xl font-black text-white capitalize">
                    {analysisData.object_type}
                  </h2>
                  <span className="px-2 py-0.5 text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full">
                    {analysisData.category}
                  </span>
                </div>
                <span className="text-xs text-slate-400">
                  Confidence: {(analysisData.confidence_score * 100).toFixed(0)}%
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                {analysisData.description}
              </p>

              {analysisData.reconstruction_prompt && (
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Reconstruction Prompt:
                  </h4>
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 font-mono text-xs text-indigo-300 select-all">
                    "{analysisData.reconstruction_prompt}"
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 4. Full 3D Model Output Card */}
          {reconstructionData && (
            <div className="bg-gradient-to-br from-purple-900/30 via-slate-900/80 to-slate-900/80 border border-purple-500/30 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-xl">🧊</span>
                  <h3 className="font-bold text-white text-base">Stage 3: Full 3D Reconstructed Asset</h3>
                </div>
                <span className="px-2.5 py-1 text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full font-mono uppercase">
                  Format: {reconstructionData.format}
                </span>
              </div>

              <a
                href={getAssetUrl(reconstructionData.model_3d_path, 'outputs/reconstructions')}
                download
                className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs rounded-xl text-center shadow-lg shadow-purple-600/20 transition flex items-center justify-center space-x-2"
              >
                <span>💾</span>
                <span>Download Full 3D Model (.OBJ)</span>
              </a>
            </div>
          )}

          {/* Empty State Banner */}
          {!preprocessedData && !analysisData && !generation25dData && !reconstructionData && (
            <div className="bg-slate-900/40 border border-dashed border-slate-800 rounded-2xl p-12 text-center text-slate-500 flex flex-col items-center justify-center space-y-3">
              <div className="text-4xl">✨</div>
              <p className="text-sm font-medium">
                Draw or select a sketch and click "Run Full Chained Pipeline".
              </p>
              <p className="text-xs text-slate-600 max-w-md">
                The pipeline will preprocess the sketch, extract foreground, estimate 2.5D Depth & Normal maps, and generate exportable 3D meshes.
              </p>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-4 px-6 text-center text-xs text-slate-500">
        Sketch2Shape AI • Bankai Senbonzakura Kageyoshi • IIT Bhubaneswar TechZephyr
      </footer>
    </div>
  );
}
