---
name: frontend-marketing-builder
description: Build or refine frontend marketing pages, public landing pages, campaign pages, pricing pages, feature pages, and other narrative conversion surfaces on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement hero sections, benefit sections, social proof, pricing blocks, FAQs, CTA bands, comparison sections, or conversion-oriented page flows while preserving the current brand language and handling narrative hierarchy, trust cues, responsive composition, and conversion states correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task is a generic product page rather than a public-facing conversion page, use `frontend-page-builder` first.
---

# Frontend Marketing Builder

## Quick Start

1. Confirm the task is primarily a public-facing marketing or conversion surface.
2. Audit the existing brand language, page shell, CTA treatment, and `FRONTEND-DNA.md`.
3. Read `references/marketing-surface-contract.md`.
4. Read `references/narrative-and-cta-hierarchy.md`.
5. Read `references/proof-pricing-and-conversion-states.md`.
6. Build the smallest complete marketing surface that still handles narrative flow and trust honestly.

## Core Rules

- Reuse the existing brand language, CTA family, and section rhythm.
- Define the marketing surface contract before composing sections.
- Build around one primary message and one primary conversion action.
- Make proof and trust cues feel earned, not decorative.
- Treat hero, benefits, proof, pricing, FAQ, and final CTA as one narrative system.
- Do not call a marketing page done if it only looks polished but fails to communicate or convert.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear marketing surface contract
- a coherent narrative from top to bottom
- one dominant CTA path
- proof, pricing, and FAQ sections when relevant
- responsive treatment that preserves scanability and conversion intent
- at least one realistic proof surface
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby public-facing pages, landing pages, pricing pages, or feature pages already in the repo.
- Identify whether the task is a homepage, campaign page, pricing page, waitlist page, comparison page, or feature-explainer page.
- Check whether there are existing hero patterns, logo clouds, testimonials, CTA bands, or pricing-card conventions in use.

If a local marketing pattern already exists, extend it instead of introducing a parallel brand language.

### 2. Define the marketing surface contract

Clarify:

- who the page is for
- the core promise or message
- the primary conversion action
- which supporting sections are required
- whether pricing, proof, FAQs, or comparison blocks are needed
- what counts as loading, empty, or unavailable state for lead forms or pricing data
- responsive fallback strategy

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build narrative before decoration

- Establish the hero, supporting proof, and final CTA path first.
- Keep one primary CTA visually dominant.
- Use section order to answer the user's likely objections in sequence.
- Keep social proof, metrics, and testimonials specific enough to feel credible.
- Avoid section sprawl that dilutes the page's promise.

### 4. Handle proof and conversion states

- Make pricing, plan availability, waitlist, or contact flows clear.
- Handle unavailable offers, incomplete pricing data, or not-yet-open states honestly.
- Keep CTA feedback and form submission states calm and explicit.
- Preserve narrative clarity when sections stack on narrower screens.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one desktop layout and one narrower layout where practical.
- Verify at least one non-happy-path conversion state where relevant.
- If the page was only validated structurally and not against live marketing or signup behavior, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about a public-facing marketing or conversion page
- the main challenge is messaging hierarchy, CTA flow, proof, or pricing presentation
- multiple sections must work together to persuade, explain, or convert

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is a generic internal page, dashboard, or auth flow
- the work is purely a tiny copy or spacing tweak on an existing marketing page

## Output Shape

Prefer a structure like:

1. Marketing surface contract and assumptions
2. Narrative sections, CTA path, and states covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
