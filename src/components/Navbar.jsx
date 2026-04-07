import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'gl', label: 'Galego' },
  { code: 'es', label: 'Español' },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [langOpen, setLangOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const langRef = useRef(null)

  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return true
  })

  useEffect(() => {
    const html = document.documentElement
    if (dark) {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

const links = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/experience', label: t('nav.experience') },
    { to: '/education', label: t('nav.education') },
    { to: '/projects', label: t('nav.projects') },
  ]

  return (
    <nav
      className="fixed top-0 w-full z-50 backdrop-blur-xl shadow-2xl shadow-black/20"
      style={{
        background: 'var(--p-nav-bg)',
        backgroundImage: `linear-gradient(to bottom, var(--p-nav-from), transparent)`,
      }}
    >
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <NavLink to="/" className="text-xl font-bold tracking-tighter text-on-background font-headline">
          Antón Gómez López
        </NavLink>

        {/* Mobile/tablet: theme toggle + hamburger */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            onClick={() => setDark(d => !d)}
            className="material-symbols-outlined text-primary hover:text-secondary transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {dark ? 'light_mode' : 'dark_mode'}
          </button>
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="material-symbols-outlined text-on-background hover:text-primary transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {menuOpen ? 'close' : 'menu'}
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-8 font-headline font-bold tracking-tight">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                isActive
                  ? 'text-primary border-b-2 border-primary pb-1'
                  : 'text-on-background/70 hover:text-secondary transition-all duration-300'
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Language dropdown */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(o => !o)}
              className="material-symbols-outlined text-primary hover:text-secondary transition-colors duration-300"
              aria-label="Change language"
            >
              translate
            </button>
            {langOpen && (
              <div className="absolute right-0 top-8 min-w-[110px] rounded-lg border border-outline-variant/20 shadow-xl overflow-hidden"
                style={{ background: 'var(--p-background)' }}
              >
                {LANGUAGES.map(({ code, label }) => (
                  <button
                    key={code}
                    onClick={() => {
                      i18n.changeLanguage(code)
                      localStorage.setItem('lang', code)
                      setLangOpen(false)
                    }}
                    className={`w-full px-4 py-2 text-left font-label text-xs tracking-widest uppercase transition-colors duration-200 ${
                      i18n.language === code
                        ? 'text-primary'
                        : 'text-on-background/60 hover:text-on-background hover:bg-outline-variant/10'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setDark(d => !d)}
            className="material-symbols-outlined text-primary hover:text-secondary transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {dark ? 'light_mode' : 'dark_mode'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden border-t border-outline-variant/20 px-8 py-4 flex flex-col gap-1"
          style={{ background: 'var(--p-nav-bg)', backdropFilter: 'blur(12px)' }}
        >
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `py-3 font-headline font-bold tracking-tight border-b border-outline-variant/10 ${
                  isActive ? 'text-primary' : 'text-on-background/70'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="flex items-center gap-4 pt-4">
            {LANGUAGES.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => {
                  i18n.changeLanguage(code)
                  localStorage.setItem('lang', code)
                  setMenuOpen(false)
                }}
                className={`font-label text-xs tracking-widest uppercase transition-colors duration-200 ${
                  i18n.language === code ? 'text-primary' : 'text-on-background/50 hover:text-on-background'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
