import { buildSectionIndexPages, setDocPages } from './helpers'
import { gettingStartedPages } from './sections/getting-started'
import { hubPages } from './sections/hub'
import { integrationPages } from './sections/integration'
import { introductionPages } from './sections/introduction'
import { playPages } from './sections/play'
import { storiesPages } from './sections/stories'

const DOC_LEAF_PAGES = [
  ...storiesPages,
  ...hubPages,
  ...introductionPages,
  ...gettingStartedPages,
  ...playPages,
  ...integrationPages,
]

/** Documentation pages for Castcut (includes section index landings for breadcrumbs). */
export const DOC_PAGES = [...DOC_LEAF_PAGES, ...buildSectionIndexPages(DOC_LEAF_PAGES)]

setDocPages(DOC_PAGES)

export {
  CPS_GITHUB,
  CPS_LIVE,
  DOCS_BASE_PATH,
  LEGACY_DOCS_BASE_PATH,
  getAllPages,
  getPageBySlug,
  getSections,
  slugKey,
  slugToPath,
} from './helpers'
