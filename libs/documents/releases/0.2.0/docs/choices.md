# Technical choices

*What answers each port in each environment on 27 November 2026: a technical choice says what it chooses, where, the patterns it follows, why, and what it rejected. The code that uses a port never names what answers it.*

> **6 technical choices for 6 ports, in 1 environment**

| Port | Test |
|---|---|
| [The language of the documents](language.md#DocumentLanguage) | [Written in the language of the scenarios](scenarios.md#WrittenForTheScenarios) |
| [Syntax of the documents written as files](rendering.md#FileSyntax) | [Markdown writer](rendering.md#MarkdownSyntax) |
| [Syntax of the terminal](rendering.md#TerminalSyntax) | [Plain text writer](rendering.md#PlainTextSyntax) |
| [Figures of the documents written as files](rendering.md#FileFigures) | [Mermaid diagrams](rendering.md#MermaidDiagrams) |
| [Figures of the terminal](rendering.md#TerminalFigures) | [Figures as text](rendering.md#TextFigures) |
| [Reading a language](../.trame/std/docs/engine.md#LanguageReading) | [Read by the engine](../.trame/std/docs/engine.md#ReadByTheEngine) |

| Pattern | Status | Followed by |
|---|---|---|
| [Strategy](../.trame/std/docs/patterns.md#Strategy) | **held** | [The scenarios' language](scenarios.md#InTheScenariosLanguage), [Files in Markdown](scenarios.md#FilesInMarkdown), [Figures in Mermaid](scenarios.md#FiguresInMermaid), [The terminal in text](scenarios.md#TerminalInText), [Figures at a terminal, as text](scenarios.md#TerminalFiguresAsText), [In memory](../.trame/std/docs/scenarios.md#InMemory), [Judged as the language says](../.trame/std/docs/scenarios.md#LanguageJudgment), [Judged strictly](../.trame/std/docs/scenarios.md#StrictJudgment), [The scenarios' settings](../.trame/std/docs/scenarios.md#ScenarioSettings) |
| [Adapter](../.trame/std/docs/patterns.md#Adapter) | **held** | [Read by the engine](scenarios.md#LanguagesRead), [Read by the engine that builds](../.trame/std/docs/scenarios.md#ReadInTheEngine) |
| [Bridge](../.trame/std/docs/patterns.md#Bridge) | **held** | [Files in Markdown](scenarios.md#FilesInMarkdown), [The terminal in text](scenarios.md#TerminalInText) |

## Documents · Scenarios

<a id="InTheScenariosLanguage"></a>

### The scenarios' language

`InTheScenariosLanguage` · `src/scenarios.ts:50` · status: **held**

In the library's scenarios, the documents are written in the language decided for them.

In [Test](scenarios.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [The language of the documents](language.md#DocumentLanguage) | [Written in the language of the scenarios](scenarios.md#WrittenForTheScenarios) | a function |

Context: A project writes its documents in the language its engine speaks: the library's scenarios decide one of their own, the one Trame speaks.

- Decided by: trame
- Chooses: [Written in the language of the scenarios](scenarios.md#WrittenForTheScenarios)
- In: [Test](scenarios.md#Test)
- Follows: [Strategy](../.trame/std/docs/patterns.md#Strategy)
- Serves: [Documents rendered once, for every project](product.md#RenderedOnce)
- Applies: [The documents speak the engine's language](scenarios.md#TheEnginesLanguage)

<a id="FilesInMarkdown"></a>

### Files in Markdown

`FilesInMarkdown` · `src/scenarios.ts:136` · status: **held**

In the library's scenarios, the documents written as files are in Markdown, as a project chooses them.

In [Test](scenarios.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Syntax of the documents written as files](rendering.md#FileSyntax) | [Markdown writer](rendering.md#MarkdownSyntax) | a function |

Context: The scenarios play the syntax of files the library offers.

- Decided by: trame
- Chooses: [Markdown writer](rendering.md#MarkdownSyntax)
- In: [Test](scenarios.md#Test)
- Follows: [Bridge](../.trame/std/docs/patterns.md#Bridge), [Strategy](../.trame/std/docs/patterns.md#Strategy)
- Serves: [Documents rendered once, for every project](product.md#RenderedOnce)
- Applies: [The scenarios render as a project does](scenarios.md#HowTheScenariosRender)

<a id="FiguresInMermaid"></a>

### Figures in Mermaid

`FiguresInMermaid` · `src/scenarios.ts:149` · status: **held**

In the library's scenarios, the figures of the files are Mermaid diagrams.

In [Test](scenarios.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Figures of the documents written as files](rendering.md#FileFigures) | [Mermaid diagrams](rendering.md#MermaidDiagrams) | a function |

Context: The scenarios play the figures of files the library offers.

- Decided by: trame
- Chooses: [Mermaid diagrams](rendering.md#MermaidDiagrams)
- In: [Test](scenarios.md#Test)
- Follows: [Strategy](../.trame/std/docs/patterns.md#Strategy)
- Serves: [Documents rendered once, for every project](product.md#RenderedOnce)
- Applies: [The scenarios render as a project does](scenarios.md#HowTheScenariosRender)

<a id="TerminalInText"></a>

### The terminal in text

`TerminalInText` · `src/scenarios.ts:162` · status: **held**

In the library's scenarios, what a terminal prints is plain text.

In [Test](scenarios.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Syntax of the terminal](rendering.md#TerminalSyntax) | [Plain text writer](rendering.md#PlainTextSyntax) | a function |

Context: The scenarios play the syntax of the terminal the library offers.

- Decided by: trame
- Chooses: [Plain text writer](rendering.md#PlainTextSyntax)
- In: [Test](scenarios.md#Test)
- Follows: [Bridge](../.trame/std/docs/patterns.md#Bridge), [Strategy](../.trame/std/docs/patterns.md#Strategy)
- Serves: [Documents rendered once, for every project](product.md#RenderedOnce)
- Applies: [The scenarios render as a project does](scenarios.md#HowTheScenariosRender)

<a id="TerminalFiguresAsText"></a>

### Figures at a terminal, as text

`TerminalFiguresAsText` · `src/scenarios.ts:175` · status: **held**

In the library's scenarios, a figure printed at a terminal is drawn in lines of text.

In [Test](scenarios.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Figures of the terminal](rendering.md#TerminalFigures) | [Figures as text](rendering.md#TextFigures) | a function |

Context: The scenarios play the figures of the terminal the library offers.

- Decided by: trame
- Chooses: [Figures as text](rendering.md#TextFigures)
- In: [Test](scenarios.md#Test)
- Follows: [Strategy](../.trame/std/docs/patterns.md#Strategy)
- Serves: [Documents rendered once, for every project](product.md#RenderedOnce)
- Applies: [The scenarios render as a project does](scenarios.md#HowTheScenariosRender)

<a id="LanguagesRead"></a>

### Read by the engine

`LanguagesRead` · `src/scenarios.ts:188` · status: **held**

Where the library's build evaluates, the HTML its syntax elements write is read back by the engine that builds it.

In [Test](scenarios.md#Test):

| Port | Answered by | Which is |
|---|---|---|
| [Reading a language](../.trame/std/docs/engine.md#LanguageReading) | [Read by the engine](../.trame/std/docs/engine.md#ReadByTheEngine) | an implementation |

Context: Reading a language is the engine's: the grammar and its reader are the engine's packages, which no library carries.

- Decided by: trame
- Chooses: [Read by the engine](../.trame/std/docs/engine.md#ReadByTheEngine)
- In: [Test](scenarios.md#Test)
- Follows: [Adapter](../.trame/std/docs/patterns.md#Adapter)
- Serves: [Documents rendered once, for every project](product.md#RenderedOnce)
- Applies: [The scenarios render as a project does](scenarios.md#HowTheScenariosRender)
