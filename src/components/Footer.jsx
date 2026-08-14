import { useTranslation } from 'react-i18next'
import SocialLinks from './SocialLinks'
import Logo from './Logo'

function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="mt-10 border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <Logo />
        <SocialLinks />
        <p className="text-center font-mono text-xs text-white/40">
          © {year} João Vitor Silva Machado. {t('footer.rights')}
          <br />
          {t('footer.made_with')}
        </p>
      </div>
    </footer>
  )
}

export default Footer