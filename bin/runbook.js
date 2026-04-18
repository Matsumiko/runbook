#!/usr/bin/env node

"use strict";

const fs = require("fs");
const path = require("path");

const packageRoot = path.resolve(__dirname, "..");

const coreFiles = [
  ["AGENTS.md", "AGENTS.md"],
  ["templates/core/CODER.md", "CODER.md"],
  ["templates/core/PLAN.md", "PLAN.md"],
  ["templates/core/TODO.md", "TODO.md"],
  ["templates/core/CHANGELOG.md", "CHANGELOG.md"],
  ["FRONTEND-DNA.md", "FRONTEND-DNA.md"],
  ["BACKEND-SECURITY-CHECKLIST.md", "BACKEND-SECURITY-CHECKLIST.md"],
  ["AGENT-VARIANTS.md", "AGENT-VARIANTS.md"],
];

const variantFiles = {
  codex: [],
  claude: ["CLAUDE.md"],
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

function main(argv) {
  const args = parseArgs(argv);

  if (args.help || args.command === "help") {
    printHelp();
    return;
  }

  if (args.command === "list") {
    printAgents();
    return;
  }

  if (!args.command || args.command === "init") {
    init(args);
    return;
  }

  fail(`Unknown command: ${args.command}`);
}

function parseArgs(argv) {
  const args = {
    command: undefined,
    target: ".",
    agent: "codex",
    force: false,
    dryRun: false,
    help: false,
  };

  const positional = [];

  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];

    if (value === "--help" || value === "-h") {
      args.help = true;
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

    if (value.startsWith("-")) {
      fail(`Unknown option: ${value}`);
    }

    positional.push(value);
  }

  args.command = positional[0];

  if (args.command && args.command !== "init" && args.command !== "list" && args.command !== "help") {
    fail(`Unknown command: ${args.command}`);
  }

  if (args.command === "init" && positional[1]) {
    args.target = positional[1];
  }

  if (!args.command && positional[0]) {
    args.command = "init";
    args.target = positional[0];
  }

  return args;
}

function init(args) {
  const targetDir = path.resolve(process.cwd(), args.target);
  const agentSelection = normalizeAgentSelection(args.agent);
  const operations = [];

  for (const [sourceFile, destinationFile] of coreFiles) {
    operations.push({
      source: path.join(packageRoot, sourceFile),
      destination: path.join(targetDir, destinationFile),
      label: destinationFile,
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
  }

  const result = copyOperations(operations, {
    force: args.force,
    dryRun: args.dryRun,
  });

  printSummary({
    targetDir,
    agents: agentSelection,
    force: args.force,
    dryRun: args.dryRun,
    result,
  });
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

function copyOperations(operations, options) {
  const result = {
    copied: [],
    skipped: [],
    missing: [],
  };

  for (const operation of operations) {
    if (!fs.existsSync(operation.source)) {
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
      fs.copyFileSync(operation.source, operation.destination);
    }

    result.copied.push(operation.label);
  }

  return result;
}

function printSummary({ targetDir, agents, force, dryRun, result }) {
  const mode = dryRun ? "Dry run" : "Installed";
  const agentLabel = agents.length > 0 ? agents.join(", ") : "none";

  console.log(`${mode} RunBook into ${targetDir}`);
  console.log(`Agents: ${agentLabel}`);
  console.log(`Overwrite existing files: ${force ? "yes" : "no"}`);

  if (result.copied.length > 0) {
    console.log(`\nFiles ${dryRun ? "to copy" : "copied"}:`);
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
    const note = agent === "codex" ? "core AGENTS.md only" : `${variantFiles[agent].length} native file(s)`;
    console.log(`  ${agent.padEnd(8)} ${note}`);
  }
  console.log("\nSpecial selections:");
  console.log("  all      install all non-Codex native adapters");
  console.log("  none     install only the core kit");
}

function printHelp() {
  console.log(`RunBook

Usage:
  runbook init [target] [--agent <name|all|none>] [--force] [--dry-run]
  runbook list
  runbook help

Examples:
  npx @matsumiko/runbook init
  npx @matsumiko/runbook init --agent claude
  npx @matsumiko/runbook init ./my-app --agent cursor,copilot
  npx @matsumiko/runbook init --agent all --dry-run

Default behavior:
  - copies the canonical RunBook markdown files
  - uses Codex-compatible AGENTS.md by default
  - skips existing files unless --force is provided
`);
}

function fail(message) {
  console.error(`runbook: ${message}`);
  process.exit(1);
}

main(process.argv.slice(2));
