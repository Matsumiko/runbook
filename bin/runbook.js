#!/usr/bin/env node

"use strict";

const fs = require("fs");
const path = require("path");
const childProcess = require("child_process");

const packageRoot = path.resolve(__dirname, "..");
const packageMeta = require(path.join(packageRoot, "package.json"));
const sessionDirectory = path.join(".runbook", "sessions");
const sessionFilePattern = /^SESSION-\d{8}-\d{4}\.json$/;
const recoverableSessionStatuses = new Set(["ACTIVE", "PAUSED", "INTERRUPTED", "BLOCKED"]);
const cleanupSessionStatuses = new Set(["COMPLETED", "CANCELLED"]);
const defaultSessionKeepCount = 5;
const defaultSessionOlderThanDays = 0;

const coreFiles = [
  ["AGENTS.md", "AGENTS.md"],
  ["templates/context/CONTEXT.md", "CONTEXT.md"],
  ["SESSION.md", "SESSION.md"],
  ["SESSION-EXAMPLE.json", "SESSION-EXAMPLE.json"],
  [".runbook/sessions/.gitkeep", ".runbook/sessions/.gitkeep"],
  ["templates/core/PROJECT.md", "PROJECT.md"],
  ["templates/core/DECISIONS.md", "DECISIONS.md"],
  ["templates/core/BUG-HISTORY.md", "BUG-HISTORY.md"],
  ["templates/core/MODULE-MAP.md", "MODULE-MAP.md"],
  ["templates/core/ACTIVE-PLAN.md", "ACTIVE-PLAN.md"],
  ["templates/core/BACKLOG.md", "BACKLOG.md"],
  ["templates/core/CHANGELOG.md", "CHANGELOG.md"],
  ["FRONTEND.md", "FRONTEND.md"],
  ["SECURITY.md", "SECURITY.md"],
  ["POLICIES.md", "POLICIES.md"],
  ["AGENT-VARIANTS.md", "AGENT-VARIANTS.md"],
];

const profileFiles = {
  minimal: [
    ["AGENTS.md", "AGENTS.md"],
    ["templates/context/CONTEXT.md", "CONTEXT.md"],
    ["templates/core/PROJECT.md", "PROJECT.md"],
  ],
  frontend: [
    ["AGENTS.md", "AGENTS.md"],
    ["templates/context/CONTEXT.md", "CONTEXT.md"],
    ["templates/core/PROJECT.md", "PROJECT.md"],
    ["FRONTEND.md", "FRONTEND.md"],
  ],
  backend: [
    ["AGENTS.md", "AGENTS.md"],
    ["templates/context/CONTEXT.md", "CONTEXT.md"],
    ["templates/core/PROJECT.md", "PROJECT.md"],
    ["SECURITY.md", "SECURITY.md"],
  ],
  full: coreFiles,
};

const validProfiles = Object.keys(profileFiles);

const variantFiles = {
  codex: [],
  claude: ["CLAUDE.md"],
  opencode: [".opencode/agents/runbook.md"],
  cursor: [".cursor/rules/10-core.mdc"],
  copilot: [
    ".github/copilot-instructions.md",
    ".github/instructions/frontend.instructions.md",
    ".github/instructions/backend-security.instructions.md",
  ],
  gemini: ["GEMINI.md"],
  windsurf: [".windsurf/rules/10-core.md"],
  cline: [".clinerules/core.md"],
  aider: ["CONVENTIONS.md", ".aider.conf.yml"],
};

const validAgents = Object.keys(variantFiles);
const opencodeInstructionFiles = ["AGENTS.md", "CONTEXT.md", "SESSION.md"];
const opencodeRunBookAgent = "runbook";

const contextRoutes = {
  list: {
    title: "Available context routes",
    files: [],
    note: "Use: runbook context <general|frontend|backend|architecture|bugfix|module-work|security-audit|resume|planning|inspect>",
  },
  inspect: {
    title: "Inspect installed RunBook context",
    files: [],
    note: "Use for checking whether the target project has the expected RunBook context files.",
  },
  general: {
    title: "General code task",
    files: ["AGENTS.md", "CONTEXT.md", "PROJECT.md"],
    note: "Use for ordinary code tasks that need project commands, architecture, and gotchas.",
  },
  frontend: {
    title: "Frontend work",
    files: ["AGENTS.md", "CONTEXT.md", "PROJECT.md", "FRONTEND.md"],
    note: "Use for UI, layout, visual, interaction, responsive, or design-system work.",
  },
  backend: {
    title: "Backend or security-sensitive work",
    files: ["AGENTS.md", "CONTEXT.md", "PROJECT.md", "SECURITY.md"],
    note: "Use for backend changes, auth, billing, payments, uploads, webhooks, secrets, migrations, or sensitive data.",
  },
  architecture: {
    title: "Architecture or product decision work",
    files: ["AGENTS.md", "CONTEXT.md", "PROJECT.md", "DECISIONS.md", "MODULE-MAP.md"],
    note: "Use for architectural direction, business rules, ownership boundaries, and changes that could conflict with accepted decisions.",
  },
  bugfix: {
    title: "Bugfix or regression work",
    files: ["AGENTS.md", "CONTEXT.md", "PROJECT.md", "MODULE-MAP.md", "BUG-HISTORY.md", "DECISIONS.md"],
    note: "Use for debugging, regression fixes, and repeated failures where old fixes or module ownership matter.",
  },
  "module-work": {
    title: "Module-specific implementation work",
    files: ["AGENTS.md", "CONTEXT.md", "PROJECT.md", "MODULE-MAP.md", "DECISIONS.md"],
    note: "Use when the task names a feature/module and the agent needs likely files, responsibilities, related rules, and known module constraints.",
  },
  resume: {
    title: "Resumable work or handoff",
    files: ["AGENTS.md", "CONTEXT.md", "SESSION.md", ".runbook/sessions/"],
    note: "Use for run:status, run:resume, run:recap, interrupted work, or handoff.",
  },
  "security-audit": {
    title: "Security audit or pentest",
    files: ["AGENTS.md", "CONTEXT.md", "PROJECT.md", "SESSION.md", "SECURITY.md", "POLICIES.md"],
    note: "Use for security review, pentest prep, vulnerability triage, abuse checks, secrets handling, or cleanup-sensitive audit work.",
  },
  planning: {
    title: "Planning or prioritization",
    files: ["AGENTS.md", "CONTEXT.md", "PROJECT.md", "ACTIVE-PLAN.md", "BACKLOG.md"],
    note: "Use for active task planning, backlog review, or prioritization.",
  },
};

const validContextRoutes = Object.keys(contextRoutes);

function main(argv) {
  const args = parseArgs(argv);

  if (args.help || args.command === "help") {
    printHelp();
    return;
  }

  if (args.version || args.command === "version") {
    printVersion(args);
    return;
  }

  if (args.command === "list") {
    printAgents();
    return;
  }

  if (args.command === "doctor") {
    runDoctor(args);
    return;
  }

  if (args.command === "finish") {
    runFinish(args);
    return;
  }

  if (args.command === "context" || args.command === "contexts") {
    if (args.subcommand === "inspect") {
      inspectContext(args);
      return;
    }

    printContextRoute(args.subcommand || "list", args.target, args);
    return;
  }

  if (args.command === "session" || args.command === "sessions") {
    if (!args.subcommand || args.subcommand === "list") {
      listSessions(args);
      return;
    }

    if (args.subcommand === "new") {
      createSession(args);
      return;
    }

    if (args.subcommand === "pending") {
      printPendingSessions(args);
      return;
    }

    if (args.subcommand === "resume") {
      printResumeSession(args);
      return;
    }

    if (args.subcommand === "latest") {
      printLatestSession(args);
      return;
    }

    if (args.subcommand === "validate") {
      validateSessionsCommand(args);
      return;
    }

    if (args.subcommand === "show") {
      showLatestSession(args);
      return;
    }

    if (args.subcommand === "close") {
      closeLatestSession(args);
      return;
    }

    if (["note", "step", "touch", "verify"].includes(args.subcommand)) {
      updateLatestSession(args);
      return;
    }

    if (args.subcommand === "clear" || args.subcommand === "clean") {
      clearSessions(args);
      return;
    }

    if (args.subcommand === "help") {
      printHelp();
      return;
    }

    fail(`Unknown session command: ${args.subcommand}`);
  }

  if (args.command === "init") {
    init(args);
    return;
  }

  if (args.command === "upgrade") {
    upgrade(args);
    return;
  }

  fail(`Unknown command: ${args.command}`);
}

