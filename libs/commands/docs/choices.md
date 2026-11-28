# Technical choices

*What answers each port in each environment on 28 November 2026: a technical choice says what it chooses, where, the patterns it follows, why, and what it rejected. The code that uses a port never names what answers it.*

> **5 technical choices for 9 ports, in 1 environment**

| Port | Test |
|---|---|
| [The language of the documents](../.trame/documents/docs/language.md#DocumentLanguage) | [Written in the language of the scenarios](../.trame/documents/docs/scenarios.md#WrittenForTheScenarios) |
| [Syntax of the documents written as files](../.trame/documents/docs/rendering.md#FileSyntax) | [Markdown writer](../.trame/documents/docs/rendering.md#MarkdownSyntax) |
| [Syntax of the terminal](../.trame/documents/docs/rendering.md#TerminalSyntax) | [Plain text writer](../.trame/documents/docs/rendering.md#PlainTextSyntax) |
| [Figures of the documents written as files](../.trame/documents/docs/rendering.md#FileFigures) | [Mermaid diagrams](../.trame/documents/docs/rendering.md#MermaidDiagrams) |
| [Figures of the terminal](../.trame/documents/docs/rendering.md#TerminalFigures) | [Figures as text](../.trame/documents/docs/rendering.md#TextFigures) |
| [The project at hand](../.trame/std/docs/engine.md#TheProject) | [A project compiled by the engine that plays the scenario](../.trame/std/docs/engine.md#ProjectCompiledHere) |
| [The project of a scenario](../.trame/std/docs/engine.md#ProjectOfTheScenario) | [Which project the scenarios compile](scenarios.md#TheSmallProject) |
| [Project files](../.trame/std/docs/tooling.md#Files) | [Files kept in memory](../.trame/std/docs/tooling.md#FilesInMemory) |
| [Files written](../.trame/std/docs/tooling.md#FilesKept) | [Files kept in memory](../.trame/std/docs/tooling.md#FilesInMemory) |

| Pattern | Status | Followed by |
|---|---|---|
| [Strategy](../.trame/std/docs/patterns.md#Strategy) | **held** | [Played on a small project](scenarios.md#PlayedOnASmallProject), [Files in Markdown, the terminal in text](scenarios.md#DocumentsAsFiles), [Figures in Mermaid and in text](scenarios.md#FiguresOfTheDocuments), [In the language of libs/documents' scenarios](scenarios.md#DocumentsLanguage), [The scenarios' language](../.trame/documents/docs/scenarios.md#InTheScenariosLanguage), [Files in Markdown](../.trame/documents/docs/scenarios.md#FilesInMarkdown), [Figures in Mermaid](../.trame/documents/docs/scenarios.md#FiguresInMermaid), [The terminal in text](../.trame/documents/docs/scenarios.md#TerminalInText), [Figures at a terminal, as text](../.trame/documents/docs/scenarios.md#TerminalFiguresAsText), [In memory](../.trame/std/docs/scenarios.md#InMemory), [Judged as the language says](../.trame/std/docs/scenarios.md#LanguageJudgment), [Judged strictly](../.trame/std/docs/scenarios.md#StrictJudgment), [The scenarios' settings](../.trame/std/docs/scenarios.md#ScenarioSettings) |
| [Adapter](../.trame/std/docs/patterns.md#Adapter) | **held** | [Compiled by the engine that plays them](scenarios.md#CompiledByTheEngine), [Read by the engine](../.trame/documents/docs/scenarios.md#LanguagesRead), [Read by the engine that builds](../.trame/std/docs/scenarios.md#ReadInTheEngine) |
| [Bridge](../.trame/std/docs/patterns.md#Bridge) | **held** | [Files in Markdown, the terminal in text](scenarios.md#DocumentsAsFiles), [Files in Markdown](../.trame/documents/docs/scenarios.md#FilesInMarkdown), [The terminal in text](../.trame/documents/docs/scenarios.md#TerminalInText) |

## Commands · Scenarios

<a id="CompiledByTheEngine"></a>

### Compiled by the engine that plays them

`CompiledByTheEngine` · `src/scenarios.ts:57` · status: **held**

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

`PlayedOnASmallProject` · `src/scenarios.ts:71` · status: **held**

In the library's scenarios, the project at hand is the small project, and the project's files are kept in memory.

In [Test](scenarios.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [The project of a scenario](../.trame/std/docs/engine.md#ProjectOfTheScenario) | [Which project the scenarios compile](scenarios.md#TheSmallProject) | a function |
| [Project files](../.trame/std/docs/tooling.md#Files), [Files written](../.trame/std/docs/tooling.md#FilesKept) | [Files kept in memory](../.trame/std/docs/tooling.md#FilesInMemory) | a function |

Context: The library's own project is the one being compiled when its scenarios play: they compile another, small and of the library's own, whose files are read again when they change.

- Decided by: trame
- Chooses: [Which project the scenarios compile](scenarios.md#TheSmallProject), [Files kept in memory](../.trame/std/docs/tooling.md#FilesInMemory)
- In: [Test](scenarios.md#Test)
- Follows: [Strategy](../.trame/std/docs/patterns.md#Strategy)
- Serves: [Commands every project runs, written once](product.md#WrittenOnce)
- Applies: [A command is played on a real graph](scenarios.md#PlayedOnARealGraph)

<a id="DocumentsAsFiles"></a>

### Files in Markdown, the terminal in text

`DocumentsAsFiles` · `src/scenarios.ts:193` · status: **held**

In the library's scenarios, the documents a command writes as files are in Markdown with Mermaid figures, and what it prints is plain text with figures as text, as libs/documents plays them.

In [Test](scenarios.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Syntax of the documents written as files](../.trame/documents/docs/rendering.md#FileSyntax) | [Markdown writer](../.trame/documents/docs/rendering.md#MarkdownSyntax) | a function |
| [Syntax of the terminal](../.trame/documents/docs/rendering.md#TerminalSyntax) | [Plain text writer](../.trame/documents/docs/rendering.md#PlainTextSyntax) | a function |

Context: A command writes its documents with the renderers of libs/documents, in the syntaxes a project chooses.

- Decided by: trame
- Chooses: [Markdown writer](../.trame/documents/docs/rendering.md#MarkdownSyntax), [Plain text writer](../.trame/documents/docs/rendering.md#PlainTextSyntax)
- In: [Test](scenarios.md#Test)
- Follows: [Bridge](../.trame/std/docs/patterns.md#Bridge), [Strategy](../.trame/std/docs/patterns.md#Strategy)
- Serves: [Commands every project runs, written once](product.md#WrittenOnce)
- Applies: [A command writes documents as a project does](scenarios.md#WrittenAsAProjectDoes)

<a id="FiguresOfTheDocuments"></a>

### Figures in Mermaid and in text

`FiguresOfTheDocuments` · `src/scenarios.ts:206` · status: **held**

In the library's scenarios, the figures of the files are Mermaid diagrams, those of the terminal lines of text.

In [Test](scenarios.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Figures of the documents written as files](../.trame/documents/docs/rendering.md#FileFigures) | [Mermaid diagrams](../.trame/documents/docs/rendering.md#MermaidDiagrams) | a function |
| [Figures of the terminal](../.trame/documents/docs/rendering.md#TerminalFigures) | [Figures as text](../.trame/documents/docs/rendering.md#TextFigures) | a function |

Context: Each syntax reaches its figures through a port of its own, chosen apart.

- Decided by: trame
- Chooses: [Mermaid diagrams](../.trame/documents/docs/rendering.md#MermaidDiagrams), [Figures as text](../.trame/documents/docs/rendering.md#TextFigures)
- In: [Test](scenarios.md#Test)
- Follows: [Strategy](../.trame/std/docs/patterns.md#Strategy)
- Serves: [Commands every project runs, written once](product.md#WrittenOnce)
- Applies: [A command writes documents as a project does](scenarios.md#WrittenAsAProjectDoes)

<a id="DocumentsLanguage"></a>

### In the language of libs/documents' scenarios

`DocumentsLanguage` · `src/scenarios.ts:219` · status: **held**

In the library's scenarios, the documents are written in the language libs/documents decided for its own.

In [Test](scenarios.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [The language of the documents](../.trame/documents/docs/language.md#DocumentLanguage) | [Written in the language of the scenarios](../.trame/documents/docs/scenarios.md#WrittenForTheScenarios) | a function |

Context: The documents speak the language of the engine that compiles the graph: in a library's scenarios, a language decided for them.

- Decided by: trame
- Chooses: [Written in the language of the scenarios](../.trame/documents/docs/scenarios.md#WrittenForTheScenarios)
- In: [Test](scenarios.md#Test)
- Follows: [Strategy](../.trame/std/docs/patterns.md#Strategy)
- Serves: [Commands every project runs, written once](product.md#WrittenOnce)
- Applies: [A command writes documents as a project does](scenarios.md#WrittenAsAProjectDoes)
