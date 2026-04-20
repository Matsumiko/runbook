# Scheduler Surface Contract

Define the scheduler before choosing a layout.

Capture:

- resource model: staff, rooms, vehicles, queues, or mixed
- time model: date range, slot granularity, timezone, and current-time marker
- assignment unit: appointment, shift, booking, delivery stop, or task slot
- lane grouping and ordering rules
- interaction model: create, assign, drag, resize, reassign, or read-only
- conflict rules, blocked periods, availability windows, and waitlist behavior
- state coverage: loading, no availability, conflict, filtered, and selected-slot states

Keep the contract explicit about whether the scheduler is operational, booking-oriented, or planning-oriented.