function parseArgs(argv) {
  const args = {
    command: undefined,
    subcommand: undefined,
    target: ".",
    agent: "codex",
    profile: "full",
    status: "COMPLETED",
    force: false,
    dryRun: false,
    all: false,
    strict: false,
    strictLive: false,
    json: false,
    version: false,
    keep: defaultSessionKeepCount,
    olderThanDays: defaultSessionOlderThanDays,
    help: false,
  };

  const positional = [];

  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];

    if (value === "--help" || value === "-h") {
      args.help = true;
      continue;
    }

    if (value === "--version" || value === "-v") {
      args.version = true;
      continue;
    }

    if (value === "--json") {
      args.json = true;
      continue;
    }

    if (value === "--force" || value === "-f") {
      args.force = true;
      continue;
    }

    if (value === "--dry-run") {
      args.dryRun = true;
      continue;
    }

    if (value === "--all") {
      args.all = true;
      continue;
    }

    if (value === "--strict") {
      args.strict = true;
      continue;
    }

    if (value === "--strict-live") {
      args.strictLive = true;
      args.strict = true;
      continue;
    }

    if (value === "--keep") {
      index += 1;
      if (!argv[index]) {
        fail("Missing value for --keep.");
      }
      args.keep = parsePositiveInteger(argv[index], "--keep");
      continue;
    }

    if (value.startsWith("--keep=")) {
      args.keep = parsePositiveInteger(value.slice("--keep=".length), "--keep");
      continue;
    }

    if (value === "--older-than") {
      index += 1;
      if (!argv[index]) {
        fail("Missing value for --older-than.");
      }
      args.olderThanDays = parsePositiveInteger(argv[index], "--older-than");
      continue;
    }

    if (value.startsWith("--older-than=")) {
      args.olderThanDays = parsePositiveInteger(value.slice("--older-than=".length), "--older-than");
      continue;
    }

    if (value === "--agent" || value === "-a") {
      index += 1;
      if (!argv[index]) {
        fail("Missing value for --agent.");
      }
      args.agent = argv[index];
      continue;
    }

    if (value.startsWith("--agent=")) {
      args.agent = value.slice("--agent=".length);
      continue;
    }

    if (value === "--profile" || value === "-p") {
      index += 1;
      if (!argv[index]) {
        fail("Missing value for --profile.");
      }
      args.profile = argv[index];
      continue;
    }

    if (value.startsWith("--profile=")) {
      args.profile = value.slice("--profile=".length);
      continue;
    }

    if (value === "--status") {
      index += 1;
      if (!argv[index]) {
        fail("Missing value for --status.");
      }
      args.status = argv[index];
      continue;
    }

    if (value.startsWith("--status=")) {
      args.status = value.slice("--status=".length);
      continue;
    }

    if (value.startsWith("-")) {
      fail(`Unknown option: ${value}`);
    }

    positional.push(value);
  }

  if (positional.length === 0) {
    args.command = "init";
    return args;
  }

  const first = positional[0];

  if (first === "help" || first === "version" || first === "list" || first === "init" || first === "upgrade" || first === "doctor" || first === "finish") {
    args.command = first;
  } else if (first === "context" || first === "contexts") {
    args.command = first;
    args.subcommand = positional[1] || "list";
    args.target = positional[2] || ".";
  } else if (first === "session" || first === "sessions") {
    args.command = first;
    args.subcommand = positional[1] || "list";
    parseSessionPositionals(args, positional);
  } else {
    if (positional.length > 1) {
      fail(`Unknown command: ${first}`);
    }

    args.command = "init";
    args.target = first;
    return args;
  }

  if (args.command === "init" && positional[1]) {
    args.target = positional[1];
  }

  if (args.command === "upgrade" && positional[1]) {
    args.target = positional[1];
  }

  if (args.command === "doctor" && positional[1]) {
    args.target = positional[1];
  }

  if (args.command === "finish" && positional[1]) {
    args.target = positional[1];
  }

  return args;
}

function parseSessionPositionals(args, positional) {
  const messageCommands = new Set(["note", "step", "touch", "verify"]);
  const subcommand = positional[1] || "list";

  if (!messageCommands.has(subcommand)) {
    args.target = positional[2] || ".";
    return;
  }

  const rest = positional.slice(2);
  if (rest.length === 0) {
    args.target = ".";
    args.message = "";
    return;
  }

  const possibleTarget = path.resolve(process.cwd(), rest[0]);
  if (rest.length > 1 && fs.existsSync(possibleTarget) && fs.statSync(possibleTarget).isDirectory()) {
    args.target = rest[0];
    args.message = rest.slice(1).join(" ");
    return;
  }

  args.target = ".";
  args.message = rest.join(" ");
}

function parsePositiveInteger(value, optionName) {
  const parsed = Number.parseInt(String(value), 10);

  if (!Number.isFinite(parsed) || parsed < 0 || String(parsed) !== String(value).trim()) {
    fail(`${optionName} must be a non-negative integer.`);
  }

  return parsed;
}

function init(args) {
  installRunBook(args, args.dryRun ? "Dry run" : "Installed");
}

function upgrade(args) {
  installRunBook(args, args.dryRun ? "Dry run" : "Upgraded");
}

function installRunBook(args, mode) {
  const targetDir = path.resolve(process.cwd(), args.target);
  const agentSelection = normalizeAgentSelection(args.agent);
  const profile = normalizeProfile(args.profile);
  const operations = [];

  for (const [sourceFile, destinationFile] of profileFiles[profile]) {
    operations.push({
      source: path.join(packageRoot, sourceFile),
      destination: path.join(targetDir, destinationFile),
      label: destinationFile,
    });
  }

  if (profile === "full") {
    operations.push({
      content: "*.json\n!.gitkeep\n",
      destination: path.join(targetDir, ".runbook", "sessions", ".gitignore"),
      label: ".runbook/sessions/.gitignore",
    });
  }

  for (const agent of agentSelection) {
    for (const file of variantFiles[agent]) {
      operations.push({
        source: path.join(packageRoot, "variants", agent, file),
        destination: path.join(targetDir, file),
        label: file,
      });
    }

    if (agent === "opencode") {
      operations.push({
        type: "opencode-config",
        destination: path.join(targetDir, "opencode.json"),
        label: "opencode.json",
      });
    }
  }

  const result = copyOperations(operations, {
    force: args.force,
    dryRun: args.dryRun,
  });

  printSummary({
    title: "RunBook",
    mode,
    targetDir,
    detailLines: [
      `Agents: ${agentSelection.length > 0 ? agentSelection.join(", ") : "none"}`,
      `Profile: ${profile}`,
      `Overwrite existing files: ${args.force ? "yes" : "no"}`,
    ],
    result,
  });
}

function listSessions(args) {
  const targetDir = path.resolve(process.cwd(), args.target);
  const sessions = readSessionSummaries(targetDir);
  const sessionsDir = path.join(targetDir, sessionDirectory);

  console.log(`RunBook sessions in ${sessionsDir}`);

  if (sessions.length === 0) {
    console.log("No runtime sessions found.");
    return;
  }

  for (const item of sessions) {
    const status = item.status.padEnd(11);
    const project = item.projectName || "(unknown project)";
    const branch = item.gitBranch ? ` ${item.gitBranch}` : "";
    const marker = recoverableSessionStatuses.has(item.status) ? "recoverable" : "closed";
    console.log(`  ${item.fileName}  ${status}  ${project}${branch}  ${marker}`);
  }
}

