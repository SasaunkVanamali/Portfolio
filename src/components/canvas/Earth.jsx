import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls, Preload } from "@react-three/drei";

const FloatingOrbs = () => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.2; // Slow rotation
  });

  return (
    <group ref={ref}>
      {[...Array(10)].map((_, i) => (
        <Sphere key={i} args={[0.3, 32, 32]} position={[
          Math.sin(i * 0.6) * 3, 
          Math.cos(i * 0.8) * 2, 
          Math.sin(i * 0.4) * 2
        ]}>
          <meshStandardMaterial emissive="blue" emissiveIntensity={1.5} />
        </Sphere>
      ))}
    </group>
  );
};

const OrbsCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingOrbs />
        <OrbitControls autoRotate enableZoom={false} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default OrbsCanvas;
