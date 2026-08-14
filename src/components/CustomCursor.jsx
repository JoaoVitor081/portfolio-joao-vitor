import { useEffect, useRef } from 'react'

function CustomCursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (isTouchDevice || prefersReducedMotion) return undefined

    const cursor = cursorRef.current
    const follower = followerRef.current

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let followerX = mouseX
    let followerY = mouseY
    let animationFrame

    const handleMove = (event) => {
      mouseX = event.clientX
      mouseY = event.clientY
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    }

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.14
      followerY += (mouseY - followerY) * 0.14
      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`
      animationFrame = requestAnimationFrame(animateFollower)
    }

    const handlePointerOver = (event) => {
      const interactive = event.target.closest('a, button, input, textarea')
      if (interactive) {
        follower.classList.add('cursor-active')
      } else {
        follower.classList.remove('cursor-active')
      }
    }

    document.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseover', handlePointerOver)
    animationFrame = requestAnimationFrame(animateFollower)

    return () => {
      document.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', handlePointerOver)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} aria-hidden="true" className="custom-cursor hidden md:block" />
      <div ref={followerRef} aria-hidden="true" className="custom-cursor-follower hidden md:block" />
    </>
  )
}

export default CustomCursor