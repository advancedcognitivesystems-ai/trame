# Technical choices

*What answers each port in each environment on 31 October 2026: a technical choice says what it chooses, where, the patterns it follows, why, and what it rejected. The code that uses a port never names what answers it.*

> **22 technical choices for 42 ports, in 3 environments**

| Port | Local | Test | Browser |
|---|---|---|---|
| [Prelude](architecture.md#Prelude) | [Trame's prelude](platform.md#TramePrelude) | [Trame's prelude](platform.md#TramePrelude) | — |
| [File reading](architecture.md#FileReading) | [System files, for reading](platform.md#DiskReading) | [Files in memory, over the disk](platform.md#MemoryFiles) | — |
| [File writing](architecture.md#FileWriting) | [System files, for writing](platform.md#DiskWriting) | [Files in memory, over the disk](platform.md#MemoryFiles) | — |
| [Paths](architecture.md#Paths) | [Node paths](platform.md#NodePaths) | [Node paths](platform.md#NodePaths) | — |
| [Module loader](architecture.md#ModuleLoader) | [tsx loader](platform.md#TsxLoader) | [tsx loader](platform.md#TsxLoader) | — |
| [Syntax trees](architecture.md#SyntaxTrees) | [tree-sitter in WebAssembly](platform.md#WebTreeSitter) | [tree-sitter in WebAssembly](platform.md#WebTreeSitter) | — |
| [TypeScript compiler](architecture.md#TypeScriptCompiler) | [TypeScript compiler](platform.md#RealTypeScript) | [TypeScript compiler](platform.md#RealTypeScript) | — |
| [Hashing](architecture.md#Hashing) | [SHA-256 hashes](platform.md#NodeHashing) | [SHA-256 hashes](platform.md#NodeHashing) | — |
| [Signatures](architecture.md#Signatures) | [Attribution](shipping.md#Attribution) | [Attribution](shipping.md#Attribution) | — |
| [Results kept](architecture.md#KeptResults) | [Results kept in the process](platform.md#ResultsInTheProcess) | [Results kept in the process](platform.md#ResultsInTheProcess) | — |
| [Runs kept](architecture.md#KeptRuns) | [The runs of a project](engine.md#ProjectRuns) | [The runs of a project](engine.md#ProjectRuns) | — |
| [Where runs are kept](architecture.md#RunStore) | [Runs kept on disk](platform.md#RunsOnDisk) | [Runs kept in the process](platform.md#RunsInTheProcess) | — |
| [Process](architecture.md#Process) | [Node process](platform.md#NodeProcess) | [Example process](platform.md#ExampleProcess) | — |
| [Terminal](architecture.md#Terminal) | [Node terminal](platform.md#NodeTerminal) | [Terminal in memory](platform.md#MemoryTerminal) | — |
| [Clock](architecture.md#Clock) | [System clock](platform.md#SystemClock) | [Stopped clock](platform.md#StoppedClock) | — |
| [Timer](architecture.md#Timer) | [Node timer](platform.md#NodeTimer) | [Node timer](platform.md#NodeTimer) | — |
| [HTTP server](architecture.md#HttpServer) | [Node HTTP server](platform.md#NodeHttpServer) | [A server in memory](platform.md#MemoryHttpServer) | — |
| [Bundler](architecture.md#Bundler) | [esbuild](platform.md#Esbuild) | [esbuild](platform.md#Esbuild) | — |
| [Reports on packages](architecture.md#PackageReports) | [npm's reports](platform.md#NpmReports) | [No registry in test](platform.md#NoReportsInTest) | — |
| [Compression](architecture.md#Compression) | [gzip, with Node's zlib](platform.md#NodeCompression) | [gzip, with Node's zlib](platform.md#NodeCompression) | — |
| [Page resources](architecture.md#Resources) | [Page resources](platform.md#PageResources) | [Page resources](platform.md#PageResources) | — |
| [Programs](architecture.md#Programs) | [Node programs](platform.md#NodePrograms) | [Example process](platform.md#ExampleProcess) | — |
| [File trees](architecture.md#FileTrees) | [Trees on disk](platform.md#DiskTrees) | [Files in memory, over the disk](platform.md#MemoryFiles) | — |
| [Command line](architecture.md#CommandLine) | [Command line](platform.md#NodeCommandLine) | [Command line](platform.md#NodeCommandLine) | — |
| [Window of the page](architecture.md#PageWindow) | — | — | [The browser's window](browser.md#BrowserWindow) |
| [Memory of the page](architecture.md#PageMemory) | — | — | [Local storage](browser.md#BrowserMemory) |
| [Feed of the graph](architecture.md#GraphFeed) | — | — | [The globals of the page, and trame dev](browser.md#BrowserFeed) |
| [Decompression](architecture.md#Decompression) | — | — | [The browser's gzip](browser.md#BrowserDecompression) |
| [Write log](architecture.md#WriteLog) | — | [Files in memory, over the disk](platform.md#MemoryFiles) | — |
| [Terminal log](architecture.md#TerminalLog) | — | [Terminal in memory](platform.md#MemoryTerminal) | — |
| [Process log](architecture.md#ProcessLog) | — | [Example process](platform.md#ExampleProcess) | — |
| [Server log](architecture.md#ServerLog) | — | [A server in memory](platform.md#MemoryHttpServer) | — |
| [Syntax of the documents written as files](rendering.md#FileSyntax) | [Markdown writer](rendering.md#MarkdownSyntax) | [Markdown writer](rendering.md#MarkdownSyntax) | — |
| [Syntax of the terminal](rendering.md#TerminalSyntax) | [Plain text writer](rendering.md#PlainTextSyntax) | [Plain text writer](rendering.md#PlainTextSyntax) | — |
| [Syntax of the page](rendering.md#PageSyntax) | [HTML writer](rendering.md#HtmlSyntax) | [HTML writer](rendering.md#HtmlSyntax) | — |
| [Figures of the documents written as files](rendering.md#FileFigures) | [Mermaid diagrams](rendering.md#MermaidDiagrams) | [Mermaid diagrams](rendering.md#MermaidDiagrams) | — |
| [Figures of the terminal](rendering.md#TerminalFigures) | [Figures as text](rendering.md#TextFigures) | [Figures as text](rendering.md#TextFigures) | — |
| [Figures of the page](rendering.md#PageFigures) | [Figures in SVG](rendering.md#SvgFigures) | [Figures in SVG](rendering.md#SvgFigures) | — |
| [Loading of a page](../std/docs/platform.md#PageLoading) | — | — | [The browser loads the page](../std/docs/platform.md#BrowserLoading) |
| [Commands of a program](../std/docs/tooling.md#ProgramCommands) | [Node's command line](../std/docs/tooling.md#NodeProgramCommands) | — | — |
| [Headless browser](../std/docs/tooling.md#HeadlessBrowser) | [Chromium, driven by Playwright](../std/docs/tooling.md#PlaywrightBrowser) | [A browser kept in memory](../std/docs/tooling.md#BrowserInMemory) | — |
| [Browser script](../std/docs/tooling.md#BrowserScripted) | — | [A browser kept in memory](../std/docs/tooling.md#BrowserInMemory) | — |

| Pattern | Status | Followed by |
|---|---|---|
| [Strategy](../std/docs/patterns.md#Strategy) | **held** | [Scenarios run in memory](platform.md#InMemoryScenarios), [A run is kept while what it reads is as it was](platform.md#RunsByWhatTheyRead), [Documents in Markdown](rendering.md#DocumentsInMarkdown), [Figures in Mermaid](rendering.md#FiguresInMermaid), [The terminal in plain text](rendering.md#TerminalInText), [Figures in the terminal, as text](rendering.md#TerminalFiguresAsText), [The page in HTML](rendering.md#PageInHtml), [The page's figures in SVG](rendering.md#PageFiguresDrawn), [The SDLC in memory](sdlc.md#SdlcInMemory), [Evidence sealed by attribution](shipping.md#SealedByAttribution), [In memory](../std/docs/scenarios.md#InMemory) |
| [Adapter](../std/docs/patterns.md#Adapter) | **held** | [The browser runs the page](browser.md#TheBrowserRunsThePage), [NodePlatform](platform.md#NodePlatform), [On a machine, Node.js reads, writes and runs](platform.md#NodeMachine), [Scenarios write in memory, over the disk](platform.md#FilesInMemoryOverTheDisk), [On a machine, runs are kept on disk](platform.md#RunsKeptOnDisk), [In the scenarios, runs are kept in the process](platform.md#RunsKeptInTheProcess), [esbuild bundles the page's program](platform.md#EsbuildBundles), [tree-sitter reads the bodies](platform.md#TreeSitterReads), [tsx runs TypeScript](platform.md#TsxRuns), [The TypeScript compiler reads the declarations](platform.md#CompilerReadsDeclarations), [The engine's own files sit beside its code](platform.md#EngineFilesBesideCode), [The SDLC on the machine](sdlc.md#SdlcOnTheMachine) |
| [Bridge](../std/docs/patterns.md#Bridge) | **held** | [Documents in Markdown](rendering.md#DocumentsInMarkdown), [The terminal in plain text](rendering.md#TerminalInText), [The page in HTML](rendering.md#PageInHtml) |
| [Abstract Factory](../std/docs/patterns.md#AbstractFactory) | **held** | [NodePlatform](platform.md#NodePlatform), [On a machine, Node.js reads, writes and runs](platform.md#NodeMachine), [Scenarios run in memory](platform.md#InMemoryScenarios) |

## Trame · The page in a browser

<a id="TheBrowserRunsThePage"></a>

### The browser runs the page

`TheBrowserRunsThePage` · `src/browser.ts:120` · status: **unknown**

In the browser, the page loads, writes in its window, keeps the person's place, receives the graph and makes it whole again with what every browser has: the DOM, local storage, fetch and server-sent events, DecompressionStream.

In [Browser](architecture.md#Browser):

| Port | Answered by | Which is |
|---|---|---|
| [Decompression](architecture.md#Decompression) | [The browser's gzip](browser.md#BrowserDecompression) | an implementation |
| [Feed of the graph](architecture.md#GraphFeed) | [The globals of the page, and trame dev](browser.md#BrowserFeed) | an implementation |
| [Memory of the page](architecture.md#PageMemory) | [Local storage](browser.md#BrowserMemory) | an implementation |
| [Window of the page](architecture.md#PageWindow) | [The browser's window](browser.md#BrowserWindow) | an implementation |
| [Loading of a page](../std/docs/platform.md#PageLoading) | [The browser loads the page](../std/docs/platform.md#BrowserLoading) | an implementation |

Context: The page's script took what it needed from the browser itself, here and there: the graph could not say what the page asks of the browser, nor try it elsewhere.

Consequences: The browser's globals appear only in these implementations; the entry point and the explorer are bodies like any other, and their values are the graph's.

| Rejected | Why |
|---|---|
| A framework for the page | a dependency, and its own way of writing the page, for a page that writes HTML strings and listens to a few events |
| Libraries for storage and decompression | every browser the page targets has local storage and gzip |

- Decided by: trame
- Chooses: [The browser loads the page](../std/docs/platform.md#BrowserLoading), [The browser's window](browser.md#BrowserWindow), [Local storage](browser.md#BrowserMemory), [The globals of the page, and trame dev](browser.md#BrowserFeed), [The browser's gzip](browser.md#BrowserDecompression)
- In: [Browser](architecture.md#Browser)
- Follows: [Adapter](../std/docs/patterns.md#Adapter)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [The page is assembled](browser.md#ThePageIsAssembled)

## Trame · Platform

<a id="NodePlatform"></a>

### NodePlatform

`NodePlatform` · `src/platform.ts:377` · status: **held**

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
- Follows: [Adapter](../std/docs/patterns.md#Adapter), [Abstract Factory](../std/docs/patterns.md#AbstractFactory)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A technology is chosen in one node](principles.md#TechnologyInOneNode)

<a id="NodeMachine"></a>

### On a machine, Node.js reads, writes and runs

`NodeMachine` · `src/platform.ts:396` · status: **unknown**

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
| [Reports on packages](architecture.md#PackageReports) | [npm's reports](platform.md#NpmReports) | an implementation |
| [Clock](architecture.md#Clock) | [System clock](platform.md#SystemClock) | an implementation |

Context: What changes the world (files written, processes, the terminal, the clock) is real only on a machine; the scenarios keep it in memory.

Consequences: Writing goes through FileWriting and FileTrees only, which the rule "Only commands write" checks; comparing trees uses GNU diff, through a process.

| Rejected | Why |
|---|---|
| A library to compare trees | GNU diff writes the unified format the advance keeps, and is on every machine that runs it |

- Decided by: trame
- Chooses: [System files, for reading](platform.md#DiskReading), [System files, for writing](platform.md#DiskWriting), [Trees on disk](platform.md#DiskTrees), [Node process](platform.md#NodeProcess), [Node programs](platform.md#NodePrograms), [Node terminal](platform.md#NodeTerminal), [System clock](platform.md#SystemClock), [npm's reports](platform.md#NpmReports), [Node HTTP server](platform.md#NodeHttpServer)
- In: [Local](architecture.md#Local)
- Follows: [Adapter](../std/docs/patterns.md#Adapter), [Abstract Factory](../std/docs/patterns.md#AbstractFactory)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A technology is chosen in one node](principles.md#TechnologyInOneNode)

<a id="FilesInMemoryOverTheDisk"></a>

### Scenarios write in memory, over the disk

`FilesInMemoryOverTheDisk` · `src/platform.ts:412` · status: **held**

In the scenarios, the files are read from the disk and what the engine writes is kept in memory over them: one adapter that reads Node's file system and never writes it.

In [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [File reading](architecture.md#FileReading), [File trees](architecture.md#FileTrees), [File writing](architecture.md#FileWriting), [Write log](architecture.md#WriteLog) | [Files in memory, over the disk](platform.md#MemoryFiles) | an implementation |

Context: A scenario runs commands that write, then read what they wrote: a shipment rereads the evidence it recorded, a release reads the copy it froze.

Consequences: Reading and writing are one realization in the scenarios, so that what is written is read back; the disk is never written.

| Rejected | Why |
|---|---|
| Reading the disk, writing in memory, apart | what a command wrote could not be read back: the shipment, the release and the manifest would be verified nowhere |

- Decided by: trame
- Chooses: [Files in memory, over the disk](platform.md#MemoryFiles)
- In: [Test](architecture.md#Test)
- Follows: [Adapter](../std/docs/patterns.md#Adapter)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)

<a id="InMemoryScenarios"></a>

### Scenarios run in memory

`InMemoryScenarios` · `src/platform.ts:429` · status: **held**

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
- Follows: [Strategy](../std/docs/patterns.md#Strategy), [Abstract Factory](../std/docs/patterns.md#AbstractFactory)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A technology is chosen in one node](principles.md#TechnologyInOneNode)

<a id="RunsByWhatTheyRead"></a>

### A run is kept while what it reads is as it was

`RunsByWhatTheyRead` · `src/platform.ts:449` · status: **held**

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
- Follows: [Strategy](../std/docs/patterns.md#Strategy)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)

<a id="RunsKeptOnDisk"></a>

### On a machine, runs are kept on disk

`RunsKeptOnDisk` · `src/platform.ts:463` · status: **unknown**

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
- Follows: [Adapter](../std/docs/patterns.md#Adapter)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)

<a id="RunsKeptInTheProcess"></a>

### In the scenarios, runs are kept in the process

`RunsKeptInTheProcess` · `src/platform.ts:477` · status: **held**

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
- Follows: [Adapter](../std/docs/patterns.md#Adapter)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)

<a id="EsbuildBundles"></a>

### esbuild bundles the page's program

`EsbuildBundles` · `src/platform.ts:491` · status: **held**

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
- Follows: [Adapter](../std/docs/patterns.md#Adapter)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A technology is chosen in one node](principles.md#TechnologyInOneNode)

<a id="TreeSitterReads"></a>

### tree-sitter reads the bodies

`TreeSitterReads` · `src/platform.ts:507` · status: **held**

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
- Follows: [Adapter](../std/docs/patterns.md#Adapter)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A technology is chosen in one node](principles.md#TechnologyInOneNode)

<a id="TsxRuns"></a>

### tsx runs TypeScript

`TsxRuns` · `src/platform.ts:524` · status: **held**

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
- Follows: [Adapter](../std/docs/patterns.md#Adapter)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A technology is chosen in one node](principles.md#TechnologyInOneNode)

<a id="CompilerReadsDeclarations"></a>

### The TypeScript compiler reads the declarations

`CompilerReadsDeclarations` · `src/platform.ts:541` · status: **held**

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
- Follows: [Adapter](../std/docs/patterns.md#Adapter)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A technology is chosen in one node](principles.md#TechnologyInOneNode)

<a id="EngineFilesBesideCode"></a>

### The engine's own files sit beside its code

`EngineFilesBesideCode` · `src/platform.ts:555` · status: **held**

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
- Follows: [Adapter](../std/docs/patterns.md#Adapter)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A technology is chosen in one node](principles.md#TechnologyInOneNode)

## Trame · Rendering

<a id="DocumentsInMarkdown"></a>

### Documents in Markdown

`DocumentsInMarkdown` · `src/rendering.ts:346` · status: **held**

Trame's documents are written in Markdown: CommonMark, with GFM tables. They read as they are in a terminal or an editor, compare line by line in a review, and forges (GitHub, GitLab) as well as most editors display them formatted. HTML serves only for anchors and collapsible blocks.

In [Local](architecture.md#Local), [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Syntax of the documents written as files](rendering.md#FileSyntax) | [Markdown writer](rendering.md#MarkdownSyntax) | a function |

Context: The documents are read in reviews, in editors, on forges, and compared line by line by the advance: their syntax must be text that every one of them displays.

Consequences: Another syntax for the files is a realization of "Syntax of the documents written as files" and this choice changed: the renderer, the views and the kinds do not change; the figures stay a choice of their own.

| Rejected | Why |
|---|---|
| HTML only | unreadable as plain text, and a review no longer compares lines |
| AsciiDoc or reStructuredText | less well displayed by forges and editors |
| Plain text | no links, no tables, no figures |

- Decided by: trame
- Chooses: [Markdown writer](rendering.md#MarkdownSyntax)
- In: [Local](architecture.md#Local), [Test](architecture.md#Test)
- Follows: [Bridge](../std/docs/patterns.md#Bridge), [Strategy](../std/docs/patterns.md#Strategy)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A technology is chosen in one node](principles.md#TechnologyInOneNode), [One renderer, its syntax a choice](rendering.md#OneRendererManySyntaxes)

<a id="FiguresInMermaid"></a>

### Figures in Mermaid

`FiguresInMermaid` · `src/rendering.ts:366` · status: **held**

A figure (the layers of the graph, the tree of an impact, a timeline) is written in a document as a Mermaid diagram, in a "mermaid" block: GitHub, GitLab and most editors draw it, and it stays text, which a review compares line by line.

In [Local](architecture.md#Local), [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Figures of the documents written as files](rendering.md#FileFigures) | [Mermaid diagrams](rendering.md#MermaidDiagrams) | a function |

Context: A figure of a document must be drawn by the forges and editors that display the document, and stay text that a review compares.

Consequences: The Markdown writer puts the lines of a figure in a code block, in the language the drawing says: figures as text in the documents would be the text figures answering "Figures of the documents written as files" too, and this choice changed; the writer does not change.

| Rejected | Why |
|---|---|
| Images (SVG, PNG) | to regenerate at every change, and silent in a text review |
| Graphviz (DOT) | neither GitHub nor GitLab draws it |
| PlantUML | needs a rendering server |

- Decided by: trame
- Chooses: [Mermaid diagrams](rendering.md#MermaidDiagrams)
- In: [Local](architecture.md#Local), [Test](architecture.md#Test)
- Follows: [Strategy](../std/docs/patterns.md#Strategy)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A technology is chosen in one node](principles.md#TechnologyInOneNode), [One renderer, its syntax a choice](rendering.md#OneRendererManySyntaxes)

<a id="TerminalInText"></a>

### The terminal in plain text

`TerminalInText` · `src/rendering.ts:385` · status: **held**

What a command prints is text, with the punctuation of documents: indented, aligned in columns, without marks.

In [Local](architecture.md#Local), [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Syntax of the terminal](rendering.md#TerminalSyntax) | [Plain text writer](rendering.md#PlainTextSyntax) | a function |

Context: A terminal shows characters: marks of a syntax (asterisks, pipes, tags) would be noise there.

Consequences: A view printed in Markdown is the --format md option, which renders with the files' renderer; a terminal syntax with colours would be another realization of "Syntax of the terminal".

| Rejected | Why |
|---|---|
| Markdown in the terminal | its marks are noise when they are not displayed |
| ANSI colours | lost in logs and pipes, and the scenarios compare text |

- Decided by: trame
- Chooses: [Plain text writer](rendering.md#PlainTextSyntax)
- In: [Local](architecture.md#Local), [Test](architecture.md#Test)
- Follows: [Bridge](../std/docs/patterns.md#Bridge), [Strategy](../std/docs/patterns.md#Strategy)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A technology is chosen in one node](principles.md#TechnologyInOneNode), [One renderer, its syntax a choice](rendering.md#OneRendererManySyntaxes)

<a id="TerminalFiguresAsText"></a>

### Figures in the terminal, as text

`TerminalFiguresAsText` · `src/rendering.ts:403` · status: **held**

In the terminal, a tree is drawn with box-drawing characters, a path step by step, a timeline as dated lines.

In [Local](architecture.md#Local), [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Figures of the terminal](rendering.md#TerminalFigures) | [Figures as text](rendering.md#TextFigures) | a function |

Context: A terminal draws no diagram: a figure must read as lines.

Consequences: The terminal syntax indents the lines of a figure like any other content.

| Rejected | Why |
|---|---|
| Mermaid in the terminal | its source does not read as a figure |

- Decided by: trame
- Chooses: [Figures as text](rendering.md#TextFigures)
- In: [Local](architecture.md#Local), [Test](architecture.md#Test)
- Follows: [Strategy](../std/docs/patterns.md#Strategy)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A technology is chosen in one node](principles.md#TechnologyInOneNode), [One renderer, its syntax a choice](rendering.md#OneRendererManySyntaxes)

<a id="PageInHtml"></a>

### The page in HTML

`PageInHtml` · `src/rendering.ts:419` · status: **held**

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
- Follows: [Bridge](../std/docs/patterns.md#Bridge), [Strategy](../std/docs/patterns.md#Strategy)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A technology is chosen in one node](principles.md#TechnologyInOneNode), [One renderer, its syntax a choice](rendering.md#OneRendererManySyntaxes)

<a id="PageFiguresDrawn"></a>

### The page's figures in SVG

`PageFiguresDrawn` · `src/rendering.ts:438` · status: **held**

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
- Follows: [Strategy](../std/docs/patterns.md#Strategy)
- Serves: [A technology is changed in one node](product.md#ReplaceableTechnology)
- Applies: [A technology is chosen in one node](principles.md#TechnologyInOneNode), [One renderer, its syntax a choice](rendering.md#OneRendererManySyntaxes)

## Trame · SDLC

<a id="SdlcOnTheMachine"></a>

### The SDLC on the machine

`SdlcOnTheMachine` · `src/sdlc.ts:144` · status: **unknown**

On the machine, the programs of the SDLC read their command from Node's command line and open pages in Chromium driven by Playwright, as the standard library realizes them.

In [Local](architecture.md#Local):

| Port | Answered by | Which is |
|---|---|---|
| [Commands of a program](../std/docs/tooling.md#ProgramCommands) | [Node's command line](../std/docs/tooling.md#NodeProgramCommands) | an implementation |
| [Headless browser](../std/docs/tooling.md#HeadlessBrowser) | [Chromium, driven by Playwright](../std/docs/tooling.md#PlaywrightBrowser) | an implementation |

Context: The graph page must be opened as a person opens it: the file exported, in a real browser.

- Decided by: trame
- Chooses: [Node's command line](../std/docs/tooling.md#NodeProgramCommands), [Chromium, driven by Playwright](../std/docs/tooling.md#PlaywrightBrowser)
- In: [Local](architecture.md#Local)
- Follows: [Adapter](../std/docs/patterns.md#Adapter)

<a id="SdlcInMemory"></a>

### The SDLC in memory

`SdlcInMemory` · `src/sdlc.ts:156` · status: **held**

In the scenarios, the browser shows the page a scenario writes.

In [Test](architecture.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Browser script](../std/docs/tooling.md#BrowserScripted), [Headless browser](../std/docs/tooling.md#HeadlessBrowser) | [A browser kept in memory](../std/docs/tooling.md#BrowserInMemory) | a function |

Context: A program of the SDLC is code like the engine's: its scenarios play it before it runs on a machine.

- Decided by: trame
- Chooses: [A browser kept in memory](../std/docs/tooling.md#BrowserInMemory)
- In: [Test](architecture.md#Test)
- Follows: [Strategy](../std/docs/patterns.md#Strategy)

## Trame · Shipping

<a id="SealedByAttribution"></a>

### Evidence sealed by attribution

`SealedByAttribution` · `src/shipping.ts:94` · status: **held**

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
- Follows: [Strategy](../std/docs/patterns.md#Strategy)
- Serves: [A specification that runs](product.md#ExecutableSpecification)
