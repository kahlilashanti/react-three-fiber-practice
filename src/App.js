import logo from './logo.svg';
import './App.css';
// import * as THREE from 'three';
import { Canvas, useFrame, useThree, extend } from 'react-three-fiber'
//useFrame is a React hook used for animation
//useFrame can only be used in the canvas
import { useRef } from 'react';

import { OrbitControls }
  from 'three/examples/jsm/controls/OrbitControls';
extend({ OrbitControls });


//create separate component for Orbit controls  
const Orbit = () => {
  const { camera, gl } = useThree();
  return (
    <orbitControls args={[camera, gl.domElement]} />
  )
}

//create separate component for the cube
const Box = props => {
  const ref = useRef();
  //useFrame takes a callback that is called on every render
  useFrame(state => {
    // console.log(state)
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  })

  return (
    <mesh ref={ref} {...props}>
      <boxBufferGeometry />
      <meshBasicMaterial color='purple' />
    </mesh>
  )
}

function App() {

  //CREATED SCENE USING REACT THREE FIBER
  return (
    //as long as we're inside the canvas we can use tags to declare three js objects
    //we have access to all the namespaces
    //Canvas takes the width and height of the parent div
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas
        style={{ background: 'black' }}
        camera={{ position: [3, 3, 3] }}

      >
        <Box position={[1, 1, 0]} />
        <Orbit />
        <axesHelper args={[5]} />
      </Canvas>
    </div>
  );
}

export default App;
