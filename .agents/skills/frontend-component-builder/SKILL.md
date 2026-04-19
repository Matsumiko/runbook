---
name: frontend-component-builder
description: Build or refine frontend components, sections, and reusable UI surfaces on top of an existing stack, theme, and design rules. Use when Codex needs to implement a button, card, form, table, modal, navbar, page section, or similar UI work while preserving the current frontend DNA, tokens, and component family. Prefer this skill after the stack and theme direction are already established. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the design language still needs to be extracted from Figma or screenshots, use `frontend-figma-to-theme` first. If the main task is specifically alerts, toasts, banners, or notification-center surfaces, use `frontend-notification-builder` first.
---

# Frontend Component Builder

## Quick Start

1. Confirm the request is component or surface implementation work, not stack selection or theme extraction.
2. Audit the existing stack, theme tokens, nearby components, and `FRONTEND-DNA.md`.
3. Read `references/source-order.md`.
4. Read `references/variants-and-states.md`.
5. Read `references/acceptance-checklist.md`.
6. Build the smallest coherent component that fits the existing family.
7. Verify behavior, not just appearance.

## Core Rules

- Follow the existing stack and component model.
- Reuse existing tokens, spacing, typography, and naming where available.
- Preserve component family resemblance with nearby surfaces.
- Build variants and states deliberately instead of hard-coding one happy path.
- Prefer composable primitives and small abstractions over one-off monoliths.
- Do not redesign the product while implementing one component unless explicitly asked.

## What This Skill Should Produce

When used well, the output usually includes:

- one clear component contract
- variants, sizes, and states that match the design intent
- responsive behavior where relevant
- integration with the project’s token or theme layer
- at least one proof surface showing the component in context
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Read the closest existing components first.
- Check whether `FRONTEND-DNA.md` defines rules that must be preserved.
- Identify the real surface type: primitive, composed component, or page section.
- If the project already has a component family, extend it instead of creating a parallel one.

### 2. Define the component contract

Clarify:

- purpose
- props or inputs
- variants
- sizes
- empty, loading, disabled, error, or selected states
- accessibility expectations
- responsive behavior

If the request is vague, infer the smallest sensible contract and flag the assumption.

### 3. Implement inside the system

- Use the project’s current stack and theme model.
- Reuse tokens before introducing new ones.
- Split layout, visual treatment, and behavior cleanly when the component is complex.
- Keep the public API simple and predictable.

### 4. Prove it in context

- Show the component in at least one realistic parent surface when practical.
- Validate spacing, hierarchy, interaction states, and responsiveness.
- If the component is only implemented in isolation, say that clearly.

### 5. Verify honestly

- Run the checks the repo already supports.
- If visual verification is not possible, say so.
- Do not mark the work complete if the component only exists as static markup without state handling where state was required.

## Decision Boundaries

### Use this skill when:

- the stack is already chosen
- the theme or token direction already exists
- the task is about building or refining components and surfaces
- consistency with the current frontend system matters

### Do not use this skill when:

- the main problem is choosing Chakra UI versus Tamagui
- the main problem is extracting tokens from Figma or screenshots
- the main task is specifically alerts, toasts, banners, or notification-center surfaces
- the repo already has a component that only needs a tiny copy or spacing fix

## Output Shape

Prefer a structure like:

1. Component contract and assumptions
2. Files added or changed
3. Variants and states covered
4. Verification performed
5. Remaining gaps or follow-up work
