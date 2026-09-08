export const SITE_NAME = 'Robmcd.name'
export const SITE_OWNER = 'Robert McDowell'
export const SITE_URL = 'https://robmcd.name'
export const SITE_TAGLINE = 'Cross-platform engineering, legacy modernization, infrastructure'
export const SITE_DESCRIPTION =
  'Robert McDowell. About twenty years of full-stack work on Linux and Windows: legacy repair, servers, databases, and tools you can open today.'

export const SITE_LINKS = {
  github: 'https://github.com/doodersrage',
  about: '/about',
  contact: '/contact',
  hire: '/hire',
  homelab: '/homelab',
  /** @deprecated Use homelab */
  services: '/homelab',
  work: '/work',
  notes: '/notes',
  now: '/now',
  status: '/status',
  tools: '/tools',
  toolsRedactor: '/tools/redactor',
  toolsDns: '/tools/dns',
  toolsTriage: '/tools/triage',
  colophon: '/colophon',
  press: '/press',
  thermalTraceProtocol: '/work/thermaltrace/protocol',
  privacy: '/privacy',
  promptStudio: '/llm-prompt-studio',
  promptStudioGithub: 'https://github.com/doodersrage/llm-prompt-studio',
  promptStudioDocs: 'https://doodersrage.github.io/llm-prompt-studio',
  promptStudioDocker: 'ghcr.io/doodersrage/llm-prompt-studio:latest',
  thermalTrace: 'https://thermaltrace.dev/',
  thermalTracePage: '/work/thermaltrace',
  thermalTraceDemo: 'https://thermaltrace.dev/demo',
  thermalTraceAbout: 'https://thermaltrace.dev/about',
  thermalTraceGuides: 'https://thermaltrace.dev/guides',
  thermalTraceApps: 'https://thermaltrace.dev/apps',
  thermalTraceAccessories: 'https://thermaltrace.dev/accessories',
  thermalTracePricing: 'https://thermaltrace.dev/pricing',
  thermalTraceGithub: 'https://github.com/doodersrage/thermaltrace',
  thermalTraceDocs: 'https://doodersrage.github.io/thermaltrace/',
  thermalTraceHomeAssistant: 'https://github.com/doodersrage/thermaltrace-home-assistant',
  thermalTraceDesktop: 'https://github.com/doodersrage/thermaltrace-desktop',
  thermalTraceAndroid: 'https://github.com/doodersrage/thermaltrace-android',
  /** @deprecated Use thermalTrace */
  garageTemp: 'https://thermaltrace.dev/',
} as const

export type SiteNavItem = {
  id: string
  label: string
  href: string
  external?: boolean
  children?: SiteNavItem[]
}

/** Full static primary nav (no CMS). Notes/status/colophon live in the footer. */
export const PRIMARY_NAV: SiteNavItem[] = [
  { id: 'about', label: 'About', href: SITE_LINKS.about },
  {
    id: 'work',
    label: 'Work',
    href: SITE_LINKS.work,
    children: [
      { id: 'work-overview', label: 'Case studies', href: SITE_LINKS.work },
      { id: 'work-prompt-studio', label: 'LLM Prompt Studio', href: SITE_LINKS.promptStudio },
      { id: 'work-thermaltrace', label: 'ThermalTrace', href: SITE_LINKS.thermalTracePage },
      { id: 'work-protocol', label: 'Ingest protocol', href: SITE_LINKS.thermalTraceProtocol },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    href: SITE_LINKS.tools,
    children: [
      { id: 'tools-overview', label: 'Shop tools', href: SITE_LINKS.tools },
      { id: 'tools-redactor', label: 'Log / JSON redactor', href: SITE_LINKS.toolsRedactor },
      { id: 'tools-dns', label: 'DNS / HTTPS check', href: SITE_LINKS.toolsDns },
      { id: 'tools-triage', label: 'Legacy triage', href: SITE_LINKS.toolsTriage },
    ],
  },
  { id: 'hire', label: 'Hire', href: SITE_LINKS.hire },
]
