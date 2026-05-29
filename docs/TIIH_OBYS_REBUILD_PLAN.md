# TIIH — Obys-Style Cinematic Rebuild Plan

> Tanzania Industrial Intelligence Hub — Personal Brand + Business Portfolio + Industrial System Gateway

---

## 1. Project Positioning

**Brand:** TIIH — Tanzania Industrial Intelligence Hub
**Owner:** Jin

**Core Identity:**
- Construction. Systems. Business.
- Not a creative agency portfolio. Not a SaaS product page.
- An industrial intelligence command center presented as cinema.

**Style Direction:** Industrial Intelligence Cinema
- Think: dark luxury, heavy engineering, precision systems
- Visual grammar: concrete, steel, code, machine logic
- Tone: authoritative, minimal, purposeful

**Purpose (layered):**
1. Personal brand — who Jin is, what he builds
2. Business portfolio — real projects, real industries, real results
3. AI tools showcase — tools built for operators and businesses
4. Landing page hub — individual pages for each system or product
5. Industrial system gateway — entry point to TZ-HELPER and future platforms

**Positioning statement:**
> TIIH is where industrial operations meet AI-native systems. Built for Tanzania. Designed for scale.

---

## 2. Reference Logic (Obys-Style Inspiration Only)

We study Obys and Awwwards-tier portfolios for **structural rhythm and motion grammar only.**
No code, assets, copy, or brand identity is copied.

What we extract as structural inspiration:

| Obys Pattern | TIIH Equivalent |
|---|---|
| Opening loader with identity reveal | TIIH loader — industrial boot sequence |
| Full-screen cinematic hero | Hero — one line, full viewport, heavy type |
| Scroll-driven narrative sections | Industrial story told through scroll |
| Large type statement sections | System proclamations, data points, identity beats |
| Project showcase grid / horizontal list | Live Projects — card or list format |
| Individual case-study page | Work Detail — project deep-dive page |
| Visual transition sections | Section breaks using motion, not decorative dividers |
| Final CTA / contact section | "Enter the System" — contact or access gateway |

The rhythm: **arrive → understand → believe → enter.**

---

## 3. Website Architecture

```
TIIH Website
├── / Home
├── /work               Work / Projects (index)
├── /work/[slug]        Work Detail Template (per project)
├── /tools              Tool Ecosystem
├── /templates          Industry Templates
├── /about              About / Jin
└── /contact            Contact / Enter the System
```

All pages share: the same visual system, motion system, and navigation shell.

---

## 4. Home Page Sections

**Sequence (scroll order):**

```
[ Loader ]
  Industrial boot sequence. TIIH identity reveal. Fades to Hero.

[ Hero ]
  Full viewport. One massive headline. Minimal subtext. Scroll prompt.
  "Industrial Intelligence. Built for Tanzania."

[ Who is Jin / What is TIIH ]
  Split or stacked. Short identity block. Personal + system context.
  Cinematic entrance. No bios, no bullet lists — short declarative text.

[ Live Projects ]
  Cards or horizontal list. Real projects. Real industries.
  Each card: project name, industry tag, year, short outcome line.
  Hover: image/video reveal. Click: enters /work/[slug].

[ Industry Templates ]
  Showcase reusable system templates built for specific industries.
  Presented as a grid or ticker — not a feature list.

[ Tool Ecosystem ]
  AI tools and systems Jin has built or is building.
  Minimal. Icon or name + one-line description. Link to /tools.

[ Industrial Intelligence Vision ]
  Full-width statement section. Large type. Scroll-triggered.
  Sets the ideology: why AI + industrial operations matter in East Africa.

[ Contact / Enter the System ]
  Final CTA. Email. WhatsApp. Or a form.
  Tone: not "reach out" — "Enter the System."
```

---

## 5. Work Detail Page Structure

URL pattern: `/work/[project-slug]`

**Section sequence:**

```
[ Project Title ]
  Full-screen. Dark background. Huge type. Category tag. Year.

[ Hero Visual ]
  Full-viewport image or video. Mask reveal on load.

[ Short Description ]
  2–3 sentence project summary. Role. Industry. What was built.

[ Metadata Strip ]
  Role | Industry | Year | System Type
  Single horizontal line or minimal grid.

[ Large Image / Video Blocks ]
  Alternating full-width and contained visuals.
  Show the system, the interface, the environment.

[ Process / Result / Business Value ]
  Three beats. Not a timeline. Not bullet points.
  Short paragraphs or large callout numbers (e.g., "3 months → live system").

[ Next Project Transition ]
  Full-width link to the next project.
  Image preview on hover. Smooth page transition.
```

---

## 6. Visual System

**Color palette:**
```
Background:   #0a0a0a  (near black)
Surface:      #111111 / #1a1a1a  (deep gray layers)
Text primary: #f0f0f0  (near white)
Text muted:   #888888  (silver gray)
Accent:       #b0c4de  (blue-white glow — steel tone)
Border:       #2a2a2a  (barely visible structural lines)
```

**Typography:**
- Display: ultra-large, extended or condensed serif or mono — heavy weight
- Body: clean sans-serif, generous line height
- Scale: aggressive — hero type at 10–16vw, not 48px
- No decorative fonts. No script. No rounded casual.

**Spacing:**
- Cinematic breathing room. Sections do not stack tightly.
- Horizontal padding: 5–8vw on desktop
- Vertical rhythm: 12–20vh between sections

**Atmosphere:**
- Particle or light beam effects (subtle, not decorative)
- Grain texture overlay (light, CSS or SVG)
- No gradients that look like SaaS
- No colorful blobs, hero illustrations, or generic stock imagery

