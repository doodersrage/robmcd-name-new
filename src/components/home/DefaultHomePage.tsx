import React from 'react'
import { BentoGrid } from '@/components/ui/BentoGrid'
import { Hero } from '@/components/ui/Hero'
import { ProjectShowcase } from '@/components/ui/ProjectShowcase'
import { SITE_LINKS } from '@/lib/site'

const CAPABILITIES = [
  {
    title: 'Legacy repair & stack modernization',
    description:
      'Audit, stabilize, and refactor fragile C#/.NET or PHP stacks — or migrate them to modern headless architectures when the business is ready.',
  },
  {
    title: 'Servers & databases',
    description:
      'Ongoing maintenance, OS upgrades, cloud moves, and MySQL/MSSQL administration so environments stay fast, secure, and available.',
  },
  {
    title: 'Technical advisory',
    description:
      'Debt, patching, and query performance across Linux and Windows — built for longevity, not hype cycles.',
  },
]

const SHIPPED = [
  {
    title: 'LLM Prompt Studio',
    tagline: 'ComfyUI + cloud stills and clips',
    description:
      'MIT-licensed Next.js studio: prompt tools, Play campaigns, workflow takeover, Mobile Studio, and desktop/Docker installs.',
    href: SITE_LINKS.promptStudio,
    linkLabel: 'Read the docs',
  },
  {
    title: 'ThermalTrace',
    tagline: 'Freeze and flood alerts for instrumented spaces',
    description:
      'Open-source monitoring for garages and workshops — ESP32/Pico ingest, time-to-freeze, household alerts, and companion apps.',
    href: SITE_LINKS.thermalTracePage,
    linkLabel: 'About ThermalTrace',
  },
]

export function DefaultHomePage() {
  return (
    <>
      <Hero
        title="Resilient infrastructure. Modern codebases."
        description="Twenty years of Linux and Windows engineering — repairing live stacks, running servers, and shipping tools you can open today."
        primaryCta={{ label: 'See the work', href: SITE_LINKS.work }}
        secondaryCta={{ label: 'Get in touch', href: SITE_LINKS.contact }}
      />

      <BentoGrid
        eyebrow="Practice"
        title="What I do"
        description="From servers and databases to modern web apps and sensor dashboards."
        items={CAPABILITIES}
      />

      <ProjectShowcase
        eyebrow="Shipped"
        title="Open source"
        description="Docs for Prompt Studio live here. ThermalTrace runs at thermaltrace.dev."
        projects={SHIPPED}
      />

      <section className="space-y-6 border-t pt-10 md:pt-14" style={{ borderColor: 'var(--line)' }}>
        <p className="eyebrow">Approach</p>
        <blockquote className="max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
          Stability and maintainability outweigh hype.
        </blockquote>
        <p className="max-w-2xl text-base leading-relaxed text-[var(--muted)]">
          Software isn&apos;t just new code — it&apos;s respecting systems already in production. Need a
          stack repaired, a server that stays up, or something like{' '}
          <a href={SITE_LINKS.thermalTracePage} className="text-link underline">
            ThermalTrace
          </a>
          ? Start a conversation.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a href={SITE_LINKS.contact} className="btn btn-primary">
            Start a conversation
          </a>
          <a href={SITE_LINKS.work} className="btn btn-secondary">
            View case studies
          </a>
        </div>
        <p className="font-mono text-sm text-[var(--muted)]">
          <a href="mailto:admin@robmcd.name" className="text-link">
            admin@robmcd.name
          </a>
        </p>
      </section>
    </>
  )
}
