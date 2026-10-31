import React, { useState, useRef, useEffect, useCallback } from 'react';

export default function VectorStudio({
  onGenerate3D,
  onGenerate25D,
  onAnalyzeVision,
  loading,
  generation25DLoading = false,
  statusMessage,
  currentSketchType,
  setCurrentSketchType,
  targetSize,
  setTargetSize,
  debugMode,
  setDebugMode,
  canvasRef,
  selectedFile,
  setSelectedFile,
  previewUrl,
  setPreviewUrl,
  // Foreground Isolation Props
  isolateForeground = false,
  onToggleIsolateForeground,
  onIsolateForeground,
  isolationLoading = false,
  isolationError = null,
  isolationData = null,
  isolatedPreviewUrl = null,
  selectedInput = 'original',
  onSelectInput,
  onResetIsolation,
}) {
  const [activeTab, setActiveTab] = useState('sketch'); // 'sketch' or 'upload'
  const [brushColor, setBrushColor] = useState('#FF7F50');
  const [activeTool, setActiveTool] = useState('pen'); // 'pen', 'brush', 'eraser'
  const [brushSize, setBrushSize] = useState(4);
  const [targetQuality, setTargetQuality] = useState('mid'); // 'low', 'mid', 'ultra'
  const [isDrawing, setIsDrawing] = useState(false);
  const [history, setHistory] = useState([]);
  const [previewMode, setPreviewMode] = useState('isolated'); // 'isolated', 'original', 'split'

  // Available palette matching design
  const palette = [
    { name: 'Coral', color: '#FF7F50' },
    { name: 'Neon Mint', color: '#00f59b' },
    { name: 'Cyan Electric', color: '#7bd0ff' },
    { name: 'Pure White', color: '#FFFFFF' },
    { name: 'Carbon Outline', color: '#37393c' },
  ];

  // Save canvas state to history stack for Undo
  const pushHistory = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    try {
      const dataUrl = canvas.toDataURL();
      setHistory((prev) => [...prev.slice(-15), dataUrl]);
    } catch {
      // ignore
    }
  }, [canvasRef]);

  // Undo stroke
  const handleUndo = () => {
    if (history.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const newHistory = [...history];
    newHistory.pop(); // discard current
    const previousState = newHistory[newHistory.length - 1];

    if (previousState) {
      const img = new Image();
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
      };
      img.src = previousState;
      setHistory(newHistory);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setHistory([]);
    }
  };

  // Clear Canvas
  const handleClear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHistory([]);
    setSelectedFile(null);
    setPreviewUrl(null);
    setCurrentSketchType('custom');
    if (onResetIsolation) onResetIsolation(false);
  };

  // Draw Sample Drone Sketch (Matching code.html design)
  const drawDemoDrone = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    ctx.save();
    ctx.strokeStyle = '#00f59b';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const cx = w / 2;
    const cy = h / 2 - 10;

    // Drone central fuselage outline
    ctx.beginPath();
    ctx.moveTo(cx - 90, cy - 25);
    ctx.lineTo(cx, cy - 55);
    ctx.lineTo(cx + 90, cy - 25);
    ctx.lineTo(cx + 115, cy + 30);
    ctx.lineTo(cx + 50, cy + 50);
    ctx.lineTo(cx - 50, cy + 50);
    ctx.lineTo(cx - 115, cy + 30);
    ctx.closePath();
    ctx.stroke();

    // Cockpit sensor dome
    ctx.strokeStyle = '#FF7F50';
    ctx.beginPath();
    ctx.ellipse(cx, cy - 5, 32, 18, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Left Thruster Arm & Rotor Pod
    ctx.strokeStyle = '#7bd0ff';
    ctx.beginPath();
    ctx.moveTo(cx - 90, cy - 12);
    ctx.lineTo(cx - 165, cy - 40);
    ctx.lineTo(cx - 185, cy - 30);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(cx - 175, cy - 36, 36, 14, -0.2, 0, Math.PI * 2);
    ctx.stroke();

    // Right Thruster Arm & Rotor Pod
    ctx.beginPath();
    ctx.moveTo(cx + 90, cy - 12);
    ctx.lineTo(cx + 165, cy - 40);
    ctx.lineTo(cx + 185, cy - 30);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(cx + 175, cy - 36, 36, 14, 0.2, 0, Math.PI * 2);
    ctx.stroke();

    // Technical contour grid guides (Carbon outline)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);

    ctx.beginPath();
    ctx.moveTo(cx - 175, cy - 36);
    ctx.lineTo(cx + 175, cy - 36);
    ctx.moveTo(cx, cy - 65);
    ctx.lineTo(cx, cy + 65);
    ctx.stroke();

    ctx.restore();

    // Save as selected file blob for backend
    canvas.toBlob((blob) => {
      if (blob) {
        const file = new File([blob], 'demo_cyber_drone.png', { type: 'image/png' });
        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(blob));
        setCurrentSketchType('drone');
        pushHistory();
      }
    });
  }, [canvasRef, pushHistory, setCurrentSketchType, setPreviewUrl, setSelectedFile]);

  // Load other sample sketches (Chair, Mug, Car, Ambiguous)
  const loadSampleSketch = (type) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);
    ctx.save();
    ctx.strokeStyle = '#FF7F50';
    ctx.lineWidth = 3.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const cx = w / 2;
    const cy = h / 2;

    if (type === 'chair') {
      ctx.strokeRect(cx - 80, cy - 20, 160, 24); // seat
      ctx.strokeRect(cx - 80, cy - 130, 160, 110); // backrest
      ctx.beginPath();
      ctx.moveTo(cx - 70, cy + 4); ctx.lineTo(cx - 70, cy + 130); // leg 1
      ctx.moveTo(cx + 70, cy + 4); ctx.lineTo(cx + 70, cy + 130); // leg 2
      ctx.moveTo(cx - 45, cy + 4); ctx.lineTo(cx - 45, cy + 105); // leg 3 (perspective)
      ctx.moveTo(cx + 45, cy + 4); ctx.lineTo(cx + 45, cy + 105); // leg 4 (perspective)
      ctx.stroke();
    } else if (type === 'mug') {
      ctx.beginPath();
      ctx.ellipse(cx, cy - 70, 75, 26, 0, 0, Math.PI * 2); // rim
      ctx.moveTo(cx - 75, cy - 70); ctx.lineTo(cx - 75, cy + 70); // left body
      ctx.moveTo(cx + 75, cy - 70); ctx.lineTo(cx + 75, cy + 70); // right body
      ctx.ellipse(cx, cy + 70, 75, 26, 0, 0, Math.PI); // bottom
      // handle
      ctx.moveTo(cx + 75, cy - 35);
      ctx.bezierCurveTo(cx + 145, cy - 35, cx + 145, cy + 50, cx + 75, cy + 50);
      ctx.stroke();
    } else if (type === 'car') {
      ctx.beginPath();
      ctx.moveTo(cx - 150, cy + 20);
      ctx.lineTo(cx - 90, cy + 20);
      ctx.lineTo(cx - 45, cy - 50);
      ctx.lineTo(cx + 80, cy - 50);
      ctx.lineTo(cx + 120, cy + 20);
      ctx.lineTo(cx + 160, cy + 20);
      ctx.lineTo(cx + 160, cy + 55);
      ctx.lineTo(cx - 150, cy + 55);
      ctx.closePath();
      ctx.stroke();
      // wheels
      ctx.strokeStyle = '#00f59b';
      ctx.beginPath();
      ctx.arc(cx - 70, cy + 55, 28, 0, Math.PI * 2);
      ctx.arc(cx + 90, cy + 55, 28, 0, Math.PI * 2);
      ctx.stroke();
    } else if (type === 'ambiguous') {
      ctx.strokeStyle = '#7bd0ff';
      ctx.beginPath();
      ctx.moveTo(cx - 100, cy - 70);
      ctx.lineTo(cx + 70, cy - 60);
      ctx.lineTo(cx + 50, cy + 60);
      ctx.lineTo(cx - 70, cy + 50);
      ctx.closePath();
      ctx.moveTo(cx - 70, cy + 50); ctx.lineTo(cx - 110, cy + 120);
      ctx.moveTo(cx + 50, cy + 60); ctx.lineTo(cx + 80, cy + 130);
      ctx.moveTo(cx, cy - 65); ctx.lineTo(cx - 10, cy - 120);
      ctx.stroke();
    }

    ctx.restore();

    canvas.toBlob((blob) => {
      if (blob) {
        const file = new File([blob], `sample_${type}.png`, { type: 'image/png' });
        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(blob));
        setCurrentSketchType(type);
        pushHistory();
        if (onResetIsolation) onResetIsolation(true);
      }
    });
  };

  // Canvas drawing event handlers
  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
    };
  };

  const startDrawing = (e) => {
    if (activeTab !== 'sketch') return;
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { x, y } = getCoordinates(e);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  };

  const draw = (e) => {
    if (!isDrawing || activeTab !== 'sketch') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { x, y } = getCoordinates(e);

    if (activeTool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth = brushSize * 4;
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = brushColor;
      ctx.lineWidth = activeTool === 'brush' ? brushSize * 2 : brushSize;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
      pushHistory();
      // Sync preview and selectedFile
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], 'user_sketch.png', { type: 'image/png' });
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(blob));
            setCurrentSketchType('custom');
            if (onResetIsolation) onResetIsolation(true);
          }
        });
      }
    }
  };

  // Initialize canvas on mount and load default demo drone
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = 900;
    canvas.height = 460;
    drawDemoDrone();
  }, [canvasRef, drawDemoDrone]);

  // File upload handler
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setCurrentSketchType('uploaded');
      if (onResetIsolation) onResetIsolation(true);
    }
  };

  return (
    <div className="w-full flex flex-col rounded-2xl bg-[#191c1e]/95 border border-[#FF7F50]/30 backdrop-blur-2xl shadow-[0_0_35px_rgba(255,127,80,0.1)] overflow-hidden">
      {/* Studio Header Bar */}
      <div className="flex items-center justify-between flex-wrap gap-4 p-4 bg-[#0c0f11]/80 border-b border-[#323537]/30">
        <div className="flex items-center gap-4 flex-wrap">
          {/* Dual-Panel Mode Switcher */}
          <div className="flex items-center gap-1 p-1 rounded-full bg-[#323537]/80 border border-[#323537]/60">
            <button
              onClick={() => setActiveTab('sketch')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'sketch'
                  ? 'bg-[#FF7F50] text-white shadow-[0_0_16px_rgba(255,127,80,0.45)]'
                  : 'text-[#bfc9c3] hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-sm">draw</span>
              <span>Hero Vector Studio</span>
            </button>
            <button
              onClick={() => setActiveTab('upload')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'upload'
                  ? 'bg-[#FF7F50] text-white shadow-[0_0_16px_rgba(255,127,80,0.45)]'
                  : 'text-[#bfc9c3] hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-sm">upload_file</span>
              <span>Upload File / Photo</span>
            </button>
          </div>

          <div className="h-5 w-px bg-[#323537]/50 hidden sm:block"></div>

          {/* Isolate Foreground Toggle Switch (Optional, Disabled by default) */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0c0f11] border border-[#323537]/80 hover:border-[#00f59b]/50 transition-all shadow-inner">
            <label className="relative inline-flex items-center cursor-pointer select-none">
              <input
                type="checkbox"
                id="isolate-foreground-checkbox"
                checked={isolateForeground}
                onChange={(e) => onToggleIsolateForeground && onToggleIsolateForeground(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-8 h-4 bg-[#272a2d] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#00f59b]"></div>
              <span className="ml-2 text-xs font-semibold text-white flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#00f59b]">content_cut</span>
                <span>Isolate Foreground</span>
              </span>
            </label>
            <span
              className="text-[10px] text-[#849588] hidden lg:inline border-l border-[#323537]/60 pl-2"
              title="Remove the background and isolate the main object."
            >
              Remove background & isolate main object
            </span>
            {isolationLoading && (
              <span className="material-symbols-outlined text-xs text-[#00f59b] animate-spin" title="Isolating foreground...">
                sync
              </span>
            )}
            {isolateForeground && isolationData && (
              <span className="px-2 py-0.2 rounded-full bg-[#00f59b]/20 text-[#00f59b] text-[10px] font-semibold border border-[#00f59b]/40">
                {selectedInput === 'isolated' ? 'Active' : 'Standby'}
              </span>
            )}
          </div>

          <div className="h-5 w-px bg-[#323537]/50 hidden md:block"></div>

          {/* Realtime badges */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#00f59b]/10 border border-[#00f59b]/30 text-[#00f59b] text-[11px] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#00f59b] animate-ping"></span>
              Realtime Neural Trace
            </span>
            <span className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1d2022] text-[#849588] text-[11px] border border-[#272a2d]">
              <span className="material-symbols-outlined text-xs text-[#FF7F50]">grid_goldenratio</span>
              <span>2048 x 2048 SDF Grid</span>
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleUndo}
            disabled={history.length === 0}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1d2022] hover:bg-[#272a2d] disabled:opacity-40 text-white text-xs font-medium transition-colors border border-[#323537]/40"
            title="Undo Stroke"
          >
            <span className="material-symbols-outlined text-sm text-[#4edea3]">undo</span>
            <span>Undo</span>
          </button>

          <button
            onClick={handleClear}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1d2022] hover:bg-[#93000a] text-[#bfc9c3] hover:text-white text-xs font-medium transition-colors border border-[#323537]/40"
            title="Clear Canvas"
          >
            <span className="material-symbols-outlined text-sm">delete_sweep</span>
            <span>Clear</span>
          </button>

          <button
            onClick={drawDemoDrone}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FF7F50]/15 hover:bg-[#FF7F50]/25 text-[#FF7F50] text-xs font-semibold transition-colors border border-[#FF7F50]/40 shadow-[0_0_12px_rgba(255,127,80,0.25)]"
            title="Load Sci-Fi Concept Drone Reference"
          >
            <span className="material-symbols-outlined text-sm">auto_stories</span>
            <span>Load Demo Drone</span>
          </button>
        </div>
      </div>

      {/* Drawing Toolbar (Shown in sketch tab) */}
      {activeTab === 'sketch' && (
        <div className="flex items-center justify-between flex-wrap gap-3 px-4 py-2.5 bg-[#272a2d]/60 border-b border-[#323537]/30 text-xs">
          <div className="flex items-center gap-4 flex-wrap">
            {/* Color Palette */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-[#849588] uppercase tracking-wider">Palette</span>
              <div className="flex items-center gap-2 p-1 rounded-lg bg-[#0c0f11]/70 border border-[#323537]/40">
                {palette.map((p) => {
                  const isSelected = brushColor === p.color && activeTool !== 'eraser';
                  return (
                    <button
                      key={p.color}
                      onClick={() => {
                        setBrushColor(p.color);
                        if (activeTool === 'eraser') setActiveTool('pen');
                      }}
                      className={`w-5 h-5 rounded-full transition-transform ${
                        isSelected ? 'ring-2 ring-white scale-110' : 'hover:scale-105'
                      }`}
                      style={{
                        backgroundColor: p.color,
                        boxShadow: isSelected ? `0 0 10px ${p.color}` : 'none',
                        border: p.color === '#FFFFFF' ? '1px solid #37393c' : 'none',
                      }}
                      title={p.name}
                    />
                  );
                })}
              </div>
            </div>

            <div className="h-5 w-px bg-[#323537]/50 hidden sm:block"></div>

            {/* Tool Selection */}
            <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[#0c0f11]/70 border border-[#323537]/40">
              <button
                onClick={() => setActiveTool('pen')}
                className={`px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1 transition-all ${
                  activeTool === 'pen'
                    ? 'bg-[#FF7F50] text-white shadow-sm'
                    : 'text-[#bfc9c3] hover:text-white hover:bg-[#1d2022]'
                }`}
              >
                <span className="material-symbols-outlined text-sm">edit</span>
                <span>Vector Pen</span>
              </button>

              <button
                onClick={() => setActiveTool('brush')}
                className={`px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1 transition-all ${
                  activeTool === 'brush'
                    ? 'bg-[#FF7F50] text-white shadow-sm'
                    : 'text-[#bfc9c3] hover:text-white hover:bg-[#1d2022]'
                }`}
              >
                <span className="material-symbols-outlined text-sm">brush</span>
                <span>SDF Brush</span>
              </button>

              <button
                onClick={() => setActiveTool('eraser')}
                className={`px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1 transition-all ${
                  activeTool === 'eraser'
                    ? 'bg-[#00f59b] text-[#003920] font-semibold shadow-sm'
                    : 'text-[#bfc9c3] hover:text-white hover:bg-[#1d2022]'
                }`}
              >
                <span className="material-symbols-outlined text-sm">ink_eraser</span>
                <span>Eraser</span>
              </button>
            </div>

            <div className="h-5 w-px bg-[#323537]/50 hidden md:block"></div>

            {/* Stroke Width Slider */}
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#FF7F50] text-sm">line_weight</span>
              <span className="text-[#bfc9c3] text-xs">Stroke</span>
              <input
                type="range"
                min="1"
                max="24"
                value={brushSize}
                onChange={(e) => setBrushSize(Number(e.target.value))}
                className="w-20 h-1.5 bg-[#323537] rounded-lg cursor-pointer accent-[#FF7F50]"
              />
              <span className="text-[#FF7F50] font-semibold w-7">{brushSize}px</span>
            </div>

            <div className="h-5 w-px bg-[#323537]/50 hidden lg:block"></div>

            {/* Quick Preset Sketches */}
            <div className="hidden xl:flex items-center gap-1 text-[11px] text-[#849588]">
              <span>Presets:</span>
              {['chair', 'mug', 'car', 'ambiguous'].map((preset) => (
                <button
                  key={preset}
                  onClick={() => loadSampleSketch(preset)}
                  className={`px-2 py-0.5 rounded capitalize transition-colors ${
                    currentSketchType === preset
                      ? 'bg-[#FF7F50]/20 text-[#FF7F50] border border-[#FF7F50]/40'
                      : 'bg-[#1d2022] hover:bg-[#272a2d] text-white border border-[#323537]/30'
                  }`}
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-[#849588] text-xs">
            <span className="material-symbols-outlined text-sm text-[#00f59b]">near_me</span>
            <span>Coordinate Sync: Active</span>
          </div>
        </div>
      )}

      {/* Isolation Error Alert Banner */}
      {isolationError && isolateForeground && (
        <div className="mx-4 mt-3 p-3 rounded-xl bg-[#93000a]/20 border border-[#ffb4ab]/30 text-[#ffb4ab] text-xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">warning</span>
            <span>Foreground Isolation Warning: {isolationError}</span>
          </div>
          <button
            onClick={() => onIsolateForeground && onIsolateForeground()}
            className="px-2.5 py-1 rounded bg-[#ffb4ab]/20 hover:bg-[#ffb4ab]/30 text-white font-medium transition-colors"
          >
            Retry Isolation
          </button>
        </div>
      )}

      {/* Main Canvas Area */}
      {activeTab === 'sketch' ? (
        <div className="relative w-full h-[460px] bg-[#080a0c] overflow-hidden flex items-center justify-center select-none">
          {/* Blueprint dot grid background */}
          <div className="absolute inset-0 bg-[radial-gradient(#1f262b_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FF7F50]/5 via-transparent to-[#00f59b]/5 pointer-events-none"></div>

          {/* HTML5 Canvas (Drawing Area) */}
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            className={`w-full h-full cursor-crosshair block relative z-10 touch-none ${
              isolateForeground && isolatedPreviewUrl && previewMode === 'isolated' ? 'invisible pointer-events-none' : ''
            }`}
          />

          {/* Foreground Isolation Preview Overlay (Alpha Transparency Preserved) */}
          {isolateForeground && isolatedPreviewUrl && previewMode === 'isolated' && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#080a0c]/90 backdrop-blur-sm p-4">
              <div
                className="relative max-w-md max-h-[360px] w-full h-full rounded-2xl border border-[#00f59b]/40 overflow-hidden flex items-center justify-center shadow-2xl"
                style={{
                  backgroundImage:
                    'repeating-conic-gradient(#1f262b 0% 25%, #0e1216 0% 50%)',
                  backgroundPosition: '50%',
                  backgroundSize: '24px 24px',
                }}
              >
                <img
                  src={isolatedPreviewUrl}
                  alt="Isolated Foreground (Alpha Channel)"
                  className="max-h-[300px] max-w-[300px] object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)]"
                />
                <div className="absolute bottom-3 left-3 bg-[#0c0f11]/90 backdrop-blur-md px-3 py-1 rounded-md text-[11px] text-[#00f59b] border border-[#00f59b]/30 font-mono flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-xs">opacity</span>
                  <span>Alpha Transparency Preserved • 320x320</span>
                </div>
              </div>
            </div>
          )}

          {/* Split Mode Comparison Overlay */}
          {isolateForeground && isolatedPreviewUrl && previewMode === 'split' && (
            <div className="absolute inset-0 z-20 grid grid-cols-2 gap-4 p-6 bg-[#080a0c]/90 backdrop-blur-sm items-center justify-center">
              {/* Left: Original Sketch */}
              <div className="flex flex-col items-center justify-center h-full p-3 rounded-xl bg-[#0c0f11] border border-[#323537]">
                <span className="text-[11px] font-semibold text-[#849588] mb-2 uppercase tracking-wider flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs text-[#FF7F50]">draw</span>
                  <span>Original Sketch</span>
                </span>
                <div className="w-full h-64 flex items-center justify-center bg-black/40 rounded-lg overflow-hidden">
                  <img src={previewUrl} alt="Original" className="max-h-full max-w-full object-contain" />
                </div>
              </div>

              {/* Right: Isolated Cutout with Checkerboard */}
              <div className="flex flex-col items-center justify-center h-full p-3 rounded-xl bg-[#0c0f11] border border-[#00f59b]/40">
                <span className="text-[11px] font-semibold text-[#00f59b] mb-2 uppercase tracking-wider flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">content_cut</span>
                  <span>Isolated Object (Alpha)</span>
                </span>
                <div
                  className="w-full h-64 flex items-center justify-center rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: 'repeating-conic-gradient(#1f262b 0% 25%, #0e1216 0% 50%)',
                    backgroundSize: '20px 20px',
                  }}
                >
                  <img src={isolatedPreviewUrl} alt="Isolated" className="max-h-full max-w-full object-contain" />
                </div>
              </div>
            </div>
          )}

          {/* Isolated Output Comparison & Selection Toolbar */}
          {isolateForeground && isolatedPreviewUrl && (
            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 p-1.5 rounded-2xl bg-[#0c0f11]/95 backdrop-blur-xl border border-[#00f59b]/40 shadow-[0_4px_24px_rgba(0,0,0,0.6)] text-xs flex-wrap justify-center">
              {/* Preview Mode Selector */}
              <div className="flex items-center gap-1 bg-[#191c1e] p-1 rounded-xl border border-[#272a2d]">
                <button
                  onClick={() => setPreviewMode('isolated')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    previewMode === 'isolated'
                      ? 'bg-[#00f59b] text-[#003920] shadow-[0_0_12px_rgba(0,245,155,0.4)]'
                      : 'text-[#bfc9c3] hover:text-white'
                  }`}
                  title="View transparent isolated subject"
                >
                  <span className="material-symbols-outlined text-sm">filter_vintage</span>
                  <span>Isolated (Alpha)</span>
                </button>

                <button
                  onClick={() => setPreviewMode('original')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    previewMode === 'original'
                      ? 'bg-[#FF7F50] text-white shadow-[0_0_12px_rgba(255,127,80,0.4)]'
                      : 'text-[#bfc9c3] hover:text-white'
                  }`}
                  title="View original drawing canvas"
                >
                  <span className="material-symbols-outlined text-sm">draw</span>
                  <span>Original</span>
                </button>

                <button
                  onClick={() => setPreviewMode('split')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    previewMode === 'split'
                      ? 'bg-[#7bd0ff] text-[#002b40] shadow-[0_0_12px_rgba(123,208,255,0.4)]'
                      : 'text-[#bfc9c3] hover:text-white'
                  }`}
                  title="Compare original and isolated side-by-side"
                >
                  <span className="material-symbols-outlined text-sm">vertical_split</span>
                  <span>Compare</span>
                </button>
              </div>

              <div className="h-5 w-px bg-[#323537] hidden sm:block"></div>

              {/* Input Selection Action: Use Isolated vs Revert to Original */}
              {selectedInput === 'isolated' ? (
                <div className="flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-lg bg-[#00f59b]/20 text-[#00f59b] text-[11px] font-semibold border border-[#00f59b]/40 flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">check_circle</span>
                    <span>Using Isolated for 2.5D/3D</span>
                  </span>
                  <button
                    onClick={() => onSelectInput && onSelectInput('original')}
                    className="px-2.5 py-1 rounded-lg bg-[#1d2022] hover:bg-[#272a2d] text-[#bfc9c3] hover:text-white text-[11px] font-medium border border-[#323537]/60 transition-colors"
                    title="Revert back to the original sketch for 2.5D and 3D generation"
                  >
                    Revert to Original
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-lg bg-[#FF7F50]/20 text-[#FF7F50] text-[11px] font-semibold border border-[#FF7F50]/40 flex items-center gap-1">
                    <span>Using Original Sketch</span>
                  </span>
                  <button
                    onClick={() => onSelectInput && onSelectInput('isolated')}
                    className="px-2.5 py-1 rounded-lg bg-[#00f59b]/25 hover:bg-[#00f59b]/35 text-[#00f59b] text-[11px] font-semibold border border-[#00f59b]/50 transition-colors shadow-sm"
                    title="Use isolated foreground cutout for 2.5D and 3D generation"
                  >
                    Continue with Isolated
                  </button>
                </div>
              )}

              {/* Re-isolate Button */}
              <button
                onClick={() => onIsolateForeground && onIsolateForeground()}
                disabled={isolationLoading}
                className="p-1 rounded-lg hover:bg-[#272a2d] text-[#849588] hover:text-[#00f59b] transition-colors"
                title="Re-run Foreground Isolation on current sketch"
              >
                <span className={`material-symbols-outlined text-sm ${isolationLoading ? 'animate-spin' : ''}`}>
                  refresh
                </span>
              </button>
            </div>
          )}

          {/* Floating UI Overlays */}
          <div className="pointer-events-none absolute top-3 left-4 z-20 flex items-center gap-2 bg-[#0c0f11]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#323537]/40 text-xs text-[#849588]">
            <span className="material-symbols-outlined text-sm text-[#FF7F50]">grid_4x4</span>
            <span>Multi-Angle Silhouette Grid (Front + Top Axis)</span>
          </div>

          <div className="pointer-events-none absolute bottom-3 right-4 z-20 flex items-center gap-2 bg-[#0c0f11]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#323537]/40 text-xs text-[#FF7F50]">
            <span className="material-symbols-outlined text-sm">gesture</span>
            <span>Draw contours or click 'Load Demo Drone' • Auto-projects into 3D SDF below</span>
          </div>
        </div>
      ) : (
        /* Upload Viewport */
        <div className="relative flex flex-col items-center justify-center h-[460px] bg-[#0c0f11] p-8 text-center border-dashed border-2 border-[#272a2d] m-4 rounded-xl">
          <input
            type="file"
            id="file-input"
            accept="image/png, image/jpeg, image/webp, image/svg+xml"
            onChange={handleFileUpload}
            className="hidden"
          />
          <label htmlFor="file-input" className="cursor-pointer flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-[#272a2d] border border-[#FF7F50]/40 flex items-center justify-center mb-3 text-[#FF7F50] shadow-[0_0_20px_rgba(255,127,80,0.3)]">
              <span className="material-symbols-outlined text-3xl">add_photo_alternate</span>
            </div>
            <span className="font-display font-semibold text-lg text-white mb-1">
              Drop sketch or blueprint here, or browse files
            </span>
            <span className="text-xs text-[#849588] max-w-sm">
              PNG, JPG, WEBP, or SVG raster blueprints (supports hand sketches & paper captures up to 50MB)
            </span>

            <div className="mt-4 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1d2022] border border-[#FF7F50]/30 text-[#FF7F50] text-xs shadow-sm">
              <span className="material-symbols-outlined text-sm">flare</span>
              <span>AI Background Removal & Contrast Auto-Normalization</span>
            </div>
          </label>

          {previewUrl && (
            <div className="mt-4 p-3 rounded-xl bg-[#191c1e] border border-[#272a2d] flex items-center justify-between gap-4 max-w-xl w-full">
              <div className="flex items-center gap-3">
                <img src={previewUrl} alt="Upload preview" className="h-16 w-16 object-contain rounded-lg bg-white/10" />
                <div className="text-left text-xs">
                  <p className="font-medium text-white">{selectedFile?.name || 'Uploaded Sketch'}</p>
                  <p className="text-[#849588]">Original Upload</p>
                </div>
              </div>

              {isolatedPreviewUrl && isolateForeground && (
                <div className="flex items-center gap-3 pl-4 border-l border-[#272a2d]">
                  <div
                    className="h-16 w-16 rounded-lg border border-[#00f59b]/40 flex items-center justify-center overflow-hidden"
                    style={{
                      backgroundImage: 'repeating-conic-gradient(#1f262b 0% 25%, #0e1216 0% 50%)',
                      backgroundSize: '16px 16px',
                    }}
                  >
                    <img src={isolatedPreviewUrl} alt="Isolated" className="max-h-full object-contain" />
                  </div>
                  <div className="text-left text-xs">
                    <span className="text-[#00f59b] font-semibold block">Foreground Isolated</span>
                    <button
                      onClick={() => onSelectInput && onSelectInput(selectedInput === 'isolated' ? 'original' : 'isolated')}
                      className={`text-[10px] mt-1 px-2 py-0.5 rounded font-medium border ${
                        selectedInput === 'isolated'
                          ? 'bg-[#00f59b]/20 text-[#00f59b] border-[#00f59b]/40'
                          : 'bg-[#1d2022] text-[#bfc9c3] border-[#323537]'
                      }`}
                    >
                      {selectedInput === 'isolated' ? '✓ Selected (Click to Revert)' : 'Click to Select'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Footer Controls & Generation Actions */}
      <div className="flex items-center justify-between flex-wrap gap-4 p-4 bg-[#272a2d]/40 border-t border-[#323537]/30 text-xs">
        {/* Left: Preprocessing Badges & Target Quality */}
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-[#849588] uppercase tracking-wider">Preprocessing:</span>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="px-2 py-0.5 rounded bg-[#0c0f11] border border-[#FF7F50]/40 text-[#FF7F50] text-[10px] font-semibold">
                RMBG Mask
              </span>
              <span className="px-2 py-0.5 rounded bg-[#0c0f11] border border-[#00f59b]/40 text-[#00f59b] text-[10px] font-semibold">
                Sobel Bounds
              </span>
              <span className="px-2 py-0.5 rounded bg-[#0c0f11] border border-[#323537]/60 text-[#bfc9c3] text-[10px]">
                Normals Prior
              </span>
              <span className="px-2 py-0.5 rounded bg-[#0c0f11] border border-[#FF7F50]/40 text-[#FF7F50] text-[10px] font-semibold">
                Watertight SDF
              </span>
            </div>
          </div>

          <div className="h-4 w-px bg-[#323537]/50 hidden md:block"></div>

          {/* Target Quality Pills */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-[#849588] uppercase tracking-wider">Target Quality:</span>
            <div className="flex items-center gap-1">
              {[
                { id: 'low', label: 'Low (15k)' },
                { id: 'mid', label: 'Mid (45k)' },
                { id: 'ultra', label: 'Ultra (150k)' },
              ].map((q) => (
                <button
                  key={q.id}
                  onClick={() => setTargetQuality(q.id)}
                  className={`px-2.5 py-1 rounded text-xs transition-all ${
                    targetQuality === q.id
                      ? 'bg-[#FF7F50] text-white font-semibold shadow-[0_0_12px_rgba(255,127,80,0.35)]'
                      : 'bg-[#1d2022] text-[#bfc9c3] hover:bg-[#272a2d]'
                  }`}
                >
                  {q.label}
                </button>
              ))}
            </div>
          </div>

          {/* Target Size Selector */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-[10px] font-bold text-[#849588] uppercase tracking-wider">Resolution:</span>
            <select
              value={targetSize}
              onChange={(e) => setTargetSize(Number(e.target.value))}
              className="bg-[#1d2022] border border-[#323537] text-white text-xs rounded px-2 py-1 focus:outline-none"
            >
              <option value={320}>320 x 320 (InstantMesh Native)</option>
              <option value={512}>512 x 512 (High Resolution)</option>
            </select>
          </div>
        </div>

        {/* Right: Compute Status & Primary Generation Buttons */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Active Reconstruction Input Indicator */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111416] border border-[#323537]/50 text-[11px] text-[#849588]">
            <span>Active Pipeline Input:</span>
            <span className={isolateForeground && selectedInput === 'isolated' ? 'text-[#00f59b] font-semibold' : 'text-white'}>
              {isolateForeground && selectedInput === 'isolated' ? 'Isolated Cutout' : 'Original Sketch'}
            </span>
          </div>

          {/* Llama 3.2 Vision Analysis Button */}
          <button
            onClick={onAnalyzeVision}
            disabled={loading || generation25DLoading}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#1d2022] hover:bg-[#272a2d] border border-[#00f59b]/40 text-[#6ffbbe] text-xs font-semibold shadow-sm transition-all disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-base text-[#00f59b]">neurology</span>
            <span>Vision Analysis</span>
          </button>

          {/* Generate 2.5D Relief Button */}
          <button
            onClick={onGenerate25D}
            disabled={loading || generation25DLoading}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#111416] hover:bg-[#1d2022] border border-[#7bd0ff]/50 text-[#7bd0ff] text-xs font-semibold shadow-[0_0_16px_rgba(123,208,255,0.18)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer"
            title="Generate Monocular Depth Map, Surface Normals & 3D Watertight Relief Mesh"
          >
            {generation25DLoading ? (
              <>
                <span className="material-symbols-outlined text-base animate-spin">refresh</span>
                <span>Generating 2.5D...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-base">layers</span>
                <span>Generate 2.5D Relief</span>
              </>
            )}
          </button>

          {/* Generate 3D Asset Now Button */}
          <button
            onClick={onGenerate3D}
            disabled={loading || generation25DLoading}
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#FF7F50] hover:bg-[#e06336] text-white text-sm font-semibold shadow-[0_0_28px_rgba(255,127,80,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer"
          >
            {loading ? (
              <>
                <span className="material-symbols-outlined text-lg animate-spin">refresh</span>
                <span>{statusMessage || 'Synthesizing Mesh (SDF)...'}</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-lg">bolt</span>
                <span>Generate 3D Asset Now</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
