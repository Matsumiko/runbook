# Channel Placement And Urgency

Choose the channel that matches meaning:

- inline status: local validation or component-bound feedback
- toast or snackbar: short, non-blocking updates that do not need long reading time
- banner or prominent alert: route-level or app-level status that must stay visible
- notification center or inbox: persistent multi-event communication with read/unread behavior

Guidelines:

- do not use toast for long instructions, destructive warnings, or critical blocking issues
- keep one primary action at most unless the product already supports a richer pattern
- if the user must understand the context around the message, preserve that context near the notification
- if multiple low-value notifications appear at once, prefer grouping or summarizing
