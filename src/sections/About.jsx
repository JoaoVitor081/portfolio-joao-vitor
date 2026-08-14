import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Avatar from '../components/Avatar'

function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-12 md:flex-row"
      >
        <Avatar size="lg" />

        <div className="flex-1 text-center md:text-left">
          <h2 className="mb-2 font-display text-3xl font-bold">
            <span className="text-fire-gradient">{'// '}</span>
            {t('about.title')}
          </h2>
          <p className="max-w-2xl leading-relaxed text-white/70">{t('about.text')}</p>
        </div>
      </motion.div>
    </section>
  )
}

export default About