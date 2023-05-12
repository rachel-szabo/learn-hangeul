import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas, useThree } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Suspense } from 'react'
import { Physics } from '@react-three/rapier'
import { PerspectiveCamera } from '@react-three/drei'


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(

    <Canvas
        dpr={window.devicePixelRatio}
        onCreated={({ camera }) => {
            camera.position.set(0, 0.9, 1)
            camera.fov = 50
            camera.near = 0.1
            camera.far = 100
        }}
        shadows
    >
        <Suspense fallback='loading'>
            <Physics>
                <Experience />
            </Physics>
        </Suspense>

    </Canvas>
)