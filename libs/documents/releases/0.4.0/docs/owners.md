# Owners

*What each person must decide, settle or watch on 28 November 2026, and what they own.*

| Owner | To decide or settle | Errors | To watch | Owns |
|---|---|---|---|---|
| trame | 0 | 0 | 2 | 117 |

<a id="trame"></a>

## trame

| Severity | Code | What | Where | Owner | Consequence |
|---|---|---|---|---|---|
| warning | `shipment-awaits` | To ship: The renderers of documents is unknown | [The next version](sdlc.md#NextVersion) | trame |  |
| warning | `artifact-stale` | Built from code that has changed since, or by another engine than the one pinned: trame ship builds it again | [The renderers of documents](sdlc.md#TheLibrary) | trame |  |

### Owns

| Node | Kind | State |
|---|---|---|
| [Palette](appearance.md#Palette) | Decision |  |
| [Escaped text](html.md#EscapedText) | Syntax element | **held** |
| [Attributes](html.md#HtmlAttributes) | Syntax element | **held** |
| [HTML element](html.md#HtmlElement) | Syntax element | **held** |
| [End tag](html.md#HtmlEndTag) | Syntax element | **held** |
| [Heading of a rank](html.md#HtmlHeading) | Syntax element | **held** |
| [Start tag](html.md#HtmlStartTag) | Syntax element | **held** |
| [Self-closing tag](html.md#SelfClosingTag) | Syntax element | **held** |
| [Dates](language.md#Dates) | Function | **held** |
| [The language of the documents](language.md#DocumentLanguage) | Port |  |
| [Lists](language.md#Lists) | Function | **held** |
| [How a number is written](language.md#NumberDisplay) | Decision |  |
| [Punctuation](language.md#Punctuation) | Function | **held** |
| [Values with their units](language.md#Units) | Function | **held** |
| [The language of the library's words](language.md#WordsLanguage) | Decision |  |
| [Anchor](markdown.md#Anchor) | Syntax element | **held** |
| [Backtick string](markdown.md#BacktickString) | Syntax element | **held** |
| [Blank line](markdown.md#BlankLine) | Syntax element | **held** |
| [Block quote](markdown.md#BlockQuote) | Syntax element | **held** |
| [Sequence of blocks](markdown.md#Blocks) | Syntax element | **held** |
| [Code block](markdown.md#CodeBlock) | Syntax element | **held** |
| [Code span](markdown.md#CodeSpan) | Syntax element | **held** |
| [CommonMark](markdown.md#CommonMark) | Standard |  |
| [Collapsible block](markdown.md#Details) | Syntax element | **held** |
| [Emphasis](markdown.md#Emphasis) | Syntax element | **held** |
| [GitHub Flavored Markdown](markdown.md#Gfm) | Standard |  |
| [Heading](markdown.md#Heading) | Syntax element | **held** |
| [Link](markdown.md#Link) | Syntax element | **held** |
| [List item](markdown.md#ListItem) | Syntax element | **held** |
| [Relative reference](markdown.md#RelativeReference) | Syntax element | **held** |
| [Small text](markdown.md#Small) | Syntax element | **held** |
| [Strong emphasis](markdown.md#StrongEmphasis) | Syntax element | **held** |
| [Table](markdown.md#Table) | Syntax element | **held** |
| [Table cell](markdown.md#TableCell) | Syntax element | **held** |
| [Delimiter row](markdown.md#TableDelimiterRow) | Syntax element | **held** |
| [Table row](markdown.md#TableRow) | Syntax element | **held** |
| [Class definition](mermaid.md#ClassDefinition) | Syntax element | **held** |
| [Flowchart](mermaid.md#Flowchart) | Syntax element | **held** |
| [Gantt chart](mermaid.md#Gantt) | Syntax element | **held** |
| [Name in a Gantt chart](mermaid.md#GanttName) | Syntax element | **held** |
| [Section](mermaid.md#GanttSection) | Syntax element | **held** |
| [Task](mermaid.md#GanttTask) | Syntax element | **held** |
| [Mermaid](mermaid.md#Mermaid) | Standard |  |
| [Label](mermaid.md#MermaidLabel) | Syntax element | **held** |
| [Link](mermaid.md#MermaidLink) | Syntax element | **held** |
| [Node](mermaid.md#MermaidNode) | Syntax element | **held** |
| [Milestone](mermaid.md#Milestone) | Syntax element | **held** |
| [Node style](mermaid.md#NodeStyle) | Syntax element | **held** |
| [Style properties](mermaid.md#StyleProperties) | Syntax element | **held** |
| [Subgraph](mermaid.md#Subgraph) | Syntax element | **held** |
| [The library of continuous integration](packages.md#ContinuousIntegration) | Package |  |
| [Trame](packages.md#Language) | Package |  |
| [The people of the repository](packages.md#People) | Package |  |
| [std](packages.md#StandardLibrary) | Package |  |
| [Documents rendered once, for every project](product.md#RenderedOnce) | Goal |  |
| [Version 0.1.0](releases.md#R0_1_0) | Release |  |
| [Version 0.1.1](releases.md#R0_1_1) | Release |  |
| [Version 0.2.0](releases.md#R0_2_0) | Release |  |
| [Version 0.3.0](releases.md#R0_3_0) | Release |  |
| [Documents at a terminal](rendering.md#AnswersAtATerminal) | Function | **held** |
| [Documents in Markdown](rendering.md#AnswersInMarkdown) | Function | **held** |
| [Common rendering](rendering.md#Common) | Function | **held** |
| [Figures of the documents written as files](rendering.md#FileFigures) | Port |  |
| [Rendering of the files](rendering.md#FileRendering) | Function | **held** |
| [Syntax of the documents written as files](rendering.md#FileSyntax) | Port |  |
| [Markdown writer](rendering.md#MarkdownSyntax) | Function | **held** |
| [Mermaid diagrams](rendering.md#MermaidDiagrams) | Function | **held** |
| [How Mermaid figures are drawn](rendering.md#MermaidFigures) | Decision |  |
| [One renderer, its syntax a choice](rendering.md#OneRendererManySyntaxes) | Architecture decision | **held** |
| [Plain text writer](rendering.md#PlainTextSyntax) | Function | **held** |
| [The renderer](rendering.md#Rendering) | Function | **held** |
| [Words of the renderers](rendering.md#RenderingMessages) | Message catalog |  |
| [Places in a sentence](rendering.md#SentenceSlots) | Decision |  |
| [Figures of the terminal](rendering.md#TerminalFigures) | Port |  |
| [Rendering in the terminal](rendering.md#TerminalRendering) | Function | **held** |
| [Syntax of the terminal](rendering.md#TerminalSyntax) | Port |  |
| [Figures as text](rendering.md#TextFigures) | Function | **held** |
| [Heading levels of Markdown documents](rendering.md#TextRendering) | Decision |  |
| [The documents the scenarios render](samples.md#SampleDocuments) | Decision |  |
| [Answers written in their formats](scenarios.md#AnswersWritten) | Scenario | **held** |
| [The documents, rendered](scenarios.md#DocumentsRendered) | Scenario | **held** |
| [What the scenarios read and expect](scenarios.md#Expected) | Decision |  |
| [What the scenarios expect](scenarios.md#ExpectedDocuments) | Decision |  |
| [Figures in Mermaid](scenarios.md#FiguresInMermaid) | Technical choice | **held** |
| [Files in Markdown](scenarios.md#FilesInMarkdown) | Technical choice | **held** |
| [The formats of the answers](scenarios.md#FormatsOfTheAnswers) | Technical choice | **held** |
| [The scenarios render as a project does](scenarios.md#HowTheScenariosRender) | Architecture decision | **held** |
| [The scenarios' language](scenarios.md#InTheScenariosLanguage) | Technical choice | **held** |
| [Read by the engine](scenarios.md#LanguagesRead) | Technical choice | **held** |
| [The language of the documents, written](scenarios.md#LanguageWritten) | Scenario | **held** |
| [The language of the scenarios](scenarios.md#ScenarioLanguage) | Decision |  |
| [What the scenarios check](scenarios.md#ScenarioWords) | Message catalog |  |
| [Figures at a terminal, as text](scenarios.md#TerminalFiguresAsText) | Technical choice | **held** |
| [The terminal in text](scenarios.md#TerminalInText) | Technical choice | **held** |
| [Test](scenarios.md#Test) | Environment |  |
| [The documents speak the engine's language](scenarios.md#TheEnginesLanguage) | Architecture decision | **held** |
| [Written in the language of the scenarios](scenarios.md#WrittenForTheScenarios) | Function | **held** |
| [Its code verified](sdlc.md#CodeVerified) | Obligation |  |
| [Its decisions applied](sdlc.md#DecisionsApplied) | Obligation |  |
| [The next version](sdlc.md#NextVersion) | Shipment | **unknown** |
| [Its packages safe](sdlc.md#PackagesSafe) | Obligation |  |
| [How a pull request is checked on GitHub](sdlc.md#PullRequestsOnGitHub) | Decision |  |
| [The pull requests' workflow](sdlc.md#PullRequestWorkflow) | Artefact | **held** |
| [Its requirements held](sdlc.md#RequirementsServed) | Obligation |  |
| [The files that run it elsewhere](sdlc.md#RunnersWritten) | Shipment | **held** |
| [The renderers of documents](sdlc.md#TheLibrary) | Artefact | **unknown** |
| [How a version is made](sdlc.md#VersionMode) | Policy |  |
| [Box drawing](text.md#BoxDrawing) | Standard |  |
| [Code lines](text.md#CodeLines) | Syntax element | **held** |
| [Columns](text.md#Columns) | Syntax element | **held** |
| [Item line](text.md#ItemLine) | Syntax element | **held** |
| [Padded cell](text.md#PaddedCell) | Syntax element | **held** |
| [Path step](text.md#PathStep) | Syntax element | **held** |
| [Columns in the terminal](text.md#TerminalColumns) | Decision |  |
| [Lines of the terminal](text.md#TerminalLines) | Syntax element | **held** |
| [Terminal text](text.md#TerminalText) | Decision |  |
| [Tree branch](text.md#TreeBranch) | Syntax element | **held** |
