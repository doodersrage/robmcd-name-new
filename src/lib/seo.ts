import {
  SITE_DESCRIPTION,
  SITE_LINKS,
  SITE_NAME,
  SITE_OWNER,
  SITE_TAGLINE,
  SITE_URL,
} from '@/lib/site'

export type JsonLd = Record<string, unknown> | Record<string, unknown>[]

const ABS = (pathOrUrl: string) =>
  pathOrUrl.startsWith('http') ? pathOrUrl : new URL(pathOrUrl, SITE_URL).toString()

export const DEFAULT_OG_IMAGE = ABS('/og/default.png')

export const SITE_LINKEDIN = 'https://www.linkedin.com/in/robertsmcdowell/'

export function personSchema(): Record<string, unknown> {
  return {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: SITE_OWNER,
    url: SITE_URL,
    jobTitle: 'Full-stack engineer',
    description: SITE_DESCRIPTION,
    image: ABS('/about/robert-mcdowell.jpg'),
    knowsAbout: [
      'Legacy modernization',
      'Linux server administration',
      'Windows server administration',
      'Database administration',
      'SEO',
      'AEO',
      'Google Analytics',
      'Next.js',
      'Astro',
      'ComfyUI tooling',
      'IoT monitoring',
    ],
    sameAs: [SITE_LINKS.github, SITE_LINKEDIN, SITE_LINKS.thermalTrace],
  }
}

export function websiteSchema(): Record<string, unknown> {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: 'en-US',
    publisher: { '@id': `${SITE_URL}/#person` },
    about: { '@id': `${SITE_URL}/#person` },
  }
}

export function homeGraph(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': [websiteSchema(), personSchema()],
  }
}

export function aboutPageSchema(faqs?: { question: string; answer: string }[]): Record<string, unknown> {
  const graph: Record<string, unknown>[] = [
    personSchema(),
    {
      '@type': 'AboutPage',
      '@id': `${SITE_URL}/about#page`,
      url: `${SITE_URL}/about`,
      name: `About ${SITE_OWNER}`,
      description:
        'Robert McDowell, full-stack engineer since 2006. Legacy modernization, servers and databases, SEO/AEO, LLM Prompt Studio, and ThermalTrace.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      mainEntity: { '@id': `${SITE_URL}/#person` },
    },
  ]

  if (faqs?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/about#faq`,
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    })
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}

export function breadcrumbSchema(items: { name: string; path: string }[]): Record<string, unknown> {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: ABS(item.path),
    })),
  }
}

export function softwareApplicationSchema(opts: {
  name: string
  description: string
  url: string
  codeRepository?: string
  applicationCategory?: string
  offersUrl?: string
  sameAs?: string[]
}): Record<string, unknown> {
  return {
    '@type': 'SoftwareApplication',
    name: opts.name,
    description: opts.description,
    url: ABS(opts.url),
    applicationCategory: opts.applicationCategory ?? 'DeveloperApplication',
    operatingSystem: 'Cross-platform',
    author: { '@id': `${SITE_URL}/#person` },
    ...(opts.codeRepository ? { codeRepository: opts.codeRepository, license: 'https://opensource.org/licenses/MIT' } : {}),
    ...(opts.offersUrl
      ? {
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            url: ABS(opts.offersUrl),
          },
        }
      : {}),
    ...(opts.sameAs?.length ? { sameAs: opts.sameAs } : {}),
  }
}

export function workCaseStudySchema(opts: {
  title: string
  description: string
  path: string
  software?: Record<string, unknown>
}): Record<string, unknown> {
  const graph: Record<string, unknown>[] = [
    personSchema(),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Work', path: '/work' },
      { name: opts.title, path: opts.path },
    ]),
    {
      '@type': 'Article',
      '@id': ABS(`${opts.path}#article`),
      headline: opts.title,
      description: opts.description,
      author: { '@id': `${SITE_URL}/#person` },
      publisher: { '@id': `${SITE_URL}/#person` },
      mainEntityOfPage: ABS(opts.path),
      ...(opts.software ? { about: { '@id': `${ABS(opts.path)}#software` } } : {}),
    },
  ]

  if (opts.software) {
    graph.push({ ...opts.software, '@id': `${ABS(opts.path)}#software` })
  }

  return { '@context': 'https://schema.org', '@graph': graph.filter(Boolean) }
}

export function itemListSchema(
  name: string,
  description: string,
  items: { name: string; path: string; description: string }[],
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: `${SITE_URL}/work`,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        description: item.description,
        url: ABS(item.path),
      })),
    },
  }
}

export { SITE_TAGLINE }
