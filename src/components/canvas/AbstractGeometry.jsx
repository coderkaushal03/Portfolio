import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';

const AbstractGeometry = () => {
  const meshRef = useRef();

  useFrame((state) => {
    // Gentle rotation over time
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2} floatingRange={[-0.5, 0.5]}>
      <mesh ref={meshRef} position={[2, 0, -2]}>
        <icosahedronGeometry args={[1.5, 4]} />
        <MeshDistortMaterial
          color="#00f0ff"
          emissive="#b026ff"
          emissiveIntensity={0.5}
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
        />
      </mesh>
    </Float>
  );
};

export default AbstractGeometry;
