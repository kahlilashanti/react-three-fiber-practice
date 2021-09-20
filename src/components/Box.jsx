import { useRef } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import * as THREE from 'three';
import { useBox } from 'use-cannon';



const Box = props => {
    const [ref, api] = useBox(() => ({ mass: 1, ...props }))
    const texture = useLoader(THREE.TextureLoader,
        process.env.PUBLIC_URL + '/wood.jpeg');
    //useFrame takes a callback that is called on every render
    // useFrame(state => {
    //     // console.log(state)
    //     //this makes it rotate on x and y axis
    //     ref.current.rotation.x += 0.01;
    //     ref.current.rotation.y += 0.01;
    // })

    const handlePointerDown = e => {
        // console.log(e)
        //this saves the mesh to the window, which is not ideal for production
        //use namespaces or other methods
        e.object.active = true
        //if there is an active mesh already then scale it down
        if (window.activeMesh) {
            scaleDown(window.activeMesh)
            window.activeMesh.active = false;
        }
        window.activeMesh = e.object
    }

    const handlePointerEnter = e => {
        e.object.scale.x = 1.5
        e.object.scale.y = 1.5
        e.object.scale.z = 1.5
    }

    const handlePointerLeave = e => {
        if (!e.object.active) {
            scaleDown(e.object)
        }

    }

    const scaleDown = object => {
        object.scale.x = 1
        object.scale.y = 1
        object.scale.z = 1
    }

    return (
        <mesh
            ref={ref}
            api={api}
            {...props}
            castShadow
            // receiveShadow
            //add event listener
            onPointerDown={handlePointerDown}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
        >
            {/* <sphereBufferGeometry args={[1, 100, 100]} /> */}
            <boxBufferGeometry args={[1, 1, 1]} />
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

export default Box;