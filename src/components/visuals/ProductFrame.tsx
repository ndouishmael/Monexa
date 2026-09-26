import { useEffect, useRef, useState } from 'react'
import type { Product } from '../../data/products'

type Size = 'card' | 'feature' | 'hero'

const accentRing: Record<Product['accent'], string> = {
  blue: 'from-brand-blue/25 to-brand-teal/10',
  teal: 'from-brand-teal/25 to-brand-blue/10',
  mixed: 'from-brand-blue/20 to-brand-teal/20',
}

const accentLine: Record<Product['accent'], string> = {
  blue: 'from-brand-blue via-brand-bluedark to-brand-teal/40',
  teal: 'from-brand-teal via-brand-tealdark to-brand-blue/40',
  mixed: 'from-brand-blue via-brand-teal to-brand-blue/40',
}

const accentDot: Record<Product['accent'], string> = {
  blue: 'bg-brand-blue',
  teal: 'bg-brand-teal',
  mixed: 'bg-brand-blue',
}

/**
 * Frames an approved product image as a software interface rather than a
 * pasted photograph: window chrome, depth, a restrained activation sweep and
 * (on larger sizes) the product's own signal labels.
 *
 * The image itself is the approved asset committed to this repository — it is
 * never cropped, recoloured or substituted. It is only ever framed.
 */
export default function ProductFrame({
  product,
  size = 'feature',
  className = '',
  priority = false,
}: {
  product: Product
  size?: Size
  className?: string
  priority?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setActive(true)
      return
    }
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(true)
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.2 },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  const showChrome = size !== 'card'
  const showSignals = size === 'hero'

  return (
    <div ref={ref} className={`group/frame relative ${className}`}>
      {/* Depth glow behind the interface */}
      <div
        className={`pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br ${accentRing[product.accent]} opacity-0 blur-2xl transition-opacity duration-1000 ${
          active ? 'opacity-100' : ''
        }`}
        aria-hidden="true"
      />

      <div
        className={`relative overflow-hidden rounded-xl border border-ink-200/80 bg-white shadow-[0_24px_70px_-32px_rgba(11,32,53,0.55)] transition-all duration-500 ${
          size === 'card' ? 'group-hover/frame:-translate-y-0.5' : ''
        }`}
      >
        {/* Domain accent: each product carries its own colour signature */}
        <span
          className={`block h-0.5 w-full bg-gradient-to-r ${accentLine[product.accent]}`}
          aria-hidden="true"
        />

        {showChrome && (
          <div className="flex items-center gap-3 border-b border-ink-100 bg-ink-50/80 px-4 py-2.5">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className={`h-2.5 w-2.5 rounded-full ${accentDot[product.accent]}`} />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
            </span>
            <span className="truncate text-xs font-medium text-ink-500">
              {product.name}
            </span>
            <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink-500">
              <span
                className={`h-1.5 w-1.5 rounded-full bg-brand-teal ${active ? 'mx-pulse' : ''}`}
                aria-hidden="true"
              />
              {product.status}
            </span>
          </div>
        )}

        <div className="relative">
          <img
            src={product.image}
            alt={product.imageAlt}
            className="block h-auto w-full"
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
          />

          {/* Restrained activation sweep — reads as a system coming online */}
          <span
            className={`pointer-events-none absolute inset-0 ${active ? 'mx-sweep' : ''}`}
            aria-hidden="true"
          />
        </div>
      </div>

      {showSignals && (
        <div className="mt-4 flex flex-wrap gap-2">
          {product.signals.map((s, i) => (
            <span
              key={s}
              className="rounded-md border border-ink-100 bg-white px-2.5 py-1 text-xs font-medium text-ink-600 transition-colors"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {s}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
