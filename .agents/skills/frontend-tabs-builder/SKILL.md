---
name: frontend-tabs-builder
description: Build or refine frontend tabs, segmented controls, tab panels, tabbed subviews, and in-page view-switching surfaces on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement tabbed navigation, record subviews, section switching, segmented panel selection, sticky tab bars, or panel switching while preserving the current component family and handling tab meaning, active state, overflow, panel retention, keyboard behavior, and responsive treatment correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the main task is a broader page, detail page, or settings surface and tabs are only one sub-part, use the matching builder first unless the tabbed surface itself is the main job. If the work is only a tiny tweak on an existing tab bar, use the nearest surface skill first.
---

# Frontend Tabs Builder

## Quick Start

1. Confirm the task is primarily about tabbed navigation, segmented switching, or panelized content within one surface.
2. Audit the existing navigation treatment, section headers, active-state language, and `FRONTEND-DNA.md`.
3. Read `references/tabs-contract.md`.
4. Read `references/navigation-vs-segmentation.md`.
5. Read `references/panel-state-and-responsive-behavior.md`.
6. Build the smallest complete tabbed surface that still handles active-state meaning, panel content, and overflow behavior honestly.

## Core Rules

- Reuse the existing navigation, badge, and state-treatment patterns.
- Define the tabs contract before choosing visual style, size, or placement.
- Match the tab pattern to the user's mental model: navigation, segmented switching, or contextual subview.
- Keep active state, counts, badges, and supporting actions disciplined.
- Treat tab bar behavior and panel behavior as one feature, not separate polish passes.
- Do not call tab work done if it only renders labels and ignores keyboard flow, overflow, or panel-state behavior.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear tabs contract
- the right tab or segmented-control pattern for the surface
- explicit active, inactive, disabled, and overflow behavior
- panel handling that matches the user's task and context
- responsive fallback for crowded tab sets
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby tab bars, segmented controls, section navs, or subview selectors already in the repo.
- Identify whether the request is route-like tab navigation, in-page subview switching, segmented state selection, or a sticky section tab bar.
- Check whether there are existing active-state rules, count badges, pinned headers, or overflow patterns in use.

If a local tab pattern already exists, extend it instead of introducing a parallel navigation language.

### 2. Define the tabs contract

Clarify:

- what each tab means
- whether switching tabs changes route state, local panel state, or filtered content
- default tab and deep-link behavior where relevant
- whether tab panels retain state or reset on change
- overflow behavior when labels do not fit
- whether badges, counts, or status indicators belong in the tab label
- whether the tab bar is inline, sticky, nested, or section-bound
- narrow-layout behavior when the desktop tab bar becomes too crowded

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Choose tab pattern before ornament

- Use classic tabs when the user is moving across related content panels or subviews.
- Use segmented controls when the switch is small, mutually exclusive, and highly local.
- Use sticky or anchored tab bars only when section persistence materially helps orientation.
- Keep tab labels concise and meaningful.
- Keep decorative indicators subordinate to active-state clarity and scanability.

### 4. Handle panel behavior and state transitions

- Make active, inactive, disabled, and loading behavior explicit.
- Preserve panel state intentionally when the task benefits from continuity.
- Avoid noisy tab sets where multiple tabs compete equally without hierarchy.
- Handle overflow, wrap, horizontal scroll, or alternate mobile treatment deliberately.
- Ensure keyboard movement and focus treatment match the chosen tab pattern.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one tab switch path and one non-happy-path or overflow case where practical.
- Verify keyboard and narrower-layout behavior where practical.
- If the work was only validated structurally and not against real data, route, or retained-state behavior, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about tabs, segmented controls, or tabbed panel UX
- active state, overflow, panel retention, or keyboard behavior matter
- the tabbed surface itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the main task is a broader page, detail page, or settings surface and the tabs are only one sub-part
- the task is mostly a general component without tab-specific behavior
- the work is purely a tiny copy or spacing tweak on an existing tab bar

## Output Shape

Prefer a structure like:

1. Tabs contract and assumptions
2. Pattern choice, panel behavior, and responsive treatment covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
