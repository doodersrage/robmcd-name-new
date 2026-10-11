import { DOCS_BASE_PATH, GH, LIVE, p, page } from '../helpers'

export const playPages = [
  page(
    ['play', 'story'],
    'Story',
    'Continue a Cast lead with beats, stills, or clips on `/story` (Play mode).',
    'Play',
    51,
    [
      ...p(
        'Story (`/story`) is the optional narrative rail in **Play** workspace mode. It continues an existing Cast lead — Part, bible, and From photo live on Film create and Cast, not as a second cast form here. The lean Play sidebar keeps Cast, Film, Look, Outfit, Day, Story, Gallery, and Queue one click away.',
        'Castcut keeps Cast identity across Look, Outfit, Day, and Story (IP-Adapter + pinned LoRAs) with Identity ready chrome after Heal. **Mood & world** (tone, content, setting, notes) stays collapsed until you need it. **Identity for this story** offers From bio / From photo; Story stills queue with identity lock on by default when a face reference is available. **Continue** extends a clip when the parent upload is Fal (or already on Fal): Fal extend-video chains the motion. Otherwise Continue falls back to last-frame I2V. **Cut** encodes a film from queued clips (crossfade + audio bed); **Save to Cast** pushes the cut back to the character home.',
        'Legacy path `/roleplay` permanently redirects to `/story`.',
      ),
      { type: 'h2', text: 'Typical Story flow' },
      {
        type: 'ol',
        items: [
          'Create or pick a Cast lead on Film (`/play`) — essentials-first name + optional From photo',
          'Run Look → Outfit → Day, then unlock Story when you want episodic beats',
          'Pick a beat and queue a still or clip (local ComfyUI or cloud engine)',
          'Continue, Cut, or Save to Cast to build sequences',
        ],
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Cloud clips',
        text: 'Video on Fal, Replicate, Grok, or Gemini can queue T2V, I2V, and extend paths. Configure keys in Settings → Inference engine.',
      },
    ],
    { related: ['play/cast', 'media/video', 'introduction/workspace-modes'] },
  ),

  page(
    ['play', 'cast'],
    'Cast',
    'Character homes for looks, stills, clips, film cuts, and LoRA flywheel on `/characters`.',
    'Play',
    52,
    [
      ...p(
        'Cast (`/characters`) is the long-lived home for each character IP — not just a one-off bible row. Each cast member accumulates looks (reference stills), queued outputs, short clips, assembled film cuts, and optional LoRA training flywheel metadata as you iterate.',
        'Film create (`/play`) is essentials-first: name plus optional From photo, with Part archetypes (featured chips first; Show all + search for the full catalog) and More traits under the fold. Story continues that Cast lead; Save to Cast pushes Story or Gallery winners back into the character record. Compose **Isolate on white** for Image 1 produces clean character plates that Cast and Mobile Studio reuse for consistent identity.',
      ),
      { type: 'h2', text: 'Cast vs Character tool' },
      {
        type: 'ul',
        items: [
          'Character (`/character`) — generate solo/duo/sport prompts from traits and wardrobe',
          'Cast (`/characters`) — persistent home for looks, clips, films, and production history',
          'Film (`/play`) — create/pick the active Cast lead for the Look → Outfit → Day → Story loop',
          'Studio campaigns and Topics still batch-generate; Cast organizes what ships',
        ],
      },
    ],
    { related: ['character/character-tool', 'play/story', 'image-tools/compose-transfer'] },
  ),

  page(
    ['play', 'mobile-studio'],
    'Mobile Studio',
    'Phone companion at `/m` — Film hub, plates, queue, gallery, Story from photo.',
    'Play',
    53,
    [
      ...p(
        'Mobile Studio (`/m`) is a phone-first companion — not a stripped desktop UI. Use the Film hub (`/m/film`), capture a character plate with **isolate on white**, watch pending ComfyUI or cloud jobs, rate gallery stills with review focus, and open Story from photo (`/m/story`) for still-only beats when you are away from the desk.',
        'Plates captured on mobile sync into Cast looks and Compose Image 1 handoffs when the main instance indexes gallery exports. Queue status mirrors the dashboard so you can approve Draft batches or promote Final winners without opening the full sidebar.',
      ),
      { type: 'h2', text: 'Mobile capabilities' },
      {
        type: 'ul',
        items: [
          'Film hub and Look / Outfit / Day vocabulary on phone',
          'Character plate capture with white isolation',
          'Live queue watch (pending / running / complete)',
          'Gallery rating in review focus layout',
          'Story from photo — stills path on Play mode',
        ],
      },
      {
        type: 'links',
        items: [{ label: 'Open Mobile Studio (local)', href: `${LIVE}/m`, external: true }],
      },
    ],
    { related: ['play/story', 'gallery/review-mode', 'play/cast', 'play/day'] },
  ),

  page(
    ['play', 'day'],
    'Day, poses, and looks',
    'Pose editor, per-look outfits, talking clips, Places, and the Day engines in Castcut 2.6.',
    'Play',
    54,
    [
      ...p(
        'Day is the still step of the film loop: one Cast, a plan of beats, then stills you can animate and cut. Castcut 2.2 adds a pose editor (drag joints, start from a named pose or any photo, save under My poses), pose packs that theme a whole Day, and more than one look per Cast. Keeping an Outfit try-on stores that outfit on the active look, so Day and Story pick it up when you switch looks.',
        'Still engines in regular use are Rapid AIO, Qwen Edit 2511, and Qwen-Image 2.1 (full sampler, Fun-Acc 4-step, Pruna 8-step). The header Engine chip lists installed models first and uses one quality control, Good or Best. Animate uses WAN or LTX-2.5. An optional end pose lets a clip land on a second still of the same Cast. Engine health checks each pickable engine against the connected ComfyUI for missing nodes and model files without rendering.',
        'Castcut 2.4 gives Day sound. Put a line on a slot and Animate makes a lip-synced talking clip on LTX-2.5; Suggest a line asks the LLM for one that fits the scene, and a reply line turns a two-person still into a conversation in one shot. Voices are auditioned and kept on the Cast page. Places give each Cast one home and one workplace, so the bedroom, kitchen, and office look the same in every still. Cut film keeps each clip’s speech, ducks the music under it, and Score this film can write an original instrumental with ACE-Step 1.5.',
        'Hard poses can take a second render (Best of two) and keep the take closer to the pose guide. With Castcut nodes installed, both takes run inside one ComfyUI job. Open in ComfyUI writes the exact graph that made a still into ComfyUI’s editor so you can change sampler or LoRA settings and bring sampler overrides back.',
      ),
      { type: 'h2', text: 'Desk loop' },
      {
        type: 'ol',
        items: [
          'Pick a Cast lead and a look (plate, face, kept outfit)',
          'Set clothing and shoes in Outfit, or keep a try-on onto the look',
          'Pose the Day — editor, a photo, or a pose pack — then queue stills',
          'Give slots a line for talking clips, then Animate',
          'Cut the film (optionally scored), or continue the Day as a Story',
        ],
      },
      {
        type: 'links',
        items: [
          { label: 'Castcut nodes', href: `${DOCS_BASE_PATH}/integration/castcut-nodes` },
          { label: 'Play guide', href: `${GH}/blob/main/docs/play-guide.md`, external: true },
          { label: 'Qwen, Z-Image & Boogu', href: `${DOCS_BASE_PATH}/models/qwen-edit` },
        ],
      },
    ],
    { related: ['play/cast', 'play/story', 'integration/castcut-nodes'] },
  ),
]
