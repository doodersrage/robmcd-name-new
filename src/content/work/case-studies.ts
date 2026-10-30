import { SITE_LINKS } from '@/lib/site'
import { VERSIONS } from '@/lib/versions'

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
    tagline: 'Local character films with ComfyUI. Cast → Outfit → Day → Scene → Cut.',
    description:
      `MIT-licensed Next.js app for consistent characters, scenes, and short films locally with ComfyUI. Castcut ${VERSIONS.castcut} takes a screenplay through Scenes, takes, and a storyboard to a finished cut: talking clips with Cast voices, narration, and an original score; finishing tools such as lip-sync, copy moves from a video, and relight; a Film Director page for the whole production; and an export to DaVinci Resolve, Premiere, or Final Cut. The classic prompt and image tools ship separately as Prompt Studio, on a shared core package.`,
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
          'Castcut owns the film loop: character bible, Outfit, Day stills/clips, optional Story and Scene, Gallery review, Cut film, and Save to Cast — with identity lock across Outfit / Day / Story / Scene, handoff into ComfyUI or optional cloud engines, without replacing the graph editor or locking you into one vendor.',
        ],
      },
      {
        heading: 'What shipped',
        body: [
          'Flagship loop: Cast → Outfit → Day → (optional Story or Scene) → Gallery → Cut film; the old Look step is gone, and a Cast’s looks live on its page. Play is Make (default); Studio is Control; Full is Build. Specialty tools sit under Extras. Film hub, essentials-first Cast create, featured Part archetypes, and Identity ready chrome. 25+ tool routes across Generate, Format, Refine, Compose, Image → Prompt, Inpaint/Outpaint, Character, Cast, Story, Video, Audio, 3D Mesh, Gallery, Variations, ControlNet, Workflow editor, Plugins, and Mobile Studio.',
          'Castcut 2.2–2.3: identity lock across Look, Outfit, Day, and Story; a pose editor (joints, from a photo, My poses, pose packs) backed by a library of real reference poses; several looks per Cast with the kept outfit stored on the look; clothing and footwear pickers; one Quality preset (Fast / Balanced / Best) on Day and Outfit; a board-first Day with one slot sheet and one ⋯ menu per card. Day stills commonly run on Rapid AIO, Qwen Edit 2511, or Qwen-Image 2.1. Open in ComfyUI round-trips the exact graph.',
          'Castcut 2.4 gives the film sound. Put a line on a Day slot or Story scene and Animate makes a lip-synced talking clip with LTX-2.5; a reply line makes a two-person conversation in one shot. Cast voices are auditioned and kept on the Cast page. Places give each Cast one home and one workplace, so the bedroom, kitchen, and office are the same rooms in every still. Cut film keeps each clip’s speech, ducks the music under it, and can score the cut with an original instrumental from ACE-Step 1.5. Make it 30 s carries a short clip on to about 30 seconds in chained segments.',
          'Castcut 2.5 lets you direct the film: Make it 30 s takes your own beats and a spoken line per part, a Cast voice can come from your own recording, and a line can be said eleven ways (Whisper, Laughing, Nervous, Shouting, Sing-song, and more). Animate asks what should happen in the clip, Made with shows what each still came from, and Film, Studio, and More tools are three clear levels.',
          'Castcut 2.6 is about the cut. Preview the cut and Preview the mix play the film and its sound in the browser before any encode; clips trim in the shot list, stills crop waist-up or chest-up around the face, the poster can be any shot, and cuts come out widescreen, vertical, or square at 720p or 1080p. Every film keeps its recipe, so it can be re-cut in another shape later, and each episode can reopen the Day it came from. Talking clips get room sound from their place and settle from a mid-movement still before speaking; LTX-2.5 is the clip engine for nearly everything. A security pass makes it safe behind a reverse proxy, which is how it runs in my homelab.',
          'Castcut 2.7 adds One event: one line such as “a quiet afternoon reading at the beach” becomes consecutive moments from one fixed camera, each clip ending on the next still so the cut plays as one continuous video. Day clips default to LTX-2.5, talking clips no longer freeze an arm or leg mid-action, and Gender swap redraws a Cast bible picture as the other-gender version of the same scene. 2.7.3 brings a one-folder Docker setup, a pictures backup, and Gallery deletes that actually free their disk space.',
          'Castcut 2.8 makes a Cast portable and recoverable: Export bundle writes the Cast with every look’s plate, earlier plates, and films as one .tar to import on another install, each look keeps its last six plates to restore, and Cast home can generate a look’s plate itself. A replay whose source picture has gone from ComfyUI now says which one and how to get it back.',
          'Castcut 2.9 deepens the Cast home and the film. A Cast carries marks (glasses, tattoos, scars) that Day checks with the vision model and repairs on each still, props, the people in their life, pronunciations for the clip voice, a wardrobe, a likeness chart over time, and a printable reference sheet. Films can be widened to 16:9, cut in close-ups, narrated in the Cast’s voice, open with “Previously on”, and be shared on an expiring review link that takes comments pinned to a moment. A Fountain screenplay imports straight into Day, each card can render on its own engine, MiniMax-H3 joins LTX-2.5 and WAN as a clip engine, and Export for an editor writes an FCPXML timeline, an EDL, SRT captions, and the shots. A new install needs no secrets in its env file: the first admin is made on the sign-in page.',
          'Castcut 2.10–2.12 added finishing tools for any still or clip: Sharpen & smooth (SeedVR2 and RIFE), Copy moves from a video (Wan Animate 2), Lip-sync to a recording (InfiniteTalk, one or two people), Dance to music (Wan-Dancer), Relight, and Sketch over a still. A Cast’s places can come from a photo of a real room, and a built-in LLM (llama.cpp with a Qwen3-VL model) means LM Studio is optional. Cut grew into an editor: faces followed in vertical cuts, speed, reverse, and freeze frames, J and L cuts, lower thirds and a logo, a film look with shot matching, New take, Make longer, Generate a shot for missing B-roll, and Make a reel for a 15, 30, or 60 second vertical. Kept outfits go to the Wardrobe with a runway clip and a Turn around viewer (it replaced a 3D-model attempt that wasn’t presentable), and the Gallery’s Needs a look flags missed poses and clips that cut or came out silent, with Redo these.',
          'Castcut 3.0 is about production. A screenplay (Fountain or plain text) imports into Script with who’s who, locations, and shot lists. Scene renders one shot exactly as you want it, keeping every take, and a run renders a script’s Scenes one take at a time with pause, resume, and cancel. Film Director shows the whole production on one page and what to do next. Every take records how it was made, Cut pins each shot to the take it was cut with, continuity findings from every check land in one list, and cuts gain versions that merge across devices, mute and solo, a loudness target, editable subtitles, a missing-media check with Relink, and a package to move a cut to another machine.',
          'Castcut 3.0.1 was a validation release: a ten-minute film end to end, and timings on large projects. 3.1 adds locations — a script’s places resolve to locations with their own picture, and shots set there are checked against it — plus take review and compare. 3.2 adds search, a storyboard, and an animatic to see a film before rendering it, a sound-effects track, timed subtitles, Script on the phone, and longer clips whose parts each do their own beat while keeping the Cast’s face, outfit, and colour across the joins. The pose Director can now take its moves from motion capture or a video of your own.',
          'Optional Castcut nodes (Comfy Registry pack 1.1.0) run Best of two and isolate-on-white cut-outs inside one ComfyUI job. 40+ image targets remain (FLUX including Klein, Qwen, Z-Image, Boogu, SDXL, Hunyuan, WAN / LTX, and more). Desktop installers via Tauri — macOS .dmg, Windows .exe, Linux .deb (preferred) or .AppImage. Docker at ghcr.io/doodersrage/castcut. Narrative docs live here; operator reference stays on GitHub Pages.',
        ],
        links: [
          { label: 'Day, poses, and looks', href: '/castcut/play/day/' },
          { label: 'Castcut docs on GitHub Pages', href: 'https://doodersrage.github.io/castcut/', external: true },
          { label: 'Running in my homelab', href: SITE_LINKS.castcutLive, external: true, note: 'castcut.robmcd.name' },
          { label: 'Changelog', href: `${SITE_LINKS.castcutGithub}/blob/main/CHANGELOG.md`, external: true },
          { label: 'Castcut nodes', href: '/castcut/integration/castcut-nodes/' },
          { label: 'castcut-nodes on GitHub', href: SITE_LINKS.castcutNodes, external: true },
        ],
      },
      {
        heading: 'Prompt Studio split out',
        body: [
          'Castcut started life as Prompt Studio, a general prompt and image toolbox. As the film loop took over, the classic tools — Generate, Prompt Editor, Variations, Format, Lint, the Workflow editor, plugins, and the rest — moved into their own app. Castcut now opens on Film and lists only the film pages; Prompt Studio keeps the toolbox without film copy or Play links. In October 2026 the tools’ own pages, API routes, and about 180 components moved into the Prompt Studio repository with their tests, so Castcut no longer carries them.',
          `Both apps run on one shared core published to npm as prompt-studio-core ${VERSIONS.promptStudioCore} (the ComfyUI pipeline, Gallery, settings, and app shell). A boundary test fails the build on any new import from shared code into Castcut’s Play layer, so the split stays clean.`,
        ],
        links: [
          { label: 'Prompt Studio write-up', href: SITE_LINKS.promptStudioApp },
          { label: 'prompt-studio-core on npm', href: SITE_LINKS.promptStudioCore, external: true },
        ],
      },
      {
        heading: 'Outcome',
        body: [
          `Open-source and usable today (Castcut ${VERSIONS.castcut}). Useful if you care about local AI character filmmaking on ComfyUI, Next.js tooling beside a render farm, or how a film loop sits between an LLM and a queue without owning one vendor graph.`,
        ],
      },
    ],
  },
  {
    slug: 'probeharbor',
    title: 'ProbeHarbor',
    tagline: 'Know before pipes freeze or a space floods. Hosted alerts for hardware you already own.',
    description:
      'Open monitoring at probeharbor.dev (formerly ThermalTrace) for garages, workshops, attics, crawlspaces, and shops. Push or pull sensors (ESP32, Pico W, Arduino, and more), an ESP32 freeze sensor flashed from the browser with no IDE, freeze, heat, and flood alerts, a public pipe-freeze forecast with free freeze-night emails, door history, household sharing, Android and iOS apps, a site in five languages, and Free / Member / Pro / Portfolio plans.',
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
          'The quickest path is the web flasher: plug an ESP32, ESP32-S3, or ESP32-C3 into a desktop running Chrome or Edge, flash prebuilt open-source firmware from the page, and send it your Wi‑Fi and device key — no Arduino IDE, nothing to compile. It reads up to four DS18B20 probes or a DHT22/DHT11, finds an SHT31, BME280, or AHT20 air sensor on I²C, and can report a leak contact, a door switch, and battery level. The dashboard shows each board’s firmware version and offers updates.',
          'No probe yet? The public pipe-freeze forecast now takes a US ZIP and emails before freezing nights — the first freezing night of a cold spell and every night at 20°F or colder — with the protective steps and a link to the five-night forecast. Double opt-in and one-click unsubscribe; no hardware or account needed.',
          'Set a freeze threshold and enable wet flood/leak contacts. Heat alerts sit beside freeze. Free and Member cover email plus Discord, Telegram, Slack, Teams, ntfy, and Pushover; Pro adds SMS, WhatsApp, browser push, HMAC webhooks, and official NWS freeze/cold alerts. A forecast-backed time-to-freeze clock shows hours until risk. “I’m on it” stops repeat freeze alerts until the space recovers. Feeds that stay silent are marked offline.',
          'Alerts now say when things recover and close themselves when the condition clears, catch a probe stuck on one value, and warn when a device loses power. A freeze window explains why a night is at risk, rules can fire on any of several conditions, and a sensor can be replaced without losing its history. Before buying anything, the payload checker shows whether ProbeHarbor will understand a sensor’s JSON, and cold-snap replay runs your rules against a past cold spell.',
          'Doors now keep a history of their own: each opening is one row with how long it lasted and how much the temperature and humidity moved while it was open, shaded on the charts and exportable as CSV, and a “door open longer than N minutes” rule waits that long and clears when it closes. Firmware 1.2.3 posts the moment a door changes. Alerts follow each recipient’s °C or °F, say how old a reading is, send one recap when quiet hours end, and a snooze never mutes a freeze alert. Long history ranges read hourly rollups, so a year of readings charts in one call.',
        ],
      },
      {
        heading: 'Core product components',
        body: [
          'Web app & ingest edge — Astro 6 on Cloudflare Workers serves the marketing site, authenticated dashboard, and ingest APIs close to visitors. Live job and ingest health is published on the product’s system-status page rather than a marketing uptime claim. Share, invite, and status-page links are stored hashed and shown once, webhooks are signed with a timestamp against replays, ingest is rate limited, and deploys are blocked by failing accessibility (axe and Lighthouse) checks.',
          'Dashboard Overview — Simple or Insights mode: 7-day probe curves, freeze hours and degree-hours, indoor−outdoor ΔT, probe spread, condensation risk, feed health, plus cards for doors, power, motion, battery/RSSI, and air quality.',
          'Devices & feeds — Push devices with API keys, pull HTTPS JSON feeds, MQTT bridge so Mosquitto can stay on the LAN, Home Assistant recipes, and Nest/Ecobee thermostat hooks (Pro) for outdoor/context readings.',
          'Alerts & evidence — Threshold freeze and automatic flood/leak alerts on every plan. Member adds outdoor forecast warnings; Pro adds NWS alerts, richer channels, Grafana/Prometheus metrics keys, and a printable claims evidence pack with matching readings and alert CSVs for a date range you choose.',
          'Households & portfolios — Invite family (including read-only viewers), publish a free family live share link, and scale to Portfolio / property-manager logins for multi-unit sites.',
          'Languages — the marketing site, dashboard, sign-in, emails, and alerts are in English, Spanish, French, German, and Brazilian Portuguese.',
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
          'Typical path: flash the firmware from the browser (or a personalized sketch), POST so sensors auto-import, optionally add OTA / QR stickers for field installs. Accessories — claim puck, leak puck, door puck, mounts — are catalogued separately from companion apps.',
        ],
        links: [
          { label: 'Flash from the browser', href: SITE_LINKS.probeHarborFlash, external: true, note: 'probeharbor.dev/flash' },
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
      `AGPL-licensed library server on .NET 10 and Blazor. Paper books, e-books, and audiobooks as one book each, with a reading log, quotes, loans, and yearly goals; a full-screen page-turning reader, an audiobook player, Kobo and KOReader sync, and books found and fetched the way Sonarr fetches shows; fields of your own and Calibre’s other formats, playlists, casting, and household libraries; shelves read from a photo of the spines, a trash and undo, and a compact view for 70,000 books. Shelf ${VERSIONS.shelf}, one Docker container, SQLite inside (PostgreSQL if wanted).`,
    externalHref: SITE_LINKS.shelfDocs,
    linkLabel: 'Read the docs',
    stack: ['.NET 10', 'ASP.NET Core', 'Blazor', 'EF Core', 'SQLite', 'epub.js', '.NET Aspire', 'Docker', 'Playwright'],
    sections: [
      {
        heading: 'What it is',
        body: [
          'Shelf keeps a household’s books in one place: the copies on paper, the e-books, and the audiobooks, one book at a time. A paperback, its EPUB, and its audiobook are the same book with one reading log, and Continue in the e-book or Continue in the audiobook carries the place across. Each reader signs in to a shelf of their own; no reader sees another’s books, notes, or reading log unless they open their shelf, and even then only the titles.',
          'Good self-hosted book apps already exist, and each is built around one kind of book: Calibre-Web for e-books, Audiobookshelf for audiobooks, Goodreads and StoryGraph for the reading log on someone else’s server. Shelf is for a library that is all of these at once, on your own hardware.',
          'It started in October 2026 as a first project back on current .NET and grew into a full self-hosted library. Shelf 2.0 reorganized it around a Home page that leads with the book you were last in, a library led by covers, and Insights that tell the year’s story; 2.1 through 2.22 followed within a month. It speaks English, Spanish, French, and German.',
        ],
        links: [
          { label: 'Documentation', href: SITE_LINKS.shelfDocs, external: true, note: 'doodersrage.github.io/shelf' },
          { label: 'Running in my homelab', href: SITE_LINKS.shelfLive, external: true, note: 'shelf.robmcd.name' },
          { label: 'Source on GitHub', href: SITE_LINKS.shelfGithub, external: true },
          { label: 'Changelog', href: `${SITE_LINKS.shelfGithub}/blob/main/CHANGELOG.md`, external: true },
        ],
      },
      {
        heading: 'The catalog',
        body: [
          'Series, editions, translators, narrators, where each copy sits, its condition, who recommended it, ratings, reviews, and tags. Add a book from an ISBN typed, scanned with a phone’s camera, or shared from another app; Open Library, Google Books, and Hardcover fill in the details, including series and number. Saved searches, hand-made collections, reading lists shared by link, new books in your series, and duplicates merged in a click.',
          'Tidy up makes one author of names written several ways and takes series out of titles. Insights cover goals for books, pages, and hours, a year of the days you read and listened, milestones, and a picture of the year to share.',
          'Places nest as rooms, bookcases, shelves, and boxes, each with a QR label, and a move is packed and unpacked by scanning. A scanning run reads barcodes one after another, checks a shelf for what is missing, or reads the titles off a photo of the spines with Tesseract and matches them to the catalog. Deleted books wait 30 days in a trash, a change to many books is undone as one, and every book keeps a year of its own history. A compact table holds every match and draws only the lines in view, and Go to (Ctrl K) reaches any page, book, author, series, or place from the keyboard.',
          'Shelf 2.8 through 2.12 grew a reading life around the catalog: rereads that keep every read, a daily reading journal, links between editions and the books that answer them, goals of your own, an Up next queue, Reading DNA, a calendar, a reference desk with citations, rules that act on books as they are added or finished, and plain-language questions answered from your own shelf.',
          'Shelf 2.20 through 2.22 took the best of Calibre: fields of your own (text, number, date, or yes or no) that search, sort, and filter the API, with a Calibre import that brings its custom columns across; other formats kept beside the main e-book, converted by Calibre if you like; downloaded EPUBs that carry Shelf’s details; and a download of the whole library laid out as Calibre lays out its folders.',
        ],
        links: [{ label: 'The library', href: `${SITE_LINKS.shelfDocs}library.html`, external: true }],
      },
      {
        heading: 'Reading and listening',
        body: [
          'EPUBs open in a page-turning reader built on epub.js, as Audiobookshelf’s does: tap, swipe, or use the keys across chapters, with the place kept to the word (an EPUB CFI) so it opens where you stopped on any device. The reader fills the window, with a tap in the middle bringing back the bars, a contents list by the book’s own chapter names, and text settings as taps that come up from the bottom on a phone. PDFs, comics (manga too), and Kindle files read in the browser as well, with highlights, notes, a dictionary, read aloud, a recap when you come back, search inside every book, Tesseract OCR for scanned PDFs, and offline reading.',
          'Audiobooks — one file or a folder of tracks — play as one book with chapters, bookmarks, speeds from 0.5× to 3×, a sleep timer, lock-screen controls, and a mini player that keeps going while you browse. Read-along marks each word of the e-book as the audiobook reads it, podcasts play in the same player, and Audiobookshelf’s phone apps sign in to Shelf as to their own server, with downloads, Android Auto, and CarPlay.',
          'From Audiobookshelf too: playlists that mix audiobooks and podcast episodes, a book shared by a secret link or as a feed for any podcast app, Play on another device to a Chromecast or AirPlay through the browser, listening sessions with what played where and for how long, and recordings downloaded with the book’s details in their files. Each reader keeps a time zone, so an evening’s reading counts on that evening.',
        ],
        links: [
          { label: 'Reading', href: `${SITE_LINKS.shelfDocs}reading.html`, external: true },
          { label: 'Audiobooks', href: `${SITE_LINKS.shelfDocs}audiobooks.html`, external: true },
        ],
      },
      {
        heading: 'Lending and sharing',
        body: [
          'A book can be lent to another reader, who reads or listens with their own place and highlights while the owner’s stay private. Loans have due dates and reminders, readers can open their shelf so others can ask to borrow, children get accounts of their own, and book clubs talk in one place. Household libraries share a collection with chosen readers, who read and listen as if lent, with downloads and books tagged explicit allowed per member. Two shelves on different servers can trade e-books and audiobooks with a key, keeping the furthest place.',
          'Notifications go to a phone or computer, or through ntfy or Gotify, when a book is lent or asked for, a loan is due, a series has a new book, or a club talks; webhooks reach Home Assistant, Discord, and Slack.',
        ],
        links: [
          { label: 'Readers and lending', href: `${SITE_LINKS.shelfDocs}lending.html`, external: true },
          { label: 'Notifications', href: `${SITE_LINKS.shelfDocs}notifications.html`, external: true },
        ],
      },
      {
        heading: 'Bringing books in',
        body: [
          'A new shelf opens on a welcome that asks where your books are now: Audiobookshelf, Calibre, Goodreads or StoryGraph, a folder of files, by hand, or free books from Project Gutenberg and LibriVox. Large imports show their progress on every page and can be stopped, and Shelf can keep in step with an Audiobookshelf library, bringing across what is added there each day.',
          'Find new books searches Open Library for books you don’t have yet and puts them on a want list; follow an author and their new books are offered daily. With Jackett or Prowlarr to search and Deluge, qBittorrent, or SABnzbd to download, Shelf finds and fetches a wanted book the way Sonarr fetches shows, and the finished file lands on the book. For a book with no file, Where to get it points to a free copy, Open Library, WorldCat, or Libby.',
        ],
        links: [{ label: 'Adding books', href: `${SITE_LINKS.shelfDocs}adding.html`, external: true }],
      },
      {
        heading: 'Devices and services',
        body: [
          'Kobo e-readers sync with Shelf as with their own store. KOReader downloads from the OPDS catalog, trades its place with Shelf’s reader to the word, and sends its highlights and reading statistics back. Kindles get books by email and their highlights come across; highlights go to and come from Readwise, and reading status runs both ways with Hardcover.',
        ],
        links: [{ label: 'Devices and services', href: `${SITE_LINKS.shelfDocs}devices.html`, external: true }],
      },
      {
        heading: 'Running it',
        body: [
          'One docker run with a single volume, on amd64 or arm64, so it runs on a Raspberry Pi or a NAS; the first account becomes the admin. Templates cover Unraid, TrueNAS, and CasaOS, and the install guide covers running from source, updating, and putting Shelf on the internet behind a reverse proxy.',
          'Sign-in covers passwords, authenticator codes, passkeys, and OpenID Connect providers such as Authentik, Authelia, Keycloak, or Pocket ID, with an activity log and API tokens for scripts and Home Assistant. Shelf 2.4.1 was a security sweep: addresses readers hand the server can’t reach the local network or a cloud metadata service, reset links only go to the shelf’s own address, and forwarded headers are trusted only from known proxies. Every shelf backs itself up nightly, with copies to a second folder or S3-compatible storage; each backup is read back and proved before it is sent, one book can be brought back from it alone, and a weekly check reads every stored file. Server health shows admins what needs them first.',
          'Shelf 2.15 added Cloudflare Turnstile on sign-in, an admin page in tabs, and account emails in the shelf’s own colours. 2.18 through 2.22 were a reliability and security run: a proved backup before every update, a merge made by mistake that comes apart, restores that bring back collections and loans, single-use two-step codes and passkey challenges, common passwords refused, sign-in that tells no one who has an account, and a recent sign-in required before adding a passkey, a token, or a new email address.',
        ],
        links: [
          { label: 'Install', href: `${SITE_LINKS.shelfDocs}install.html`, external: true },
          { label: 'Configuration', href: `${SITE_LINKS.shelfDocs}configuration.html`, external: true },
          { label: 'Security', href: `${SITE_LINKS.shelfDocs}security.html`, external: true },
          { label: 'Backups', href: `${SITE_LINKS.shelfDocs}backups.html`, external: true },
          { label: 'API', href: `${SITE_LINKS.shelfDocs}api.html`, external: true },
        ],
      },
      {
        heading: 'How it is built',
        body: [
          'ASP.NET Core with Blazor pages and a JSON API (OpenAPI in Development), EF Core migrations on SQLite, epub.js for the reader, and .NET Aspire for local development with logs and traces. Releases follow semantic versioning with a Keep a Changelog file, and publish amd64 and arm64 images to ghcr.io/doodersrage/shelf. Playwright drives the reader, player, lending, offline mode, and an accessibility audit of every page in both themes, in Chromium and Firefox, on each push.',
        ],
        links: [{ label: 'Development', href: `${SITE_LINKS.shelfDocs}development.html`, external: true }],
      },
    ],
  },
  {
    slug: 'printbridge',
    title: 'PrintBridge',
    tagline: 'Drop in a model, get a print. A self-hosted slicer and print host for the Ender-3 V3 SE.',
    description:
      `A small self-hosted web app for a Creality Ender-3 V3 SE. It takes a 3MF, STL, or OBJ, slices it with PrusaSlicer on a built-in V3 SE profile, and sends it to the printer through a Creality Wi-Fi Box, OctoPrint, or Moonraker — with printer controls, spool tracking, calibration prints, and Home Assistant over MQTT. PrintBridge ${VERSIONS.printBridge}, one Docker container.`,
    externalHref: SITE_LINKS.printBridgeGithub,
    linkLabel: 'Source on GitHub',
    stack: ['Python', 'FastAPI', 'PrusaSlicer', 'MQTT', 'Docker', 'Playwright'],
    sections: [
      {
        heading: 'What it is',
        body: [
          'The Ender-3 V3 SE has no network of its own, and Creality’s slicer wants a desktop. PrintBridge is a web page on the home server instead: drop in a model from a phone or laptop, pick a quality and material, and it slices and uploads the G-code to whatever is plugged into the printer’s USB port, then starts the print or just leaves it there.',
          'For the Creality Wi-Fi Box 2.0 it speaks the box’s own LAN protocol — the local API on port 81 for status and control, and FTP onto the box’s microSD card — the same one CrealityPrint uses. OctoPrint and Moonraker (Klipper) work through their REST APIs. It was built and released in a day, from 0.1 to 0.3, and verified on a Wi-Fi Box 2.0 with an Ender-3 V3 SE.',
        ],
        links: [
          { label: 'Source on GitHub', href: SITE_LINKS.printBridgeGithub, external: true },
          { label: 'Changelog', href: `${SITE_LINKS.printBridgeGithub}/blob/main/CHANGELOG.md`, external: true },
        ],
      },
      {
        heading: 'Slicing',
        body: [
          'The built-in profile targets the stock printer: a 220 × 220 × 250 mm bed, a 0.4 mm nozzle, the direct-drive extruder, and a bed that heats fully before homing so the probe measures it hot. Draft, Standard, and Fine in PLA, PETG, or TPU, with per-job infill, supports, brim, temperatures, scale, rotation, copies, and an optional fresh bed probe; saved presets load in one click, and several jobs can be combined onto one bed.',
          'Settings inside a 3MF from Bambu Studio, Orca, Cura, or PrusaSlicer are ignored, so the G-code always matches this printer. Multi-plate 3MFs get a plate picker, and a file made for another printer says so — “made for a Bambu Lab A1 mini”, “scales the model to 80%” — with Use original size to undo it. A 3D view resizes by dimensions and previews the toolpath.',
        ],
      },
      {
        heading: 'At the printer',
        body: [
          'Start, pause, resume, and cancel; preheat, cool down, home, the light, and Live Z babystepping during a print; nozzle and bed temperatures and progress from M73 lines; and a webcam relay. Spool tracking deducts filament after each print and warns before one that won’t fit on what is left. Calibration prints — a temperature tower, retraction test, size check, and first-layer test — save the chosen band to the profile.',
          'Print history keeps totals, success rate, and a cost per print from filament prices. Email notifications carry a picture of the model, and Home Assistant discovers PrintBridge over MQTT with sensors and buttons. Models come in by upload, zip, a link, or a watch folder that slices whatever lands in it, and one click searches Printables, MakerWorld, Thingiverse, MyMiniFactory, and Cults3D.',
        ],
      },
      {
        heading: 'Running it',
        body: [
          'One compose file pulls ghcr.io/doodersrage/printbridge for amd64 or arm64, built on Debian 13 with PrusaSlicer from the Debian archive; settings, jobs, and daily backups live in one volume. 0.3 was a security pass: cross-site writes are refused so another page can’t drive the printer, saved secrets never go back to the browser, link imports can’t reach local or metadata addresses, and zip imports are capped. Playwright tests run against the Docker image in CI before it is published.',
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
          'Prompt Studio is the general-purpose half of what used to be one app. When Castcut narrowed to character films (Cast → Outfit → Day → Cut film), the prompt and image tools that did not belong in a film loop moved here, so people who want a ComfyUI toolbox get one without the film pages.',
          'It picks the workflow, sampler, and size for the model you choose and your GPU, so you spend your time on pictures rather than graphs. Heal & ready checks ComfyUI, maps your models, enables the system workflows, and installs missing node packs.',
        ],
        links: [
          { label: 'Source on GitHub', href: SITE_LINKS.promptStudioAppGithub, external: true },
          { label: 'Castcut write-up', href: '/work/castcut/' },
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
          `Prompt Studio owns its tools: the pages, the API routes only they call, and about 180 components, hooks, and modules moved here from Castcut in October 2026, with their unit and Playwright tests. The shared code — the ComfyUI pipeline, Gallery, settings, and app shell — is published on npm as prompt-studio-core ${VERSIONS.promptStudioCore} and developed in the Castcut repository. A daily workflow installs a newer core when one is published, regenerates the routes, builds, and opens a pull request.`,
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
      'KDE Plasma 6 wallpaper plugin for wallhaven.cc. Search, slideshow, multi-monitor, Ken Burns and parallax motion, lock-screen sync, KRunner, and a D-Bus helper; the API key stays in KWallet.',
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
