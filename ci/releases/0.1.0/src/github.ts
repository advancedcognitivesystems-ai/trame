/** Continuous integration · GitHub Actions */

import { standard } from "../../../../kinds/standard"
import { decision } from "../../../../kinds/decision"
import { syntax } from "../../../../kinds/syntax"
import type { RunPlan } from "../../../../trame/kernel"
import { OneWriterPerPlace } from "./product"
import { YamlDocument, type YamlNode } from "./yaml"
import { Npm } from "./npm"

// A shipment run by GitHub Actions: a workflow of one job, written from the plan the engine computes. It checks the
// repository out, installs Node.js, the packages of each directory the plan names and what their packages ask once
// installed, runs trame ship with the person who started it, and keeps the evidence and the artefacts, whatever the
// shipment answered.

/** When a workflow runs, on which machine, with which Node.js: what a project decides for each workflow it ships. */
export interface WorkflowSettings {
  /** What starts it: by hand, a push on these branches, these tags, a schedule (cron, in UTC). */
  readonly on: { readonly manual?: boolean; readonly branches?: readonly string[]; readonly tags?: readonly string[]; readonly schedule?: string }
  /** The machine it runs on, as GitHub names its runners. */
  readonly runsOn: string
  /** The major version of Node.js it installs. */
  readonly node: number
}

/**
 * GitHub Actions
 * The words of a workflow file: what starts it, what it may do, its jobs, the machine of a job, its steps (an action
 * used and what it is given, a command run and where), the condition of a step; the expression that names the person
 * who started it.
 */
export const GitHubActions = standard({
  owner: "trame",
  serves: [OneWriterPerPlace],
  source: "GitHub Docs, Workflow syntax for GitHub Actions; Contexts reference (github.actor); Expressions (always())",
  url: "https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions",
  constants: {
    name: { value: "name", meaning: "The name of the workflow, or of what an action uploads" },
    on: { value: "on", meaning: "What starts the workflow" },
    manual: { value: "workflow_dispatch", meaning: "Started by hand, from GitHub" },
    push: { value: "push", meaning: "Started by a push" },
    branches: { value: "branches", meaning: "The branches a push starts it on" },
    tags: { value: "tags", meaning: "The tags a push starts it on" },
    schedule: { value: "schedule", meaning: "Started at the times a cron expression gives (UTC)" },
    cron: { value: "cron", meaning: "The cron expression of a schedule" },
    permissions: { value: "permissions", meaning: "What the workflow's token may do" },
    contents: { value: "contents", meaning: "The repository's contents" },
    read: { value: "read", meaning: "Read only" },
    jobs: { value: "jobs", meaning: "The jobs of the workflow, by their names" },
    runsOn: { value: "runs-on", meaning: "The machine a job runs on" },
    steps: { value: "steps", meaning: "The steps of a job, in order" },
    uses: { value: "uses", meaning: "The action a step uses" },
    with: { value: "with", meaning: "What the action is given" },
    run: { value: "run", meaning: "The command a step runs" },
    workingDirectory: { value: "working-directory", meaning: "Where the command of a step runs, from the repository's root" },
    when: { value: "if", meaning: "The condition a step runs on" },
    always: { value: "always()", meaning: "Whatever the steps before answered: what keeps the evidence of a shipment refused" },
    nodeVersion: { value: "node-version", meaning: "The version of Node.js setup-node installs" },
    path: { value: "path", meaning: "What upload-artifact keeps, one path a line" },
    actor: { value: "${{ github.actor }}", meaning: "The person who started the workflow" },
  },
})

/**
 * The actions a workflow uses
 * The actions of GitHub that check the repository out, install Node.js and keep files, each at the major version a
 * workflow names.
 */
export const PinnedActions = decision<{ checkout: string; setupNode: string; upload: string }>({
  owner: "trame",
  value: { checkout: "actions/checkout@v4", setupNode: "actions/setup-node@v4", upload: "actions/upload-artifact@v4" },
  rejected: {
    "Pinned by the commit": "a moved tag could not change them, but a review reads a hash; a later decision, when a project ships to the public",
    "The latest version": "a workflow would change without the graph changing",
  },
})

/**
 * A workflow of GitHub Actions
 * The workflow that runs a shipment on GitHub: started as its settings say, its token reading the repository only; one
 * job on the machine they name, whose steps check the repository out, install Node.js, install the packages of each
 * directory of the plan, install the generation's own packages when it has its own, run what the packages ask once
 * installed, ship with the person who started it, and keep the evidence and the artefacts, whatever the shipment
 * answered.
 */
