import { useEffect, useState } from 'react'

function detectWebGLSupport() {
  try {
    const canvas = document.createElement('canvas')
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  } catch {
    return false
  }
}

function getDeviceState() {
  const isSmallScreen = window.matchMedia('(max-width: 767px)').matches
  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const hasLowCores =
    typeof navigator.hardwareConcurrency === 'number' && navigator.hardwareConcurrency <= 4
  const hasWebGL = detectWebGLSupport()

  const isLowPower =
    !hasWebGL || prefersReducedMotion || isSmallScreen || (isTouchDevice && hasLowCores)

  return { isSmallScreen, isTouchDevice, prefersReducedMotion, hasLowCores, hasWebGL, isLowPower }
}

export function useDeviceCapability() {
  const [device, setDevice] = useState(() => getDeviceState())

  useEffect(() => {
    const mediaQueries = [
      window.matchMedia('(max-width: 767px)'),
      window.matchMedia('(pointer: coarse)'),
      window.matchMedia('(prefers-reduced-motion: reduce)'),
    ]

    const updateDevice = () => setDevice(getDeviceState())

    mediaQueries.forEach((mq) => mq.addEventListener('change', updateDevice))
    window.addEventListener('resize', updateDevice)

    return () => {
      mediaQueries.forEach((mq) => mq.removeEventListener('change', updateDevice))
      window.removeEventListener('resize', updateDevice)
    }
  }, [])

  return device
}