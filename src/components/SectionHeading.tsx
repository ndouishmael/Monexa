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
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <Reveal>
          <p className={`eyebrow ${centered ? 'justify-center' : ''}`}>
            <span className="h-px w-7 bg-brand-blue" />
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={60}>
        <h2 className="mt-5 text-3xl font-semibold leading-tight text-ink-950 sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={110}>
          <p className="mt-5 max-w-2xl text-base leading-7 text-ink-600 text-pretty sm:text-lg sm:leading-8">
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  )
}
