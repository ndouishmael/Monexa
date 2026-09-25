import type { CSSProperties } from 'react'
import useInView from '../../hooks/useInView'

const modules = [
  { id: '01', title: 'Problem', detail: 'Real-world context', position: 'problem' },
  { id: '02', title: 'Interface', detail: 'Human workflow', position: 'interface' },
  { id: '03', title: 'Data', detail: 'Structured information', position: 'data' },
  { id: '04', title: 'Integration', detail: 'Connected systems', position: 'integration' },
  { id: '05', title: 'Operations', detail: 'Observe and evolve', position: 'operations' },
]

export default function HeroVisual({ className = '' }: { className?: string }) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.05, once: false })

  return (
    <div
      ref={ref}
      className={`hero-architecture ${isInView ? 'is-active' : ''} ${className}`}
      role="img"
      aria-label="A living software architecture connecting real-world problems, interfaces, data, integrations and operations through Monexa engineering"
    >
      <div className="hero-architecture__grid" aria-hidden="true" />
      <div className="hero-architecture__header" aria-hidden="true">
        <span>MONEXA / ENGINEERING ENVIRONMENT</span>
        <span className="hero-architecture__state">
          <i /> System ready
        </span>
      </div>

      <svg
        className="hero-architecture__routes"
        viewBox="0 0 800 620"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <g className="hero-route-base">
          <path d="M110 148 H250 Q290 148 310 190 L365 275" />
          <path d="M690 148 H550 Q510 148 490 190 L435 275" />
          <path d="M110 468 H250 Q285 468 310 425 L365 345" />
          <path d="M690 468 H550 Q515 468 490 425 L435 345" />
          <path d="M400 530 V385" />
        </g>
        <g className="hero-route-flow">
          <path d="M110 148 H250 Q290 148 310 190 L365 275" />
          <path d="M690 148 H550 Q510 148 490 190 L435 275" />
          <path d="M110 468 H250 Q285 468 310 425 L365 345" />
          <path d="M690 468 H550 Q515 468 490 425 L435 345" />
          <path d="M400 530 V385" />
        </g>
      </svg>

      <div className="hero-architecture__orbit hero-architecture__orbit--outer" aria-hidden="true" />
      <div className="hero-architecture__orbit hero-architecture__orbit--inner" aria-hidden="true" />

      <div className="hero-architecture__core" aria-hidden="true">
        <span className="hero-architecture__core-index">CORE / 00</span>
        <strong>MONEXA</strong>
        <span>ENGINEERING</span>
        <div className="hero-architecture__core-status">
          <i /> Meaningful software
        </div>
      </div>

      {modules.map((module, index) => (
        <div
          key={module.id}
          className={`hero-architecture__module hero-architecture__module--${module.position}`}
          style={{ '--module-delay': `${160 + index * 90}ms` } as CSSProperties}
          aria-hidden="true"
        >
          <span className="hero-architecture__module-index">{module.id}</span>
          <strong>{module.title}</strong>
          <small>{module.detail}</small>
          <i className="hero-architecture__module-node" />
        </div>
      ))}

      <div className="hero-architecture__annotation hero-architecture__annotation--left" aria-hidden="true">
        INPUT / CONTEXT
      </div>
      <div className="hero-architecture__annotation hero-architecture__annotation--right" aria-hidden="true">
        OUTPUT / SOFTWARE
      </div>

      <div className="hero-architecture__footer" aria-hidden="true">
        <span>PROBLEM</span><i>→</i><span>ARCHITECTURE</span><i>→</i><span>SOFTWARE</span><i>→</i><span>SUBSTANCE</span>
      </div>
    </div>
  )
}
