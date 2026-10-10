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
    title: 'Castcut',
    tagline: 'Local character films with ComfyUI',
    description:
      'Cast → Look → Outfit → Day → Cut film. Castcut 2.4: talking clips, Cast voices, Places, and a score for every cut. The classic tools now ship as Prompt Studio.',
    href: SITE_LINKS.castcut,
    linkLabel: 'Read the docs',
  },
  {
    title: 'ProbeHarbor',
    tagline: 'Freeze and flood alerts for instrumented spaces',
    description:
      'Formerly ThermalTrace. Open monitoring for garages and workshops: ESP ingest, freeze/heat/flood alerts, pipe-freeze forecast, Android and iOS apps, and Matter, HA, and Node-RED hooks.',
    href: SITE_LINKS.probeHarborPage,
    linkLabel: 'About ProbeHarbor',
  },
  {
    title: 'Shelf',
    tagline: 'A self-hosted personal library',
    description:
      'Books, e-books, and audiobooks for a household on .NET 10: reader with highlights and OCR, audiobook player, lending between readers, KOReader sync, one Docker container.',
    href: SITE_LINKS.shelf,
    linkLabel: 'About Shelf',
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
        description="Castcut docs live on this site. ProbeHarbor runs at probeharbor.dev. Shelf runs on your own server."
        projects={SHIPPED}
      />

      <section className="space-y-3 border-t pt-10 md:pt-14" style={{ borderColor: 'var(--line)' }}>
        <p className="eyebrow">Also shipping</p>
        <p className="max-w-2xl text-base leading-relaxed text-[var(--muted)]">
          Installable CMS packages too:{' '}
          <a href={SITE_LINKS.concreteCms} className="text-link underline">
            Concrete CMS
          </a>{' '}
          add-ons (marketplace and GitHub) and{' '}
          <a href={SITE_LINKS.wordpress} className="text-link underline">
            WordPress
          </a>{' '}
          plugins — Inkbound, Volunteer Impact Tracker, Oral History Archive, Public Shop Floor, and related work.
        </p>
      </section>

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
