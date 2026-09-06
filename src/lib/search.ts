import { DOC_PAGES, slugToPath } from '@/content/comfyui-prompt-studio/pages'
import { WORK_CASE_STUDIES } from '@/content/work/case-studies'
import { SITE_LINKS } from '@/lib/site'

export type SearchHit = {
  id: string
  title: string
  description: string
  href: string
  source: string
}

export function searchLocalContent(term: string): SearchHit[] {
  const q = term.trim().toLowerCase()
  if (!q) return []

  const docHits: SearchHit[] = DOC_PAGES.filter(
    (page) =>
      page.title.toLowerCase().includes(q) ||
      page.description.toLowerCase().includes(q) ||
      page.section.toLowerCase().includes(q) ||
      page.slug.join('/').toLowerCase().includes(q),
  ).map((page) => ({
    id: `doc-${slugToPath(page.slug)}`,
    title: page.title,
    description: page.description,
    href: slugToPath(page.slug),
    source: `Prompt Studio · ${page.section}`,
  }))

  const workHits: SearchHit[] = WORK_CASE_STUDIES.filter(
    (study) =>
      study.title.toLowerCase().includes(q) ||
      study.tagline.toLowerCase().includes(q) ||
      study.description.toLowerCase().includes(q) ||
      study.stack.some((s) => s.toLowerCase().includes(q)),
  ).map((study) => ({
    id: `work-${study.slug}`,
    title: study.title,
    description: study.description,
    href: `/work/${study.slug}`,
    source: 'Work · Case study',
  }))

  const extras: SearchHit[] = []
  if (
    /garage|temp|thermal|trace|freeze|flood|leak|iot|dht|probe|sensor|esp32|pico|alert/.test(q)
  ) {
    extras.push({
      id: 'thermaltrace',
      title: 'ThermalTrace',
      description:
        'Open-source garage freeze and flood monitoring — ESP32/Pico ingest, time-to-freeze clock, Home Assistant HACS, Free/Member/Pro at thermaltrace.dev.',
      href: SITE_LINKS.thermalTrace,
      source: 'External · Live demo',
    })
  }

  return [...workHits, ...docHits, ...extras].slice(0, 20)
}
