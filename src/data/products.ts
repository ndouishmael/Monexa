export type Product = {
  slug: 'touchmed24' | 'ledger-and-saldo' | 'the-eye'
  name: string
  category: string
  sector: string
  tagline?: string
  relationship: string
  status: 'In development'
  short: string
  summary: string
  problem: string[]
  audience: string[]
  capabilities: { title: string; description: string }[]
  image: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
}

export const products: Product[] = [
  {
    slug: 'touchmed24',
    name: 'TouchMed24',
    category: 'Healthcare technology / medical practice management',
    sector: 'Healthcare systems',
    relationship: 'TouchMed24 — A Product of Monexa.inc',
    status: 'In development',
    short:
      'Medical practice management software designed to bring clinical and administrative workflows into one coherent system.',
    summary:
      'TouchMed24 is healthcare technology and medical practice management software being developed by Monexa. It is designed to bring the moving parts of a practice — patients, consultations, medical-aid workflows and administration — into one coherent system.',
    problem: [
      'Medical practices often coordinate patient records, scheduling, medical-aid workflows and billing across disconnected tools and manual processes.',
      'Eligibility checks, claims and administration can become time-consuming and error-prone when handled in isolation.',
      'Practice teams need a dependable operational view instead of fragmented systems that do not work together.',
    ],
    audience: [
      'Medical and healthcare practices',
      'Practice managers and administrative teams',
      'Clinicians who need supportive, practical workflows',
    ],
    capabilities: [
      {
        title: 'Patient management',
        description: 'A structured foundation for patient information and records across the practice.',
      },
      {
        title: 'Practice operations',
        description: 'Tools designed to coordinate the day-to-day running of a medical practice.',
      },
      {
        title: 'Consultation workflows',
        description: 'Support for consultation workflows that keeps clinical work and administration connected.',
      },
      {
        title: 'Medical-aid workflows',
        description: 'Designed to make medical-aid and eligibility processes less manual.',
      },
      {
        title: 'Billing and claims',
        description: 'A consistent workflow for billing and claims administration.',
      },
      {
        title: 'Practice administration',
        description: 'Administrative tooling intended to connect the operational parts of a practice.',
      },
    ],
    image: '/images/touchmed24-dashboard.png',
    imageAlt: 'TouchMed24 medical practice management dashboard interface',
    imageWidth: 1792,
    imageHeight: 1008,
  },
  {
    slug: 'ledger-and-saldo',
    name: 'Ledger & Saldo',
    category: 'Accounting and financial management software',
    sector: 'Financial systems',
    tagline: 'Find your balance.',
    relationship: 'A Monexa software product',
    status: 'In development',
    short:
      'Financial software designed to give businesses a clear, dependable view of accounts, cash flow and financial activity.',
    summary:
      'Ledger & Saldo is accounting and financial management software being developed by Monexa. It is designed to help businesses keep structured financial records, understand cash flow and manage the relationships behind every number.',
    problem: [
      'Businesses can end up managing accounting, invoicing and financial records across spreadsheets and tools that do not reconcile cleanly.',
      'Understanding cash flow and financial position can be slow, manual and unclear.',
      'Financial data, customers, suppliers and accounts need a coherent system to become genuinely useful.',
    ],
    audience: [
      'Small and growing businesses',
      'Finance and accounting teams',
      'Business owners who need a clear view of financial health',
    ],
    capabilities: [
      {
        title: 'Accounting',
        description: 'A structured accounting core designed around accuracy and clarity.',
      },
      {
        title: 'Financial management',
        description: 'Tools intended to help businesses understand and manage their finances.',
      },
      {
        title: 'Customers and suppliers',
        description: 'Keep the relationships behind the numbers organised in one place.',
      },
      {
        title: 'Accounts',
        description: 'A dependable structure for accounts and financial records.',
      },
      {
        title: 'Reporting',
        description: 'Reporting designed to turn financial records into understandable insight.',
      },
      {
        title: 'Cash flow',
        description: 'Designed to make cash movement visible and easier to plan around.',
      },
    ],
    image: '/images/ledger-saldo-dashboard.png',
    imageAlt: 'Ledger and Saldo accounting and financial management dashboard interface',
    imageWidth: 1792,
    imageHeight: 1008,
  },
  {
    slug: 'the-eye',
    name: 'The Eye',
    category: 'Network and infrastructure monitoring software',
    sector: 'Infrastructure systems',
    relationship: 'A Monexa software product',
    status: 'In development',
    short:
      'Monitoring software designed to give technical teams a coherent view of network topology, performance and infrastructure health.',
    summary:
      'The Eye is network and infrastructure monitoring software being developed by Monexa. It is designed to give technical teams clear visibility into topology, devices, performance, links and alarms across their environments.',
    problem: [
      'Network and infrastructure environments are complex, while visibility is often scattered across different tools.',
      'Technical teams need to understand topology, performance and the health of links and devices in one place.',
      'Without clear monitoring and alarms, problems can be discovered late rather than understood early.',
    ],
    audience: [
      'Technical and operations teams',
      'Organisations managing network and infrastructure environments',
      'Teams that need dependable operational visibility',
    ],
    capabilities: [
      {
        title: 'Infrastructure monitoring',
        description: 'A foundation for monitoring the infrastructure an organisation depends on.',
      },
      {
        title: 'Network visibility',
        description: 'Designed to bring network state into a clear, unified view.',
      },
      {
        title: 'Topology',
        description: 'A visual model of how devices and network components are connected.',
      },
      {
        title: 'Alarms',
        description: 'Operational alarms designed to surface relevant problems clearly.',
      },
      {
        title: 'Performance and links',
        description: 'Insight into performance and the health of links across the network.',
      },
      {
        title: 'Devices and reporting',
        description: 'Device visibility with reporting intended to support operational decisions.',
      },
    ],
    image: '/images/the-eye-dashboard.png',
    imageAlt: 'The Eye network and infrastructure monitoring dashboard interface',
    imageWidth: 1792,
    imageHeight: 1008,
  },
]

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}
