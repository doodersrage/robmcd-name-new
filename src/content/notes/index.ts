export type Note = {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
}

/** Field journal entries — short shop notes, not a marketing blog. */
export const NOTES: Note[] = [
  {
    slug: 'cloudflare-workers-smtp',
    title: 'Workers, SMTP, and why the form felt simple until it wasn’t',
    date: '2026-09-06',
    description:
      'Contact forms on Cloudflare Workers: Turnstile, nodemailer, and the env seams that bite in production.',
    tags: ['cloudflare', 'workers', 'smtp', 'turnstile'],
  },
  {
    slug: 'astro-tailwind-on-workers',
    title: 'Astro + Tailwind on Workers without breaking the layout',
    date: '2026-09-06',
    description:
      'How Sass on the global stylesheet skipped Tailwind utilities, and the one-line move that fixed the canvas.',
    tags: ['astro', 'tailwind', 'css'],
  },
  {
    slug: 'sensor-ingest-first-contact',
    title: 'Sensor ingest: first POST should be enough',
    date: '2026-09-07',
    description:
      'Design note from ThermalTrace: auto-import on first contact, pull feeds as a fallback, keep field installs boring.',
    tags: ['iot', 'thermaltrace', 'ingest'],
  },
]

export function getNote(slug: string): Note | undefined {
  return NOTES.find((n) => n.slug === slug)
}
