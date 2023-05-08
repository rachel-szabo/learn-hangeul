import { Center, Text3D, Float } from '@react-three/drei'
import * as THREE from 'three'

export default function Hangeul() {

    // const textColor = new THREE.Color('#cc5500')
    const font = '/fonts/3D/NotoSerifKR.json' 
    
    return <>

        {/* <Float floatIntensity={0.5} rotationIntensity={0}> */}
        <group position={[-0.2,-0.50,-1.0]}>
            <Text3D
                    textAlign='center'
                    position={[-0.11, 0, -0.7]} 
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
                    position={[-1.5,0,0.25]} 
                    rotation={[0, Math.PI/3, 0]}
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
                    ㄴ
                    <meshNormalMaterial />
                </Text3D>

                <Text3D
                    position={[1.5,0,-0.25]} 
                    rotation={[0,-Math.PI/3, 0]}
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

        <group position={[+0.2,-0.50, 0.7]} rotation={[0, Math.PI, 0]}>
            <Text3D
                    textAlign='center'
                    position={[-0.11, 0, -0.7]} 
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
                    position={[-1.5,0,0.25]} 
                    rotation={[0, Math.PI/3, 0]}
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
                    position={[1.5,0,-0.25]} 
                    rotation={[0,-Math.PI/3, 0]}
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
               
            {/* </Float> */}

    </>
    
}