# Payment And Recovery States

Treat payment states as core product behavior.

Account for states like:

- payment processing
- payment failed
- payment requires retry or another method
- cart expired or price changed
- promo invalid
- order submitted but confirmation pending
- confirmation success

Checklist:

- the next action is obvious after failure
- submit controls do not allow accidental duplicate payment attempts
- totals changes are surfaced clearly
- async confirmation states still feel deterministic to the user
