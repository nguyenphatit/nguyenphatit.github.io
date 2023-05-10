'use client';

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import Box from "./Box";

export default function Scene() {
  const [boxPosition, setBoxPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    setBoxPosition({ x: window.scrollY * 0.001, y: window.scrollY * 0.0001 });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen">
      <Canvas id="floating-canvas">
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={boxPosition} color="orange" />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
