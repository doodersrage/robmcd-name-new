/** WordPress plugins — GitHub first; add wordpress.org URLs when published. */

export type WordPressListing = {
  id: string
  title: string
  slug?: string
  blurb: string
  github: string
  /** wordpress.org plugin directory URL when listed */
  directory?: string
  compatibility: string
  status: 'github' | 'directory' | 'legacy'
}

export const WORDPRESS_LISTINGS: WordPressListing[] = [
  {
    id: 'volunteer-impact-tracker',
    title: 'Volunteer Impact Tracker',
    slug: 'volunteer-impact-tracker',
    blurb:
      'Nonprofit volunteer hours after the shift: opportunities CPT, admin + front-end self-report logging, pending approvals, grant-ready reports with in-kind dollar estimates, CSV export, and signed printable certificates. Intentionally narrow — not donations, events, or membership.',
    github: 'https://github.com/doodersrage/volunteer-impact-tracker',
    compatibility: 'WordPress 6.0+ · PHP 7.4+',
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
