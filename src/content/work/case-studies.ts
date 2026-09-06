import { SITE_LINKS } from '@/lib/site'

export type WorkCaseStudy = {
  slug: string
  title: string
  tagline: string
  description: string
  href?: string
  externalHref?: string
  linkLabel: string
  sections: { heading: string; body: string[] }[]
  stack: string[]
}

export const WORK_CASE_STUDIES: WorkCaseStudy[] = [
  {
    slug: 'llm-prompt-studio',
    title: 'LLM Prompt Studio',
    tagline: 'Prompt, queue, and ship films — ComfyUI takeover plus cloud stills and clips',
    description:
      'An MIT-licensed Next.js studio that turns topics into model-ready prompts for image, video, audio, and 3D. Heal & ready on first launch, Play campaign loops (Moodboard → Cut → Cast), Mobile Studio, workflow takeover, and optional Fal/Replicate/Grok/Gemini when you skip the local graph.',
    href: SITE_LINKS.promptStudio,
    externalHref: SITE_LINKS.promptStudioGithub,
    linkLabel: 'Read the docs on robmcd.name',
    stack: [
      'Next.js',
      'TypeScript',
      'ComfyUI',
      'Fal / Replicate / Grok / Gemini',
      'Tauri desktop',
      'Docker',
      'SQLite',
    ],
    sections: [
      {
        heading: 'The problem',
        body: [
          'ComfyUI excels at rendering, but teams still paste prompts into CLIP nodes, Discord pins, and spreadsheets. Switching FLUX ↔ SDXL ↔ Qwen silently breaks tag density and length limits. Gallery folders become unsearchable PNG dumps with no shared character bible or campaign structure.',
          'Prompt Studio owns the text layer: generate, format, lint, character bibles, Cast homes, Roleplay beats, batch review, and handoff into ComfyUI or cloud engines — without replacing the graph editor or locking you into one vendor.',
        ],
      },
      {
        heading: 'What shipped',
        body: [
          '25+ tool routes across Generate, Format, Refine, Compose, Image → Prompt, Inpaint/Outpaint, Character, Cast, Roleplay, Video, Audio, 3D Mesh, Gallery, Variations, ControlNet, Workflow editor, Plugins, and Mobile Studio. 40+ ComfyUI image targets (FLUX including Klein, Qwen Image, Z-Image, Boogu, SDXL, Hunyuan, WAN / LTX video, and more) with family-aware scaffolds.',
          'Four workspace modes (Simple · Play · Studio · Full). Play campaigns run Moodboard → Fitting → Day → Roleplay → Cut film → Save to Cast. Draft/Final/Max quality profiles, semantic gallery search, keyboard review ratings, and workflow takeover that patches live prompt values at ComfyUI queue time.',
          'Heal & ready on first launch, optional Diffusers stills sidecar, cloud engines for stills and clips (Fal, Replicate, Grok, Gemini; ChatGPT stills). Desktop installers via Tauri — macOS .dmg, Windows .exe, Linux .deb preferred (AppImage portable). Docker at ghcr.io/doodersrage/llm-prompt-studio. Local-first persistence (IndexedDB + server SQLite with optional multi-user auth).',
          'Narrative docs and interactive demos live on robmcd.name at /llm-prompt-studio; operator reference (env tables, API catalog, Play guide, release process) lives on GitHub Pages at doodersrage.github.io/llm-prompt-studio.',
        ],
      },
      {
        heading: 'Outcome',
        body: [
          'A reusable open-source product that doubles as a portfolio piece for LLM tooling, ComfyUI integration, and edge-ready Next.js architecture — the same stack this marketing site runs on. Creators get a missing text layer between their LLM and their render farm, with a 10-minute still→clip→Cast loop and an escape hatch to cloud when ComfyUI is not in the loop.',
        ],
      },
    ],
  },
  {
    slug: 'thermaltrace',
    title: 'ThermalTrace',
    tagline: 'Know before pipes freeze or a space floods — hosted alerts for hardware you already own',
    description:
      'Open-source monitoring at thermaltrace.dev for garages, workshops, attics, crawlspaces, and shops. Push or pull sensors (ESP32, Pico W, Arduino, and more), freeze and flood alerts, Overview Insights, household sharing, and Free / Member / Pro plans — without babysitting another home server.',
    externalHref: SITE_LINKS.thermalTrace,
    linkLabel: 'Open ThermalTrace',
    stack: [
      'Astro 6',
      'Cloudflare Workers',
      'Supabase',
      'ESP32 / Pico W',
      'Home Assistant',
      'Stripe',
      'PWA',
    ],
    sections: [
      {
        heading: 'The problem',
        body: [
          'Vulnerable spaces swing hard with seasons, sun load, and door events. A single thermometer reading does not tell you whether pipes, pads, or storage are at risk — and DIY MQTT setups rarely deliver household freeze and flood alerts without another box to keep online.',
          'ThermalTrace keeps your ESP32, Arduino, MQTT, or Home Assistant stack and adds hosted history plus alerts: freeze risk, wet leak contacts, humidity spikes, silent feeds, or custom rules you define.',
        ],
      },
      {
        heading: 'What shipped',
        body: [
          'Build → Connect → Get alerted. Push JSON to a per-device ingest URL (sensors auto-import on first POST) or pull HTTPS feeds on a schedule. Hardware coverage spans ESP32, Pico W, Arduino, STM32 Zephyr, CH32V RISC-V, Teensy, PIC18, AVR assembly, and cellular samples in the repo sketches/ tree — plus Nest/Ecobee thermostat hooks and an MQTT bridge so Mosquitto can stay on the LAN.',
          'Overview Simple or Insights mode: 7-day probe curves, freeze hours and degree-hours, indoor−outdoor ΔT, probe spread, condensation risk, feed health, and cards for doors, power, motion, battery/RSSI, and air quality. Threshold freeze and automatic flood/leak alerts on every plan, plus a forecast-backed time-to-freeze clock. Member adds outdoor forecast warnings; Pro adds official NWS alerts, SMS, WhatsApp, browser push, HMAC webhooks, Grafana/Prometheus metrics keys, and a printable claims evidence pack.',
          'Households invite family (including read-only viewers), publish a free family live share link, and scale to Portfolio / property-manager logins for multi-unit sites. Free forever with 7-day history; Member $4/mo and Pro $10/mo unlock longer retention and CSV export. PWA install today; Android early access and ThermalTrace Desktop companions on GitHub; HACS Home Assistant integration in doodersrage/thermaltrace-home-assistant.',
          'Try without hardware via the interactive probe simulator or live demo at thermaltrace.dev/demo. Product guides at /guides; developer docs (ingest, OpenAPI, deploy) at doodersrage.github.io/thermaltrace; source at github.com/doodersrage/thermaltrace.',
        ],
      },
      {
        heading: 'Outcome',
        body: [
          'A working product visitors can open immediately — not a mockup. Useful for clients who need IoT dashboards, telemetry UIs, alert routing, insurance-ready evidence, or “sensor to screen” architecture explained clearly. Sits alongside LLM Prompt Studio as proof of embedded + web craft under the robmcd.name brand.',
        ],
      },
    ],
  },
  {
    slug: 'legacy-stack-rescue',
    title: 'Legacy stack rescue & headless modernization',
    tagline: 'Stabilize first, then modernize without losing historical data',
    description:
      'Composite consulting pattern: repair aging Windows/Linux servers and C#/PHP apps, then bridge databases into a fast Next.js front end when the business is ready.',
    href: '/projects',
    linkLabel: 'View projects',
    stack: ['C# / .NET', 'PHP', 'MySQL', 'MSSQL', 'Next.js', 'Payload CMS'],
    sections: [
      {
        heading: 'The pattern',
        body: [
          'Inherited stacks rarely need a greenfield rewrite on day one. The first win is usually uptime, query performance, and patching — then a headless front end that keeps years of content intact.',
          'This write-up captures the consulting approach behind client work on robmcd.name: audit → stabilize → optimize → optionally modernize.',
        ],
      },
      {
        heading: 'Typical moves',
        body: [
          'Database bottleneck repair (MySQL/MSSQL), IIS/Nginx and OS hygiene, security patching, and hybrid architectures that keep established backends while shipping Next.js for speed.',
          'When appropriate, Payload or WordPress remains the content engine; the public site becomes a fast, maintainable edge front end.',
        ],
      },
    ],
  },
]

const SLUG_ALIASES: Record<string, string> = {
  'garage-temp': 'thermaltrace',
}

export function getWorkBySlug(slug: string): WorkCaseStudy | undefined {
  const resolved = SLUG_ALIASES[slug] ?? slug
  return WORK_CASE_STUDIES.find((w) => w.slug === resolved)
}
