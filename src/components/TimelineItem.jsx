import { motion } from 'framer-motion'

function TimelineItem({ period, role, company, description, isLast = false }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-fire-gradient shadow-glow-fire" />
      {!isLast && <div className="absolute left-[5px] top-4 h-full w-px bg-white/10" />}

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="pb-10"
      >
        <span className="font-mono text-xs text-fire-orange">{period}</span>
        <h4 className="mt-1 font-display text-lg font-bold">{role}</h4>
        <p className="mb-2 text-sm text-white/50">{company}</p>
        <p className="text-sm text-white/70">{description}</p>
      </motion.div>
    </div>
  )
}

export default TimelineItem