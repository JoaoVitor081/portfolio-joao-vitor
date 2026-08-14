import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

// PLACEHOLDER: substituir pelas URLs reais de João Vitor
const socials = [
  { icon: FiGithub, url: 'https://github.com/SEU_USUARIO_AQUI', label: 'GitHub' },
  { icon: FiLinkedin, url: 'https://linkedin.com/in/SEU_USUARIO_AQUI', label: 'LinkedIn' },
  { icon: FiMail, url: 'mailto:seuemail@dominio.com', label: 'Email' },
]

function SocialLinks({ className = '' }) {
  return (
    <div className={`flex gap-4 ${className}`}>
      {socials.map(({ icon: Icon, url, label }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all hover:border-fire-orange hover:text-fire-orange hover:shadow-glow-fire"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks