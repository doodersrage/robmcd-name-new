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
        title: 'Looking for the classic tools?',
        text: 'Generate, Prompt Editor, Variations, Format, Lint, the Workflow editor, plugins, and the other general prompt and image tools now ship as a separate app, Prompt Studio (github.com/doodersrage/prompt-studio). Both apps share one core package, prompt-studio-core on npm. Castcut keeps the film pages: Film, Cast, Look, Outfit, Day, Story, Character, Video, Refine, Inpaint, Compose, Gallery, and Queue.',
      },
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
          'Play film loop in Castcut 2.9: talking clips, Cast voices, Places, film scores, Preview the cut, re-cuts in any shape, narration, review links, export for an editor, pose editor, per-look outfits, Heal & ready, desktop/Docker install',
          'Optional Castcut nodes (Comfy Registry) for Best of two and cut-outs inside one job',
        ],
      },
      { type: 'h2', text: 'Documentation on this site vs GitHub' },
      ...p(
        'This section on robmcd.name is the narrative hub — sales pitch, case study, interactive demos, and guided tool docs. Operator reference (env tables, API catalog, Play guide, release process) lives on the official GitHub Pages docs site linked below. Bookmark both: this hub for onboarding and storytelling, GitHub Pages for day-to-day ops lookup.',
        'More of my open work sits alongside this product: ProbeHarbor (garage freeze, heat, and flood monitoring, pipe-freeze forecast, companion apps at probeharbor.dev) and case studies under /work.',
      ),
      {
        type: 'links',
        items: [
          { label: 'Why Castcut? (sales pitch)', href: `${DOCS_BASE_PATH}/stories/sales-pitch` },
          { label: 'Quick start (Node 22+)', href: `${DOCS_BASE_PATH}/getting-started/quick-start` },
          { label: 'Tools table & routes', href: `${DOCS_BASE_PATH}/introduction/feature-map` },
          { label: 'Day, poses, and looks', href: `${DOCS_BASE_PATH}/play/day` },
          { label: 'Castcut nodes', href: `${DOCS_BASE_PATH}/integration/castcut-nodes` },
          { label: 'ProbeHarbor live app', href: SITE_LINKS.probeHarbor, external: true },
          { label: 'ProbeHarbor demo', href: SITE_LINKS.probeHarborDemo, external: true },
          { label: 'ProbeHarbor GitHub', href: SITE_LINKS.probeHarborGithub, external: true },
          { label: 'Prompt Studio (classic tools)', href: SITE_LINKS.promptStudioApp },
          { label: 'Work & case studies', href: '/work' },
        ],
      },
    ],
    { interactive: 'tool-routes', related: ['stories/sales-pitch', 'introduction/what-is-it', 'getting-started/quick-start'] },
  ),
]
