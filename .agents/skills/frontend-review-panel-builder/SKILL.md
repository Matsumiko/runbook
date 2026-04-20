---
name: frontend-review-panel-builder
description: Build or refine frontend review panels, approval surfaces, moderation decision panels, and evidence-first decision views on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement approve or reject workflows, moderation review panes, QA signoff panels, or request-changes surfaces where evidence, rationale, blocking comments, and final decisions must be handled together while preserving the current component family and managing status, safety, escalation, and responsive fallback correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task is mainly a work queue, a generic inspector, or a generic detail route, use `frontend-queue-board-builder`, `frontend-inspector-builder`, or `frontend-detail-page-builder` first.
---

# Frontend Review Panel Builder

## Quick Start

1. Confirm the task is primarily about making review decisions, not just reading metadata.
2. Audit the existing panel shells, status language, comments, evidence blocks, and `FRONTEND-DNA.md`.
3. Read `references/review-surface-contract.md`.
4. Read `references/evidence-decision-and-rationale.md`.
5. Read `references/comments-escalation-and-mobile-fallback.md`.
6. Build the smallest complete review surface that still handles evidence, rationale, and final actions honestly.

## Core Rules

- Reuse the existing panel, badge, alert, and action-button language.
- Define the review contract before choosing side panel, stacked card, or full-width decision surface.
- Keep decision state, evidence, and rationale requirements explicit.
- Treat approve, reject, request changes, or escalate actions as safety-critical.
- Preserve the evidence trail before adding decorative chrome.
- Do not call review work done if it shows content without a trustworthy decision model.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear review-surface contract
- visible decision states and gating rules
- evidence presentation that supports the final action
- rationale, blocking comments, or escalation paths where the workflow needs them
- empty, locked, already-reviewed, and loading states
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby approval flows, moderation tools, QA signoff screens, or admin review experiences already in the repo.
- Identify whether the request is approval, moderation, compliance review, QA signoff, or request-changes work.
- Check whether the product already uses decision badges, comment threads, warning callouts, or evidence panels that the review surface should inherit.

If a local review pattern already exists, extend it instead of introducing a parallel decision language.

### 2. Define the review contract

Clarify:

- what artifact is being reviewed
- what decisions are allowed
- whether rationale or blocking comments are mandatory
- whether evidence includes diffs, screenshots, metadata, or policy checks
- which actions are immediate versus confirmation-gated
- what already-reviewed, locked, conflict, and loading states look like
- mobile fallback strategy when evidence and decisions can no longer sit comfortably together

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build decision clarity before chrome

- Make the current review status obvious.
- Keep the primary decision path unmistakable without turning every action into a primary CTA.
- Place rationale or comments close to the decision they justify.
- Avoid burying critical evidence behind too many tabs or disclosures.

### 4. Handle comments, escalation, and fallback

- Distinguish informational notes from blocking issues.
- Keep destructive or irreversible decisions visibly safer than routine actions.
- Preserve context when switching between evidence, comments, and the decision summary.
- Collapse to stacked sections, sheets, or route-level review screens when compact side panels stop being usable.
- If the surface is really a queue or a generic inspector, move ownership to the broader or better-matched skill.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one approve or confirm path and one reject, block, or request-changes path where practical.
- Verify at least one rationale or comment-required state where practical.
- Verify at least one narrower-layout fallback where practical.

## Decision Boundary

### Use this skill when:

- the task is clearly about approval, moderation, signoff, or review decisions
- evidence, rationale, and final actions need to live together
- the review decision surface itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is really a queue or backlog rather than the decision panel itself
- the task is really a generic inspector or metadata side panel
- the task is really a full detail route without dedicated review behavior
- the work is purely a tiny spacing or copy tweak on an existing review surface

## Output Shape

Prefer a structure like:

1. Review contract and assumptions
2. Evidence, decision, and escalation behavior covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
