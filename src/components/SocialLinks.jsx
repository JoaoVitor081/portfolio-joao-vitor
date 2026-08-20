import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const socials = [
  { icon: FiGithub, url: 'https://github.com/JoaoVitor081', label: 'GitHub' },
  { icon: FiLinkedin, url: 'https://www.linkedin.com/in/jo%C3%A3o-vitor-silva-machado-749157371/', label: 'LinkedIn' },
  {
  icon: FiMail,
  url: 'mailto:jvsm.redtag@gmail.com',
  label: 'Enviar e-mail',
},
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