# AIM / OBYS Reference Breakdown

Source: [https://aim.obys.agency/](https://aim.obys.agency/)

Scope of this document:
- Learn from its visual system, motion grammar, layout discipline, and interaction architecture
- Do not copy source, assets, wording, brand language, or page composition 1:1
- Translate observations into low-risk experiments for our own M-JJ Particle Hero Engine

Important local note:
- This repository currently has no git commits yet. Before any future prototype work, save the current state first with an initial commit or backup snapshot.

## 1. Overall Impression

This site feels premium because it is extremely disciplined.

- The design language is narrow and consistent: one type family, one restrained palette, one clear modernist reference frame.
- It relies on proportion, timing, and composition more than on flashy effects.
- The large-scale typography and oversized image planes create a museum-poster feeling rather than a typical startup website feeling.
- Scroll is used as choreography, not just navigation. Each section feels staged.
- The strongest impression is not “complex technology”, but “strong editorial control”.

In short: the site feels advanced because every layer supports the same idea. Typography, negative space, image cropping, pacing, and transitions all point in one direction.

## 2. Visual System

### Typography

- Observed font family: `Khtekatrial, sans-serif`
- The type is grotesk / neo-modernist in feeling: clean, dense, neutral, slightly industrial.
- Large headlines use tight tracking and heavy weight.
- Small labels use the same family, which keeps the whole page unified.

### Layout and Grid

- The layout behaves like a rigid editorial grid.
- Hero uses strong vertical and horizontal divisions, with text locked into columns rather than freely floating.
- Sections feel split into left informational rail + right dominant content area.
- Grid rhythm is as important as the content itself.

### Whitespace

- Large empty fields are used aggressively.
- Negative space is not “unused”; it works like a pacing device between dense typographic or visual moments.
- Blank zones increase tension before image reveals and make the typography feel larger.

### Color

- Primary palette is warm off-white / paper beige plus near-black.
- Image sections introduce muted orange, blue, bone, gray, and occasional red accents.
- Contrast is high, but not harsh white-on-black. It feels printed, tactile, and slightly archival.

Approximate observed UI colors:
- Background: `rgb(231, 228, 223)`
- Primary text: `rgb(20, 20, 20)`
- Transition overlay / dark blocks: around `rgb(17, 17, 17)`

### Image Style

- Images are cropped as large geometric planes rather than decorative thumbnails.
- Many images look like AI-generated modernist fashion / architecture / object studies with film-grain texture.
- Framing is formal, symmetrical, and poster-like.
- The image treatment feels curatorial, not expressive-chaotic.

### Black / White / High-Contrast / Modernist Language

- The visual language is clearly modernist: structural, reductive, grid-led, high-contrast.
- Thick black rules, large blocks, sharp divisions, and architectural spacing do most of the aesthetic work.
- It borrows from exhibition catalogs, editorial systems, and constructivist poster logic more than from “3D web” aesthetics.

## 3. Motion System

### Scroll-Driven Animation

Confirmed observations:
- Smooth scrolling is present via `Lenis`.
- The long featured image section uses scroll as a frame-by-frame reveal system.
- The right-side image stack advances vertically as the user moves through a very tall section.

What it feels like:
- Not frantic
- Slow, deliberate, controlled
- Closer to exhibition pacing than social-media pacing

### Transition Rhythm

- Motion is chunked into large beats, not many tiny micro-interactions.
- The page often holds a composition for a while, then performs one strong move.
- This restraint is a big part of why the site feels expensive.

### Easing Character

Observed / likely:
- Smooth inertial scrolling from Lenis
- Element motion appears to use soft eased interpolation rather than springy overshoot
- No obvious bouncy UI behavior

The motion language feels:
- heavy
- frictional
- measured

### Enter / Leave Patterns

- Hero arrives as a composed poster field rather than a dramatic 3D fly-in.
- Large text sections reveal through scroll staging and overlap.
- Featured images appear as stacked panels moving upward into place.
- Navigation to internal pages appears to use a delayed transition trigger.

### Visual Effects Present

Confirmed:
- Lottie animation is used on the hero / decorative line system
- Smooth scrolling
- Large-scale image translation
- Section pinning / sticky-feeling composition in the featured area
- Strong masking-by-cropping through containers
- Grainy image texture in artwork

Likely present:
- opacity fades
- transform-based vertical slides
- fixed / sticky sections
- simple hover-line animations on buttons and links

Not strongly observed on the homepage experience:
- blur-heavy transitions
- shader distortion
- bloom
- true 3D camera movement
- particle simulation

## 4. WebGL / 3D / Shader Guess

This section separates confirmed signals from inference.

### Confirmed

- On the homepage, I did not observe a visible `canvas` element.
- No homepage `webgl` / `webgl2` canvas was detected in the DOM during inspection.
- The page loads Webflow scripts, jQuery, Lenis, and Lottie-related markup.
- Internal transition links use a simple delayed navigation script (`700ms`) rather than an obviously GPU-heavy scene transition.

### Strong Guess

- Most of the homepage experience is probably not Three.js-driven.
- The premium feel is likely coming from:
  - Webflow layout
  - CSS transforms
  - sticky / fixed composition
  - Lottie
  - Lenis smooth scroll
  - carefully staged image containers

### Possible but Unconfirmed

- Some deeper pages or hidden interactions could use more advanced rendering, but that was not clearly visible in the inspected flows.
- Grain and tactile texture may be baked into images rather than generated in shaders.
- “Depth” is mostly compositional depth, not actual 3D scene depth.

### Verdict

For the observed experience:
- WebGL: not confirmed
- Three.js: not confirmed
- Shader distortion: not confirmed
- Image plane logic: visually yes, technically likely DOM/CSS planes rather than WebGL planes
- Camera movement: not observed as real 3D camera motion
- Texture transition: possible in a design sense, but not clearly shader-based

## 5. Interaction Modules

Below is a reusable module breakdown, translated into product-thinking language.

### Hero Intro

- Giant AIM wordmark as an oversized graphic anchor
- Editorial nav line under the logo block
- Split lower hero with left metadata and right headline
- Intro relies on composition, scale, and linework more than animation complexity

### Custom Cursor

- I did not confirm a custom cursor system on the inspected homepage flow.
- Standard pointer behavior seems to be used.
- Takeaway: the site does not need a bespoke cursor to feel premium.

### Scroll Narrative

- Long-form page structure
- Sections feel like chapters
- Scroll moves from identity -> thesis -> featured visual narrative -> footer
- The large featured section is the core storytelling device

### Image Reveal

- Large image planes are clipped inside rigid containers
- Images enter through vertical progression rather than decorative wipes
- Reveal is driven by section height and position, not by excessive flourish

### Text Split Animation

- The site uses large broken lines and editorial fragmentation, but I did not confirm heavy character-by-character split animation on the homepage.
- The “split” feeling mostly comes from line breaks, layering, and staggered composition.

### Gallery / Featured Section

- Very tall section
- Left side stays informational / typographic
- Right side behaves like a sequential image stack
- Scroll advances the image deck one card at a time

### Page Transition

- Confirmed signal: links with `transition-trigger` delay navigation by `700ms`
- There is a hidden fixed transition wrapper in the DOM
- This strongly suggests a CSS overlay / wipe / block transition before page change

### Background Texture / Grain

- Grain is visually prominent in images
- Most likely image-baked, not procedural
- Background itself stays very clean and flat, which makes the image texture stand out more

### 3D Image Plane

- Visually, the featured images act like clean planes
- Technically, this looks closer to DOM image planes in stacked containers than true 3D objects

### Detail Page Transition

- I did inspect `/experiment`, but it appears to be a long editorial page rather than a deep card-to-detail route system.
- No separate artwork detail route was clearly exposed from the observed navigation.
- So this module is better described as “internal page transition between index / experiment / about”, not a rich project-detail transition system.

## 6. What M-JJ Can Learn

The main lesson for M-JJ is not “become this site”.
The lesson is: use stronger restraint and clearer choreography around our existing particle / hero ideas.

### Black Background

- Worth borrowing as an experiment, but only in isolated prototype form.
- Their site proves that a limited palette can increase perceived sophistication.
- For M-JJ, a black field could help particles, bloom edges, and light beams read more cinematically.

### Cinematic Light Beams

- This site does not heavily use volumetric beams, but it does show how strong atmosphere can come from restraint.
- For us: keep beams sparse, directional, and slow. Avoid “sci-fi wallpaper”.

### Particle Edge Dissolve

- Good candidate for M-JJ because it creates a transition language that is ours, not theirs.
- The site’s lesson here is pacing: a dissolve should be a hero event, not constant decoration.

### Image Gridding / Structural Framing

- Very worth borrowing in principle.
- We can present particle/image states inside rigid frames or panels instead of full-bleed chaos.
- This would make the engine feel more authored and less purely generative.

### Mask Systems

- Strong candidate.
- Their container cropping and reveal logic suggest that masks can do more than flashy morphs.
- For M-JJ, masks could reveal particles through architectural slits, bands, or panel shapes.

### Wave / Force Field

- Worth exploring only if it stays subordinate to composition.
- A subtle field disturbing particle edges could echo the site’s controlled movement language without imitating it.

### Bloom / Glow

- Use carefully.
- This reference gets sophistication from material restraint, not neon shine.
- For M-JJ, bloom should be soft and selective, closer to lens spill than game VFX.

### 3D Rotation

- Use small-angle rotation, not dramatic spinning.
- The site teaches that implied depth is often stronger than obvious 3D spectacle.
- A 3D plane that rotates 4 to 12 degrees during interaction is probably enough.

### Scroll Storytelling

- This is the strongest transferable lesson.
- M-JJ should think in chapters:
  - arrival
  - inspection
  - disturbance
  - transformation
  - reveal
- Our particle engine will feel more premium if scroll changes the state of one hero system over time, instead of stacking unrelated effects.

## 7. What We Should NOT Copy

Do not copy:
- Original images
- Original artwork prompts or visual outputs
- Original copywriting or text structure
- AIM / OBYS branding
- Their exact modernist identity language
- Their exact page architecture
- Their exact section order
- Their exact hero composition
- Their specific image crop ratios and curated art direction as a duplicated system

Safe takeaway:
- Learn the grammar
- Do not duplicate the sentence

## 8. Our Next Experiment Plan

This should stay low-risk and isolated.

### Step 1: Save Current Project

- Make an initial commit or backup snapshot first
- Since this repo currently has no commits, do this before any prototype branch or experiment folder work

### Step 2: Keep the Reference Document

- Store this file in `docs/reference/`
- Treat it as a design-analysis input, not as a build spec

### Step 3: Build an Isolated Prototype

- Create a separate prototype route, sandbox, or throwaway scene outside the main page
- Do not wire anything into production hero yet
- Keep the prototype focused on one visual question only

### Step 4: Only Test One Hero Interaction Module

Recommended first test:
- black background
- one image plane
- one particle dissolve edge treatment
- one mask reveal
- very subtle scroll response

Do not combine all of these at once with glow, force field, beams, and heavy rotation.

### Step 5: Merge Only After Success

- If the isolated test proves visually strong and performant, then selectively port the winning parts into M-JJ
- Merge the pattern, not the experiment scaffolding

## Suggested Next Step

Best next move:
- first create an initial git commit for the current project state
- then I can help you write a second document called `docs/reference/MJJ_HERO_EXPERIMENT_PLAN.md`

That follow-up document can turn this analysis into a concrete prototype checklist for our own particle hero without touching the main page.
