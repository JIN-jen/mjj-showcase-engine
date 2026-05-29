# TIIH Master Alignment Document

> Semantic alignment before coding.
> This document supersedes all partial or conflicting guidance in earlier docs.
> Last reviewed: 2026-05-29

---

## CRITICAL CLARIFICATION FIRST: TIIH Is Two Products

Before anything else: **TIIH the Intelligence Terminal** and **TIIH the Brand Website** are two different things under one brand. This document is about the brand website. Every design rule that exists for the terminal applies to the terminal only.

| | TIIH Intelligence Terminal | TIIH Brand Website |
|---|---|---|
| URL | tiih.vercel.app | tiih.com (planned) |
| Purpose | Industrial intelligence platform | Brand gateway + portfolio |
| UI style | Bloomberg Terminal density | Cinematic portfolio |
| Hero sections | Explicitly FORBIDDEN | Core structure |
| Animations | Sidebar ribbon only | GSAP / Lenis full system |
| Design reference | Bloomberg, OSINT dashboards | Obys, Awwwards |
| Visitor | Industrial operator reading signals | Potential client / partner / collaborator |
| Status | Live, V3.1 | Planning phase |

**Rule:** Design decisions for one must never contaminate the other. The terminal's "no hero sections" rule does not apply to the brand website. The brand website's cinematic motion system does not belong in the terminal.

---

## 1. TIIH Core Identity

**Full name:** Tanzania Industrial Intelligence Hub
**中文名:** 坦桑尼亚工业情报中心
**Owner / Founder:** Jin (刘金)

**One-sentence definition:**
> TIIH is the infrastructure layer where industrial operations, AI systems, and business intelligence converge — built in Tanzania, designed for East Africa's industrial future.

**Three-word identity:** Construction. Systems. Business.

**What TIIH actually is (layered):**
1. A working AI-powered industrial intelligence platform (live at tiih.vercel.app)
2. A personal builder brand (Jin, Chinese founder operating in Tanzania)
3. A cinematic portfolio website (what we are now building — the brand face)
4. A business services operation (landing page delivery, AI tools for local clients)
5. A long-term ecosystem vision (AI, ERP, Marketplace, Media, Africa infrastructure)

**Current stage definition:**
Builder Brand + Corporate Brand Hybrid. Jin's identity as "a Chinese builder in Africa doing AI + industrial systems" is the most valuable narrative asset right now. TIIH should not become a cold corporate entity before that story is fully told.

---

## 2. Website Identity

**What the brand website (TIIH.com) is:**
The cinematic front door to the TIIH ecosystem. It tells who Jin is, what TIIH has built, what tools exist, what services are available, and where the system is going. It is simultaneously a personal portfolio, a business credential, and a system gateway.

**What the brand website is NOT:**
- Not a replacement for the intelligence terminal
- Not a SaaS product marketing page
- Not a creative agency portfolio
- Not a resume or personal blog
- Not a news or media site

**Primary audiences (in order):**
1. Potential clients for landing page services (Chinese companies in Tanzania, local businesses)
2. Industry partners, contractors, importers, operators who may use TIIH tools
3. International collaborators or investors interested in East Africa AI + industrial
4. Anyone trying to understand who Jin is and what TIIH does

**The core experience the website must deliver:**
Arrive → Understand the scale and seriousness of what's being built → Believe Jin can deliver → Take an action (contact, explore work, enter a system)

---

## 3. Visual Identity

**Canonical color system for the brand website:**

```
Background primary:   #0a0a0a   (near black, not pure black)
Background layer:     #111111   (deep surface)
Background elevated:  #1a1a1a   (card / section contrast)
Text primary:         #f0f0f0   (near white)
Text secondary:       #a0a0a0   (silver gray)
Text muted:           #555555   (barely visible structural text)
Accent (steel glow):  #b0c4de   (blue-white, cold steel tone)
Border subtle:        #2a2a2a   (structural lines)
Border accent:        rgba(176,196,222,0.15) (glow border on hover/focus)
```

Note: These differ intentionally from the terminal's palette (`#0a0a0b`, `#d4d4d8`). The brand website uses slightly warmer near-whites and deeper blacks — more cinematic, less utilitarian.

**Typography system:**

The brand website demands aggressive typographic scale. This is non-negotiable.

- Display (hero, section titles): 8–16vw. Extended or condensed weight. No decorative fonts.
- Statement (sub-hero proclamations): 4–6vw. Same typeface family, lighter weight.
- Body: Clean, geometric sans-serif. 16–18px base. Generous 1.6–1.8 line height.
- Metadata / labels: Monospaced. 11–13px. Used for categories, years, system tags.
- No script fonts. No rounded casual fonts. No display serifs that feel editorial rather than industrial.

**The visual grammar rule:**
Every visual decision should evoke: concrete, steel, precision engineering, machine logic, East African heat, and the weight of real operations — not design aesthetics for their own sake.

**Atmosphere:**
- Grain texture overlay (subtle, via CSS or SVG filter)
- Particle or light beam effects reserved for hero / vision sections only
- No gradients that feel like SaaS (blue-to-purple, pink-to-orange, etc.)
- No stock photography of people in offices, handshakes, or generic "business" imagery
- Real imagery: construction sites, machinery, Tanzania landscape, actual systems/interfaces

**Spatial rhythm:**
- Cinematic breathing room between sections (12–20vh vertical gap)
- Horizontal padding: 5–8vw desktop, 6% mobile
- Elements do not compete — they arrive one at a time

---

## 4. Motion Identity

**Philosophy:** Motion reveals structure. It is not decoration. Every animation must serve the purpose of helping the viewer understand what they are looking at — or make the arrival of information feel earned.

**Motion stack:**
- Lenis: smooth scroll provider (normalized velocity, no native browser choppiness)
- GSAP + ScrollTrigger: all scroll-driven and entrance animations
- Three.js: particle system / WebGL layer, reserved for Phase 5, never blocks initial render

**Core motion vocabulary:**

| Motion | Implementation | Purpose |
|---|---|---|
| Loader boot sequence | Timed GSAP timeline | Establishes identity before anything else loads |
| Text reveal (lines) | SplitText + stagger + clip-path from bottom | Type feels printed, not present |
| Image mask reveal | scaleY or clip-path from edge, scroll-triggered | Images feel unveiled |
| Section entrance | opacity + translateY, 60px travel, 0.8s ease-out | Sections feel structural |
| Parallax depth | GSAP scrub on background/foreground layers | Cinematic depth without 3D |
| Hover distort | subtle scale + translate on mouseenter | Surfaces feel responsive |
| Page transition | Overlay wipe or fade — coordinated enter/exit | World feels continuous |
| Next project reveal | Full-width link + image preview on hover | Portfolio feels interconnected |

**Motion rules:**
- Never animate for more than 1.2s without user scroll involvement
- Never show two entrance animations simultaneously — stagger everything
- `prefers-reduced-motion` must be respected (all GSAP animations conditionally disabled)
- Lenis must be paused during page transitions to prevent scroll conflicts
- No looping ambient animations except the loader and any WebGL layer

---

## 5. Brand Tone

**Voice:** Declarative. Not promotional. Not humble. Not casual.

TIIH speaks the way an engineer presents results: here is what was built, here is what it does, here is why it matters. No marketing language. No "we help businesses grow." No "innovative solutions."

**Tone in practice:**

| Context | Wrong | Right |
|---|---|---|
| Hero headline | "Transforming Africa's Industrial Future" | "Industrial Intelligence. Built for Tanzania." |
| Project description | "A powerful AI-driven platform to help operators make decisions" | "Real-time signal interpretation for equipment importers and contractors." |
| About section | "Jin is passionate about technology and Africa" | "Jin builds AI-native systems in Tanzania. Machinery. Operations. Intelligence." |
| CTA | "Get in touch today!" | "Enter the System." |

**Bilingual rule:**
All copy defaults to English first. All structure must support CN/EN toggle in future. Where Swahili appears, it is contextual and specific — never decorative.

---

## 6. What TIIH Is NOT

These are permanent guardrails. They apply to both the intelligence terminal and the brand website, though for different reasons.

**Identity level:**
- Not a creative agency (no project mood boards, no "we tell your brand's story")
- Not a SaaS company (no feature comparison tables, no pricing tiers on the homepage)
- Not a news or media brand (no article feeds, no trending topics)
- Not a consulting firm (no "methodology" decks, no case study fluff)

**Visual level:**
- Not Glassmorphism / Neumorphism / Frosted glass UI
- Not colorful gradient backgrounds (blue/purple/pink/orange)
- Not rounded-corner card-heavy layouts that look like Notion or Linear
- Not stock photo driven
- Not animated emoji or micro-interaction playfulness
- Not "dark mode of a normal website" — must feel built from darkness, not toggled into it

**Motion level:**
- Not scroll-jacking (Lenis must never fight the user's scroll intent)
- Not motion for every element (stillness is as intentional as motion)
- Not particle effects that look like screensavers or wallpaper apps

**Business level:**
- Not overbuilt (no CMS, no auth, no database for Phase 1–4)
- Not feature-complete (build what the current phase requires, nothing else)

---

## 7. Future Extensibility

The brand website must be architected to receive the following without structural refactoring:

**Content extensibility:**
- New projects added via data files, no layout changes required
- New tools added at `/tools/[slug]` with their own landing page
- New industry templates added at `/templates/[slug]`
- Multi-language content (EN → CN → SW) via i18n layer added later

**Technical extensibility:**
- Three.js WebGL layer drops in without touching existing scroll/animation system
- CMS (Sanity / Contentful) can replace static data files when content volume requires it
- Authentication layer can be added to `/tools` section if tools require login
- Analytics (Posthog, Plausible) adds without touching component logic

**Brand extensibility:**
- New TIIH sub-products (ERP, Marketplace) get their own entry points within the site
- Individual client landing pages can live under `/work/[client-slug]` alongside portfolio work
- YouTube / media presence links in from the site, not embedded into core layout

---

## 8. Ecosystem Relationships

This is the most important conceptual map in the entire TIIH system.

```
M-JJ (Obsidian Vault)
│
│   The knowledge and memory layer. Not a product or brand.
│   Lives at ~/Documents/M-JJ/
│   Contains: project docs, daily notes, AI memory, workflows.
│
├── TIIH (Brand + Ecosystem)
│   │
│   │   The master brand. Long-term infrastructure vision.
│   │   Everything belongs to or descends from TIIH.
│   │
│   ├── TIIH Intelligence Terminal  (tiih.vercel.app)
│   │       Live product. Bloomberg-style industrial signal platform.
│   │       Code: ~/Documents/tiih/
│   │       Stack: Next.js + TypeScript + Tailwind + Vercel KV
│   │       Status: V3.1, production
│   │
│   ├── TIIH Brand Website  (tiih.com — planned)
│   │       What we are building now. Cinematic portfolio + gateway.
│   │       Code: ~/Documents/Jin 企业宣传页项目/ (to be confirmed)
│   │       Stack: Next.js + TypeScript + Tailwind + GSAP + Lenis
│   │       Status: Planning phase
│   │
│   ├── TZ Helper
│   │       Product brand for local tools — ERP, translation, M-Pesa tools,
│   │       business assistant tools. Serves Tanzania operators directly.
│   │       Positioned as pragmatic utility, not cinematic intelligence.
│   │
│   ├── Landing Page Business
│   │       Service operation: builds landing pages for local TZ businesses
│   │       and Chinese companies in Tanzania. Delivery in 7 days.
│   │       The brand website showcases these as portfolio work.
│   │
│   └── AI Systems / Future Ecosystem
│           ERP, Marketplace, Media network, Africa industrial data.
│           Not yet built. Reserved in architecture.
│
└── Jin / Jin Africa (Personal IP)
        The human face. Builder story. Africa field context.
        YouTube: @jjinafrica
        Not a separate brand — the founder layer of TIIH.
```

**Relationship rules:**
- M-JJ is never shown to clients or visitors. It is the internal operating system.
- The brand website links TO the intelligence terminal — it is not the terminal.
- TZ Helper products appear in the brand website's `/tools` section.
- Landing page work appears as portfolio in `/work`.
- Jin's personal story lives in `/about` — it is the human context for TIIH, not separate from it.

---

## 9. Unified Design Language

These rules apply across all TIIH-branded surfaces (both the terminal and the brand website), with product-specific adjustments where noted.

**Universal rules (both terminal and brand website):**
- Always dark background. No light mode.
- Black is structural, not decorative — things that are black disappear; things that glow are important.
- Color as signal, not decoration. Every color choice must answer: what is this communicating?
- Typography is the primary visual element. Before animation, before image, before layout.
- Real content only. No Lorem ipsum, no placeholder data, no fake metrics.
- Bilingual structure. EN first, CN supported, SW contextual.

**Brand website specific:**
- Large-scale cinematic type (8–16vw at hero level)
- GSAP + Lenis motion system active
- Sections have cinematic breathing room (12–20vh gaps)
- Image / video as atmosphere, not as decoration
- Project work shows real results in industrial language

**Terminal specific:**
- Dense information layout (information per pixel maximized)
- No hero sections, no marketing patterns
- Badge system and signal strength indicators locked
- Font sizes in 9–13px range for data density
- Motion limited to sidebar ribbon animation only

---

## 10. Rules Before Coding

These rules govern the brand website build. They are not guidelines — they are constraints.

**Architecture rules:**
1. One codebase. One project directory. No parallel copies or backup directories.
2. Phase commits only. Each phase must be stable before the next starts.
3. No CMS until Phase 4 content volume requires it.
4. No backend until a feature explicitly requires it.
5. No auth until a tool requires gated access.
6. No Three.js until Phase 5 — don't block Phase 1–4 on it.

**Design rules:**
7. No design decision is made without checking: "Does this reinforce Industrial Intelligence Cinema, or does it drift toward agency/SaaS/media aesthetics?"
8. Typography scale is decided before layout. Type is the structure.
9. No animation is added without asking: "What does this motion reveal or earn?"
10. Color additions require explicit approval against the color system above.

**Content rules:**
11. All copy must be factual and results-oriented. No marketing language.
12. Real project names, real industries, real outcomes. No invented case studies.
13. English first. Every text block must have a CN equivalent prepared or reserved.
14. Jin's story is told as a builder, not as a marketer.

**Brand rules:**
15. TIIH brand website and TIIH terminal are separate surfaces — never mix their design rules.
16. No brand direction change (color system, type scale, identity language) without explicit Jin approval.
17. Landing page client work goes in `/work` — it is portfolio, not services marketing.
18. The word "innovative" is banned. Describe what was built, not how it felt to build it.

**Development rules:**
19. Commit message format: `[phase] description` — e.g., `[phase-1] static home skeleton`
20. No unfinished features on main branch. Half-built is worse than unbuilt.
21. Mobile must be tested at every phase — not deferred to Phase 6 QA.
22. `prefers-reduced-motion` respected from Phase 2 forward.

---

## Reference: Source Documents Analyzed

| Document | Location | Key Contribution |
|---|---|---|
| TIIH_BRAND_SYSTEM.md | M-JJ/02-BUSINESS/BRAND/TIIH/ | Brand matrix, visual direction keywords, long-term ecosystem |
| UI_VISUAL_IDENTITY.md | M-JJ/01-PROJECTS/TZ-HELPER/TIIH/ | Terminal UI rules (locked), what not to import into brand site |
| TIIH README.md | M-JJ/01-PROJECTS/TZ-HELPER/TIIH/README/ | Live tech stack, production URL, completed modules |
| PROJECT_STATE.md | M-JJ/01-PROJECTS/TZ-HELPER/TIIH/STATE/ | System principles, what is and isn't built |
| SelfLandingPageProject.md | M-JJ/01-PROJECTS/Landing-Page-Business/ | Portfolio project directory, governance rules |
| Landing-Page-Business README | M-JJ/01-PROJECTS/Landing-Page-Business/ | Client types, service constraints, market positioning |
| DOMAIN.md | M-JJ/02-BUSINESS/BRAND/TIIH/ | Domain priority: tiih.com → tiih.ai → tiih.africa |
| Particle Hero Engine doc | M-JJ/07-KNOWLEDGE/THINKING/ | WebGL/particle architecture principles |
| TIIH_OBYS_REBUILD_PLAN.md | /Users/mac/docs/ | Cinematic website plan (this build) |

---

*Document created: 2026-05-29*
*Owner: Jin / TIIH*
*Status: Semantic alignment complete — cleared for Phase 1 when ready*
