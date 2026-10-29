import { DOCS_BASE_PATH, GH, LIVE, p, page } from '../helpers'

export const storiesPages = [
  page(
    ['stories', 'sales-pitch'],
    'Why Castcut?',
    'Local character films with ComfyUI — Cast → Outfit → Day → Scene → Cut film. Started as Prompt Studio.',
    'Sales & stories',
    -2,
    [
      { type: 'h2', text: 'The problem every ComfyUI power user hits' },
      ...p(
        'ComfyUI is unmatched at turning checkpoints into pixels, but it was never designed to be a character-film control plane. Most teams end up with prompts scattered across CLIP node text fields, Discord threads, and spreadsheets — while negatives, character bibles, and “what worked last Tuesday” live nowhere central. Every model family wants different prose: FLUX expects subject-first photographic language, SDXL wants scene descriptions, Qwen Edit expects short imperatives, and WAN video needs motion-forward clauses.',
        'Castcut closes that gap without replacing ComfyUI or locking you into one cloud vendor. It owns the film loop — Cast homes, Outfit, Day stills and clips, optional Story and Scene, Gallery, Cut film — and, since 3.0, a production path from screenplay to shot lists, takes, and a storyboard, with identity lock across the loop and queue handoff; ComfyUI still owns local graphs when you want them. The app is MIT-licensed, runs on Node.js 22+ or desktop installers, and stores production data locally — IndexedDB in the browser for settings, history, and gallery, with server-side persistence and optional multi-user auth when you expose it to a team.',
      ),
      { type: 'h2', text: 'Before & after' },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Try the toggle below',
        text: 'Compare a typical ad-hoc workflow with a Castcut pipeline: Cast → Outfit → Day or Script → takes → Cut film → export or share.',
      },
      { type: 'interactive-slot' },
      { type: 'h2', text: 'What you get on day one' },
      {
        type: 'stats',
        items: [
          { value: '9', label: 'Finishing tools', detail: 'Lip-sync, copy moves, relight…' },
          { value: '3', label: 'Clip engines', detail: 'LTX-2.5 · WAN · MiniMax-H3' },
          { value: '2', label: 'Workspace levels', detail: 'Film · Studio' },
          { value: 'MIT', label: 'License', detail: 'Self-hosted, no cloud lock-in' },
        ],
      },
      { type: 'h2', text: 'Built for real production loops' },
      {
        type: 'ul',
        items: [
          'Cast (`/characters`) — plate, looks, marks, props, voice, places, and a wardrobe that keep one person the same in every shot',
          'Outfit (`/fitting`) and Day (`/day`) — dress her once, plan a day, pose with the 3D editor, and animate with talking clips',
          'Scene (`/scene`) — one shot exactly as you want it, with takes, Story state, and locations',
          'Script — import a Fountain or plain-text screenplay, draft shots, check coverage, and render Scenes in a run',
          'Cut (`/cut`) — timeline, subtitles, sound effects, a score, versions across devices, and export for an editor',
          'Film Director (`/production`) — the production on one page and what to do next',
          'Finishing tools — sharpen & smooth, make more realistic, copy moves, direct a move, dance, lip-sync, relight, sketch, upscale',
          'Mobile Studio (`/m`) — the same Film, Day, Outfit, Story, Scene, and Cut tabs on a phone',
          'Gallery (`/gallery`) with Needs a look, review, compare, and semantic search; every take replays from its stored graph',
          'Built-in LLM, Heal & ready, optional Castcut nodes, desktop installers, and Docker',
        ],
      },
      { type: 'h2', text: 'Who this is for' },
      ...p(
        'Indie creators shipping character IP, studios batching ComfyUI on local or remote GPUs, and technical artists who need repeatable prompts without rebuilding graphs every week. If you already run ComfyUI and an LLM (local or API), Castcut is the film layer on top — with desktop installs and optional cloud engines, not another closed SaaS generator. For a general prompt and image toolbox, see Prompt Studio.',
      ),
      { type: 'h2', text: 'Start now' },
      {
        type: 'links',
        items: [
          { label: 'GitHub repository', href: GH, external: true },
          { label: 'Quick start guide', href: `${DOCS_BASE_PATH}/getting-started/quick-start/` },
          { label: 'Your first film', href: `${DOCS_BASE_PATH}/play/first-film/` },
          { label: 'Open Film (local)', href: `${LIVE}/play`, external: true },
        ],
      },
    ],
    { interactive: 'sales-pitch', layout: 'marketing', related: ['play/first-film', 'getting-started/quick-start'] },
  ),
]