function createSession(args) {
  const targetDir = path.resolve(process.cwd(), args.target);
  const sessionsDir = path.join(targetDir, sessionDirectory);
  fs.mkdirSync(sessionsDir, { recursive: true });

  const pending = readRecoverableSessions(targetDir);
  if (pending.length > 0 && !args.force) {
    printPendingGate(targetDir, pending);
    fail('Recoverable runtime session exists. Resume it with "I will fight", or run "runbook session new --force" only when starting fresh is intentional.');
  }

  const now = new Date();
  const sessionId = nextSessionId(sessionsDir, now);
  const sessionFile = path.join(sessionsDir, `${sessionId}.json`);
  const metadata = readProjectMetadata(targetDir);
  const timeLabel = formatTimeLabel(now);

  const session = {
    session: {
      id: sessionId,
      date: formatDate(now),
      startedAt: timeLabel,
      endedAt: null,
      status: "ACTIVE",
      agent: "unknown",
    },
    project: metadata,
    prompt: {
      original: "",
      understoodGoal: "",
      assumptions: [],
      outOfScope: [],
      blockers: [],
    },
    plan: [],
    log: [],
    lastPosition: {
      time: timeLabel,
      lastAction: "Session created.",
      lastStepStatus: "not_started",
      nextStep: "Record the task goal, assumptions, and execution plan before implementation.",
      lastFileTouched: "",
      systemCondition: "ready",
      criticalContext: [],
    },
    blockers: [],
    decisions: [],
    summary: {
      completed: [],
      incomplete: [],
      filesChanged: [],
      verification: [],
      artifacts: {
        created: [],
        disposable: [],
        kept: [],
        cleaned: [],
      },
      nextSessionMustKnow: [],
    },
  };

  fs.writeFileSync(sessionFile, `${JSON.stringify(session, null, 2)}\n`);
  console.log(`Created ${sessionFile}`);
}

function printPendingSessions(args) {
  const targetDir = path.resolve(process.cwd(), args.target);
  const pending = readRecoverableSessions(targetDir);

  if (pending.length === 0) {
    console.log(`No recoverable runtime sessions found in ${path.join(targetDir, sessionDirectory)}.`);
    return;
  }

  printPendingGate(targetDir, pending);
}

function printResumeSession(args) {
  const targetDir = path.resolve(process.cwd(), args.target);
  const pending = readRecoverableSessions(targetDir);

  if (pending.length === 0) {
    console.log(`No recoverable runtime sessions found in ${path.join(targetDir, sessionDirectory)}.`);
    return;
  }

  const item = pending[0];
  const parsed = parseJsonFile(item.filePath);
  printSessionSummary(item);
  printResumeDetails(parsed);
  console.log("\nResume confirmation:");
  console.log("  Only continue this session after the user types exactly: I will fight");
}

function printLatestSession(args) {
  const targetDir = path.resolve(process.cwd(), args.target);
  const sessions = readSessionSummaries(targetDir);

  if (sessions.length === 0) {
    console.log(`No runtime sessions found in ${path.join(targetDir, sessionDirectory)}.`);
    return;
  }

  printSessionSummary(sessions[0]);
}

function showLatestSession(args) {
  const targetDir = path.resolve(process.cwd(), args.target);
  const sessions = readSessionSummaries(targetDir);

  if (sessions.length === 0) {
    console.log(`No runtime sessions found in ${path.join(targetDir, sessionDirectory)}.`);
    return;
  }

  const parsed = parseJsonFile(sessions[0].filePath);
  printSessionSummary(sessions[0]);

  const lastPosition = parsed.lastPosition || {};
  const summary = parsed.summary || {};
  const blockers = Array.isArray(parsed.blockers) ? parsed.blockers : [];

  console.log("\nLast position:");
  console.log(`  Last action: ${lastPosition.lastAction || "(not recorded)"}`);
  console.log(`  Next step: ${lastPosition.nextStep || "(not recorded)"}`);
  console.log(`  System condition: ${lastPosition.systemCondition || "(not recorded)"}`);

  if (Array.isArray(summary.filesChanged) && summary.filesChanged.length > 0) {
    console.log("\nFiles changed:");
    for (const file of summary.filesChanged) {
      console.log(`  - ${file.path || "(unknown)"}${file.change ? ` - ${file.change}` : ""}`);
    }
  }

  if (blockers.length > 0) {
    console.log("\nBlockers:");
    for (const blocker of blockers) {
      console.log(`  - ${typeof blocker === "string" ? blocker : blocker.reason || JSON.stringify(blocker)}`);
    }
  }
}

function validateSessionsCommand(args) {
  const targetDir = path.resolve(process.cwd(), args.target);
  const result = validateRuntimeSessions(targetDir);

  if (args.json) {
    printJson(result);
  } else {
    console.log(`RunBook session validation for ${targetDir}`);
    for (const item of result.sessions) {
      const marker = item.ok ? "+" : "!";
      console.log(`  ${marker} ${item.file}`);
      for (const issue of item.issues) {
        console.log(`    Fix: ${issue}`);
      }
    }

    if (result.sessions.length === 0) {
      console.log("  + No runtime sessions found.");
    }

    if (result.ok) {
      console.log("\nSession validation passed.");
    } else {
      console.log(`\nSession validation failed with ${result.issues} issue(s).`);
    }
  }

  if (!result.ok) {
    process.exitCode = 1;
  }
}

function closeLatestSession(args) {
  const targetDir = path.resolve(process.cwd(), args.target);
  const sessions = readSessionSummaries(targetDir);
  const status = normalizeCloseStatus(args.status);
  const item = sessions.find((session) => recoverableSessionStatuses.has(session.status)) || sessions[0];

  if (!item) {
    console.log(`No runtime sessions found in ${path.join(targetDir, sessionDirectory)}.`);
    return;
  }

  const parsed = parseJsonFile(item.filePath);
  parsed.session = parsed.session || {};
  parsed.session.status = status;
  parsed.session.endedAt = formatTimeLabel(new Date());
  parsed.lastPosition = {
    ...(parsed.lastPosition || {}),
    time: formatTimeLabel(new Date()),
    lastStepStatus: status.toLowerCase(),
    systemCondition: status === "COMPLETED" ? "closed" : "not active",
  };

  fs.writeFileSync(item.filePath, `${JSON.stringify(parsed, null, 2)}\n`);
  console.log(`Closed ${item.filePath} as ${status}.`);

  if (cleanupSessionStatuses.has(status)) {
    pruneCleanupSessions(targetDir, {
      keep: defaultSessionKeepCount,
      olderThanDays: defaultSessionOlderThanDays,
      dryRun: false,
      silent: false,
    });
  }
}

function updateLatestSession(args) {
  const targetDir = path.resolve(process.cwd(), args.target);
  const text = String(args.message || "").trim();

  if (!text) {
    fail(`Missing text for session ${args.subcommand}.`);
  }

  const item = findEditableSession(targetDir);
  if (!item) {
    fail(`No recoverable runtime sessions found in ${path.join(targetDir, sessionDirectory)}. Run "runbook session new" first.`);
  }

  const parsed = parseJsonFile(item.filePath);
  const now = formatTimeLabel(new Date());

  parsed.session = parsed.session || {};
  if (!parsed.session.status || parsed.session.status === "UNKNOWN") {
    parsed.session.status = "ACTIVE";
  }

  parsed.log = Array.isArray(parsed.log) ? parsed.log : [];
  parsed.plan = Array.isArray(parsed.plan) ? parsed.plan : [];
  parsed.summary = parsed.summary || {};
  parsed.summary.filesChanged = Array.isArray(parsed.summary.filesChanged) ? parsed.summary.filesChanged : [];
  parsed.summary.verification = Array.isArray(parsed.summary.verification) ? parsed.summary.verification : [];

  if (args.subcommand === "note") {
    parsed.log.push({ time: now, type: "note", message: text });
    setLastPosition(parsed, now, `Note recorded: ${text}`, "in_progress", "Continue from the latest recorded note.");
  }

  if (args.subcommand === "step") {
    parsed.plan.push({ status: "pending", step: text });
    parsed.log.push({ time: now, type: "step", message: text });
    setLastPosition(parsed, now, `Step added: ${text}`, "planned", text);
  }

  if (args.subcommand === "touch") {
    const existing = parsed.summary.filesChanged.some((file) => file.path === text);
    if (!existing) {
      parsed.summary.filesChanged.push({ path: text, change: "touched during session" });
    }
    parsed.log.push({ time: now, type: "touch", message: text });
    setLastPosition(parsed, now, `File touched: ${text}`, "in_progress", "Review touched files before closing the session.", text);
  }

  if (args.subcommand === "verify") {
    parsed.summary.verification.push({ status: "recorded", command: text });
    parsed.log.push({ time: now, type: "verify", message: text });
    setLastPosition(parsed, now, `Verification recorded: ${text}`, "verified", "Close the session if no work remains.");
  }

  fs.writeFileSync(item.filePath, `${JSON.stringify(parsed, null, 2)}\n`);
  console.log(`Updated ${item.filePath}`);
}

