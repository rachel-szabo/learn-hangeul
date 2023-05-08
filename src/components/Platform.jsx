import { RigidBody } from '@react-three/rapier'
import * as THREE from 'three'

export default function Platform () {
    return <>
    <RigidBody>
        <mesh receiveShadow rotation={[Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} >
            <circleGeometry args={[3, 64]} />
            <meshStandardMaterial side={THREE.DoubleSide} color={'#f0ead6'}/>
        </mesh>
    </RigidBody>
    </>
}