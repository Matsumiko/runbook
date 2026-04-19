---
name: frontend-auth-builder
description: Build or refine frontend authentication pages, access gates, and account entry flows on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement sign in, sign up, password reset, email verification, magic link, MFA challenge, session-expired screens, invite acceptance, or access-denied surfaces while preserving the current component family and handling trust signals, privacy-safe errors, session states, and recovery paths correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task is mostly a generic page or non-auth form, use `frontend-page-builder` or `frontend-form-builder` first.
---

# Frontend Auth Builder

## Quick Start

1. Confirm the task is primarily an auth surface or access-state flow.
2. Audit the existing page shell, form family, trust cues, and `FRONTEND-DNA.md`.
3. Read `references/auth-flow-contract.md`.
4. Read `references/trust-signals-and-errors.md`.
5. Read `references/session-and-access-states.md`.
6. Build the smallest complete auth flow that still handles recovery and non-happy-path states honestly.

## Core Rules

- Reuse the existing page shell, input family, and theme tokens.
- Define the auth flow contract before building fields and supporting text.
- Make trust, clarity, and recovery paths obvious.
- Prefer privacy-safe error messaging over over-explaining auth failures.
- Treat sign in, verification, reset, MFA, and access-denied states as one identity system.
- Do not call an auth surface done if it only renders fields but ignores real auth states.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear auth flow contract
- the primary auth surface and its supporting recovery states
- privacy-safe error and feedback treatment
- session-expired, access-denied, or verification states where relevant
- responsive treatment that preserves trust and clarity
- at least one realistic proof surface
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby auth screens, gated pages, or entry forms already in the repo.
- Identify whether the request is sign in, sign up, password reset, email verification, magic link, MFA, invite acceptance, session expiry, or access denial.
- Check whether there are existing auth-layout conventions, alert patterns, or helper-copy rules in use.

If a local auth pattern already exists, extend it instead of introducing a parallel trust language.

### 2. Define the auth flow contract

Clarify:

- which auth step the user is in
- required fields or actions
- success destination
- failure modes and recovery paths
- what feedback should be specific versus privacy-safe
- whether the flow depends on a token, code, link, invitation, or active session
- loading, locked, expired, unauthorized, or already-authenticated behavior

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build trust before ornament

- Make the page purpose clear immediately.
- Keep labels, helper text, and CTA wording direct and calm.
- Keep legal, support, or recovery links discoverable but secondary.
- Use reassuring layout and spacing, not decorative gimmicks.
- Keep auth content focused; avoid unrelated content blocks that compete with the flow.

### 4. Handle recovery and access states

- Make invalid, expired, or already-used token states explicit.
- Provide clear next actions for retry, recovery, resend, or support.
- Handle already-authenticated users and unauthorized access deliberately.
- Ensure session-expired and access-denied surfaces still feel like part of the same product.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one success path and one non-happy-path auth state where practical.
- Verify at least one narrower layout where practical.
- If the surface was only validated structurally and not against a real auth backend contract, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about auth entry, account recovery, identity verification, or access gating
- trust signals and privacy-safe feedback matter
- the main challenge is auth UX rather than a generic form or page

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is a generic non-auth page or form
- the work is purely a tiny copy or spacing tweak on an existing auth screen

## Output Shape

Prefer a structure like:

1. Auth flow contract and assumptions
2. Screens, states, and recovery paths covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
