import * as THREE from 'three'
import { Environment } from "@react-three/drei"
import { LayerMaterial, Noise } from "lamina"
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Perlin ({...props}){

    const clock = new THREE.Clock()

    const perRef = useRef()

    useFrame((state, delta) => {
        perRef.current.offset.x += Math.sin(delta * 4)
        perRef.current.offset.y -= delta * 2
        perRef.current.offset.z += Math.sin(delta / 3)
        // perRef.current.scale += Math.sin(delta/500)

        state.camera.lookAt(new THREE.Vector3(0, 0.4, -3))
        state.camera.position.lerp(new THREE.Vector3(0,0.4,-0.4), delta)

        // if (clicked) {

        // }
    })

    return <>
        <Environment preset={"sunset"}/>

        <mesh>
            <sphereGeometry args={[40,64,64]}/>
            <LayerMaterial
                side={THREE.BackSide}
            >
                <Noise
                    ref={perRef} 
                    type='perlin' 
                    scale={props.myProp.scale}
                    colorA={props.myProp.colorA}
                    colorB={props.myProp.colorB}
                    colorC={props.myProp.colorC}
                    colorD={props.myProp.colorD}
                    mapping='local'
                    offset={[5.5,-1.9,-0.5]}
                    strength={16}
                >
                </Noise>
            </LayerMaterial>
        </mesh>
    </>
}