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

const skillDirectories = {
  "frontend-foundation-builder": ".agents/skills/frontend-foundation-builder",
  "frontend-figma-to-theme": ".agents/skills/frontend-figma-to-theme",
  "frontend-component-builder": ".agents/skills/frontend-component-builder",
  "frontend-tooltip-builder": ".agents/skills/frontend-tooltip-builder",
  "frontend-dropdown-builder": ".agents/skills/frontend-dropdown-builder",
  "frontend-popover-builder": ".agents/skills/frontend-popover-builder",
  "frontend-combobox-builder": ".agents/skills/frontend-combobox-builder",
  "frontend-select-builder": ".agents/skills/frontend-select-builder",
  "frontend-context-menu-builder": ".agents/skills/frontend-context-menu-builder",
  "frontend-data-filter-builder": ".agents/skills/frontend-data-filter-builder",
  "frontend-date-picker-builder": ".agents/skills/frontend-date-picker-builder",
  "frontend-calendar-builder": ".agents/skills/frontend-calendar-builder",
  "frontend-timeline-builder": ".agents/skills/frontend-timeline-builder",
  "frontend-activity-feed-builder": ".agents/skills/frontend-activity-feed-builder",
  "frontend-audit-log-builder": ".agents/skills/frontend-audit-log-builder",
  "frontend-diff-viewer-builder": ".agents/skills/frontend-diff-viewer-builder",
  "frontend-chart-builder": ".agents/skills/frontend-chart-builder",
  "frontend-kpi-card-builder": ".agents/skills/frontend-kpi-card-builder",
  "frontend-metric-comparison-builder": ".agents/skills/frontend-metric-comparison-builder",
  "frontend-map-builder": ".agents/skills/frontend-map-builder",
  "frontend-gantt-builder": ".agents/skills/frontend-gantt-builder",
  "frontend-scheduler-builder": ".agents/skills/frontend-scheduler-builder",
  "frontend-kanban-builder": ".agents/skills/frontend-kanban-builder",
  "frontend-queue-board-builder": ".agents/skills/frontend-queue-board-builder",
  "frontend-inbox-builder": ".agents/skills/frontend-inbox-builder",
  "frontend-sidebar-builder": ".agents/skills/frontend-sidebar-builder",
  "frontend-split-pane-builder": ".agents/skills/frontend-split-pane-builder",
  "frontend-inspector-builder": ".agents/skills/frontend-inspector-builder",
  "frontend-master-detail-builder": ".agents/skills/frontend-master-detail-builder",
  "frontend-tree-view-builder": ".agents/skills/frontend-tree-view-builder",
  "frontend-org-chart-builder": ".agents/skills/frontend-org-chart-builder",
  "frontend-breadcrumb-builder": ".agents/skills/frontend-breadcrumb-builder",
  "frontend-accordion-builder": ".agents/skills/frontend-accordion-builder",
  "frontend-command-palette-builder": ".agents/skills/frontend-command-palette-builder",
  "frontend-detail-page-builder": ".agents/skills/frontend-detail-page-builder",
  "frontend-review-panel-builder": ".agents/skills/frontend-review-panel-builder",
  "frontend-page-builder": ".agents/skills/frontend-page-builder",
  "frontend-dashboard-builder": ".agents/skills/frontend-dashboard-builder",
  "frontend-auth-builder": ".agents/skills/frontend-auth-builder",
  "frontend-onboarding-builder": ".agents/skills/frontend-onboarding-builder",
  "frontend-stepper-builder": ".agents/skills/frontend-stepper-builder",
  "frontend-search-builder": ".agents/skills/frontend-search-builder",
  "frontend-data-grid-toolbar-builder": ".agents/skills/frontend-data-grid-toolbar-builder",
  "frontend-bulk-action-bar-builder": ".agents/skills/frontend-bulk-action-bar-builder",
  "frontend-pagination-builder": ".agents/skills/frontend-pagination-builder",
  "frontend-empty-state-builder": ".agents/skills/frontend-empty-state-builder",
  "frontend-notification-builder": ".agents/skills/frontend-notification-builder",
  "frontend-upload-builder": ".agents/skills/frontend-upload-builder",
  "frontend-modal-builder": ".agents/skills/frontend-modal-builder",
  "frontend-tabs-builder": ".agents/skills/frontend-tabs-builder",
  "frontend-marketing-builder": ".agents/skills/frontend-marketing-builder",
  "frontend-checkout-builder": ".agents/skills/frontend-checkout-builder",
  "frontend-settings-builder": ".agents/skills/frontend-settings-builder",
  "frontend-polish-pass": ".agents/skills/frontend-polish-pass",
  "frontend-form-builder": ".agents/skills/frontend-form-builder",
  "frontend-table-builder": ".agents/skills/frontend-table-builder",
};

