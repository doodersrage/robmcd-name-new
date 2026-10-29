export type NowItem = {
  label: string
  detail: string
  href?: string
}

/** Lightweight “what I’m building this month” — edit in place. */
export const NOW = {
  updated: '2026-10-29',
  headline: 'Castcut 3.2, door history for ProbeHarbor, Shelf 2.22, and PrintBridge.',
  items: [
    {
      label: 'Castcut 3.2',
      detail:
        'From screenplay to cut: import a script, render Scenes one take at a time, see the film as a storyboard and animatic, then cut it with sound effects, timed subtitles, and a score. Film Director shows the whole production on one page; finishing tools lip-sync, copy moves from a video, relight, and sharpen any still or clip. Docs on this domain; running at castcut.robmcd.name.',
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
