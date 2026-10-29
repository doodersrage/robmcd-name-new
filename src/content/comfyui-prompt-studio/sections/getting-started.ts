import { DOCKER_IMAGE, DOCS_BASE_PATH, GH, LIVE, RELEASES, p, page } from '../helpers'

export const gettingStartedPages = [
  page(
    ['getting-started', 'quick-start'],
    'Quick start',
    'Node 22+, clone, env vars, Heal & ready, desktop/Docker options, and your first queue.',
    'Getting started',
    5,
    [
      {
        type: 'callout',
        variant: 'tip',
        title: 'Requires Node.js 22+',
        text: 'Castcut uses modern Node APIs. Verify with `node -v` before installing.',
      },
      {
        type: 'code',
        code: 'git clone https://github.com/doodersrage/castcut.git\ncd castcut\nnpm install\ncp .env.example .env.local\nnpm run dev',
      },
      ...p(
        `Dev server defaults to port 47832. Open ${LIVE}/ — it opens Film — and ${LIVE}/dashboard for queue status. The canonical repo is \`castcut\` (formerly \`llm-prompt-studio\` / \`comfyui-prompt-studio\`; those GitHub names redirect here).`,
        'Set `COMFYUI_API_URL` (your ComfyUI instance) in `.env.local`. For the LLM, either point `LLM_API_BASE_URL` at LM Studio or Ollama, or install the **Built-in LLM** from Settings → LLM (llama.cpp and a Qwen3-VL vision model, started on first use). A new install needs no secrets in its env file: the first admin is made on the sign-in page.',
        'On first launch, run **Heal & ready** — it checks the LLM and ComfyUI, maps your models, and says what to install (Settings → ComfyUI → Models lists every model each tool needs). Then follow Your first film: create a Cast on Film, dress her, plan a Day, and cut.',
      ),
      { type: 'h2', text: 'Other install paths' },
      {
        type: 'ul',
        items: [
          `Desktop — GitHub Releases: macOS .dmg, Windows .exe, Linux .deb preferred / AppImage portable (${RELEASES})`,
          `Docker — \`docker pull ${DOCKER_IMAGE}\` (see docs/configuration.md)`,
          'Tauri desktop builds ship in the repo under desktop/ — same env vars as web',
        ],
      },
      {
        type: 'links',
        items: [
          { label: 'GitHub Releases (desktop)', href: RELEASES, external: true },
          { label: 'Configuration & deployment', href: `${GH}/blob/main/docs/configuration.md`, external: true },
          { label: 'Desktop installers guide', href: `${GH}/blob/main/docs/desktop.md`, external: true },
          { label: 'Operator guide (day-2 ops)', href: `${GH}/blob/main/docs/operator.md`, external: true },
        ],
      },
    ],
    { related: ['getting-started/environment', 'getting-started/docker'] },
  ),

  page(
    ['getting-started', 'first-run'],
    'First run walkthrough',
    'Welcome, workspace level, Heal & ready, and your first film.',
    'Getting started',
    6,
    [
      ...p(
        'First launch asks **What do you want to make?** and says up front whether ComfyUI is ready. Every answer opens in **Film** (`/play`), the default workspace; **Studio** (Profile → Appearance) adds control, with the film in progress kept at the top of its sidebar. The dashboard (`/dashboard`) shows pending jobs, queue status, and recent outputs.',
        'For a film: create a Cast lead on Film (a photo or traits), then Outfit → Day → Cut. **Make a starter film** does it all in one step, and **Use demo stills** lets you practise the cut while ComfyUI is offline. Add Story for scene-by-scene beats, or Scene and Script when you want each shot exactly so.',
      ),
      { type: 'h2', text: 'Recommended first steps' },
      {
        type: 'ol',
        items: [
          'Run Heal & ready in Settings → Overview (Identity ready when a face pack is locked)',
          'Stay in Film (default), or switch to Studio in Profile → Appearance',
          'Create a Cast lead on Film (`/play`) — a photo or traits',
          'Run Outfit → Day, then Cut film; unlock Story when you want beats',
          'For a longer film: import a screenplay on the Scene page and prepare a run',
          'For one-off prompts outside the film loop, use Prompt Studio',
        ],
      },
      { type: 'interactive-slot' },
    ],
    { interactive: 'prompt-detail', related: ['play/first-film', 'introduction/workspace-modes', 'play/cast'] },
  ),

  page(
    ['getting-started', 'environment'],
    'Environment & configuration',
    'Ports, env vars, Settings, cloud engines, Plugins, heal, backup, and export directories.',
    'Getting started',
    7,
    [
      ...p(
        'Configuration lives in `.env.local` (server) and Settings (`/settings`) in the UI. Key env vars: `COMFYUI_API_URL`, `LLM_MODEL`, `LLM_VISION_MODEL`, optional `COMFYUI_ROOT` for asset downloads, cloud provider keys (Fal, Replicate, etc.), and auth/SMTP vars for multi-user deployments. See the full env table in the repository configuration docs.',
        'Settings → Overview provides **Heal & ready** (connectivity checks), backup export, and data repair. Settings → LLM configures text and vision models. Settings → ComfyUI covers cluster URLs, workflow library import (API-format JSON), and model asset downloads. Settings → ComfyUI → Engine for Generate & Video picks the engine for the tools under More only — Film, Day, Outfit, Scene, and Story always render on ComfyUI. Cloud engines wait behind Show cloud engines, and the Diffusers engine is an add-on (Install Diffusers engine).',
      ),
      { type: 'h2', text: 'Settings & plugins' },
      {
        type: 'ul',
        items: [
          'Default port: 47832',
          'IndexedDB (Dexie) for browser settings, history, gallery cache',
          'Gallery export and backup v2 folders — schedule from Settings → Data',
          'Optional auth, quotas, and per-user gallery for exposed deployments',
          'Runway is not exposed in Settings — use Fal/Replicate/Grok/Gemini for cloud clips',
        ],
      },
      {
        type: 'links',
        items: [{ label: 'Full configuration doc', href: `${GH}/blob/main/docs/configuration.md`, external: true }],
      },
    ],
    { related: ['getting-started/docker', 'integration/cloud-engines'] },
  ),

  page(
    ['getting-started', 'docker'],
    'Docker & desktop deployment',
    'Container images, desktop installers, and homelab deployment.',
    'Getting started',
    8,
    [
      ...p(
        `Pull the published image with \`docker pull ${DOCKER_IMAGE}\`. Docker Compose bundles the Node app with volume mounts for SQLite, exports, and optional ComfyUI output ingestion. Mount your ComfyUI output folder for automatic gallery indexing when configured.`,
        'Desktop installers from GitHub Releases (macOS .dmg, Windows .exe, Linux .deb preferred; AppImage is portable but can feel slower on rolling distros) wrap the same Next.js server with Tauri — configure env vars or use in-app Settings. Set the same keys as bare-metal: `COMFYUI_API_URL`, `LLM_MODEL`, `LLM_VISION_MODEL`, cloud engine keys, and production auth secrets.',
      ),
      {
        type: 'callout',
        variant: 'info',
        text: 'See docs/configuration.md and docs/desktop.md for compose files, production checklist, and second-GPU operator notes.',
      },
      {
        type: 'links',
        items: [
          { label: 'GitHub Releases', href: RELEASES, external: true },
          { label: 'Configuration & deployment', href: `${GH}/blob/main/docs/configuration.md`, external: true },
        ],
      },
    ],
  ),

  page(
    ['getting-started', 'comfyui-nodes'],
    'ComfyUI custom nodes',
    'Install nodes that pull prompts from Castcut into running workflows.',
    'Getting started',
    9,
    [
      ...p(
        'Custom nodes under `comfyui/comfyui_image_prompt_tools/` register endpoints that read the latest prompt, negative, and metadata from Castcut. Wire them into CLIP text encode nodes instead of static strings — workflow takeover replaces values at queue time.',
        'Import pack-accurate graphs via Settings → ComfyUI → workflow library → Import. Download weights with `COMFYUI_ROOT` set, then Settings → ComfyUI → Model assets. Cloud-engine queues bypass ComfyUI graphs entirely — custom nodes apply only to local ComfyUI paths. Pose scoring and cut-outs are a separate pack: Castcut nodes.',
      ),
      { type: 'h2', text: 'Install' },
      {
        type: 'ol',
        items: [
          'Copy or submodule `comfyui/comfyui_image_prompt_tools/` into ComfyUI/custom_nodes',
          'Restart ComfyUI and verify probe from Settings → ComfyUI',
          'Add Castcut source nodes to your workflow graph',
          'Enable workflow takeover on the Castcut side before queueing',
        ],
      },
      {
        type: 'links',
        items: [
          { label: 'Custom nodes README', href: `${GH}/blob/main/comfyui/comfyui_image_prompt_tools/README.md`, external: true },
          { label: 'Castcut nodes', href: `${DOCS_BASE_PATH}/integration/castcut-nodes/` },
        ],
      },
    ],
    { related: ['integration/workflow-takeover'] },
  ),
]
