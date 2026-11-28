# Snapshot

*The exact state expected on 28 November 2026, without history: the values in force, without the amendments that produced them.*

## Commands · Commands

### Debouncing of saves

Decision · `DevDebounce`

- Decided by: trame
- Value: 150
- Allowed range: from 50 to 2000

### The port of trame dev

Decision · `DevPort`

- Decided by: trame
- Value: 4170

### The language the commands speak

Decision · `WordsLanguage`

- Decided by: trame
- Value: { tag: en-GB }
- Rejected: std's language of its commands, a choice of std's, which may change for std's reasons

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

### What the last change changed

Function · `PayloadDifferences` · **held**

- Owner: trame
- Parameters: { punctuation: documents/language.Punctuation, say: commands.CommandWords }
- Serves: Commands every project runs, written once
- Depends on: What the commands say

### A date's documents as today's

Function · `SameAsToday` · **held**

- Owner: trame
- Serves: Commands every project runs, written once

### Why a view gives no document, said

Function · `ViewRefused` · **held**

- Owner: trame
- Parameters: { say: commands.CommandWords, texts: std/algebra.Texts }
- Serves: Commands every project runs, written once
- Depends on: What the commands say

### Build

Entry point · `Build` · **held**

- Owner: trame
- Trigger: { type: command, name: build }
- Parameters: { project: std/engine.TheProject, files: std/tooling.Files, written: documents/rendering.FileRendering, printed: documents/rendering.TerminalRendering, say: commands.CommandWords, exit: std/system.ExitStatus }
- Serves: Commands every project runs, written once
- Part of: The library's commands
- Depends on: What the commands say

### Dev

Entry point · `Dev` · **held**

- Owner: trame
- Trigger: { type: command, name: dev, help: The page, compiled again at each save, options: { name: port, meaning: the port it is served on, takes: port } }
- Parameters: { project: std/engine.TheProject, page: documents/page.Page, rendering: documents/rendering.PageRendering, differences: commands.PayloadDifferences, service: documents/page.DevService, port: commands.DevPort, debounce: commands.DevDebounce, server: std/running.HttpServing, waiting: std/running.Waiting, clock: std/running.TheClock, printing: std/running.LinesPrinted, http: std/web.Http, media: std/web.MediaTypes, events: std/web.ServerSentEvents, node: std/system.NodeEvents, uri: std/web.Uri, codeLines: documents/text.CodeLines, dates: documents/language.Dates, lists: documents/language.Lists, language: documents/language.DocumentLanguage, file: std/text.TextFile, say: commands.CommandWords, exit: std/system.ExitStatus, counts: std/algebra.Counts, sequences: std/algebra.Sequences, texts: std/algebra.Texts }
- Serves: Commands every project runs, written once
- Part of: The library's commands
- Depends on: What the last change changed, The port of trame dev, Debouncing of saves, What the commands say

### Export

Entry point · `Export` · **held**

- Owner: trame
- Trigger: { type: command, name: export, help: A page a browser opens as it is, arguments: { name: file, meaning: where the page goes, from the project's root (the layout's page by default), optional: true }, options: { name: fragment, meaning: without the skeleton of a document, for a host that gives its own } }
- Parameters: { project: std/engine.TheProject, files: std/tooling.Files, page: documents/page.Page, packing: documents/page.GraphPacking, say: commands.CommandWords, exit: std/system.ExitStatus }
- Serves: Commands every project runs, written once
- Part of: The library's commands
- Depends on: What the commands say

### Payload

Entry point · `Payload` · **held**

- Owner: trame
- Trigger: { type: command, name: payload, help: The graph in the intermediate format, for a page, options: { name: all, meaning: at each date a page offers, not only the day of the line }, { name: history, meaning: with --all, the last days something was given too } }
- Parameters: { project: std/engine.TheProject, written: documents/rendering.FileRendering, printed: documents/rendering.TerminalRendering, page: documents/rendering.PageRendering, same: commands.SameAsToday, exit: std/system.ExitStatus }
- Serves: Commands every project runs, written once
- Part of: The library's commands
- Depends on: A date's documents as today's

### Plan

Entry point · `Plan` · **held**

- Owner: trame
- Trigger: { type: command, name: plan }
- Parameters: { project: std/engine.TheProject, files: std/tooling.Files, comparison: commands.BuildComparison, lines: documents/text.TerminalText, say: commands.CommandWords, exit: std/system.ExitStatus, counts: std/algebra.Counts }
- Serves: Commands every project runs, written once
- Part of: The library's commands
- Depends on: Two builds compared, What the commands say

