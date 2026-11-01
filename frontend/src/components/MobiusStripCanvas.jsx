import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * 3D Dynamic In-Motion Möbius Strip Canvas
 * 
 * Mathematically constructs a single-sided non-orientable topological manifold
 * and animates both its spatial 3D revolution and its continuous intrinsic twist flow.
 */
export default function MobiusStripCanvas({ className = '' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- 1. Scene, Camera, Renderer ---
    const width = container.clientWidth || 550;
    const height = container.clientHeight || 550;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // --- 2. Dynamic Omnidirectional Lighting (Eliminates Dark Shadows) ---
    // Hemisphere light ensures both sides of the non-orientable strip receive luminous illumination
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x18202f, 2.2);
    scene.add(hemiLight);

    const ambientLight = new THREE.AmbientLight(0x2a374a, 1.4);
    scene.add(ambientLight);

    // Front Mint Neon Key Light
    const mintLight = new THREE.PointLight(0x00f59b, 5.0, 30);
    mintLight.position.set(4, 3, 4.5);
    scene.add(mintLight);

    // Front Electric Coral Light
    const coralLight = new THREE.PointLight(0xff7f50, 5.0, 30);
    coralLight.position.set(-4, -3, 4.5);
    scene.add(coralLight);

    // Backstage Cyan Rim Light (illuminates the rear of the Möbius loop)
    const backCyanLight = new THREE.PointLight(0x38bdf8, 4.5, 30);
    backCyanLight.position.set(0, 3, -4.5);
    scene.add(backCyanLight);

    // Backstage Magenta/Coral Light
    const backCoralLight = new THREE.PointLight(0xff6b8b, 4.0, 30);
    backCoralLight.position.set(0, -3, -4.5);
    scene.add(backCoralLight);

    // --- 3. Parametric Möbius Geometry Generation ---
    const uSegments = 160;  // Ring divisions
    const vSegments = 28;   // Width divisions
    const radius = 2.15;    // Major ring radius
    const widthHalf = 0.78; // Strip half-width

    const vertexCount = (uSegments + 1) * (vSegments + 1);
    const positions = new Float32Array(vertexCount * 3);
    const colors = new Float32Array(vertexCount * 3);
    const uvs = new Float32Array(vertexCount * 2);
    const indices = [];

    // Indices for double triangles per quad
    for (let i = 0; i < uSegments; i++) {
      for (let j = 0; j < vSegments; j++) {
        const a = i * (vSegments + 1) + j;
        const b = (i + 1) * (vSegments + 1) + j;
        const c = (i + 1) * (vSegments + 1) + (j + 1);
        const d = i * (vSegments + 1) + (j + 1);

        indices.push(a, b, d);
        indices.push(b, c, d);
      }
    }

    // Palette gradient function: Mint (#00f59b) -> Cyan (#38bdf8) -> Coral (#FF7F50) -> Magenta/Violet
    const colorMint = new THREE.Color(0x00f59b);
    const colorCyan = new THREE.Color(0x38bdf8);
    const colorCoral = new THREE.Color(0xff7f50);
    const colorViolet = new THREE.Color(0xc084fc);

    function evaluateColor(t, outColor) {
      if (t < 0.28) {
        outColor.lerpColors(colorMint, colorCyan, t / 0.28);
      } else if (t < 0.62) {
        outColor.lerpColors(colorCyan, colorCoral, (t - 0.28) / 0.34);
      } else if (t < 0.88) {
        outColor.lerpColors(colorCoral, colorViolet, (t - 0.62) / 0.26);
      } else {
        outColor.lerpColors(colorViolet, colorMint, (t - 0.88) / 0.12);
      }
    }

    const tempColor = new THREE.Color();
    for (let i = 0; i <= uSegments; i++) {
      const uNorm = i / uSegments;
      evaluateColor(uNorm, tempColor);
      for (let j = 0; j <= vSegments; j++) {
        const idx = i * (vSegments + 1) + j;
        uvs[idx * 2] = uNorm;
        uvs[idx * 2 + 1] = j / vSegments;

        // Bright, luminous surface colors
        const edgeFactor = Math.abs(j / vSegments - 0.5) * 2.0;
        const cR = THREE.MathUtils.lerp(tempColor.r, 1.0, edgeFactor * 0.2);
        const cG = THREE.MathUtils.lerp(tempColor.g, 1.0, edgeFactor * 0.2);
        const cB = THREE.MathUtils.lerp(tempColor.b, 1.0, edgeFactor * 0.2);

        colors[idx * 3] = cR;
        colors[idx * 3 + 1] = cG;
        colors[idx * 3 + 2] = cB;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setIndex(indices);
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));

    // Luminous, reflective dual-sided material
    const material = new THREE.MeshPhysicalMaterial({
      side: THREE.DoubleSide,
      vertexColors: true,
      metalness: 0.25,
      roughness: 0.28,
      clearcoat: 0.9,
      clearcoatRoughness: 0.12,
      reflectivity: 0.85,
    });

    const mobiusMesh = new THREE.Mesh(geometry, material);
    scene.add(mobiusMesh);

    // Glowing border edge line (single continuous 4pi curve of the Möbius strip)
    const edgeSegments = uSegments * 2;
    const edgePositions = new Float32Array((edgeSegments + 1) * 3);
    const edgeGeometry = new THREE.BufferGeometry();
    edgeGeometry.setAttribute('position', new THREE.BufferAttribute(edgePositions, 3));

    const edgeMaterial = new THREE.LineBasicMaterial({
      color: 0x00f59b,
      linewidth: 2,
      transparent: true,
      opacity: 0.85,
    });
    const edgeLine = new THREE.Line(edgeGeometry, edgeMaterial);
    scene.add(edgeLine);

    // Floating topological particles flowing along the single continuous side
    const particleCount = 140;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const particleT = new Float32Array(particleCount);
    const particleV = new Float32Array(particleCount);
    const particleSpeed = new Float32Array(particleCount);

    for (let p = 0; p < particleCount; p++) {
      particleT[p] = (p / particleCount) * Math.PI * 4;
      particleV[p] = (Math.random() - 0.5) * 1.5;
      particleSpeed[p] = 0.28 + Math.random() * 0.38;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    // Particle sprite using canvas texture
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 32;
    pCanvas.height = 32;
    const pCtx = pCanvas.getContext('2d');
    const grad = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.3, 'rgba(0, 245, 155, 0.9)');
    grad.addColorStop(0.7, 'rgba(255, 127, 80, 0.4)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    pCtx.fillStyle = grad;
    pCtx.fillRect(0, 0, 32, 32);

    const particleTexture = new THREE.CanvasTexture(pCanvas);
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.18,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // --- 4. Interactive Mouse / Touch Orbiting ---
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotX = 0.35;
    let targetRotY = 0.45;
    let currentRotX = 0.35;
    let currentRotY = 0.45;

    const onPointerDown = (e) => {
      isDragging = true;
      prevMouseX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      prevMouseY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
    };

    const onPointerMove = (e) => {
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

      if (isDragging) {
        const deltaX = clientX - prevMouseX;
        const deltaY = clientY - prevMouseY;
        targetRotY += deltaX * 0.008;
        targetRotX += deltaY * 0.008;
        prevMouseX = clientX;
        prevMouseY = clientY;
      }
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // --- 5. Animation Loop ---
    let animationFrameId;
    let clock = new THREE.Clock();

    function updateMobiusGeometry(time) {
      // Dynamic traveling wave parameter (the twist revolving continuously along the loop!)
      const phase = time * 0.65;
      const posAttr = geometry.attributes.position;
      const pArr = posAttr.array;

      for (let i = 0; i <= uSegments; i++) {
        const u = (i / uSegments) * Math.PI * 2;
        // The half-twist plus continuous phase revolution!
        const alpha = u * 0.5 + phase;
        const cosAlpha = Math.cos(alpha);
        const sinAlpha = Math.sin(alpha);
        const cosU = Math.cos(u);
        const sinU = Math.sin(u);

        for (let j = 0; j <= vSegments; j++) {
          const v = ((j / vSegments) - 0.5) * 2.0 * widthHalf;
          const r = radius + v * cosAlpha;

          const x = r * cosU;
          const y = r * sinU;
          const z = v * sinAlpha;

          const idx = (i * (vSegments + 1) + j) * 3;
          pArr[idx] = x;
          pArr[idx + 1] = y;
          pArr[idx + 2] = z;
        }
      }
      posAttr.needsUpdate = true;
      geometry.computeVertexNormals();

      // Update edge boundary line (single continuous curve of length 4pi)
      const edgeAttr = edgeGeometry.attributes.position;
      const eArr = edgeAttr.array;
      for (let k = 0; k <= edgeSegments; k++) {
        const t = (k / edgeSegments) * Math.PI * 4;
        const u = t;
        const alpha = u * 0.5 + phase;
        const v = widthHalf;

        const r = radius + v * Math.cos(alpha);
        const x = r * Math.cos(u);
        const y = r * Math.sin(u);
        const z = v * Math.sin(alpha);

        eArr[k * 3] = x;
        eArr[k * 3 + 1] = y;
        eArr[k * 3 + 2] = z;
      }
      edgeAttr.needsUpdate = true;

      // Update particles moving along the single continuous side
      const partPosAttr = particleGeometry.attributes.position;
      const partColAttr = particleGeometry.attributes.color;
      const ppArr = partPosAttr.array;
      const pcArr = partColAttr.array;

      for (let p = 0; p < particleCount; p++) {
        particleT[p] += particleSpeed[p] * 0.016;
        if (particleT[p] > Math.PI * 4) particleT[p] -= Math.PI * 4;

        const u = particleT[p];
        const alpha = u * 0.5 + phase;
        const v = particleV[p] * widthHalf;

        const r = radius + v * Math.cos(alpha);
        const x = r * Math.cos(u);
        const y = r * Math.sin(u);
        const z = v * Math.sin(alpha);

        ppArr[p * 3] = x;
        ppArr[p * 3 + 1] = y;
        ppArr[p * 3 + 2] = z;

        const progress = (particleT[p] / (Math.PI * 4)) % 1.0;
        evaluateColor(progress, tempColor);
        pcArr[p * 3] = tempColor.r;
        pcArr[p * 3 + 1] = tempColor.g;
        pcArr[p * 3 + 2] = tempColor.b;
      }
      partPosAttr.needsUpdate = true;
      partColAttr.needsUpdate = true;
    }

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Dynamic geometry updates
      updateMobiusGeometry(elapsedTime);

      // Smooth spatial rotation & idle tumble
      if (!isDragging) {
        targetRotY += 0.005;
        targetRotX = 0.35 + Math.sin(elapsedTime * 0.35) * 0.12;
      }

      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      mobiusMesh.rotation.x = currentRotX;
      mobiusMesh.rotation.y = currentRotY;
      mobiusMesh.rotation.z = Math.sin(elapsedTime * 0.2) * 0.08;

      edgeLine.rotation.copy(mobiusMesh.rotation);
      particles.rotation.copy(mobiusMesh.rotation);

      // Orbit point lights slightly to produce shifting dynamic specular glints
      mintLight.position.x = Math.sin(elapsedTime * 0.6) * 4.5;
      mintLight.position.z = Math.cos(elapsedTime * 0.6) * 4.5 + 2.0;

      coralLight.position.x = -Math.sin(elapsedTime * 0.5) * 4.5;
      coralLight.position.z = -Math.cos(elapsedTime * 0.5) * 4.5 + 2.0;

      renderer.render(scene, camera);
    };

    animate();

    // --- 6. Resize Observer ---
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        if (newW > 0 && newH > 0) {
          camera.aspect = newW / newH;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH);
        }
      }
    });
    resizeObserver.observe(container);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      domEl.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      if (container.contains(domEl)) {
        container.removeChild(domEl);
      }
      geometry.dispose();
      material.dispose();
      edgeGeometry.dispose();
      edgeMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`relative w-full h-full select-none ${className}`}>
      {/* 3D WebGL Canvas Target - Clean, borderless, and unoccluded */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none flex items-center justify-center"
      />
    </div>
  );
}
