import React, { useState } from 'react';

export default function Header({
  onOpenBriefing,
  searchQuery,
  setSearchQuery,
  selectedModel,
  setSelectedModel,
  apiBase = '',
  onUpdateApiBase,
}) {
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const models = [
    { id: 'flagship', name: 'ZephyrMesh 2.5 Flagship', desc: 'InstantMesh + Gemini Vision' },
    { id: 'instantmesh', name: 'InstantMesh LRM v1.2', desc: 'Direct 3D Sparse View LRM' },
    { id: 'gemini', name: 'Gemini 3.5 Flash', desc: 'Multimodal Vision Parser' },
    { id: 'sdf', name: 'Watertight SDF Hybrid', desc: 'High Precision Marching Tetrahedra' },
  ];

  return (
    <header className="fixed top-0 left-64 right-0 z-40 bg-[#0c0f11]/85 backdrop-blur-xl border-b border-[#272a2d]/60">
      {/* Hackathon Briefing Notification Banner */}
      <div className="w-full bg-[#191c1e]/70 px-6 py-1.5 flex items-center justify-between text-xs border-b border-[#272a2d]/30">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#4edea3] text-sm">campaign</span>
          <span className="text-[#bfc9c3] font-medium">
            TechZephyr 4.0 Hackathon • AI Sketch-to-3D Reconstruction Engine
          </span>
          <span className="hidden md:inline-flex px-1.5 py-0.2 rounded bg-[#00f59b]/15 text-[#00f59b] text-[10px] font-mono border border-[#00f59b]/30">
            LRM+VLM PIPELINE
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenBriefing}
            className="text-[#6ffbbe] hover:text-[#00f59b] hover:underline font-semibold text-xs flex items-center gap-1 transition-colors"
          >
            <span>Read Briefing</span>
            <span className="material-symbols-outlined text-xs">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Main Studio Toolbar */}
      <div className="h-16 w-full px-6 flex items-center justify-between gap-4">
        {/* Left: Model Selector & Search */}
        <div className="flex items-center gap-4">
          {/* Model Selector Pill */}
          <div className="relative">
            <button
              onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#272a2d]/90 hover:bg-[#323537] text-white text-xs font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.3)] border border-[#3b4a3f]/60 transition-all"
            >
              <span className="material-symbols-outlined text-[#4edea3] text-base">neurology</span>
              <span>{selectedModel}</span>
              <span className="material-symbols-outlined text-[#bfc9c3] text-sm">expand_more</span>
            </button>

            {modelDropdownOpen && (
              <div className="absolute left-0 mt-2 w-72 rounded-xl bg-[#191c1e] border border-[#272a2d] p-1.5 shadow-2xl z-50">
                <div className="px-3 py-1.5 text-[10px] font-bold text-[#849588] uppercase tracking-wider">
                  Reconstruction Engine
                </div>
                {models.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      setSelectedModel(m.name);
                      setModelDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs flex flex-col transition-colors ${
                      selectedModel === m.name
                        ? 'bg-[#272a2d] text-[#6ffbbe]'
                        : 'text-white hover:bg-[#1d2022]'
                    }`}
                  >
                    <span className="font-semibold">{m.name}</span>
                    <span className="text-[11px] text-[#849588]">{m.desc}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Bar */}
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-3 text-[#849588] text-base">search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search meshes, textures, prompts..."
              className="w-72 md:w-80 pl-9 pr-3 py-1.5 rounded-full bg-[#1d2022]/80 border border-[#272a2d] text-white placeholder:text-[#849588] text-xs focus:outline-none focus:ring-1 focus:ring-[#00f59b]/50 focus:border-[#00f59b]/40 transition-all"
            />
          </div>
        </div>

        {/* Right: Feedback, Notifications, User */}
        <div className="flex items-center gap-3">
          {/* Backend Connection Pill (Local or Colab GPU) */}
          {apiBase ? (
            <button
              onClick={() => {
                const val = prompt('Enter Backend API URL (leave empty for local :8000):', apiBase);
                if (val !== null && onUpdateApiBase) onUpdateApiBase(val);
              }}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00f59b]/15 hover:bg-[#00f59b]/25 border border-[#00f59b]/40 text-[#00f59b] text-xs font-semibold transition-all shadow-sm cursor-pointer"
              title="Colab GPU Backend Active. Click to modify URL."
            >
              <span className="w-2 h-2 rounded-full bg-[#00f59b] animate-pulse"></span>
              <span className="hidden sm:inline">Colab GPU:</span>
              <span className="font-mono text-[11px] truncate max-w-[130px]">{apiBase.replace(/^https?:\/\//, '')}</span>
            </button>
          ) : (
            <button
              onClick={() => {
                const val = prompt('Enter Colab Public URL (e.g. https://xxxx.ngrok-free.app):', '');
                if (val && onUpdateApiBase) onUpdateApiBase(val);
              }}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1d2022] hover:bg-[#272a2d] border border-[#323537] text-[#bfc9c3] hover:text-white text-xs transition-colors cursor-pointer"
              title="Click to connect to Colab GPU Tunnel"
            >
              <span className="material-symbols-outlined text-xs text-[#FF7F50]">cloud_sync</span>
              <span className="hidden sm:inline">Connect Colab</span>
              <span className="sm:hidden">Colab</span>
            </button>
          )}

          <button
            onClick={() => alert('Feedback submitted! Thank you for testing the Zephyr 3D AI Studio.')}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#272a2d] hover:bg-[#323537] border border-[#3b4a3f]/40 text-white text-xs font-medium transition-colors"
          >
            <span className="material-symbols-outlined text-[#849588] text-sm">chat_bubble</span>
            <span>Feedback</span>
          </button>

          <div className="relative">
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="w-9 h-9 rounded-full bg-[#1d2022] border border-[#272a2d] flex items-center justify-center text-[#bfc9c3] hover:text-white hover:bg-[#272a2d] transition-colors relative"
            >
              <span className="material-symbols-outlined text-lg">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#FF7F50]"></span>
            </button>

            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 rounded-xl bg-[#191c1e] border border-[#272a2d] p-3 shadow-2xl z-50 text-xs">
                <div className="font-semibold text-white mb-2 pb-1 border-b border-[#272a2d] flex justify-between items-center">
                  <span>System Notifications</span>
                  <span className="text-[10px] text-[#4edea3]">Live</span>
                </div>
                <div className="space-y-2 text-[#bfc9c3]">
                  <div className="p-2 rounded-lg bg-[#111416] border border-[#272a2d]">
                    <p className="font-medium text-white">InstantMesh Reconstruction Engine</p>
                    <p className="text-[11px] text-[#849588] mt-0.5">Ready for fast single-image 3D synthesis.</p>
                  </div>
                  <div className="p-2 rounded-lg bg-[#111416] border border-[#272a2d]">
                    <p className="font-medium text-white">Gemini Vision VLM Online</p>
                    <p className="text-[11px] text-[#849588] mt-0.5">Semantic reasoning and geometry priors active.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="h-5 w-px bg-[#323537]/60"></div>

          {/* User Profile */}
          <div className="flex items-center gap-2 cursor-pointer p-1 rounded-full hover:bg-[#1d2022] transition-colors">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT_lG80-0jisau1_QDTLOn2_RchtmGjhTkf3Z4FMdVgtrYsML5ZEwl1lL9ResdbQbh7ZcHIwB29A8bkHrBpk6sS4qeXDD0ApilEYuT2GHS_tDmIn8Ck903EsJZj4ky-epb4_bI9iiDXNlSypYzp-xVu0QdRv9mHVaKeX5Mjrta3GFuU9Z7I5PeKHreYBZNgEzLgA2QNbY2bCEOBKQMk6bMc6PXvFfcjMhZcGiubw"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-[#00f59b]/30"
            />
            <span className="material-symbols-outlined text-[#849588] text-sm">keyboard_arrow_down</span>
          </div>
        </div>
      </div>
    </header>
  );
}
