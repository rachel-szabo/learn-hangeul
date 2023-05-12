import { Cylinder } from '@react-three/drei'
import { CylinderCollider, RigidBody } from '@react-three/rapier'
import * as THREE from 'three'

export default function Platform () {
    return <>
        <RigidBody colliders={false} type='fixed' position-y={-0.5}>
            <CylinderCollider args={[0.5, 5]}/>
            <Cylinder scale={[5,0.5,5]} receiveShadow>
                <meshStandardMaterial color='white'/>
            </Cylinder>
        </RigidBody>

        {/* <mesh position={[0, 0.01, 0]} rotation-x={-Math.PI/2} >
            <circleGeometry args={[4,6]} />
            <meshNormalMaterial wireframe/>
        </mesh> */}
    </>
}