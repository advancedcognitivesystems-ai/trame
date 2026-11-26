# Snapshot

*The exact state expected on 26 November 2026, without history: the values in force, without the amendments that produced them.*

## Commands · Commands

### How a command writes at a terminal

Decision · `TerminalLines`

- Decided by: trame
- Value: { indent:    }
- Rejected: Tabs, their width depends on the terminal: what is indented under a line would not line up

### The library's commands

Component · `Commands`

- Owner: trame
- Language: typescript
- Startup: { exposure: std/tooling.ProgramCommands }

### Two builds compared

Function · `BuildComparison` · **held**

- Owner: trame
- Parameters: { say: commands.CommandWords }
- Serves: Commands every project runs, written once
- Depends on: What the commands say

### Plan

Entry point · `Plan` · **held**

- Owner: trame
- Trigger: { type: command, name: plan }
- Parameters: { project: std/engine.TheProject, files: std/tooling.Files, comparison: commands.BuildComparison, lines: commands.TerminalLines, say: commands.CommandWords, exit: std/system.ExitStatus, counts: std/algebra.Counts }
- Serves: Commands every project runs, written once
- Part of: The library's commands
- Depends on: Two builds compared, How a command writes at a terminal, What the commands say

### What the commands say

Message catalog · `CommandWords`

- Owner: trame
- Parameters: { language: std/tooling.CommandLanguage }

## Commands · Packages

### The library of continuous integration

Package · `ContinuousIntegration`

- Owner: trame
- Name: ci
- Version: 0.8.0
- How it joins the graph: library
- Where it comes from: path
- Its path: ../../ci/releases/0.8.0
- Serves: Commands every project runs, written once

### Trame

Package · `Language`

- Owner: trame
- Name: trame
- Version: 126
- How it joins the graph: language
- Its path: ../../generations/g126
- Serves: Commands every project runs, written once

### The people of the repository

Package · `People`

- Owner: trame
- Name: team
- Version: 0.1.0
- How it joins the graph: library
- Where it comes from: path
- Its path: ../team/releases/0.1.0
- Serves: Commands every project runs, written once

### std

Package · `StandardLibrary`

- Owner: trame
- Name: std
- Version: 0.28.0
- How it joins the graph: library
- Its path: ../../std/releases/0.28.0
- Serves: Commands every project runs, written once

## Commands · Product

### Commands every project runs, written once

Goal · `WrittenOnce`

- Owner: trame

## Commands · Releases

### Version 0.1.0

Release · `R0_1_0`

- Released by: trame
- Version: 0.1.0
- Released on: 2026-11-26
- What changes: the commands every project runs, written once on std's ports of the engine: plan
- Fingerprint: 492f7f0c05958db9
- Language: shared
- Serves: Commands every project runs, written once

## Commands · Scenarios

### The small project

Decision · `SmallProject`

- Decided by: trame
- Value: { root: #commands/samples/small, today: 2026-11-26 }

### Which project the scenarios compile

Function · `TheSmallProject` · **held**

- Owner: trame
- Parameters: { small: scenarios.SmallProject }
- Depends on: The small project

### What the scenarios check

Message catalog · `ScenarioWords`

- Owner: trame

### Compiled by the engine that plays them

Technical choice · `CompiledByTheEngine` · **held**

- Decided by: trame
- Context: A command computes from a graph the engine compiled: a graph a scenario wrote by hand would check the command against what its author thought the engine gives.
- Rejected: A graph written by the scenario, it proves nothing of what the engine gives, which is what the command reads on a machine
- In: Test
- Serves: Commands every project runs, written once

### Played on a small project

Technical choice · `PlayedOnASmallProject` · **held**

- Decided by: trame
- Context: The library's own project is the one being compiled when its scenarios play: they compile another, small and of the library's own, whose files are read again when they change.
- Chooses: Which project the scenarios compile
- In: Test
- Serves: Commands every project runs, written once

### Test

Environment · `Test`

- Owner: trame
- The build evaluates here: true

### After a build, nothing changes

Scenario · `PlanAfterTheSameBuild` · **held**

- Owner: trame
- Parameters: { plan: commands.Plan, project: std/engine.TheProject, files: std/tooling.Files, say: commands.CommandWords, checks: scenarios.ScenarioWords, exit: std/system.ExitStatus, counts: std/algebra.Counts }
- Verifies: Plan, Two builds compared
- In: Test
- Depends on: Plan, What the commands say, What the scenarios check

### A plan says what a build would change

Scenario · `PlanSaysWhatChanges` · **held**

- Owner: trame
- Parameters: { plan: commands.Plan, project: std/engine.TheProject, files: std/tooling.Files, say: commands.CommandWords, lines: commands.TerminalLines, checks: scenarios.ScenarioWords, exit: std/system.ExitStatus, counts: std/algebra.Counts }
- Verifies: Plan, Two builds compared, Which project the scenarios compile
- In: Test
- Depends on: Plan, What the commands say, How a command writes at a terminal, What the scenarios check

### Without a build, a plan says so

Scenario · `PlanWithoutABuild` · **held**

- Owner: trame
- Parameters: { plan: commands.Plan, project: std/engine.TheProject, say: commands.CommandWords, checks: scenarios.ScenarioWords, exit: std/system.ExitStatus }
- Verifies: Plan
- In: Test
- Depends on: Plan, What the commands say, What the scenarios check

## Commands · SDLC

### How a pull request is checked on GitHub

Decision · `PullRequestsOnGitHub`

- Decided by: trame
- Value: { on: { pullRequests: main }, job: commands, runsOn: ubuntu-24.04, node: 22, artefacts: { days: 30 }, pullRequest: { review: false, merge: onceItHoldsUnlessDecided } }
- Rejected: Only when a pull request touches the project, GitHub keeps a pull request waiting for a check it requires and that never ran; Merged by GitHub whatever it changes, what people decided would reach main without a person

### The pull requests' workflow

Artefact · `PullRequestWorkflow` · **held**

- Owner: trame
- Path: ../../.github/workflows/commands-pull-request.yml
- Media type: application/yaml
- Runs elsewhere: The next version
- Its writer's settings: How a pull request is checked on GitHub

### The commands of every project

Artefact · `TheLibrary` · **unknown**

- Owner: trame
- Path: src
- A version of the project: true

### The next version

Shipment · `NextVersion` · **unknown**

- Owner: trame
- Target: version
- Ships: The commands of every project
- Follows the policy: How a version is made

### The files that run it elsewhere

Shipment · `RunnersWritten` · **held**

- Owner: trame
- Target: repository
- Ships: The pull requests' workflow

### Its callers identified

Obligation · `CallersIdentified`

- Owner: trame
- A gap weighs: error
- Serves: Commands every project runs, written once

### Its code verified

Obligation · `CodeVerified`

- Owner: trame
- A gap weighs: error
- Serves: Commands every project runs, written once

### Its decisions applied

Obligation · `DecisionsApplied`

- Owner: trame
- Serves: Commands every project runs, written once

### Its packages safe

Obligation · `PackagesSafe`

- Owner: trame
- Serves: Commands every project runs, written once

### Its requirements held

Obligation · `RequirementsServed`

- Owner: trame
- Serves: Commands every project runs, written once

### How a version is made

Policy · `VersionMode`

- Owner: trame
- Its obligations: Its code verified, Its requirements held, Its decisions applied, Its packages safe, Its callers identified
