/** WordPress plugins — GitHub first; add wordpress.org URLs when published. */

export type WordPressListing = {
  id: string
  title: string
  slug?: string
  blurb: string
  github: string
  /** wordpress.org plugin directory URL when listed */
  directory?: string
  /** Plugin version string when known, e.g. "1.1.0" */
  version?: string
  compatibility: string
  status: 'github' | 'directory' | 'legacy'
}

export const WORDPRESS_LISTINGS: WordPressListing[] = [
  {
    id: 'inkbound',
    title: 'Inkbound',
    slug: 'inkbound',
    version: '1.0.0',
    blurb:
      'Serialized fiction / web-novel layer for WordPress: stories with numbered chapters (prologue/interlude labels, author’s notes, TOC, add-next-chapter), reader follows and guest email subscribe, on-site update inbox plus chapter mail (full text or excerpt), reading progress and Continue reading for guests and accounts, catalog and paper/sepia/night reader. Not a blog theme — the chapter desk Royal Road / Substack users expect.',
    github: 'https://github.com/doodersrage/inkbound',
    compatibility: 'WordPress 6.4+ · PHP 8.1+ · tested to 7.1',
    status: 'github',
  },
  {
    id: 'volunteer-impact-tracker',
    title: 'Volunteer Impact Tracker',
    slug: 'volunteer-impact-tracker',
    version: '1.1.3',
    blurb:
      'Nonprofit hours after the shift: opportunities CPT; admin add/edit with search and pagination; front-end self-report plus [vit_my_hours]; pending queue with bulk approve/reject; email alerts and certificate delivery; reports with in-kind totals and CSV; signed certificates; dashboard widget; grant Volunteers access to other roles. Intentionally narrow — not donations, events, or membership.',
    github: 'https://github.com/doodersrage/volunteer-impact-tracker',
    compatibility: 'WordPress 6.2+ · PHP 7.4+ · tested to 7.1',
    status: 'github',
  },
  {
    id: 'oral-history-archive',
    title: 'Oral History Archive',
    slug: 'oral-history-archive',
    version: '1.0.3',
    blurb:
      'Interviews as finding-aid records, not podcast episodes: narrator/interviewer, accession numbers, timed tape logs, and consent that can withhold audio while still listing the conversation. Open / restricted / embargoed rights; reading-room frontend with synced transcript; [oha_clip] for time-range quotes. Restricted interviews never print the audio URL in public HTML.',
    github: 'https://github.com/doodersrage/oral-history-archive',
    compatibility: 'WordPress 6.4+ · PHP 8.0+ · tested to 7.1',
    status: 'github',
  },
  {
    id: 'public-shop-floor',
    title: 'Public Shop Floor',
    slug: 'public-shop-floor',
    version: '1.0.0',
    blurb:
      'WooCommerce made-to-order floor: flag a product, paid orders open a job ticket (PSF-####), public board at /shop-floor/ shows station and place in line without customer names, merchant kanban advances or holds jobs. Configurable stations (default Mill → Joinery → Finish → Packed). Not shipment tracking — the board is the benches.',
    github: 'https://github.com/doodersrage/public-shop-floor',
    compatibility: 'WordPress 6.4+ · PHP 8.0+ · WooCommerce 8.2+ · tested to 7.1',
    status: 'github',
  },
  {
    id: 'file-group-shortcode',
    title: 'File Groups Shortcode',
    slug: 'wordpress-file-group-shortcode',
    blurb:
      'Modified File Groups plugin with shortcode support for embedding file groups in content.',
    github: 'https://github.com/doodersrage/wordpress-file-group-shortcode',
    compatibility: 'WordPress (legacy fork)',
    status: 'legacy',
  },
]

export const WORDPRESS_STATUS_LABEL: Record<WordPressListing['status'], string> = {
  github: 'GitHub',
  directory: 'WordPress.org',
  legacy: 'Legacy',
}
