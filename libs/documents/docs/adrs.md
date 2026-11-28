# Architecture decisions

*The choices that shape the product without being values, in force on 28 November 2026: why each was taken, what was rejected, and the nodes that apply it.*

> **5 architecture decisions, 5 held by the nodes that apply them**

| Decision | Status | Applied by |
|---|---|---|
| [The page is assembled](browser.md#ThePageIsAssembled) | **held** | [Explorer of a graph](browser.md#ExplorerFigures), [The page in a browser](browser.md#PageApp) |
| [A style sheet writes no value](page.md#StyleThroughVariables) | **held** | [Rules of a narrow screen](page.md#NarrowScreenRule), [Style sheet of a narrow screen](page.md#NarrowScreenStyle), [Page](page.md#Page), [Style sheet of the page](page.md#PageStyle), [Theme](page.md#Theme) |
| [One renderer, its syntax a choice](rendering.md#OneRendererManySyntaxes) | **held** | [Rendering of the files](rendering.md#FileRendering), [HTML writer](rendering.md#HtmlSyntax), [Markdown writer](rendering.md#MarkdownSyntax), [Mermaid diagrams](rendering.md#MermaidDiagrams), [Rendering in the page](rendering.md#PageRendering), [Plain text writer](rendering.md#PlainTextSyntax), [The renderer](rendering.md#Rendering), [Figures in SVG](rendering.md#SvgFigures), [Rendering in the terminal](rendering.md#TerminalRendering), [Figures as text](rendering.md#TextFigures) |
| [The documents speak the engine's language](scenarios.md#TheEnginesLanguage) | **held** | [Dates](language.md#Dates), [Lists](language.md#Lists), [Punctuation](language.md#Punctuation), [Values with their units](language.md#Units), [The scenarios' language](scenarios.md#InTheScenariosLanguage) |
| [The scenarios render as a project does](scenarios.md#HowTheScenariosRender) | **held** | [Figures in Mermaid](scenarios.md#FiguresInMermaid), [Files in Markdown](scenarios.md#FilesInMarkdown), [The formats of the answers](scenarios.md#FormatsOfTheAnswers), [Read by the engine](scenarios.md#LanguagesRead), [The page's figures in SVG](scenarios.md#PageFiguresDrawn), [The page in HTML](scenarios.md#PageInHtml), [Style sheets read beside the library](scenarios.md#SheetsRead), [Figures at a terminal, as text](scenarios.md#TerminalFiguresAsText), [The terminal in text](scenarios.md#TerminalInText) |

## Documents · The page in a browser

<a id="ThePageIsAssembled"></a>

### The page is assembled

`ThePageIsAssembled` · `src/browser.ts:210` · status: **held**

The page's script was the only code of Trame outside the graph: written by hand, wired by hand, its values written in it. It is now a component assembled for the browser, its entry point and its explorer bodies of the graph.

Context: The page's script built by hand what it shared with the engine and wrote its values (classes, identifiers, the explorer's geometry) as literals the catalogue could not see: a change in the graph did not reach it.

Consequences: The page's program is written by the assembly, like the command line's: the values of the graph frozen in it, its bodies wired, the browser's implementations chosen for the project's environment of a browser. It carries the modules of the graph its bodies use, which makes it heavier. Offered by the library (since 0.5.0), it is assembled by each project with its own choices.

| Rejected | Why |
|---|---|
| Values passed to the script in the page | the script would still build its functions by hand, outside the graph |
| The page drawn whole by the engine | the explorer's states are too many to draw in advance |

- Decided by: trame
- Serves: [A graph shown in a page, for every project](product.md#ShownInAPage)
- Applied by: [The page in a browser](browser.md#PageApp), [Explorer of a graph](browser.md#ExplorerFigures)

## Documents · The page

<a id="StyleThroughVariables"></a>

### A style sheet writes no value

`StyleThroughVariables` · `src/page.ts:964` · status: **held**

The values of the page's appearance are decisions of the graph: the page writes them as variables before its style sheets, which hold only variables, names and keywords.

Context: A style sheet is a body like any other: a value written in it hides its meaning, and the sheet of the page held 355. CSS cannot import a value, but it reads a variable declared before it.

Consequences: Each family of measures is a decision of appearance, and the theme writes them in :root with the colours and the fonts; the page refuses a style that uses a variable it does not write. A media query cannot read a variable: the width of a narrow screen is a decision, which the page writes in the media rule around the second sheet. The lines of a grid are named, not numbered. The scale was taken as it was, so the page looks as it did; folding it is a change of decisions.

| Rejected | Why |
|---|---|
| Folding the values into a lighter scale first | the page would have changed at the same time as its sheet was brought into the graph |
| Writing the rules as syntax elements | the sheet is where the appearance is chosen; two hundred rules spread over elements would hide it |
| An exception for style sheets | a value without its meaning is the same problem in a sheet as in code |

- Decided by: trame
- Serves: [A graph shown in a page, for every project](product.md#ShownInAPage)
- Applied by: [Style sheet of the page](page.md#PageStyle), [Style sheet of a narrow screen](page.md#NarrowScreenStyle), [Theme](page.md#Theme), [Rules of a narrow screen](page.md#NarrowScreenRule), [Page](page.md#Page)

## Documents · Rendering

<a id="OneRendererManySyntaxes"></a>

### One renderer, its syntax a choice

`OneRendererManySyntaxes` · `src/rendering.ts:449` · status: **held**

A document is rendered by one renderer, which says each piece in words and finds where references lead; the syntax it writes in is a port, chosen per audience, and the figures a second port, which the syntax reaches.

Context: Markdown, the terminal and the page each had their renderer: three walks of the same blocks, three ways of saying a status or an overlap, and the page's outside the graph.

Consequences: The words of a document are said once, by the renderer; a new format is a realization of a syntax port and a choice, without touching the renderer. Syntax and figures vary apart: Markdown with figures as text is two choices, not a new renderer. A project that declares a port of its own for another audience gives the same renderer its syntax, as the page does (since 0.5.0).

| Rejected | Why |
|---|---|
| A renderer per format | the walk and the words repeated, and drifting |
| Figures in each syntax | a syntax and a way of drawing tied together, which no longer vary apart |

- Decided by: trame
- Serves: [Documents rendered once, for every project](product.md#RenderedOnce)
- Applied by: [The renderer](rendering.md#Rendering), [Rendering of the files](rendering.md#FileRendering), [Rendering in the terminal](rendering.md#TerminalRendering), [Rendering in the page](rendering.md#PageRendering), [Markdown writer](rendering.md#MarkdownSyntax), [Plain text writer](rendering.md#PlainTextSyntax), [HTML writer](rendering.md#HtmlSyntax), [Mermaid diagrams](rendering.md#MermaidDiagrams), [Figures as text](rendering.md#TextFigures), [Figures in SVG](rendering.md#SvgFigures)

## Documents · Scenarios

<a id="TheEnginesLanguage"></a>

### The documents speak the engine's language

`TheEnginesLanguage` · `src/scenarios.ts:136` · status: **held**

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

`HowTheScenariosRender` · `src/scenarios.ts:541` · status: **held**

The renderers are pure: they receive documents in the intermediate format, the contract of the views, and give text. The scenarios render documents written in it, with each syntax and each kind of figures the library offers, chosen as a project chooses them; what its syntax elements write in HTML is read back by the engine that builds the library.

Context: A renderer is held to the intermediate format, not to a graph: what a view gives, whatever the project.

Consequences: A change of the renderers shows in the expected documents, line by line, as a review of the documents of a project would show it.

| Rejected | Why |
|---|---|
| A project compiled and its documents rendered | the views would be played again here, and the API gives no documents yet |

- Decided by: trame
- Serves: [Documents rendered once, for every project](product.md#RenderedOnce)
- Applied by: [Files in Markdown](scenarios.md#FilesInMarkdown), [Figures in Mermaid](scenarios.md#FiguresInMermaid), [The terminal in text](scenarios.md#TerminalInText), [Figures at a terminal, as text](scenarios.md#TerminalFiguresAsText), [Read by the engine](scenarios.md#LanguagesRead), [The formats of the answers](scenarios.md#FormatsOfTheAnswers), [The page in HTML](scenarios.md#PageInHtml), [The page's figures in SVG](scenarios.md#PageFiguresDrawn), [Style sheets read beside the library](scenarios.md#SheetsRead)
- Adopts: [The engine is a provider](../.trame/std/docs/engine.md#EngineAsAProvider)
