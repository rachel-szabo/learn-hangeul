import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Suspense } from 'react'
import { Physics } from '@react-three/rapier'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(

    <Canvas
        camera={ {
            fov: 80,
            near: 0.1,
            far: 200,
            position: [ 0, 4, 0 ]
        } }
        shadows
    >
        <Suspense>
            <Physics>
                <Experience />
            </Physics>
        </Suspense>
    </Canvas>
)