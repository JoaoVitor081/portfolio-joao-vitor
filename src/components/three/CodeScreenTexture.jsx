import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const codeLines = [
  'const build = () => deploy(app)',
  'function connect(db) { return db.sync() }',
  'import { useEffect } from "react"',
  '> npm run dev',
  'AI.optimize(code).then(ship)',
  'export default function App() {}',
  'git commit -m "feat: fire mode"',
  'while (true) { learn(); build(); }',
  'const skills = ["React", "Node", "AI"]',
  '// TODO: ship it',
]

export function useCodeScreenTexture() {
  const canvas = useMemo(() => {
    const c = document.createElement('canvas')
    c.width = 512
    c.height = 320
    return c
  }, [])

  const ctx = useMemo(() => canvas.getContext('2d'), [canvas])

  const texture = useMemo(() => {
    const tex = new THREE.CanvasTexture(canvas)
    tex.colorSpace = THREE.SRGBColorSpace
    return tex
  }, [canvas])

  const scrollOffset = useRef(0)

  useFrame((_, delta) => {
    scrollOffset.current += delta * 40

    ctx.fillStyle = '#0a0a0a'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.font = '14px monospace'
    const lineHeight = 22
    const totalHeight = codeLines.length * lineHeight
    const offset = scrollOffset.current % totalHeight

    for (let i = -1; i < canvas.height / lineHeight + 1; i++) {
      const lineIndex =
        ((i + Math.floor(offset / lineHeight)) % codeLines.length + codeLines.length) % codeLines.length
      const y = i * lineHeight - (offset % lineHeight) + lineHeight

      const colors = ['#ff6a00', '#ff1a1a', '#ffd60a']
      ctx.fillStyle = colors[lineIndex % colors.length]
      ctx.fillText(codeLines[lineIndex], 10, y)
    }

    texture.needsUpdate = true
  })

  return texture
}