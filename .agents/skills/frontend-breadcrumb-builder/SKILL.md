---
name: frontend-breadcrumb-builder
description: Build or refine frontend breadcrumbs, hierarchy trails, path chips, and route ancestry indicators on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement nested route trails, admin hierarchy paths, back-to-parent breadcrumbs, or truncated ancestry displays while preserving the current component family and handling hierarchy meaning, separators, truncation, overflow, linkability, and mobile fallback correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the main task is a broader page, detail page, dashboard, or search surface and the breadcrumb is only one sub-part, use the matching builder first unless the breadcrumb itself is the main job. If the work is only a tiny tweak on an existing breadcrumb, use the nearest surface skill first.
---

# Frontend Breadcrumb Builder

## Quick Start

1. Confirm the task is primarily about breadcrumbs, route ancestry, or hierarchy trails.
2. Audit the existing page shell, heading area, link styling, hierarchy cues, and `FRONTEND-DNA.md`.
3. Read `references/trail-contract.md`.
4. Read `references/truncation-and-overflow.md`.
5. Read `references/routing-context-and-mobile-fallback.md`.
6. Build the smallest complete breadcrumb surface that still handles hierarchy meaning, truncation, and smaller-layout behavior honestly.

## Core Rules

- Reuse the existing heading, text-link, icon, divider, and muted-state language.
- Define the breadcrumb contract before choosing separators, truncation, or click behavior.
- Match the trail to real hierarchy, not decorative route depth.
- Keep the current page obvious without making every ancestor equally loud.
- Treat breadcrumb meaning, clickability, and overflow behavior as one feature.
- Do not call breadcrumb work done if it only renders labels and ignores truncation, hierarchy clarity, or mobile fallback.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear breadcrumb contract
- hierarchy labels that reflect real navigation structure
- explicit current-page, ancestor-link, and overflow behavior
- truncation or collapse behavior for long paths
- responsive fallback for cramped shells
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby headers, breadcrumbs, back links, route titles, or hierarchy indicators already in the repo.
- Identify whether the request is a classic breadcrumb trail, a compact ancestor path, a record-detail trail, or a dashboard/admin path cue.
- Check whether there are existing chevrons, separators, collapsed-trail patterns, or page-title wrappers in use.

If a local breadcrumb pattern already exists, extend it instead of introducing a parallel route-language.

### 2. Define the breadcrumb contract

Clarify:

- what hierarchy the trail represents
- which ancestors are clickable versus purely descriptive
- whether the last item is linked or current-state text
- whether path segments come from route config, entity names, or filtered context
- when long labels must truncate, collapse, or wrap
- whether icons, counters, or status pills belong in the trail
- mobile behavior when a full trail no longer fits comfortably

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Choose hierarchy treatment before ornament

- Use breadcrumbs only when users benefit from ancestry context or backtracking.
- Keep the current location visually strongest without turning the trail into a navigation bar.
- Prefer concise ancestor labels over route-debug strings.
- Use separators and truncation to preserve clarity, not visual decoration.
- Keep surrounding page actions and titles subordinate to orientation, not competition.

### 4. Handle truncation, clickability, and context

- Make ancestor-link, current-item, hover, focus, and disabled behavior explicit.
- Handle long record names or deep nesting deliberately with truncation, collapse, or overflow menus.
- Preserve route meaning when the trail includes dynamic labels such as project, workspace, or record names.
- Keep mobile fallback understandable, whether that means a shortened trail, back link, or collapsed ancestor menu.
- Ensure keyboard order and accessible labels still explain location cleanly.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one deep-path case and one narrow-layout or truncation case where practical.
- Verify keyboard and link behavior where practical.
- If the work was only validated structurally and not against real routing or dynamic labels, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about breadcrumb trails, ancestry paths, or hierarchy indicators
- truncation, route meaning, or clickability matter
- the breadcrumb surface itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the main task is a broader page, detail page, dashboard, or search surface and the breadcrumb is only one sub-part
- the task is mostly a generic heading or link component
- the work is purely a tiny copy or spacing tweak on an existing breadcrumb

## Output Shape

Prefer a structure like:

1. Breadcrumb contract and assumptions
2. Hierarchy model, truncation, and responsive treatment covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
