import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

function ProjectCard({
  title,
  description,
  tags = [],
  image,
  githubUrl,
  liveUrl,
  featured = false,
}) {
  const { t } = useTranslation()

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className={`group relative overflow-hidden rounded-tech border bg-hack-surface transition-all duration-300 ${
        featured
          ? 'border-fire-orange/60 shadow-glow-fire'
          : 'border-white/10 hover:border-fire-orange/60 hover:shadow-glow-fire'
      }`}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-fire-orange/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative h-48 overflow-hidden border-b border-white/10 bg-fire-gradient-radial">
        {image ? (
          <img
            src={image}
            alt={`Prévia do projeto ${title}`}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            role="img"
            aria-label={`Placeholder da imagem do projeto ${title || 'em breve'}`}
            className="flex h-full items-center justify-center font-mono text-xs text-fire-orange/60"
          >
            {'< project-preview />'}
          </div>
        )}

        {featured && (
          <span className="absolute left-4 top-4 rounded-tech border border-fire-yellow/50 bg-hack-black/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-fire-yellow">
            {t('projects.featured_badge')}
          </span>
        )}
      </div>

      <div className="relative p-5">
        <h3 className="mb-2 font-display text-xl font-bold text-white transition-colors group-hover:text-fire-yellow">
          {title || t('projects.placeholder_title')}
        </h3>

        <p className="mb-5 text-sm leading-relaxed text-white/60">
          {description || t('projects.placeholder_desc')}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-tech border border-fire-orange/20 bg-fire-orange/5 px-2 py-1 font-mono text-[11px] text-fire-orange"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 text-sm">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-white/60 transition-colors hover:text-fire-yellow"
            >
              <FiGithub size={16} />
              {t('projects.view_code')}
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-white/60 transition-colors hover:text-fire-yellow"
            >
              <FiExternalLink size={16} />
              {t('projects.view_live')}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard