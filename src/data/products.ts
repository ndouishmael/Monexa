export type Product = {
  slug: string
  name: string
  category: string
  tagline?: string
  relationship: string
  status: string
  short: string
  summary: string
  problem: string[]
  audience: string[]
  capabilities: { title: string; description: string }[]
  accent: 'blue' | 'teal' | 'mixed'
}

export const products: Product[] = [
  {
    slug: 'touchmed24',
    name: 'TouchMed24',
    category: 'Healthcare Technology / Practice Management',
    relationship: 'A Product of Monexa.inc',
    status: 'In development',
    short:
      'A healthcare technology platform designed to help medical practices run their day-to-day operations with less friction.',
    summary:
      'TouchMed24 is a healthcare technology and medical practice management platform being developed by Monexa. It is designed to bring the moving parts of a practice — patients, consultations, medical-aid workflows and administration — into one coherent system, so clinical teams can spend more time on care and less on paperwork.',
    problem: [
      'Medical practices juggle patient records, scheduling, medical-aid rules and billing across disconnected tools and manual processes.',
      'Eligibility checks, claims and administration are time-consuming and error-prone when handled in isolation.',
      'Practice staff need a single, dependable view of operations rather than fragmented systems that do not talk to each other.',
    ],
    audience: [
      'Medical and healthcare practices',
      'Practice managers and administrative staff',
      'Clinicians who need workflows that support, not slow, patient care',
    ],
    capabilities: [
      {
        title: 'Patient management',
        description:
          'A structured, secure foundation for patient information and records across the practice.',
      },
      {
        title: 'Practice operations',
        description:
          'Tools intended to coordinate the day-to-day running of a practice in one place.',
      },
      {
        title: 'Consultations',
        description:
          'Support for the consultation workflow so clinical time is spent on care, not admin.',
      },
      {
        title: 'Medical-aid workflows & eligibility',
        description:
          'Designed to streamline medical-aid processes and eligibility so they are less manual.',
      },
      {
        title: 'Billing & claims',
        description:
          'Intended to make billing and claims more consistent and less error-prone.',
      },
      {
        title: 'Practice administration',
        description:
          'Administrative tooling that ties the practice together into a coherent system.',
      },
    ],
    accent: 'blue',
  },
  {
    slug: 'ledger-and-saldo',
    name: 'Ledger & Saldo',
    category: 'Financial Software / Accounting & Financial Management',
    tagline: 'Find your balance.',
    relationship: 'A software product being developed by Monexa',
    status: 'In development',
    short:
      'A financial software and accounting platform designed to give businesses a clear, dependable picture of their finances.',
    summary:
      'Ledger & Saldo is a financial software and accounting platform being developed by Monexa. It is designed to help businesses keep accurate financial records, understand their cash flow and manage the relationships — customers, suppliers and accounts — that sit behind every number.',
    problem: [
      'Businesses often manage accounting, invoicing and financial records across spreadsheets and tools that do not reconcile cleanly.',
      'Understanding real cash flow and financial position can be slow, manual and unclear.',
      'Financial data, customers, suppliers and accounts need to live in one dependable system to be genuinely useful.',
    ],
    audience: [
      'Small and growing businesses',
      'Finance and accounting teams',
      'Owners who need a clear view of financial health',
    ],
    capabilities: [
      {
        title: 'Accounting',
        description:
          'A structured core for accounting built around accuracy and clarity.',
      },
      {
        title: 'Financial management',
        description:
          'Designed to help businesses manage their finances with confidence.',
      },
      {
        title: 'Customers & suppliers',
        description:
          'Keep the relationships behind the numbers organised in one place.',
      },
      {
        title: 'Accounts',
        description:
          'A dependable structure for accounts and financial records.',
      },
      {
        title: 'Reporting',
        description:
          'Reporting intended to turn financial records into understandable insight.',
      },
      {
        title: 'Cash flow',
        description:
          'Designed to make cash flow visible and easier to plan around.',
      },
    ],
    accent: 'teal',
  },
  {
    slug: 'the-eye',
    name: 'The Eye',
    category: 'Network & Infrastructure Monitoring',
    relationship: 'A software product being developed by Monexa',
    status: 'In development',
    short:
      'A network and infrastructure monitoring platform designed to give teams clear visibility into their environments.',
    summary:
      'The Eye is a network and infrastructure monitoring platform being developed by Monexa. It is designed to give teams clear visibility into their network and infrastructure — from topology and devices through to performance, links and alarms — so problems can be understood before they become outages.',
    problem: [
      'Infrastructure and network environments are complex, and visibility is often scattered across tools.',
      'Teams need to understand topology, performance and the health of links and devices in one place.',
      'Without clear monitoring and alarms, problems are discovered late rather than anticipated.',
    ],
    audience: [
      'Technical and operations teams',
      'Organisations running their own network and infrastructure',
      'Teams that need dependable visibility rather than guesswork',
    ],
    capabilities: [
      {
        title: 'Infrastructure monitoring',
        description:
          'A foundation for monitoring the infrastructure teams depend on.',
      },
      {
        title: 'Network visibility',
        description:
          'Designed to bring network visibility into a single, clear view.',
      },
      {
        title: 'Topology',
        description:
          'Understand how the environment is connected through topology.',
      },
      {
        title: 'Alarms',
        description:
          'Alarms intended to surface problems early rather than late.',
      },
      {
        title: 'Performance & links',
        description:
          'Insight into performance and the health of links across the network.',
      },
      {
        title: 'Network devices & reporting',
        description:
          'Visibility into devices with reporting that supports real decisions.',
      },
    ],
    accent: 'mixed',
  },
]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
