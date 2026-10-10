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
    tagline: 'Local character films with ComfyUI. Cast → Look → Outfit → Day → Cut film.',
    description:
      'MIT-licensed Next.js app for consistent characters, scenes, and short films locally with ComfyUI. Castcut 2.4 adds talking clips with sound, auditioned Cast voices, a fixed home and workplace per Cast, and an original score for each cut. The classic prompt and image tools now ship separately as Prompt Studio, on a shared core package.',
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
          'Castcut owns the film loop: character bible, Look and Outfit, Day stills/clips, optional Story, Gallery review, Cut film, and Save to Cast — with identity lock across Look / Outfit / Day / Story, handoff into ComfyUI or optional cloud engines, without replacing the graph editor or locking you into one vendor.',
        ],
      },
      {
        heading: 'What shipped',
        body: [
          'Flagship loop: Cast → Look → Outfit → Day → (optional Story) → Gallery → Cut film. Play is Make (default); Studio is Control; Full is Build. Specialty tools sit under Extras. Film hub, essentials-first Cast create, featured Part archetypes, and Identity ready chrome. 25+ tool routes across Generate, Format, Refine, Compose, Image → Prompt, Inpaint/Outpaint, Character, Cast, Story, Video, Audio, 3D Mesh, Gallery, Variations, ControlNet, Workflow editor, Plugins, and Mobile Studio.',
          'Castcut 2.2–2.3: identity lock across Look, Outfit, Day, and Story; a pose editor (joints, from a photo, My poses, pose packs) backed by a library of real reference poses; several looks per Cast with the kept outfit stored on the look; clothing and footwear pickers; one Quality preset (Fast / Balanced / Best) on Day and Outfit; a board-first Day with one slot sheet and one ⋯ menu per card. Day stills commonly run on Rapid AIO, Qwen Edit 2511, or Qwen-Image 2.1. Open in ComfyUI round-trips the exact graph.',
          'Castcut 2.4 gives the film sound. Put a line on a Day slot or Story scene and Animate makes a lip-synced talking clip with LTX-2.5; a reply line makes a two-person conversation in one shot. Cast voices are auditioned and kept on the Cast page. Places give each Cast one home and one workplace, so the bedroom, kitchen, and office are the same rooms in every still. Cut film keeps each clip’s speech, ducks the music under it, and can score the cut with an original instrumental from ACE-Step 1.5. Make it 30 s carries a short clip on to about 30 seconds in chained segments.',
          'Optional Castcut nodes (Comfy Registry pack 1.1.0) run Best of two and isolate-on-white cut-outs inside one ComfyUI job. 40+ image targets remain (FLUX including Klein, Qwen, Z-Image, Boogu, SDXL, Hunyuan, WAN / LTX, and more). Desktop installers via Tauri — macOS .dmg, Windows .exe, Linux .deb preferred. Docker at ghcr.io/doodersrage/castcut. Narrative docs live here; operator reference stays on GitHub Pages.',
        ],
        links: [
          { label: 'Day, poses, and looks', href: '/castcut/play/day' },
          { label: 'Castcut nodes', href: '/castcut/integration/castcut-nodes' },
          { label: 'castcut-nodes on GitHub', href: SITE_LINKS.castcutNodes, external: true },
        ],
      },
      {
        heading: 'Prompt Studio split out',
        body: [
          'Castcut started life as Prompt Studio, a general prompt and image toolbox. As the film loop took over, the classic tools — Generate, Prompt Editor, Variations, Format, Lint, the Workflow editor, plugins, and the rest — moved into their own app. Castcut now opens on Film and lists only the film pages; Prompt Studio keeps the toolbox without film copy or Play links.',
          'Both apps run on one shared core published to npm as prompt-studio-core (the ComfyUI pipeline, Gallery, settings, and app shell). A boundary test fails the build on any new import from shared code into Castcut’s Play layer, so the split stays clean.',
        ],
        links: [
          { label: 'Prompt Studio write-up', href: SITE_LINKS.promptStudioApp },
          { label: 'prompt-studio-core on npm', href: SITE_LINKS.promptStudioCore, external: true },
        ],
      },
      {
        heading: 'Outcome',
        body: [
          'Open-source and usable today (Castcut 2.4). Useful if you care about local AI character filmmaking on ComfyUI, Next.js tooling beside a render farm, or how a film loop sits between an LLM and a queue without owning one vendor graph.',
        ],
      },
    ],
  },
  {
    slug: 'probeharbor',
    title: 'ProbeHarbor',
    tagline: 'Know before pipes freeze or a space floods. Hosted alerts for hardware you already own.',
    description:
      'Open monitoring at probeharbor.dev (formerly ThermalTrace) for garages, workshops, attics, crawlspaces, and shops. Push or pull sensors (ESP32, Pico W, Arduino, and more), freeze, heat, and flood alerts, a public pipe-freeze forecast with free freeze-night emails, household sharing, Android and iOS apps, and Free / Member / Pro / Portfolio plans.',
    externalHref: SITE_LINKS.probeHarbor,
    linkLabel: 'Open probeharbor.dev',
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
          'ProbeHarbor is an open-source product for vulnerable spaces that swing with seasons, sun load, and door events: garages, workshops, attics, crawlspaces, and shops. It tracks temperature, humidity, wet/dry leak contacts, and related sensors, then turns those readings into live curves, freeze risk, flood alerts, and exportable history.',
          'You keep the hardware you already trust — ESP32, Pico W, Arduino, MQTT, Home Assistant, Nest/Ecobee (Pro OAuth), or almost any device that can speak JSON. ProbeHarbor adds the hosted dashboard, household alerts, and history so you are not running another always-on box just to know when pipes or pads are at risk.',
          'ProbeHarbor was called ThermalTrace until October 2026. The product, accounts, and features carried over; the domain moved from thermaltrace.dev to probeharbor.dev, and the GitHub repos, Android app, and Home Assistant integration were renamed to match.',
          'The live product is at probeharbor.dev. This page is the portfolio write-up: what the system is made of, how the pieces fit, and where to go next.',
        ],
        links: [
          { label: 'probeharbor.dev', href: SITE_LINKS.probeHarbor, external: true },
          { label: 'Interactive probe demo', href: SITE_LINKS.probeHarborDemo, external: true },
          { label: 'Product guides', href: SITE_LINKS.probeHarborGuides, external: true },
          { label: 'Pricing', href: SITE_LINKS.probeHarborPricing, external: true },
        ],
      },
      {
        heading: 'How it works',
        body: [
          'Build → Connect → Get alerted. Wire a temperature probe (and optional leak puck), create a push device or pull feed in the dashboard, then POST JSON to a per-device ingest URL — or let ProbeHarbor pull an HTTPS feed on a schedule. Sensors auto-import on first contact.',
          'No probe yet? The public pipe-freeze forecast now takes a US ZIP and emails before freezing nights — the first freezing night of a cold spell and every night at 20°F or colder — with the protective steps and a link to the five-night forecast. Double opt-in and one-click unsubscribe; no hardware or account needed.',
          'Set a freeze threshold and enable wet flood/leak contacts. Heat alerts sit beside freeze. Free and Member cover email plus Discord, Telegram, Slack, Teams, ntfy, and Pushover; Pro adds SMS, WhatsApp, browser push, HMAC webhooks, and official NWS freeze/cold alerts. A forecast-backed time-to-freeze clock shows hours until risk. “I’m on it” stops repeat freeze alerts until the space recovers. Feeds that stay silent are marked offline.',
        ],
      },
      {
        heading: 'Core product components',
        body: [
          'Web app & ingest edge — Astro 6 on Cloudflare Workers serves the marketing site, authenticated dashboard, and ingest APIs close to visitors. Live job and ingest health is published on the product’s system-status page rather than a marketing uptime claim.',
          'Dashboard Overview — Simple or Insights mode: 7-day probe curves, freeze hours and degree-hours, indoor−outdoor ΔT, probe spread, condensation risk, feed health, plus cards for doors, power, motion, battery/RSSI, and air quality.',
          'Devices & feeds — Push devices with API keys, pull HTTPS JSON feeds, MQTT bridge so Mosquitto can stay on the LAN, Home Assistant recipes, and Nest/Ecobee thermostat hooks (Pro) for outdoor/context readings.',
          'Alerts & evidence — Threshold freeze and automatic flood/leak alerts on every plan. Member adds outdoor forecast warnings; Pro adds NWS alerts, richer channels, Grafana/Prometheus metrics keys, and a printable claims evidence pack with matching readings and alert CSVs for a date range you choose.',
          'Households & portfolios — Invite family (including read-only viewers), publish a free family live share link, and scale to Portfolio / property-manager logins for multi-unit sites.',
          'Plans — Free forever with 7-day history; Member ($4/mo), Pro ($10/mo), and Portfolio (~$29/mo) unlock longer retention, CSV export (Member+), and higher alert/automation ceilings. See pricing for current amounts; annual billing is discounted versus monthly.',
        ],
        links: [
          { label: 'About / start here', href: SITE_LINKS.probeHarborAbout, external: true },
          { label: 'Developer docs', href: SITE_LINKS.probeHarborDocs, external: true },
          { label: 'Pipe freeze forecast', href: SITE_LINKS.probeHarborForecastPage },
          { label: 'Source on GitHub', href: SITE_LINKS.probeHarborGithub, external: true },
        ],
      },
      {
        heading: 'Hardware & firmware',
        body: [
          'ProbeHarbor does not lock you into a proprietary puck. Sample sketches and recipes live in the product repo under sketches/ and in the guides: ESP32 freeze kits with waterproof DS18B20, Raspberry Pi Pico W, Arduino Ethernet, STM32 Zephyr, CH32V RISC-V, Teensy, PIC18, AVR assembly, and cellular (Particle Boron) samples.',
          'Typical path: flash a personalized sketch, POST so sensors auto-import, optionally add OTA / QR stickers for field installs. Accessories — claim puck, leak puck, door puck, mounts — are catalogued separately from companion apps.',
        ],
        links: [
          {
            label: 'Adding devices guide',
            href: 'https://probeharbor.dev/about/adding-devices',
            external: true,
          },
          { label: 'Hardware accessories', href: SITE_LINKS.probeHarborAccessories, external: true },
          { label: 'Claim puck', href: SITE_LINKS.probeHarborClaimPuckProduct, external: true },
        ],
      },
      {
        heading: 'Companion apps',
        body: [
          'Companion clients sign into your ProbeHarbor account. They do not measure temperature — ESP/Arduino probes (or HTTPS feeds) push readings; apps display them, history, alerts, devices, and household tools.',
          'Android (early access) — Native phone/tablet companion for live probes, history, freeze/flood alerts, devices, MFA, and household tools while Google Play review finishes.',
          'iOS — A native SwiftUI client with the same screens as Android: live sensors and time to freeze, history with a claims pack to share with an adjuster, the alerts inbox with acknowledge and snooze, devices, households, and share links. Push alerts carry an Acknowledge action.',
          'ProbeHarbor Desktop — Native Windows, macOS, and Linux dashboard for the full account experience at a desk.',
          'Bay Buddy — Glanceable freeze and flood “mood” for one garage, workshop, or cabin space on a second monitor.',
          'Progressive Web App — Install from Chrome, Edge, or Safari Add to Home Screen for a phone-friendly client with the same account, no store wait. Pro can enable browser push from Dashboard → Alerts.',
        ],
        links: [
          { label: 'Apps catalog', href: SITE_LINKS.probeHarborApps, external: true, note: 'probeharbor.dev/apps' },
          { label: 'Android (GitHub)', href: SITE_LINKS.probeHarborAndroid, external: true },
          { label: 'iOS (GitHub)', href: SITE_LINKS.probeHarborIos, external: true },
          { label: 'Desktop (GitHub)', href: SITE_LINKS.probeHarborDesktop, external: true },
          { label: 'Bay Buddy (GitHub)', href: SITE_LINKS.probeHarborBayBuddy, external: true },
        ],
      },
      {
        heading: 'Integrations',
        body: [
          'Home Assistant (HACS) for local notify beside ProbeHarbor channels. Matter exposes share-link sensors to Apple Home, Google Home, Alexa, and SmartThings. Node-RED, Influx/Telegraf, and Pro webhooks (IFTTT, n8n, Grafana) cover the rest of a homelab. A public pipe-freeze forecast and opt-in freeze map can be embedded on another site.',
        ],
        links: [
          { label: 'Integrations on this site', href: SITE_LINKS.probeHarborIntegrationsPage },
          { label: 'Pipe freeze forecast', href: SITE_LINKS.probeHarborForecastPage },
          {
            label: 'Guides on probeharbor.dev',
            href: SITE_LINKS.probeHarborIntegrations,
            external: true,
          },
          { label: 'Developer docs', href: SITE_LINKS.probeHarborDocs, external: true },
        ],
      },
      {
        heading: 'Related open-source stack',
        body: [
          'ProbeHarbor grew out of earlier garage-temperature work on this domain. The product repo is the Astro app at probeharbor.dev. Older pieces still useful as references: the FastAPI + Redis JSON relay, and the Arduino network JSON temperature sketch with dual probes.',
        ],
        links: [
          { label: 'probeharbor', href: SITE_LINKS.probeHarborGithub, external: true },
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
          'A live product at probeharbor.dev. Handy reference if you need IoT dashboards, alert routing, or a clear path from sensor to phone without standing up your own always-on box.',
        ],
      },
    ],
  },
  {
    slug: 'shelf',
    title: 'Shelf',
    tagline: 'A self-hosted personal library: books, e-books, audiobooks, and the readers who share them.',
    description:
      'AGPL-licensed library server on .NET 10 and Blazor. Catalog, reading log, quotes, loans, and a yearly goal, plus an EPUB/PDF reader with highlights and OCR, an audiobook player, OPDS and KOReader sync, and imports from Goodreads, Calibre, and Audiobookshelf. One Docker container, SQLite inside.',
    externalHref: SITE_LINKS.shelfGithub,
    linkLabel: 'View on GitHub',
    stack: ['.NET 10', 'ASP.NET Core', 'Blazor', 'EF Core', 'SQLite', 'Docker', 'Playwright'],
    sections: [
      {
        heading: 'What it is',
        body: [
          'Shelf keeps a household’s books in one place: the catalog, what each reader is reading, the quotes and highlights worth keeping, who has borrowed what, and a yearly reading goal. Each reader signs in to a shelf of their own; no reader sees another’s books, notes, or reading log unless they open their shelf, and even then only the titles.',
          'It started in October 2026 as a first project back on current .NET and grew into a full self-hosted library. Version 1.3 speaks English, Spanish, French, and German.',
        ],
        links: [
          { label: 'Running in my homelab', href: SITE_LINKS.shelfLive, external: true, note: 'shelf.robmcd.name' },
          { label: 'Documentation', href: SITE_LINKS.shelfDocs, external: true },
          { label: 'Source on GitHub', href: SITE_LINKS.shelfGithub, external: true },
        ],
      },
      {
        heading: 'Reading and listening',
        body: [
          'Upload an EPUB, PDF, comic (.cbz), or Kindle file and read it in the browser at your own text size, back where you stopped. Select a passage to highlight it and leave a note; scanned PDFs are read with Tesseract OCR in the background so their words can be highlighted too. The reader can read aloud with the browser’s own voices, and books kept for offline reading open when the server cannot be reached, syncing the place and highlights when it comes back.',
          'Audiobooks — one file or a zip of tracks — get a player with chapters, speed, a sleep timer, bookmarks, and lock-screen controls. Full-text search finds a phrase across every e-book on the shelf.',
        ],
      },
      {
        heading: 'Lending and sharing',
        body: [
          'A book can be lent to another reader, who reads or listens with their own place and highlights while the owner’s stay private. Readers can open their shelf so others can ask to borrow, and reminders go out when a loan is overdue or a borrowed book is due. Two shelves on different servers can trade e-books and audiobooks with a key, keeping the furthest place.',
          'Sign-in covers passwords, authenticator codes, passkeys, and OpenID Connect providers such as Authentik, Authelia, Keycloak, or Pocket ID.',
        ],
      },
      {
        heading: 'Bringing books in and getting them out',
        body: [
          'ISBN look-up (Open Library, then Google Books), a barcode scanner on a phone’s camera, a watched import folder, Goodreads and StoryGraph CSV imports, a Calibre library on the server, an Audiobookshelf server, and Project Gutenberg and LibriVox for public-domain books. KOReader downloads from the OPDS catalog, syncs its place, and sends its highlights back; Send to Kindle emails an e-book to a reader’s device.',
          'Every shelf backs itself up each night, with optional copies to a second folder or S3-compatible storage, and a full zip backup carries every file.',
        ],
      },
      {
        heading: 'How it is built',
        body: [
          'ASP.NET Core with Blazor pages and a JSON API (OpenAPI in Development), EF Core migrations on SQLite, and .NET Aspire for local development with logs and traces. Releases follow semantic versioning and publish amd64 and arm64 images to ghcr.io/doodersrage/shelf, so it runs on a Raspberry Pi or a NAS. Playwright drives the reader, player, lending, offline mode, and an accessibility audit of every page in both themes on each push.',
        ],
      },
    ],
  },
  {
    slug: 'prompt-studio',
    title: 'Prompt Studio',
    tagline: 'Prompt, image, video, and audio tools for ComfyUI, running on your own machine.',
    description:
      'MIT-licensed Next.js toolbox for ComfyUI: write a scene idea, let a local LLM turn it into a model-ready prompt, queue it, then review and keep results in one Gallery. The classic tools from before Castcut became a film app, now a separate app on the shared prompt-studio-core package.',
    externalHref: SITE_LINKS.promptStudioAppGithub,
    linkLabel: 'View on GitHub',
    stack: ['Next.js', 'TypeScript', 'ComfyUI', 'npm package', 'LM Studio / Ollama'],
    sections: [
      {
        heading: 'What it is',
        body: [
          'Prompt Studio is the general-purpose half of what used to be one app. When Castcut narrowed to character films (Cast → Look → Outfit → Day → Cut film), the prompt and image tools that did not belong in a film loop moved here, so people who want a ComfyUI toolbox get one without the film pages.',
          'It picks the workflow, sampler, and size for the model you choose and your GPU, so you spend your time on pictures rather than graphs. Heal & ready checks ComfyUI, maps your models, enables the system workflows, and installs missing node packs.',
        ],
        links: [
          { label: 'Source on GitHub', href: SITE_LINKS.promptStudioAppGithub, external: true },
          { label: 'Castcut write-up', href: '/work/castcut' },
        ],
      },
      {
        heading: 'What is in it',
        body: [
          'Create — Generate (keywords or a random surprise to a full prompt), Prompt Editor, Image → Prompt with a vision model, Video (text-to-video, image-to-video, extend), and Variations grid and matrix sweeps. Edit — Refine, Inpaint, Outpaint, Compose, and ControlNet. Library — Gallery with ratings, review mode, compare, semantic search, and tags; Queue; Dashboard; Studio history and diffs.',
          'More tools — Format, Lint, Negative prompts, a node-graph Workflow editor, Topics, Audio, Mesh, Logo, and plugins. Engines include Qwen-Image, FLUX, Z-Image, SDXL, WAN, LTX, and Hunyuan on ComfyUI, a LoRA library, and optional cloud engines. Saved characters keep a face lock, wardrobe, and LoRAs for any tool.',
        ],
      },
      {
        heading: 'How it is built',
        body: [
          'The shared code — the ComfyUI pipeline, Gallery, settings, app shell, and the tools — is published on npm as prompt-studio-core and developed in the Castcut repository. Prompt Studio is the thin app around it: generated routes, its own layout, configuration, and public assets. A daily workflow installs a newer core when one is published, regenerates the routes, builds, and opens a pull request.',
        ],
        links: [{ label: 'prompt-studio-core on npm', href: SITE_LINKS.promptStudioCore, external: true }],
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
  'garage-temp': 'probeharbor',
  thermaltrace: 'probeharbor',
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
