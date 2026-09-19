export type NowItem = {
  label: string
  detail: string
  href?: string
}

/** Lightweight “what I’m building this month” — edit in place. */
export const NOW = {
  updated: '2026-09-19',
  headline: 'Castcut 2.0 film loop, ThermalTrace companions + integrations.',
  items: [
    {
      label: 'Castcut 2.0',
      detail:
        'Identity-ready film loop — Cast → Look → Outfit → Day → Story. Docs on this domain; upstream at github.com/doodersrage/castcut.',
      href: '/castcut',
    },
    {
      label: 'ThermalTrace',
      detail:
        'Product at thermaltrace.dev — ingest, alerts, Desktop/Android/Bay Buddy companions, Matter + HACS integrations, claim puck accessory. Protocol kit mirrored here.',
      href: '/work/thermaltrace',
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
