/**
 * Castcut doc pages retired from robmcd.name (October 2026). Tools that moved to Prompt Studio
 * go to its write-up; reference pages go to the matching page of the official docs site,
 * which is kept with the code. Keys are paths under /castcut/ without slashes at the ends.
 */
const PROMPT_STUDIO = '/work/prompt-studio/'
const DOCS_SITE = 'https://doodersrage.github.io/castcut'

const TO_PROMPT_STUDIO = [
  'stories/case-study',
  'generate',
  'generate/overview',
  'generate/sport-presets',
  'generate/model-picker',
  'generate/detail-levels',
  'format-and-lint',
  'format-and-lint/format',
  'format-and-lint/lint',
  'format-and-lint/negative',
  'format-and-lint/readiness',
  'character/pet-fantasy',
  'character/background-topics',
  'image-tools/image-to-prompt',
  'image-tools/controlnet',
  'image-tools/variations-matrix',
  'media',
  'media/audio',
  'media/mesh-3d',
  'media/workflow-editor',
  'studio',
  'studio/history-lineage',
  'studio/compare-portfolio',
  'studio/templates-presets',
  'studio/analytics-experiments',
  'studio/campaigns-scheduled',
]

const TO_DOCS_SITE: Record<string, string> = {
  'format-and-lint/refine': 'features/',
  character: 'features/',
  'character/character-tool': 'features/',
  'character/scene-compose': 'features/',
  'image-tools': 'features/',
  'image-tools/inpaint-outpaint': 'features/',
  'image-tools/compose-transfer': 'features/',
  'media/video': 'features/',
  gallery: 'features/',
  'gallery/gallery-overview': 'features/',
  'gallery/review-mode': 'features/',
  'gallery/compare-mutate': 'features/',
  'gallery/queue-orchestration': 'features/',
  'gallery/export-backup': 'operator/',
  models: 'models/',
  'models/model-families': 'models/',
  'models/flux-sdxl': 'models/',
  'models/qwen-edit': 'models/',
  'models/video-audio-architectures': 'models/',
  'getting-started/environment': 'configuration/',
  'getting-started/docker': 'install/',
  'getting-started/comfyui-nodes': 'workflow-takeover/',
  'integration/workflow-takeover': 'workflow-takeover/',
  'integration/cloud-engines': 'configuration/',
  'integration/http-api': 'http-api/',
}

/** On-site moves: a retired page whose topic now has its own page here. */
const ON_SITE: Record<string, string> = {
  'character/wardrobe-catalog': '/castcut/play/outfit/',
}

/** Where a retired /castcut/... page now lives, or null when the page is current. */
export function retiredDocTarget(rest: string): string | null {
  const key = rest.replace(/^\/+|\/+$/g, '')
  if (ON_SITE[key]) return ON_SITE[key]
  if (TO_PROMPT_STUDIO.includes(key)) return PROMPT_STUDIO
  if (TO_DOCS_SITE[key]) return `${DOCS_SITE}/${TO_DOCS_SITE[key]}`
  return null
}
