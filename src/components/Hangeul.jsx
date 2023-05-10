import { Center, Text3D, Float } from '@react-three/drei'
import { useControls } from 'leva'
import { useMemo } from 'react'
import * as THREE from 'three'

export default function Hangeul({...props}) {

    // const textColor = new THREE.Color('#cc5500')
    const font = '/fonts/3D/NotoSansKR.json' 
    const param = props.textProp
    
    return <>
        <group position={[-0.0, 0,-0.9]}>
            <Text3D
                    position={param.letterAPos}
                    // position={[-0.125, 0, -1.5]} 
                    font={font}
                    size={0.5}
                    height={0.1} //depth
                    curveSegments={24}
                    bevelEnabled={true}
                    bevelThickness={0.001}
                    bevelSize={0.012} //fattens or thins text
                    bevelOffset={0}
                    bevelSegments={5}
                    castShadow
                >
                    ㄱ
                    <meshNormalMaterial />
                </Text3D>

                <Text3D
                    position={param.letterBPos}
                    // position={[-1.5,0,0.25]} 
                    rotation={param.lBRotation}
                    font={font}
                    size={0.5}
                    height={0.1} //depth
                    curveSegments={24}
                    bevelEnabled={true}
                    bevelThickness={0.001}
                    bevelSize={0.012} //fattens or thins text
                    bevelOffset={0}
                    bevelSegments={5}
                    castShadow
                >
                    ㅈ
                    <meshNormalMaterial />
                </Text3D>

                <Text3D
                    position={param.letterCPos}
                    // position={[1.5,0,-0.75]} 
                    rotation={param.lCRotation}
                    font={font}
                    size={0.5}
                    height={0.1} //depth
                    curveSegments={24}
                    bevelEnabled={true}
                    bevelThickness={0.001}
                    bevelSize={0.012} //fattens or thins text
                    bevelOffset={0}
                    bevelSegments={5}
                    castShadow
                >
                    ㄷ
                    <meshNormalMaterial />
                </Text3D>
        </group>

        <group position={[0.2, 0, 0.7]} rotation={[0, Math.PI, 0]}>
            <Text3D
                    position={param.letterAPos}
                    // position={[-0.125, 0, -1.5]} 
                    font={font}
                    size={0.5}
                    height={0.1} //depth
                    curveSegments={24}
                    bevelEnabled={true}
                    bevelThickness={0.001}
                    bevelSize={0.012} //fattens or thins text
                    bevelOffset={0}
                    bevelSegments={5}
                    castShadow
                >
                    ㄹ
                    <meshNormalMaterial />
                </Text3D>

                <Text3D
                    position={param.letterBPos}
                    // position={[-1.5,0,0.25]} 
                    rotation={param.lBRotation}
                    font={font}
                    size={0.5}
                    height={0.1} //depth
                    curveSegments={24}
                    bevelEnabled={true}
                    bevelThickness={0.001}
                    bevelSize={0.012} //fattens or thins text
                    bevelOffset={0}
                    bevelSegments={5}
                    castShadow
                >
                    ㅁ
                    <meshNormalMaterial />
                </Text3D>

                <Text3D
                    position={param.letterCPos}
                    // position={[1.5,0,-0.25]} 
                    rotation={param.lCRotation}
                    font={font}
                    size={0.5}
                    height={0.1} //depth
                    curveSegments={24}
                    bevelEnabled={true}
                    bevelThickness={0.001}
                    bevelSize={0.012} //fattens or thins text
                    bevelOffset={0}
                    bevelSegments={5}
                    castShadow
                >
                    ㅂ
                    <meshNormalMaterial />
                </Text3D>
        </group>
    </>
    
}