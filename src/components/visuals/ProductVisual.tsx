type Kind = 'touchmed24' | 'ledger-and-saldo' | 'the-eye'

const previews: Record<Kind, { src: string; label: string }> = {
  touchmed24: {
    src: '/images/products/touchmed24-dashboard.webp',
    label: 'TouchMed24 practice dashboard',
  },
  'ledger-and-saldo': {
    src: '/images/products/ledger-saldo-dashboard.webp',
    label: 'Ledger & Saldo financial dashboard',
  },
  'the-eye': {
    src: '/images/products/the-eye-dashboard.webp',
    label: 'The Eye network monitoring dashboard',
  },
}

/**
 * Product dashboard previews supplied by Monexa. These are conceptual product
 * visuals, not screenshots of a live service or commercially deployed product.
 */
export default function ProductVisual({
  kind,
  className = '',
}: {
  kind: Kind
  accent?: 'blue' | 'teal' | 'mixed'
  className?: string
}) {
  const preview = previews[kind]

  return (
    <img
      src={preview.src}
      alt={`${preview.label} concept; product currently in development, not a live service.`}
      className={className}
      width={1792}
      height={1008}
      loading="lazy"
      decoding="async"
    />
  )
}
