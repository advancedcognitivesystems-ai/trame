# Snapshot

*The exact state expected on 19 November 2026, without history: the values in force, without the amendments that produced them.*

## Continuous integration · GitHub Actions

### GitHub Actions

Standard · `GitHubActions`

- Maintained by: trame
- Source: GitHub Docs, Workflow syntax for GitHub Actions; Contexts reference (github.actor, steps.<id>.outputs); Expressions (always()); actions/upload-artifact v4, outputs (artifact-url)
- Address: https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions
- Constants: { name: { value: name, meaning: The name of the workflow, or of what an action uploads }, on: { value: on, meaning: What starts the workflow }, manual: { value: workflow_dispatch, meaning: Started by hand, from GitHub }, push: { value: push, meaning: Started by a push }, branches: { value: branches, meaning: The branches a push starts it on }, tags: { value: tags, meaning: The tags a push starts it on }, schedule: { value: schedule, meaning: Started at the times a cron expression gives (UTC) }, cron: { value: cron, meaning: The cron expression of a schedule }, permissions: { value: permissions, meaning: What the workflow's token may do }, contents: { value: contents, meaning: The repository's contents }, read: { value: read, meaning: Read only }, jobs: { value: jobs, meaning: The jobs of the workflow, by their names }, runsOn: { value: runs-on, meaning: The machine a job runs on }, steps: { value: steps, meaning: The steps of a job, in order }, uses: { value: uses, meaning: The action a step uses }, with: { value: with, meaning: What the action is given }, run: { value: run, meaning: The command a step runs }, workingDirectory: { value: working-directory, meaning: Where the command of a step runs, from the repository's root }, when: { value: if, meaning: The condition a step runs on }, always: { value: always(), meaning: Whatever the steps before answered: what keeps the evidence of a shipment refused }, nodeVersion: { value: node-version, meaning: The version of Node.js setup-node installs }, path: { value: path, meaning: What upload-artifact keeps, one path a line }, retentionDays: { value: retention-days, meaning: How many days GitHub keeps what upload-artifact uploaded }, id: { value: id, meaning: The name of a step, by which a later step reads what it gives }, actor: { value: ${{ github.actor }}, meaning: The person who started the workflow }, openExpression: { value: ${{ , meaning: Opens an expression, which GitHub replaces before the step runs }, closeExpression: { value:  }}, meaning: Closes it }, outputs: { value: outputs, meaning: What a step gives, read as steps.<id>.outputs.<name> }, dot: { value: ., meaning: Between the parts of a context's path }, artifactUrl: { value: artifact-url, meaning: What upload-artifact (v4) gives: the address of the artefact it uploaded }, pullRequest: { value: pull_request, meaning: Started by a pull request, opened or pushed to }, pullRequests: { value: pull-requests, meaning: The pull requests and their comments, as a permission of the token }, write: { value: write, meaning: Read and write }, env: { value: env, meaning: The environment variables of a step }, token: { value: ${{ github.token }}, meaning: The workflow's token, which gh reads from GH_TOKEN }, number: { value: ${{ github.event.pull_request.number }}, meaning: The number of the pull request that started it } }
- Serves: Each place is a writer

### How a pull request is merged

Vocabulary · `MergeWays`

- Owner: trame
- Words: { byHand: A person merges it, onceItHolds: GitHub merges it once it holds, when someone asked it to, onceItHoldsUnlessDecided: GitHub merges it once it holds, unless it changes what people decided: a person merges it then }
- Serves: Each place is a writer

### A workflow of GitHub Actions

Syntax element · `GitHubWorkflow` · **held**

- Owner: trame
- Section: Workflow syntax: on, permissions, jobs.<job_id>.runs-on, jobs.<job_id>.steps[*].uses, with, run, working-directory, if, env
- Address: https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions
- Marks: { fetchBase: { value: git fetch --depth=1 origin "$GITHUB_BASE_REF", meaning: Fetches the branch the pull request merges into (git-fetch; GITHUB_BASE_REF, set by Actions on a pull request) }, baseLock: { value: git show "FETCH_HEAD:./$LOCK" > "$LOCK" || rm -f "$LOCK", meaning: Puts the lock of that branch in the project's, or none when it has none (git-show) }, toReview: { value: > "$RUNNER_TEMP/review.md", meaning: After the words that write the review: where it is written }, branchLock: { value: git checkout -- "$LOCK" || rm -f "$LOCK", meaning: Puts the branch's lock back, or none when it has none }, marked: { value: printf '%s\n\n' "$MARKER" | cat - "$RUNNER_TEMP/review.md" > "$RUNNER_TEMP/comment.md", meaning: The comment: the mark of the project's review, then the review }, findComment: { value: id="$(gh api "repos/$GITHUB_REPOSITORY/issues/$NUMBER/comments" --paginate --jq '[.[] | select(.body | startswith(env.MARKER))][0].id // empty')", meaning: The comment of the project's review already written, by its mark (gh api; the REST API's issue comments) }, writeComment: { value: if [ -n "$id" ]; then gh api --method PATCH "repos/$GITHUB_REPOSITORY/issues/comments/$id" -F "body=@$RUNNER_TEMP/comment.md" > /dev/null; else gh pr comment "$NUMBER" --body-file "$RUNNER_TEMP/comment.md"; fi, meaning: Writes it again, or writes it the first time }, keepByHand: { value: gh pr merge "$NUMBER" --disable-auto || true, meaning: Keeps GitHub from merging it: a person merges it (gh pr merge --disable-auto) }, keepWhenDecided: { value: git diff --quiet FETCH_HEAD -- ":(glob)**/$LOCK" || gh pr merge "$NUMBER" --disable-auto || true, meaning: Keeps GitHub from merging it when a lock of the repository changed: what people decided (git-diff --quiet; a pathspec with the glob magic) }, tokenVariable: { value: GH_TOKEN, meaning: The variable gh reads its token from }, numberVariable: { value: NUMBER, meaning: The variable that holds the pull request's number }, lockVariable: { value: LOCK, meaning: The variable that holds the project's lock }, markerVariable: { value: MARKER, meaning: The variable that holds the mark of the project's review }, markOpen: { value: <!-- The review of, meaning: Opens the mark of a project's review, a comment Markdown does not show }, markClose: { value: -->, meaning: Closes it }, job: { value: ship, meaning: The name of the one job }, delivered: { value: delivered, meaning: The name of the step that uploads what the shipment ships, whose address is recorded after it }, evidence: { value: evidence, meaning: After the shipment's name: the name of the artefact that keeps its evidence }, joint: { value: -, meaning: Between the shipment's name and that word }, space: { value:  , meaning: Separates the words of a command }, quote: { value: ", meaning: Around the person's name, given to the shell as one word }, written: { value: Written by trame ship from the graph, for the shipment, meaning: What the workflow's first comment says }, of: { value: of, meaning: Between the shipment and its project, in that comment }, fromArtefact: { value: From the artefact, meaning: Opens the comment that names the nodes the file comes from (ci 0.7.0) }, andSettings: { value: and its settings, meaning: Before the decision of its settings, in that comment }, declaredIn: { value: declared in, meaning: Before the file that declares them, in that comment }, edit: { value: Do not edit: change those nodes, then ship., meaning: The comment that says where to change it }, named: { value: ·, meaning: Between the job and the shipment, in the workflow's name } }
- Parameters: { standard: github.GitHubActions, yaml: yaml.YamlDocument, npm: npm.Npm, actions: github.PinnedActions, ways: github.MergeWays }
- Examples: { input: { shipment: Preview, title: A preview, project: apps/poselia, command: ../../trame.sh, ship, Preview, --by, file: .github/workflows/poselia-preview.yml, toRoot: ../.., installs: ., std, apps/poselia, prepares: { dir: std, run: npx playwright install --with-deps chromium }, delivers: { artifact: PageFile, path: apps/poselia/dist/poselia.html }, evidence: apps/poselia/evidence, deployed: { command: ../../trame.sh, evidence, verdict: passed, by: --by, url: --url }, review: { command: ../../trame.sh, view, review, --format, md, lock: trame.lock }, from: { artefact: sdlc.TheFile, settings: sdlc.TheSettings, declared: apps/poselia/src/sdlc.ts } }, { on: { manual: true, branches: main }, runsOn: ubuntu-24.04, node: 22, artefacts: { days: 30, evidence: { days: 90 } } }, output: # Written by trame ship from the graph, for the shipment "A preview" of apps/poselia
# From the artefact sdlc.TheFile and its settings sdlc.TheSettings declared in apps/poselia/src/sdlc.ts
# Do not edit: change those nodes, then ship.
name: A preview
on:
  workflow_dispatch:
  push:
    branches:
      - main
permissions:
  contents: read
jobs:
  ship:
    runs-on: ubuntu-24.04
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: npm ci
        working-directory: "."
      - run: npm ci
        working-directory: std
      - run: npm ci
        working-directory: apps/poselia
      - run: npx playwright install --with-deps chromium
        working-directory: std
      - run: "../../trame.sh ship Preview --by \"${{ github.actor }}\""
        working-directory: apps/poselia
      - id: delivered
        uses: actions/upload-artifact@v4
        with:
          name: Preview
          path: |
            apps/poselia/dist/poselia.html
          retention-days: 30
      - run: "../../trame.sh evidence PageFile passed --by \"${{ github.actor }}\" --url \"${{ steps.delivered.outputs.artifact-url }}\""
        working-directory: apps/poselia
      - uses: actions/upload-artifact@v4
        if: "always()"
        with:
          name: Preview-evidence
          path: apps/poselia/evidence
          retention-days: 90
 }, { input: { shipment: Preview, title: A preview, project: ., command: ./trame.sh, ship, Preview, --by, file: .github/workflows/preview.yml, toRoot: ../.., installs: ., prepares: , delivers: , evidence: evidence, deployed: { command: ./trame.sh, evidence, verdict: passed, by: --by, url: --url }, review: { command: ./trame.sh, view, review, --format, md, lock: trame.lock }, from: { artefact: sdlc.TheFile, settings: sdlc.TheSettings, declared: apps/poselia/src/sdlc.ts } }, { on: { schedule: 0 6 * * 1 }, runsOn: ubuntu-24.04, node: 22, artefacts: { days: 30 } }, output: # Written by trame ship from the graph, for the shipment "A preview" of .
# From the artefact sdlc.TheFile and its settings sdlc.TheSettings declared in apps/poselia/src/sdlc.ts
# Do not edit: change those nodes, then ship.
name: A preview
on:
  schedule:
    - cron: "0 6 * * 1"
permissions:
  contents: read
jobs:
  ship:
    runs-on: ubuntu-24.04
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: npm ci
        working-directory: "."
      - run: "./trame.sh ship Preview --by \"${{ github.actor }}\""
        working-directory: "."
 }, { input: { shipment: IntoMain, title: Into the main branch, project: apps/poselia, command: ../../trame.sh, ship, IntoMain, --by, file: .github/workflows/poselia-merge.yml, toRoot: ../.., installs: ., apps/poselia, prepares: , delivers: , evidence: apps/poselia/evidence, deployed: { command: ../../trame.sh, evidence, verdict: passed, by: --by, url: --url }, review: { command: ../../trame.sh, view, review, --format, md, lock: trame.lock }, from: { artefact: sdlc.TheFile, settings: sdlc.TheSettings, declared: apps/poselia/src/sdlc.ts } }, { on: { pullRequests: main }, job: poselia, alsoInstalls: libs/geometry, apps/poselia, runsOn: ubuntu-24.04, node: 22, artefacts: { days: 30 }, pullRequest: { review: true, merge: onceItHoldsUnlessDecided } }, output: # Written by trame ship from the graph, for the shipment "Into the main branch" of apps/poselia
# From the artefact sdlc.TheFile and its settings sdlc.TheSettings declared in apps/poselia/src/sdlc.ts
# Do not edit: change those nodes, then ship.
name: "poselia · Into the main branch"
on:
  pull_request:
    branches:
      - main
permissions:
  contents: read
  pull-requests: write
jobs:
  poselia:
    runs-on: ubuntu-24.04
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: npm ci
        working-directory: "."
      - run: npm ci
        working-directory: apps/poselia
      - run: npm ci
        working-directory: libs/geometry
      - run: "git fetch --depth=1 origin \"$GITHUB_BASE_REF\""
        working-directory: apps/poselia
      - run: |
          git show "FETCH_HEAD:./$LOCK" > "$LOCK" || rm -f "$LOCK"
          ../../trame.sh view review --format md > "$RUNNER_TEMP/review.md"
          git checkout -- "$LOCK" || rm -f "$LOCK"
          printf '%s\n\n' "$MARKER" | cat - "$RUNNER_TEMP/review.md" > "$RUNNER_TEMP/comment.md"
          id="$(gh api "repos/$GITHUB_REPOSITORY/issues/$NUMBER/comments" --paginate --jq '[.[] | select(.body | startswith(env.MARKER))][0].id // empty')"
          if [ -n "$id" ]; then gh api --method PATCH "repos/$GITHUB_REPOSITORY/issues/comments/$id" -F "body=@$RUNNER_TEMP/comment.md" > /dev/null; else gh pr comment "$NUMBER" --body-file "$RUNNER_TEMP/comment.md"; fi
        working-directory: apps/poselia
        env:
          GH_TOKEN: "${{ github.token }}"
          NUMBER: "${{ github.event.pull_request.number }}"
          LOCK: trame.lock
          MARKER: "<!-- The review of apps/poselia -->"
      - run: |
          git diff --quiet FETCH_HEAD -- ":(glob)**/$LOCK" || gh pr merge "$NUMBER" --disable-auto || true
        working-directory: apps/poselia
        env:
          GH_TOKEN: "${{ github.token }}"
          NUMBER: "${{ github.event.pull_request.number }}"
          LOCK: trame.lock
          MARKER: "<!-- The review of apps/poselia -->"
      - run: "../../trame.sh ship IntoMain --by \"${{ github.actor }}\""
        working-directory: apps/poselia
 }
- Defined by: GitHub Actions
- Depends on: GitHub Actions, A YAML document, npm, The actions a workflow uses, How a pull request is merged

### The actions a workflow uses

Decision · `PinnedActions`

- Decided by: trame
- Value: { checkout: actions/checkout@v4, setupNode: actions/setup-node@v4, upload: actions/upload-artifact@v4 }
- Rejected: Pinned by the commit, a moved tag could not change them, but a review reads a hash; a later decision, when a project ships to the public; The latest version, a workflow would change without the graph changing

## Continuous integration · npm

### npm

Standard · `Npm`

- Maintained by: trame
- Source: npm documentation, CLI commands: npm ci
- Address: https://docs.npmjs.com/cli/commands/npm-ci
- Constants: { install: { value: npm ci, meaning: Installs what the lockfile says, nothing else, after removing node_modules } }
- Serves: Each place is a writer

## Continuous integration · Packages

### Trame

Package · `Language`

- Owner: trame
- Name: trame
- Version: 110
- How it joins the graph: language
- Where it comes from: path
- Its path: ../generations/g110
- Serves: A shipment runs elsewhere as it runs here

## Continuous integration · Product

### Each place is a writer

Goal · `OneWriterPerPlace`

- Owner: trame

### A shipment runs elsewhere as it runs here

Goal · `RunsElsewhere`

- Owner: trame

## Continuous integration · Releases

### Version 0.1.0

Release · `R0_1_0`

- Released by: trame
- Version: 0.1.0
- Released on: 2026-10-28
- What changes: Writers that run a shipment elsewhere: a workflow of GitHub Actions and a Bash script, from the plan of the run the engine computes; a YAML document from nodes
- Fingerprint: 1067bfe6fbe29aea
- Language: shared
- Serves: Each place is a writer, A shipment runs elsewhere as it runs here

### Version 0.2.0

Release · `R0_2_0`

- Released by: trame
- Version: 0.2.0
- Released on: 2026-10-28
- What changes: A workflow publishes only what its artefact publishes in the graph, as an artefact of GitHub kept as many days as its settings say, records its address as evidence, and keeps the evidence only when its settings say so
- Fingerprint: 249723edd6b389fd
- Language: shared
- Serves: Each place is a writer, A shipment runs elsewhere as it runs here

### Version 0.3.0

Release · `R0_3_0`

- Released by: trame
- Version: 0.3.0
- Released on: 2026-11-02
- What changes: The language named by its names (#trame/kernel, #trame/kinds/*); references in its graph
- Fingerprint: f021383982b1c18c
- Language: shared
- Serves: Each place is a writer, A shipment runs elsewhere as it runs here

### Version 0.4.0

Release · `R0_4_0`

- Released by: trame
- Version: 0.4.0
- Released on: 2026-11-04
- What changes: The library ships its versions through its own graph: NextVersion requires its writers, each held by its examples
- Fingerprint: 7519ad6debc3455f
- Language: shared
- Serves: Each place is a writer, A shipment runs elsewhere as it runs here

### Version 0.5.0

Release · `R0_5_0`

- Released by: trame
- Version: 0.5.0
- Released on: 2026-11-19
- What changes: Pull requests: a workflow names its job, writes the review of the branch, keeps GitHub from merging what people decided; the settings of a repository (D1)
- Fingerprint: 39e1a1af260c128e
- Language: shared
- Serves: Each place is a writer, A shipment runs elsewhere as it runs here

### Version 0.6.0

Release · `R0_6_0`

- Released by: trame
- Version: 0.6.0
- Released on: 2026-11-19
- What changes: A workflow installs the projects its shipment's scenarios enter
- Fingerprint: ba68ab30f89a5df8
- Language: shared
- Serves: Each place is a writer, A shipment runs elsewhere as it runs here

### Version 0.7.0

Release · `R0_7_0`

- Released by: trame
- Version: 0.7.0
- Released on: 2026-11-19
- What changes: A file written names the nodes it comes from at its top (the artefact, the decision of its settings, the file that declares them), and a workflow's name says its job; the repository's settings leave ci for std (0.20.0), where a program of the project's SDLC applies and reads them back, and the writer of a script that set them is gone
- Fingerprint: b1a205a7d08e6a57
- Language: shared
- Serves: Each place is a writer, A shipment runs elsewhere as it runs here

## Continuous integration · SDLC

### How a pull request is checked on GitHub

Decision · `PullRequestsOnGitHub`

- Decided by: trame
- Value: { on: { pullRequests: main }, job: ci, runsOn: ubuntu-24.04, node: 22, artefacts: { days: 30 }, pullRequest: { review: false, merge: onceItHoldsUnlessDecided } }
- Rejected: Only when a pull request touches the project, GitHub keeps a pull request waiting for a check it requires and that never ran; Merged by GitHub whatever it changes, what people decided would reach main without a person

### The pull requests' workflow

Artefact · `PullRequestWorkflow` · **held**

- Owner: trame
- Path: ../.github/workflows/ci-pull-request.yml
- Media type: application/yaml
- Produced by: A workflow of GitHub Actions
- Runs elsewhere: The next version
- Its writer's settings: How a pull request is checked on GitHub

### The library of writers

Artefact · `TheLibrary` · **held**

- Owner: trame
- Path: src
- A version of the project: true

### The next version

Shipment · `NextVersion` · **held**

- Owner: trame
- Target: version
- Ships: The library of writers
- Requires: A YAML document, A script of Bash, A workflow of GitHub Actions

### The files that run it elsewhere

Shipment · `RunnersWritten` · **held**

- Owner: trame
- Target: repository
- Ships: The pull requests' workflow

## Continuous integration · Shell

### Bash scripts

Standard · `BashScripts`

- Maintained by: trame
- Source: GNU Bash Reference Manual (5.2): § 3.1.2 Quoting, § 3.2.5 Compound Commands (subshell), § 3.5.3 Shell Parameter Expansion (${parameter:?word}), § 4.3.1 The Set Builtin; env(1) for the #! line
- Address: https://www.gnu.org/software/bash/manual/bash.html
- Constants: { interpreter: { value: #!/usr/bin/env bash, meaning: The first line: the script is run by Bash, wherever it is installed }, strict: { value: set -euo pipefail, meaning: Stops at an unset variable, a command that fails, a pipe whose part fails }, comment: { value: #, meaning: Opens a comment, to the end of the line }, space: { value:  , meaning: Separates the words of a command }, quote: { value: ", meaning: Around a word that must stay one word }, and: { value: &&, meaning: Runs the next command only when the one before succeeded }, open: { value: (, meaning: Opens a subshell: a change of directory in it stays in it }, close: { value: ), meaning: Closes the subshell }, cd: { value: cd, meaning: Changes the directory }, assign: { value: =, meaning: Gives a variable its value }, dollar: { value: $, meaning: Reads a variable }, required: { value: ${1:?, meaning: Opens the expansion of the first argument that stops the script, saying the rest, when it is missing }, closeBrace: { value: }, meaning: Closes an expansion }, here: { value: $(dirname "$0"), meaning: The directory of the script, wherever it is run from }, separator: { value: /, meaning: Between the steps of a path }, endOfLine: { value: 
, meaning: Ends a line } }
- Serves: Each place is a writer

### A script of Bash

Syntax element · `ShellScript` · **held**

- Owner: trame
- Section: § 3.2.5 Compound Commands; § 3.5.3 Shell Parameter Expansion; § 4.3.1 The Set Builtin
- Address: https://www.gnu.org/software/bash/manual/bash.html#Shell-Parameter-Expansion
- Marks: { person: { value: by, meaning: The variable that holds the name of the person who ships }, usage: { value: give the name of the person who ships, meaning: What the script says when it is run without a name }, written: { value: Written by trame ship from the graph, for the shipment, meaning: What the script's first comment says }, of: { value: of, meaning: Between the shipment and its project, in that comment }, fromArtefact: { value: From the artefact, meaning: Opens the comment that names the nodes the file comes from (ci 0.7.0) }, andSettings: { value: and its settings, meaning: Before the decision of its settings, in that comment }, declaredIn: { value: declared in, meaning: Before the file that declares them, in that comment }, edit: { value: Do not edit: change those nodes, then ship., meaning: The comment that says where to change it } }
- Parameters: { standard: shell.BashScripts, npm: npm.Npm }
- Examples: { input: { shipment: Preview, title: A preview, project: apps/poselia, command: ../../trame.sh, ship, Preview, --by, file: apps/poselia/scripts/ship-preview.sh, toRoot: ../../.., installs: ., std, apps/poselia, prepares: { dir: std, run: npx playwright install --with-deps chromium }, delivers: { artifact: PageFile, path: apps/poselia/dist/poselia.html }, evidence: apps/poselia/evidence, deployed: { command: ../../trame.sh, evidence, verdict: passed, by: --by, url: --url }, review: { command: ../../trame.sh, view, review, --format, md, lock: trame.lock }, from: { artefact: sdlc.TheFile, settings: sdlc.TheSettings, declared: apps/poselia/src/sdlc.ts } }, output: #!/usr/bin/env bash
# Written by trame ship from the graph, for the shipment "A preview" of apps/poselia
# From the artefact sdlc.TheFile and its settings sdlc.TheSettings declared in apps/poselia/src/sdlc.ts
# Do not edit: change those nodes, then ship.
set -euo pipefail
by="${1:?give the name of the person who ships}"
cd "$(dirname "$0")/../../.."
(cd "." && npm ci)
(cd "std" && npm ci)
(cd "apps/poselia" && npm ci)
(cd "std" && npx playwright install --with-deps chromium)
cd "apps/poselia"
../../trame.sh ship Preview --by "$by"
 }
- Defined by: Bash scripts
- Depends on: Bash scripts, npm

## Continuous integration · YAML

### YAML

Standard · `Yaml`

- Maintained by: trame
- Source: YAML Ain't Markup Language, version 1.2.2 (2021): § 5.4 line breaks, § 6.6 comments, § 8.1.2 literal style, § 8.2.1 block sequences, § 8.2.2 block mappings
- Address: https://yaml.org/spec/1.2.2/
- Constants: { colon: { value: :, meaning: Ends the key of an entry of a mapping (§ 8.2.2) }, space: { value:  , meaning: Separates a key's colon, a sequence's dash or a comment's mark from what follows }, dash: { value: -, meaning: Opens an entry of a block sequence (§ 8.2.1) }, literal: { value: |, meaning: Opens a literal block: the lines under it, deeper, are kept as they are (§ 8.1.2) }, comment: { value: #, meaning: Opens a comment, to the end of the line (§ 6.6) }, endOfLine: { value: 
, meaning: Ends a line: a line feed (§ 5.4) } }
- Serves: Each place is a writer

### A YAML document

Syntax element · `YamlDocument` · **held**

- Owner: trame
- Section: § 8.2 Block collection styles; § 7.3.1 Double-quoted style
- Address: https://yaml.org/spec/1.2.2/#82-block-collection-styles
- Marks: { indent: { value:   , meaning: One level deeper: two spaces, as wide as a dash and its space, as GitHub's examples write it }, top: { value: , meaning: No indentation: the keys of the document itself }, plain: { value: ^[A-Za-z0-9][A-Za-z0-9._/@ -]*[A-Za-z0-9._/@-]$|^[A-Za-z0-9]$, meaning: A text written without quotes: letters, digits, and marks that mean nothing to YAML inside a text, without a space at its end } }
- Parameters: { standard: yaml.Yaml }
- Examples: { input: Written from the graph, { map: name, { text: A preview }, on, { map: workflow_dispatch, {  } } }, output: # Written from the graph
name: A preview
on:
  workflow_dispatch:
 }, { input: , { map: steps, { list: { map: uses, { text: actions/setup-node@v4 }, with, { map: node-version, { number: 22 } } }, { map: run, { text: trame.sh ship Preview --by "${{ github.actor }}" }, working-directory, { text: apps/poselia } }, { map: with, { map: path, { lines: apps/poselia/evidence, apps/poselia/dist/poselia.html } } } } }, output: steps:
  - uses: actions/setup-node@v4
    with:
      node-version: 22
  - run: "trame.sh ship Preview --by \"${{ github.actor }}\""
    working-directory: apps/poselia
  - with:
      path: |
        apps/poselia/evidence
        apps/poselia/dist/poselia.html
 }, { input: , { map: branches, { list: { text: main }, { text: release/* } }, if, { text: always() } }, output: branches:
  - main
  - "release/*"
if: "always()"
 }
- Defined by: YAML
- Depends on: YAML
