import { DragControls } from 'three/examples/jsm/controls/DragControls';
import { useRef, useEffect, useState } from 'react';
import { extend, useThree } from 'react-three-fiber';

extend({ DragControls });



const Dragable = props => {
    const groupRef = useRef();
    const controlsRef = useRef();
    const [children, setChildren] = useState([]);
    const { camera, gl, scene } = useThree();
    useEffect(() => {
        setChildren(groupRef.current.children)
        // console.log(groupRef.current)

    }, [])

    useEffect(() => {
        //add an event listener to know when dragable is used or not
        //so we can toggle orbit 
        controlsRef.current.addEventListener('hoveron', e => scene.orbitControls.enabled = false)
        controlsRef.current.addEventListener('hoveroff', e => scene.orbitControls.enabled = true);
        controlsRef.current.addEventListener('dragstart', e => {
            e.object.api?.mass.set(0)
            //isolate what part of the mesh is the object you want to change the color of
            // console.log(e.object)

        });
        controlsRef.current.addEventListener('dragend', e => e.object.api?.mass.set(1));
        // controlsRef.current.addEventListener('drag', e => console.log(e.object));
        controlsRef.current.addEventListener('drag', e => {
            e.object.api?.position.copy(e.object.position)
            e.object.api?.velocity.set(0, 0, 0)
        }
        )
    }, [children])
    return (
        <group ref={groupRef}>
            <dragControls
                //to move the pieces of the mesh as one
                transformGroup={props.transformGroup}
                ref={controlsRef}
                args={[children, camera, gl.domElement]} />
            {props.children}
        </group>
    )
}

export default Dragable;