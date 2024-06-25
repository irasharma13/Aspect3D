import logo from './logo.svg';
import './App.css';
import HomePage from './Homepage';
import ThreeDModel from './ThreeDModel';
import React, { useState } from 'react';
import FileUpload from './FileUpload';
import ModelViewer from './ModelViewer';


function App() {
  const [modelUrl, setModelUrl] = useState(null);
  return (
    <div className="App">
      {/* <HomePage/> */}
      <ThreeDModel />
      {/* <FileUpload setModelUrl={setModelUrl} />
      {modelUrl && <ModelViewer modelUrl={modelUrl} />} */}
    </div>
  );
}

export default App;
