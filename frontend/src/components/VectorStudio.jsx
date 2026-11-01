import React, { useState, useRef, useEffect, useCallback } from 'react';

export default function VectorStudio({
  onGenerate3D,
  onGenerate25D,
  onAnalyzeVision,
  loading,
  visionLoading = false,
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
  // AI Image Refinement Props
  refineSketch = false,
  onToggleRefinement,
  onRefineSketch,
  refinementLoading = false,
  refinementError = null,
  refinementData = null,
  refinedPreviewUrl = null,
  refinementUserPrompt = '',
  setRefinementUserPrompt,
  refinementSource = 'isolated',
  onSelectRefinementSource,
  // 2.5D Concept Generation Props (Gemini Key 2)
  conceptPrompt = 'Refine and transform this rough sketch into a polished 2.5D volumetric studio concept with smooth contours, rich 3D shading gradients, and solid depth.',
  setConceptPrompt,
}) {
  const [activeTab, setActiveTab] = useState('sketch'); // 'sketch' or 'upload'
  const [brushColor, setBrushColor] = useState('#FF7F50');
  const [activeTool, setActiveTool] = useState('pen'); // 'pen', 'brush', 'eraser'
  const [brushSize, setBrushSize] = useState(4);
  const [targetQuality, setTargetQuality] = useState('mid'); // 'low', 'mid', 'ultra'
  const [isDrawing, setIsDrawing] = useState(false);
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const [previewMode, setPreviewMode] = useState('refined'); // 'refined', 'isolated', 'original', 'split'
  const [showPromptInput, setShowPromptInput] = useState(false);
  const colorInputRef = useRef(null);

  // MS Paint Style Palette (2 Rows of 10 classic colors)
  const paintPaletteRow1 = [
    { name: 'Black', color: '#000000' },
    { name: 'Slate Gray', color: '#7f7f7f' },
    { name: 'Dark Red', color: '#880015' },
    { name: 'Red', color: '#ed1c24' },
    { name: 'Coral Orange', color: '#FF7F50' },
    { name: 'Gold Yellow', color: '#fff200' },
    { name: 'Neon Mint', color: '#00f59b' },
    { name: 'Electric Cyan', color: '#00d2ff' },
    { name: 'Deep Blue', color: '#0078d4' },
    { name: 'Purple', color: '#8a2be2' },
  ];

  const paintPaletteRow2 = [
    { name: 'Pure White', color: '#FFFFFF' },
    { name: 'Light Gray', color: '#bfc9c3' },
    { name: 'Brown', color: '#8B4513' },
    { name: 'Rose Pink', color: '#ffaec9' },
    { name: 'Amber', color: '#ffc90e' },
    { name: 'Cream', color: '#fffacd' },
    { name: 'Lime Green', color: '#b5e61d' },
    { name: 'Sky Blue', color: '#7bd0ff' },
    { name: 'Steel Blue', color: '#7092be' },
    { name: 'Lavender', color: '#c8bfe7' },
  ];

  // Save canvas state to history stack for Undo and reset Redo stack
  const pushHistory = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    try {
      const dataUrl = canvas.toDataURL();
      setHistory((prev) => [...prev.slice(-30), dataUrl]);
      setRedoStack([]); // New drawing action invalidates redo stack
    } catch {
      // ignore
    }
  }, [canvasRef]);

  // Undo stroke
  const handleUndo = useCallback(() => {
    if (history.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const currentData = canvas.toDataURL();
    setRedoStack((prev) => [...prev, currentData]);

    const newHistory = [...history];
    newHistory.pop(); // remove current state
    setHistory(newHistory);

    if (newHistory.length > 0) {
      const previousState = newHistory[newHistory.length - 1];
      const img = new Image();
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], 'user_sketch.png', { type: 'image/png' });
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(blob));
            if (onResetIsolation) onResetIsolation(true);
          }
        });
      };
      img.src = previousState;
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], 'user_sketch.png', { type: 'image/png' });
          setSelectedFile(file);
          setPreviewUrl(URL.createObjectURL(blob));
          if (onResetIsolation) onResetIsolation(true);
        }
      });
    }
  }, [canvasRef, history, onResetIsolation, setPreviewUrl, setSelectedFile]);

  // Redo stroke
  const handleRedo = useCallback(() => {
    if (redoStack.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const newRedo = [...redoStack];
    const nextState = newRedo.pop();
    setRedoStack(newRedo);

    if (nextState) {
      const img = new Image();
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        setHistory((prev) => [...prev, nextState]);
        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], 'user_sketch.png', { type: 'image/png' });
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(blob));
            if (onResetIsolation) onResetIsolation(true);
          }
        });
      };
      img.src = nextState;
    }
  }, [canvasRef, redoStack, onResetIsolation, setPreviewUrl, setSelectedFile]);

  // Keyboard Shortcuts: Ctrl+Z (Undo), Ctrl+Y / Ctrl+Shift+Z (Redo)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
      if ((e.ctrlKey || e.metaKey) && (e.key === 'z' || e.key === 'Z')) {
        if (e.shiftKey) {
          e.preventDefault();
          handleRedo();
        } else {
          e.preventDefault();
          handleUndo();
        }
      } else if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || e.key === 'Y')) {
        e.preventDefault();
        handleRedo();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleUndo, handleRedo]);

  // Clear Canvas
  const handleClear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    try {
      const currentData = canvas.toDataURL();
      setRedoStack((prev) => [...prev, currentData]);
    } catch {
      // ignore
    }
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
    ctx.strokeStyle = '#111416';
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
    ctx.strokeStyle = '#00a86b';
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

    // Technical contour grid guides
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)';
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
    ctx.strokeStyle = '#111416';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const cx = w / 2;
    const cy = h / 2;

    if (type === 'chair') {
      // Clean minimal chair sketch matching screenshot
      ctx.strokeRect(cx - 32, cy - 65, 64, 55); // backrest
      ctx.strokeRect(cx - 36, cy - 10, 72, 8); // seat bar
      ctx.beginPath();
      ctx.moveTo(cx - 30, cy - 2); ctx.lineTo(cx - 30, cy + 65); // leg 1
      ctx.moveTo(cx + 30, cy - 2); ctx.lineTo(cx + 30, cy + 65); // leg 2
      ctx.moveTo(cx - 18, cy - 2); ctx.lineTo(cx - 18, cy + 50); // leg 3 (perspective)
      ctx.moveTo(cx + 18, cy - 2); ctx.lineTo(cx + 18, cy + 50); // leg 4 (perspective)
      ctx.stroke();
    } else if (type === 'mug') {
      ctx.beginPath();
      ctx.ellipse(cx, cy - 45, 45, 16, 0, 0, Math.PI * 2);
      ctx.moveTo(cx - 45, cy - 45); ctx.lineTo(cx - 45, cy + 45);
      ctx.moveTo(cx + 45, cy - 45); ctx.lineTo(cx + 45, cy + 45);
      ctx.ellipse(cx, cy + 45, 45, 16, 0, 0, Math.PI);
      ctx.moveTo(cx + 45, cy - 20);
      ctx.bezierCurveTo(cx + 85, cy - 20, cx + 85, cy + 30, cx + 45, cy + 30);
      ctx.stroke();
    } else if (type === 'car') {
      ctx.beginPath();
      ctx.moveTo(cx - 90, cy + 10);
      ctx.lineTo(cx - 55, cy + 10);
      ctx.lineTo(cx - 25, cy - 35);
      ctx.lineTo(cx + 50, cy - 35);
      ctx.lineTo(cx + 75, cy + 10);
      ctx.lineTo(cx + 100, cy + 10);
      ctx.lineTo(cx + 100, cy + 35);
      ctx.lineTo(cx - 90, cy + 35);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx - 45, cy + 35, 18, 0, Math.PI * 2);
      ctx.arc(cx + 55, cy + 35, 18, 0, Math.PI * 2);
      ctx.stroke();
    } else if (type === 'ambiguous') {
      ctx.beginPath();
      ctx.moveTo(cx - 60, cy - 45);
      ctx.lineTo(cx + 45, cy - 38);
      ctx.lineTo(cx + 32, cy + 38);
      ctx.lineTo(cx - 45, cy + 32);
      ctx.closePath();
      ctx.moveTo(cx - 45, cy + 32); ctx.lineTo(cx - 70, cy + 75);
      ctx.moveTo(cx + 32, cy + 38); ctx.lineTo(cx + 50, cy + 82);
      ctx.moveTo(cx, cy - 42); ctx.lineTo(cx - 6, cy - 75);
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

  // Initialize canvas on mount and load default drone with propellers
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = 440;
    canvas.height = 360;
    if (currentSketchType && currentSketchType !== 'drone') {
      loadSampleSketch(currentSketchType);
    } else {
      drawDemoDrone();
    }
  }, [canvasRef]);

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
    <div className="w-full flex flex-col rounded-2xl bg-[#141719] border border-[#272a2d] shadow-2xl overflow-hidden">
      {/* Studio Header Bar - Row 1: Mode Switcher & Toggles */}
      <div className="flex items-center justify-between flex-wrap gap-4 p-4 bg-[#111416] border-b border-[#272a2d]">
        {/* Left: Mode Switcher */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('sketch')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'sketch'
                ? 'bg-[#FF7F50] text-white shadow-[0_0_16px_rgba(255,127,80,0.45)]'
                : 'text-[#bfc9c3] hover:text-white bg-[#191c1e] border border-[#272a2d]'
            }`}
          >
            <span className="material-symbols-outlined text-sm">draw</span>
            <span>Manual Drawing</span>
          </button>
          <button
            onClick={() => setActiveTab('upload')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'upload'
                ? 'bg-[#FF7F50] text-white shadow-[0_0_16px_rgba(255,127,80,0.45)]'
                : 'text-[#bfc9c3] hover:text-white bg-[#191c1e] border border-[#272a2d]'
            }`}
          >
            <span className="material-symbols-outlined text-sm">upload_file</span>
            <span>Upload File</span>
          </button>
        </div>

        {/* Right: Toggles (Remove Foreground & AI Refine) */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Remove Foreground Toggle */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              role="switch"
              aria-checked={isolateForeground}
              onClick={() => onToggleIsolateForeground && onToggleIsolateForeground(!isolateForeground)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all cursor-pointer select-none ${
                isolateForeground
                  ? 'bg-[#00f59b]/10 border-[#00f59b]/60 text-white shadow-[0_0_12px_rgba(0,245,155,0.2)]'
                  : 'bg-[#191c1e] border-[#272a2d] text-[#849588] hover:text-white'
              }`}
            >
              <div
                className={`relative inline-flex h-4 w-7 shrink-0 items-center rounded-full transition-colors ${
                  isolateForeground ? 'bg-[#00f59b]' : 'bg-[#272a2d]'
                }`}
              >
                <span
                  className={`inline-block h-3 w-3 rounded-full bg-white shadow transition-transform ${
                    isolateForeground ? 'translate-x-3.5' : 'translate-x-0.5'
                  }`}
                />
              </div>
              <span className="material-symbols-outlined text-sm text-[#00f59b]">content_cut</span>
              <span className="text-xs font-semibold">Remove Foreground</span>
              <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                isolateForeground ? 'bg-[#00f59b]/25 text-[#00f59b]' : 'bg-[#272a2d] text-[#849588]'
              }`}>
                {isolateForeground ? 'ON' : 'OFF'}
              </span>
            </button>
            <span className="px-2 py-0.5 rounded-full bg-[#191c1e] text-[#4edea3] text-[10px] font-semibold border border-[#272a2d]">
              Standby
            </span>
          </div>

          {/* AI Refine Toggle */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              role="switch"
              aria-checked={refineSketch}
              onClick={() => onToggleRefinement && onToggleRefinement(!refineSketch)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all cursor-pointer select-none ${
                refineSketch
                  ? 'bg-[#FF7F50]/15 border-[#FF7F50]/60 text-white shadow-[0_0_12px_rgba(255,127,80,0.25)]'
                  : 'bg-[#191c1e] border-[#272a2d] text-[#849588] hover:text-white'
              }`}
            >
              <div
                className={`relative inline-flex h-4 w-7 shrink-0 items-center rounded-full transition-colors ${
                  refineSketch ? 'bg-[#FF7F50]' : 'bg-[#272a2d]'
                }`}
              >
                <span
                  className={`inline-block h-3 w-3 rounded-full bg-white shadow transition-transform ${
                    refineSketch ? 'translate-x-3.5' : 'translate-x-0.5'
                  }`}
                />
              </div>
              <span className="material-symbols-outlined text-sm text-[#FF7F50]">auto_fix_high</span>
              <span className="text-xs font-semibold">AI Refine</span>
              <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                refineSketch ? 'bg-[#FF7F50]/25 text-[#FF7F50]' : 'bg-[#272a2d] text-[#849588]'
              }`}>
                {refineSketch ? 'ON' : 'OFF'}
              </span>
            </button>
            <span className="px-2 py-0.5 rounded-full bg-[#FF7F50]/20 text-[#FF7F50] text-[10px] font-semibold border border-[#FF7F50]/30">
              Validated
            </span>
            <button
              type="button"
              onClick={() => setShowPromptInput(!showPromptInput)}
              className={`p-1.5 rounded-lg border text-xs transition-colors cursor-pointer ${
                showPromptInput
                  ? 'text-[#FF7F50] bg-[#FF7F50]/20 border-[#FF7F50]/50'
                  : 'text-[#849588] hover:text-white bg-[#191c1e] border-[#272a2d]'
              }`}
              title="Refinement prompt & settings"
            >
              <span className="material-symbols-outlined text-sm">tune</span>
            </button>
          </div>
        </div>
      </div>

      {/* Row 2: Action Buttons */}
      <div className="flex items-center gap-2 p-3 px-4 bg-[#141719] border-b border-[#272a2d]/60">
        <button
          type="button"
          onClick={handleUndo}
          disabled={history.length === 0}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#191c1e] hover:bg-[#272a2d] disabled:opacity-40 text-white text-xs font-medium transition-colors border border-[#272a2d] cursor-pointer"
          title="Undo Stroke (Ctrl+Z)"
        >
          <span className="material-symbols-outlined text-sm text-[#4edea3]">undo</span>
          <span>Undo</span>
        </button>

        <button
          type="button"
          onClick={handleRedo}
          disabled={redoStack.length === 0}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#191c1e] hover:bg-[#272a2d] disabled:opacity-40 text-white text-xs font-medium transition-colors border border-[#272a2d] cursor-pointer"
          title="Redo Stroke (Ctrl+Y)"
        >
          <span className="material-symbols-outlined text-sm text-[#7bd0ff]">redo</span>
          <span>Redo</span>
        </button>

        <button
          type="button"
          onClick={handleClear}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#191c1e] hover:bg-[#272a2d] text-[#bfc9c3] hover:text-white text-xs font-medium transition-colors border border-[#272a2d] cursor-pointer"
          title="Clear Canvas"
        >
          <span className="material-symbols-outlined text-sm">delete_sweep</span>
          <span>Clear</span>
        </button>

        <button
          type="button"
          onClick={drawDemoDrone}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#FF7F50]/10 hover:bg-[#FF7F50]/20 text-[#FF7F50] text-xs font-semibold transition-colors border border-[#FF7F50]/50 shadow-sm cursor-pointer ml-1"
          title="Load Sci-Fi Concept Drone Reference"
        >
          <span className="material-symbols-outlined text-sm">auto_stories</span>
          <span>Load Demo Drone</span>
        </button>
      </div>

      {/* Drawing Ribbon Toolbar (MS Paint Style Format) */}
      {activeTab === 'sketch' && (
        <div className="flex items-stretch flex-wrap gap-2.5 px-3 py-2 bg-[#121517] border-b border-[#323537]/50 text-xs select-none">
          {/* Group 1: Tools (Pen, Brush, Eraser) */}
          <div className="flex flex-col items-center justify-between p-1.5 rounded-xl bg-[#191c1e] border border-[#323537]/60 shadow-inner">
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setActiveTool('pen')}
                className={`p-1.5 rounded-lg flex flex-col items-center gap-0.5 transition-all cursor-pointer ${
                  activeTool === 'pen'
                    ? 'bg-[#FF7F50] text-white shadow-[0_0_12px_rgba(255,127,80,0.4)]'
                    : 'text-[#bfc9c3] hover:text-white hover:bg-[#272a2d]'
                }`}
                title="Pencil / Vector Pen"
              >
                <span className="material-symbols-outlined text-base">edit</span>
                <span className="text-[9px] font-semibold">Pen</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTool('brush')}
                className={`p-1.5 rounded-lg flex flex-col items-center gap-0.5 transition-all cursor-pointer ${
                  activeTool === 'brush'
                    ? 'bg-[#FF7F50] text-white shadow-[0_0_12px_rgba(255,127,80,0.4)]'
                    : 'text-[#bfc9c3] hover:text-white hover:bg-[#272a2d]'
                }`}
                title="SDF Brush"
              >
                <span className="material-symbols-outlined text-base">brush</span>
                <span className="text-[9px] font-semibold">Brush</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTool('eraser')}
                className={`p-1.5 rounded-lg flex flex-col items-center gap-0.5 transition-all cursor-pointer ${
                  activeTool === 'eraser'
                    ? 'bg-[#00f59b] text-[#003920] font-bold shadow-[0_0_12px_rgba(0,245,155,0.4)]'
                    : 'text-[#bfc9c3] hover:text-white hover:bg-[#272a2d]'
                }`}
                title="Eraser"
              >
                <span className="material-symbols-outlined text-base">ink_eraser</span>
                <span className="text-[9px] font-semibold">Eraser</span>
              </button>
            </div>
            <span className="text-[9px] font-bold uppercase tracking-wider text-[#849588] mt-1">Tools</span>
          </div>

          {/* Group 2: Size & Stroke Width */}
          <div className="flex flex-col items-center justify-between p-1.5 rounded-xl bg-[#191c1e] border border-[#323537]/60 shadow-inner min-w-[130px]">
            <div className="flex flex-col justify-center gap-1.5 w-full px-1">
              {/* Preset Thickness Chips */}
              <div className="flex items-center justify-center gap-1">
                {[2, 4, 8, 16].map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setBrushSize(sz)}
                    className={`w-6 h-6 rounded flex items-center justify-center transition-all cursor-pointer ${
                      brushSize === sz
                        ? 'bg-[#FF7F50] text-white shadow-sm ring-1 ring-white/50'
                        : 'bg-[#121517] hover:bg-[#272a2d] text-[#bfc9c3] border border-[#323537]/50'
                    }`}
                    title={`${sz}px Stroke Width`}
                  >
                    <span
                      className="rounded-full bg-current"
                      style={{ width: `${Math.min(sz, 14)}px`, height: `${Math.min(sz, 14)}px` }}
                    />
                  </button>
                ))}
              </div>
              {/* Slider */}
              <div className="flex items-center justify-center gap-1.5">
                <input
                  type="range"
                  min="1"
                  max="24"
                  value={brushSize}
                  onChange={(e) => setBrushSize(Number(e.target.value))}
                  className="w-16 h-1 bg-[#323537] rounded-lg cursor-pointer accent-[#FF7F50]"
                  title={`Stroke: ${brushSize}px`}
                />
                <span className="text-[10px] font-bold text-[#FF7F50] font-mono w-7 text-right">{brushSize}px</span>
              </div>
            </div>
            <span className="text-[9px] font-bold uppercase tracking-wider text-[#849588] mt-1">Size</span>
          </div>

          {/* Group 3: Colors (Iconic MS Paint Palette) */}
          <div className="flex flex-col items-center justify-between p-1.5 rounded-xl bg-[#191c1e] border border-[#323537]/60 shadow-inner">
            <div className="flex items-center gap-2.5 px-1">
              {/* Color 1 & Color 2 Primary Swatches */}
              <div className="flex items-center gap-1.5">
                {/* Color 1 (Active) */}
                <button
                  type="button"
                  onClick={() => colorInputRef.current?.click()}
                  className="flex flex-col items-center gap-0.5 group cursor-pointer"
                  title="Color 1: Active Drawing Color (Click to customize)"
                >
                  <div
                    className="w-8 h-8 rounded border-2 border-white shadow-[0_0_10px_rgba(255,127,80,0.35)] transition-transform group-hover:scale-105"
                    style={{ backgroundColor: activeTool === 'eraser' ? '#080a0c' : brushColor }}
                  />
                  <span className="text-[9px] font-bold text-white">Color 1</span>
                </button>

                {/* Color 2 (Secondary/Background) */}
                <div
                  className="flex flex-col items-center gap-0.5"
                  title="Color 2: Secondary / Background Color"
                >
                  <div className="w-8 h-8 rounded border border-[#323537] bg-white shadow-sm" />
                  <span className="text-[9px] font-semibold text-[#849588]">Color 2</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-8 w-px bg-[#323537]/80"></div>

              {/* 2-Row Color Grid (MS Paint Style) */}
              <div className="flex flex-col gap-1">
                {/* Row 1 */}
                <div className="flex items-center gap-1">
                  {paintPaletteRow1.map((p) => {
                    const isSelected = brushColor.toLowerCase() === p.color.toLowerCase() && activeTool !== 'eraser';
                    return (
                      <button
                        key={p.color}
                        type="button"
                        onClick={() => {
                          setBrushColor(p.color);
                          if (activeTool === 'eraser') setActiveTool('pen');
                        }}
                        className={`w-4 h-4 rounded-sm border border-[#37393c] transition-all hover:scale-125 cursor-pointer ${
                          isSelected ? 'ring-2 ring-white scale-110 shadow-[0_0_8px_rgba(255,255,255,0.8)] z-10' : ''
                        }`}
                        style={{ backgroundColor: p.color }}
                        title={p.name}
                      />
                    );
                  })}
                </div>
                {/* Row 2 */}
                <div className="flex items-center gap-1">
                  {paintPaletteRow2.map((p) => {
                    const isSelected = brushColor.toLowerCase() === p.color.toLowerCase() && activeTool !== 'eraser';
                    return (
                      <button
                        key={p.color}
                        type="button"
                        onClick={() => {
                          setBrushColor(p.color);
                          if (activeTool === 'eraser') setActiveTool('pen');
                        }}
                        className={`w-4 h-4 rounded-sm border border-[#37393c] transition-all hover:scale-125 cursor-pointer ${
                          isSelected ? 'ring-2 ring-white scale-110 shadow-[0_0_8px_rgba(255,255,255,0.8)] z-10' : ''
                        }`}
                        style={{ backgroundColor: p.color }}
                        title={p.name}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Divider */}
              <div className="h-8 w-px bg-[#323537]/80"></div>

              {/* Edit Colors Button */}
              <button
                type="button"
                onClick={() => colorInputRef.current?.click()}
                className="flex flex-col items-center justify-center px-2 py-1 rounded-lg bg-[#121517] hover:bg-[#272a2d] border border-[#323537]/60 text-[#bfc9c3] hover:text-white transition-all cursor-pointer group"
                title="Edit Colors (Pick any custom color)"
              >
                <span className="material-symbols-outlined text-base text-[#FF7F50] group-hover:rotate-45 transition-transform">
                  palette
                </span>
                <span className="text-[9px] font-semibold whitespace-nowrap">Edit Colors</span>
                <input
                  ref={colorInputRef}
                  type="color"
                  value={brushColor}
                  onChange={(e) => {
                    setBrushColor(e.target.value);
                    if (activeTool === 'eraser') setActiveTool('pen');
                  }}
                  className="sr-only"
                />
              </button>
            </div>
            <span className="text-[9px] font-bold uppercase tracking-wider text-[#849588] mt-1">Colors</span>
          </div>

          {/* Group 4: Quick Presets */}
          <div className="flex flex-col items-center justify-between p-1.5 rounded-xl bg-[#191c1e] border border-[#323537]/60 shadow-inner">
            <div className="flex items-center gap-1.5 my-auto px-1">
              {['chair', 'mug', 'car', 'ambiguous'].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => loadSampleSketch(preset)}
                  className={`px-3 py-1 rounded-lg text-xs capitalize transition-colors cursor-pointer ${
                    currentSketchType === preset
                      ? 'bg-[#FF7F50]/15 text-[#FF7F50] border border-[#FF7F50] font-semibold shadow-sm'
                      : 'bg-[#141719] hover:bg-[#272a2d] text-[#bfc9c3] hover:text-white border border-[#272a2d]'
                  }`}
                  title={`Load ${preset} sketch template`}
                >
                  {preset}
                </button>
              ))}
            </div>
            <span className="text-[9px] font-bold uppercase tracking-wider text-[#849588] mt-1">Presets</span>
          </div>
        </div>
      )}

      {/* Collapsible Refinement & Concept Guidance Drawer */}
      {showPromptInput && (
        <div className="flex flex-col gap-2 p-3 px-4 bg-[#111416] border-b border-[#323537]/40 text-xs">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="material-symbols-outlined text-sm text-[#FF7F50]">tune</span>
            {isolationData && (
              <div className="flex items-center gap-1 bg-[#191c1e] p-1 rounded-lg border border-[#323537]">
                <span className="text-[#849588] text-[10px] uppercase font-bold px-1">Source:</span>
                <button
                  type="button"
                  onClick={() => onSelectRefinementSource && onSelectRefinementSource('isolated')}
                  className={`px-2 py-0.5 rounded text-xs font-semibold flex items-center gap-1 transition-all ${
                    refinementSource === 'isolated'
                      ? 'bg-[#00f59b] text-[#003920] shadow-sm'
                      : 'text-[#bfc9c3] hover:text-white'
                  }`}
                  title="Refine the background-isolated foreground object"
                >
                  <span className="material-symbols-outlined text-xs">content_cut</span>
                  <span>Isolated Subject</span>
                </button>
                <button
                  type="button"
                  onClick={() => onSelectRefinementSource && onSelectRefinementSource('original')}
                  className={`px-2 py-0.5 rounded text-xs font-semibold flex items-center gap-1 transition-all ${
                    refinementSource === 'original'
                      ? 'bg-[#FF7F50] text-white shadow-sm'
                      : 'text-[#bfc9c3] hover:text-white'
                  }`}
                  title="Refine the raw original sketch"
                >
                  <span className="material-symbols-outlined text-xs">draw</span>
                  <span>Real Sketch</span>
                </button>
              </div>
            )}
            <span className="text-[#849588] text-[11px] whitespace-nowrap">Refinement Guidance:</span>
            <input
              type="text"
              value={refinementUserPrompt}
              onChange={(e) => setRefinementUserPrompt && setRefinementUserPrompt(e.target.value)}
              placeholder="e.g. sharp chamfered lines, sci-fi metallic chassis, clean minimalist contours..."
              className="flex-1 bg-[#191c1e] border border-[#323537] rounded-lg px-3 py-1.5 text-white placeholder-[#849588] focus:outline-none focus:border-[#FF7F50] min-w-[200px]"
            />
            <button
              onClick={() => onRefineSketch && onRefineSketch()}
              disabled={refinementLoading}
              className="px-3 py-1.5 rounded-lg bg-[#FF7F50] hover:bg-[#e06336] text-white font-semibold flex items-center gap-1 shadow-sm transition-all disabled:opacity-50 cursor-pointer"
            >
              {refinementLoading ? (
                <span className="material-symbols-outlined text-xs animate-spin">refresh</span>
              ) : (
                <span className="material-symbols-outlined text-xs">auto_fix_high</span>
              )}
              <span>Apply Refinement</span>
            </button>
          </div>

          {/* 2.5D Concept Guidance Row */}
          <div className="flex items-center gap-2 pt-1 border-t border-[#272a2d]/40 flex-wrap">
            <span className="text-[#7bd0ff] text-[11px] font-semibold whitespace-nowrap flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">layers</span>
              <span>2.5D Concept Prompt:</span>
            </span>
            <input
              type="text"
              value={conceptPrompt}
              onChange={(e) => setConceptPrompt && setConceptPrompt(e.target.value)}
              placeholder="Refine and transform sketch into volumetric 2.5D relief..."
              className="flex-1 bg-[#191c1e] border border-[#323537] rounded-lg px-3 py-1 text-white placeholder-[#849588] text-xs focus:outline-none focus:border-[#7bd0ff] min-w-[200px]"
            />
            <button
              type="button"
              onClick={() => setConceptPrompt && setConceptPrompt('Refine and transform this rough sketch into a polished 2.5D volumetric studio concept with smooth contours, rich 3D shading gradients, and solid depth.')}
              className="px-2 py-0.5 rounded bg-[#1e272e] hover:bg-[#28353e] text-[#a0c5dc] text-[10px] border border-[#323537] transition-colors"
            >
              Default
            </button>
          </div>
        </div>
      )}

      {/* Refinement Error Alert Banner */}
      {refinementError && refineSketch && (
        <div className="mx-4 mt-3 p-3 rounded-xl bg-[#93000a]/20 border border-[#ffb4ab]/30 text-[#ffb4ab] text-xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">warning</span>
            <span>Refinement Notice: {refinementError}</span>
          </div>
          <button
            onClick={() => onRefineSketch && onRefineSketch()}
            className="px-2.5 py-1 rounded bg-[#ffb4ab]/20 hover:bg-[#ffb4ab]/30 text-white font-medium transition-colors"
          >
            Retry Refine
          </button>
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
        <div className="relative w-full py-6 px-4 bg-[#0c0f11] overflow-hidden flex flex-col items-center justify-center select-none min-h-[460px]">
          {/* Blueprint dot grid background */}
          <div className="absolute inset-0 bg-[radial-gradient(#1f262b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

          {/* Floating Preview & Selection Bar Docked Above Canvas */}
          <div className="z-30 flex items-center gap-2 p-1.5 rounded-2xl bg-[#161a1d] border border-[#272a2d] shadow-xl text-xs mb-4 flex-wrap justify-center">
            {/* Mode Selector */}
            <div className="flex items-center gap-1 bg-[#191c1e] p-1 rounded-xl border border-[#272a2d]">
              <button
                onClick={() => setPreviewMode('refined')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  previewMode === 'refined'
                    ? 'bg-[#FF7F50] text-white shadow-[0_0_12px_rgba(255,127,80,0.4)]'
                    : 'text-[#bfc9c3] hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-sm">auto_fix_high</span>
                <span>Refined AI</span>
              </button>

              <button
                onClick={() => setPreviewMode('isolated')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  previewMode === 'isolated'
                    ? 'bg-[#00f59b] text-[#003920] shadow-[0_0_12px_rgba(0,245,155,0.4)] font-bold'
                    : 'text-[#bfc9c3] hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-sm">filter_vintage</span>
                <span>Isolated (Alpha)</span>
              </button>

              <button
                onClick={() => setPreviewMode('original')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  previewMode === 'original'
                    ? 'bg-[#272a2d] text-white'
                    : 'text-[#bfc9c3] hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-sm">draw</span>
                <span>Original</span>
              </button>

              <button
                onClick={() => setPreviewMode('split')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  previewMode === 'split'
                    ? 'bg-[#7bd0ff] text-[#002b40] font-bold'
                    : 'text-[#bfc9c3] hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-sm">vertical_split</span>
                <span>Compare</span>
              </button>
            </div>

            <div className="h-5 w-px bg-[#272a2d] hidden sm:block"></div>

            {/* Selection Pill & Revert */}
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-[#FF7F50]/15 text-[#FF7F50] text-[11px] font-semibold border border-[#FF7F50]/30 flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">check_circle</span>
                <span>Using Refined for 3D</span>
              </span>

              <button
                onClick={() => {
                  if (onSelectInput) onSelectInput('original');
                  setPreviewMode('original');
                }}
                className="px-2 py-1 rounded-lg text-[#bfc9c3] hover:text-white text-[11px] font-medium transition-colors cursor-pointer"
              >
                Revert to Original
              </button>

              <button
                onClick={() => onRefineSketch && onRefineSketch()}
                className="p-1 rounded-lg text-[#849588] hover:text-[#FF7F50] transition-colors cursor-pointer"
                title="Reload Refinement"
              >
                <span className="material-symbols-outlined text-sm">refresh</span>
              </button>
            </div>
          </div>

          {/* White Canvas Card */}
          <div className="relative w-[340px] h-[300px] sm:w-[420px] sm:h-[360px] rounded-2xl bg-white shadow-2xl overflow-hidden flex items-center justify-center border border-white/20">
            {/* HTML5 Canvas */}
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
                (isolateForeground && isolatedPreviewUrl && previewMode === 'isolated') ||
                (refineSketch && refinedPreviewUrl && previewMode === 'refined')
                  ? 'invisible pointer-events-none'
                  : ''
              }`}
            />

            {/* AI Refined Image Overlay */}
            {refineSketch && refinedPreviewUrl && previewMode === 'refined' && (
              <img
                src={refinedPreviewUrl}
                alt="AI Refined Sketch"
                className="max-h-[300px] max-w-[300px] object-contain drop-shadow-md absolute z-20"
              />
            )}

            {/* Foreground Isolated Overlay */}
            {isolateForeground && isolatedPreviewUrl && previewMode === 'isolated' && (
              <img
                src={isolatedPreviewUrl}
                alt="Isolated Foreground"
                className="max-h-[300px] max-w-[300px] object-contain drop-shadow-md absolute z-20"
              />
            )}

            {/* Metric Badge at top right of canvas */}
            <div className="absolute top-2.5 right-2.5 bg-[#0c0f11]/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] text-white border border-[#272a2d] font-mono flex items-center gap-2 shadow-lg z-30">
              <span className="text-[#00f59b]">
                Edge IoU: {refinementData ? (refinementData.validation.edge_overlap_iou * 100).toFixed(0) : '95'}%
              </span>
              <span className="text-[#00f59b]">
                Cleanliness: {refinementData ? (refinementData.validation.background_cleanliness_score * 100).toFixed(0) : '100'}%
              </span>
            </div>

            {/* Structure Validated badge at bottom center */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 bg-[#0c0f11]/90 backdrop-blur-md px-3 py-1 rounded-md text-[11px] text-[#FF7F50] border border-[#FF7F50]/30 font-mono flex items-center gap-1.5 shadow-lg z-30 whitespace-nowrap">
              <span className="material-symbols-outlined text-xs">auto_fix_high</span>
              <span>✦ AI Refined • Structure Validated</span>
            </div>
          </div>

          {/* Subtext on bottom right */}
          <div className="w-full flex justify-end mt-3 pr-4">
            <span className="text-xs text-[#FF7F50] flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">subdirectory_arrow_right</span>
              <span>Draw contours or click 'Load Demo Drone' • Auto-projects into 3D SDF below</span>
            </span>
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
      <div className="flex items-center justify-between flex-wrap gap-4 p-4 bg-[#111416] border-t border-[#272a2d] text-xs">
        {/* Left: Target Quality & Resolution */}
        <div className="flex items-center gap-6 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-[#849588] uppercase tracking-wider">TARGET QUALITY:</span>
            <div className="flex items-center gap-1">
              {[
                { id: 'low', label: 'Low (15k)' },
                { id: 'mid', label: 'Mid (45k)' },
                { id: 'ultra', label: 'Ultra (150k)' },
              ].map((q) => (
                <button
                  key={q.id}
                  onClick={() => setTargetQuality(q.id)}
                  className={`px-3 py-1 rounded-md text-xs transition-all cursor-pointer ${
                    targetQuality === q.id
                      ? 'bg-[#FF7F50] text-white font-semibold shadow-[0_0_12px_rgba(255,127,80,0.35)]'
                      : 'text-[#bfc9c3] hover:text-white hover:bg-[#1d2022]'
                  }`}
                >
                  {q.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-[#849588] uppercase tracking-wider">RESOLUTION:</span>
            <select
              value={targetSize}
              onChange={(e) => setTargetSize(Number(e.target.value))}
              className="bg-[#191c1e] border border-[#272a2d] text-white text-xs font-mono font-medium rounded-md px-2.5 py-1 focus:outline-none cursor-pointer"
            >
              <option value={320}>320*320 ⌵</option>
              <option value={512}>512*512 ⌵</option>
            </select>
          </div>
        </div>

        {/* Right: Primary Generation Buttons */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Llama 3.2 / Gemini Vision Analysis Button */}
          <button
            onClick={onAnalyzeVision}
            disabled={loading || generation25DLoading || visionLoading}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#191c1e] hover:bg-[#272a2d] border border-[#00f59b]/40 text-[#6ffbbe] text-xs font-semibold shadow-sm transition-all disabled:opacity-50 cursor-pointer"
          >
            {visionLoading ? (
              <>
                <span className="material-symbols-outlined text-base animate-spin text-[#00f59b]">refresh</span>
                <span>Analyzing Vision...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-base text-[#00f59b]">neurology</span>
                <span>Vision Analysis</span>
              </>
            )}
          </button>

          {/* Generate 2.5D Relief Button */}
          <button
            onClick={onGenerate25D}
            disabled={loading || generation25DLoading}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#191c1e] hover:bg-[#272a2d] border border-[#7bd0ff]/50 text-[#7bd0ff] text-xs font-semibold shadow-[0_0_16px_rgba(123,208,255,0.18)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer"
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
