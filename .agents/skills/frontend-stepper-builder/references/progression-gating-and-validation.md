# Progression, Gating, and Validation

Stepper UI must match real flow rules.

Check:

- blocked steps look different from upcoming but available steps
- validation failures or async waits are visible without confusing current progress
- completed steps are not mistaken for optional skipped steps
- revisiting prior steps has clear rules
- progress indicators do not imply users can jump where the backend or flow logic forbids it

Keep gating behavior explicit and unsurprising.
