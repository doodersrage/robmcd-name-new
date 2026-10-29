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
    { related: ['getting-started/first-run', 'play/first-film'] },
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
    ],
    { related: ['play/first-film', 'introduction/workspace-modes', 'play/cast'] },
  ),
]
