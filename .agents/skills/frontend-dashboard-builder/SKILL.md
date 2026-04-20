---
name: frontend-dashboard-builder
description: Build or refine frontend dashboards, analytics pages, admin overviews, KPI surfaces, and operational home screens on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement metric cards, chart sections, filter bars, activity feeds, summary tables, or multi-panel overview layouts while preserving the current component family and handling density, hierarchy, loading states, empty states, and responsive composition correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task is really a dedicated filter, chart, KPI, metric-comparison, activity, audit, queue, kanban, map, calendar, scheduler, timeline, hierarchy, or planning surface, or one isolated component, form, or table, use the matching specialized skill first.
---

# Frontend Dashboard Builder

## Quick Start

1. Confirm the task is primarily a dashboard, analytics overview, or multi-panel summary surface.
2. Audit the existing layout system, cards, chart treatment, tables, filters, and `FRONTEND-DNA.md`.
3. Read `references/dashboard-contract.md`.
4. Read `references/layout-and-hierarchy.md`.
5. Read `references/charts-and-states.md`.
6. Build the smallest complete dashboard surface that still handles hierarchy and non-happy-path states honestly.

## Core Rules

- Reuse the existing page shell, card family, section rhythm, and theme tokens.
- Define the dashboard contract before placing charts and KPI cards.
- Make information hierarchy obvious within the first viewport.
- Treat charts, filters, summary cards, tables, and feeds as one system, not isolated widgets.
- Prefer scanability and decision support over decorative density.
- Do not call a dashboard done if it only looks good with happy-path mock data.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear dashboard contract
- page sections ordered by user priority
- KPI, chart, feed, and table surfaces that feel like one product
- loading, empty, and error states for the important panels
- responsive treatment that preserves hierarchy on narrower screens
- at least one realistic proof surface
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby pages, dashboards, admin surfaces, or reporting views already in the repo.
- Identify whether the request is an executive overview, operational dashboard, analytics page, or product home surface.
- Check whether there are existing chart wrappers, stat cards, section primitives, or page-shell conventions in use.

If a local dashboard pattern already exists, extend it instead of introducing a parallel layout language.

### 2. Define the dashboard contract

Clarify:

- audience and primary decisions the page should support
- KPI list and priority order
- chart or visualization needs
- supporting table, feed, or alert sections
- time range and filter behavior
- loading, empty, and error handling per panel
- responsive fallback strategy for cramped viewports

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build hierarchy before ornament

- Establish the page shell, section order, and scan path first.
- Keep KPI cards concise and comparable.
- Use charts only when they communicate something a metric alone cannot.
- Group filters and controls near the surfaces they affect or in one disciplined control bar.
- Keep secondary widgets secondary; do not let every panel compete for first attention.

### 4. Handle cross-panel states

- Make loading, empty, and error states visible without collapsing the whole page.
- Ensure partial data scenarios still leave the dashboard usable.
- Keep chart legends, labels, and units understandable.
- Preserve responsive hierarchy when cards stack and tables degrade.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one realistic desktop layout and one narrower layout where practical.
- Verify at least one non-happy-path panel state.
- If charts were only validated structurally and not against live data behavior, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about a dashboard or analytics overview
- multiple panels must work together as one page
- hierarchy, density, and decision support matter more than a single component

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the main task is specifically app-shell sidebar navigation rather than the dashboard as a whole
- the main task is specifically a dashboard empty or blocked state rather than the dashboard as a whole
- the main task is specifically a filter bar, facet panel, or applied-filter system rather than the dashboard as a whole
- the main task is specifically a chart or analytical visualization surface rather than the dashboard as a whole
- the main task is specifically a KPI-card or metric-summary strip rather than the dashboard as a whole
- the main task is specifically a metric-comparison or variance-summary surface rather than the dashboard as a whole
- the main task is specifically an activity feed or recent-event stream rather than the dashboard as a whole
- the main task is specifically an audit-log or trace-history surface rather than the dashboard as a whole
- the main task is specifically a queue board or triage worklist rather than the dashboard as a whole
- the main task is specifically a kanban board or workflow lane surface rather than the dashboard as a whole
- the main task is specifically a map or geospatial surface rather than the dashboard as a whole
- the main task is specifically a calendar or scheduler surface rather than the dashboard as a whole
- the main task is specifically a timeline or chronology surface rather than the dashboard as a whole
- the main task is specifically an org chart or reporting-structure surface rather than the dashboard as a whole
- the main task is specifically a gantt or dependency-planning surface rather than the dashboard as a whole
- the task is mostly one isolated component, form, or table
- the work is purely a tiny spacing or copy tweak on an existing dashboard

## Output Shape

Prefer a structure like:

1. Dashboard contract and assumptions
2. Sections, KPIs, visualizations, and states covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
