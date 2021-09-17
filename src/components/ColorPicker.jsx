import * as THREE from 'three';
import state from '../state';

const ColorPicker = props => {

    const handleClick = e => {
        //if no active mesh return immediately
        if (!state.activeMesh) return;
        //otherwise set the color of that mesh's material to whatever color is
        //selected or on the div
        //when changing the color on a mesh you have to use THREE.color you can't just pass a string
        //like a psycho
        state.activeMesh.material.color = new THREE.Color(e.target.style.background)

    }

    return (

        <div
            style={{
                position: 'absolute',
                zIndex: 1,
                left: 0,
                right: 0,
                margin: 'auto',
                width: 'fit-content',
                display: 'flex',
                top: '20px'
            }}>
            🇨<div
                //handleClick function sets the color of the current mesh
                //that's on the window when you select one of the colors
                onClick={handleClick}
                style={{
                    background: 'blue',
                    height: 50,
                    width: 50
                }}
            ></div>
            <div
                onClick={handleClick}
                style={{
                    background: 'green',
                    height: 50,
                    width: 50
                }}
            ></div>
            <div
                onClick={handleClick}
                style={{
                    background: 'coral',
                    height: 50,
                    width: 50
                }}
            ></div>
            <div
                onClick={handleClick}
                style={{
                    background: 'white',
                    height: 50,
                    width: 50
                }}
            ></div>
        </div>

    )
}

export default ColorPicker;