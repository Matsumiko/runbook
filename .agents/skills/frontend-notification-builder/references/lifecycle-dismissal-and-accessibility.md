# Lifecycle Dismissal And Accessibility

Notification behavior must be intentional:

- auto-dismiss only when the user can safely miss the message
- persistent warnings need visible manual dismissal or a resolution path
- dismissing one message should not remove unrelated state or hide unresolved problems
- notification-center items need clear read, unread, or resolved treatment when the product supports it

Accessibility rules:

- do not rely on color alone to communicate meaning
- use appropriate live-region behavior for async messages
- do not steal focus for non-blocking toasts
- keep dismiss and action controls keyboard reachable
- keep message order stable so narrow layouts do not separate explanation from action
