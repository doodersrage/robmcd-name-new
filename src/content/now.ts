export type NowItem = {
  label: string
  detail: string
  href?: string
}

/** Lightweight “what I’m building this month” — edit in place. */
export const NOW = {
  updated: '2026-10-14',
  headline: 'Castcut 2.9, a browser flasher for ProbeHarbor, Shelf 2.14, and PrintBridge.',
  items: [
    {
      label: 'Castcut 2.9',
      detail:
        'Cast homes keep marks, props, people, and a wardrobe, checked and repaired on every still; films get narration, close-ups, widescreen, “Previously on”, and expiring review links; a Fountain script imports into Day; and Export for an editor writes an FCPXML timeline for Resolve, Premiere, or Final Cut. Next: outfits in 3D. Docs on this domain; running at castcut.robmcd.name.',
      href: '/castcut/play/day/',
    },
    {
      label: 'Prompt Studio',
      detail:
        'The classic prompt and image tools split out of Castcut into their own app, on the shared prompt-studio-core npm package.',
      href: '/work/prompt-studio/',
    },
    {
      label: 'ProbeHarbor',
      detail:
        'Flash an ESP32 freeze sensor straight from the browser at probeharbor.dev/flash — DS18B20, DHT22, I²C air sensors, leak, door, and battery, no IDE. Alerts now say when things recover, catch stuck probes and power loss, and a sensor can be replaced without losing its history.',
      href: '/work/probeharbor/',
    },
    {
      label: 'Shelf',
      detail:
        'Shelf 2.14: shelves read from a photo of the spines, nested places and moving house by scanning, a trash and undo, rereads and a reading journal, Go to (Ctrl K), and a compact table for 70,000 books. Docs at doodersrage.github.io/shelf.',
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
