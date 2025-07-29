'use client'

import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment, PresentationControls } from '@react-three/drei'
import { Suspense } from 'react'

// 3D Model Component
function Model({ url }: { url: string }) {
    const { scene } = useGLTF(url)
    return <primitive object={scene} />
}

// Loading fallback
function Loader() {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
        </div>
    )
}

export function Hero() {
    return (
        <section className="w-full h-screen relative overflow-hidden">
            <div className="bg-white dark:bg-black relative w-full h-full flex items-center justify-center">
                sdadada
            </div>
        </section>
    )
}