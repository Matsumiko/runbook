# Validation Progress And Retry

Upload UX must state constraints and recovery paths clearly:

- show accepted formats and important limits before selection when practical
- reject unsupported files with a specific reason when the reason is known
- separate client validation failures from network or server failures
- keep progress visible for uploads that last long enough to be noticed
- distinguish uploading from processing if the backend keeps working after transfer completes
- make retry, replace, and cancel actions obvious when they are supported

Do not hide a failed upload behind a generic error state with no next action.
