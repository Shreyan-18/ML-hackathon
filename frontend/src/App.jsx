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

  // Pipeline Data States
  const [preprocessedData, setPreprocessedData] = useState(null);
  const [foregroundData, setForegroundData] = useState(null);
  const [gen25dData, setGen25dData] = useState(null);
  const [analysisData, setAnalysisData] = useState(null);
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
    setForegroundData(null);
    setGen25dData(null);
    setAnalysisData(null);
    setReconstructionData(null);
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
      ctx.moveTo(130, 180); ctx.lineTo(130, 320);
      ctx.moveTo(270, 180); ctx.lineTo(270, 320);
      ctx.moveTo(150, 180); ctx.lineTo(150, 290);
      ctx.moveTo(250, 180); ctx.lineTo(250, 290);
      ctx.stroke();
    } else if (type === 'mug') {
      ctx.beginPath();
      ctx.ellipse(200, 100, 70, 25, 0, 0, Math.PI * 2);
      ctx.moveTo(130, 100); ctx.lineTo(130, 250);
      ctx.moveTo(270, 100); ctx.lineTo(270, 250);
      ctx.ellipse(200, 250, 70, 25, 0, 0, Math.PI);
      ctx.moveTo(270, 130);
      ctx.bezierCurveTo(340, 130, 340, 220, 270, 220);
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

  const getActiveUploadFile = async () => {
    let fileToUpload = selectedFile;
    if (activeTab === 'draw' && (!fileToUpload || !previewUrl)) {
      fileToUpload = await getCanvasFile();
    }
    if (!fileToUpload) {
      throw new Error('Please draw or upload a sketch first.');
    }
    return fileToUpload;
  };

  // 1. Run Complete Pipeline
  const handleFullPipeline = async () => {
    setError(null);
    setLoading(true);
    setStatusMessage('Running Complete Pipeline: Preprocess ➔ Vision ➔ Foreground ➔ 2.5D ➔ 3D Mesh...');

    try {
      const fileToUpload = await getActiveUploadFile();
      const formData = new FormData();
      formData.append('file', fileToUpload);

      const res = await fetch(`${API_BASE}/api/pipeline/full?target_size=${targetSize}&output_format=obj`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.detail || `Server returned ${res.status}`);
      }

      const data = await res.json();
      setPreprocessedData(data.preprocessed_image_path);
      setForegroundData({
        rgba_path: data.foreground_composite_path.replace('_composite.png', '_foreground.png'),
        composite_path: data.foreground_composite_path,
        mask_path: data.mask_path,
        bounding_box: data.details.bounding_box,
      });
      setGen25dData({
        depth_map_path: data.depth_map_path,
        normal_map_path: data.normal_map_path,
        relief_mesh_path: data.relief_mesh_path,
        depth_stats: data.details.depth_stats,
        mesh_stats: data.details.mesh_stats,
      });
      if (data.analysis) {
        setAnalysisData(data.analysis);
      }
      setReconstructionData({
        model_3d_path: data.reconstructed_3d_path,
        format: data.format,
        details: data.details.recon_details,
      });
      setStatusMessage('Full Pipeline Execution Completed Successfully!');
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 2. Perform Foreground Isolation Only
  const handleForegroundIsolate = async () => {
    setError(null);
    setLoading(true);
    setStatusMessage('Isolating sketch foreground & removing background noise...');

    try {
      const fileToUpload = await getActiveUploadFile();
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
      setStatusMessage('Foreground isolation complete!');
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 3. Perform 2.5D Volumetric Generation Only
  const handleGenerate25D = async () => {
    setError(null);
    setLoading(true);
    setStatusMessage('Estimating 2.5D Depth, Normal map, and 3D relief mesh...');

    try {
      const fileToUpload = await getActiveUploadFile();
      const formData = new FormData();
      formData.append('file', fileToUpload);

      const res = await fetch(`${API_BASE}/api/generate-25d?target_size=${targetSize}&export_relief=true&format=obj`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.detail || `Server returned ${res.status}`);
      }

      const data = await res.json();
      setGen25dData(data);
      setStatusMessage('2.5D Volumetric Generation complete!');
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 4. Perform Vision Understanding
  const handleAnalyzeSketch = async () => {
    setError(null);
    setLoading(true);
    setStatusMessage('Analyzing sketch with Llama 3.2 Vision...');

    try {
      const fileToUpload = await getActiveUploadFile();
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

  // 5. Perform Full 3D Reconstruction
  const handleReconstruct = async () => {
    setError(null);
    setLoading(true);
    setStatusMessage('Executing 3D reconstruction pipeline...');

    try {
      const fileToUpload = await getActiveUploadFile();
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
      setStatusMessage('3D Reconstruction completed successfully!');
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
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
              TechZephyr 4.0 • Vision Understanding, 2.5D Volumetric & InstantMesh 3D
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-xs">
          <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full font-medium">
            FastAPI 1.2.0
          </span>
          <span className="px-2.5 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full font-medium">
            rembg Isolation
          </span>
          <span className="px-2.5 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full font-medium">
            2.5D Depth & Normals
          </span>
          <span className="px-2.5 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full font-medium">
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

            {/* Resolution Options */}
            <div className="mt-5 pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-2">
              <div className="flex justify-between items-center">
                <span>Target Resolution:</span>
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

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col space-y-2.5">
              {/* PRIMARY ONE-CLICK FULL PIPELINE BUTTON */}
              <button
                onClick={handleFullPipeline}
                disabled={loading}
                className="w-full py-3.5 bg-gradient-to-r from-emerald-500 via-indigo-600 to-purple-600 hover:from-emerald-400 hover:via-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/30 transition disabled:opacity-50 flex items-center justify-center space-x-2 text-sm"
              >
                <span>⚡</span>
                <span>Run Complete Pipeline (End-to-End)</span>
              </button>

              {/* MODULAR STEP BUTTONS */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleForegroundIsolate}
                  disabled={loading}
                  className="py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-xl border border-slate-700 text-xs transition disabled:opacity-50 flex items-center justify-center space-x-1.5"
                >
                  <span>✂️</span>
                  <span>Isolate Foreground</span>
                </button>
                <button
                  onClick={handleGenerate25D}
                  disabled={loading}
                  className="py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-xl border border-slate-700 text-xs transition disabled:opacity-50 flex items-center justify-center space-x-1.5"
                >
                  <span>⛰️</span>
                  <span>Generate 2.5D</span>
                </button>
                <button
                  onClick={handleAnalyzeSketch}
                  disabled={loading}
                  className="py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-xl border border-slate-700 text-xs transition disabled:opacity-50 flex items-center justify-center space-x-1.5"
                >
                  <span>🔍</span>
                  <span>Vision Analysis</span>
                </button>
                <button
                  onClick={handleReconstruct}
                  disabled={loading}
                  className="py-2.5 bg-purple-600/30 hover:bg-purple-600/40 text-purple-200 font-medium rounded-xl border border-purple-500/40 text-xs transition disabled:opacity-50 flex items-center justify-center space-x-1.5"
                >
                  <span>🧊</span>
                  <span>3D Reconstruct</span>
                </button>
              </div>
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

        {/* Right Column: Cards (7 cols) */}
        <section className="lg:col-span-7 flex flex-col space-y-6">

          {/* 1. Foreground Isolation & Data Cleaning Card */}
          {foregroundData && (
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-3">
              <h3 className="text-sm font-bold text-slate-200 flex items-center space-x-2">
                <span>✂️</span>
                <span>Foreground Isolation & Background Removal (rembg / OpenCV)</span>
              </h3>
              <div className="grid grid-cols-3 gap-3 text-xs text-center">
                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block mb-1 text-[11px] font-medium">Transparent Cutout</span>
                  <div className="h-28 flex items-center justify-center bg-slate-900 rounded-lg p-1.5 overflow-hidden">
                    <img
                      src={`${API_BASE}/static/foreground/${foregroundData.rgba_path.split(/[/\\]/).pop()}`}
                      alt="Foreground RGBA"
                      className="max-h-full object-contain"
                    />
                  </div>
                </div>
                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block mb-1 text-[11px] font-medium">Centered Canvas</span>
                  <div className="h-28 flex items-center justify-center bg-white rounded-lg p-1.5 overflow-hidden">
                    <img
                      src={`${API_BASE}/static/foreground/${foregroundData.composite_path.split(/[/\\]/).pop()}`}
                      alt="Centered Composite"
                      className="max-h-full object-contain"
                    />
                  </div>
                </div>
                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block mb-1 text-[11px] font-medium">Clean Alpha Mask</span>
                  <div className="h-28 flex items-center justify-center bg-black rounded-lg p-1.5 overflow-hidden">
                    <img
                      src={`${API_BASE}/static/foreground/${foregroundData.mask_path.split(/[/\\]/).pop()}`}
                      alt="Mask"
                      className="max-h-full object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="text-[11px] text-slate-400 flex justify-between px-1">
                <span>Bounding Box: [{foregroundData.bounding_box?.join(', ')}]</span>
                <span>Method: {foregroundData.method_used || 'auto'}</span>
              </div>
            </div>
          )}

          {/* 2. 2.5D Volumetric Generation Card */}
          {gen25dData && (
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-200 flex items-center space-x-2">
                  <span>⛰️</span>
                  <span>2.5D Volumetric Maps & Watertight Relief Mesh</span>
                </h3>
                {gen25dData.relief_mesh_path && (
                  <a
                    href={`${API_BASE}/static/generation25d/${gen25dData.relief_mesh_path.split(/[/\\]/).pop()}`}
                    download
                    className="px-3 py-1 bg-cyan-600/30 hover:bg-cyan-600/40 text-cyan-300 border border-cyan-500/40 rounded-lg text-xs font-medium transition flex items-center space-x-1"
                  >
                    <span>💾</span>
                    <span>Download Relief (.OBJ)</span>
                  </a>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs text-center">
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block mb-2 font-medium">
                    Relative Depth Map (Distance Field Z)
                  </span>
                  <div className="h-36 flex items-center justify-center bg-black rounded-lg p-2 overflow-hidden">
                    <img
                      src={`${API_BASE}/static/generation25d/${gen25dData.depth_map_path.split(/[/\\]/).pop()}`}
                      alt="Depth Map"
                      className="max-h-full object-contain"
                    />
                  </div>
                </div>
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block mb-2 font-medium">
                    Surface Normal Map (Nx, Ny, Nz RGB)
                  </span>
                  <div className="h-36 flex items-center justify-center bg-[#8080FF] rounded-lg p-2 overflow-hidden">
                    <img
                      src={`${API_BASE}/static/generation25d/${gen25dData.normal_map_path.split(/[/\\]/).pop()}`}
                      alt="Normal Map"
                      className="max-h-full object-contain"
                    />
                  </div>
                </div>
              </div>
              {gen25dData.mesh_stats?.vertex_count && (
                <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80 text-[11px] text-slate-400 flex justify-between px-3">
                  <span>Mesh Vertices: {gen25dData.mesh_stats.vertex_count.toLocaleString()}</span>
                  <span>Faces: {gen25dData.mesh_stats.face_count.toLocaleString()}</span>
                  <span>Max Elevation: {gen25dData.mesh_stats.max_elevation}</span>
                </div>
              )}
            </div>
          )}

          {/* 3. Llama 3.2 Vision Structured Analysis Card */}
          {analysisData && (
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
                <div className="flex items-center space-x-2">
                  <h2 className="text-xl font-bold text-white capitalize">
                    {analysisData.object_type}
                  </h2>
                  <span className="px-2.5 py-0.5 text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full">
                    {analysisData.category}
                  </span>
                </div>
                <span className="text-xs text-slate-400">
                  View: <strong className="text-slate-200 capitalize">{analysisData.view_type}</strong> • Confidence: {(analysisData.confidence_score * 100).toFixed(0)}%
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                {analysisData.description}
              </p>

              {analysisData.visible_parts && analysisData.visible_parts.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  {analysisData.visible_parts.map((part, idx) => (
                    <div key={idx} className="bg-slate-950/70 border border-slate-800 p-2.5 rounded-lg space-y-1">
                      <div className="font-bold text-indigo-400 capitalize">🔹 {part.name}</div>
                      <div className="text-slate-400">Observed: <span className="text-slate-300">{part.observed}</span></div>
                      <div className="text-slate-400">Inferred: <span className="text-slate-300">{part.inferred}</span></div>
                    </div>
                  ))}
                </div>
              )}

              {analysisData.reconstruction_prompt && (
                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 font-mono text-xs text-indigo-300 select-all">
                  "{analysisData.reconstruction_prompt}"
                </div>
              )}
            </div>
          )}

          {/* 4. InstantMesh 3D Asset Card */}
          {reconstructionData && (
            <div className="bg-gradient-to-br from-purple-900/30 via-slate-900/80 to-slate-900/80 border border-purple-500/30 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-xl">🧊</span>
                  <h3 className="font-bold text-white text-base">3D Asset Generated (InstantMesh)</h3>
                </div>
                <span className="px-2.5 py-1 text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full font-mono uppercase">
                  Format: {reconstructionData.format}
                </span>
              </div>

              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Asset File:</span>
                  <span className="font-mono text-slate-200">{reconstructionData.model_3d_path.split(/[/\\]/).pop()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Camera Views Synthesized:</span>
                  <span className="font-mono text-slate-200">
                    {reconstructionData.details.camera_views_synthesized} sparse camera views
                  </span>
                </div>
              </div>

              <a
                href={`${API_BASE}/static/outputs/reconstructions/${reconstructionData.model_3d_path.split(/[/\\]/).pop()}`}
                download
                className="w-full py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs rounded-xl text-center shadow-lg shadow-purple-600/20 transition flex items-center justify-center space-x-2"
              >
                <span>💾</span>
                <span>Download InstantMesh 3D Asset (.OBJ)</span>
              </a>
            </div>
          )}

          {/* Empty State Helper */}
          {!foregroundData && !gen25dData && !analysisData && !reconstructionData && (
            <div className="bg-slate-900/40 border border-dashed border-slate-800 rounded-2xl p-12 text-center text-slate-500 flex flex-col items-center justify-center space-y-3">
              <div className="text-4xl">✨</div>
              <p className="text-sm font-medium">
                Draw or select a sketch on the left, then click "Run Complete Pipeline".
              </p>
              <p className="text-xs text-slate-600 max-w-md">
                The pipeline will automatically isolate the foreground, generate 2.5D depth/normal maps,
                run Llama 3.2 Vision understanding, and export valid 3D assets.
              </p>
            </div>
          )}

        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-4 px-6 text-center text-xs text-slate-500">
        Sketch2Shape AI • Bankai Senbonzakura Kageyoshi • IIT Bhubaneswar
      </footer>
    </div>
  );
}