function findEditableSession(targetDir) {
  return readRecoverableSessions(targetDir)[0] || null;
}

function setLastPosition(session, time, lastAction, lastStepStatus, nextStep, lastFileTouched = "") {
  session.lastPosition = {
    ...(session.lastPosition || {}),
    time,
    lastAction,
    lastStepStatus,
    nextStep,
    lastFileTouched,
  };
}

function clearSessions(args) {
  const targetDir = path.resolve(process.cwd(), args.target);
  const sessions = readSessionSummaries(targetDir);
  const sessionsDir = path.join(targetDir, sessionDirectory);

  if (sessions.length === 0) {
    console.log(`No runtime sessions found in ${sessionsDir}.`);
    return;
  }

  if (args.all && !args.force) {
    fail("Refusing to clear all sessions without --force.");
  }

  const candidates = args.all
    ? sessions
    : cleanupSessionCandidates(sessions, args.keep, args.olderThanDays);

  if (candidates.length === 0) {
    console.log(`No sessions eligible for cleanup in ${sessionsDir}.`);
    console.log(`Policy: keep newest ${args.keep} COMPLETED/CANCELLED sessions and never clear recoverable sessions unless --all --force is provided.`);
    return;
  }

  console.log(`${args.dryRun ? "Would remove" : "Removing"} ${candidates.length} session file(s) from ${sessionsDir}:`);
  for (const item of candidates) {
    console.log(`  ${args.dryRun ? "-" : "x"} ${item.fileName} (${item.status})`);

    if (!args.dryRun) {
      fs.unlinkSync(item.filePath);
    }
  }

  if (args.dryRun) {
    console.log("\nDry run only. Re-run without --dry-run to remove these files.");
  }
}

function pruneCleanupSessions(targetDir, options) {
  const sessions = readSessionSummaries(targetDir);
  const candidates = cleanupSessionCandidates(sessions, options.keep, options.olderThanDays);

  if (candidates.length === 0) {
    return;
  }

  const sessionsDir = path.join(targetDir, sessionDirectory);
  if (!options.silent) {
    console.log(`Session cleanup: keeping newest ${options.keep} COMPLETED/CANCELLED sessions.`);
  }

  for (const item of candidates) {
    if (!options.dryRun) {
      fs.unlinkSync(item.filePath);
    }

    if (!options.silent) {
      console.log(`  ${options.dryRun ? "-" : "x"} ${path.relative(sessionsDir, item.filePath)} (${item.status})`);
    }
  }
}

function cleanupSessionCandidates(sessions, keep, olderThanDays) {
  const cutoff = Date.now() - olderThanDays * 24 * 60 * 60 * 1000;
  const cleanupSessions = sessions.filter((item) => cleanupSessionStatuses.has(item.status));
  const keptByCount = new Set(cleanupSessions.slice(0, keep).map((item) => item.filePath));

  return cleanupSessions.filter((item) => {
    if (keptByCount.has(item.filePath)) {
      return false;
    }

    return item.sessionTime.getTime() < cutoff;
  });
}

function readRecoverableSessions(targetDir) {
  return readSessionSummaries(targetDir).filter((session) => recoverableSessionStatuses.has(session.status));
}

function printPendingGate(targetDir, pending) {
  const sessionsDir = path.join(targetDir, sessionDirectory);
  console.log(`Recoverable RunBook session found in ${sessionsDir}:`);

  for (const item of pending.slice(0, 5)) {
    const parsed = safeParseSession(item.filePath);
    const lastPosition = parsed?.lastPosition || {};
    console.log(`\n- ${item.fileName}`);
    console.log(`  Status: ${item.status}`);
    console.log(`  Project: ${item.projectName || "(unknown project)"}`);
    console.log(`  Branch: ${item.gitBranch || "(unknown branch)"}`);
    console.log(`  Last action: ${lastPosition.lastAction || "(not recorded)"}`);
    console.log(`  Next step: ${lastPosition.nextStep || "(not recorded)"}`);
  }

  if (pending.length > 5) {
    console.log(`\n${pending.length - 5} more recoverable session(s) not shown.`);
  }

  console.log("\nDo not start new work until the user chooses what to do.");
  console.log('To resume the newest recoverable session, the user must type exactly: I will fight');
  console.log('To start fresh, the user must explicitly say to start a new task; then use "runbook session new --force".');
}

function printResumeDetails(session) {
  const prompt = session.prompt || {};
  const lastPosition = session.lastPosition || {};
  const summary = session.summary || {};

  console.log("\nOriginal prompt:");
  console.log(`  ${prompt.original || "(not recorded)"}`);
  console.log("\nUnderstood goal:");
  console.log(`  ${prompt.understoodGoal || "(not recorded)"}`);
  console.log("\nLast position:");
  console.log(`  Last action: ${lastPosition.lastAction || "(not recorded)"}`);
  console.log(`  Step status: ${lastPosition.lastStepStatus || "(not recorded)"}`);
  console.log(`  Next step: ${lastPosition.nextStep || "(not recorded)"}`);
  console.log(`  System condition: ${lastPosition.systemCondition || "(not recorded)"}`);

  if (Array.isArray(summary.filesChanged) && summary.filesChanged.length > 0) {
    console.log("\nFiles changed:");
    for (const file of summary.filesChanged) {
      console.log(`  - ${file.path || "(unknown)"}${file.change ? ` - ${file.change}` : ""}`);
    }
  }

  if (Array.isArray(summary.verification) && summary.verification.length > 0) {
    console.log("\nVerification:");
    for (const item of summary.verification) {
      console.log(`  - ${item.command || item.result || JSON.stringify(item)}`);
    }
  }
}

function safeParseSession(filePath) {
  try {
    return parseJsonFile(filePath);
  } catch (error) {
    return null;
  }
}

function readSessionSummaries(targetDir) {
  const sessionsDir = path.join(targetDir, sessionDirectory);

  if (!fs.existsSync(sessionsDir)) {
    return [];
  }

  return fs
    .readdirSync(sessionsDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && sessionFilePattern.test(entry.name))
    .map((entry) => {
      const filePath = path.join(sessionsDir, entry.name);
      const stats = fs.statSync(filePath);
      const fallback = {
        fileName: entry.name,
        filePath,
        status: "UNKNOWN",
        projectName: "",
        gitBranch: "",
        sessionTime: parseSessionFileTime(entry.name) || stats.mtime,
      };

      try {
        const parsed = parseJsonFile(filePath);
        return {
          ...fallback,
          status: String(parsed.session?.status || "UNKNOWN").toUpperCase(),
          projectName: String(parsed.project?.name || ""),
          gitBranch: String(parsed.project?.gitBranch || ""),
        };
      } catch (error) {
        return fallback;
      }
    })
    .sort((left, right) => right.fileName.localeCompare(left.fileName));
}

function parseJsonFile(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8").replace(/^\uFEFF/, ""));
}

function parseSessionFileTime(fileName) {
  const match = fileName.match(/^SESSION-(\d{4})(\d{2})(\d{2})-(\d{2})(\d{2})\.json$/);
  if (!match) {
    return null;
  }

  const [, yearValue, monthValue, dayValue, hourValue, minuteValue] = match;
  const year = Number(yearValue);
  const month = Number(monthValue);
  const day = Number(dayValue);
  const hour = Number(hourValue);
  const minute = Number(minuteValue);
  const parsed = new Date(year, month - 1, day, hour, minute);

  if (
    parsed.getFullYear() !== year ||
    parsed.getMonth() !== month - 1 ||
    parsed.getDate() !== day ||
    parsed.getHours() !== hour ||
    parsed.getMinutes() !== minute
  ) {
    return null;
  }

  return parsed;
}

function normalizeAgentSelection(value) {
  const normalized = String(value || "codex")
    .split(",")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);

  if (normalized.includes("none")) {
    return [];
  }

  if (normalized.includes("all")) {
    return validAgents.filter((agent) => agent !== "codex");
  }

  for (const agent of normalized) {
    if (!validAgents.includes(agent)) {
      fail(`Unknown agent "${agent}". Run "runbook list" to see supported agents.`);
    }
  }

  return normalized;
}

