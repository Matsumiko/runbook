---
name: frontend-data-filter-builder
description: Build or refine frontend data-filter surfaces, filter bars, facet panels, applied-filter chips, and result refinement controls on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement dataset filters for tables, dashboards, directories, catalogs, or reporting views while preserving the current component family and handling filter model clarity, chip summaries, apply or reset behavior, grouped facets, empty results, and responsive collapse correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the task is a broader search or table surface and filters are only one sub-part, use the broader surface skill first unless the filter system itself is the main job.
---

# Frontend Data Filter Builder

## Quick Start

1. Confirm the task is primarily about dataset filtering, facet refinement, or applied-filter UX.
2. Audit the existing control bars, chips, tables or cards, and `FRONTEND-DNA.md`.
3. Read `references/filter-surface-contract.md`.
4. Read `references/chip-summary-and-reset-behavior.md`.
5. Read `references/panel-density-and-responsive-collapse.md`.
6. Build the smallest honest filter system that still handles active filters, reset paths, and narrow-layout fallback correctly.

## Core Rules

- Reuse the existing input family, chips, badges, panel treatment, and toolbar rhythm.
- Define the filter model before placing controls.
- Keep current scope, applied filters, and reset behavior obvious.
- Match the filter surface to the dataset density and decision-making need.
- Treat chip summaries, facet panels, counts, and apply or reset controls as one system.
- Do not call filter work done if the UI can add constraints but not explain or clear them clearly.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear filter-surface contract
- a visible model for active filters and current scope
- coherent filter controls, chips, counts, and reset behavior
- empty-result and over-constrained states that remain recoverable
- responsive collapse rules for filter bars versus filter panels
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby search bars, table toolbars, dashboard filters, chip summaries, or settings-like facet panels already in the repo.
- Identify whether the request is a compact filter bar, a dense side-panel facet system, a chip-driven refinement surface, or a report filter area.
- Check whether the product already uses apply buttons, immediate filtering, saved views, or grouped facet counts.

If a local filter pattern already exists, extend it instead of introducing a parallel refinement language.

### 2. Define the filter contract

Clarify:

- what dataset or result surface is being filtered
- which filters matter most
- whether filters apply instantly or require explicit apply
- whether chips, counts, or summaries must show active constraints
- whether filters are independent, grouped, or mutually exclusive
- how reset, clear-one, clear-all, and default state should behave
- how empty or zero-result states differ from no-data states
- responsive fallback strategy for dense filter surfaces

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build filter understanding before density

- Keep the current scope visible without making the control area heavier than the results it shapes.
- Surface the most-used filters first and subordinate advanced refinements.
- Use chips, pills, or summaries to explain the active state honestly.
- Avoid making every filter feel equally important.

### 4. Handle reset and constrained-result behavior

- Distinguish empty dataset from over-filtered results.
- Keep clear-one and clear-all affordances easy to find.
- Preserve meaning when filters collapse into sheet, drawer, or compact rows on smaller screens.
- If the filter area grows into a broader search or reporting route, switch ownership to the broader surface skill.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one add-filter path and one clear or reset path where practical.
- Verify at least one over-constrained or empty-result path where practical.
- If the filter surface was only validated structurally and not against live result updates, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about filter bars, facet panels, applied-filter chips, or refinement UX
- active-filter clarity, reset behavior, and responsive collapse matter
- the filter system itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is really a broader search page where query and results dominate
- the task is really a broader table or dashboard surface and filters are only a small sub-part
- the task is just one isolated filter form
- the work is purely a tiny chip-label or spacing tweak on an existing filter surface

## Output Shape

Prefer a structure like:

1. Filter contract and assumptions
2. Filter controls, active state, and reset behavior covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
