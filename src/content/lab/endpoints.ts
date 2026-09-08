export type LabEndpoint = {
  id: string
  name: string
  href: string
  blurb: string
}

/** Homelab / public systems listed on /homelab and probed on /status. */
export const LAB_ENDPOINTS: LabEndpoint[] = [
  {
    id: 'audiobookshelf',
    name: 'AudioBookShelf',
    href: 'https://audiobookshelf.robmcd.name',
    blurb: 'Personal audiobook library',
  },
  {
    id: 'jellyfin',
    name: 'Jellyfin',
    href: 'https://jellyfin.robmcd.name/',
    blurb: 'Media server',
  },
  {
    id: 'seer',
    name: 'Seer',
    href: 'https://ov.robmcd.name',
    blurb: 'Overseerr-style requests',
  },
  {
    id: 'plex',
    name: 'Plex',
    href: 'https://plex.robmcd.name',
    blurb: 'Plex media',
  },
  {
    id: 'romm',
    name: 'Romm',
    href: 'https://romm.robmcd.name',
    blurb: 'ROM library',
  },
]
