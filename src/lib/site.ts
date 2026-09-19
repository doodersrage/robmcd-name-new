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
  concreteCms: '/work/concrete-cms',
  concreteCmsProfile: 'https://community.concretecms.com/members/profile/103041',
  wordpress: '/work/wordpress',
  privacy: '/privacy',
  /** Canonical product path (formerly Prompt Studio / llm-prompt-studio). */
  castcut: '/castcut',
  castcutGithub: 'https://github.com/doodersrage/castcut',
  castcutDocs: 'https://doodersrage.github.io/castcut',
  castcutDocker: 'ghcr.io/doodersrage/castcut:latest',
  /** @deprecated Use castcut* */
  promptStudio: '/castcut',
  promptStudioGithub: 'https://github.com/doodersrage/castcut',
  promptStudioDocs: 'https://doodersrage.github.io/castcut',
  promptStudioDocker: 'ghcr.io/doodersrage/castcut:latest',
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
  thermalTraceBayBuddy: 'https://github.com/doodersrage/thermaltrace-bay-buddy',
  thermalTraceMatter: 'https://github.com/doodersrage/thermaltrace-matter',
  thermalTraceClaimPuck: 'https://github.com/doodersrage/thermaltrace-claim-puck',
  thermalTraceClaimPuckProduct: 'https://thermaltrace.dev/claim-puck',
  thermalTraceHomeAssistantGuide: 'https://thermaltrace.dev/integrations/home-assistant',
  thermalTraceMatterGuide: 'https://thermaltrace.dev/integrations/matter',
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
      { id: 'work-castcut', label: 'Castcut', href: SITE_LINKS.castcut },
      { id: 'work-thermaltrace', label: 'ThermalTrace', href: SITE_LINKS.thermalTracePage },
      { id: 'work-concrete', label: 'Concrete CMS', href: SITE_LINKS.concreteCms },
      { id: 'work-wordpress', label: 'WordPress', href: SITE_LINKS.wordpress },
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
