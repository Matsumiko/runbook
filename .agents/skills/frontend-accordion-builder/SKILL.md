---
name: frontend-accordion-builder
description: Build or refine frontend accordions, disclosure groups, expandable section stacks, and FAQ reveal blocks on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement expandable FAQs, filter groups, settings disclosures, nested detail reveals, or dense stacks while preserving the current component family and handling information hierarchy, expansion behavior, keyboard interaction, summary clarity, and responsive treatment correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the main task is a broader marketing page, settings surface, or full route and the accordion is only one sub-part, use the matching builder first unless the disclosure surface itself is the main job. If the work is only a tiny tweak on an existing accordion, use the nearest surface skill first.
---

# Frontend Accordion Builder

## Quick Start

1. Confirm the task is primarily about accordions, disclosures, expandable sections, or FAQ stacks.
2. Audit the existing section headers, list density, icon treatment, motion tone, and `FRONTEND-DNA.md`.
3. Read `references/disclosure-contract.md`.
4. Read `references/expansion-behavior-and-density.md`.
5. Read `references/faq-filters-and-nested-sections.md`.
6. Build the smallest complete disclosure surface that still handles summary clarity, expansion rules, and responsive behavior honestly.

## Core Rules

- Reuse the existing list, card, border, icon, and motion language.
- Define the disclosure contract before choosing single-open, multi-open, nested, or inline-expansion treatment.
- Match the expansion pattern to the information density and user intent.
- Keep summary rows clear enough that users can decide before opening.
- Treat collapsed and expanded states as one feature, not separate polish passes.
- Do not call accordion work done if it only toggles content and ignores hierarchy, keyboard behavior, or dense-state readability.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear disclosure contract
- the right accordion or reveal pattern for the content density
- explicit collapsed, expanded, disabled, and loading behavior where relevant
- summary rows that communicate what is hidden and why it matters
- responsive fallback for dense or nested disclosure stacks
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby FAQ sections, filter groups, settings disclosures, or expandable cards already in the repo.
- Identify whether the request is an FAQ stack, progressive detail reveal, filter accordion, settings disclosure, or nested content expander.
- Check whether there are existing chevrons, dividers, sticky headings, or animation rules in use.

If a local disclosure pattern already exists, extend it instead of introducing a parallel reveal language.

### 2. Define the disclosure contract

Clarify:

- what each disclosure item summarizes
- whether one item or many can stay open
- whether expansion changes route state, local state, or only visibility
- what belongs in the summary row versus the hidden panel
- whether counts, badges, helper text, or secondary actions belong in the trigger row
- nested or grouped behavior where multiple reveal levels exist
- narrow-layout behavior when summary rows become cramped

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Choose reveal pattern before ornament

- Use a classic accordion when users scan multiple collapsed sections before choosing one to open.
- Use independent disclosure rows when multiple sections often need to remain open together.
- Use nested expansion only when the hierarchy is genuinely easier to read than a flatter structure.
- Keep summary rows concise, descriptive, and stable between states.
- Keep decorative indicators subordinate to state clarity and content rhythm.

### 4. Handle expansion, state, and density

- Make collapsed, expanded, hover, focus, disabled, and loading behavior explicit.
- Avoid expansion animations that obscure orientation or make dense lists feel unstable.
- Keep long-form content readable once opened; do not let expanded sections become unstructured walls.
- Handle nested sections, filter counts, or inline actions deliberately.
- Ensure keyboard interaction and focus order match the chosen disclosure pattern.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one open-close path and one dense or non-happy-path case where practical.
- Verify keyboard and narrower-layout behavior where practical.
- If the work was only validated structurally and not against real content density or state, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about accordions, disclosures, or expandable section UX
- summary clarity, expansion behavior, or dense-state readability matter
- the disclosure surface itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the main task is a broader marketing page, settings surface, or route and the accordion is only one sub-part
- the task is mostly a generic component without disclosure-specific behavior
- the work is purely a tiny copy or spacing tweak on an existing accordion

## Output Shape

Prefer a structure like:

1. Disclosure contract and assumptions
2. Pattern choice, expansion behavior, and responsive treatment covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
