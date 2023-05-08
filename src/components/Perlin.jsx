import * as THREE from 'three'
import { Environment } from "@react-three/drei"
import { LayerMaterial, Noise } from "lamina"
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { useControls, } from 'leva'

export default function Perlin () {


    const { scale, colorA, colorB, colorC, colorD } = useControls({
        scale: { 
            value: 0.05,
            min: 0.001,
            max: 1.5,
            step: 0.0001
        },
        colorA: {
            value: 'black'
        },
        colorB: {
            value: '#0f98bc'
        },
        colorC: {
            value: '#14145f'
        },
        colorD: {
            value: 'black'
        }
    })

    const clock = new THREE.Clock()

    const perRef = useRef()

    useFrame((state, delta) => {
        perRef.current.offset.x += Math.sin(delta * 2)
        perRef.current.offset.y -= delta
        perRef.current.offset.z += Math.sin(delta / 2)
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
                        scale={scale}
                        colorA={colorA}
                        colorB={colorB}
                        colorC={colorC}
                        colorD={colorD}
                        mapping='local'
                        offset={[5.5,-1.9,-0.5]}
                        strength={16}
                    >

                    </Noise>

                </LayerMaterial>
        </mesh>
    </>
}