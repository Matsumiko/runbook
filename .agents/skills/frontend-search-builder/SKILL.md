---
name: frontend-search-builder
description: Build or refine frontend search pages, discovery surfaces, filtered result views, and query-driven browse experiences on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement search bars, query chips, filter panels, sort controls, result summaries, recent searches, no-match states, or refinement flows while preserving the current component family and handling query clarity, result feedback, and responsive composition correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task is really a command palette, paginated navigation, an empty state, one isolated filter form, or a lightly filtered table, use the matching specialized skill first. If the task is a generic route-level page rather than a search or discovery experience, use `frontend-page-builder` first.
---

# Frontend Search Builder

## Quick Start

1. Confirm the task is primarily a search, discovery, or filtered results surface.
2. Audit the existing page shell, filter controls, data-display patterns, and `FRONTEND-DNA.md`.
3. Read `references/search-surface-contract.md`.
4. Read `references/query-refinement-and-filters.md`.
5. Read `references/results-and-no-match-states.md`.
6. Build the smallest complete search experience that still handles query, refinement, and results states honestly.

## Core Rules

- Reuse the existing page shell, input family, table or list family, and theme tokens.
- Define the search surface contract before composing controls and results.
- Make the current query and scope obvious.
- Keep refinement controls understandable and proportionate to the search job.
- Treat search input, filters, sorting, result summary, and no-match states as one discovery system.
- Do not call search done if it only renders results but ignores no-match, loading, or reset paths.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear search surface contract
- a visible query and refinement model
- result summaries that explain what the user is seeing
- explicit loading, no-match, empty, and error states
- responsive treatment that preserves search control and scanability
- at least one realistic proof surface
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby search pages, list pages, filter bars, and result surfaces already in the repo.
- Identify whether the request is global search, directory search, catalog browsing, filtered index page, command-like result surface, or admin discovery page.
- Check whether there are existing search bars, chips, filter drawers, saved-search patterns, sort controls, or result-count summaries in use.

If a local search pattern already exists, extend it instead of introducing a parallel discovery language.

### 2. Define the search surface contract

Clarify:

- what users are trying to find
- which query fields or scopes exist
- which refinements or filters matter
- whether sort, grouping, or saved search behavior is needed
- what the default result state should show
- how no-match, empty-index, and unavailable results differ
- responsive fallback strategy for cramped viewports

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build query and refinement before density

- Establish the query input, filter model, and results summary first.
- Keep the current search scope visible without making the UI noisy.
- Place the most-used refinements closest to the result surface.
- Use chips, badges, or summaries to show active constraints honestly.
- Avoid control bars that become denser than the results they are meant to help.

### 4. Handle result states and recovery

- Make loading, no-match, empty-index, and error states visibly different.
- Give users a clear reset or recovery path when refinements eliminate all results.
- Keep result counts and summaries understandable.
- Preserve scanability when results degrade from table to list or card layout on narrow screens.
- If recent searches, saved searches, or suggestions exist, keep them subordinate to the main result job.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one result-producing query and one no-match or reset path where practical.
- Verify at least one narrower layout where practical.
- If the search surface was only validated structurally and not against real data or query logic, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about search, discovery, or filtered browsing
- query clarity, refinement controls, and result states matter
- the main challenge is the search experience rather than one isolated form or one isolated table

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the main task is specifically a command palette, spotlight search, or quick-action launcher rather than a broader search surface
- the main task is specifically paginated-result navigation rather than a broader search surface
- the main task is specifically a no-results, empty-index, or recovery-first search state rather than the search surface as a whole
- the task is just one isolated filter form
- the task is mostly a data table or grid with only light filtering
- the task is a generic route-level page rather than a search or discovery experience
- the task is specifically a dashboard, detail page, or onboarding flow
- the work is purely a tiny copy or spacing tweak on an existing search surface

## Output Shape

Prefer a structure like:

1. Search surface contract and assumptions
2. Query model, refinements, and result states covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
