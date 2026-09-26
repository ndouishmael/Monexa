import { Link } from 'react-router-dom'
import Logo from './Logo'
import { nav, site } from '../data/site'
import { products } from '../data/products'
import { IconMail } from './Icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-24 overflow-hidden bg-ink-950 text-ink-100">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-brand-teal/10 blur-3xl" aria-hidden="true" />
      <div className="relative container-page py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="inline-flex rounded-xl bg-white p-2.5 shadow-[0_12px_32px_-18px_rgba(0,0,0,0.6)]">
              <Logo plain className="block h-12 md:h-14" />
            </div>
            <p className="mt-5 max-w-xs text-lg font-semibold text-white">Monexa</p>
            <p className="mt-1 max-w-xs text-sm text-ink-300">
              {site.tagline}
            </p>
            <p className="mt-6 max-w-xs text-sm text-ink-400">
              Built in South Africa. Local understanding, global ambition.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-ink-400">Company</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-ink-200 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Products navigation">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-ink-400">Products</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/products/${p.slug}`}
                    className="text-ink-200 transition-colors hover:text-white"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/products" className="text-ink-400 transition-colors hover:text-white">
                  All products
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-ink-400">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-ink-200 transition-colors hover:text-white"
                >
                  <IconMail className="h-4 w-4 text-brand-teal" />
                  {site.email}
                </a>
              </li>
              <li className="text-ink-400">South Africa</li>
              <li>
                <Link to="/contact" className="text-brand-teal transition-colors hover:text-white">
                  Speak to us →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Monexa. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.18em] text-ink-500">
            Where Software Meets Substance.
          </p>
        </div>
      </div>
    </footer>
  )
}
