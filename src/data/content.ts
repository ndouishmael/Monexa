/**
 * Site content for capability areas, the engagement process and company
 * principles. Nothing here claims clients, certifications, partnerships or
 * technologies that Monexa has not actually stated.
 */

export type CapabilityArea = {
  id: string
  title: string
  summary: string
  examples: string[]
  icon:
    | 'code'
    | 'mobile'
    | 'layers'
    | 'grid'
    | 'link'
    | 'refresh'
    | 'chart'
    | 'building'
}

/**
 * Concrete things a business can hire Monexa to build. These are the
 * capability areas of custom software engineering — the primary business.
 */
export const capabilityAreas: CapabilityArea[] = [
  {
    id: 'web-applications',
    title: 'Web applications',
    summary:
      'Browser-based software that a team logs into and uses to get work done.',
    examples: [
      'Customer and member portals',
      'Booking, scheduling and request systems',
      'Role-based admin and back-office tools',
    ],
    icon: 'code',
  },
  {
    id: 'mobile-applications',
    title: 'Mobile applications',
    summary:
      'Applications for people who work away from a desk, on a phone or tablet.',
    examples: [
      'Field, on-site and in-the-room workflows',
      'Capture, checklists and approvals',
      'Mobile front-ends onto an existing system',
    ],
    icon: 'mobile',
  },
  {
    id: 'business-platforms',
    title: 'Business platforms',
    summary:
      'Larger systems that carry a core part of how a business operates or earns.',
    examples: [
      'Multi-user platforms with defined roles and permissions',
      'Products a business sells or offers to its own customers',
      'Systems designed to grow beyond their first version',
    ],
    icon: 'layers',
  },
  {
    id: 'internal-systems',
    title: 'Internal systems',
    summary:
      'Operational software replacing spreadsheets, email threads and manual tracking.',
    examples: [
      'Job, case and workflow tracking',
      'Inventory, assets and records management',
      'Approval and operational sign-off flows',
    ],
    icon: 'grid',
  },
  {
    id: 'apis-integrations',
    title: 'APIs and integrations',
    summary:
      'Making separate systems exchange data reliably instead of being rekeyed by hand.',
    examples: [
      'APIs for your own software to expose or consume',
      'Connecting existing tools that do not talk to each other',
      'Scheduled and event-driven data synchronisation',
    ],
    icon: 'link',
  },
  {
    id: 'automation',
    title: 'Automation',
    summary:
      'Removing repetitive manual steps that cost time and introduce errors.',
    examples: [
      'Document, report and notification generation',
      'Rule-driven routing and status changes',
      'Recurring processes that currently depend on someone remembering',
    ],
    icon: 'refresh',
  },
  {
    id: 'data-dashboards',
    title: 'Data and dashboards',
    summary:
      'Turning the data a business already produces into something it can act on.',
    examples: [
      'Operational dashboards and monitoring views',
      'Reporting built around the decisions being made',
      'Consolidating data that currently lives in several places',
    ],
    icon: 'chart',
  },
  {
    id: 'custom-enterprise-software',
    title: 'Custom enterprise software',
    summary:
      'Systems for organisations whose requirements do not fit off-the-shelf products.',
    examples: [
      'Software shaped around regulated or specialised processes',
      'Replacing or modernising ageing internal systems',
      'Long-lived systems maintained and extended over time',
    ],
    icon: 'building',
  },
]

export type EngagementStep = {
  index: string
  title: string
  summary: string
  detail: string
  outputs: string[]
}

/**
 * The full engagement, described practically. Same six stages used on
 * /how-we-work, with additional detail for the services page.
 */
export const engagement: EngagementStep[] = [
  {
    index: '01',
    title: 'Understand',
    summary: 'We start with the problem, not the technology.',
    detail:
      'We work through what is actually happening today: who does the work, where it breaks down, what it costs in time or accuracy, and what has already been tried. This is the stage that decides whether software is even the right answer, and which part of the problem is worth solving first.',
    outputs: [
      'A clear statement of the problem',
      'The people and workflows involved',
      'An honest view of what is worth building',
    ],
  },
  {
    index: '02',
    title: 'Define',
    summary: 'We turn the problem into a system that can be built.',
    detail:
      'We set the scope: what the software has to do, what it deliberately will not do in the first version, how the pieces fit together, and what success looks like. Defining the boundaries early is what keeps a build from drifting.',
    outputs: [
      'Scope and priorities for a first version',
      'System shape and data model',
      'Agreed definition of done',
    ],
  },
  {
    index: '03',
    title: 'Design',
    summary: 'We design the experience and the architecture together.',
    detail:
      'Screens and structure are designed as one thing. We map the key journeys, design the interfaces people will actually use every day, and settle the architecture behind them so the software is coherent from the interface down to the data.',
    outputs: [
      'Key screens and user journeys',
      'Architecture and integration points',
      'Decisions recorded before code is written',
    ],
  },
  {
    index: '04',
    title: 'Engineer',
    summary: 'We build it properly, in working increments.',
    detail:
      'Software is built in increments you can see and use, rather than disappearing for months. We keep the codebase structured and readable, because most of the cost of software arrives after the first release.',
    outputs: [
      'Working software delivered incrementally',
      'A maintainable, reviewable codebase',
      'Regular visibility of progress',
    ],
  },
  {
    index: '05',
    title: 'Test and launch',
    summary: 'We verify the software and put it into real use carefully.',
    detail:
      'Testing runs alongside the build, not as an afterthought: correctness, edge cases, permissions and the awkward real-world paths. Launch is planned — environments, data, access and a way to roll forward if something needs attention.',
    outputs: [
      'Testing through the build, not only at the end',
      'A planned deployment and cut-over',
      'Handover so the system can be run',
    ],
  },
  {
    index: '06',
    title: 'Evolve',
    summary: 'Software that is used will need to change.',
    detail:
      'Once people use a system, reality arrives: new cases, new rules, new priorities. We support and extend what we build so it keeps fitting the business instead of slowly falling behind it.',
    outputs: [
      'Support and maintenance',
      'Improvements driven by real usage',
      'Room to extend the system over time',
    ],
  },
]

export type Principle = {
  title: string
  description: string
}

export const principles: Principle[] = [
  {
    title: 'Problem first',
    description:
      'We establish what actually needs to change before we choose anything technical.',
  },
  {
    title: 'Built to be used',
    description:
      'Software is judged by whether the people it was built for can do their work with it.',
  },
  {
    title: 'Engineered, not assembled',
    description:
      'Architecture, structure and testing, so the system can be maintained and extended.',
  },
  {
    title: 'Honest about scope',
    description:
      'We would rather set a realistic scope than promise everything and deliver a shell.',
  },
]

/** Company timeline — reflects Monexa's actual stated history only. */
export const timeline = [
  { year: '2025', event: 'Monexa founded' },
  {
    year: '2026',
    event: "Software engineering becomes the company's primary focus",
  },
  { year: 'Today', event: 'Custom software engineering + Monexa products' },
]