function normalizeProfile(value) {
  const profile = String(value || "full").trim().toLowerCase();

  if (!validProfiles.includes(profile)) {
    fail(`Unknown profile "${value}". Use one of: ${validProfiles.join(", ")}.`);
  }

  return profile;
}

function normalizeCloseStatus(value) {
  const status = String(value || "COMPLETED").trim().toUpperCase();
  const allowed = new Set(["COMPLETED", "PAUSED", "CANCELLED", "BLOCKED"]);

  if (!allowed.has(status)) {
    fail('Session close status must be one of: COMPLETED, PAUSED, CANCELLED, BLOCKED.');
  }

  return status;
}

function nextSessionId(sessionsDir, date) {
  let candidate = new Date(date.getTime());

  for (let attempt = 0; attempt < 1440; attempt += 1) {
    const id = `SESSION-${formatCompactDate(candidate)}-${formatCompactTime(candidate)}`;
    if (!fs.existsSync(path.join(sessionsDir, `${id}.json`))) {
      return id;
    }
    candidate = new Date(candidate.getTime() + 60 * 1000);
  }

  fail("Could not create a unique session id.");
}

function readProjectMetadata(targetDir) {
  return {
    name: path.basename(targetDir),
    root: targetDir,
    gitRemote: readGitValue(targetDir, ["config", "--get", "remote.origin.url"]),
    gitBranch: readGitValue(targetDir, ["branch", "--show-current"]),
  };
}

function readGitValue(targetDir, args) {
  try {
    return childProcess
      .execFileSync("git", ["-C", targetDir, ...args], {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      })
      .trim();
  } catch (error) {
    return "";
  }
}

function formatDate(date) {
  return [
    date.getFullYear(),
    pad2(date.getMonth() + 1),
    pad2(date.getDate()),
  ].join("-");
}

function formatCompactDate(date) {
  return `${date.getFullYear()}${pad2(date.getMonth() + 1)}${pad2(date.getDate())}`;
}

function formatCompactTime(date) {
  return `${pad2(date.getHours())}${pad2(date.getMinutes())}`;
}

function formatTimeLabel(date) {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "local";
  return `${pad2(date.getHours())}:${pad2(date.getMinutes())} ${timezone}`;
}

function pad2(value) {
  return String(value).padStart(2, "0");
}

function printSessionSummary(item) {
  console.log(`Session: ${item.fileName}`);
  console.log(`Path: ${item.filePath}`);
  console.log(`Status: ${item.status}`);
  console.log(`Project: ${item.projectName || "(unknown project)"}`);
  console.log(`Branch: ${item.gitBranch || "(unknown branch)"}`);
  console.log(`Recoverable: ${recoverableSessionStatuses.has(item.status) ? "yes" : "no"}`);
}

function copyOperations(operations, options) {
  const result = {
    copied: [],
    skipped: [],
    missing: [],
  };

  for (const operation of operations) {
    if (operation.type === "opencode-config") {
      mergeOpencodeConfig(operation, options, result);
      continue;
    }

    if (typeof operation.content !== "string" && !fs.existsSync(operation.source)) {
      result.missing.push(operation.label);
      continue;
    }

    const exists = fs.existsSync(operation.destination);

    if (exists && !options.force) {
      result.skipped.push(operation.label);
      continue;
    }

    if (!options.dryRun) {
      fs.mkdirSync(path.dirname(operation.destination), { recursive: true });
      if (typeof operation.content === "string") {
        fs.writeFileSync(operation.destination, operation.content);
      } else {
        fs.copyFileSync(operation.source, operation.destination);
      }
    }

    result.copied.push(operation.label);
  }

  return result;
}

function mergeOpencodeConfig(operation, options, result) {
  const exists = fs.existsSync(operation.destination);

  if (!exists) {
    if (!options.dryRun) {
      fs.mkdirSync(path.dirname(operation.destination), { recursive: true });
      fs.writeFileSync(operation.destination, `${JSON.stringify(defaultOpencodeConfig(), null, 2)}\n`);
    }

    result.copied.push(operation.label);
    return;
  }

  let parsed;
  try {
    parsed = parseJsonFile(operation.destination);
  } catch (error) {
    if (!options.force) {
      result.skipped.push(`${operation.label} (invalid JSON; not modified)`);
      return;
    }

    if (!options.dryRun) {
      fs.writeFileSync(operation.destination, `${JSON.stringify(defaultOpencodeConfig(), null, 2)}\n`);
    }

    result.copied.push(`${operation.label} (replaced invalid JSON)`);
    return;
  }

  if (!parsed || Array.isArray(parsed) || typeof parsed !== "object") {
    result.skipped.push(`${operation.label} (not a JSON object; not modified)`);
    return;
  }

  const next = { ...parsed };
  let changed = false;

  if (!next.$schema) {
    next.$schema = "https://opencode.ai/config.json";
    changed = true;
  }

  if (!next.default_agent || options.force) {
    if (next.default_agent !== opencodeRunBookAgent) {
      next.default_agent = opencodeRunBookAgent;
      changed = true;
    }
  }

  if (next.instructions === undefined) {
    next.instructions = [...opencodeInstructionFiles];
    changed = true;
  } else if (Array.isArray(next.instructions)) {
    const merged = [...next.instructions];
    for (const file of opencodeInstructionFiles) {
      if (!merged.includes(file)) {
        merged.push(file);
      }
    }

    if (merged.length !== next.instructions.length) {
      next.instructions = merged;
      changed = true;
    }
  } else {
    result.skipped.push(`${operation.label} instructions (not an array; not modified)`);
  }

  if (!changed) {
    result.skipped.push(`${operation.label} (already configured)`);
    return;
  }

  if (!options.dryRun) {
    fs.writeFileSync(operation.destination, `${JSON.stringify(next, null, 2)}\n`);
  }

  result.copied.push(`${operation.label} (merged)`);
}

function defaultOpencodeConfig() {
  return {
    $schema: "https://opencode.ai/config.json",
    default_agent: opencodeRunBookAgent,
    instructions: [...opencodeInstructionFiles],
  };
}

function printSummary({ title, mode, targetDir, detailLines, result }) {
  console.log(`${mode} ${title} into ${targetDir}`);

  for (const line of detailLines) {
    console.log(line);
  }

  if (result.copied.length > 0) {
    console.log(`\nFiles ${mode === "Dry run" ? "to copy" : "copied"}:`);
    for (const file of result.copied) {
      console.log(`  + ${file}`);
    }
  }

  if (result.skipped.length > 0) {
    console.log("\nSkipped existing files:");
    for (const file of result.skipped) {
      console.log(`  - ${file}`);
    }
    console.log("\nUse --force to overwrite skipped files.");
  }

  if (result.missing.length > 0) {
    console.log("\nMissing package files:");
    for (const file of result.missing) {
      console.log(`  ! ${file}`);
    }
    process.exitCode = 1;
  }
}

function printAgents() {
  console.log("Supported agents:");
  for (const agent of validAgents) {
    const note = agent === "codex"
      ? "core AGENTS.md only"
      : agent === "opencode"
        ? "opencode.json + .opencode/agents/runbook.md"
        : `${variantFiles[agent].length} native file(s)`;
    console.log(`  ${agent.padEnd(8)} ${note}`);
  }
  console.log("\nSpecial selections:");
  console.log("  all      install all non-Codex native adapters");
  console.log("  none     install only the core kit");
}

function printVersion(args = {}) {
  if (args.json) {
    printJson({
      name: packageMeta.name,
      version: packageMeta.version,
    });
    return;
  }

  console.log(`${packageMeta.name} ${packageMeta.version}`);
}

