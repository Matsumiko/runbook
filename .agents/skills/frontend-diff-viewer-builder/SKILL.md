---
name: frontend-diff-viewer-builder
description: Build or refine frontend diff viewers, revision-comparison surfaces, before-versus-after change panels, and side-by-side or unified change views on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement text diffs, JSON or config comparisons, field-level revision viewers, or change-review surfaces where added, removed, and modified content must stay readable while preserving the current component family and handling grouping, context lines, anchors, overflow, and responsive fallback correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task is mainly an audit log, metric comparison, or a broader review flow, use `frontend-audit-log-builder`, `frontend-metric-comparison-builder`, or `frontend-review-panel-builder` first.
---

# Frontend Diff Viewer Builder

## Quick Start

1. Confirm the task is primarily about showing changes between two states, not just listing events.
2. Audit the existing mono text, code block, metadata row, and disclosure patterns plus `FRONTEND-DNA.md`.
3. Read `references/diff-viewer-contract.md`.
4. Read `references/unified-side-by-side-and-grouping.md`.
5. Read `references/context-anchors-and-mobile-fallback.md`.
6. Build the smallest complete diff surface that still makes changes and context honest.

## Core Rules

- Reuse the existing mono, table, metadata, and disclosure language.
- Define the diff contract before choosing unified, side-by-side, row-based, or field-based comparison.
- Keep added, removed, changed, and unchanged semantics explicit.
- Treat context lines, anchors, or surrounding metadata as part of comprehension, not polish.
- Preserve legibility before adding syntax chrome or heavy decoration.
- Do not call diff work done if it only colors text without clarifying what changed and where.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear diff-viewer contract
- readable change semantics with explicit before and after context
- grouped or anchored changes where the artifact requires them
- empty, no-change, unavailable-base, and loading states
- responsive fallback that preserves comprehension
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby audit logs, revision histories, editors, review panes, or code-like surfaces already in the repo.
- Identify whether the request is line diff, field diff, record revision compare, side-by-side config compare, or a before-and-after content surface.
- Check whether the product already uses monospace blocks, change chips, expandable rows, anchors, or collapsible groups that the diff should inherit.

If a local diff pattern already exists, extend it instead of introducing a parallel comparison language.

### 2. Define the diff contract

Clarify:

- what is being compared
- whether the comparison is unified, side-by-side, grouped, or field-based
- how added, removed, and changed content is represented
- whether context lines, line numbers, anchors, or section headers matter
- whether comments, annotations, or review status belong in scope
- what no-change, missing-base, redacted, and loading states look like
- mobile fallback strategy when wide or dense comparisons stop fitting

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build change meaning before chrome

- Make the compared artifacts and versions explicit.
- Keep the eye path understandable through headers, grouping, or anchors.
- Use color to reinforce change semantics, not to replace labels.
- Avoid turning small diffs into horizontally bloated layouts without a fallback.

### 4. Handle context, grouping, and fallback

- Keep unchanged context available when users need orientation.
- Distinguish no changes from unavailable comparison data.
- Use grouped blocks, expandable sections, or route-level deep links when changes are dense.
- Collapse to unified mode, stacked cards, or section-by-section comparison when narrow screens cannot support wide side-by-side layouts.
- If the surface is really a full audit log or review workflow, move ownership to the matching specialized skill.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one populated-diff path and one no-change or missing-base path where practical.
- Verify at least one grouped or anchored change path where practical.
- Verify at least one narrower-layout fallback where practical.

## Decision Boundary

### Use this skill when:

- the task is clearly about viewing changes between two versions or states
- change readability and context retention matter
- the diff viewer itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is really a metric comparison, audit log, or broader review flow
- the task is really a generic code editor or text viewer without comparison behavior
- the task is really a tiny inline badge or one-line change summary
- the work is purely a tiny spacing or copy tweak on an existing diff viewer

## Output Shape

Prefer a structure like:

1. Diff contract and assumptions
2. Change semantics, grouping, and states covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
