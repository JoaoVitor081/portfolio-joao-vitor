import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

import Logo from './Logo'
import LanguageToggle from './LanguageToggle'
import ThemeToggle from './ThemeToggle'

const navItems = ['about', 'skills', 'experience', 'projects', 'services', 'contact']

function Header() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-hack-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="group relative font-mono text-xs uppercase tracking-wider text-white/70 transition-colors hover:text-fire-yellow focus-visible:text-fire-yellow"
            >
              {t(`nav.${item}`)}
              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-px w-0 bg-fire-gradient transition-all duration-300 group-hover:w-full"
              />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          className="rounded p-2 text-fire-orange transition-colors hover:text-fire-yellow focus-visible:text-fire-yellow md:hidden"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Navegação mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/5 bg-hack-black md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={closeMenu}
                  className="rounded py-1 font-mono text-sm text-white/75 transition-colors hover:text-fire-yellow focus-visible:text-fire-yellow"
                >
                  {t(`nav.${item}`)}
                </a>
              ))}

              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header