---
name: frontend-map-builder
description: Build or refine frontend maps, geospatial result surfaces, marker-based location views, route previews, and area-overlay interfaces on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement store locators, delivery or route maps, asset maps, clustered markers, region overlays, or map-detail surfaces while preserving the current component family and handling marker density, pan or zoom context, selection state, side-panel integration, and responsive fallback correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the task is a broader dashboard or search route and the map is only one sub-part, use the broader surface skill first unless the map itself is the main job.
---

# Frontend Map Builder

## Quick Start

1. Confirm the task is primarily about a map or geospatial interaction surface.
2. Audit the existing cards, chips, side panels, selection states, and `FRONTEND-DNA.md`.
3. Read `references/map-surface-contract.md`.
4. Read `references/marker-cluster-and-selection-model.md`.
5. Read `references/side-panel-routing-and-mobile-fallback.md`.
6. Build the smallest honest map surface that still handles marker density, selection, and fallback correctly.

## Core Rules

- Reuse the existing panel treatment, chips, card family, and interaction tone.
- Treat the map as a spatial navigation or geospatial exploration surface, not as a decorative background.
- Keep location context, marker meaning, and selection state obvious.
- Match map density controls to the actual number of results or areas shown.
- Preserve side-panel or list context when the map interacts with surrounding UI.
- Do not call map work done if it only renders markers but ignores selection, clustering, or mobile behavior.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear map-surface contract
- marker or overlay logic that matches the data model
- understandable selection, clustering, and detail states
- side-panel, list, or route-preview integration that fits the product
- responsive fallback when map interactions get cramped
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby search results, asset views, locator pages, route previews, or delivery interfaces already in the repo.
- Identify whether the request is a store locator, clustered results map, route-preview map, region-overlay view, or record-detail map.
- Check whether the product already uses side sheets, cards, chips, or list synchronization that the map should inherit.

If a local map pattern already exists, extend it instead of introducing a parallel geospatial language.

### 2. Define the map contract

Clarify:

- what data appears on the map
- whether the surface uses markers, polygons, routes, or heat-style density
- how selection works between map and list or panel
- whether clustering or aggregation is required
- what empty-map, permission, or unavailable-location states look like
- whether panning, zooming, recentering, or route preview controls are needed
- responsive fallback when map interactions do not fit smaller screens

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build spatial clarity before ornament

- Make the primary spatial question obvious: find, compare, route, or inspect.
- Keep marker styles legible and consistent with the product's semantic language.
- Avoid overloading the map with too many simultaneous overlays.
- Use list or panel support when location inspection requires more detail than a marker can show.

### 4. Handle density, selection, and smaller screens

- Cluster or summarize dense markers before the map becomes noisy.
- Keep selected marker and selected list item clearly synchronized.
- Distinguish no locations, unavailable locations, and filtered-out results.
- Use sheet, list-first, or split-view fallback when mobile map space becomes too cramped.
- If the visualization is really about abstract data comparison rather than geography, move to chart ownership.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one populated-map state and one selection or detail state where practical.
- Verify at least one empty or unavailable-location state where practical.
- If the map was only validated structurally and not against real spatial data or map library behavior, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about maps, geospatial exploration, or location-based result surfaces
- marker density, selection state, and spatial context matter
- the map surface itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is really a chart or non-geospatial analytical visualization
- the task is really a broader search, dashboard, or detail route where the map is only one sub-part
- the work is purely a tiny spacing or copy tweak on an existing map surface

## Output Shape

Prefer a structure like:

1. Map contract and assumptions
2. Spatial model, selection, and fallback covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
