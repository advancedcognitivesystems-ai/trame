/** Continuous integration · GitHub Actions */

import { standard } from "#trame/kinds/standard"
import { decision } from "#trame/kinds/decision"
import { syntax } from "#trame/kinds/syntax"
import { vocabulary } from "#trame/kinds/vocabulary"
import type { ProvidedBy, RunPlan } from "#trame/kernel"
import { OneWriterPerPlace } from "./product"
import { YamlDocument, type YamlNode } from "./yaml"
import { Npm } from "./npm"

// A shipment run by GitHub Actions: a workflow of one job, written from the plan the engine computes. It checks the
// repository out, installs Node.js, the packages of each directory the plan names and what their packages ask once
// installed, runs trame ship with the person who started it; shipped, it makes what the graph says it publishes
// available as an artefact of GitHub and records its address as evidence; it keeps the evidence as another artefact,
// whatever the shipment answered, when its settings say so. Nothing is published or kept by default. Started by a pull
// request (D1, ci 0.5.0), it writes in it the review of the branch and keeps it from merging itself as its settings say.

/**
 * How a pull request is merged
 * Once the checks a repository requires hold, a pull request is merged as the project decides (D1): by a person, by
 * GitHub as soon as it holds (when someone asked it to: gh pr merge --auto), or so unless it changes what people decided
 * (a trame.lock of the repository), which a person then merges.
 */
export const MergeWays = vocabulary({
  owner: "trame",
  serves: [OneWriterPerPlace],
  words: {
    byHand: "A person merges it",
    onceItHolds: "GitHub merges it once it holds, when someone asked it to",
    onceItHoldsUnlessDecided: "GitHub merges it once it holds, unless it changes what people decided: a person merges it then",
  },
})
export type MergeWay = ProvidedBy<typeof MergeWays>[number]

