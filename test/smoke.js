#!/usr/bin/env node

"use strict";

const childProcess = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");

const root = path.resolve(__dirname, "..");
const bin = path.join(root, "bin", "runbook.js");

function main() {
  parseJson("SESSION-EXAMPLE.json");

  run(["--help"], { includes: ["runbook version [--json]", "runbook doctor [target] [--strict] [--json]", "runbook session note [target] <text>"] });
  run(["--version"], { includes: "@matsumiko/runbook 0.32.0" });
  assertJson(run(["version", "--json"], { quiet: true }), {
    name: "@matsumiko/runbook",
    version: "0.32.0",
  });
  run(["list"], { includes: "Supported agents:" });
  run(["doctor"], { includes: "RunBook doctor for" });
  assertJson(run(["doctor", "--json"], { quiet: true }), {
    strict: false,
    warnings: 1,
  });

  run(["context", "list"], { includes: "Available context routes" });
  run(["context", "general"], { includes: "CODER.md" });
  assertJson(run(["context", "frontend", "--json"], { quiet: true }), {
    route: "frontend",
    source: "built-in",
    title: "Frontend work",
  });
  assertJson(run(["context", "list", "--json"], { quiet: true }), {
    routeKey: "frontend",
    missingRouteKey: "list",
  });
  run(["context", "frontend"], { includes: "FRONTEND-DNA.md" });
  run(["context", "backend"], { includes: "BACKEND-SECURITY-CHECKLIST.md" });
  run(["context", "resume"], { includes: ".runbook/sessions/" });
  run(["context", "planning"], { includes: "PLAN.md" });
  run(["context", "inspect"], { includes: "RunBook context inspection" });
  run(["context", "list"], { excludes: "database-migration" });

  run(["init", "./tmp-runbook-smoke", "--agent", "all", "--dry-run"], {
    includes: ["Profile: full", "CONTEXT.md", "CLAUDE.md"],
  });
  run(["init", "./tmp-runbook-minimal", "--profile", "minimal", "--dry-run"], {
    includes: ["Profile: minimal", "CODER.md"],
    excludes: ["FRONTEND-DNA.md"],
  });
  run(["init", "./tmp-runbook-frontend", "--profile", "frontend", "--dry-run"], {
    includes: ["Profile: frontend", "FRONTEND-DNA.md"],
  });
  run(["init", "./tmp-runbook-backend", "--profile", "backend", "--dry-run"], {
    includes: ["Profile: backend", "BACKEND-SECURITY-CHECKLIST.md"],
  });
  run(["upgrade", "./tmp-runbook-upgrade", "--dry-run"], {
    includes: ["Dry run RunBook", "Profile: full", "CONTEXT.md"],
  });
  run(["upgrade", "./tmp-runbook-upgrade", "--profile", "minimal", "--dry-run"], {
    includes: ["Profile: minimal", "CODER.md"],
    excludes: ["SESSION.md"],
  });

  const initDir = fs.mkdtempSync(path.join(os.tmpdir(), "runbook-init-"));
  try {
    run(["init", initDir, "--profile", "full"], {
      includes: ["Installed RunBook", "CONTEXT.md", ".runbook/sessions/.gitignore"],
    });
    assertFile(initDir, "AGENTS.md");
    assertFile(initDir, "CONTEXT.md");
    assertFile(initDir, "CODER.md");
    assertFile(initDir, ".runbook/sessions/.gitkeep");
    assertFileIncludes(initDir, ".runbook/sessions/.gitignore", "*.json");
  } finally {
    fs.rmSync(initDir, { recursive: true, force: true });
  }

  const adapterDir = fs.mkdtempSync(path.join(os.tmpdir(), "runbook-adapters-"));
  try {
    run(["init", adapterDir, "--profile", "minimal", "--agent", "claude,cursor"], {
      includes: ["CLAUDE.md", ".cursor/rules/10-core.mdc"],
    });
    assertFile(adapterDir, "CLAUDE.md");
    assertFile(adapterDir, ".cursor/rules/10-core.mdc");
    assertFileIncludes(adapterDir, "CLAUDE.md", "CONTEXT.md");
    assertFileIncludes(adapterDir, ".cursor/rules/10-core.mdc", "CONTEXT.md");
  } finally {
    fs.rmSync(adapterDir, { recursive: true, force: true });
  }

  const upgradeDir = fs.mkdtempSync(path.join(os.tmpdir(), "runbook-upgrade-"));
  try {
    fs.writeFileSync(path.join(upgradeDir, "AGENTS.md"), "custom agents\n");
    run(["upgrade", upgradeDir, "--profile", "minimal"], {
      includes: ["Skipped existing files", "CONTEXT.md", "CODER.md"],
    });
    assertFileIncludes(upgradeDir, "AGENTS.md", "custom agents");
    assertFile(upgradeDir, "CONTEXT.md");
    assertFile(upgradeDir, "CODER.md");
    run(["upgrade", upgradeDir, "--profile", "minimal", "--force"], {
      includes: ["Upgraded RunBook", "AGENTS.md"],
    });
    assertFileIncludes(upgradeDir, "AGENTS.md", "CONTEXT.md");
  } finally {
    fs.rmSync(upgradeDir, { recursive: true, force: true });
  }

  const customRouteDir = fs.mkdtempSync(path.join(os.tmpdir(), "runbook-context-"));
  try {
    fs.writeFileSync(
      path.join(customRouteDir, "CONTEXT.md"),
      [
        "# CONTEXT.md",
        "",
        "## Custom Routes",
        "",
        "| Route | Read these files | Why |",
        "| --- | --- | --- |",
        "| payment review | `CODER.md`, `docs/payments.md` | Use for payment risk checks. |",
        "",
        "## Reading Rules",
      ].join("\n"),
    );
    run(["context", "list", customRouteDir], { includes: "payment-review" });
    run(["context", "payment-review", customRouteDir], {
      includes: ["payment review", "docs/payments.md", "payment risk checks"],
    });
    assertJson(run(["context", "payment-review", customRouteDir, "--json"], { quiet: true }), {
      route: "payment-review",
      source: "custom",
      title: "payment review",
    });
  } finally {
    fs.rmSync(customRouteDir, { recursive: true, force: true });
  }

  const customRouteDoctorDir = fs.mkdtempSync(path.join(os.tmpdir(), "runbook-context-doctor-"));
  try {
    run(["init", customRouteDoctorDir, "--profile", "minimal"], { quiet: true });
    const contextPath = path.join(customRouteDoctorDir, "CONTEXT.md");
    fs.writeFileSync(
      contextPath,
      fs
        .readFileSync(contextPath, "utf8")
        .replace(
          "| [route name] | `CODER.md`, `docs/example.md` | [When agents should use this route.] |",
          "| payment review | `CODER.md`, `docs/payments.md` | Use for payment risk checks. |",
        ),
    );
    run(["doctor", customRouteDoctorDir], {
      includes: ["custom context route files exist", "Fix:", "docs/payments.md"],
    });
    runFails(["doctor", customRouteDoctorDir, "--strict"], {
      includes: ["Doctor strict mode failed", "docs/payments.md"],
    });
    const strictJson = runFails(["doctor", customRouteDoctorDir, "--strict", "--json"], {
      includes: '"ok": false',
    });
    assertJson(strictJson, {
      strict: true,
      ok: false,
      warnings: 3,
    });
  } finally {
    fs.rmSync(customRouteDoctorDir, { recursive: true, force: true });
  }

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "runbook-smoke-"));
  try {
    run(["session", "new", tempDir], { includes: "Created" });
    run(["session", "note", tempDir, "Found failing auth test"], { includes: "Updated" });
    run(["session", "step", tempDir, "Fix token refresh handling"], { includes: "Updated" });
    run(["session", "touch", tempDir, "src/auth.ts"], { includes: "Updated" });
    run(["session", "verify", tempDir, "npm test passed"], { includes: "Updated" });
    run(["session", "latest", tempDir], { includes: ["Status: ACTIVE", "Recoverable: yes"] });
    run(["session", "show", tempDir], { includes: "Last position:" });
    assertLatestSessionIncludes(tempDir, {
      logMessage: "Found failing auth test",
      step: "Fix token refresh handling",
      touchedFile: "src/auth.ts",
      verification: "npm test passed",
    });
    run(["session", "close", tempDir, "--status", "completed"], { includes: "as COMPLETED" });
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }

  run(["session", "list"], { includes: "RunBook sessions in" });
  run(["session", "clear", "--dry-run"], { includes: "No runtime sessions found" });

  runFails(["context", "nope"], { includes: "Unknown context route" });
  runFails(["init", "--profile", "nope", "--dry-run"], { includes: "Unknown profile" });
  runFails(["upgrade", "--profile", "nope", "--dry-run"], { includes: "Unknown profile" });

  const doctorMissingDir = fs.mkdtempSync(path.join(os.tmpdir(), "runbook-smoke-"));
  try {
    runFails(["doctor", doctorMissingDir], { includes: ["core context files are present", "Fix:"] });
  } finally {
    fs.rmSync(doctorMissingDir, { recursive: true, force: true });
  }

  const invalidStatusDir = fs.mkdtempSync(path.join(os.tmpdir(), "runbook-smoke-"));
  try {
    run(["session", "new", invalidStatusDir], { quiet: true });
    runFails(["session", "close", invalidStatusDir, "--status", "nope"], {
      includes: "Session close status must be one of",
    });
  } finally {
    fs.rmSync(invalidStatusDir, { recursive: true, force: true });
  }

  console.log("smoke ok");
}

