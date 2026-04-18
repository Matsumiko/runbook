# FRONTEND-DNA.md

## Purpose
This file defines the visual and interaction DNA of this project's frontend.
It is the source of truth for all future UI work.

Agents and developers must read this file before writing any frontend code.
Every addition must feel native to this product — not imported from another project,
not generated from generic instincts, not "modern" in a vacuum.

If this file conflicts with personal taste or current trends, this file wins.

---

## How to Use This File

- **Before building:** Read all sections. Internalize the DO / DON'T rules.
- **During build:** Check every component decision against this file.
- **After build:** Verify the result does not violate any Forbidden Outcomes.
- **When updating this file:** Only update based on deliberate design decisions — not to
  retroactively justify drift.

---

## Tone

> Describe the overall feeling the product should give the user.
> Is it calm and professional? Playful and energetic? Dense and data-rich? Minimal and airy?

**Primary tone:** [e.g. "Clean, focused, professional — like a well-organized workspace"]
**Secondary tone:** [e.g. "Warm enough to not feel cold, minimal enough to not feel cluttered"]
**Tone must never feel:** [e.g. "Flashy, gamified, startup-generic, enterprise-grey"]

**Reference products that share this tone:**
- [e.g. Linear, Notion, Vercel dashboard]

---

## Color Palette

> Define the actual colors in use. Be explicit — agents will use these values.

### Brand Colors
```
Primary:      #______  (used for: CTAs, active states, key highlights)
Secondary:    #______  (used for: secondary actions, supporting accents)
Accent:       #______  (used for: badges, tags, callouts — sparingly)
```

### Neutral Scale
```
Background:       #______
Surface:          #______  (cards, modals, sidebars)
Surface Elevated: #______  (dropdowns, popovers, tooltips)
Border Default:   #______
Border Strong:    #______
Text Primary:     #______
Text Secondary:   #______
Text Muted:       #______
Text Disabled:    #______
```

### Semantic Colors
```
Success:   #______  (bg: #______, text: #______)
Warning:   #______  (bg: #______, text: #______)
Error:     #______  (bg: #______, text: #______)
Info:      #______  (bg: #______, text: #______)
```

### Dark Mode Behavior
- [ ] Dark mode supported
- [ ] Dark mode not supported (do not introduce it)

**If supported:**
- Surface color logic: [e.g. "Darken neutrals, never invert brand colors"]
- What changes: [e.g. "Backgrounds, borders, text"]
- What stays the same: [e.g. "Brand primary, semantic colors stay consistent"]

### Color Rules
**DO:**
- [e.g. Use primary color only for the single most important action per screen]
- [e.g. Use muted text for supporting information]

**DON'T:**
- [e.g. Use multiple accent colors on the same component]
- [e.g. Use colored backgrounds on large content areas]
- [e.g. Introduce new colors outside this palette without explicit approval]

---

## Typography

### Type Scale
```
Display:    ___px / ___px  weight: ___  tracking: ___  (used for: ___)
Heading 1:  ___px / ___px  weight: ___  (used for: ___)
Heading 2:  ___px / ___px  weight: ___  (used for: ___)
Heading 3:  ___px / ___px  weight: ___  (used for: ___)
Body:       ___px / ___px  weight: ___  (default reading text)
Body Small: ___px / ___px  weight: ___  (supporting copy, captions)
Label:      ___px / ___px  weight: ___  (form labels, table headers)
Mono:       ___px / ___px  weight: ___  (code, IDs, technical values)
```

### Font Family
```
Sans:  [font name]
Mono:  [font name]  (if applicable)
Serif: NOT USED (do not introduce)
```

### Typography Rules
**DO:**
- [e.g. Use weight to create hierarchy, not size alone]
- [e.g. Limit heading levels per page — max 2 heading sizes visible at once]

**DON'T:**
- [e.g. Use font-weight 700+ outside of display/hero contexts]
- [e.g. Use more than 2 font sizes in a single card or panel]
- [e.g. Center-align body text]

---

## Layout & Spacing

### Grid System
```
Max content width: ___px
Page padding (desktop): ___px
Page padding (mobile):  ___px
Column count: ___
Gutter: ___px
```

### Spacing Scale
> List the spacing tokens in use. Stick to this scale — do not invent intermediate values.
```
4px   — micro gaps (icon-to-label, badge padding)
8px   — tight spacing (within components)
12px  — component internal padding (small)
16px  — component internal padding (standard)
24px  — between related elements
32px  — between sections within a page area
48px  — between major page sections
64px  — between page-level blocks
```

### Density
**Overall density:** [e.g. "Medium — comfortable but not spacious. Not tight like a data grid, not airy like a marketing page"]