### Snapshot

Entry point · `Snapshot` · **held**

- Owner: trame
- Trigger: { type: command, name: snapshot }
- Parameters: { project: std/engine.TheProject, files: std/tooling.Files, written: documents/rendering.FileRendering, say: commands.CommandWords, exit: std/system.ExitStatus }
- Serves: Commands every project runs, written once
- Part of: The library's commands
- Depends on: What the commands say

### View

Entry point · `View` · **held**

- Owner: trame
- Trigger: { type: command, name: view, help: One view of the project at hand, arguments: { name: view, meaning: the view, by its name }, { name: subject, meaning: the node or the module a view of a node or of a module is for, optional: true } }
- Parameters: { project: std/engine.TheProject, refused: commands.ViewRefused, exit: std/system.ExitStatus }
- Serves: Commands every project runs, written once
- Part of: The library's commands
- Depends on: Why a view gives no document, said

### What the commands say

Message catalog · `CommandWords`

- Owner: trame
- Parameters: { language: commands.WordsLanguage }
- Written in: The language the commands speak
- Depends on: The language the commands speak

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

### The renderers of documents

Package · `Documents`

- Owner: trame
- Name: documents
- Version: 0.5.1
- How it joins the graph: library
- Where it comes from: path
- Its path: ../documents/releases/0.5.1
- Serves: Commands every project runs, written once

### Trame

Package · `Language`

- Owner: trame
- Name: trame
- Version: 137
- How it joins the graph: language
- Its path: ../../generations/g137
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
- Version: 0.33.0
- How it joins the graph: library
- Its path: ../../std/releases/0.33.0
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

### Version 0.1.1

Release · `R0_1_1`

- Released by: trame
- Version: 0.1.1
- Released on: 2026-11-26
- What changes: the small project the scenarios compile lies in the library's sources, named by its package: a version carries it
- Fingerprint: 7c152c7f2b91e089
- Language: shared
- Serves: Commands every project runs, written once

### Version 0.1.2

Release · `R0_1_2`

- Released by: trame
- Version: 0.1.2
- Released on: 2026-11-27
- What changes: its own language of words; the decision behind its choices, which adopts std's: the engine is a provider
- Fingerprint: 29350d242a13f4d9
- Language: shared
- Serves: Commands every project runs, written once

### Version 0.2.0

Release · `R0_2_0`

- Released by: trame
- Version: 0.2.0
- Released on: 2026-11-27
- What changes: Indents with libs/documents' terminal text, its own decision gone; std 0.30.0
- Fingerprint: 6700afbbbbfb0996
- Language: shared
- Serves: Commands every project runs, written once

### Version 0.3.0

Release · `R0_3_0`

- Released by: trame
- Version: 0.3.0
- Released on: 2026-11-27
- What changes: trame build and trame snapshot: the documents the engine's views give, written with libs/documents' renderers; documents 0.3.0, generation 133
- Fingerprint: f84eccb53ad7bbb8
- Language: shared
- Serves: Commands every project runs, written once

### Version 0.4.0

Release · `R0_4_0`

- Released by: trame
- Version: 0.4.0
- Released on: 2026-11-28
- What changes: trame view: one view of the project at hand, its arguments declared, its document written in the format the line names; the words of a refused view; std 0.31.0, documents 0.4.0
- Fingerprint: 752f80d70061f712
- Language: shared
- Serves: Commands every project runs, written once

### Version 0.5.0

Release · `R0_5_0`

- Released by: trame
- Version: 0.5.0
- Released on: 2026-11-28
- What changes: The page's commands, the engine's before: payload (the graph at each date a page offers, rendered for files, the terminal and the page), export (libs/documents' page, compiled at each date by the engine in a fresh process, its program the engine's) and dev (the page served, compiled again after each save, amendments prepared by the engine), with what the last change changed, moved here
- Fingerprint: fc96f093bda0ffe4
- Language: shared
- Serves: Commands every project runs, written once

## Commands · Scenarios

### The small project's page

Decision · `PageSample`

- Decided by: trame
- Value: { program: trame, script: start(), instant: 2026-11-26T08:00:00.000Z, watched: src/, trame.lock, refused: amended nowhere in a scenario, port: 4171 }

