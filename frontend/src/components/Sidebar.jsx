import React from 'react';

export default function Sidebar({ activeNav, setActiveNav, onUpgradeSparks, onGoLanding }) {
  const navItems = [
    { id: 'create', label: 'Create', icon: 'auto_fix_high' },
    { id: 'sketch-pad', label: 'Sketch Pad', icon: 'draw' },
    { id: 'gallery', label: 'Gallery & Models', icon: 'view_in_ar' },
    { id: 'assets', label: 'Asset Library', icon: 'category' },
  ];

  const secondaryNavItems = [
    { id: 'api-docs', label: 'API & Docs', icon: 'code' },
    { id: 'community', label: 'Community', icon: 'forum' },
    { id: 'settings', label: 'Settings', icon: 'settings' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-[#0c0f11]/95 backdrop-blur-2xl z-50 flex flex-col justify-between p-4 border-r border-[#272a2d]/50 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="flex flex-col gap-6">
        {/* Brand Logo */}
        <div
          className="flex items-center gap-3 px-1 cursor-pointer group"
          onClick={onGoLanding || (() => setActiveNav('create'))}
          title="Return to Landing Page"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#272a2d] to-[#0c0f11] border border-[#FF7F50]/40 shadow-[0_0_16px_rgba(255,127,80,0.35)]">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 32 32">
              <polygon className="opacity-80" fill="none" points="16,2 29,9 29,23 16,30 3,23 3,9" stroke="#FF7F50" strokeWidth="1.8" />
              <polygon fill="rgba(0,245,155,0.08)" points="16,7 25,12 25,20 16,25 7,20 7,12" stroke="#00f59b" strokeWidth="1.5" />
              <path d="M16 2 L16 30 M3 9 L29 23 M29 9 L3 23" stroke="rgba(255,127,80,0.35)" strokeWidth="1" />
              <circle className="filter drop-shadow-[0_0_6px_#FF7F50]" cx="16" cy="16" fill="#FF7F50" r="2.5" />
            </svg>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#FF7F50] animate-ping opacity-75"></div>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#FF7F50]"></div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-lg text-white tracking-tight leading-none bg-gradient-to-r from-white via-slate-100 to-primary bg-clip-text text-transparent">
                ZEPHYR<span className="text-[#FF7F50] ml-1">3D</span>
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold tracking-widest uppercase bg-[#272a2d] border border-[#FF7F50]/40 text-[#FF7F50]">
                PRO STUDIO v4.0
              </span>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-[#323537]/40"></div>

        {/* Navigation Menu */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  if (item.isLanding && onGoLanding) {
                    onGoLanding();
                  } else {
                    setActiveNav(item.id);
                  }
                }}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-left ${
                  isActive
                    ? 'bg-[#272a2d] text-[#6ffbbe] shadow-[inset_0_0_12px_rgba(0,245,155,0.15)] relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1 before:bg-[#00f59b] before:rounded-full'
                    : 'text-[#bfc9c3] hover:bg-[#1d2022] hover:text-white'
                }`}
              >
                <span className={`material-symbols-outlined text-lg ${isActive ? 'text-[#4edea3]' : 'text-slate-400'}`}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="my-2 h-px w-full bg-[#323537]/30"></div>

          {secondaryNavItems.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  if (item.isLanding && onGoLanding) {
                    onGoLanding();
                  } else {
                    setActiveNav(item.id);
                  }
                }}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-left ${
                  isActive
                    ? 'bg-[#272a2d] text-[#6ffbbe] shadow-[inset_0_0_12px_rgba(0,245,155,0.15)] relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1 before:bg-[#00f59b] before:rounded-full'
                    : 'text-[#bfc9c3] hover:bg-[#1d2022] hover:text-white'
                }`}
              >
                <span className={`material-symbols-outlined text-lg ${isActive ? 'text-[#4edea3]' : 'text-slate-400'}`}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Status & Sparks Balance */}
      <div className="flex flex-col gap-3">
        <div className="p-3.5 rounded-xl bg-[#191c1e]/80 border border-[#272a2d] backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.3)] flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-[#849588] uppercase tracking-wider">Sparks Balance</span>
            <span className="material-symbols-outlined text-[#4edea3] text-sm">bolt</span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="font-display font-semibold text-lg text-white">120</span>
            <span className="text-[11px] text-[#849588] bg-[#0c0f11] px-2 py-0.5 rounded border border-[#272a2d]">
              Free Tier
            </span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-[#323537] overflow-hidden my-0.5">
            <div className="h-full bg-[#00f59b] rounded-full w-2/5 shadow-[0_0_8px_rgba(0,245,155,0.6)]"></div>
          </div>
          <button
            onClick={onUpgradeSparks}
            className="w-full mt-1 py-1.5 px-3 rounded-lg bg-[#272a2d] hover:bg-[#00f59b] text-white hover:text-[#003920] text-xs font-semibold transition-all flex items-center justify-center gap-1 shadow-sm"
          >
            Upgrade Sparks
          </button>
        </div>

        <div className="px-1 py-1 flex items-center justify-between text-[#849588] text-xs">
          <span className="flex items-center gap-1.5">
            <span>Meshy Core Engine</span>
          </span>
          <span className="w-2 h-2 rounded-full bg-[#00a572] shadow-[0_0_8px_#00f59b] animate-pulse"></span>
        </div>
      </div>
    </aside>
  );
}
