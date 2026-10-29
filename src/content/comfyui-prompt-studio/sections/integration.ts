import { DOCS_BASE_PATH, GH, LIVE, p, page } from '../helpers'
import { SITE_LINKS } from '@/lib/site'

export const integrationPages = [
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
          { label: 'Workflow takeover (GitHub Pages)', href: 'https://doodersrage.github.io/castcut/workflow-takeover/', external: true },
        ],
      },
    ],
    { related: ['play/day', 'play/finishing-tools', 'getting-started/quick-start'] },
  ),
]
