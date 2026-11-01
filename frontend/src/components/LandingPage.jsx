import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobiusStripCanvas from './MobiusStripCanvas';

/**
 * Zephyr 3D AI Studio — Unified Hero Landing Page
 * 
 * Single unified hero section (without separate nested card boxes or cluttering banners):
 * - Left side: "Welcome to the world of 3D Models" headline, pitch, feature tags, and "Get Started →" CTA
 * - Right side: 3D in-motion dynamic Möbius Strip revolving infinitely in the same hero space
 */
export default function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/home');
  };

  const featurePills = [
    { label: 'InstantMesh LRM', icon: 'deployed_code', color: 'text-[#00f59b]' },
    { label: 'Gemini Vision AI', icon: 'psychology', color: 'text-[#38bdf8]' },
    { label: 'Studio Refinement', icon: 'auto_fix_high', color: 'text-[#FF7F50]' },
    { label: 'Watertight GLB Export', icon: 'view_in_ar', color: 'text-[#a855f7]' },
  ];

  const statCards = [
    { label: 'Inference Speed', value: '< 2.4s', desc: 'Sub-second 3D preview & real-time LRM cascade' },
    { label: 'Mesh Topology', value: '100% Watertight', desc: 'Non-manifold auto-repair & quad remeshing' },
    { label: 'Multimodal AI', value: 'Gemini 3.5', desc: 'Deep semantic understanding with prompt priority' },
  ];

  return (
    <div className="min-h-screen bg-[#0c0f11] text-[#e1e2e5] font-sans antialiased selection:bg-[#FF7F50]/30 selection:text-white relative overflow-x-hidden flex flex-col justify-between">
      {/* Background Ambient Cyber Glows */}
      <div className="pointer-events-none fixed top-0 left-1/4 w-[650px] h-[450px] bg-gradient-to-br from-[#00f59b]/12 via-[#38bdf8]/8 to-transparent rounded-full blur-[140px] z-0" />
      <div className="pointer-events-none fixed bottom-10 right-10 w-[550px] h-[450px] bg-gradient-to-tl from-[#FF7F50]/12 via-[#a855f7]/8 to-transparent rounded-full blur-[140px] z-0" />

      {/* Top Navbar */}
      <header className="relative z-30 w-full border-b border-white/[0.08] bg-[#0c0f11]/80 backdrop-blur-xl">
        <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#1e2327] to-[#0c0f11] border border-[#FF7F50]/40 shadow-[0_0_20px_rgba(255,127,80,0.3)]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 32 32">
                <polygon className="opacity-80" fill="none" points="16,2 29,9 29,23 16,30 3,23 3,9" stroke="#FF7F50" strokeWidth="1.8" />
                <polygon fill="rgba(0,245,155,0.08)" points="16,7 25,12 25,20 16,25 7,20 7,12" stroke="#00f59b" strokeWidth="1.5" />
                <path d="M16 2 L16 30 M3 9 L29 23 M29 9 L3 23" stroke="rgba(255,127,80,0.35)" strokeWidth="1" />
                <circle className="filter drop-shadow-[0_0_6px_#FF7F50]" cx="16" cy="16" fill="#FF7F50" r="2.5" />
              </svg>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#FF7F50] animate-ping" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#FF7F50]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl text-white tracking-tight leading-none">
                ZEPHYR<span className="text-[#FF7F50] ml-1">3D</span>
              </span>
              <span className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase mt-0.5">
                AI Sketch-to-3D Studio
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <button
              onClick={() => navigate('/home')}
              className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm text-[#00f59b]">space_dashboard</span>
              <span>Studio Workspace</span>
            </button>
            <a
              href="#features"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-sm text-[#38bdf8]">token</span>
              <span>Capabilities</span>
            </a>
          </nav>

          {/* Action CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleGetStarted}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00f59b] to-[#00c97e] text-[#003920] font-bold text-sm tracking-wide shadow-[0_0_24px_rgba(0,245,155,0.35)] hover:shadow-[0_0_32px_rgba(0,245,155,0.55)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Launch Studio</span>
              <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Hero Container — Single Unified Hero Section */}
      <main className="relative z-10 max-w-[1440px] mx-auto px-6 py-10 md:py-16 w-full flex-1 flex flex-col justify-center">
        {/* Single Unified Hero Card */}
        <div className="relative rounded-3xl border border-white/[0.12] bg-[#121619]/65 backdrop-blur-2xl p-8 sm:p-12 lg:p-16 shadow-[0_20px_80px_rgba(0,0,0,0.65)] overflow-hidden">
          {/* Subtle decorative grid background inside frame */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          {/* Ambient soft glow on right side behind the 3D strip */}
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,245,155,0.12)_0%,rgba(255,127,80,0.08)_50%,transparent_75%)] pointer-events-none blur-3xl" />

          {/* Single Unified Hero Grid: Left Content & Right 3D Möbius Strip in Same Hero */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Area (Directly in hero, no nested box) */}
            <div className="lg:col-span-6 xl:col-span-7 flex flex-col gap-6 justify-center">
              {/* Kicker Badge */}
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF7F50]">
                <span className="material-symbols-outlined text-sm">view_in_ar</span>
                <span>Next-Gen Spatial Synthesizer</span>
              </div>

              {/* Primary Headline */}
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.12]">
                Welcome to the world of{' '}
                <span className="bg-gradient-to-r from-[#00f59b] via-[#38bdf8] to-[#FF7F50] bg-clip-text text-transparent">
                  3D Models
                </span>
              </h1>

              {/* Description Paragraph */}
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
                Turn rough hand-drawn pencil sketches, marker doodles, and visual concepts into{' '}
                <span className="text-white font-medium">production-ready 3D meshes</span>,{' '}
                <span className="text-white font-medium">volumetric 2.5D reliefs</span>, and{' '}
                <span className="text-white font-medium">watertight CAD models</span> in real time.
              </p>

              {/* Feature Tags */}
              <div className="grid grid-cols-2 gap-3 pt-2 max-w-lg">
                {featurePills.map((pill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-xs font-medium text-zinc-300 backdrop-blur-sm"
                  >
                    <span className={`material-symbols-outlined text-base ${pill.color}`}>
                      {pill.icon}
                    </span>
                    <span>{pill.label}</span>
                  </div>
                ))}
              </div>

              {/* Action Button from Sketch: "Get Started Right Arrow" */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={handleGetStarted}
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF7F50] via-[#ff6838] to-[#ff541e] text-white font-bold text-base tracking-wide shadow-[0_0_30px_rgba(255,127,80,0.4)] hover:shadow-[0_0_45px_rgba(255,127,80,0.65)] transition-all hover:scale-[1.03] active:scale-[0.98] border border-white/20 cursor-pointer"
                >
                  <span>Get Started</span>
                  <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1.5">
                    arrow_forward
                  </span>
                </button>

                <button
                  onClick={() => navigate('/home')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white font-semibold text-sm transition-all border border-white/[0.08] cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base text-[#00f59b]">palette</span>
                  <span>Try Interactive Canvas</span>
                </button>
              </div>
            </div>

            {/* Right Side: 3D In-Motion Dynamic Möbius Strip (Seamless in Same Hero) */}
            <div className="lg:col-span-6 xl:col-span-5 relative w-full h-[380px] sm:h-[460px] lg:h-[520px] flex items-center justify-center">
              <MobiusStripCanvas />
            </div>
          </div>
        </div>

        {/* Feature Highlights Below Hero */}
        <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {statCards.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/[0.07] bg-[#13171a]/60 backdrop-blur-md p-6 flex flex-col gap-2 hover:border-[#00f59b]/30 transition-all group"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-[#00f59b] group-hover:text-[#FF7F50] transition-colors">
                {stat.label}
              </span>
              <span className="font-display font-extrabold text-2xl text-white">
                {stat.value}
              </span>
              <span className="text-xs text-zinc-400 leading-relaxed">
                {stat.desc}
              </span>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full border-t border-white/[0.08] bg-[#0c0f11]/90 py-6">
        <div className="max-w-[1440px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">ZEPHYR 3D</span>
            <span>• Built for TechZephyr 4.0 Hackathon</span>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => navigate('/home')} className="hover:text-white transition-colors cursor-pointer">
              Open Studio Workspace
            </button>
            <span className="text-zinc-600">|</span>
            <span className="text-[#00f59b]">Status: Online</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
