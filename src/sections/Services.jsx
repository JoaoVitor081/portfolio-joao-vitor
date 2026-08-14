import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FiCode, FiSmartphone, FiCpu, FiDatabase } from 'react-icons/fi'

const serviceKeys = [
  { key: 'web_dev', icon: FiCode },
  { key: 'mobile_dev', icon: FiSmartphone },
  { key: 'ai_integration', icon: FiCpu },
  { key: 'database', icon: FiDatabase },
]

function Services() {
  const { t } = useTranslation()

  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center font-display text-3xl font-bold"
      >
        <span className="text-fire-gradient">{'// '}</span>
        {t('services.title')}
      </motion.h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {serviceKeys.map(({ key, icon: Icon }) => (
          <motion.article
            key={key}
            whileHover={{ y: -6 }}
            className="rounded-tech border border-white/10 bg-hack-surface p-5 transition-colors hover:border-fire-orange/60 hover:shadow-glow-fire"
          >
            <Icon aria-hidden="true" className="mb-4 text-fire-orange" size={28} />
            <h3 className="font-display text-lg font-bold">{t(`services.${key}.title`)}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/65">{t(`services.${key}.desc`)}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Services