import React, { useState, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { ChromePicker } from 'react-color';
import './ThreeModel.css';

// Model component to load and display the 3D model
function Model({ url, rotation, colors }) {
  const { scene } = useGLTF(url, (loader) => {
    console.log(`Loading model from ${url}`);
  }, undefined, (error) => {
    console.error(`Error loading model from ${url}`, error);
  });

  useEffect(() => {
    if (scene) {
      console.log(`Model loaded from ${url}`);
      scene.traverse((child) => {
        if (child.isMesh) {
          child.material.color.set(colors.main);
        }
      });
    }
  }, [scene, url, colors]);

  return scene ? <primitive object={scene} rotation={rotation} /> : null;
}

function CameraController({ zoom }) {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(3, 2, zoom);
    camera.updateProjectionMatrix();
  }, [zoom, camera]);

  return null;
}

function ThreeDModelCard({ modelUrl }) {
  const [zoom, setZoom] = useState(3); 
  const [rotation, setRotation] = useState([0, 0, 0]); 
  const [colors, setColors] = useState({ main: '#ffffff' }); 

  const adjustRotation = (axis, value) => {
    setRotation((prevRotation) => {
      const newRotation = [...prevRotation];
      newRotation[axis] = value;
      return newRotation;
    });
  };

  const handleColorChange = (color) => {
    setColors({ main: color.hex });
  };

  return (
    <div className="model-card">
      <div className="canvas-container">
        <Canvas
          camera={{ position: [0, 1, zoom], fov: 75 }}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 10, 7.5]} intensity={1} />
          <Model url={modelUrl} rotation={rotation} colors={colors} />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
          <CameraController zoom={zoom} />
        </Canvas>
      </div>
      <div className="controls">
        <div className="control-column">
          <div style={{ marginBottom: '10px' }}>
            <label className="label">
              Rotate X:
              <input type="range" min="-3.14" max="3.14" step="0.01" value={rotation[0]} onChange={(e) => adjustRotation(0, parseFloat(e.target.value))} className="input" />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label className="label">
              Rotate Y:
              <input type="range" min="-3.14" max="3.14" step="0.01" value={rotation[1]} onChange={(e) => adjustRotation(1, parseFloat(e.target.value))} className="input" />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label className="label">
              Rotate Z:
              <input type="range" min="-3.14" max="3.14" step="0.01" value={rotation[2]} onChange={(e) => adjustRotation(2, parseFloat(e.target.value))} className="input" />
            </label>
          </div>
        </div>
        <div className="control-column">
          <div style={{ marginBottom: '10px' }}>
            <label className="label">
              Main Color:
              <ChromePicker color={colors.main} onChange={handleColorChange} />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

function ThreeDModel() {
  const [modelUrls, setModelUrls] = useState([
    '/star.glb',
    '/test2.glb',
    '/test1.glb'
  ]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setModelUrls((prevUrls) => [...prevUrls, url]);
    }
  };

  return (
    <div className="container">
      <input type="file" accept=".glb" onChange={handleFileUpload} className="file-input" />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        {modelUrls.map((url, index) => (
          <ThreeDModelCard key={index} modelUrl={url} />
        ))}
      </div>
    </div>
  );
}

export default ThreeDModel;
