# Owners

*What each person must decide, settle or watch on 28 November 2026, and what they own.*

| Owner | To decide or settle | Errors | To watch | Owns |
|---|---|---|---|---|
| trame | 0 | 0 | 4 | 218 |

<a id="trame"></a>

## trame

| Severity | Code | What | Where | Owner | Consequence |
|---|---|---|---|---|---|
| warning | `shipment-awaits` | To ship: The renderers of documents is unknown | [The next version](sdlc.md#NextVersion) | trame |  |
| warning | `artifact-stale` | Built from code that has changed since, or by another engine than the one pinned: trame ship builds it again | [The pull requests' workflow](sdlc.md#PullRequestWorkflow) | trame |  |
| warning | `shipment-awaits` | To ship: The pull requests' workflow is unknown | [The files that run it elsewhere](sdlc.md#RunnersWritten) | trame |  |
| warning | `artifact-stale` | Built from code that has changed since, or by another engine than the one pinned: trame ship builds it again | [The renderers of documents](sdlc.md#TheLibrary) | trame |  |

### Owns

| Node | Kind | State |
|---|---|---|
| [Drawing of the explorer](appearance.md#ExplorerDrawing) | Decision |  |
| [Drawing of a graph](appearance.md#GraphDrawing) | Decision |  |
| [Legend of a graph](appearance.md#LegendDrawing) | Decision |  |
| [Motion](appearance.md#Motion) | Decision |  |
| [Narrow screen](appearance.md#NarrowScreen) | Decision |  |
| [Opacities](appearance.md#Opacities) | Decision |  |
| [Page layout](appearance.md#PageLayout) | Decision |  |
| [Palette](appearance.md#Palette) | Decision |  |
| [Radii](appearance.md#Radii) | Decision |  |
| [Spacing](appearance.md#Spacing) | Decision |  |
| [Strokes](appearance.md#Strokes) | Decision |  |
| [Drawing of a timeline](appearance.md#TimelineDrawing) | Decision |  |
| [Type scale](appearance.md#TypeScale) | Decision |  |
| [Typography](appearance.md#Typography) | Decision |  |
| [Amendments sent to trame dev](browser.md#BrowserAmendments) | Implementation |  |
| [The browser's gzip](browser.md#BrowserDecompression) | Implementation |  |
| [The globals of the page, and trame dev](browser.md#BrowserFeed) | Implementation |  |
| [Local storage](browser.md#BrowserMemory) | Implementation |  |
| [The browser's window](browser.md#BrowserWindow) | Implementation |  |
| [Decompression](browser.md#Decompression) | Port |  |
| [Explorer of a graph](browser.md#ExplorerFigures) | Function | **held** |
| [Feed of the graph](browser.md#GraphFeed) | Port |  |
| [Amendments from the page](browser.md#PageAmendments) | Port |  |
| [The page in a browser](browser.md#PageApp) | Component |  |
| [Memory of the page](browser.md#PageMemory) | Port |  |
| [Window of the page](browser.md#PageWindow) | Port |  |
| [Show the graph](browser.md#ShowGraph) | Entry point | **unknown** |
| [The page is assembled](browser.md#ThePageIsAssembled) | Architecture decision | **held** |
| [Attribute presence](html.md#AttributePresence) | Syntax element | **held** |
| [Attribute selector](html.md#AttributeSelector) | Syntax element | **held** |
| [Class selector](html.md#ClassSelector) | Syntax element | **held** |
| [Declaration](html.md#CssDeclaration) | Syntax element | **held** |
| [Rule](html.md#CssRule) | Syntax element | **held** |
| [Variable](html.md#CssVariable) | Syntax element | **held** |
| [Custom property](html.md#CustomProperty) | Syntax element | **held** |
| [DOCTYPE](html.md#Doctype) | Syntax element | **held** |
| [Escaped text](html.md#EscapedText) | Syntax element | **held** |
| [A global assigned](html.md#GlobalAssignment) | Syntax element | **held** |
| [Attributes](html.md#HtmlAttributes) | Syntax element | **held** |
| [Element over several lines](html.md#HtmlBlock) | Syntax element | **held** |
| [HTML element](html.md#HtmlElement) | Syntax element | **held** |
| [End tag](html.md#HtmlEndTag) | Syntax element | **held** |
| [Heading of a rank](html.md#HtmlHeading) | Syntax element | **held** |
| [Start tag](html.md#HtmlStartTag) | Syntax element | **held** |
| [JSON in a script](html.md#JsonInScript) | Syntax element | **held** |
| [Media feature](html.md#MediaFeature) | Syntax element | **held** |
| [Media rule](html.md#MediaRule) | Syntax element | **held** |
| [Negation](html.md#NegationSelector) | Syntax element | **held** |
| [Path data](html.md#PathData) | Syntax element | **held** |
| [Script](html.md#ScriptElement) | Syntax element | **held** |
| [Selector list](html.md#SelectorList) | Syntax element | **held** |
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
| [Around the documents](markup.md#AroundMarkup) | Decision |  |
| [Documents in the page](markup.md#DocumentMarkup) | Decision |  |
| [The explorer of a graph](markup.md#ExplorerMarkup) | Decision |  |
| [Figures in the page](markup.md#FigureMarkup) | Decision |  |
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
| [Banner](page.md#Banner) | Syntax element | **held** |
| [Brand](page.md#Brand) | Syntax element | **held** |
| [State of the compilation](page.md#CompilationState) | Syntax element | **held** |
| [Dates](page.md#DatePicker) | Syntax element | **held** |
| [What trame dev serves](page.md#DevService) | Decision |  |
| [Head of the document](page.md#DocumentHead) | Syntax element | **held** |
| [Document picker](page.md#DocumentPicker) | Syntax element | **held** |
| [Arrowheads of the figures](page.md#FigureMarkers) | Syntax element | **held** |
| [Fonts](page.md#FontLinks) | Syntax element | **held** |
| [Packing the graph](page.md#GraphPacking) | Port |  |
| [gzip, in base64](page.md#GzipInBase64) | Implementation |  |
| [Logo](page.md#Logo) | Syntax element | **held** |
| [Files for tools in the page](page.md#MachineHighlighting) | Decision |  |
| [Main area](page.md#MainArea) | Syntax element | **held** |
| [Rules of a narrow screen](page.md#NarrowScreenRule) | Syntax element | **held** |
| [Style sheet of a narrow screen](page.md#NarrowScreenStyle) | Style sheet |  |
| [Navigation](page.md#Navigation) | Syntax element | **held** |
| [A page carries its graph compressed](page.md#PackedGraph) | Decision |  |
| [Page](page.md#Page) | Function | **held** |
| [Document of the page](page.md#PageDocument) | Syntax element | **held** |
| [Regions of the page](page.md#PageRegions) | Decision |  |
| [Scripts of the page](page.md#PageScripts) | Syntax element | **held** |
| [Where the page's style sheets are](page.md#PageSheetFiles) | Decision |  |
| [The page's style sheets](page.md#PageSheets) | Port |  |
| [Style sheet of the page](page.md#PageStyle) | Style sheet |  |
| [Words of the page](page.md#PageWords) | Message catalog |  |
| [The renderings of a document](page.md#RenderingModes) | Vocabulary |  |
| [Choice of rendering](page.md#RenderingToggle) | Syntax element | **held** |
| [Style sheets beside the library](page.md#SheetsBesideTheLibrary) | Implementation | **held** |
| [Shell](page.md#Shell) | Syntax element | **held** |
| [Side bar](page.md#SideBar) | Syntax element | **held** |
| [Style of the standalone document](page.md#StandaloneStyle) | Decision |  |
| [Colours of a status](page.md#StatusStyle) | Syntax element | **held** |
| [A style sheet writes no value](page.md#StyleThroughVariables) | Architecture decision | **held** |
| [Theme](page.md#Theme) | Syntax element | **held** |
| [The page](page.md#ThePage) | Decision |  |
| [Documents rendered once, for every project](product.md#RenderedOnce) | Goal |  |
| [A graph shown in a page, for every project](product.md#ShownInAPage) | Goal |  |
| [Version 0.1.0](releases.md#R0_1_0) | Release |  |
| [Version 0.1.1](releases.md#R0_1_1) | Release |  |
| [Version 0.2.0](releases.md#R0_2_0) | Release |  |
| [Version 0.3.0](releases.md#R0_3_0) | Release |  |
| [Version 0.4.0](releases.md#R0_4_0) | Release |  |
| [Version 0.5.0](releases.md#R0_5_0) | Release |  |
| [Documents at a terminal](rendering.md#AnswersAtATerminal) | Function | **held** |
| [Documents in Markdown](rendering.md#AnswersInMarkdown) | Function | **held** |
| [Common rendering](rendering.md#Common) | Function | **held** |
| [Names of the documents](rendering.md#DocumentIds) | Standard |  |
| [Figures of the documents written as files](rendering.md#FileFigures) | Port |  |
| [Rendering of the files](rendering.md#FileRendering) | Function | **held** |
| [Syntax of the documents written as files](rendering.md#FileSyntax) | Port |  |
| [HTML writer](rendering.md#HtmlSyntax) | Function | **held** |
| [Markdown writer](rendering.md#MarkdownSyntax) | Function | **held** |
| [Mermaid diagrams](rendering.md#MermaidDiagrams) | Function | **held** |
| [How Mermaid figures are drawn](rendering.md#MermaidFigures) | Decision |  |
| [One renderer, its syntax a choice](rendering.md#OneRendererManySyntaxes) | Architecture decision | **held** |
| [Figures of the page](rendering.md#PageFigures) | Port |  |
| [Rendering in the page](rendering.md#PageRendering) | Function | **held** |
| [Syntax of the page](rendering.md#PageSyntax) | Port |  |
| [Plain text writer](rendering.md#PlainTextSyntax) | Function | **held** |
| [The renderer](rendering.md#Rendering) | Function | **held** |
| [Words of the renderers](rendering.md#RenderingMessages) | Message catalog |  |
| [Places in a sentence](rendering.md#SentenceSlots) | Decision |  |
| [Figures in SVG](rendering.md#SvgFigures) | Function | **held** |
| [Figures of the terminal](rendering.md#TerminalFigures) | Port |  |
| [Rendering in the terminal](rendering.md#TerminalRendering) | Function | **held** |
| [Syntax of the terminal](rendering.md#TerminalSyntax) | Port |  |
| [Figures as text](rendering.md#TextFigures) | Function | **held** |
| [Heading levels of Markdown documents](rendering.md#TextRendering) | Decision |  |
| [The documents the scenarios render](samples.md#SampleDocuments) | Decision |  |
| [Answers written in their formats](scenarios.md#AnswersWritten) | Scenario | **held** |
| [The documents in the page](scenarios.md#DocumentsInThePage) | Scenario | **held** |
| [The documents, rendered](scenarios.md#DocumentsRendered) | Scenario | **held** |
| [What the scenarios read and expect](scenarios.md#Expected) | Decision |  |
| [What the scenarios expect](scenarios.md#ExpectedDocuments) | Decision |  |
| [What the page expects](scenarios.md#ExpectedPage) | Decision |  |
| [Figures in Mermaid](scenarios.md#FiguresInMermaid) | Technical choice | **held** |
| [Files in Markdown](scenarios.md#FilesInMarkdown) | Technical choice | **held** |
| [The formats of the answers](scenarios.md#FormatsOfTheAnswers) | Technical choice | **held** |
| [The scenarios render as a project does](scenarios.md#HowTheScenariosRender) | Architecture decision | **held** |
| [The scenarios' language](scenarios.md#InTheScenariosLanguage) | Technical choice | **held** |
| [Read by the engine](scenarios.md#LanguagesRead) | Technical choice | **held** |
| [The language of the documents, written](scenarios.md#LanguageWritten) | Scenario | **held** |
| [A page asked for](scenarios.md#PageAsked) | Decision |  |
| [The page's figures in SVG](scenarios.md#PageFiguresDrawn) | Technical choice | **held** |
| [The page in HTML](scenarios.md#PageInHtml) | Technical choice | **held** |
| [The language of the scenarios](scenarios.md#ScenarioLanguage) | Decision |  |
| [What the scenarios check](scenarios.md#ScenarioWords) | Message catalog |  |
| [Style sheets read beside the library](scenarios.md#SheetsRead) | Technical choice | **held** |
| [Figures at a terminal, as text](scenarios.md#TerminalFiguresAsText) | Technical choice | **held** |
| [The terminal in text](scenarios.md#TerminalInText) | Technical choice | **held** |
| [Test](scenarios.md#Test) | Environment |  |
| [The documents speak the engine's language](scenarios.md#TheEnginesLanguage) | Architecture decision | **held** |
| [The explorer of a large graph](scenarios.md#TheExplorerDraws) | Scenario | **held** |
| [A page made](scenarios.md#ThePageIsMade) | Scenario | **held** |
| [Written in the language of the scenarios](scenarios.md#WrittenForTheScenarios) | Function | **held** |
| [Its code verified](sdlc.md#CodeVerified) | Obligation |  |
| [Its decisions applied](sdlc.md#DecisionsApplied) | Obligation |  |
| [The next version](sdlc.md#NextVersion) | Shipment | **unknown** |
| [Its packages safe](sdlc.md#PackagesSafe) | Obligation |  |
| [How a pull request is checked on GitHub](sdlc.md#PullRequestsOnGitHub) | Decision |  |
| [The pull requests' workflow](sdlc.md#PullRequestWorkflow) | Artefact | **unknown** |
| [Its requirements held](sdlc.md#RequirementsServed) | Obligation |  |
| [The files that run it elsewhere](sdlc.md#RunnersWritten) | Shipment | **unknown** |
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
