import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { Environment, PresentationControls, Float, Sparkles, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useScroll } from 'framer-motion';

function KnightModel({ progress }) {
  const gltf = useLoader(GLTFLoader, '/knight_uncompressed.glb');
  const clone = React.useMemo(() => gltf.scene.clone(), [gltf]);
  const { viewport } = useThree();
  
  React.useEffect(() => {
    clone.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshPhysicalMaterial({
          color: '#1a1a1a', 
          metalness: 0.8,
          roughness: 0.2,
          clearcoat: 1.0,
          clearcoatRoughness: 0.1,
          envMapIntensity: 2.0 
        });
      }
    });
  }, [clone]);

  const groupRef = useRef();

  // Responsive dynamic bounds
  const isPortrait = viewport.height > viewport.width;
  // On portrait/mobile, restrict horizontal movement so it doesn't fly off-screen
  // On desktop, clamp the max displacement so it looks natural on ultra-wides
  const xOffset = isPortrait ? viewport.width * 0.15 : Math.min(viewport.width * 0.25, 4);
  const rightX = xOffset;
  const leftX = -xOffset;
  const centerX = 0;
  
  // Increase scale to be almost the size of the text as requested
  const responsiveScale = isPortrait 
    ? viewport.width * 0.55 
    : Math.min(viewport.width, viewport.height) * 0.52;
    
  // Lower the base Y position significantly so the much larger knight fits fully on screen
  const baseY = isPortrait ? -viewport.height * 0.38 : -viewport.height * 0.46;

  // 12 sections mapping (text position -> knight position)
  // 0: start (text L) -> knight R
  // 1: in-zahlen (text R) -> knight L
  // 2: was-wir-bauen (text L) -> knight R
  // 3: wie-wir-bauen (text R) -> knight L
  // 4: arbeiten (text L/C) -> knight R
  // 5: aus-einer-hand (text L) -> knight R
  // 6: vom-briefing-zum-launch (text R) -> knight L
  // 7: haeufige-fragen (text L) -> knight R
  // 8: das-system (text L) -> knight R
  // 9: aktivitaet (C) -> knight C
  // 10: founder (text L, image R) -> knight R
  // 11: projekt-anfragen (C) -> knight C
  // 12: footer (C) -> knight C
  
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
    { x: centerX, rot: Math.PI * 4.5, z: -0.5 },   // 9: aktivitaet
    { x: rightX * 1.5,  rot: Math.PI * 4.75, z: -1 },    // 10: founder
    { x: centerX, rot: Math.PI * 5, z: -0.5 },     // 11: projekt-anfragen
    { x: centerX, rot: Math.PI * 6, z: -0.5 }      // 12: footer
  ];

  useFrame(() => {
    if (!groupRef.current) return;
    const p = progress.get();
    
    // Safety check against NaN
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
    </group>
  );
}

function LogoModel({ progress }) {
  const gltf = useLoader(GLTFLoader, '/logo_uncompressed.glb');
  const clone = React.useMemo(() => gltf.scene.clone(), [gltf]);
  
  React.useEffect(() => {
    clone.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshBasicMaterial({
          color: '#ffffff', 
          transparent: true,
          opacity: 0.1
        });
      }
    });
  }, [clone]);

  const groupRef = useRef();

  useFrame(() => {
    if (!groupRef.current) return;
    const p = progress.get();
    groupRef.current.position.set(
      Math.sin(p * Math.PI) * 2, 
      0, 
      -2 - (p * 4)
    );
    groupRef.current.rotation.set(0, p * Math.PI, 0);
    groupRef.current.scale.setScalar(3.5 + p * 1.5);
  });

  return (
    <group ref={groupRef}>
      <primitive object={clone} />
    </group>
  );
}

function DebugBox() {
  return (
    <mesh position={[0, 0, 0]} scale={2}>
      <boxGeometry args={[1, 1, 1]} />
      <meshNormalMaterial />
    </mesh>
  );
}

function Scene() {
  const { scrollYProgress } = useScroll();

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <LogoModel progress={scrollYProgress} />
      <KnightModel progress={scrollYProgress} />
    </Float>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-[5] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={2.0} />
        <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={5} castShadow />
        <spotLight position={[-10, -10, -10]} angle={0.3} penumbra={1} intensity={2} />
        
        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[-0.1, 0.1]}
          azimuth={[-0.2, 0.2]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
        >
          <React.Suspense fallback={null}>
            <Scene />
            <Environment preset="studio" />
          </React.Suspense>
        </PresentationControls>

        <Sparkles count={150} scale={15} size={2} speed={0.4} opacity={0.15} color="#ffffff" />
        <ContactShadows position={[0, -2.5, 0]} opacity={0.7} scale={15} blur={3} far={5} color="#000000" />
      </Canvas>
    </div>
  );
}
