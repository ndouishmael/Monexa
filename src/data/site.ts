export const site = {
  name: 'Monexa',
  tagline: 'Where Software Meets Substance.',
  mission: 'To solve real-world problems with meaningful software.',
  vision:
    'To build a software engineering company that creates meaningful technology for businesses and people in South Africa and beyond.',
  email: 'info@monexa.co.za',
  location: 'South Africa',
  logo: '/images/monexa-logo.jpg',
} as const

export const nav = [
  { label: 'What We Do', to: '/what-we-do' },
  { label: 'Products', to: '/products' },
  { label: 'About', to: '/about' },
  { label: 'How We Work', to: '/how-we-work' },
  { label: 'Contact', to: '/contact' },
] as const
