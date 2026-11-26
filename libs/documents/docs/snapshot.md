# Snapshot

*The exact state expected on 26 November 2026, without history: the values in force, without the amendments that produced them.*

## Documents · Language

### How a number is written

Decision · `NumberDisplay`

- Decided by: trame
- Value: { base: 10, decimals: 2 }

### The language of the documents

Port · `DocumentLanguage`

- Owner: trame
- Declared effects: 

### Dates

Function · `Dates` · **held**

- Owner: trame
- Parameters: { language: language.DocumentLanguage }
- Serves: Documents rendered once, for every project
- Depends on: The language of the documents

### Lists

Function · `Lists` · **held**

- Owner: trame
- Parameters: { language: language.DocumentLanguage }
- Serves: Documents rendered once, for every project
- Depends on: The language of the documents

### Punctuation

Function · `Punctuation` · **held**

- Owner: trame
- Parameters: { language: language.DocumentLanguage }
- Serves: Documents rendered once, for every project
- Depends on: The language of the documents

### Values with their units

Function · `Units` · **held**

- Owner: trame
- Parameters: { display: language.NumberDisplay, counts: std/algebra.Counts, values: std/algebra.ValueTypes }
- Serves: Documents rendered once, for every project
- Depends on: How a number is written

## Documents · Packages

### The library of continuous integration

Package · `ContinuousIntegration`

- Owner: trame
- Name: ci
- Version: 0.8.0
- How it joins the graph: library
- Where it comes from: path
- Its path: ../../ci/releases/0.8.0
- Serves: Documents rendered once, for every project

### Trame

Package · `Language`

- Owner: trame
- Name: trame
- Version: 129
- How it joins the graph: language
- Its path: ../../generations/g129
- Serves: Documents rendered once, for every project

### The people of the repository

Package · `People`

- Owner: trame
- Name: team
- Version: 0.1.0
- How it joins the graph: library
- Where it comes from: path
- Its path: ../team/releases/0.1.0
- Serves: Documents rendered once, for every project

### std

Package · `StandardLibrary`

- Owner: trame
- Name: std
- Version: 0.29.0
- How it joins the graph: library
- Its path: ../../std/releases/0.29.0
- Serves: Documents rendered once, for every project

## Documents · Product

### Documents rendered once, for every project

Goal · `RenderedOnce`

- Owner: trame

## Documents · Releases

### Version 0.1.0

Release · `R0_1_0`

- Released by: trame
- Version: 0.1.0
- Released on: 2026-11-26
- What changes: the language of the documents: the port DocumentLanguage, with Dates, Lists, Punctuation and Units over it
- Fingerprint: 1bba695ab87a7f69
- Language: shared
- Serves: Documents rendered once, for every project

## Documents · Scenarios

### What the scenarios read and expect

Decision · `Expected`

- Decided by: trame
- Value: { day: 2026-10-17, long: 17 October 2026, short: 17 Oct, shortWithYear: 17 Oct 2026, month: Oct, items: A, B, C, joined: A, , , B,  and , C, number: 0.67, written: 0.67, units: min, 60, s, 1, whole: 120, inLarger: 2, notWhole: 90, inSmaller: 90 }

### The language of the scenarios

Decision · `ScenarioLanguage`

- Decided by: trame
- Value: { tag: en-GB, punctuation: { parts:  · , items: , , givenBy:  ← , opensAside:  (, closesAside: ), clauses: ; , introduces: : , equals:  = , absent: — } }

### Written in the language of the scenarios

Function · `WrittenForTheScenarios` · **held**

- Owner: trame
- Parameters: { language: scenarios.ScenarioLanguage }
- Implements: The language of the documents
- Depends on: The language of the scenarios

### What the scenarios check

Message catalog · `ScenarioWords`

- Owner: trame

### The scenarios' language

Technical choice · `InTheScenariosLanguage` · **held**

- Decided by: trame
- Context: A project writes its documents in the language its engine speaks: the library's scenarios decide one of their own, the one Trame speaks.
- Chooses: Written in the language of the scenarios
- In: Test
- Serves: Documents rendered once, for every project

### Test

Environment · `Test`

- Owner: trame
- The build evaluates here: true

### The language of the documents, written

Scenario · `LanguageWritten` · **held**

- Owner: trame
- Parameters: { dates: language.Dates, lists: language.Lists, punctuation: language.Punctuation, units: language.Units, language: scenarios.ScenarioLanguage, expected: scenarios.Expected, checks: scenarios.ScenarioWords }
- Verifies: Dates, Lists, Punctuation, Values with their units, Written in the language of the scenarios
- In: Test
- Depends on: Dates, Lists, Punctuation, Values with their units, The language of the scenarios, What the scenarios read and expect, What the scenarios check

## Documents · SDLC

### How a pull request is checked on GitHub

Decision · `PullRequestsOnGitHub`

- Decided by: trame
- Value: { on: { pullRequests: main }, job: documents, runsOn: ubuntu-24.04, node: 22, artefacts: { days: 30 }, pullRequest: { review: false, merge: onceItHoldsUnlessDecided } }
- Rejected: Only when a pull request touches the project, GitHub keeps a pull request waiting for a check it requires and that never ran; Merged by GitHub whatever it changes, what people decided would reach main without a person

### The pull requests' workflow

Artefact · `PullRequestWorkflow` · **unknown**

- Owner: trame
- Path: ../../.github/workflows/documents-pull-request.yml
- Media type: application/yaml
- Runs elsewhere: The next version
- Its writer's settings: How a pull request is checked on GitHub

### The renderers of documents

Artefact · `TheLibrary` · **unknown**

- Owner: trame
- Path: src
- A version of the project: true

### The next version

Shipment · `NextVersion` · **unknown**

- Owner: trame
- Target: version
- Ships: The renderers of documents
- Follows the policy: How a version is made

### The files that run it elsewhere

Shipment · `RunnersWritten` · **unknown**

- Owner: trame
- Target: repository
- Ships: The pull requests' workflow

### Its code verified

Obligation · `CodeVerified`

- Owner: trame
- A gap weighs: error
- Serves: Documents rendered once, for every project

### Its decisions applied

Obligation · `DecisionsApplied`

- Owner: trame
- Serves: Documents rendered once, for every project

### Its packages safe

Obligation · `PackagesSafe`

- Owner: trame
- Serves: Documents rendered once, for every project

### Its requirements held

Obligation · `RequirementsServed`

- Owner: trame
- Serves: Documents rendered once, for every project

### How a version is made

Policy · `VersionMode`

- Owner: trame
- Its obligations: Its code verified, Its requirements held, Its decisions applied, Its packages safe
