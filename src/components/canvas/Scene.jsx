import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Preload, Stars, PresentationControls, Float } from '@react-three/drei';
import Laptop from './Laptop';
import * as THREE from 'three';

// Background abstract environment with glowing particles and shapes
const Environment = () => {
  const rings = useRef();
  
  useFrame((state) => {
    if (rings.current) {
      rings.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      rings.current.rotation.z = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <group>
      {/* Particle Field */}
      <Stars radius={100} depth={50} count={4000} factor={4} saturation={1} fade speed={1.5} />
      
      {/* Abstract Animated Geometry in the Background */}
      <group ref={rings} position={[0, 0, -15]}>
        {[...Array(6)].map((_, i) => (
          <mesh key={i} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
            <torusGeometry args={[12 + i * 3, 0.02, 16, 100]} />
            <meshBasicMaterial color={i % 2 === 0 ? "#00f0ff" : "#b026ff"} transparent opacity={0.1 - (0.01 * i)} />
          </mesh>
        ))}
      </group>

      <Float speed={1} rotationIntensity={1} floatIntensity={1} floatingRange={[-2, 2]}>
        <mesh position={[-12, 6, -20]}>
          <icosahedronGeometry args={[3, 0]} />
          <meshBasicMaterial color="#b026ff" wireframe transparent opacity={0.15} />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={1.5} floatIntensity={1.5} floatingRange={[-2, 2]}>
        <mesh position={[12, -4, -15]}>
          <octahedronGeometry args={[2.5, 0]} />
          <meshBasicMaterial color="#00f0ff" wireframe transparent opacity={0.2} />
        </mesh>
      </Float>
    </group>
  );
};

// Main Scene Composition
const SceneContent = () => {
  const { viewport } = useThree();
  const isMobile = viewport.width < 5;
  
  // Shift laptop right on desktop, center on mobile
  const position = isMobile ? [0, -1.0, 0] : [1.8, -0.5, 0];
  const scale = isMobile ? 0.7 : 0.9;
  
  // Custom camera sway based on mouse movement
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, (state.pointer.x * 1.5), 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, (state.pointer.y * 1.5), 0.05);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} color="#00f0ff" />
      <spotLight position={[-5, -5, -5]} intensity={1.2} color="#b026ff" />
      
      <Environment />

      {/* Wrapping the Laptop in PresentationControls allows users to slightly grab and rotate it */}
      <PresentationControls
        global={false} 
        cursor={true} 
        snap={true} 
        speed={1} 
        zoom={1} 
        rotation={[0, -0.3, 0]} 
        polar={[-0.2, 0.2]} // Vertical limits
        azimuth={[-0.5, 0.5]} // Horizontal limits
      >
        <Laptop position={position} scale={scale} />
      </PresentationControls>
    </>
  );
};

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <SceneContent />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
