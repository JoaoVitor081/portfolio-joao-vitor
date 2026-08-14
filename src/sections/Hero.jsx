import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'
import Button from '../components/Button'
import NotebookScene from '../components/three/NotebookScene'

// PLACEHOLDER: caminho do currículo em PDF — adicione o arquivo real em /public/assets/
const resumeFilePath = '/assets/curriculo-joao-vitor.pdf'

function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-8 px-5 pb-16 pt-28 sm:px-6 md:flex-row md:gap-10 md:pt-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full flex-1 text-center md:text-left"
      >
        <p className="mb-2 font-mono text-sm text-fire-orange">{t('hero.greeting')}</p>
        <h1 className="mb-4 font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          <span className="text-fire-gradient">{t('hero.name')}</span>
        </h1>
        <h2 className="mb-4 text-xl text-white/80 md:text-2xl">{t('hero.role')}</h2>
        <p className="mx-auto mb-8 max-w-md text-white/60 md:mx-0">{t('hero.subtitle')}</p>

        <div className="flex flex-wrap justify-center gap-4 md:justify-start">
          <Button href="#projects">{t('hero.cta_projects')}</Button>
          <Button href={resumeFilePath} variant="outline">
            <FiDownload size={16} />
            {t('hero.cta_resume')}
          </Button>
        </div>
      </motion.div>

      <div className="h-[280px] w-full flex-1 sm:h-[350px] md:h-[450px]">
        <NotebookScene />
      </div>
    </section>
  )
}

export default Hero