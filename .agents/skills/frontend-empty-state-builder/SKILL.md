---
name: frontend-empty-state-builder
description: Build or refine frontend empty states, no-data surfaces, no-results states, blocked states, and recovery-first zero-state experiences on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement first-use empty screens, no-match search states, permission-limited or unavailable surfaces, empty dashboards, empty tables, or guided next-action states while preserving the current component family and handling explanation, motivation, and recovery paths correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task is mainly a generic polish pass, use `frontend-polish-pass` first. If the task is a full page, dashboard, search, or table build where the empty state is only one part, use the matching builder first unless the empty-state surface itself is the main job.
---

# Frontend Empty State Builder

## Quick Start

1. Confirm the task is primarily about an empty, no-data, no-results, blocked, or recovery-first state.
2. Audit the existing page shell, card family, CTA language, and `FRONTEND-DNA.md`.
3. Read `references/empty-state-contract.md`.
4. Read `references/explanation-and-next-actions.md`.
5. Read `references/no-data-vs-no-results-vs-blocked.md`.
6. Build the smallest complete empty-state surface that still explains what happened and what the user should do next.

## Core Rules

- Reuse the existing page shell, typography, icon language, and theme tokens.
- Define the empty-state contract before composing copy, illustration, or actions.
- Explain why the state exists without overloading the user with diagnostics.
- Make the next high-value action explicit.
- Treat no-data, no-results, blocked, and unavailable states as different jobs, not cosmetic variants of one card.
- Do not call an empty state done if it looks tidy but leaves the user with no obvious recovery path.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear empty-state contract
- one main explanation that matches the actual reason for the state
- one strong next action and disciplined secondary actions
- visual treatment that fits the existing product instead of feeling like a stock placeholder
- explicit distinction between no-data, no-results, blocked, and unavailable states
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby empty states, onboarding nudges, blocked states, or no-result surfaces already in the repo.
- Identify whether the request is first-use empty data, no-match search, blocked permissions, unavailable integration, or another recovery-driven state.
- Check whether there are existing icon treatments, CTA patterns, helper-copy styles, or illustration directions in use.

If a local empty-state pattern already exists, extend it instead of introducing a parallel fallback language.

### 2. Define the empty-state contract

Clarify:

- what the user expected to see
- why that content or capability is missing right now
- whether this is no data, no results, blocked access, unavailable backend state, or a not-yet-configured surface
- what action should happen next
- whether the user can recover immediately, later, or not at all from this state
- which supporting links, docs, or secondary actions are actually useful
- responsive fallback strategy if the state lives inside a narrow panel or table wrapper

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build explanation before ornament

- Establish the state title, explanation, and primary next action first.
- Keep the visual weight on the message and the next step, not on decorative icons.
- Use illustration, icon, or card treatment only if it reinforces the product's existing language.
- Keep copy calm, specific, and actionable.
- Avoid generic filler like "Nothing here yet" when the real reason can be explained more honestly.

### 4. Handle recovery and adjacent states

- Make reset, retry, create, import, invite, or permission-request actions obvious where relevant.
- Distinguish clearly between "there is no data", "your query returned nothing", and "you cannot access this".
- If the state appears inside a page, dashboard, table, or search surface, preserve local context so the user still knows where they are.
- Keep secondary help links or documentation subordinate to the primary recovery path.
- Ensure narrow layouts preserve explanation and CTA order without collapsing into noise.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one realistic empty or blocked state and one recovery action path where practical.
- Verify at least one narrower layout where practical.
- If the state was only validated structurally and not against real runtime conditions, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about empty, no-data, no-results, blocked, or unavailable states
- explanation, recovery, and next-action clarity matter
- the empty-state surface itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the main task is a broader page, dashboard, search, or table build and the empty state is only one sub-part
- the task is mostly a general polish pass rather than building the state itself
- the work is purely a tiny copy or spacing tweak on an existing empty state

## Output Shape

Prefer a structure like:

1. Empty-state contract and assumptions
2. Explanation, recovery path, and state distinction covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
