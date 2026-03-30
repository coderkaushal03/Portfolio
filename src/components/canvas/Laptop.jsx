import React, { useRef } from 'react';
import { Text, RoundedBox, Float } from '@react-three/drei';

const Laptop = (props) => {
  return (
    <Float floatIntensity={1} rotationIntensity={0.5} speed={1.5} floatingRange={[-0.1, 0.1]}>
      <group {...props} dispose={null}>
        {/* Base Chassis */}
        <RoundedBox args={[3.2, 0.1, 2.2]} radius={0.03} smoothness={4} position={[0, -0.05, 0]}>
          <meshStandardMaterial color="#1f1f1f" roughness={0.6} metalness={0.9} />
        </RoundedBox>

        {/* Keyboard Area (Inset Glow) */}
        <mesh position={[0, 0.01, 0.2]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[2.8, 1.3]} />
          <meshStandardMaterial color="#0a0a0a" emissive="#00f0ff" emissiveIntensity={0.15} roughness={0.9} />
        </mesh>
        
        {/* Touchpad */}
        <RoundedBox args={[0.8, 0.015, 0.5]} radius={0.02} position={[0, 0.01, 0.8]}>
          <meshStandardMaterial color="#111" roughness={0.8} />
        </RoundedBox>

        {/* Lid Chassis - Rotated to be open */}
        <group position={[0, 0, -1.05]} rotation={[-0.25, 0, 0]}> 
          <RoundedBox args={[3.2, 2.2, 0.1]} radius={0.03} smoothness={4} position={[0, 1.1, -0.05]}>
            <meshStandardMaterial color="#1f1f1f" roughness={0.6} metalness={0.9} />
          </RoundedBox>

          {/* Screen */}
          <mesh position={[0, 1.1, 0.006]}>
            <planeGeometry args={[3.0, 1.9]} />
            <meshBasicMaterial color="#050505" />
            
            {/* Native WebGL Screen Content - Bulletproof Visibility */}
            <group position={[0, 0, 0.01]}>
              {/* Top Accent Line */}
              <mesh position={[0, 0.93, 0]}>
                <planeGeometry args={[2.95, 0.03]} />
                <meshBasicMaterial color="#00f0ff" />
              </mesh>
              
              {/* 3D Logo */}
              <Text
                position={[0, 0.15, 0]}
                fontSize={0.35}
                color="#ffffff"
                anchorX="center"
                anchorY="middle"
                letterSpacing={0.02}
                outlineWidth={0.005}
                outlineColor="#00f0ff"
              >
                &lt;Kaushal/&gt;
              </Text>
              
              {/* Tagline Badge */}
              <mesh position={[0, -0.35, 0]}>
                <planeGeometry args={[1.6, 0.2]} />
                <meshBasicMaterial color="#111111" />
                {/* Border for Badge */}
                <mesh position={[0, 0, -0.001]}>
                  <planeGeometry args={[1.62, 0.22]} />
                  <meshBasicMaterial color="#b026ff" />
                </mesh>
                
                <Text
                  position={[0, 0, 0.01]}
                  fontSize={0.07}
                  color="#00f0ff"
                  letterSpacing={0.15}
                >
                  B.TECH CSE | FULL STACK
                </Text>
              </mesh>
              
              {/* Terminal Boot Text */}
              <Text
                position={[-1.4, -0.8, 0]}
                fontSize={0.05}
                color="#888888"
                anchorX="left"
                anchorY="bottom"
                lineHeight={1.5}
              >
                {"> sys.run('portfolio.exe')\n> loading WebGL Engine: OK\n> executing rendering cycle..."}
              </Text>
            </group>
          </mesh>
          
          {/* Light emitting off the screen onto the keyboard */}
          <pointLight position={[0, 1.1, 0.5]} distance={2.5} intensity={0.4} color="#00f0ff" />
        </group>
      </group>
    </Float>
  );
};

export default Laptop;
