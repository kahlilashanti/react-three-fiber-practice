
import './App.css';

import { Canvas } from 'react-three-fiber'
//useFrame is a React hook used for animation
//useFrame can only be used in the canvas
import { Physics } from 'use-cannon';
import { Suspense } from 'react';
// import Box from './components/Box'
import Orbit from './components/Orbit'
import Background from './components/Background';
import Floor from './components/Floor';
// import Bulb from './components/Bulb';
import ColorPicker from './components/ColorPicker';
import Cars from './components/Cars';
import CameraControls from './components/CameraControls';
import CameraButtons from './components/CameraButtons';
import state from './state';
import Lights from './components/Lights';
import { EffectComposer, DepthOfField, Bloom } from 'react-postprocessing';
//to prepare for production we need a public url for any files we are importing from our public folder

function App() {
  //CREATED SCENE USING REACT THREE FIBER
  return (
    //as long as we're inside the canvas we can use tags to declare three js objects
    //we have access to all the namespaces
    //Canvas takes the width and height of the parent div
    <div style={{ height: '100vh', width: '100vw' }}>
      {/* color changer to change color of mesh with a click */}
      <ColorPicker />
      <CameraButtons />
      <Canvas
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: false
        }}


        shadowMap
        style={{ background: 'black' }}
        camera={{ position: [7, 7, 7] }}
      > <CameraControls state={state} />
        {/* <fog attach='fog' args={['white', 1, 10]} /> */}

        <Lights />
        <Orbit />
        <axesHelper args={[5]} />

        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <Physics>
          <Cars />
          <Floor position={[0, -0.5, 0]} />
        </Physics>
        <EffectComposer>
          <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
          <Bloom luminanceThreshold={1} luminanceSmoothing={0.9} height={300} />
        </EffectComposer>
      </Canvas>
    </div >
  );
}

export default App;
