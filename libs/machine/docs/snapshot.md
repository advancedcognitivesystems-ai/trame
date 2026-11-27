# Snapshot

*The exact state expected on 27 November 2026, without history: the values in force, without the amendments that produced them.*

## Machine · Questions

### Node's platforms

Standard · `NodePlatforms`

- Maintained by: trame
- Source: Node.js documentation: os.platform()
- Address: https://nodejs.org/api/os.html#osplatform
- Constants: { aix: { value: aix, meaning: IBM AIX }, darwin: { value: darwin, meaning: macOS }, freebsd: { value: freebsd, meaning: FreeBSD }, linux: { value: linux, meaning: Linux }, openbsd: { value: openbsd, meaning: OpenBSD }, sunos: { value: sunos, meaning: Solaris }, win32: { value: win32, meaning: Windows } }
- Serves: The machine is asked once

### The language the questions speak in.

Decision · `MachineLanguage`

- Decided by: trame
- Value: { tag: en-GB }

### What the machine runs

Port · `WhatTheMachineRuns`

- Owner: trame
- Declared effects: { required:  }

### What the questions say

Message catalog · `MachineWords`

- Owner: trame
- Written in: The language the questions speak in.

### Git, installed

Implementation · `GitInstalled`

- Owner: trame
- Parameters: { git: std/repository.GitCommandLine, cli: std/system.NodeCli, events: std/system.NodeEvents, exit: std/system.ExitStatus, words: machine.MachineWords }
- Depends on: What the questions say

### Node, recent enough

Implementation · `NodeRecentEnough`

- Owner: trame
- Parameters: { settings: machine.WhatTheMachineRuns, versioning: std/measures.SemanticVersioning, words: machine.MachineWords }
- Depends on: What the machine runs, What the questions say

### The system, one the project runs on

Implementation · `SystemSupported`

- Owner: trame
- Parameters: { settings: machine.WhatTheMachineRuns, words: machine.MachineWords }
- Depends on: What the machine runs, What the questions say

## Machine · Packages

### The library of continuous integration

Package · `ContinuousIntegration`

- Owner: trame
- Name: ci
- Version: 0.8.0
- How it joins the graph: library
- Where it comes from: path
- Its path: ../../ci/releases/0.8.0
- Serves: The machine is asked once

### Trame

Package · `Language`

- Owner: trame
- Name: trame
- Version: 130
- How it joins the graph: language
- Its path: ../../generations/g130
- Serves: The machine is asked once

### The people of the repository

Package · `People`

- Owner: trame
- Name: team
- Version: 0.1.0
- How it joins the graph: library
- Where it comes from: path
- Its path: ../team/releases/0.1.0
- Serves: The machine is asked once

### std

Package · `StandardLibrary`

- Owner: trame
- Name: std
- Version: 0.29.1
- How it joins the graph: library
- Its path: ../../std/releases/0.29.1
- Serves: The machine is asked once

## Machine · Product

### The machine is asked once

Goal · `AskedOnce`

- Owner: trame

## Machine · Releases

### Version 0.1.0

Release · `R0_1_0`

- Released by: trame
- Version: 0.1.0
- Released on: 2026-11-25
- What changes: The questions of the machine (E3): the system among those the project runs on, Node recent enough, Git installed, each reading what the project requires through WhatTheMachineRuns
- Fingerprint: 050324449fb6a4b7
- Language: shared
- Serves: The machine is asked once

## Machine · SDLC

### How a pull request is checked on GitHub

Decision · `PullRequestsOnGitHub`

- Decided by: trame
- Value: { on: { pullRequests: main }, job: machine, runsOn: ubuntu-24.04, node: 22, artefacts: { days: 30 }, pullRequest: { review: false, merge: onceItHoldsUnlessDecided } }
- Rejected: Only when a pull request touches the project, GitHub keeps a pull request waiting for a check it requires and that never ran; Merged by GitHub whatever it changes, what people decided would reach main without a person

### The pull requests' workflow

Artefact · `PullRequestWorkflow` · **held**

- Owner: trame
- Path: ../../.github/workflows/machine-pull-request.yml
- Media type: application/yaml
- Runs elsewhere: The next version
- Its writer's settings: How a pull request is checked on GitHub

### The questions of the machine

Artefact · `TheLibrary` · **unknown**

- Owner: trame
- Path: src
- A version of the project: true

### The next version

Shipment · `NextVersion` · **unknown**

- Owner: trame
- Target: version
- Ships: The questions of the machine
- Follows the policy: How a version is made

### The files that run it elsewhere

Shipment · `RunnersWritten` · **held**

- Owner: trame
- Target: repository
- Ships: The pull requests' workflow

### Its packages safe

Obligation · `PackagesSafe`

- Owner: trame
- Serves: The machine is asked once

### How a version is made

Policy · `VersionMode`

- Owner: trame
- Its obligations: Its packages safe
