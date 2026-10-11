export type NowItem = {
  label: string
  detail: string
  href?: string
}

/** Lightweight “what I’m building this month” — edit in place. */
export const NOW = {
  updated: '2026-10-11',
  headline: 'Castcut 2.6 cuts, Prompt Studio on its own, ProbeHarbor, and Shelf.',
  items: [
    {
      label: 'Castcut 2.6',
      detail:
        'Preview the cut and the mix before encoding, trim clips, frame stills waist- or chest-up, cut square or 1080p, and re-cut any film in another shape. Talking clips get room sound and settle from a mid-movement still. Docs on this domain; running at castcut.robmcd.name.',
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
        'Shelf 2.5: a full-screen page-turning reader, find and fetch books the way Sonarr does, follow authors for their new books, and keep in step with Audiobookshelf. Docs at doodersrage.github.io/shelf.',
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