**DO:**
- [e.g. Keep consistent internal padding within a component family]
- [e.g. Use the same vertical rhythm across all list-style layouts]

**DON'T:**
- [e.g. Vary padding arbitrarily between similar components]
- [e.g. Add extra margin to "breathe" — if it needs breathing room, the component needs rethinking]

---

## Border Radius

```
None:    0px    (tables, dividers, full-width elements)
Small:   ___px  (badges, tags, small chips)
Default: ___px  (buttons, inputs, small cards)
Medium:  ___px  (cards, panels, standard modals)
Large:   ___px  (large modals, drawer headers, feature cards)
Full:    9999px (pill buttons, avatar chips — use sparingly)
```

**Rule:** Border radius must be consistent across component families.
A card and its inner components should share the same radius logic, not diverge.

---

## Shadows & Depth

**Shadow philosophy:** [e.g. "Subtle — depth is suggested, not dramatic"]

```
None:     no shadow     (flat elements, inline components)
Subtle:   [value]       (cards at rest)
Default:  [value]       (dropdowns, popovers, hover states)
Elevated: [value]       (modals, dialogs, floating panels)
```

**DO:**
- [e.g. Use shadow only to indicate elevation — not for decoration]

**DON'T:**
- [e.g. Apply colored shadows]
- [e.g. Use large blur-radius shadows on small elements like badges]
- [e.g. Stack shadows on already-elevated elements]

---

## Component Patterns

### Buttons / CTAs

```
Primary:    [describe: fill color, text color, border, radius, hover behavior]
Secondary:  [describe: outline or ghost style, behavior]
Destructive:[describe: color treatment for delete/danger actions]
Ghost:      [describe: text-only, hover state]
Icon-only:  [describe: size, border treatment]

Sizes: sm (___px height) | md (___px height) | lg (___px height)
```

**DO:**
- [e.g. One primary CTA per view — never two primary buttons side-by-side]
- [e.g. Always include a visible focus ring for keyboard accessibility]

**DON'T:**
- [e.g. Use the primary button for non-committing actions like "Cancel"]
- [e.g. Use icon-only buttons without tooltips]

---

### Cards

```
Background:    [color token]
Border:        [border style or "none"]
Radius:        [radius token]
Shadow:        [shadow token]
Padding:       [spacing value]
Hover state:   [e.g. "subtle shadow lift" / "border color change" / "none"]
```

**DO:**
- [e.g. Keep card content structure consistent — header / body / footer pattern]

**DON'T:**
- [e.g. Nest cards inside cards]
- [e.g. Use card shadows on flat list items]

---

### Forms & Inputs

```
Input height:    ___px
Input padding:   ___px vertical / ___px horizontal
Border:          [style and color]
Border radius:   [value]
Focus state:     [e.g. "ring offset 2px, primary color"]
Error state:     [e.g. "red border + red helper text below"]
Label position:  [above / inline / floating]
Helper text:     [below input, muted style]
```

**DO:**
- [e.g. Always show validation inline — never use alerts for form errors]

**DON'T:**
- [e.g. Disable submit buttons without telling the user why]
- [e.g. Use placeholder text as the only label]

---

### Tables

```
Row height:       ___px
Header style:     [e.g. "uppercase label, muted background, border-bottom only"]
Row divider:      [border style or "zebra" or "none"]
Hover row:        [e.g. "subtle surface change"]
Sticky header:    [yes / no]
Horizontal scroll on mobile: [yes / no]
```

---

### Badges & Tags

```
Style:       [filled / outlined / ghost]
Radius:      [value]
Padding:     [value]
Font size:   [value]
Variants:    success / warning / error / info / neutral / [brand-specific]
```

**Rule:** Badges should communicate status, not decorate. Limit to 1 badge per item in dense lists.

---

### Modals & Dialogs

```
Max width:         ___px (sm) / ___px (md) / ___px (lg)
Backdrop:          [e.g. "dark overlay, 60% opacity, blur: none"]
Radius:            [value]
Shadow:            [value]
Close behavior:    [e.g. "X button top-right + ESC + backdrop click"]
Mobile behavior:   [e.g. "Full screen sheet from bottom"]
```

---

### Navigation

```
Type:           [sidebar / topnav / hybrid]
Width (sidebar): ___px expanded / ___px collapsed
Active state:   [describe treatment]
Hover state:    [describe treatment]
Icon usage:     [always / optional / never]
Mobile:         [hamburger / bottom tab bar / drawer]
```

---

## States — UI Feedback

Every interactive element must have all relevant states defined consistently.

