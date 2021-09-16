import logo from './logo.svg';
import './App.css';

import { Canvas, useFrame, useThree, extend, useLoader } from 'react-three-fiber'
//useFrame is a React hook used for animation
//useFrame can only be used in the canvas
import { useRef, Suspense } from 'react';

import { OrbitControls }
  from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
import { ambientLight } from 'three';
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
  const texture = useLoader(THREE.TextureLoader, '/wood.jpeg');
  //useFrame takes a callback that is called on every render
  useFrame(state => {
    // console.log(state)
    //this makes it rotate on x and y axis
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  })

  return (
    <mesh
      ref={ref}
      {...props}
      castShadow
    // receiveShadow
    >
      <sphereBufferGeometry args={[1, 100, 100]} />
      {/* <boxBufferGeometry /> */}
      <meshPhysicalMaterial
        map={texture}
        // color='white'
        // // opacity={0.7}
        // transparent
        // // wireframe
        // // metalness={1}
        // roughness={0}
        clearcoat={1}
      // transmission={0.7}
      // reflectivity={1}
      // side={THREE.DoubleSide}
      />
    </mesh>
  )
}

const Background = props => {
  const texture = useLoader(
    THREE.TextureLoader,
    '/riverbank.jpeg'
  );

  const { gl } = useThree()

  const formatted = new THREE.WebGLCubeRenderTarget(
    texture.image.height).fromEquirectangularTexture(gl, texture)


  return (
    <primitive attach='background' object={formatted} />
  )
}

const Floor = props => {
  return (
    <mesh {...props} receiveShadow>
      <boxBufferGeometry args={[20, 1, 10]} />
      <meshPhysicalMaterial />
    </mesh>
  )
}

const Bulb = props => {
  return (
    <mesh {...props}>
      <pointLight castShadow />
      <sphereBufferGeometry args={[0.2, 20, 20]} />
      <meshPhongMaterial emissive='yellow' />
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
        shadowMap
        style={{ background: 'black' }}
        camera={{ position: [3, 3, 3] }}
      >
        <fog attach='fog' args={['white', 1, 10]} />
        <ambientLight intensity={0.2} />

        <Bulb position={[0, 3, 0]} />
        <Orbit />
        <axesHelper args={[5]} />
        <Suspense fallback={null}>
          <Box position={[0, 1, 0]} />
        </Suspense>
        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <Floor position={[0, -0.5, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
