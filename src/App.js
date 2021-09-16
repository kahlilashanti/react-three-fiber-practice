
import './App.css';

import { Canvas } from 'react-three-fiber'
//useFrame is a React hook used for animation
//useFrame can only be used in the canvas
import { Suspense } from 'react';
import Box from './components/Box'
import Orbit from './components/Orbit'
import Background from './components/Background';
import Floor from './components/Floor';
import Bulb from './components/Bulb';
import ColorPicker from './components/ColorPicker';
import Dragable from './components/Dragable';

function App() {
  //CREATED SCENE USING REACT THREE FIBER
  return (
    //as long as we're inside the canvas we can use tags to declare three js objects
    //we have access to all the namespaces
    //Canvas takes the width and height of the parent div
    <div style={{ height: '100vh', width: '100vw' }}>
      {/* color changer to change color of mesh with a click */}
      <ColorPicker />

      <Canvas
        shadowMap
        style={{ background: 'black' }}
        camera={{ position: [7, 7, 7] }}
      >
        <fog attach='fog' args={['white', 1, 10]} />
        <ambientLight intensity={0.2} />

        {/* <Bulb position={[0, 3, 0]} /> */}
        <Orbit />
        <axesHelper args={[5]} />
        <Dragable>
          <Bulb position={[0, 3, 0]} />
          <Suspense fallback={null}>
            <Box position={[-4, 1, 0]} />
          </Suspense>
          <Suspense fallback={null}>
            <Box position={[4, 1, 0]} />
          </Suspense>
        </Dragable>
        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <Floor position={[0, -0.5, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
