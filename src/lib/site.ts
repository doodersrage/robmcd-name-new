export const SITE_NAME = 'Robmcd.name'
export const SITE_OWNER = 'Robert McDowell'
export const SITE_URL = 'https://robmcd.name'

/**
 * Absolute URL for an HTML page. Always ends with `/` so canonical/og:url match
 * the trailing-slash form Cloudflare serves (non-slash URLs 307).
 */
export function absolutePageUrl(pathOrUrl: string): string {
  const raw = pathOrUrl.trim() || '/'
  const url = new URL(raw.startsWith('http') ? raw : raw, `${SITE_URL}/`)
  if (/\.[a-z0-9]+$/i.test(url.pathname)) {
    return url.toString()
  }
  if (!url.pathname.endsWith('/')) {
    url.pathname = `${url.pathname}/`
  }
  return url.toString()
}
export const SITE_TAGLINE = 'Cross-platform engineering, legacy modernization, infrastructure'
export const SITE_DESCRIPTION =
  'Robert McDowell. About twenty years of full-stack work on Linux and Windows: legacy repair, servers, databases, and tools you can open today.'

export const SITE_LINKS = {
  github: 'https://github.com/doodersrage',
  about: '/about/',
  contact: '/contact/',
  hire: '/hire/',
  homelab: '/homelab/',
  /** @deprecated Use homelab */
  services: '/homelab/',
  work: '/work/',
  notes: '/notes/',
  now: '/now/',
  status: '/status/',
  tools: '/tools/',
  toolsRedactor: '/tools/redactor/',
  toolsDns: '/tools/dns/',
  toolsTriage: '/tools/triage/',
  colophon: '/colophon/',
  developers: '/developers/',
  press: '/press/',
  probeHarborProtocol: '/work/probeharbor/protocol/',
  probeHarborForecastPage: '/work/probeharbor/forecast/',
  probeHarborIntegrationsPage: '/work/probeharbor/integrations/',
  concreteCms: '/work/concrete-cms/',
  concreteCmsProfile: 'https://community.concretecms.com/members/profile/103041',
  wordpress: '/work/wordpress/',
  privacy: '/privacy/',
  /** Canonical product path (formerly Prompt Studio / llm-prompt-studio). */
  castcut: '/castcut/',
  castcutGithub: 'https://github.com/doodersrage/castcut',
  castcutDocs: 'https://doodersrage.github.io/castcut/',
  castcutDocker: 'ghcr.io/doodersrage/castcut:latest',
  castcutNodes: 'https://github.com/doodersrage/castcut-nodes',
  castcutLive: 'https://castcut.robmcd.name',
  /** Classic prompt and image tools split out of Castcut, on the shared prompt-studio-core package. */
  promptStudioApp: '/work/prompt-studio/',
  promptStudioAppGithub: 'https://github.com/doodersrage/prompt-studio',
  promptStudioCore: 'https://www.npmjs.com/package/prompt-studio-core',
  shelf: '/work/shelf/',
  shelfGithub: 'https://github.com/doodersrage/shelf',
  shelfDocs: 'https://doodersrage.github.io/shelf/',
  shelfLive: 'https://shelf.robmcd.name',
  shelfDocker: 'ghcr.io/doodersrage/shelf:latest',
  printBridge: '/work/printbridge/',
  printBridgeGithub: 'https://github.com/doodersrage/printbridge',
  /** @deprecated Use castcut* */
  promptStudio: '/castcut/',
  promptStudioGithub: 'https://github.com/doodersrage/castcut',
  promptStudioDocs: 'https://doodersrage.github.io/castcut/',
  promptStudioDocker: 'ghcr.io/doodersrage/castcut:latest',
  /** Formerly ThermalTrace (thermaltrace.dev). */
  probeHarbor: 'https://probeharbor.dev/',
  probeHarborPage: '/work/probeharbor/',
  probeHarborDemo: 'https://probeharbor.dev/demo',
  probeHarborAbout: 'https://probeharbor.dev/about',
  probeHarborGuides: 'https://probeharbor.dev/guides',
  probeHarborApps: 'https://probeharbor.dev/apps',
  probeHarborAccessories: 'https://probeharbor.dev/accessories',
  probeHarborFlash: 'https://probeharbor.dev/flash',
  probeHarborPricing: 'https://probeharbor.dev/pricing',
  probeHarborGithub: 'https://github.com/doodersrage/probeharbor',
  probeHarborDocs: 'https://probeharbor.dev/developers/',
  probeHarborForecast: 'https://probeharbor.dev/pipe-freeze-forecast',
  probeHarborFreezeMap: 'https://probeharbor.dev/freeze-map',
  probeHarborIntegrations: 'https://probeharbor.dev/integrations',
  probeHarborNodeRed: 'https://probeharbor.dev/integrations/node-red',
  probeHarborInflux: 'https://probeharbor.dev/integrations/influx',
  probeHarborAutomation: 'https://probeharbor.dev/integrations/automation',
  probeHarborSmartThings: 'https://probeharbor.dev/integrations/smartthings',
  probeHarborHomeAssistant: 'https://github.com/doodersrage/probeharbor-home-assistant',
  probeHarborIos: 'https://github.com/doodersrage/probeharbor-ios',
  probeHarborDesktop: 'https://github.com/doodersrage/probeharbor-desktop',
  probeHarborAndroid: 'https://github.com/doodersrage/probeharbor-android',
  probeHarborBayBuddy: 'https://github.com/doodersrage/probeharbor-bay-buddy',
  probeHarborMatter: 'https://github.com/doodersrage/probeharbor-matter',
  probeHarborClaimPuck: 'https://github.com/doodersrage/probeharbor-claim-puck',
  probeHarborClaimPuckProduct: 'https://probeharbor.dev/claim-puck',
  probeHarborHomeAssistantGuide: 'https://probeharbor.dev/integrations/home-assistant',
  probeHarborMatterGuide: 'https://probeharbor.dev/integrations/matter',
  /** @deprecated Use probeHarbor */
  garageTemp: 'https://probeharbor.dev/',
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
      { id: 'work-probeharbor', label: 'ProbeHarbor', href: SITE_LINKS.probeHarborPage },
      { id: 'work-shelf', label: 'Shelf', href: SITE_LINKS.shelf },
      { id: 'work-printbridge', label: 'PrintBridge', href: SITE_LINKS.printBridge },
      { id: 'work-prompt-studio', label: 'Prompt Studio', href: SITE_LINKS.promptStudioApp },
      { id: 'work-concrete', label: 'Concrete CMS', href: SITE_LINKS.concreteCms },
      { id: 'work-wordpress', label: 'WordPress', href: SITE_LINKS.wordpress },
      { id: 'work-protocol', label: 'Ingest protocol', href: SITE_LINKS.probeHarborProtocol },
      { id: 'work-forecast', label: 'Pipe freeze forecast', href: SITE_LINKS.probeHarborForecastPage },
      { id: 'work-integrations', label: 'ProbeHarbor integrations', href: SITE_LINKS.probeHarborIntegrationsPage },
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
