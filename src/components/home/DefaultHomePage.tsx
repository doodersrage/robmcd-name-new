import React from 'react'
import { BentoGrid } from '@/components/ui/BentoGrid'
import { Hero } from '@/components/ui/Hero'
import { ProjectShowcase } from '@/components/ui/ProjectShowcase'
import { SITE_LINKS } from '@/lib/site'

const CAPABILITIES = [
  {
    title: 'Legacy repair & modernization',
    description:
      'Fix fragile C#/.NET or PHP apps that are still in production. Migrate to a newer front end when it actually helps.',
  },
  {
    title: 'Servers & databases',
    description:
      'Linux and Windows upkeep, upgrades, cloud moves, and MySQL/MSSQL work so things stay up and stay fast enough.',
  },
  {
    title: 'SEO & AEO',
    description:
      'Technical SEO and answer-engine-friendly structure. Google Analytics certified; I’ve worked with SEO companies on real CMS and custom sites.',
  },
  {
    title: 'Technical advisory',
    description:
      'Second opinions on debt, patching, and query performance. Less theater, more “what fails first.”',
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
      'Open monitoring for garages and workshops. ESP32/Pico ingest, time-to-freeze, household alerts, companion apps.',
    href: SITE_LINKS.thermalTracePage,
    linkLabel: 'About ThermalTrace',
  },
]

export function DefaultHomePage() {
  return (
    <>
      <Hero
        title="Linux, Windows, and the stacks that refuse to die."
        description="About twenty years of full-stack work: repair what’s live, run the servers, and ship tools you can actually open."
        primaryCta={{ label: 'See the work', href: SITE_LINKS.work }}
        secondaryCta={{ label: 'Hire', href: SITE_LINKS.hire }}
      />

      <BentoGrid
        eyebrow="Practice"
        title="What I do"
        description="Servers, databases, old CMS estates, SEO/AEO on the technical side, and the occasional sensor dashboard."
        items={CAPABILITIES}
      />

      <ProjectShowcase
        eyebrow="Shipped"
        title="Open source"
        description="Prompt Studio docs live on this site. ThermalTrace runs at thermaltrace.dev."
        projects={SHIPPED}
      />

      <section className="space-y-6 border-t pt-10 md:pt-14" style={{ borderColor: 'var(--line)' }}>
        <p className="eyebrow">Next</p>
        <p className="max-w-2xl text-base leading-relaxed text-[var(--muted)]">
          If you have a stack that needs attention, start with{' '}
          <a href={SITE_LINKS.hire} className="text-link underline">
            Hire
          </a>{' '}
          or the{' '}
          <a href={SITE_LINKS.toolsTriage} className="text-link underline">
            legacy triage
          </a>{' '}
          brief. Shop tools and field notes live on this domain too.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a href={SITE_LINKS.hire} className="btn btn-primary">
            Hire
          </a>
          <a href={SITE_LINKS.tools} className="btn btn-secondary">
            Tools
          </a>
          <a href={SITE_LINKS.notes} className="btn btn-secondary">
            Notes
          </a>
        </div>
      </section>
    </>
  )
}
