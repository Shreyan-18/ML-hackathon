---
name: Obsidian Synth 3D
colors:
  surface: '#111416'
  surface-dim: '#111416'
  surface-bright: '#37393c'
  surface-container-lowest: '#0c0f11'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2d'
  surface-container-highest: '#323537'
  on-surface: '#e1e2e5'
  on-surface-variant: '#bfc9c3'
  inverse-surface: '#e1e2e5'
  inverse-on-surface: '#2e3133'
  outline: '#89938e'
  outline-variant: '#3f4944'
  surface-tint: '#90d4bb'
  primary: '#a2e7cd'
  on-primary: '#00382a'
  primary-container: '#87cbb2'
  on-primary-container: '#085744'
  inverse-primary: '#246a55'
  secondary: '#b4ccc0'
  on-secondary: '#20342d'
  secondary-container: '#384d45'
  on-secondary-container: '#a6beb3'
  tertiary: '#ffcaea'
  on-tertiary: '#5f004f'
  tertiary-container: '#ff9ee0'
  on-tertiary-container: '#900079'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#abf1d6'
  primary-fixed-dim: '#90d4bb'
  on-primary-fixed: '#002117'
  on-primary-fixed-variant: '#00513e'
  secondary-fixed: '#d0e8dc'
  secondary-fixed-dim: '#b4ccc0'
  on-secondary-fixed: '#0a1f18'
  on-secondary-fixed-variant: '#364b43'
  tertiary-fixed: '#ffd8ee'
  tertiary-fixed-dim: '#ffade3'
  on-tertiary-fixed: '#3a0030'
  on-tertiary-fixed-variant: '#860070'
  background: '#111416'
  on-background: '#e1e2e5'
  surface-variant: '#323537'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1.0rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
This design system defines a next-generation AI 3D generative studio. It targets game developers, technical artists, VFX creators, and digital sculptors seeking instant spatial synthesis. 

The aesthetic is rooted in **Creative-Tech Cyberpunk & Frosted Dark Glass**:
- Deep obsidian canvas tones (`#071c15`, `#0a0d0f`) ground the interface in cinematic focus.
- Luminous soft mint and dark forest accents (`#87cbb2`, `#071c15`) inject high-tech contrast, guiding user attention through prompt bars, active mesh viewports, and synthesis triggers.
- Translucent frosted glass layers provide atmospheric depth without overwhelming the interactive 3D assets.
- Precision controls, segmented pill switches, and sleek micro-borders convey professional-grade parameter manipulation.

## Colors
The color system emphasizes high-contrast phosphorescence balanced against dark void foundations:

- **Primary (`#87cbb2`)**: Sophisticated soft mint neon reserved for primary generation triggers, progress indicators, active 3D gizmos, and verified statuses.
- **Secondary (`#071c15`)**: Deep midnight forest tone for structural containers, hover states, and stable active nodes.
- **Tertiary (`#ff0bd8`)**: Electric magenta used selectively for topology indicators, wireframe overlays, and agent status cues.
- **Neutrals & Surfaces**:
  - `Canvas Dark`: `#070a0c`
  - `Surface Void`: `#0a0d0f`
  - `Surface Glass Panel`: `rgba(18, 24, 29, 0.72)`
  - `Surface Glass Elevated`: `rgba(28, 36, 44, 0.85)`
  - `Border Subtle`: `rgba(255, 255, 255, 0.08)`
  - `Border Glow`: `rgba(135, 203, 178, 0.35)`
- **Text Palette**:
  - `Text High-Contrast`: `#f8fafc`
  - `Text Muted`: `#94a3b8`
  - `Text Dim`: `#475569`

## Typography
The system uses a geometric pairing: **Plus Jakarta Sans** provides a modern, high-precision technical presence for headlines and display metrics, while **Inter** delivers maximum legibility across complex multi-tier tool panels, numerical settings, and prompt inputs.

- Letter spacing is tightened on large displays (`-0.03em`) to enhance density and futuristic tech cohesion.
- Uppercase styling is reserved for tiny labels (`label-sm`), technical flags, and parameter chips with elevated track spacing (`0.06em`).

