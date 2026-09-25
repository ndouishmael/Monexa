import type { ReactNode } from 'react'
import Reveal from './Reveal'

type Props = {
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  className = '',
}: Props) {
  const centered = align === 'center'
  return (
    <div
      className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <p className={`eyebrow ${centered ? 'justify-center' : ''}`}>
            <span className="h-px w-6 bg-brand-blue" />
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={140}>
          <p className="mt-4 text-lg leading-relaxed text-ink-600 text-pretty">{intro}</p>
        </Reveal>
      )}
    </div>
  )
}
