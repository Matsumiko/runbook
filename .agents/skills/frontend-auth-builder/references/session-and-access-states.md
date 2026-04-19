# Session And Access States

Treat auth state changes as product behavior, not edge cases.

Account for states like:

- already signed in
- session expired
- invitation expired
- reset or verify token invalid
- MFA required
- unauthorized or insufficient permission
- email sent / link sent confirmation

State checklist:

- the user immediately understands what happened
- the next action is obvious
- the page does not dead-end when a token or session is invalid
- the same trust language carries across sign in, recovery, verification, and denial screens
