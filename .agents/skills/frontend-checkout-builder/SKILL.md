---
name: frontend-checkout-builder
description: Build or refine frontend checkout pages, purchase flows, billing steps, and order-review surfaces on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement cart-to-payment flows, shipping and billing steps, order summaries, coupon or promo entry, payment-method selection, confirmation pages, or purchase-recovery states while preserving the current component family and handling trust, totals clarity, submit safety, async payment states, and conversion completion correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task is a generic non-payment form, use `frontend-form-builder` first.
---

# Frontend Checkout Builder

## Quick Start

1. Confirm the task is primarily a checkout, billing, or purchase-completion flow.
2. Audit the existing page shell, form family, summary cards, and `FRONTEND-DNA.md`.
3. Read `references/checkout-flow-contract.md`.
4. Read `references/totals-and-trust.md`.
5. Read `references/payment-and-recovery-states.md`.
6. Build the smallest complete checkout flow that still handles trust and non-happy-path states honestly.

## Core Rules

- Reuse the existing page shell, input family, summary components, and theme tokens.
- Define the checkout flow contract before building steps or summaries.
- Keep price, fees, discounts, and totals legible at a glance.
- Make trust and payment safety cues explicit without clutter.
- Treat address, shipping, payment, order review, and completion as one purchase system.
- Do not call a checkout done if it only renders happy-path fields and ignores payment or recovery states.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear checkout flow contract
- purchase steps and summary structure that fit the product
- explicit totals, fees, and discount treatment
- safe submit and async payment-state handling
- recovery states for failure, retry, expired cart, or unavailable payment options
- at least one realistic proof surface
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby purchase, billing, subscription, or cart flows already in the repo.
- Identify whether the request is a one-page checkout, multi-step checkout, payment-method selector, billing update, order review, or confirmation surface.
- Check whether there are existing summary cards, coupon inputs, payment UI wrappers, or billing-state conventions in use.

If a local checkout pattern already exists, extend it instead of introducing a parallel purchase language.

### 2. Define the checkout flow contract

Clarify:

- what the user is purchasing
- required steps and step order
- address, shipping, billing, or tax inputs
- subtotal, fees, discounts, and total behavior
- payment-method choices
- success destination
- failure, retry, expired, or unavailable states
- loading and submit-lock behavior

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build clarity before ornament

- Make the order summary understandable without scrolling archaeology.
- Keep the primary purchase CTA obvious and singular.
- Separate editable inputs from final totals and review content.
- Keep promotions, upsells, and secondary actions subordinate to purchase completion.
- Use calm trust cues around payment, policy, and confirmation messaging.

### 4. Handle payment and recovery states

- Make processing, failure, retry, and confirmation states explicit.
- Prevent accidental double-submission where relevant.
- Handle unavailable payment methods or changed totals honestly.
- Make post-submit states feel deterministic even when the backend is asynchronous.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one success path and one non-happy-path checkout state where practical.
- Verify at least one narrower layout where practical.
- If the flow was only validated structurally and not against a real billing or payment backend contract, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about checkout, purchase completion, or billing-step UX
- totals clarity, trust, and payment state handling matter
- the main challenge is purchase flow UX rather than a generic form

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is a generic non-payment form
- the work is purely a tiny copy or spacing tweak on an existing checkout screen

## Output Shape

Prefer a structure like:

1. Checkout flow contract and assumptions
2. Steps, totals, trust cues, and states covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