### Required States Per Component
```
Default     — base appearance
Hover       — desktop pointer feedback
Focus       — keyboard navigation ring
Active      — click/press feedback
Disabled    — reduced opacity or muted, non-interactive
Loading     — skeleton / spinner / shimmer behavior
Empty       — zero-state treatment (never just blank space)
Error       — visual error indication + message
Success     — confirmation treatment (if applicable)
```

### Loading Patterns
- [e.g. "Use skeleton screens for content areas, spinner for actions"]
- [e.g. "Never use a full-page spinner for partial content loads"]

### Empty States
- [e.g. "Always include: icon + heading + short explanation + one action"]
- [e.g. "Empty states should not feel like errors"]

### Error States
- [e.g. "Inline for form fields, toast for async actions, page-level for fatal errors"]

---

## Icons

```
Icon set:     [e.g. Lucide / Heroicons / custom]
Default size: ___px
Stroke width: ___px (if outline style)
Color:        [e.g. "Inherits text color — never hardcoded"]
```

**DO:**
- [e.g. Always pair icon with text label in primary actions]

**DON'T:**
- [e.g. Mix icon families]
- [e.g. Use filled and outline icons from the same set interchangeably]
- [e.g. Scale icons outside the defined sizes]

---

## Animation & Motion

**Motion philosophy:** [e.g. "Functional, not decorative — motion should explain transitions, not entertain"]

```
Default duration:    ___ms
Fast (micro):        ___ms  (hover, focus rings, badge changes)
Standard:            ___ms  (panel expand, dropdown open, tab switch)
Slow (intentional):  ___ms  (modal open, page transition)
Easing:              [e.g. ease-out for enter, ease-in for exit]
```

**DO:**
- [e.g. Use motion to reinforce causality — where did this panel come from?]
- [e.g. Respect prefers-reduced-motion]

**DON'T:**
- [e.g. Animate anything purely for decoration]
- [e.g. Use bounce or spring easing on enterprise-context UI]
- [e.g. Chain multiple animations sequentially — keep it to 1 step]

---

## Responsive Behavior

```
Breakpoints:
  Mobile:   < ___px
  Tablet:   ___px – ___px
  Desktop:  > ___px
  Wide:     > ___px (if applicable)
```

### Behavior Per Breakpoint
| Element       | Mobile                    | Tablet              | Desktop           |
|---------------|---------------------------|---------------------|-------------------|
| Navigation    | [describe]                | [describe]          | [describe]        |
| Page layout   | [describe]                | [describe]          | [describe]        |
| Cards         | [describe]                | [describe]          | [describe]        |
| Tables        | [describe]                | [describe]          | [describe]        |
| Modals        | [describe]                | [describe]          | [describe]        |
| Forms         | [describe]                | [describe]          | [describe]        |

**Rules:**
- [e.g. Touch targets minimum 44×44px on mobile]
- [e.g. Never hide primary actions behind a mobile hamburger]
- [e.g. Horizontal scroll tables must have a scroll hint shadow]

---

## Accessibility Baseline

- [ ] All interactive elements have visible focus states
- [ ] Color is never the only differentiator (use shape, text, or icon too)
- [ ] ARIA labels on all icon-only buttons
- [ ] Form fields always have associated labels
- [ ] Contrast ratio: minimum 4.5:1 for body text, 3:1 for large text
- [ ] Modal focus trap implemented
- [ ] Keyboard navigation supported throughout

---

## Forbidden Outcomes

> These are non-negotiable. If any new UI violates these, it must be corrected before shipping.

1. **No visual foreign objects** — components that look like they came from a different product
2. **No rainbow color usage** — using 4+ colors on a single surface is never acceptable
3. **No unsanctioned fonts** — only the defined type stack, no external font imports
4. **No hard-coded pixel values outside the spacing scale** — use tokens or defined values
5. **No shadow stacking** — elevated elements do not get additional shadows on hover
6. **No icon-only actions without tooltips** — accessibility is non-negotiable
7. **No empty states left blank** — every zero-state must be designed
8. **No form without inline validation** — alert-based form errors are forbidden
9. **No mixed border radius logic** — radius must follow the defined scale, not be eyeballed
10. **No animation without prefers-reduced-motion handling**
11. **[Add project-specific violations here]**

---

## Design Reference

> Link or describe the primary reference materials.

- Figma file: [link or "not available"]
- Design tokens file: [path or "not implemented"]
- Storybook: [link or "not available"]
- Primary design reference products: [list]

---

## Changelog

> Track intentional updates to this DNA file.

| Date       | Changed By | What Changed        | Why                  |
|------------|------------|---------------------|----------------------|
| YYYY-MM-DD | [name]     | [description]       | [reason]             |