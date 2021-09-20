import { Suspense } from 'react';
import BoundingBox from './BoundingBox';
import Model from './Model';
import Dragable from './Dragable';



const Cars = ({ }) => {
    return (
        <Suspense fallback={null}>
            <Dragable transformGroup>
                <BoundingBox
                    // visible
                    position={[4, 4, 0]}
                    dims={[3, 2, 6]}
                    offset={[0, -0.4, 0.8]}
                >
                    <Model
                        path='/tesla_model_3/scene.gltf'
                        scale={new Array(3).fill(0.01)}
                    // position={[4, 0.6, 0]}
                    />
                </BoundingBox>
            </Dragable>
            <Dragable transformGroup>
                <BoundingBox
                    // visible
                    position={[-4, 4, 0]}
                    dims={[3, 2, 7]}
                    offset={[0, -0.8, 0.2]}
                >
                    <Model
                        path='/tesla_model_s/scene.gltf'
                        scale={new Array(3).fill(0.013)}
                    // position={[-4, 0.2, 0]}
                    />
                </BoundingBox>
            </Dragable>

            <group rotation={[0, Math.PI, 0]}>
                <Model
                    path='/mech_drone/scene.gltf'
                    scale={new Array(3).fill(0.01)}
                />
            </group>

        </Suspense>
    )
}
//use group and pi to rotate the robot model 180 degrees because it was facing backwards when we imported it
export default Cars;

