import logo from './logo.svg';
import './App.css';
import * as THREE from 'three';

function App() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(
    window.innerWidth,
    window.innerHeight
  );

  //clear the document body of html
  document.body.innerHTML = '';
  //append to body of html document
  document.body.appendChild(renderer.domElement);

  //start adding meshes. a mesh takes a geometry and a material
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({
    color: 'blue'
  });

  camera.position.z = 5;



  //using this we can make our cube
  const cube = new THREE.Mesh(geometry, material);

  //add the cube to the scene
  scene.add(cube);

  //create the animation to add cube to scene
  function animate() {
    requestAnimationFrame(animate);
    //add rotation to the cube on x and y axis
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize',
    () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      //to keep cube from stretching when screen is resized we need to update camera aspect ratio
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    })

  return (
    null
  );
}

export default App;
