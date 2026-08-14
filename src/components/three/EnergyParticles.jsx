import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const PARTICLE_COUNT = 90

function EnergyParticles({ intensity = 1 }) {
  const pointsRef = useRef()

  const { positions, colors, speeds } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const colors = new Float32Array(PARTICLE_COUNT * 3)
    const speeds = new Float32Array(PARTICLE_COUNT)

    const fireColors = [
      new THREE.Color('#ff1a1a'),
      new THREE.Color('#ff6a00'),
      new THREE.Color('#ffd60a'),
    ]

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 1.6
      positions[i3 + 1] = Math.random() * 1.2 + 0.2
      positions[i3 + 2] = (Math.random() - 0.5) * 0.3 - 0.6

      const color = fireColors[Math.floor(Math.random() * fireColors.length)]
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b

      speeds[i] = 0.2 + Math.random() * 0.4
    }

    return { positions, colors, speeds }
  }, [])

  useFrame((_, delta) => {
    if (!pointsRef.current) return
    const posAttr = pointsRef.current.geometry.attributes.position

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      posAttr.array[i3 + 1] += speeds[i] * delta * intensity

      if (posAttr.array[i3 + 1] > 1.6) {
        posAttr.array[i3 + 1] = 0.2
        posAttr.array[i3] = (Math.random() - 0.5) * 1.6
      }
    }

    posAttr.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={PARTICLE_COUNT} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={PARTICLE_COUNT} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.85}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  )
}

export default EnergyParticles