# Submission and Feedback

Form UX is incomplete without submission behavior.

## Submission Pass

Check:

- what happens while the request is pending
- whether the submit action can be triggered twice accidentally
- how success is acknowledged
- how failure is surfaced
- what stays editable after failure

## Good Defaults

- Disable or guard the submit action while a submission is actively pending when double-submit would be harmful.
- Preserve entered values after failures unless the product explicitly says otherwise.
- Keep success feedback proportionate to the action.
- Avoid dumping raw backend errors into the UI.

## Surface-Specific Notes

### Search and filter forms

- Feedback may be the result list updating, not a success banner.
- Reset and clear behavior matters more here than celebratory success states.

### Settings forms

- Dirty state clarity matters.
- Save confirmation should be obvious but not noisy.

### Checkout or sensitive flows

- Prevent duplicate submissions.
- Keep failure recovery straightforward and trustworthy.

## Verification Standard

If submit, failure, and disabled states were not checked, the form pass is only partial.
