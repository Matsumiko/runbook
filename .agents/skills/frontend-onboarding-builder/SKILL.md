---
name: frontend-onboarding-builder
description: Build or refine frontend onboarding flows, first-run setup experiences, activation wizards, and guided empty-state journeys on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement welcome flows, first-workspace or first-project setup, profile completion, integration connection, import setup, initial preferences, or other post-signup activation sequences while preserving the current component family and handling step progression, motivation, and drop-off states correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task is auth entry, use `frontend-auth-builder`. If the task is a generic route-level page, use `frontend-page-builder`. If the task is just one isolated form or settings screen, use `frontend-form-builder` or `frontend-settings-builder` first.
---

# Frontend Onboarding Builder

## Quick Start

1. Confirm the task is primarily a first-run onboarding, setup, or activation flow.
2. Audit the existing page shell, form family, empty-state treatment, and `FRONTEND-DNA.md`.
3. Read `references/onboarding-flow-contract.md`.
4. Read `references/progression-and-step-states.md`.
5. Read `references/activation-and-empty-project-states.md`.
6. Build the smallest complete onboarding flow that still gets the user to a meaningful activated state honestly.

## Core Rules

- Reuse the existing page shell, input family, CTA language, and theme tokens.
- Define the onboarding contract before composing steps or sections.
- Make the activation goal explicit from the start.
- Prefer the shortest credible path to first value.
- Treat welcome, setup, empty-state guidance, and completion as one activation system.
- Do not call onboarding done if it only renders steps but ignores skip, resume, or blocked states.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear onboarding flow contract
- a strong welcome or first-step orientation
- step progression that makes forward motion obvious
- explicit skip, resume, blocked, and completion treatment where relevant
- activation-aware empty states or next-action guidance
- responsive treatment that preserves momentum
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby first-run screens, setup flows, empty-project states, or activation nudges already in the repo.
- Identify whether the request is welcome onboarding, setup wizard, profile completion, create-first-resource flow, connect-integration flow, import flow, or guided empty-state activation.
- Check whether there are existing stepper patterns, progress indicators, setup cards, checklist patterns, or post-signup shells in use.

If a local onboarding pattern already exists, extend it instead of introducing a parallel activation language.

### 2. Define the onboarding flow contract

Clarify:

- who is entering the flow and at what account state
- what activation means for this product
- the minimum steps required to reach first value
- which steps are required versus skippable
- whether the flow is linear, checkpoint-based, or checklist-based
- what happens when the user skips, abandons, or returns later
- loading, blocked, empty, success, and error behavior

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build momentum before polish

- Establish the welcome context and activation target first.
- Keep each step focused on one real user decision or action.
- Make progress visible without over-explaining every detail.
- Keep skip, back, and save-for-later behavior clear where relevant.
- Avoid long first-run flows that feel like a tax before value appears.

### 4. Handle completion, drop-off, and empty states

- Make blocked or unavailable setup states explicit.
- Show users what happens after they finish the current step.
- If the product still has no data after setup, use guided empty states instead of a dead end.
- Keep incomplete-progress or resume behavior understandable.
- Preserve orientation on narrow layouts when steps stack or side panels collapse.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one happy-path activation path and one drop-off, skip, or blocked state where practical.
- Verify at least one narrower layout where practical.
- If the flow was only validated structurally and not against real onboarding or activation logic, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about first-run onboarding, setup, or activation
- step progression, motivation, and completion states matter
- the main challenge is getting the user from access to first value cleanly

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is specifically an auth entry or identity verification flow
- the task is a generic route-level page rather than an activation journey
- the task is just one isolated form or one isolated settings screen
- the task is specifically a dashboard, marketing page, detail page, or checkout flow
- the work is purely a tiny copy or spacing tweak on an existing onboarding screen

## Output Shape

Prefer a structure like:

1. Onboarding flow contract and assumptions
2. Steps, activation target, and states covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
