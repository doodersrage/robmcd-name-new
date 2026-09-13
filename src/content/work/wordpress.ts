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
    compatibility: 'WordPress 6.4+ · PHP 8.1+ · tested to 6.8',
    status: 'github',
  },
  {
    id: 'volunteer-impact-tracker',
    title: 'Volunteer Impact Tracker',
    slug: 'volunteer-impact-tracker',
    version: '1.1.0',
    blurb:
      'Nonprofit hours after the shift: opportunities CPT; admin add/edit with search and pagination; front-end self-report plus [vit_my_hours]; pending queue with bulk approve/reject; email alerts and certificate delivery; reports with in-kind totals and CSV; signed certificates; dashboard widget; grant Volunteers access to other roles. Intentionally narrow — not donations, events, or membership.',
    github: 'https://github.com/doodersrage/volunteer-impact-tracker',
    compatibility: 'WordPress 6.0+ · PHP 7.4+ · tested to 6.7',
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