**Rules:**
- No colorful random UI
- No generic SaaS template look
- No card shadows with rounded corners and padding-heavy layouts
- Every element earns its place

---

## 7. Animation System

**Scroll engine:** Lenis (smooth scroll, normalized across devices)

**Motion engine:** GSAP + ScrollTrigger

**Core animation patterns:**

| Pattern | Implementation |
|---|---|
| Text reveal | Lines split with SplitText, stagger up from clip-path |
| Image mask reveal | `clip-path` or `scaleY` from bottom, triggered on scroll enter |
| Parallax | GSAP ScrollTrigger with `scrub` on image layers |
| Hover distort | CSS transform or GSAP on mouseenter/mouseleave |
| Page transition | Overlay wipe or fade — coordinated entry/exit |
| Loader animation | Timed sequence: logo in → type reveal → fade out → hero in |
| Section entrance | Elements enter with opacity + translateY, staggered |

**Future layer reserved:**
- Three.js: particle system, WebGL shader background for hero or vision section
- Integrate after core motion system is stable

**Framer Motion:** Optional — use only if Next.js page transitions benefit from it. GSAP takes priority.

---

## 8. Technical Stack Recommendation

Use existing project stack if already defined. If not fixed:

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS (utility base) + CSS Modules for component-level |
| Motion | GSAP + ScrollTrigger |
| Smooth Scroll | Lenis |
| Page Transition | Framer Motion (optional) or GSAP |
| 3D / WebGL | Three.js (Phase 5, reserved) |
| Deployment | Vercel |
| CMS | None — content in code for now |
| Backend | None — static or minimal API routes only |

**Folder structure suggestion:**
```
/app
  /page.tsx                  ← Home
  /work/page.tsx             ← Projects index
  /work/[slug]/page.tsx      ← Work detail template
  /tools/page.tsx
  /templates/page.tsx
  /about/page.tsx
  /contact/page.tsx
/components
  /ui                        ← Base elements
  /sections                  ← Home section components
  /layout                    ← Nav, Footer, PageWrapper
  /motion                    ← Reusable animation wrappers
/lib
  /data                      ← Project data (JSON or TS)
  /gsap                      ← GSAP initialization helpers
  /lenis                     ← Lenis setup
/styles
  globals.css
/public
  /projects                  ← Project images and videos
```

---

## 9. Development Phases

**Phase 1 — Static Cinematic Skeleton**
- Next.js project setup with TypeScript + Tailwind
- Global layout: nav shell, footer, page wrapper
- Home page: all sections in static HTML with correct spacing and type scale
- Work index page: static project cards
- Work detail template: static layout with placeholder visuals
- Goal: the skeleton looks right before motion is added

**Phase 2 — Motion System**
- Lenis integration (smooth scroll provider)
- GSAP + ScrollTrigger setup
- Loader animation
- Hero text reveal
- Section entrance animations (text + image)
- Page transition shell
- Goal: the site feels alive with core motion

**Phase 3 — Project Cards and Detail Template**
- Project data structure (TypeScript objects or JSON)
- Dynamic routing for `/work/[slug]`
- Work detail page fully populated with real layout
- Card hover states (image reveal, type shift)
- Next project transition from detail page
- Goal: full project showcase flow works end-to-end

**Phase 4 — TIIH Content Replacement**
- Replace all placeholder copy with real TIIH content
- Real project data: descriptions, images, outcomes
- Real About / Jin section content
- Real Tools section
- Contact section live
- Goal: the site represents TIIH accurately

**Phase 5 — Particle / WebGL Enhancement**
- Three.js canvas layer for hero or vision section
- Particle system or light beam atmosphere
- Shader or noise background (subtle, not gimmicky)
- Performance audit — ensure mobile is not broken
- Goal: elevated cinematic atmosphere without sacrificing performance

**Phase 6 — Responsive QA and Deployment**
- Mobile layout audit (navigation, type scale, spacing)
- Tablet breakpoints
- Performance: Lighthouse audit, image optimization
- Accessibility: keyboard nav, focus states, reduced-motion support
- Final Vercel deployment with custom domain
- Goal: production-ready

---

## 10. Rules

**Build rules:**
- Do not overbuild backend now — no CMS, no database, no auth system
- Do not add CMS until content volume requires it
- Do not change brand direction (color, type, tone) without explicit approval
- Commit after each stable phase with a clear commit message
- No half-finished features pushed to main

**Content rules:**
- All copy defaults to English first
- All copy must be bilingual-ready (structure supports CN/EN toggle in future)
- Project descriptions must be factual and results-oriented — no marketing fluff

**Extension rules:**
- Architecture must support adding future tools at `/tools/[slug]`
- Architecture must support adding landing pages at `/templates/[slug]`
- Architecture must support adding new projects without refactoring layout
- Three.js layer must be optional/lazy — never block initial render

**Identity rules:**
- TIIH is not a creative agency. Do not drift toward agency aesthetics.
- TIIH is not a SaaS product. Do not drift toward product marketing visuals.
- TIIH is industrial intelligence. Every visual and copy decision should reinforce this.

---

## Status

- [ ] Phase 1: Static cinematic skeleton
- [ ] Phase 2: Motion system
- [ ] Phase 3: Project cards and detail template
- [ ] Phase 4: TIIH content replacement
- [ ] Phase 5: Particle / WebGL enhancement
- [ ] Phase 6: Responsive QA and deployment

---

*Document created: 2026-05-29*
*Owner: Jin / TIIH*
*Status: Planning — no coding started*
