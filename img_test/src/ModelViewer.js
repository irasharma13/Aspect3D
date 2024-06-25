import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function ModelViewer({ modelUrl }) {
  const { scene } = useGLTF(modelUrl);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <primitive object={scene} scale={1} />
      <OrbitControls />
    </Canvas>
  );
}

export default ModelViewer;