const skillSummaries = {
  "frontend-foundation-builder": "choose Chakra UI or Tamagui for greenfield frontend work",
  "frontend-figma-to-theme": "turn Figma design context into theme tokens and frontend DNA",
  "frontend-component-builder": "build components that follow the existing stack, theme, and UI DNA",
  "frontend-tooltip-builder": "build tooltip hints with trigger, placement, and fallback discipline",
  "frontend-dropdown-builder": "build dropdown menus with grouping, selection, and dismissal discipline",
  "frontend-popover-builder": "build anchored popovers with lifecycle, density, and fallback discipline",
  "frontend-combobox-builder": "build comboboxes with query, selection, and async-state discipline",
  "frontend-select-builder": "build select fields with labels, value clarity, and fallback discipline",
  "frontend-context-menu-builder": "build context menus with trigger semantics and fallback discipline",
  "frontend-data-filter-builder": "build data filters with active-state and reset discipline",
  "frontend-date-picker-builder": "build date pickers with parsing, range, and mobile-fallback discipline",
  "frontend-calendar-builder": "build calendar surfaces with navigation, density, and fallback discipline",
  "frontend-timeline-builder": "build timeline surfaces with chronology, grouping, and state discipline",
  "frontend-activity-feed-builder": "build activity feeds with grouping, unread state, and density discipline",
  "frontend-audit-log-builder": "build audit-log surfaces with filters, diffs, and trace-discipline",
  "frontend-diff-viewer-builder": "build diff viewers with anchors, grouping, and comparison discipline",
  "frontend-chart-builder": "build charts with labels, comparison clarity, and no-data discipline",
  "frontend-kpi-card-builder": "build KPI cards with comparison clarity and metric-state discipline",
  "frontend-metric-comparison-builder": "build metric comparisons with baselines, deltas, and variance discipline",
  "frontend-map-builder": "build maps with selection, density, and spatial-context discipline",
  "frontend-gantt-builder": "build gantt surfaces with scale, dependency, and fallback discipline",
  "frontend-scheduler-builder": "build schedulers with resources, slots, and overlap discipline",
  "frontend-kanban-builder": "build kanban boards with lanes, card density, and fallback discipline",
  "frontend-queue-board-builder": "build queue boards with priority, triage, and bulk-action discipline",
  "frontend-inbox-builder": "build inbox surfaces with unread state, grouping, and triage discipline",
  "frontend-sidebar-builder": "build sidebar navigation shells with active-state and collapse discipline",
  "frontend-split-pane-builder": "build split panes with resizing, pane priority, and fallback discipline",
  "frontend-inspector-builder": "build inspectors with grouped metadata, actions, and sync discipline",
  "frontend-master-detail-builder": "build master-detail surfaces with selection, preview, and drill-down discipline",
  "frontend-tree-view-builder": "build tree views with expansion, selection, and density discipline",
  "frontend-org-chart-builder": "build org charts with lineage, node density, and drill-down discipline",
  "frontend-breadcrumb-builder": "build breadcrumb trails with hierarchy and truncation discipline",
  "frontend-accordion-builder": "build accordion and disclosure surfaces with expansion discipline",
  "frontend-command-palette-builder": "build command palettes with trigger, ranking, and keyboard discipline",
  "frontend-detail-page-builder": "build detail pages with summary, metadata, and related-section discipline",
  "frontend-review-panel-builder": "build review panels with evidence, rationale, and decision discipline",
  "frontend-page-builder": "build full pages with route-level hierarchy, flow, and state discipline",
  "frontend-dashboard-builder": "build dashboard and analytics surfaces with hierarchy and state discipline",
  "frontend-auth-builder": "build auth flows with trust, recovery, and access-state discipline",
  "frontend-onboarding-builder": "build first-run onboarding flows with activation and progression discipline",
  "frontend-stepper-builder": "build stepper progress UI with gating and status discipline",
  "frontend-search-builder": "build search and discovery flows with query, refinement, and result-state discipline",
  "frontend-data-grid-toolbar-builder": "build data-grid toolbars with selection, control grouping, and overflow discipline",
  "frontend-bulk-action-bar-builder": "build bulk-action bars with selection scope, safety, and overflow discipline",
  "frontend-pagination-builder": "build pagination controls with state-sync and boundary discipline",
  "frontend-empty-state-builder": "build empty and recovery states with clear next-action discipline",
  "frontend-notification-builder": "build notification surfaces with urgency, placement, and lifecycle discipline",
  "frontend-upload-builder": "build upload surfaces with constraints, progress, and retry discipline",
  "frontend-modal-builder": "build modal and overlay surfaces with focus, layering, and dismissal discipline",
  "frontend-tabs-builder": "build tabs and segmented panels with active-state and overflow discipline",
  "frontend-marketing-builder": "build marketing pages with narrative, CTA, and proof discipline",
  "frontend-checkout-builder": "build checkout flows with totals, trust, and payment-state discipline",
  "frontend-settings-builder": "build settings surfaces with grouping, persistence, and destructive-state discipline",
  "frontend-polish-pass": "refine existing frontend surfaces without redesigning the product",
  "frontend-form-builder": "build forms with validation, states, and submit lifecycle discipline",
  "frontend-table-builder": "build data tables with density, states, and action discipline",
};

