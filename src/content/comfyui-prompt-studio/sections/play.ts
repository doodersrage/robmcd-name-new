import { DOCS_BASE_PATH, DOCS_SITE, GH, LIVE, p, page } from '../helpers'

const SECTION = 'Film'

export const playPages = [
  page(
    ['play', 'first-film'],
    'Your first film',
    'Cast → Outfit → Day → Cut in about ten minutes once ComfyUI and the models are in.',
    SECTION,
    50,
    [
      ...p(
        'Castcut opens on **Film** (`/play`). The loop is Cast → Outfit → Day → (optional Story or Scene) → Cut. The old Look step is gone: a Cast’s looks live on its own page, and `/moodboard` now opens them.',
      ),
      {
        type: 'callout',
        variant: 'tip',
        title: 'Just want to see it work?',
        text: '**Make a starter film** creates a Cast lead, opens Day with the stills already queueing, and lands on Cut. If ComfyUI is offline, **Use demo stills** lets you practise the cut.',
      },
      {
        type: 'ol',
        items: [
          '**Create a character** — on Film, give her a name and either upload a photo of the face you want or pick traits (sex, age, ethnicity, height, body, hair). **Create & continue** makes her **plate**: the full-body picture every still starts from.',
          '**Dress her** (optional) — on Outfit, choose a kit, your own photo of the clothes, and shoes. Queue a try-on and **Keep** the one you like; it becomes the dressed plate for every still.',
          '**Plan the day** — Day shows four slots, morning to night. Pick a Mood, let **Suggest day** write a place and a moment for each slot, edit any of them, then **Queue day** (about 20–60 s a still).',
          '**Animate** — **Animate all** turns each still into a short clip. A slot with a **line** becomes a talking clip, lip-synced, in her voice.',
          '**Cut** — open Cut, watch it with ▶, reorder and trim the shots, pick widescreen, vertical, or square, add music or **Score this film**, then **Cut film**. The film lands in the Gallery and on the Cast page.',
        ],
      },
      { type: 'h2', text: 'Next' },
      {
        type: 'ul',
        items: [
          'Polish it — sharpen clips, relight stills, lip-sync your own voice: Finishing tools',
          'Tell a story — scene by scene with the LLM: Story',
          'Shoot from a screenplay — Script, Scenes, and runs: Scene and Script',
          'Make her more yours — voice, places, marks: Cast',
          'Tomorrow — **Same look, new Day** on the finished film',
        ],
      },
      {
        type: 'links',
        items: [
          { label: 'Finishing tools', href: `${DOCS_BASE_PATH}/play/finishing-tools/` },
          { label: 'Scene', href: `${DOCS_BASE_PATH}/play/scene/` },
          { label: 'Your first film (GitHub Pages)', href: `${DOCS_SITE}/first-film/`, external: true },
        ],
      },
    ],
    { related: ['play/cast', 'play/day', 'play/cut'] },
  ),

  page(
    ['play', 'cast'],
    'Cast',
    'A character that stays the same person in every picture: plate, looks, traits, marks, props, voice, and places.',
    SECTION,
    51,
    [
      ...p(
        'A **Cast** member is a character that stays the same person in every still and clip. Open one from **Cast** (`/characters`) or the Film page. Each film you cut is an episode of the Cast’s current season, so the Cast page is also where the films live.',
      ),
      { type: 'h2', text: 'What a Cast keeps' },
      {
        type: 'ul',
        items: [
          '**Plate** — the full-body picture every still starts from; the face comes from here',
          '**Looks** — several plates for one person (hair, era, style), each with its own kept outfit; an earlier plate can be marked don’t offer again, and a new plate is measured against the Cast so it stays the same person',
          '**Traits** — sex, age, ethnicity, height, body, hair, used in every prompt (Bible → Appearance)',
          '**Marks** — tattoos, freckles, glasses, kept wherever they would show; Day checks them with the vision model and repairs a still that drops one',
          '**Props** — her phone, bag, car, dog, described once and the same every time',
          '**People** — the people in her life, and **pronunciations** for the clip voice',
          '**Voice** — audition four voices, keep one or use about 5 s of your own recording, then nudge it deeper or higher',
          '**Places** — one home and one workplace, so the bedroom, kitchen, and office are the same rooms in every still',
          '**Wardrobe** — kept outfits, each with its try-on picture, a runway clip, and a **Turn around** viewer',
        ],
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Marks need the plate',
        text: 'A tattoo or a pair of glasses in words alone rarely shows. Put it on the plate (**Edit plate**) and it carries into every still.',
      },
      { type: 'h2', text: 'Places from a photo' },
      ...p(
        'Under Bible → Places, **Photos of their rooms** takes a real photo of a living room, kitchen, bedroom, bathroom, or office. Stills set in that room are built around it — the photo goes in as a reference picture, so the sofa, rug, walls, and windows match from shot to shot. Places a film goes back to that aren’t her home or work are **Locations**, kept on the Scene page.',
      ),
      { type: 'h2', text: 'Films, seasons, and moving a Cast' },
      {
        type: 'ul',
        items: [
          '**Film & media → Films** — watch each film, see what went into it, and **Re-cut**, **Export for an editor**, or **Share for review** under it',
          '**Seasons** — **Stitch season** joins the episodes; **Open this Day again** brings a Day back',
          '**Export Cast file** — every look’s plate, outfits, Wardrobe stills, reference sheets, and Scenes’ shots in one file to import on another machine (**Export bundle** adds the films as one .tar)',
          'A printable **reference sheet** and a likeness chart over time',
        ],
      },
    ],
    { related: ['play/outfit', 'play/day', 'play/scene'] },
  ),

  page(
    ['play', 'outfit'],
    'Outfit',
    'Dress the Cast once on `/fitting`; every clothed still starts from that dressed plate.',
    SECTION,
    52,
    [
      ...p(
        'Outfit (`/fitting`) dresses the Cast once. Every clothed still on Day, Story, and Scene then starts from that **dressed plate**, so the clothes and shoes stay the same from shot to shot.',
      ),
      { type: 'h2', text: 'Pick the clothes' },
      {
        type: 'ul',
        items: [
          '**Kits** — built-in outfits by type: full outfits, tops, bottoms, outerwear, formal, swimwear',
          '**Your photo** — a worn photo (someone wearing it; the clothes are cut out) or a packshot (clothes on a plain background)',
          '**Footwear** — a shoe kit, your own photo, in words, Auto, or Barefoot',
          '**Save for later** keeps your own clothes and shoes for any session',
        ],
      },
      { type: 'h2', text: 'Try it on' },
      {
        type: 'ol',
        items: [
          'Pick a **Quality**: Fast (front only), Balanced (front and back), or Best (also checks each try-on — *Face 64% · Outfit 4/5* — and marks the **Best match**)',
          '**Queue** a try-on',
          '**Keep** the one you like — it becomes the dressed plate and goes straight to the Cast’s Wardrobe with a runway clip; **Pass** drops one',
        ],
      },
      ...p(
        'Pose comes from the plate, the 3D pose editor (**Custom pose**), or a photo. The box *The prompt will open with* shows the pose in words — the models follow the words more than the drawing, so check it before you queue. **Turn around** spins a kept outfit from its runway clip; every angle is a real frame, so the face, fabric, and shoes stay hers.',
      ),
    ],
    { related: ['play/cast', 'play/day'] },
  ),

  page(
    ['play', 'day'],
    'Day, poses, and looks',
    'A day in the Cast’s life: plan slots, the 3D pose editor and camera row, talking clips, longer clips, and the still engines in Castcut 3.2.',
    SECTION,
    53,
    [
      ...p(
        'Day (`/day`) is a handful of moments in the Cast’s life, morning to night — each a still, then a clip. The page is a **plan bar** (2–8 stills, Mood, People, Weather, Quality), one **card** per moment, and an action row: Queue day → Animate all → **Open Cut →**.',
        'Moods include Everyday, Sport (23 sports, mid-action, the right kit), Vacation, and Suggestive; People is Solo, Mixed, or Duo, where Duo adds a partner from the Cast or a made-up one. Switch the idea row to **One event** and write one line — *a dinner date at a candlelit trattoria* — and every slot becomes the next moment of that event, with the clips running straight into each other.',
      ),
      { type: 'h2', text: 'The slot sheet' },
      {
        type: 'ul',
        items: [
          '**Setting · Beat** — where she is and what she does; **Suggest day** writes them all',
          '**Pose** — change it, try another, read one from a photo, or **Edit joints** in the 3D pose editor',
          '**Camera** — height, direction, shot (full body to head and shoulders), and lens, each auto until you pick it',
          '**Clothing** — this slot’s outfit and shoes',
          '**Line** — what she says in the clip (*Suggest a line*); **Narration** — the voice-over heard over the shot (*Suggest a narration*)',
          '**Also in this still** — a third, or on Qwen-Image 2.1 a fourth, Cast member',
          '**Open as Scene** — turn the slot into a Scene with its still as the first take',
        ],
      },
      { type: 'h2', text: 'The pose editor' },
      ...p(
        'A smooth, neutral 3D body standing in the picture’s own frame: drag a hand or foot, turn the head, orbit the camera, or start from Stand, Sit, Kneel, Lie down, or Walk — or a real pose read from a photo. Poses save under My poses, and pose packs can theme a whole Day. A pose check redoes a still that missed its pose.',
      ),
      { type: 'h2', text: 'Quality and engines' },
      {
        type: 'ul',
        items: [
          '**Fast** — good renders, no checks',
          '**Balanced** (default) — face finish, one redo of a pose miss, the best engine per pose',
          '**Best** — Balanced plus Auto-review and best of two on hard poses',
          'Still engines: Qwen-Image-Edit 2511 (~55 s, lively stills with props and angles), Qwen Rapid AIO (~20 s, fastest), Qwen-Image 2.1 (~20 s, closest likeness)',
        ],
      },
      { type: 'h2', text: 'Animate' },
      ...p(
        '**Animate all** turns each still into a clip, on LTX-2.5 by default, with WAN and MiniMax-H3 as the other clip engines. A slot with a line becomes a lip-synced **talking clip** in the Cast’s voice; **Add sound** gives a silent clip the sound of its place; **Dub** remakes every talking clip in Spanish, French, German, Italian, Portuguese, Japanese, Korean, or Chinese.',
        'Castcut 3.2 makes longer clips hold together. On MiniMax-H3 a longer length is a first clip and then parts of about 5 s, each with its own **Then…** beat (**Write the beats** fills the empty ones). Each part starts on the frame where the face is most the Cast’s, matches colour at the join, and — with the edit model installed — is keyframed from a clean still, so the clip doesn’t soften as it goes. With H3’s reference model, every part also sees the Cast’s face lock and dressed plate, so her face and clothes hold.',
      ),
      { type: 'h2', text: 'The card’s ⋯ menu' },
      {
        type: 'ul',
        items: [
          '**Redo** — requeue with a new seed, Looks wrong · redo, retry, queue this slot only',
          '**Touch up the still** — fix an area, sketch, relight, upscale to 4K',
          '**Make it move** — animate, copy moves, direct a move, dance to music, lip-sync',
          '**The clip** — sharpen & smooth, make more realistic, make it 30 s, continue with a directed move, add sound',
        ],
      },
      {
        type: 'links',
        items: [
          { label: 'Finishing tools', href: `${DOCS_BASE_PATH}/play/finishing-tools/` },
          { label: 'Castcut nodes', href: `${DOCS_BASE_PATH}/integration/castcut-nodes/` },
          { label: 'Day guide (GitHub Pages)', href: `${DOCS_SITE}/guide-day/`, external: true },
        ],
      },
    ],
    { related: ['play/cast', 'play/scene', 'play/cut'] },
  ),

  page(
    ['play', 'scene'],
    'Scene and takes',
    'One shot exactly as you want it on `/scene`: render takes, keep the best, then make it move.',
    SECTION,
    54,
    [
      ...p(
        'Scene (`/scene`, on a phone `/m/scene`) is one shot, exactly as you want it. It is a Day slot on its own — the same slot controls and still engine, and every fix to Day’s stills (the pose check, the close-shot crop, the Camera row) — without Day’s planning. It sits between Story and Cut in the Film bar, and it is optional: not a step of the film.',
      ),
      { type: 'h2', text: 'The page' },
      {
        type: 'ul',
        items: [
          '**Scenes** — the Cast’s saved scenes; **New scene** starts one',
          '**The shot** — name, time of day, mood, people, weather, quality, and the slot editor: setting, **Location**, beat, **Story state**, line, narration, pose and camera, look, engine, clothing',
          '**Takes** — **Queue a take** / **Another take**, every take listed, ★ to keep one, **Send to Day slot**',
          '**Make it move** — from the kept take: **Animate**, **Copy moves…**, **Direct a move…**, then **Cut →**',
          '**Script**, **Run**, and **Locations** — see Script, runs, and locations',
        ],
      },
      { type: 'h2', text: 'Takes' },
      ...p(
        'Render the shot as often as you like; each finished take is listed under it. Tap one to put it on the card, **☆ Keep** to keep it — Cut uses the kept take, and Make it move starts from it. **Good** and **Reject** judge a take without rendering it again, **Compare takes** shows two side by side, and a dropped take waits 14 days in **Recently deleted takes**.',
        'The **i** on a take says how it was made: engine and model, seed, prompt, references, and render time, with **Open in ComfyUI** when its graph is stored. Removing the kept take asks first and says what Cut loses.',
      ),
      { type: 'h2', text: 'Story state' },
      ...p(
        'What a shot needs to keep from the story, set under the beat: **She carries** (the red umbrella), **What has changed** (left hand bandaged, wet hair), **How she feels**, and the **Story day**. It goes into the still’s prompt and onto the shot’s card in Cut. Mark an item **carries over** and Cut flags a later shot on the same story day that drops it.',
      ),
      { type: 'h2', text: 'With Day and Cut' },
      {
        type: 'ul',
        items: [
          '**Open as Scene** in a Day slot’s sheet turns the slot into a new scene; the Day is left as it is',
          '**Send to Day slot** puts the scene’s kept take on a slot of the Cast’s Day',
          'In Cut, **Scenes** is a source beside Day and Story — each scene’s kept take, its clip when it has one',
          'On a phone, `/m/scene` has its own one-thumb layout: a swipeable strip of takes, bottom sheets for the shot, and touch for the 3D editor',
        ],
      },
      {
        type: 'links',
        items: [
          { label: 'Script, runs, and locations', href: `${DOCS_BASE_PATH}/play/script/` },
          { label: 'Scene guide (GitHub Pages)', href: `${DOCS_SITE}/guide-scene/`, external: true },
        ],
      },
    ],
    { related: ['play/script', 'play/day', 'play/cut'] },
  ),

  page(
    ['play', 'script'],
    'Script, runs, and locations',
    'Import a screenplay, plan its shots, make them Scenes, render them in a run, and keep the places a film goes back to.',
    SECTION,
    55,
    [
      ...p(
        'Castcut 3.0 added a production path from text to shots. A screenplay lives with the Cast (up to 12 per Cast, synced like the scenes) in the **Script** section of the Scene page.',
      ),
      { type: 'h2', text: 'Script' },
      {
        type: 'ul',
        items: [
          '**Import a script** — paste it, or upload a `.fountain`, `.txt`, or `.md` file. It reads as a screenplay, scene by scene (heading, place, time of day, who speaks, each line), and anything it couldn’t understand is listed first. Text with no scene headings reads as an outline, one beat per paragraph.',
          '**Who’s who** — each speaking part gets a Cast picker; a matching name is only suggested until you **Confirm** it, and nothing is created for you',
          '**Where** — each place shows how Castcut reads it (a kitchen as her home’s kitchen, an office as her workplace) or can be set to one of your Locations',
          '**Shots** — **Draft shots** proposes a list (an establishing wide, each line of dialogue, a reaction when an exchange ends); change purpose, framing, length, and priority, reorder, split, merge, add, or remove',
          '**Make it a Scene** — the shot becomes a Scene with the place, time of day, framing, the lead’s line, and a confirmed partner',
          '**Coverage** — planned, made, kept, and in the Cut, for the script and each scene; a missing establishing shot or reaction is flagged',
          '**Import a new version** — every scene is listed as same, changed, new, or removed before anything changes, and a shot that became a Scene is never dropped',
        ],
      },
      { type: 'h2', text: 'Storyboard and animatic' },
      ...p(
        'Castcut 3.2 lets you see the film before rendering it. **Storyboard** shows the script’s planned shots scene by scene — each with its kept take, else a take, else a card saying what it is. **Cut it as an animatic →** opens Cut on the script: each shot plays its kept take or its card for its planned length, so the pacing holds as takes come in.',
      ),
      { type: 'h2', text: 'Runs' },
      {
        type: 'ol',
        items: [
          '**Prepare a run…** makes the script’s planned shots into Scenes and lists what would render — each Scene, its engine, and about how long. Nothing renders yet.',
          'Set the limits — at most so many takes, about so many minutes — and switch any Scene in or out (Scenes with a kept take are left out by default).',
          '**Start the run** — each Scene’s take is queued and its checks finish before the next. **Pause**, **Resume**, and **Cancel** act after the take rendering now.',
        ],
      },
      ...p(
        'A run never keeps a take — choosing stays yours. It stops by itself and says why when a take fails, and closing the tab pauses it; after a reload **Resume** carries on without queueing the same take twice.',
      ),
      { type: 'h2', text: 'Locations' },
      ...p(
        'Castcut 3.1 added locations: a place the film goes back to — the corner café, her sister’s flat — described once, so every Scene set there shows the same room. Give it its look in words, inside or outdoors, and the script places that mean it. Add a photo of the empty place or **Make its picture** (Qwen-Image 2.1 Turbo, about 40 s), and shots set there are built around it. Auto-review’s place check then asks whether a shot really is that place.',
      ),
      {
        type: 'links',
        items: [
          { label: 'Scene and takes', href: `${DOCS_BASE_PATH}/play/scene/` },
          { label: 'Film Director', href: `${DOCS_BASE_PATH}/play/director/` },
          { label: 'Scene guide (GitHub Pages)', href: `${DOCS_SITE}/guide-scene/`, external: true },
        ],
      },
    ],
    { related: ['play/scene', 'play/director', 'play/cut'] },
  ),

  page(
    ['play', 'story'],
    'Story',
    'Scene by scene on `/story`: the LLM offers four next scenes, you pick one, and it becomes a still and a clip.',
    SECTION,
    56,
    [
      ...p(
        'Story (`/story`) continues a Cast lead scene by scene. It opens once you’ve cut your first Day. Each scene keeps the outfit, hair, place, and light from the one before unless the scene changes them, and the writer is told which poses the last scenes used so they don’t repeat.',
      ),
      { type: 'h2', text: 'Play it' },
      {
        type: 'ol',
        items: [
          '**Roll four scenes** — four cards, each with a small figure of its pose',
          '**Pick one**, or write your own under **Or write what happens next**',
          'The scene’s still queues; **Animate** makes the clip (LTX-2.5 by default, or WAN or MiniMax-H3)',
          'Repeat, then **Cut film →** opens Cut with the Story’s shots',
        ],
      },
      {
        type: 'ul',
        items: [
          '**Story settings** — tone, rating, setting, and notes',
          '**Take back the last scene** and **Start the story over**',
          '**Retry N flagged** — redoes every failed still and every pose or face miss',
          '**Edit scene → Narration** — a voice-over line for the film; *Suggest a narration* writes one in the Cast’s voice',
          'Each re-render is a take; a clearly worse new take never replaces a better one',
          'The scene’s ⋯ menu has the same finishing tools as Day: sketch, relight, upscale, copy moves, direct a move, dance, lip-sync, sharpen & smooth',
        ],
      },
      {
        type: 'links',
        items: [{ label: 'Story guide (GitHub Pages)', href: `${DOCS_SITE}/guide-story/`, external: true }],
      },
    ],
    { related: ['play/day', 'play/cut', 'play/finishing-tools'] },
  ),

  page(
    ['play', 'cut'],
    'Cut a film',
    'The film’s own step on `/cut`: watch the cut, edit the timeline, mix the sound, subtitle it, and export.',
    SECTION,
    57,
    [
      ...p(
        'Cut (`/cut`, on a phone `/m/cut`) is the film’s own step. Tick **Day**, **Story**, and **Scenes** to mix them in one film, or pick **Script animatic** to cut a script before every shot is rendered. **Watch the cut** shows the film as it will come out — it updates a moment after each change, before anything is encoded.',
      ),
      { type: 'h2', text: 'Editing' },
      {
        type: 'ul',
        items: [
          '**Timeline** — every shot as long as it plays: drag to move, drag edges to hold or trim, scrub on the ruler; each join picks cut, crossfade, fade through black, flash of white, or slide',
          '**Shots** — drag to reorder, frame a still (waist up, chest up), trim a clip, set the poster, a still’s move, and a clip’s speed (0.25×–4×), reverse, and J / L cuts',
          '**Add** — from the Gallery, a text card, **Generate a shot…** for missing B-roll, **Bridge to next** for a clip that moves into the next shot',
          '**New take** renders a shot again with a new seed; **Make longer…** carries a clip on by 4, 8, or 15 s; **Make a reel…** makes a 15 / 30 / 60 s vertical',
          '**Overlay…** adds a lower third or a picture in a corner; **Add a logo** watermarks the film',
          'Keys: Space play · J / K / L · S split · I / O trim · F freeze frame · D duplicate · Ctrl+Z undo (it survives a reload)',
        ],
      },
      { type: 'h2', text: 'Picture and sound' },
      {
        type: 'ul',
        items: [
          '**Made for** — Review copy (720p, subtitles burned in), Widescreen master (1080p), Vertical social, or Square social, each with a shape, size, and loudness target',
          '**Look** — natural, warm, cool, filmic, vivid, faded, or black & white, with **Match shots** pulling separately made shots toward one colour',
          '**Follow faces** in vertical and square cuts, **Smooth motion** (RIFE in-between frames), and a light **Sharpen**',
          '**Sound** — the Cast’s lines, narration, room sound, and music (your track or **Score this film**), with the music ducked under speech, an ambience bed, mute and solo per track, and placed **sound effects** (Castcut 3.2)',
          '**Measure loudness** reads a film’s LUFS and true peak against −14 LUFS for the web or −23 for broadcast',
        ],
      },
      { type: 'h2', text: 'Subtitles' },
      ...p(
        'Each shot’s subtitle comes from its talking clip or narration, or what you type. Castcut 3.2 splits a long subtitle into timed cues, each with its own from / to; the monitor shows them and the encode burns in the same cues. Overlaps and cues that are too short or too long are flagged. **Export .srt** and **Import .srt…** round-trip a subtitle file.',
      ),
      { type: 'h2', text: 'Before and after the cut' },
      {
        type: 'ul',
        items: [
          '**Before cutting** — a live checklist: shots, missing media, subtitles, something to hear, picture size, whether the server can encode, and free disk space',
          '**Missing media** — a shot whose file is gone is listed with **Relink** to another take or a Gallery item',
          '**Continuity** — face, pose, outfit, and place jumps between shots, each decided **It’s fine** or **It’s real**',
          '**Pinned takes** — once a shot is edited or cut, it stays on its take; a newer take in its source is offered as **New take available**, never swapped in',
          '**Versions** merge across devices (another device’s edit is kept as a version), and **Package** moves a cut, with or without its media, to another machine',
          'After a cut: **Export for an editor** (FCPXML, EDL, subtitles, and media for Resolve, Premiere, or Final Cut), **Re-cut** in another shape, or **Share for review** on an expiring link that takes comments pinned to a moment',
        ],
      },
      {
        type: 'links',
        items: [{ label: 'Cut a film (GitHub Pages)', href: `${DOCS_SITE}/guide-film/`, external: true }],
      },
    ],
    { related: ['play/script', 'play/director', 'play/finishing-tools'] },
  ),

  page(
    ['play', 'director'],
    'Film Director',
    'The whole production of the active Cast on one page at `/production`, and what to do next.',
    SECTION,
    58,
    [
      ...p(
        '**Film Director** (`/production`, in the Film menu) shows the whole production of the active Cast: what’s made, what’s waiting on you, what went wrong, and what automation did. It only reads — every number comes from what the tools already keep, and each item opens the tool that owns it. (It is not the pose Director: **Direct a move…** on a still keeps that name.)',
      ),
      { type: 'h2', text: 'What next' },
      ...p(
        'The top of the page lists what to do, most pressing first, five at a time: a Cast with no reference picture, failed or lost jobs, a paused run, a kept take marked *Looks wrong*, Scenes with takes and no keeper, continuity findings, Scenes with no take, planned script scenes with nothing made, and coverage gaps. Each opens the exact place; none does the work for you.',
      ),
      { type: 'h2', text: 'The overview' },
      {
        type: 'ul',
        items: [
          '**Scenes and takes** — rendering, to review, kept, with no take, looking wrong, and in the Cut',
          '**Script** — scenes planned, shots planned and made, coverage to look at',
          '**Jobs (last two days)** — waiting, running, failed, lost, with the latest problems',
          '**Automation** — the run’s state, how far it got, why it stopped, and every step',
          '**Continuity and the Cut** — open findings, saved versions, and films cut',
        ],
      },
    ],
    { related: ['play/script', 'play/scene', 'play/cut'] },
  ),

  page(
    ['play', 'finishing-tools'],
    'Finishing tools',
    'Sharpen, make more realistic, copy moves, direct a move, dance, lip-sync, relight, sketch, and upscale any still or clip.',
    SECTION,
    59,
    [
      ...p(
        'On any finished Day slot, Story scene, or Scene take, the card’s **⋯** menu has the finishing tools. Each result goes in the Gallery next to the original — nothing is lost — and replaces what the card shows. Long jobs run in the background with progress, **Cancel**, and **Retry** in the jobs tray, and they survive a reload. Times are on a 24 GB card.',
      ),
      {
        type: 'ul',
        items: [
          '**Sharpen & smooth** (a clip, ~3 min) — SeedVR2 brings it to 1280 on the long side and RIFE doubles a 16 fps clip’s frames; the sound is kept',
          '**Make more realistic** (a clip, a few minutes per 5 s) — a low-strength WAN 2.2 re-render that turns waxy skin and over-smooth detail into real texture, keeping motion, framing, and faces',
          '**Copy moves from a video** (a still, ~5 min for 5 s) — film yourself or pick a video of one person, and the still’s person does the same moves, body, hands, and face (Wan Animate 2), up to 30 s',
          '**Direct a move** (a still, ~3 min for 5 s) — line up beats on a 3D body: poses, ready-made moves from real motion capture (walk, turn, sit, wave, shrug, bow), or moves read from your own video (Castcut 3.2); feet stay planted and the camera frames her like the still. **Continue with a directed move** carries a finished clip on',
          '**Dance to music** (a still, ~10 min for 6 s) — a song, a style (street, K-pop, Latin, Chinese classical, tap), and how big the moves are, on Wan-Dancer',
          '**Lip-sync to a recording** (a still, ~7 min for 5 s) — your voice, a TTS file, or a song, on InfiniteTalk; a second recording makes two people talk in turn',
          '**Relight** (a still, ~1 min) — golden hour, window daylight, lamp at night, overcast, neon, or candlelight, with face, pose, and room kept',
          '**Sketch over this still** (~1 min per render) — draw rough shapes, say what they are, and it re-renders as a photo each time you pause',
          '**Upscale to 4K** (a still, ~20 s) — SeedVR2 to 3840 px on the long side for a print or wallpaper',
        ],
      },
      {
        type: 'callout',
        variant: 'info',
        title: 'Models and GPU memory',
        text: 'Each tool checks its models before queueing and says what to install (Settings → ComfyUI → Models). A video model and a loaded vision LLM don’t both fit on 24 GB, so a job that runs out of memory frees a same-machine LLM and ComfyUI’s cache, then tries once more.',
      },
      {
        type: 'links',
        items: [{ label: 'Finishing tools (GitHub Pages)', href: `${DOCS_SITE}/finishing-tools/`, external: true }],
      },
    ],
    { related: ['play/day', 'play/story', 'play/cut'] },
  ),

  page(
    ['play', 'mobile-studio'],
    'Mobile Studio',
    'The same film loop on a phone at `/m` — Film, Day, Outfit, Story, Scene, and Cut.',
    SECTION,
    60,
    [
      ...p(
        'Mobile Studio (`/m`) is the same film loop, built for a phone — same address as the desk with `/m` on the end. Its tabs are Film, Day, Outfit, Story, Scene, and Cut, with Cast, Gallery, Queue, and Settings under More. Castcut 3.2 adds Script, Locations, and runs on the phone.',
        'Every control is at least 44 px, sheets open from the bottom (or as a drawer on a phone held sideways), and the 3D pose editor and the Director take touch: drag a joint or empty space to orbit, pinch to zoom. Everything made on the phone is on the desk too, with server storage on. **Add to Home Screen** gives it its own icon and a full-screen window.',
      ),
      {
        type: 'links',
        items: [
          { label: 'Open Mobile Studio (local)', href: `${LIVE}/m`, external: true },
          { label: 'Source on GitHub', href: GH, external: true },
        ],
      },
    ],
    { related: ['play/scene', 'play/day', 'play/cut'] },
  ),
]
