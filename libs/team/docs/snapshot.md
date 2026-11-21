# Snapshot

*The exact state expected on 21 November 2026, without history: the values in force, without the amendments that produced them.*

## Team · Packages

### The library of continuous integration

Package · `ContinuousIntegration`

- Owner: trame
- Name: ci
- Version: 0.7.0
- How it joins the graph: library
- Where it comes from: path
- Its path: ../../ci/releases/0.7.0
- Serves: Who acts is declared once

### Trame

Package · `Language`

- Owner: trame
- Name: trame
- Version: 116
- How it joins the graph: language
- Where it comes from: path
- Its path: ../../generations/g116
- Serves: Who acts is declared once

## Team · People

### Claude

Actor · `Claude`

- Owner: ghalaax
- Handle: claude
- What it is: agent
- Serves: Who acts is declared once

### ghalaax

Actor · `Ghalaax`

- Owner: ghalaax
- Handle: ghalaax
- What it is: person
- Identities: github, ghalaax
- Serves: Who acts is declared once

### The runner of GitHub Actions

Actor · `GitHubRunner`

- Owner: ghalaax
- Handle: github-actions
- What it is: machine
- Identities: github, github-actions[bot]
- Serves: Who acts is declared once

### Trame's team

Actor · `Trame`

- Owner: ghalaax
- Handle: trame
- What it is: team
- Members: ghalaax, Claude
- Serves: Who acts is declared once

## Team · Product

### Who acts is declared once

Goal · `DeclaredOnce`

- Owner: trame

## Team · Releases

### Version 0.1.0

Release · `R0_1_0`

- Released by: trame
- Version: 0.1.0
- Released on: 2026-11-20
- What changes: Who works on Trame's repository, declared once (C4): ghalaax, a person; Claude, an agent; the runner of GitHub Actions, a machine; trame, the team of ghalaax and Claude
- Fingerprint: c5d2496591cc61d5
- Language: shared
- Serves: Who acts is declared once

## Team · SDLC

### How a pull request is checked on GitHub

Decision · `PullRequestsOnGitHub`

- Decided by: trame
- Value: { on: { pullRequests: main }, job: team, runsOn: ubuntu-24.04, node: 22, artefacts: { days: 30 }, pullRequest: { review: false, merge: onceItHoldsUnlessDecided } }
- Rejected: Only when a pull request touches the project, GitHub keeps a pull request waiting for a check it requires and that never ran; Merged by GitHub whatever it changes, what people decided would reach main without a person

### The pull requests' workflow

Artefact · `PullRequestWorkflow` · **unknown**

- Owner: trame
- Path: ../../.github/workflows/team-pull-request.yml
- Media type: application/yaml
- Runs elsewhere: The next version
- Its writer's settings: How a pull request is checked on GitHub

### The people of the repository

Artefact · `TheLibrary` · **unknown**

- Owner: trame
- Path: src
- A version of the project: true

### The next version

Shipment · `NextVersion` · **unknown**

- Owner: trame
- Target: version
- Ships: The people of the repository

### The files that run it elsewhere

Shipment · `RunnersWritten` · **unknown**

- Owner: trame
- Target: repository
- Ships: The pull requests' workflow
