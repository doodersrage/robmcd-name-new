import { DOCS_BASE_PATH, GH, LIVE, p, page } from '../helpers'
import { SITE_LINKS } from '@/lib/site'

export const integrationPages = [
  page(
    ['integration', 'workflow-takeover'],
    'Workflow takeover',
    'Live prompt injection at ComfyUI queue time.',
    'Integration',
    49,
    [
      ...p(
        'Workflow takeover replaces static CLIP text with live Castcut values when a job reaches the ComfyUI queue — no graph rebuild between iterations. Custom nodes under `comfyui/comfyui_image_prompt_tools/` poll or receive updates; enable per-workflow in Settings before sending.',
        'Inpaint and Outpaint substitute `{{INPUT_IMAGE}}` and `{{MASK_IMAGE}}` at queue time. Audio jobs replace `{{AUDIO_SECONDS}}`. Confirm target workflow ID, preview prompt diff, and rate-limit API calls to ComfyUI on shared hosts. Cloud-engine queues (Fal, Replicate, etc.) do not use workflow takeover — they call provider APIs directly.',
      ),
      { type: 'h2', text: 'Safety checklist' },
      {
        type: 'ul',
        items: [
          'Confirm target workflow ID matches imported library graph',
          'Preview diff before apply on production graphs',
          'Verify ComfyUI probe green in Settings → ComfyUI',
          'Use Draft quality for takeover debugging, Final for delivery',
        ],
      },
      { type: 'interactive-slot' },
      {
        type: 'links',
        items: [{ label: 'workflow-takeover.md', href: `${GH}/blob/main/docs/workflow-takeover.md`, external: true }],
      },
    ],
    { interactive: 'workflow-pipeline', related: ['getting-started/comfyui-nodes', 'integration/castcut-nodes', 'gallery/queue-orchestration'] },
  ),

  page(
    ['integration', 'castcut-nodes'],
    'Castcut nodes',
    'Optional ComfyUI pack that runs Best of two and cut-outs inside the render job.',
    'Integration',
    49.5,
    [
      ...p(
        'Castcut nodes (`doodersrage/castcut-nodes`, registry pack 1.1.0) are optional. The film loop runs without them. With the pack installed, Day’s Best of two for a hard pose renders both takes in one job — one model load, one encode — and the closer pose is saved as the still. Isolate-on-white cut-outs repair the matte and composite in that same job instead of a second round trip.',
        'The pack is one Python file (numpy and Pillow, already in ComfyUI) and adds Pose Score, Pick Best, Face Distance, Mask Repair, and Report under the Castcut category. Settings → ComfyUI → Castcut nodes shows Missing, Installed, or Outdated and can install through ComfyUI-Manager or hand you a copy-paste command for that machine.',
      ),
      { type: 'h2', text: 'Install' },
      {
        type: 'ol',
        items: [
          'Open Settings → ComfyUI → Castcut nodes',
          'Install with ComfyUI-Manager, or run the command the card prints for that ComfyUI',
          'Restart ComfyUI when the queue is empty, then Check again',
          'Registry install: search Castcut nodes, or `comfy node install castcut-nodes`',
        ],
      },
      {
        type: 'callout',
        variant: 'info',
        title: 'Not the prompt-injection nodes',
        text: 'Workflow takeover still uses comfyui_image_prompt_tools to swap CLIP text at queue time. Castcut nodes only run pose scoring and cut-outs inside a job.',
      },
      {
        type: 'links',
        items: [
          { label: 'castcut-nodes on GitHub', href: SITE_LINKS.castcutNodes, external: true },
          { label: 'Install notes', href: `${GH}/blob/main/docs/castcut-nodes.md`, external: true },
          { label: 'Prompt nodes (workflow takeover)', href: `${DOCS_BASE_PATH}/getting-started/comfyui-nodes` },
        ],
      },
    ],
    { related: ['getting-started/comfyui-nodes', 'play/day', 'integration/workflow-takeover'] },
  ),

  page(
    ['integration', 'cloud-engines'],
    'Cloud inference engines',
    'Fal, Replicate, ChatGPT, Gemini, and Grok — stills and clips without local graphs.',
    'Integration',
    50,
    [
      ...p(
        'Settings → Inference engine lets you queue beyond ComfyUI. Set the matching env key or a browser-stored key for Fal, Replicate, ChatGPT, Gemini, or Grok, then send a prompt from Generate, Refine, Story, or Video. When Image 1 is attached, the queue path becomes img2img automatically.',
        'Fal, Replicate, Grok, and Gemini support video clips — T2V, I2V, and extend (Story **Continue** uses Fal extend-video when the parent is Fal). ChatGPT handles stills only. Runway is not configured in Settings. Diffusers remains an optional local experimental txt2img engine separate from cloud providers.',
      ),
      { type: 'h2', text: 'Engine summary' },
      {
        type: 'ul',
        items: [
          'ComfyUI — primary local graphs, workflow takeover, 40+ model targets',
          'Diffusers — optional local experimental txt2img (services/diffusers-engine)',
          'Fal / Replicate — cloud stills + clips; Fal extend for Story Continue',
          'Grok / Gemini — stills + native video clips',
          'ChatGPT — stills only',
        ],
      },
      {
        type: 'links',
        items: [
          { label: 'Configuration & env vars', href: `${GH}/blob/main/docs/configuration.md`, external: true },
          { label: 'Video tool (local + cloud)', href: `${DOCS_BASE_PATH}/media/video` },
        ],
      },
    ],
    { related: ['media/video', 'play/story', 'getting-started/environment'] },
  ),

  page(
    ['integration', 'http-api'],
    'HTTP API, Settings & Plugins',
    'REST endpoints, GET /api catalog, Settings routes, and plugin manifests.',
    'Integration',
    51,
    [
      ...p(
        'The server exposes JSON APIs for headless use — fetch/update prompts, list gallery items, enqueue renders (ComfyUI or cloud), health probe, invite, and SMTP hooks. Live catalog: `GET /api` on a running instance (default `${LIVE}/api`). Authenticate when exposed beyond localhost.',
        'Settings (`/settings`) covers Overview (Heal & ready, backup), LLM config, ComfyUI cluster and workflow library, Inference engine (cloud keys), Automation, Data export paths, and Users (SMTP + invite). Plugins (`/plugins`) install manifests that add nav items, queue mutators, and custom tool pages without forking core.',
      ),
      { type: 'h2', text: 'Common endpoints' },
      {
        type: 'ul',
        items: [
          'GET /api — live tool and route catalog',
          'Health and ComfyUI probe routes',
          'Prompt read/write for custom nodes and scripts',
          'Gallery list, metadata, and re-queue actions',
          'CLI: `npm run prompt:cli` for headless generation',
        ],
      },
      { type: 'interactive-slot' },
      {
        type: 'links',
        items: [
          { label: 'http-api.md', href: `${GH}/blob/main/docs/http-api.md`, external: true },
          { label: 'Plugins & Settings in app', href: `${LIVE}/settings`, external: true },
        ],
      },
    ],
    { interactive: 'api-endpoint', related: ['integration/workflow-takeover', 'integration/cloud-engines'] },
  ),
]
