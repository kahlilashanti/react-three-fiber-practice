//export an object that helps keep track of our current mesh

//model_3 color object name: Capot001_CAR_PAINT_0
//model_s color object name: object005_bod_0

import * as THREE from 'three';

const state = {
    activeMesh: {},
    cameraPos: new THREE.Vector3(9, 2, 4),
    target: new THREE.Vector3(4, 0, 0),
    shouldUpdate: true
}

export default state