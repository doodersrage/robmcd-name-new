export const SITE_NAME = 'Robmcd.name'
export const SITE_OWNER = 'Robert McDowell'
export const SITE_URL = 'https://robmcd.name'
export const SITE_TAGLINE = 'Cross-Platform Engineering · Legacy Modernization · Infrastructure'
export const SITE_DESCRIPTION =
  'Robert McDowell — 20 years of full-stack engineering across Linux and Windows. Legacy repair, server administration, database optimization, and modern web architectures.'
export const SITE_KEYWORDS = [
  'robert mcdowell',
  'full-stack engineer',
  'legacy modernization',
  'linux server administration',
  'windows server',
  'mysql mssql',
  'astro',
  'next.js',
  'c# dotnet',
  'php wordpress',
  'database administration',
  'llm prompt studio',
  'prompt studio',
  'comfyui',
  'llm tooling',
  'thermaltrace',
  'garage freeze monitoring',
  'flood leak alerts',
  'temperature monitoring',
  'freeze alerts',
  'esp32',
  'home assistant',
  'iot',
  'embedded systems',
]

export const SITE_LINKS = {
  github: 'https://github.com/doodersrage',
  about: '/about',
  contact: '/contact',
  projects: '/projects',
  work: '/work',
  privacy: '/privacy',
  promptStudio: '/llm-prompt-studio',
  promptStudioGithub: 'https://github.com/doodersrage/llm-prompt-studio',
  promptStudioDocs: 'https://doodersrage.github.io/llm-prompt-studio',
  promptStudioDocker: 'ghcr.io/doodersrage/llm-prompt-studio:latest',
  thermalTrace: 'https://thermaltrace.dev/',
  thermalTraceDemo: 'https://thermaltrace.dev/demo',
  thermalTraceAbout: 'https://thermaltrace.dev/about',
  thermalTraceGuides: 'https://thermaltrace.dev/guides',
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

/** Full static primary nav (no CMS). */
export const PRIMARY_NAV: SiteNavItem[] = [
  {
    id: 'about',
    label: 'About',
    href: SITE_LINKS.about,
    children: [
      { id: 'about-overview', label: 'Overview', href: SITE_LINKS.about },
      { id: 'about-services', label: 'Services', href: '/about/services' },
    ],
  },
  {
    id: 'work',
    label: 'Work',
    href: SITE_LINKS.work,
    children: [
      { id: 'work-overview', label: 'Case studies', href: SITE_LINKS.work },
      { id: 'work-prompt-studio', label: 'LLM Prompt Studio', href: SITE_LINKS.promptStudio },
      {
        id: 'work-thermaltrace',
        label: 'ThermalTrace',
        href: SITE_LINKS.thermalTrace,
        external: true,
      },
    ],
  },
  { id: 'projects', label: 'Projects', href: SITE_LINKS.projects },
  { id: 'contact', label: 'Contact', href: SITE_LINKS.contact },
]
