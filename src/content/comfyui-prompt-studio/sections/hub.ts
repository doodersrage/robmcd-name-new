import { APP_VERSION, DOCS_BASE_PATH, DOCS_SITE, GH, LIVE, RELEASES, p, page } from '../helpers'
import { SITE_LINKS } from '@/lib/site'
import { VERSIONS } from '@/lib/versions'

export const hubPages = [
  page(
    [],
    'Castcut',
    'Local character films with ComfyUI — Cast → Outfit → Day → Scene → Cut film.',
    'Hub',
    0,
    [
      ...p(
        'Castcut (canonical repo: github.com/doodersrage/castcut; formerly Prompt Studio / llm-prompt-studio / comfyui-prompt-studio) is a self-hosted Next.js app for consistent characters, scenes, images, and short films locally with ComfyUI. Model support (FLUX, Qwen, WAN, Hunyuan, LTX, and more) is the engine underneath; the product is the film loop.',
        `Flagship loop: Cast → Outfit → Day → (optional Story or Scene) → Gallery → Cut film → Save to Cast. Castcut 3.x adds a production path beside the Day loop: import a screenplay, plan its shots, render Scenes one take at a time, see a storyboard and animatic, and track it all on the Film Director page. Film is the default workspace and Studio adds control. Heal & ready inspects ComfyUI on first launch. Mobile Studio (\`/m\`) carries the same Film, Day, Outfit, Story, Scene, and Cut tabs to a phone. Current release: v${APP_VERSION}. Cloud engines and the Diffusers add-on stay optional; the near-term focus is reliability and character consistency, not expanding that matrix.`,
      ),
      {
        type: 'callout',
        variant: 'info',
        title: 'Looking for the classic tools?',
        text: 'Generate, Prompt Editor, Variations, Format, Lint, ControlNet, Outpaint, Topics, the Workflow editor, plugins, and the other general prompt and image tools ship as a separate app, Prompt Studio (github.com/doodersrage/prompt-studio). Both apps share one core package, prompt-studio-core on npm. Castcut keeps the film pages: Film, Cast, Outfit, Day, Scene, Story, Cut, Film Director, Character, Video, Refine, Inpaint, Compose, Gallery, and Queue. Their old pages here now point to the Prompt Studio write-up.',
      },
      {
        type: 'callout',
        variant: 'info',
        title: 'Get it running',
        text: `Local dev: ${LIVE} (Node.js 22+). Heal & ready on Settings → Overview. Desktop: GitHub Releases (.dmg / .exe / .deb preferred on Linux, or .AppImage). Docker: ghcr.io/doodersrage/castcut:latest. Full searchable docs at ${DOCS_SITE}.`,
      },
      {
        type: 'links',
        items: [
          { label: 'GitHub repository', href: GH, external: true },
          { label: 'GitHub Releases (desktop)', href: RELEASES, external: true },
          { label: 'Official docs site', href: DOCS_SITE, external: true },
          { label: 'Open Film (local)', href: `${LIVE}/play`, external: true },
        ],
      },
      { type: 'h2', text: 'What this guide covers' },
      {
        type: 'ul',
        items: [
          'Why Castcut, what it is, and how it is built',
          'The film loop page by page: your first film, Cast, Outfit, Day, Scene and takes, Script and runs, Story, Cut, Film Director, finishing tools, and Mobile Studio',
          'Install and first run, then each step of the film loop',
          `Film loop in Castcut ${VERSIONS.castcut}: Script import, Scenes and takes, Film Director, storyboard and animatic, finishing tools (lip-sync, copy moves, relight), talking clips, Cast voices, Places, film scores, Preview the cut, re-cuts in any shape, narration, review links, export for an editor, pose editor, per-look outfits, Heal & ready, desktop/Docker install`,
          'Optional Castcut nodes (Comfy Registry) for Best of two and cut-outs inside one job',
        ],
      },
      { type: 'h2', text: 'Documentation on this site vs GitHub' },
      ...p(
        'This section on robmcd.name is the narrative guide: what Castcut is, why it exists, and a page for each step of the film loop. Reference detail — models, configuration, the HTTP API, workflow takeover, troubleshooting, and every tool outside the film loop — lives on the official docs site on GitHub Pages, kept with the code so it stays current.',
        'More of my open work sits alongside this product: ProbeHarbor (garage freeze, heat, and flood monitoring, pipe-freeze forecast, companion apps at probeharbor.dev) and case studies under /work.',
      ),
      {
        type: 'links',
        items: [
          { label: 'Why Castcut? (sales pitch)', href: `${DOCS_BASE_PATH}/stories/sales-pitch/` },
          { label: 'Models (GitHub Pages)', href: `${DOCS_SITE}/models/`, external: true },
          { label: 'Configuration (GitHub Pages)', href: `${DOCS_SITE}/configuration/`, external: true },
          { label: 'Features in depth (GitHub Pages)', href: `${DOCS_SITE}/features/`, external: true },
          { label: 'Quick start (Node 22+)', href: `${DOCS_BASE_PATH}/getting-started/quick-start/` },
          { label: 'Your first film', href: `${DOCS_BASE_PATH}/play/first-film/` },
          { label: 'Script, runs, and locations', href: `${DOCS_BASE_PATH}/play/script/` },
          { label: 'Cut a film', href: `${DOCS_BASE_PATH}/play/cut/` },
          { label: 'Tools table & routes', href: `${DOCS_BASE_PATH}/introduction/feature-map/` },
          { label: 'Day, poses, and looks', href: `${DOCS_BASE_PATH}/play/day/` },
          { label: 'Castcut nodes', href: `${DOCS_BASE_PATH}/integration/castcut-nodes/` },
          { label: 'ProbeHarbor live app', href: SITE_LINKS.probeHarbor, external: true },
          { label: 'ProbeHarbor demo', href: SITE_LINKS.probeHarborDemo, external: true },
          { label: 'ProbeHarbor GitHub', href: SITE_LINKS.probeHarborGithub, external: true },
          { label: 'Prompt Studio (classic tools)', href: SITE_LINKS.promptStudioApp },
          { label: 'Work & case studies', href: '/work/' },
        ],
      },
    ],
    { interactive: 'tool-routes', related: ['stories/sales-pitch', 'introduction/what-is-it', 'getting-started/quick-start'] },
  ),
]