## Layout & Spacing
The layout follows an application-studio dynamic grid with persistent dock panels:

- **Desktop Layout**: 
  - Fixed collapsed rail navigation (64px width) docked on the far left.
  - Central creative hub spanning flexible columns (min 720px up to 1440px max width).
  - Floating/collapsible 3D Inspector on the right (320px width).
- **Rhythm & Padding**: 
  - Standard element rhythm conforms to an 8pt modular scale.
  - Dense grouping (`space-xs` and `space-sm`) is applied within parameter controls, input fields, and pill selectors.
  - Large macro breathing room (`space-xl` and `margin`) frames generative drop zones and showcase gallery grids.
- **Responsive Adaptations**:
  - On screens `< 1024px`, the tool rail collapses into a slide-over drawer.
  - Inspector panels become bottom slide sheets on mobile devices.

## Elevation & Depth
Depth relies on frosted glass layers (`backdrop-filter: blur(16px)` to `blur(24px)`) integrated with atmospheric neon bloom:

- **Level 0 (Canvas)**: Solid deep obsidian backdrop (`#070a0c`), zero elevation.
- **Level 1 (Dock Panels & Large Cards)**: Semi-transparent glass (`rgba(18, 24, 29, 0.72)`) with a crisp `1px` translucent edge border (`rgba(255, 255, 255, 0.07)`).
- **Level 2 (Active Generation Stage / Dropzones)**: High-translucency containers framed with an interior radial emerald haze (`box-shadow: 0 0 35px -10px rgba(135, 203, 178, 0.15)`).
- **Level 3 (Popovers, Modals & Floating Toolbars)**: Elevated obsidian glass (`rgba(25, 33, 40, 0.9)`) with multi-layered drop shadow: `0 16px 36px -8px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(255, 255, 255, 0.12)`.

## Shapes
The design balances sleek studio surfaces with pill-shaped control nodes:

- **Base Radius (`0.5rem`)**: Used for input controls, parameter sliders, drop-down menus, and secondary utility modules.
- **Panel Radius (`rounded-lg` / `1rem`)**: Applied to generative canvas zones, card containers, preview viewports, and modals.
- **Pill Radius (`9999px`)**: Reserved for action buttons, segment switch toggles, status tags (e.g., `New`, `PRO`), and prompt mode selectors.

## Components

### Buttons
- **Primary Action (Generate / Synthesize)**: Solid soft mint background (`#87cbb2`), deep dark text (`#051811`), pill-shaped. Hover state introduces a luminous glow (`0 0 20px rgba(135, 203, 178, 0.45)`).
- **Secondary Glass**: Frosted black surface (`rgba(255, 255, 255, 0.05)`), border `1px solid rgba(255, 255, 255, 0.12)`, text `#f8fafc`. Hover triggers magenta border highlighting (`#ff0bd8`).
- **Icon Buttons**: Circular or square pill buttons (`0.5rem` radius) with neutral `#94a3b8` icons, shifting to `#87cbb2` on hover.

### Segmented Dual Tabs (Quick Generate / Agent Mode / Sketch)
- Pill capsule background (`rgba(15, 20, 25, 0.8)`) holding side-by-side segment buttons.
- Active tab features an obsidian elevated backing with subtle outer rim lighting and glowing accent badge.

### Input Fields & Prompt Zone
- Deep dark translucent trough (`rgba(10, 14, 18, 0.85)`).
- Outlined with subtle ghost borders (`rgba(255, 255, 255, 0.08)`).
- Focus state activates an animated soft mint neon perimeter stroke (`#87cbb2`) with gentle ambient bloom.

### Showcase & 3D Viewport Cards
- Rounded rectangular cards (`rounded-lg`) with inset aspect ratio for rendered meshes.
- Bottom overlay with frosted dark gradient (`linear-gradient(to top, rgba(7, 10, 12, 0.95), transparent)`).
- Hover effect slightly scales viewport thumbnail and triggers glowing primary border highlight.

### Chips & Badges
- Compact pill geometries (`label-sm`).
- Gradient or mono fills: Mint background with dark text for priority flags; subtle obsidian/slate with mint micro-bullet for processing states.