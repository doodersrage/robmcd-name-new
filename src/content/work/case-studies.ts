import { SITE_LINKS } from '@/lib/site'

export type WorkSectionLink = {
  label: string
  href: string
  note?: string
  external?: boolean
}

export type WorkCaseStudy = {
  slug: string
  title: string
  tagline: string
  description: string
  href?: string
  externalHref?: string
  linkLabel: string
  sections: { heading: string; body: string[]; links?: WorkSectionLink[] }[]
  stack: string[]
}

export const WORK_CASE_STUDIES: WorkCaseStudy[] = [
  {
    slug: 'castcut',
    title: 'Castcut',
    tagline: 'Local character films with ComfyUI. Cast → Moodboard → Fitting → Day → Cut film.',
    description:
      'MIT-licensed Next.js app for consistent characters, scenes, images, and short films locally with ComfyUI. Formerly Prompt Studio / llm-prompt-studio. Heal & ready, Play campaigns, Mobile Studio, workflow takeover, and optional cloud stills/clips when you skip the graph.',
    href: SITE_LINKS.castcut,
    externalHref: SITE_LINKS.castcutGithub,
    linkLabel: 'Read the docs on robmcd.name',
    stack: [
      'Next.js',
      'TypeScript',
      'ComfyUI',
      'FLUX / Qwen / WAN',
      'Tauri desktop',
      'Docker',
      'SQLite',
    ],
    sections: [
      {
        heading: 'The problem',
        body: [
          'ComfyUI excels at rendering, but character consistency still dies in CLIP paste, Discord pins, and PNG dumps. Switching FLUX ↔ SDXL ↔ Qwen silently breaks tag density and length limits. There is no shared Cast home, campaign structure, or film cut step — just more stills.',
          'Castcut owns the film loop: character bible, Moodboard and Fitting, Day stills/clips, optional Roleplay, Gallery review, Cut film, and Save to Cast — with handoff into ComfyUI or optional cloud engines, without replacing the graph editor or locking you into one vendor.',
        ],
      },
      {
        heading: 'What shipped',
        body: [
          'Flagship loop: Cast → Moodboard → Fitting → Day → (optional Roleplay) → Gallery → Cut film. Play is Make; Studio is Control; Full is Build. Specialty tools sit under Extras. 25+ tool routes across Generate, Format, Refine, Compose, Image → Prompt, Inpaint/Outpaint, Character, Cast, Roleplay, Video, Audio, 3D Mesh, Gallery, Variations, ControlNet, Workflow editor, Plugins, and Mobile Studio.',
          '40+ ComfyUI image targets (FLUX including Klein, Qwen Image, Z-Image, Boogu, SDXL, Hunyuan, WAN / LTX video, and more) with family-aware scaffolds. Heal & ready inspects ComfyUI on first launch. Desktop installers via Tauri — macOS .dmg, Windows .exe, Linux .deb preferred (AppImage portable). Docker at ghcr.io/doodersrage/castcut. Local-first persistence (IndexedDB + server SQLite with optional multi-user auth).',
          'Narrative docs and interactive demos live on robmcd.name at /castcut; operator reference (env tables, API catalog, Play guide, release process) lives on GitHub Pages at doodersrage.github.io/castcut. Product focus for now: workflow reliability, first-run UX, and character consistency over expanding the optional cloud provider matrix.',
        ],
      },
      {
        heading: 'Outcome',
        body: [
          'Open-source and usable today. Useful if you care about local AI character filmmaking on ComfyUI, Next.js tooling beside a render farm, or how a film loop sits between an LLM and a queue without owning one vendor graph.',
        ],
      },
    ],
  },
  {
    slug: 'thermaltrace',
    title: 'ThermalTrace',
    tagline: 'Know before pipes freeze or a space floods. Hosted alerts for hardware you already own.',
    description:
      'Open monitoring at thermaltrace.dev for garages, workshops, attics, crawlspaces, and shops. Push or pull sensors (ESP32, Pico W, Arduino, and more), freeze and flood alerts, household sharing, companion apps, and Free / Member / Pro plans. You do not have to babysit another home server just to watch probes.',
    externalHref: SITE_LINKS.thermalTrace,
    linkLabel: 'Open thermaltrace.dev',
    stack: [
      'Astro 6',
      'Cloudflare Workers',
      'Supabase',
      'ESP32 / Pico W',
      'Home Assistant',
      'Stripe',
      'PWA',
      'Android / Desktop companions',
    ],
    sections: [
      {
        heading: 'What it is',
        body: [
          'ThermalTrace is an open-source product for vulnerable spaces that swing with seasons, sun load, and door events: garages, workshops, attics, crawlspaces, and shops. It tracks temperature, humidity, wet/dry leak contacts, and related sensors, then turns those readings into live curves, freeze risk, flood alerts, and exportable history.',
          'You keep the hardware you already trust — ESP32, Pico W, Arduino, MQTT, Home Assistant, Nest/Ecobee, or almost any device that can speak JSON. ThermalTrace adds the hosted dashboard, household alerts, and history so you are not running another always-on box just to know when pipes or pads are at risk.',
          'The live product is at thermaltrace.dev. This page is the portfolio write-up: what the system is made of, how the pieces fit, and where to go next.',
        ],
        links: [
          { label: 'thermaltrace.dev', href: SITE_LINKS.thermalTrace, external: true },
          { label: 'Interactive probe demo', href: SITE_LINKS.thermalTraceDemo, external: true },
          { label: 'Product guides', href: SITE_LINKS.thermalTraceGuides, external: true },
          { label: 'Pricing', href: SITE_LINKS.thermalTracePricing, external: true },
        ],
      },
      {
        heading: 'How it works',
        body: [
          'Build → Connect → Get alerted. Wire a temperature probe (and optional leak pad), create a push device or pull feed in the dashboard, then POST JSON to a per-device ingest URL — or let ThermalTrace pull an HTTPS feed on a schedule. Sensors auto-import on first contact.',
          'Set a freeze threshold and enable wet flood/leak contacts. Email and chat channels cover the free and Member tiers; Pro adds SMS, WhatsApp, browser push, HMAC webhooks, and official NWS freeze/cold alerts. A forecast-backed time-to-freeze clock shows hours until risk, not only after the probe crosses the line.',
        ],
      },
      {
        heading: 'Core product components',
        body: [
          'Web app & ingest edge — Astro 6 on Cloudflare Workers serves the marketing site, authenticated dashboard, and ingest APIs close to visitors. Live job and ingest health is published on the product’s system-status page rather than a marketing uptime claim.',
          'Dashboard Overview — Simple or Insights mode: 7-day probe curves, freeze hours and degree-hours, indoor−outdoor ΔT, probe spread, condensation risk, feed health, plus cards for doors, power, motion, battery/RSSI, and air quality.',
          'Devices & feeds — Push devices with API keys, pull HTTPS JSON feeds, MQTT bridge so Mosquitto can stay on the LAN, Home Assistant recipes, and Nest/Ecobee thermostat hooks for outdoor/context readings.',
          'Alerts & evidence — Threshold freeze and automatic flood/leak alerts on every plan. Member adds outdoor forecast warnings; Pro adds NWS alerts, richer channels, Grafana/Prometheus metrics keys, and a printable claims evidence pack with matching readings and alert CSVs for a date range you choose.',
          'Households & portfolios — Invite family (including read-only viewers), publish a free family live share link, and scale to Portfolio / property-manager logins for multi-unit sites.',
          'Plans — Free forever with 7-day history; Member ($4/mo) and Pro ($10/mo) unlock longer retention, CSV export, and higher alert/automation ceilings. Annual billing is discounted versus monthly.',
        ],
        links: [
          { label: 'About / start here', href: SITE_LINKS.thermalTraceAbout, external: true },
          { label: 'Ingest & developer docs', href: SITE_LINKS.thermalTraceDocs, external: true },
          { label: 'Source on GitHub', href: SITE_LINKS.thermalTraceGithub, external: true },
        ],
      },
      {
        heading: 'Hardware & firmware',
        body: [
          'ThermalTrace does not lock you into a proprietary puck. Sample sketches and recipes live in the product repo under sketches/ and in the guides: ESP32 freeze kits with waterproof DS18B20, Raspberry Pi Pico W, Arduino Ethernet, STM32 Zephyr, CH32V RISC-V, Teensy, PIC18, AVR assembly, and cellular (Particle Boron) samples.',
          'Typical path: flash a personalized sketch, POST so sensors auto-import, optionally add OTA / QR stickers for field installs. Accessories (claim puck, leak pads, door contacts, mounts) are catalogued separately from companion apps.',
        ],
        links: [
          {
            label: 'Adding devices guide',
            href: 'https://thermaltrace.dev/about/adding-devices',
            external: true,
          },
          { label: 'Hardware accessories', href: SITE_LINKS.thermalTraceAccessories, external: true },
        ],
      },
      {
        heading: 'Companion apps',
        body: [
          'Companion clients sign into your ThermalTrace account. They do not measure temperature — ESP/Arduino probes (or HTTPS feeds) push readings; apps display them, history, alerts, devices, and household tools.',
          'Android (early access) — Native phone/tablet companion for live probes, history, freeze/flood alerts, devices, MFA, and household tools while Google Play review finishes.',
          'ThermalTrace Desktop — Native Windows, macOS, and Linux dashboard for the full account experience at a desk.',
          'Bay Buddy — Glanceable freeze and flood “mood” for one garage, workshop, or cabin space on a second monitor.',
          'Progressive Web App — Install from Chrome, Edge, or Safari Add to Home Screen for a phone-friendly client with the same account, no store wait. Pro can enable browser push from Dashboard → Alerts.',
          'Home Assistant — HACS integration in doodersrage/thermaltrace-home-assistant for dual-run with local notify when you want LAN voice/phone alerts alongside ThermalTrace channels.',
          'Matter / smart home — Matterbridge plugin (thermaltrace-matter) exposes share-link sensors to Apple Home, Google Home, and Alexa.',
          'Claim puck — RP2040-Zero field helper (thermaltrace-claim-puck) for boring installs when you would rather flash and claim than babysit a laptop in the garage.',
        ],
        links: [
          { label: 'Apps catalog', href: SITE_LINKS.thermalTraceApps, external: true, note: 'thermaltrace.dev/apps' },
          { label: 'Android (GitHub)', href: SITE_LINKS.thermalTraceAndroid, external: true },
          { label: 'Desktop (GitHub)', href: SITE_LINKS.thermalTraceDesktop, external: true },
          { label: 'Bay Buddy (GitHub)', href: SITE_LINKS.thermalTraceBayBuddy, external: true },
          {
            label: 'Home Assistant HACS',
            href: SITE_LINKS.thermalTraceHomeAssistant,
            external: true,
          },
          { label: 'Matter bridge', href: SITE_LINKS.thermalTraceMatter, external: true },
          { label: 'Claim puck', href: SITE_LINKS.thermalTraceClaimPuck, external: true },
        ],
      },
      {
        heading: 'Related open-source stack',
        body: [
          'ThermalTrace grew out of earlier garage-temperature work on this domain. The product repo is the Astro app at thermaltrace.dev. Older pieces still useful as references: the FastAPI + Redis JSON relay, and the Arduino network JSON temperature sketch with dual probes.',
        ],
        links: [
          { label: 'thermaltrace', href: SITE_LINKS.thermalTraceGithub, external: true },
          {
            label: 'fast-api-relay',
            href: 'https://github.com/doodersrage/fast-api-relay',
            external: true,
          },
          {
            label: 'arduino-network-json-temperature-sever',
            href: 'https://github.com/doodersrage/arduino-network-json-temperature-sever',
            external: true,
          },
          {
            label: 'garage-temp (earlier front end)',
            href: 'https://github.com/doodersrage/garage-temp',
            external: true,
          },
        ],
      },
      {
        heading: 'Outcome',
        body: [
          'A live product at thermaltrace.dev. Handy reference if you need IoT dashboards, alert routing, or a clear path from sensor to phone without standing up your own always-on box.',
        ],
      },
    ],
  },
  {
    slug: 'legacy-stack-rescue',
    title: 'Legacy stack rescue & headless modernization',
    tagline: 'Stabilize first, then modernize without throwing away the data',
    description:
      'Consulting pattern: repair aging Windows/Linux servers and C#/PHP apps, then bridge databases into a faster Next.js front end when the business is ready.',
    href: SITE_LINKS.homelab,
    linkLabel: 'View homelab',
    stack: ['C# / .NET', 'PHP', 'MySQL', 'MSSQL', 'Next.js', 'Payload CMS'],
    sections: [
      {
        heading: 'The pattern',
        body: [
          'Inherited stacks rarely need a greenfield rewrite on day one. First wins are usually uptime, query performance, and patching. A new front end comes later if the content and business logic still matter.',
          'This page is the short version of how I approach that kind of client work: audit, stabilize, optimize, then modernize only where it pays off.',
        ],
      },
      {
        heading: 'Typical moves',
        body: [
          'Database bottleneck repair (MySQL/MSSQL), IIS/Nginx and OS hygiene, security patching, and hybrids that keep the old backend while shipping Next.js for the public site.',
          'Sometimes Payload or WordPress stays the content engine; the public site becomes a thinner, faster front end.',
        ],
      },
    ],
  },
]

