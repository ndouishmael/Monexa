import { Link } from 'react-router-dom'
import Logo from './Logo'
import { nav, site } from '../data/site'
import { products } from '../data/products'
import { IconArrowRight, IconMail } from './Icons'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden="true" />
      <div className="relative container-page py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.8fr_0.9fr_1fr]">
          <div>
            <div className="inline-flex items-stretch border border-white/15 bg-white">
              <Logo plain />
              <div className="flex flex-col justify-center border-l border-ink-100 bg-ink-50 px-3" aria-hidden="true">
                <span className="font-mono text-[6px] font-semibold uppercase tracking-[0.16em] text-ink-400">Brand core</span>
                <span className="mt-1 flex items-center gap-1.5 font-mono text-[6px] uppercase tracking-[0.13em] text-brand-tealdark">
                  <i className="h-1 w-1 rounded-full bg-brand-teal" />
                  System 00
                </span>
              </div>
            </div>
            <p className="mt-6 text-xl font-semibold text-white">Monexa</p>
            <p className="mt-2 text-sm text-ink-300">{site.tagline}</p>
            <p className="mt-6 max-w-xs text-sm leading-6 text-ink-400">
              A software engineering company with South African roots and global ambition.
            </p>
          </div>

          <nav aria-label="Company links">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">Company</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-ink-300 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Product links">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">Products</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    to={`/products/${product.slug}`}
                    className="text-ink-300 transition-colors hover:text-white"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/products"
              className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-brand-teal hover:text-white"
            >
              Product portfolio
              <IconArrowRight className="h-3.5 w-3.5" />
            </Link>
          </nav>

          <div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">Contact</h2>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-flex items-center gap-2 text-sm text-ink-300 transition-colors hover:text-white"
            >
              <IconMail className="h-4 w-4 text-brand-teal" />
              {site.email}
            </a>
            <p className="mt-3 text-sm text-ink-400">{site.location}</p>
            <Link to="/contact" className="btn mt-6 border border-white/20 text-white hover:bg-white/10">
              Speak to us
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Monexa. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.16em]">Where Software Meets Substance.</p>
        </div>
      </div>
    </footer>
  )
}
