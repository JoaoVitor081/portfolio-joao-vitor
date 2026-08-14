import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function setMetaTag(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`)

  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }

  tag.setAttribute('content', content)
}

export function useDocumentLanguage() {
  const { i18n, t } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.language === 'pt' ? 'pt-BR' : i18n.language
    document.title = t('meta.title')
    setMetaTag('description', t('meta.description'))
  }, [i18n.language, t])
}