export type Product = {
  slug: string
  name: string
  category: string
  domain: string
  tagline?: string
  relationship: string
  /** Short status chip, e.g. "In Development". */
  status: string
  /** Longer status sentence used on product pages. */
  statusDetail: string
  short: string
  summary: string
  /** What the product is intended to do, in plain terms. */
  intent: string
  problem: string[]
  audience: string[]
  capabilities: { title: string; description: string }[]
  /**
   * Approved product imagery committed to this repository.
   * These paths must match the files in /public/images exactly.
   */
  image: string
  imageAlt: string
  /** Signal labels used by the product interface framing. */
  signals: string[]
  accent: 'blue' | 'teal' | 'mixed'
}

export const products: Product[] = [
  {
    slug: 'touchmed24',
    name: 'TouchMed24',
    category: 'Healthcare Technology',
    domain: 'Medical practice management and medical-aid billing',
    relationship: 'A Product of Monexa.inc',
    status: 'In Development',
    statusDetail:
      'TouchMed24 is currently in development at Monexa. It is not yet commercially available.',
    short:
      'A medical practice management and medical-aid billing platform being developed for South African medical practices.',
    summary:
      'TouchMed24 is a medical practice management and medical-aid billing platform being developed by Monexa for South African medical practices. It is designed to hold the moving parts of a practice — patients, appointments, consultations, billing and medical-aid claims — in one system, so that administrative work stops competing with patient care.',
    intent:
      'TouchMed24 is intended to give a practice a single working view of its day: who is booked, who is waiting, who is in consult, what has been billed, and where each medical-aid claim stands.',
    problem: [
      'Practices commonly run reception, clinical notes, billing and medical-aid claims across separate tools, paper and spreadsheets that do not reconcile with each other.',
      'Medical-aid billing and claims involve rules and follow-up that are slow and error-prone to manage by hand, and rejected or forgotten claims cost the practice money.',
      'Practice managers rarely have one dependable view of the day — appointments, queue, consultations and outstanding claims usually live in different places.',
    ],
    audience: [
      'South African medical and healthcare practices',
      'Practice managers and reception or administrative staff',
      'Clinicians who want the admin layer to stay out of the consultation',
    ],
    capabilities: [
      {
        title: 'Patient records',
        description:
          'A structured, access-controlled foundation for patient information across the practice.',
      },
      {
        title: 'Appointments and scheduling',
        description:
          'A day view of bookings across practitioners and rooms, designed for how reception actually works.',
      },
      {
        title: 'Patient queue',
        description:
          'Live visibility of who has arrived, who is waiting and who is currently in consult.',
      },
      {
        title: 'Consultations',
        description:
          'Support for the consultation workflow so clinical time is spent on the patient, not the system.',
      },
      {
        title: 'Medical-aid claims',
        description:
          'Claims tracked through submission, approval, pending and rejection instead of being chased on paper.',
      },
      {
        title: 'Billing',
        description:
          'Billing tied to the consultation that produced it, so what was done and what was charged stay connected.',
      },
      {
        title: 'Practice operations',
        description:
          'An operational view of the practice day: waiting, in consult, completed and average wait times.',
      },
    ],
    image: '/images/touchmed24-dashboard.png',
    imageAlt:
      'TouchMed24 practice dashboard in development, showing the appointment schedule, patient queue, medical-aid claims breakdown and live practice operations',
    signals: ['Patients', 'Appointments', 'Consultations', 'Billing', 'Claims'],
    accent: 'teal',
  },
  {
    slug: 'ledger-and-saldo',
    name: 'Ledger & Saldo',
    category: 'Financial Software',
    domain: 'Accounting and financial management',
    tagline: 'Find your balance.',
    relationship: 'A software product being developed by Monexa',
    status: 'In Development',
    statusDetail:
      'Ledger & Saldo is currently in development at Monexa. It is not yet commercially available.',
    short:
      'An accounting and financial management platform being developed to give a business a clear, current picture of its finances.',
    summary:
      'Ledger & Saldo is a financial software and accounting platform being developed by Monexa. It is designed to keep accounts, transactions, invoices and cash flow in one place, so that a business can see its real financial position without first assembling it from spreadsheets.',
    intent:
      'Ledger & Saldo is intended to answer the questions a business actually asks about money: what came in, what went out, what is owed, what is owing, and how long the current position lasts.',
    problem: [
      'Financial records are frequently spread across spreadsheets, bank statements and invoicing tools that have to be reconciled manually before anyone can trust the numbers.',
      'Cash flow is often understood in hindsight, which is too late for the decisions that depend on it.',
      'Receivables, payables and expenses are tracked separately, so the overall position is never visible in one place.',
    ],
    audience: [
      'Small and growing businesses',
      'Finance and accounting teams',
      'Owners who need a current view of financial health, not a quarterly one',
    ],
    capabilities: [
      {
        title: 'Accounts',
        description:
          'A structured chart of accounts as the dependable base for everything else.',
      },
      {
        title: 'Transactions',
        description:
          'Income and expenses recorded, categorised and reconcilable rather than retyped.',
      },
      {
        title: 'Invoices',
        description:
          'Invoicing connected to the accounts and transactions it affects.',
      },
      {
        title: 'Receivables and payables',
        description:
          'What is owed to the business and what the business owes, kept visible side by side.',
      },
      {
        title: 'Cash flow',
        description:
          'Inflows and outflows over time, designed to make the trend readable at a glance.',
      },
      {
        title: 'Reporting',
        description:
          'Reporting that turns records into a position a business can act on.',
      },
      {
        title: 'Financial visibility',
        description:
          'Working indicators such as runway, burn rate and forecast balance, drawn from the records already captured.',
      },
    ],
    image: '/images/ledger-saldo-dashboard.png',
    imageAlt:
      'Ledger & Saldo dashboard in development, showing account balances, a six-month cash flow chart, recent transactions, expense breakdown and financial visibility indicators',
    signals: ['Accounts', 'Transactions', 'Invoices', 'Cash flow', 'Reports'],
    accent: 'blue',
  },
  {
    slug: 'the-eye',
    name: 'The Eye',
    category: 'Network & Infrastructure Monitoring',
    domain: 'Network topology, telemetry and alarms',
    relationship: 'A software product being developed by Monexa',
    status: 'In Development',
    statusDetail:
      'The Eye is currently in development at Monexa. It is not deployed in production.',
    short:
      'A network and infrastructure monitoring platform being developed to show how an environment is connected and how it is behaving.',
    summary:
      'The Eye is a network and infrastructure monitoring platform being developed by Monexa. It is designed to bring topology, device health, performance telemetry and alarms into one operational view, so that a team can see a problem forming instead of hearing about it after an outage.',
    intent:
      'The Eye is intended to answer the operational questions first: what is connected to what, what is degraded right now, what changed, and what needs attention before users notice.',
    problem: [
      'Visibility is usually scattered across device interfaces, ad-hoc scripts and separate tools, so nobody has the whole picture at once.',
      'Without a live topology, the relationship between a failing link and the services it affects has to be reconstructed from memory under pressure.',
      'Alerting that is noisy or missing means real problems are found late — often by the people using the network.',
    ],
    audience: [
      'Technical operations and network teams',
      'Organisations running their own network and infrastructure',
      'Teams that need to see degradation before it becomes downtime',
    ],
    capabilities: [
      {
        title: 'Network topology',
        description:
          'A live map of nodes and links, so the shape of the environment is visible rather than assumed.',
      },
      {
        title: 'Device monitoring',
        description:
          'Health and status per device, from core switches through to edge and branch equipment.',
      },
      {
        title: 'Performance telemetry',
        description:
          'Throughput, latency and utilisation tracked over time instead of sampled by hand.',
      },
      {
        title: 'Alarms',
        description:
          'Critical, warning and informational alarms with the context needed to act, and acknowledgement so nothing is handled twice.',
      },
      {
        title: 'Resource utilisation',
        description:
          'CPU, memory and uptime surfaced per device to show pressure building before it fails.',
      },
      {
        title: 'Status overview',
        description:
          'A consolidated status grid across the estate for a fast read of what is healthy and what is not.',
      },
    ],
    image: '/images/the-eye-dashboard.png',
    imageAlt:
      'The Eye monitoring dashboard in development, showing a network topology map, CPU, memory and uptime metrics, active alarms, network performance over time and a topology status grid',
    signals: ['Topology', 'Devices', 'Telemetry', 'Alarms', 'Uptime'],
    accent: 'mixed',
  },
]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