function printContextRoute(routeName, target = ".", args = {}) {
  const normalized = String(routeName || "list").trim().toLowerCase();
  const route = contextRoutes[normalized];
  const customRoutes = readCustomContextRoutes(path.resolve(process.cwd(), target));

  if (!route && !customRoutes[normalized]) {
    fail(`Unknown context route "${routeName}". Run "runbook context list" to see available routes.`);
  }

  if (!route && customRoutes[normalized]) {
    if (args.json) {
      printJson({
        route: normalized,
        source: "custom",
        ...customRoutes[normalized],
      });
      return;
    }

    printSingleContextRoute(customRoutes[normalized]);
    return;
  }

  if (args.json) {
    if (normalized === "list") {
      printJson({
        routes: Object.fromEntries(
          Object.entries({
            ...contextRoutes,
            ...Object.fromEntries(Object.entries(customRoutes).map(([name, item]) => [name, { ...item, source: "custom" }])),
          }).filter(([name]) => name !== "list" && name !== "inspect"),
        ),
      });
      return;
    }

    printJson({
      route: normalized,
      source: "built-in",
      ...route,
    });
    return;
  }

  console.log(route.title);

  if (normalized === "list") {
    for (const name of validContextRoutes.filter((item) => item !== "list" && item !== "inspect")) {
      const item = contextRoutes[name];
      console.log(`  ${name.padEnd(8)} ${item.title}`);
    }
    for (const [name, item] of Object.entries(customRoutes)) {
      console.log(`  ${name.padEnd(8)} ${item.title} (custom)`);
    }
    console.log(`\n${route.note}`);
    return;
  }

  printSingleContextRoute(route);
}

function printSingleContextRoute(route) {
  console.log(route.title);
  console.log("\nRead:");
  for (const file of route.files) {
    console.log(`  - ${file}`);
  }

  console.log(`\n${route.note}`);
}

function readCustomContextRoutes(targetDir) {
  const filePath = path.join(targetDir, "CONTEXT.md");
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    return {};
  }

  const content = fs.readFileSync(filePath, "utf8");
  const lines = content.split(/\r?\n/);
  const startIndex = lines.findIndex((line) => /^## Custom Routes\s*$/.test(line.trim()));
  if (startIndex === -1) {
    return {};
  }

  const sectionLines = [];
  for (let index = startIndex + 1; index < lines.length; index += 1) {
    if (/^##\s+/.test(lines[index])) {
      break;
    }
    sectionLines.push(lines[index]);
  }

  const routes = {};
  const rows = sectionLines
    .map((line) => line.trim())
    .filter((line) => line.startsWith("|") && line.endsWith("|"));

  for (const row of rows) {
    const cells = row
      .slice(1, -1)
      .split("|")
      .map((cell) => cell.trim());

    if (cells.length < 2 || /^-+$/.test(cells[0]) || /^route$/i.test(cells[0]) || /\[[^\]]+\]/.test(cells[0])) {
      continue;
    }

    const name = cells[0].toLowerCase().replace(/\s+/g, "-");
    const files = cells[1]
      .split(",")
      .map((file) => file.trim().replace(/^`|`$/g, ""))
      .filter(Boolean);

    if (!name || files.length === 0 || contextRoutes[name]) {
      continue;
    }

    routes[name] = {
      title: cells[0],
      files,
      note: cells[2] || "Custom route from project CONTEXT.md.",
    };
  }

  return routes;
}

function inspectContext(args) {
  const targetDir = path.resolve(process.cwd(), args.target);
  const checks = [
    { label: "AGENTS.md", path: "AGENTS.md", required: true },
    { label: "CONTEXT.md", path: "CONTEXT.md", required: true },
    { label: "PROJECT.md", path: "PROJECT.md", required: true, templateCheck: true },
    { label: "DECISIONS.md", path: "DECISIONS.md", required: false },
    { label: "BUG-HISTORY.md", path: "BUG-HISTORY.md", required: false },
    { label: "MODULE-MAP.md", path: "MODULE-MAP.md", required: false },
    { label: "ACTIVE-PLAN.md", path: "ACTIVE-PLAN.md", required: false },
    { label: "BACKLOG.md", path: "BACKLOG.md", required: false },
    { label: "CHANGELOG.md", path: "CHANGELOG.md", required: false },
    { label: "SESSION.md", path: "SESSION.md", required: false },
    { label: ".runbook/sessions/", path: sessionDirectory, required: false, directory: true },
    { label: "FRONTEND.md", path: "FRONTEND.md", required: false, templateCheck: true },
    { label: "SECURITY.md", path: "SECURITY.md", required: false },
    { label: "AGENT-VARIANTS.md", path: "AGENT-VARIANTS.md", required: false },
  ];

  const missingRequired = [];
  const missingOptional = [];
  const templateLike = [];

  console.log(`RunBook context inspection for ${targetDir}`);

  for (const check of checks) {
    const filePath = path.join(targetDir, check.path);
    const exists = fs.existsSync(filePath);
    const typeOk = exists && (check.directory ? fs.statSync(filePath).isDirectory() : fs.statSync(filePath).isFile());

    if (!typeOk) {
      const marker = check.required ? "missing" : "optional missing";
      console.log(`  ! ${check.label} (${marker})`);

      if (check.required) {
        missingRequired.push(check.label);
      } else {
        missingOptional.push(check.label);
      }
      continue;
    }

    if (check.templateCheck && looksLikeTemplate(filePath)) {
      console.log(`  ? ${check.label} (present, still looks like template)`);
      templateLike.push(check.label);
      continue;
    }

    console.log(`  + ${check.label}`);
  }

  if (missingRequired.length > 0) {
    console.log("\nMissing required context files:");
    for (const file of missingRequired) {
      console.log(`  - ${file}`);
    }
    console.log("\nRun `runbook init` in this project, or re-run with --force if you intend to restore core files.");
    process.exitCode = 1;
    return;
  }

  if (templateLike.length > 0) {
    console.log("\nFiles that still need project-specific content:");
    for (const file of templateLike) {
      console.log(`  - ${file}`);
    }
  }

  if (missingOptional.length > 0) {
    console.log("\nOptional context files not found:");
    for (const file of missingOptional) {
      console.log(`  - ${file}`);
    }
  }

  if (templateLike.length === 0 && missingOptional.length === 0) {
    console.log("\nContext files look ready.");
  }
}

