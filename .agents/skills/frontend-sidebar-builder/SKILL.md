---
name: frontend-sidebar-builder
description: Build or refine frontend sidebars, app-shell navigation rails, admin side navigation, and section nav panels on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement expanded or collapsed sidebars, grouped nav sections, project switchers, icon-label rails, or responsive nav drawers while preserving the current component family and handling information hierarchy, active state, collapse behavior, shell integration, overflow, and mobile fallback correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the main task is a broader dashboard, settings page, or full route and the sidebar is only one sub-part, use the matching builder first unless the sidebar itself is the main job. If the work is only a tiny tweak on an existing sidebar, use the nearest surface skill first.
---

# Frontend Sidebar Builder

## Quick Start

1. Confirm the task is primarily about sidebar navigation, app-shell rails, or section nav panels.
2. Audit the existing shell, page layout, nav hierarchy, active-state treatment, and `FRONTEND-DNA.md`.
3. Read `references/navigation-contract.md`.
4. Read `references/active-collapse-and-hierarchy.md`.
5. Read `references/mobile-drawer-and-shell-integration.md`.
6. Build the smallest complete sidebar surface that still handles hierarchy, active state, and responsive behavior honestly.

## Core Rules

- Reuse the existing shell, elevation, radius, icon, and active-state language.
- Define the sidebar contract before choosing expanded, collapsed, rail, or drawer treatment.
- Match navigation density to the user's actual navigation job.
- Keep primary navigation, secondary utilities, and workspace switching clearly separated.
- Treat sidebar behavior and shell integration as one feature, not separate polish passes.
- Do not call sidebar work done if it only renders links and ignores active state, collapse rules, overflow, or mobile fallback.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear sidebar contract
- the right sidebar pattern for the product shell
- explicit active, hover, collapsed, and overflow behavior
- section grouping that matches the user's mental model
- responsive fallback for narrower layouts
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby sidebars, app shells, admin navs, drawers, or section rails already in the repo.
- Identify whether the request is a primary app shell, local section nav, admin sidebar, workspace switcher, or utility rail.
- Check whether there are existing active markers, collapse rules, project switchers, unread counts, or footer utility patterns in use.

If a local sidebar pattern already exists, extend it instead of introducing a parallel navigation language.

### 2. Define the sidebar contract

Clarify:

- what the sidebar is responsible for navigating
- whether it is global app navigation or local section navigation
- which groups, headings, dividers, or utilities belong in it
- active-route behavior and deep-state highlighting
- whether the sidebar can collapse, pin, or resize
- overflow behavior for long nav lists or cramped screens
- whether a project or workspace switcher is required
- mobile behavior when the desktop sidebar cannot stay persistent

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Choose shell pattern before ornament

- Use a persistent sidebar when orientation and navigation depth matter across many views.
- Use a collapsed rail only if the icon model remains legible and tooltips or labels stay clear.
- Keep section grouping, icons, badges, and unread counts disciplined.
- Keep destructive or account-level actions separate from primary navigation.
- Keep decorative treatments subordinate to orientation and scanability.

### 4. Handle active, collapse, and responsive behavior

- Make active, hover, focus, collapsed, and disabled states explicit.
- Preserve orientation when the user moves deeper into nested routes or filtered subviews.
- Handle long labels, nested groups, and utility actions deliberately.
- Keep mobile drawer or off-canvas behavior consistent with the desktop shell.
- Ensure keyboard order and focus movement remain usable when the sidebar collapses or opens as a drawer.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one active-route path and one collapse or responsive path where practical.
- Verify keyboard and narrower-layout behavior where practical.
- If the work was only validated structurally and not against real routing, permissions, or shell state, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about sidebar, shell navigation, or navigation rail UX
- active state, hierarchy, collapse behavior, or shell integration matter
- the sidebar surface itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the main task is a broader dashboard, settings page, or route and the sidebar is only one sub-part
- the task is mostly a generic component without navigation-shell behavior
- the work is purely a tiny copy or spacing tweak on an existing sidebar

## Output Shape

Prefer a structure like:

1. Sidebar contract and assumptions
2. Navigation grouping, active behavior, and responsive treatment covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
