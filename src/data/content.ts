export type Capability = {
  id: string
  title: string
  summary: string
  points: string[]
}

export const capabilities: Capability[] = [
  {
    id: 'custom-software',
    title: 'Custom Software Engineering',
    summary:
      'Software designed around real business requirements — not forced into a template.',
    points: [
      'We start with the actual problem, not a pre-built solution.',
      'Systems engineered to fit how a business genuinely works.',
      'Built with architecture, discipline and long-term maintainability in mind.',
    ],
  },
  {
    id: 'product-engineering',
    title: 'Product Engineering',
    summary:
      'Taking an idea from concept through architecture, development and refinement.',
    points: [
      'Shape a raw idea into a defined, buildable product.',
      'Architecture and engineering that can carry a product forward.',
      'Refinement driven by how the product needs to work in practice.',
    ],
  },
  {
    id: 'systems-integrations',
    title: 'Systems & Integrations',
    summary:
      'Connecting systems, workflows and data where businesses need them to work together.',
    points: [
      'Make separate systems communicate reliably.',
      'Bring workflows and data into a coherent whole.',
      'Reduce manual work by joining the pieces that should already connect.',
    ],
  },
  {
    id: 'modernisation',
    title: 'Modernisation',
    summary: 'Improving or replacing outdated software and processes.',
    points: [
      'Assess where existing software is holding a business back.',
      'Modernise or replace what no longer serves the business.',
      'Move from fragile processes to dependable, engineered systems.',
    ],
  },
]

export type Principle = {
  title: string
  description: string
}

export const principles: Principle[] = [
  {
    title: 'Meaningful',
    description: 'We build software because it solves a real problem.',
  },
  {
    title: 'Practical',
    description: 'Technology should work in the real world.',
  },
  {
    title: 'Engineered',
    description: 'Good software requires thought, architecture and discipline.',
  },
  {
    title: 'Built to Grow',
    description:
      'Software should be capable of evolving with the people and businesses using it.',
  },
]

export type Stage = {
  index: string
  title: string
  description: string
}

export const process: Stage[] = [
  {
    index: '01',
    title: 'Understand',
    description:
      'We begin with the real problem — the people, the context and what actually needs to change.',
  },
  {
    index: '02',
    title: 'Define',
    description:
      'We turn a problem into a clear scope: what we are building, why, and what success looks like.',
  },
  {
    index: '03',
    title: 'Design',
    description:
      'We design the system and the experience together, so the software is coherent from the inside out.',
  },
  {
    index: '04',
    title: 'Engineer',
    description:
      'We build with architecture, discipline and maintainability — engineering rather than assembling.',
  },
  {
    index: '05',
    title: 'Launch',
    description:
      'We bring the software into the real world carefully, with the groundwork in place to run it.',
  },
  {
    index: '06',
    title: 'Evolve',
    description:
      'Software is never finished. We help it grow with the people and businesses using it.',
  },
]
