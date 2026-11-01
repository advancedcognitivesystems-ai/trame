# Snapshot

*The exact state expected on 1 November 2026, without history: the values in force, without the amendments that produced them.*

## Continuous integration · GitHub Actions

### GitHub Actions

Standard · `GitHubActions`

- Maintained by: trame
- Source: GitHub Docs, Workflow syntax for GitHub Actions; Contexts reference (github.actor, steps.<id>.outputs); Expressions (always()); actions/upload-artifact v4, outputs (artifact-url)
- Address: https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions
- Constants: { name: { value: name, meaning: The name of the workflow, or of what an action uploads }, on: { value: on, meaning: What starts the workflow }, manual: { value: workflow_dispatch, meaning: Started by hand, from GitHub }, push: { value: push, meaning: Started by a push }, branches: { value: branches, meaning: The branches a push starts it on }, tags: { value: tags, meaning: The tags a push starts it on }, schedule: { value: schedule, meaning: Started at the times a cron expression gives (UTC) }, cron: { value: cron, meaning: The cron expression of a schedule }, permissions: { value: permissions, meaning: What the workflow's token may do }, contents: { value: contents, meaning: The repository's contents }, read: { value: read, meaning: Read only }, jobs: { value: jobs, meaning: The jobs of the workflow, by their names }, runsOn: { value: runs-on, meaning: The machine a job runs on }, steps: { value: steps, meaning: The steps of a job, in order }, uses: { value: uses, meaning: The action a step uses }, with: { value: with, meaning: What the action is given }, run: { value: run, meaning: The command a step runs }, workingDirectory: { value: working-directory, meaning: Where the command of a step runs, from the repository's root }, when: { value: if, meaning: The condition a step runs on }, always: { value: always(), meaning: Whatever the steps before answered: what keeps the evidence of a shipment refused }, nodeVersion: { value: node-version, meaning: The version of Node.js setup-node installs }, path: { value: path, meaning: What upload-artifact keeps, one path a line }, retentionDays: { value: retention-days, meaning: How many days GitHub keeps what upload-artifact uploaded }, id: { value: id, meaning: The name of a step, by which a later step reads what it gives }, actor: { value: ${{ github.actor }}, meaning: The person who started the workflow }, openExpression: { value: ${{ , meaning: Opens an expression, which GitHub replaces before the step runs }, closeExpression: { value:  }}, meaning: Closes it }, outputs: { value: outputs, meaning: What a step gives, read as steps.<id>.outputs.<name> }, dot: { value: ., meaning: Between the parts of a context's path }, artifactUrl: { value: artifact-url, meaning: What upload-artifact (v4) gives: the address of the artefact it uploaded } }
- Serves: Each place is a writer

### A workflow of GitHub Actions

Syntax element · `GitHubWorkflow` · **held**

- Owner: trame
- Section: Workflow syntax: on, permissions, jobs.<job_id>.runs-on, jobs.<job_id>.steps[*].uses, with, run, working-directory, if
- Address: https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions
- Marks: { job: { value: ship, meaning: The name of the one job }, delivered: { value: delivered, meaning: The name of the step that uploads what the shipment ships, whose address is recorded after it }, evidence: { value: evidence, meaning: After the shipment's name: the name of the artefact that keeps its evidence }, joint: { value: -, meaning: Between the shipment's name and that word }, space: { value:  , meaning: Separates the words of a command }, quote: { value: ", meaning: Around the person's name, given to the shell as one word }, written: { value: Written by trame ship from the graph, for the shipment, meaning: What the workflow's first comment says }, of: { value: of, meaning: Between the shipment and its project, in that comment }, edit: { value: Do not edit: edit the graph, then ship., meaning: The comment that says where to change it } }
- Parameters: { standard: github.GitHubActions, yaml: yaml.YamlDocument, npm: npm.Npm, actions: github.PinnedActions }
- Examples: { input: { shipment: Preview, title: A preview, project: apps/poselia, command: ../../trame.sh, ship, Preview, --by, file: .github/workflows/poselia-preview.yml, toRoot: ../.., installs: ., std, apps/poselia, prepares: { dir: std, run: npx playwright install --with-deps chromium }, delivers: { artifact: PageFile, path: apps/poselia/dist/poselia.html }, evidence: apps/poselia/evidence, deployed: { command: ../../trame.sh, evidence, verdict: passed, by: --by, url: --url } }, { on: { manual: true, branches: main }, runsOn: ubuntu-24.04, node: 22, artefacts: { days: 30, evidence: { days: 90 } } }, output: # Written by trame ship from the graph, for the shipment "A preview" of apps/poselia
# Do not edit: edit the graph, then ship.
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
 }, { input: { shipment: Preview, title: A preview, project: ., command: ./trame.sh, ship, Preview, --by, file: .github/workflows/preview.yml, toRoot: ../.., installs: ., prepares: , delivers: , evidence: evidence, deployed: { command: ./trame.sh, evidence, verdict: passed, by: --by, url: --url } }, { on: { schedule: 0 6 * * 1 }, runsOn: ubuntu-24.04, node: 22, artefacts: { days: 30 } }, output: # Written by trame ship from the graph, for the shipment "A preview" of .
# Do not edit: edit the graph, then ship.
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
 }
- Defined by: GitHub Actions
- Depends on: GitHub Actions, A YAML document, npm, The actions a workflow uses

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
- Marks: { person: { value: by, meaning: The variable that holds the name of the person who ships }, usage: { value: give the name of the person who ships, meaning: What the script says when it is run without a name }, written: { value: Written by trame ship from the graph, for the shipment, meaning: What the script's first comment says }, of: { value: of, meaning: Between the shipment and its project, in that comment }, edit: { value: Do not edit: edit the graph, then ship., meaning: The comment that says where to change it } }
- Parameters: { standard: shell.BashScripts, npm: npm.Npm }
- Examples: { input: { shipment: Preview, title: A preview, project: apps/poselia, command: ../../trame.sh, ship, Preview, --by, file: apps/poselia/scripts/ship-preview.sh, toRoot: ../../.., installs: ., std, apps/poselia, prepares: { dir: std, run: npx playwright install --with-deps chromium }, delivers: { artifact: PageFile, path: apps/poselia/dist/poselia.html }, evidence: apps/poselia/evidence, deployed: { command: ../../trame.sh, evidence, verdict: passed, by: --by, url: --url } }, output: #!/usr/bin/env bash
# Written by trame ship from the graph, for the shipment "A preview" of apps/poselia
# Do not edit: edit the graph, then ship.
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
