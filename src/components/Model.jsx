import { useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const Model = props => {
    const model = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + props.path
    )
    //to get a visual of everything that's available within the model including animation properties
    //if there is animation you'll notice an array called animation
    console.log(props.path, model)

    let mixer

    //create a conditional statement that runs the animation if my model
    //has an animation array that is bigger than zero
    if (model.animations.length > 0) {
        mixer = new THREE.AnimationMixer(model.scene)
        //iterate through all the animations on the model
        model.animations.forEach(clip => {
            //for each clip create an animation action
            const action = mixer.clipAction(clip)
            action.play()
        })
    }

    //now call mixer.update in the render loop - need useFrame for this
    useFrame((scene, delta) => {
        //delta is seconds since the last frame
        //not all models have animations so check if mixer exists first using ternary '?'
        mixer?.update(delta)
    })


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