# Layering Focus And Dismissal

Overlay behavior must be intentional:

- trap focus when the overlay is blocking interaction
- return focus to the opener when the overlay closes
- lock background scroll when the overlay should feel modal
- do not allow backdrop click or escape on destructive or high-risk flows unless the product explicitly wants that
- keep close, cancel, and destructive actions visually distinct
- prevent background controls from remaining interactable behind an active blocking overlay

Do not mark modal work complete if keyboard flow, focus return, or dismissal behavior is unclear.
