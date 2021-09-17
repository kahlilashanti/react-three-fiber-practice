
import './App.css';

import { Canvas } from 'react-three-fiber'
//useFrame is a React hook used for animation
//useFrame can only be used in the canvas
import { Physics } from 'use-cannon';
import { Suspense } from 'react';
import Box from './components/Box'
import Orbit from './components/Orbit'
import Background from './components/Background';
import Floor from './components/Floor';
import Bulb from './components/Bulb';
import ColorPicker from './components/ColorPicker';
import Dragable from './components/Dragable';
import Model from './components/Model';
import BoundingBox from './components/BoundingBox';

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
        {/* <fog attach='fog' args={['white', 1, 10]} /> */}
        <ambientLight intensity={0.2} />

        {/* <Bulb position={[0, 3, 0]} /> */}
        <Orbit />
        <axesHelper args={[5]} />
        <Bulb position={[0, 3, 0]} />
        <Physics>
          <Suspense fallback={null}>
            <Dragable transformGroup>
              <BoundingBox
                visible
                position={[4, 4, 0]}
                dims={[3, 2, 6]}
                offset={[0, -0.4, 0.8]}
              >
                <Model
                  path='/tesla_model_3/scene.gltf'
                  scale={new Array(3).fill(0.01)}
                // position={[4, 0.6, 0]}
                />
              </BoundingBox>
            </Dragable>
            <Dragable transformGroup>
              <BoundingBox
                visible
                position={[-4, 4, 0]}
                dims={[3, 2, 7]}
                offset={[0, -0.8, 0.2]}
              >
                <Model
                  path='/tesla_model_s/scene.gltf'
                  scale={new Array(3).fill(0.013)}
                // position={[-4, 0.2, 0]}
                />
              </BoundingBox>
            </Dragable>
          </Suspense>
          <Suspense fallback={null}>
            <Background />
          </Suspense>
          <Floor position={[0, -0.5, 0]} />
        </Physics>
      </Canvas>
    </div >
  );
}

export default App;
