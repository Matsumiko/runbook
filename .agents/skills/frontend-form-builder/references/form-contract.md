# Form Contract

Define the form before implementing it.

## Minimum Contract

Clarify:

- purpose of the form
- list of fields
- required versus optional fields
- validation expectations
- submit action
- success outcome
- failure outcome
- loading or pending behavior

## Surface Types

### Short transactional form

Examples:

- login
- newsletter signup
- promo code
- invite user

Priorities:

- speed
- clarity
- error recovery
- minimal friction

### Settings or profile form

Examples:

- account settings
- billing details
- user profile

Priorities:

- field grouping
- save feedback
- dirty state clarity
- reversible edits where possible

### Search or filter form

Examples:

- dashboard filters
- catalog search controls

Priorities:

- compact layout
- reset behavior
- state visibility
- clear defaults

### Multi-step or wizard form

Examples:

- onboarding
- checkout
- setup flows

Priorities:

- progress visibility
- step validation
- back and forth resilience
- clear continuation rules

## Contract Rule

If the user did not specify all of this, infer the smallest sensible contract and state the assumptions.
