# Actor, Action, Diff, and Integrity

Audit logs are read for accountability.

Guidelines:

- keep actor, action, target, and timestamp readable in one pass
- treat field-level diffs as evidence, not decoration
- use calm semantic styling that supports trustworthiness
- keep redaction or masked fields visibly intentional
- avoid collapsing unlike events into one overly generic sentence

If the underlying system cannot provide full diff detail, present the limitation explicitly.
