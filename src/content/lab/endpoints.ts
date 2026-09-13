export type LabEndpointGroup = 'products' | 'homelab'

export type LabEndpoint = {
  id: string
  name: string
  href: string
  blurb: string
  group: LabEndpointGroup
}

export const LAB_ENDPOINT_GROUP_LABEL: Record<LabEndpointGroup, string> = {
  products: 'Products & site',
  homelab: 'Homelab',
}

/** Public systems probed on /status (products first, then homelab). */
export const LAB_ENDPOINTS: LabEndpoint[] = [
  {
    id: 'robmcd',
    name: 'robmcd.name',
    href: 'https://robmcd.name/',
    blurb: 'This site (Astro on Cloudflare Workers)',
    group: 'products',
  },
  {
    id: 'thermaltrace',
    name: 'ThermalTrace',
    href: 'https://thermaltrace.dev/',
    blurb: 'Freeze / flood monitoring product',
    group: 'products',
  },
  {
    id: 'castcut-docs',
    name: 'Castcut docs',
    href: 'https://doodersrage.github.io/castcut/',
    blurb: 'Operator docs on GitHub Pages',
    group: 'products',
  },
  {
    id: 'audiobookshelf',
    name: 'AudioBookShelf',
    href: 'https://audiobookshelf.robmcd.name',
    blurb: 'Personal audiobook library',
    group: 'homelab',
  },
  {
    id: 'jellyfin',
    name: 'Jellyfin',
    href: 'https://jellyfin.robmcd.name/',
    blurb: 'Media server',
    group: 'homelab',
  },
  {
    id: 'seer',
    name: 'Seer',
    href: 'https://ov.robmcd.name',
    blurb: 'Overseerr-style requests',
    group: 'homelab',
  },
  {
    id: 'plex',
    name: 'Plex',
    href: 'https://plex.robmcd.name',
    blurb: 'Plex media',
    group: 'homelab',
  },
  {
    id: 'romm',
    name: 'Romm',
    href: 'https://romm.robmcd.name',
    blurb: 'ROM library',
    group: 'homelab',
  },
]
