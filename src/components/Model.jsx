import { useLoader } from "react-three-fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const Model = props => {
    const model = useLoader(
        GLTFLoader,
        props.path
    )

    //to cast shadows and traverse all of the objects in the mesh
    model.scene.traverse(child => {
        if (child.isMesh) {
            child.castShadow = true
            child.receiveShadow = true
            child.material.side = THREE.FrontSide
        }
    })



    // console.log(model)
    return (
        <primitive
            object={model.scene}
            scale={props.scale}

        />

    )
}


export default Model;