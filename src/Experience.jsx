import { OrbitControls, SoftShadows } from '@react-three/drei'
import Background from './components/Background'
import Hangeul from './components/Hangeul'
import Perlin from './components/Perlin'
import Platform from './components/Platform'

export default function Experience()
{

    return <>

        <OrbitControls />

        {/* light and shadows */}
        <directionalLight castShadow position={ [ 0, 3, 3 ] } intensity={ 0.7 } />
        <ambientLight intensity={ 0.2 } />
        <SoftShadows size={2} samples={10} focus={5}/>

        {/* animated background */}
        <Perlin/>

        <axesHelper scale={2.5}/>

        {/* main elements of app */}
        <Hangeul/>
        <Platform/>
    </>
}