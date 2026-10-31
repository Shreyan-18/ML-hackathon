import React, { useState, useRef, useEffect } from 'react';

const API_BASE = window.location.origin.includes('5173') ? 'http://localhost:8000' : '';

export default function App() {
  const [activeTab, setActiveTab] = useState('draw'); // 'draw' or 'upload'
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [targetSize, setTargetSize] = useState(320);
  const [debugMode, setDebugMode] = useState(false);
  const [autoInvert, setAutoInvert] = useState(true);

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [error, setError] = useState(null);

  const [preprocessedData, setPreprocessedData] = useState(null);
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
      // Draw chair
      ctx.strokeRect(120, 160, 160, 20); // seat
      ctx.strokeRect(120, 60, 160, 100); // backrest
      ctx.beginPath();
      ctx.moveTo(130, 180); ctx.lineTo(130, 320); // leg 1
      ctx.moveTo(270, 180); ctx.lineTo(270, 320); // leg 2
      ctx.moveTo(150, 180); ctx.lineTo(150, 290); // leg 3 (perspective)
      ctx.moveTo(250, 180); ctx.lineTo(250, 290); // leg 4 (perspective)
      ctx.stroke();
    } else if (type === 'mug') {
      // Draw coffee mug
      ctx.beginPath();
      ctx.ellipse(200, 100, 70, 25, 0, 0, Math.PI * 2); // rim
      ctx.moveTo(130, 100); ctx.lineTo(130, 250); // left body
      ctx.moveTo(270, 100); ctx.lineTo(270, 250); // right body
      ctx.ellipse(200, 250, 70, 25, 0, 0, Math.PI); // bottom
      // handle
      ctx.moveTo(270, 130);
      ctx.bezierCurveTo(340, 130, 340, 220, 270, 220);
      ctx.stroke();
    } else if (type === 'car') {
      // Draw car silhouette
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
      // wheels
      ctx.beginPath();
      ctx.arc(130, 250, 25, 0, Math.PI * 2);
      ctx.arc(290, 250, 25, 0, Math.PI * 2);
      ctx.stroke();
    } else if (type === 'ambiguous') {
      // Rough sketchy ambiguous drawing
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

  // Perform Vision Understanding
  const handleAnalyzeSketch = async () => {
    setError(null);
    setLoading(true);
    setStatusMessage('Analyzing sketch with Llama 3.2 Vision...');

    try {
      let fileToUpload = selectedFile;
      if (activeTab === 'draw' && (!fileToUpload || !previewUrl)) {
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
      setStatusMessage('Analysis complete!');
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Perform Full 3D Reconstruction
  const handleReconstruct = async () => {
    setError(null);
    setLoading(true);
    setStatusMessage('Executing end-to-end 3D reconstruction pipeline...');

    try {
      let fileToUpload = selectedFile;
      if (activeTab === 'draw' && (!fileToUpload || !previewUrl)) {
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
              Llama 3.2 Vision Understanding & InstantMesh 3D Pipeline
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3 text-xs">
          <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full font-medium">
            FastAPI 1.1.0 Ready
          </span>
          <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full font-medium">
            Llama 3.2 Vision
          </span>
          <span className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full font-medium">
            InstantMesh LRM
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

              <div className="flex justify-between items-center">
                <span>Save Intermediate Debug Images:</span>
                <input
                  type="checkbox"
                  checked={debugMode}
                  onChange={(e) => setDebugMode(e.target.checked)}
                  className="accent-indigo-500"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col space-y-3">
              <button
                onClick={handleAnalyzeSketch}
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/30 transition disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                <span>🔍</span>
                <span>Analyze with Llama 3.2 Vision</span>
              </button>

              <button
                onClick={handleReconstruct}
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-600/30 transition disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                <span>🧊</span>
                <span>Reconstruct 3D Model (InstantMesh)</span>
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

        {/* Right Column: Llama 3.2 Vision Analysis & 3D Model (7 cols) */}
        <section className="lg:col-span-7 flex flex-col space-y-6">
          {/* Preprocessed Image Comparison Card */}
          {preprocessedData && (
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl">
              <h3 className="text-sm font-bold text-slate-300 mb-3 flex items-center space-x-2">
                <span>🎨</span>
                <span>OpenCV Model-Ready Preprocessing</span>
              </h3>
              <div className="grid grid-cols-2 gap-4 text-xs text-center">
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block mb-2 font-medium">Original Drawing</span>
                  <div className="h-40 flex items-center justify-center bg-white rounded-lg p-2 overflow-hidden">
                    {previewUrl ? (
                      <img src={previewUrl} alt="Original" className="max-h-full object-contain" />
                    ) : (
                      <span className="text-slate-400">User Canvas</span>
                    )}
                  </div>
                </div>
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block mb-2 font-medium">
                    Preprocessed (320x320 Centered, Padded, CLAHE)
                  </span>
                  <div className="h-40 flex items-center justify-center bg-white rounded-lg p-2 overflow-hidden">
                    <img
                      src={`${API_BASE}/static/outputs/preprocessing/${preprocessedData.split(/[/\\]/).pop()}`}
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

          {/* Llama 3.2 Vision Structured Analysis Card */}
          {analysisData ? (
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="text-2xl font-black text-white capitalize">
                      {analysisData.object_type}
                    </h2>
                    <span className="px-2.5 py-0.5 text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full">
                      {analysisData.category}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 mt-1 block">
                    Viewpoint: <strong className="text-slate-200 capitalize">{analysisData.view_type}</strong> • Confidence: {(analysisData.confidence_score * 100).toFixed(0)}%
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] px-2.5 py-1 bg-slate-800 border border-slate-700 text-slate-300 rounded-md font-mono">
                    {analysisData.inference_backend}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Semantic Description (Observed vs Inferred)
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                  {analysisData.description}
                </p>
              </div>

              {/* Visible Components Breakdown */}
              {analysisData.visible_parts && analysisData.visible_parts.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Visible Components Breakdown
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {analysisData.visible_parts.map((part, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-950/70 border border-slate-800 p-3 rounded-xl text-xs space-y-1.5"
                      >
                        <div className="font-bold text-indigo-400 capitalize flex items-center space-x-1.5">
                          <span>🔹</span>
                          <span>{part.name}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 font-medium">Observed:</span>{' '}
                          <span className="text-slate-300">{part.observed}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 font-medium">Inferred 3D:</span>{' '}
                          <span className="text-slate-300">{part.inferred}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 font-medium">Relations:</span>{' '}
                          <span className="text-slate-400">{part.relationships}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Geometric Features & Proportions */}
              {analysisData.geometry_features && (
                <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl space-y-2 text-xs">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Geometric Characteristics
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-slate-500 font-medium block">Overall Shape:</span>
                      <span className="text-slate-200 capitalize">{analysisData.geometry_features.overall_shape}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-medium block">Symmetry:</span>
                      <span className="text-slate-200 capitalize">{analysisData.geometry_features.symmetry}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-medium block">Proportions:</span>
                      <span className="text-slate-200">{analysisData.geometry_features.proportions}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-medium block">Primitives:</span>
                      <span className="text-slate-200">
                        {analysisData.geometry_features.observed_geometric_primitives?.join(', ') || 'Curves'}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Uncertainties Callout */}
              {analysisData.uncertainties && analysisData.uncertainties.length > 0 && (
                <div className="bg-amber-500/5 border border-amber-500/20 p-3.5 rounded-xl text-xs space-y-1">
                  <span className="font-bold text-amber-400 flex items-center space-x-1.5">
                    <span>⚠️</span>
                    <span>Ambiguities & Occluded Geometry</span>
                  </span>
                  <ul className="list-disc list-inside text-amber-200/80 space-y-0.5 mt-1">
                    {analysisData.uncertainties.map((u, i) => (
                      <li key={i}>{u}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 3D Reconstruction Prompt */}
              {analysisData.reconstruction_prompt && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    3D Reconstruction Prompt (Metadata / Refinement)
                  </h4>
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-xs text-indigo-300 select-all">
                    "{analysisData.reconstruction_prompt}"
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-slate-900/40 border border-dashed border-slate-800 rounded-2xl p-12 text-center text-slate-500 flex flex-col items-center justify-center space-y-3">
              <div className="text-4xl">🧠</div>
              <p className="text-sm font-medium">
                No sketch analysis yet. Draw or select a sketch and click "Analyze with Llama 3.2 Vision".
              </p>
              <p className="text-xs text-slate-600 max-w-md">
                Llama 3.2 Vision decomposes 2D sketches into main object categories, visible parts,
                geometric symmetry, view angles, and ambiguities to prime 3D reconstruction.
              </p>
            </div>
          )}

          {/* 3D Reconstruction Output Card */}
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

              <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Asset File:</span>
                  <span className="font-mono text-slate-200">{reconstructionData.model_3d_path.split(/[/\\]/).pop()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Input Resolution:</span>
                  <span className="font-mono text-slate-200">
                    {reconstructionData.details.input_resolution?.join('x') || '320x320'} RGB
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Synthesized Views:</span>
                  <span className="font-mono text-slate-200">
                    {reconstructionData.details.camera_views_synthesized} sparse camera views
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Refinement Prompt Applied:</span>
                  <span className="font-mono text-slate-200">
                    {reconstructionData.details.refinement_prompt_available ? 'Yes' : 'None'}
                  </span>
                </div>
              </div>

              <div className="flex space-x-3">
                <a
                  href={`${API_BASE}/static/outputs/reconstructions/${reconstructionData.model_3d_path.split(/[/\\]/).pop()}`}
                  download
                  className="flex-1 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs rounded-xl text-center shadow-lg shadow-purple-600/20 transition flex items-center justify-center space-x-2"
                >
                  <span>💾</span>
                  <span>Download 3D Mesh (.OBJ)</span>
                </a>
              </div>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-4 px-6 text-center text-xs text-slate-500">
        Sketch2Shape AI • TechZephyr Hackathon • Llama 3.2 Vision & InstantMesh
      </footer>
    </div>
  );
}
