---
name: frontend-upload-builder
description: Build or refine frontend upload flows, file pickers, dropzones, attachment inputs, avatar or media upload UX, and upload-review steps on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement single-file or multi-file upload UI, drag-and-drop zones, preview lists, progress states, validation limits, retry or replace behavior, or removal flows while preserving the current component family and handling constraints, progress, failure recovery, and accessibility correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the main task is a broader settings surface, use `frontend-settings-builder` first. If the main task is a general non-upload form, use `frontend-form-builder` first. If the work is only a tiny tweak on an existing upload control, use the nearest surface skill.
---

# Frontend Upload Builder

## Quick Start

1. Confirm the task is primarily about file upload, attachment, import, avatar, or media-ingestion UI.
2. Audit the existing page shell, input family, status treatment, and `FRONTEND-DNA.md`.
3. Read `references/upload-contract.md`.
4. Read `references/validation-progress-and-retry.md`.
5. Read `references/preview-dropzone-and-removal.md`.
6. Build the smallest complete upload surface that still handles constraints, progress, and failure recovery honestly.

## Core Rules

- Reuse the existing form family, card treatment, semantic states, and theme tokens.
- Define the upload contract before choosing picker, dropzone, preview grid, or attachment list treatment.
- Make file constraints explicit before the user commits effort.
- Treat selecting, uploading, processing, success, failure, and removal as separate states with different UX needs.
- Keep progress, retry, replace, and remove actions obvious.
- Do not call upload work done if it only accepts files but ignores progress, validation, or recovery behavior.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear upload contract
- the right input pattern for the number and type of files involved
- explicit validation and constraint messaging
- progress, success, failure, retry, and remove behavior where relevant
- preview or attachment treatment that fits the existing product
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby upload controls, avatar pickers, attachment lists, import flows, or media-management surfaces already in the repo.
- Identify whether the request is a single-file picker, multi-file queue, drag-and-drop zone, avatar or image upload, document attachment, or import handoff flow.
- Check whether there are existing progress bars, inline errors, preview cards, or remove-confirmation patterns in use.

If a local upload pattern already exists, extend it instead of introducing a parallel file-ingestion language.

### 2. Define the upload contract

Clarify:

- accepted file types
- size, count, and dimension limits where relevant
- whether upload starts immediately or after explicit confirmation
- whether files are uploaded individually or as one batch
- progress and processing states
- preview requirements
- replace, retry, remove, or cancel behavior
- whether the uploaded asset is final, draft, or pending later review
- narrow-layout behavior if the surface lives inside a compact panel or form step

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Choose input pattern before ornament

- Use a simple picker when the flow is single-file and low complexity.
- Use a dropzone when drag-and-drop improves the task and the layout can support it cleanly.
- Use preview cards or attachment rows when users must review, replace, or remove files.
- Keep file constraints near the action, not buried in secondary helper text.
- Keep the visual weight on readiness, progress, and recovery rather than decorative upload illustrations.

### 4. Handle lifecycle and failure states

- Make queued, uploading, processing, uploaded, failed, and removed states visually distinct.
- Prevent duplicate submission or unclear re-upload behavior.
- Show why a file is rejected when the reason is known.
- Keep retry, replace, cancel, or remove actions obvious where relevant.
- Preserve explanation, progress, and actions on narrower layouts.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one accepted-file path and one rejected or failed-file path where practical.
- Verify progress or processing behavior where relevant.
- If the work was only validated structurally and not against a real upload backend or storage contract, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about upload, attachment, import-file, avatar, or media-ingestion UX
- validation limits, progress, preview, or retry behavior matter
- the upload surface itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the main task is a broader settings or configuration surface
- the main task is a general form without meaningful upload-specific UX
- the work is purely a tiny copy or spacing tweak on an existing upload control

## Output Shape

Prefer a structure like:

1. Upload contract and assumptions
2. Input pattern, constraints, and lifecycle covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
