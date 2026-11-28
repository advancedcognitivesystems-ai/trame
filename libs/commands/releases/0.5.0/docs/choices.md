# Technical choices

*What answers each port in each environment on 28 November 2026: a technical choice says what it chooses, where, the patterns it follows, why, and what it rejected. The code that uses a port never names what answers it.*

> **9 technical choices for 20 ports, in 2 environments**

| Port | Test | Served |
|---|---|---|
| [The language of the documents](../.trame/documents/docs/language.md#DocumentLanguage) | [Written in the language of the scenarios](../.trame/documents/docs/scenarios.md#WrittenForTheScenarios) | [Written in the language of the scenarios](../.trame/documents/docs/scenarios.md#WrittenForTheScenarios) |
| [Packing the graph](../.trame/documents/docs/page.md#GraphPacking) | [gzip, in base64](../.trame/documents/docs/page.md#GzipInBase64) | [gzip, in base64](../.trame/documents/docs/page.md#GzipInBase64) |
| [The page's style sheets](../.trame/documents/docs/page.md#PageSheets) | [Style sheets beside the library](../.trame/documents/docs/page.md#SheetsBesideTheLibrary) | [Style sheets beside the library](../.trame/documents/docs/page.md#SheetsBesideTheLibrary) |
| [Syntax of the documents written as files](../.trame/documents/docs/rendering.md#FileSyntax) | [Markdown writer](../.trame/documents/docs/rendering.md#MarkdownSyntax) | [Markdown writer](../.trame/documents/docs/rendering.md#MarkdownSyntax) |
| [Syntax of the terminal](../.trame/documents/docs/rendering.md#TerminalSyntax) | [Plain text writer](../.trame/documents/docs/rendering.md#PlainTextSyntax) | [Plain text writer](../.trame/documents/docs/rendering.md#PlainTextSyntax) |
| [Figures of the documents written as files](../.trame/documents/docs/rendering.md#FileFigures) | [Mermaid diagrams](../.trame/documents/docs/rendering.md#MermaidDiagrams) | [Mermaid diagrams](../.trame/documents/docs/rendering.md#MermaidDiagrams) |
| [Figures of the terminal](../.trame/documents/docs/rendering.md#TerminalFigures) | [Figures as text](../.trame/documents/docs/rendering.md#TextFigures) | [Figures as text](../.trame/documents/docs/rendering.md#TextFigures) |
| [Syntax of the page](../.trame/documents/docs/rendering.md#PageSyntax) | [HTML writer](../.trame/documents/docs/rendering.md#HtmlSyntax) | [HTML writer](../.trame/documents/docs/rendering.md#HtmlSyntax) |
| [Figures of the page](../.trame/documents/docs/rendering.md#PageFigures) | [Figures in SVG](../.trame/documents/docs/rendering.md#SvgFigures) | [Figures in SVG](../.trame/documents/docs/rendering.md#SvgFigures) |
| [The project at hand](../.trame/std/docs/engine.md#TheProject) | [A project compiled by the engine that plays the scenario](../.trame/std/docs/engine.md#ProjectCompiledHere) | [The small project, served](scenarios.md#TheSmallProjectServed) |
| [The project of a scenario](../.trame/std/docs/engine.md#ProjectOfTheScenario) | [Which project the scenarios compile](scenarios.md#TheSmallProject) | [Which project the scenarios compile](scenarios.md#TheSmallProject) |
| [Reading a language](../.trame/std/docs/engine.md#LanguageReading) | [Read by the engine](../.trame/std/docs/engine.md#ReadByTheEngine) | [Read by the engine](../.trame/std/docs/engine.md#ReadByTheEngine) |
| [The clock](../.trame/std/docs/running.md#TheClock) | [A clock stopped](../.trame/std/docs/running.md#ClockStopped) | [A clock stopped](../.trame/std/docs/running.md#ClockStopped) |
| [Timers](../.trame/std/docs/running.md#Waiting) | [The machine's timers](../.trame/std/docs/running.md#MachineTimers) | [The machine's timers](../.trame/std/docs/running.md#MachineTimers) |
| [Serving HTTP](../.trame/std/docs/running.md#HttpServing) | [A server in memory](../.trame/std/docs/running.md#ServerInMemory) | [A server in memory](../.trame/std/docs/running.md#ServerInMemory) |
| [Printing as it goes](../.trame/std/docs/running.md#LinesPrinted) | [Lines kept](../.trame/std/docs/running.md#LinesInMemory) | [Lines kept](../.trame/std/docs/running.md#LinesInMemory) |
| [The server asked](../.trame/std/docs/running.md#ServerKept) | [A server in memory](../.trame/std/docs/running.md#ServerInMemory) | [A server in memory](../.trame/std/docs/running.md#ServerInMemory) |
| [The lines printed](../.trame/std/docs/running.md#LinesKept) | [Lines kept](../.trame/std/docs/running.md#LinesInMemory) | [Lines kept](../.trame/std/docs/running.md#LinesInMemory) |
| [Project files](../.trame/std/docs/tooling.md#Files) | [Files kept in memory](../.trame/std/docs/tooling.md#FilesInMemory) | [Files kept in memory](../.trame/std/docs/tooling.md#FilesInMemory) |
| [Files written](../.trame/std/docs/tooling.md#FilesKept) | [Files kept in memory](../.trame/std/docs/tooling.md#FilesInMemory) | [Files kept in memory](../.trame/std/docs/tooling.md#FilesInMemory) |

| Pattern | Status | Followed by |
|---|---|---|
| [Strategy](../.trame/std/docs/patterns.md#Strategy) | **held** | [Played on a small project](scenarios.md#PlayedOnASmallProject), [Files in Markdown, the terminal in text](scenarios.md#DocumentsAsFiles), [Figures in Mermaid and in text](scenarios.md#FiguresOfTheDocuments), [In the language of libs/documents' scenarios](scenarios.md#DocumentsLanguage), [The page, as a project makes it](scenarios.md#PageAsAProjectMakesIt), [The scenarios' language](../.trame/documents/docs/scenarios.md#InTheScenariosLanguage), [Files in Markdown](../.trame/documents/docs/scenarios.md#FilesInMarkdown), [Figures in Mermaid](../.trame/documents/docs/scenarios.md#FiguresInMermaid), [The terminal in text](../.trame/documents/docs/scenarios.md#TerminalInText), [Figures at a terminal, as text](../.trame/documents/docs/scenarios.md#TerminalFiguresAsText), [The page in HTML](../.trame/documents/docs/scenarios.md#PageInHtml), [The page's figures in SVG](../.trame/documents/docs/scenarios.md#PageFiguresDrawn), [In memory](../.trame/std/docs/scenarios.md#InMemory), [Judged as the language says](../.trame/std/docs/scenarios.md#LanguageJudgment), [Judged strictly](../.trame/std/docs/scenarios.md#StrictJudgment), [The scenarios' settings](../.trame/std/docs/scenarios.md#ScenarioSettings) |
| [Adapter](../.trame/std/docs/patterns.md#Adapter) | **held** | [Compiled by the engine that plays them](scenarios.md#CompiledByTheEngine), [The page's files and its reading, as on a machine](scenarios.md#PageFilesAsOnAMachine), [Waiting as a person would](scenarios.md#WaitingOnTheMachine), [The small project, served](scenarios.md#ServedFromTheSmallProject), [Read by the engine](../.trame/documents/docs/scenarios.md#LanguagesRead), [Style sheets read beside the library](../.trame/documents/docs/scenarios.md#SheetsRead), [Waiting on the machine](../.trame/std/docs/scenarios.md#WaitingAsAPersonWould), [Read by the engine that builds](../.trame/std/docs/scenarios.md#ReadInTheEngine) |
| [Bridge](../.trame/std/docs/patterns.md#Bridge) | **held** | [Files in Markdown, the terminal in text](scenarios.md#DocumentsAsFiles), [Files in Markdown](../.trame/documents/docs/scenarios.md#FilesInMarkdown), [The terminal in text](../.trame/documents/docs/scenarios.md#TerminalInText), [The page in HTML](../.trame/documents/docs/scenarios.md#PageInHtml) |

## Commands · Scenarios

<a id="CompiledByTheEngine"></a>

### Compiled by the engine that plays them

`CompiledByTheEngine` · `src/scenarios.ts:70` · status: **held**

In the library's scenarios, the project at hand is compiled by the engine that plays them, as on a machine it is compiled by the engine that runs the command.

In [Test](scenarios.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [The project at hand](../.trame/std/docs/engine.md#TheProject) | [A project compiled by the engine that plays the scenario](../.trame/std/docs/engine.md#ProjectCompiledHere) | an implementation |

Context: A command computes from a graph the engine compiled: a graph a scenario wrote by hand would check the command against what its author thought the engine gives.

| Rejected | Why |
|---|---|
| A graph written by the scenario | it proves nothing of what the engine gives, which is what the command reads on a machine |

- Decided by: trame
- Chooses: [A project compiled by the engine that plays the scenario](../.trame/std/docs/engine.md#ProjectCompiledHere)
- In: [Test](scenarios.md#Test)
- Follows: [Adapter](../.trame/std/docs/patterns.md#Adapter)
- Serves: [Commands every project runs, written once](product.md#WrittenOnce)
- Applies: [A command is played on a real graph](scenarios.md#PlayedOnARealGraph)

<a id="PlayedOnASmallProject"></a>

### Played on a small project

`PlayedOnASmallProject` · `src/scenarios.ts:84` · status: **held**

In the library's scenarios, the project at hand is the small project, and the project's files are kept in memory.

In [Served](scenarios.md#Served), [Test](scenarios.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [The project of a scenario](../.trame/std/docs/engine.md#ProjectOfTheScenario) | [Which project the scenarios compile](scenarios.md#TheSmallProject) | a function |
| [Project files](../.trame/std/docs/tooling.md#Files), [Files written](../.trame/std/docs/tooling.md#FilesKept) | [Files kept in memory](../.trame/std/docs/tooling.md#FilesInMemory) | a function |

Context: The library's own project is the one being compiled when its scenarios play: they compile another, small and of the library's own, whose files are read again when they change.

- Decided by: trame
- Chooses: [Which project the scenarios compile](scenarios.md#TheSmallProject), [Files kept in memory](../.trame/std/docs/tooling.md#FilesInMemory)
- In: [Test](scenarios.md#Test), [Served](scenarios.md#Served)
- Follows: [Strategy](../.trame/std/docs/patterns.md#Strategy)
- Serves: [Commands every project runs, written once](product.md#WrittenOnce)
- Applies: [A command is played on a real graph](scenarios.md#PlayedOnARealGraph)

<a id="DocumentsAsFiles"></a>

### Files in Markdown, the terminal in text

`DocumentsAsFiles` · `src/scenarios.ts:214` · status: **held**

In the library's scenarios, the documents a command writes as files are in Markdown with Mermaid figures, and what it prints is plain text with figures as text, as libs/documents plays them.

In [Served](scenarios.md#Served), [Test](scenarios.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Syntax of the documents written as files](../.trame/documents/docs/rendering.md#FileSyntax) | [Markdown writer](../.trame/documents/docs/rendering.md#MarkdownSyntax) | a function |
| [Syntax of the terminal](../.trame/documents/docs/rendering.md#TerminalSyntax) | [Plain text writer](../.trame/documents/docs/rendering.md#PlainTextSyntax) | a function |

Context: A command writes its documents with the renderers of libs/documents, in the syntaxes a project chooses.

- Decided by: trame
- Chooses: [Markdown writer](../.trame/documents/docs/rendering.md#MarkdownSyntax), [Plain text writer](../.trame/documents/docs/rendering.md#PlainTextSyntax)
- In: [Test](scenarios.md#Test), [Served](scenarios.md#Served)
- Follows: [Bridge](../.trame/std/docs/patterns.md#Bridge), [Strategy](../.trame/std/docs/patterns.md#Strategy)
- Serves: [Commands every project runs, written once](product.md#WrittenOnce)
- Applies: [A command writes documents as a project does](scenarios.md#WrittenAsAProjectDoes)

<a id="FiguresOfTheDocuments"></a>

### Figures in Mermaid and in text

`FiguresOfTheDocuments` · `src/scenarios.ts:227` · status: **held**

In the library's scenarios, the figures of the files are Mermaid diagrams, those of the terminal lines of text.

In [Served](scenarios.md#Served), [Test](scenarios.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Figures of the documents written as files](../.trame/documents/docs/rendering.md#FileFigures) | [Mermaid diagrams](../.trame/documents/docs/rendering.md#MermaidDiagrams) | a function |
| [Figures of the terminal](../.trame/documents/docs/rendering.md#TerminalFigures) | [Figures as text](../.trame/documents/docs/rendering.md#TextFigures) | a function |

Context: Each syntax reaches its figures through a port of its own, chosen apart.

- Decided by: trame
- Chooses: [Mermaid diagrams](../.trame/documents/docs/rendering.md#MermaidDiagrams), [Figures as text](../.trame/documents/docs/rendering.md#TextFigures)
- In: [Test](scenarios.md#Test), [Served](scenarios.md#Served)
- Follows: [Strategy](../.trame/std/docs/patterns.md#Strategy)
- Serves: [Commands every project runs, written once](product.md#WrittenOnce)
- Applies: [A command writes documents as a project does](scenarios.md#WrittenAsAProjectDoes)

<a id="DocumentsLanguage"></a>

### In the language of libs/documents' scenarios

`DocumentsLanguage` · `src/scenarios.ts:240` · status: **held**

In the library's scenarios, the documents are written in the language libs/documents decided for its own.

In [Served](scenarios.md#Served), [Test](scenarios.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [The language of the documents](../.trame/documents/docs/language.md#DocumentLanguage) | [Written in the language of the scenarios](../.trame/documents/docs/scenarios.md#WrittenForTheScenarios) | a function |

Context: The documents speak the language of the engine that compiles the graph: in a library's scenarios, a language decided for them.

- Decided by: trame
- Chooses: [Written in the language of the scenarios](../.trame/documents/docs/scenarios.md#WrittenForTheScenarios)
- In: [Test](scenarios.md#Test), [Served](scenarios.md#Served)
- Follows: [Strategy](../.trame/std/docs/patterns.md#Strategy)
- Serves: [Commands every project runs, written once](product.md#WrittenOnce)
- Applies: [A command writes documents as a project does](scenarios.md#WrittenAsAProjectDoes)

<a id="PageAsAProjectMakesIt"></a>

### The page, as a project makes it

`PageAsAProjectMakesIt` · `src/scenarios.ts:258` · status: **held**

In the library's scenarios, a document in the page is written in HTML with its figures in SVG; the page's style sheets are read beside libs/documents, the graph it carries packed with gzip, what it writes read back by the engine that plays the scenarios; the server, the clock and the lines a command prints as it goes are kept in memory, a wait is the machine's.

In [Served](scenarios.md#Served), [Test](scenarios.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Syntax of the page](../.trame/documents/docs/rendering.md#PageSyntax) | [HTML writer](../.trame/documents/docs/rendering.md#HtmlSyntax) | a function |
| [Figures of the page](../.trame/documents/docs/rendering.md#PageFigures) | [Figures in SVG](../.trame/documents/docs/rendering.md#SvgFigures) | a function |
| [The clock](../.trame/std/docs/running.md#TheClock) | [A clock stopped](../.trame/std/docs/running.md#ClockStopped) | a function |
| [The lines printed](../.trame/std/docs/running.md#LinesKept), [Printing as it goes](../.trame/std/docs/running.md#LinesPrinted) | [Lines kept](../.trame/std/docs/running.md#LinesInMemory) | a function |
| [Serving HTTP](../.trame/std/docs/running.md#HttpServing), [The server asked](../.trame/std/docs/running.md#ServerKept) | [A server in memory](../.trame/std/docs/running.md#ServerInMemory) | a function |

Context: The page's commands write with libs/documents' page, and run with what std offers a command that keeps running.

- Decided by: trame
- Chooses: [HTML writer](../.trame/documents/docs/rendering.md#HtmlSyntax), [Figures in SVG](../.trame/documents/docs/rendering.md#SvgFigures), [A server in memory](../.trame/std/docs/running.md#ServerInMemory), [Lines kept](../.trame/std/docs/running.md#LinesInMemory), [A clock stopped](../.trame/std/docs/running.md#ClockStopped)
- In: [Test](scenarios.md#Test), [Served](scenarios.md#Served)
- Follows: [Strategy](../.trame/std/docs/patterns.md#Strategy)
- Serves: [Commands every project runs, written once](product.md#WrittenOnce)
- Applies: [A command writes documents as a project does](scenarios.md#WrittenAsAProjectDoes)

<a id="PageFilesAsOnAMachine"></a>

### The page's files and its reading, as on a machine

`PageFilesAsOnAMachine` · `src/scenarios.ts:272` · status: **held**

In the library's scenarios, the page's style sheets are read beside libs/documents, the graph it carries is packed with gzip, and what it writes is read back by the engine that plays the scenarios.

In [Served](scenarios.md#Served), [Test](scenarios.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Packing the graph](../.trame/documents/docs/page.md#GraphPacking) | [gzip, in base64](../.trame/documents/docs/page.md#GzipInBase64) | an implementation |
| [The page's style sheets](../.trame/documents/docs/page.md#PageSheets) | [Style sheets beside the library](../.trame/documents/docs/page.md#SheetsBesideTheLibrary) | an implementation |
| [Reading a language](../.trame/std/docs/engine.md#LanguageReading) | [Read by the engine](../.trame/std/docs/engine.md#ReadByTheEngine) | an implementation |

Context: The page's commands write with libs/documents' page, and run with what std offers a command that keeps running.

- Decided by: trame
- Chooses: [Style sheets beside the library](../.trame/documents/docs/page.md#SheetsBesideTheLibrary), [gzip, in base64](../.trame/documents/docs/page.md#GzipInBase64), [Read by the engine](../.trame/std/docs/engine.md#ReadByTheEngine)
- In: [Test](scenarios.md#Test), [Served](scenarios.md#Served)
- Follows: [Adapter](../.trame/std/docs/patterns.md#Adapter)
- Serves: [Commands every project runs, written once](product.md#WrittenOnce)
- Applies: [A command writes documents as a project does](scenarios.md#WrittenAsAProjectDoes)

<a id="WaitingOnTheMachine"></a>

### Waiting as a person would

`WaitingOnTheMachine` · `src/scenarios.ts:285` · status: **held**

In the library's scenarios, a wait is the machine's: trame dev waits before it compiles again.

In [Served](scenarios.md#Served), [Test](scenarios.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Timers](../.trame/std/docs/running.md#Waiting) | [The machine's timers](../.trame/std/docs/running.md#MachineTimers) | an implementation |

Context: A wait kept in memory would call at once what trame dev waits for.

- Decided by: trame
- Chooses: [The machine's timers](../.trame/std/docs/running.md#MachineTimers)
- In: [Test](scenarios.md#Test), [Served](scenarios.md#Served)
- Follows: [Adapter](../.trame/std/docs/patterns.md#Adapter)
- Serves: [Commands every project runs, written once](product.md#WrittenOnce)
- Applies: [A command writes documents as a project does](scenarios.md#WrittenAsAProjectDoes)

<a id="ServedFromTheSmallProject"></a>

### The small project, served

`ServedFromTheSmallProject` · `src/scenarios.ts:320` · status: **held**

In the scenarios of the page's commands, the project at hand is the small project made for a page.

In [Served](scenarios.md#Served):

| Port | Answered by | Which is |
|---|---|---|
| [The project at hand](../.trame/std/docs/engine.md#TheProject) | [The small project, served](scenarios.md#TheSmallProjectServed) | an implementation |

Context: A bundle is compiled in a fresh process of the engine on a machine: a scenario makes it in its own.

- Decided by: trame
- Chooses: [The small project, served](scenarios.md#TheSmallProjectServed)
- In: [Served](scenarios.md#Served)
- Follows: [Adapter](../.trame/std/docs/patterns.md#Adapter)
- Serves: [Commands every project runs, written once](product.md#WrittenOnce)
- Applies: [A command writes documents as a project does](scenarios.md#WrittenAsAProjectDoes)
