---
name: frontend-tree-view-builder
description: Build or refine frontend tree views, file explorers, nested taxonomies, permission trees, and hierarchical selector surfaces on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement folder explorers, nested category browsers, settings trees, expandable object navigators, or hierarchical pickers while preserving the current component family and handling indentation, expansion, selection, async loading, keyboard navigation, and responsive fallback correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task is mainly a broader sidebar shell, use `frontend-sidebar-builder` first. If the task is mainly an org chart or relationship-card hierarchy, use `frontend-org-chart-builder` first.
---

# Frontend Tree View Builder

## Quick Start

1. Confirm the task is primarily about a hierarchical tree, explorer, or nested-selector surface.
2. Audit the existing shell, list items, indentation rules, icons, and `FRONTEND-DNA.md`.
3. Read `references/tree-contract.md`.
4. Read `references/expansion-selection-and-indent-model.md`.
5. Read `references/keyboard-loading-and-mobile-fallback.md`.
6. Build the smallest complete tree surface that still handles expansion, selection, and density honestly.

## Core Rules

- Reuse the existing list-item family, typography, icon language, and semantic state treatment.
- Define the tree contract before choosing disclosure, explorer, or nested-selector treatment.
- Keep hierarchy meaning obvious through indentation, caret behavior, and state cues.
- Match interaction density to the user job; file explorers and permission trees do not need identical affordances.
- Treat async loading, empty children, and selected-node state as core behavior.
- Do not call tree-view work done if it only renders nested rows but ignores keyboard behavior, loading, or mobile fallback.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear tree-surface contract
- explicit node, child, and depth semantics
- understandable expansion, collapse, and selection behavior
- async or lazy-loading treatment where the hierarchy requires it
- responsive fallback when deep indentation stops being usable
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby sidebars, file lists, nested filters, settings trees, or explorer panels already in the repo.
- Identify whether the request is a file explorer, category tree, permissions tree, object navigator, or hierarchical selector.
- Check whether there are existing row patterns, disclosure affordances, icons, counts, or breadcrumb context that the tree should inherit.

If a local tree or explorer pattern already exists, extend it instead of introducing a parallel language.

### 2. Define the tree contract

Clarify:

- what each node represents
- how depth and parent-child relationships are communicated
- whether expansion is controlled, remembered, lazy-loaded, or URL-driven
- whether selection is single, multi, or purely navigational
- whether checkboxes, badges, counters, or context actions belong on nodes
- how empty children, loading children, or unavailable branches are shown
- whether drag, reorder, or move affordances exist
- mobile fallback strategy when deep indentation becomes unreadable

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build hierarchy and information scent before ornament

- Make depth, expandable state, and selected state obvious without adding visual noise.
- Keep row content concise enough that indentation still works.
- Use icons, badges, or counts only when they improve navigation or comprehension.
- Avoid turning every node into a card unless the product already does that.

### 4. Handle keyboard, loading, and smaller screens

- Keep expansion, collapse, focus, hover, and selected states explicit.
- Support lazy-loading and preserve user orientation when descendants appear.
- Ensure long labels wrap or truncate without destroying hierarchy meaning.
- Switch to sheets, drill-down lists, or collapsed-path patterns when nested indentation stops working on mobile.
- Make missing children visibly different from unloaded children.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one expansion path and one selected-node path where practical.
- Verify at least one async-loading or empty-branch path where practical.
- Verify at least one narrower-layout fallback where practical.

## Decision Boundary

### Use this skill when:

- the task is clearly about nested trees, explorers, or hierarchical selectors
- indentation, expansion, and selection behavior matter
- the tree surface itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is mainly a broader sidebar shell rather than a dedicated hierarchy tree
- the task is really an org chart or relationship-card hierarchy rather than a nested list/tree
- the task is really an accordion or disclosure stack without persistent tree semantics
- the work is purely a tiny spacing or copy tweak on an existing tree surface

## Output Shape

Prefer a structure like:

1. Tree contract and assumptions
2. Expansion, selection, and density behavior covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
