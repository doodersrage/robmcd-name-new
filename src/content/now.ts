export type NowItem = {
  label: string
  detail: string
  href?: string
}

/** Lightweight “what I’m building this month” — edit in place. */
export const NOW = {
  updated: '2026-11-06',
  headline: 'Castcut 3.8, door history for ProbeHarbor, Shelf 2.22, PrintBridge, and two Linux audio apps.',
  items: [
    {
      label: 'Castcut 3.8',
      detail:
        'Whole episodes: write one from a premise scene by scene, run the script keeping each Scene’s best take by its checks, and cut a half-hour film in pieces with music by scene and Foley. New clip tools restyle a clip, remove or replace something in it, or change the place behind the people, and a motion brush moves a still along strokes you draw. Cut gains trailers, a press kit, a colour script, and continuity reports. Docs on this domain; running at castcut.robmcd.name.',
      href: '/castcut/play/day/',
    },
    {
      label: 'Prompt Studio',
      detail:
        'The classic prompt and image tools now live entirely in their own app — pages, routes, and tests moved out of Castcut — on prompt-studio-core 3 from npm.',
      href: '/work/prompt-studio/',
    },
    {
      label: 'ProbeHarbor',
      detail:
        'Door history: every opening with how long it lasted and what the temperature did, shaded on the charts, plus a “door open longer than N minutes” alert. The site now speaks Spanish, French, German, and Portuguese, alerts follow your °C or °F, and a round of security work hashes share and invite links. ESP32 sensors still flash straight from the browser at probeharbor.dev/flash.',
      href: '/work/probeharbor/',
    },
    {
      label: 'Shelf',
      detail:
        'Shelf 2.22: fields of your own with Calibre’s custom columns imported, other formats beside each e-book, playlists, casting to Chromecast or AirPlay, household libraries, and a proved backup before every update. Docs at doodersrage.github.io/shelf.',
      href: '/work/shelf/',
    },
    {
      label: 'PrintBridge',
      detail:
        'New: a self-hosted slicer and print host for my Ender-3 V3 SE. Drop in a model, PrusaSlicer slices it, and it goes to the printer through the Creality Wi-Fi Box, OctoPrint, or Moonraker. 0.3 adds a watch folder and daily backups.',
      href: '/work/printbridge/',
    },
    {
      label: 'Linux audio apps',
      detail:
        'Two small apps for hardware whose makers only ship Windows or macOS software. fiio-k7-linux (k7ctl 0.4) gets bit-perfect playback out of the FiiO K7 on PipeWire and adds headphone EQ and crossfeed. btwctl 0.9 controls the Creative BT-W5 and BT-W6 Bluetooth dongles: aptX mode, headset mic, and pairing. Both have a settings window, tray icon, and CLI.',
      href: 'https://github.com/doodersrage/fiio-k7-linux',
    },
    {
      label: 'Lasso CRM',
      detail:
        'Concrete CMS 9 package v3.0.1 — Dashboard, Form, Inventory, Appointments, Tracking. Repo: github.com/doodersrage/lasso-crm-concretecms.',
      href: '/work/concrete-cms/',
    },
    {
      label: 'robmcd.name',
      detail: 'Astro on Cloudflare Workers: hire, notes, tools, status, and product write-ups.',
      href: '/',
    },
  ] satisfies NowItem[],
  notDoing: [
    'Generic SaaS marketing pages',
    'A CMS until note volume actually hurts',
    'Nav clutter for pages that belong in the footer',
  ],
}
