import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import StudioApp from './StudioApp';

/**
 * Zephyr 3D Application Router
 * 
 * - Route "/" : New 3D Landing Page with dynamic in-motion Möbius Strip
 * - Route "/home" : Main Zephyr 3D Studio Workspace (drawing, AI refinement, InstantMesh 3D, export)
 * - Route "*" : Fallback redirect to "/"
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<StudioApp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
