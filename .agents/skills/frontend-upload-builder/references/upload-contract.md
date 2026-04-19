# Upload Contract

Define the upload contract before building UI:

- accepted file types and format rules
- file count limits
- file size and dimension limits where relevant
- upload trigger: immediate, queued, or submit-with-form
- preview expectations
- backend handoff state: uploaded, processing, awaiting review, or attached later
- user actions: replace, retry, remove, cancel, reorder, or none
- error ownership: client-side validation, network failure, or server-side rejection

Do not build the visual shell first and discover the upload rules afterward.
