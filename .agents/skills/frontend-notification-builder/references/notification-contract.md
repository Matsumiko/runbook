# Notification Contract

Define the notification contract before building UI:

- trigger: what event creates the notification
- audience: who should see it
- scope: local component, page, app shell, or persistent inbox
- severity: info, success, warning, error, or neutral notice
- urgency: can wait, should be seen soon, or must be resolved now
- persistence: ephemeral, session-only, or durable/read-state aware
- recovery action: retry, undo, resolve, open details, dismiss, or none
- duplication behavior: replace, stack, group, or suppress repeats

Do not choose the visual pattern first and retrofit the contract afterward.
