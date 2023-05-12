import { OrbitControls, SoftShadows } from '@react-three/drei'
import { useMemo } from 'react'
import { useControls } from 'leva'
import { useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

import Hangeul from './components/Hangeul'
import Perlin from './components/Perlin'
import Platform from './components/Platform'
// import Taegukgi from './components/Taegukgi'

export default function Experience()
{

    const {gl, camera} = useThree()
    // camera.rotateX(Math.PI/2)
    

    const perlinOptions = useMemo(() => {
        return {
            scale: {value: 0.05,  min: 0.001,  max: 1.5,  step: 0.0001 },
            colorA: {value: 'black'},
            colorB: {value: '#7adaf2'},
            colorC: {value: '#14145f'},
            colorD: {value: 'black'}
        }
    }, [])

    const hangeulOptions = useMemo(() => {
        return {
            letterAPos: {value: [-2.16, 0, 2.06], step: 0.02},
            letterBPos: {value: [0, 0, 0.25], step: 0.02},
            letterCPos: {value: [2.46, 0, 1.22], step: 0.02},

            letterAlign: {value: [-0.47, 0, -3.0], step: 0.03},
            g2letterAlign: {value: [0.52, 0, 3.0], step: 0.03},
            letterSize: {value: 0.8},

            pRotation: {value: [0, Math.PI/3, 0], step: 0.02},
            nRotation: {value: [0, -Math.PI/3, 0], step: 0.02}
        }
    }, [])

    const perlin = useControls('Background', perlinOptions)
    const hangeul = useControls('KoreanLetters', hangeulOptions)

    return <>

        <OrbitControls />

        {/* light and shadows */}
        <pointLight castShadow position={[0, 2, 0]} intensity={0.6}/>
        <pointLight castShadow position={[0, -2, 0]} intensity={0.6}/>
        <ambientLight intensity={ 0.2 } />
        <SoftShadows size={2} samples={10} focus={5}/>

        {/* animated background */}
        <Perlin myProp={perlin}/>
        {/* <Taegukgi/> */}

        {/* <axesHelper scale={4}/> */}

        {/* main elements of app */}
        <Hangeul textProp={hangeul}/>
        {/* <Platform/> */}
    </>
}