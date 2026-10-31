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
              <span>Manual Drawing</span>
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
              <span>Upload File</span>
            </button>
          </div>

          <div className="h-5 w-px bg-[#323537]/50 hidden sm:block"></div>

          {/* Improved Isolate Foreground Toggle Switch Button */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              role="switch"
              aria-checked={isolateForeground}
              onClick={() => onToggleIsolateForeground && onToggleIsolateForeground(!isolateForeground)}
              className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-200 cursor-pointer select-none ${
                isolateForeground
                  ? 'bg-[#00f59b]/15 border-[#00f59b]/70 text-white shadow-[0_0_14px_rgba(0,245,155,0.25)]'
                  : 'bg-[#141719] border-[#323537] hover:border-[#43474b] text-[#bfc9c3] hover:text-white'
              }`}
              title={isolateForeground ? "Remove Foreground: Active (Click to toggle)" : "Remove Foreground: Standby (Click to toggle)"}
            >
              {/* Smooth Animated Toggle Switch Track */}
              <div
                className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full p-0.5 transition-colors duration-200 ease-in-out ${
                  isolateForeground ? 'bg-[#00f59b]' : 'bg-[#2a2d30]'
                }`}
              >
                <span
                  style={{
                    transform: isolateForeground ? 'translateX(16px)' : 'translateX(0px)',
                  }}
                  className="inline-block h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out pointer-events-none"
                />
              </div>

              <span className="flex items-center gap-1.5 text-xs font-semibold">
                <span className={`material-symbols-outlined text-sm ${isolateForeground ? 'text-[#00f59b]' : 'text-[#849588]'}`}>
                  content_cut
                </span>
                <span>Remove Foreground</span>
              </span>

              {isolationLoading ? (
                <span className="material-symbols-outlined text-xs text-[#00f59b] animate-spin" title="Isolating foreground...">
                  sync
                </span>
              ) : (
                <span
                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase transition-colors ${
                    isolateForeground
                      ? 'bg-[#00f59b]/25 text-[#00f59b] border border-[#00f59b]/40'
                      : 'bg-[#272a2d] text-[#849588]'
                  }`}
                >
                  {isolateForeground ? 'ON' : 'OFF'}
                </span>
              )}
            </button>

            {isolateForeground && isolationData && (
              <span className="px-2 py-0.5 rounded-full bg-[#00f59b]/20 text-[#00f59b] text-[10px] font-semibold border border-[#00f59b]/40">
                {selectedInput === 'isolated' ? 'Active' : 'Standby'}
              </span>
            )}
          </div>

          {/* Improved AI Image Refinement Toggle Switch Button */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              role="switch"
              aria-checked={refineSketch}
              onClick={() => onToggleRefinement && onToggleRefinement(!refineSketch)}
              className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-200 cursor-pointer select-none ${
                refineSketch
                  ? 'bg-[#FF7F50]/15 border-[#FF7F50]/70 text-white shadow-[0_0_14px_rgba(255,127,80,0.25)]'
                  : 'bg-[#141719] border-[#323537] hover:border-[#43474b] text-[#bfc9c3] hover:text-white'
              }`}
              title={refineSketch ? "AI Refine: Active (Click to toggle)" : "AI Refine: Standby (Click to toggle)"}
            >
              {/* Smooth Animated Toggle Switch Track */}
              <div
                className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full p-0.5 transition-colors duration-200 ease-in-out ${
                  refineSketch ? 'bg-[#FF7F50]' : 'bg-[#2a2d30]'
                }`}
              >
                <span
                  style={{
                    transform: refineSketch ? 'translateX(16px)' : 'translateX(0px)',
                  }}
                  className="inline-block h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out pointer-events-none"
                />
              </div>

              <span className="flex items-center gap-1.5 text-xs font-semibold">
                <span className={`material-symbols-outlined text-sm ${refineSketch ? 'text-[#FF7F50]' : 'text-[#849588]'}`}>
                  auto_fix_high
                </span>
                <span>AI Refine</span>
              </span>

              {refinementLoading ? (
                <span className="material-symbols-outlined text-xs text-[#FF7F50] animate-spin" title="Synthesizing refined image...">
                  sync
                </span>
              ) : (
                <span
                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase transition-colors ${
                    refineSketch
                      ? 'bg-[#FF7F50]/25 text-[#FF7F50] border border-[#FF7F50]/40'
                      : 'bg-[#272a2d] text-[#849588]'
                  }`}
                >
                  {refineSketch ? 'ON' : 'OFF'}
                </span>
              )}
            </button>

            {refineSketch && refinementData && (
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${
                  refinementData.is_fallback
                    ? 'bg-[#93000a]/20 text-[#ffb4ab] border-[#ffb4ab]/30'
                    : 'bg-[#FF7F50]/20 text-[#FF7F50] border-[#FF7F50]/40'
                }`}
              >
                {refinementData.is_fallback ? 'Fallback' : 'Validated'}
              </span>
            )}

            <button
              type="button"
              onClick={() => setShowPromptInput(!showPromptInput)}
              className={`p-1.5 rounded-lg border text-xs transition-colors cursor-pointer ${
                showPromptInput
                  ? 'text-[#FF7F50] bg-[#FF7F50]/20 border-[#FF7F50]/50'
                  : 'text-[#849588] hover:text-white bg-[#141719] border-[#323537] hover:border-[#43474b]'
              }`}
              title="Configure custom refinement guidance prompt"
            >
              <span className="material-symbols-outlined text-sm">tune</span>
            </button>
          </div>

          <div className="h-5 w-px bg-[#323537]/50 hidden md:block"></div>
        </div>

        {/* Action Controls (Undo, Redo, Clear, Load Demo) */}
        <div className="flex items-center gap-2">
          {/* Undo Button */}
          <button
            type="button"
            onClick={handleUndo}
            disabled={history.length === 0}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1d2022] hover:bg-[#272a2d] disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-medium transition-colors border border-[#323537]/40 cursor-pointer"
            title="Undo Stroke (Ctrl+Z)"
          >
            <span className="material-symbols-outlined text-sm text-[#4edea3]">undo</span>
            <span>Undo</span>
          </button>

          {/* Redo Button Beside Undo */}
          <button
            type="button"
            onClick={handleRedo}
            disabled={redoStack.length === 0}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1d2022] hover:bg-[#272a2d] disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-medium transition-colors border border-[#323537]/40 cursor-pointer"
            title="Redo Stroke (Ctrl+Y)"
          >
            <span className="material-symbols-outlined text-sm text-[#7bd0ff]">redo</span>
            <span>Redo</span>
          </button>

          <button
            type="button"
            onClick={handleClear}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1d2022] hover:bg-[#93000a] text-[#bfc9c3] hover:text-white text-xs font-medium transition-colors border border-[#323537]/40 cursor-pointer"
            title="Clear Canvas"
          >
            <span className="material-symbols-outlined text-sm">delete_sweep</span>
            <span>Clear</span>
          </button>

          <button
            type="button"
            onClick={drawDemoDrone}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FF7F50]/15 hover:bg-[#FF7F50]/25 text-[#FF7F50] text-xs font-semibold transition-colors border border-[#FF7F50]/40 shadow-[0_0_12px_rgba(255,127,80,0.25)] cursor-pointer"
            title="Load Sci-Fi Concept Drone Reference"
          >
            <span className="material-symbols-outlined text-sm">auto_stories</span>
            <span>Load Demo Drone</span>
          </button>
        </div>
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
          <div className="hidden xl:flex flex-col items-center justify-between p-1.5 rounded-xl bg-[#191c1e] border border-[#323537]/60 shadow-inner">
            <div className="flex items-center gap-1 my-auto">
              {['chair', 'mug', 'car', 'ambiguous'].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => loadSampleSketch(preset)}
                  className={`px-2 py-1 rounded text-[11px] capitalize transition-colors cursor-pointer ${
                    currentSketchType === preset
                      ? 'bg-[#FF7F50]/20 text-[#FF7F50] border border-[#FF7F50]/50 font-semibold'
                      : 'bg-[#121517] hover:bg-[#272a2d] text-[#bfc9c3] hover:text-white border border-[#323537]/40'
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

      {/* Collapsible Refinement Guidance Drawer */}
      {showPromptInput && (
        <div className="flex items-center gap-3 px-4 py-2.5 bg-[#111416] border-b border-[#323537]/40 text-xs">
          <span className="material-symbols-outlined text-sm text-[#FF7F50]">tune</span>
          <span className="text-[#849588] text-[11px] whitespace-nowrap">Refinement Guidance:</span>
          <input
            type="text"
            value={refinementUserPrompt}
            onChange={(e) => setRefinementUserPrompt && setRefinementUserPrompt(e.target.value)}
            placeholder="e.g. sharp chamfered lines, sci-fi metallic chassis, clean minimalist contours..."
            className="flex-1 bg-[#191c1e] border border-[#323537] rounded-lg px-3 py-1.5 text-white placeholder-[#849588] focus:outline-none focus:border-[#FF7F50]"
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
              (isolateForeground && isolatedPreviewUrl && previewMode === 'isolated') ||
              (refineSketch && refinedPreviewUrl && previewMode === 'refined')
                ? 'invisible pointer-events-none'
                : ''
            }`}
          />

          {/* AI Refined Image Preview Overlay */}
          {refineSketch && refinedPreviewUrl && previewMode === 'refined' && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#080a0c]/90 backdrop-blur-sm p-4">
              <div className="relative max-w-md max-h-[360px] w-full h-full rounded-2xl bg-white border border-[#FF7F50]/50 overflow-hidden flex items-center justify-center shadow-2xl">
                <img
                  src={refinedPreviewUrl}
                  alt="AI Refined Sketch"
                  className="max-h-[310px] max-w-[310px] object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
                />
                <div className="absolute bottom-3 left-3 bg-[#0c0f11]/90 backdrop-blur-md px-3 py-1 rounded-md text-[11px] text-[#FF7F50] border border-[#FF7F50]/30 font-mono flex items-center gap-1.5 shadow-lg">
                  <span className="material-symbols-outlined text-xs">auto_fix_high</span>
                  <span>AI Refined • {refinementData?.is_fallback ? 'Fallback Used (Structure Protected)' : 'Structure Validated'}</span>
                </div>
                {refinementData && (
                  <div className="absolute top-3 right-3 bg-[#0c0f11]/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] text-white border border-[#323537] font-mono flex items-center gap-2 shadow-lg">
                    <span className="text-[#00f59b]">Edge IoU: {(refinementData.validation.edge_overlap_iou * 100).toFixed(0)}%</span>
                    <span className="text-[#7bd0ff]">Cleanliness: {(refinementData.validation.background_cleanliness_score * 100).toFixed(0)}%</span>
                  </div>
                )}
              </div>
            </div>
          )}

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
          {(previewMode === 'split' && (refinedPreviewUrl || isolatedPreviewUrl)) && (
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

              {/* Right: Refined AI or Isolated Cutout */}
              <div className="flex flex-col items-center justify-center h-full p-3 rounded-xl bg-[#0c0f11] border border-[#FF7F50]/40">
                <span className="text-[11px] font-semibold text-[#FF7F50] mb-2 uppercase tracking-wider flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">auto_fix_high</span>
                  <span>{refinedPreviewUrl ? 'Refined AI Image' : 'Isolated Object (Alpha)'}</span>
                </span>
                <div
                  className="w-full h-64 flex items-center justify-center rounded-lg overflow-hidden bg-white"
                  style={
                    !refinedPreviewUrl
                      ? {
                          backgroundImage: 'repeating-conic-gradient(#1f262b 0% 25%, #0e1216 0% 50%)',
                          backgroundSize: '20px 20px',
                        }
                      : {}
                  }
                >
                  <img
                    src={refinedPreviewUrl || isolatedPreviewUrl}
                    alt="Processed output"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Output Comparison & Selection Toolbar */}
          {((isolateForeground && isolatedPreviewUrl) || (refineSketch && refinedPreviewUrl)) && (
            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 p-1.5 rounded-2xl bg-[#0c0f11]/95 backdrop-blur-xl border border-[#323537]/80 shadow-[0_4px_24px_rgba(0,0,0,0.6)] text-xs flex-wrap justify-center">
              {/* Preview Mode Selector */}
              <div className="flex items-center gap-1 bg-[#191c1e] p-1 rounded-xl border border-[#272a2d]">
                {refinedPreviewUrl && (
                  <button
                    onClick={() => setPreviewMode('refined')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                      previewMode === 'refined'
                        ? 'bg-[#FF7F50] text-white shadow-[0_0_12px_rgba(255,127,80,0.4)]'
                        : 'text-[#bfc9c3] hover:text-white'
                    }`}
                    title="View AI Refined image"
                  >
                    <span className="material-symbols-outlined text-sm">auto_fix_high</span>
                    <span>Refined AI</span>
                  </button>
                )}

                {isolatedPreviewUrl && (
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
                )}

                <button
                  onClick={() => setPreviewMode('original')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    previewMode === 'original'
                      ? 'bg-[#37393c] text-white'
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
                  title="Compare original and processed side-by-side"
                >
                  <span className="material-symbols-outlined text-sm">vertical_split</span>
                  <span>Compare</span>
                </button>
              </div>

              <div className="h-5 w-px bg-[#323537] hidden sm:block"></div>

              {/* Input Selection Action: Use Selected vs Revert to Original */}
              {selectedInput === 'refined' ? (
                <div className="flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-lg bg-[#FF7F50]/20 text-[#FF7F50] text-[11px] font-semibold border border-[#FF7F50]/40 flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">check_circle</span>
                    <span>Using Refined for 3D</span>
                  </span>
                  <button
                    onClick={() => onSelectInput && onSelectInput('original')}
                    className="px-2.5 py-1 rounded-lg bg-[#1d2022] hover:bg-[#272a2d] text-[#bfc9c3] hover:text-white text-[11px] font-medium border border-[#323537]/60 transition-colors"
                  >
                    Revert to Original
                  </button>
                </div>
              ) : selectedInput === 'isolated' ? (
                <div className="flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-lg bg-[#00f59b]/20 text-[#00f59b] text-[11px] font-semibold border border-[#00f59b]/40 flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">check_circle</span>
                    <span>Using Isolated for 3D</span>
                  </span>
                  <button
                    onClick={() => onSelectInput && onSelectInput('original')}
                    className="px-2.5 py-1 rounded-lg bg-[#1d2022] hover:bg-[#272a2d] text-[#bfc9c3] hover:text-white text-[11px] font-medium border border-[#323537]/60 transition-colors"
                  >
                    Revert to Original
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-lg bg-[#1d2022] text-[#bfc9c3] text-[11px] font-semibold border border-[#323537]/60 flex items-center gap-1">
                    <span>Using Original Sketch</span>
                  </span>
                  {refinedPreviewUrl && (
                    <button
                      onClick={() => onSelectInput && onSelectInput('refined')}
                      className="px-2.5 py-1 rounded-lg bg-[#FF7F50]/25 hover:bg-[#FF7F50]/35 text-[#FF7F50] text-[11px] font-semibold border border-[#FF7F50]/50 transition-colors"
                    >
                      Use Refined Output
                    </button>
                  )}
                  {isolatedPreviewUrl && (
                    <button
                      onClick={() => onSelectInput && onSelectInput('isolated')}
                      className="px-2.5 py-1 rounded-lg bg-[#00f59b]/25 hover:bg-[#00f59b]/35 text-[#00f59b] text-[11px] font-semibold border border-[#00f59b]/50 transition-colors"
                    >
                      Use Isolated
                    </button>
                  )}
                </div>
              )}

              {/* Action Trigger Button */}
              {refineSketch ? (
                <button
                  onClick={() => onRefineSketch && onRefineSketch()}
                  disabled={refinementLoading}
                  className="p-1 rounded-lg hover:bg-[#272a2d] text-[#849588] hover:text-[#FF7F50] transition-colors"
                  title="Re-run AI Image Refinement"
                >
                  <span className={`material-symbols-outlined text-sm ${refinementLoading ? 'animate-spin' : ''}`}>
                    refresh
                  </span>
                </button>
              ) : (
                <button
                  onClick={() => onIsolateForeground && onIsolateForeground()}
                  disabled={isolationLoading}
                  className="p-1 rounded-lg hover:bg-[#272a2d] text-[#849588] hover:text-[#00f59b] transition-colors"
                  title="Re-run Foreground Isolation"
                >
                  <span className={`material-symbols-outlined text-sm ${isolationLoading ? 'animate-spin' : ''}`}>
                    refresh
                  </span>
                </button>
              )}
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
        {/* Left: Target Quality & Resolution */}
        <div className="flex items-center gap-4 flex-wrap">
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

          <div className="h-4 w-px bg-[#323537]/50 hidden sm:block"></div>

          {/* Target Size / Resolution Selector */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-[#849588] uppercase tracking-wider">Resolution:</span>
            <select
              value={targetSize}
              onChange={(e) => setTargetSize(Number(e.target.value))}
              className="bg-[#1d2022] border border-[#323537] text-white text-xs font-mono font-medium rounded px-2.5 py-1 focus:outline-none cursor-pointer"
            >
              <option value={320}>320*320</option>
              <option value={512}>512*512</option>
            </select>
          </div>
        </div>

        {/* Right: Compute Status & Primary Generation Buttons */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Active Reconstruction Input Indicator */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111416] border border-[#323537]/50 text-[11px] text-[#849588]">
            <span>Active Pipeline Input:</span>
            <span
              className={
                selectedInput === 'refined'
                  ? 'text-[#FF7F50] font-semibold'
                  : selectedInput === 'isolated'
                  ? 'text-[#00f59b] font-semibold'
                  : 'text-white'
              }
            >
              {selectedInput === 'refined'
                ? 'Refined AI Image'
                : selectedInput === 'isolated'
                ? 'Isolated Cutout'
                : 'Original Sketch'}
            </span>
          </div>

          {/* AI Image Refinement Action Button */}
          <button
            onClick={() => onRefineSketch && onRefineSketch()}
            disabled={loading || refinementLoading || generation25DLoading}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#111416] hover:bg-[#1d2022] border border-[#FF7F50]/40 text-[#FF7F50] text-xs font-semibold shadow-sm transition-all disabled:opacity-50 cursor-pointer"
            title="Refine sketch contours and clean background with quality validation"
          >
            {refinementLoading ? (
              <>
                <span className="material-symbols-outlined text-base animate-spin">refresh</span>
                <span>Refining...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-base">auto_fix_high</span>
                <span>AI Refine</span>
              </>
            )}
          </button>

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
