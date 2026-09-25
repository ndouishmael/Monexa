import type { CSSProperties } from 'react'
import { process } from '../data/content'
import useInView from '../hooks/useInView'

export default function EngineeringPipeline({ className = '' }: { className?: string }) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2, once: false })

  return (
    <div
      ref={ref}
      className={`engineering-pipeline ${isInView ? 'is-active' : ''} ${className}`}
      aria-label="Monexa custom software engineering process"
    >
      <div className="engineering-pipeline__grid" aria-hidden="true" />
      <div className="engineering-pipeline__header">
        <div>
          <span>PRIMARY CAPABILITY</span>
          <strong>CUSTOM SOFTWARE ENGINEERING</strong>
        </div>
        <div className="engineering-pipeline__status">
          <i aria-hidden="true" />
          SYSTEM / DEFINED
        </div>
      </div>

      <div className="engineering-pipeline__track" aria-hidden="true">
        <span />
      </div>

      <ol className="engineering-pipeline__stages">
        {process.map((stage, index) => (
          <li
            key={stage.index}
            className="engineering-pipeline__stage"
            style={{ '--stage-delay': `${120 + index * 100}ms` } as CSSProperties}
          >
            <div className="engineering-pipeline__node" aria-hidden="true">
              <i />
            </div>
            <span className="engineering-pipeline__index">{stage.index}</span>
            <h3>{stage.title}</h3>
            <p>{stage.description}</p>
            <small>{index === 0 ? 'INPUT' : index === process.length - 1 ? 'LOOP' : 'PROCESS'}</small>
          </li>
        ))}
      </ol>

      <div className="engineering-pipeline__logic" aria-label="Problem to real-world outcome">
        {['Problem', 'Architecture', 'Software', 'Real-world outcome'].map((label, index) => (
          <span key={label}>
            <i>{String(index + 1).padStart(2, '0')}</i>
            {label}
            {index < 3 && <b aria-hidden="true">→</b>}
          </span>
        ))}
      </div>
    </div>
  )
}
