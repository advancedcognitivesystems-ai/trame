# Owners

*What each person must decide, settle or watch on 30 October 2026, and what they own.*

| Owner | To decide or settle | Errors | To watch | Owns |
|---|---|---|---|---|
| Trame's maintainers | 0 | 0 | 3 | 0 |
| trame | 0 | 0 | 10 | 660 |

<a id="Trame's maintainers"></a>

## Trame's maintainers

- Held by: ghalaax and claude

| Severity | What | Where | Owner | Consequence |
|---|---|---|---|---|
| warning | Checked on another build of its artefacts, by another version of its program or another engine: to check again | [The candidate plays the laws](sdlc.md#CandidateKeepsTheLaws) | Trame's maintainers |  |
| warning | Checked on another build of its artefacts, by another version of its program or another engine: to check again | [The candidate runs on the machine](sdlc.md#CandidateRunsOnTheMachine) | Trame's maintainers |  |
| warning | Checked on another build of its artefacts, by another version of its program or another engine: to check again | [The graph page opens](sdlc.md#GraphPageOpens) | Trame's maintainers |  |

<a id="trame"></a>

## trame

| Severity | What | Where | Owner | Consequence |
|---|---|---|---|---|
| warning | Built from code that has changed since, or by another engine than the one pinned: trame ship builds it again | [The candidate engine](sdlc.md#EngineCandidate) | trame |  |
| warning | Built from code that has changed since, or by another engine than the one pinned: trame ship builds it again | [The graph page](sdlc.md#GraphPage) | trame |  |
| warning | To ship: The candidate engine is unknown | [The next generation](sdlc.md#NextGeneration) | trame |  |
| warning | To ship: The graph page is unknown | [The next generation](sdlc.md#NextGeneration) | trame |  |
| warning | To ship: The page's program is unknown | [The next generation](sdlc.md#NextGeneration) | trame |  |
| warning | To ship: The page is assembled is unknown | [The next generation](sdlc.md#NextGeneration) | trame |  |
| warning | To ship: The candidate plays the laws is unknown | [The next generation](sdlc.md#NextGeneration) | trame |  |
| warning | To ship: The candidate runs on the machine is unknown | [The next generation](sdlc.md#NextGeneration) | trame |  |
| warning | To ship: The graph page opens is unknown | [The next generation](sdlc.md#NextGeneration) | trame |  |
| warning | Built from code that has changed since, or by another engine than the one pinned: trame ship builds it again | [The page's program](sdlc.md#PageProgram) | trame |  |

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
| [Where an amendment goes](architecture.md#AmendmentPlace) | Port |  |
| [Browser](architecture.md#Browser) | Environment |  |
| [Bundler](architecture.md#Bundler) | Port |  |
| [Clock](architecture.md#Clock) | Port |  |
| [Command line](architecture.md#CommandLine) | Port |  |
| [Compression](architecture.md#Compression) | Port |  |
| [Decompression](architecture.md#Decompression) | Port |  |
| [File reading](architecture.md#FileReading) | Port |  |
| [File trees](architecture.md#FileTrees) | Port |  |
| [File writing](architecture.md#FileWriting) | Port |  |
| [Feed of the graph](architecture.md#GraphFeed) | Port |  |
| [Hashing](architecture.md#Hashing) | Port |  |
| [HTTP server](architecture.md#HttpServer) | Port |  |
| [Results kept](architecture.md#KeptResults) | Port |  |
| [Runs kept](architecture.md#KeptRuns) | Port |  |
| [Effects come from the vocabulary](architecture.md#KnownEffects) | Architecture rule | **held** |
| [Local](architecture.md#Local) | Environment |  |
| [Module loader](architecture.md#ModuleLoader) | Port |  |
| [Only commands write](architecture.md#OnlyCommandsWrite) | Architecture rule | **held** |
| [Reports on packages](architecture.md#PackageReports) | Port |  |
| [Amendments from the page](architecture.md#PageAmendments) | Port |  |
| [The page in a browser](architecture.md#PageApp) | Component |  |
| [Memory of the page](architecture.md#PageMemory) | Port |  |
| [Window of the page](architecture.md#PageWindow) | Port |  |
| [Paths](architecture.md#Paths) | Port |  |
| [Prelude](architecture.md#Prelude) | Port |  |
| [Process](architecture.md#Process) | Port |  |
| [Process log](architecture.md#ProcessLog) | Port |  |
| [Programs](architecture.md#Programs) | Port |  |
| [Rendering does not read the graph](architecture.md#RenderingWithoutGraph) | Architecture rule | **held** |
| [Page resources](architecture.md#Resources) | Port |  |
| [Where runs are kept](architecture.md#RunStore) | Port |  |
| [Server log](architecture.md#ServerLog) | Port |  |
| [Signatures](architecture.md#Signatures) | Port |  |
| [Syntax trees](architecture.md#SyntaxTrees) | Port |  |
| [Terminal](architecture.md#Terminal) | Port |  |
| [Terminal log](architecture.md#TerminalLog) | Port |  |
| [Test](architecture.md#Test) | Environment |  |
| [Timer](architecture.md#Timer) | Port |  |
| [Trame on the command line](architecture.md#TrameCli) | Component |  |
| [TypeScript compiler](architecture.md#TypeScriptCompiler) | Port |  |
| [Write log](architecture.md#WriteLog) | Port |  |
| [Amendments sent to trame dev](browser.md#BrowserAmendments) | Implementation | **unknown** |
| [The browser's gzip](browser.md#BrowserDecompression) | Implementation | **unknown** |
| [The globals of the page, and trame dev](browser.md#BrowserFeed) | Implementation | **unknown** |
| [Local storage](browser.md#BrowserMemory) | Implementation | **unknown** |
| [The browser's window](browser.md#BrowserWindow) | Implementation | **unknown** |
| [Explorer of a graph](browser.md#ExplorerFigures) | Function | **unknown** |
| [Show the graph](browser.md#ShowGraph) | Entry point | **unknown** |
| [The browser runs the page](browser.md#TheBrowserRunsThePage) | Technical choice | **unknown** |
| [The page is assembled](browser.md#ThePageIsAssembled) | Architecture decision | **unknown** |
| [An advance, in memory](command-scenarios.md#AdvanceInMemory) | Scenario | **held** |
| [What the engines an advance starts answer in a scenario](command-scenarios.md#AdvanceSamples) | Decision |  |
| [What an amendment is checked with](command-scenarios.md#AmendmentSamples) | Decision |  |
| [What the example is assembled for](command-scenarios.md#AssemblySamples) | Decision |  |
| [A body is read and checked](command-scenarios.md#BodiesReadAndChecked) | Scenario | **held** |
| [Bodies the reader is given](command-scenarios.md#BodySamples) | Decision |  |
| [A build planned](command-scenarios.md#BuildPlanned) | Scenario | **held** |
| [The command line](command-scenarios.md#CommandLineChooses) | Scenario | **held** |
| [A component assembled](command-scenarios.md#ComponentAssembled) | Scenario | **held** |
| [A component run](command-scenarios.md#ComponentRun) | Scenario | **held** |
| [Declarations published](command-scenarios.md#DeclarationsPublished) | Scenario | **held** |
| [trame dev](command-scenarios.md#DevFollowsTheGraph) | Scenario | **held** |
| [What trame dev is shown in a scenario](command-scenarios.md#DevSamples) | Decision |  |
| [The doctor](command-scenarios.md#DoctorAsks) | Scenario | **held** |
| [The laws, tested by their command](command-scenarios.md#LawsTested) | Scenario | **held** |
| [A library released](command-scenarios.md#LibraryReleased) | Scenario | **held** |
| [The manifest written](command-scenarios.md#ManifestWritten) | Scenario | **held** |
| [The packages audited](command-scenarios.md#PackagesAudited) | Scenario | **held** |
| [The page delivered](command-scenarios.md#PageDelivered) | Scenario | **held** |
| [The page exported](command-scenarios.md#PageExported) | Scenario | **held** |
| [The page of the graph](command-scenarios.md#PageOfTheGraph) | Scenario | **held** |
| [The graph in the intermediate format](command-scenarios.md#PayloadOfTheGraph) | Scenario | **held** |
| [What a plan is checked with](command-scenarios.md#PlanSamples) | Decision |  |
| [What the scenarios ask of those projects](command-scenarios.md#ProjectSamples) | Decision |  |
| [A project started](command-scenarios.md#ProjectStarted) | Scenario | **held** |
| [The registry filled](command-scenarios.md#RegistryFilled) | Scenario | **held** |
| [What a program run in a scenario answers](command-scenarios.md#RunSamples) | Decision |  |
| [The projects of the repository the scenarios enter](command-scenarios.md#ScenarioProjects) | Decision |  |
| [Shipments run, evidence given](command-scenarios.md#ShipmentsRun) | Scenario | **held** |
| [The snapshot, taken by its command](command-scenarios.md#SnapshotTaken) | Scenario | **held** |
| [What an SVG figure opens with](command-scenarios.md#SvgSample) | Decision |  |
| [A value amended](command-scenarios.md#ValueAmended) | Scenario | **held** |
| [Views asked of the example](command-scenarios.md#ViewSamples) | Decision |  |
| [A view in the terminal](command-scenarios.md#ViewsInTheTerminal) | Scenario | **held** |
| [Advance](commands.md#Advance) | Entry point | **held** |
| [Amend](commands.md#Amend) | Entry point | **held** |
| [An amendment prepared](commands.md#Amending) | Function | **held** |
| [Assemble a component](commands.md#Assemble) | Entry point | **held** |
| [Assembler](commands.md#Assembler) | Function | **held** |
| [Audit the packages](commands.md#Audit) | Entry point | **held** |
| [Build](commands.md#Build) | Entry point | **held** |
| [Two builds compared](commands.md#BuildComparison) | Function | **held** |
| [Deliver](commands.md#Deliver) | Entry point | **held** |
| [Start trame dev](commands.md#Dev) | Entry point | **held** |
| [Ask the machine](commands.md#Doctor) | Entry point | **held** |
| [What the doctor writes, runs and waits for](commands.md#DoctorProbe) | Decision |  |
| [Payload](commands.md#EmitPayload) | Entry point | **held** |
| [Export the page](commands.md#Export) | Entry point | **held** |
| [Start a project](commands.md#Init) | Entry point | **held** |
| [Plan](commands.md#Plan) | Entry point | **held** |
| [Preparation](commands.md#Preparation) | Function | **held** |
| [Publish](commands.md#Publish) | Entry point | **held** |
| [Record evidence](commands.md#RecordEvidence) | Entry point | **held** |
| [A module of references](commands.md#ReferencesModule) | Function | **held** |
| [Fill the registry](commands.md#Registry) | Entry point | **held** |
| [Release a version](commands.md#Release) | Entry point | **held** |
| [Render a view](commands.md#RenderView) | Function | **held** |
| [Run a component](commands.md#Run) | Entry point | **held** |
| [Ship](commands.md#Ship) | Entry point | **held** |
| [Show a view](commands.md#ShowView) | Entry point | **held** |
| [Take the snapshot](commands.md#TakeSnapshot) | Entry point | **held** |
| [Test the laws](commands.md#TestKinds) | Entry point | **held** |
| [View by its name](commands.md#ViewByName) | Entry point | **held** |
| [Write the manifest](commands.md#WriteManifest) | Entry point | **held** |
| [How an amendment is named](conventions.md#AmendmentNaming) | Decision |  |
| [Default rank](conventions.md#DefaultRank) | Decision |  |
| [Documentation comment](conventions.md#DocComment) | Decision |  |
| [Names of the documents](conventions.md#DocumentIds) | Standard |  |
| [The frozen API](conventions.md#FrozenApi) | Standard |  |
| [JSON formatting](conventions.md#JsonFormatting) | Decision |  |
| [The language's names](conventions.md#LanguageNames) | Decision |  |
| [Project layout](conventions.md#Layout) | Decision |  |
| [The prelude's public API](conventions.md#PreludeApi) | Decision |  |
| [How a project starts](conventions.md#ProjectStart) | Decision |  |
| [Trame references](conventions.md#ReferenceSyntax) | Standard |  |
| [Names of steps](conventions.md#StepNames) | Decision |  |
| [Trame's commands](conventions.md#TrameCommands) | Standard |  |
| [Trame's environment](conventions.md#TrameEnvironment) | Standard |  |
| [Order of the view groups](conventions.md#ViewGroupOrder) | Decision |  |
| [How a bundle is led](delivery.md#BundlerLeading) | Decision |  |
| [Style of a delivered page](delivery.md#DeliveredStyle) | Syntax element | **held** |
| [The names a bundle is led by](delivery.md#NamesLed) | Function | **held** |
| [Settings of the documents](documents.md#LanguageSettings) | Decision |  |
| [How Mermaid figures are drawn](documents.md#MermaidFigures) | Decision |  |
| [How a number is written](documents.md#NumberDisplay) | Decision |  |
| [Punctuation of documents](documents.md#Punctuation) | Function | **held** |
| [The punctuation is the language's](documents.md#PunctuationOfTheLanguage) | Architecture decision | **held** |
| [Heading levels of Markdown documents](documents.md#TextRendering) | Decision |  |
| [Values with their units](documents.md#Units) | Function | **held** |
| [Visible text](documents.md#VisibleText) | Function | **held** |
| [Assembly](engine.md#Assembly) | Function | **held** |
| [Compilation API](engine.md#CompilationApi) | Function | **held** |
| [Compiler](engine.md#Compiler) | Function | **held** |
| [Cycles](engine.md#Cycles) | Function | **held** |
| [Date bundle](engine.md#DateBundle) | Function | **held** |
| [trame dev server](engine.md#DevServer) | Function | **held** |
| [What trame dev serves](engine.md#DevService) | Decision |  |
| [Differences](engine.md#Differences) | Function | **held** |
| [The fingerprint of an engine](engine.md#EngineFingerprint) | Function | **held** |
| [Length of a fingerprint](engine.md#Fingerprint) | Decision |  |
| [Fingerprints](engine.md#Fingerprints) | Function | **held** |
| [Pseudo-random generator](engine.md#Generator) | Function | **held** |
| [Graph](engine.md#GraphApi) | Function | **held** |
| [What tells a project's runs apart](engine.md#KeptRunsScope) | Decision |  |
| [Laws](engine.md#Laws) | Function | **held** |
| [The laws are requirements](engine.md#LawsAreRequirements) | Architecture decision | **held** |
| [Lock](engine.md#Lock) | Function | **held** |
| [Machine outputs](engine.md#MachineOutputs) | Function | **held** |
| [The days of history a page offers](engine.md#PageHistory) | Decision |  |
| [Payload](engine.md#PayloadBuilder) | Function | **held** |
| [Positions](engine.md#Positions) | Function | **held** |
| [Project](engine.md#Project) | Function | **held** |
| [The runs of a project](engine.md#ProjectRuns) | Function | **held** |
| [References](engine.md#References) | Function | **held** |
| [A shipment's pipeline](engine.md#ShipmentPipeline) | Function | **held** |
| [Static reading](engine.md#StaticAnalysis) | Function | **held** |
| [The language receives the graph's values](engine.md#TheLanguageReceivesTheGraph) | Architecture decision | **held** |
| [Options of the static reading](engine.md#TypeScriptOptions) | Decision |  |
| [Views](engine.md#Views) | Function | **held** |
| [Wiring](engine.md#Wiring) | Function | **held** |
| [Accept a candidate](generations.md#AcceptCandidate) | Requirement | **held** |
| [What a candidate needs to be accepted](generations.md#AcceptCandidateCriteria) | Acceptance criteria | **held** |
| [What an advance assembles](generations.md#Advancement) | Decision |  |
| [The engine a project runs](generations.md#EnginePin) | Decision |  |
| [Generations that share the language](generations.md#LanguageSharing) | Decision |  |
| [Records of the releases](generations.md#ReleaseRecords) | Function | **held** |
| [Releases of the engine](generations.md#Releases) | Decision |  |
| [Attribute presence](html.md#AttributePresence) | Syntax element | **held** |
| [Attribute selector](html.md#AttributeSelector) | Syntax element | **held** |
| [Class selector](html.md#ClassSelector) | Syntax element | **held** |
| [Declaration](html.md#CssDeclaration) | Syntax element | **held** |
| [Rule](html.md#CssRule) | Syntax element | **held** |
| [CSS style sheets](html.md#CssStyleSheets) | Language | **held** |
| [Variable](html.md#CssVariable) | Syntax element | **held** |
| [Custom property](html.md#CustomProperty) | Syntax element | **held** |
| [DOCTYPE](html.md#Doctype) | Syntax element | **held** |
| [Escaped text](html.md#EscapedText) | Syntax element | **held** |
| [Attributes](html.md#HtmlAttributes) | Syntax element | **held** |
| [Element over several lines](html.md#HtmlBlock) | Syntax element | **held** |
| [HTML element](html.md#HtmlElement) | Syntax element | **held** |
| [End tag](html.md#HtmlEndTag) | Syntax element | **held** |
| [Heading of a rank](html.md#HtmlHeading) | Syntax element | **held** |
| [HTML markup](html.md#HtmlMarkup) | Language | **held** |
| [Start tag](html.md#HtmlStartTag) | Syntax element | **held** |
| [JSON in a script](html.md#JsonInScript) | Syntax element | **held** |
| [Media feature](html.md#MediaFeature) | Syntax element | **held** |
| [Media rule](html.md#MediaRule) | Syntax element | **held** |
| [Negation](html.md#NegationSelector) | Syntax element | **held** |
| [Path data](html.md#PathData) | Syntax element | **held** |
| [Script](html.md#ScriptElement) | Syntax element | **held** |
| [Selector list](html.md#SelectorList) | Syntax element | **held** |
| [Self-closing tag](html.md#SelfClosingTag) | Syntax element | **held** |
| [Drivers](languages.md#Drivers) | Function | **held** |
| [What a writer writes is read back before it is written](languages.md#ReadBackWhatIsWritten) | Architecture decision | **held** |
| [Answers without crashing](laws.md#AnswersWithoutCrashing) | Requirement | **held** |
| [Criteria of the answers without crashing](laws.md#AnswersWithoutCrashingCriteria) | Acceptance criteria | **held** |
| [A blocking hole has an owner](laws.md#BlockingHoleHasOwner) | Requirement | **held** |
| [Criteria of the owner of a blocking hole](laws.md#BlockingHoleHasOwnerCriteria) | Acceptance criteria | **held** |
| [The resolution returns only what it is given](laws.md#ClosedResolution) | Requirement | **held** |
| [Criteria of the closed resolution](laws.md#ClosedResolutionCriteria) | Acceptance criteria | **held** |
| [Complete declaration](laws.md#CompleteDeclaration) | Requirement | **held** |
| [Criteria of the complete declaration](laws.md#CompleteDeclarationCriteria) | Acceptance criteria | **held** |
| [Complete declaration of a view](laws.md#CompleteViewDeclaration) | Requirement | **held** |
| [Criteria of the declaration of a view](laws.md#CompleteViewDeclarationCriteria) | Acceptance criteria | **held** |
| [Produces only the intermediate format](laws.md#IntermediateFormatOnly) | Requirement | **held** |
| [Criteria of the intermediate format](laws.md#IntermediateFormatOnlyCriteria) | Acceptance criteria | **held** |
| [The resolution does not depend on the order](laws.md#OrderFree) | Requirement | **held** |
| [Criteria of the resolution in any order](laws.md#OrderFreeCriteria) | Acceptance criteria | **held** |
| [Same input, same answer](laws.md#SameInputSameAnswer) | Requirement | **held** |
| [Criteria of the same answer](laws.md#SameInputSameAnswerCriteria) | Acceptance criteria | **held** |
| [Kinds and views that can be trusted](laws.md#TrustedExtensions) | Goal |  |
| [Without evidence, the status is unknown](laws.md#UnknownWithoutEvidence) | Requirement | **held** |
| [Criteria of the status without evidence](laws.md#UnknownWithoutEvidenceCriteria) | Acceptance criteria | **held** |
| [What belongs to a library](libraries.md#LibraryOfAModule) | Requirement | **held** |
| [Criteria of what belongs to a library](libraries.md#LibraryOfAModuleCriteria) | Acceptance criteria | **held** |
| [Names of a library's releases](libraries.md#LibraryReleaseNames) | Decision |  |
| [A release is settled](libraries.md#ReleaseIsSettled) | Requirement | **held** |
| [Criteria of a settled release](libraries.md#ReleaseIsSettledCriteria) | Acceptance criteria | **held** |
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
| [Messages of an advance](messages.md#AdvanceMessages) | Message catalog |  |
| [Messages of the commands](messages.md#CommandMessages) | Message catalog |  |
| [Messages of the compiler](messages.md#CompilerMessages) | Message catalog |  |
| [A catalog counts in its language](messages.md#CountsInTheLanguage) | Architecture decision | **held** |
| [Dates](messages.md#Dates) | Function | **held** |
| [Messages of trame dev](messages.md#DevMessages) | Message catalog |  |
| [Messages of the drivers](messages.md#DriverMessages) | Message catalog |  |
| [Words of Trame's views](messages.md#EngineViewWords) | Message catalog |  |
| [Words of the kinds](messages.md#KindWords) | Message catalog |  |
| [Language](messages.md#Language) | Decision |  |
| [Messages of the laws](messages.md#LawMessages) | Message catalog |  |
| [Lists](messages.md#Lists) | Function | **held** |
| [Messages of the outputs](messages.md#OutputMessages) | Message catalog |  |
| [Words of the page](messages.md#PageWords) | Message catalog |  |
| [Messages of the platform](messages.md#PlatformMessages) | Message catalog |  |
| [Messages of the renderers](messages.md#RenderingMessages) | Message catalog |  |
| [Messages of the scenarios](messages.md#ScenarioMessages) | Message catalog |  |
| [Messages of the views](messages.md#ViewMessages) | Message catalog |  |
| [Words of the views](messages.md#ViewWords) | Message catalog |  |
| [Grammar of CSS](packages.md#CssGrammar) | Package | **held** |
| [esbuild](packages.md#EsbuildPackage) | Package | **held** |
| [Grammar of HCL](packages.md#HclGrammar) | Package | **held** |
| [Grammar of HTML](packages.md#HtmlGrammar) | Package | **held** |
| [Types of Node.js](packages.md#NodeTypes) | Package | **held** |
| [Audit of the packages](packages.md#PackageAudit) | Decision |  |
| [The standard library](packages.md#StandardLibrary) | Package |  |
| [tsx](packages.md#TsxPackage) | Package | **held** |
| [Grammar of TypeScript](packages.md#TypeScriptGrammar) | Package | **held** |
| [TypeScript](packages.md#TypeScriptPackage) | Package | **held** |
| [Order of versions](packages.md#VersionOrder) | Function | **held** |
| [web-tree-sitter](packages.md#WebTreeSitterPackage) | Package | **held** |
| [Banner](page.md#Banner) | Syntax element | **held** |
| [Brand](page.md#Brand) | Syntax element | **held** |
| [State of the compilation](page.md#CompilationState) | Syntax element | **held** |
| [Dates](page.md#DatePicker) | Syntax element | **held** |
| [Head of the document](page.md#DocumentHead) | Syntax element | **held** |
| [Document picker](page.md#DocumentPicker) | Syntax element | **held** |
| [Arrowheads of the figures](page.md#FigureMarkers) | Syntax element | **held** |
| [Fonts](page.md#FontLinks) | Syntax element | **held** |
| [Logo](page.md#Logo) | Syntax element | **held** |
| [Files for tools in the page](page.md#MachineHighlighting) | Decision |  |
| [Main area](page.md#MainArea) | Syntax element | **held** |
| [Rules of a narrow screen](page.md#NarrowScreenRule) | Syntax element | **held** |
| [Style sheet of a narrow screen](page.md#NarrowScreenStyle) | Style sheet |  |
| [Navigation](page.md#Navigation) | Syntax element | **held** |
| [A page carries its graph compressed](page.md#PackedGraph) | Decision |  |
| [Page](page.md#Page) | Function | **held** |
| [Bundle of the page](page.md#PageBundle) | Decision |  |
| [Document of the page](page.md#PageDocument) | Syntax element | **held** |
| [Regions of the page](page.md#PageRegions) | Decision |  |
| [Scripts of the page](page.md#PageScripts) | Syntax element | **held** |
| [Style sheet of the page](page.md#PageStyle) | Style sheet |  |
| [The renderings of a document](page.md#RenderingModes) | Vocabulary |  |
| [Choice of rendering](page.md#RenderingToggle) | Syntax element | **held** |
| [Shell](page.md#Shell) | Syntax element | **held** |
| [Side bar](page.md#SideBar) | Syntax element | **held** |
| [Style of the standalone document](page.md#StandaloneStyle) | Decision |  |
| [Colours of a status](page.md#StatusStyle) | Syntax element | **held** |
| [A style sheet writes no value](page.md#StyleThroughVariables) | Architecture decision | **held** |
| [Theme](page.md#Theme) | Syntax element | **held** |
| [The page](page.md#ThePage) | Decision |  |
| [Amendments go in the sources](platform.md#AmendmentsInPlace) | Technical choice | **held** |
| [The TypeScript compiler reads the declarations](platform.md#CompilerReadsDeclarations) | Technical choice | **held** |
| [System files, for reading](platform.md#DiskReading) | Implementation | **unknown** |
| [Trees on disk](platform.md#DiskTrees) | Implementation | **unknown** |
| [System files, for writing](platform.md#DiskWriting) | Implementation | **unknown** |
| [Where the engine's own files are](platform.md#EngineFiles) | Decision |  |
| [The engine's own files sit beside its code](platform.md#EngineFilesBesideCode) | Technical choice | **held** |
| [esbuild](platform.md#Esbuild) | Implementation | **held** |
| [esbuild bundles the page's program](platform.md#EsbuildBundles) | Technical choice | **held** |
| [Example process](platform.md#ExampleProcess) | Function | **held** |
| [Example project](platform.md#ExampleRoot) | Decision |  |
| [Scenarios write in memory, over the disk](platform.md#FilesInMemoryOverTheDisk) | Technical choice | **held** |
| [Scenarios run in memory](platform.md#InMemoryScenarios) | Technical choice | **held** |
| [Amendments in place](platform.md#InPlaceSources) | Implementation | **held** |
| [Lines shown on an exit in test](platform.md#LinesOnExit) | Decision |  |
| [Packages by their local path](platform.md#LocalPaths) | Implementation |  |
| [Packages from the local registry](platform.md#LocalRegistry) | Implementation |  |
| [Where the local registry is](platform.md#LocalRegistryPlace) | Decision |  |
| [Files in memory, over the disk](platform.md#MemoryFiles) | Implementation | **held** |
| [A server in memory](platform.md#MemoryHttpServer) | Function | **held** |
| [Temporary directories in memory](platform.md#MemoryTemporary) | Decision |  |
| [Terminal in memory](platform.md#MemoryTerminal) | Function | **held** |
| [Command line](platform.md#NodeCommandLine) | Implementation | **held** |
| [gzip, with Node's zlib](platform.md#NodeCompression) | Implementation | **held** |
| [SHA-256 hashes](platform.md#NodeHashing) | Implementation | **held** |
| [Node HTTP server](platform.md#NodeHttpServer) | Implementation | **unknown** |
| [On a machine, Node.js reads, writes and runs](platform.md#NodeMachine) | Technical choice | **unknown** |
| [Node paths](platform.md#NodePaths) | Implementation | **held** |
| [NodePlatform](platform.md#NodePlatform) | Technical choice | **held** |
| [Node process](platform.md#NodeProcess) | Implementation | **unknown** |
| [Node programs](platform.md#NodePrograms) | Implementation | **unknown** |
| [Node terminal](platform.md#NodeTerminal) | Implementation | **unknown** |
| [Node timer](platform.md#NodeTimer) | Implementation | **held** |
| [No registry in test](platform.md#NoReportsInTest) | Function | **held** |
| [npm's reports](platform.md#NpmReports) | Implementation | **unknown** |
| [Packages by their origin](platform.md#PackagesByOrigin) | Implementation | **held** |
| [Each package comes from where its reference says](platform.md#PackagesByTheirOrigin) | Technical choice | **held** |
| [Page resources](platform.md#PageResources) | Implementation | **held** |
| [TypeScript compiler](platform.md#RealTypeScript) | Implementation | **held** |
| [Results kept in the process](platform.md#ResultsInTheProcess) | Implementation | **held** |
| [A run is kept while what it reads is as it was](platform.md#RunsByWhatTheyRead) | Technical choice | **held** |
| [Runs kept in the process](platform.md#RunsInTheProcess) | Implementation | **held** |
| [In the scenarios, runs are kept in the process](platform.md#RunsKeptInTheProcess) | Technical choice | **held** |
| [On a machine, runs are kept on disk](platform.md#RunsKeptOnDisk) | Technical choice | **unknown** |
| [Runs kept on disk](platform.md#RunsOnDisk) | Implementation | **unknown** |
| [Stopped clock](platform.md#StoppedClock) | Function | **held** |
| [System clock](platform.md#SystemClock) | Implementation | **unknown** |
| [Day of the scenarios](platform.md#TestDay) | Decision |  |
| [Time of the scenarios](platform.md#TestTime) | Decision |  |
| [Trame's prelude](platform.md#TramePrelude) | Implementation | **held** |
| [tree-sitter reads the bodies](platform.md#TreeSitterReads) | Technical choice | **held** |
| [tsx loader](platform.md#TsxLoader) | Implementation | **held** |
| [tsx runs TypeScript](platform.md#TsxRuns) | Technical choice | **held** |
| [Runner of TypeScript](platform.md#TypeScriptRunner) | Decision |  |
| [tree-sitter in WebAssembly](platform.md#WebTreeSitter) | Implementation | **held** |
| [A change to a node is a claim](principles.md#ChangesAreClaims) | Architecture decision | **held** |
| [The data a product carries is a dataset](principles.md#DataAsDatasets) | Architecture decision | **held** |
| [A product is delivered by a node of the graph](principles.md#DeliveredByTheGraph) | Architecture decision | **held** |
| [The engine: a graph like any product's](principles.md#EngineLayer) | Architecture decision | **held** |
| [A literal in a body is an error](principles.md#EveryLiteralDeclared) | Architecture decision | **held** |
| [Generations: frozen engines](principles.md#GenerationLayer) | Architecture decision | **held** |
| [The graph is written in TypeScript](principles.md#GraphInTypeScript) | Architecture decision | **held** |
| [The graph: the description of a product](principles.md#GraphLayer) | Architecture decision | **held** |
| [The source carries the history](principles.md#HistoryInTheSource) | Architecture decision | **held** |
| [A key is made of its parts](principles.md#KeysOfParts) | Architecture decision | **held** |
| [A library is a Trame project, imported by path](principles.md#LibrariesAreProjects) | Architecture decision | **held** |
| [A library is imported by its name](principles.md#LibrariesByName) | Architecture decision | **held** |
| [Code holds no hidden decision](principles.md#NoHiddenDecision) | Architecture decision | **held** |
| [The prelude and the compiler know no kind of node](principles.md#NoKindInTheCore) | Architecture decision | **held** |
| [A literal in a kind or a view is an error](principles.md#NoLiteralInTheLanguage) | Architecture decision | **held** |
| [One output for each reader](principles.md#OneOutputPerReader) | Architecture decision | **held** |
| [The traversal API is the only way to read the graph](principles.md#OneWayToRead) | Architecture decision | **held** |
| [A package is used by its name](principles.md#PackagesByName) | Architecture decision | **held** |
| [The prelude: the runtime of the language](principles.md#PreludeLayer) | Architecture decision | **held** |
| [A version ships through the graph](principles.md#ShippedThroughTheGraph) | Architecture decision | **unknown** |
| [A technology is chosen in one node](principles.md#TechnologyInOneNode) | Architecture decision | **unknown** |
| [Trame builds Trame](principles.md#TrameBuildsTrame) | Architecture decision | **held** |
| [An undecided value blocks; it does not crash](principles.md#UndecidedBlocks) | Architecture decision | **held** |
| [Without evidence, a status is unknown](principles.md#UnknownWithoutEvidence) | Architecture decision | **held** |
| [Kinds and views: the vocabulary, as reviewed files](principles.md#VocabularyLayer) | Architecture decision | **held** |
| [The words are in catalogs](principles.md#WordsInCatalogs) | Architecture decision | **held** |
| [Candidate dates](product.md#CandidateDates) | Decision |  |
| [Claim sets](product.md#ClaimSets) | Decision |  |
| [Debouncing of saves](product.md#DevDebounce) | Decision |  |
| [Port of trame dev](product.md#DevPort) | Decision |  |
| [A specification that runs](product.md#ExecutableSpecification) | Goal |  |
| [A technology is changed in one node](product.md#ReplaceableTechnology) | Goal |  |
| [Nodes drawn per kind](product.md#SampleCount) | Decision |  |
| [Owners drawn at random](product.md#SampledOwners) | Decision |  |
| [Values drawn by the laws](product.md#SampledValues) | Decision |  |
| [Sort problems by severity](product.md#SeverityOrder) | Requirement | **held** |
| [Criteria of the sort by severity](product.md#SeverityOrderCriteria) | Acceptance criteria | **held** |
| [A single source of truth](product.md#SingleSource) | Goal |  |
| [Values drawn by the laws of a structure](product.md#StructureDraws) | Decision |  |
| [What is generic is written once](product.md#WrittenOnce) | Goal |  |
| [Generation 1](releases.md#G1) | Release |  |
| [Generation 10](releases.md#G10) | Release |  |
| [Generation 11](releases.md#G11) | Release |  |
| [Generation 12](releases.md#G12) | Release |  |
| [Generation 13](releases.md#G13) | Release |  |
| [Generation 14](releases.md#G14) | Release |  |
| [Generation 15](releases.md#G15) | Release |  |
| [Generation 16](releases.md#G16) | Release |  |
| [Generation 17](releases.md#G17) | Release |  |
| [Generation 18](releases.md#G18) | Release |  |
| [Generation 19](releases.md#G19) | Release |  |
| [Generation 2](releases.md#G2) | Release |  |
| [Generation 20](releases.md#G20) | Release |  |
| [Generation 21](releases.md#G21) | Release |  |
| [Generation 22](releases.md#G22) | Release |  |
| [Generation 23](releases.md#G23) | Release |  |
| [Generation 24](releases.md#G24) | Release |  |
| [Generation 25](releases.md#G25) | Release |  |
| [Generation 26](releases.md#G26) | Release |  |
| [Generation 27](releases.md#G27) | Release |  |
| [Generation 28](releases.md#G28) | Release |  |
| [Generation 29](releases.md#G29) | Release |  |
| [Generation 3](releases.md#G3) | Release |  |
| [Generation 30](releases.md#G30) | Release |  |
| [Generation 31](releases.md#G31) | Release |  |
| [Generation 32](releases.md#G32) | Release |  |
| [Generation 33](releases.md#G33) | Release |  |
| [Generation 34](releases.md#G34) | Release |  |
| [Generation 35](releases.md#G35) | Release |  |
| [Generation 36](releases.md#G36) | Release |  |
| [Generation 37](releases.md#G37) | Release |  |
| [Generation 38](releases.md#G38) | Release |  |
| [Generation 39](releases.md#G39) | Release |  |
| [Generation 4](releases.md#G4) | Release |  |
| [Generation 40](releases.md#G40) | Release |  |
| [Generation 41](releases.md#G41) | Release |  |
| [Generation 42](releases.md#G42) | Release |  |
| [Generation 43](releases.md#G43) | Release |  |
| [Generation 44](releases.md#G44) | Release |  |
| [Generation 45](releases.md#G45) | Release |  |
| [Generation 46](releases.md#G46) | Release |  |
| [Generation 47](releases.md#G47) | Release |  |
| [Generation 48](releases.md#G48) | Release |  |
| [Generation 49](releases.md#G49) | Release |  |
| [Generation 5](releases.md#G5) | Release |  |
| [Generation 50](releases.md#G50) | Release |  |
| [Generation 51](releases.md#G51) | Release |  |
| [Generation 52](releases.md#G52) | Release |  |
| [Generation 53](releases.md#G53) | Release |  |
| [Generation 54](releases.md#G54) | Release |  |
| [Generation 55](releases.md#G55) | Release |  |
| [Generation 56](releases.md#G56) | Release |  |
| [Generation 57](releases.md#G57) | Release |  |
| [Generation 58](releases.md#G58) | Release |  |
| [Generation 59](releases.md#G59) | Release |  |
| [Generation 6](releases.md#G6) | Release |  |
| [Generation 60](releases.md#G60) | Release |  |
| [Generation 61](releases.md#G61) | Release |  |
| [Generation 62](releases.md#G62) | Release |  |
| [Generation 63](releases.md#G63) | Release |  |
| [Generation 64](releases.md#G64) | Release |  |
| [Generation 65](releases.md#G65) | Release |  |
| [Generation 66](releases.md#G66) | Release |  |
| [Generation 67](releases.md#G67) | Release |  |
| [Generation 68](releases.md#G68) | Release |  |
| [Generation 69](releases.md#G69) | Release |  |
| [Generation 7](releases.md#G7) | Release |  |
| [Generation 70](releases.md#G70) | Release |  |
| [Generation 71](releases.md#G71) | Release |  |
| [Generation 72](releases.md#G72) | Release |  |
| [Generation 73](releases.md#G73) | Release |  |
| [Generation 74](releases.md#G74) | Release |  |
| [Generation 75](releases.md#G75) | Release |  |
| [Generation 76](releases.md#G76) | Release |  |
| [Generation 77](releases.md#G77) | Release |  |
| [Generation 78](releases.md#G78) | Release |  |
| [Generation 79](releases.md#G79) | Release |  |
| [Generation 8](releases.md#G8) | Release |  |
| [Generation 80](releases.md#G80) | Release |  |
| [Generation 81](releases.md#G81) | Release |  |
| [Generation 82](releases.md#G82) | Release |  |
| [Generation 83](releases.md#G83) | Release |  |
| [Generation 84](releases.md#G84) | Release |  |
| [Generation 85](releases.md#G85) | Release |  |
| [Generation 86](releases.md#G86) | Release |  |
| [Generation 87](releases.md#G87) | Release |  |
| [Generation 88](releases.md#G88) | Release |  |
| [Generation 89](releases.md#G89) | Release |  |
| [Generation 9](releases.md#G9) | Release |  |
| [Generation 90](releases.md#G90) | Release |  |
| [Generation 91](releases.md#G91) | Release |  |
| [Generation 92](releases.md#G92) | Release |  |
| [Generation 93](releases.md#G93) | Release |  |
| [Generation 94](releases.md#G94) | Release |  |
| [Generation 95](releases.md#G95) | Release |  |
| [Common rendering](rendering.md#Common) | Function | **held** |
| [Documents in Markdown](rendering.md#DocumentsInMarkdown) | Technical choice | **held** |
| [Figures in Mermaid](rendering.md#FiguresInMermaid) | Technical choice | **held** |
| [Figures of the documents written as files](rendering.md#FileFigures) | Port |  |
| [Rendering of the files](rendering.md#FileRendering) | Function | **held** |
| [Syntax of the documents written as files](rendering.md#FileSyntax) | Port |  |
| [HTML writer](rendering.md#HtmlSyntax) | Function | **held** |
| [Markdown writer](rendering.md#MarkdownSyntax) | Function | **held** |
| [Kinds and views say what; renderers say how](rendering.md#MeaningThenLook) | Architecture decision | **held** |
| [Mermaid diagrams](rendering.md#MermaidDiagrams) | Function | **held** |
| [One renderer, its syntax a choice](rendering.md#OneRendererManySyntaxes) | Architecture decision | **held** |
| [Figures of the page](rendering.md#PageFigures) | Port |  |
| [The page's figures in SVG](rendering.md#PageFiguresDrawn) | Technical choice | **held** |
| [The page in HTML](rendering.md#PageInHtml) | Technical choice | **held** |
| [Rendering in the page](rendering.md#PageRendering) | Function | **held** |
| [Syntax of the page](rendering.md#PageSyntax) | Port |  |
| [Plain text writer](rendering.md#PlainTextSyntax) | Function | **held** |
| [Places in a sentence](rendering.md#SentenceSlots) | Decision |  |
| [Figures in SVG](rendering.md#SvgFigures) | Function | **held** |
| [Figures of the terminal](rendering.md#TerminalFigures) | Port |  |
| [Figures in the terminal, as text](rendering.md#TerminalFiguresAsText) | Technical choice | **held** |
| [The terminal in plain text](rendering.md#TerminalInText) | Technical choice | **held** |
| [Rendering in the terminal](rendering.md#TerminalRendering) | Function | **held** |
| [Syntax of the terminal](rendering.md#TerminalSyntax) | Port |  |
| [Figures as text](rendering.md#TextFigures) | Function | **held** |
| [The build writes the same documents as the engine in place](scenarios.md#BuildLikeBefore) | Scenario | **held** |
| [The described engine compiles the example](scenarios.md#CompileExample) | Scenario | **held** |
| [The documents write in the decided language](scenarios.md#DocumentWords) | Scenario | **held** |
| [How the documents write what they show, checked](scenarios.md#DocumentWordsData) | Decision |  |
| [The engine reckons as it says](scenarios.md#EngineReckons) | Scenario | **held** |
| [Shape of the example](scenarios.md#ExampleShape) | Decision |  |
| [Expected differences on the example](scenarios.md#ExpectedDifferences) | Decision |  |
| [The laws of the kinds hold](scenarios.md#KindLaws) | Scenario | **held** |
| [What the engine's reckoning is checked with](scenarios.md#ReckoningData) | Decision |  |
| [The decisions of the architecture hold](sdlc.md#ArchitectureApplied) | Obligation |  |
| [The rules of the architecture hold](sdlc.md#ArchitectureRuled) | Obligation |  |
| [The candidate is checked by programs](sdlc.md#CandidateChecked) | Obligation |  |
| [The candidate plays the laws](sdlc.md#CandidateKeepsTheLaws) | Check | **unknown** |
| [The candidate runs on the machine](sdlc.md#CandidateRunsOnTheMachine) | Check | **unknown** |
| [The candidate engine](sdlc.md#EngineCandidate) | Artefact | **unknown** |
| [The packages are safe](sdlc.md#EnginePackagesSafe) | Obligation |  |
| [The engine is verified](sdlc.md#EngineVerified) | Obligation |  |
| [How a generation is made](sdlc.md#GenerationMode) | Policy |  |
| [The graph page](sdlc.md#GraphPage) | Artefact | **unknown** |
| [How the graph page is opened](sdlc.md#GraphPageOpening) | Decision |  |
| [The graph page opens](sdlc.md#GraphPageOpens) | Check | **unknown** |
| [What the scenario of the graph page shows](sdlc.md#GraphPageScenarioData) | Decision |  |
| [What the graph page is asked](sdlc.md#GraphPageSelectors) | Function | **held** |
| [The language serves what it says](sdlc.md#LanguageServed) | Obligation |  |
| [Trame's maintainers](sdlc.md#Maintainers) | Role |  |
| [The next generation](sdlc.md#NextGeneration) | Shipment | **unknown** |
| [The graph page is opened as a person would](sdlc.md#OpeningTheGraphPage) | Scenario | **held** |
| [Open the graph page](sdlc.md#OpenTheGraphPage) | Entry point | **held** |
| [The page's program](sdlc.md#PageProgram) | Artefact | **unknown** |
| [The SDLC in memory](sdlc.md#SdlcInMemory) | Technical choice | **held** |
| [The SDLC on the machine](sdlc.md#SdlcOnTheMachine) | Technical choice | **unknown** |
| [What the programs of Trame's SDLC say](sdlc.md#SdlcWords) | Message catalog |  |
| [Trame's SDLC](sdlc.md#TrameSdlc) | Component |  |
| [Attribution](shipping.md#Attribution) | Function | **held** |
| [The fingerprint of a program](shipping.md#ProgramBundle) | Decision |  |
| [Evidence of the SDLC](shipping.md#SdlcEvidence) | Function | **held** |
| [Evidence sealed by attribution](shipping.md#SealedByAttribution) | Technical choice | **held** |
| [The plan of a run elsewhere](shipping.md#ShipmentRunPlan) | Function | **held** |
| [Ship only what holds](shipping.md#ShipOnlyWhatHolds) | Requirement | **held** |
| [Criteria of shipping only what holds](shipping.md#ShipOnlyWhatHoldsCriteria) | Acceptance criteria | **held** |
| [Where the SDLC's evidence is kept](shipping.md#ShippingRecords) | Decision |  |
| [tree-sitter API](standards.md#TreeSitterApi) | Standard |  |
| [tree-sitter queries](standards.md#TreeSitterQueries) | Standard |  |
| [TypeScript compiler API](standards.md#TypeScriptApi) | Standard |  |
| [Checks of a body](syntax.md#BodyChecks) | Function | **held** |
| [Captures](syntax.md#Captures) | Standard |  |
| [Categories of literals](syntax.md#LiteralCategories) | Decision |  |
| [How a literal is shown](syntax.md#LiteralDisplay) | Decision |  |
| [Roles of a literal](syntax.md#LiteralRoles) | Message catalog |  |
| [tree-sitter says what it keeps aside](syntax.md#PredicatesAsTreeSitterReadsThem) | Architecture decision | **held** |
| [Every language is read alike, with tree-sitter](syntax.md#ReadLanguagesAlike) | Architecture decision | **held** |
| [Syntax reader](syntax.md#SyntaxReader) | Function | **held** |
| [Attribute](terraform.md#HclAttribute) | Syntax element | **held** |
| [Comment](terraform.md#HclComment) | Syntax element | **held** |
| [Text](terraform.md#HclString) | Syntax element | **held** |
| [HCL](terraform.md#HclSyntax) | Standard |  |
| [Value](terraform.md#HclValue) | Syntax element | **held** |
| [Module call](terraform.md#ModuleBlock) | Syntax element | **held** |
| [Terraform](terraform.md#Terraform) | Language | **held** |
| [Terraform modules](terraform.md#TerraformModules) | Standard |  |
| [Terraform writer](terraform.md#TerraformWriter) | Function | **held** |
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
| [List on several lines](typescript.md#ArrayLiteral) | Syntax element | **held** |
| [Type assertion](typescript.md#AsExpression) | Syntax element | **held** |
| [Assignment](typescript.md#Assignment) | Syntax element | **held** |
| [Waiting](typescript.md#Await) | Syntax element | **held** |
| [Call](typescript.md#Call) | Syntax element | **held** |
| [Constant](typescript.md#ConstDeclaration) | Syntax element | **held** |
| [Default import](typescript.md#DefaultImport) | Syntax element | **held** |
| [Documentation comment](typescript.md#DocBlock) | Syntax element | **held** |
| [Export](typescript.md#ExportDeclaration) | Syntax element | **held** |
| [Condition](typescript.md#IfStatement) | Syntax element | **held** |
| [List on one line](typescript.md#InlineArray) | Syntax element | **held** |
| [Comment](typescript.md#LineComment) | Syntax element | **held** |
| [Property access](typescript.md#MemberAccess) | Syntax element | **held** |
| [Title of a module](typescript.md#ModuleTitle) | Syntax element | **held** |
| [Import of names](typescript.md#NamedImport) | Syntax element | **held** |
| [Object on several lines](typescript.md#ObjectBlock) | Syntax element | **held** |
| [Object](typescript.md#ObjectLiteral) | Syntax element | **held** |
| [Object type](typescript.md#ObjectType) | Syntax element | **held** |
| [Optional property access](typescript.md#OptionalAccess) | Syntax element | **held** |
| [Optional property of a type](typescript.md#OptionalPropertySignature) | Syntax element | **held** |
| [Group](typescript.md#Parenthesized) | Syntax element | **held** |
| [Names of a program](typescript.md#ProgramNames) | Decision |  |
| [Property](typescript.md#Property) | Syntax element | **held** |
| [Strict inequality](typescript.md#StrictInequality) | Syntax element | **held** |
| [Text](typescript.md#StringLiteral) | Syntax element | **held** |
| [TypeScript](typescript.md#TypeScript) | Language | **held** |
| [TypeScript's libraries of types](typescript.md#TypeScriptLibraries) | Standard |  |
| [The syntax of the programs Trame writes](typescript.md#TypeScriptSyntax) | Standard |  |
| [TypeScript writer](typescript.md#TypeScriptWriter) | Function | **held** |
| [Union type](typescript.md#UnionType) | Syntax element | **held** |
| [Globals that reach outside](typescript.md#WorldGlobals) | Vocabulary |  |
