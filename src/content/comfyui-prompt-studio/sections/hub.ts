import { APP_VERSION, DOCS_BASE_PATH, DOCS_SITE, GH, LIVE, RELEASES, p, page } from '../helpers'
import { SITE_LINKS } from '@/lib/site'

export const hubPages = [
  page(
    [],
    'Castcut',
    'Local character films with ComfyUI — Cast → Look → Outfit → Day → Cut film.',
    'Hub',
    0,
    [
      ...p(
        'Castcut (canonical repo: github.com/doodersrage/castcut; formerly Prompt Studio / llm-prompt-studio / comfyui-prompt-studio) is a self-hosted Next.js app for consistent characters, scenes, images, and short films locally with ComfyUI. Model support (FLUX, Qwen, WAN, Hunyuan, LTX, and more) is the engine underneath; the product is the film loop.',
        `Flagship loop: Cast → Look → Outfit → Day → (optional Story) → Gallery → Cut film → Save to Cast. Play is Make (default workspace); Studio is Control; Full is Build. Specialty tools sit under Extras. Heal & ready inspects ComfyUI on first launch. Mobile Studio (\`/m\`) is the phone-first Film / review / Story companion. Current release: v${APP_VERSION}. Optional Diffusers stills and cloud engines stay available; the near-term focus is reliability and character consistency, not expanding that matrix.`,
      ),
      {
        type: 'callout',
        variant: 'info',
        title: 'Get it running',
        text: `Local dev: ${LIVE} (Node.js 22+). Heal & ready on Settings → Overview. Desktop: GitHub Releases (.dmg / .exe / .deb preferred on Linux). Docker: ghcr.io/doodersrage/castcut:latest. Full searchable docs at ${DOCS_SITE}.`,
      },
      {
        type: 'links',
        items: [
          { label: 'GitHub repository', href: GH, external: true },
          { label: 'GitHub Releases (desktop)', href: RELEASES, external: true },
          { label: 'Official docs site', href: DOCS_SITE, external: true },
          { label: 'Open dashboard (local)', href: `${LIVE}/dashboard`, external: true },
        ],
      },
      { type: 'h2', text: 'What this guide covers' },
      {
        type: 'ul',
        items: [
          'Sales pitch and case study for production ComfyUI and cloud hybrid workflows',
          'Tool routes from Generate through Cast, Film, Story, Mobile Studio, Gallery, and Integration',
          '40+ model families — FLUX (incl. Klein), Qwen, Z-Image, Boogu, SDXL, WAN / LTX video, Stable Audio, Hunyuan3D',
          'Play campaign loop, Heal & ready, cloud engines, desktop/Docker install, and interactive demos',
        ],
      },
      { type: 'h2', text: 'Documentation on this site vs GitHub' },
      ...p(
        'This section on robmcd.name is the narrative hub — sales pitch, case study, interactive demos, and guided tool docs. Operator reference (env tables, API catalog, Play guide, release process) lives on the official GitHub Pages docs site linked below. Bookmark both: this hub for onboarding and storytelling, GitHub Pages for day-to-day ops lookup.',
        'More of my open work sits alongside this product: ThermalTrace (garage freeze and flood monitoring, Home Assistant integration, companion apps at thermaltrace.dev) and case studies under /work.',
      ),
      {
        type: 'links',
        items: [
          { label: 'Why Castcut? (sales pitch)', href: `${DOCS_BASE_PATH}/stories/sales-pitch` },
          { label: 'Quick start (Node 22+)', href: `${DOCS_BASE_PATH}/getting-started/quick-start` },
          { label: 'Tools table & routes', href: `${DOCS_BASE_PATH}/introduction/feature-map` },
          { label: 'Play mode & Story', href: `${DOCS_BASE_PATH}/play/story` },
          { label: 'ThermalTrace live app', href: SITE_LINKS.thermalTrace, external: true },
          { label: 'ThermalTrace demo', href: SITE_LINKS.thermalTraceDemo, external: true },
          { label: 'ThermalTrace GitHub', href: SITE_LINKS.thermalTraceGithub, external: true },
          { label: 'Work & case studies', href: '/work' },
        ],
      },
    ],
    { interactive: 'tool-routes', related: ['stories/sales-pitch', 'introduction/what-is-it', 'getting-started/quick-start'] },
  ),
]
