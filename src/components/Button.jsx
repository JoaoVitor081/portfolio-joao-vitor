import { motion } from 'framer-motion'

function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  type = 'button',
  className = '',
  download = false,
}) {
  const baseClasses =
    'group inline-flex items-center justify-center gap-2 rounded-tech px-6 py-3 text-sm font-semibold transition-all duration-300'

  const variants = {
    primary:
      'bg-fire-gradient bg-fire text-hack-black shadow-glow-fire hover:scale-[1.03] hover:shadow-glow-yellow active:scale-[0.98]',
    outline:
      'border border-fire-orange/70 bg-transparent text-fire-orange hover:border-fire-yellow hover:bg-fire-orange/10 hover:text-fire-yellow hover:shadow-glow-fire active:scale-[0.98]',
    ghost:
      'border border-white/10 bg-white/[0.03] text-white/75 hover:border-fire-orange/60 hover:bg-fire-orange/10 hover:text-fire-orange',
  }

  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      onClick={onClick}
      type={href ? undefined : type}
      download={download || undefined}
      whileTap={{ scale: 0.96 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </Component>
  )
}

export default Button