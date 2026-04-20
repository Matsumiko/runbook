# Audit Log Contract

Define the audit log before building rows or diff reveal.

Capture:

- event scope
- required fields per row
- retention or redaction constraints visible to users
- filtering and search needs
- diff or expanded detail behavior
- state coverage: loading, empty log, filtered-empty, redacted, partial history, and error

The contract should make clear why the surface is audit history rather than a generic feed.
