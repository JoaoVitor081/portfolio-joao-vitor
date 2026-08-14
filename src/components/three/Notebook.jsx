import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import EnergyParticles from './EnergyParticles'
import { useCodeScreenTexture } from './CodeScreenTexture'

// PLACEHOLDER: notebook geométrico estilizado (base + tela + teclado).
// Caso um modelo .glb customizado seja definido, substitua por useGLTF('/models/notebook.glb')

function Notebook({ scrollProgress, isLowPower }) {
  const groupRef = useRef()
  const screenRef = useRef()
  const screenMeshRef = useRef()

  const codeTexture = useCodeScreenTexture()

  useFrame((state) => {
    if (!groupRef.current) return

    const t = state.clock.getElapsedTime()
    const progress = scrollProgress.current

    groupRef.current.rotation.y = progress * Math.PI * 0.6 + Math.sin(t * 0.4) * 0.05
    groupRef.current.position.x = progress * 1.2
    groupRef.current.position.y = -progress * 0.6 + Math.sin(t * 0.6) * 0.03
    groupRef.current.scale.setScalar(1 - progress * 0.35)

    const bootProgress = Math.min(progress * 3, 1)
    const baseAngle = -1.4
    const openAngle = -0.35
    if (screenRef.current) {
      screenRef.current.rotation.x = THREE.MathUtils.lerp(baseAngle, openAngle, bootProgress)
    }

    if (screenMeshRef.current) {
      const pulse = 0.5 + Math.sin(t * 2.5) * 0.15
      screenMeshRef.current.material.emissiveIntensity = 0.6 + pulse * bootProgress
    }
  })

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 0.12, 1.4]} />
        <meshStandardMaterial color="#161616" metalness={0.7} roughness={0.35} />
      </mesh>

      <mesh position={[0, 0.065, 0]}>
        <boxGeometry args={[1.8, 0.02, 1.1]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.5} roughness={0.6} />
      </mesh>

      <group ref={screenRef} position={[0, 0.06, -0.68]}>
        <mesh position={[0, 0.65, 0]}>
          <boxGeometry args={[2, 1.3, 0.06]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.4} />
        </mesh>

        <mesh ref={screenMeshRef} position={[0, 0.65, 0.035]}>
          <planeGeometry args={[1.82, 1.14]} />
          <meshStandardMaterial
            map={isLowPower ? null : codeTexture}
            color={isLowPower ? '#ff6a00' : '#ffffff'}
            emissive="#ff6a00"
            emissiveIntensity={0.6}
            toneMapped={false}
          />
        </mesh>

        {!isLowPower && <EnergyParticles intensity={0.8} />}
      </group>
    </group>
  )
}

export default Notebook