const validAgents = Object.keys(variantFiles);
const validSkills = Object.keys(skillDirectories);

function main(argv) {
  const args = parseArgs(argv);

  if (args.help || args.command === "help") {
    printHelp();
    return;
  }

  if (args.command === "list") {
    printAgentsAndSkills();
    return;
  }

  if (args.command === "skill" || args.command === "skills") {
    if (!args.subcommand || args.subcommand === "list") {
      printSkills();
      return;
    }

    if (args.subcommand === "install") {
      installSkill(args);
      return;
    }

    if (args.subcommand === "help") {
      printHelp();
      return;
    }

    fail(`Unknown skill command: ${args.subcommand}`);
  }

  if (args.command === "init") {
    init(args);
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
    skillName: undefined,
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

  if (positional.length === 0) {
    args.command = "init";
    return args;
  }

  const first = positional[0];

  if (first === "help" || first === "list" || first === "init") {
    args.command = first;
  } else if (first === "skill" || first === "skills") {
    args.command = first;
    args.subcommand = positional[1] || "list";

    if (args.subcommand === "install") {
      args.skillName = positional[2];
      args.target = positional[3] || ".";

      if (!args.skillName) {
        fail('Missing skill name. Usage: runbook skill install <name> [target]');
      }
    }
  } else {
    args.command = "init";
    args.target = first;
    return args;
  }

  if (args.command === "init" && positional[1]) {
    args.target = positional[1];
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
    title: "RunBook",
    mode: args.dryRun ? "Dry run" : "Installed",
    targetDir,
    detailLines: [
      `Agents: ${agentSelection.length > 0 ? agentSelection.join(", ") : "none"}`,
      `Overwrite existing files: ${args.force ? "yes" : "no"}`,
    ],
    result,
  });
}