const SLUG_ALIASES: Record<string, string> = {
  'garage-temp': 'thermaltrace',
  'llm-prompt-studio': 'castcut',
}

export function getWorkBySlug(slug: string): WorkCaseStudy | undefined {
  const resolved = SLUG_ALIASES[slug] ?? slug
  return WORK_CASE_STUDIES.find((w) => w.slug === resolved)
}

/** Curated GitHub standouts — not full case studies; listed under /work. */
export type WorkRepoHighlight = {
  name: string
  blurb: string
  href: string
  note?: string
}

export const WORK_REPO_HIGHLIGHTS: WorkRepoHighlight[] = [
  {
    name: 'wallhaven-plasma-6-plugin',
    blurb:
      'KDE Plasma 6 wallpaper plugin for wallhaven.cc. Search, slideshow, multi-monitor, KRunner, D-Bus.',
    href: 'https://github.com/doodersrage/wallhaven-plasma-6-plugin',
  },
  {
    name: 'next-js-cinemasource',
    blurb: 'TypeScript / Next.js module for the CinemaSource API.',
    href: 'https://github.com/doodersrage/next-js-cinemasource',
  },
  {
    name: 'CheapLocalDeals.com',
    blurb:
      'Old PHP gift-certificate ecommerce (geo deals, merchant portal, memcached). Retired; still relevant past work.',
    href: 'https://github.com/doodersrage/CheapLocalDeals.com',
    note: 'Legacy',
  },
]
