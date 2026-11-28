# Pipelines

*What trame ship runs for each shipment on 30 October 2026, in order, as the engine computes it: its artefacts produced, the checks a program makes, the obligations to prove, the programs that deploy it, the dossier.*

<a id="IntoMain"></a>

## Into the main branch

> **Into the main branch does not ship yet: 50 of 54 obligations hold.**

For the target main; its programs are assembled for [Local](architecture.md#Local).

Run elsewhere by [The pull requests' workflow](sdlc.md#PullRequestWorkflow), written from this pipeline by trame ship.

```mermaid
flowchart TB
  n0["The candidate engine<br/><small>Artefact</small>"]:::unknown
  n1["Trame on the command line<br/><small>Component</small>"]:::neutral
  n2["The engine<br/><small>Artefact</small>"]:::unknown
  n3["The machine has what Trame needs<br/><small>Check</small>"]:::unknown
  n4["trame plan runs in the engine<br/><small>Check</small>"]:::unknown
  n5["Plan<br/><small>Entry point</small>"]:::held
  n6["The candidate runs on the machine<br/><small>Check</small>"]:::unknown
  n7["Ask the machine<br/><small>Entry point</small>"]:::held
  n8["Effects come from the vocabulary<br/><small>Architecture rule</small>"]:::held
  n9["Only commands write<br/><small>Architecture rule</small>"]:::held
  n10["Rendering does not read the graph<br/><small>Architecture rule</small>"]:::held
  n11["A project repaired<br/><small>Scenario</small>"]:::held
  n12["An advance, in memory<br/><small>Scenario</small>"]:::held
  n13["A value amended<br/><small>Scenario</small>"]:::held
  n14["A component assembled<br/><small>Scenario</small>"]:::held
  n15["The packages audited<br/><small>Scenario</small>"]:::held
  n16["The build writes the same documents as the engine in place<br/><small>Scenario</small>"]:::held
  n17["A command of a library the project chooses<br/><small>Scenario</small>"]:::held
  n18["A command of the project<br/><small>Scenario</small>"]:::held
  n19["A view in the terminal<br/><small>Scenario</small>"]:::held
  n20["The page delivered<br/><small>Scenario</small>"]:::held
  n21["trame dev<br/><small>Scenario</small>"]:::held
  n22["The doctor<br/><small>Scenario</small>"]:::held
  n23["The graph in the intermediate format<br/><small>Scenario</small>"]:::held
  n24["An example's output written again<br/><small>Scenario</small>"]:::held
  n25["The examples of a project, met<br/><small>Scenario</small>"]:::held
  n26["The page exported<br/><small>Scenario</small>"]:::held
  n27["A project started<br/><small>Scenario</small>"]:::held
  n28["A build planned<br/><small>Scenario</small>"]:::held
  n29["The engine's API<br/><small>Scenario</small>"]:::held
  n30["Declarations published<br/><small>Scenario</small>"]:::held
  n31["A published value changed<br/><small>Scenario</small>"]:::held
  n32["Evidence given for someone<br/><small>Scenario</small>"]:::held
  n33["Shipments run, evidence given<br/><small>Scenario</small>"]:::held
  n34["The registry filled<br/><small>Scenario</small>"]:::held
  n35["A library released<br/><small>Scenario</small>"]:::held
  n36["A component run<br/><small>Scenario</small>"]:::held
  n37["Stages shipped in order<br/><small>Scenario</small>"]:::held
  n38["The snapshot, taken by its command<br/><small>Scenario</small>"]:::held
  n39["The laws, tested by their command<br/><small>Scenario</small>"]:::held
  n40["The packages upgraded<br/><small>Scenario</small>"]:::held
  n41["The manifest written<br/><small>Scenario</small>"]:::held
  n42["The documents write in the decided language<br/><small>Scenario</small>"]:::held
  n43["A body amended runs amended<br/><small>Scenario</small>"]:::held
  n44["A library carries kinds<br/><small>Scenario</small>"]:::held
  n45["The described engine compiles the example<br/><small>Scenario</small>"]:::held
  n46["EngineReckons<br/><small>Scenario</small>"]:::held
  n47["A project judges harder, never softer<br/><small>Scenario</small>"]:::held
  n48["The laws of the kinds hold<br/><small>Scenario</small>"]:::held
  n49["The page of the graph<br/><small>Scenario</small>"]:::held
  n50["The command line<br/><small>Scenario</small>"]:::held
  n51["A body is read and checked<br/><small>Scenario</small>"]:::held
  n52["Add-ons, in the order chosen<br/><small>Scenario</small>"]:::held
  n53["A generation advanced in one command<br/><small>Scenario</small>"]:::held
  n54["The repository is set as the graph decides<br/><small>Scenario</small>"]:::held
  n55["The graph page is opened as a person would<br/><small>Scenario</small>"]:::held
  n56["Trame's settings, as std's commands read them<br/><small>Scenario</small>"]:::held
  n57["Into the main branch<br/><small>Shipment</small>"]:::unknown
  n22 -->|Verifies| n7
  n22 -->|Depends on| n7
  n7 -->|Part of| n1
  n6 -->|Checks| n0
  n6 -->|Run by| n7
  n0 -->|Produced by| n1
  n57 -->|Ships| n2
  n57 -->|Requires| n3
  n57 -->|Requires| n4
  n4 -->|Run by| n5
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Its steps, one rank per stage: produce, check, prove, deploy, record.*

|  | Stage | Step | Run by | Why | Status | Latest evidence |
|---|---|---|---|---|---|---|
| 1 | produce | [The candidate engine](sdlc.md#EngineCandidate) · `out/local/trame-cli.ts` | [Trame on the command line](architecture.md#TrameCli) | — | **unknown** | 30 October 2026 by claude  |
| 2 | produce | [The engine](sdlc.md#TheEngine) · `src` | — | — | **unknown** |  |
| 3 | check | [The machine has what Trame needs](sdlc.md#MachineAsked) | `trame doctor`, signed by [Trame's maintainers](sdlc.md#Maintainers) | — | **unknown** |  |
| 4 | check | [trame plan runs in the engine](sdlc.md#PlanRunsInTheEngine) | [Plan](../libs/commands/releases/0.5.0/docs/commands.md#Plan), signed by [Trame's maintainers](sdlc.md#Maintainers) | — | **unknown** |  |
| 5 | check | [The candidate runs on the machine](sdlc.md#CandidateRunsOnTheMachine) | [Ask the machine](commands.md#Doctor), signed by [Trame's maintainers](sdlc.md#Maintainers) | — | **unknown** | passed, 30 October 2026 by claude  |
| 6 | prove | The foundations | itself | every shipment: no literal in a body, a sound graph | **held** |  |
| 7 | prove | [The engine](sdlc.md#TheEngine) | — | the shipment | **unknown** |  |
| 8 | prove | [The machine has what Trame needs](sdlc.md#MachineAsked) | by hand, signed by [Trame's maintainers](sdlc.md#Maintainers) | the shipment | **unknown** |  |
| 9 | prove | [trame plan runs in the engine](sdlc.md#PlanRunsInTheEngine) | [Plan](../libs/commands/releases/0.5.0/docs/commands.md#Plan), signed by [Trame's maintainers](sdlc.md#Maintainers) | the shipment | **unknown** |  |
| 10 | prove | [Effects come from the vocabulary](architecture.md#KnownEffects) | — | [The rules of the architecture hold](sdlc.md#ArchitectureRuled) | **held** |  |
| 11 | prove | [Only commands write](architecture.md#OnlyCommandsWrite) | — | [The rules of the architecture hold](sdlc.md#ArchitectureRuled) | **held** |  |
| 12 | prove | [Rendering does not read the graph](architecture.md#RenderingWithoutGraph) | — | [The rules of the architecture hold](sdlc.md#ArchitectureRuled) | **held** |  |
| 13 | prove | [A project repaired](command-scenarios.md#ProjectRepaired) | — | [The engine is verified](sdlc.md#EngineVerified) via [The add-ons of a command the engine keeps](commands.md#AddOns) | **held** |  |
| 14 | prove | [An advance, in memory](command-scenarios.md#AdvanceInMemory) | — | [The engine is verified](sdlc.md#EngineVerified) via [Advance](commands.md#Advance) | **held** |  |
| 15 | prove | [A value amended](command-scenarios.md#ValueAmended) | — | [The engine is verified](sdlc.md#EngineVerified) via [Amend](commands.md#Amend) | **held** |  |
| 16 | prove | [A component assembled](command-scenarios.md#ComponentAssembled) | — | [The engine is verified](sdlc.md#EngineVerified) via [Assemble a component](commands.md#Assemble) | **held** |  |
| 17 | prove | [The packages audited](command-scenarios.md#PackagesAudited) | — | [The engine is verified](sdlc.md#EngineVerified) via [Audit the packages](commands.md#Audit) | **held** |  |
| 18 | prove | [The build writes the same documents as the engine in place](scenarios.md#BuildLikeBefore) | — | [The engine is verified](sdlc.md#EngineVerified) via [Build](commands.md#Build) | **held** |  |
| 19 | prove | [A command of a library the project chooses](command-scenarios.md#LibraryCommandRun) | — | [The engine is verified](sdlc.md#EngineVerified) via [A command of the project, or a view](commands.md#CommandOrView) | **held** |  |
| 20 | prove | [A command of the project](command-scenarios.md#ProjectCommandRun) | — | [The engine is verified](sdlc.md#EngineVerified) via [A command of the project, or a view](commands.md#CommandOrView) | **held** |  |
| 21 | prove | [A view in the terminal](command-scenarios.md#ViewsInTheTerminal) | — | [The engine is verified](sdlc.md#EngineVerified) via [A command of the project, or a view](commands.md#CommandOrView) | **held** |  |
| 22 | prove | [The page delivered](command-scenarios.md#PageDelivered) | — | [The engine is verified](sdlc.md#EngineVerified) via [Deliver](commands.md#Deliver) | **held** |  |
| 23 | prove | [trame dev](command-scenarios.md#DevFollowsTheGraph) | — | [The engine is verified](sdlc.md#EngineVerified) via [Start trame dev](commands.md#Dev) | **held** |  |
| 24 | prove | [The doctor](command-scenarios.md#DoctorAsks) | — | [The engine is verified](sdlc.md#EngineVerified) via [Ask the machine](commands.md#Doctor) | **held** |  |
| 25 | prove | [The graph in the intermediate format](command-scenarios.md#PayloadOfTheGraph) | — | [The engine is verified](sdlc.md#EngineVerified) via [Payload](commands.md#EmitPayload) | **held** |  |
| 26 | prove | [An example's output written again](command-scenarios.md#ExampleOutputRewritten) | — | [The engine is verified](sdlc.md#EngineVerified) via [Rewriting an example](commands.md#ExampleRewriting) | **held** |  |
| 27 | prove | [The examples of a project, met](command-scenarios.md#ExamplesMet) | — | [The engine is verified](sdlc.md#EngineVerified) via [Examples](commands.md#Examples) | **held** |  |
| 28 | prove | [The page exported](command-scenarios.md#PageExported) | — | [The engine is verified](sdlc.md#EngineVerified) via [Export the page](commands.md#Export) | **held** |  |
| 29 | prove | [A project started](command-scenarios.md#ProjectStarted) | — | [The engine is verified](sdlc.md#EngineVerified) via [Start a project](commands.md#Init) | **held** |  |
| 30 | prove | [A build planned](command-scenarios.md#BuildPlanned) | — | [The engine is verified](sdlc.md#EngineVerified) via [Plan a build](commands.md#Plan) | **held** |  |
| 31 | prove | [The engine's API](command-scenarios.md#EngineApiGiven) | — | [The engine is verified](sdlc.md#EngineVerified) via [Preparation](commands.md#Preparation) | **held** |  |
| 32 | prove | [Declarations published](command-scenarios.md#DeclarationsPublished) | — | [The engine is verified](sdlc.md#EngineVerified) via [Publish](commands.md#Publish) | **held** |  |
| 33 | prove | [A published value changed](command-scenarios.md#PublishedValueChanged) | — | [The engine is verified](sdlc.md#EngineVerified) via [Publish](commands.md#Publish) | **held** |  |
| 34 | prove | [Evidence given for someone](command-scenarios.md#EvidenceForSomeone) | — | [The engine is verified](sdlc.md#EngineVerified) via [Record evidence](commands.md#RecordEvidence) | **held** |  |
| 35 | prove | [Shipments run, evidence given](command-scenarios.md#ShipmentsRun) | — | [The engine is verified](sdlc.md#EngineVerified) via [Record evidence](commands.md#RecordEvidence) | **held** |  |
| 36 | prove | [The registry filled](command-scenarios.md#RegistryFilled) | — | [The engine is verified](sdlc.md#EngineVerified) via [Fill the registry](commands.md#Registry) | **held** |  |
| 37 | prove | [A library released](command-scenarios.md#LibraryReleased) | — | [The engine is verified](sdlc.md#EngineVerified) via [Release a version](commands.md#Release) | **held** |  |
| 38 | prove | [A component run](command-scenarios.md#ComponentRun) | — | [The engine is verified](sdlc.md#EngineVerified) via [Run a component](commands.md#Run) | **held** |  |
| 39 | prove | [Stages shipped in order](command-scenarios.md#StagesShipped) | — | [The engine is verified](sdlc.md#EngineVerified) via [Ship](commands.md#Ship) | **held** |  |
| 40 | prove | [The snapshot, taken by its command](command-scenarios.md#SnapshotTaken) | — | [The engine is verified](sdlc.md#EngineVerified) via [Take the snapshot](commands.md#TakeSnapshot) | **held** |  |
| 41 | prove | [The laws, tested by their command](command-scenarios.md#LawsTested) | — | [The engine is verified](sdlc.md#EngineVerified) via [Test the laws](commands.md#TestKinds) | **held** |  |
| 42 | prove | [The packages upgraded](command-scenarios.md#PackagesUpgraded) | — | [The engine is verified](sdlc.md#EngineVerified) via [Upgrade](commands.md#Upgrade) | **held** |  |
| 43 | prove | [The manifest written](command-scenarios.md#ManifestWritten) | — | [The engine is verified](sdlc.md#EngineVerified) via [Write the manifest](commands.md#WriteManifest) | **held** |  |
| 44 | prove | [The documents write in the decided language](scenarios.md#DocumentWords) | — | [The engine is verified](sdlc.md#EngineVerified) via [The documents in Trame's language](documents.md#OurDocumentLanguage) | **held** |  |
| 45 | prove | [A body amended runs amended](scenarios.md#AmendedBodiesRun) | — | [The engine is verified](sdlc.md#EngineVerified) via [Assembly](engine.md#Assembly) | **held** |  |
| 46 | prove | [A library carries kinds](command-scenarios.md#KindsCarried) | — | [The engine is verified](sdlc.md#EngineVerified) via [Compiler](engine.md#Compiler) | **held** |  |
| 47 | prove | [The described engine compiles the example](scenarios.md#CompileExample) | — | [The engine is verified](sdlc.md#EngineVerified) via [Compiler](engine.md#Compiler) | **held** |  |
| 48 | prove | [EngineReckons](scenarios.md#EngineReckons) | — | [The engine is verified](sdlc.md#EngineVerified) via [Cycles](engine.md#Cycles) | **held** |  |
| 49 | prove | [A project judges harder, never softer](scenarios.md#JudgingHarder) | — | [The engine is verified](sdlc.md#EngineVerified) via [Judged harder](engine.md#JudgedHarder) | **held** |  |
| 50 | prove | [The laws of the kinds hold](scenarios.md#KindLaws) | — | [The engine is verified](sdlc.md#EngineVerified) via [Laws](engine.md#Laws) | **held** |  |
| 51 | prove | [The page of the graph](command-scenarios.md#PageOfTheGraph) | — | [The engine is verified](sdlc.md#EngineVerified) via [The page's program, bundled](page.md#PageScript) | **held** |  |
| 52 | prove | [The candidate runs on the machine](sdlc.md#CandidateRunsOnTheMachine) | [Ask the machine](commands.md#Doctor), signed by [Trame's maintainers](sdlc.md#Maintainers) | [The engine is verified](sdlc.md#EngineVerified) via [System files, for reading](platform.md#DiskReading) | **unknown** | passed, 30 October 2026 by claude  |
| 53 | prove | [The command line](command-scenarios.md#CommandLineChooses) | — | [The engine is verified](sdlc.md#EngineVerified) via [Terminal in memory](platform.md#MemoryTerminal) | **held** |  |
| 54 | prove | [A body is read and checked](command-scenarios.md#BodiesReadAndChecked) | — | [The engine is verified](sdlc.md#EngineVerified) via [tree-sitter in WebAssembly](platform.md#WebTreeSitter) | **held** |  |
| 55 | prove | [Add-ons, in the order chosen](scenarios.md#AddOnsInOrder) | — | [The engine is verified](sdlc.md#EngineVerified) via [The first sample add-on](scenarios.md#FirstSampleAddOn) | **held** |  |
| 56 | prove | [A generation advanced in one command](sdlc.md#AdvancedInOneCommand) | — | [The engine is verified](sdlc.md#EngineVerified) via [Advance](sdlc.md#AdvanceAGeneration) | **held** |  |
| 57 | prove | [The repository is set as the graph decides](sdlc.md#SettingTheRepository) | — | [The engine is verified](sdlc.md#EngineVerified) via [Set the repository's settings](sdlc.md#ApplyTheRepositorySettings) | **held** |  |
| 58 | prove | [The graph page is opened as a person would](sdlc.md#OpeningTheGraphPage) | — | [The engine is verified](sdlc.md#EngineVerified) via [What the graph page is asked](sdlc.md#GraphPageSelectors) | **held** |  |
| 59 | prove | [Trame's settings, as std's commands read them](sdlc.md#OurCommandsSettled) | — | [The engine is verified](sdlc.md#EngineVerified) via [How a version is carried across Trame's repository](sdlc.md#OurPropagation) | **held** |  |
| 60 | record | [Into the main branch](sdlc.md#IntoMain) | — | — | **unknown** |  |

`trame ship IntoMain --by <name>`

<a id="NextGeneration"></a>

## The next generation

> **The next generation does not ship yet: 105 of 111 obligations hold.**

For the target generation; its programs are assembled for [Local](architecture.md#Local).

```mermaid
flowchart TB
  n0["The candidate engine<br/><small>Artefact</small>"]:::unknown
  n1["Trame on the command line<br/><small>Component</small>"]:::neutral
  n2["The page's program<br/><small>Artefact</small>"]:::unknown
  n3["The page in a browser<br/><small>Component</small>"]:::neutral
  n4["The graph page<br/><small>Artefact</small>"]:::unknown
  n5["Export the page<br/><small>Entry point</small>"]:::held
  n6["The candidate plays the laws<br/><small>Check</small>"]:::unknown
  n7["Test the laws<br/><small>Entry point</small>"]:::held
  n8["The candidate runs on the machine<br/><small>Check</small>"]:::unknown
  n9["Ask the machine<br/><small>Entry point</small>"]:::held
  n10["The graph page opens<br/><small>Check</small>"]:::unknown
  n11["Open the graph page<br/><small>Entry point</small>"]:::held
  n12["The engine: a graph like any product's<br/><small>Architecture decision</small>"]:::held
  n13["The words are in catalogs<br/><small>Architecture decision</small>"]:::held
  n14["A library is a Trame project, imported by path<br/><small>Architecture decision</small>"]:::held
  n15["The graph is written in TypeScript<br/><small>Architecture decision</small>"]:::held
  n16["A library is imported by its name<br/><small>Architecture decision</small>"]:::held
  n17["The prelude and the compiler know no kind of node<br/><small>Architecture decision</small>"]:::held
  n18["A package is used by its name<br/><small>Architecture decision</small>"]:::held
  n19["Kinds and views: the vocabulary, as reviewed files<br/><small>Architecture decision</small>"]:::held
  n20["The punctuation is the language's<br/><small>Architecture decision</small>"]:::held
  n21["A catalog counts in its language<br/><small>Architecture decision</small>"]:::held
  n22["The prelude: the runtime of the language<br/><small>Architecture decision</small>"]:::held
  n23["A key is made of its parts<br/><small>Architecture decision</small>"]:::held
  n24["The data a product carries is a dataset<br/><small>Architecture decision</small>"]:::held
  n25["The language receives the graph's values<br/><small>Architecture decision</small>"]:::held
  n26["The traversal API is the only way to read the graph<br/><small>Architecture decision</small>"]:::held
  n27["A literal in a body is an error<br/><small>Architecture decision</small>"]:::held
  n28["A literal in a kind or a view is an error<br/><small>Architecture decision</small>"]:::held
  n29["tree-sitter says what it keeps aside<br/><small>Architecture decision</small>"]:::held
  n30["Every language is read alike, with tree-sitter<br/><small>Architecture decision</small>"]:::held
  n31["Code holds no hidden decision<br/><small>Architecture decision</small>"]:::held
  n32["What a writer writes is read back before it is written<br/><small>Architecture decision</small>"]:::held
  n33["An undecided value blocks; it does not crash<br/><small>Architecture decision</small>"]:::held
  n34["Who acts is declared<br/><small>Architecture decision</small>"]:::held
  n35["A change to a node is a claim<br/><small>Architecture decision</small>"]:::held
  n36["The graph: the description of a product<br/><small>Architecture decision</small>"]:::held
  n37["The laws are requirements<br/><small>Architecture decision</small>"]:::held
  n38["Without evidence, a status is unknown<br/><small>Architecture decision</small>"]:::held
  n39["The source carries the history<br/><small>Architecture decision</small>"]:::held
  n40["One output for each reader<br/><small>Architecture decision</small>"]:::held
  n41["The page is the library's<br/><small>Architecture decision</small>"]:::held
  n42["Generations: frozen engines<br/><small>Architecture decision</small>"]:::held
  n43["Trame builds Trame<br/><small>Architecture decision</small>"]:::held
  n44["A product is delivered by a node of the graph<br/><small>Architecture decision</small>"]:::held
  n45["Effects come from the vocabulary<br/><small>Architecture rule</small>"]:::held
  n46["Only commands write<br/><small>Architecture rule</small>"]:::held
  n47["Rendering does not read the graph<br/><small>Architecture rule</small>"]:::held
  n48["Grammar of TypeScript<br/><small>Package</small>"]:::held
  n49["tsx<br/><small>Package</small>"]:::held
  n50["TypeScript<br/><small>Package</small>"]:::held
  n51["Types of Node.js<br/><small>Package</small>"]:::held
  n52["web-tree-sitter<br/><small>Package</small>"]:::held
  n53["Grammar of HTML<br/><small>Package</small>"]:::held
  n54["Grammar of CSS<br/><small>Package</small>"]:::held
  n55["Grammar of HCL<br/><small>Package</small>"]:::held
  n56["esbuild<br/><small>Package</small>"]:::held
  n57["The command line<br/><small>Scenario</small>"]:::held
  n58["EngineReckons<br/><small>Scenario</small>"]:::held
  n59["The described engine compiles the example<br/><small>Scenario</small>"]:::held
  n60["A library carries kinds<br/><small>Scenario</small>"]:::held
  n61["Shipments run, evidence given<br/><small>Scenario</small>"]:::held
  n62["An advance, in memory<br/><small>Scenario</small>"]:::held
  n63["The documents write in the decided language<br/><small>Scenario</small>"]:::held
  n64["A body is read and checked<br/><small>Scenario</small>"]:::held
  n65["A component assembled<br/><small>Scenario</small>"]:::held
  n66["A body amended runs amended<br/><small>Scenario</small>"]:::held
  n67["The doctor<br/><small>Scenario</small>"]:::held
  n68["The manifest written<br/><small>Scenario</small>"]:::held
  n69["The packages upgraded<br/><small>Scenario</small>"]:::held
  n70["A library released<br/><small>Scenario</small>"]:::held
  n71["The registry filled<br/><small>Scenario</small>"]:::held
  n72["A project judges harder, never softer<br/><small>Scenario</small>"]:::held
  n73["Stages shipped in order<br/><small>Scenario</small>"]:::held
  n74["The build writes the same documents as the engine in place<br/><small>Scenario</small>"]:::held
  n75["The laws of the kinds hold<br/><small>Scenario</small>"]:::held
  n76["A published value changed<br/><small>Scenario</small>"]:::held
  n77["A command of a library the project chooses<br/><small>Scenario</small>"]:::held
  n78["A command of the project<br/><small>Scenario</small>"]:::held
  n79["The graph in the intermediate format<br/><small>Scenario</small>"]:::held
  n80["The page exported<br/><small>Scenario</small>"]:::held
  n81["trame dev<br/><small>Scenario</small>"]:::held
  n82["The page of the graph<br/><small>Scenario</small>"]:::held
  n83["The engine's API<br/><small>Scenario</small>"]:::held
  n84["A value amended<br/><small>Scenario</small>"]:::held
  n85["The packages audited<br/><small>Scenario</small>"]:::held
  n86["A view in the terminal<br/><small>Scenario</small>"]:::held
  n87["The page delivered<br/><small>Scenario</small>"]:::held
  n88["A project repaired<br/><small>Scenario</small>"]:::held
  n89["An example's output written again<br/><small>Scenario</small>"]:::held
  n90["The examples of a project, met<br/><small>Scenario</small>"]:::held
  n91["A project started<br/><small>Scenario</small>"]:::held
  n92["A build planned<br/><small>Scenario</small>"]:::held
  n93["Declarations published<br/><small>Scenario</small>"]:::held
  n94["Evidence given for someone<br/><small>Scenario</small>"]:::held
  n95["A component run<br/><small>Scenario</small>"]:::held
  n96["The snapshot, taken by its command<br/><small>Scenario</small>"]:::held
  n97["The laws, tested by their command<br/><small>Scenario</small>"]:::held
  n98["The graph page is opened as a person would<br/><small>Scenario</small>"]:::held
  n99["A generation advanced in one command<br/><small>Scenario</small>"]:::held
  n100["The repository is set as the graph decides<br/><small>Scenario</small>"]:::held
  n101["Accept a candidate<br/><small>Requirement</small>"]:::held
  n102["Sort problems by severity<br/><small>Requirement</small>"]:::held
  n103["Ship only what holds<br/><small>Requirement</small>"]:::held
  n104["What belongs to a library<br/><small>Requirement</small>"]:::held
  n105["A release is settled<br/><small>Requirement</small>"]:::held
  n106["Answers without crashing<br/><small>Requirement</small>"]:::held
  n107["A blocking hole has an owner<br/><small>Requirement</small>"]:::held
  n108["The resolution returns only what it is given<br/><small>Requirement</small>"]:::held
  n109["Complete declaration<br/><small>Requirement</small>"]:::held
  n110["Complete declaration of a view<br/><small>Requirement</small>"]:::held
  n111["A hole says what is wrong by its code<br/><small>Requirement</small>"]:::held
  n112["Produces only the intermediate format<br/><small>Requirement</small>"]:::held
  n113["Same input, same answer<br/><small>Requirement</small>"]:::held
  n114["The resolution does not depend on the order<br/><small>Requirement</small>"]:::held
  n115["Without evidence, the status is unknown<br/><small>Requirement</small>"]:::held
  n116["Advance<br/><small>Entry point</small>"]:::held
  n117["The next generation<br/><small>Shipment</small>"]:::unknown
  n62 -->|Verifies| n116
  n62 -->|Depends on| n116
  n67 -->|Verifies| n9
  n67 -->|Depends on| n9
  n97 -->|Verifies| n7
  n97 -->|Depends on| n7
  n80 -->|Verifies| n5
  n80 -->|Depends on| n5
  n116 -->|Part of| n1
  n116 -->|Depends on| n101
  n9 -->|Part of| n1
  n5 -->|Part of| n1
  n7 -->|Part of| n1
  n114 -->|Refines| n113
  n114 -->|Depends on| n113
  n12 -->|Applied by| n1
  n12 -->|Applied by| n47
  n12 -->|Applied by| n46
  n12 -->|Applied by| n45
  n42 -->|Applied by| n116
  n42 -->|Applied by| n101
  n42 -->|Applied by| n74
  n14 -->|Applied by| n104
  n14 -->|Applied by| n116
  n16 -->|Applied by| n105
  n31 -->|Applied by| n45
  n31 -->|Applied by| n46
  n26 -->|Applied by| n47
  n18 -->|Applied by| n116
  n43 -->|Applied by| n116
  n43 -->|Applied by| n101
  n43 -->|Applied by| n59
  n43 -->|Applied by| n74
  n43 -->|Applied by| n75
  n38 -->|Applied by| n75
  n6 -->|Checks| n0
  n6 -->|Run by| n7
  n8 -->|Checks| n0
  n8 -->|Run by| n9
  n0 -->|Produced by| n1
  n4 -->|Produced by| n5
  n4 -->|Carries| n3
  n10 -->|Checks| n4
  n10 -->|Run by| n11
  n117 -->|Ships| n0
  n117 -->|Ships| n2
  n117 -->|Ships| n4
  n117 -->|Deployed by| n116
  n98 -->|Verifies| n11
  n98 -->|Depends on| n11
  n98 -->|Depends on| n4
  n11 -->|Depends on| n4
  n2 -->|Produced by| n3
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Its steps, one rank per stage: produce, check, prove, deploy, record.*

|  | Stage | Step | Run by | Why | Status | Latest evidence |
|---|---|---|---|---|---|---|
| 1 | produce | [The candidate engine](sdlc.md#EngineCandidate) · `out/local/trame-cli.ts` | [Trame on the command line](architecture.md#TrameCli) | — | **unknown** | 30 October 2026 by claude  |
| 2 | produce | [The page's program](sdlc.md#PageProgram) · `out/browser/page-app.ts` | [The page in a browser](../libs/documents/releases/0.5.1/docs/browser.md#PageApp) | — | **unknown** | 30 October 2026 by claude  |
| 3 | produce | [The graph page](sdlc.md#GraphPage) · `trame-page.html` | [Export the page](commands.md#Export) | — | **unknown** | 30 October 2026 by claude  |
| 4 | check | [The candidate plays the laws](sdlc.md#CandidateKeepsTheLaws) | [Test the laws](commands.md#TestKinds), signed by [Trame's maintainers](sdlc.md#Maintainers) | — | **unknown** | passed, 30 October 2026 by claude  |
| 5 | check | [The candidate runs on the machine](sdlc.md#CandidateRunsOnTheMachine) | [Ask the machine](commands.md#Doctor), signed by [Trame's maintainers](sdlc.md#Maintainers) | — | **unknown** | passed, 30 October 2026 by claude  |
| 6 | check | [The graph page opens](sdlc.md#GraphPageOpens) | [Open the graph page](sdlc.md#OpenTheGraphPage), signed by [Trame's maintainers](sdlc.md#Maintainers) | — | **unknown** | passed, 30 October 2026 by claude  |
| 7 | prove | The foundations | itself | every shipment: no literal in a body, a sound graph | **held** |  |
| 8 | prove | [The candidate engine](sdlc.md#EngineCandidate) | — | the shipment | **unknown** | 30 October 2026 by claude  |
| 9 | prove | [The graph page](sdlc.md#GraphPage) | — | the shipment | **unknown** | 30 October 2026 by claude  |
| 10 | prove | [The page's program](sdlc.md#PageProgram) | — | the shipment | **unknown** | 30 October 2026 by claude  |
| 11 | prove | [The engine: a graph like any product's](principles.md#EngineLayer) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [Trame on the command line](architecture.md#TrameCli) | **held** |  |
| 12 | prove | [The words are in catalogs](principles.md#WordsInCatalogs) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [Messages of the platform](messages.md#PlatformMessages) | **held** |  |
| 13 | prove | [A library is a Trame project, imported by path](principles.md#LibrariesAreProjects) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [What belongs to a library](libraries.md#LibraryOfAModule) | **held** |  |
| 14 | prove | [The graph is written in TypeScript](principles.md#GraphInTypeScript) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [TypeScript](typescript.md#TypeScript) | **held** |  |
| 15 | prove | [A library is imported by its name](principles.md#LibrariesByName) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [Project](engine.md#Project) | **held** |  |
| 16 | prove | [The prelude and the compiler know no kind of node](principles.md#NoKindInTheCore) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [Project](engine.md#Project) | **held** |  |
| 17 | prove | [A package is used by its name](principles.md#PackagesByName) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [Project](engine.md#Project) | **held** |  |
| 18 | prove | [Kinds and views: the vocabulary, as reviewed files](principles.md#VocabularyLayer) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [Project](engine.md#Project) | **held** |  |
| 19 | prove | [The punctuation is the language's](documents.md#PunctuationOfTheLanguage) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [Language](messages.md#Language) | **held** |  |
| 20 | prove | [A catalog counts in its language](messages.md#CountsInTheLanguage) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [Messages of the compiler](messages.md#CompilerMessages) | **held** |  |
| 21 | prove | [The prelude: the runtime of the language](principles.md#PreludeLayer) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [The prelude's public API](conventions.md#PreludeApi) | **held** |  |
| 22 | prove | [A key is made of its parts](principles.md#KeysOfParts) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [Static reading](engine.md#StaticAnalysis) | **held** |  |
| 23 | prove | [The data a product carries is a dataset](principles.md#DataAsDatasets) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [Fingerprints](engine.md#Fingerprints) | **held** |  |
| 24 | prove | [The language receives the graph's values](engine.md#TheLanguageReceivesTheGraph) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [Graph](engine.md#GraphApi) | **held** |  |
| 25 | prove | [The traversal API is the only way to read the graph](principles.md#OneWayToRead) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [Graph](engine.md#GraphApi) | **held** |  |
| 26 | prove | [A literal in a body is an error](principles.md#EveryLiteralDeclared) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [Syntax reader](syntax.md#SyntaxReader) | **held** |  |
| 27 | prove | [A literal in a kind or a view is an error](principles.md#NoLiteralInTheLanguage) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [Syntax reader](syntax.md#SyntaxReader) | **held** |  |
| 28 | prove | [tree-sitter says what it keeps aside](syntax.md#PredicatesAsTreeSitterReadsThem) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [Syntax reader](syntax.md#SyntaxReader) | **held** |  |
| 29 | prove | [Every language is read alike, with tree-sitter](syntax.md#ReadLanguagesAlike) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [Syntax reader](syntax.md#SyntaxReader) | **held** |  |
| 30 | prove | [Code holds no hidden decision](principles.md#NoHiddenDecision) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [Checks of a body](syntax.md#BodyChecks) | **held** |  |
| 31 | prove | [What a writer writes is read back before it is written](languages.md#ReadBackWhatIsWritten) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [Drivers](languages.md#Drivers) | **held** |  |
| 32 | prove | [An undecided value blocks; it does not crash](principles.md#UndecidedBlocks) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [Wiring](engine.md#Wiring) | **held** |  |
| 33 | prove | [Who acts is declared](principles.md#ActorsDeclared) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [Compiler](engine.md#Compiler) | **held** |  |
| 34 | prove | [A change to a node is a claim](principles.md#ChangesAreClaims) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [Compiler](engine.md#Compiler) | **held** |  |
| 35 | prove | [The graph: the description of a product](principles.md#GraphLayer) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [Compiler](engine.md#Compiler) | **held** |  |
| 36 | prove | [The laws are requirements](engine.md#LawsAreRequirements) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [Laws](engine.md#Laws) | **held** |  |
| 37 | prove | [Without evidence, a status is unknown](principles.md#UnknownWithoutEvidence) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [Laws](engine.md#Laws) | **held** |  |
| 38 | prove | [The source carries the history](principles.md#HistoryInTheSource) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [Lock](engine.md#Lock) | **held** |  |
| 39 | prove | [One output for each reader](principles.md#OneOutputPerReader) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [Machine outputs](engine.md#MachineOutputs) | **held** |  |
| 40 | prove | [The page is the library's](page.md#ThePageIsTheLibrarys) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [The page's program, bundled](page.md#PageScript) | **held** |  |
| 41 | prove | [Generations: frozen engines](principles.md#GenerationLayer) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [Accept a candidate](generations.md#AcceptCandidate) | **held** |  |
| 42 | prove | [Trame builds Trame](principles.md#TrameBuildsTrame) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [Accept a candidate](generations.md#AcceptCandidate) | **held** |  |
| 43 | prove | [A product is delivered by a node of the graph](principles.md#DeliveredByTheGraph) | — | [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) via [Style of a delivered page](delivery.md#DeliveredStyle) | **held** |  |
| 44 | prove | [Effects come from the vocabulary](architecture.md#KnownEffects) | — | [The rules of the architecture hold](sdlc.md#ArchitectureRuled) | **held** |  |
| 45 | prove | [Only commands write](architecture.md#OnlyCommandsWrite) | — | [The rules of the architecture hold](sdlc.md#ArchitectureRuled) | **held** |  |
| 46 | prove | [Rendering does not read the graph](architecture.md#RenderingWithoutGraph) | — | [The rules of the architecture hold](sdlc.md#ArchitectureRuled) | **held** |  |
| 47 | prove | [The candidate plays the laws](sdlc.md#CandidateKeepsTheLaws) | [Test the laws](commands.md#TestKinds), signed by [Trame's maintainers](sdlc.md#Maintainers) | [The candidate is checked by programs](sdlc.md#CandidateChecked) via [The candidate engine](sdlc.md#EngineCandidate) | **unknown** | passed, 30 October 2026 by claude  |
| 48 | prove | [The candidate runs on the machine](sdlc.md#CandidateRunsOnTheMachine) | [Ask the machine](commands.md#Doctor), signed by [Trame's maintainers](sdlc.md#Maintainers) | [The candidate is checked by programs](sdlc.md#CandidateChecked) via [The candidate engine](sdlc.md#EngineCandidate) | **unknown** | passed, 30 October 2026 by claude  |
| 49 | prove | [The graph page opens](sdlc.md#GraphPageOpens) | [Open the graph page](sdlc.md#OpenTheGraphPage), signed by [Trame's maintainers](sdlc.md#Maintainers) | [The candidate is checked by programs](sdlc.md#CandidateChecked) via [The graph page](sdlc.md#GraphPage) | **unknown** | passed, 30 October 2026 by claude  |
| 50 | prove | [Grammar of TypeScript](packages.md#TypeScriptGrammar) | — | [The packages are safe](sdlc.md#EnginePackagesSafe) via [TypeScript](typescript.md#TypeScript) | **held** | 29 October 2026 by   |
| 51 | prove | [tsx](packages.md#TsxPackage) | — | [The packages are safe](sdlc.md#EnginePackagesSafe) via [tsx loader](platform.md#TsxLoader) | **held** | 29 October 2026 by   |
| 52 | prove | [TypeScript](packages.md#TypeScriptPackage) | — | [The packages are safe](sdlc.md#EnginePackagesSafe) via [TypeScript compiler](platform.md#RealTypeScript) | **held** | 29 October 2026 by   |
| 53 | prove | [Types of Node.js](packages.md#NodeTypes) | — | [The packages are safe](sdlc.md#EnginePackagesSafe) via [TypeScript compiler](platform.md#RealTypeScript) | **held** | 29 October 2026 by   |
| 54 | prove | [web-tree-sitter](packages.md#WebTreeSitterPackage) | — | [The packages are safe](sdlc.md#EnginePackagesSafe) via [tree-sitter in WebAssembly](platform.md#WebTreeSitter) | **held** | 29 October 2026 by   |
| 55 | prove | [Grammar of HTML](packages.md#HtmlGrammar) | — | [The packages are safe](sdlc.md#EnginePackagesSafe) via [tree-sitter in WebAssembly](platform.md#WebTreeSitter) | **held** | 29 October 2026 by   |
| 56 | prove | [Grammar of CSS](packages.md#CssGrammar) | — | [The packages are safe](sdlc.md#EnginePackagesSafe) via [tree-sitter in WebAssembly](platform.md#WebTreeSitter) | **held** | 29 October 2026 by   |
| 57 | prove | [Grammar of HCL](packages.md#HclGrammar) | — | [The packages are safe](sdlc.md#EnginePackagesSafe) via [Terraform](terraform.md#Terraform) | **held** | 29 October 2026 by   |
| 58 | prove | [esbuild](packages.md#EsbuildPackage) | — | [The packages are safe](sdlc.md#EnginePackagesSafe) via [esbuild](platform.md#Esbuild) | **held** | 29 October 2026 by   |
| 59 | prove | [The command line](command-scenarios.md#CommandLineChooses) | — | [The engine is verified](sdlc.md#EngineVerified) via [Command line](platform.md#NodeCommandLine) | **held** |  |
| 60 | prove | [EngineReckons](scenarios.md#EngineReckons) | — | [The engine is verified](sdlc.md#EngineVerified) via [Cycles](engine.md#Cycles) | **held** |  |
| 61 | prove | [The described engine compiles the example](scenarios.md#CompileExample) | — | [The engine is verified](sdlc.md#EngineVerified) via [Trame's prelude](platform.md#TramePrelude) | **held** |  |
| 62 | prove | [A library carries kinds](command-scenarios.md#KindsCarried) | — | [The engine is verified](sdlc.md#EngineVerified) via [Project](engine.md#Project) | **held** |  |
| 63 | prove | [Shipments run, evidence given](command-scenarios.md#ShipmentsRun) | — | [The engine is verified](sdlc.md#EngineVerified) via [SHA-256 hashes](platform.md#NodeHashing) | **held** |  |
| 64 | prove | [An advance, in memory](command-scenarios.md#AdvanceInMemory) | — | [The engine is verified](sdlc.md#EngineVerified) via [The fingerprint of an engine](engine.md#EngineFingerprint) | **held** |  |
| 65 | prove | [The documents write in the decided language](scenarios.md#DocumentWords) | — | [The engine is verified](sdlc.md#EngineVerified) via [The documents in Trame's language](documents.md#OurDocumentLanguage) | **held** |  |
| 66 | prove | [A body is read and checked](command-scenarios.md#BodiesReadAndChecked) | — | [The engine is verified](sdlc.md#EngineVerified) via [tree-sitter in WebAssembly](platform.md#WebTreeSitter) | **held** |  |
| 67 | prove | [A component assembled](command-scenarios.md#ComponentAssembled) | — | [The engine is verified](sdlc.md#EngineVerified) via [TypeScript writer](typescript.md#TypeScriptWriter) | **held** |  |
| 68 | prove | [A body amended runs amended](scenarios.md#AmendedBodiesRun) | — | [The engine is verified](sdlc.md#EngineVerified) via [TypeScript writer](typescript.md#TypeScriptWriter) | **held** |  |
| 69 | prove | [The doctor](command-scenarios.md#DoctorAsks) | — | [The engine is verified](sdlc.md#EngineVerified) via [The runs of a project](engine.md#ProjectRuns) | **held** |  |
| 70 | prove | [The manifest written](command-scenarios.md#ManifestWritten) | — | [The engine is verified](sdlc.md#EngineVerified) via [Packages by their local path](platform.md#LocalPaths) | **held** |  |
| 71 | prove | [The packages upgraded](command-scenarios.md#PackagesUpgraded) | — | [The engine is verified](sdlc.md#EngineVerified) via [Packages by their local path](platform.md#LocalPaths) | **held** |  |
| 72 | prove | [A library released](command-scenarios.md#LibraryReleased) | — | [The engine is verified](sdlc.md#EngineVerified) via [Packages from the local registry](platform.md#LocalRegistry) | **held** |  |
| 73 | prove | [The registry filled](command-scenarios.md#RegistryFilled) | — | [The engine is verified](sdlc.md#EngineVerified) via [Packages from the local registry](platform.md#LocalRegistry) | **held** |  |
| 74 | prove | [A project judges harder, never softer](scenarios.md#JudgingHarder) | — | [The engine is verified](sdlc.md#EngineVerified) via [Judged harder](engine.md#JudgedHarder) | **held** |  |
| 75 | prove | [Stages shipped in order](command-scenarios.md#StagesShipped) | — | [The engine is verified](sdlc.md#EngineVerified) via [A shipment's pipeline](engine.md#ShipmentPipeline) | **held** |  |
| 76 | prove | [The build writes the same documents as the engine in place](scenarios.md#BuildLikeBefore) | — | [The engine is verified](sdlc.md#EngineVerified) via [Compilation API](engine.md#CompilationApi) | **held** |  |
| 77 | prove | [The laws of the kinds hold](scenarios.md#KindLaws) | — | [The engine is verified](sdlc.md#EngineVerified) via [Laws](engine.md#Laws) | **held** |  |
| 78 | prove | [A published value changed](command-scenarios.md#PublishedValueChanged) | — | [The engine is verified](sdlc.md#EngineVerified) via [Lock](engine.md#Lock) | **held** |  |
| 79 | prove | [A command of a library the project chooses](command-scenarios.md#LibraryCommandRun) | — | [The engine is verified](sdlc.md#EngineVerified) via [The project's commands](commands.md#ProjectCommands) | **held** |  |
| 80 | prove | [A command of the project](command-scenarios.md#ProjectCommandRun) | — | [The engine is verified](sdlc.md#EngineVerified) via [The project's commands](commands.md#ProjectCommands) | **held** |  |
| 81 | prove | [The graph in the intermediate format](command-scenarios.md#PayloadOfTheGraph) | — | [The engine is verified](sdlc.md#EngineVerified) via [Payload](engine.md#PayloadBuilder) | **held** |  |
| 82 | prove | [The page exported](command-scenarios.md#PageExported) | — | [The engine is verified](sdlc.md#EngineVerified) via [Date bundle](engine.md#DateBundle) | **held** |  |
| 83 | prove | [trame dev](command-scenarios.md#DevFollowsTheGraph) | — | [The engine is verified](sdlc.md#EngineVerified) via [Watching a project](engine.md#Watching) | **held** |  |
| 84 | prove | [The page of the graph](command-scenarios.md#PageOfTheGraph) | — | [The engine is verified](sdlc.md#EngineVerified) via [Page resources](platform.md#PageResources) | **held** |  |
| 85 | prove | [The engine's API](command-scenarios.md#EngineApiGiven) | — | [The engine is verified](sdlc.md#EngineVerified) via [Preparation](commands.md#Preparation) | **held** |  |
| 86 | prove | [A value amended](command-scenarios.md#ValueAmended) | — | [The engine is verified](sdlc.md#EngineVerified) via [An amendment prepared](commands.md#Amending) | **held** |  |
| 87 | prove | [The packages audited](command-scenarios.md#PackagesAudited) | — | [The engine is verified](sdlc.md#EngineVerified) via [Audit the packages](commands.md#Audit) | **held** |  |
| 88 | prove | [A view in the terminal](command-scenarios.md#ViewsInTheTerminal) | — | [The engine is verified](sdlc.md#EngineVerified) via [Render a view](commands.md#RenderView) | **held** |  |
| 89 | prove | [The page delivered](command-scenarios.md#PageDelivered) | — | [The engine is verified](sdlc.md#EngineVerified) via [The names a bundle is led by](delivery.md#NamesLed) | **held** |  |
| 90 | prove | [A project repaired](command-scenarios.md#ProjectRepaired) | — | [The engine is verified](sdlc.md#EngineVerified) via [The add-ons of a command the engine keeps](commands.md#AddOns) | **held** |  |
| 91 | prove | [An example's output written again](command-scenarios.md#ExampleOutputRewritten) | — | [The engine is verified](sdlc.md#EngineVerified) via [Rewriting an example](commands.md#ExampleRewriting) | **held** |  |
| 92 | prove | [The examples of a project, met](command-scenarios.md#ExamplesMet) | — | [The engine is verified](sdlc.md#EngineVerified) via [Examples](commands.md#Examples) | **held** |  |
| 93 | prove | [A project started](command-scenarios.md#ProjectStarted) | — | [The engine is verified](sdlc.md#EngineVerified) via [A module of references](commands.md#ReferencesModule) | **held** |  |
| 94 | prove | [A build planned](command-scenarios.md#BuildPlanned) | — | [The engine is verified](sdlc.md#EngineVerified) via [Plan a build](commands.md#Plan) | **held** |  |
| 95 | prove | [Declarations published](command-scenarios.md#DeclarationsPublished) | — | [The engine is verified](sdlc.md#EngineVerified) via [Publish](commands.md#Publish) | **held** |  |
| 96 | prove | [Evidence given for someone](command-scenarios.md#EvidenceForSomeone) | — | [The engine is verified](sdlc.md#EngineVerified) via [Record evidence](commands.md#RecordEvidence) | **held** |  |
| 97 | prove | [A component run](command-scenarios.md#ComponentRun) | — | [The engine is verified](sdlc.md#EngineVerified) via [Run a component](commands.md#Run) | **held** |  |
| 98 | prove | [The snapshot, taken by its command](command-scenarios.md#SnapshotTaken) | — | [The engine is verified](sdlc.md#EngineVerified) via [Take the snapshot](commands.md#TakeSnapshot) | **held** |  |
| 99 | prove | [The laws, tested by their command](command-scenarios.md#LawsTested) | — | [The engine is verified](sdlc.md#EngineVerified) via [Test the laws](commands.md#TestKinds) | **held** |  |
| 100 | prove | [The graph page is opened as a person would](sdlc.md#OpeningTheGraphPage) | — | [The engine is verified](sdlc.md#EngineVerified) via [Open the graph page](sdlc.md#OpenTheGraphPage) | **held** |  |
| 101 | prove | [A generation advanced in one command](sdlc.md#AdvancedInOneCommand) | — | [The engine is verified](sdlc.md#EngineVerified) via [Advance](sdlc.md#AdvanceAGeneration) | **held** |  |
| 102 | prove | [The repository is set as the graph decides](sdlc.md#SettingTheRepository) | — | [The engine is verified](sdlc.md#EngineVerified) via [Set the repository's settings](sdlc.md#ApplyTheRepositorySettings) | **held** |  |
| 103 | prove | [Accept a candidate](generations.md#AcceptCandidate) | — | [The language serves what it says](sdlc.md#LanguageServed) via [Sort problems by severity](product.md#SeverityOrder) | **held** |  |
| 104 | prove | [Sort problems by severity](product.md#SeverityOrder) | — | [The language serves what it says](sdlc.md#LanguageServed) | **held** |  |
| 105 | prove | [Ship only what holds](shipping.md#ShipOnlyWhatHolds) | — | [The language serves what it says](sdlc.md#LanguageServed) via [Sort problems by severity](product.md#SeverityOrder) | **held** |  |
| 106 | prove | [What belongs to a library](libraries.md#LibraryOfAModule) | — | [The language serves what it says](sdlc.md#LanguageServed) | **held** |  |
| 107 | prove | [A release is settled](libraries.md#ReleaseIsSettled) | — | [The language serves what it says](sdlc.md#LanguageServed) via [What belongs to a library](libraries.md#LibraryOfAModule) | **held** |  |
| 108 | prove | [Answers without crashing](laws.md#AnswersWithoutCrashing) | — | [The language serves what it says](sdlc.md#LanguageServed) via [Complete declaration](laws.md#CompleteDeclaration) | **held** |  |
| 109 | prove | [A blocking hole has an owner](laws.md#BlockingHoleHasOwner) | — | [The language serves what it says](sdlc.md#LanguageServed) via [Complete declaration](laws.md#CompleteDeclaration) | **held** |  |
| 110 | prove | [The resolution returns only what it is given](laws.md#ClosedResolution) | — | [The language serves what it says](sdlc.md#LanguageServed) via [Complete declaration](laws.md#CompleteDeclaration) | **held** |  |
| 111 | prove | [Complete declaration](laws.md#CompleteDeclaration) | — | [The language serves what it says](sdlc.md#LanguageServed) | **held** |  |
| 112 | prove | [Complete declaration of a view](laws.md#CompleteViewDeclaration) | — | [The language serves what it says](sdlc.md#LanguageServed) via [Complete declaration](laws.md#CompleteDeclaration) | **held** |  |
| 113 | prove | [A hole says what is wrong by its code](laws.md#HoleHasCode) | — | [The language serves what it says](sdlc.md#LanguageServed) via [Complete declaration](laws.md#CompleteDeclaration) | **held** |  |
| 114 | prove | [Produces only the intermediate format](laws.md#IntermediateFormatOnly) | — | [The language serves what it says](sdlc.md#LanguageServed) via [Complete declaration](laws.md#CompleteDeclaration) | **held** |  |
| 115 | prove | [Same input, same answer](laws.md#SameInputSameAnswer) | — | [The language serves what it says](sdlc.md#LanguageServed) via [Complete declaration](laws.md#CompleteDeclaration) | **held** |  |
| 116 | prove | [The resolution does not depend on the order](laws.md#OrderFree) | — | [The language serves what it says](sdlc.md#LanguageServed) via [Complete declaration](laws.md#CompleteDeclaration) | **held** |  |
| 117 | prove | [Without evidence, the status is unknown](laws.md#UnknownWithoutEvidence) | — | [The language serves what it says](sdlc.md#LanguageServed) via [Complete declaration](laws.md#CompleteDeclaration) | **held** |  |
| 118 | deploy | [Advance](commands.md#Advance) | itself | — | **held** | 30 October 2026 by claude  |
| 119 | record | [The next generation](sdlc.md#NextGeneration) | — | — | **unknown** | 30 October 2026 by claude `evidence/shipments/NextGeneration-2026-10-30-fffedc76.json` |

`trame ship NextGeneration --by <name>`

<a id="RepositorySet"></a>

## The repository as decided

> **The repository as decided does not ship yet: 8 of 10 obligations hold.**

For the target github; its programs are assembled for [Local](architecture.md#Local).

```mermaid
flowchart TB
  n0["The candidate engine<br/><small>Artefact</small>"]:::unknown
  n1["Trame on the command line<br/><small>Component</small>"]:::neutral
  n2["The repository is read from GitHub<br/><small>Check</small>"]:::unknown
  n3["Read the repository's settings<br/><small>Entry point</small>"]:::held
  n4["The candidate runs on the machine<br/><small>Check</small>"]:::unknown
  n5["Ask the machine<br/><small>Entry point</small>"]:::held
  n6["Effects come from the vocabulary<br/><small>Architecture rule</small>"]:::held
  n7["Only commands write<br/><small>Architecture rule</small>"]:::held
  n8["Rendering does not read the graph<br/><small>Architecture rule</small>"]:::held
  n9["The repository is set as the graph decides<br/><small>Scenario</small>"]:::held
  n10["The documents write in the decided language<br/><small>Scenario</small>"]:::held
  n11["A generation advanced in one command<br/><small>Scenario</small>"]:::held
  n12["The graph page is opened as a person would<br/><small>Scenario</small>"]:::held
  n13["Set the repository's settings<br/><small>Entry point</small>"]:::held
  n14["The repository as decided<br/><small>Shipment</small>"]:::unknown
  n5 -->|Part of| n1
  n4 -->|Checks| n0
  n4 -->|Run by| n5
  n0 -->|Produced by| n1
  n2 -->|Run by| n3
  n14 -->|Requires| n2
  n14 -->|Deployed by| n13
  n9 -->|Verifies| n3
  n9 -->|Verifies| n13
  n9 -->|Depends on| n3
  n9 -->|Depends on| n13
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Its steps, one rank per stage: produce, check, prove, deploy, record.*

|  | Stage | Step | Run by | Why | Status | Latest evidence |
|---|---|---|---|---|---|---|
| 1 | produce | [The candidate engine](sdlc.md#EngineCandidate) · `out/local/trame-cli.ts` | [Trame on the command line](architecture.md#TrameCli) | — | **unknown** | 30 October 2026 by claude  |
| 2 | check | [The repository is read from GitHub](sdlc.md#RepositoryRead) | [Read the repository's settings](sdlc.md#ReadTheRepositorySettings), signed by [Trame's maintainers](sdlc.md#Maintainers) | — | **unknown** |  |
| 3 | check | [The candidate runs on the machine](sdlc.md#CandidateRunsOnTheMachine) | [Ask the machine](commands.md#Doctor), signed by [Trame's maintainers](sdlc.md#Maintainers) | — | **unknown** | passed, 30 October 2026 by claude  |
| 4 | prove | The foundations | itself | every shipment: no literal in a body, a sound graph | **held** |  |
| 5 | prove | [The repository is read from GitHub](sdlc.md#RepositoryRead) | [Read the repository's settings](sdlc.md#ReadTheRepositorySettings), signed by [Trame's maintainers](sdlc.md#Maintainers) | the shipment | **unknown** |  |
| 6 | prove | [Effects come from the vocabulary](architecture.md#KnownEffects) | — | [The rules of the architecture hold](sdlc.md#ArchitectureRuled) | **held** |  |
| 7 | prove | [Only commands write](architecture.md#OnlyCommandsWrite) | — | [The rules of the architecture hold](sdlc.md#ArchitectureRuled) | **held** |  |
| 8 | prove | [Rendering does not read the graph](architecture.md#RenderingWithoutGraph) | — | [The rules of the architecture hold](sdlc.md#ArchitectureRuled) | **held** |  |
| 9 | prove | [The repository is set as the graph decides](sdlc.md#SettingTheRepository) | — | [The engine is verified](sdlc.md#EngineVerified) via [Set the repository's settings](sdlc.md#ApplyTheRepositorySettings) | **held** |  |
| 10 | prove | [The documents write in the decided language](scenarios.md#DocumentWords) | — | [The engine is verified](sdlc.md#EngineVerified) via [The documents in Trame's language](documents.md#OurDocumentLanguage) | **held** |  |
| 11 | prove | [The candidate runs on the machine](sdlc.md#CandidateRunsOnTheMachine) | [Ask the machine](commands.md#Doctor), signed by [Trame's maintainers](sdlc.md#Maintainers) | [The engine is verified](sdlc.md#EngineVerified) via [Node process](platform.md#NodeProcess) | **unknown** | passed, 30 October 2026 by claude  |
| 12 | prove | [A generation advanced in one command](sdlc.md#AdvancedInOneCommand) | — | [The engine is verified](sdlc.md#EngineVerified) via [Advance](sdlc.md#AdvanceAGeneration) | **held** |  |
| 13 | prove | [The graph page is opened as a person would](sdlc.md#OpeningTheGraphPage) | — | [The engine is verified](sdlc.md#EngineVerified) via [What the graph page is asked](sdlc.md#GraphPageSelectors) | **held** |  |
| 14 | deploy | [Set the repository's settings](sdlc.md#ApplyTheRepositorySettings) | itself | — | **held** |  |
| 15 | record | [The repository as decided](sdlc.md#RepositorySet) | — | — | **unknown** |  |

`trame ship RepositorySet --by <name>`

<a id="RunnersWritten"></a>

## The files that run it elsewhere

> **The files that run it elsewhere does not ship yet: 1 of 2 obligations holds.**

For the target repository.

```mermaid
flowchart TB
  n0["The pull requests' workflow<br/><small>Artefact</small>"]:::unknown
  n1["A workflow of GitHub Actions<br/><small>Syntax element</small>"]:::held
  n2["The files that run it elsewhere<br/><small>Shipment</small>"]:::unknown
  n0 -->|Produced by| n1
  n2 -->|Ships| n0
  classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a
  classDef blocked fill:#fbf0d9,stroke:#9a6200,color:#17202a
  classDef violated fill:#f9e3e1,stroke:#ad2a22,color:#17202a
  classDef unknown fill:#e9edf0,stroke:#65707c,color:#17202a
  classDef neutral fill:#ffffff,stroke:#5a6672,color:#17202a
```

*Its steps, one rank per stage: produce, check, prove, deploy, record.*

|  | Stage | Step | Run by | Why | Status | Latest evidence |
|---|---|---|---|---|---|---|
| 1 | produce | [The pull requests' workflow](sdlc.md#PullRequestWorkflow) · `.github/workflows/trame-pull-request.yml` | [A workflow of GitHub Actions](../ci/releases/0.8.0/docs/github.md#GitHubWorkflow) | — | **unknown** |  |
| 2 | prove | The foundations | itself | every shipment: no literal in a body, a sound graph | **held** |  |
| 3 | prove | [The pull requests' workflow](sdlc.md#PullRequestWorkflow) | — | the shipment | **unknown** |  |
| 4 | record | [The files that run it elsewhere](sdlc.md#RunnersWritten) | — | — | **unknown** |  |

`trame ship RunnersWritten --by <name>`
