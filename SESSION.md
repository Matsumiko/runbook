# SESSION.md

Session recovery protocol for AI coding agents.

This file defines how agents preserve task state when a session is interrupted by
power loss, terminal closure, model cutoff, browser crash, or any other unexpected
stop.

`SESSION.md` is read-only guidance. Agents write actual task state to separate
runtime files named `SESSION-[YYYYMMDD]-[HHMM].json`.

---

## Purpose

Use this protocol to make handoffs and recovery explicit:

- what the user asked for
- what the agent understood
- what plan was active
- what changed
- what was verified
- where work stopped
- what must happen next

The goal is that the next agent can continue without guessing.

---

## File Roles

| File | Role |
| --- | --- |
| `SESSION.md` | Protocol and schema. Do not write task state here. |
| `SESSION-EXAMPLE.json` | Public example. Do not treat as a live session. |
| `SESSION-[YYYYMMDD]-[HHMM].json` | Runtime checkpoint for one task/session. |

Runtime session files are local operational artifacts. Do not stage or commit
`SESSION-[YYYYMMDD]-[HHMM].json` unless the user explicitly asks for that.

---

## When To Use A Session File

Create and maintain a runtime session file when any of these are true:

- the task is non-trivial, multi-step, risky, or spans multiple files
- the task may take long enough to be interrupted
- the task changes code, configuration, docs, package metadata, database schema, auth, billing, security, deployment, or public behavior
- the user asks for resumability, continuity, status tracking, or handoff safety
- the user sends `run:status`, `run:resume`, or `run:recap`

For trivial low-risk tasks, a session file is optional unless the user explicitly
asks for resumability.

---

## Naming

Use local time.

```text
SESSION-[YYYYMMDD]-[HHMM].json
```

Examples:

```text
SESSION-20260420-1430.json
SESSION-20260420-2215.json
```

Every new non-trivial user task gets a new session file. Do not overwrite a
previous runtime session file.

---

## Privacy And Safety

Session files are useful but can contain sensitive context. Keep them safe.

- Never write secrets, tokens, passwords, cookies, API keys, private keys, full auth headers, or raw production payloads into a session file.
- Redact sensitive values as `[REDACTED]`.
- Summarize large payloads instead of copying them.
- Do not store user private data unless it is necessary to resume the task.
- Do not commit runtime `SESSION-[YYYYMMDD]-[HHMM].json` files unless explicitly requested.
- If the repository has `.gitignore`, prefer ignoring `SESSION-[0-9]*-[0-9]*.json` while keeping `SESSION-EXAMPLE.json` tracked.

---

## Agent Behavior

### Starting a non-trivial task

1. Read `SESSION.md`.
2. Create a new `SESSION-[YYYYMMDD]-[HHMM].json` before implementation begins.
3. Record the user's original prompt verbatim, except redact secrets.
4. Record understood goal, assumptions, out-of-scope items, and blockers.
5. Record the execution plan before file edits or risky operations.
6. Set `session.status` to `ACTIVE`.

### During work

Update the session file in real time:

- before starting a meaningful step, mark the step `in_progress`
- after completing a step, mark it `completed` and update `lastPosition`
- after changing files, update `log`, `summary.filesChanged`, and `lastPosition`
- after a decision, update `decisions`
- after a blocker, update `blockers` and `lastPosition`
- after verification, update `summary.completed` and `log`

Do not wait until the end to write the session file. The last saved state must be
useful if the machine dies immediately afterward.

### Ending work

Set `session.status` to one of:

- `COMPLETED` when all requested work is done and verified
- `PAUSED` when the user intentionally pauses or the agent must wait
- `CANCELLED` when the task is intentionally abandoned
- `BLOCKED` when work cannot continue without external input

Update `endedAt` when the session is no longer active.

---

## Resume Rules

If a previous session was interrupted by a crash, the status may still be
`ACTIVE`. Treat a stale `ACTIVE` session as recoverable.

Before resuming:

1. Find the newest runtime session file.
2. Ignore `SESSION-EXAMPLE.json`.
3. Read `lastPosition`, `plan`, `log`, `decisions`, and `blockers`.
4. Audit the current workspace state before writing new changes.
5. Continue from `lastPosition.nextStep` only if the workspace matches the recorded state.
6. If the workspace has drifted, report the mismatch and re-plan safely.

Never resume by guessing from chat history alone when a session file exists.

---

## Commands

These commands are directives. When received, stop current activity and handle
the command first.

