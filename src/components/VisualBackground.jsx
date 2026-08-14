import { motion } from 'framer-motion'

function VisualBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-hack-black">
      <div className="tech-grid absolute inset-0 opacity-60" />

      <motion.div
        className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-fire-red/10 blur-[120px]"
        animate={{ opacity: [0.35, 0.65, 0.35], scale: [1, 1.12, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute -right-48 top-[25%] h-[600px] w-[600px] rounded-full bg-fire-orange/10 blur-[140px]"
        animate={{ opacity: [0.2, 0.5, 0.2], x: [0, -30, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute bottom-[-280px] left-[35%] h-[520px] w-[520px] rounded-full bg-fire-yellow/5 blur-[150px]" />

      <div className="scanline" />
    </div>
  )
}

export default VisualBackground