import type { DocBlock, DocPage, DocSection } from './types'

export const GH = 'https://github.com/doodersrage/castcut'
export const LIVE = 'http://localhost:47832'
export const DOCS = `${GH}/tree/main/docs`
export const DOCS_SITE = 'https://doodersrage.github.io/castcut'
export const RELEASES = `${GH}/releases`
export const DOCKER_IMAGE = 'ghcr.io/doodersrage/castcut:latest'
/** Current Castcut release mentioned on this site’s hub copy. */
export const APP_VERSION = '2.0.0'
export const DOCS_BASE_PATH = '/castcut'
/** Legacy paths — middleware redirects both to DOCS_BASE_PATH */
export const LEGACY_DOCS_BASE_PATH = '/comfyui-prompt-studio'
export const LEGACY_DOCS_BASE_PATH_LLM = '/llm-prompt-studio'
export const CPS_GITHUB = GH
export const CPS_LIVE = LIVE

const SECTION_ORDER = [
  'Hub',
  'Sales & stories',
  'Introduction',
  'Getting started',
  'Generate',
  'Format & lint',
  'Character',
  'Play',
  'Image tools',
  'Media',
  'Studio',
  'Gallery',
  'Models',
  'Integration',
]

let docPagesRef: DocPage[] = []

function sectionIndex(section: string): number {
  const i = SECTION_ORDER.indexOf(section)
  return i === -1 ? 999 : i
}

export function setDocPages(pages: DocPage[]): void {
  docPagesRef = pages
}

export function p(...text: string[]): DocBlock[] {
  return text.map((t) => ({ type: 'p' as const, text: t }))
}

export function page(
  slug: string[],
  title: string,
  description: string,
  section: string,
  order: number,
  blocks: DocBlock[],
  extras?: Pick<DocPage, 'interactive' | 'related' | 'layout' | 'sectionIndex'>,
): DocPage {
  return { slug, title, description, section, order, blocks, ...extras }
}

export function slugToPath(slug: string[]): string {
  if (slug.length === 0) return DOCS_BASE_PATH
  return `${DOCS_BASE_PATH}/${slug.join('/')}`
}

export function slugKey(slug: string[]): string {
  return slug.join('/') || 'index'
}

export function getPageBySlug(slug: string[] | undefined): DocPage | undefined {
  const key = slugKey(slug ?? [])
  return docPagesRef.find((p) => slugKey(p.slug) === key)
}

/** Leaf + hub pages for sidebar and prev/next (excludes section indexes). */
export function getAllPages(): DocPage[] {
  return docPagesRef
    .filter((p) => !p.sectionIndex)
    .sort((a, b) => {
      const bySection = sectionIndex(a.section) - sectionIndex(b.section)
      if (bySection !== 0) return bySection
      return a.order - b.order
    })
}

/**
 * Build `/castcut/{section}` landing pages so breadcrumb parents are real URLs.
 * Titles come from the child pages’ section label.
 */
export function buildSectionIndexPages(pages: DocPage[]): DocPage[] {
  const byRoot = new Map<string, DocPage[]>()
  for (const doc of pages) {
    if (doc.slug.length < 1 || doc.sectionIndex) continue
    const root = doc.slug[0]!
    const list = byRoot.get(root) ?? []
    list.push(doc)
    byRoot.set(root, list)
  }

  return Array.from(byRoot.entries()).map(([root, children]) => {
    const sorted = [...children].sort((a, b) => a.order - b.order)
    const section = sorted[0]!.section
    return page(
      [root],
      section,
      `Castcut ${section} docs — pages in this section.`,
      section,
      Math.min(...sorted.map((c) => c.order)) - 1,
      [
        {
          type: 'p',
          text: `Guides in the ${section} section of the Castcut docs on robmcd.name.`,
        },
        {
          type: 'links',
          items: sorted.map((child) => ({
            label: child.title,
            href: slugToPath(child.slug),
          })),
        },
      ],
      { sectionIndex: true },
    )
  })
}

export function getSections(): DocSection[] {
  const map = new Map<string, DocPage[]>()
  for (const doc of getAllPages()) {
    const list = map.get(doc.section) ?? []
    list.push(doc)
    map.set(doc.section, list)
  }
  const entries = Array.from(map.entries()).map(([title, pages]) => ({
    id: title.toLowerCase().replace(/\s+/g, '-'),
    title,
    pages: pages.sort((a, b) => a.order - b.order),
  }))
  return entries.sort((a, b) => {
    const ai = SECTION_ORDER.indexOf(a.title)
    const bi = SECTION_ORDER.indexOf(b.title)
    if (ai === -1 && bi === -1) return a.title.localeCompare(b.title)
    if (ai === -1) return 1
    if (bi === -1) return -1
    return ai - bi
  })
}
