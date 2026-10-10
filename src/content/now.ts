export type NowItem = {
  label: string
  detail: string
  href?: string
}

/** Lightweight “what I’m building this month” — edit in place. */
export const NOW = {
  updated: '2026-10-10',
  headline: 'Castcut 2.4 talking clips, Prompt Studio on its own, ProbeHarbor, and Shelf.',
  items: [
    {
      label: 'Castcut 2.4',
      detail:
        'Talking clips and two-person conversations on LTX-2.5, auditioned Cast voices, one home and workplace per Cast, and an original score for each cut. Docs on this domain.',
      href: '/castcut/play/day',
    },
    {
      label: 'Prompt Studio',
      detail:
        'The classic prompt and image tools split out of Castcut into their own app, on the shared prompt-studio-core npm package.',
      href: '/work/prompt-studio',
    },
    {
      label: 'ProbeHarbor',
      detail:
        'ThermalTrace is now ProbeHarbor at probeharbor.dev. New: free freeze-night emails for any US ZIP without hardware, and a native iOS app beside Android.',
      href: '/work/probeharbor',
    },
    {
      label: 'Shelf',
      detail:
        'A self-hosted personal library on .NET 10: e-book reader, audiobook player, lending between readers, KOReader sync, and imports from Calibre and Audiobookshelf.',
      href: '/work/shelf',
    },
    {
      label: 'Lasso CRM',
      detail:
        'Concrete CMS 9 package v3.0.1 — Dashboard, Form, Inventory, Appointments, Tracking. Repo: github.com/doodersrage/lasso-crm-concretecms.',
      href: '/work/concrete-cms',
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
