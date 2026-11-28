# Architecture decisions

*The choices that shape the product without being values, in force on 28 November 2026: why each was taken, what was rejected, and the nodes that apply it.*

> **46 architecture decisions, 38 held by the nodes that apply them**

| Decision | Status | Applied by |
|---|---|---|
| [Trame's page, assembled](browser.md#OurPageAssembled) | **unknown** | [The browser runs the page](browser.md#TheBrowserRunsThePage) |
| [The punctuation is the language's](documents.md#PunctuationOfTheLanguage) | **held** | [Documents written in Trame's language](documents.md#DocumentsInOurLanguage), [The documents in Trame's language](documents.md#OurDocumentLanguage), [Language](messages.md#Language) |
| [The language receives the graph's values](engine.md#TheLanguageReceivesTheGraph) | **held** | [Graph](engine.md#GraphApi), [Views](engine.md#Views) |
| [The laws are requirements](engine.md#LawsAreRequirements) | **held** | [Laws](engine.md#Laws), [Views](engine.md#Views) |
| [What a writer writes is read back before it is written](languages.md#ReadBackWhatIsWritten) | **held** | [Page](../libs/documents/releases/0.5.1/docs/page.md#Page), [Drivers](languages.md#Drivers) |
| [A catalog counts in its language](messages.md#CountsInTheLanguage) | **held** | [Lists](../libs/documents/releases/0.5.1/docs/language.md#Lists), [Messages of an advance](messages.md#AdvanceMessages), [Messages of the commands](messages.md#CommandMessages), [Messages of the compiler](messages.md#CompilerMessages), [Messages of trame dev](messages.md#DevMessages), [Messages of the scenarios](messages.md#ScenarioMessages), [Messages of the views](messages.md#ViewMessages) |
| [The page is the library's](page.md#ThePageIsTheLibrarys) | **held** | [How the engine makes a page](page.md#PageMadeOnTheMachine), [The page's program, bundled](page.md#PageScript) |
| [The graph is written in TypeScript](principles.md#GraphInTypeScript) | **held** | [TypeScript compiler](architecture.md#TypeScriptCompiler), [Documentation comment](conventions.md#DocComment), [Static reading](engine.md#StaticAnalysis), [TypeScript](typescript.md#TypeScript) |
| [The prelude and the compiler know no kind of node](principles.md#NoKindInTheCore) | **held** | [Compiler](engine.md#Compiler), [Laws](engine.md#Laws), [Project](engine.md#Project) |
| [The traversal API is the only way to read the graph](principles.md#OneWayToRead) | **held** | [Rendering does not read the graph](architecture.md#RenderingWithoutGraph), [Compilation API](engine.md#CompilationApi), [Graph](engine.md#GraphApi), [Views](engine.md#Views) |
| [The source carries the history](principles.md#HistoryInTheSource) | **held** | [Publish](commands.md#Publish), [Lock](engine.md#Lock) |
| [A change to a node is a claim](principles.md#ChangesAreClaims) | **held** | [Compiler](engine.md#Compiler), [Laws](engine.md#Laws) |
| [An undecided value blocks; it does not crash](principles.md#UndecidedBlocks) | **held** | [Compiler](engine.md#Compiler), [Wiring](engine.md#Wiring) |
| [Without evidence, a status is unknown](principles.md#UnknownWithoutEvidence) | **held** | [Laws](engine.md#Laws), [The laws of the kinds hold](scenarios.md#KindLaws) |
| [One output for each reader](principles.md#OneOutputPerReader) | **held** | [Build](commands.md#Build), [Take the snapshot](commands.md#TakeSnapshot), [Page](../libs/documents/releases/0.5.1/docs/page.md#Page), [Assembly](engine.md#Assembly), [Machine outputs](engine.md#MachineOutputs) |
| [Code holds no hidden decision](principles.md#NoHiddenDecision) | **held** | [Effects come from the vocabulary](architecture.md#KnownEffects), [Only commands write](architecture.md#OnlyCommandsWrite), [Compiler](engine.md#Compiler), [Drivers](languages.md#Drivers), [Checks of a body](syntax.md#BodyChecks) |
| [A literal in a body is an error](principles.md#EveryLiteralDeclared) | **held** | [Compiler](engine.md#Compiler), [Syntax reader](syntax.md#SyntaxReader) |
| [A literal in a kind or a view is an error](principles.md#NoLiteralInTheLanguage) | **held** | [Compiler](engine.md#Compiler), [Syntax reader](syntax.md#SyntaxReader) |
| [A key is made of its parts](principles.md#KeysOfParts) | **held** | [Compilation API](engine.md#CompilationApi), [Compiler](engine.md#Compiler), [Laws](engine.md#Laws), [Payload](engine.md#PayloadBuilder), [Static reading](engine.md#StaticAnalysis) |
| [Trame builds Trame](principles.md#TrameBuildsTrame) | **held** | [Advance](commands.md#Advance), [Accept a candidate](generations.md#AcceptCandidate), [The build writes the same documents as the engine in place](scenarios.md#BuildLikeBefore), [The described engine compiles the example](scenarios.md#CompileExample), [The laws of the kinds hold](scenarios.md#KindLaws) |
| [A technology is chosen in one node](principles.md#TechnologyInOneNode) | **unknown** | [The TypeScript compiler reads the declarations](platform.md#CompilerReadsDeclarations), [The engine's own files sit beside its code](platform.md#EngineFilesBesideCode), [esbuild bundles the page's program](platform.md#EsbuildBundles), [Scenarios run in memory](platform.md#InMemoryScenarios), [On a machine, Node.js reads, writes and runs](platform.md#NodeMachine), [NodePlatform](platform.md#NodePlatform), [tree-sitter reads the bodies](platform.md#TreeSitterReads), [tsx runs TypeScript](platform.md#TsxRuns), [Documents in Markdown](rendering.md#DocumentsInMarkdown), [Figures in Mermaid](rendering.md#FiguresInMermaid), [The page's figures in SVG](rendering.md#PageFiguresDrawn), [The page in HTML](rendering.md#PageInHtml), [Figures in the terminal, as text](rendering.md#TerminalFiguresAsText), [The terminal in plain text](rendering.md#TerminalInText), [Abstract Factory](../std/releases/0.33.0/docs/patterns.md#AbstractFactory), [Adapter](../std/releases/0.33.0/docs/patterns.md#Adapter), [Bridge](../std/releases/0.33.0/docs/patterns.md#Bridge), [Repository](../std/releases/0.33.0/docs/patterns.md#Repository), [Strategy](../std/releases/0.33.0/docs/patterns.md#Strategy) |
| [The prelude: the runtime of the language](principles.md#PreludeLayer) | **held** | [Prelude](architecture.md#Prelude), [The frozen API](conventions.md#FrozenApi), [The prelude's public API](conventions.md#PreludeApi), [Laws](engine.md#Laws) |
| [Kinds and views: the vocabulary, as reviewed files](principles.md#VocabularyLayer) | **held** | [Laws](engine.md#Laws), [Project](engine.md#Project), [Views](engine.md#Views) |
| [The graph: the description of a product](principles.md#GraphLayer) | **held** | [Build](commands.md#Build), [Compiler](engine.md#Compiler) |
| [The engine: a graph like any product's](principles.md#EngineLayer) | **held** | [Effects come from the vocabulary](architecture.md#KnownEffects), [Only commands write](architecture.md#OnlyCommandsWrite), [Rendering does not read the graph](architecture.md#RenderingWithoutGraph), [Trame on the command line](architecture.md#TrameCli) |
| [Generations: frozen engines](principles.md#GenerationLayer) | **held** | [Advance](commands.md#Advance), [Accept a candidate](generations.md#AcceptCandidate), [The build writes the same documents as the engine in place](scenarios.md#BuildLikeBefore), [Expected differences on the example](scenarios.md#ExpectedDifferences) |
| [A library is a Trame project, imported by path](principles.md#LibrariesAreProjects) | **held** | [Advance](commands.md#Advance), [Compilation API](engine.md#CompilationApi), [Compiler](engine.md#Compiler), [Project](engine.md#Project), [References](engine.md#References), [What belongs to a library](libraries.md#LibraryOfAModule) |
| [A library is imported by its name](principles.md#LibrariesByName) | **held** | [Release a version](commands.md#Release), [Write the manifest](commands.md#WriteManifest), [Laws](engine.md#Laws), [Project](engine.md#Project), [Names of a library's releases](libraries.md#LibraryReleaseNames), [A release is settled](libraries.md#ReleaseIsSettled) |
| [A package is used by its name](principles.md#PackagesByName) | **held** | [Advance](commands.md#Advance), [Start a project](commands.md#Init), [Write the manifest](commands.md#WriteManifest), [Laws](engine.md#Laws), [Project](engine.md#Project), [Packages by their origin](platform.md#PackagesByOrigin), [Each package comes from where its reference says](platform.md#PackagesByTheirOrigin) |
| [A product is delivered by a node of the graph](principles.md#DeliveredByTheGraph) | **held** | [Deliver](commands.md#Deliver), [Style of a delivered page](delivery.md#DeliveredStyle) |
| [The data a product carries is a dataset](principles.md#DataAsDatasets) | **held** | [Fingerprints](engine.md#Fingerprints), [Graph](engine.md#GraphApi) |
| [A version ships through the graph](principles.md#ShippedThroughTheGraph) | **unknown** | [Record evidence](commands.md#RecordEvidence), [Ship](commands.md#Ship), [The candidate plays the laws](sdlc.md#CandidateKeepsTheLaws), [The next generation](sdlc.md#NextGeneration), [Evidence of the SDLC](shipping.md#SdlcEvidence), [Ship only what holds](shipping.md#ShipOnlyWhatHolds), [Where the SDLC's evidence is kept](shipping.md#ShippingRecords) |
| [Who acts is declared](principles.md#ActorsDeclared) | **held** | [Start a project](commands.md#Init), [Compiler](engine.md#Compiler) |
| [The words are in catalogs](principles.md#WordsInCatalogs) | **held** | [Messages of an advance](messages.md#AdvanceMessages), [Messages of the commands](messages.md#CommandMessages), [Messages of the compiler](messages.md#CompilerMessages), [Messages of trame dev](messages.md#DevMessages), [Messages of the drivers](messages.md#DriverMessages), [Messages of the laws](messages.md#LawMessages), [Messages of the outputs](messages.md#OutputMessages), [Messages of the platform](messages.md#PlatformMessages), [Messages of the scenarios](messages.md#ScenarioMessages), [Messages of the views](messages.md#ViewMessages), [Checks of a body](syntax.md#BodyChecks), [Syntax reader](syntax.md#SyntaxReader) |
| [What a command does is played in memory first](principles.md#PlayedInMemoryFirst) | **held** | [Scenarios write in memory, over the disk](platform.md#FilesInMemoryOverTheDisk), [The sample add-ons, second first](scenarios.md#SampleAddOnsInOrder), [Trame's settings in the scenarios](sdlc.md#OurSettingsInTheScenarios), [The SDLC in memory](sdlc.md#SdlcInMemory) |
| [A run is kept while what it reads is as it was](principles.md#RunsKept) | **unknown** | [A run is kept while what it reads is as it was](platform.md#RunsByWhatTheyRead), [In the scenarios, runs are kept in the process](platform.md#RunsKeptInTheProcess), [On a machine, runs are kept on disk](platform.md#RunsKeptOnDisk) |
| [Evidence is sealed](principles.md#EvidenceSealed) | **held** | [Evidence sealed by attribution](shipping.md#SealedByAttribution) |
| [An amendment sits beside the value it changes](principles.md#AmendmentsBesideTheirValue) | **held** | [Amendments go in the sources](platform.md#AmendmentsInPlace) |
| [Every question of the machine is an add-on](principles.md#MachineQuestionsAsAddOns) | **unknown** | [What the engine asks the machine](doctor.md#EngineQuestions), [What the machine must also have](sdlc.md#WhatTheMachineMustHave) |
| [Trame's SDLC runs with std's tooling](principles.md#SdlcWithStdTooling) | **unknown** | [GitHub merges once it holds, asked in a session](sdlc.md#AutoMergeInASession), [GitHub merges once it holds, asked by its command line](sdlc.md#AutoMergeOnTheMachine), [The repository's work on a machine](sdlc.md#RepositoryWorkOnAMachine), [The SDLC on the machine](sdlc.md#SdlcOnTheMachine) |
| [Trame runs the commands libraries offer](principles.md#CommandsFromLibraries) | **unknown** | [The commands Trame takes from std](sdlc.md#CommandsOfStd), [The commands Trame takes from libs/commands](sdlc.md#CommandsWrittenOnce) |
| [The engine is a provider, for Trame too](principles.md#EngineProvidesForTrame) | **unknown** | [The commands Trame takes from libs/commands](sdlc.md#CommandsWrittenOnce), [std's languages, read by the engine](syntax.md#StdLanguagesRead) |
| [Kinds and views say what; renderers say how](rendering.md#MeaningThenLook) | **held** | [Rendering does not read the graph](architecture.md#RenderingWithoutGraph), [Common rendering](../libs/documents/releases/0.5.1/docs/rendering.md#Common), [Rendering of the files](../libs/documents/releases/0.5.1/docs/rendering.md#FileRendering), [Rendering in the page](../libs/documents/releases/0.5.1/docs/rendering.md#PageRendering), [Rendering in the terminal](../libs/documents/releases/0.5.1/docs/rendering.md#TerminalRendering) |
| [Trame's documents, rendered by the library of documents](rendering.md#RenderedByTheLibrary) | **held** | [The formats of a command's documents](rendering.md#AnswersAsChosen), [Documents in Markdown](rendering.md#DocumentsInMarkdown), [Figures in Mermaid](rendering.md#FiguresInMermaid), [The page's figures in SVG](rendering.md#PageFiguresDrawn), [The page in HTML](rendering.md#PageInHtml), [Figures in the terminal, as text](rendering.md#TerminalFiguresAsText), [The terminal in plain text](rendering.md#TerminalInText) |
| [Every language is read alike, with tree-sitter](syntax.md#ReadLanguagesAlike) | **held** | [Syntax trees](architecture.md#SyntaxTrees), [Checks of a body](syntax.md#BodyChecks), [Syntax reader](syntax.md#SyntaxReader) |
| [tree-sitter says what it keeps aside](syntax.md#PredicatesAsTreeSitterReadsThem) | **held** | [Syntax trees](architecture.md#SyntaxTrees), [Syntax reader](syntax.md#SyntaxReader) |

## Trame · The page in a browser

<a id="OurPageAssembled"></a>

### Trame's page, assembled

`OurPageAssembled` · `src/browser.ts:37` · status: **unknown**

Trame assembles the library's page for its environment Browser, as the command line for a machine.

Context: The page's program is libs/documents' component, which names no environment: a project assembles it where it chooses the browser's realizations.

Consequences: Trame's environment Browser chooses the library's realizations; the page's program is assembled there with the engine, and bundled for every page the engine writes.

| Rejected | Why |
|---|---|
| Realizations of Trame's own | the browser's are what every project's page needs, written once |

- Decided by: trame
- Serves: [A specification that runs](product.md#ExecutableSpecification)
- Applied by: [The browser runs the page](browser.md#TheBrowserRunsThePage)
- Adopts: [The page is assembled](../libs/documents/releases/0.5.1/docs/browser.md#ThePageIsAssembled)

## Trame · Documents

<a id="PunctuationOfTheLanguage"></a>

### The punctuation is the language's

`PunctuationOfTheLanguage` · `src/documents.ts:45` · status: **held**

The marks between the parts of a line are written in the decided language, with its tag; the renderers, the page, the kinds and the views receive those of the language decided.

Context: The marks were a decision of their own, the same whatever the language, and the kinds and the views wrote their own (a comma between items, a middle dot between parts, a dash for nothing, a semicolon between clauses): another language could not change them.

Consequences: The Language decision holds the marks of the language with its tag; Punctuation gives those of the language decided to the renderers, the page and, through the engine, to the kinds and the views. Another language is another value of Language, with its catalogs. A sentence keeps its own punctuation: it is in a catalog, written in its language.

| Rejected | Why |
|---|---|
| A decision of marks keyed by language tag | two places to change for one language, and a tag written twice |
| The marks in every catalog | the renderers, the page and the views share them: each catalog would repeat them |

- Decided by: trame
- Serves: [A single source of truth](product.md#SingleSource)
- Applied by: [The documents in Trame's language](documents.md#OurDocumentLanguage), [Documents written in Trame's language](documents.md#DocumentsInOurLanguage), [Language](messages.md#Language)

## Trame · Engine

<a id="TheLanguageReceivesTheGraph"></a>

### The language receives the graph's values

`TheLanguageReceivesTheGraph` · `src/engine.ts:351` · status: **held**

The kinds and the views are files, not nodes: what they write is given to them by the engine, from the graph.

Context: The kinds and the views are the vocabulary nodes are made of, not nodes: the values they wrote (the names of kinds and of fields, zero and the empty text, a comma, the pattern of a date, the file of the lock) belonged to no node, and repeated what the graph already declared.

Consequences: The engine gives them the graph's values through the graph they read (Lib): its algebraic structures; the lists, punctuation and dates of the decided language; positions in a file and paths of a value; the settings of the documents and the draws of the laws; the layout of a project; the language its declarations are written in; the order of versions; values with their units and texts shown visibly, in the words of the decided language. The names they share with the engine are words of the prelude (KindName, ViewName, EdgeName, PackageReport, LanguageUse, PackageField, ReleaseEdge); a kind names its own fields and edges with keysOf, another kind's with fieldsOf and edgesOf; their words are in their catalogs. A feature of Lib serves the kinds from the generation that brings it on. The catalogue of literals lists what a file of the language writes, and since g53 each such file is an error (ADR "A literal in a kind or a view is an error").

| Rejected | Why |
|---|---|
| Kinds and views as nodes | they are what nodes are made of: the graph cannot produce its own vocabulary |
| Each kind importing the nodes it needs | the example's graph is not Trame's: the kinds would read a graph that is not the one they compile |

- Decided by: trame
- Serves: [A single source of truth](product.md#SingleSource)
- Applied by: [Graph](engine.md#GraphApi), [Views](engine.md#Views)

<a id="LawsAreRequirements"></a>

### The laws are requirements

`LawsAreRequirements` · `src/engine.ts:369` · status: **held**

Each law of the kinds and the views is a requirement of the module laws: a pure rule, with its acceptance criteria. The functions "Laws" and "Views" observe a kind on nodes drawn at random, or a view on the graph, and ask the rule whether what they saw keeps the law; they phrase what breaks it.

Context: The laws were written in the engine's code only: the graph named them in a catalog of messages, without saying what each one demands, and nothing checked the checks.

Consequences: A law reads in the graph as a requirement, refines the goal it serves, and is accepted on cases chosen by hand before it judges any kind. The engine keeps what only it can do: drawing nodes, calling the kind in a sandbox, catching what it throws.

| Rejected | Why |
|---|---|
| Laws in the engine's code | what a kind must respect, invisible in the graph that describes the engine |
| A law as a scenario | a scenario plays the whole engine; a law is a judgement on one observation, pure, that a criterion shows |

- Decided by: trame
- Serves: [Kinds and views that can be trusted](laws.md#TrustedExtensions)
- Applied by: [Laws](engine.md#Laws), [Views](engine.md#Views)

## Trame · Languages

<a id="ReadBackWhatIsWritten"></a>

### What a writer writes is read back before it is written

`ReadBackWhatIsWritten` · `src/languages.ts:46` · status: **held**

A program or a call of modules that Trame writes is read in its language: it must follow the grammar, and the values written in it must come back, in their order. The page is read back too, in HTML, and its style in CSS: they must follow the grammar.

Context: A writer composes syntax elements whose examples are checked one by one; a program is more than its pieces, and a value badly escaped changes meaning silently.

Consequences: Each language has its module (how Trame reads it, what Trame writes in it); languages binds them in Drivers, which reads back every file a writer gives before it reaches the disk. The page reads back its style and itself before it is given; a browser forgives what it cannot parse, so no one would see the fault.

| Rejected | Why |
|---|---|
| Trusting the writer | a broken program would be found when it runs, an escaped value perhaps never |

- Decided by: trame
- Serves: [A specification that runs](product.md#ExecutableSpecification)
- Applied by: [Drivers](languages.md#Drivers), [Page](../libs/documents/releases/0.5.1/docs/page.md#Page)

## Trame · Messages

<a id="CountsInTheLanguage"></a>

### A catalog counts in its language

`CountsInTheLanguage` · `src/messages.ts:961` · status: **held**

A count and its noun follow the plural rules of the language the catalog is written in, with the forms the catalog writes for each category; nothing below the catalogs presumes a language.

Context: The catalogs counted with a helper of the prelude that took the English rule (one, otherwise the noun and an s), joined lists with an English and, and wrote dates in English when nobody said a language: a catalog in another language could not count, and the prelude, meant for every language, spoke one.

Consequences: A catalog that counts receives the decided language and counts by its plural rules (CLDR, through the platform's Intl), with the forms it writes for each category (one, other, and few or many where a language has them); a catalog of the language written in a file says the language it is written in; lists are joined by Lists, in the decided language; the prelude takes a language wherever it writes words, and has none of its own. The page speaks the decided language until a payload says another.

| Rejected | Why |
|---|---|
| The English rule in the prelude | a catalog in French or in Polish would count wrongly |
| A plural made by adding an s | irregular nouns, and every other language |

- Decided by: trame
- Serves: [A single source of truth](product.md#SingleSource)
- Applied by: [Messages of the compiler](messages.md#CompilerMessages), [Messages of the views](messages.md#ViewMessages), [Messages of trame dev](messages.md#DevMessages), [Messages of the commands](messages.md#CommandMessages), [Messages of the scenarios](messages.md#ScenarioMessages), [Messages of an advance](messages.md#AdvanceMessages), [Lists](../libs/documents/releases/0.5.1/docs/language.md#Lists)

## Trame · The page

<a id="ThePageIsTheLibrarys"></a>

### The page is the library's

`ThePageIsTheLibrarys` · `src/page.ts:60` · status: **held**

Trame's page moved into libs/documents (documents 0.5.0), with its program; the engine bundles the program and gives Page what it reads with.

Context: The page was Trame's: a project could not make its own, nor change its look but by amending Trame's graph. Its HTML, its CSS and its program read nothing of the engine's but the intermediate format and what the page decides.

Consequences: Page and the page's program are libs/documents'; the engine bundles the program it assembles for Browser and gives it to Page, with the program's name, the graph packed, its title. Each project will assemble the page with its own choices (trame init writes them, later); until then the engine's program serves every project.

| Rejected | Why |
|---|---|
| The page left in Trame | the commands that write it (export, dev) could not leave the engine |
| The engine writing the whole page through its API | the page's look would stay out of reach of the projects |

- Decided by: trame
- Serves: [A specification that runs](product.md#ExecutableSpecification)
- Applied by: [The page's program, bundled](page.md#PageScript), [How the engine makes a page](page.md#PageMadeOnTheMachine)

## Trame · Principles

<a id="GraphInTypeScript"></a>

### The graph is written in TypeScript

`GraphInTypeScript` · `src/principles.ts:53` · status: **held**

A node is an exported constant: its name is its identifier; the first line of its documentation comment is its title, the rest its description. Its fields and edges are typed by its kind.

Context: A product's description must be checked by a compiler, navigable in an editor, and written by an LLM together with the people who decide.

Consequences: The static reading takes titles, lines, references and type errors from the TypeScript compiler; a body is TypeScript, or another language a node of the graph describes.

| Rejected | Why |
|---|---|
| YAML or JSON | no types, no references between nodes, no code |
| A language of its own | no editor, no type checker, and an LLM writes it less well |

- Decided by: trame
- Serves: [A specification that runs](product.md#ExecutableSpecification)
- Applied by: [Static reading](engine.md#StaticAnalysis), [TypeScript compiler](architecture.md#TypeScriptCompiler), [TypeScript](typescript.md#TypeScript), [Documentation comment](conventions.md#DocComment)

<a id="NoKindInTheCore"></a>

### The prelude and the compiler know no kind of node

`NoKindInTheCore` · `src/principles.ts:70` · status: **held**

They know what a kind is: its fields, its edges, a few functions. The vocabulary (goal, decision, port, scenario…) lives in kinds/, as files.

Context: The vocabulary of products differs from one to the next (a service level objective here, a regulation there) and keeps growing.

Consequences: A new kind needs no change to the engine; each kind is tried on nodes drawn at random against seven laws. The assembly names only what it assembles: a component, an environment, an entry point.

| Rejected | Why |
|---|---|
| A fixed metamodel | it would freeze the vocabulary of every product |
| Kinds as nodes | a node per kind would need a kind of kinds |

- Decided by: trame
- Serves: [A specification that runs](product.md#ExecutableSpecification)
- Applied by: [Laws](engine.md#Laws), [Compiler](engine.md#Compiler), [Project](engine.md#Project)

<a id="OneWayToRead"></a>

### The traversal API is the only way to read the graph

`OneWayToRead` · `src/principles.ts:87` · status: **held**

Kinds, views and rules read the graph through the queries and the views of nodes the compiler builds; nothing else reaches the raw data.

Context: Kinds and views are written by an LLM and reviewed by people: what they can read must be small, sorted, finite and read-only.

Consequences: Two moments of the graph: the frozen one, where reading a value being settled throws, and the consolidated one. Results are sorted; traversals ignore cycles; views are frozen.

| Rejected | Why |
|---|---|
| Access to the registry | a kind could read a value while it is being settled, or change it |

- Decided by: trame
- Serves: [A specification that runs](product.md#ExecutableSpecification)
- Applied by: [Compilation API](engine.md#CompilationApi), [Graph](engine.md#GraphApi), [Views](engine.md#Views), [Rendering does not read the graph](architecture.md#RenderingWithoutGraph)

<a id="HistoryInTheSource"></a>

### The source carries the history

`HistoryInTheSource` · `src/principles.ts:101` · status: **held**

A published declaration is never erased: it is amended or repealed, and the graph in force at any date is rebuilt from the source alone.

Context: A decision is read by people who took it, people who apply it, and auditors who must know what was in force on a date.

Consequences: trame publish freezes in trame.lock, part by part, what the kind of each declaration says people decide: a value chosen or cited, a statement (D1, since g108). Changing a frozen part is an error: an amendment changes a value, a new node that repeals it a statement, and a migration publishes again a form, never a value. Removing a published declaration is an error. Its code stays free, held by what verifies it. --at gives the graph of any date.

| Rejected | Why |
|---|---|
| The history of Git | it records lines, not decisions, and it is not read by the build |

- Decided by: trame
- Serves: [A single source of truth](product.md#SingleSource)
- Applied by: [Lock](engine.md#Lock), [Publish](commands.md#Publish)

<a id="ChangesAreClaims"></a>

### A change to a node is a claim

`ChangesAreClaims` · `src/principles.ts:115` · status: **held**

An amendment claims values of another node, a repeal claims its removal. When two claims overlap, the kind concerned settles them; if it cannot, the value is contested.

Context: Several people change the same decision: support asks for a longer period while legal caps it.

Consequences: The compiler detects overlaps, always records them, and applies what the kind settles; the settlement names the nodes it read. It never depends on the value it settles, nor on the order of the claims.

| Rejected | Why |
|---|---|
| The most recent wins | it hides disagreements; a kind may choose it where it makes sense |

- Decided by: trame
- Serves: [A single source of truth](product.md#SingleSource)
- Applied by: [Compiler](engine.md#Compiler), [Laws](engine.md#Laws)

<a id="UndecidedBlocks"></a>

### An undecided value blocks; it does not crash

`UndecidedBlocks` · `src/principles.ts:129` · status: **held**

Reading a value that is not decided, or contested, raises a hole assigned to an owner. What depends on it is blocked and says so.

Context: A graph is written before everything is decided, and must still build, render and run what can run.

Consequences: A criterion that reads an undecided value is blocked, a service that computes with one refuses with the name of the value, and the documents say who must decide.

| Rejected | Why |
|---|---|
| A default value | the product would run on a decision nobody took |

- Decided by: trame
- Serves: [A specification that runs](product.md#ExecutableSpecification)
- Applied by: [Compiler](engine.md#Compiler), [Wiring](engine.md#Wiring)

<a id="UnknownWithoutEvidence"></a>

### Without evidence, a status is unknown

`UnknownWithoutEvidence` · `src/principles.ts:143` · status: **held**

A node is held or violated only on evidence: a criterion played, a scenario run, a measurement. Otherwise its status is unknown, never held by default.

Context: A status read as held when nothing checked it gives a false confidence, worse than none.

Consequences: One of the laws of the kinds: the first version of the service level objective, which declared itself held without a measurement, was refused by it.

- Decided by: trame
- Serves: [A specification that runs](product.md#ExecutableSpecification)
- Applied by: [Laws](engine.md#Laws), [The laws of the kinds hold](scenarios.md#KindLaws)

<a id="OneOutputPerReader"></a>

### One output for each reader

`OneOutputPerReader` · `src/principles.ts:156` · status: **held**

Compiling gives documents and a page for people, a consolidated snapshot without history for agents, and assembled programs for machines.

Context: People read the history and the reasons; an agent that writes code needs the exact expected state; a machine needs a program.

Consequences: One source, several outputs, each from the same compilation: the documents in Markdown, the page, graph.json and snapshot.json, the frozen programs and their infrastructure.

- Decided by: trame
- Serves: [A single source of truth](product.md#SingleSource)
- Applied by: [Build](commands.md#Build), [Take the snapshot](commands.md#TakeSnapshot), [Machine outputs](engine.md#MachineOutputs), [Page](../libs/documents/releases/0.5.1/docs/page.md#Page), [Assembly](engine.md#Assembly)

<a id="NoHiddenDecision"></a>

### Code holds no hidden decision

`NoHiddenDecision` · `src/principles.ts:169` · status: **held**

A body receives the world through its parameters only; only implementations touch the platform; a value written in a body is declared in the graph instead, with its meaning, and the text people read is in catalogs.

Context: A decision hidden in code is answered for by nobody, and nobody knows who else relies on it.

Consequences: The checks of a body refuse a hidden dependency, an access to the platform outside an implementation, and since g28 a literal; effects come from a vocabulary; only commands write.

| Rejected | Why |
|---|---|
| Code reviews alone | they find what a reader notices, not what the graph can check every time |

- Decided by: trame
- Serves: [A single source of truth](product.md#SingleSource)
- Applied by: [Checks of a body](syntax.md#BodyChecks), [Drivers](languages.md#Drivers), [Compiler](engine.md#Compiler), [Effects come from the vocabulary](architecture.md#KnownEffects), [Only commands write](architecture.md#OnlyCommandsWrite)

<a id="EveryLiteralDeclared"></a>

### A literal in a body is an error

`EveryLiteralDeclared` · `src/principles.ts:186` · status: **held**

A value written in a body is declared in the graph instead, with its meaning, and the body receives it as a parameter. The reader sets aside what names something (a key, a module, a type); a catalog's text is what it declares.

Context: The checks of a body kept the platform out, but a value written in a body was still a decision nobody answered for: Trame's own bodies held 1,077 of them.

Consequences: One error per node, with each place, in every language a driver reads; trame.json says nothing about literals. Trame's bodies and the example's went to none before the rule came (g27, g28).

| Rejected | Why |
|---|---|
| A list of refused values (0, 1, -1, "") | it said which literals mattered, while every one hides a meaning |
| A baseline of tolerated literals | it would never shrink |

- Decided by: trame
- Serves: [A single source of truth](product.md#SingleSource)
- Applied by: [Compiler](engine.md#Compiler), [Syntax reader](syntax.md#SyntaxReader)

<a id="NoLiteralInTheLanguage"></a>

### A literal in a kind or a view is an error

`NoLiteralInTheLanguage` · `src/principles.ts:203` · status: **held**

The language follows the rule of the bodies: a kind or a view the project writes holds no value of its own. What it needs comes from the graph through the engine, and its words from its catalog.

Context: The kinds and the views are files, not nodes: from g44 the catalogue reported the 854 values they wrote, without errors, since no node could answer for them. From g48 the engine gave them the graph's values (Lib), and by g52 they wrote none.

Consequences: Since g53 a file of the language that writes a literal is an error, one per file with each place, like a body: it belongs to no node, it names its file, and an assembly refuses it. A project that takes Trame's language does not write it, and is not checked for it.

| Rejected | Why |
|---|---|
| A report, as before | nothing would stop the values from coming back |
| A law of the kinds | a law plays a kind on drawn values; a literal is read in the file, by the syntax reader, as in a body |

- Decided by: trame
- Serves: [A single source of truth](product.md#SingleSource)
- Applied by: [Compiler](engine.md#Compiler), [Syntax reader](syntax.md#SyntaxReader)

<a id="KeysOfParts"></a>

### A key is made of its parts

`KeysOfParts` · `src/principles.ts:220` · status: **held**

What tells two things apart (an issue, an overlap, a body) is the JSON of its parts, never texts joined with a separator.

Context: Keys joined with a bar or a colon needed a separator nobody declared, which a part could contain, and which had to be split again.

Consequences: A record that needs a part carries it (an overlap carries its target and its paths); nothing parses a key.

| Rejected | Why |
|---|---|
| A declared separator | a part may still contain it, and the key must still be split |

- Decided by: trame
- Serves: [A single source of truth](product.md#SingleSource)
- Applied by: [Compiler](engine.md#Compiler), [Compilation API](engine.md#CompilationApi), [Payload](engine.md#PayloadBuilder), [Static reading](engine.md#StaticAnalysis), [Laws](engine.md#Laws)

<a id="TrameBuildsTrame"></a>

### Trame builds Trame

`TrameBuildsTrame` · `src/principles.ts:234` · status: **held**

The engine is a graph like any product's, and only a frozen generation compiled from that graph assembles the next one.

Context: An engine that describes products must show that its description is enough to build a product, starting with itself.

Consequences: A capability exists only once it is written in the graph, and serves from the next generation on. A candidate is accepted only if it builds everything as the generation in place did, reassembles itself to a fixed point, and keeps the laws.

| Rejected | Why |
|---|---|
| Editing the engine by hand | the graph would describe an engine that does not exist |

- Decided by: trame
- Serves: [A specification that runs](product.md#ExecutableSpecification)
- Applied by: [Advance](commands.md#Advance), [Accept a candidate](generations.md#AcceptCandidate), [The described engine compiles the example](scenarios.md#CompileExample), [The build writes the same documents as the engine in place](scenarios.md#BuildLikeBefore), [The laws of the kinds hold](scenarios.md#KindLaws)

<a id="TechnologyInOneNode"></a>

### A technology is chosen in one node

`TechnologyInOneNode` · `src/principles.ts:249` · status: **unknown**

What answers a port in an environment is said by a technical choice (a binding), never by the realization itself nor by the code that uses the port. A realization that touches nothing is a function; one that touches the platform is an implementation. The choice names the patterns it follows, and its shape is checked against them.

Context: Each implementation said which environments it served: the choice of a technology was spread over its realizations, nothing said why, and a test double or a repository over a database port had to be declared as if it touched the platform.

Consequences: A binding chooses the realizations of one or more ports in some environments, with its reasons and the options it rejected; changing a technology is writing its realization and changing that node. A realization is reached through its port only. Strategy, Adapter, Bridge, Abstract Factory and Repository are nodes: each says what shape it requires of a choice that follows it. A graph without bindings still works as before: an implementation that names its environments answers there.

| Rejected | Why |
|---|---|
| Environments named by each implementation | the choice is spread, and replacing a technology means editing every realization |
| A decision whose value names the technology, read by the code | a strategy hidden in a body, which the graph cannot follow |
| One kind per pattern | five mechanics for one idea: a port, its realizations, the choice that binds them |

- Decided by: trame
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applied by: [NodePlatform](platform.md#NodePlatform), [On a machine, Node.js reads, writes and runs](platform.md#NodeMachine), [Scenarios run in memory](platform.md#InMemoryScenarios), [esbuild bundles the page's program](platform.md#EsbuildBundles), [tree-sitter reads the bodies](platform.md#TreeSitterReads), [tsx runs TypeScript](platform.md#TsxRuns), [The TypeScript compiler reads the declarations](platform.md#CompilerReadsDeclarations), [The engine's own files sit beside its code](platform.md#EngineFilesBesideCode), [Documents in Markdown](rendering.md#DocumentsInMarkdown), [Figures in Mermaid](rendering.md#FiguresInMermaid), [The terminal in plain text](rendering.md#TerminalInText), [Figures in the terminal, as text](rendering.md#TerminalFiguresAsText), [The page in HTML](rendering.md#PageInHtml), [The page's figures in SVG](rendering.md#PageFiguresDrawn), [Strategy](../std/releases/0.33.0/docs/patterns.md#Strategy), [Adapter](../std/releases/0.33.0/docs/patterns.md#Adapter), [Bridge](../std/releases/0.33.0/docs/patterns.md#Bridge), [Abstract Factory](../std/releases/0.33.0/docs/patterns.md#AbstractFactory), [Repository](../std/releases/0.33.0/docs/patterns.md#Repository)

<a id="PreludeLayer"></a>

### The prelude: the runtime of the language

`PreludeLayer` · `src/principles.ts:269` · status: **held**

trame/ holds the registry of nodes and kinds, the API of kinds, the intermediate format, the vocabularies and formatting. It is written rarely, by hand, and the engine reaches it only through its public API.

Context: Kinds, views and the engine must share one registry and one format, as the runtime of a compiler is shared by what it compiles.

Consequences: The graph describes the prelude as a port; a body imports only its public API; a frozen program calls only its frozen API. The laws of kinds and views, and every generation that runs on it, protect it.

| Rejected | Why |
|---|---|
| The prelude as nodes | it is what nodes are made of: the graph cannot produce it |

- Decided by: trame
- Serves: [A specification that runs](product.md#ExecutableSpecification)
- Applied by: [Prelude](architecture.md#Prelude), [The prelude's public API](conventions.md#PreludeApi), [The frozen API](conventions.md#FrozenApi), [Laws](engine.md#Laws)

<a id="VocabularyLayer"></a>

### Kinds and views: the vocabulary, as reviewed files

`VocabularyLayer` · `src/principles.ts:283` · status: **held**

kinds/ and views/ say what a node can be and which questions are asked of the graph. An LLM proposes them, a person reviews them; typing and the laws protect them.

Context: The vocabulary changes less often than a product, and a mistake in it misleads every product that uses it.

Consequences: A project names the directories of its kinds and views (trame.json), so that several share them; each kind and each view is tried against its laws before anything is built.

- Decided by: trame
- Serves: [A specification that runs](product.md#ExecutableSpecification)
- Applied by: [Laws](engine.md#Laws), [Views](engine.md#Views), [Project](engine.md#Project)

<a id="GraphLayer"></a>

### The graph: the description of a product

`GraphLayer` · `src/principles.ts:296` · status: **held**

src/ holds a product's graph, written by an LLM together with the people who decide. The build protects it: holes, overlaps, criteria, scenarios.

Context: The description changes every day, live, while the people who decide talk with the LLM that writes it.

Consequences: Every build checks the whole graph and says what is undecided, contested, violated or untested, and who must act.

- Decided by: trame
- Serves: [A specification that runs](product.md#ExecutableSpecification)
- Applied by: [Compiler](engine.md#Compiler), [Build](commands.md#Build)

<a id="EngineLayer"></a>

### The engine: a graph like any product's

`EngineLayer` · `src/principles.ts:309` · status: **held**

In Trame's repository, src/ is the engine's graph and src/code/ holds one body per code node, whose dependencies are its parameters. The engine changes only there.

Context: The engine follows the rules it imposes on products, or those rules are not credible.

Consequences: The engine is a component (TrameCli) whose commands are entry points; its bodies pass the same checks as a product's; three architecture rules hold at every build.

- Decided by: trame
- Serves: [A specification that runs](product.md#ExecutableSpecification)
- Applied by: [Trame on the command line](architecture.md#TrameCli), [Rendering does not read the graph](architecture.md#RenderingWithoutGraph), [Only commands write](architecture.md#OnlyCommandsWrite), [Effects come from the vocabulary](architecture.md#KnownEffects)

<a id="GenerationLayer"></a>

### Generations: frozen engines

`GenerationLayer` · `src/principles.ts:322` · status: **held**

generations/ holds the engines that were accepted: each one assembled by the one before from the graph of its time, with a copy of that graph, never edited. Only g0 was written by hand.

Context: A described engine needs an engine to build it; the one that builds it must not change while it does.

Consequences: The language (prelude and kinds) stays shared through links until a change a generation cannot follow gives it its own copy. A wanted difference on the example is declared in the graph before it is accepted.

- Decided by: trame
- Serves: [A specification that runs](product.md#ExecutableSpecification)
- Applied by: [Advance](commands.md#Advance), [Accept a candidate](generations.md#AcceptCandidate), [The build writes the same documents as the engine in place](scenarios.md#BuildLikeBefore), [Expected differences on the example](scenarios.md#ExpectedDifferences)

<a id="LibrariesAreProjects"></a>

### A library is a Trame project, imported by path

`LibrariesAreProjects` · `src/principles.ts:335` · status: **held**

What is generic (structures, standards, design patterns, ports of the platform) lives in libraries: Trame projects with their own graph, documents and laws, which other projects import by name and path.

Context: Trame's graph held generic nodes every product needs (the structures bodies share, published standards, design patterns); the example copied some of them, and the next product would have copied them again: copies drift, and their issues are counted twice.

Consequences: A project names its libraries in its configuration (trame.json, under libraries), each by its name and its path. Their modules join its graph under the library's name (std/algebra); its nodes depend on theirs and its kinds read them. What a build shows as the project's own stops there: its documents link to the library's, which the library writes; its issues and its lock leave the library's out, and its index counts them apart. An advance builds Trame's libraries like the example, and a generation keeps a copy of each, which its program imports. A version of a library, frozen and released, comes with delivery.

| Rejected | Why |
|---|---|
| Copying the generic nodes into each project | what the example did: the copies drift |
| A folder of shared modules, without a project | its nodes would have no documents, no owner and no laws of their own |
| An npm package from the start | a release at each change, while the library is still taking shape; it comes when a version can be frozen |
| Modules named alike across projects | two libraries, or a library and a project, have modules of the same name (standards): the library's name keeps them apart |

- Decided by: trame
- Serves: [What is generic is written once](product.md#WrittenOnce)
- Applied by: [Project](engine.md#Project), [Compiler](engine.md#Compiler), [Compilation API](engine.md#CompilationApi), [References](engine.md#References), [What belongs to a library](libraries.md#LibraryOfAModule), [Advance](commands.md#Advance)

<a id="LibrariesByName"></a>

### A library is imported by its name

`LibrariesByName` · `src/principles.ts:354` · status: **held**

Code names a library by its name (#std/algebra), never by a path into it; the project's import map, which trame manifest writes from its configuration, says where the name leads: the library as it is, or a version it froze.

Context: A project imported the standard library by paths (../std/src/algebra): moving to a frozen version would have meant rewriting every import, and nothing said which version the code was written against.

Consequences: trame.json names each library by a path, or by a path and a version (frozen under releases/<version> by trame release, with its documents). trame manifest writes the import map of the project's manifest (package.json, imports): #<name>/* leads to the library's sources, inside the package, or through a link under .trame/ when the library is outside it. The engine gives the TypeScript compiler the same names, leading to the sources as they are on disk (it does not follow a link of the package as Node.js does). The laws refuse a file of the project that reaches into a library by a path. A release copies the library's graph, code and documents, writes again from the copy's place the imports that leave the library (the language), and is written in the library's module of releases, never in its own copy.

| Rejected | Why |
|---|---|
| Paths into the library | every import changes with the version, and the code does not say which library it reads |
| An alias in the TypeScript configuration only | TypeScript would resolve it, Node.js and the bundler would not |
| An npm package at once | a registry and a publication for a library that changes with the product; it can come later, the import map then leads to the package |
| A link to the library under node_modules | the TypeScript compiler refuses a module of TypeScript found there |
| Links to the language beside the releases | the TypeScript compiler keeps the linked path, and would read the kinds twice |

- Decided by: trame
- Serves: [What is generic is written once](product.md#WrittenOnce)
- Applied by: [Project](engine.md#Project), [Laws](engine.md#Laws), [Write the manifest](commands.md#WriteManifest), [Release a version](commands.md#Release), [A release is settled](libraries.md#ReleaseIsSettled), [Names of a library's releases](libraries.md#LibraryReleaseNames)

<a id="PackagesByName"></a>

### A package is used by its name

`PackagesByName` · `src/principles.ts:374` · status: **held**

Every package names what it uses, the language included: #trame/kernel and #trame/kinds/… as #std/…; where each name leads is the project's import map, and where the package comes from is a port with its strategies.

Context: Projects lived inside Trame's repository and reached its language by relative paths (../../kinds, ../../../trame/kernel): none could move out, a release had to write its imports again, and nothing in a project said which generation's language it was written in.

Consequences: A project names the language as it names a library: its import map, written by trame manifest, leads #trame/kernel and #trame/kinds/* to the generation it pins, through a link under .trame/ that an advance moves with the pin. Its kinds and views are the language's, from the engine that reads it, and those it names besides. The language's home, Trame's repository, reaches them where they are; the engine leads TypeScript to the files where they are, never through a link (g88). A relative import that leaves its package refuses the build and says the name to write (g89). trame init starts a project already named so. Where a package comes from is std's port PackageSources: a local path now, a registry later.

| Rejected | Why |
|---|---|
| Relative paths between packages | they hold only while the packages sit side by side, and a frozen copy reaches whatever is there then |
| A path mapping in each project's compiler options | the program that runs the graph would not read it; the import map is what Node.js and TypeScript both read |
| Trame installed from a registry at once | a publication at each generation while the language changes with each one; the registry is the second strategy of the same port |

- Decided by: trame
- Serves: [What is generic is written once](product.md#WrittenOnce)
- Applied by: [Project](engine.md#Project), [Write the manifest](commands.md#WriteManifest), [Packages by their origin](platform.md#PackagesByOrigin), [Each package comes from where its reference says](platform.md#PackagesByTheirOrigin), [Advance](commands.md#Advance), [Laws](engine.md#Laws), [Start a project](commands.md#Init)

<a id="DeliveredByTheGraph"></a>

### A product is delivered by a node of the graph

`DeliveredByTheGraph` · `src/principles.ts:393` · status: **held**

How a component reaches the people who use it is a delivery (kind delivery): the component, the environment it is assembled for, a target, where it is written. trame deliver writes it; a new target is a new word of DeliveryTarget and what trame deliver does for it.

Context: An application is opened in a browser, then installed on phones: the steps from the graph to what people open (assemble, bundle, wrap in a document, then a web application and Capacitor) were nowhere, and each product would have written them in a script.

Consequences: The first target is a page a browser opens as it is: the component is assembled for its environment as trame assemble does, its program bundled with the page's bundler settings, its style sheets written after the variables they use, in one document with its language and its title. A delivery is refused while the graph is in error; its component must run in its environment.

| Rejected | Why |
|---|---|
| A script beside the graph | each product would write its own, and nothing would say what reaches people |
| The page Trame writes for its graph | it carries a compiled graph and its explorer: a product's page carries the product |

- Decided by: trame
- Serves: [A specification that runs](product.md#ExecutableSpecification)
- Applied by: [Deliver](commands.md#Deliver), [Style of a delivered page](delivery.md#DeliveredStyle)

<a id="DataAsDatasets"></a>

### The data a product carries is a dataset

`DataAsDatasets` · `src/principles.ts:410` · status: **held**

Rows a product carries (an app's poses, its sequences) are a node of the graph: typed rows, the key that names each, the rules each keeps, the languages its texts are written in; a review is evidence tied to what it saw.

Context: An app carries content written by some and checked by others, in several languages: as nodes, each pose would have been code; as loose files, nothing would check a row, say which text lacks a language, or know that a validated row has changed since.

Consequences: A dataset (kind dataset) holds its rows as a typed value, so the TypeScript compiler checks each row against its type; its rules run on each row at every build, and a broken one is an error naming the row; a text in several languages is an object keyed by the languages offered, and each must be there. A review is dated evidence on the dataset (the row, the language, who, and the fingerprint of what was seen): it holds while the row, in that language, still has that fingerprint, which the engine gives the kinds (lib.fingerprint). The dataset's status is held when every row is approved in every language. Wired as a dependency, it gives its rows, frozen into the program like any value.

| Rejected | Why |
|---|---|
| A node per row | content would be code, and a person who checks a text would read the graph |
| JSON files read by the engine | no type checks the rows; TypeScript does for typed rows, and the same rules can check a downloaded update |
| A review as a field of the row | the content would change when it is reviewed, and the fingerprint with it |

- Decided by: trame
- Serves: [A single source of truth](product.md#SingleSource)
- Applied by: [Fingerprints](engine.md#Fingerprints), [Graph](engine.md#GraphApi)

<a id="ShippedThroughTheGraph"></a>

### A version ships through the graph

`ShippedThroughTheGraph` · `src/principles.ts:431` · status: **unknown**

What makes a version available is declared in the project's graph: the artefacts it produces and what produces them (kind artifact), the checks a scenario in memory cannot make, run by a program of the SDLC or made by hand and signed by a role (kind check), the reviews and the role that gives them (kinds review and role), and the shipment that requires them and the programs that deploy it (kind shipment). trame ship and trame evidence record what was found, attributed to a person and tied to the fingerprint of what was seen; the next build reads it.

Context: Two products ship differently (a page placed where it is served, an engine frozen into a generation) and their pipelines lived in scripts and in their authors' heads: nothing said what had been checked, by whom, on which version, nor why a version could go.

Consequences: A shipment holds when each obligation holds; trame ship builds its artefacts, runs its checks, records the evidence (in the evidence directory, one file of the SDLC), refuses while an obligation does not hold and names its owner, deploys with the programs the graph names (assembled for the shipment's environment, tested in memory like any code), and writes a dossier. Evidence is an attribution today (who, when, on which fingerprint); a signature type in the graph can ask for more. Each project chooses its own obligations: the language gives the kinds, the project its SDLC.

| Rejected | Why |
|---|---|
| A continuous integration service's configuration | the steps and their reasons would live outside the graph, which would not know what was checked; such a service can run trame ship |
| Checks as scenarios only | a scenario runs in memory; opening the page delivered in a browser, or a phone in a hand, is evidence of another kind |
| A review as an approval in a pull request | it names neither what was seen nor in which language, and a later change does not undo it |

- Decided by: trame
- Serves: [A specification that runs](product.md#ExecutableSpecification)
- Applied by: [Ship](commands.md#Ship), [Record evidence](commands.md#RecordEvidence), [Evidence of the SDLC](shipping.md#SdlcEvidence), [Where the SDLC's evidence is kept](shipping.md#ShippingRecords), [Ship only what holds](shipping.md#ShipOnlyWhatHolds), [The next generation](sdlc.md#NextGeneration), [The candidate plays the laws](sdlc.md#CandidateKeepsTheLaws)

<a id="ActorsDeclared"></a>

### Who acts is declared

`ActorsDeclared` · `src/principles.ts:450` · status: **held**

The people, the agents and the machines that act in a project are actors of its graph (kind actor, in the language): a person, a team of actors, an agent that acts for people, a machine. An owner, a role's people, the evidence given name one of them by its handle; a name nobody declares is an error.

Context: An owner, a role's people and the evidence given were texts nobody checked: a typo made a new person, a team (trame) was no one in particular, and nothing could say that Claude acts for ghalaax, or a runner for whoever started it (C4).

Consequences: The language holds the kind actor (its handle, what it is, a team's members, its identities elsewhere). The compiler checks each owner of the project's nodes against the actors its graph declares, its own and its libraries' (owner-undeclared); a role checks its people (person-undeclared); an actor declared twice must say the same thing (actor-declared-twice). A project that declares none is told once (actors-undeclared). Trame's repository declares its people once, in the library team, which every project of it imports; trame init declares whoever starts a project. Evidence given on someone's behalf comes next.

| Rejected | Why |
|---|---|
| Composing: a vocabulary of the people | a word has no members, no identity elsewhere, and cannot say for whom it acts |
| Composing: the people of a role | a role says who may sign a kind of evidence; who owns a node is not a role, and a team is not a list of signatures |
| Owners as edges to actors | every node of every project would change its owner field at once; a text checked against the actors says the same |

- Decided by: trame
- Serves: [A specification that runs](product.md#ExecutableSpecification)
- Applied by: [Compiler](engine.md#Compiler), [Start a project](commands.md#Init)

<a id="WordsInCatalogs"></a>

### The words are in catalogs

`WordsInCatalogs` · `src/principles.ts:468` · status: **held**

What a part of the product says to people, in a terminal or a document, is written in a message catalog, in the decided language; code calls its messages by name.

Context: Words people read change for reasons code does not know (a clearer phrasing, another language), and they hold literals by nature.

Consequences: A catalog's text is what it declares: it is not a literal to declare. The page, which runs where nothing is wired, calls the catalog of libs/documents' renderers directly. The reader and the checks of a body hold it: a sentence written in a body is a literal, an error.

| Rejected | Why |
|---|---|
| Texts in the code | a sentence to change would mean code to change, and no language could replace another |

- Decided by: trame
- Serves: [A single source of truth](product.md#SingleSource)
- Applied by: [Syntax reader](syntax.md#SyntaxReader), [Checks of a body](syntax.md#BodyChecks), [Messages of the compiler](messages.md#CompilerMessages), [Messages of the drivers](messages.md#DriverMessages), [Messages of the laws](messages.md#LawMessages), [Messages of the views](messages.md#ViewMessages), [Messages of the outputs](messages.md#OutputMessages), [Messages of trame dev](messages.md#DevMessages), [Messages of the commands](messages.md#CommandMessages), [Messages of an advance](messages.md#AdvanceMessages), [Messages of the platform](messages.md#PlatformMessages), [Messages of the scenarios](messages.md#ScenarioMessages)

<a id="PlayedInMemoryFirst"></a>

### What a command does is played in memory first

`PlayedInMemoryFirst` · `src/principles.ts:492` · status: **held**

Every program Trame runs (the engine's commands, the programs of its SDLC) is played by scenarios before it runs on a machine: in memory, over the disk as it is, with the doubles a scenario answers (the processes, the server, the repository, the settings of std's commands, the add-ons in an order of their own).

Context: A command writes files, starts programs and calls GitHub: checked only on a machine, a mistake would be met after it did its harm, and only by whoever runs it.

Consequences: Each port a command touches has a realization in memory, chosen in the environment Test; a scenario reads back what a command wrote. What only a machine can show (a browser, GitHub, the machine's programs) is proven by a check of a shipment.

| Rejected | Why |
|---|---|
| Scenarios on the disk | a scenario would leave files behind, and two scenarios would read each other's |
| Checks on a machine only | played at each shipment rather than at each build, by whoever has the machine |

- Decided by: trame
- Serves: [A specification that runs](product.md#ExecutableSpecification)
- Applied by: [Scenarios write in memory, over the disk](platform.md#FilesInMemoryOverTheDisk), [The SDLC in memory](sdlc.md#SdlcInMemory), [Trame's settings in the scenarios](sdlc.md#OurSettingsInTheScenarios), [The sample add-ons, second first](scenarios.md#SampleAddOnsInOrder)

<a id="RunsKept"></a>

### A run is kept while what it reads is as it was

`RunsKept` · `src/principles.ts:510` · status: **unknown**

A scenario played, the reading of TypeScript, the examples of a syntax element are given back while the code they wire and the files their project reads are as they were: on disk on a machine, where commands run as separate processes, in the process in the scenarios, which leave nothing behind.

Context: A build of Trame played its scenarios 2,030 times, a hundred of its hundred and forty seconds; a shipment compiled the same graph a dozen times with the same code (g74).

Consequences: A build after a change to one body plays again only the scenarios that wire it. Where a project compiled for a scenario lies in another's sources, its runs are kept beside that other (g126). Deleting the runs only costs time.

| Rejected | Why |
|---|---|
| Playing every scenario at every compilation | the same code on the same files gives the same result; a shipment took thirty-six minutes |
| A server that keeps them | one more process to start, for what files under the project do |

- Decided by: trame
- Serves: [A specification that runs](product.md#ExecutableSpecification)
- Applied by: [A run is kept while what it reads is as it was](platform.md#RunsByWhatTheyRead), [On a machine, runs are kept on disk](platform.md#RunsKeptOnDisk), [In the scenarios, runs are kept in the process](platform.md#RunsKeptInTheProcess)

<a id="EvidenceSealed"></a>

### Evidence is sealed

`EvidenceSealed` · `src/principles.ts:527` · status: **held**

Each record of evidence is sealed with what it says (an attribution: its SHA-256), the port Signatures realized so until keys are decided: a record changed afterwards no longer matches its seal and is not counted.

Context: The evidence of the SDLC is a file anyone can edit: a record changed by hand would count as if the engine had written it (g72).

Consequences: A record that no longer matches its seal is an error naming it. How a runner of GitHub signs, and where a person's keys live, are other realizations of the same port, to come with D2.

| Rejected | Why |
|---|---|
| A key now | where keys live is a question still open; the seal changes nothing to how a record is given |
| No seal, a rule in AGENTS.md | a rule nobody checks protects nothing |

- Decided by: trame
- Serves: [A specification that runs](product.md#ExecutableSpecification)
- Applied by: [Evidence sealed by attribution](shipping.md#SealedByAttribution)

<a id="AmendmentsBesideTheirValue"></a>

### An amendment sits beside the value it changes

`AmendmentsBesideTheirValue` · `src/principles.ts:544` · status: **held**

trame amend, and the page in trame dev, write an amendment into the module that declares the value, after it: whoever reads the module sees the value and what changed it.

Context: Every value of the graph can be amended from the page or the command line (A4); where the amendment goes decides who sees it.

Consequences: Where amendments go is the port Amendments: in the sources now; once the repository is where work is published, another realization.

| Rejected | Why |
|---|---|
| A file of amendments apart | the amendment would sit far from the value it changes, where nobody reading the module sees it |

- Decided by: trame
- Serves: [A single source of truth](product.md#SingleSource)
- Applied by: [Amendments go in the sources](platform.md#AmendmentsInPlace)

<a id="MachineQuestionsAsAddOns"></a>

### Every question of the machine is an add-on

`MachineQuestionsAsAddOns` · `src/principles.ts:558` · status: **unknown**

What trame doctor asks is answered by add-ons (decided 25 November): the engine's own, chosen in its graph and asked always, then the project's, which a provider's adapter or libs/machine offers and the project chooses.

Context: On 17 November a machine whose browsers had moved refused the check of the page, and trame doctor said nothing of it: what a project needs of its machine was not the engine's to know.

Consequences: A question lives with what needs it: the engine's with the engine, a provider's with its adapter, a command's with the command, the others in libs/machine. A check that runs doctor proves the project's add-ons.

| Rejected | Why |
|---|---|
| Every question in the engine | the engine would ask what only some projects need, and miss what a provider's version needs |

- Decided by: trame
- Serves: [A specification that runs](product.md#ExecutableSpecification)
- Applied by: [What the engine asks the machine](doctor.md#EngineQuestions), [What the machine must also have](sdlc.md#WhatTheMachineMustHave)

<a id="SdlcWithStdTooling"></a>

### Trame's SDLC runs with std's tooling

`SdlcWithStdTooling` · `src/principles.ts:573` · status: **unknown**

The programs of Trame's SDLC reach files, a browser and GitHub through std's ports, realized once in std: on the machine by its adapters (the engine's process, the disk, Playwright, GitHub's command line, its automatic merge), in memory in the scenarios. Trame adopts std's decisions on its tooling and on its repository.

Context: Trame's SDLC opens pages, sets its repository and merges pull requests, as every project's does: std realizes each provider once.

Consequences: A session of Claude Code merges through its proxy (AutoMergeInASession), a machine through GitHub's GraphQL (AutoMergeOnTheMachine): two realizations of one port, chosen per environment.

| Rejected | Why |
|---|---|
| Adapters of Trame's own | each project would write them again, differently |

- Decided by: trame
- Serves: [What is generic is written once](product.md#WrittenOnce)
- Applied by: [The SDLC on the machine](sdlc.md#SdlcOnTheMachine), [The repository's work on a machine](sdlc.md#RepositoryWorkOnAMachine), [GitHub merges once it holds, asked by its command line](sdlc.md#AutoMergeOnTheMachine), [GitHub merges once it holds, asked in a session](sdlc.md#AutoMergeInASession)
- Adopts: [The SDLC's tooling is realized once](../std/releases/0.33.0/docs/tooling.md#ToolingAsPorts), [A repository is set by its project's graph](../std/releases/0.33.0/docs/repository.md#RepositoryThroughItsApi)

<a id="CommandsFromLibraries"></a>

### Trame runs the commands libraries offer

`CommandsFromLibraries` · `src/principles.ts:588` · status: **unknown**

Opening a pull request, merging it, carrying a version across the repository (std's), what a build would change (libs/commands'): Trame chooses them, with its decisions as their settings, and adopts the libraries' decision.

Context: Pull requests and propagations were done by hand, differently each time; the engine's commands reached its modules, out of every project's reach.

Consequences: A command a library offers changes with a release of the library; Trame's settings stay Trame's decisions. Chosen in Local, plan asks for no environment.

| Rejected | Why |
|---|---|
| Commands of Trame's own | any project of a repository opens pull requests and plans a build: written once, chosen by each |

- Decided by: trame
- Serves: [What is generic is written once](product.md#WrittenOnce)
- Applied by: [The commands Trame takes from std](sdlc.md#CommandsOfStd), [The commands Trame takes from libs/commands](sdlc.md#CommandsWrittenOnce)
- Adopts: [A library offers commands, a project chooses them](../std/releases/0.33.0/docs/commands.md#CommandsOfALibrary)

<a id="EngineProvidesForTrame"></a>

### The engine is a provider, for Trame too

`EngineProvidesForTrame` · `src/principles.ts:603` · status: **unknown**

A command, a language of a library, reach the engine through std's ports of its primitives, which the engine realizes through its API (E3): Trame adopts std's decision, for the commands it takes and the languages it reads.

Context: Trame is the engine's home: its own commands could reach the engine's modules directly, which a project's command cannot.

Consequences: What Trame's commands and std's languages reach of the engine is what any project's reach: the API the language defines.

| Rejected | Why |
|---|---|
| Direct access for Trame | the commands written once would not run elsewhere as they run here |

- Decided by: trame
- Serves: [What is generic is written once](product.md#WrittenOnce)
- Applied by: [The commands Trame takes from libs/commands](sdlc.md#CommandsWrittenOnce), [std's languages, read by the engine](syntax.md#StdLanguagesRead)
- Adopts: [The engine is a provider](../std/releases/0.33.0/docs/engine.md#EngineAsAProvider)

## Trame · Rendering

<a id="MeaningThenLook"></a>

### Kinds and views say what; renderers say how

`MeaningThenLook` · `src/rendering.ts:137` · status: **held**

Kinds and views describe meaning only, in an intermediate format of blocks and inlines (values with their unit, references, statuses, cards, figures); renderers choose the look: Markdown with Mermaid figures, terminal text, HTML.

Context: The same answer is read in a review, in a terminal, in a page and by an agent; a kind written for one format would be wrong in the others.

Consequences: Three points of extension: a kind says what a node is, a view which question is asked, a syntax in which format the answer comes. Renderers compose the syntax elements of their format and never read the graph.

| Rejected | Why |
|---|---|
| Kinds that write Markdown | one format only, and the page would have to parse it back |

- Decided by: trame
- Serves: [A specification that runs](product.md#ExecutableSpecification)
- Applied by: [Rendering of the files](../libs/documents/releases/0.5.1/docs/rendering.md#FileRendering), [Rendering in the terminal](../libs/documents/releases/0.5.1/docs/rendering.md#TerminalRendering), [Rendering in the page](../libs/documents/releases/0.5.1/docs/rendering.md#PageRendering), [Common rendering](../libs/documents/releases/0.5.1/docs/rendering.md#Common), [Rendering does not read the graph](architecture.md#RenderingWithoutGraph)

<a id="RenderedByTheLibrary"></a>

### Trame's documents, rendered by the library of documents

`RenderedByTheLibrary` · `src/rendering.ts:164` · status: **held**

The renderers are libs/documents': Trame chooses their syntaxes for its files, its terminal and its page.

Context: The renderers were the engine's: the commands of every project need them (build, view, snapshot), and a project's own command could not reach them (decided 26 November).

Consequences: Trame's commands use the library's renderers as they use std's structures; the page's syntax and figures moved there with the page (documents 0.5.0).

| Rejected | Why |
|---|---|
| Renderers kept in the engine | a command moved out of the engine would lose what writes its documents |

- Decided by: trame
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applied by: [Documents in Markdown](rendering.md#DocumentsInMarkdown), [Figures in Mermaid](rendering.md#FiguresInMermaid), [The terminal in plain text](rendering.md#TerminalInText), [Figures in the terminal, as text](rendering.md#TerminalFiguresAsText), [The page in HTML](rendering.md#PageInHtml), [The page's figures in SVG](rendering.md#PageFiguresDrawn), [The formats of a command's documents](rendering.md#AnswersAsChosen)
- Adopts: [One renderer, its syntax a choice](../libs/documents/releases/0.5.1/docs/rendering.md#OneRendererManySyntaxes)

## Trame · Syntax

<a id="ReadLanguagesAlike"></a>

### Every language is read alike, with tree-sitter

`ReadLanguagesAlike` · `src/syntax.ts:296` · status: **held**

A language is a node of the graph: its grammar, its queries, the escapes of its texts, examples of what must be found. One reader reads every body with it, and knows the captures of the queries, not the node types of any grammar.

Context: Trame reads bodies to check them and to find their literals, in every language a product's bodies are written in: TypeScript and Terraform today.

Consequences: The checks of a body are the same for every language; the queries of a language are checked against what tree-sitter evaluates, and its examples are played at every build; the port SyntaxTrees is the only place that touches tree-sitter, and no tree crosses it.

| Rejected | Why |
|---|---|
| The TypeScript compiler API | it reads one language, and each other one would need a reader of its own |
| Regular expressions | the old Terraform driver: blind to texts, comments and nesting |

- Decided by: trame
- Serves: [A specification that runs](product.md#ExecutableSpecification)
- Applied by: [Syntax reader](syntax.md#SyntaxReader), [Checks of a body](syntax.md#BodyChecks), [Syntax trees](architecture.md#SyntaxTrees)

<a id="PredicatesAsTreeSitterReadsThem"></a>

### tree-sitter says what it keeps aside

`PredicatesAsTreeSitterReadsThem` · `src/syntax.ts:313` · status: **held**

The predicates of a query that tree-sitter does not evaluate are those tree-sitter itself keeps aside when it compiles the query: no pattern of Trame's looks for them.

Context: The kind of a language looked for the predicates of its queries with a pattern of its own (a number sign, a name, a question or an exclamation mark): it said again what the grammar of queries says, a text inside a query could fool it, and it was a literal of the language.

Consequences: The port SyntaxTrees gives, for a query, the predicates tree-sitter keeps aside when it compiles it; the reader gives them by query; the kind of a language makes each one an error. The constants of TreeSitterQueries say which predicates tree-sitter evaluates; the standard names its highlighting, "scheme", until a package gives the grammar of queries, which would let Trame read them as a language.

| Rejected | Why |
|---|---|
| A syntax element for a predicate | it would say how a predicate is written, and still need a pattern to find one in a query |
| A pattern among the standard's constants | it would count as one more predicate tree-sitter evaluates |
| The queries as a language now | no maintained package gives their grammar in WebAssembly |

- Decided by: trame
- Serves: [A specification that runs](product.md#ExecutableSpecification)
- Applied by: [Syntax reader](syntax.md#SyntaxReader), [Syntax trees](architecture.md#SyntaxTrees)
