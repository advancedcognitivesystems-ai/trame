# Technical choices

*What answers each port in each environment on 30 October 2026: a technical choice says what it chooses, where, the patterns it follows, why, and what it rejected. The code that uses a port never names what answers it.*

> **36 technical choices for 65 ports, in 4 environments**

| Port | Local | A session of Claude Code | Test | Browser |
|---|---|---|---|---|
| [Prelude](architecture.md#Prelude) | [Trame's prelude](platform.md#TramePrelude) | — | [Trame's prelude](platform.md#TramePrelude) | — |
| [Where an amendment goes](architecture.md#AmendmentPlace) | [Amendments in place](platform.md#InPlaceSources) | — | [Amendments in place](platform.md#InPlaceSources) | — |
| [File reading](architecture.md#FileReading) | [System files, for reading](platform.md#DiskReading) | — | [Files in memory, over the disk](platform.md#MemoryFiles) | — |
| [File writing](architecture.md#FileWriting) | [System files, for writing](platform.md#DiskWriting) | — | [Files in memory, over the disk](platform.md#MemoryFiles) | — |
| [Paths](architecture.md#Paths) | [Node paths](platform.md#NodePaths) | — | [Node paths](platform.md#NodePaths) | — |
| [Module loader](architecture.md#ModuleLoader) | [tsx loader](platform.md#TsxLoader) | — | [tsx loader](platform.md#TsxLoader) | — |
| [Syntax trees](architecture.md#SyntaxTrees) | [tree-sitter in WebAssembly](platform.md#WebTreeSitter) | — | [tree-sitter in WebAssembly](platform.md#WebTreeSitter) | — |
| [TypeScript compiler](architecture.md#TypeScriptCompiler) | [TypeScript compiler](platform.md#RealTypeScript) | — | [TypeScript compiler](platform.md#RealTypeScript) | — |
| [Hashing](architecture.md#Hashing) | [SHA-256 hashes](platform.md#NodeHashing) | — | [SHA-256 hashes](platform.md#NodeHashing) | — |
| [Signatures](architecture.md#Signatures) | [Attribution](shipping.md#Attribution) | — | [Attribution](shipping.md#Attribution) | — |
| [Results kept](architecture.md#KeptResults) | [Results kept in the process](platform.md#ResultsInTheProcess) | — | [Results kept in the process](platform.md#ResultsInTheProcess) | — |
| [Runs kept](architecture.md#KeptRuns) | [The runs of a project](engine.md#ProjectRuns) | — | [The runs of a project](engine.md#ProjectRuns) | — |
| [Where runs are kept](architecture.md#RunStore) | [Runs kept on disk](platform.md#RunsOnDisk) | — | [Runs kept in the process](platform.md#RunsInTheProcess) | — |
| [Process](architecture.md#Process) | [Node process](platform.md#NodeProcess) | — | [Example process](platform.md#ExampleProcess) | — |
| [Terminal](architecture.md#Terminal) | [Node terminal](platform.md#NodeTerminal) | — | [Terminal in memory](platform.md#MemoryTerminal) | — |
| [Clock](architecture.md#Clock) | [System clock](platform.md#SystemClock) | — | [Stopped clock](platform.md#StoppedClock) | — |
| [Timer](architecture.md#Timer) | [Node timer](platform.md#NodeTimer) | — | [Node timer](platform.md#NodeTimer) | — |
| [HTTP server](architecture.md#HttpServer) | [Node HTTP server](platform.md#NodeHttpServer) | — | [A server in memory](platform.md#MemoryHttpServer) | — |
| [Bundler](architecture.md#Bundler) | [esbuild](platform.md#Esbuild) | — | [esbuild](platform.md#Esbuild) | — |
| [Reports on packages](architecture.md#PackageReports) | [npm's reports](platform.md#NpmReports) | — | [No registry in test](platform.md#NoReportsInTest) | — |
| [Packages installed](architecture.md#PackageInstalls) | [npm installs](platform.md#NpmInstall) | — | [No installer in test](platform.md#NoInstallsInTest) | — |
| [Compression](architecture.md#Compression) | [gzip, with Node's zlib](platform.md#NodeCompression) | — | [gzip, with Node's zlib](platform.md#NodeCompression) | — |
| [Page resources](architecture.md#Resources) | [Page resources](platform.md#PageResources) | — | [Page resources](platform.md#PageResources) | — |
| [Programs](architecture.md#Programs) | [Node programs](platform.md#NodePrograms) | — | [Example process](platform.md#ExampleProcess) | — |
| [File trees](architecture.md#FileTrees) | [Trees on disk](platform.md#DiskTrees) | — | [Files in memory, over the disk](platform.md#MemoryFiles) | — |
| [Command line](architecture.md#CommandLine) | [Command line](platform.md#NodeCommandLine) | — | [Command line](platform.md#NodeCommandLine) | — |
| [Window of the page](architecture.md#PageWindow) | — | — | — | [The browser's window](browser.md#BrowserWindow) |
| [Memory of the page](architecture.md#PageMemory) | — | — | — | [Local storage](browser.md#BrowserMemory) |
| [Feed of the graph](architecture.md#GraphFeed) | — | — | — | [The globals of the page, and trame dev](browser.md#BrowserFeed) |
| [Amendments from the page](architecture.md#PageAmendments) | — | — | — | [Amendments sent to trame dev](browser.md#BrowserAmendments) |
| [Decompression](architecture.md#Decompression) | — | — | — | [The browser's gzip](browser.md#BrowserDecompression) |
| [Write log](architecture.md#WriteLog) | — | — | [Files in memory, over the disk](platform.md#MemoryFiles) | — |
| [Terminal log](architecture.md#TerminalLog) | — | — | [Terminal in memory](platform.md#MemoryTerminal) | — |
| [Process log](architecture.md#ProcessLog) | — | — | [Example process](platform.md#ExampleProcess) | — |
| [Server log](architecture.md#ServerLog) | — | — | [A server in memory](platform.md#MemoryHttpServer) | — |
| [What the engine needs of the machine](doctor.md#EngineNeeds) | [The clock gives the day](doctor.md#ClockAnswers), [A file written is read back](doctor.md#FilesAnswer), [The installer installs what a manifest names and writes its lockfile](doctor.md#InstallerAnswers), [A program runs with the engine's loader, and prints what it says](doctor.md#ProgramsAnswer), [The registry answers about the packages](doctor.md#RegistryAnswers), [A run is kept, and given back until a file it read changes](doctor.md#RunsAnswer), [A server listens on a port the system gives](doctor.md#ServerAnswers), [The time passes](doctor.md#TimerAnswers), [A directory copied is the same as the original](doctor.md#TreesAnswer) | — | [The clock gives the day](doctor.md#ClockAnswers), [A file written is read back](doctor.md#FilesAnswer), [The installer installs what a manifest names and writes its lockfile](doctor.md#InstallerAnswers), [A program runs with the engine's loader, and prints what it says](doctor.md#ProgramsAnswer), [The registry answers about the packages](doctor.md#RegistryAnswers), [A run is kept, and given back until a file it read changes](doctor.md#RunsAnswer), [A server listens on a port the system gives](doctor.md#ServerAnswers), [The time passes](doctor.md#TimerAnswers), [A directory copied is the same as the original](doctor.md#TreesAnswer) | — |
| [Syntax of the page](rendering.md#PageSyntax) | [HTML writer](rendering.md#HtmlSyntax) | — | [HTML writer](rendering.md#HtmlSyntax) | — |
| [Figures of the page](rendering.md#PageFigures) | [Figures in SVG](rendering.md#SvgFigures) | — | [Figures in SVG](rendering.md#SvgFigures) | — |
| [A sample extension point](scenarios.md#SampleAddOns) | — | — | [The first sample add-on](scenarios.md#FirstSampleAddOn), [The second sample add-on](scenarios.md#SecondSampleAddOn) | — |
| [The language of the documents](../libs/documents/releases/0.4.0/docs/language.md#DocumentLanguage) | [The documents in Trame's language](documents.md#OurDocumentLanguage) | [The documents in Trame's language](documents.md#OurDocumentLanguage) | [The documents in Trame's language](documents.md#OurDocumentLanguage) | [The documents in Trame's language](documents.md#OurDocumentLanguage) |
| [Syntax of the documents written as files](../libs/documents/releases/0.4.0/docs/rendering.md#FileSyntax) | [Markdown writer](../libs/documents/releases/0.4.0/docs/rendering.md#MarkdownSyntax) | — | [Markdown writer](../libs/documents/releases/0.4.0/docs/rendering.md#MarkdownSyntax) | — |
| [Syntax of the terminal](../libs/documents/releases/0.4.0/docs/rendering.md#TerminalSyntax) | [Plain text writer](../libs/documents/releases/0.4.0/docs/rendering.md#PlainTextSyntax) | — | [Plain text writer](../libs/documents/releases/0.4.0/docs/rendering.md#PlainTextSyntax) | — |
| [Figures of the documents written as files](../libs/documents/releases/0.4.0/docs/rendering.md#FileFigures) | [Mermaid diagrams](../libs/documents/releases/0.4.0/docs/rendering.md#MermaidDiagrams) | — | [Mermaid diagrams](../libs/documents/releases/0.4.0/docs/rendering.md#MermaidDiagrams) | — |
| [Figures of the terminal](../libs/documents/releases/0.4.0/docs/rendering.md#TerminalFigures) | [Figures as text](../libs/documents/releases/0.4.0/docs/rendering.md#TextFigures) | — | [Figures as text](../libs/documents/releases/0.4.0/docs/rendering.md#TextFigures) | — |
| [What the machine runs](../libs/machine/releases/0.1.0/docs/machine.md#WhatTheMachineRuns) | [What the machine runs, for Trame](sdlc.md#OurMachineSettings) | [What the machine runs, for Trame](sdlc.md#OurMachineSettings) | — | — |
| [How pull requests are opened](../std/releases/0.31.0/docs/commands.md#PullRequestSettings) | [How Trame's pull requests are opened](sdlc.md#OurPullRequests) | [How Trame's pull requests are opened](sdlc.md#OurPullRequests) | [How Trame's pull requests are opened](sdlc.md#OurPullRequests) | — |
| [How a version is carried](../std/releases/0.31.0/docs/commands.md#PropagationSettings) | [How a version is carried across Trame's repository](sdlc.md#OurPropagation) | [How a version is carried across Trame's repository](sdlc.md#OurPropagation) | [How a version is carried across Trame's repository](sdlc.md#OurPropagation) | — |
| [The project at hand](../std/releases/0.31.0/docs/engine.md#TheProject) | [The project the engine prepared](../std/releases/0.31.0/docs/engine.md#ProjectInTheEngine) | — | — | — |
| [Reading a language](../std/releases/0.31.0/docs/engine.md#LanguageReading) | — | — | [Read by the engine](../std/releases/0.31.0/docs/engine.md#ReadByTheEngine) | — |
| [Loading of a page](../std/releases/0.31.0/docs/platform.md#PageLoading) | — | — | — | [The browser loads the page](../std/releases/0.31.0/docs/platform.md#BrowserLoading) |
| [A repository on GitHub](../std/releases/0.31.0/docs/repository.md#RepositoryApi) | [GitHub's command line](../std/releases/0.31.0/docs/repository.md#GitHubCliRepository) | [GitHub's command line](../std/releases/0.31.0/docs/repository.md#GitHubCliRepository) | [A repository kept in memory](../std/releases/0.31.0/docs/repository.md#RepositoryInMemory) | — |
| [The repositories a scenario keeps](../std/releases/0.31.0/docs/repository.md#RepositoryKept) | — | — | [A repository kept in memory](../std/releases/0.31.0/docs/repository.md#RepositoryInMemory) | — |
| [The branches](../std/releases/0.31.0/docs/repository.md#Branches) | [Git's branches](../std/releases/0.31.0/docs/repository.md#GitCliBranches) | [Git's branches](../std/releases/0.31.0/docs/repository.md#GitCliBranches) | — | — |
| [Pull requests](../std/releases/0.31.0/docs/repository.md#PullRequests) | [GitHub's pull requests, by its command line](../std/releases/0.31.0/docs/repository.md#GitHubCliPullRequests) | [GitHub's pull requests, by its command line](../std/releases/0.31.0/docs/repository.md#GitHubCliPullRequests) | — | — |
| [The automatic merge](../std/releases/0.31.0/docs/repository.md#AutoMerge) | [The automatic merge, by GitHub's command line](../std/releases/0.31.0/docs/repository.md#AutoMergeByGitHubCli) | [The automatic merge, in a session of Claude Code](../std/releases/0.31.0/docs/repository.md#AutoMergeInAClaudeSession) | — | — |
| [Commands of a program](../std/releases/0.31.0/docs/tooling.md#ProgramCommands) | [Commands run in the engine](../std/releases/0.31.0/docs/tooling.md#CommandsInTheEngine) | [Commands run in the engine](../std/releases/0.31.0/docs/tooling.md#CommandsInTheEngine) | — | — |
| [Formats of an answer](../std/releases/0.31.0/docs/tooling.md#AnswerFormats) | [Documents at a terminal](../libs/documents/releases/0.4.0/docs/rendering.md#AnswersAtATerminal), [Documents in Markdown](../libs/documents/releases/0.4.0/docs/rendering.md#AnswersInMarkdown), [Documents in JSON](../std/releases/0.31.0/docs/tooling.md#AnswersInJson) | — | [Documents at a terminal](../libs/documents/releases/0.4.0/docs/rendering.md#AnswersAtATerminal), [Documents in Markdown](../libs/documents/releases/0.4.0/docs/rendering.md#AnswersInMarkdown), [Documents in JSON](../std/releases/0.31.0/docs/tooling.md#AnswersInJson) | — |
| [What the machine must also have](../std/releases/0.31.0/docs/tooling.md#MachineNeeds) | [Git, installed](../libs/machine/releases/0.1.0/docs/machine.md#GitInstalled), [Node, recent enough](../libs/machine/releases/0.1.0/docs/machine.md#NodeRecentEnough), [The system, one the project runs on](../libs/machine/releases/0.1.0/docs/machine.md#SystemSupported), [Playwright's browser, installed](../std/releases/0.31.0/docs/tooling.md#PlaywrightBrowserInstalled) | [Git, installed](../libs/machine/releases/0.1.0/docs/machine.md#GitInstalled), [Node, recent enough](../libs/machine/releases/0.1.0/docs/machine.md#NodeRecentEnough), [The system, one the project runs on](../libs/machine/releases/0.1.0/docs/machine.md#SystemSupported), [Playwright's browser, installed](../std/releases/0.31.0/docs/tooling.md#PlaywrightBrowserInstalled) | — | — |
| [Project files](../std/releases/0.31.0/docs/tooling.md#Files) | [The machine's files](../std/releases/0.31.0/docs/tooling.md#MachineFiles) | [The machine's files](../std/releases/0.31.0/docs/tooling.md#MachineFiles) | [Files kept in memory](../std/releases/0.31.0/docs/tooling.md#FilesInMemory) | — |
| [Files written](../std/releases/0.31.0/docs/tooling.md#FilesKept) | — | — | [Files kept in memory](../std/releases/0.31.0/docs/tooling.md#FilesInMemory) | — |
| [Programs run](../std/releases/0.31.0/docs/tooling.md#ProgramRuns) | [Programs run by Node](../std/releases/0.31.0/docs/tooling.md#NodeProgramRuns) | [Programs run by Node](../std/releases/0.31.0/docs/tooling.md#NodeProgramRuns) | [Programs run in memory](../std/releases/0.31.0/docs/tooling.md#ProgramRunsInMemory) | — |
| [The programs a scenario keeps: the file it says a program writes is written when that program runs.](../std/releases/0.31.0/docs/tooling.md#ProgramRunsKept) | — | — | [Programs run in memory](../std/releases/0.31.0/docs/tooling.md#ProgramRunsInMemory) | — |
| [Headless browser](../std/releases/0.31.0/docs/tooling.md#HeadlessBrowser) | [Chromium, driven by Playwright](../std/releases/0.31.0/docs/tooling.md#PlaywrightBrowser) | [Chromium, driven by Playwright](../std/releases/0.31.0/docs/tooling.md#PlaywrightBrowser) | [A browser kept in memory](../std/releases/0.31.0/docs/tooling.md#BrowserInMemory) | — |
| [Browser script](../std/releases/0.31.0/docs/tooling.md#BrowserScripted) | — | — | [A browser kept in memory](../std/releases/0.31.0/docs/tooling.md#BrowserInMemory) | — |
| [Where a package comes from](../std/releases/0.31.0/docs/tooling.md#PackageSources) | [Packages by their origin](platform.md#PackagesByOrigin) | — | [Packages by their origin](platform.md#PackagesByOrigin) | — |

| Pattern | Status | Followed by |
|---|---|---|
| [Strategy](../std/releases/0.31.0/docs/patterns.md#Strategy) | **held** | [Documents written in Trame's language](documents.md#DocumentsInOurLanguage), [Scenarios run in memory](platform.md#InMemoryScenarios), [A run is kept while what it reads is as it was](platform.md#RunsByWhatTheyRead), [Documents in Markdown](rendering.md#DocumentsInMarkdown), [Figures in Mermaid](rendering.md#FiguresInMermaid), [The terminal in plain text](rendering.md#TerminalInText), [Figures in the terminal, as text](rendering.md#TerminalFiguresAsText), [The page in HTML](rendering.md#PageInHtml), [The page's figures in SVG](rendering.md#PageFiguresDrawn), [The SDLC in memory](sdlc.md#SdlcInMemory), [Trame's settings in the scenarios](sdlc.md#OurSettingsInTheScenarios), [Evidence sealed by attribution](shipping.md#SealedByAttribution), [Played on a small project](../libs/commands/releases/0.4.0/docs/scenarios.md#PlayedOnASmallProject), [Files in Markdown, the terminal in text](../libs/commands/releases/0.4.0/docs/scenarios.md#DocumentsAsFiles), [Figures in Mermaid and in text](../libs/commands/releases/0.4.0/docs/scenarios.md#FiguresOfTheDocuments), [In the language of libs/documents' scenarios](../libs/commands/releases/0.4.0/docs/scenarios.md#DocumentsLanguage), [The scenarios' language](../libs/documents/releases/0.4.0/docs/scenarios.md#InTheScenariosLanguage), [Files in Markdown](../libs/documents/releases/0.4.0/docs/scenarios.md#FilesInMarkdown), [Figures in Mermaid](../libs/documents/releases/0.4.0/docs/scenarios.md#FiguresInMermaid), [The terminal in text](../libs/documents/releases/0.4.0/docs/scenarios.md#TerminalInText), [Figures at a terminal, as text](../libs/documents/releases/0.4.0/docs/scenarios.md#TerminalFiguresAsText), [In memory](../std/releases/0.31.0/docs/scenarios.md#InMemory), [Judged as the language says](../std/releases/0.31.0/docs/scenarios.md#LanguageJudgment), [Judged strictly](../std/releases/0.31.0/docs/scenarios.md#StrictJudgment), [The scenarios' settings](../std/releases/0.31.0/docs/scenarios.md#ScenarioSettings) |
| [Adapter](../std/releases/0.31.0/docs/patterns.md#Adapter) | **held** | [The browser runs the page](browser.md#TheBrowserRunsThePage), [NodePlatform](platform.md#NodePlatform), [On a machine, Node.js reads, writes and runs](platform.md#NodeMachine), [Scenarios write in memory, over the disk](platform.md#FilesInMemoryOverTheDisk), [On a machine, runs are kept on disk](platform.md#RunsKeptOnDisk), [In the scenarios, runs are kept in the process](platform.md#RunsKeptInTheProcess), [esbuild bundles the page's program](platform.md#EsbuildBundles), [tree-sitter reads the bodies](platform.md#TreeSitterReads), [tsx runs TypeScript](platform.md#TsxRuns), [The TypeScript compiler reads the declarations](platform.md#CompilerReadsDeclarations), [The engine's own files sit beside its code](platform.md#EngineFilesBesideCode), [Each package comes from where its reference says](platform.md#PackagesByTheirOrigin), [Amendments go in the sources](platform.md#AmendmentsInPlace), [The SDLC on the machine](sdlc.md#SdlcOnTheMachine), [The repository's work on a machine](sdlc.md#RepositoryWorkOnAMachine), [GitHub merges once it holds, asked by its command line](sdlc.md#AutoMergeOnTheMachine), [GitHub merges once it holds, asked in a session](sdlc.md#AutoMergeInASession), [std's languages, read by the engine](syntax.md#StdLanguagesRead), [Compiled by the engine that plays them](../libs/commands/releases/0.4.0/docs/scenarios.md#CompiledByTheEngine), [Read by the engine](../libs/documents/releases/0.4.0/docs/scenarios.md#LanguagesRead), [Read by the engine that builds](../std/releases/0.31.0/docs/scenarios.md#ReadInTheEngine) |
| [Bridge](../std/releases/0.31.0/docs/patterns.md#Bridge) | **held** | [Documents in Markdown](rendering.md#DocumentsInMarkdown), [The terminal in plain text](rendering.md#TerminalInText), [The page in HTML](rendering.md#PageInHtml), [Files in Markdown, the terminal in text](../libs/commands/releases/0.4.0/docs/scenarios.md#DocumentsAsFiles), [Files in Markdown](../libs/documents/releases/0.4.0/docs/scenarios.md#FilesInMarkdown), [The terminal in text](../libs/documents/releases/0.4.0/docs/scenarios.md#TerminalInText) |
| [Abstract Factory](../std/releases/0.31.0/docs/patterns.md#AbstractFactory) | **held** | [NodePlatform](platform.md#NodePlatform), [On a machine, Node.js reads, writes and runs](platform.md#NodeMachine), [Scenarios run in memory](platform.md#InMemoryScenarios) |
| [Command](../std/releases/0.31.0/docs/patterns.md#Command) | **held** | [The commands Trame takes from std](sdlc.md#CommandsOfStd), [The commands Trame takes from libs/commands](sdlc.md#CommandsWrittenOnce) |
| [Plugin](../std/releases/0.31.0/docs/patterns.md#Plugin) | **held** | [What the engine asks the machine](doctor.md#EngineQuestions), [The formats of a command's documents](rendering.md#AnswersAsChosen), [The sample add-ons, second first](scenarios.md#SampleAddOnsInOrder), [What the machine must also have](sdlc.md#WhatTheMachineMustHave), [The formats of the answers](../libs/documents/releases/0.4.0/docs/scenarios.md#FormatsOfTheAnswers), [The formats of the scenarios](../std/releases/0.31.0/docs/scenarios.md#FormatsOfTheScenarios) |

## Trame · The page in a browser

<a id="TheBrowserRunsThePage"></a>

### The browser runs the page

`TheBrowserRunsThePage` · `src/browser.ts:132` · status: **unknown**

In the browser, the page loads, writes in its window, keeps the person's place, receives the graph and makes it whole again with what every browser has: the DOM, local storage, fetch and server-sent events, DecompressionStream.

In [Browser](architecture.md#Browser):

| Port | Answered by | Which is |
|---|---|---|
| [Amendments from the page](architecture.md#PageAmendments) | [Amendments sent to trame dev](browser.md#BrowserAmendments) | an implementation |
| [Decompression](architecture.md#Decompression) | [The browser's gzip](browser.md#BrowserDecompression) | an implementation |
| [Feed of the graph](architecture.md#GraphFeed) | [The globals of the page, and trame dev](browser.md#BrowserFeed) | an implementation |
| [Memory of the page](architecture.md#PageMemory) | [Local storage](browser.md#BrowserMemory) | an implementation |
| [Window of the page](architecture.md#PageWindow) | [The browser's window](browser.md#BrowserWindow) | an implementation |
| [Loading of a page](../std/releases/0.31.0/docs/platform.md#PageLoading) | [The browser loads the page](../std/releases/0.31.0/docs/platform.md#BrowserLoading) | an implementation |

Context: The page's script took what it needed from the browser itself, here and there: the graph could not say what the page asks of the browser, nor try it elsewhere.

Consequences: The browser's globals appear only in these implementations; the entry point and the explorer are bodies like any other, and their values are the graph's.

| Rejected | Why |
|---|---|
| A framework for the page | a dependency, and its own way of writing the page, for a page that writes HTML strings and listens to a few events |
| Libraries for storage and decompression | every browser the page targets has local storage and gzip |

- Decided by: trame
- Chooses: [The browser loads the page](../std/releases/0.31.0/docs/platform.md#BrowserLoading), [The browser's window](browser.md#BrowserWindow), [Local storage](browser.md#BrowserMemory), [The globals of the page, and trame dev](browser.md#BrowserFeed), [Amendments sent to trame dev](browser.md#BrowserAmendments), [The browser's gzip](browser.md#BrowserDecompression)
- In: [Browser](architecture.md#Browser)
- Follows: [Adapter](../std/releases/0.31.0/docs/patterns.md#Adapter)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [The page is assembled](browser.md#ThePageIsAssembled)

## Trame · Doctor

<a id="EngineQuestions"></a>

### What the engine asks the machine

`EngineQuestions` · `src/doctor.ts:200` · status: **held**

The questions trame doctor asks for the engine, in this order, on a machine and in the scenarios (where the machine is the one kept in memory). The server and the registry leave with the commands that need them (dev; audit, upgrade).

In [Local](architecture.md#Local), [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [What the engine needs of the machine](doctor.md#EngineNeeds) | [The clock gives the day](doctor.md#ClockAnswers) | an implementation |
| [What the engine needs of the machine](doctor.md#EngineNeeds) | [A file written is read back](doctor.md#FilesAnswer) | an implementation |
| [What the engine needs of the machine](doctor.md#EngineNeeds) | [The installer installs what a manifest names and writes its lockfile](doctor.md#InstallerAnswers) | an implementation |
| [What the engine needs of the machine](doctor.md#EngineNeeds) | [A program runs with the engine's loader, and prints what it says](doctor.md#ProgramsAnswer) | an implementation |
| [What the engine needs of the machine](doctor.md#EngineNeeds) | [The registry answers about the packages](doctor.md#RegistryAnswers) | an implementation |
| [What the engine needs of the machine](doctor.md#EngineNeeds) | [A run is kept, and given back until a file it read changes](doctor.md#RunsAnswer) | an implementation |
| [What the engine needs of the machine](doctor.md#EngineNeeds) | [A server listens on a port the system gives](doctor.md#ServerAnswers) | an implementation |
| [What the engine needs of the machine](doctor.md#EngineNeeds) | [The time passes](doctor.md#TimerAnswers) | an implementation |
| [What the engine needs of the machine](doctor.md#EngineNeeds) | [A directory copied is the same as the original](doctor.md#TreesAnswer) | an implementation |

Context: trame doctor answers in an empty directory and in a project whose graph does not load: what the engine needs to run is asked whatever the project says, as add-ons of its own, chosen here.

- Decided by: trame
- Chooses: [The clock gives the day](doctor.md#ClockAnswers), [A file written is read back](doctor.md#FilesAnswer), [A directory copied is the same as the original](doctor.md#TreesAnswer), [A program runs with the engine's loader, and prints what it says](doctor.md#ProgramsAnswer), [A run is kept, and given back until a file it read changes](doctor.md#RunsAnswer), [A server listens on a port the system gives](doctor.md#ServerAnswers), [The time passes](doctor.md#TimerAnswers), [The registry answers about the packages](doctor.md#RegistryAnswers), [The installer installs what a manifest names and writes its lockfile](doctor.md#InstallerAnswers)
- In: [Local](architecture.md#Local), [Test](architecture.md#Test)
- Follows: [Plugin](../std/releases/0.31.0/docs/patterns.md#Plugin)
- Applies: [Every question of the machine is an add-on](principles.md#MachineQuestionsAsAddOns)

## Trame · Documents

<a id="DocumentsInOurLanguage"></a>

### Documents written in Trame's language

`DocumentsInOurLanguage` · `src/documents.ts:31` · status: **held**

Wherever the engine, its commands and its page run, the documents are written in Trame's language.

In [Browser](architecture.md#Browser), [Local](architecture.md#Local), [A session of Claude Code](architecture.md#Session), [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [The language of the documents](../libs/documents/releases/0.4.0/docs/language.md#DocumentLanguage) | [The documents in Trame's language](documents.md#OurDocumentLanguage) | a function |

Context: The views speak the engine's language: what renders their documents, on a machine, in the scenarios or in the page, writes its dates, lists and marks.

- Decided by: trame
- Chooses: [The documents in Trame's language](documents.md#OurDocumentLanguage)
- In: [Local](architecture.md#Local), [A session of Claude Code](architecture.md#Session), [Test](architecture.md#Test), [Browser](architecture.md#Browser)
- Follows: [Strategy](../std/releases/0.31.0/docs/patterns.md#Strategy)
- Serves: [A single source of truth](product.md#SingleSource)
- Applies: [The punctuation is the language's](documents.md#PunctuationOfTheLanguage)

## Trame · Platform

<a id="NodePlatform"></a>

### NodePlatform

`NodePlatform` · `src/platform.ts:411` · status: **held**

In [Local](architecture.md#Local), [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Command line](architecture.md#CommandLine) | [Command line](platform.md#NodeCommandLine) | an implementation |
| [Compression](architecture.md#Compression) | [gzip, with Node's zlib](platform.md#NodeCompression) | an implementation |
| [Hashing](architecture.md#Hashing) | [SHA-256 hashes](platform.md#NodeHashing) | an implementation |
| [Paths](architecture.md#Paths) | [Node paths](platform.md#NodePaths) | an implementation |
| [Timer](architecture.md#Timer) | [Node timer](platform.md#NodeTimer) | an implementation |
| [Results kept](architecture.md#KeptResults) | [Results kept in the process](platform.md#ResultsInTheProcess) | an implementation |

Context: The bootstrap ran on Node.js, and the tools Trame uses are npm packages that resolve the Node way: the TypeScript compiler, esbuild, tsx, the tree-sitter grammars.

Consequences: Node's built-in modules appear only in these implementations; moving to another runtime is a new family of adapters and this choice changed, the engine untouched.

| Rejected | Why |
|---|---|
| Deno | its module resolution and its permissions would change how every package above loads |
| Bun | faster to start, but the WebAssembly grammars and the TypeScript compiler were not tried on it |

- Decided by: trame
- Chooses: [Node paths](platform.md#NodePaths), [SHA-256 hashes](platform.md#NodeHashing), [gzip, with Node's zlib](platform.md#NodeCompression), [Node timer](platform.md#NodeTimer), [Command line](platform.md#NodeCommandLine), [Results kept in the process](platform.md#ResultsInTheProcess)
- In: [Local](architecture.md#Local), [Test](architecture.md#Test)
- Follows: [Adapter](../std/releases/0.31.0/docs/patterns.md#Adapter), [Abstract Factory](../std/releases/0.31.0/docs/patterns.md#AbstractFactory)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A technology is chosen in one node](principles.md#TechnologyInOneNode)

<a id="NodeMachine"></a>

### On a machine, Node.js reads, writes and runs

`NodeMachine` · `src/platform.ts:430` · status: **unknown**

On the machine where trame is started, Node.js reads and writes the files, copies and compares trees, starts processes and other engines, serves HTTP, shows the terminal and gives the time.

In [Local](architecture.md#Local):

| Port | Answered by | Which is |
|---|---|---|
| [File reading](architecture.md#FileReading) | [System files, for reading](platform.md#DiskReading) | an implementation |
| [File trees](architecture.md#FileTrees) | [Trees on disk](platform.md#DiskTrees) | an implementation |
| [File writing](architecture.md#FileWriting) | [System files, for writing](platform.md#DiskWriting) | an implementation |
| [HTTP server](architecture.md#HttpServer) | [Node HTTP server](platform.md#NodeHttpServer) | an implementation |
| [Process](architecture.md#Process) | [Node process](platform.md#NodeProcess) | an implementation |
| [Programs](architecture.md#Programs) | [Node programs](platform.md#NodePrograms) | an implementation |
| [Terminal](architecture.md#Terminal) | [Node terminal](platform.md#NodeTerminal) | an implementation |
| [Packages installed](architecture.md#PackageInstalls) | [npm installs](platform.md#NpmInstall) | an implementation |
| [Reports on packages](architecture.md#PackageReports) | [npm's reports](platform.md#NpmReports) | an implementation |
| [Clock](architecture.md#Clock) | [System clock](platform.md#SystemClock) | an implementation |

Context: What changes the world (files written, processes, the terminal, the clock) is real only on a machine; the scenarios keep it in memory.

Consequences: Writing goes through FileWriting and FileTrees only, which the rule "Only commands write" checks; comparing trees uses GNU diff, through a process.

| Rejected | Why |
|---|---|
| A library to compare trees | GNU diff writes the unified format the advance keeps, and is on every machine that runs it |

- Decided by: trame
- Chooses: [System files, for reading](platform.md#DiskReading), [System files, for writing](platform.md#DiskWriting), [Trees on disk](platform.md#DiskTrees), [Node process](platform.md#NodeProcess), [Node programs](platform.md#NodePrograms), [Node terminal](platform.md#NodeTerminal), [System clock](platform.md#SystemClock), [npm's reports](platform.md#NpmReports), [npm installs](platform.md#NpmInstall), [Node HTTP server](platform.md#NodeHttpServer)
- In: [Local](architecture.md#Local)
- Follows: [Adapter](../std/releases/0.31.0/docs/patterns.md#Adapter), [Abstract Factory](../std/releases/0.31.0/docs/patterns.md#AbstractFactory)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A technology is chosen in one node](principles.md#TechnologyInOneNode)

<a id="FilesInMemoryOverTheDisk"></a>

### Scenarios write in memory, over the disk

`FilesInMemoryOverTheDisk` · `src/platform.ts:446` · status: **held**

In the scenarios, the files are read from the disk and what the engine writes is kept in memory over them: one adapter that reads Node's file system and never writes it; the installer writes its lockfile there too.

In [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [File reading](architecture.md#FileReading), [File trees](architecture.md#FileTrees), [File writing](architecture.md#FileWriting), [Write log](architecture.md#WriteLog) | [Files in memory, over the disk](platform.md#MemoryFiles) | an implementation |
| [Packages installed](architecture.md#PackageInstalls) | [No installer in test](platform.md#NoInstallsInTest) | an implementation |

Context: A scenario runs commands that write, then read what they wrote: a shipment rereads the evidence it recorded, a release reads the copy it froze.

Consequences: Reading and writing are one realization in the scenarios, so that what is written is read back; the disk is never written.

| Rejected | Why |
|---|---|
| Reading the disk, writing in memory, apart | what a command wrote could not be read back: the shipment, the release and the manifest would be verified nowhere |

- Decided by: trame
- Chooses: [Files in memory, over the disk](platform.md#MemoryFiles), [No installer in test](platform.md#NoInstallsInTest)
- In: [Test](architecture.md#Test)
- Follows: [Adapter](../std/releases/0.31.0/docs/patterns.md#Adapter)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [What a command does is played in memory first](principles.md#PlayedInMemoryFirst)

<a id="InMemoryScenarios"></a>

### Scenarios run in memory

`InMemoryScenarios` · `src/platform.ts:463` · status: **held**

In the scenarios, what the engine writes is kept in memory over the disk it reads, what it prints is kept, the clock is stopped on the day of the scenarios, the current directory is the example's (or the project a scenario enters), the programs it starts answer what the scenario says, and its server answers the scenario.

In [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Process](architecture.md#Process), [Process log](architecture.md#ProcessLog), [Programs](architecture.md#Programs) | [Example process](platform.md#ExampleProcess) | a function |
| [HTTP server](architecture.md#HttpServer), [Server log](architecture.md#ServerLog) | [A server in memory](platform.md#MemoryHttpServer) | a function |
| [Terminal](architecture.md#Terminal), [Terminal log](architecture.md#TerminalLog) | [Terminal in memory](platform.md#MemoryTerminal) | a function |
| [Reports on packages](architecture.md#PackageReports) | [No registry in test](platform.md#NoReportsInTest) | a function |
| [Clock](architecture.md#Clock) | [Stopped clock](platform.md#StoppedClock) | a function |

Context: A scenario runs the described engine on the example and reads what it wrote and printed; it must give the same result every day and leave nothing behind.

Consequences: These realizations touch nothing but the disk they read: the logs a scenario reads come with what writes them, chosen together. The disk, the processes and the server of a machine are verified by the checks the candidate runs on one.

| Rejected | Why |
|---|---|
| A temporary directory | slower, and a scenario could read what was written only through the platform |
| The system clock | the documents of the example would change every day |
| Commands that refuse in test | the advance, the release, the manifest, the shipment and trame dev would be verified nowhere |

- Decided by: trame
- Chooses: [Terminal in memory](platform.md#MemoryTerminal), [Stopped clock](platform.md#StoppedClock), [No registry in test](platform.md#NoReportsInTest), [Example process](platform.md#ExampleProcess), [A server in memory](platform.md#MemoryHttpServer)
- In: [Test](architecture.md#Test)
- Follows: [Strategy](../std/releases/0.31.0/docs/patterns.md#Strategy), [Abstract Factory](../std/releases/0.31.0/docs/patterns.md#AbstractFactory)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A technology is chosen in one node](principles.md#TechnologyInOneNode)

<a id="RunsByWhatTheyRead"></a>

### A run is kept while what it reads is as it was

`RunsByWhatTheyRead` · `src/platform.ts:483` · status: **held**

The runs of a project (its scenarios played) are told apart by the code they wire and the files the project reads; on a machine they are kept on disk, in the scenarios in the process.

In [Local](architecture.md#Local), [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Runs kept](architecture.md#KeptRuns) | [The runs of a project](engine.md#ProjectRuns) | a function |

Context: A build of Trame played its scenarios 2,030 times: Poselia's eleven times, the example's thirty-six, for a hundred seconds of the hundred and forty; a shipment compiles Trame's graph a dozen times with the same code.

Consequences: A scenario is played again only when the code it wires or a file its project reads has changed: a body or the declaration of a node changed plays again the scenarios that wire it, any other file (a kind, a helper in a module, a file of another project) all of them.

| Rejected | Why |
|---|---|
| Playing every scenario at every compilation | the same code on the same files gives the same result; a shipment took thirty-six minutes |

- Decided by: trame
- Chooses: [The runs of a project](engine.md#ProjectRuns)
- In: [Local](architecture.md#Local), [Test](architecture.md#Test)
- Follows: [Strategy](../std/releases/0.31.0/docs/patterns.md#Strategy)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A run is kept while what it reads is as it was](principles.md#RunsKept)

<a id="RunsKeptOnDisk"></a>

### On a machine, runs are kept on disk

`RunsKeptOnDisk` · `src/platform.ts:497` · status: **unknown**

In [Local](architecture.md#Local):

| Port | Answered by | Which is |
|---|---|---|
| [Where runs are kept](architecture.md#RunStore) | [Runs kept on disk](platform.md#RunsOnDisk) | an implementation |

Context: The commands of a shipment and of an advance run as separate processes, each compiling the same graph: what one played, the next can find only on disk.

Consequences: Each project keeps its runs under .trame/runs, by engine; the oldest go. Deleting the directory loses nothing but time.

| Rejected | Why |
|---|---|
| A server that keeps them | one more process to start, for what files under the project do |

- Decided by: trame
- Chooses: [Runs kept on disk](platform.md#RunsOnDisk)
- In: [Local](architecture.md#Local)
- Follows: [Adapter](../std/releases/0.31.0/docs/patterns.md#Adapter)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A run is kept while what it reads is as it was](principles.md#RunsKept)

<a id="RunsKeptInTheProcess"></a>

### In the scenarios, runs are kept in the process

`RunsKeptInTheProcess` · `src/platform.ts:511` · status: **held**

In [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Where runs are kept](architecture.md#RunStore) | [Runs kept in the process](platform.md#RunsInTheProcess) | an implementation |

Context: A scenario compiles its project again and again in memory: Poselia's scenarios were played eleven times in a build of Trame, the example's thirty-six.

Consequences: What a scenario of a scenario's project played is found again in the process while nothing it reads has changed; the disk is never written.

| Rejected | Why |
|---|---|
| On disk, as on a machine | a scenario must leave nothing behind |

- Decided by: trame
- Chooses: [Runs kept in the process](platform.md#RunsInTheProcess)
- In: [Test](architecture.md#Test)
- Follows: [Adapter](../std/releases/0.31.0/docs/patterns.md#Adapter)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A run is kept while what it reads is as it was](principles.md#RunsKept)

<a id="EsbuildBundles"></a>

### esbuild bundles the page's program

`EsbuildBundles` · `src/platform.ts:525` · status: **held**

In [Local](architecture.md#Local), [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Bundler](architecture.md#Bundler) | [esbuild](platform.md#Esbuild) | an implementation |

Context: The page's program is TypeScript in several modules, the graph's among them; a standalone page needs it as one script, built when the page is asked for.

| Rejected | Why |
|---|---|
| tsc alone | it compiles but does not bundle: the page would load its modules one by one |
| Rollup or webpack | plugins and configuration for what esbuild does in one call |

- Decided by: trame
- Chooses: [esbuild](platform.md#Esbuild)
- In: [Local](architecture.md#Local), [Test](architecture.md#Test)
- Follows: [Adapter](../std/releases/0.31.0/docs/patterns.md#Adapter)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A technology is chosen in one node](principles.md#TechnologyInOneNode)

<a id="TreeSitterReads"></a>

### tree-sitter reads the bodies

`TreeSitterReads` · `src/platform.ts:541` · status: **held**

In [Local](architecture.md#Local), [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Syntax trees](architecture.md#SyntaxTrees) | [tree-sitter in WebAssembly](platform.md#WebTreeSitter) | an implementation |

Context: Bodies are written in several languages (TypeScript, Terraform, CSS) and read alike, by one reader and the queries of each language.

| Rejected | Why |
|---|---|
| The TypeScript compiler's API | it reads TypeScript only: every other language would need its own parser |
| Regular expressions | the old drivers; they missed what a grammar sees |
| Native tree-sitter bindings | a compiler at install time; WebAssembly runs wherever Node does |

- Decided by: trame
- Chooses: [tree-sitter in WebAssembly](platform.md#WebTreeSitter)
- In: [Local](architecture.md#Local), [Test](architecture.md#Test)
- Follows: [Adapter](../std/releases/0.31.0/docs/patterns.md#Adapter)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A technology is chosen in one node](principles.md#TechnologyInOneNode)

<a id="TsxRuns"></a>

### tsx runs TypeScript

`TsxRuns` · `src/platform.ts:558` · status: **held**

In [Local](architecture.md#Local), [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Module loader](architecture.md#ModuleLoader) | [tsx loader](platform.md#TsxLoader) | an implementation |

Context: The graph, its bodies and the generations are TypeScript, run as they are written.

Consequences: The processes the engine starts import the same runner (the decision TypeScriptRunner).

| Rejected | Why |
|---|---|
| Compiling with tsc first | one more step, and each generation would keep JavaScript beside its sources |
| ts-node | slower to start than tsx, which already runs the engine |

- Decided by: trame
- Chooses: [tsx loader](platform.md#TsxLoader)
- In: [Local](architecture.md#Local), [Test](architecture.md#Test)
- Follows: [Adapter](../std/releases/0.31.0/docs/patterns.md#Adapter)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A technology is chosen in one node](principles.md#TechnologyInOneNode)

<a id="CompilerReadsDeclarations"></a>

### The TypeScript compiler reads the declarations

`CompilerReadsDeclarations` · `src/platform.ts:575` · status: **held**

In [Local](architecture.md#Local), [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [TypeScript compiler](architecture.md#TypeScriptCompiler) | [TypeScript compiler](platform.md#RealTypeScript) | an implementation |

Context: The static analysis needs what only types say: the type argument of a decision, the documentation comment of a declaration, the module a reference points to.

| Rejected | Why |
|---|---|
| tree-sitter alone | it sees the syntax, not the types |

- Decided by: trame
- Chooses: [TypeScript compiler](platform.md#RealTypeScript)
- In: [Local](architecture.md#Local), [Test](architecture.md#Test)
- Follows: [Adapter](../std/releases/0.31.0/docs/patterns.md#Adapter)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A technology is chosen in one node](principles.md#TechnologyInOneNode)

<a id="EngineFilesBesideCode"></a>

### The engine's own files sit beside its code

`EngineFilesBesideCode` · `src/platform.ts:589` · status: **held**

The prelude and the page's program and style sheets are found from the code of the platform, wherever the engine is.

In [Local](architecture.md#Local), [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Page resources](architecture.md#Resources) | [Page resources](platform.md#PageResources) | an implementation |
| [Prelude](architecture.md#Prelude) | [Trame's prelude](platform.md#TramePrelude) | an implementation |

Context: A frozen generation runs from its own directory, and reaches the shared language through links.

| Rejected | Why |
|---|---|
| A path set in a configuration | one more value to keep in step with where the generation is |

- Decided by: trame
- Chooses: [Trame's prelude](platform.md#TramePrelude), [Page resources](platform.md#PageResources)
- In: [Local](architecture.md#Local), [Test](architecture.md#Test)
- Follows: [Adapter](../std/releases/0.31.0/docs/patterns.md#Adapter)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A technology is chosen in one node](principles.md#TechnologyInOneNode)

<a id="PackagesByTheirOrigin"></a>

### Each package comes from where its reference says

`PackagesByTheirOrigin` · `src/platform.ts:672` · status: **held**

The language, std, geometry and the projects that use them may be reached by their path (a package developed beside the project) or from the registry of this machine (a version published); npm will be one more origin.

In [Local](architecture.md#Local), [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Where a package comes from](../std/releases/0.31.0/docs/tooling.md#PackageSources) | [Packages by their origin](platform.md#PackagesByOrigin) | an implementation |

Context: Each project names its packages by their names (E1); where a package comes from is the configuration the graph holds for each reference: a library developed beside the project is reached by its path, a version published from the registry (decided 1 November).

Consequences: The import map leads each name to where the strategy placed the package, through a link under .trame/; npm is one more origin, the code that uses a package untouched.

| Rejected | Why |
|---|---|
| One origin for every package of a project | a library developed beside the project and a version published elsewhere are both real cases |
| A link under node_modules | the TypeScript compiler refuses a module of TypeScript found there |

- Decided by: trame
- Chooses: [Packages by their origin](platform.md#PackagesByOrigin)
- In: [Local](architecture.md#Local), [Test](architecture.md#Test)
- Follows: [Adapter](../std/releases/0.31.0/docs/patterns.md#Adapter)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A package is used by its name](principles.md#PackagesByName)

<a id="AmendmentsInPlace"></a>

### Amendments go in the sources

`AmendmentsInPlace` · `src/platform.ts:690` · status: **held**

Until the repository takes them as pull requests, an amendment is written where the graph is: in its sources.

In [Local](architecture.md#Local), [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Where an amendment goes](architecture.md#AmendmentPlace) | [Amendments in place](platform.md#InPlaceSources) | an implementation |

Context: Every value the graph holds can be amended from the page or by trame amend (A4); where the amendment then goes is a choice that will change once the repository is the place work is published.

Consequences: The amendment is a declaration in the module of the node it amends, read and built like any other; a pull request will be another realization of the same port.

| Rejected | Why |
|---|---|
| A file of amendments apart | the amendment would sit far from the value it changes, where nobody reading the module sees it |

- Decided by: trame
- Chooses: [Amendments in place](platform.md#InPlaceSources)
- In: [Local](architecture.md#Local), [Test](architecture.md#Test)
- Follows: [Adapter](../std/releases/0.31.0/docs/patterns.md#Adapter)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [An amendment sits beside the value it changes](principles.md#AmendmentsBesideTheirValue)

## Trame · Rendering

<a id="DocumentsInMarkdown"></a>

### Documents in Markdown

`DocumentsInMarkdown` · `src/rendering.ts:104` · status: **held**

Trame's documents are written in Markdown: CommonMark, with GFM tables. They read as they are in a terminal or an editor, compare line by line in a review, and forges (GitHub, GitLab) as well as most editors display them formatted. HTML serves only for anchors and collapsible blocks.

In [Local](architecture.md#Local), [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Syntax of the documents written as files](../libs/documents/releases/0.4.0/docs/rendering.md#FileSyntax) | [Markdown writer](../libs/documents/releases/0.4.0/docs/rendering.md#MarkdownSyntax) | a function |

Context: The documents are read in reviews, in editors, on forges, and compared line by line by the advance: their syntax must be text that every one of them displays.

Consequences: Another syntax for the files is a realization of "Syntax of the documents written as files" and this choice changed: the renderer, the views and the kinds do not change; the figures stay a choice of their own.

| Rejected | Why |
|---|---|
| HTML only | unreadable as plain text, and a review no longer compares lines |
| AsciiDoc or reStructuredText | less well displayed by forges and editors |
| Plain text | no links, no tables, no figures |

- Decided by: trame
- Chooses: [Markdown writer](../libs/documents/releases/0.4.0/docs/rendering.md#MarkdownSyntax)
- In: [Local](architecture.md#Local), [Test](architecture.md#Test)
- Follows: [Bridge](../std/releases/0.31.0/docs/patterns.md#Bridge), [Strategy](../std/releases/0.31.0/docs/patterns.md#Strategy)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A technology is chosen in one node](principles.md#TechnologyInOneNode), [Trame's documents, rendered by the library of documents](rendering.md#RenderedByTheLibrary)

<a id="FiguresInMermaid"></a>

### Figures in Mermaid

`FiguresInMermaid` · `src/rendering.ts:124` · status: **held**

A figure (the layers of the graph, the tree of an impact, a timeline) is written in a document as a Mermaid diagram, in a "mermaid" block: GitHub, GitLab and most editors draw it, and it stays text, which a review compares line by line.

In [Local](architecture.md#Local), [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Figures of the documents written as files](../libs/documents/releases/0.4.0/docs/rendering.md#FileFigures) | [Mermaid diagrams](../libs/documents/releases/0.4.0/docs/rendering.md#MermaidDiagrams) | a function |

Context: A figure of a document must be drawn by the forges and editors that display the document, and stay text that a review compares.

Consequences: The Markdown writer puts the lines of a figure in a code block, in the language the drawing says: figures as text in the documents would be the text figures answering "Figures of the documents written as files" too, and this choice changed; the writer does not change.

| Rejected | Why |
|---|---|
| Images (SVG, PNG) | to regenerate at every change, and silent in a text review |
| Graphviz (DOT) | neither GitHub nor GitLab draws it |
| PlantUML | needs a rendering server |

- Decided by: trame
- Chooses: [Mermaid diagrams](../libs/documents/releases/0.4.0/docs/rendering.md#MermaidDiagrams)
- In: [Local](architecture.md#Local), [Test](architecture.md#Test)
- Follows: [Strategy](../std/releases/0.31.0/docs/patterns.md#Strategy)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A technology is chosen in one node](principles.md#TechnologyInOneNode), [Trame's documents, rendered by the library of documents](rendering.md#RenderedByTheLibrary)

<a id="TerminalInText"></a>

### The terminal in plain text

`TerminalInText` · `src/rendering.ts:143` · status: **held**

What a command prints is text, with the punctuation of documents: indented, aligned in columns, without marks.

In [Local](architecture.md#Local), [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Syntax of the terminal](../libs/documents/releases/0.4.0/docs/rendering.md#TerminalSyntax) | [Plain text writer](../libs/documents/releases/0.4.0/docs/rendering.md#PlainTextSyntax) | a function |

Context: A terminal shows characters: marks of a syntax (asterisks, pipes, tags) would be noise there.

Consequences: A view printed in Markdown is the --format md option, which renders with the files' renderer; a terminal syntax with colours would be another realization of "Syntax of the terminal".

| Rejected | Why |
|---|---|
| Markdown in the terminal | its marks are noise when they are not displayed |
| ANSI colours | lost in logs and pipes, and the scenarios compare text |

- Decided by: trame
- Chooses: [Plain text writer](../libs/documents/releases/0.4.0/docs/rendering.md#PlainTextSyntax)
- In: [Local](architecture.md#Local), [Test](architecture.md#Test)
- Follows: [Bridge](../std/releases/0.31.0/docs/patterns.md#Bridge), [Strategy](../std/releases/0.31.0/docs/patterns.md#Strategy)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A technology is chosen in one node](principles.md#TechnologyInOneNode), [Trame's documents, rendered by the library of documents](rendering.md#RenderedByTheLibrary)

<a id="TerminalFiguresAsText"></a>

### Figures in the terminal, as text

`TerminalFiguresAsText` · `src/rendering.ts:161` · status: **held**

In the terminal, a tree is drawn with box-drawing characters, a path step by step, a timeline as dated lines.

In [Local](architecture.md#Local), [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Figures of the terminal](../libs/documents/releases/0.4.0/docs/rendering.md#TerminalFigures) | [Figures as text](../libs/documents/releases/0.4.0/docs/rendering.md#TextFigures) | a function |

Context: A terminal draws no diagram: a figure must read as lines.

Consequences: The terminal syntax indents the lines of a figure like any other content.

| Rejected | Why |
|---|---|
| Mermaid in the terminal | its source does not read as a figure |

- Decided by: trame
- Chooses: [Figures as text](../libs/documents/releases/0.4.0/docs/rendering.md#TextFigures)
- In: [Local](architecture.md#Local), [Test](architecture.md#Test)
- Follows: [Strategy](../std/releases/0.31.0/docs/patterns.md#Strategy)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A technology is chosen in one node](principles.md#TechnologyInOneNode), [Trame's documents, rendered by the library of documents](rendering.md#RenderedByTheLibrary)

<a id="PageInHtml"></a>

### The page in HTML

`PageInHtml` · `src/rendering.ts:177` · status: **held**

The engine writes each document in HTML for the page, with the renderer of every other format: the page has no renderer of its own, and shows what the engine wrote.

In [Local](architecture.md#Local), [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Syntax of the page](rendering.md#PageSyntax) | [HTML writer](rendering.md#HtmlSyntax) | a function |

Context: The page wrote its own HTML from the intermediate format, in its script: a second renderer, outside the graph, whose words and layout could drift from the documents'.

Consequences: The payload holds each document in Markdown, in text and in HTML; the page puts the HTML in place and draws the explorer of a large graph. A page in another markup would be another realization of "Syntax of the page".

| Rejected | Why |
|---|---|
| HTML written by the page's script | a renderer outside the graph, with its own words |
| Markdown converted to HTML in the browser | a library in the page, and what Markdown cannot say (statuses, the views of a card) lost |

- Decided by: trame
- Chooses: [HTML writer](rendering.md#HtmlSyntax)
- In: [Local](architecture.md#Local), [Test](architecture.md#Test)
- Follows: [Bridge](../std/releases/0.31.0/docs/patterns.md#Bridge), [Strategy](../std/releases/0.31.0/docs/patterns.md#Strategy)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A technology is chosen in one node](principles.md#TechnologyInOneNode), [Trame's documents, rendered by the library of documents](rendering.md#RenderedByTheLibrary)

<a id="PageFiguresDrawn"></a>

### The page's figures in SVG

`PageFiguresDrawn` · `src/rendering.ts:196` · status: **held**

The engine draws the page's figures in SVG, beside their document: the page shows them as they are, and explores in the browser a graph too large to be read whole.

In [Local](architecture.md#Local), [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Figures of the page](rendering.md#PageFigures) | [Figures in SVG](rendering.md#SvgFigures) | a function |

Context: The page's script drew the figures, outside the graph, with its own geometry and its own words; only the exploration of a large graph needs the browser, where it follows the reader's clicks.

Consequences: Graphs, legends and timelines are written by the engine, with the geometry of the decisions of appearance; the place of an explored graph carries its index, and the page's script draws the explorer there.

| Rejected | Why |
|---|---|
| Mermaid in the page | a library of several hundred kilobytes, and diagrams that cannot be explored |
| Everything drawn by the page's script | a renderer outside the graph, whose numbers no decision holds |

- Decided by: trame
- Chooses: [Figures in SVG](rendering.md#SvgFigures)
- In: [Local](architecture.md#Local), [Test](architecture.md#Test)
- Follows: [Strategy](../std/releases/0.31.0/docs/patterns.md#Strategy)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A technology is chosen in one node](principles.md#TechnologyInOneNode), [Trame's documents, rendered by the library of documents](rendering.md#RenderedByTheLibrary)

<a id="AnswersAsChosen"></a>

### The formats of a command's documents

`AnswersAsChosen` · `src/rendering.ts:229` · status: **held**

What a command answers in documents (a view) is written at the terminal as text unless the line names another format: Markdown, with where each card is, or JSON, the intermediate format. The engine's own view writes with them.

In [Local](architecture.md#Local), [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Formats of an answer](../std/releases/0.31.0/docs/tooling.md#AnswerFormats) | [Documents at a terminal](../libs/documents/releases/0.4.0/docs/rendering.md#AnswersAtATerminal) | a function |
| [Formats of an answer](../std/releases/0.31.0/docs/tooling.md#AnswerFormats) | [Documents in Markdown](../libs/documents/releases/0.4.0/docs/rendering.md#AnswersInMarkdown) | a function |
| [Formats of an answer](../std/releases/0.31.0/docs/tooling.md#AnswerFormats) | [Documents in JSON](../std/releases/0.31.0/docs/tooling.md#AnswersInJson) | a function |

Context: --format is an option of every command (std's): the project chooses the formats it offers, its default first.

- Decided by: trame
- Chooses: [Documents at a terminal](../libs/documents/releases/0.4.0/docs/rendering.md#AnswersAtATerminal), [Documents in Markdown](../libs/documents/releases/0.4.0/docs/rendering.md#AnswersInMarkdown), [Documents in JSON](../std/releases/0.31.0/docs/tooling.md#AnswersInJson)
- In: [Local](architecture.md#Local), [Test](architecture.md#Test)
- Follows: [Plugin](../std/releases/0.31.0/docs/patterns.md#Plugin)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [Trame's documents, rendered by the library of documents](rendering.md#RenderedByTheLibrary)

## Trame · Scenarios

<a id="SampleAddOnsInOrder"></a>

### The sample add-ons, second first

`SampleAddOnsInOrder` · `src/scenarios.ts:403` · status: **held**

In the scenarios, the sample extension point is answered by both add-ons, in the order this choice gives them.

In [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [A sample extension point](scenarios.md#SampleAddOns) | [The first sample add-on](scenarios.md#FirstSampleAddOn) | a function |
| [A sample extension point](scenarios.md#SampleAddOns) | [The second sample add-on](scenarios.md#SecondSampleAddOn) | a function |

Context: An extension point is answered by every realization one choice makes, in its order: the scenario must see that order, not the order of the declarations.

- Decided by: trame
- Chooses: [The second sample add-on](scenarios.md#SecondSampleAddOn), [The first sample add-on](scenarios.md#FirstSampleAddOn)
- In: [Test](architecture.md#Test)
- Follows: [Plugin](../std/releases/0.31.0/docs/patterns.md#Plugin)
- Applies: [What a command does is played in memory first](principles.md#PlayedInMemoryFirst)

## Trame · SDLC

<a id="SdlcOnTheMachine"></a>

### The SDLC on the machine

`SdlcOnTheMachine` · `src/sdlc.ts:171` · status: **unknown**

On the machine, the programs of the SDLC offer their commands to the engine that runs them, in its own process (since g119), open pages in Chromium driven by Playwright, and set the repository on GitHub by its command line, as the standard library realizes them.

In [Local](architecture.md#Local), [A session of Claude Code](architecture.md#Session):

| Port | Answered by | Which is |
|---|---|---|
| [A repository on GitHub](../std/releases/0.31.0/docs/repository.md#RepositoryApi) | [GitHub's command line](../std/releases/0.31.0/docs/repository.md#GitHubCliRepository) | an implementation |
| [Commands of a program](../std/releases/0.31.0/docs/tooling.md#ProgramCommands) | [Commands run in the engine](../std/releases/0.31.0/docs/tooling.md#CommandsInTheEngine) | an implementation |
| [Headless browser](../std/releases/0.31.0/docs/tooling.md#HeadlessBrowser) | [Chromium, driven by Playwright](../std/releases/0.31.0/docs/tooling.md#PlaywrightBrowser) | an implementation |

Context: The graph page must be opened as a person opens it: the file exported, in a real browser; the repository is set and read by GitHub's command line, with the token of whoever runs it.

- Decided by: trame
- Chooses: [Commands run in the engine](../std/releases/0.31.0/docs/tooling.md#CommandsInTheEngine), [Chromium, driven by Playwright](../std/releases/0.31.0/docs/tooling.md#PlaywrightBrowser), [GitHub's command line](../std/releases/0.31.0/docs/repository.md#GitHubCliRepository)
- In: [Local](architecture.md#Local), [A session of Claude Code](architecture.md#Session)
- Follows: [Adapter](../std/releases/0.31.0/docs/patterns.md#Adapter)
- Applies: [Trame's SDLC runs with std's tooling](principles.md#SdlcWithStdTooling)

<a id="WhatTheMachineMustHave"></a>

### What the machine must also have

`WhatTheMachineMustHave` · `src/sdlc.ts:209` · status: **unknown**

trame doctor asks, besides what the engine asks, what Trame needs of its machine (since g120): the browser the version of Playwright Trame uses drives, installed (std's add-on, with its adapter); a system Trame runs on, Node recent enough and Git installed (libs/machine), as Trame's decision about its machines says.

In [Local](architecture.md#Local), [A session of Claude Code](architecture.md#Session):

| Port | Answered by | Which is |
|---|---|---|
| [What the machine must also have](../std/releases/0.31.0/docs/tooling.md#MachineNeeds) | [Git, installed](../libs/machine/releases/0.1.0/docs/machine.md#GitInstalled) | an implementation |
| [What the machine must also have](../std/releases/0.31.0/docs/tooling.md#MachineNeeds) | [Node, recent enough](../libs/machine/releases/0.1.0/docs/machine.md#NodeRecentEnough) | an implementation |
| [What the machine must also have](../std/releases/0.31.0/docs/tooling.md#MachineNeeds) | [The system, one the project runs on](../libs/machine/releases/0.1.0/docs/machine.md#SystemSupported) | an implementation |
| [What the machine runs](../libs/machine/releases/0.1.0/docs/machine.md#WhatTheMachineRuns) | [What the machine runs, for Trame](sdlc.md#OurMachineSettings) | a function |
| [What the machine must also have](../std/releases/0.31.0/docs/tooling.md#MachineNeeds) | [Playwright's browser, installed](../std/releases/0.31.0/docs/tooling.md#PlaywrightBrowserInstalled) | an implementation |

Context: On 17 November a machine whose browsers had moved refused the check of the page, and trame doctor said nothing of it; the pull requests and the propagation need Git, and the engine's loader Node 22.

- Decided by: trame
- Chooses: [Playwright's browser, installed](../std/releases/0.31.0/docs/tooling.md#PlaywrightBrowserInstalled), [The system, one the project runs on](../libs/machine/releases/0.1.0/docs/machine.md#SystemSupported), [Node, recent enough](../libs/machine/releases/0.1.0/docs/machine.md#NodeRecentEnough), [Git, installed](../libs/machine/releases/0.1.0/docs/machine.md#GitInstalled), [What the machine runs, for Trame](sdlc.md#OurMachineSettings)
- In: [Local](architecture.md#Local), [A session of Claude Code](architecture.md#Session)
- Follows: [Plugin](../std/releases/0.31.0/docs/patterns.md#Plugin)
- Applies: [Every question of the machine is an add-on](principles.md#MachineQuestionsAsAddOns)

<a id="SdlcInMemory"></a>

### The SDLC in memory

`SdlcInMemory` · `src/sdlc.ts:242` · status: **held**

In the scenarios, the browser shows the page a scenario writes, and the repository is kept in memory.

In [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [A repository on GitHub](../std/releases/0.31.0/docs/repository.md#RepositoryApi), [The repositories a scenario keeps](../std/releases/0.31.0/docs/repository.md#RepositoryKept) | [A repository kept in memory](../std/releases/0.31.0/docs/repository.md#RepositoryInMemory) | a function |
| [Browser script](../std/releases/0.31.0/docs/tooling.md#BrowserScripted), [Headless browser](../std/releases/0.31.0/docs/tooling.md#HeadlessBrowser) | [A browser kept in memory](../std/releases/0.31.0/docs/tooling.md#BrowserInMemory) | a function |
| [Project files](../std/releases/0.31.0/docs/tooling.md#Files), [Files written](../std/releases/0.31.0/docs/tooling.md#FilesKept) | [Files kept in memory](../std/releases/0.31.0/docs/tooling.md#FilesInMemory) | a function |
| [Programs run](../std/releases/0.31.0/docs/tooling.md#ProgramRuns), [The programs a scenario keeps: the file it says a program writes is written when that program runs.](../std/releases/0.31.0/docs/tooling.md#ProgramRunsKept) | [Programs run in memory](../std/releases/0.31.0/docs/tooling.md#ProgramRunsInMemory) | a function |

Context: A program of the SDLC is code like the engine's: its scenarios play it before it runs on a machine.

- Decided by: trame
- Chooses: [A browser kept in memory](../std/releases/0.31.0/docs/tooling.md#BrowserInMemory), [A repository kept in memory](../std/releases/0.31.0/docs/repository.md#RepositoryInMemory), [Programs run in memory](../std/releases/0.31.0/docs/tooling.md#ProgramRunsInMemory), [Files kept in memory](../std/releases/0.31.0/docs/tooling.md#FilesInMemory)
- In: [Test](architecture.md#Test)
- Follows: [Strategy](../std/releases/0.31.0/docs/patterns.md#Strategy)
- Applies: [What a command does is played in memory first](principles.md#PlayedInMemoryFirst)

<a id="CommandsOfStd"></a>

### The commands Trame takes from std

`CommandsOfStd` · `src/sdlc.ts:682` · status: **held**

pull-request, merge and propagate, on the machine and in a session of Claude Code, with Trame's settings.

In [Local](architecture.md#Local), [A session of Claude Code](architecture.md#Session):

| Port | Answered by | Which is |
|---|---|---|
| [How a version is carried](../std/releases/0.31.0/docs/commands.md#PropagationSettings) | [How a version is carried across Trame's repository](sdlc.md#OurPropagation) | a function |
| [How pull requests are opened](../std/releases/0.31.0/docs/commands.md#PullRequestSettings) | [How Trame's pull requests are opened](sdlc.md#OurPullRequests) | a function |
| the command merge | [Merge a pull request](../std/releases/0.31.0/docs/commands.md#MergePullRequest) | a command of a library |
| the command pull-request | [Open a pull request](../std/releases/0.31.0/docs/commands.md#OpenPullRequest) | a command of a library |
| the command propagate | [Propagate](../std/releases/0.31.0/docs/commands.md#Propagate) | a command of a library |

Context: Opening a pull request and carrying a version across the repository were done by hand, with gh and a loop of trame.sh, differently each time.

| Rejected | Why |
|---|---|
| Commands of Trame's own | any project of a repository opens pull requests: std writes them once, Trame chooses them |

- Decided by: trame
- Chooses: [Open a pull request](../std/releases/0.31.0/docs/commands.md#OpenPullRequest), [Merge a pull request](../std/releases/0.31.0/docs/commands.md#MergePullRequest), [Propagate](../std/releases/0.31.0/docs/commands.md#Propagate), [How Trame's pull requests are opened](sdlc.md#OurPullRequests), [How a version is carried across Trame's repository](sdlc.md#OurPropagation)
- In: [Local](architecture.md#Local), [A session of Claude Code](architecture.md#Session)
- Follows: [Command](../std/releases/0.31.0/docs/patterns.md#Command)
- Serves: [A specification that runs](product.md#ExecutableSpecification)
- Applies: [Trame runs the commands libraries offer](principles.md#CommandsFromLibraries)

<a id="CommandsWrittenOnce"></a>

### The commands Trame takes from libs/commands

`CommandsWrittenOnce` · `src/sdlc.ts:698` · status: **unknown**

What a build would change (trame plan) is the library's command, run in the engine's process on the project the engine prepared for it (std's ProjectInTheEngine), in place of the engine's own (g119): the commands of every project, written once on std's ports of the engine.

In [Local](architecture.md#Local):

| Port | Answered by | Which is |
|---|---|---|
| the command build | [Build](../libs/commands/releases/0.4.0/docs/commands.md#Build) | a command of a library |
| the command plan | [Plan](../libs/commands/releases/0.4.0/docs/commands.md#Plan) | a command of a library |
| the command snapshot | [Snapshot](../libs/commands/releases/0.4.0/docs/commands.md#Snapshot) | a command of a library |
| the command view | [View](../libs/commands/releases/0.4.0/docs/commands.md#View) | a command of a library |
| [The project at hand](../std/releases/0.31.0/docs/engine.md#TheProject) | [The project the engine prepared](../std/releases/0.31.0/docs/engine.md#ProjectInTheEngine) | an implementation |

Context: The engine's commands reached its modules directly: a project could neither choose them nor specialize them, and a command of its own could not compute what they computed.

Consequences: trame plan, build, snapshot and view run on a machine and in a session alike, chosen for Local only: the dispatch asks for no environment. The engine's own stay until the generation that removes the commands every project then runs from the library.

| Rejected | Why |
|---|---|
| The engine's own commands, kept | they would stay out of reach of every project's choice, and the engine the only one to reach its modules |

- Decided by: trame
- Chooses: [Plan](../libs/commands/releases/0.4.0/docs/commands.md#Plan), [Build](../libs/commands/releases/0.4.0/docs/commands.md#Build), [Snapshot](../libs/commands/releases/0.4.0/docs/commands.md#Snapshot), [View](../libs/commands/releases/0.4.0/docs/commands.md#View), [The project the engine prepared](../std/releases/0.31.0/docs/engine.md#ProjectInTheEngine)
- In: [Local](architecture.md#Local)
- Follows: [Command](../std/releases/0.31.0/docs/patterns.md#Command)
- Serves: [A specification that runs](product.md#ExecutableSpecification)
- Applies: [Trame runs the commands libraries offer](principles.md#CommandsFromLibraries), [The engine is a provider, for Trame too](principles.md#EngineProvidesForTrame)

<a id="RepositoryWorkOnAMachine"></a>

### The repository's work on a machine

`RepositoryWorkOnAMachine` · `src/sdlc.ts:714` · status: **unknown**

Git's command line for the branches, GitHub's for the pull requests, Node to run trame.sh in each project, and the machine's files; on the machine and in a session.

In [Local](architecture.md#Local), [A session of Claude Code](architecture.md#Session):

| Port | Answered by | Which is |
|---|---|---|
| [The branches](../std/releases/0.31.0/docs/repository.md#Branches) | [Git's branches](../std/releases/0.31.0/docs/repository.md#GitCliBranches) | an implementation |
| [Pull requests](../std/releases/0.31.0/docs/repository.md#PullRequests) | [GitHub's pull requests, by its command line](../std/releases/0.31.0/docs/repository.md#GitHubCliPullRequests) | an implementation |
| [Project files](../std/releases/0.31.0/docs/tooling.md#Files) | [The machine's files](../std/releases/0.31.0/docs/tooling.md#MachineFiles) | an implementation |
| [Programs run](../std/releases/0.31.0/docs/tooling.md#ProgramRuns) | [Programs run by Node](../std/releases/0.31.0/docs/tooling.md#NodeProgramRuns) | an implementation |

Context: A pull request is opened, and a version carried, from the repository checked out, with the rights of whoever runs it.

- Decided by: trame
- Chooses: [Git's branches](../std/releases/0.31.0/docs/repository.md#GitCliBranches), [GitHub's pull requests, by its command line](../std/releases/0.31.0/docs/repository.md#GitHubCliPullRequests), [Programs run by Node](../std/releases/0.31.0/docs/tooling.md#NodeProgramRuns), [The machine's files](../std/releases/0.31.0/docs/tooling.md#MachineFiles)
- In: [Local](architecture.md#Local), [A session of Claude Code](architecture.md#Session)
- Follows: [Adapter](../std/releases/0.31.0/docs/patterns.md#Adapter)
- Applies: [Trame's SDLC runs with std's tooling](principles.md#SdlcWithStdTooling)

<a id="AutoMergeOnTheMachine"></a>

### GitHub merges once it holds, asked by its command line

`AutoMergeOnTheMachine` · `src/sdlc.ts:726` · status: **unknown**

On a person's machine, gh pr merge --auto: GitHub's GraphQL.

In [Local](architecture.md#Local):

| Port | Answered by | Which is |
|---|---|---|
| [The automatic merge](../std/releases/0.31.0/docs/repository.md#AutoMerge) | [The automatic merge, by GitHub's command line](../std/releases/0.31.0/docs/repository.md#AutoMergeByGitHubCli) | an implementation |

Context: GitHub asks the automatic merge by GraphQL, which GitHub's command line calls with the token of the person.

- Decided by: trame
- Chooses: [The automatic merge, by GitHub's command line](../std/releases/0.31.0/docs/repository.md#AutoMergeByGitHubCli)
- In: [Local](architecture.md#Local)
- Follows: [Adapter](../std/releases/0.31.0/docs/patterns.md#Adapter)
- Applies: [Trame's SDLC runs with std's tooling](principles.md#SdlcWithStdTooling)

<a id="AutoMergeInASession"></a>

### GitHub merges once it holds, asked in a session

`AutoMergeInASession` · `src/sdlc.ts:738` · status: **unknown**

In a session of Claude Code, the route of its proxy: GraphQL is refused there.

In [A session of Claude Code](architecture.md#Session):

| Port | Answered by | Which is |
|---|---|---|
| [The automatic merge](../std/releases/0.31.0/docs/repository.md#AutoMerge) | [The automatic merge, in a session of Claude Code](../std/releases/0.31.0/docs/repository.md#AutoMergeInAClaudeSession) | an implementation |

Context: A session's proxy refuses GitHub's GraphQL, and offers PUT on the pull request's ccr/auto_merge instead.

- Decided by: trame
- Chooses: [The automatic merge, in a session of Claude Code](../std/releases/0.31.0/docs/repository.md#AutoMergeInAClaudeSession)
- In: [A session of Claude Code](architecture.md#Session)
- Follows: [Adapter](../std/releases/0.31.0/docs/patterns.md#Adapter)
- Applies: [Trame's SDLC runs with std's tooling](principles.md#SdlcWithStdTooling)

<a id="OurSettingsInTheScenarios"></a>

### Trame's settings in the scenarios

`OurSettingsInTheScenarios` · `src/sdlc.ts:750` · status: **held**

In the scenarios, std's commands read Trame's settings as on the machine.

In [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [How a version is carried](../std/releases/0.31.0/docs/commands.md#PropagationSettings) | [How a version is carried across Trame's repository](sdlc.md#OurPropagation) | a function |
| [How pull requests are opened](../std/releases/0.31.0/docs/commands.md#PullRequestSettings) | [How Trame's pull requests are opened](sdlc.md#OurPullRequests) | a function |

Context: What the settings give is played before a command of std reads them on the machine.

- Decided by: trame
- Chooses: [How Trame's pull requests are opened](sdlc.md#OurPullRequests), [How a version is carried across Trame's repository](sdlc.md#OurPropagation)
- In: [Test](architecture.md#Test)
- Follows: [Strategy](../std/releases/0.31.0/docs/patterns.md#Strategy)
- Applies: [What a command does is played in memory first](principles.md#PlayedInMemoryFirst)

## Trame · Shipping

<a id="SealedByAttribution"></a>

### Evidence sealed by attribution

`SealedByAttribution` · `src/shipping.ts:98` · status: **held**

Who gives evidence is attributed, and each record sealed with what it says, by the engine that writes it.

In [Local](architecture.md#Local), [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Signatures](architecture.md#Signatures) | [Attribution](shipping.md#Attribution) | a function |

Context: The evidence of the SDLC is a file anyone can edit: a record changed by hand would count as if the engine had written it, and AGENTS.md could only ask not to.

Consequences: Each record carries its seal; the compiler counts a record only while its seal matches, and says which one does not. A signature with a key is another realization of the same port, chosen here.

| Rejected | Why |
|---|---|
| A key now | where keys live is a question still open; the seal changes nothing to how a record is given |
| No seal, a rule in AGENTS.md | a rule nobody checks protects nothing |

- Decided by: trame
- Chooses: [Attribution](shipping.md#Attribution)
- In: [Local](architecture.md#Local), [Test](architecture.md#Test)
- Follows: [Strategy](../std/releases/0.31.0/docs/patterns.md#Strategy)
- Serves: [A specification that runs](product.md#ExecutableSpecification)
- Applies: [Evidence is sealed](principles.md#EvidenceSealed)

## Trame · Syntax

<a id="StdLanguagesRead"></a>

### std's languages, read by the engine

`StdLanguagesRead` · `src/syntax.ts:332` · status: **held**

Where Trame's build evaluates, the languages std declares for every project (HTML, CSS: their examples, and what Trame's syntax elements write in them) are read by the engine that compiles Trame, through std's port (since g129): the engine's reader, which its own languages name directly.

In [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Reading a language](../std/releases/0.31.0/docs/engine.md#LanguageReading) | [Read by the engine](../std/releases/0.31.0/docs/engine.md#ReadByTheEngine) | an implementation |

Context: A language std declares names std's port as its reader: the engine that compiles answers it, here as in any project that imports std.

- Decided by: trame
- Chooses: [Read by the engine](../std/releases/0.31.0/docs/engine.md#ReadByTheEngine)
- In: [Test](architecture.md#Test)
- Follows: [Adapter](../std/releases/0.31.0/docs/patterns.md#Adapter)
- Serves: [A specification that runs](product.md#ExecutableSpecification)
- Applies: [The engine is a provider, for Trame too](principles.md#EngineProvidesForTrame)
