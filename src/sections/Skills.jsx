import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import SkillBadge from '../components/SkillBadge'
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaJava,
  FaGitAlt, FaGithub, FaFigma, FaDocker,
} from 'react-icons/fa'
import {
  SiNextdotjs, SiFlutter, SiPython, SiPostgresql, SiMysql, SiMongodb, SiFirebase,
} from 'react-icons/si'
import { BsStars } from 'react-icons/bs'

// PLACEHOLDER: níveis de proficiência (0-100) são estimativas editáveis
const skillsData = {
  web: [
    { icon: FaHtml5, label: 'HTML', level: 90 },
    { icon: FaCss3Alt, label: 'CSS', level: 85 },
    { icon: FaJs, label: 'JavaScript', level: 85 },
    { icon: FaReact, label: 'React', level: 80 },
    { icon: SiNextdotjs, label: 'Next.js', level: 70 },
  ],
  mobile: [
    { icon: FaReact, label: 'React Native', level: 80 },
    { icon: SiFlutter, label: 'Flutter', level: 65 },
  ],
  backend: [
    { icon: FaNodeJs, label: 'Node.js', level: 75 },
    { icon: SiPython, label: 'Python', level: 65 },
    { icon: FaPhp, label: 'PHP', level: 60 },
    { icon: FaJava, label: 'Java', level: 55 },
  ],
  database: [
    { icon: SiPostgresql, label: 'PostgreSQL', level: 75 },
    { icon: SiMysql, label: 'MySQL', level: 75 },
    { icon: SiMongodb, label: 'MongoDB', level: 70 },
  ],
  tools: [
    { icon: FaGitAlt, label: 'Git', level: 85 },
    { icon: FaGithub, label: 'GitHub', level: 85 },
    { icon: FaFigma, label: 'Figma', level: 60 },
    { icon: FaDocker, label: 'Docker', level: 55 },
    { icon: SiFirebase, label: 'Firebase', level: 70 },
  ],
}

function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-3 text-center font-display text-3xl font-bold"
      >
        <span className="text-fire-gradient">{'// '}</span>
        {t('skills.title')}
      </motion.h2>

      <p className="mb-12 text-center font-mono text-xs uppercase tracking-[0.25em] text-fire-orange/70">
        {t('skills.stack_tag')}
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skillsData).map(([category, items]) => (
          <div key={category}>
            <h3 className="mb-4 font-mono text-sm uppercase tracking-widest text-fire-orange">
              {t(`skills.categories.${category}`)}
            </h3>
            <div className="grid gap-3">
              {items.map((item) => (
                <SkillBadge key={item.label} icon={item.icon} label={item.label} level={item.level} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-14 flex items-center gap-4 rounded-xl border border-fire-orange/40 bg-fire-red/5 p-6 shadow-glow-fire"
      >
        <BsStars className="flex-shrink-0 text-fire-yellow" size={28} />
        <div>
          <h4 className="mb-1 font-display font-bold text-fire-gradient">{t('skills.categories.ai')}</h4>
          <p className="text-sm text-white/70">{t('skills.ai_highlight')}</p>
        </div>
      </motion.div>
    </section>
  )
}

export default Skills