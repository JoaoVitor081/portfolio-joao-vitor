import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import TimelineItem from '../components/TimelineItem'

function Experience() {
  const { t } = useTranslation()

  // PLACEHOLDER: períodos (datas) são editáveis
  const experiences = [
    {
      period: `2023 — ${t('experience.present')}`,
      role: t('experience.freelancer.role'),
      company: t('experience.freelancer.company'),
      description: t('experience.freelancer.description'),
    },
    {
      period: `2021 — ${t('experience.present')}`,
      role: t('experience.student.role'),
      company: t('experience.student.company'),
      description: t('experience.student.description'),
    },
  ]

  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 font-display text-3xl font-bold"
      >
        <span className="text-fire-gradient">{'// '}</span>
        {t('experience.title')}
      </motion.h2>

      <div>
        {experiences.map((exp, index) => (
          <TimelineItem key={index} {...exp} isLast={index === experiences.length - 1} />
        ))}
      </div>
    </section>
  )
}

export default Experience