| Command | Behavior |
| --- | --- |
| `run:status` | Read the newest runtime session file and report current progress, stop point, system condition, and next action. |
| `run:resume` | Read the newest `ACTIVE`, `PAUSED`, `INTERRUPTED`, or `BLOCKED` runtime session, audit the workspace, then continue from `lastPosition.nextStep` if safe. |
| `run:recap` | Read the newest runtime session file and summarize what was done, files changed, decisions made, and remaining work. |

If no runtime session file exists, respond:

```text
No active session found. Start a new non-trivial task to create one.
```

---

## Finding The Newest Runtime Session

1. List files matching `SESSION-*.json`.
2. Exclude `SESSION-EXAMPLE.json`.
3. Sort by filename descending.
4. Use the first file.

For `run:resume`, prefer the newest file with status `ACTIVE`, `PAUSED`,
`INTERRUPTED`, or `BLOCKED`. Do not resume a `COMPLETED` or `CANCELLED` session
unless the user explicitly asks to reopen it.

---

## JSON Schema

Use this structure for runtime session files.

```json
{
  "session": {
    "id": "SESSION-YYYYMMDD-HHMM",
    "date": "YYYY-MM-DD",
    "startedAt": "HH:MM TZ",
    "endedAt": null,
    "status": "ACTIVE",
    "agent": "agent name and model if known"
  },
  "prompt": {
    "original": "verbatim user prompt with secrets redacted",
    "understoodGoal": "one-line goal",
    "assumptions": [
      {
        "assumption": "text",
        "reason": "why this assumption is safe or necessary"
      }
    ],
    "outOfScope": [
      "explicit item not being done and why"
    ],
    "blockers": [
      {
        "question": "text",
        "status": "awaiting_user"
      }
    ]
  },
  "plan": [
    {
      "step": 1,
      "title": "short step title",
      "description": "what this step does",
      "status": "pending",
      "startedAt": null,
      "completedAt": null
    }
  ],
  "log": [
    {
      "time": "HH:MM",
      "step": 1,
      "title": "short step title",
      "status": "in_progress",
      "what": "concrete action taken",
      "files": [
        {
          "path": "path/to/file",
          "change": "what changed and why"
        }
      ],
      "result": "what was produced or learned",
      "notes": "decisions, risks, or details needed for resume"
    }
  ],
  "lastPosition": {
    "time": "HH:MM",
    "lastAction": "exact description of the last completed action",
    "lastStepStatus": "completed",
    "nextStep": "exact next action",
    "lastFileTouched": "path/to/file or null",
    "systemCondition": "intact, broken, blocked, or mid-flight with explanation",
    "criticalContext": [
      "must-know item before resuming"
    ]
  },
  "blockers": [
    {
      "time": "HH:MM",
      "description": "what blocks progress",
      "resolution": "resolved detail or awaiting_user_input"
    }
  ],
  "decisions": [
    {
      "time": "HH:MM",
      "decision": "what was decided",
      "reason": "why"
    }
  ],
  "summary": {
    "completed": [],
    "incomplete": [],
    "filesChanged": [],
    "verification": [],
    "nextSessionMustKnow": []
  }
}
```

---

## Status Values

### `session.status`

| Status | Meaning |
| --- | --- |
| `ACTIVE` | Work is currently running, or was interrupted before being closed. |
| `PAUSED` | Work was intentionally paused. |
| `INTERRUPTED` | Work stopped unexpectedly and was marked after recovery. |
| `BLOCKED` | Work cannot continue without external input. |
| `COMPLETED` | Requested work finished and verification was performed. |
| `CANCELLED` | Work was intentionally abandoned. |

### `plan[].status` and `log[].status`

| Status | Meaning |
| --- | --- |
| `pending` | Not started. |
| `in_progress` | Currently being worked on. |
| `completed` | Done and verified as appropriate. |
| `failed` | Failed; see notes. |
| `skipped` | Skipped intentionally; see notes. |
| `blocked` | Waiting for user or external input. |

---

## Response Format: `run:status`

```text
SESSION STATUS

Session: [session.id]
Started: [session.startedAt]
Status : [session.status]

Original prompt:
"[prompt.original]"

Progress:
[x] Step 1 - [title]
[x] Step 2 - [title]
[~] Step 3 - [title] <-- stopped here
[ ] Step 4 - [title]

System condition:
[lastPosition.systemCondition]

Next action:
[lastPosition.nextStep]

Use run:resume to continue from this point.
```

---

## Response Format: `run:recap`

```text
SESSION RECAP

Session: [session.id]
Started: [session.startedAt]

What was done:
- [time] Step [n] - [result]

Files changed:
- [path] - [change]

Decisions made:
- [decision] - [reason]

Remaining:
- Step [n] - [description]
```
