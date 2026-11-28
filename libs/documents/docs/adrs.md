# Architecture decisions

*The choices that shape the product without being values, in force on 28 November 2026: why each was taken, what was rejected, and the nodes that apply it.*

> **3 architecture decisions, 3 held by the nodes that apply them**

| Decision | Status | Applied by |
|---|---|---|
| [One renderer, its syntax a choice](rendering.md#OneRendererManySyntaxes) | **held** | [Rendering of the files](rendering.md#FileRendering), [Markdown writer](rendering.md#MarkdownSyntax), [Mermaid diagrams](rendering.md#MermaidDiagrams), [Plain text writer](rendering.md#PlainTextSyntax), [The renderer](rendering.md#Rendering), [Rendering in the terminal](rendering.md#TerminalRendering), [Figures as text](rendering.md#TextFigures) |
| [The documents speak the engine's language](scenarios.md#TheEnginesLanguage) | **held** | [Dates](language.md#Dates), [Lists](language.md#Lists), [Punctuation](language.md#Punctuation), [Values with their units](language.md#Units), [The scenarios' language](scenarios.md#InTheScenariosLanguage) |
| [The scenarios render as a project does](scenarios.md#HowTheScenariosRender) | **held** | [Figures in Mermaid](scenarios.md#FiguresInMermaid), [Files in Markdown](scenarios.md#FilesInMarkdown), [The formats of the answers](scenarios.md#FormatsOfTheAnswers), [Read by the engine](scenarios.md#LanguagesRead), [Figures at a terminal, as text](scenarios.md#TerminalFiguresAsText), [The terminal in text](scenarios.md#TerminalInText) |

## Documents · Rendering

<a id="OneRendererManySyntaxes"></a>

### One renderer, its syntax a choice

`OneRendererManySyntaxes` · `src/rendering.ts:364` · status: **held**

A document is rendered by one renderer, which says each piece in words and finds where references lead; the syntax it writes in is a port, chosen per audience, and the figures a second port, which the syntax reaches.

Context: Markdown, the terminal and the page each had their renderer: three walks of the same blocks, three ways of saying a status or an overlap, and the page's outside the graph.

Consequences: The words of a document are said once, by the renderer; a new format is a realization of a syntax port and a choice, without touching the renderer. Syntax and figures vary apart: Markdown with figures as text is two choices, not a new renderer. A project that declares a port of its own for another audience (Trame's page) gives the same renderer its syntax.

| Rejected | Why |
|---|---|
| A renderer per format | the walk and the words repeated, and drifting |
| Figures in each syntax | a syntax and a way of drawing tied together, which no longer vary apart |

- Decided by: trame
- Serves: [Documents rendered once, for every project](product.md#RenderedOnce)
- Applied by: [The renderer](rendering.md#Rendering), [Rendering of the files](rendering.md#FileRendering), [Rendering in the terminal](rendering.md#TerminalRendering), [Markdown writer](rendering.md#MarkdownSyntax), [Plain text writer](rendering.md#PlainTextSyntax), [Mermaid diagrams](rendering.md#MermaidDiagrams), [Figures as text](rendering.md#TextFigures)

## Documents · Scenarios

<a id="TheEnginesLanguage"></a>

### The documents speak the engine's language

`TheEnginesLanguage` · `src/scenarios.ts:124` · status: **held**

The views speak the language of the engine that compiles a graph: what renders their documents writes its dates, its lists, its marks and its numbers, through a port each project realizes with its decision of the language (Trame with its own), and the library's scenarios with one decided for them.

Context: A document says, in one line, what a view said and what a renderer wrote around it: two languages, or two ways of writing a date, would show in the same sentence.

Consequences: The engine's g.lib, the renderers and the page read the same nodes; another language is another realization, with its catalogs.

| Rejected | Why |
|---|---|
| The library's own language, fixed | a project whose engine spoke another would get documents in two languages |

- Decided by: trame
- Serves: [Documents rendered once, for every project](product.md#RenderedOnce)
- Applied by: [Dates](language.md#Dates), [Lists](language.md#Lists), [Punctuation](language.md#Punctuation), [Values with their units](language.md#Units), [The scenarios' language](scenarios.md#InTheScenariosLanguage)

<a id="HowTheScenariosRender"></a>

### The scenarios render as a project does

`HowTheScenariosRender` · `src/scenarios.ts:411` · status: **held**

The renderers are pure: they receive documents in the intermediate format, the contract of the views, and give text. The scenarios render documents written in it, with each syntax and each kind of figures the library offers, chosen as a project chooses them; what its syntax elements write in HTML is read back by the engine that builds the library.

Context: A renderer is held to the intermediate format, not to a graph: what a view gives, whatever the project.

Consequences: A change of the renderers shows in the expected documents, line by line, as a review of the documents of a project would show it.

| Rejected | Why |
|---|---|
| A project compiled and its documents rendered | the views would be played again here, and the API gives no documents yet |

- Decided by: trame
- Serves: [Documents rendered once, for every project](product.md#RenderedOnce)
- Applied by: [Files in Markdown](scenarios.md#FilesInMarkdown), [Figures in Mermaid](scenarios.md#FiguresInMermaid), [The terminal in text](scenarios.md#TerminalInText), [Figures at a terminal, as text](scenarios.md#TerminalFiguresAsText), [Read by the engine](scenarios.md#LanguagesRead), [The formats of the answers](scenarios.md#FormatsOfTheAnswers)
- Adopts: [The engine is a provider](../.trame/std/docs/engine.md#EngineAsAProvider)
