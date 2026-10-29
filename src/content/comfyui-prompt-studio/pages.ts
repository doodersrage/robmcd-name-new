import { buildSectionIndexPages, setDocPages } from './helpers'
import type { DocBlock, DocPage } from './types'
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

/** Pages for tools that moved out of Castcut into Prompt Studio (Castcut 2.11+). */
const PROMPT_STUDIO_PAGES = new Set([
  'generate/overview',
  'generate/sport-presets',
  'generate/model-picker',
  'generate/detail-levels',
  'format-and-lint/format',
  'format-and-lint/lint',
  'format-and-lint/negative',
  'format-and-lint/readiness',
  'character/pet-fantasy',
  'character/background-topics',
  'image-tools/image-to-prompt',
  'image-tools/controlnet',
  'image-tools/variations-matrix',
  'media/audio',
  'media/mesh-3d',
  'media/workflow-editor',
  'studio/history-lineage',
  'studio/compare-portfolio',
  'studio/templates-presets',
  'studio/analytics-experiments',
  'studio/campaigns-scheduled',
])

const PROMPT_STUDIO_NOTE: DocBlock = {
  type: 'callout',
  variant: 'info',
  title: 'Now in Prompt Studio',
  text: 'This tool moved out of Castcut in October 2026 and ships in Prompt Studio (github.com/doodersrage/prompt-studio), on the shared prompt-studio-core package. Castcut keeps the film loop. This page stays as a reference for the tool.',
}

function markPromptStudio(pages: DocPage[]): DocPage[] {
  return pages.map((doc) =>
    PROMPT_STUDIO_PAGES.has(doc.slug.join('/')) ? { ...doc, blocks: [PROMPT_STUDIO_NOTE, ...doc.blocks] } : doc,
  )
}

const DOC_LEAF_PAGES = markPromptStudio([
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
])

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
