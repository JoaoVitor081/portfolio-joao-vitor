import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'
import Button from '../components/Button'

// PLACEHOLDER: coloque o PDF real em /public/assets/curriculo-joao-vitor.pdf
const resumeFilePath = '/assets/curriculo-joao-vitor.pdf'

function Resume() {
  const { t } = useTranslation()

  return (
    <section id="resume" className="mx-auto max-w-4xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl border border-fire-orange/30 bg-hack-surface p-8 text-center"
      >
        <h3 className="mb-2 font-display text-2xl font-bold">{t('resume.title')}</h3>
        <p className="mb-6 text-white/60">{t('resume.text')}</p>
        <Button href={resumeFilePath} download className="mx-auto">
          <FiDownload size={16} />
          {t('resume.download')}
        </Button>
      </motion.div>
    </section>
  )
}

export default Resume