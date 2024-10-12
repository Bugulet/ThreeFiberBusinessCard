// App.js
import * as THREE from 'three';
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import './App.css';

const ARMarkerControls = ({ children }) => {
  return (
    <a-scene
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false;"
      vr-mode-ui="enabled: false"
      renderer="logarithmicDepthBuffer: true; antialias: true;"
    >
      <a-marker
        preset="hiro"
        type="pattern"
        url="https://cdn.rawgit.com/AR-js-org/AR.js/master/data/hiro.patt"
      >
        {/* React component for rendering 3D content */}
        <a-entity>
          {children}
        </a-entity>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  );
};

const ARScene = () => {
  const cubeRef = useRef();

  return (
    <ARMarkerControls>
      <Canvas style={{ position: 'absolute', top: 0, left: 0 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {/* Cube model on top of the Hiro marker */}
        <Box ref={cubeRef} args={[1, 1, 1]} position={[0, 0.5, 0]} scale={0.5}>
          <meshStandardMaterial attach="material" color="blue" />
        </Box>
      </Canvas>
    </ARMarkerControls>
  );
};

function App() {
  return (
    <div className="App">
      <ARScene />
    </div>
  );
}

export default App;
