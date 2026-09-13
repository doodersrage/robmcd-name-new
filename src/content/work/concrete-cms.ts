/** Concrete CMS packages — marketplace + GitHub. Add marketplace URLs as products go live. */

export const CONCRETE_CMS_PROFILE =
  'https://community.concretecms.com/members/profile/103041'

export const CONCRETE_CMS_MARKET =
  'https://market.concretecms.com/addons'

export type ConcreteCmsListing = {
  id: string
  title: string
  handle?: string
  blurb: string
  github: string
  /** Official marketplace product URL when known */
  marketplace?: string
  /** Self-hosted list price string from marketplace, e.g. "$35" */
  price?: string
  /** Package version string when known, e.g. "3.0.1" */
  version?: string
  compatibility: string
  status: 'marketplace' | 'github' | 'legacy'
}

export const CONCRETE_CMS_LISTINGS: ConcreteCmsListing[] = [
  {
    id: 'page-list-map',
    title: 'Page List Map',
    handle: 'page_list_map',
    blurb:
      'Google Maps Page List templates for Concrete CMS 9. Map properties, stores, offices, or events with filters, five layouts (sidebar, map-only, stacked, cards, drawer), Advanced Markers, and dashboard API/label settings.',
    github: 'https://github.com/doodersrage/page_list_map',
    marketplace:
      'https://market.concretecms.com/products/page-list-map/9bf1cd66-abcb-11f1-b89e-0e1cf28cdc53',
    price: '$35',
    compatibility: 'Concrete CMS 9.0+ · Maps JavaScript + Geocoding APIs',
    status: 'marketplace',
  },
  {
    id: 'date-counter',
    title: 'Date Counter',
    handle: 'date_counter',
    blurb:
      'Live countdown block for launches, events, and deadlines. Target date/time, optional end message, six templates (Cards, Compact, Digital, Hero, Minimal, Stacked), vanilla JS, cache-friendly output.',
    github: 'https://github.com/doodersrage/ConcreteCMS-Date-Time-Countdown',
    marketplace:
      'https://market.concretecms.com/products/date-counter/d274f059-abc2-11f1-b89e-0e1cf28cdc53',
    price: '$10',
    compatibility: 'Concrete CMS 9.0+',
    status: 'marketplace',
  },
  {
    id: 'community-store-affirm',
    title: 'Community Store Affirm',
    handle: 'community_store_affirm',
    blurb:
      'Affirm payment method for Community Store on Concrete CMS 9 — live/test modes, Affirm.js v2 checkout modal, and promotional messaging on product and cart pages.',
    github: 'https://github.com/doodersrage/community_store_affirm',
    compatibility: 'Concrete CMS 9 · Community Store 2+',
    status: 'github',
  },
  {
    id: 'rts-cinema-source',
    title: 'RTS Cinema Source',
    handle: 'rts_cinema_source',
    blurb:
      'Blocks and checkout for Cinema Source (Webedia) showtimes and RTS POS online ticketing — listings, movie detail, and Bootstrap 5 modal checkout under one frontend namespace.',
    github: 'https://github.com/doodersrage/concrete-cms-rts-cinemasource-blocks',
    compatibility: 'Concrete CMS 9',
    status: 'github',
  },
  {
    id: 'lasso-crm',
    title: 'Lasso CRM',
    handle: 'lasso_crm',
    version: '3.0.1',
    blurb:
      'Lasso CRM for Concrete CMS 9: Dashboard settings with Test Connection, lead Form, Inventory, Appointments, and Website Tracking. Shared package API key with optional per-block overrides for multi-project sites.',
    github: 'https://github.com/doodersrage/lasso-crm-concretecms',
    compatibility: 'Concrete CMS 9.0+ · Lasso CRM API v1',
    status: 'github',
  },
  {
    id: 'formwork',
    title: 'Formwork',
    handle: 'formwork',
    blurb:
      'Appointment and resource booking for Concrete CMS 9 — resources, services, availability rules, Booking Calendar block, and conflict-safe slot booking.',
    github: 'https://github.com/doodersrage/formwork-concretecms',
    compatibility: 'Concrete CMS 9',
    status: 'github',
  },
  {
    id: 'background-selector',
    title: 'Background Selector',
    handle: 'background_selector',
    blurb: 'Background image selector block for Concrete 5.6 and earlier sites still in production.',
    github: 'https://github.com/doodersrage/Concrete5-background-selector-block',
    compatibility: 'Concrete 5.6 and below',
    status: 'legacy',
  },
  {
    id: 'recaptcha-v2',
    title: 'reCAPTCHA v2 (5.6)',
    handle: 'recaptcha',
    blurb: 'Concrete 5.6 captcha module updated for Google reCAPTCHA v2.',
    github: 'https://github.com/doodersrage/concrete56-recaptchav2',
    compatibility: 'Concrete 5.6',
    status: 'legacy',
  },
]

export const CONCRETE_CMS_STATUS_LABEL: Record<ConcreteCmsListing['status'], string> = {
  marketplace: 'Marketplace',
  github: 'GitHub',
  legacy: 'Legacy',
}
