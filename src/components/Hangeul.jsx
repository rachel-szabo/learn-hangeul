import { Center, Text3D, Float, PivotControls, Html } from '@react-three/drei'
import { useRef } from 'react'


export default function Hangeul({...props}) {

    // let gBtns = document.querySelector('.jHtml')
    const font = '/fonts/3D/NotoSansKR.json' 
    const param = props.textProp
    const gRef = useRef()
    const gBtnRef = useRef()
    
    const handleClick = () => {
        gRef.current.visible = false
        gBtnRef.current.distanceFactor = 0.01
    }
    
    return <>
        <group position={param.letterAlign}>
            <Float floatIntensity={0.3} rotationIntensity={0.2}>
                <Text3D
                        ref={gRef}
                        position={param.letterAPos}
                        onClick={handleClick}
                        rotation={param.pRotation}
                        font={font}
                        size={param.letterSize}
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
                        <Html ref={gBtnRef} position={[-0.25,0.5,0]} wrapperClass='jHtml' distanceFactor={2.5} scale={0.03}><p>B</p></Html>
                        <Html position={[1.2,0.5,0]} wrapperClass='jHtml' distanceFactor={2.5} scale={0.03}><p>D</p></Html>
                        <Html position={[0.47,1.2,0]} wrapperClass='jHtml' distanceFactor={2.5} scale={0.03}><p>L</p></Html>
                        <Html position={[0.47,-0.1,0]} wrapperClass='jHtml' distanceFactor={2.5} scale={0.03}><p>G</p></Html>
                </Text3D>
            </Float>

            <Float floatIntensity={0.5} rotationIntensity={0.2}>
            <Text3D
                    position={param.letterBPos}
                    // position={param.letterAlign} 
                    // rotation={param.lBRotation}
                    rotation={[0,0,0]}
                    font={font}
                    size={param.letterSize}
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

                    <Html position={[-0.25,0.5,0]} wrapperClass='jHtml' distanceFactor={2.5} scale={0.03}><p>J</p></Html>
                    <Html position={[1.2,0.5,0]} wrapperClass='jHtml' distanceFactor={2.5} scale={0.03}><p>G</p></Html>
                    <Html position={[0.47,1.2,0]} wrapperClass='jHtml' distanceFactor={2.5} scale={0.03}><p>D</p></Html>
                    <Html position={[0.47,-0.1,0]} wrapperClass='jHtml' distanceFactor={2.5} scale={0.03}><p>M</p></Html>
            </Text3D>
            </Float>

            <Text3D
                    position={param.letterCPos}
                    // position={param.letterAlign} 
                    // rotation={param.lCRotation}
                    rotation={param.nRotation}
                    font={font}
                    size={param.letterSize}
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


    <group position={param.g2letterAlign} rotation={[0, Math.PI, 0]}>
            <Text3D
                    position={param.letterAPos}
                    rotation={param.pRotation}
                    font={font}
                    size={param.letterSize}
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
                    font={font}
                    size={param.letterSize}
                    height={0.1} //depth
                    curveSegments={24}
                    bevelEnabled={true}
                    bevelThickness={0.001}
                    bevelSize={0.01} //fattens or thins text
                    bevelOffset={0}
                    bevelSegments={5}
                    castShadow
                >
                    ㅁ
                    <meshNormalMaterial />
                </Text3D>

                <Text3D
                    position={param.letterCPos}
                    rotation={param.nRotation}
                    font={font}
                    size={param.letterSize}
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