function runDoctor(args) {
  const targetDir = path.resolve(process.cwd(), args.target);
  const results = [];

  addDoctorCheck(results, {
    label: "package.json is valid",
    ok: canParseJson(path.join(packageRoot, "package.json")),
  });

  addDoctorCheck(results, {
    label: "SESSION-EXAMPLE.json is valid",
    ok: canParseJson(path.join(packageRoot, "SESSION-EXAMPLE.json")),
  });

  addDoctorCheck(results, {
    label: "core context files are present",
    ok: ["AGENTS.md", "CONTEXT.md", "PROJECT.md"].every((file) => fs.existsSync(path.join(targetDir, file))),
    hint: "Run `runbook init --profile minimal` to install the minimum context files.",
  });

  addDoctorCheck(results, {
    label: "CONTEXT.md references AGENTS.md",
    ok: fileIncludes(path.join(targetDir, "CONTEXT.md"), "AGENTS.md"),
    hint: "Refresh CONTEXT.md from the latest RunBook template.",
  });

  addDoctorCheck(results, {
    label: "PROJECT.md has project-specific content",
    ok: fs.existsSync(path.join(targetDir, "PROJECT.md")) && !looksLikeTemplate(path.join(targetDir, "PROJECT.md")),
    warning: true,
    hint: "Fill PROJECT.md with real commands, architecture notes, paths, environment notes, tests, and gotchas.",
  });

  addDoctorCheck(results, {
    label: "FRONTEND.md has project-specific content",
    ok: !fs.existsSync(path.join(targetDir, "FRONTEND.md")) || !looksLikeTemplate(path.join(targetDir, "FRONTEND.md")),
    warning: true,
    hint: "For frontend work, fill FRONTEND.md with real tone, palette, typography, layout, component, responsive, accessibility, and preview/test decisions.",
  });

  addDoctorCheck(results, {
    label: ".runbook/sessions/.gitignore protects runtime sessions",
    ok: sessionGitignoreIsSafe(targetDir),
    warning: true,
    hint: "Run `runbook init --profile full` or add `.runbook/sessions/*.json` to .runbook/sessions/.gitignore.",
  });

  const trackedSessions = trackedRuntimeSessions(targetDir);
  addDoctorCheck(results, {
    label: "runtime session JSON files are not tracked",
    ok: trackedSessions.length === 0,
    hint: trackedSessions.length > 0
      ? `Untrack runtime session files: ${trackedSessions.join(", ")}`
      : "Runtime sessions should stay local.",
  });

  const staleAdapters = installedAdaptersWithoutContext(targetDir);
  addDoctorCheck(results, {
    label: "installed adapters route through CONTEXT.md",
    ok: staleAdapters.length === 0,
    hint: staleAdapters.length > 0
      ? `Refresh adapter files: ${staleAdapters.join(", ")}`
      : "Adapters are aligned with context routing.",
  });

  addDoctorCheck(results, {
    label: "opencode config includes RunBook instructions",
    ok: opencodeConfigRoutesRunBook(targetDir),
    warning: true,
    hint: "Run `runbook init --agent opencode` to merge AGENTS.md and CONTEXT.md into opencode.json instructions.",
  });

  const missingCustomRouteFiles = customContextRouteMissingFiles(targetDir);
  addDoctorCheck(results, {
    label: "custom context route files exist",
    ok: missingCustomRouteFiles.length === 0,
    warning: true,
    hint: missingCustomRouteFiles.length > 0
      ? `Create or correct these custom route files: ${missingCustomRouteFiles.join(", ")}`
      : "Custom context routes point to existing files.",
  });

  if (args.strictLive) {
    const sessionValidation = validateRuntimeSessions(targetDir);
    const pending = readRecoverableSessions(targetDir);
    addDoctorCheck(results, {
      label: "runtime session schema is valid",
      ok: sessionValidation.ok,
      hint: sessionValidation.ok
        ? "Runtime session JSON follows the expected schema."
        : "Run `runbook session validate` and fix invalid session files.",
    });
    addDoctorCheck(results, {
      label: "no recoverable runtime sessions remain",
      ok: pending.length === 0,
      hint: pending.length === 0
        ? "No pending sessions remain."
        : "Close completed work with `runbook session close --status completed`, or resume pending work.",
    });
  }

  const failures = results.filter((result) => !result.ok && !result.warning);
  const warnings = results.filter((result) => !result.ok && result.warning);
  const strictFailure = args.strict && failures.length === 0 && warnings.length > 0;

  if (args.json) {
    printJson({
      target: targetDir,
      strict: args.strict,
      ok: failures.length === 0 && !strictFailure,
      failures: failures.length,
      warnings: warnings.length,
      checks: results,
    });

    if (failures.length > 0 || strictFailure) {
      process.exitCode = 1;
    }
    return;
  }

  console.log(`RunBook doctor for ${targetDir}`);

  for (const result of results) {
    const marker = result.ok ? "+" : result.warning ? "?" : "!";
    console.log(`  ${marker} ${result.label}`);
    if (!result.ok && result.hint) {
      console.log(`    Fix: ${result.hint}`);
    }
  }

  if (failures.length > 0) {
    console.log(`\nDoctor found ${failures.length} issue(s) and ${warnings.length} warning(s).`);
    console.log("Run the listed Fix commands, then re-run `runbook doctor`.");
    process.exitCode = 1;
    return;
  }

  if (warnings.length > 0) {
    if (args.strict) {
      console.log(`\nDoctor strict mode failed on ${warnings.length} warning(s).`);
      console.log("Resolve the listed Fix hints, then re-run `runbook doctor --strict`.");
      process.exitCode = 1;
      return;
    }

    console.log(`\nDoctor passed with ${warnings.length} warning(s).`);
    console.log("Review the listed Fix hints when you want a cleaner RunBook setup.");
    return;
  }

  console.log("\nDoctor passed.");
}

function runFinish(args) {
  const targetDir = path.resolve(process.cwd(), args.target);
  const checks = [];

  const doctorArgs = {
    ...args,
    target: targetDir,
    strict: true,
    strictLive: true,
    json: true,
  };
  const doctor = collectDoctorResult(doctorArgs);
  checks.push({
    label: "doctor --strict-live",
    ok: doctor.ok,
    hint: doctor.ok ? "RunBook doctor strict-live passed." : "Run `runbook doctor --strict-live` for details.",
  });

  const sessions = validateRuntimeSessions(targetDir);
  checks.push({
    label: "session validate",
    ok: sessions.ok,
    hint: sessions.ok ? "Runtime sessions are valid." : "Run `runbook session validate` for details.",
  });

  const pending = readRecoverableSessions(targetDir);
  checks.push({
    label: "session pending",
    ok: pending.length === 0,
    hint: pending.length === 0 ? "No recoverable sessions remain." : "Finish or intentionally pause recoverable sessions.",
  });

  const placeholders = placeholderFiles(targetDir);
  checks.push({
    label: "placeholder audit",
    ok: placeholders.length === 0,
    hint: placeholders.length === 0 ? "No project memory placeholders found." : `Fill placeholders in: ${placeholders.join(", ")}`,
  });

  const ok = checks.every((check) => check.ok);

  if (args.json) {
    printJson({ target: targetDir, ok, checks });
  } else {
    console.log(`RunBook finish gate for ${targetDir}`);
    for (const check of checks) {
      console.log(`  ${check.ok ? "+" : "!"} ${check.label}`);
      if (!check.ok) {
        console.log(`    Fix: ${check.hint}`);
      }
    }
    console.log(ok ? "\nFinish gate passed." : "\nFinish gate failed.");
  }

  if (!ok) {
    process.exitCode = 1;
  }
}

function collectDoctorResult(args) {
  const originalLog = console.log;
  let output = "";
  console.log = (value = "") => {
    output += `${value}\n`;
  };

  const previousExitCode = process.exitCode;
  process.exitCode = 0;
  try {
    runDoctor(args);
    return JSON.parse(output);
  } finally {
    console.log = originalLog;
    process.exitCode = previousExitCode;
  }
}

function addDoctorCheck(results, check) {
  results.push({
    label: check.label,
    ok: Boolean(check.ok),
    warning: Boolean(check.warning),
    hint: check.hint || "",
  });
}

function validateRuntimeSessions(targetDir) {
  const sessionsDir = path.join(targetDir, sessionDirectory);
  const result = {
    target: targetDir,
    ok: true,
    issues: 0,
    sessions: [],
  };

  if (!fs.existsSync(sessionsDir)) {
    return result;
  }

  const files = fs
    .readdirSync(sessionsDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && sessionFilePattern.test(entry.name))
    .map((entry) => entry.name)
    .sort();

  for (const file of files) {
    const filePath = path.join(sessionsDir, file);
    const issues = validateRuntimeSessionFile(filePath);
    result.sessions.push({ file, ok: issues.length === 0, issues });
    result.issues += issues.length;
  }

  result.ok = result.issues === 0;
  return result;
}

function validateRuntimeSessionFile(filePath) {
  const issues = [];
  let parsed;

  try {
    parsed = parseJsonFile(filePath);
  } catch (error) {
    return [`Invalid JSON: ${error.message}`];
  }

  if (!parsed || Array.isArray(parsed) || typeof parsed !== "object") {
    return ["Session file must be a JSON object."];
  }

  if (!parsed.session || typeof parsed.session !== "object") {
    issues.push("Missing session object.");
  } else {
    requireString(parsed.session.id, "session.id", issues);
    requireString(parsed.session.date, "session.date", issues);
    requireString(parsed.session.startedAt, "session.startedAt", issues);
    requireString(parsed.session.status, "session.status", issues);
  }

  if (!parsed.project || typeof parsed.project !== "object") {
    issues.push("Missing project object.");
  } else {
    requireString(parsed.project.name, "project.name", issues);
    requireString(parsed.project.root, "project.root", issues);
  }

  if (!parsed.prompt || typeof parsed.prompt !== "object") {
    issues.push("Missing prompt object.");
  } else {
    for (const field of ["original", "understoodGoal"]) {
      if (typeof parsed.prompt[field] !== "string") {
        issues.push(`prompt.${field} must be a string.`);
      }
    }
    for (const field of ["assumptions", "outOfScope", "blockers"]) {
      if (!Array.isArray(parsed.prompt[field])) {
        issues.push(`prompt.${field} must be an array.`);
      }
    }
  }

  for (const field of ["plan", "log", "blockers", "decisions"]) {
    if (!Array.isArray(parsed[field])) {
      issues.push(`${field} must be an array.`);
    }
  }

  if (!parsed.lastPosition || typeof parsed.lastPosition !== "object") {
    issues.push("Missing lastPosition object.");
  } else {
    for (const field of ["lastAction", "lastStepStatus", "nextStep", "systemCondition"]) {
      if (typeof parsed.lastPosition[field] !== "string") {
        issues.push(`lastPosition.${field} must be a string.`);
      }
    }
  }

  if (!parsed.summary || typeof parsed.summary !== "object") {
    issues.push("Missing summary object.");
  } else {
    for (const field of ["completed", "incomplete", "filesChanged", "verification", "nextSessionMustKnow"]) {
      if (!Array.isArray(parsed.summary[field])) {
        issues.push(`summary.${field} must be an array.`);
      }
    }

    const artifacts = parsed.summary.artifacts;
    if (artifacts !== undefined) {
      if (!artifacts || Array.isArray(artifacts) || typeof artifacts !== "object") {
        issues.push("summary.artifacts must be an object.");
      } else {
        for (const field of ["created", "disposable", "kept", "cleaned"]) {
          if (!Array.isArray(artifacts[field])) {
            issues.push(`summary.artifacts.${field} must be an array.`);
          }
        }
      }
    }
  }

  if (parsed.name !== undefined || (parsed.status !== undefined && !parsed.session)) {
    issues.push("Session appears to use short ad-hoc schema; use the full SESSION.md schema.");
  }

  return issues;
}

