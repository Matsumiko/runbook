---
name: frontend-form-builder
description: Build or refine frontend forms on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement a login form, settings form, checkout form, profile editor, search or filter form, wizard step, or other input-heavy surface while preserving the current component family and handling validation, field states, submission, and accessibility correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task is mostly general component work rather than form behavior, use `frontend-component-builder`.
---

# Frontend Form Builder

## Quick Start

1. Confirm the task is primarily form implementation or refinement.
2. Audit the existing stack, nearby forms, current input components, and `FRONTEND-DNA.md`.
3. Read `references/form-contract.md`.
4. Read `references/validation-and-states.md`.
5. Read `references/submission-and-feedback.md`.
6. Build the smallest complete form flow that still handles the important states honestly.

## Core Rules

- Reuse the existing input family, layout rhythm, and theme tokens.
- Define the form contract before building fields.
- Handle validation, disabled states, submit lifecycle, and feedback deliberately.
- Prefer clear, recoverable error UX over decorative polish.
- Do not mark a form done if it only renders fields but ignores real states.
- Keep keyboard, label, and focus behavior accessible.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear form contract
- field structure and grouping that fit the product
- validation and error handling for relevant fields
- loading, disabled, success, and failure submission states
- accessible labels, helper text, and focus handling
- at least one realistic proof surface
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby forms or field patterns already in the repo.
- Identify whether the request is a small form, settings surface, multi-step flow, or filter/search form.
- Check whether there is already a validation or form-state library in use.

If a local pattern already exists, extend it instead of introducing a parallel form approach.

### 2. Define the form contract

Clarify:

- field list
- required versus optional fields
- validation rules
- submit action and success criteria
- inline versus form-level errors
- loading and disabled behavior
- whether the form needs optimistic, draft, or multi-step behavior

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build the form systemically

- Reuse existing input, select, textarea, checkbox, radio, and button components where available.
- Keep label, helper text, and error patterns consistent.
- Group fields by task, not just by schema order.
- Avoid dense walls of inputs without hierarchy.

### 4. Handle lifecycle and feedback

- Make submit state visible.
- Prevent accidental double-submission where relevant.
- Show recoverable error feedback.
- Make success handling clear without jarring UX.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify the important field and submission states where practical.
- If the form was only verified structurally and not against a real backend flow, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about forms or input-heavy surfaces
- validation and submit behavior matter
- the main challenge is form UX, field structure, or form-state correctness

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is mostly a generic non-form component
- the work is purely a tiny copy or spacing tweak on an existing form

## Output Shape

Prefer a structure like:

1. Form contract and assumptions
2. Fields, validation, and states covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