/** When a workflow runs, on which machine, with which Node.js: what a project decides for each workflow it ships. */
export interface WorkflowSettings {
  /** What starts it: by hand, a push on these branches, these tags, a schedule (cron, in UTC), a pull request into these branches. */
  readonly on: {
    readonly manual?: boolean; readonly branches?: readonly string[]; readonly tags?: readonly string[]; readonly schedule?: string
    readonly pullRequests?: readonly string[]
  }
  /** The name of its job, by which a repository requires it among the checks of a pull request; ship when it says none. */
  readonly job?: string
  /**
   * The directories whose packages it installs besides those of the plan, from the repository's root (ci 0.6.0): the
   * projects the shipment's scenarios enter, whose code they compile (Trame's enter Poselia, which uses three.js).
   */
  readonly alsoInstalls?: readonly string[]
  /**
   * On a pull request: whether it writes in it the review of the branch (what its declarations not yet published add to
   * those published, against the lock of the branch it merges into), one comment for the project, written again at each
   * push; and how the pull request is merged (a word of MergeWays).
   */
  readonly pullRequest?: { readonly review: boolean; readonly merge: MergeWay }
  /** The machine it runs on, as GitHub names its runners. */
  readonly runsOn: string
  /** The major version of Node.js it installs. */
  readonly node: number
  /**
   * What it does with artefacts of GitHub: how many days GitHub keeps what it publishes (what the workflow's artefact
   * publishes in the graph), and whether it keeps the evidence as another artefact, whatever the shipment answered, for
   * how many days. Without evidence, it keeps none.
   */
  readonly artefacts: { readonly days: number; readonly evidence?: { readonly days: number } }
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
  source: "GitHub Docs, Workflow syntax for GitHub Actions; Contexts reference (github.actor, steps.<id>.outputs); Expressions (always()); actions/upload-artifact v4, outputs (artifact-url)",
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
    retentionDays: { value: "retention-days", meaning: "How many days GitHub keeps what upload-artifact uploaded" },
    id: { value: "id", meaning: "The name of a step, by which a later step reads what it gives" },
    actor: { value: "${{ github.actor }}", meaning: "The person who started the workflow" },
    openExpression: { value: "${{ ", meaning: "Opens an expression, which GitHub replaces before the step runs" },
    closeExpression: { value: " }}", meaning: "Closes it" },
    outputs: { value: "outputs", meaning: "What a step gives, read as steps.<id>.outputs.<name>" },
    dot: { value: ".", meaning: "Between the parts of a context's path" },
    artifactUrl: { value: "artifact-url", meaning: "What upload-artifact (v4) gives: the address of the artefact it uploaded" },
    pullRequest: { value: "pull_request", meaning: "Started by a pull request, opened or pushed to" },
    pullRequests: { value: "pull-requests", meaning: "The pull requests and their comments, as a permission of the token" },
    write: { value: "write", meaning: "Read and write" },
    env: { value: "env", meaning: "The environment variables of a step" },
    token: { value: "${{ github.token }}", meaning: "The workflow's token, which gh reads from GH_TOKEN" },
    number: { value: "${{ github.event.pull_request.number }}", meaning: "The number of the pull request that started it" },
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
 * installed, and ship with the person who started it. Shipped, what the workflow's artefact publishes in the graph is
 * uploaded as an artefact of GitHub (the deployment, on GitHub), kept as many days as the settings say, and its address
 * recorded as evidence of each artefact, attributed to that person; when the settings keep the evidence, it is uploaded
 * as a second artefact, whatever the shipment answered. It publishes and keeps nothing the graph does not name.
 */
export const GitHubWorkflow = syntax({
  owner: "trame",
  standard: GitHubActions,
  section: "Workflow syntax: on, permissions, jobs.<job_id>.runs-on, jobs.<job_id>.steps[*].uses, with, run, working-directory, if, env",
  url: "https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions",
  constants: {
    // On a pull request: Bash lines, given GH_TOKEN, NUMBER (the pull request), LOCK (the project's lock) and MARKER.
    fetchBase: { value: "git fetch --depth=1 origin \"$GITHUB_BASE_REF\"", meaning: "Fetches the branch the pull request merges into (git-fetch; GITHUB_BASE_REF, set by Actions on a pull request)" },
    baseLock: { value: "git show \"FETCH_HEAD:./$LOCK\" > \"$LOCK\" || rm -f \"$LOCK\"", meaning: "Puts the lock of that branch in the project's, or none when it has none (git-show)" },
    toReview: { value: "> \"$RUNNER_TEMP/review.md\"", meaning: "After the words that write the review: where it is written" },
    branchLock: { value: "git checkout -- \"$LOCK\" || rm -f \"$LOCK\"", meaning: "Puts the branch's lock back, or none when it has none" },
    marked: { value: "printf '%s\\n\\n' \"$MARKER\" | cat - \"$RUNNER_TEMP/review.md\" > \"$RUNNER_TEMP/comment.md\"", meaning: "The comment: the mark of the project's review, then the review" },
    findComment: { value: "id=\"$(gh api \"repos/$GITHUB_REPOSITORY/issues/$NUMBER/comments\" --paginate --jq '[.[] | select(.body | startswith(env.MARKER))][0].id // empty')\"", meaning: "The comment of the project's review already written, by its mark (gh api; the REST API's issue comments)" },
    writeComment: { value: "if [ -n \"$id\" ]; then gh api --method PATCH \"repos/$GITHUB_REPOSITORY/issues/comments/$id\" -F \"body=@$RUNNER_TEMP/comment.md\" > /dev/null; else gh pr comment \"$NUMBER\" --body-file \"$RUNNER_TEMP/comment.md\"; fi", meaning: "Writes it again, or writes it the first time" },
    keepByHand: { value: "gh pr merge \"$NUMBER\" --disable-auto || true", meaning: "Keeps GitHub from merging it: a person merges it (gh pr merge --disable-auto)" },
    keepWhenDecided: { value: "git diff --quiet FETCH_HEAD -- \":(glob)**/$LOCK\" || gh pr merge \"$NUMBER\" --disable-auto || true", meaning: "Keeps GitHub from merging it when a lock of the repository changed: what people decided (git-diff --quiet; a pathspec with the glob magic)" },
    tokenVariable: { value: "GH_TOKEN", meaning: "The variable gh reads its token from" },
    numberVariable: { value: "NUMBER", meaning: "The variable that holds the pull request's number" },
    lockVariable: { value: "LOCK", meaning: "The variable that holds the project's lock" },
    markerVariable: { value: "MARKER", meaning: "The variable that holds the mark of the project's review" },
    markOpen: { value: "<!-- The review of", meaning: "Opens the mark of a project's review, a comment Markdown does not show" },
    markClose: { value: "-->", meaning: "Closes it" },
    job: { value: "ship", meaning: "The name of the one job" },
    delivered: { value: "delivered", meaning: "The name of the step that uploads what the shipment ships, whose address is recorded after it" },
    evidence: { value: "evidence", meaning: "After the shipment's name: the name of the artefact that keeps its evidence" },
    joint: { value: "-", meaning: "Between the shipment's name and that word" },
    space: { value: " ", meaning: "Separates the words of a command" },
    quote: { value: "\"", meaning: "Around the person's name, given to the shell as one word" },
    written: { value: "Written by trame ship from the graph, for the shipment", meaning: "What the workflow's first comment says" },
    of: { value: "of", meaning: "Between the shipment and its project, in that comment" },
    edit: { value: "Do not edit: edit the graph, then ship.", meaning: "The comment that says where to change it" },
  },
  deps: { yaml: YamlDocument, npm: Npm, actions: PinnedActions, ways: MergeWays },
  write: ({
    standard: gh, job, delivered, evidence, joint, space, quote, written, of, edit, yaml, npm, actions, ways,
    fetchBase, baseLock, toReview, branchLock, marked, findComment, writeComment, keepByHand, keepWhenDecided,
    tokenVariable, numberVariable, lockVariable, markerVariable, markOpen, markClose,
  }) => (plan: RunPlan, settings: WorkflowSettings): string => {
    const text = (t: string): YamlNode => ({ text: t })
    const person = quote + gh.actor + quote
    const address = quote + gh.openExpression + [gh.steps, delivered, gh.outputs, gh.artifactUrl].join(gh.dot) + gh.closeExpression + quote
    const step = (...entries: (readonly [string, YamlNode])[]): YamlNode => ({ map: entries })
    const run = (words: readonly string[], dir: string) => step([gh.run, text(words.join(space))], [gh.workingDirectory, text(dir)])
    const on: (readonly [string, YamlNode])[] = [
      ...(settings.on.manual ? [[gh.manual, {}] as const] : []),
      ...(settings.on.branches || settings.on.tags ? [[gh.push, { map: [
        ...(settings.on.branches ? [[gh.branches, { list: settings.on.branches.map(text) }] as const] : []),
        ...(settings.on.tags ? [[gh.tags, { list: settings.on.tags.map(text) }] as const] : []),
      ] }] as const] : []),
      ...(settings.on.schedule ? [[gh.schedule, { list: [step([gh.cron, text(settings.on.schedule)])] }] as const] : []),
      ...(settings.on.pullRequests ? [[gh.pullRequest, { map: [[gh.branches, { list: settings.on.pullRequests.map(text) }]] }] as const] : []),
    ]
    // On a pull request: the branch it merges into, the review of the branch against its lock, written in the pull
    // request, and what keeps GitHub from merging it, as the project's settings say.
    const pr = settings.on.pullRequests ? settings.pullRequest : undefined
    const [byHand, , unlessDecided] = ways
    const variables = { map: [
      [tokenVariable, text(gh.token)], [numberVariable, text(gh.number)], [lockVariable, text(plan.review.lock)],
      [markerVariable, text([markOpen, plan.project, markClose].join(space))],
    ] as const }
    const script = (lines: readonly string[]) => step([gh.run, { lines }], [gh.workingDirectory, text(plan.project)], [gh.env, variables])
    const keep = pr?.merge === byHand ? [keepByHand] : pr?.merge === unlessDecided ? [keepWhenDecided] : []
    const reviewed: YamlNode[] = pr ? [
      run([fetchBase], plan.project),
      ...(pr.review ? [script([baseLock, [...plan.review.command, toReview].join(space), branchLock, marked, findComment, writeComment])] : []),
      ...(keep.length ? [script(keep)] : []),
    ] : []
    const steps: YamlNode[] = [
      step([gh.uses, text(actions.checkout)]),
      step([gh.uses, text(actions.setupNode)], [gh.with, { map: [[gh.nodeVersion, { number: settings.node }]] }]),
      ...[...new Set([...plan.installs, ...(settings.alsoInstalls ?? [])])].map((dir) => run([npm.install], dir)),
      ...(plan.restore ? [run(plan.restore, plan.project)] : []),
      ...plan.prepares.map((p) => run([p.run], p.dir)),
      ...reviewed,
      run([...plan.command, person], plan.project),
      // Shipped, what the graph says this place publishes is made available as an artefact of GitHub, and its address
      // recorded as evidence of each artefact; nothing when it publishes nothing.
      ...[plan.delivers].filter((ds) => ds.some(Boolean)).flatMap((ds) => [
        step([gh.id, text(delivered)], [gh.uses, text(actions.upload)], [gh.with, { map: [
          [gh.name, text(plan.shipment)], [gh.path, { lines: ds.map((d) => d.path) }], [gh.retentionDays, { number: settings.artefacts.days }],
        ] }]),
        ...ds.map((d) => run([...plan.deployed.command, d.artifact, plan.deployed.verdict, plan.deployed.by, person, plan.deployed.url, address], plan.project)),
      ]),
      // The evidence, whatever the shipment answered, when the settings keep it.
      ...[settings.artefacts.evidence].filter((e) => e !== undefined).map((e) => step([gh.uses, text(actions.upload)], [gh.when, text(gh.always)], [gh.with, { map: [
        [gh.name, text([plan.shipment, evidence].join(joint))], [gh.path, text(plan.evidence)], [gh.retentionDays, { number: e!.days }],
      ] }])),
    ]
    return yaml([[written, JSON.stringify(plan.title), of, plan.project].join(space), edit], { map: [
      [gh.name, text(plan.title)],
      [gh.on, { map: on }],
      [gh.permissions, { map: [[gh.contents, text(gh.read)], ...(pr ? [[gh.pullRequests, text(gh.write)] as const] : [])] }],
      [gh.jobs, { map: [[settings.job ?? job, { map: [[gh.runsOn, text(settings.runsOn)], [gh.steps, { list: steps }]] }]] }],
    ] })
  },
  examples: [
    {
      input: [
        {
          shipment: "Preview", title: "A preview", project: "apps/poselia", command: ["../../trame.sh", "ship", "Preview", "--by"],
          file: ".github/workflows/poselia-preview.yml", toRoot: "../..", installs: [".", "std", "apps/poselia"],
          prepares: [{ dir: "std", run: "npx playwright install --with-deps chromium" }],
          delivers: [{ artifact: "PageFile", path: "apps/poselia/dist/poselia.html" }], evidence: "apps/poselia/evidence",
          deployed: { command: ["../../trame.sh", "evidence"], verdict: "passed", by: "--by", url: "--url" },
          review: { command: ["../../trame.sh", "view", "review", "--format", "md"], lock: "trame.lock" },
        },
        { on: { manual: true, branches: ["main"] }, runsOn: "ubuntu-24.04", node: 22, artefacts: { days: 30, evidence: { days: 90 } } },
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
        "      - id: delivered",
        "        uses: actions/upload-artifact@v4",
        "        with:",
        "          name: Preview",
        "          path: |",
        "            apps/poselia/dist/poselia.html",
        "          retention-days: 30",
        "      - run: \"../../trame.sh evidence PageFile passed --by \\\"${{ github.actor }}\\\" --url \\\"${{ steps.delivered.outputs.artifact-url }}\\\"\"",
        "        working-directory: apps/poselia",
        "      - uses: actions/upload-artifact@v4",
        "        if: \"always()\"",
        "        with:",
        "          name: Preview-evidence",
        "          path: apps/poselia/evidence",
        "          retention-days: 90",
        "",
      ].join("\n"),
    },
    {
      input: [
        {
          shipment: "Preview", title: "A preview", project: ".", command: ["./trame.sh", "ship", "Preview", "--by"],
          file: ".github/workflows/preview.yml", toRoot: "../..", installs: ["."], prepares: [], delivers: [], evidence: "evidence",
          deployed: { command: ["./trame.sh", "evidence"], verdict: "passed", by: "--by", url: "--url" },
          review: { command: ["./trame.sh", "view", "review", "--format", "md"], lock: "trame.lock" },
        },
        { on: { schedule: "0 6 * * 1" }, runsOn: "ubuntu-24.04", node: 22, artefacts: { days: 30 } },
      ],
      output: [
        "# Written by trame ship from the graph, for the shipment \"A preview\" of .",
        "# Do not edit: edit the graph, then ship.",
        "name: A preview",
        "on:",
        "  schedule:",
        "    - cron: \"0 6 * * 1\"",
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
        "      - run: \"./trame.sh ship Preview --by \\\"${{ github.actor }}\\\"\"",
        "        working-directory: \".\"",
        "",
      ].join("\n"),
    },
    {
      input: [
        {
          shipment: "IntoMain", title: "Into the main branch", project: "apps/poselia", command: ["../../trame.sh", "ship", "IntoMain", "--by"],
          file: ".github/workflows/poselia-merge.yml", toRoot: "../..", installs: [".", "apps/poselia"], prepares: [], delivers: [],
          evidence: "apps/poselia/evidence",
          deployed: { command: ["../../trame.sh", "evidence"], verdict: "passed", by: "--by", url: "--url" },
          review: { command: ["../../trame.sh", "view", "review", "--format", "md"], lock: "trame.lock" },
        },
        {
          on: { pullRequests: ["main"] }, job: "poselia", alsoInstalls: ["libs/geometry", "apps/poselia"], runsOn: "ubuntu-24.04", node: 22, artefacts: { days: 30 },
          pullRequest: { review: true, merge: "onceItHoldsUnlessDecided" },
        },
      ],
      output: [
        "# Written by trame ship from the graph, for the shipment \"Into the main branch\" of apps/poselia",
        "# Do not edit: edit the graph, then ship.",
        "name: Into the main branch",
        "on:",
        "  pull_request:",
        "    branches:",
        "      - main",
        "permissions:",
        "  contents: read",
        "  pull-requests: write",
        "jobs:",
        "  poselia:",
        "    runs-on: ubuntu-24.04",
        "    steps:",
        "      - uses: actions/checkout@v4",
        "      - uses: actions/setup-node@v4",
        "        with:",
        "          node-version: 22",
        "      - run: npm ci",
        "        working-directory: \".\"",
        "      - run: npm ci",
        "        working-directory: apps/poselia",
        "      - run: npm ci",
        "        working-directory: libs/geometry",
        "      - run: \"git fetch --depth=1 origin \\\"$GITHUB_BASE_REF\\\"\"",
        "        working-directory: apps/poselia",
        "      - run: |",
        "          git show \"FETCH_HEAD:./$LOCK\" > \"$LOCK\" || rm -f \"$LOCK\"",
        "          ../../trame.sh view review --format md > \"$RUNNER_TEMP/review.md\"",
        "          git checkout -- \"$LOCK\" || rm -f \"$LOCK\"",
        "          printf '%s\\n\\n' \"$MARKER\" | cat - \"$RUNNER_TEMP/review.md\" > \"$RUNNER_TEMP/comment.md\"",
        "          id=\"$(gh api \"repos/$GITHUB_REPOSITORY/issues/$NUMBER/comments\" --paginate --jq '[.[] | select(.body | startswith(env.MARKER))][0].id // empty')\"",
        "          if [ -n \"$id\" ]; then gh api --method PATCH \"repos/$GITHUB_REPOSITORY/issues/comments/$id\" -F \"body=@$RUNNER_TEMP/comment.md\" > /dev/null; else gh pr comment \"$NUMBER\" --body-file \"$RUNNER_TEMP/comment.md\"; fi",
        "        working-directory: apps/poselia",
        "        env:",
        "          GH_TOKEN: \"${{ github.token }}\"",
        "          NUMBER: \"${{ github.event.pull_request.number }}\"",
        "          LOCK: trame.lock",
        "          MARKER: \"<!-- The review of apps/poselia -->\"",
        "      - run: |",
        "          git diff --quiet FETCH_HEAD -- \":(glob)**/$LOCK\" || gh pr merge \"$NUMBER\" --disable-auto || true",
        "        working-directory: apps/poselia",
        "        env:",
        "          GH_TOKEN: \"${{ github.token }}\"",
        "          NUMBER: \"${{ github.event.pull_request.number }}\"",
        "          LOCK: trame.lock",
        "          MARKER: \"<!-- The review of apps/poselia -->\"",
        "      - run: \"../../trame.sh ship IntoMain --by \\\"${{ github.actor }}\\\"\"",
        "        working-directory: apps/poselia",
        "",
      ].join("\n"),
    },
  ],
})