function installSkill(args) {
  const skillName = normalizeSkillName(args.skillName);
  const targetDir = path.resolve(process.cwd(), args.target);
  const sourceDir = path.join(packageRoot, skillDirectories[skillName]);
  const destinationDir = path.join(targetDir, ".agents", "skills", skillName);

  if (!fs.existsSync(sourceDir)) {
    fail(`Bundled skill "${skillName}" is missing from this package.`);
  }

  const operations = collectDirectoryOperations(
    sourceDir,
    destinationDir,
    path.posix.join(".agents", "skills", skillName),
  );

  const result = copyOperations(operations, {
    force: args.force,
    dryRun: args.dryRun,
  });

  printSummary({
    title: `skill ${skillName}`,
    mode: args.dryRun ? "Dry run" : "Installed",
    targetDir: destinationDir,
    detailLines: [
      `Project root: ${targetDir}`,
      `Overwrite existing files: ${args.force ? "yes" : "no"}`,
    ],
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

function normalizeSkillName(value) {
  const skillName = String(value || "").trim().toLowerCase();

  if (!validSkills.includes(skillName)) {
    fail(`Unknown skill "${value}". Run "runbook skill list" to see bundled skills.`);
  }

  return skillName;
}

function collectDirectoryOperations(sourceDir, destinationDir, labelRoot) {
  const operations = [];

  walk(sourceDir);
  return operations;

  function walk(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const sourcePath = path.join(currentDir, entry.name);
      const relativePath = path.relative(sourceDir, sourcePath);

      if (entry.isDirectory()) {
        walk(sourcePath);
        continue;
      }

      if (!entry.isFile()) {
        continue;
      }

      const relativeLabel = relativePath.split(path.sep).join("/");

      operations.push({
        source: sourcePath,
        destination: path.join(destinationDir, relativePath),
        label: path.posix.join(labelRoot, relativeLabel),
      });
    }
  }
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

function printAgentsAndSkills() {
  printAgents();
  console.log("");
  printSkills();
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

function printSkills() {
  console.log("Bundled skills:");
  for (const skillName of validSkills) {
    console.log(`  ${skillName.padEnd(30)} ${skillSummaries[skillName]}`);
  }
  console.log("\nInstall with:");
  console.log("  runbook skill install <name> [target]");
}

function printHelp() {
  console.log(`RunBook

Usage:
  runbook init [target] [--agent <name|all|none>] [--force] [--dry-run]
  runbook list
  runbook skill list
  runbook skill install <name> [target] [--force] [--dry-run]
  runbook help

Examples:
  npx @matsumiko/runbook init
  npx @matsumiko/runbook init --agent claude
  npx @matsumiko/runbook init ./my-app --agent cursor,copilot
  npx @matsumiko/runbook skill list
  npx @matsumiko/runbook skill install frontend-foundation-builder
  npx @matsumiko/runbook skill install frontend-figma-to-theme
  npx @matsumiko/runbook skill install frontend-component-builder
  npx @matsumiko/runbook skill install frontend-tooltip-builder
  npx @matsumiko/runbook skill install frontend-dropdown-builder
  npx @matsumiko/runbook skill install frontend-popover-builder
  npx @matsumiko/runbook skill install frontend-combobox-builder
  npx @matsumiko/runbook skill install frontend-select-builder
  npx @matsumiko/runbook skill install frontend-context-menu-builder
  npx @matsumiko/runbook skill install frontend-data-filter-builder
  npx @matsumiko/runbook skill install frontend-date-picker-builder
  npx @matsumiko/runbook skill install frontend-calendar-builder
  npx @matsumiko/runbook skill install frontend-timeline-builder
  npx @matsumiko/runbook skill install frontend-activity-feed-builder
  npx @matsumiko/runbook skill install frontend-audit-log-builder
  npx @matsumiko/runbook skill install frontend-diff-viewer-builder
  npx @matsumiko/runbook skill install frontend-chart-builder
  npx @matsumiko/runbook skill install frontend-kpi-card-builder
  npx @matsumiko/runbook skill install frontend-metric-comparison-builder
  npx @matsumiko/runbook skill install frontend-map-builder
  npx @matsumiko/runbook skill install frontend-gantt-builder
  npx @matsumiko/runbook skill install frontend-scheduler-builder
  npx @matsumiko/runbook skill install frontend-kanban-builder
  npx @matsumiko/runbook skill install frontend-queue-board-builder
  npx @matsumiko/runbook skill install frontend-inbox-builder
  npx @matsumiko/runbook skill install frontend-sidebar-builder
  npx @matsumiko/runbook skill install frontend-split-pane-builder
  npx @matsumiko/runbook skill install frontend-inspector-builder
  npx @matsumiko/runbook skill install frontend-master-detail-builder
  npx @matsumiko/runbook skill install frontend-tree-view-builder
  npx @matsumiko/runbook skill install frontend-org-chart-builder
  npx @matsumiko/runbook skill install frontend-breadcrumb-builder
  npx @matsumiko/runbook skill install frontend-accordion-builder
  npx @matsumiko/runbook skill install frontend-command-palette-builder
  npx @matsumiko/runbook skill install frontend-detail-page-builder
  npx @matsumiko/runbook skill install frontend-review-panel-builder
  npx @matsumiko/runbook skill install frontend-page-builder
  npx @matsumiko/runbook skill install frontend-dashboard-builder
  npx @matsumiko/runbook skill install frontend-auth-builder
  npx @matsumiko/runbook skill install frontend-onboarding-builder
  npx @matsumiko/runbook skill install frontend-stepper-builder
  npx @matsumiko/runbook skill install frontend-search-builder
  npx @matsumiko/runbook skill install frontend-data-grid-toolbar-builder
  npx @matsumiko/runbook skill install frontend-bulk-action-bar-builder
  npx @matsumiko/runbook skill install frontend-pagination-builder
  npx @matsumiko/runbook skill install frontend-empty-state-builder
  npx @matsumiko/runbook skill install frontend-notification-builder
  npx @matsumiko/runbook skill install frontend-upload-builder
  npx @matsumiko/runbook skill install frontend-modal-builder
  npx @matsumiko/runbook skill install frontend-tabs-builder
  npx @matsumiko/runbook skill install frontend-marketing-builder
  npx @matsumiko/runbook skill install frontend-checkout-builder
  npx @matsumiko/runbook skill install frontend-settings-builder
  npx @matsumiko/runbook skill install frontend-polish-pass
  npx @matsumiko/runbook skill install frontend-form-builder
  npx @matsumiko/runbook skill install frontend-table-builder
  npx @matsumiko/runbook skill install frontend-foundation-builder ./my-app --dry-run

Default behavior:
  - copies the canonical RunBook markdown files
  - uses Codex-compatible AGENTS.md by default
  - skips existing files unless --force is provided
  - installs bundled Codex skills into .agents/skills/
`);
}

function fail(message) {
  console.error(`runbook: ${message}`);
  process.exit(1);
}

main(process.argv.slice(2));
