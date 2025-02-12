import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Preload } from "@react-three/drei";
import styled from "styled-components";

const StyledCanvasWrapper = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  inset: 0;
`;

const WavyLines = () => {
  const ref = useRef();
  const points = new Array(100).fill().map((_, i) => [
    Math.sin(i * 0.1) * 1.5,
    Math.cos(i * 0.1) * 1.5,
    i * 0.02,
  ]);

  useFrame((state, delta) => {
    ref.current.rotation.y += delta / 8;
  });

  return <Line ref={ref} points={points} color="cyan" lineWidth={2} />;
};

const WavyCanvas = () => {
  return (
    <StyledCanvasWrapper>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <Suspense fallback={null}>
          <WavyLines />
        </Suspense>
        <Preload all />
      </Canvas>
    </StyledCanvasWrapper>
  );
};

export default WavyCanvas;