function parseJson(relativePath) {
  JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));
}

function assertJson(output, expected) {
  const parsed = JSON.parse(output);

  for (const [key, value] of Object.entries(expected)) {
    if (key === "routeKey") {
      if (!parsed.routes || !parsed.routes[value]) {
        throw new Error(`Expected JSON routes to include "${value}".\n${output}`);
      }
      continue;
    }

    if (key === "missingRouteKey") {
      if (parsed.routes && parsed.routes[value]) {
        throw new Error(`Expected JSON routes to exclude "${value}".\n${output}`);
      }
      continue;
    }

    if (parsed[key] !== value) {
      throw new Error(`Expected JSON field "${key}" to equal "${value}".\n${output}`);
    }
  }
}

function assertFile(baseDir, relativePath) {
  const filePath = path.join(baseDir, relativePath);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Expected file to exist: ${filePath}`);
  }
}

function assertFileIncludes(baseDir, relativePath, expected) {
  assertFile(baseDir, relativePath);
  const content = fs.readFileSync(path.join(baseDir, relativePath), "utf8");
  if (!content.includes(expected)) {
    throw new Error(`Expected ${relativePath} to include "${expected}".`);
  }
}

function assertLatestSessionIncludes(baseDir, expected) {
  const sessionsDir = path.join(baseDir, ".runbook", "sessions");
  const latest = fs
    .readdirSync(sessionsDir)
    .filter((name) => /^SESSION-\d{8}-\d{4}\.json$/.test(name))
    .sort()
    .pop();

  if (!latest) {
    throw new Error(`Expected a runtime session in ${sessionsDir}`);
  }

  const parsed = JSON.parse(fs.readFileSync(path.join(sessionsDir, latest), "utf8"));
  const logMessages = parsed.log.map((entry) => entry.message);
  const planSteps = parsed.plan.map((entry) => entry.step);
  const touchedFiles = parsed.summary.filesChanged.map((entry) => entry.path);
  const verification = parsed.summary.verification.map((entry) => entry.command);

  if (!logMessages.includes(expected.logMessage)) {
    throw new Error(`Expected session log to include "${expected.logMessage}".`);
  }
  if (!planSteps.includes(expected.step)) {
    throw new Error(`Expected session plan to include "${expected.step}".`);
  }
  if (!touchedFiles.includes(expected.touchedFile)) {
    throw new Error(`Expected touched files to include "${expected.touchedFile}".`);
  }
  if (!verification.includes(expected.verification)) {
    throw new Error(`Expected verification to include "${expected.verification}".`);
  }
}

function run(args, options = {}) {
  const result = spawn(args);

  if (result.status !== 0) {
    throw new Error(`Expected success for ${formatCommand(args)}\n${result.output}`);
  }

  assertOutput(args, result.output, options);

  if (!options.quiet) {
    process.stdout.write(`ok ${formatCommand(args)}\n`);
  }

  return result.output;
}

function runFails(args, options = {}) {
  const result = spawn(args);

  if (result.status === 0) {
    throw new Error(`Expected failure for ${formatCommand(args)}\n${result.output}`);
  }

  assertOutput(args, result.output, options);
  process.stdout.write(`ok ${formatCommand(args)} failed as expected\n`);
  return result.output;
}

function spawn(args) {
  const result = childProcess.spawnSync(process.execPath, [bin, ...args], {
    cwd: root,
    encoding: "utf8",
  });

  return {
    status: result.status,
    output: `${result.stdout || ""}${result.stderr || ""}`,
  };
}

function assertOutput(args, output, options) {
  for (const expected of toArray(options.includes)) {
    if (!output.includes(expected)) {
      throw new Error(`Expected output for ${formatCommand(args)} to include "${expected}".\n${output}`);
    }
  }

  for (const unexpected of toArray(options.excludes)) {
    if (output.includes(unexpected)) {
      throw new Error(`Expected output for ${formatCommand(args)} to exclude "${unexpected}".\n${output}`);
    }
  }
}

function toArray(value) {
  if (!value) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}

function formatCommand(args) {
  return `runbook ${args.join(" ")}`;
}

main();
