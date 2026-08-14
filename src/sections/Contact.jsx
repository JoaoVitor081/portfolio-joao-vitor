import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import SocialLinks from '../components/SocialLinks'

function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // PLACEHOLDER: integrar com serviço de envio (EmailJS, Formspree, backend próprio)
    console.log('Form submitted:', formData)
    setStatus('success')
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-2 text-center font-display text-3xl font-bold">
          <span className="text-fire-gradient">{'// '}</span>
          {t('contact.title')}
        </h2>
        <p className="mb-10 text-center text-white/60">{t('contact.subtitle')}</p>

        <form onSubmit={handleSubmit} className="mb-10 space-y-5">
          <div>
            <label htmlFor="contact-name" className="mb-2 block font-mono text-xs uppercase tracking-wider text-fire-orange">
              {t('contact.form.name')}
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              autoComplete="name"
              placeholder={t('contact.form.name')}
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-tech border border-white/10 bg-hack-surface px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-fire-yellow focus:outline-none focus:ring-2 focus:ring-fire-orange/30"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="mb-2 block font-mono text-xs uppercase tracking-wider text-fire-orange">
              {t('contact.form.email')}
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder={t('contact.form.email')}
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-tech border border-white/10 bg-hack-surface px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-fire-yellow focus:outline-none focus:ring-2 focus:ring-fire-orange/30"
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="mb-2 block font-mono text-xs uppercase tracking-wider text-fire-orange">
              {t('contact.form.message')}
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder={t('contact.form.message')}
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full resize-none rounded-tech border border-white/10 bg-hack-surface px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-fire-yellow focus:outline-none focus:ring-2 focus:ring-fire-orange/30"
            />
          </div>

          <Button type="submit" className="w-full">
            {t('contact.form.submit')}
          </Button>

          {status === 'success' && (
            <p role="status" aria-live="polite" className="text-center text-sm text-fire-yellow">
              {t('contact.form.success')}
            </p>
          )}

          {status === 'error' && (
            <p role="alert" className="text-center text-sm text-fire-red">
              {t('contact.form.error')}
            </p>
          )}
        </form>

        <SocialLinks className="justify-center" />
      </motion.div>
    </section>
  )
}

export default Contact