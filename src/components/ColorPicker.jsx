import * as THREE from 'three';

const ColorPicker = props => {

    const handleClick = e => {
        //if no active mesh return immediately
        if (!window.activeMesh) return;
        //otherwise set the color of that mesh's material to whatever color is
        //selected or on the div
        //when changing the color on a mesh you have to use THREE.color you can't just pass a string
        //like a psycho
        window.activeMesh.material.color = new THREE.Color(e.target.style.background)

    }

    return (

        <div style={{ position: 'absolute', zIndex: 1 }}>
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