export const GitHubWorkflow = syntax({
  owner: "trame",
  standard: GitHubActions,
  section: "Workflow syntax: on, permissions, jobs.<job_id>.runs-on, jobs.<job_id>.steps[*].uses, with, run, working-directory, if",
  url: "https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions",
  constants: {
    job: { value: "ship", meaning: "The name of the one job" },
    space: { value: " ", meaning: "Separates the words of a command" },
    quote: { value: "\"", meaning: "Around the person's name, given to the shell as one word" },
    written: { value: "Written by trame ship from the graph, for the shipment", meaning: "What the workflow's first comment says" },
    of: { value: "of", meaning: "Between the shipment and its project, in that comment" },
    edit: { value: "Do not edit: edit the graph, then ship.", meaning: "The comment that says where to change it" },
  },
  deps: { yaml: YamlDocument, npm: Npm, actions: PinnedActions },
  write: ({ standard: gh, job, space, quote, written, of, edit, yaml, npm, actions }) => (plan: RunPlan, settings: WorkflowSettings): string => {
    const text = (t: string): YamlNode => ({ text: t })
    const step = (...entries: (readonly [string, YamlNode])[]): YamlNode => ({ map: entries })
    const run = (words: readonly string[], dir: string) => step([gh.run, text(words.join(space))], [gh.workingDirectory, text(dir)])
    const on: (readonly [string, YamlNode])[] = [
      ...(settings.on.manual ? [[gh.manual, {}] as const] : []),
      ...(settings.on.branches || settings.on.tags ? [[gh.push, { map: [
        ...(settings.on.branches ? [[gh.branches, { list: settings.on.branches.map(text) }] as const] : []),
        ...(settings.on.tags ? [[gh.tags, { list: settings.on.tags.map(text) }] as const] : []),
      ] }] as const] : []),
      ...(settings.on.schedule ? [[gh.schedule, { list: [step([gh.cron, text(settings.on.schedule)])] }] as const] : []),
    ]
    const steps: YamlNode[] = [
      step([gh.uses, text(actions.checkout)]),
      step([gh.uses, text(actions.setupNode)], [gh.with, { map: [[gh.nodeVersion, { number: settings.node }]] }]),
      ...plan.installs.map((dir) => run([npm.install], dir)),
      ...(plan.restore ? [run(plan.restore, plan.project)] : []),
      ...plan.prepares.map((p) => run([p.run], p.dir)),
      run([...plan.command, quote + gh.actor + quote], plan.project),
      step([gh.uses, text(actions.upload)], [gh.when, text(gh.always)], [gh.with, { map: [[gh.name, text(plan.shipment)], [gh.path, { lines: plan.keeps }]] }]),
    ]
    return yaml([[written, JSON.stringify(plan.title), of, plan.project].join(space), edit], { map: [
      [gh.name, text(plan.title)],
      [gh.on, { map: on }],
      [gh.permissions, { map: [[gh.contents, text(gh.read)]] }],
      [gh.jobs, { map: [[job, { map: [[gh.runsOn, text(settings.runsOn)], [gh.steps, { list: steps }]] }]] }],
    ] })
  },
  examples: [
    {
      input: [
        {
          shipment: "Preview", title: "A preview", project: "apps/poselia", command: ["../../trame.sh", "ship", "Preview", "--by"],
          file: ".github/workflows/poselia-preview.yml", toRoot: "../..", installs: [".", "std", "apps/poselia"],
          prepares: [{ dir: "std", run: "npx playwright install --with-deps chromium" }], keeps: ["apps/poselia/evidence", "apps/poselia/dist/poselia.html"],
        },
        { on: { manual: true, branches: ["main"] }, runsOn: "ubuntu-24.04", node: 22 },
      ],
      output: [
        "# Written by trame ship from the graph, for the shipment \"A preview\" of apps/poselia",
        "# Do not edit: edit the graph, then ship.",
        "name: A preview",
        "on:",
        "  workflow_dispatch:",
        "  push:",
        "    branches:",
        "      - main",
        "permissions:",
        "  contents: read",
        "jobs:",
        "  ship:",
        "    runs-on: ubuntu-24.04",
        "    steps:",
        "      - uses: actions/checkout@v4",
        "      - uses: actions/setup-node@v4",
        "        with:",
        "          node-version: 22",
        "      - run: npm ci",
        "        working-directory: \".\"",
        "      - run: npm ci",
        "        working-directory: std",
        "      - run: npm ci",
        "        working-directory: apps/poselia",
        "      - run: npx playwright install --with-deps chromium",
        "        working-directory: std",
        "      - run: \"../../trame.sh ship Preview --by \\\"${{ github.actor }}\\\"\"",
        "        working-directory: apps/poselia",
        "      - uses: actions/upload-artifact@v4",
        "        if: \"always()\"",
        "        with:",
        "          name: Preview",
        "          path: |",
        "            apps/poselia/evidence",
        "            apps/poselia/dist/poselia.html",
        "",
      ].join("\n"),
    },
  ],
})
