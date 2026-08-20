import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'

// import connectNgoPreview from '../assets/images/connectngo-preview.webp'
// e passe em "image: connectNgoPreview"

function Projects() {
  const { t } = useTranslation()

  const projects = [
    {
      title: t('projects.connectngo.title'),
      description: t('projects.connectngo.description'),
      tags: ['React Native', 'Node.js', 'JavaScript', 'JSON'],
      image: null,
      githubUrl: 'https://github.com/avilazdudu/connectngo.git',
      liveUrl: '',
      featured: true,
    },
    //adicionar demais projetos aqui
  ]

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center font-display text-3xl font-bold"
      >
        <span className="text-fire-gradient">{'// '}</span>
        {t('projects.title')}
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects