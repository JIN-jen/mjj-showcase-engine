---
name: Hospitality Master Template
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1b1b1b'
  on-surface-variant: '#4c4546'
  inverse-surface: '#303030'
  inverse-on-surface: '#f1f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e1dfdf'
  on-secondary-container: '#626263'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1b1b'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e4e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#f9f9f9'
  on-background: '#1b1b1b'
  surface-variant: '#e2e2e2'
typography:
  display-xl:
    fontFamily: Playfair Display
    fontSize: 120px
    fontWeight: '400'
    lineHeight: 110%
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 110%
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 120%
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 120%
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 160%
    letterSpacing: -0.01em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 160%
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 140%
    letterSpacing: 0.1em
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 140%
spacing:
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-tablet: 40px
  margin-mobile: 24px
  section-gap: 160px
---

## Brand & Style

The design system is rooted in the philosophy of "Architectural Silence." It prioritizes the high-end hospitality content—stunning photography and immersive storytelling—over the UI itself. The brand personality is authoritative, quiet, and uncompromisingly premium, targeting ultra-high-net-worth individuals and luxury developers.

The design style is a hybrid of **Luxury Editorial** and **Swiss Minimalism**. It utilizes a museum-like approach where every element is intentional, breathing within expansive whitespace. There are no decorative flourishes, gradients, or unnecessary shadows; the "premium" feel is derived from perfect typography, rigorous grid alignment, and the rhythmic use of scale.

## Colors

This design system employs a strictly achromatic palette to maintain a timeless, editorial aesthetic. 

- **Primary (#000000):** Used for all primary headlines, body text, and structural borders.
- **Secondary (#707070):** Reserved for meta-data, captions, and secondary UI labels where visual hierarchy requires a slight softening.
- **Background (#FFFFFF):** The canvas. White space is treated as a physical material, used generously to frame content.
- **Surface (#F9F9F9):** A subtle off-white used only for large background sections or hover states to provide a whisper of depth without breaking the minimalist code.

## Typography

Typography is the primary visual driver. The system pairs a high-contrast, elegant Serif for storytelling with a precise, Swiss-inspired Sans-Serif for utility.

- **Editorial Headlines:** Use *Playfair Display* with tight leading and negative letter-spacing for a dramatic, cinematic feel. Large display sizes should be used to anchor sections.
- **Interface & Body:** Use *Hanken Grotesk*. It provides a clean, neutral counterpoint to the serif. 
- **Utility Labels:** Small-caps with increased letter-spacing are used for navigational elements and category tags to mimic high-end fashion mastheads.
- **Technical Meta:** *JetBrains Mono* is used sparingly for room specs or technical data to introduce a subtle "curated" or "cataloged" feel.

## Layout & Spacing

The layout follows a rigorous **12-column Swiss Grid**. Consistency is non-negotiable to maintain the "Museum" aesthetic.

- **Whitespace:** Use `section-gap` between major narrative blocks to ensure the user never feels overwhelmed.
- **Asymmetry:** Headlines should frequently offset from the body copy (e.g., Headline spans cols 1-6, Body spans cols 8-11) to create visual tension and interest.
- **Responsive Behavior:** On mobile, the 12-column grid collapses to 4. Margins tighten, but the vertical "section-gap" remains significant to preserve the luxury feel.
- **Image Aspect Ratios:** Use fixed, editorial ratios (4:5, 3:2, 16:9) and never let text crowd an image.

## Elevation & Depth

This design system avoids physical depth. It is entirely **Flat and Tonal**. 

- **No Shadows:** Depth is communicated through scale, negative space, and occasional stark borders (1px black).
- **Layering:** When elements must overlap (e.g., a label over an image), use absolute positioning with high-contrast text. 
- **Borders:** Use hairline 1px borders (#000000 at 10-20% opacity) for structural divisions in data-heavy views.
- **Background Blurs:** Not used. If an overlay is required, use a solid #FFFFFF at 95% opacity to maintain the clean, "paper" aesthetic.

## Shapes

The shape language is strictly **Sharp (0px)**. 

Every UI element—buttons, input fields, image containers, and cards—must have 90-degree corners. This reinforces the architectural and modernist nature of the hospitality engine. The only "curves" permitted in the system are those found within the letterforms of the typography.

## Components

Components are designed to be as invisible as possible, acting as functional footnotes to the content.

- **Buttons:** Primary buttons are text-only with a 1px bottom border (underline), or a solid black rectangle with white text. No rounded corners. Hover states involve a subtle opacity shift or a solid-to-outline transition.
- **Input Fields:** A single 1px baseline. Labels sit above the line in `label-caps`. 
- **Cards:** No containers, no shadows. A "card" consists of an image at a fixed aspect ratio, followed by a `label-caps` category and a Serif headline.
- **Navigation:** A minimal top bar. Links are `label-caps`. The "Book Now" or primary CTA is a stark black box to create a clear focal point.
- **Images:** All images should be treated as art pieces. Use "Object-fit: cover" and ensure a subtle grayscale or high-contrast treatment for consistency if the source photography varies.
- **Cursors:** For the showcase engine, a custom "circular" cursor that expands over clickable images (showing "VIEW") is recommended to add a touch of interactive luxury.