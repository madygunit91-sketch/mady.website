import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, PresentationControls, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { useScroll } from 'framer-motion';

// Preload compressed GLTF models into browser memory
useGLTF.preload('/knight.glb');
useGLTF.preload('/logo.glb');

// Dynamic System Dark / Light Mode Listener Hook
function useSystemTheme() {
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  React.useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setIsDark(e.matches);
    
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return isDark;
}

// Multi-Layer High-Voltage Lightning & Continuous Corona Discharge System
function KnightLightning({ isDark = true }) {
  const coreLineRef = useRef();
  const auraLineRef = useRef();
  const lightRef = useRef();
  const flashTimer = useRef(0);
  const isFlashing = useRef(false);
  const flashCount = useRef(0);
  
  // 360 floats = 120 vertices = 60 line segments for dense multi-branch lightning
  const positions = React.useMemo(() => new Float32Array(360), []);
  const auraPositions = React.useMemo(() => new Float32Array(360), []);

  const generateBolt = (start, end, maxDisplace, segments) => {
    const points = [start];
    for (let i = 1; i < segments; i++) {
      const t = i / segments;
      const x = start.x + (end.x - start.x) * t + (Math.random() - 0.5) * maxDisplace;
      const y = start.y + (end.y - start.y) * t + (Math.random() - 0.5) * maxDisplace;
      const z = start.z + (end.z - start.z) * t + (Math.random() - 0.5) * maxDisplace;
      points.push(new THREE.Vector3(x, y, z));
    }
    points.push(end);
    return points;
  };

  useFrame((state, delta) => {
    if (!coreLineRef.current || !auraLineRef.current) return;

    flashTimer.current -= delta;

    if (flashTimer.current <= 0) {
      if (flashCount.current > 0) {
        // High frequency multi-strobe lightning burst
        isFlashing.current = !isFlashing.current;
        flashCount.current--;
        flashTimer.current = 0.03 + Math.random() * 0.05;
      } else {
        // Frequent strikes: every 0.6 to 1.4 seconds
        isFlashing.current = Math.random() > 0.3;
        flashCount.current = isFlashing.current ? Math.floor(3 + Math.random() * 5) : 0;
        flashTimer.current = isFlashing.current ? 0.04 : 0.6 + Math.random() * 0.9;
      }
    }

    let idx = 0;
    
    // 1. Continuous Micro-Arcs (Always Active Corona Discharge across the knight)
    const continuousArcs = [
      { start: new THREE.Vector3(0.05, 1.85, 0.1), end: new THREE.Vector3(-0.15, 1.6, 0.25) },
      { start: new THREE.Vector3(-0.1, 1.7, -0.1), end: new THREE.Vector3(0.2, 1.45, -0.05) },
      { start: new THREE.Vector3(0.25, 1.3, 0.2), end: new THREE.Vector3(0.1, 0.9, 0.35) },
      { start: new THREE.Vector3(-0.2, 1.1, -0.2), end: new THREE.Vector3(-0.05, 0.6, -0.3) }
    ];

    continuousArcs.forEach(arc => {
      const pts = generateBolt(arc.start, arc.end, 0.14, 4);
      for (let i = 0; i < pts.length - 1; i++) {
        if (idx + 6 <= positions.length) {
          positions[idx] = pts[i].x;
          positions[idx+1] = pts[i].y;
          positions[idx+2] = pts[i].z;
          positions[idx+3] = pts[i+1].x;
          positions[idx+4] = pts[i+1].y;
          positions[idx+5] = pts[i+1].z;

          // Aura layer slightly displaced for neon bloom effect
          auraPositions[idx] = pts[i].x * 1.03;
          auraPositions[idx+1] = pts[i].y * 1.02;
          auraPositions[idx+2] = pts[i].z * 1.03;
          auraPositions[idx+3] = pts[i+1].x * 1.03;
          auraPositions[idx+4] = pts[i+1].y * 1.02;
          auraPositions[idx+5] = pts[i+1].z * 1.03;
          idx += 6;
        }
      }
    });

    // 2. High-Voltage Lightning Strike Forks during Flash Bursts
    if (isFlashing.current) {
      const majorStrikes = [
        { 
          start: new THREE.Vector3((Math.random() - 0.5) * 1.5, 3.2 + Math.random() * 0.8, (Math.random() - 0.5) * 1.5), 
          end: new THREE.Vector3((Math.random() - 0.5) * 0.5, 1.7 + Math.random() * 0.3, (Math.random() - 0.5) * 0.5) 
        },
        { 
          start: new THREE.Vector3(0.1, 1.7, 0.1), 
          end: new THREE.Vector3(-0.5, 0.2 + (Math.random() - 0.5) * 0.4, 0.4) 
        },
        { 
          start: new THREE.Vector3(-0.1, 1.6, -0.1), 
          end: new THREE.Vector3(0.45, -0.1, -0.3) 
        },
        { 
          start: new THREE.Vector3((Math.random() - 0.5) * 0.8, 1.2, 0.3), 
          end: new THREE.Vector3((Math.random() - 0.5) * 1.0, -0.4, -0.2) 
        }
      ];

      majorStrikes.forEach(target => {
        const pts = generateBolt(target.start, target.end, 0.32, 7);
        for (let i = 0; i < pts.length - 1; i++) {
          if (idx + 6 <= positions.length) {
            positions[idx] = pts[i].x;
            positions[idx+1] = pts[i].y;
            positions[idx+2] = pts[i].z;
            positions[idx+3] = pts[i+1].x;
            positions[idx+4] = pts[i+1].y;
            positions[idx+5] = pts[i+1].z;

            auraPositions[idx] = pts[i].x * 1.05;
            auraPositions[idx+1] = pts[i].y * 1.03;
            auraPositions[idx+2] = pts[i].z * 1.05;
            auraPositions[idx+3] = pts[i+1].x * 1.05;
            auraPositions[idx+4] = pts[i+1].y * 1.03;
            auraPositions[idx+5] = pts[i+1].z * 1.05;
            idx += 6;
          }
        }
      });

      if (lightRef.current) {
        lightRef.current.intensity = 35 + Math.random() * 45;
        lightRef.current.position.set(
          (Math.random() - 0.5) * 1.0, 
          1.8 + Math.random() * 0.9, 
          0.8 + (Math.random() - 0.5) * 0.8
        );
      }
    } else {
      if (lightRef.current) {
        lightRef.current.intensity = 2.0; // Ambient electrical charge
      }
    }

    // Clear unused buffer vertices
    while (idx < positions.length) {
      positions[idx] = 0;
      auraPositions[idx] = 0;
      idx++;
    }

    coreLineRef.current.geometry.attributes.position.needsUpdate = true;
    auraLineRef.current.geometry.attributes.position.needsUpdate = true;
  });

  const coreColor = isDark ? "#ffffff" : "#ffffff";
  const auraColor = isDark ? "#38bdf8" : "#2563eb";
  const flashColor = isDark ? "#cffafe" : "#fef08a";
  const ambientIonColor = isDark ? "#60a5fa" : "#3b82f6";
  const goldIonColor = isDark ? "#f59e0b" : "#d97706";

  return (
    <group>
      {/* Outer Cyan/Electric Blue Plasma Glow Line Layer */}
      <lineSegments ref={auraLineRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={auraPositions.length / 3}
            array={auraPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial 
          color={auraColor} 
          transparent 
          opacity={0.85} 
          linewidth={4} 
          blending={THREE.AdditiveBlending} 
        />
      </lineSegments>

      {/* Superheated White-Hot Core Lightning Bolt Layer */}
      <lineSegments ref={coreLineRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial 
          color={coreColor} 
          transparent 
          opacity={0.98} 
          linewidth={2} 
          blending={THREE.AdditiveBlending} 
        />
      </lineSegments>
      
      {/* Dynamic Lightning Flash Strobe */}
      <pointLight ref={lightRef} color={flashColor} distance={14} decay={1.4} intensity={2} />
      
      {/* Constant Electric Ionization Corona Glow */}
      <pointLight color={ambientIonColor} position={[0, 1.4, 0.4]} distance={6} decay={2} intensity={2.5} />
      <pointLight color={goldIonColor} position={[0, 0.3, 0.4]} distance={5} decay={2} intensity={1.8} />
    </group>
  );
}

function KnightModel({ progress, isDark = true }) {
  const { scene } = useGLTF('/knight.glb');
  const clone = React.useMemo(() => scene.clone(), [scene]);
  const { viewport } = useThree();
  
  React.useEffect(() => {
    clone.traverse((child) => {
      if (child.isMesh) {
        // Deep obsidian chrome in dark mode / Polished regal gold in light mode
        child.material = new THREE.MeshPhysicalMaterial({
          color: isDark ? '#18191c' : '#78531e', 
          metalness: isDark ? 0.85 : 0.88,
          roughness: isDark ? 0.22 : 0.20,
          clearcoat: 1.0,
          clearcoatRoughness: 0.12,
          reflectivity: 1.0
        });
      }
    });
  }, [clone, isDark]);

  const groupRef = useRef();

  // Responsive dynamic bounds
  const isPortrait = viewport.height > viewport.width;
  
  // On portrait/mobile, keep knight clearly visible on screen
  const xOffset = isPortrait ? viewport.width * 0.16 : Math.min(viewport.width * 0.25, 4);
  const rightX = xOffset;
  const leftX = -xOffset;
  const centerX = 0;
  
  // Responsive scale ensuring full visibility across screens
  const responsiveScale = isPortrait 
    ? Math.min(viewport.width * 0.62, 3.4)
    : Math.min(viewport.width, viewport.height) * 0.52;
    
  // Base Y positioning - higher on mobile so it is 100% visible on small screens
  const baseY = isPortrait ? -viewport.height * 0.28 : -viewport.height * 0.46;

  const farRightX = isPortrait ? viewport.width * 0.18 : Math.min(viewport.width * 0.32, 4.5);
  
  const states = [
    { x: rightX, rot: 0, z: -1 },                  // 0: start
    { x: leftX,  rot: Math.PI / 2, z: -1.5 },      // 1: in-zahlen
    { x: rightX, rot: Math.PI, z: -1 },            // 2: was-wir-bauen
    { x: leftX,  rot: Math.PI * 1.5, z: -1.5 },    // 3: wie-wir-bauen
    { x: rightX, rot: Math.PI * 2, z: -1 },        // 4: arbeiten
    { x: rightX, rot: Math.PI * 2.5, z: -1 },      // 5: aus-einer-hand
    { x: leftX,  rot: Math.PI * 3, z: -1.5 },      // 6: vom-briefing-zum-launch
    { x: rightX, rot: Math.PI * 3.5, z: -1 },      // 7: haeufige-fragen
    { x: rightX, rot: Math.PI * 4, z: -1 },        // 8: das-system
    { x: rightX, rot: Math.PI * 4.4, z: -1.2 },    // 9: aktivitaet
    { x: farRightX, rot: Math.PI * 4.75, z: -0.8 }, // 10: founder
    { x: centerX, rot: Math.PI * 5.2, z: -0.5 },   // 11: projekt-anfragen
    { x: centerX, rot: Math.PI * 6, z: -0.5 }      // 12: footer
  ];

  useFrame(() => {
    if (!groupRef.current) return;
    const p = progress.get();
    const safeP = isNaN(p) ? 0 : p;
    
    const floatIndex = safeP * (states.length - 1);
    const index = Math.min(Math.floor(floatIndex), states.length - 2);
    const localP = floatIndex - index;
    
    const curr = states[index];
    const next = states[index + 1];
    
    groupRef.current.position.set(
      THREE.MathUtils.lerp(curr.x, next.x, localP),
      baseY,
      THREE.MathUtils.lerp(curr.z, next.z, localP)
    );
    groupRef.current.rotation.set(0, THREE.MathUtils.lerp(curr.rot, next.rot, localP), 0);
    groupRef.current.scale.setScalar(responsiveScale);
  });

  return (
    <group ref={groupRef}>
      <primitive object={clone} />
      {/* Lightning effect attached directly to Knight model coordinate space */}
      <KnightLightning isDark={isDark} />
    </group>
  );
}

function Scene({ isDark = true }) {
  const { scrollYProgress } = useScroll();

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <KnightModel progress={scrollYProgress} isDark={isDark} />
    </Float>
  );
}

class WebGLErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.warn("WebGL context unavailable or failed, falling back to CSS background:", error);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback || null;
    }
    return this.props.children;
  }
}

