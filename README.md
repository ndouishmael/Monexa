# Monexa — Corporate Website

**Where Software Meets Substance.**

The corporate website for Monexa, a South African software engineering company that
also builds and owns its own software products.

> **Mission** — To solve real-world problems with meaningful software.
>
> **Vision** — To build a software engineering company that creates meaningful technology
> for businesses and people in South Africa and beyond.

## Tech stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) build tooling
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React Router](https://reactrouter.com/) for multi-page routing

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build into dist/
npm run preview  # preview the production build locally
```

The project builds entirely from this repository — no external files, attachments or
hidden assets are required.

## Project structure

```
public/images/        Static assets, including the official Monexa logo
src/
  components/          Reusable UI components (Header, Footer, cards, icons)
  components/visuals/  Conceptual, code-based technical illustrations (SVG)
  data/               Site content, navigation and product data
  layouts/            Shared page layout (header + footer + main)
  pages/              Route-level pages
  styles/             Global styles + Tailwind layers
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/what-we-do` | What We Do |
| `/products` | Products overview |
| `/products/touchmed24` | TouchMed24 |
| `/products/ledger-and-saldo` | Ledger & Saldo |
| `/products/the-eye` | The Eye |
| `/about` | About |
| `/how-we-work` | How We Work |
| `/contact` | Contact |

## Products

The products below are **currently being developed by Monexa**. They are not yet publicly
launched or commercially deployed, and the website is written to describe them accurately —
by what they are and the problems they are designed to solve.

- **TouchMed24** — Healthcare technology / practice management. *A Product of Monexa.inc.*
- **Ledger & Saldo** — Financial software / accounting. *Find your balance.*
- **The Eye** — Network & infrastructure monitoring.

Product illustrations throughout the site are **conceptual** and clearly labelled as such —
they are not screenshots of live software.

## Assets

- The official Monexa logo lives at `public/images/monexa-logo.jpg` and is referenced as
  `/images/monexa-logo.jpg`. All other visuals are code-based (SVG / CSS) and committed to
  the repository, so there are no external asset dependencies.

## Contact form

The contact form UI is complete and ready to be wired to an email backend. Until a backend
is configured, submitting the form opens the visitor's own mail client with the message
pre-filled to `info@monexa.co.za` — the site never pretends a server is sending email.

## Deployment (Netlify)

The repository includes a `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

The SPA redirect ensures deep links (e.g. `/products/the-eye`) resolve correctly.