function requireString(value, label, issues) {
  if (typeof value !== "string" || value.trim() === "") {
    issues.push(`${label} must be a non-empty string.`);
  }
}

function placeholderFiles(targetDir) {
  return ["PROJECT.md", "FRONTEND.md"]
    .filter((file) => {
      const filePath = path.join(targetDir, file);
      return fs.existsSync(filePath) && fs.statSync(filePath).isFile() && looksLikeTemplate(filePath);
    });
}

function printJson(value) {
  console.log(JSON.stringify(value, null, 2));
}

function canParseJson(filePath) {
  try {
    parseJsonFile(filePath);
    return true;
  } catch (error) {
    return false;
  }
}

function fileIncludes(filePath, value) {
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    return false;
  }

  return fs.readFileSync(filePath, "utf8").includes(value);
}

function sessionGitignoreIsSafe(targetDir) {
  const filePath = path.join(targetDir, ".runbook", "sessions", ".gitignore");

  if (!fs.existsSync(filePath)) {
    return false;
  }

  const content = fs.readFileSync(filePath, "utf8");
  return content.includes("*.json");
}

function trackedRuntimeSessions(targetDir) {
  try {
    const output = childProcess.execFileSync("git", ["-C", targetDir, "ls-files", ".runbook/sessions/*.json"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });

    return output
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);
  } catch (error) {
    return [];
  }
}

function installedAdaptersWithoutContext(targetDir) {
  const adapterPaths = [
    "CLAUDE.md",
    ".cursor/rules/10-core.mdc",
    ".github/copilot-instructions.md",
    ".github/instructions/frontend.instructions.md",
    ".github/instructions/backend-security.instructions.md",
    "GEMINI.md",
    ".windsurf/rules/10-core.md",
    ".clinerules/core.md",
    "CONVENTIONS.md",
    ".opencode/agents/runbook.md",
  ];

  return adapterPaths.filter((file) => {
    const filePath = path.join(targetDir, file);
    return fs.existsSync(filePath) && fs.statSync(filePath).isFile() && !fileIncludes(filePath, "CONTEXT.md");
  });
}

function opencodeConfigRoutesRunBook(targetDir) {
  const configPath = path.join(targetDir, "opencode.json");
  const agentPath = path.join(targetDir, ".opencode", "agents", "runbook.md");

  if (!fs.existsSync(configPath) && !fs.existsSync(agentPath)) {
    return true;
  }

  if (!fs.existsSync(configPath)) {
    return false;
  }

  let parsed;
  try {
    parsed = parseJsonFile(configPath);
  } catch (error) {
    return false;
  }

  if (!parsed || Array.isArray(parsed) || typeof parsed !== "object") {
    return false;
  }

  if (!Array.isArray(parsed.instructions)) {
    return false;
  }

  return opencodeInstructionFiles.every((file) => parsed.instructions.includes(file));
}

function customContextRouteMissingFiles(targetDir) {
  const routes = readCustomContextRoutes(targetDir);
  const missing = new Set();

  for (const route of Object.values(routes)) {
    for (const file of route.files) {
      if (/^https?:\/\//i.test(file)) {
        continue;
      }

      const normalized = file.replace(/^\.?\//, "");
      const filePath = path.join(targetDir, normalized);
      if (!fs.existsSync(filePath)) {
        missing.add(normalized);
      }
    }
  }

  return Array.from(missing).sort();
}

function looksLikeTemplate(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  return /\[[^\]\n]+\]/.test(content);
}

function printHelp() {
  console.log(`RunBook

Usage:
  runbook init [target] [--profile <minimal|frontend|backend|full>] [--agent <name|all|none>] [--force] [--dry-run]
  runbook upgrade [target] [--profile <minimal|frontend|backend|full>] [--agent <name|all|none>] [--force] [--dry-run]
  runbook version [--json]
  runbook --version
  runbook list
  runbook doctor [target] [--strict] [--strict-live] [--json]
  runbook finish [target] [--json]
  runbook context list [target] [--json]
  runbook context <general|frontend|backend|architecture|bugfix|module-work|security-audit|resume|planning|custom-route> [target] [--json]
  runbook context inspect [target]
  runbook session new [target]
  runbook session pending [target]
  runbook session resume [target]
  runbook session list [target]
  runbook session validate [target] [--json]
  runbook session latest [target]
  runbook session show [target]
  runbook session note [target] <text>
  runbook session step [target] <text>
  runbook session touch [target] <path>
  runbook session verify [target] <command-or-result>
  runbook session close [target] [--status <completed|paused|cancelled|blocked>]
  runbook session clear [target] [--keep <count>] [--older-than <days>] [--dry-run]
  runbook session clear [target] --all --force
  runbook help

Examples:
  npx @matsumiko/runbook init
  npx @matsumiko/runbook init --profile minimal
  npx @matsumiko/runbook init ./my-app --profile frontend
  npx @matsumiko/runbook upgrade --dry-run
  npx @matsumiko/runbook --version
  npx @matsumiko/runbook doctor
  npx @matsumiko/runbook doctor --strict
  npx @matsumiko/runbook doctor --strict-live
  npx @matsumiko/runbook doctor --json
  npx @matsumiko/runbook finish
  npx @matsumiko/runbook init --agent claude
  npx @matsumiko/runbook init --agent opencode
  npx @matsumiko/runbook init ./my-app --agent cursor,copilot
  npx @matsumiko/runbook context frontend
  npx @matsumiko/runbook context frontend --json
  npx @matsumiko/runbook context backend
  npx @matsumiko/runbook context architecture
  npx @matsumiko/runbook context bugfix
  npx @matsumiko/runbook context module-work
  npx @matsumiko/runbook context security-audit
  npx @matsumiko/runbook context inspect
  npx @matsumiko/runbook session new
  npx @matsumiko/runbook session pending
  npx @matsumiko/runbook session resume
  npx @matsumiko/runbook session list
  npx @matsumiko/runbook session validate
  npx @matsumiko/runbook session latest
  npx @matsumiko/runbook session show
  npx @matsumiko/runbook session note "Found failing auth test"
  npx @matsumiko/runbook session step "Fix token refresh handling"
  npx @matsumiko/runbook session touch src/auth.ts
  npx @matsumiko/runbook session verify "npm test passed"
  npx @matsumiko/runbook session close --status completed
  npx @matsumiko/runbook session clear --dry-run
  npx @matsumiko/runbook session clear --keep 5 --older-than 0
  npx @matsumiko/runbook session clear --all --force

Default behavior:
  - copies the canonical RunBook markdown files
  - includes CONTEXT.md for task-based context routing
  - includes session recovery protocol, example checkpoint, and .runbook/sessions/
  - uses Codex-compatible AGENTS.md by default
  - skips existing files unless --force is provided
`);
}

function fail(message) {
  console.error(`runbook: ${message}`);
  process.exit(1);
}

main(process.argv.slice(2));
