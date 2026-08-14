/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors: {
          'hack-black': '#070707',
          'hack-black-light': '#0d0d0d',
          'hack-surface': '#121212',
          'hack-surface-light': '#1b1b1b',
          'fire-red': '#ff1f1f',
          'fire-orange': '#ff6a00',
          'fire-yellow': '#ffd60a',
          'code-green': '#39ff88',
          'code-cyan': '#00e5ff',
        },
        fontFamily: {
          display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
          sans: ['Inter', 'system-ui', 'sans-serif'],
          mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        },
        backgroundImage: {
          'fire-gradient':
            'linear-gradient(110deg, #ff1f1f 0%, #ff6a00 52%, #ffd60a 100%)',
          'fire-gradient-soft':
            'linear-gradient(110deg, rgba(255,31,31,.18), rgba(255,106,0,.16), rgba(255,214,10,.12))',
          'fire-gradient-radial':
            'radial-gradient(circle at center, rgba(255,106,0,.28) 0%, rgba(255,31,31,.10) 32%, transparent 72%)',
          'grid-pattern':
            'linear-gradient(rgba(255,106,0,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,106,0,.06) 1px, transparent 1px)',
        },
        backgroundSize: {
          grid: '42px 42px',
          fire: '200% 200%',
        },
        boxShadow: {
          'glow-fire': '0 0 12px rgba(255,106,0,.35), 0 0 34px rgba(255,31,31,.16)',
          'glow-red': '0 0 12px rgba(255,31,31,.45), 0 0 28px rgba(255,31,31,.18)',
          'glow-yellow': '0 0 12px rgba(255,214,10,.45), 0 0 28px rgba(255,106,0,.18)',
          'inner-fire': 'inset 0 0 24px rgba(255,106,0,.08)',
        },
        borderRadius: { tech: '3px' },
        keyframes: {
          gradientFlow: {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          },
          pulseGlow: {
            '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
            '50%': { opacity: '1', transform: 'scale(1.03)' },
          },
          scanline: {
            '0%': { transform: 'translateY(-100%)' },
            '100%': { transform: 'translateY(100vh)' },
          },
          blink: {
            '0%, 45%': { opacity: '1' },
            '46%, 100%': { opacity: '0' },
          },
        },
        animation: {
          'gradient-flow': 'gradientFlow 6s ease infinite',
          'pulse-glow': 'pulseGlow 2.8s ease-in-out infinite',
          scanline: 'scanline 8s linear infinite',
          blink: 'blink 1.1s step-end infinite',
        },
      },
    },
    plugins: [],
  }