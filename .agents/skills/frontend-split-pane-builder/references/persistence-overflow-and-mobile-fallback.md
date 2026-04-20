# Persistence, Overflow, and Mobile Fallback

Pane layouts break when fallback rules are vague.

Requirements:

- persist pane size only if the product benefits from stable user preference
- distinguish content overflow from pane overflow
- use stacked panes, tabs, drawers, or route drills when mobile screens cannot support a true split
- keep the primary pane accessible when the secondary pane hides or collapses

If both panes are mission critical on small screens, provide a deliberate switching model instead of compressing both.
