/** Concrete CMS packages — mirrored from community profile + GitHub. */

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
  compatibility: string
  status: 'available' | 'github' | 'legacy'
}

export const CONCRETE_CMS_LISTINGS: ConcreteCmsListing[] = [
  {
    id: 'community-store-affirm',
    title: 'Community Store Affirm',
    handle: 'community_store_affirm',
    blurb:
      'Affirm payment method for Community Store on Concrete CMS 9 — live/test modes, Affirm.js v2 checkout modal, and promotional messaging on product and cart pages.',
    github: 'https://github.com/doodersrage/community_store_affirm',
    compatibility: 'Concrete CMS 9 · Community Store 2+',
    status: 'available',
  },
  {
    id: 'date-counter',
    title: 'Date Counter',
    handle: 'date_counter',
    blurb:
      'Countdown block to a selected date and time, with end message, cache-friendly client timer, and custom templates (Cards, Compact, Digital, Hero, Minimal, Stacked).',
    github: 'https://github.com/doodersrage/ConcreteCMS-Date-Time-Countdown',
    compatibility: 'Concrete CMS 9.0+',
    status: 'available',
  },
  {
    id: 'page-list-map',
    title: 'Page List Map',
    handle: 'page_list_map',
    blurb:
      'Google Maps custom templates for the Page List block. Map pages that have a location address — properties, stores, offices, events — with filterable category/status attributes.',
    github: 'https://github.com/doodersrage/page_list_map',
    compatibility: 'Concrete CMS 9.0+ · Google Maps + Geocoding APIs',
    status: 'available',
  },
  {
    id: 'rts-cinema-source',
    title: 'RTS Cinema Source',
    handle: 'rts_cinema_source',
    blurb:
      'Blocks and checkout for Cinema Source (Webedia) showtimes and RTS POS online ticketing — listings, movie detail, and Bootstrap 5 modal checkout under one frontend namespace.',
    github: 'https://github.com/doodersrage/concrete-cms-rts-cinemasource-blocks',
    compatibility: 'Concrete CMS 9',
    status: 'available',
  },
  {
    id: 'lasso-crm',
    title: 'Lasso CRM Form',
    handle: 'lasso_crm',
    blurb:
      'Block that submits registrant leads to Lasso CRM via REST — API key, optional thank-you redirect, email template, and “how did you hear” question answers.',
    github: 'https://github.com/doodersrage/lasso-crm-concrete5-block',
    compatibility: 'Concrete CMS 9',
    status: 'available',
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
  available: 'CMS 9',
  github: 'GitHub',
  legacy: 'Legacy',
}
