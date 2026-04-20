---
name: frontend-org-chart-builder
description: Build or refine frontend org charts, reporting hierarchies, department maps, team-structure views, and relationship-card surfaces on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement employee reporting trees, department overviews, people hierarchies, or entity charts with card nodes while preserving the current component family and handling lineage clarity, node density, collapse behavior, drill-down, and responsive fallback correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task is a generic file or folder tree, use `frontend-tree-view-builder` first. If the org chart is only one sub-part of a broader dashboard or detail route, use the broader builder first unless the hierarchy surface itself is the main job.
---

# Frontend Org Chart Builder

## Quick Start

1. Confirm the task is primarily about org-chart, reporting-line, or hierarchy-card UX.
2. Audit the existing page shell, cards, avatars, status chips, and `FRONTEND-DNA.md`.
3. Read `references/hierarchy-surface-contract.md`.
4. Read `references/node-lineage-and-card-density.md`.
5. Read `references/collapse-drilldown-and-mobile-fallback.md`.
6. Build the smallest complete hierarchy surface that still handles density, lineage, and drill-down honestly.

## Core Rules

- Reuse the existing card family, avatar treatment, semantic status language, and spacing rhythm.
- Define the org-chart contract before choosing top-down, left-right, subtree, or drill-down treatment.
- Keep reporting lineage and node ownership more important than decorative connectors.
- Match node density to the user job; do not overload cards with every field available.
- Treat expansion, selection, side-panel details, and empty branches as first-class behavior.
- Do not call org-chart work done if it only draws nodes but ignores density, collapse, or mobile fallback.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear hierarchy-surface contract
- node cards that prioritize identity, role, and structural meaning
- explicit lineage, manager, sibling, or department relationships
- drill-down, collapse, or subtree focus behavior when the hierarchy is dense
- responsive fallback when full chart geometry stops being readable
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby people cards, team lists, department views, or hierarchy panels already in the repo.
- Identify whether the request is a people org chart, team structure view, department map, partner hierarchy, or entity relationship chart.
- Check whether there are existing node-card patterns, avatars, badges, side panels, or drill-down routes that the hierarchy should inherit.

If a local hierarchy pattern already exists, extend it instead of introducing a parallel language.

### 2. Define the hierarchy contract

Clarify:

- what each node represents
- what root or entry point the chart starts from
- whether the hierarchy is strict, dotted-line, grouped by department, or mixed
- which node metadata is essential versus secondary
- whether expand or collapse, subtree focus, or drill-down routing is needed
- what selection or action behavior belongs on a node
- what empty branches, unknown managers, or hidden descendants look like
- mobile fallback strategy when the full chart becomes unreadable

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build lineage and scan path before decoration

- Make reporting direction and parent-child relationships obvious at first glance.
- Keep node cards concise enough to compare without overwhelming the chart.
- Use connectors, grouping labels, or swimlanes only when they clarify structure.
- Avoid turning the chart into a dense profile directory unless the user explicitly needs that.

### 4. Handle density, drill-down, and responsive behavior

- Collapse lower levels or secondary metadata when the chart becomes dense.
- Keep selected-node, hover, focus, and expanded states explicit.
- Provide subtree focus, side-panel detail, or route-level drill-down when the full graph is too large.
- Switch to stacked lists, grouped sections, or sheet-like fallbacks when chart geometry breaks on smaller screens.
- Make missing data visibly different from hidden or filtered descendants.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one dense hierarchy path and one collapsed or drill-down path where practical.
- Verify at least one narrower-layout fallback where practical.

## Decision Boundary

### Use this skill when:

- the task is clearly about reporting hierarchies, team maps, or org-chart surfaces
- lineage, span of control, and node density matter
- the hierarchy surface itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is really a generic file, folder, or taxonomy tree rather than a chart of relationship cards
- the task is really a broader dashboard or detail page where the org chart is only one sub-part
- the task is mostly a generic component or small card tweak
- the work is purely a tiny spacing or copy tweak on an existing org chart

## Output Shape

Prefer a structure like:

1. Org-chart contract and assumptions
2. Node model, lineage, and density behavior covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
