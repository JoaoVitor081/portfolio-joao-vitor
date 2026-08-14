import { Suspense, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Notebook from './Notebook'
import NotebookFallback from './NotebookFallback'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { useDeviceCapability } from '../../hooks/useDeviceCapability'

function NotebookScene() {
  const scrollYProgress = useScrollProgress()
  const progressRef = useRef(0)

  const { isLowPower, prefersReducedMotion } = useDeviceCapability()

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (value) => {
      progressRef.current = value
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  if (isLowPower || prefersReducedMotion) {
    return (
      <div role="img" aria-label="Ilustração estilizada de um notebook com código" className="h-full w-full">
        <NotebookFallback />
      </div>
    )
  }

  return (
    <div role="img" aria-label="Notebook 3D com linhas de código animadas" className="h-full w-full">
      <Canvas
        camera={{ position: [0, 1, 4], fov: 45 }}
        dpr={[1, 1.25]}
        gl={{ antialias: false, powerPreference: 'high-performance' }}
        fallback={<NotebookFallback />}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#ff6a00" />
        <pointLight position={[-5, -3, -5]} intensity={0.45} color="#ff1a1a" />

        <Suspense fallback={null}>
          <Notebook scrollProgress={progressRef} isLowPower={false} />
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}

export default NotebookScene