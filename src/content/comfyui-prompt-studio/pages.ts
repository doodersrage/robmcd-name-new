import { buildSectionIndexPages, setDocPages } from './helpers'
import { characterPages } from './sections/character'
import { formatAndLintPages } from './sections/format-and-lint'
import { galleryPages } from './sections/gallery'
import { generatePages } from './sections/generate'
import { gettingStartedPages } from './sections/getting-started'
import { hubPages } from './sections/hub'
import { imageToolsPages } from './sections/image-tools'
import { integrationPages } from './sections/integration'
import { introductionPages } from './sections/introduction'
import { mediaPages } from './sections/media'
import { modelsPages } from './sections/models'
import { playPages } from './sections/play'
import { storiesPages } from './sections/stories'
import { studioPages } from './sections/studio'

const DOC_LEAF_PAGES = [
  ...storiesPages,
  ...hubPages,
  ...introductionPages,
  ...gettingStartedPages,
  ...generatePages,
  ...formatAndLintPages,
  ...characterPages,
  ...playPages,
  ...imageToolsPages,
  ...mediaPages,
  ...studioPages,
  ...galleryPages,
  ...modelsPages,
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
