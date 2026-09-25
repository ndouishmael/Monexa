import type { Product } from '../data/products'
import useInView from '../hooks/useInView'

type ProductSystemStageProps = {
  product: Product
  eager?: boolean
  compact?: boolean
  className?: string
}

type SystemConfig = {
  code: string
  input: string
  output: string
  modules: [string, string, string, string]
  flow: [string, string, string]
}

const systemConfig: Record<Product['slug'], SystemConfig> = {
  touchmed24: {
    code: 'MED / PRACTICE SYSTEM',
    input: 'CARE WORKFLOW',
    output: 'PRACTICE VIEW',
    modules: ['Patient flow', 'Consultation state', 'Claim route', 'Billing layer'],
    flow: ['Patient', 'Consultation', 'Administration'],
  },
  'ledger-and-saldo': {
    code: 'FIN / LEDGER SYSTEM',
    input: 'FINANCIAL EVENTS',
    output: 'BALANCE VIEW',
    modules: ['Account map', 'Transaction stream', 'Cash-flow layer', 'Reporting state'],
    flow: ['Accounts', 'Transactions', 'Insight'],
  },
  'the-eye': {
    code: 'NET / OBSERVABILITY SYSTEM',
    input: 'NETWORK SIGNAL',
    output: 'SYSTEM VIEW',
    modules: ['Topology map', 'Link state', 'Telemetry path', 'Alarm layer'],
    flow: ['Infrastructure', 'Telemetry', 'Visibility'],
  },
}

/**
 * A system environment around an approved product asset. The source image is
 * rendered unchanged and uncropped; all motion and interface language lives in
 * the surrounding composition.
 */
export default function ProductSystemStage({
  product,
  eager = false,
  compact = false,
  className = '',
}: ProductSystemStageProps) {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.18, once: false })
  const config = systemConfig[product.slug]

  return (
    <figure
      ref={ref}
      className={`product-system product-system--${product.slug} ${compact ? 'product-system--compact' : ''} ${
        isInView ? 'is-active' : ''
      } ${className}`}
    >
      <div className="product-system__grid" aria-hidden="true" />
      <div className="product-system__axis product-system__axis--x" aria-hidden="true" />
      <div className="product-system__axis product-system__axis--y" aria-hidden="true" />

      <svg
        className="product-system__routes"
        viewBox="0 0 1000 650"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path className="product-route product-route--one" d="M28 120 H150 Q180 120 180 150 V230 H250" />
        <path className="product-route product-route--two" d="M972 142 H865 Q835 142 835 172 V245 H760" />
        <path className="product-route product-route--three" d="M28 540 H128 Q158 540 158 510 V450 H250" />
        <path className="product-route product-route--four" d="M972 520 H890 Q860 520 860 490 V430 H760" />
      </svg>

      <div className="product-system__coordinate product-system__coordinate--tl" aria-hidden="true">
        00 / ORIGIN
      </div>
      <div className="product-system__coordinate product-system__coordinate--tr" aria-hidden="true">
        {config.code}
      </div>

      <div className="product-system__module product-system__module--left-top" aria-hidden="true">
        <span className="product-system__signal" />
        <span>{config.modules[0]}</span>
        <small>INPUT / READY</small>
      </div>
      <div className="product-system__module product-system__module--right-top" aria-hidden="true">
        <span className="product-system__signal" />
        <span>{config.modules[1]}</span>
        <small>STATE / DEFINED</small>
      </div>
      <div className="product-system__module product-system__module--left-bottom" aria-hidden="true">
        <span className="product-system__signal" />
        <span>{config.modules[2]}</span>
        <small>ROUTE / CONNECTED</small>
      </div>
      <div className="product-system__module product-system__module--right-bottom" aria-hidden="true">
        <span className="product-system__signal" />
        <span>{config.modules[3]}</span>
        <small>OUTPUT / STRUCTURED</small>
      </div>

      <div className="product-system__node product-system__node--one" aria-hidden="true" />
      <div className="product-system__node product-system__node--two" aria-hidden="true" />
      <div className="product-system__node product-system__node--three" aria-hidden="true" />
      <div className="product-system__node product-system__node--four" aria-hidden="true" />

      <div className="product-system__interface">
        <div className="product-system__bar">
          <div className="product-system__bar-title">
            <span className="product-system__bar-mark" aria-hidden="true" />
            <span>{product.name}</span>
          </div>
          <div className="product-system__bar-state">
            <span className="product-system__pulse" aria-hidden="true" />
            Product / {product.status}
          </div>
        </div>

        <div className="product-system__image">
          <img
            src={product.image}
            alt={product.imageAlt}
            width={product.imageWidth}
            height={product.imageHeight}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={eager ? 'high' : 'auto'}
          />
        </div>

        <div className="product-system__flow" aria-hidden="true">
          {config.flow.map((label, index) => (
            <span key={label}>
              <i>{String(index + 1).padStart(2, '0')}</i>
              {label}
              {index < config.flow.length - 1 && <b>→</b>}
            </span>
          ))}
        </div>
      </div>

      <div className="product-system__port product-system__port--input" aria-hidden="true">
        <span>IN</span>
        {config.input}
      </div>
      <div className="product-system__port product-system__port--output" aria-hidden="true">
        <span>OUT</span>
        {config.output}
      </div>

      <figcaption className="sr-only">
        {product.name} product interface shown inside a conceptual Monexa engineering system. The
        product is currently in development.
      </figcaption>
    </figure>
  )
}
