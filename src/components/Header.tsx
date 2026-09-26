import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { nav } from '../data/site'
import { products } from '../data/products'
import { IconArrowRight, IconClose, IconMenu } from './Icons'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const location = useLocation()
  const productsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false)
    setProductsOpen(false)
  }, [location.pathname])

  // Close products dropdown on outside click / escape
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false)
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setProductsOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'border-b border-ink-100 bg-white/90 backdrop-blur-md'
          : 'border-b border-transparent bg-white/60 backdrop-blur-sm'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <div className="container-page">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Logo className="h-9 md:h-10" imgClassName="mix-blend-multiply" />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) =>
              item.label === 'Products' ? (
                <div key={item.to} ref={productsRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setProductsOpen((v) => !v)}
                    aria-expanded={productsOpen}
                    aria-haspopup="true"
                    className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      location.pathname.startsWith('/products')
                        ? 'text-ink-900'
                        : 'text-ink-600 hover:text-ink-900'
                    }`}
                  >
                    Products
                    <svg
                      className={`h-4 w-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {productsOpen && (
                    <div className="absolute left-0 top-full mt-2 w-80 rounded-xl border border-ink-100 bg-white p-2 shadow-[0_24px_60px_-24px_rgba(11,32,53,0.4)]">
                      <Link
                        to="/products"
                        className="mb-1 block rounded-lg px-3 py-2 text-sm font-semibold text-brand-blue hover:bg-ink-50"
                      >
                        All products
                      </Link>
                      {products.map((p) => (
                        <Link
                          key={p.slug}
                          to={`/products/${p.slug}`}
                          className="group flex items-start gap-3 rounded-lg px-3 py-2.5 hover:bg-ink-50"
                        >
                          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-brand-blue to-brand-teal" />
                          <span>
                            <span className="block text-sm font-semibold text-ink-900">{p.name}</span>
                            <span className="block text-xs text-ink-500">{p.category}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      isActive ? 'text-ink-900' : 'text-ink-600 hover:text-ink-900'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary">
              Start a project
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-800 hover:bg-ink-50 lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden">
          <div className="container-page pb-6 pt-2">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-3 text-base font-medium ${
                      isActive ? 'bg-ink-50 text-ink-900' : 'text-ink-700 hover:bg-ink-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-2 grid gap-1 rounded-lg bg-ink-50 p-2">
                <span className="px-2 py-1 text-xs font-semibold text-ink-500">
                  Products
                </span>
                {products.map((p) => (
                  <NavLink
                    key={p.slug}
                    to={`/products/${p.slug}`}
                    className="rounded-md px-2 py-2 text-sm text-ink-700 hover:bg-white"
                  >
                    {p.name}
                  </NavLink>
                ))}
              </div>
              <Link to="/contact" className="btn-accent mt-3 w-full">
                Start a project
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
