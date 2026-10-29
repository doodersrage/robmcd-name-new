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
          { label: 'Read the case study', href: `${DOCS_BASE_PATH}/stories/case-study/` },
          { label: 'Your first film', href: `${DOCS_BASE_PATH}/play/first-film/` },
          { label: 'Open Film (local)', href: `${LIVE}/play`, external: true },
        ],
      },
    ],
    { interactive: 'sales-pitch', layout: 'marketing', related: ['stories/case-study', 'getting-started/quick-start'] },
  ),

  page(
    ['stories', 'case-study'],
    'Case study: episodic FLUX → SDXL series',
    'Illustrative scenario — how structured campaigns, lint, and gallery review fit an episodic series.',
    'Sales & stories',
    -1,
    [
      {
        type: 'callout',
        variant: 'info',
        title: 'Illustrative scenario',
        text: 'This walkthrough is a composite example — not a named client engagement. It was written before the split: the lint, campaign, and Studio tools it uses now ship in Prompt Studio, and Castcut focuses on the film loop.',
      },
      { type: 'h2', text: 'Profile' },
      {
        type: 'stats',
        items: [
          { value: '12', label: 'Episodes', detail: 'Single character IP' },
          { value: 'FLUX→SDXL', label: 'Pipeline', detail: 'Explore then deliver' },
          { value: '48', label: 'Final frames', detail: 'Campaign output' },
        ],
      },
      ...p(
        'Maya Chen runs ComfyUI on a local RTX 4090. She uses FLUX Dev and Schnell on Generate for fast dailies, then SDXL Base with Final/Max quality profiles for print-bound delivery. Before Castcut, every episode meant reconstructing prompts from PNG metadata, retyping negatives, and hoping character tags stayed consistent across model families.',
        'After adopting Castcut, Maya defined her lead character once in `/character`, attached wardrobe catalog tokens, and built a Studio campaign tied to `/topics` rows — one topic per episode. Draft batches ran after work; winners were promoted to Final quality on weekends and reviewed in Gallery review mode with keyboard 1–5 ratings.',
      ),
      { type: 'h2', text: 'The challenge' },
      {
        type: 'ul',
        items: [
          'Character drift between FLUX exploration and SDXL print exports',
          'No shared negative library — `/negative` sport-aware blocks re-applied by hand',
          'Hundreds of unsorted ComfyUI outputs with no semantic search',
          'Client review required side-by-side prompt diffs between similar frames',
          'Tight deadline: 12 episodes in three weeks',
        ],
      },
      { type: 'interactive-slot' },
      { type: 'h2', text: 'Stack & features used' },
      {
        type: 'comparison',
        before: [
          'Prompts in Notion + manual CLIP paste',
          'No lint before rendering',
          'Unsorted output folder',
          'Manual seed hunting for re-runs',
        ],
        after: [
          '/character + wardrobe catalog + /topics campaign',
          '/format + /lint before every Send to ComfyUI',
          '/gallery review + semantic search + compare modal',
          'Re-queue from gallery with Final/Max quality profiles',
          'Workflow takeover into existing SDXL graph',
          'Backup v2 export before client handoff',
        ],
      },
      {
        type: 'links',
        items: [
          { label: 'Studio campaigns', href: `${DOCS_BASE_PATH}/studio/campaigns-scheduled/` },
          { label: 'Gallery review mode', href: `${DOCS_BASE_PATH}/gallery/review-mode/` },
          { label: 'Workflow takeover', href: `${DOCS_BASE_PATH}/integration/workflow-takeover/` },
          { label: 'View on GitHub', href: GH, external: true },
        ],
      },
    ],
    { interactive: 'case-study', layout: 'marketing', related: ['stories/sales-pitch', 'studio/campaigns-scheduled'] },
  ),
]
