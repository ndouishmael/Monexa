# Monexa — Corporate Website

**Where Software Meets Substance.**

A multi-page corporate website for Monexa, a South African software engineering company that
engineers custom software and builds its own software products.

> **Mission** — To solve real-world problems with meaningful software.
>
> **Vision** — To build a software engineering company that creates meaningful technology
> for businesses and people in South Africa and beyond.

## Technology

- React + TypeScript
- Vite
- Tailwind CSS
- React Router

The site has no remote image or font dependencies. Brand and product artwork is served from the
repository.

## Local development

```bash
npm install
npm run dev
npm run build
npm run preview
```

The production build is generated in `dist/`.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/what-we-do` | What We Do |
| `/products` | Product portfolio |
| `/products/touchmed24` | TouchMed24 |
| `/products/ledger-and-saldo` | Ledger & Saldo |
| `/products/the-eye` | The Eye |
| `/about` | About |
| `/how-we-work` | How We Work |
| `/contact` | Contact |

## Product status

TouchMed24, Ledger & Saldo and The Eye are presented as Monexa products **in development**. The
site does not claim that they are publicly launched, commercially deployed or available at public
product URLs.

## Repository assets

The application uses the approved files currently in `public/images/`:

- `monexa-logo.jpg` — official Monexa logo used in the header, footer, favicon and social metadata
- `Monexa Logo.jpg` — byte-identical duplicate of the official logo retained as supplied
- `touchmed24-dashboard.png` — TouchMed24 portfolio and product-page artwork
- `ledger-saldo-dashboard.png` — Ledger & Saldo portfolio and product-page artwork
- `the-eye-dashboard.png` — The Eye portfolio and product-page artwork

Product artwork is rendered at its native 16:9 aspect ratio with `object-fit: contain`; it is not
cropped, recoloured or modified.

## Contact interface

No form backend is configured. The contact interface prepares a pre-filled email in the visitor's
own email application and states this clearly in the UI; it does not claim server-side delivery.

## Netlify

`netlify.toml` runs `npm run build`, publishes `dist`, and redirects application routes to
`index.html` so direct SPA route visits work on Netlify.
