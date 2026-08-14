import { useTranslation } from 'react-i18next'
import { activeLanguages, comingSoonLanguages } from '../locales'

function LanguageToggle() {
  const { i18n } = useTranslation()

  const changeLanguage = (code) => {
    i18n.changeLanguage(code)
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-fire-orange/40 px-1 py-1">
      {activeLanguages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          aria-current={i18n.language === lang.code}
          title={lang.nativeName}
          className={`rounded-full px-2 py-1 font-mono text-xs transition-all ${
            i18n.language === lang.code
              ? 'bg-fire-gradient font-bold text-hack-black'
              : 'text-white/60 hover:text-fire-orange'
          }`}
        >
          {lang.label}
        </button>
      ))}

      {comingSoonLanguages.map((lang) => (
        <span
          key={lang.code}
          title={`${lang.nativeName} — em breve`}
          className="cursor-not-allowed rounded-full px-2 py-1 font-mono text-xs text-white/20"
        >
          {lang.label}
        </span>
      ))}
    </div>
  )
}

export default LanguageToggle