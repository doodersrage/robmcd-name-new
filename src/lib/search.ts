import { DOC_PAGES, slugToPath } from '@/content/comfyui-prompt-studio/pages'
import { WORK_CASE_STUDIES, WORK_REPO_HIGHLIGHTS } from '@/content/work/case-studies'
import { NOTES } from '@/content/notes'
import { LAB_ENDPOINTS } from '@/content/lab/endpoints'
import { SITE_LINKS } from '@/lib/site'

export type SearchHit = {
  id: string
  title: string
  description: string
  href: string
  source: string
}

const SITE_PAGES: SearchHit[] = [
  {
    id: 'page-home',
    title: 'Home',
    description: 'Cross-platform engineering, legacy modernization, infrastructure.',
    href: '/',
    source: 'Site',
  },
  {
    id: 'page-about',
    title: 'About',
    description: 'Bio and practice — legacy repair, servers, databases, SEO/AEO.',
    href: SITE_LINKS.about,
    source: 'Site',
  },
  {
    id: 'page-hire',
    title: 'Hire',
    description: 'Engagement shapes, what I take, what I don’t, how a first call works.',
    href: SITE_LINKS.hire,
    source: 'Site',
  },
  {
    id: 'page-contact',
    title: 'Contact',
    description: 'Email and contact form.',
    href: SITE_LINKS.contact,
    source: 'Site',
  },
  {
    id: 'page-notes',
    title: 'Notes',
    description: 'Field journal — short engineering shop notes.',
    href: SITE_LINKS.notes,
    source: 'Site',
  },
  {
    id: 'page-now',
    title: 'Now',
    description: 'What I’m building this month.',
    href: SITE_LINKS.now,
    source: 'Site',
  },
  {
    id: 'page-status',
    title: 'Status',
    description: 'Homelab endpoint reachability board.',
    href: SITE_LINKS.status,
    source: 'Site',
  },
  {
    id: 'page-homelab',
    title: 'Homelab',
    description: 'Personal media endpoints on robmcd.name.',
    href: SITE_LINKS.homelab,
    source: 'Site',
  },
  {
    id: 'page-tools',
    title: 'Shop tools',
    description: 'Log redactor, DNS/HTTPS check, legacy triage.',
    href: SITE_LINKS.tools,
    source: 'Tools',
  },
  {
    id: 'page-redactor',
    title: 'Log / JSON redactor',
    description: 'Browser-only redaction for emails, JWTs, and secrets.',
    href: SITE_LINKS.toolsRedactor,
    source: 'Tools',
  },
  {
    id: 'page-dns',
    title: 'DNS / HTTPS check',
    description: 'DNS lookup and HTTPS reachability from the edge.',
    href: SITE_LINKS.toolsDns,
    source: 'Tools',
  },
  {
    id: 'page-triage',
    title: 'Legacy triage',
    description: 'Structured intake for stack rescue.',
    href: SITE_LINKS.toolsTriage,
    source: 'Tools',
  },
  {
    id: 'page-protocol',
    title: 'ThermalTrace ingest protocol',
    description: 'Open ingest sketch — first POST auto-import, normalized readings.',
    href: SITE_LINKS.thermalTraceProtocol,
    source: 'Work · Kit',
  },
  {
    id: 'page-colophon',
    title: 'Colophon',
    description: 'How this site is built.',
    href: SITE_LINKS.colophon,
    source: 'Site',
  },
  {
    id: 'page-press',
    title: 'Press kit',
    description: 'One-pager bio and product boilerplate.',
    href: SITE_LINKS.press,
    source: 'Site',
  },
  {
    id: 'page-privacy',
    title: 'Privacy',
    description: 'Contact form, Turnstile, logs, theme preference.',
    href: SITE_LINKS.privacy,
    source: 'Site',
  },
]

function matches(hay: string, q: string) {
  return hay.toLowerCase().includes(q)
}

export function searchLocalContent(term: string): SearchHit[] {
  const q = term.trim().toLowerCase()
  if (!q) return []

  const pageHits = SITE_PAGES.filter(
    (page) => matches(page.title, q) || matches(page.description, q) || matches(page.source, q),
  )

  const noteHits: SearchHit[] = NOTES.filter(
    (note) =>
      matches(note.title, q) ||
      matches(note.description, q) ||
      note.tags.some((t) => matches(t, q)),
  ).map((note) => ({
    id: `note-${note.slug}`,
    title: note.title,
    description: note.description,
    href: `/notes/${note.slug}`,
    source: 'Notes',
  }))

  const labHits: SearchHit[] = LAB_ENDPOINTS.filter(
    (ep) => matches(ep.name, q) || matches(ep.blurb, q) || matches(ep.href, q),
  ).map((ep) => ({
    id: `lab-${ep.id}`,
    title: ep.name,
    description: ep.blurb,
    href: SITE_LINKS.status,
    source: 'Homelab',
  }))

  const docHits: SearchHit[] = DOC_PAGES.filter(
    (page) =>
      matches(page.title, q) ||
      matches(page.description, q) ||
      matches(page.section, q) ||
      matches(page.slug.join('/'), q),
  ).map((page) => ({
    id: `doc-${slugToPath(page.slug)}`,
    title: page.title,
    description: page.description,
    href: slugToPath(page.slug),
    source: `Prompt Studio · ${page.section}`,
  }))

  const workHits: SearchHit[] = WORK_CASE_STUDIES.filter(
    (study) =>
      matches(study.title, q) ||
      matches(study.tagline, q) ||
      matches(study.description, q) ||
      study.stack.some((s) => matches(s, q)),
  ).map((study) => ({
    id: `work-${study.slug}`,
    title: study.title,
    description: study.description,
    href: `/work/${study.slug}`,
    source: 'Work · Case study',
  }))

  const repoHits: SearchHit[] = WORK_REPO_HIGHLIGHTS.filter(
    (repo) => matches(repo.name, q) || matches(repo.blurb, q) || (repo.note ? matches(repo.note, q) : false),
  ).map((repo) => ({
    id: `repo-${repo.name}`,
    title: repo.name,
    description: repo.blurb,
    href: repo.href,
    source: 'Work · GitHub',
  }))

  const extras: SearchHit[] = []
  if (/garage|temp|thermal|trace|freeze|flood|leak|iot|dht|probe|sensor|esp32|pico|alert|ingest/.test(q)) {
    extras.push({
      id: 'thermaltrace',
      title: 'ThermalTrace',
      description:
        'Open-source garage freeze and flood monitoring — ESP32/Pico ingest, time-to-freeze clock, Home Assistant HACS, Free/Member/Pro at thermaltrace.dev.',
      href: SITE_LINKS.thermalTracePage,
      source: 'Work · Product',
    })
  }

  const seen = new Set<string>()
  const merged = [...pageHits, ...noteHits, ...workHits, ...labHits, ...repoHits, ...docHits, ...extras].filter(
    (hit) => {
      if (seen.has(hit.id)) return false
      seen.add(hit.id)
      return true
    },
  )

  return merged.slice(0, 30)
}