function isWebGLSupported() {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl') || canvas.getContext('webgl2')));
  } catch (e) {
    return false;
  }
}

export default function Background3D() {
  const isDark = useSystemTheme();
  const [supported, setSupported] = React.useState(true);

  React.useEffect(() => {
    setSupported(isWebGLSupported());
  }, []);

  if (!supported) return null;

  return (
    <div className="fixed inset-0 z-[5] pointer-events-none">
      <WebGLErrorBoundary fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ 
            powerPreference: "high-performance",
            antialias: true, 
            alpha: true,
            stencil: false,
            depth: true
          }}
          onCreated={({ gl }) => {
            gl.domElement.addEventListener('webglcontextlost', (event) => {
              event.preventDefault();
              setSupported(false);
            }, false);
          }}
        >
          {/* Balanced, sculpted studio lighting to highlight glossy metallic contours */}
          <ambientLight intensity={isDark ? 1.4 : 1.8} />
          <directionalLight position={[10, 15, 10]} intensity={isDark ? 3.5 : 4.0} color={isDark ? "#ffffff" : "#fffbeb"} />
          <directionalLight position={[-10, 8, -5]} intensity={isDark ? 2.5 : 3.0} color={isDark ? "#fde047" : "#f59e0b"} />
          <directionalLight position={[0, -8, 8]} intensity={1.2} color={isDark ? "#94a3b8" : "#fed7aa"} />
          <pointLight position={[0, 1, 4]} intensity={isDark ? 1.5 : 2.0} distance={10} color="#ffffff" />
          
          <PresentationControls
            global
            rotation={[0, 0, 0]}
            polar={[-0.1, 0.1]}
            azimuth={[-0.2, 0.2]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 400 }}
          >
            <React.Suspense fallback={null}>
              <Scene isDark={isDark} />
            </React.Suspense>
          </PresentationControls>

          <Sparkles count={80} scale={15} size={1.8} speed={0.4} opacity={0.15} color={isDark ? "#ffffff" : "#fbbf24"} />
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
}
