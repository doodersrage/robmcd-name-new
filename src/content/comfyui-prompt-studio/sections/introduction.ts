import { DOCS, DOCS_SITE, GH, p, page } from '../helpers'

export const introductionPages = [
  page(
    ['introduction', 'what-is-it'],
    'What is Castcut?',
    'Purpose, audience, and how Castcut runs the local character-film loop on ComfyUI.',
    'Introduction',
    1,
    [
      ...p(
        'Castcut is for creators who want consistent characters, scenes, images, and short films locally with ComfyUI — not another CLIP paste workflow. Flagship loop: Cast → Outfit → Day → (optional Story or Scene) → Gallery → Cut film → Save to Cast. Castcut 3.x adds a production path for longer films: Script, Scenes and takes, runs, locations, a storyboard, and the Film Director page.',
        'The app is built with React, TypeScript, and Next.js on Node.js 22+. A server exposes HTTP APIs consumed by the UI, ComfyUI custom nodes, desktop (Tauri) builds, and headless scripts. Browser state persists in IndexedDB (Dexie); server data lives in SQLite with configurable export paths.',
        'Every film step renders on ComfyUI. A built-in LLM (llama.cpp with a Qwen3-VL model) means LM Studio is optional. Cloud engines (Fal, Replicate, OpenAI, Gemini, Grok, Runway, Luma) wait behind Show cloud engines for the tools under More, and the Diffusers engine is an add-on installed from Settings.',
      ),
      { type: 'h2', text: 'Core value' },
      {
        type: 'ul',
        items: [
          'Film loop: Cast → Outfit → Day → Scene → Cut film; talking clips, Cast voices, Places, and film scores since 2.4; Preview the cut, trims, re-cuts, and room sound in 2.6; One event in 2.7; Cast bundles in 2.8; marks, narration, widescreen cuts, review links, and editor export in 2.9; finishing tools and a fuller Cut in 2.10–2.12; Script, Scenes, takes, and Film Director in 3.0; locations in 3.1; storyboard, sound effects, and longer clips in 3.2',
          '40+ ComfyUI image model targets with architecture-specific scaffolds',
          'Screenplay import, Scenes and takes, runs, locations, storyboard and animatic, and the Film Director page (3.0–3.2)',
          'Finishing tools: sharpen & smooth, make more realistic, copy moves, direct a move, dance, lip-sync, relight, sketch, upscale to 4K',
          'Classic tools (Generate, Format, Lint, Variations, Workflow editor) ship separately as Prompt Studio on the shared prompt-studio-core package',
          'Gallery with grid/dense/list layouts, review focus, compare modal, and semantic search',
          'Workflow takeover at queue time — inject live prompts without rebuilding graphs',
          'Desktop installers (.dmg / .exe / .deb preferred / .AppImage) and Docker images via GitHub Releases',
          'Fast / Balanced / Best quality presets; optional Castcut nodes for in-job pose checks',
        ],
      },
      {
        type: 'links',
        items: [
          { label: 'Architecture docs on GitHub', href: `${DOCS}/architecture.md`, external: true },
          { label: 'Official docs site', href: DOCS_SITE, external: true },
        ],
      },
    ],
    { related: ['introduction/workspace-modes', 'introduction/architecture'] },
  ),

  page(
    ['introduction', 'workspace-modes'],
    'Workspace modes',
    'Film, Studio, and More tools — three levels of control over the same app.',
    'Introduction',
    2,
    [
      ...p(
        'Workspace levels control how much of the sidebar and shared controls you see. Switch in Profile → Appearance; the saved level is applied on first paint. First launch asks **What do you want to make?** and every answer opens in Film.',
        '**Film** (the default) is the film loop — Cast, Outfit, Day, Scene, Story, Gallery, and Cut. **Studio** adds control: prompts, references, model settings, and every tool, with the film in progress kept at the top of the sidebar. **More tools**, inside Studio, holds specialist tools, workflow graphs, and integrations. The older Play, Simple, Studio, and Full modes map onto these: a saved Simple opens Film and a saved Full opens Studio.',
      ),
      { type: 'h2', text: 'Mode comparison' },
      {
        type: 'ul',
        items: [
          'Film (default) — Cast, Outfit, Day, Scene, Story, Gallery, Cut; Film Director in the Film menu',
          'Studio — prompts, references, model settings, and every tool, with the film kept at the top',
          'More tools — specialist tools, workflow graphs, and integrations inside Studio',
        ],
      },
      { type: 'interactive-slot' },
    ],
    { interactive: 'workspace-modes', related: ['play/first-film', 'getting-started/first-run'] },
  ),

  page(
    ['introduction', 'architecture'],
    'Architecture overview',
    'Routes, IndexedDB + SQLite persistence, the ComfyUI bridge, and how a take gets from a plan to a cut.',
    'Introduction',
    3,
    [
      ...p(
        'The UI is organized around route-per-step pages — Film (`/play`, where `/` redirects), Cast (`/characters`), Outfit (`/fitting`), Day (`/day`), Scene (`/scene`), Story (`/story`; `/roleplay` redirects here), Cut (`/cut`), Film Director (`/production`), Mobile Studio (`/m`), Character, Compose, Inpaint, Refine, Video, Gallery (`/gallery`), Queue (`/queue`), and Settings (`/settings`). `/moodboard`, the retired Look page, opens the Cast’s looks. A boundary test keeps shared code from importing the film layer, so Prompt Studio can reuse it.',
        'IndexedDB (Dexie) stores client-side settings, history, and gallery cache for fast offline browsing. SQLite on the server holds generations, Cast records, scenes, scripts, cuts, and user records when auth is enabled; scenes, scripts, and cut versions sync across devices, and every submitted ComfyUI graph is kept so a take can be replayed exactly. API keys and the webhook secret stay in the browser. Exports land in configurable directories for backups.',
      ),
      { type: 'h2', text: 'Data flow' },
      {
        type: 'ol',
        items: [
          'A Day slot, Story scene, or Scene shot is planned — setting, beat, pose, camera, clothing, and the Cast’s references',
          'The server builds the ComfyUI graph for the chosen engine (Edit 2511, Rapid AIO, Qwen-Image 2.1, or a clip engine) and queues it',
          'The finished render lands in the Gallery with its graph, seed, and prompt stored, so it can replay exactly',
          'Checks run on it — pose, face, marks, outfit, and place — and a miss can redo it on a new seed',
          'You keep the best take; Cut plays kept takes and pins each shot to the take it was cut with',
        ],
      },
      { type: 'interactive-slot' },
      {
        type: 'links',
        items: [{ label: 'Full architecture doc', href: `${GH}/blob/main/docs/architecture.md`, external: true }],
      },
    ],
    { interactive: 'workflow-pipeline', related: ['play/scene', 'integration/castcut-nodes'] },
  ),

  page(
    ['introduction', 'feature-map'],
    'Feature map',
    'How major features connect across tools, Play, studio, and gallery.',
    'Introduction',
    4,
    [
      ...p(
        'Features group into the Film loop (Cast / Outfit / Day / Scene / Story / Cut / Mobile), Production (Script, runs, locations, Film Director), Finishing tools, Image tools (Character, Compose, Inpaint, Refine, Video), Gallery (review, queue, export), and Integration (ComfyUI, Castcut nodes, cloud engines, HTTP API).',
        'Castcut’s routes: Film, Cast, Outfit, Day, Scene, Story, Cut, Film Director, Mobile Studio, Character, Compose, Inpaint, Refine, Video, Gallery, Queue, Dashboard, and Settings. Generate, Format, Lint, Variations, ControlNet, Outpaint, Topics, Audio, Mesh, the Workflow editor, Studio, and Plugins are Prompt Studio’s.',
      ),
      { type: 'h2', text: 'Typical chains' },
      {
        type: 'ul',
        items: [
          'Film create Cast → Outfit → Day → Animate → Cut film → Save to Cast as an episode',
          'Import a screenplay → Who’s who and Where → Draft shots → Prepare a run → keep takes → Storyboard → Cut',
          'Day slot → Open as Scene → takes → Direct a move or Copy moves → Cut',
          'Cut → Export for an editor (FCPXML, EDL, SRT) or Share for review',
          'Settings Heal & ready → built-in LLM → ComfyUI models check → first film',
        ],
      },
      { type: 'interactive-slot' },
    ],
    { interactive: 'tool-routes', related: ['play/first-film', 'play/script', 'play/cut'] },
  ),
]
