import { Environment } from "@react-three/drei"
import { Depth, LayerMaterial } from "lamina"
import * as THREE from 'three'


//using Lamina library to create a background
export default function Background () {
    return <>
        <Environment preset={"sunset"}/>

        <mesh>
                <sphereGeometry args={[40,64,64]}/>
                <LayerMaterial
                    side={THREE.BackSide}
                >
                    <Depth
                        colorA={'#f2b84c'}
                        colorB={'#4b87ef'}
                        alpha={1}
                        mode="normal"
                        near={130}
                        far={200}
                        origin={[100,100,-100]}
                    />
                </LayerMaterial>
        </mesh>



            {/* <Sphere scale={[120,120,120]} rotation-y={Math.PI/2} wireframe>
                <LayerMaterial
                    lighting='physical'
                    transmission={1}
                    side={THREE.BackSide}
                >
                    <Gradient 
                        colorA={'navy'} 
                        colorB={'red'} 
                        axes={'y'} 
                        start={1} 
                        end={-1} 
                    />
                </LayerMaterial>
            </Sphere> */}
    </>
}