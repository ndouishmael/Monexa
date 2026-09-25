import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { nav } from '../data/site'
import { IconArrowRight, IconClose, IconMenu } from './Icons'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || mobileOpen
          ? 'border-ink-100 bg-ink-50/95 shadow-[0_10px_40px_-28px_rgba(5,24,40,.5)] backdrop-blur-xl'
          : 'border-ink-100/80 bg-ink-50/90 backdrop-blur-md'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:bg-ink-950 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <div className="container-page flex h-20 items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <Logo />
          <div className="hidden border-l border-ink-200 pl-3 xl:block" aria-hidden="true">
            <span className="block font-mono text-[7px] font-semibold uppercase tracking-[0.18em] text-ink-400">
              Engineering system
            </span>
            <span className="mt-1 flex items-center gap-1.5 font-mono text-[7px] uppercase tracking-[0.14em] text-brand-tealdark">
              <i className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
              South Africa
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary navigation">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative px-3 py-3 text-[13px] font-semibold transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:bg-brand-blue after:transition-transform ${
                  isActive
                    ? 'text-ink-950 after:scale-x-100'
                    : 'text-ink-500 after:scale-x-0 hover:text-ink-950 hover:after:scale-x-100'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="btn-primary hidden lg:inline-flex">
          Speak to us
          <IconArrowRight className="h-4 w-4" />
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-ink-200 text-ink-900 transition-colors hover:bg-ink-50 lg:hidden"
          aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-ink-100 bg-ink-50 transition-[max-height,opacity] duration-300 lg:hidden ${
          mobileOpen ? 'max-h-[calc(100vh-5rem)] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-page flex max-h-[calc(100vh-5rem)] flex-col gap-1 overflow-y-auto py-5" aria-label="Mobile navigation">
          {nav.map((item, index) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center justify-between border-b border-ink-100 px-1 py-4 text-lg font-semibold ${
                  isActive ? 'text-brand-blue' : 'text-ink-900'
                }`
              }
            >
              <span>{item.label}</span>
              <span className="font-mono text-[10px] text-ink-400">0{index + 1}</span>
            </NavLink>
          ))}
          <Link to="/contact" className="btn-accent mt-5 w-full">
            Speak to us
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </header>
  )
}
