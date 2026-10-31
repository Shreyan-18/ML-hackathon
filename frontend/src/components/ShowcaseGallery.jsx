import React, { useState } from 'react';

export default function ShowcaseGallery({ onRemixModel }) {
  const [activeCategory, setActiveCategory] = useState('Recommended');
  const [likes, setLikes] = useState({
    1: 3400,
    2: 850,
    3: 2800,
    4: 4100,
  });
  const [liked, setLiked] = useState({});

  const categories = ['Recommended', '3D Printing', 'Game Assets', 'Robotics & Drones', 'Anime Figurines'];

  const showcaseCards = [
    {
      id: 1,
      title: 'Chibi Couple Figurines',
      type: 'chair', // preset mapping
      tag: 'From 2D Doodle',
      category: '3D Printing',
      likes: likes[1],
      meta: '3D Print Ready • STL',
      metaIcon: 'print',
      imgSrc:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuABgGryVwK-fSsMQMRMZ2vOk8lEi7-BJVLI5d-NapSOjq3JKz9nVLZiYVYDIaQGhHl-cSHD2qjumCSt9QOdSDJzQ5xjpZb5zDBu2c9l9OHK8SZbWzEUwXZtNQcfKpUAvL_FxrPS5nuaQHeA78BDBVNxDSDoePt5BGBijPEcn42drZrr9utj4gAFwZ1AojIR_covUEFNQ5XP-tUJ6tffDNNSOCBRNGVKO6LDIzRThQ',
    },
    {
      id: 2,
      title: 'Angular EV Concept',
      type: 'car',
      tag: 'Cad Wireframe',
      category: 'Game Assets',
      likes: likes[2],
      meta: '18k Tris • Game GLB',
      metaIcon: 'sports_esports',
      imgSrc:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBsPUhvq0HVjFQpAb9gtHYflK9jMYRcNxhckXo0LF5hZROGYP7TwLBm0tyVsVyahiKQmOf6f-jcuQcmy_OO-AJ9VdM9oBCWKMP9AvGJulGm7UGO5bwYwiXrU91osauGtACsML8TcKW3_L63GoI6fvOYquZo0z30WtQOEM9RtTS0J3ToOIvedsf6pdLxAlHJOvoi9XOABxz0BkycbqkGsSQ4vTUushb94D1PXtjviQ',
    },
    {
      id: 3,
      title: 'Elysia Summer Sculpt',
      type: 'mug',
      tag: 'Stylized Character',
      category: 'Anime Figurines',
      likes: likes[3],
      meta: 'Rigged • OBJ+FBX',
      metaIcon: 'layers',
      imgSrc:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDaGybIrlk7lmnBUfKexwZmPUwcGnLSaMpneEz7oakzw8djnr-yNihZZm69t1PtBfcUE25K8etCL5h5yVfj-Em5rclS1PAJLcjGf1Z--RvFaCHjyTRWL_4tmcgSb9piYfcQpz2pIX-lwAe8JnwbvHkgn6bRotaKZaFoRDqQe1aLhQNKvgt0Z1O5IRdRkOu1VzWj0P1dsGwKmLOYQ3Z7rTRVSulY30gxKSkwR7Vslw',
    },
    {
      id: 4,
      title: 'Vanguard Recon Drone',
      type: 'drone',
      tag: 'Sci-Fi Drone',
      category: 'Robotics & Drones',
      likes: likes[4],
      meta: '42k Tris • Watertight',
      metaIcon: 'view_in_ar',
      imgSrc:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuALYmR8CxskT0DxXT5cuW2YbdiuGMP_lY8QalFbPBpqnfa5ep4HKmAa9vi_GyZE9tZ3PQDigMt_I16aARGzeZuVE_ext1yskQQN45R_pEaYTnUAw1kjUvcqf8iu9l145P6uTCu4CvE04aKyRvqdoc32BGHOQtISgGy4gHaiff9eEnfjhfVh_HHSMSwukm1KQNB8GyKCQgfWfde921Y--xl0tXwl7HfASH_F2Igzdg',
    },
  ];

  const handleLike = (id, e) => {
    e.stopPropagation();
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
    setLikes((prev) => ({
      ...prev,
      [id]: liked[id] ? prev[id] - 1 : prev[id] + 1,
    }));
  };

  const filteredCards =
    activeCategory === 'Recommended'
      ? showcaseCards
      : showcaseCards.filter((c) => c.category === activeCategory);

  return (
    <div className="flex flex-col gap-4 pb-12">
      {/* Showcase Nav & Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-xl text-white">Community Explorations</span>
          <span className="px-2.5 py-0.5 rounded-full bg-[#272a2d] text-[#bfc9c3] text-xs">
            Recently Synthesized
          </span>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs transition-all ${
                activeCategory === cat
                  ? 'bg-[#FF7F50] text-white shadow-[0_0_12px_rgba(255,127,80,0.35)] font-semibold'
                  : 'text-[#bfc9c3] hover:text-white hover:bg-[#1d2022] bg-[#191c1e] border border-[#272a2d]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 4 Showcase Model Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredCards.map((card) => {
          const isCardLiked = liked[card.id];
          return (
            <div
              key={card.id}
              className="group relative rounded-xl overflow-hidden bg-[#191c1e] border border-[#272a2d] hover:border-[#FF7F50]/50 flex flex-col shadow-md hover:shadow-2xl transition-all duration-300"
            >
              {/* Card Image Thumbnail */}
              <div className="relative w-full h-72 overflow-hidden bg-[#0c0f11]">
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f11] via-transparent to-transparent opacity-85"></div>

                {/* Top Badge */}
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#0c0f11]/80 backdrop-blur-md text-[#4edea3] text-[11px] font-semibold border border-[#272a2d]">
                  {card.tag}
                </div>

                {/* Bottom Overlay Title & Likes */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="font-display font-semibold text-sm truncate mr-2">{card.title}</span>
                  <button
                    onClick={(e) => handleLike(card.id, e)}
                    className="flex items-center gap-1 text-xs text-[#bfc9c3] hover:text-[#FF7F50] transition-colors"
                  >
                    <span
                      className={`material-symbols-outlined text-sm ${
                        isCardLiked ? 'text-[#FF7F50] font-bold' : 'text-[#4edea3]'
                      }`}
                    >
                      favorite
                    </span>
                    <span>{(card.likes / 1000).toFixed(1)}k</span>
                  </button>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-3 flex items-center justify-between bg-[#272a2d]/70 border-t border-[#323537]/40 text-xs">
                <div className="flex items-center gap-1.5 text-[#849588]">
                  <span className="material-symbols-outlined text-sm">{card.metaIcon}</span>
                  <span>{card.meta}</span>
                </div>
                <button
                  onClick={() => onRemixModel(card)}
                  className="px-2.5 py-1 rounded bg-[#1d2022] hover:bg-[#FF7F50] text-white text-xs font-medium transition-colors border border-[#323537]/50 hover:border-[#FF7F50]"
                >
                  Remix
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