### Views the scenarios ask for

Decision · `ScenarioViews`

- Decided by: trame
- Value: { unknown: nothing }

### The small project

Decision · `SmallProject`

- Decided by: trame
- Value: { root: #commands/samples/small, today: 2026-11-26 }

### A command is played on a real graph

Architecture decision · `PlayedOnARealGraph` · **held**

- Decided by: trame
- Context: A command reads what the engine gives (the graph as a build writes it, what a view receives): written by hand, a graph would check the command against what its author thought the engine gives.
- Consequences: The small project travels with each version, named by the library's package; a project that imports the library plays the scenarios on it there.
- Rejected: A graph written by the scenario, it proves nothing of what the engine gives, which is what the command reads on a machine
- Serves: Commands every project runs, written once
- Applied by: Compiled by the engine that plays them, Played on a small project

### A command writes documents as a project does

Architecture decision · `WrittenAsAProjectDoes` · **held**

- Decided by: trame
- Context: A command that wrote its documents itself would be a second renderer, whose words and layout could drift from the others'.
- Consequences: What a build writes is what the engine's build wrote, character for character: the same views, the same renderer, the same places.
- Rejected: A renderer of the commands' own, the walk and the words of the documents repeated
- Serves: Commands every project runs, written once
- Applied by: Files in Markdown, the terminal in text, Figures in Mermaid and in text, In the language of libs/documents' scenarios, The page, as a project makes it, The page's files and its reading, as on a machine, Waiting as a person would, The small project, served

### Which project the scenarios compile

Function · `TheSmallProject` · **held**

- Owner: trame
- Parameters: { small: scenarios.SmallProject }
- Depends on: The small project

### What the scenarios check

Message catalog · `ScenarioWords`

- Owner: trame
- Written in: The language the commands speak

### The small project, served

Implementation · `TheSmallProjectServed` · **held**

- Owner: trame
- Parameters: { chosen: std/engine.ProjectOfTheScenario, sample: scenarios.PageSample, say: std/engine.EngineWords }
- Depends on: The small project's page

### Compiled by the engine that plays them

Technical choice · `CompiledByTheEngine` · **held**

- Decided by: trame
- Context: A command computes from a graph the engine compiled: a graph a scenario wrote by hand would check the command against what its author thought the engine gives.
- Rejected: A graph written by the scenario, it proves nothing of what the engine gives, which is what the command reads on a machine
- In: Test
- Serves: Commands every project runs, written once

### Files in Markdown, the terminal in text

Technical choice · `DocumentsAsFiles` · **held**

- Decided by: trame
- Context: A command writes its documents with the renderers of libs/documents, in the syntaxes a project chooses.
- In: Test, Served
- Serves: Commands every project runs, written once

### In the language of libs/documents' scenarios

Technical choice · `DocumentsLanguage` · **held**

- Decided by: trame
- Context: The documents speak the language of the engine that compiles the graph: in a library's scenarios, a language decided for them.
- In: Test, Served
- Serves: Commands every project runs, written once

### Figures in Mermaid and in text

Technical choice · `FiguresOfTheDocuments` · **held**

- Decided by: trame
- Context: Each syntax reaches its figures through a port of its own, chosen apart.
- In: Test, Served
- Serves: Commands every project runs, written once

### The page, as a project makes it

Technical choice · `PageAsAProjectMakesIt` · **held**

- Decided by: trame
- Context: The page's commands write with libs/documents' page, and run with what std offers a command that keeps running.
- In: Test, Served
- Serves: Commands every project runs, written once

### The page's files and its reading, as on a machine

Technical choice · `PageFilesAsOnAMachine` · **held**

- Decided by: trame
- Context: The page's commands write with libs/documents' page, and run with what std offers a command that keeps running.
- In: Test, Served
- Serves: Commands every project runs, written once

### Played on a small project

Technical choice · `PlayedOnASmallProject` · **held**

- Decided by: trame
- Context: The library's own project is the one being compiled when its scenarios play: they compile another, small and of the library's own, whose files are read again when they change.
- Chooses: Which project the scenarios compile
- In: Test, Served
- Serves: Commands every project runs, written once

### The small project, served

Technical choice · `ServedFromTheSmallProject` · **held**

- Decided by: trame
- Context: A bundle is compiled in a fresh process of the engine on a machine: a scenario makes it in its own.
- Chooses: The small project, served
- In: Served
- Serves: Commands every project runs, written once

### Waiting as a person would

Technical choice · `WaitingOnTheMachine` · **held**

- Decided by: trame
- Context: A wait kept in memory would call at once what trame dev waits for.
- In: Test, Served
- Serves: Commands every project runs, written once

### Served

Environment · `Served`

- Owner: trame

### Test

Environment · `Test`

- Owner: trame
- The build evaluates here: true

### A build writes the documents and the graph

Scenario · `BuildWritesTheDocuments` · **held**

- Owner: trame
- Parameters: { build: commands.Build, project: std/engine.TheProject, files: std/tooling.Files, written: documents/rendering.FileRendering, printed: documents/rendering.TerminalRendering, say: commands.CommandWords, checks: scenarios.ScenarioWords, exit: std/system.ExitStatus }
- Verifies: Build, Which project the scenarios compile
- In: Test
- Depends on: Build, What the commands say, What the scenarios check

### trame dev serves the page

Scenario · `DevServesThePage` · **held**

- Owner: trame
- Parameters: { dev: commands.Dev, project: std/engine.TheProject, server: std/running.ServerKept, printed: std/running.LinesKept, service: documents/page.DevService, sample: scenarios.PageSample, words: documents/page.PageWords, say: commands.CommandWords, http: std/web.Http, exit: std/system.ExitStatus, counts: std/algebra.Counts, checks: scenarios.ScenarioWords }
- Verifies: Dev, The small project, served, Which project the scenarios compile
- In: Served
- Depends on: Dev, The small project's page, What the commands say, What the scenarios check

### A page exported

Scenario · `PageExported` · **held**

- Owner: trame
- Parameters: { exported: commands.Export, project: std/engine.TheProject, kept: std/tooling.FilesKept, words: documents/page.PageWords, say: commands.CommandWords, exit: std/system.ExitStatus, checks: scenarios.ScenarioWords }
- Verifies: Export, The small project, served, Which project the scenarios compile
- In: Served
- Depends on: Export, What the commands say, What the scenarios check

### A payload of the graph

Scenario · `PayloadOfTheSmallProject` · **held**

- Owner: trame
- Parameters: { payload: commands.Payload, differences: commands.PayloadDifferences, say: commands.CommandWords, exit: std/system.ExitStatus, counts: std/algebra.Counts, checks: scenarios.ScenarioWords }
- Verifies: Payload, A date's documents as today's, What the last change changed, Which project the scenarios compile
- In: Test
- Depends on: Payload, What the last change changed, What the commands say, What the scenarios check

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
- Parameters: { plan: commands.Plan, project: std/engine.TheProject, files: std/tooling.Files, say: commands.CommandWords, lines: documents/text.TerminalText, checks: scenarios.ScenarioWords, exit: std/system.ExitStatus, counts: std/algebra.Counts }
- Verifies: Plan, Two builds compared, Which project the scenarios compile
- In: Test
- Depends on: Plan, What the commands say, What the scenarios check

### Without a build, a plan says so

Scenario · `PlanWithoutABuild` · **held**

- Owner: trame
- Parameters: { plan: commands.Plan, project: std/engine.TheProject, say: commands.CommandWords, checks: scenarios.ScenarioWords, exit: std/system.ExitStatus }
- Verifies: Plan
- In: Test
- Depends on: Plan, What the commands say, What the scenarios check

### A snapshot writes the graph in force

Scenario · `SnapshotTaken` · **held**

- Owner: trame
- Parameters: { snapshot: commands.Snapshot, project: std/engine.TheProject, files: std/tooling.Files, written: documents/rendering.FileRendering, say: commands.CommandWords, checks: scenarios.ScenarioWords, exit: std/system.ExitStatus, sequences: std/algebra.Sequences }
- Verifies: Snapshot, Which project the scenarios compile
- In: Test
- Depends on: Snapshot, What the commands say, What the scenarios check

### A view answers its document

Scenario · `ViewAnswersItsDocument` · **held**

- Owner: trame
- Parameters: { view: commands.View, project: std/engine.TheProject, refused: commands.ViewRefused, views: scenarios.ScenarioViews, checks: scenarios.ScenarioWords, exit: std/system.ExitStatus }
- Verifies: View, Why a view gives no document, said, Which project the scenarios compile
- In: Test
- Depends on: View, Why a view gives no document, said, Views the scenarios ask for, What the scenarios check

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
