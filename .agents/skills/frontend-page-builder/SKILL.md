---
name: frontend-page-builder
description: Build or refine full frontend pages, route-level surfaces, and multi-section flows on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement landing pages, settings pages, detail pages, auth pages, onboarding pages, marketing pages, or other route-level surfaces that combine multiple sections into one coherent experience while preserving the current component family and handling hierarchy, entry points, page states, and responsive composition correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task is primarily a dashboard, use `frontend-dashboard-builder`. If the task is mostly one component, form, or table surface, use `frontend-component-builder`, `frontend-form-builder`, or `frontend-table-builder` first.
---

# Frontend Page Builder

## Quick Start

1. Confirm the task is primarily route-level page composition work.
2. Audit the existing page shell, section patterns, navigation treatment, and `FRONTEND-DNA.md`.
3. Read `references/page-contract.md`.
4. Read `references/section-order-and-rhythm.md`.
5. Read `references/page-states-and-entry-points.md`.
6. Build the smallest complete page that still handles hierarchy and key states honestly.

## Core Rules

- Reuse the existing page shell, spacing rhythm, and component family.
- Define the page contract before composing sections.
- Build the page around the user's entry point and primary job.
- Make the first viewport communicate purpose quickly.
- Treat hero, content sections, side panels, forms, and supporting blocks as one system.
- Do not call a page done if it only looks coherent in the happy path.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear page contract
- section order that matches the user journey
- coherent page rhythm from top to bottom
- relevant loading, empty, error, or unauthenticated states
- responsive treatment that preserves hierarchy
- at least one realistic proof surface
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby route-level pages first.
- Identify whether the task is a landing page, settings page, detail page, auth page, onboarding page, or internal content page.
- Check whether there are existing page-shell conventions, section wrappers, breadcrumbs, tabs, or action bars in use.

If a local page pattern already exists, extend it instead of introducing a parallel layout language.

### 2. Define the page contract

Clarify:

- who the page serves
- the page's primary job
- the first action or first read the user should take
- which sections are primary versus supporting
- whether the page needs forms, tabs, side panels, or detail blocks
- loading, empty, error, and gated-access behavior
- responsive fallback strategy

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build section order deliberately

- Establish the page shell and top-level hierarchy first.
- Place the strongest signal near the top: title, hero, summary, or primary action.
- Use sections to support the user journey instead of treating them as isolated blocks.
- Keep actions close to the content they affect.
- Avoid pages that become a stack of unrelated widgets.

### 4. Handle entry points and page states

- Make loading, empty, error, and access states explicit where relevant.
- Preserve orientation when the page contains tabs, sidebars, or multi-step sections.
- Keep navigation aids, breadcrumbs, and headings understandable.
- Ensure mobile stacking still preserves the primary journey.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one desktop layout and one narrower layout where practical.
- Verify at least one non-happy-path page state.
- If the page was only validated structurally and not against real route or data behavior, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about a full page or route-level surface
- multiple sections must work together as one experience
- hierarchy, entry points, and page flow matter more than one isolated component

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is clearly a dashboard or analytics overview
- the task is mostly one component, one form, or one table
- the work is purely a tiny copy or spacing tweak on an existing page

## Output Shape

Prefer a structure like:

1. Page contract and assumptions
2. Sections, entry points, and states covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
