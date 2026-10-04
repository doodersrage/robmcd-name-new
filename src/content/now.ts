export type NowItem = {
  label: string
  detail: string
  href?: string
}

/** Lightweight “what I’m building this month” — edit in place. */
export const NOW = {
  updated: '2026-10-04',
  headline: 'Castcut 2.2 film loop, ThermalTrace forecast and integrations.',
  items: [
    {
      label: 'Castcut 2.2',
      detail:
        'Pose editor, per-look outfits, Qwen-Image 2.1 and LTX-2.5, plus optional Castcut nodes on the Comfy Registry. Docs on this domain.',
      href: '/castcut/play/day',
    },
    {
      label: 'ThermalTrace',
      detail:
        'Freeze, heat, and flood alerts at thermaltrace.dev, with a public pipe-freeze forecast, embeddable freeze map, and Node-RED / Influx / Matter hooks.',
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
