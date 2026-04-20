# Feed Contract

Use this reference to define the stream before composing event rows.

## Common feed jobs

- Workspace recent activity
- Record-specific recent updates
- Collaboration or team stream
- Audit-like recent events panel

## Contract questions

Clarify:

- which events belong in the stream
- feed scope: global, workspace, project, record, or user
- unread or seen-state needs
- grouping model
- load-more or incremental fetch behavior

## Pattern boundary

- Use timeline-builder for milestones or progress sequence.
- Use notification-builder for alerts, warnings, or inbox-style persistent messaging.
