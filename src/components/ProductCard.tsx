import { Link } from 'react-router-dom'
import type { Product } from '../data/products'
import ProductVisual from './visuals/ProductVisual'
import { IconArrowRight } from './Icons'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="card card-hover group flex flex-col overflow-hidden !p-0"
    >
      <div className="relative border-b border-ink-100 bg-ink-50/50 p-5">
        <ProductVisual
          kind={product.slug as 'touchmed24' | 'ledger-and-saldo' | 'the-eye'}
          accent={product.accent}
          className="h-44 w-full"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-ink-200 bg-white px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-500">
            {product.status}
          </span>
        </div>
        <h3 className="mt-3 text-xl font-bold text-ink-900">{product.name}</h3>
        <p className="mt-1 text-sm font-medium text-brand-blue">{product.category}</p>
        {product.tagline && (
          <p className="mt-1 font-mono text-xs italic text-ink-500">{product.tagline}</p>
        )}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{product.short}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900">
          Explore {product.name}
          <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
