import { useTheme } from '../hooks/useTheme'
import { FiSun, FiMoon } from 'react-icons/fi'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label="Alternar tema"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-fire-orange/40 text-fire-orange transition-all hover:shadow-glow-fire"
    >
      {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  )
}

export default ThemeToggle