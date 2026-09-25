import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CtaBand from '../components/CtaBand'
import { principles } from '../data/content'
import { site } from '../data/site'

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="Monexa is a South African software engineering company focused on meaningful custom software and software products."
        path="/about"
      />

      <PageHero
        eyebrow="About Monexa"
        title={<>A software engineering company built around substance.</>}
        intro={
          <>
            Monexa engineers custom software for businesses and builds its own software products.
            We are grounded in South Africa, focused on real-world problems, and ambitious about
            the technology we can build for people and businesses here and beyond.
          </>
        }
      />

      <section className="container-page section-space">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <div>
              <p className="rule-label">Who we are</p>
              <h2 className="mt-5 text-3xl font-semibold text-ink-950 sm:text-4xl">
                Engineering for the world as it actually works.
              </h2>
              <div className="mt-7 max-w-2xl space-y-5 text-base leading-8 text-ink-600">
                <p>
                  Custom Software Engineering is the primary thing Monexa does. We work from the
                  problem outward: understanding the business context, defining the system and
                  engineering software that has a reason to exist.
                </p>
                <p>
                  We also build and own software products. TouchMed24, Ledger & Saldo and The Eye
                  are being developed across healthcare, financial management and infrastructure
                  monitoring.
                </p>
                <p>
                  The same standard applies to both sides of the company: meaningful technology,
                  practical decisions and software built with discipline.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="technical-panel bg-grid-fine p-7 sm:p-8">
              <div className="flex items-center justify-between border-b border-ink-100 pb-4">
                <span className="system-label">Company model</span>
                <span className="h-2 w-2 rounded-full bg-brand-teal" />
              </div>
              <div className="mt-7 space-y-4">
                <div className="border border-ink-200 bg-white p-5">
                  <span className="system-label">Primary</span>
                  <h3 className="mt-3 text-xl font-semibold text-ink-950">Custom engineering</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-600">
                    Software designed and engineered around business requirements.
                  </p>
                </div>
                <div className="flex justify-center font-mono text-ink-300" aria-hidden="true">+</div>
                <div className="border border-ink-200 bg-white p-5">
                  <span className="system-label">Owned</span>
                  <h3 className="mt-3 text-xl font-semibold text-ink-950">Software products</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-600">
                    Monexa products being built around problems across industries.
                  </p>
                </div>
              </div>
              <p className="mt-6 border-t border-ink-100 pt-5 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-500">
                Based in {site.location} · Built with global ambition
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-950 text-white">
        <div className="container-page grid lg:grid-cols-2">
          <Reveal className="border-b border-white/10 py-14 lg:border-b-0 lg:border-r lg:py-20 lg:pr-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-teal">Mission</p>
            <p className="mt-5 text-2xl font-medium leading-snug text-white sm:text-3xl">
              {site.mission}
            </p>
          </Reveal>
          <Reveal delay={80} className="py-14 lg:py-20 lg:pl-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-teal">Vision</p>
            <p className="mt-5 text-2xl font-medium leading-snug text-white sm:text-3xl">
              {site.vision}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page section-space">
        <SectionHeading
          eyebrow="Engineering principles"
          title="Simple principles. Serious consequences."
          intro="These principles shape why we build, how we make decisions and what we expect the software to become."
        />
        <div className="mt-12 grid gap-px overflow-hidden border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 60} className="h-full">
              <article className="h-full bg-white p-7">
                <span className="font-mono text-[10px] font-semibold text-brand-blue">
                  PRINCIPLE / 0{index + 1}
                </span>
                <h3 className="mt-9 text-xl font-semibold text-ink-950">{principle.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-600">{principle.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
