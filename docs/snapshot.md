# Snapshot

*The exact state expected on 31 October 2026, without history: the values in force, without the amendments that produced them.*

## Trame · Appearance

### Drawing of the explorer

Decision · `ExplorerDrawing`

- Decided by: trame
- Value: { width: 976, margin: 6, narrowest: 620, charWidth: 7.4, radius: { frame: 9, box: 7 }, layer: { head: 30, pad: 14, rankBaseline: 19 }, map: { columns: 5, height: 72, across: 16, down: 16, gap: 22, kindBottom: 22, nodes: { columns: 4, height: 46, gap: 16, kindBottom: 9 } }, focus: { columns: 4, height: 62, across: 16, down: 16, gap: 24, left: 30, rail: 14, tie: 15, kindBottom: 9 }, text: { inset: 10, firstLine: 19, lineHeight: 15, lines: 2, kindExtra: 4 }, strip: { inset: 10, bottom: 12, height: 4 }, open: { radius: 5, inset: 10 }, link: { curve: 26, base: 1, widest: 6, precision: 1 }, more: { baseline: 4 }, neighbours: 15, trail: 8 }

### Drawing of a graph

Decision · `GraphDrawing`

- Decided by: trame
- Value: { box: { width: 178, height: 60, radius: 7, inset: 10, firstLine: 19, lineHeight: 15, kindBottom: 9 }, open: { radius: 5, inset: 10 }, gaps: { across: 22, down: 62 }, margin: 10, head: 30, title: { chars: 24, lines: 2, cut: 2 }, kind: { chars: 27 }, passes: 8, arch: { rise: 34, label: 26 }, labelBaseline: 4, narrowest: 0.62, marker: { box: 10, tip: 9, size: 7 }, explored: 40 }

### Legend of a graph

Decision · `LegendDrawing`

- Decided by: trame
- Value: { line: { width: 26, height: 8, stroke: 2 }, box: { width: 18, height: 12, inset: 1, radius: 2, faded: 0.45 }, dot: { size: 12, radius: 5 }, dashes: { inferred: 2 3, computed: 6 4, discarded: 5 4, history: 3 2 } }

### Motion

Decision · `Motion`

- Decided by: trame
- Value: { duration-pulse: 1s, duration-flash: 1.6s }

### Narrow screen

Decision · `NarrowScreen`

- Decided by: trame
- Value: 920px

### Opacities

Decision · `Opacities`

- Decided by: trame
- Value: { opacity-full: 1, opacity-strong: 0.85, opacity-medium: 0.6, opacity-muted: 0.45, opacity-faint: 0.35, opacity-faintest: 0.3, opacity-link: 0.1, opacity-link-dimmed: 0 }

### Page layout

Decision · `PageLayout`

- Decided by: trame
- Value: { side-width: 300px, page-width: 1320px, measure: 80ch, date-min: 62px, dot-size: 8px, badge-min: 20px, screen-height: 100vh, full: 100%, fraction: 1fr, track-fill: minmax(0, 1fr), indent-compact: 1.1em, indent-doc: 1.2em, date-mark-line: 1.2em }

### Palette

Decision · `Palette`

- Decided by: trame
- Value: { light: { bg: #f3f5f6, panel: #ffffff, ink: #17202a, muted: #5a6672, line: #d9e0e5, accent: #34509a, accent-soft: #e5ebf7, ok: #26734a, ok-soft: #e1f1e7, warn: #9a6200, warn-soft: #fbf0d9, bad: #ad2a22, bad-soft: #f9e3e1, unk: #65707c, unk-soft: #e9edf0, term-bg: #121820, term-ink: #d8dee5, term-dim: #7f8b97 }, dark: { bg: #0e1217, panel: #151b22, ink: #e4e9ee, muted: #98a3ae, line: #29323c, accent: #93abef, accent-soft: #1e2a44, ok: #7fd19b, ok-soft: #173325, warn: #f2c063, warn-soft: #3a2d12, bad: #f08a80, bad-soft: #3d1c1a, unk: #a5afb9, unk-soft: #222a33, term-bg: #0a0e13, term-ink: #d8dee5, term-dim: #7f8b97 }, statuses: { held: { fill: ok-soft, stroke: ok }, blocked: { fill: warn-soft, stroke: warn }, violated: { fill: bad-soft, stroke: bad }, unknown: { fill: unk-soft, stroke: unk }, neutral: { fill: panel, stroke: muted } }, ink: ink }

### Radii

Decision · `Radii`

- Decided by: trame
- Value: { radius-2xs: 3px, radius-xs: 4px, radius-sm: 5px, radius-md: 6px, radius-lg: 7px, radius-xl: 8px, radius-2xl: 10px, radius-3xl: 14px, radius-round: 50% }

### Spacing

Decision · `Spacing`

- Decided by: trame
- Value: { space-none: 0, space-hairline: 1px, space-3xs: 2px, space-2xs: 4px, space-xs: 6px, space-sm: 8px, space-md: 10px, space-lg: 12px, space-xl: 14px, space-2xl: 16px, space-3xl: 18px, space-4xl: 20px, space-5xl: 40px, inset-toggle: 3px, stack-list-item: 3px, inset-control-block: 7px, inset-control-inline: 9px, inset-cell-block: 7px, inset-pill-inline: 7px, stack-h4: 22px, offset-anchor: 24px, page-inset-top: 28px, page-inset-bottom: 64px, page-inset-bottom-narrow: 48px, safe-area-default: 0px }

### Strokes

Decision · `Strokes`

- Decided by: trame
- Value: { line-width: 1px, focus-width: 2px, focus-offset: 2px, underline-offset: 2px, stroke-grid: 1, stroke-box: 1.2, stroke-edge: 1.3, stroke-today: 1.4, stroke-open: 1.5, stroke-strong: 2, stroke-winner: 2.2, stroke-focus: 2.4, stroke-halo: 4px, dash-history: 5 3, dash-inferred: 2 3, dash-computed: 6 4, dash-discarded: 5 4, dash-today: 4 3 }

### Drawing of a timeline

Decision · `TimelineDrawing`

- Decided by: trame
- Value: { width: 920, label: 240, row: 36, top: 40, pad: 18, narrowest: 640, titleChars: 32, period: { y: 10, height: 12, radius: 6, shortest: 4 }, mark: { centre: 16, top: 8, bottom: 24, half: 7, radius: 5 }, grid: { above: 8 }, tick: { x: 4, above: 12 }, lane: { title: 15, kind: 29 }, today: { above: 26, below: 4, label: 5 }, bottom: 12, shortestSpan: 1 }

### Type scale

Decision · `TypeScale`

- Decided by: trame
- Value: { text-2xs: 11px, text-xs: 11.5px, text-sm: 12px, text-md: 12.5px, text-lg: 13px, text-xl: 13.5px, text-2xl: 14px, text-3xl: 15px, text-date-mark: 10px, text-edge: 10.5px, text-doc: 16px, text-code: 0.82em, text-h1: 2rem, text-h1-narrow: 1.6rem, text-h3: 1.28rem, weight-regular: 400, weight-medium: 500, weight-semibold: 600, leading-h1: 1.15, leading-date: 1.2, leading-h3: 1.25, leading-table: 1.4, leading-ui: 1.5, leading-code: 1.55, leading-pre: 1.6, leading-doc: 1.62, tracking-tight: -0.01em, tracking-xs: 0.02em, tracking-sm: 0.03em, tracking-md: 0.06em, tracking-lg: 0.08em, tracking-xl: 0.09em }

### Typography

Decision · `Typography`

- Decided by: trame
- Value: { fonts: { font-doc: "Literata", "Iowan Old Style", Georgia, serif, font-ui: "Instrument Sans", "Segoe UI", system-ui, sans-serif, font-mono: "JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, monospace }, loading: https://fonts.googleapis.com, https://fonts.gstatic.com, https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Literata:opsz,wght@7..72,400;7..72,500;7..72,600&display=swap }

## Trame · Architecture

### The page in a browser

Component · `PageApp`

- Owner: trame
- Language: typescript
- Startup: { exposure: std/platform.PageLoading }
- Deployed in: Browser

### Trame on the command line

Component · `TrameCli`

- Owner: trame
- Language: typescript
- Startup: { exposure: architecture.CommandLine }
- Deployed in: Local, Test
- Depends on: Command line

### Bundler

Port · `Bundler`

- Owner: trame
- Declared effects: read

### Clock

Port · `Clock`

- Owner: trame
- Declared effects: time, read

### Command line

Port · `CommandLine`

- Owner: trame
- Declared effects: terminal

### Compression

Port · `Compression`

- Owner: trame
- Declared effects: 

### Decompression

Port · `Decompression`

- Owner: trame
- Declared effects: 

### File reading

Port · `FileReading`

- Owner: trame
- Declared effects: read

### File trees

Port · `FileTrees`

- Owner: trame
- Declared effects: { temporary: write, copy: read, write, link: write, remove: write, files: read, differences: read, process }

### File writing

Port · `FileWriting`

- Owner: trame
- Declared effects: write

### Feed of the graph

Port · `GraphFeed`

- Owner: trame
- Declared effects: { packed: display, live: display, follow: network, asynchronous }

### Hashing

Port · `Hashing`

- Owner: trame
- Declared effects: 

### HTTP server

Port · `HttpServer`

- Owner: trame
- Declared effects: network

### Results kept

Port · `KeptResults`

- Owner: trame
- Declared effects: 

### Runs kept

Port · `KeptRuns`

- Owner: trame
- Declared effects: read, keeps

### Module loader

Port · `ModuleLoader`

- Owner: trame
- Declared effects: read, execution

### Reports on packages

Port · `PackageReports`

- Owner: trame
- Declared effects: process, network

### Memory of the page

Port · `PageMemory`

- Owner: trame
- Declared effects: { recall: read, keep: write }

### Window of the page

Port · `PageWindow`

- Owner: trame
- Declared effects: display

### Paths

Port · `Paths`

- Owner: trame
- Declared effects: 

### Prelude

Port · `Prelude`

- Owner: trame
- Declared effects: read

### Process

Port · `Process`

- Owner: trame
- Declared effects: { cwd: read, program: read, terminal, env: read, relaunch: process, read, terminal, runTs: process, read, onSignal: process }

### Process log

Port · `ProcessLog`

- Owner: trame
- Declared effects: 

### Programs

Port · `Programs`

- Owner: trame
- Declared effects: process, execution, read

### Page resources

Port · `Resources`

- Owner: trame
- Declared effects: 

### Where runs are kept

Port · `RunStore`

- Owner: trame
- Declared effects: read, keeps

### Server log

Port · `ServerLog`

- Owner: trame
- Declared effects: 

### Signatures

Port · `Signatures`

- Owner: trame
- Declared effects: 

### Syntax trees

Port · `SyntaxTrees`

- Owner: trame
- Declared effects: read, execution

### Terminal

Port · `Terminal`

- Owner: trame
- Declared effects: { args: terminal, write: terminal, writeRaw: terminal, error: terminal, exit: process }

### Terminal log

Port · `TerminalLog`

- Owner: trame
- Declared effects: 

### Timer

Port · `Timer`

- Owner: trame
- Declared effects: time

### TypeScript compiler

Port · `TypeScriptCompiler`

- Owner: trame
- Declared effects: read

### Write log

Port · `WriteLog`

- Owner: trame
- Declared effects: 

### Effects come from the vocabulary

Architecture rule · `KnownEffects` · **held**

- Owner: trame

### Only commands write

Architecture rule · `OnlyCommandsWrite` · **held**

- Owner: trame

### Rendering does not read the graph

Architecture rule · `RenderingWithoutGraph` · **held**

- Owner: trame
- Depends on: Prelude

### Browser

Environment · `Browser`

- Owner: trame

### Local

Environment · `Local`

- Owner: trame

### Test

Environment · `Test`

- Owner: trame
- The build evaluates here: true

## Trame · The page in a browser

### The page is assembled

Architecture decision · `ThePageIsAssembled` · **held**

- Decided by: trame
- Context: The page's script built by hand what it shared with the engine and wrote its values (classes, identifiers, the explorer's geometry) as literals the catalogue could not see: a change in the graph did not reach it.
- Consequences: The page's program is written by the assembly, like the command line's: the values of the graph frozen in it, its bodies wired, the browser's implementations chosen for the environment Browser. It carries the modules of the graph its bodies use, which makes it heavier.
- Rejected: Values passed to the script in the page, the script would still build its functions by hand, outside the graph; The page drawn whole by the engine, the explorer's states are too many to draw in advance
- Serves: A specification that runs
- Applied by: Show the graph, Explorer of a graph, The browser runs the page, Rendering does not read the graph

### Explorer of a graph

Function · `ExplorerFigures` · **held**

- Owner: trame
- Parameters: { html: std/html.Html, svg: std/html.Svg, aria: std/html.Aria, css: std/html.Css, page: page.ThePage, markup: markup.DocumentMarkup, figures: markup.FigureMarkup, explorer: markup.ExplorerMarkup, drawing: appearance.ExplorerDrawing, element: html.HtmlElement, start: html.HtmlStartTag, empty: html.SelfClosingTag, path: html.PathData, declaration: html.CssDeclaration, escape: html.EscapedText, common: rendering.Common, words: messages.PageWords, messages: messages.RenderingMessages, punctuation: documents.Punctuation, counts: std/algebra.Counts, sequences: std/algebra.Sequences, texts: std/algebra.Texts }
- Serves: A specification that runs
- Depends on: The page, Documents in the page, Figures in the page, The explorer of a graph, Drawing of the explorer, HTML element, Start tag, Self-closing tag, Path data, Declaration, Escaped text, Common rendering, Words of the page, Messages of the renderers, Punctuation of documents

### Show the graph

Entry point · `ShowGraph` · **held**

- Owner: trame
- Trigger: { type: load }
- Parameters: { window: architecture.PageWindow, memory: architecture.PageMemory, feed: architecture.GraphFeed, unpacking: architecture.Decompression, explorer: browser.ExplorerFigures, common: rendering.Common, page: page.ThePage, regions: page.PageRegions, modes: page.RenderingModes, highlighting: page.MachineHighlighting, markup: markup.DocumentMarkup, around: markup.AroundMarkup, explorerMarkup: markup.ExplorerMarkup, drawing: appearance.ExplorerDrawing, ids: conventions.DocumentIds, slots: rendering.SentenceSlots, punctuation: documents.Punctuation, language: messages.Language, html: std/html.Html, aria: std/html.Aria, events: std/web.UiEvents, view: std/web.CssomView, iso: std/measures.Iso8601, file: std/text.TextFile, element: html.HtmlElement, escape: html.EscapedText, attribute: html.AttributeSelector, presence: html.AttributePresence, selectors: html.SelectorList, classSelector: html.ClassSelector, words: messages.PageWords, counts: std/algebra.Counts, sequences: std/algebra.Sequences, texts: std/algebra.Texts }
- Serves: A specification that runs
- Part of: The page in a browser
- Depends on: Window of the page, Memory of the page, Feed of the graph, Decompression, Explorer of a graph, Common rendering, The page, Regions of the page, The renderings of a document, Files for tools in the page, Documents in the page, Around the documents, The explorer of a graph, Drawing of the explorer, Names of the documents, Places in a sentence, Punctuation of documents, Language, HTML element, Escaped text, Attribute selector, Attribute presence, Selector list, Class selector, Words of the page

### The browser's gzip

Implementation · `BrowserDecompression` · **held**

- Owner: trame
- Parameters: { packing: page.PackedGraph, ecma: std/ecmascript.EcmaScript }
- Implements: Decompression
- Depends on: A page carries its graph compressed

### The globals of the page, and trame dev

Implementation · `BrowserFeed` · **held**

- Owner: trame
- Parameters: { page: page.ThePage, service: engine.DevService, values: std/algebra.ValueTypes }
- Implements: Feed of the graph
- Depends on: The page, What trame dev serves

### Local storage

Implementation · `BrowserMemory` · **held**

- Owner: trame
- Parameters: { page: page.ThePage }
- Implements: Memory of the page
- Depends on: The page

### The browser's window

Implementation · `BrowserWindow` · **held**

- Owner: trame
- Parameters: { motion: std/web.MediaQueries5, feature: html.MediaFeature, counts: std/algebra.Counts }
- Implements: Window of the page
- Depends on: Media feature

### The browser runs the page

Technical choice · `TheBrowserRunsThePage` · **held**

- Decided by: trame
- Context: The page's script took what it needed from the browser itself, here and there: the graph could not say what the page asks of the browser, nor try it elsewhere.
- Consequences: The browser's globals appear only in these implementations; the entry point and the explorer are bodies like any other, and their values are the graph's.
- Rejected: A framework for the page, a dependency, and its own way of writing the page, for a page that writes HTML strings and listens to a few events; Libraries for storage and decompression, every browser the page targets has local storage and gzip
- Chooses: The browser's window, Local storage, The globals of the page, and trame dev, The browser's gzip
- In: Browser
- Serves: A technology is changed in one node

## Trame · Scenarios of the commands

### What the engines an advance starts answer in a scenario

Decision · `AdvanceSamples`

- Decided by: trame
- Value: { output: an engine run by a scenario, runs: 40, what: A generation frozen in memory, by a scenario, shown: 3 }

### What the example is assembled for

Decision · `AssemblySamples`

- Decided by: trame
- Value: { component: ReservationsApi, machine: Local, provisioned: Production, program: .ts, provision: .tf }

### Bodies the reader is given

Decision · `BodySamples`

- Decided by: trame
- Value: { literal: { code: export default (o: O) => ({ owner: "trame", at: o.list[2] }), literals: "trame", 2, roles: property value, index }, hidden: { code: import { limit } from "./limits"
export default () => limit, module: ./limits }, global: { code: export default (url: string) => fetch(url), name: fetch }, silent: const body = () => undefined, broken: export default ( => }

### What trame dev is shown in a scenario

Decision · `DevSamples`

- Decided by: trame
- Value: { touched: touched-by-a-scenario.ts, content: // touched, pauses: 4, compilations: 2 }

### What a plan is checked with

Decision · `PlanSamples`

- Decided by: trame
- Value: { invented: { id: imagined.Node, kind: decision, title: A node nobody declared }, issue: warning: an issue a build had raised }

### What the scenarios ask of those projects

Decision · `ProjectSamples`

- Decided by: trame
- Value: { release: { version: 99.0.0, what: A version released in memory, by a scenario }, imported: { library: std, specifier: #std/*, module: src/algebra.ts }, delivery: PoseliaPage, shipments: { runners: RunnersWritten, preview: Preview }, handCheck: { check: OnAPhone, tester: ghalaax, stranger: someone-else } }

### What a program run in a scenario answers

Decision · `RunSamples`

- Decided by: trame
- Value: { output: listening, status: 3 }

### The projects of the repository the scenarios enter

Decision · `ScenarioProjects`

- Decided by: trame
- Value: { library: std, application: apps/poselia }

### What an SVG figure opens with

Decision · `SvgSample`

- Decided by: trame
- Value: { opening: <svg }

### Views asked of the example

Decision · `ViewSamples`

- Decided by: trame
- Value: { project: { view: adrs, shows: Secrets stay out of the graph }, module: { view: module, module: architecture, draws: Reservations API }, unknown: nothing-named-so }

### An advance, in memory

Scenario · `AdvanceInMemory` · **held**

- Owner: trame
- Parameters: { advance: commands.Advance, processLog: architecture.ProcessLog, writeLog: architecture.WriteLog, terminalLog: architecture.TerminalLog, currentProcess: architecture.Process, paths: architecture.Paths, layout: conventions.Layout, reading: architecture.FileReading, writing: architecture.FileWriting, encodings: std/system.NodeEncodings, line: conventions.TrameCommands, exitStatus: std/system.ExitStatus, advancing: messages.AdvanceMessages, data: command-scenarios.AdvanceSamples, texts: std/algebra.Texts, counts: std/algebra.Counts, sequences: std/algebra.Sequences, values: std/algebra.ValueTypes, messages: messages.ScenarioMessages }
- Verifies: Advance, The fingerprint of an engine
- In: Test
- Depends on: Advance, Process log, Write log, Terminal log, Process, Paths, Project layout, File reading, File writing, Trame's commands, Messages of an advance, What the engines an advance starts answer in a scenario, Messages of the scenarios

### A body is read and checked

Scenario · `BodiesReadAndChecked` · **held**

- Owner: trame
- Parameters: { reader: syntax.SyntaxReader, checks: syntax.BodyChecks, typescript: typescript.TypeScript, samples: command-scenarios.BodySamples, driver: messages.DriverMessages, gnu: std/text.GnuPositions, counts: std/algebra.Counts, messages: messages.ScenarioMessages }
- Verifies: Syntax reader, Checks of a body, tree-sitter in WebAssembly
- In: Test
- Depends on: Syntax reader, Checks of a body, TypeScript, Bodies the reader is given, Messages of the drivers, Messages of the scenarios

### A build planned

Scenario · `BuildPlanned` · **held**

- Owner: trame
- Parameters: { build: commands.Build, plan: commands.Plan, writeLog: architecture.WriteLog, terminalLog: architecture.TerminalLog, writing: architecture.FileWriting, currentProcess: architecture.Process, paths: architecture.Paths, layout: conventions.Layout, samples: command-scenarios.PlanSamples, line: conventions.TrameCommands, exitStatus: std/system.ExitStatus, counts: std/algebra.Counts, commands: messages.CommandMessages, messages: messages.ScenarioMessages }
- Verifies: Plan a build
- In: Test
- Depends on: Build, Plan a build, Write log, Terminal log, File writing, Process, Paths, Project layout, What a plan is checked with, Trame's commands, Messages of the commands, Messages of the scenarios

### The command line

Scenario · `CommandLineChooses` · **held**

- Owner: trame
- Parameters: { commandLine: architecture.CommandLine, terminalLog: architecture.TerminalLog, line: conventions.TrameCommands, exitStatus: std/system.ExitStatus, samples: command-scenarios.ViewSamples, platform: messages.PlatformMessages, sequences: std/algebra.Sequences, messages: messages.ScenarioMessages }
- Verifies: Command line, Terminal in memory
- In: Test
- Depends on: Command line, Terminal log, Trame's commands, Views asked of the example, Messages of the platform, Messages of the scenarios

### A component assembled

Scenario · `ComponentAssembled` · **held**

- Owner: trame
- Parameters: { assemble: commands.Assemble, writeLog: architecture.WriteLog, terminalLog: architecture.TerminalLog, line: conventions.TrameCommands, exitStatus: std/system.ExitStatus, layout: conventions.Layout, samples: command-scenarios.AssemblySamples, commands: messages.CommandMessages, counts: std/algebra.Counts, messages: messages.ScenarioMessages }
- Verifies: Assemble a component, Assembler, Assembly, TypeScript writer, Terraform writer, Drivers, Stopped clock
- In: Test
- Depends on: Assemble a component, Write log, Terminal log, Trame's commands, Project layout, What the example is assembled for, Messages of the commands, Messages of the scenarios

### A component run

Scenario · `ComponentRun` · **held**

- Owner: trame
- Parameters: { run: commands.Run, processLog: architecture.ProcessLog, writeLog: architecture.WriteLog, line: conventions.TrameCommands, samples: command-scenarios.AssemblySamples, data: command-scenarios.RunSamples, messages: messages.ScenarioMessages }
- Verifies: Run a component
- In: Test
- Depends on: Run a component, Process log, Write log, Trame's commands, What the example is assembled for, What a program run in a scenario answers, Messages of the scenarios

### Declarations published

Scenario · `DeclarationsPublished` · **held**

- Owner: trame
- Parameters: { publish: commands.Publish, writeLog: architecture.WriteLog, terminalLog: architecture.TerminalLog, currentProcess: architecture.Process, paths: architecture.Paths, layout: conventions.Layout, line: conventions.TrameCommands, exitStatus: std/system.ExitStatus, commands: messages.CommandMessages, messages: messages.ScenarioMessages }
- Verifies: Publish
- In: Test
- Depends on: Publish, Write log, Terminal log, Process, Paths, Project layout, Trame's commands, Messages of the commands, Messages of the scenarios

### trame dev

Scenario · `DevFollowsTheGraph` · **held**

- Owner: trame
- Parameters: { payload: commands.EmitPayload, dev: commands.Dev, processLog: architecture.ProcessLog, serverLog: architecture.ServerLog, terminalLog: architecture.TerminalLog, writing: architecture.FileWriting, timer: architecture.Timer, currentProcess: architecture.Process, paths: architecture.Paths, layout: conventions.Layout, service: engine.DevService, sse: std/web.ServerSentEvents, http: std/web.Http, debounce: product.DevDebounce, project: engine.Project, line: conventions.TrameCommands, exitStatus: std/system.ExitStatus, output: messages.OutputMessages, texts: std/algebra.Texts, data: command-scenarios.DevSamples, messages: messages.ScenarioMessages }
- Verifies: Start trame dev, trame dev server, A server in memory, Node timer
- In: Test
- Depends on: Payload, Start trame dev, Process log, Server log, Terminal log, File writing, Timer, Process, Paths, Project layout, What trame dev serves, Debouncing of saves, Project, Trame's commands, Messages of the outputs, What trame dev is shown in a scenario, Messages of the scenarios

### The doctor

Scenario · `DoctorAsks` · **held**

- Owner: trame
- Parameters: { doctor: commands.Doctor, processLog: architecture.ProcessLog, terminalLog: architecture.TerminalLog, probe: commands.DoctorProbe, line: conventions.TrameCommands, exitStatus: std/system.ExitStatus, commands: messages.CommandMessages, file: std/text.TextFile, texts: std/algebra.Texts, counts: std/algebra.Counts, messages: messages.ScenarioMessages }
- Verifies: Ask the machine, The runs of a project, Runs kept in the process
- In: Test
- Depends on: Ask the machine, Process log, Terminal log, What the doctor writes, runs and waits for, Trame's commands, Messages of the commands, Messages of the scenarios

### The laws, tested by their command

Scenario · `LawsTested` · **held**

- Owner: trame
- Parameters: { testKinds: commands.TestKinds, compiler: engine.Compiler, views: engine.Views, currentProcess: architecture.Process, terminalLog: architecture.TerminalLog, line: conventions.TrameCommands, exitStatus: std/system.ExitStatus, commands: messages.CommandMessages, messages: messages.ScenarioMessages }
- Verifies: Test the laws
- In: Test
- Depends on: Test the laws, Compiler, Views, Process, Terminal log, Trame's commands, Messages of the commands, Messages of the scenarios

### A library released

Scenario · `LibraryReleased` · **held**

- Owner: trame
- Parameters: { release: commands.Release, processLog: architecture.ProcessLog, writeLog: architecture.WriteLog, terminalLog: architecture.TerminalLog, currentProcess: architecture.Process, paths: architecture.Paths, layout: conventions.Layout, projects: command-scenarios.ScenarioProjects, samples: command-scenarios.ProjectSamples, line: conventions.TrameCommands, exitStatus: std/system.ExitStatus, text: typescript.StringLiteral, messages: messages.ScenarioMessages }
- Verifies: Release a version, Records of the releases
- In: Test
- Depends on: Release a version, Process log, Write log, Terminal log, Process, Paths, Project layout, The projects of the repository the scenarios enter, What the scenarios ask of those projects, Trame's commands, Text, Messages of the scenarios

### The manifest written

Scenario · `ManifestWritten` · **held**

- Owner: trame
- Parameters: { manifest: commands.WriteManifest, processLog: architecture.ProcessLog, writeLog: architecture.WriteLog, reading: architecture.FileReading, currentProcess: architecture.Process, paths: architecture.Paths, layout: conventions.Layout, projects: command-scenarios.ScenarioProjects, samples: command-scenarios.ProjectSamples, line: conventions.TrameCommands, exitStatus: std/system.ExitStatus, messages: messages.ScenarioMessages }
- Verifies: Write the manifest
- In: Test
- Depends on: Write the manifest, Process log, Write log, File reading, Process, Paths, Project layout, The projects of the repository the scenarios enter, What the scenarios ask of those projects, Trame's commands, Messages of the scenarios

### The packages audited

Scenario · `PackagesAudited` · **held**

- Owner: trame
- Parameters: { audit: commands.Audit, processLog: architecture.ProcessLog, writeLog: architecture.WriteLog, terminalLog: architecture.TerminalLog, projects: command-scenarios.ScenarioProjects, line: conventions.TrameCommands, exitStatus: std/system.ExitStatus, counts: std/algebra.Counts, messages: messages.ScenarioMessages, report: packages.PackageAudit }
- Verifies: Audit the packages, No registry in test
- In: Test
- Depends on: Audit the packages, Process log, Write log, Terminal log, The projects of the repository the scenarios enter, Trame's commands, Messages of the scenarios, Audit of the packages

### The page delivered

Scenario · `PageDelivered` · **held**

- Owner: trame
- Parameters: { deliver: commands.Deliver, processLog: architecture.ProcessLog, writeLog: architecture.WriteLog, projects: command-scenarios.ScenarioProjects, samples: command-scenarios.ProjectSamples, doctype: html.Doctype, line: conventions.TrameCommands, exitStatus: std/system.ExitStatus, counts: std/algebra.Counts, messages: messages.ScenarioMessages }
- Verifies: Deliver
- In: Test
- Depends on: Deliver, Process log, Write log, The projects of the repository the scenarios enter, What the scenarios ask of those projects, DOCTYPE, Trame's commands, Messages of the scenarios

### The page exported

Scenario · `PageExported` · **held**

- Owner: trame
- Parameters: { payload: commands.EmitPayload, exported: commands.Export, processLog: architecture.ProcessLog, writeLog: architecture.WriteLog, terminalLog: architecture.TerminalLog, project: engine.Project, currentProcess: architecture.Process, paths: architecture.Paths, layout: conventions.Layout, line: conventions.TrameCommands, exitStatus: std/system.ExitStatus, output: messages.OutputMessages, texts: std/algebra.Texts, messages: messages.ScenarioMessages }
- Verifies: Export the page, Date bundle
- In: Test
- Depends on: Payload, Export the page, Process log, Write log, Terminal log, Project, Process, Paths, Project layout, Trame's commands, Messages of the outputs, Messages of the scenarios

### The page of the graph

Scenario · `PageOfTheGraph` · **held**

- Owner: trame
- Parameters: { payload: commands.EmitPayload, page: page.Page, compression: architecture.Compression, project: engine.Project, currentProcess: architecture.Process, clock: architecture.Clock, terminalLog: architecture.TerminalLog, line: conventions.TrameCommands, output: messages.OutputMessages, texts: std/algebra.Texts, messages: messages.ScenarioMessages }
- Verifies: Page, esbuild, gzip, with Node's zlib, Page resources
- In: Test
- Depends on: Payload, Page, Compression, Project, Process, Clock, Terminal log, Trame's commands, Messages of the outputs, Messages of the scenarios

### The graph in the intermediate format

Scenario · `PayloadOfTheGraph` · **held**

- Owner: trame
- Parameters: { payload: commands.EmitPayload, differences: engine.Differences, terminalLog: architecture.TerminalLog, line: conventions.TrameCommands, exitStatus: std/system.ExitStatus, output: messages.OutputMessages, texts: std/algebra.Texts, counts: std/algebra.Counts, messages: messages.ScenarioMessages, svg: command-scenarios.SvgSample }
- Verifies: Payload, Payload, Rendering in the page, HTML writer, Figures in SVG, Differences
- In: Test
- Depends on: Payload, Differences, Terminal log, Trame's commands, Messages of the outputs, Messages of the scenarios, What an SVG figure opens with

### Shipments run, evidence given

Scenario · `ShipmentsRun` · **held**

- Owner: trame
- Parameters: { ship: commands.Ship, evidence: commands.RecordEvidence, processLog: architecture.ProcessLog, writeLog: architecture.WriteLog, terminalLog: architecture.TerminalLog, currentProcess: architecture.Process, paths: architecture.Paths, trees: architecture.FileTrees, signatures: architecture.Signatures, writing: architecture.FileWriting, compiler: engine.Compiler, clock: architecture.Clock, compilerMessages: messages.CompilerMessages, layout: conventions.Layout, records: shipping.ShippingRecords, projects: command-scenarios.ScenarioProjects, samples: command-scenarios.ProjectSamples, line: conventions.TrameCommands, exitStatus: std/system.ExitStatus, texts: std/algebra.Texts, counts: std/algebra.Counts, values: std/algebra.ValueTypes, messages: messages.ScenarioMessages }
- Verifies: Ship, Record evidence, Evidence of the SDLC, A shipment's pipeline, The plan of a run elsewhere, SHA-256 hashes, Attribution, The fingerprint of an engine
- In: Test
- Depends on: Ship, Record evidence, Process log, Write log, Terminal log, Process, Paths, File trees, Signatures, File writing, Compiler, Clock, Messages of the compiler, Project layout, Where the SDLC's evidence is kept, The projects of the repository the scenarios enter, What the scenarios ask of those projects, Trame's commands, Messages of the scenarios

### The snapshot, taken by its command

Scenario · `SnapshotTaken` · **held**

- Owner: trame
- Parameters: { snapshot: commands.TakeSnapshot, writeLog: architecture.WriteLog, reading: architecture.FileReading, currentProcess: architecture.Process, paths: architecture.Paths, layout: conventions.Layout, line: conventions.TrameCommands, encodings: std/system.NodeEncodings, messages: messages.ScenarioMessages }
- Verifies: Take the snapshot
- In: Test
- Depends on: Take the snapshot, Write log, File reading, Process, Paths, Project layout, Trame's commands, Messages of the scenarios

### A view in the terminal

Scenario · `ViewsInTheTerminal` · **held**

- Owner: trame
- Parameters: { show: commands.ShowView, byName: commands.ViewByName, terminalLog: architecture.TerminalLog, line: conventions.TrameCommands, exitStatus: std/system.ExitStatus, samples: command-scenarios.ViewSamples, texts: std/algebra.Texts, counts: std/algebra.Counts, messages: messages.ScenarioMessages }
- Verifies: Show a view, View by its name, Render a view, Rendering in the terminal, Plain text writer, Figures as text
- In: Test
- Depends on: Show a view, View by its name, Terminal log, Trame's commands, Views asked of the example, Messages of the scenarios

## Trame · Commands

### What the doctor writes, runs and waits for

Decision · `DoctorProbe`

- Decided by: trame
- Value: { file: probe.txt, text: trame doctor, program: probe.ts, source: console.log("trame doctor")
, pause: 10 }

### Assembler

Function · `Assembler` · **held**

- Owner: trame
- Parameters: { preparation: commands.Preparation, assembly: engine.Assembly, layout: text.TerminalText, punctuation: documents.Punctuation, texts: std/algebra.Texts, messages: messages.CommandMessages }
- Serves: A specification that runs
- Depends on: Preparation, Assembly, Terminal text, Punctuation of documents, Messages of the commands

### Preparation

Function · `Preparation` · **held**

- Owner: trame
- Parameters: { line: conventions.TrameCommands, compiler: engine.Compiler, compilationApi: engine.CompilationApi, laws: engine.Laws, views: engine.Views, lock: engine.Lock, common: rendering.Common, terminal: architecture.Terminal, currentProcess: architecture.Process, clock: architecture.Clock, severityOrder: (rule), devPort: product.DevPort, exitStatus: std/system.ExitStatus, layout: text.TerminalText, columns: text.TerminalColumns, cell: text.PaddedCell, counts: std/algebra.Counts, sequences: std/algebra.Sequences, texts: std/algebra.Texts, messages: messages.CommandMessages, projectLayout: conventions.Layout, uri: std/web.Uri, references: engine.References }
- Serves: A specification that runs
- Depends on: Trame's commands, Compiler, Compilation API, Laws, Views, Lock, Common rendering, Terminal, Process, Clock, Sort problems by severity, Port of trame dev, Terminal text, Columns in the terminal, Padded cell, Messages of the commands, Project layout, References

### Render a view

Function · `RenderView` · **held**

- Owner: trame
- Parameters: { line: conventions.TrameCommands, json: conventions.JsonFormatting, preparation: commands.Preparation, views: engine.Views, files: rendering.FileRendering, screen: rendering.TerminalRendering, terminal: architecture.Terminal, messages: messages.CommandMessages }
- Serves: A specification that runs
- Depends on: Trame's commands, JSON formatting, Preparation, Views, Rendering of the files, Rendering in the terminal, Terminal, Messages of the commands

### Advance

Entry point · `Advance` · **held**

- Owner: trame
- Trigger: { type: command, name: advance }
- Parameters: { exitStatus: std/system.ExitStatus, preparation: commands.Preparation, engines: engine.EngineFingerprint, line: conventions.TrameCommands, layout: conventions.Layout, advancement: generations.Advancement, accept: (rule), example: platform.ExampleRoot, day: platform.TestDay, environment: conventions.TrameEnvironment, language: typescript.TypeScript, programs: architecture.Programs, trees: architecture.FileTrees, reading: architecture.FileReading, writing: architecture.FileWriting, paths: architecture.Paths, hashing: architecture.Hashing, sha256: std/algorithms.Sha256, fingerprint: engine.Fingerprint, encodings: std/system.NodeEncodings, diff: std/text.UnifiedDiff, file: std/text.TextFile, terminal: architecture.Terminal, table: text.Columns, columns: text.TerminalText, laws: messages.CommandMessages, counts: std/algebra.Counts, sequences: std/algebra.Sequences, texts: std/algebra.Texts, values: std/algebra.ValueTypes, messages: messages.AdvanceMessages, pin: generations.EnginePin, sharing: generations.LanguageSharing, releases: generations.Releases, records: generations.ReleaseRecords, json: conventions.JsonFormatting, specifiers: std/system.NodeModuleSpecifiers, references: conventions.ReferenceSyntax, clock: architecture.Clock, project: engine.Project }
- Serves: A specification that runs
- Part of: Trame on the command line
- Depends on: Preparation, The fingerprint of an engine, Trame's commands, Project layout, What an advance assembles, Accept a candidate, Example project, Day of the scenarios, Trame's environment, TypeScript, Programs, File trees, File reading, File writing, Paths, Hashing, Length of a fingerprint, Terminal, Columns, Terminal text, Messages of the commands, Messages of an advance, The engine a project runs, Generations that share the language, Releases of the engine, Records of the releases, JSON formatting, Trame references, Clock, Project

### Assemble a component

Entry point · `Assemble` · **held**

- Owner: trame
- Trigger: { type: command, name: assemble }
- Parameters: { exitStatus: std/system.ExitStatus, preparation: commands.Preparation, assembler: commands.Assembler, writing: architecture.FileWriting, paths: architecture.Paths, terminal: architecture.Terminal, messages: messages.CommandMessages }
- Serves: A specification that runs
- Part of: Trame on the command line
- Depends on: Preparation, Assembler, File writing, Paths, Terminal, Messages of the commands

### Audit the packages

Entry point · `Audit` · **held**

- Owner: trame
- Trigger: { type: command, name: audit }
- Parameters: { exitStatus: std/system.ExitStatus, preparation: commands.Preparation, reports: architecture.PackageReports, audit: packages.PackageAudit, layout: conventions.Layout, reading: architecture.FileReading, writing: architecture.FileWriting, paths: architecture.Paths, versions: packages.VersionOrder, encodings: std/system.NodeEncodings, json: conventions.JsonFormatting, terminal: architecture.Terminal, table: text.Columns, columns: text.TerminalText, counts: std/algebra.Counts, values: std/algebra.ValueTypes, messages: messages.CommandMessages }
- Serves: A single source of truth
- Part of: Trame on the command line
- Depends on: Preparation, Reports on packages, Audit of the packages, Project layout, File reading, File writing, Paths, Order of versions, JSON formatting, Terminal, Columns, Terminal text, Messages of the commands

### Build

Entry point · `Build` · **held**

- Owner: trame
- Trigger: { type: command, name: build }
- Parameters: { exitStatus: std/system.ExitStatus, layout: conventions.Layout, preparation: commands.Preparation, machine: engine.MachineOutputs, files: rendering.FileRendering, screen: rendering.TerminalRendering, writing: architecture.FileWriting, paths: architecture.Paths, terminal: architecture.Terminal, messages: messages.CommandMessages }
- Serves: A specification that runs
- Part of: Trame on the command line
- Depends on: Project layout, Preparation, Machine outputs, Rendering of the files, Rendering in the terminal, File writing, Paths, Terminal, Messages of the commands

### Deliver

Entry point · `Deliver` · **held**

- Owner: trame
- Trigger: { type: command, name: deliver }
- Parameters: { exitStatus: std/system.ExitStatus, preparation: commands.Preparation, assembly: engine.Assembly, bundler: architecture.Bundler, bundle: page.PageBundle, document: page.PageDocument, html: std/html.Html, script: html.ScriptElement, style: delivery.DeliveredStyle, reading: architecture.FileReading, writing: architecture.FileWriting, paths: architecture.Paths, encodings: std/system.NodeEncodings, terminal: architecture.Terminal, sequences: std/algebra.Sequences, texts: std/algebra.Texts, values: std/algebra.ValueTypes, messages: messages.CommandMessages }
- Serves: A specification that runs
- Part of: Trame on the command line
- Depends on: Preparation, Assembly, Bundler, Bundle of the page, Document of the page, Script, Style of a delivered page, File reading, File writing, Paths, Terminal, Messages of the commands

### Start trame dev

Entry point · `Dev` · **held**

- Owner: trame
- Trigger: { type: command, name: dev }
- Parameters: { preparation: commands.Preparation, devServer: engine.DevServer }
- Serves: A specification that runs
- Part of: Trame on the command line
- Depends on: Preparation, trame dev server

### Ask the machine

Entry point · `Doctor` · **held**

- Owner: trame
- Trigger: { type: command, name: doctor }
- Parameters: { exitStatus: std/system.ExitStatus, preparation: commands.Preparation, probe: commands.DoctorProbe, iso: std/measures.Iso8601, reading: architecture.FileReading, writing: architecture.FileWriting, trees: architecture.FileTrees, programs: architecture.Programs, runs: architecture.KeptRuns, httpServer: architecture.HttpServer, timer: architecture.Timer, reports: architecture.PackageReports, clock: architecture.Clock, paths: architecture.Paths, terminal: architecture.Terminal, encodings: std/system.NodeEncodings, counts: std/algebra.Counts, texts: std/algebra.Texts, messages: messages.CommandMessages }
- Serves: A specification that runs
- Part of: Trame on the command line
- Depends on: Preparation, What the doctor writes, runs and waits for, File reading, File writing, File trees, Programs, Runs kept, HTTP server, Timer, Reports on packages, Clock, Paths, Terminal, Messages of the commands

### Payload

Entry point · `EmitPayload` · **held**

- Owner: trame
- Trigger: { type: command, name: payload }
- Parameters: { exitStatus: std/system.ExitStatus, preparation: commands.Preparation, payload: engine.PayloadBuilder, files: rendering.FileRendering, screen: rendering.TerminalRendering, pageRendering: rendering.PageRendering, terminal: architecture.Terminal }
- Serves: A specification that runs
- Part of: Trame on the command line
- Depends on: Preparation, Payload, Rendering of the files, Rendering in the terminal, Rendering in the page, Terminal

### Export the page

Entry point · `Export` · **held**

- Owner: trame
- Trigger: { type: command, name: export }
- Parameters: { exitStatus: std/system.ExitStatus, layout: conventions.Layout, preparation: commands.Preparation, bundle: engine.DateBundle, page: page.Page, project: engine.Project, writing: architecture.FileWriting, paths: architecture.Paths, terminal: architecture.Terminal, messages: messages.CommandMessages }
- Serves: A specification that runs
- Part of: Trame on the command line
- Depends on: Project layout, Preparation, Date bundle, Page, Project, File writing, Paths, Terminal, Messages of the commands

### Plan a build

Entry point · `Plan` · **held**

- Owner: trame
- Trigger: { type: command, name: plan }
- Parameters: { exitStatus: std/system.ExitStatus, layout: conventions.Layout, text: text.TerminalText, preparation: commands.Preparation, machine: engine.MachineOutputs, reading: architecture.FileReading, paths: architecture.Paths, encodings: std/system.NodeEncodings, terminal: architecture.Terminal, messages: messages.CommandMessages, output: messages.OutputMessages }
- Serves: A specification that runs
- Part of: Trame on the command line
- Depends on: Project layout, Terminal text, Preparation, Machine outputs, File reading, Paths, Terminal, Messages of the commands, Messages of the outputs

### Publish

Entry point · `Publish` · **held**

- Owner: trame
- Trigger: { type: command, name: publish }
- Parameters: { exitStatus: std/system.ExitStatus, preparation: commands.Preparation, lock: engine.Lock, writing: architecture.FileWriting, terminal: architecture.Terminal, layout: text.TerminalText, columns: text.TerminalColumns, cell: text.PaddedCell, texts: std/algebra.Texts, messages: messages.CommandMessages }
- Serves: A single source of truth
- Part of: Trame on the command line
- Depends on: Preparation, Lock, File writing, Terminal, Terminal text, Columns in the terminal, Padded cell, Messages of the commands

### Record evidence

Entry point · `RecordEvidence` · **held**

- Owner: trame
- Trigger: { type: command, name: evidence }
- Parameters: { exitStatus: std/system.ExitStatus, line: conventions.TrameCommands, preparation: commands.Preparation, sdlc: shipping.SdlcEvidence, writing: architecture.FileWriting, paths: architecture.Paths, terminal: architecture.Terminal, sequences: std/algebra.Sequences, counts: std/algebra.Counts, values: std/algebra.ValueTypes, messages: messages.CommandMessages }
- Serves: Ship only what holds
- Part of: Trame on the command line
- Depends on: Trame's commands, Preparation, Evidence of the SDLC, File writing, Paths, Terminal, Messages of the commands

### Release a version

Entry point · `Release` · **held**

- Owner: trame
- Trigger: { type: command, name: release }
- Parameters: { exitStatus: std/system.ExitStatus, preparation: commands.Preparation, layout: conventions.Layout, project: engine.Project, machine: engine.MachineOutputs, files: rendering.FileRendering, settled: (rule), names: libraries.LibraryReleaseNames, releases: generations.Releases, records: generations.ReleaseRecords, versions: std/measures.SemanticVersioning, specifiers: std/system.NodeModuleSpecifiers, reading: architecture.FileReading, writing: architecture.FileWriting, trees: architecture.FileTrees, paths: architecture.Paths, hashing: architecture.Hashing, sha256: std/algorithms.Sha256, fingerprint: engine.Fingerprint, encodings: std/system.NodeEncodings, language: typescript.TypeScript, clock: architecture.Clock, terminal: architecture.Terminal, messages: messages.CommandMessages, advance: messages.AdvanceMessages, sequences: std/algebra.Sequences, counts: std/algebra.Counts, drivers: languages.Drivers, text: typescript.StringLiteral }
- Serves: A single source of truth
- Part of: Trame on the command line
- Depends on: Preparation, Project layout, Project, Machine outputs, Rendering of the files, A release is settled, Names of a library's releases, Releases of the engine, Records of the releases, File reading, File writing, File trees, Paths, Hashing, Length of a fingerprint, TypeScript, Clock, Terminal, Messages of the commands, Messages of an advance, Drivers, Text

### Run a component

Entry point · `Run` · **held**

- Owner: trame
- Trigger: { type: command, name: run }
- Parameters: { exitStatus: std/system.ExitStatus, assemble: commands.Assemble, currentProcess: architecture.Process, posix: std/system.Posix, events: std/system.NodeEvents }
- Serves: A specification that runs
- Part of: Trame on the command line
- Depends on: Assemble a component, Process

### Ship

Entry point · `Ship` · **held**

- Owner: trame
- Trigger: { type: command, name: ship }
- Parameters: { exitStatus: std/system.ExitStatus, line: conventions.TrameCommands, preparation: commands.Preparation, deliver: commands.Deliver, assembly: engine.Assembly, sdlc: shipping.SdlcEvidence, runPlan: shipping.ShipmentRunPlan, holds: (rule), bundler: architecture.Bundler, programBundle: shipping.ProgramBundle, currentProcess: architecture.Process, events: std/system.NodeEvents, reading: architecture.FileReading, writing: architecture.FileWriting, paths: architecture.Paths, encodings: std/system.NodeEncodings, terminal: architecture.Terminal, sequences: std/algebra.Sequences, counts: std/algebra.Counts, values: std/algebra.ValueTypes, engines: engine.EngineFingerprint, messages: messages.CommandMessages }
- Serves: Ship only what holds
- Part of: Trame on the command line
- Depends on: Trame's commands, Preparation, Deliver, Assembly, Evidence of the SDLC, The plan of a run elsewhere, Ship only what holds, Bundler, The fingerprint of a program, Process, File reading, File writing, Paths, Terminal, The fingerprint of an engine, Messages of the commands

### Show a view

Entry point · `ShowView` · **held**

- Owner: trame
- Trigger: { type: command, name: view }
- Parameters: { exitStatus: std/system.ExitStatus, preparation: commands.Preparation, renderView: commands.RenderView }
- Serves: A specification that runs
- Part of: Trame on the command line
- Depends on: Preparation, Render a view

### Take the snapshot

Entry point · `TakeSnapshot` · **held**

- Owner: trame
- Trigger: { type: command, name: snapshot }
- Parameters: { exitStatus: std/system.ExitStatus, layout: conventions.Layout, preparation: commands.Preparation, machine: engine.MachineOutputs, files: rendering.FileRendering, writing: architecture.FileWriting, paths: architecture.Paths, terminal: architecture.Terminal, messages: messages.CommandMessages }
- Serves: A single source of truth
- Part of: Trame on the command line
- Depends on: Project layout, Preparation, Machine outputs, Rendering of the files, File writing, Paths, Terminal, Messages of the commands

### Test the laws

Entry point · `TestKinds` · **held**

- Owner: trame
- Trigger: { type: command, name: test-kinds }
- Parameters: { exitStatus: std/system.ExitStatus, preparation: commands.Preparation, compiler: engine.Compiler, views: engine.Views, laws: engine.Laws, terminal: architecture.Terminal, layout: text.TerminalText, columns: text.TerminalColumns, cell: text.PaddedCell, messages: messages.CommandMessages }
- Serves: A specification that runs
- Part of: Trame on the command line
- Depends on: Preparation, Compiler, Views, Laws, Terminal, Terminal text, Columns in the terminal, Padded cell, Messages of the commands

### View by its name

Entry point · `ViewByName` · **held**

- Owner: trame
- Trigger: { type: command, name: * }
- Parameters: { line: conventions.TrameCommands, exitStatus: std/system.ExitStatus, preparation: commands.Preparation, renderView: commands.RenderView, compiler: engine.Compiler, views: engine.Views, terminal: architecture.Terminal, texts: std/algebra.Texts, messages: messages.CommandMessages }
- Serves: A specification that runs
- Part of: Trame on the command line
- Depends on: Trame's commands, Preparation, Render a view, Compiler, Views, Terminal, Messages of the commands

### Write the manifest

Entry point · `WriteManifest` · **held**

- Owner: trame
- Trigger: { type: command, name: manifest }
- Parameters: { exitStatus: std/system.ExitStatus, preparation: commands.Preparation, npm: std/system.NpmManifest, layout: conventions.Layout, project: engine.Project, specifiers: std/system.NodeModuleSpecifiers, reading: architecture.FileReading, writing: architecture.FileWriting, trees: architecture.FileTrees, paths: architecture.Paths, encodings: std/system.NodeEncodings, file: std/text.TextFile, json: conventions.JsonFormatting, language: typescript.TypeScript, terminal: architecture.Terminal, messages: messages.CommandMessages, currentProcess: architecture.Process, events: std/system.NodeEvents, line: conventions.TrameCommands, texts: std/algebra.Texts }
- Serves: A single source of truth
- Part of: Trame on the command line
- Depends on: Preparation, Project layout, Project, File reading, File writing, File trees, Paths, JSON formatting, TypeScript, Terminal, Messages of the commands, Process, Trame's commands

## Trame · Conventions

### Names of the documents

Standard · `DocumentIds`

- Maintained by: trame
- Source: Trame, the documents of its views (the engine names them, the page reads them)
- Constants: { ofModule: { value: ., meaning: Between the name of a view and the module it shows }, ofNode: { value: :, meaning: Between the name of a view and the reference of the node it shows } }

### The frozen API

Standard · `FrozenApi`

- Maintained by: trame
- Source: Trame, the prelude (trame/internal.ts: frozen)
- Constants: { name: { value: frozen, meaning: What the prelude exports for frozen programs }, value: { value: value, meaning: The value of a node, read from its declaration (a rule) }, body: { value: body, meaning: The body of a node written inline in its declaration }, data: { value: data, meaning: Sets the data of a node as in force at the date of the assembly, for the rules that read it }, start: { value: start, meaning: Starts the component with its dependencies and its entry points }, limited: { value: limited, meaning: A capability: a realization limited to the methods its consumer uses (since g83) }, title: { value: title, meaning: The title of an entry point, given to start }, fields: { value: fields, meaning: The simple fields of an entry point, which the kind of the component reads }, entry: { value: value, meaning: What an entry point is, once built }, address: { value: address, meaning: What start gives back when the component answers somewhere }, code: { value: code, meaning: What start gives back when the component ends with an exit code } }

### Trame references

Standard · `ReferenceSyntax`

- Maintained by: trame
- Source: Trame, the prelude (trame/kernel.ts: refOf, getPath)
- Constants: { separator: { value: ., meaning: Separates the module from the identifier, and the steps of a path in a field }, library: { value: /, meaning: Separates a library's name from the name of one of its modules, in the graph that imports it }, wholeNode: { value: , meaning: The empty path: the whole node, not one of its fields, refines: { node: std/algebra.Texts, name: empty } } }

### Trame's commands

Standard · `TrameCommands`

- Maintained by: trame
- Source: Trame, its command line (the entry points of commands, in the module commands)
- Constants: { program: { value: trame, meaning: The name a person types }, assemble: { value: assemble, meaning: Assembles a component for an environment }, build: { value: build, meaning: Builds the documents of the graph }, dev: { value: dev, meaning: Follows the graph live in the page }, payload: { value: payload, meaning: Writes the graph compiled at a date, for the page }, export: { value: export, meaning: Writes the page, standalone }, publish: { value: publish, meaning: Freezes the published declarations in the lock }, run: { value: run, meaning: Assembles a component, then runs it }, view: { value: view, meaning: Shows a view }, snapshot: { value: snapshot, meaning: Takes the snapshot of the graph }, testKinds: { value: test-kinds, meaning: Tests the laws of the kinds and of the views }, advance: { value: advance, meaning: The generation in place assembles the described engine and checks it }, audit: { value: audit, meaning: Asks the registry about the packages of the graph, and keeps its answers as evidence }, manifest: { value: manifest, meaning: Writes the packages of the graph, at their versions, and where each library's name leads, into the project's manifest }, release: { value: release, meaning: Freezes a version of the project, a library: its graph, its code and its documents }, deliver: { value: deliver, meaning: Writes the deliveries of the project: a page a browser opens as it is }, ship: { value: ship, meaning: Builds a shipment's artefacts, runs its checks, refuses while an obligation does not hold, deploys it }, evidence: { value: evidence, meaning: Records a piece of evidence a person gives: a check made by hand, a review, a deployment }, doctor: { value: doctor, meaning: Asks the machine whether it runs Trame: files, trees, programs, a server, the time, the registry }, plan: { value: plan, meaning: Says what a build would change against the last one, and writes nothing }, fallback: { value: *, meaning: The command that receives a word naming no other one }, optionPrefix: { value: -, meaning: Opens an option, not a command }, at: { value: --at, meaning: The date at which the graph is compiled }, format: { value: --format, meaning: The format a view is written in }, port: { value: --port, meaning: The port trame dev listens on }, fragment: { value: --fragment, meaning: Writes the page as a fragment, without its document }, env: { value: --env, meaning: The environment a component is assembled for }, all: { value: --all, meaning: Every date, not only the one asked }, history: { value: --history, meaning: With --all, the last days of the project's history too: a version released, evidence given }, accept: { value: --accept, meaning: The differences an advance shows are wanted }, promote: { value: --promote, meaning: The candidate becomes the next generation, with what changes }, migrate: { value: --migrate, meaning: With publish: the published declarations that changed form, not meaning, as the language moved, are published again, with why }, by: { value: --by, meaning: Who gives the evidence: the person it is attributed to }, subject: { value: --subject, meaning: What was reviewed: the key of a row of data }, language: { value: --language, meaning: The language a row was reviewed in }, note: { value: --note, meaning: What the evidence says, in words }, url: { value: --url, meaning: Where to read more, or where an artefact was deployed }, dryRun: { value: --dry-run, meaning: Builds and checks, records the evidence, but does not deploy }, restore: { value: --restore, meaning: Given to the launcher: installs, in the pinned generation's folder, the packages it was frozen with }, passed: { value: passed, meaning: The evidence says yes: the check passed, the review approves, the deployment is done }, failed: { value: failed, meaning: The evidence says no: the check failed, the review asks for changes }, json: { value: json, meaning: A view written as JSON (the intermediate format) }, markdown: { value: md, meaning: A view written as Markdown }, separator: { value:  , meaning: Separates the words of a command, and the names of a list given as one parameter } }

### Trame's environment

Standard · `TrameEnvironment`

- Maintained by: trame
- Source: Trame, the variables of the environment it reads
- Constants: { today: { value: TRAME_TODAY, meaning: The date the engine takes for today (ISO 8601) instead of the clock's: documents that do not change from one day to the next } }

### Default rank

Decision · `DefaultRank`

- Decided by: trame
- Value: 100

### Documentation comment

Decision · `DocComment`

- Decided by: trame
- Value: { titleLines: 1, joint:   }

### JSON formatting

Decision · `JsonFormatting`

- Decided by: trame
- Value: { indentation: 2 }

### Project layout

Decision · `Layout`

- Decided by: trame
- Value: { sources: src, documents: docs, documentExtension: .md, output: out, provision: provision, evidence: evidence, evidenceExtension: .json, wordJoint: -, kinds: kinds, views: views, configuration: trame.json, lock: trame.lock, graph: graph.json, snapshot: snapshot.json, page: trame-page.html, prelude: trame, generations: generations, generation: g, origin: ORIGIN.md, engine: engine.json, differences: differences.diff, languages: languages, manifest: package.json, lockfile: package-lock.json, releases: releases, libraryLinks: .trame, runs: runs, runExtension: .json, launcher: trame.sh }

### The prelude's public API

Decision · `PreludeApi`

- Decided by: trame
- Value: { directory: /trame/, endings: /trame/kernel, /trame/kernel.ts, /trame/kernel.js }

### Names of steps

Decision · `StepNames`

- Decided by: trame
- Value: { joint: _ }

### Order of the view groups

Decision · `ViewGroupOrder`

- Decided by: trame
- Value: module, document, figure, summary, node

## Trame · Delivery

### Style of a delivered page

Syntax element · `DeliveredStyle` · **held**

- Owner: trame
- Section: Delivered page
- Marks: { root: { value: :root, meaning: The root element: its variables hold for the whole page } }
- Parameters: { standard: std/html.Css, rule: html.CssRule, property: html.CustomProperty, file: std/text.TextFile, counts: std/algebra.Counts }
- Examples: { input: { space-sm: 8px, leading: 1.5 }, body { margin: var(--space-sm); }, output: :root { --space-sm: 8px; --leading: 1.5; }
body { margin: var(--space-sm); } }, { input: , body { margin: 0; }, output: body { margin: 0; } }
- Read in: CSS style sheets
- Depends on: Rule, Custom property

## Trame · Documents

### Settings of the documents

Decision · `LanguageSettings`

- Decided by: trame
- Value: { timeline: { before: 14, after: 30 }, catalogue: { examples: 3, frequent: 5, repeated: 40, unrepeated: separator }, assumption: { warnWithin: 60 }, slo: { percentile: 50, 100 } }

### How Mermaid figures are drawn

Decision · `MermaidFigures`

- Decided by: trame
- Value: { idPrefix: n, directions: { layers: down, tree: down, path: right }, strokes: { computed: dottedOpen, inferred: dotted, winner: thick, support: thick, other: solid }, defaultStatus: neutral, history: { dashes: 4 3 }, inactive: { opacity: 0.5 }, gantt: { dateFormat: YYYY-MM-DD, axisFormat: %d.%m, milestones: deadline, review } }

### How a number is written

Decision · `NumberDisplay`

- Decided by: trame
- Value: { base: 10, decimals: 2 }

### Heading levels of Markdown documents

Decision · `TextRendering`

- Decided by: trame
- Value: { titleLevel: 1, sectionLevel: 2 }

### The punctuation is the language's

Architecture decision · `PunctuationOfTheLanguage` · **held**

- Decided by: trame
- Context: The marks were a decision of their own, the same whatever the language, and the kinds and the views wrote their own (a comma between items, a middle dot between parts, a dash for nothing, a semicolon between clauses): another language could not change them.
- Consequences: The Language decision holds the marks of the language with its tag; Punctuation gives those of the language decided to the renderers, the page and, through the engine, to the kinds and the views. Another language is another value of Language, with its catalogs. A sentence keeps its own punctuation: it is in a catalog, written in its language.
- Rejected: A decision of marks keyed by language tag, two places to change for one language, and a tag written twice; The marks in every catalog, the renderers, the page and the views share them: each catalog would repeat them
- Serves: A single source of truth
- Applied by: Punctuation of documents, Language

### Punctuation of documents

Function · `Punctuation` · **held**

- Owner: trame
- Parameters: { language: messages.Language }
- Serves: A single source of truth
- Depends on: Language

### Values with their units

Function · `Units` · **held**

- Owner: trame
- Parameters: { words: messages.UnitWords, measures: std/measures.UnitsOfMeasure, display: documents.NumberDisplay, counts: std/algebra.Counts, values: std/algebra.ValueTypes }
- Serves: A single source of truth
- Depends on: Words of the units, How a number is written

### Visible text

Function · `VisibleText` · **held**

- Owner: trame
- Parameters: { escape: std/ecmascript.UnicodeEscape, invisible: std/text.InvisibleCharacters, ecma: std/ecmascript.EcmaScript, texts: std/algebra.Texts }
- Serves: A single source of truth

## Trame · Engine

### What trame dev serves

Decision · `DevService`

- Decided by: trame
- Value: { page: /, /index.html, bundle: /bundle.json, events: /events, compiling: compiling, ready: bundle, host: localhost, ignored: ~, .swp, .tmp }

### Length of a fingerprint

Decision · `Fingerprint`

- Decided by: trame
- Value: 16

### What tells a project's runs apart

Decision · `KeptRunsScope`

- Decided by: trame
- Value: { skipped: node_modules, .git, .trame, generations, kept: 10000 }
- Rejected: The code each run wires, alone, a scenario reads files besides the code it runs (the example's documents, Poselia's evidence): kept by its code alone, it would say what the files no longer say; The time each file was changed, a build writes again files that do not change, and an advance rewrites the example's documents as they were: every run would be played again

### The days of history a page offers

Decision · `PageHistory`

- Decided by: trame
- Value: { days: 7 }
- Rejected: Every day since the first, a page of Trame's graph carries 3.7 MB a date; each day is a compilation of the export; Fourteen days, the page of Trame's graph came to 15.8 MB, at the edge of what a claude.ai artifact holds, and the export to four minutes; No day of history, the page showed the 16th and the 17th of October, two weeks of work later

### Options of the static reading

Decision · `TypeScriptOptions`

- Decided by: trame
- Value: { types: node }

### The laws are requirements

Architecture decision · `LawsAreRequirements` · **held**

- Decided by: trame
- Context: The laws were written in the engine's code only: the graph named them in a catalog of messages, without saying what each one demands, and nothing checked the checks.
- Consequences: A law reads in the graph as a requirement, refines the goal it serves, and is accepted on cases chosen by hand before it judges any kind. The engine keeps what only it can do: drawing nodes, calling the kind in a sandbox, catching what it throws.
- Rejected: Laws in the engine's code, what a kind must respect, invisible in the graph that describes the engine; A law as a scenario, a scenario plays the whole engine; a law is a judgement on one observation, pure, that a criterion shows
- Serves: Kinds and views that can be trusted
- Applied by: Laws, Views

### The language receives the graph's values

Architecture decision · `TheLanguageReceivesTheGraph` · **held**

- Decided by: trame
- Context: The kinds and the views are the vocabulary nodes are made of, not nodes: the values they wrote (the names of kinds and of fields, zero and the empty text, a comma, the pattern of a date, the file of the lock) belonged to no node, and repeated what the graph already declared.
- Consequences: The engine gives them the graph's values through the graph they read (Lib): its algebraic structures; the lists, punctuation and dates of the decided language; positions in a file and paths of a value; the settings of the documents and the draws of the laws; the layout of a project; the language its declarations are written in; the order of versions; values with their units and texts shown visibly, in the words of the decided language. The names they share with the engine are words of the prelude (KindName, ViewName, EdgeName, PackageReport, LanguageUse, PackageField, ReleaseEdge); a kind names its own fields and edges with keysOf, another kind's with fieldsOf and edgesOf; their words are in their catalogs. A feature of Lib serves the kinds from the generation that brings it on. The catalogue of literals lists what a file of the language writes, and since g53 each such file is an error (ADR "A literal in a kind or a view is an error").
- Rejected: Kinds and views as nodes, they are what nodes are made of: the graph cannot produce its own vocabulary; Each kind importing the nodes it needs, the example's graph is not Trame's: the kinds would read a graph that is not the one they compile
- Serves: A single source of truth
- Applied by: Graph, Views

### Assembly

Function · `Assembly` · **held**

- Owner: trame
- Parameters: { line: conventions.TrameCommands, values: std/algebra.ValueTypes, layout: conventions.Layout, paths: architecture.Paths, wiring: engine.Wiring, prelude: architecture.Prelude, drivers: languages.Drivers, texts: std/algebra.Texts, messages: messages.CompilerMessages }
- Serves: A specification that runs
- Depends on: Trame's commands, Project layout, Paths, Wiring, Prelude, Drivers, Messages of the compiler

### Compilation API

Function · `CompilationApi` · **held**

- Owner: trame
- Parameters: { values: std/algebra.ValueTypes, rank: conventions.DefaultRank, positions: engine.Positions, references: engine.References, prelude: architecture.Prelude, counts: std/algebra.Counts, sequences: std/algebra.Sequences, texts: std/algebra.Texts, punctuation: documents.Punctuation, ids: conventions.DocumentIds, layout: conventions.Layout, uri: std/web.Uri, messages: messages.ViewMessages, pipeline: engine.ShipmentPipeline, units: documents.Units }
- Serves: A specification that runs
- Depends on: Default rank, Positions, References, Prelude, Punctuation of documents, Names of the documents, Project layout, Messages of the views, A shipment's pipeline, Values with their units

### Compiler

Function · `Compiler` · **held**

- Owner: trame
- Parameters: { encodings: std/system.NodeEncodings, specifiers: std/system.NodeModuleSpecifiers, values: std/algebra.ValueTypes, layout: conventions.Layout, severityOrder: (rule), cycles: engine.Cycles, references: engine.References, positions: engine.Positions, loader: architecture.ModuleLoader, reading: architecture.FileReading, paths: architecture.Paths, analysis: engine.StaticAnalysis, project: engine.Project, graph: engine.GraphApi, wiring: engine.Wiring, drivers: languages.Drivers, prelude: architecture.Prelude, counts: std/algebra.Counts, sequences: std/algebra.Sequences, texts: std/algebra.Texts, messages: messages.CompilerMessages, fingerprints: engine.Fingerprints, signatures: architecture.Signatures, engines: engine.EngineFingerprint, runs: architecture.KeptRuns, platform: std/effects.PlatformEffects }
- Serves: A specification that runs
- Depends on: Project layout, Sort problems by severity, Cycles, References, Positions, Module loader, File reading, Paths, Static reading, Project, Graph, Wiring, Drivers, Prelude, Messages of the compiler, Fingerprints, Signatures, The fingerprint of an engine, Runs kept

### Cycles

Function · `Cycles` · **held**

- Owner: trame
- Parameters: { search: std/algorithms.DepthFirstSearch }
- Serves: A specification that runs

### Date bundle

Function · `DateBundle` · **held**

- Owner: trame
- Parameters: { line: conventions.TrameCommands, encodings: std/system.NodeEncodings, events: std/system.NodeEvents, clock: architecture.Clock, currentProcess: architecture.Process, exitStatus: std/system.ExitStatus, texts: std/algebra.Texts, messages: messages.OutputMessages }
- Serves: A specification that runs
- Depends on: Trame's commands, Clock, Process, Messages of the outputs

### trame dev server

Function · `DevServer` · **held**

- Owner: trame
- Parameters: { service: engine.DevService, uri: std/web.Uri, line: conventions.TrameCommands, nodeEvents: std/system.NodeEvents, layout: conventions.Layout, http: std/web.Http, mediaTypes: std/web.MediaTypes, events: std/web.ServerSentEvents, terminal: architecture.Terminal, codeLines: text.CodeLines, file: std/text.TextFile, clock: architecture.Clock, timer: architecture.Timer, debounce: product.DevDebounce, httpServer: architecture.HttpServer, reading: architecture.FileReading, paths: architecture.Paths, project: engine.Project, bundle: engine.DateBundle, differences: engine.Differences, page: page.Page, pageRendering: rendering.PageRendering, counts: std/algebra.Counts, sequences: std/algebra.Sequences, texts: std/algebra.Texts, dates: messages.Dates, language: messages.Language, messages: messages.DevMessages }
- Serves: A specification that runs
- Depends on: What trame dev serves, Trame's commands, Project layout, Terminal, Code lines, Clock, Timer, Debouncing of saves, HTTP server, File reading, Paths, Project, Date bundle, Differences, Page, Rendering in the page, Dates, Language, Messages of trame dev

### Differences

Function · `Differences` · **held**

- Owner: trame
- Parameters: { punctuation: documents.Punctuation, messages: messages.OutputMessages }
- Serves: A specification that runs
- Depends on: Punctuation of documents, Messages of the outputs

### The fingerprint of an engine

Function · `EngineFingerprint` · **held**

- Owner: trame
- Parameters: { layout: conventions.Layout, advancement: generations.Advancement, language: typescript.TypeScript, project: engine.Project, reading: architecture.FileReading, paths: architecture.Paths, hashing: architecture.Hashing, sha256: std/algorithms.Sha256, encodings: std/system.NodeEncodings, fingerprint: engine.Fingerprint, json: conventions.JsonFormatting, sequences: std/algebra.Sequences, texts: std/algebra.Texts, values: std/algebra.ValueTypes }
- Serves: A specification that runs
- Depends on: Project layout, What an advance assembles, TypeScript, Project, File reading, Paths, Hashing, Length of a fingerprint, JSON formatting

### Fingerprints

Function · `Fingerprints` · **held**

- Owner: trame
- Parameters: { hash: std/algorithms.MultiplicativeHash, ecma: std/ecmascript.EcmaScript, values: std/algebra.ValueTypes, texts: std/algebra.Texts }
- Constants: { radix: { value: 16, meaning: Hexadecimal: how a fingerprint is written }, digits: { value: 8, meaning: Eight digits: the 32 bits of the hash, padded on the left }, pad: { value: 0, meaning: What pads them on the left } }
- Serves: A specification that runs

### Pseudo-random generator

Function · `Generator` · **held**

- Owner: trame
- Parameters: { mulberry: std/algorithms.Mulberry32, hash: std/algorithms.MultiplicativeHash, ecma: std/ecmascript.EcmaScript, counts: std/algebra.Counts }
- Serves: A specification that runs

### Graph

Function · `GraphApi` · **held**

- Owner: trame
- Parameters: { prelude: architecture.Prelude, syntax: conventions.ReferenceSyntax, counts: std/algebra.Counts, sequences: std/algebra.Sequences, texts: std/algebra.Texts, messages: messages.CompilerMessages, values: std/algebra.ValueTypes, lists: messages.Lists, dates: messages.Dates, punctuation: documents.Punctuation, positions: engine.Positions, references: engine.References, iso: std/measures.Iso8601, file: std/text.TextFile, settings: documents.LanguageSettings, generator: engine.Generator, structureDraws: product.StructureDraws, layout: conventions.Layout, typescript: typescript.TypeScript, versions: packages.VersionOrder, units: documents.Units, visible: documents.VisibleText, fingerprints: engine.Fingerprints }
- Serves: A specification that runs
- Depends on: Prelude, Trame references, Messages of the compiler, Lists, Dates, Punctuation of documents, Positions, References, Settings of the documents, Pseudo-random generator, Values drawn by the laws of a structure, Project layout, TypeScript, Order of versions, Values with their units, Visible text, Fingerprints

### Laws

Function · `Laws` · **held**

- Owner: trame
- Parameters: { kept: architecture.KeptResults, drivers: languages.Drivers, preludeApi: conventions.PreludeApi, specifiers: std/system.NodeModuleSpecifiers, layout: conventions.Layout, samples: product.SampleCount, claimSets: product.ClaimSets, generator: engine.Generator, owners: product.SampledOwners, sampled: product.SampledValues, iso: std/measures.Iso8601, references: engine.References, reading: architecture.FileReading, paths: architecture.Paths, project: engine.Project, graph: engine.GraphApi, prelude: architecture.Prelude, counts: std/algebra.Counts, sequences: std/algebra.Sequences, texts: std/algebra.Texts, messages: messages.LawMessages, declaration: (rule), answers: (rule), owned: (rule), evidence: (rule), same: (rule), orderFree: (rule), closed: (rule) }
- Serves: A specification that runs
- Depends on: Results kept, Drivers, The prelude's public API, Project layout, Nodes drawn per kind, Claim sets, Pseudo-random generator, Owners drawn at random, Values drawn by the laws, References, File reading, Paths, Project, Graph, Prelude, Messages of the laws, Complete declaration, Answers without crashing, A blocking hole has an owner, Without evidence, the status is unknown, Same input, same answer, The resolution does not depend on the order, The resolution returns only what it is given

### Lock

Function · `Lock` · **held**

- Owner: trame
- Parameters: { encodings: std/system.NodeEncodings, sha256: std/algorithms.Sha256, fingerprint: engine.Fingerprint, layout: conventions.Layout, json: conventions.JsonFormatting, textFile: std/text.TextFile, references: engine.References, codeSpan: markdown.CodeSpan, hashing: architecture.Hashing, reading: architecture.FileReading, paths: architecture.Paths, prelude: architecture.Prelude, sequences: std/algebra.Sequences, messages: messages.OutputMessages }
- Serves: A single source of truth
- Depends on: Length of a fingerprint, Project layout, JSON formatting, References, Code span, Hashing, File reading, Paths, Prelude, Messages of the outputs

### Machine outputs

Function · `MachineOutputs` · **held**

- Owner: trame
- Parameters: { values: std/algebra.ValueTypes, json: conventions.JsonFormatting, positions: engine.Positions, prelude: architecture.Prelude, counts: std/algebra.Counts, messages: messages.OutputMessages }
- Serves: A single source of truth
- Depends on: JSON formatting, Positions, Prelude, Messages of the outputs

### Payload

Function · `PayloadBuilder` · **held**

- Owner: trame
- Parameters: { layout: conventions.Layout, candidateDates: product.CandidateDates, history: engine.PageHistory, iso: std/measures.Iso8601, clock: architecture.Clock, machine: engine.MachineOutputs, views: engine.Views, language: messages.Language, texts: std/algebra.Texts, values: std/algebra.ValueTypes, counts: std/algebra.Counts, sequences: std/algebra.Sequences }
- Serves: A specification that runs
- Depends on: Project layout, Candidate dates, The days of history a page offers, Clock, Machine outputs, Views, Language

### Positions

Function · `Positions` · **held**

- Owner: trame
- Parameters: { gnu: std/text.GnuPositions, typeScriptApi: standards.TypeScriptApi }
- Serves: A specification that runs
- Depends on: TypeScript compiler API

### Project

Function · `Project` · **held**

- Owner: trame
- Parameters: { encodings: std/system.NodeEncodings, values: std/algebra.ValueTypes, layout: conventions.Layout, reading: architecture.FileReading, paths: architecture.Paths, pin: generations.EnginePin }
- Serves: A specification that runs
- Depends on: Project layout, File reading, Paths, The engine a project runs

### The runs of a project

Function · `ProjectRuns` · **held**

- Owner: trame
- Parameters: { reading: architecture.FileReading, paths: architecture.Paths, hashing: architecture.Hashing, sha256: std/algorithms.Sha256, encodings: std/system.NodeEncodings, scope: engine.KeptRunsScope, store: architecture.RunStore }
- Serves: A specification that runs
- Implements: Runs kept
- Depends on: File reading, Paths, Hashing, What tells a project's runs apart, Where runs are kept

### References

Function · `References` · **held**

- Owner: trame
- Parameters: { syntax: conventions.ReferenceSyntax, libraryOf: (rule) }
- Serves: A specification that runs
- Depends on: Trame references, What belongs to a library

### A shipment's pipeline

Function · `ShipmentPipeline` · **held**

- Owner: trame
- Parameters: { sequences: std/algebra.Sequences, values: std/algebra.ValueTypes, messages: messages.CommandMessages }
- Serves: A specification that runs
- Depends on: Messages of the commands

### Static reading

Function · `StaticAnalysis` · **held**

- Owner: trame
- Parameters: { specifiers: std/system.NodeModuleSpecifiers, syntax: typescript.TypeScriptSyntax, references: engine.References, file: std/text.TextFile, options: engine.TypeScriptOptions, ts: architecture.TypeScriptCompiler, kept: architecture.KeptResults, runs: architecture.RunStore, hashing: architecture.Hashing, sha256: std/algorithms.Sha256, encodings: std/system.NodeEncodings, paths: architecture.Paths, positions: engine.Positions, docComment: conventions.DocComment, counts: std/algebra.Counts, sequences: std/algebra.Sequences, texts: std/algebra.Texts, messages: messages.CompilerMessages, textAsCode: std/ecmascript.TextAsCode, libraries: typescript.TypeScriptLibraries, prelude: conventions.PreludeApi }
- Serves: A specification that runs
- Depends on: The syntax of the programs Trame writes, References, Options of the static reading, TypeScript compiler, Results kept, Where runs are kept, Hashing, Paths, Positions, Documentation comment, Messages of the compiler, TypeScript's libraries of types, The prelude's public API

### Views

Function · `Views` · **held**

- Owner: trame
- Parameters: { drivers: languages.Drivers, rank: conventions.DefaultRank, groupOrder: conventions.ViewGroupOrder, ids: conventions.DocumentIds, uri: std/web.Uri, layout: conventions.Layout, loader: architecture.ModuleLoader, reading: architecture.FileReading, paths: architecture.Paths, prelude: architecture.Prelude, project: engine.Project, output: messages.OutputMessages, messages: messages.ViewMessages, declaration: (rule), answers: (rule), same: (rule), serial: (rule) }
- Serves: A specification that runs
- Depends on: Drivers, Default rank, Order of the view groups, Names of the documents, Project layout, Module loader, File reading, Paths, Prelude, Project, Messages of the outputs, Messages of the views, Complete declaration of a view, Answers without crashing, Same input, same answer, Produces only the intermediate format

### Wiring

Function · `Wiring` · **held**

- Owner: trame
- Parameters: { steps: conventions.StepNames, references: conventions.ReferenceSyntax, values: std/algebra.ValueTypes, layout: conventions.Layout, paths: architecture.Paths, prelude: architecture.Prelude, drivers: languages.Drivers, sequences: std/algebra.Sequences, texts: std/algebra.Texts, messages: messages.CompilerMessages }
- Serves: A specification that runs
- Depends on: Names of steps, Trame references, Project layout, Paths, Prelude, Drivers, Messages of the compiler

## Trame · Generations

### Accept a candidate

Requirement · `AcceptCandidate` · **held**

- Owner: trame
- Refines: A specification that runs

### What an advance assembles

Decision · `Advancement`

- Decided by: trame
- Value: { component: TrameCli, environment: Local, page: { component: PageApp, environment: Browser }, terminal: terminal.txt, saves: { reference: reference, candidate: candidate, second: second }, shown: 12 }

### The engine a project runs

Decision · `EnginePin`

- Decided by: trame
- Value: { key: engine }
- Rejected: The last generation, whatever it is, a project could neither stay on a generation nor go back to one; An npm package per generation, a registry to publish to, and a version beside the generation's number, for one project today; The candidate, run as it is, an engine that no advance accepted

### Generations that share the language

Decision · `LanguageSharing`

- Decided by: trame
- Value: { oldest: 1, newest: 1, view: index }
- Rejected: A copy of the language in every generation, a generation could then compile only its own graph: it would share no registry with today's projects; Replaying every generation, a minute each, at every advance

### Releases of the engine

Decision · `Releases`

- Decided by: trame
- Value: { module: releases, kind: release, prefix: G, owner: trame }
- Rejected: The history in the README, written by hand, and it drifted from the generations; A file of records beside the generations, data the graph would not hold, and no view could show

### What a candidate needs to be accepted

Acceptance criteria · `AcceptCandidateCriteria` · **held**

- Owner: trame
- Accepts: Accept a candidate

### Records of the releases

Function · `ReleaseRecords` · **held**

- Owner: trame
- Parameters: { releases: generations.Releases, syntax: typescript.TypeScriptSyntax, references: conventions.ReferenceSyntax, positions: std/text.GnuPositions, doc: typescript.DocBlock, title: typescript.ModuleTitle, comment: typescript.LineComment, imports: typescript.NamedImport, exported: typescript.ExportDeclaration, constant: typescript.ConstDeclaration, call: typescript.Call, object: typescript.ObjectBlock, property: typescript.Property, text: typescript.StringLiteral, list: typescript.InlineArray, texts: std/algebra.Texts, values: std/algebra.ValueTypes }
- Serves: A specification that runs
- Depends on: Releases of the engine, The syntax of the programs Trame writes, Trame references, Documentation comment, Title of a module, Comment, Import of names, Export, Constant, Call, Object on several lines, Property, Text, List on one line

## Trame · HTML and CSS

### Attribute presence

Syntax element · `AttributePresence` · **held**

- Owner: trame
- Section: Selectors Level 4, § 6.1 Attribute presence and value selectors
- Address: https://www.w3.org/TR/selectors-4/#attribute-representation
- Marks: { openBracket: { value: [, meaning: Opens an attribute selector }, closeBracket: { value: ], meaning: Closes it } }
- Parameters: { standard: std/html.Css }
- Examples: { input: data-ref, output: [data-ref] }
- Read as: { before: , after:  {} }
- Read in: CSS style sheets

### Attribute selector

Syntax element · `AttributeSelector` · **held**

- Owner: trame
- Section: Selectors Level 4, § 6.1 Attribute presence and value selectors
- Address: https://www.w3.org/TR/selectors-4/#attribute-representation
- Marks: { openBracket: { value: [, meaning: Opens an attribute selector }, closeBracket: { value: ], meaning: Closes it }, equals: { value: =, meaning: The attribute has exactly this value }, quote: { value: ", meaning: Surrounds the value } }
- Parameters: { standard: std/html.Css }
- Examples: { input: data-theme, dark, output: [data-theme="dark"] }
- Read as: { before: , after:  {} }
- Read in: CSS style sheets

### Class selector

Syntax element · `ClassSelector` · **held**

- Owner: trame
- Section: Selectors Level 4, § 6.6 Class selectors
- Address: https://www.w3.org/TR/selectors-4/#class-html
- Marks: { dot: { value: ., meaning: Begins a class selector } }
- Parameters: { standard: std/html.Css }
- Examples: { input: st-held, output: .st-held }
- Read as: { before: , after:  {} }
- Read in: CSS style sheets

### Declaration

Syntax element · `CssDeclaration` · **held**

- Owner: trame
- Section: 5.4.6 Consume a declaration
- Address: https://www.w3.org/TR/css-syntax-3/#consume-declaration
- Marks: {  }
- Parameters: { standard: std/html.Css }
- Examples: { input: color-scheme, dark, output: color-scheme: dark; }
- Read as: { before: a { , after:  } }
- Read in: CSS style sheets

### Rule

Syntax element · `CssRule` · **held**

- Owner: trame
- Section: 5.4.3 Consume a qualified rule
- Address: https://www.w3.org/TR/css-syntax-3/#consume-qualified-rule
- Marks: {  }
- Parameters: { standard: std/html.Css }
- Examples: { input: body, margin: 0;, output: body { margin: 0; } }
- Read in: CSS style sheets

### Variable

Syntax element · `CssVariable` · **held**

- Owner: trame
- Section: CSS Custom Properties for Cascading Variables Level 1, § 3 Using cascading variables: the var() notation
- Address: https://www.w3.org/TR/css-variables-1/#using-variables
- Marks: { notation: { value: var, meaning: The function that reads a custom property }, dashes: { value: --, meaning: Begins the name of a custom property } }
- Parameters: { standard: std/html.Css }
- Examples: { input: accent, output: var(--accent) }
- Read as: { before: a { color: , after: ; } }
- Read in: CSS style sheets

### Custom property

Syntax element · `CustomProperty` · **held**

- Owner: trame
- Section: CSS Custom Properties for Cascading Variables Level 1, § 2 Defining custom properties
- Address: https://www.w3.org/TR/css-variables-1/#defining-variables
- Marks: { dashes: { value: --, meaning: Begins the name of a custom property } }
- Parameters: { standard: std/html.Css, declaration: html.CssDeclaration }
- Examples: { input: bg, #f3f5f6, output: --bg: #f3f5f6; }
- Read as: { before: :root { , after:  } }
- Read in: CSS style sheets
- Depends on: Declaration

### DOCTYPE

Syntax element · `Doctype` · **held**

- Owner: trame
- Section: 13.1.1 The DOCTYPE
- Address: https://html.spec.whatwg.org/multipage/syntax.html#the-doctype
- Marks: { doctype: { value: <!doctype html>, meaning: The DOCTYPE, in lower case, which HTML allows } }
- Parameters: { standard: std/html.Html }
- Examples: { input: , output: <!doctype html> }
- Read in: HTML markup

### Escaped text

Syntax element · `EscapedText` · **held**

- Owner: trame
- Section: 13.1.4 Character references
- Address: https://html.spec.whatwg.org/multipage/syntax.html#character-references
- Marks: { ampersand: { value: &, meaning: Opens a character reference }, quotationMark: { value: ", meaning: Closes the value of an attribute }, amp: { value: &amp;, meaning: The reference written for an ampersand }, lt: { value: &lt;, meaning: The reference written for a less-than sign }, gt: { value: &gt;, meaning: The reference written for a greater-than sign }, quot: { value: &quot;, meaning: The reference written for a quotation mark } }
- Parameters: { standard: std/html.Html }
- Examples: { input: a < b & "c" > d, output: a &lt; b &amp; &quot;c&quot; &gt; d }, { input: &lt;, output: &amp;lt; }
- Read as: { before: <p title=", after: "></p> }
- Read in: HTML markup

### Attributes

Syntax element · `HtmlAttributes` · **held**

- Owner: trame
- Section: 13.1.2.3 Attributes
- Address: https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
- Marks: { equals: { value: =, meaning: Separates the name of an attribute from its value }, quote: { value: ", meaning: Surrounds the value of an attribute } }
- Parameters: { standard: std/html.Html, texts: std/algebra.Texts }
- Examples: { input: { id: Goal }, output:  id="Goal" }, { input: { class: banner, hidden: true }, output:  class="banner" hidden }
- Read as: { before: <a, after: > }
- Read in: HTML markup

### Element over several lines

Syntax element · `HtmlBlock` · **held**

- Owner: trame
- Section: 13.1.2 Elements
- Address: https://html.spec.whatwg.org/multipage/syntax.html#elements-2
- Marks: { indent: { value:   , meaning: Two spaces per level of nesting } }
- Parameters: { standard: std/html.Html, startTag: html.HtmlStartTag, endTag: html.HtmlEndTag }
- Examples: { input: main, {  }, <article class="doc" id="doc"></article>, output: <main>,   <article class="doc" id="doc"></article>, </main> }
- Read in: HTML markup
- Depends on: Start tag, End tag

### HTML element

Syntax element · `HtmlElement` · **held**

- Owner: trame
- Section: 13.1.2 Elements
- Address: https://html.spec.whatwg.org/multipage/syntax.html#elements-2
- Marks: {  }
- Parameters: { standard: std/html.Html, startTag: html.HtmlStartTag, endTag: html.HtmlEndTag }
- Examples: { input: summary, {  }, The code, output: <summary>The code</summary> }
- Read in: HTML markup
- Depends on: Start tag, End tag

### End tag

Syntax element · `HtmlEndTag` · **held**

- Owner: trame
- Section: 13.1.2.2 End tags
- Address: https://html.spec.whatwg.org/multipage/syntax.html#end-tags
- Marks: { slash: { value: /, meaning: After the less-than sign: the tag closes the element } }
- Parameters: { standard: std/html.Html }
- Examples: { input: details, output: </details> }
- Read as: { before: <details>, after:  }
- Read in: HTML markup

### Heading of a rank

Syntax element · `HtmlHeading` · **held**

- Owner: trame
- Section: 4.3.6 The h1, h2, h3, h4, h5, and h6 elements
- Address: https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements
- Marks: { prefix: { value: h, meaning: Before the rank of a heading: the name of its element } }
- Parameters: { standard: std/html.Html, element: html.HtmlElement }
- Examples: { input: 2, {  }, Cards, output: <h2>Cards</h2> }
- Read in: HTML markup
- Depends on: HTML element

### Start tag

Syntax element · `HtmlStartTag` · **held**

- Owner: trame
- Section: 13.1.2.1 Start tags
- Address: https://html.spec.whatwg.org/multipage/syntax.html#start-tags
- Marks: {  }
- Parameters: { standard: std/html.Html, attributes: html.HtmlAttributes }
- Examples: { input: a, { id: Goal }, output: <a id="Goal"> }
- Read in: HTML markup
- Depends on: Attributes

### JSON in a script

Syntax element · `JsonInScript` · **held**

- Owner: trame
- Section: 4.12.1.3 Restrictions for contents of script elements
- Address: https://html.spec.whatwg.org/multipage/scripting.html#restrictions-for-contents-of-script-elements
- Marks: { escape: { value: \u003c, meaning: The less-than sign, as a JSON escape (RFC 8259, § 7) } }
- Parameters: { standard: std/html.Html }
- Examples: { input: { title: </script> }, output: {"title":"\u003c/script>"} }
- Read as: { before: x = , after:  }
- Read in: TypeScript

### Media feature

Syntax element · `MediaFeature` · **held**

- Owner: trame
- Section: Media Queries Level 4, § 2.4 Media features
- Address: https://www.w3.org/TR/mediaqueries-4/#mq-features
- Marks: {  }
- Parameters: { standard: std/html.Css }
- Examples: { input: prefers-color-scheme, dark, output: (prefers-color-scheme: dark) }
- Read as: { before: @media , after:  {} }
- Read in: CSS style sheets

### Media rule

Syntax element · `MediaRule` · **held**

- Owner: trame
- Section: CSS Conditional Rules Level 3, § 6 Media-specific style sheets: the @media rule
- Address: https://www.w3.org/TR/css-conditional-3/#at-media
- Marks: { keyword: { value: @media, meaning: Opens a media rule } }
- Parameters: { standard: std/html.Css }
- Examples: { input: (prefers-color-scheme: dark), body { margin: 0; }, output: @media (prefers-color-scheme: dark) { body { margin: 0; } } }
- Read in: CSS style sheets

### Negation

Syntax element · `NegationSelector` · **held**

- Owner: trame
- Section: Selectors Level 4, § 4.3 The negation pseudo-class
- Address: https://www.w3.org/TR/selectors-4/#negation
- Marks: { pseudoClass: { value: :not, meaning: The negation pseudo-class } }
- Parameters: { standard: std/html.Css }
- Examples: { input: [data-theme="light"], output: :not([data-theme="light"]) }
- Read as: { before: , after:  {} }
- Read in: CSS style sheets

### Path data

Syntax element · `PathData` · **held**

- Owner: trame
- Section: 9.3 Path data
- Address: https://www.w3.org/TR/SVG2/paths.html#PathData
- Marks: { moveTo: { value: M, meaning: Starts the path at a point }, curveTo: { value: C, meaning: A cubic curve: two control points, then its end }, lineTo: { value: L, meaning: A straight line to a point }, close: { value: z, meaning: Closes the path, back to its start } }
- Parameters: { standard: std/html.Svg }
- Examples: { input: 89, 60, { via: 89, 91, 111, 91, to: 111, 122 }, false, output: M89,60 C89,91 111,91 111,122 }, { input: 5, 8, { to: 12, 16 }, { to: 5, 24 }, true, output: M5,8 L12,16 L5,24 z }

### Script

Syntax element · `ScriptElement` · **held**

- Owner: trame
- Section: 4.12.1.3 Restrictions for contents of script elements
- Address: https://html.spec.whatwg.org/multipage/scripting.html#restrictions-for-contents-of-script-elements
- Marks: { tag: { value: script, meaning: The element of code run by the page }, endTagOpen: { value: </script, meaning: What would end the element in its text }, escaped: { value: <\/script, meaning: The same text for the code, which no longer ends the element }, everyCase: { value: gi, meaning: Every occurrence, whatever its case }, commentOpen: { value: <!--, meaning: What would let a later start tag of a script swallow the end of the element }, commentEscaped: { value: <\!--, meaning: The same text for the code: a backslash before a character that needs none } }
- Parameters: { standard: std/html.Html, element: html.HtmlElement }
- Examples: { input: const s = "</SCRIPT>", output: <script>const s = "<\/script>"</script> }, { input: const s = "<!--", output: <script>const s = "<\!--"</script> }
- Read in: HTML markup
- Depends on: HTML element

### Selector list

Syntax element · `SelectorList` · **held**

- Owner: trame
- Section: Selectors Level 4, § 4.1 Selector lists
- Address: https://www.w3.org/TR/selectors-4/#grouping
- Marks: {  }
- Parameters: { standard: std/html.Css }
- Examples: { input: [data-ref], [data-doc], output: [data-ref], [data-doc] }
- Read as: { before: , after:  {} }
- Read in: CSS style sheets

### Self-closing tag

Syntax element · `SelfClosingTag` · **held**

- Owner: trame
- Section: 13.1.2.1 Start tags (the self-closing flag of foreign elements)
- Address: https://html.spec.whatwg.org/multipage/syntax.html#start-tags
- Marks: { slash: { value: /, meaning: Before the greater-than sign: the element has no content and no end tag } }
- Parameters: { standard: std/html.Html, attributes: html.HtmlAttributes }
- Examples: { input: path, { d: M7 5v16 }, output: <path d="M7 5v16"/> }
- Read in: HTML markup
- Depends on: Attributes

### CSS style sheets

Language · `CssStyleSheets` · **held**

- Owner: trame
- Named in bodies: css
- Grammar: { module: tree-sitter-css/tree-sitter-css.wasm }
- Extensions: .css
- Queries: { values: { value: 
(integer_value) @literal.number
(float_value) @literal.number
(color_value) @literal.text
(string_value) @literal.text
((plain_value) @literal.text (#match? @literal.text "[0-9]") (#not-match? @literal.text "^--")), meaning: The values written in a style sheet: a number with its unit, a colour, a text; a plain value that holds a digit, which is the rest of a number the grammar cut (12.5px/1.4 reads 12.5, then px/1.4), a variable aside }, parts: { value: 
(color_value) @literal.part
((plain_value) @literal.part (#match? @literal.part "[0-9]") (#not-match? @literal.part "^--"))
(string_value (string_content) @literal.part)
(string_value (escape_sequence) @literal.escape), meaning: What a text is made of: a colour, a plain value as written, the content of a quoted text and its escape sequences }, names: { value: 
(attribute_selector (string_value) @name), meaning: What is written like a value but names something: the value an attribute selector matches }, declarations: { value: 
((call_expression (function_name) @_function (arguments . (plain_value) @parameter)) (#eq? @_function "var"))
((declaration (property_name) @output) (#match? @output "^--")), meaning: What a sheet receives and gives: each variable it uses (var(--x)), each variable it declares (--x: …) }, globals: { value: 
((call_expression (function_name) @global) (#eq? @global "url"))
(import_statement "@import" @global), meaning: What reaches outside the sheet: a resource loaded by its address, another sheet imported }, roles: { value: 
(declaration (_) @role.property)
(call_expression (function_name) @callee (arguments (_) @role.argument))
(call_expression (arguments (binary_expression (_) @role.arithmetic)))
(feature_query (_) @role.condition), meaning: The places that give a literal its role (syntax.LiteralRoles): the value of a property, an argument of a function, an operand of a calculation, a condition of a media query } }
- Escape sequences: { mark: \, single: {  }, numeric: { prefix: , radix: 16, most: 6, trailing: 
,  , 	, 
, ,  } }
- Examples: { code: .a { margin: 0 -2px; color: #fff; }, literals: 0, -2px, #fff, values: 0, -2px, #fff, roles: property value, property value, property value }, { code: .b[aria-pressed="true"] { top: calc(env(x, 0px) + 20px); }, literals: 0px, 20px, roles: argument of env, arithmetic }, { code: .c { font: 12.5px/1.4 var(--font, "A \"B\" \2014 C"); width: var(--w); }, literals: 12.5, px/1.4, "A \"B\" \2014 C", values: 12.5, px/1.4, A "B" —C }, { code: @import url(theme.css);
@media (max-width: 920px) { .d { flex: none; } }
, literals: 920px, roles: condition, globals: @import, url }, { code: .e { --gap: var(--space-md); margin: var(--gap) var(--edge, var(--gap)); }, literals: , parameters: --space-md, --gap, --edge, --gap, outputs: --gap }
- Queries written in: tree-sitter queries
- Read by: Syntax reader
- Uses: Grammar of CSS

### HTML markup

Language · `HtmlMarkup` · **held**

- Owner: trame
- Named in bodies: html
- Grammar: { module: tree-sitter-html/tree-sitter-html.wasm }
- Extensions: .html
- Queries: { values: { value: 
(quoted_attribute_value) @literal.text
(attribute (attribute_value) @literal.text)
(text) @literal.text
(entity) @literal.text, meaning: The values written in markup: the value of an attribute, quoted or not; a text; a character reference on its own, between two texts }, parts: { value: 
(attribute_value) @literal.part
(text) @literal.part
(entity) @literal.escape, meaning: What a value is made of: an attribute's value as written (its character references included: the grammar does not catch them apart there), a text, a character reference }, names: { value: 
((attribute (attribute_name) @_name) @name (#any-of? @_name "class" "id" "for" "aria-labelledby" "aria-describedby" "aria-controls")), meaning: What is written like a value but names something: a class, an identifier, an attribute that refers to an identifier }, roles: { value: 
(attribute (quoted_attribute_value) @role.attribute)
(attribute (attribute_value) @role.attribute)
(element (text) @role.content)
(element (entity) @role.content), meaning: The places that give a literal its role (syntax.LiteralRoles): the value of an attribute, the content of an element } }
- Escape sequences: { mark: &, single: { amp;: &, lt;: <, gt;: >, quot;: ", apos;: ', nbsp;:   }, numeric: { prefix: #x, radix: 16, close: ; }, { prefix: #X, radix: 16, close: ; }, { prefix: #, radix: 10, close: ; }, keepUnknown: true }
- Examples: { code: <a id="Goal" href="#Goal">Goal</a>, literals: "#Goal", Goal, values: #Goal, Goal, roles: attribute value, content of an element }, { code: <p title="a &amp; b &eacute;">T &lt; U &#x2192; V</p>, literals: "a &amp; b &eacute;", T, &lt;, U, &#x2192;, V, values: a & b &eacute;, T, <, U, →, V }, { code: <button class="chip" aria-pressed="true" hidden>x</button>, literals: "true", x, roles: attribute value, content of an element }, { code: <!DOCTYPE html>
<style>.a { margin: 0 }</style>
<script>const x = 1</script>
, literals:  }
- Queries written in: tree-sitter queries
- Read by: Syntax reader
- Uses: Grammar of HTML

## Trame · Languages

### What a writer writes is read back before it is written

Architecture decision · `ReadBackWhatIsWritten` · **held**

- Decided by: trame
- Context: A writer composes syntax elements whose examples are checked one by one; a program is more than its pieces, and a value badly escaped changes meaning silently.
- Consequences: Each language has its module (how Trame reads it, what Trame writes in it); languages binds them in Drivers, which reads back every file a writer gives before it reaches the disk. The page reads back its style and itself before it is given; a browser forgives what it cannot parse, so no one would see the fault.
- Rejected: Trusting the writer, a broken program would be found when it runs, an escaped value perhaps never
- Serves: A specification that runs
- Applied by: Drivers, Page

### Drivers

Function · `Drivers` · **held**

- Owner: trame
- Parameters: { reader: syntax.SyntaxReader, checks: syntax.BodyChecks, graph: typescript.TypeScript, sheets: html.CssStyleSheets, typeScriptWriter: typescript.TypeScriptWriter, terraform: terraform.Terraform, modules: terraform.TerraformModules, terraformWriter: terraform.TerraformWriter, loader: architecture.ModuleLoader, reading: architecture.FileReading, paths: architecture.Paths, values: std/algebra.ValueTypes, gnu: std/text.GnuPositions, messages: messages.DriverMessages }
- Serves: A specification that runs
- Depends on: Syntax reader, Checks of a body, TypeScript, CSS style sheets, TypeScript writer, Terraform, Terraform modules, Terraform writer, Module loader, File reading, Paths, Messages of the drivers

## Trame · Laws

### Kinds and views that can be trusted

Goal · `TrustedExtensions`

- Owner: trame

### Answers without crashing

Requirement · `AnswersWithoutCrashing` · **held**

- Owner: trame
- Refines: Kinds and views that can be trusted

### A blocking hole has an owner

Requirement · `BlockingHoleHasOwner` · **held**

- Owner: trame
- Refines: Kinds and views that can be trusted

### The resolution returns only what it is given

Requirement · `ClosedResolution` · **held**

- Owner: trame
- Refines: Kinds and views that can be trusted

### Complete declaration

Requirement · `CompleteDeclaration` · **held**

- Owner: trame
- Parameters: { counts: std/algebra.Counts }
- Refines: Kinds and views that can be trusted

### Complete declaration of a view

Requirement · `CompleteViewDeclaration` · **held**

- Owner: trame
- Refines: Kinds and views that can be trusted

### Produces only the intermediate format

Requirement · `IntermediateFormatOnly` · **held**

- Owner: trame
- Refines: Kinds and views that can be trusted

### The resolution does not depend on the order

Requirement · `OrderFree` · **held**

- Owner: trame
- Parameters: { same: (rule) }
- Refines: Same input, same answer
- Depends on: Same input, same answer

### Same input, same answer

Requirement · `SameInputSameAnswer` · **held**

- Owner: trame
- Parameters: { counts: std/algebra.Counts }
- Refines: Kinds and views that can be trusted

### Without evidence, the status is unknown

Requirement · `UnknownWithoutEvidence` · **held**

- Owner: trame
- Refines: Kinds and views that can be trusted

### Criteria of the answers without crashing

Acceptance criteria · `AnswersWithoutCrashingCriteria` · **held**

- Owner: trame
- Accepts: Answers without crashing

### Criteria of the owner of a blocking hole

Acceptance criteria · `BlockingHoleHasOwnerCriteria` · **held**

- Owner: trame
- Accepts: A blocking hole has an owner

### Criteria of the closed resolution

Acceptance criteria · `ClosedResolutionCriteria` · **held**

- Owner: trame
- Accepts: The resolution returns only what it is given

### Criteria of the complete declaration

Acceptance criteria · `CompleteDeclarationCriteria` · **held**

- Owner: trame
- Accepts: Complete declaration

### Criteria of the declaration of a view

Acceptance criteria · `CompleteViewDeclarationCriteria` · **held**

- Owner: trame
- Accepts: Complete declaration of a view

### Criteria of the intermediate format

Acceptance criteria · `IntermediateFormatOnlyCriteria` · **held**

- Owner: trame
- Accepts: Produces only the intermediate format

### Criteria of the resolution in any order

Acceptance criteria · `OrderFreeCriteria` · **held**

- Owner: trame
- Accepts: The resolution does not depend on the order

### Criteria of the same answer

Acceptance criteria · `SameInputSameAnswerCriteria` · **held**

- Owner: trame
- Accepts: Same input, same answer

### Criteria of the status without evidence

Acceptance criteria · `UnknownWithoutEvidenceCriteria` · **held**

- Owner: trame
- Accepts: Without evidence, the status is unknown

## Trame · Libraries

### What belongs to a library

Requirement · `LibraryOfAModule` · **held**

- Owner: trame
- Parameters: { counts: std/algebra.Counts }
- Refines: What is generic is written once

### A release is settled

Requirement · `ReleaseIsSettled` · **held**

- Owner: trame
- Parameters: { counts: std/algebra.Counts }
- Refines: What is generic is written once

### Names of a library's releases

Decision · `LibraryReleaseNames`

- Decided by: trame
- Value: { prefix: R, joint: _ }

### Criteria of what belongs to a library

Acceptance criteria · `LibraryOfAModuleCriteria` · **held**

- Owner: trame
- Accepts: What belongs to a library

### Criteria of a settled release

Acceptance criteria · `ReleaseIsSettledCriteria` · **held**

- Owner: trame
- Accepts: A release is settled

## Trame · Markdown

### CommonMark

Standard · `CommonMark`

- Maintained by: trame
- Source: CommonMark Spec 0.31.2 (2024)
- Address: https://spec.commonmark.org/0.31.2/
- Constants: { endOfLine: { value: 
, meaning: Ends a line (§ 2.1: a line feed, U+000A) }, space: { value:  , meaning: Separates a mark from what it introduces (§ 2.1: U+0020) }, backtick: { value: `, meaning: Delimits code, inline or in a block (§ 4.5, § 6.1) }, asterisk: { value: *, meaning: Delimits emphasis (§ 6.2) } }

### GitHub Flavored Markdown

Standard · `Gfm`

- Maintained by: trame
- Source: GitHub Flavored Markdown Spec 0.29-gfm (2019)
- Address: https://github.github.com/gfm/
- Constants: { pipe: { value: |, meaning: Separates the cells of a table, and borders each row (§ 4.10) } }

### Anchor

Syntax element · `Anchor` · **held**

- Owner: trame
- Section: 4.5.1 The a element; 3.2.6 The id attribute
- Address: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element
- Marks: { tag: { value: a, meaning: The link element, here without content }, attribute: { value: id, meaning: The identifier that the fragment of an address targets } }
- Parameters: { standard: std/html.Html, element: html.HtmlElement, texts: std/algebra.Texts }
- Examples: { input: Goal, output: <a id="Goal"></a> }
- Read in: HTML markup
- Depends on: HTML element

### Backtick string

Syntax element · `BacktickString` · **held**

- Owner: trame
- Section: 6.1 Code spans (backtick string); 4.5 Fenced code blocks
- Address: https://spec.commonmark.org/0.31.2/#backtick-string
- Marks: {  }
- Parameters: { standard: markdown.CommonMark, counts: std/algebra.Counts }
- Examples: { input: trame.json, 1, output: ` }, { input: a`b, 1, output: `` }, { input: const x = 1, 3, output: ``` }, { input: ```ts
x
```, 3, output: ```` }
- Defined by: CommonMark
- Depends on: CommonMark

### Blank line

Syntax element · `BlankLine` · **held**

- Owner: trame
- Section: 4.9 Blank lines
- Address: https://spec.commonmark.org/0.31.2/#blank-lines
- Marks: { blank: { value: , meaning: A line containing no characters, refines: { node: std/algebra.Texts, name: empty } } }
- Parameters: { standard: markdown.CommonMark }
- Examples: { input: # Title, Text, More text, output: # Title, , Text, More text,  }, { input: a, false, b, output: a, , b,  }
- Defined by: CommonMark
- Depends on: CommonMark

### Block quote

Syntax element · `BlockQuote` · **held**

- Owner: trame
- Section: 5.1 Block quotes
- Address: https://spec.commonmark.org/0.31.2/#block-quotes
- Marks: { marker: { value: >, meaning: Marks a line of a block quote } }
- Parameters: { standard: markdown.CommonMark }
- Examples: { input: All of them apply., output: > All of them apply. }
- Defined by: CommonMark
- Depends on: CommonMark

### Sequence of blocks

Syntax element · `Blocks` · **held**

- Owner: trame
- Section: 4.9 Blank lines
- Address: https://spec.commonmark.org/0.31.2/#blank-lines
- Marks: { maxBlankLines: { value: 1, meaning: The number of blank lines that separate two blocks, at most } }
- Parameters: { standard: markdown.CommonMark, blankLine: markdown.BlankLine, counts: std/algebra.Counts }
- Examples: { input: # Title, , Text, output: # Title

Text
 }, { input: a, b, output: a
b
 }
- Defined by: CommonMark
- Depends on: CommonMark, Blank line

### Code block

Syntax element · `CodeBlock` · **held**

- Owner: trame
- Section: 4.5 Fenced code blocks
- Address: https://spec.commonmark.org/0.31.2/#fenced-code-blocks
- Marks: { length: { value: 3, meaning: A fence has at least three backticks } }
- Parameters: { standard: markdown.CommonMark, backtickString: markdown.BacktickString }
- Examples: { input: ts, const x = 1, output: ```ts, const x = 1, ``` }, { input: md, ```ts, x, ```, output: ````md, ```ts, x, ```, ```` }
- Defined by: CommonMark
- Depends on: CommonMark, Backtick string

### Code span

Syntax element · `CodeSpan` · **held**

- Owner: trame
- Section: 6.1 Code spans
- Address: https://spec.commonmark.org/0.31.2/#code-spans
- Marks: { minLength: { value: 1, meaning: A single backtick is enough, if the text contains none } }
- Parameters: { standard: markdown.CommonMark, backtickString: markdown.BacktickString, texts: std/algebra.Texts }
- Examples: { input: trame.json, output: `trame.json` }, { input: a`b, output: ``a`b`` }, { input: `written: ${…}`, output: `` `written: ${…}` `` }, { input:  x , output: `  x  ` }
- Defined by: CommonMark
- Depends on: CommonMark, Backtick string

### Collapsible block

Syntax element · `Details` · **held**

- Owner: trame
- Section: 4.11.1 The details element; 4.11.2 The summary element
- Address: https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element
- Marks: { tag: { value: details, meaning: The collapsible block }, summary: { value: summary, meaning: Its summary, always visible } }
- Parameters: { standard: std/html.Html, startTag: html.HtmlStartTag, endTag: html.HtmlEndTag, element: html.HtmlElement, blankLine: markdown.BlankLine }
- Examples: { input: The code, x, output: <details><summary>The code</summary>, , x, , </details> }
- Read in: HTML markup
- Depends on: Start tag, End tag, HTML element, Blank line

### Emphasis

Syntax element · `Emphasis` · **held**

- Owner: trame
- Section: 6.2 Emphasis
- Address: https://spec.commonmark.org/0.31.2/#emphasis-and-strong-emphasis
- Marks: { count: { value: 1, meaning: One asterisk on each side } }
- Parameters: { standard: markdown.CommonMark }
- Examples: { input: The graph in force, output: *The graph in force* }
- Defined by: CommonMark
- Depends on: CommonMark

### Heading

Syntax element · `Heading` · **held**

- Owner: trame
- Section: 4.2 ATX headings
- Address: https://spec.commonmark.org/0.31.2/#atx-headings
- Marks: { hash: { value: #, meaning: Repeated as many times as the level of the heading }, maxLevel: { value: 6, meaning: The deepest level: beyond six hash signs, the line is no longer a heading } }
- Parameters: { standard: markdown.CommonMark }
- Examples: { input: 2, Goals, output: ## Goals }, { input: 9, Very deep, output: ###### Very deep }
- Defined by: CommonMark
- Depends on: CommonMark

### Link

Syntax element · `Link` · **held**

- Owner: trame
- Section: 6.3 Links
- Address: https://spec.commonmark.org/0.31.2/#links
- Marks: { openText: { value: [, meaning: Opens the text of the link }, closeText: { value: ], meaning: Closes the text of the link }, openDestination: { value: (, meaning: Opens the destination }, closeDestination: { value: ), meaning: Closes the destination } }
- Parameters: { standard: markdown.CommonMark }
- Examples: { input: Goal, product.md#Goal, output: [Goal](product.md#Goal) }
- Defined by: CommonMark
- Depends on: CommonMark

### List item

Syntax element · `ListItem` · **held**

- Owner: trame
- Section: 5.2 List items
- Address: https://spec.commonmark.org/0.31.2/#list-items
- Marks: { bullet: { value: -, meaning: Marks an item of an unordered list } }
- Parameters: { standard: markdown.CommonMark }
- Examples: { input: Owner: trame, output: - Owner: trame }
- Defined by: CommonMark
- Depends on: CommonMark

### Relative reference

Syntax element · `RelativeReference` · **held**

- Owner: trame
- Section: 4.2 Relative reference; 3.5 Fragment; 5.2.4 Remove dot segments
- Address: https://www.rfc-editor.org/rfc/rfc3986#section-4.2
- Marks: { segment: { value: /, meaning: Separates the segments of a path }, fragment: { value: #, meaning: Introduces the fragment: the anchor, in the target document }, parent: { value: .., meaning: The segment that goes up one level: from the documents to the project's root } }
- Parameters: { standard: std/web.Uri, texts: std/algebra.Texts, layout: conventions.Layout }
- Examples: { input: docs/product.md, Goal, output: product.md#Goal }, { input: none, Graph, output: #Graph }, { input: docs/product.md, output: product.md }, { input: std/docs/algebra.md, Counts, output: ../std/docs/algebra.md#Counts }, { input: ../std/docs/index.md, output: ../../std/docs/index.md }
- Depends on: Project layout

### Small text

Syntax element · `Small` · **held**

- Owner: trame
- Section: 4.5.4 The small element
- Address: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-small-element
- Marks: { tag: { value: small, meaning: A side note, in small print } }
- Parameters: { standard: std/html.Html, element: html.HtmlElement }
- Examples: { input: Decision, output: <small>Decision</small> }
- Read in: HTML markup
- Depends on: HTML element

### Strong emphasis

Syntax element · `StrongEmphasis` · **held**

- Owner: trame
- Section: 6.2 Strong emphasis
- Address: https://spec.commonmark.org/0.31.2/#emphasis-and-strong-emphasis
- Marks: { count: { value: 2, meaning: Two asterisks on each side } }
- Parameters: { standard: markdown.CommonMark }
- Examples: { input: held, output: **held** }
- Defined by: CommonMark
- Depends on: CommonMark

### Table

Syntax element · `Table` · **held**

- Owner: trame
- Section: 4.10 Tables
- Address: https://github.github.com/gfm/#tables-extension-
- Marks: {  }
- Parameters: { standard: markdown.Gfm, row: markdown.TableRow, delimiterRow: markdown.TableDelimiterRow }
- Examples: { input: Name, Role, Ada, author, output: | Name | Role |, |---|---|, | Ada | author | }
- Defined by: GitHub Flavored Markdown
- Depends on: GitHub Flavored Markdown, Table row, Delimiter row

### Table cell

Syntax element · `TableCell` · **held**

- Owner: trame
- Section: 4.10 Tables: a pipe in a cell
- Address: https://github.github.com/gfm/#tables-extension-
- Marks: { escape: { value: \, meaning: Comes before a pipe that belongs to the content } }
- Parameters: { standard: markdown.Gfm, commonMark: markdown.CommonMark }
- Examples: { input: a | b
c, output: a \| b c }
- Defined by: GitHub Flavored Markdown
- Depends on: GitHub Flavored Markdown, CommonMark

### Delimiter row

Syntax element · `TableDelimiterRow` · **held**

- Owner: trame
- Section: 4.10 Tables: the delimiter row
- Address: https://github.github.com/gfm/#tables-extension-
- Marks: { dash: { value: -, meaning: Fills the delimiter cell of a column }, length: { value: 3, meaning: The number of dashes per column } }
- Parameters: { standard: markdown.Gfm }
- Examples: { input: 3, output: |---|---|---| }
- Defined by: GitHub Flavored Markdown
- Depends on: GitHub Flavored Markdown

### Table row

Syntax element · `TableRow` · **held**

- Owner: trame
- Section: 4.10 Tables: a row
- Address: https://github.github.com/gfm/#tables-extension-
- Marks: {  }
- Parameters: { standard: markdown.Gfm, commonMark: markdown.CommonMark }
- Examples: { input: Name, Role, output: | Name | Role | }
- Defined by: GitHub Flavored Markdown
- Depends on: GitHub Flavored Markdown, CommonMark

## Trame · Documents in the page

### Around the documents

Decision · `AroundMarkup`

- Decided by: trame
- Value: { classes: { busy: busy, failed: failed, dot: dot, badge: badge, zero: zero, title: t, file: f, nodePick: node-pick, nodeViews: node-views, error: error, changes: changes, wide: wide, source: source, terminal: term, prompt: t-prompt, json: json, flash: flash }, json: { key: j-key, text: j-str, literal: j-lit, number: j-num }, attributes: { date: data-date } }

### Documents in the page

Decision · `DocumentMarkup`

- Decided by: trame
- Value: { classes: { reference: ref, open: open, rule: rule, pill: pill, published: pub, severity: sev, person: person, card: card, history: history, repealed: repealed, meta: meta, views: views, viewButton: chip-btn, nature: nature, inactive: inactive, facts: facts, resolution: resolution, child: child, tableWrap: table-wrap, code: code, codeSource: code-source, checksTitle: checks-title, validity: validity, summary: summary, intro: intro, figure: figure, figureScroll: figure-scroll }, prefixes: { outcome: oc-, validity: va-, severity: sev- }, attributes: { reference: data-ref, doc: data-doc, view: data-view, node: data-node, figure: data-figure }, headings: { title: 1, section: 2, card: 3, nested: 4 } }
- Rejected: Inline styles, the page's themes and its narrow screen change the look, which a style sheet does once; One heading rank per level, below a card, the ranks run out, and the outline of a long document is unreadable

### The explorer of a graph

Decision · `ExplorerMarkup`

- Decided by: trame
- Value: { classes: { explorer: explorer, bar: explorer-bar, find: explorer-find, hint: explorer-hint, trail: trail, graph: explorer-graph, map: explorer-map, lighting: lighting, group: explorer-group, frame: frame, rank: rank, rail: explorer-rail, box: map-box, segment: map-seg, none: none, link: map-link, lit: lit, selected: selected, top: map-top, more: more }, attributes: { explore: data-explore, box: data-explore-box, place: data-box, more: data-explore-more, layer: data-layer, find: data-explore-find, from: data-a, to: data-b, selected: data-selected }, joints: { box: |, pair: > }, ids: { explorer: f, suggestions: -nodes } }

### Figures in the page

Decision · `FigureMarkup`

- Decided by: trame
- Value: { edge: fe, node: fn, nature: n-, role: r-, inactive: inactive, history: hist, focus: focus, box: box, kind: kind, open: open, arrows: { base: arrow, accent: arrow-accent, bad: arrow-bad, warn: arrow-warn }, markers: { base: arrow-base, accent: arrow-to-accent, bad: arrow-to-bad, warn: arrow-to-warn }, defs: figure-defs, legend: legend, samples: { base: lg-base, accent: lg-accent, bad: lg-bad, box: lg-box, open: lg-open }, timeline: tl, grid: grid, tick: tick, period: period, review: review, mark: mark, lane: lane-label, muted: muted, today: today }

## Trame · Mermaid

### Mermaid

Standard · `Mermaid`

- Maintained by: trame
- Source: Mermaid 11: flowcharts and Gantt charts
- Address: https://mermaid.js.org/intro/syntax-reference.html
- Constants: { indent: { value:   , meaning: Shifts a statement inside its block: Mermaid ignores it, it helps reading }, space: { value:  , meaning: Separates a keyword from what it introduces }, quote: { value: ", meaning: Surrounds a label }, language: { value: mermaid, meaning: The name of the language, in the info string of a code block that carries a diagram (GitHub, GitLab) } }

### Class definition

Syntax element · `ClassDefinition` · **held**

- Owner: trame
- Section: Flowcharts: classes
- Address: https://mermaid.js.org/syntax/flowchart.html#classes
- Marks: { keyword: { value: classDef, meaning: Defines a class } }
- Parameters: { standard: mermaid.Mermaid, styleProperties: mermaid.StyleProperties }
- Examples: { input: held, { fill: #e1f1e7, stroke: #26734a, textColour: #17202a }, output: classDef held fill:#e1f1e7,stroke:#26734a,color:#17202a }
- Defined by: Mermaid
- Depends on: Mermaid, Style properties

### Flowchart

Syntax element · `Flowchart` · **held**

- Owner: trame
- Section: Flowcharts: direction
- Address: https://mermaid.js.org/syntax/flowchart.html#direction
- Marks: { keyword: { value: flowchart, meaning: Opens a flowchart }, down: { value: TB, meaning: From top to bottom }, right: { value: LR, meaning: From left to right }, up: { value: BT, meaning: From bottom to top }, left: { value: RL, meaning: From right to left } }
- Parameters: { standard: mermaid.Mermaid }
- Examples: { input: down, n0 --> n1, output: flowchart TB,   n0 --> n1 }
- Defined by: Mermaid
- Depends on: Mermaid

### Gantt chart

Syntax element · `Gantt` · **held**

- Owner: trame
- Section: Gantt: syntax, date format, axis format
- Address: https://mermaid.js.org/syntax/gantt.html#syntax
- Marks: { keyword: { value: gantt, meaning: Opens a Gantt chart }, dateFormat: { value: dateFormat, meaning: The format of the dates given to the tasks }, axisFormat: { value: axisFormat, meaning: The format of the dates on the axis }, title: { value: title, meaning: The title of the chart } }
- Parameters: { standard: mermaid.Mermaid }
- Examples: { input: YYYY-MM-DD, %d.%m, Around 17 October 2026, section Deadlines, output: gantt,   dateFormat YYYY-MM-DD,   axisFormat %d.%m,   title Around 17 October 2026,   section Deadlines }
- Defined by: Mermaid
- Depends on: Mermaid

### Name in a Gantt chart

Syntax element · `GanttName` · **held**

- Owner: trame
- Section: Gantt: syntax (the name of a task comes before the colon)
- Address: https://mermaid.js.org/syntax/gantt.html#syntax
- Marks: { colon: { value: :, meaning: Separates a name from its data: a name cannot contain one } }
- Parameters: { standard: mermaid.Mermaid }
- Examples: { input: Review: committee, output: Review  committee }
- Defined by: Mermaid
- Depends on: Mermaid

### Section

Syntax element · `GanttSection` · **held**

- Owner: trame
- Section: Gantt: sections
- Address: https://mermaid.js.org/syntax/gantt.html#syntax
- Marks: { keyword: { value: section, meaning: Opens a section } }
- Parameters: { standard: mermaid.Mermaid, name: mermaid.GanttName }
- Examples: { input: Period: free, In force : 2026-01-01, 2026-12-31, output: section Period  free,   In force : 2026-01-01, 2026-12-31 }
- Defined by: Mermaid
- Depends on: Mermaid, Name in a Gantt chart

### Task

Syntax element · `GanttTask` · **held**

- Owner: trame
- Section: Gantt: task syntax
- Address: https://mermaid.js.org/syntax/gantt.html#syntax
- Marks: { colon: { value: :, meaning: Separates the name of the task from its data }, comma: { value: ,, meaning: Separates the data } }
- Parameters: { standard: mermaid.Mermaid, name: mermaid.GanttName }
- Examples: { input: In force, 2026-01-01, 2026-12-31, output: In force : 2026-01-01, 2026-12-31 }
- Defined by: Mermaid
- Depends on: Mermaid, Name in a Gantt chart

### Label

Syntax element · `MermaidLabel` · **held**

- Owner: trame
- Section: Flowcharts: entity codes to escape characters
- Address: https://mermaid.js.org/syntax/flowchart.html#entity-codes-to-escape-characters
- Marks: { entity: { value: #quot;, meaning: Replaces a quotation mark in a label } }
- Parameters: { standard: mermaid.Mermaid }
- Examples: { input: The "graph", output: The #quot;graph#quot; }
- Defined by: Mermaid
- Depends on: Mermaid

### Link

Syntax element · `MermaidLink` · **held**

- Owner: trame
- Section: Flowcharts: links between nodes
- Address: https://mermaid.js.org/syntax/flowchart.html#links-between-nodes
- Marks: { solid: { value: -->, meaning: Solid stroke, with an arrowhead }, dotted: { value: -.->, meaning: Dotted stroke, with an arrowhead }, dottedOpen: { value: -.-, meaning: Dotted stroke, without an arrowhead }, thick: { value: ==>, meaning: Thick stroke, with an arrowhead }, bar: { value: |, meaning: Surrounds the text of the link } }
- Parameters: { standard: mermaid.Mermaid, label: mermaid.MermaidLabel }
- Examples: { input: n0, n1, dotted, Depends on, output: n0 -.->|Depends on| n1 }
- Defined by: Mermaid
- Depends on: Mermaid, Label

### Node

Syntax element · `MermaidNode` · **held**

- Owner: trame
- Section: Flowcharts: a node with text; styling: classes
- Address: https://mermaid.js.org/syntax/flowchart.html#a-node-with-text
- Marks: { open: { value: [, meaning: Opens the rectangle shape }, close: { value: ], meaning: Closes the rectangle shape }, lineBreak: { value: <br/>, meaning: Starts a new line in a label }, classMark: { value: :::, meaning: Attaches a class to the node } }
- Parameters: { standard: mermaid.Mermaid, label: mermaid.MermaidLabel }
- Examples: { input: n0, Palette, <small>Decision</small>, held, output: n0["Palette<br/><small>Decision</small>"]:::held }
- Defined by: Mermaid
- Depends on: Mermaid, Label

### Milestone

Syntax element · `Milestone` · **held**

- Owner: trame
- Section: Gantt: milestones
- Address: https://mermaid.js.org/syntax/gantt.html#milestones
- Marks: { tag: { value: milestone, meaning: Makes the task a milestone }, duration: { value: 0d, meaning: No duration } }
- Parameters: { standard: mermaid.Mermaid, ganttTask: mermaid.GanttTask }
- Examples: { input: Review, 2026-11-01, output: Review : milestone, 2026-11-01, 0d }
- Defined by: Mermaid
- Depends on: Mermaid, Task

### Node style

Syntax element · `NodeStyle` · **held**

- Owner: trame
- Section: Flowcharts: styling a node
- Address: https://mermaid.js.org/syntax/flowchart.html#styling-a-node
- Marks: { keyword: { value: style, meaning: Gives a style to nodes }, comma: { value: ,, meaning: Separates the identifiers of the nodes } }
- Parameters: { standard: mermaid.Mermaid, styleProperties: mermaid.StyleProperties }
- Examples: { input: n1, n2, { dashes: 4 3 }, output: style n1,n2 stroke-dasharray:4 3 }
- Defined by: Mermaid
- Depends on: Mermaid, Style properties

### Style properties

Syntax element · `StyleProperties` · **held**

- Owner: trame
- Section: Flowcharts: styling and classes
- Address: https://mermaid.js.org/syntax/flowchart.html#styling-and-classes
- Marks: { colon: { value: :, meaning: Separates the name of a property from its value }, comma: { value: ,, meaning: Separates two properties }, fill: { value: fill, meaning: The background colour }, stroke: { value: stroke, meaning: The outline colour }, textColour: { value: color, meaning: The colour of the text }, dashes: { value: stroke-dasharray, meaning: A dashed outline: the length of a dash, then of the gap }, opacity: { value: opacity, meaning: The opacity, from 0 (invisible) to 1 } }
- Parameters: { standard: mermaid.Mermaid }
- Examples: { input: { fill: #ffffff, stroke: #5a6672 }, output: fill:#ffffff,stroke:#5a6672 }
- Defined by: Mermaid
- Depends on: Mermaid

### Subgraph

Syntax element · `Subgraph` · **held**

- Owner: trame
- Section: Flowcharts: subgraphs
- Address: https://mermaid.js.org/syntax/flowchart.html#subgraphs
- Marks: { start: { value: subgraph, meaning: Opens the group }, end: { value: end, meaning: Closes the group }, open: { value: [, meaning: Opens the title }, close: { value: ], meaning: Closes the title } }
- Parameters: { standard: mermaid.Mermaid, label: mermaid.MermaidLabel }
- Examples: { input: engine, Trame · Engine, n0, output: subgraph engine["Trame · Engine"],   n0, end }
- Defined by: Mermaid
- Depends on: Mermaid, Label

## Trame · Messages

### Language

Decision · `Language`

- Decided by: trame
- Value: { tag: en-GB, punctuation: { parts:  · , items: , , givenBy:  ← , opensAside:  (, closesAside: ), clauses: ; , introduces: : , equals:  = , absent: — } }
- Rejected: French, the language of the first generations; the workspace and its documents moved to English; Several languages at once, nothing asks for it yet: each catalog is written in one language, and a second one would be a second set of catalogs

### A catalog counts in its language

Architecture decision · `CountsInTheLanguage` · **held**

- Decided by: trame
- Context: The catalogs counted with a helper of the prelude that took the English rule (one, otherwise the noun and an s), joined lists with an English and, and wrote dates in English when nobody said a language: a catalog in another language could not count, and the prelude, meant for every language, spoke one.
- Consequences: A catalog that counts receives the decided language and counts by its plural rules (CLDR, through the platform's Intl), with the forms it writes for each category (one, other, and few or many where a language has them); a catalog of the language written in a file says the language it is written in; lists are joined by Lists, in the decided language; the prelude takes a language wherever it writes words, and has none of its own. The page speaks the decided language until a payload says another.
- Rejected: The English rule in the prelude, a catalog in French or in Polish would count wrongly; A plural made by adding an s, irregular nouns, and every other language
- Serves: A single source of truth
- Applied by: Messages of the compiler, Messages of the views, Messages of trame dev, Messages of the commands, Messages of the scenarios, Messages of an advance, Words of the page, Lists

### Dates

Function · `Dates` · **held**

- Owner: trame
- Parameters: { language: messages.Language }
- Serves: A single source of truth
- Depends on: Language

### Lists

Function · `Lists` · **held**

- Owner: trame
- Parameters: { language: messages.Language }
- Serves: A single source of truth
- Depends on: Language

### Messages of an advance

Message catalog · `AdvanceMessages`

- Owner: trame
- Parameters: { language: messages.Language }
- Written in: Language
- Depends on: Language

### Messages of the commands

Message catalog · `CommandMessages`

- Owner: trame
- Parameters: { language: messages.Language }
- Written in: Language
- Depends on: Language

### Messages of the compiler

Message catalog · `CompilerMessages`

- Owner: trame
- Parameters: { language: messages.Language, lists: messages.Lists }
- Written in: Language
- Depends on: Language, Lists

### Messages of trame dev

Message catalog · `DevMessages`

- Owner: trame
- Parameters: { language: messages.Language, lists: messages.Lists }
- Written in: Language
- Depends on: Language, Lists

### Messages of the drivers

Message catalog · `DriverMessages`

- Owner: trame
- Written in: Language

### Words of Trame's views

Message catalog · `EngineViewWords`

- Owner: trame
- Written in: Language

### Words of the kinds

Message catalog · `KindWords`

- Owner: trame
- Written in: Language

### Messages of the laws

Message catalog · `LawMessages`

- Owner: trame
- Written in: Language

### Messages of the outputs

Message catalog · `OutputMessages`

- Owner: trame
- Written in: Language

### Words of the page

Message catalog · `PageWords`

- Owner: trame
- Parameters: { language: messages.Language }
- Written in: Language
- Depends on: Language

### Messages of the platform

Message catalog · `PlatformMessages`

- Owner: trame
- Written in: Language

### Messages of the renderers

Message catalog · `RenderingMessages`

- Owner: trame
- Written in: Language

### Messages of the scenarios

Message catalog · `ScenarioMessages`

- Owner: trame
- Parameters: { language: messages.Language }
- Written in: Language
- Depends on: Language

### Words of the units

Message catalog · `UnitWords`

- Owner: trame
- Written in: Language

### Messages of the views

Message catalog · `ViewMessages`

- Owner: trame
- Parameters: { language: messages.Language }
- Written in: Language
- Depends on: Language

### Words of the views

Message catalog · `ViewWords`

- Owner: trame
- Written in: Language

## Trame · Packages

### Audit of the packages

Decision · `PackageAudit`

- Decided by: trame
- Value: { evidence: packages, counted: moderate, high, critical }
- Rejected: Every severity, a low advisory would make the page red for what no one can act on; A report in a file of its own, the packages could not read it: the evidence reaches them

### Order of versions

Function · `VersionOrder` · **held**

- Owner: trame
- Parameters: { semver: std/measures.SemanticVersioning, counts: std/algebra.Counts }
- Serves: A single source of truth

### Grammar of CSS

Package · `CssGrammar` · **held**

- Owner: trame
- Name: tree-sitter-css
- Version: 0.25.0
- In the registry: https://www.npmjs.com/package/tree-sitter-css
- What it may do: 

### esbuild

Package · `EsbuildPackage` · **held**

- Owner: trame
- Name: esbuild
- Version: 0.28.2
- In the registry: https://www.npmjs.com/package/esbuild
- What it may do: read, write, process

### Grammar of HCL

Package · `HclGrammar` · **held**

- Owner: trame
- Name: @tree-sitter-grammars/tree-sitter-hcl
- Version: 1.2.0
- In the registry: https://www.npmjs.com/package/@tree-sitter-grammars/tree-sitter-hcl
- What it may do: 

### Grammar of HTML

Package · `HtmlGrammar` · **held**

- Owner: trame
- Name: tree-sitter-html
- Version: 0.23.2
- In the registry: https://www.npmjs.com/package/tree-sitter-html
- What it may do: 

### Types of Node.js

Package · `NodeTypes` · **held**

- Owner: trame
- Name: @types/node
- Version: 22.20.5
- In the registry: https://www.npmjs.com/package/@types/node
- Held below: 23.0.0
- Because: the declarations follow the Node.js that runs the engine, version 22: those of a later Node would let the code use what this one does not have
- What it may do: 

### tsx

Package · `TsxPackage` · **held**

- Owner: trame
- Name: tsx
- Version: 4.23.15
- In the registry: https://www.npmjs.com/package/tsx
- What it may do: read, execution

### Grammar of TypeScript

Package · `TypeScriptGrammar` · **held**

- Owner: trame
- Name: tree-sitter-typescript
- Version: 0.23.2
- In the registry: https://www.npmjs.com/package/tree-sitter-typescript
- What it may do: 

### TypeScript

Package · `TypeScriptPackage` · **held**

- Owner: trame
- Name: typescript
- Version: 6.0.3
- In the registry: https://www.npmjs.com/package/typescript
- Held below: 7.0.0
- Because: TypeScript 7 is the compiler rewritten in Go: its package no longer gives the JavaScript API the engine reads the declarations with (a program, its type checker, its comments), only an unstable one
- What it may do: read

### web-tree-sitter

Package · `WebTreeSitterPackage` · **held**

- Owner: trame
- Name: web-tree-sitter
- Version: 0.27.1
- In the registry: https://www.npmjs.com/package/web-tree-sitter
- What it may do: read, execution

## Trame · The page

### The renderings of a document

Vocabulary · `RenderingModes`

- Owner: trame
- Words: { rendered: The document as the page lays it out, in HTML, with its figures drawn, markdown: Its Markdown, as trame build writes it, text: Its plain text, as a command prints it in the terminal }

### Banner

Syntax element · `Banner` · **held**

- Owner: trame
- Section: Main area
- Marks: {  }
- Parameters: { standard: page.ThePage, regions: page.PageRegions, html: std/html.Html, element: html.HtmlElement, texts: std/algebra.Texts }
- Examples: { input: , output: <div class="banner" id="banner" hidden></div> }
- Defined by: The page
- Read in: HTML markup
- Depends on: The page, Regions of the page, HTML element

### Brand

Syntax element · `Brand` · **held**

- Owner: trame
- Section: Side bar
- Marks: { brand: { value: brand, meaning: The class of the brand }, name: { value: brand-name, meaning: The class of the name and its subtitle } }
- Parameters: { standard: page.ThePage, html: std/html.Html, commands: conventions.TrameCommands, logo: page.Logo, block: html.HtmlBlock, element: html.HtmlElement }
- Examples: { input: graph, output: <div class="brand">,   <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">,     <rect x="0" y="0" width="26" height="26" rx="6" fill="var(--accent-soft)"/>,     <g stroke="var(--accent)" stroke-width="2.2" stroke-linecap="round" fill="none"><path d="M7 5v16M13 5v16M19 5v16"/></g>,     <g stroke="var(--ink)" stroke-width="2.2" stroke-linecap="round" fill="none"><path d="M5 9h3M10 9h6M18 9h3M5 17h3M10 17h6M18 17h3"/></g>,   </svg>,   <div class="brand-name">trame <span>graph</span></div>, </div> }
- Defined by: The page
- Read in: HTML markup
- Depends on: The page, Trame's commands, Logo, Element over several lines, HTML element

### State of the compilation

Syntax element · `CompilationState` · **held**

- Owner: trame
- Section: Side bar
- Marks: {  }
- Parameters: { standard: page.ThePage, regions: page.PageRegions, html: std/html.Html, element: html.HtmlElement, texts: std/algebra.Texts }
- Examples: { input: , output: <div class="status" id="status"></div> }
- Defined by: The page
- Read in: HTML markup
- Depends on: The page, Regions of the page, HTML element

### Dates

Syntax element · `DatePicker` · **held**

- Owner: trame
- Section: Side bar
- Marks: { paragraph: { value: p, meaning: The label is a paragraph }, labelId: { value: dates-label, meaning: The identifier of the label, which names the group } }
- Parameters: { standard: page.ThePage, regions: page.PageRegions, html: std/html.Html, aria: std/html.Aria, block: html.HtmlBlock, element: html.HtmlElement, texts: std/algebra.Texts }
- Examples: { input: Graph in force on, output: <div>,   <p class="label" id="dates-label">Graph in force on</p>,   <div class="dates" id="dates" role="group" aria-labelledby="dates-label"></div>,   <div class="date-note" id="date-note"></div>, </div> }
- Defined by: The page
- Read in: HTML markup
- Depends on: The page, Regions of the page, Element over several lines, HTML element

### Head of the document

Syntax element · `DocumentHead` · **held**

- Owner: trame
- Section: Main area
- Marks: { tag: { value: header, meaning: The head of the main content }, head: { value: doc-head, meaning: Its class }, path: { value: path, meaning: The class of the path } }
- Parameters: { standard: page.ThePage, regions: page.PageRegions, html: std/html.Html, block: html.HtmlBlock, element: html.HtmlElement, toggle: page.RenderingToggle, texts: std/algebra.Texts }
- Examples: { input: Rendering, Rendered, Markdown, Text, output: <header class="doc-head">,   <div class="path" id="doc-path"></div>,   <div class="toggle" id="toggle" role="group" aria-label="Rendering">,     <button type="button" id="view-rendered" aria-pressed="true">Rendered</button>,     <button type="button" id="view-markdown" aria-pressed="false">Markdown</button>,     <button type="button" id="view-text" aria-pressed="false">Text</button>,   </div>, </header> }
- Defined by: The page
- Read in: HTML markup
- Depends on: The page, Regions of the page, Element over several lines, HTML element, Choice of rendering

### Document picker

Syntax element · `DocumentPicker` · **held**

- Owner: trame
- Section: Side bar
- Marks: { picker: { value: mobile-pick, meaning: The class of the picker, which the style sheet shows on small screens only }, labelTag: { value: label, meaning: The label of the select }, for: { value: for, meaning: The control a label names }, select: { value: select, meaning: The list of documents } }
- Parameters: { standard: page.ThePage, regions: page.PageRegions, html: std/html.Html, block: html.HtmlBlock, element: html.HtmlElement, texts: std/algebra.Texts }
- Examples: { input: Document, output: <div class="mobile-pick">,   <label class="label" for="doc-select">Document</label>,   <select id="doc-select"></select>, </div> }
- Defined by: The page
- Read in: HTML markup
- Depends on: The page, Regions of the page, Element over several lines, HTML element

### Arrowheads of the figures

Syntax element · `FigureMarkers` · **held**

- Owner: trame
- Section: Figures
- Marks: {  }
- Parameters: { standard: page.ThePage, svg: std/html.Svg, aria: std/html.Aria, html: std/html.Html, figures: markup.FigureMarkup, drawing: appearance.GraphDrawing, counts: std/algebra.Counts, texts: std/algebra.Texts, block: html.HtmlBlock, element: html.HtmlElement, empty: html.SelfClosingTag, path: html.PathData }
- Examples: { input: , output: <svg class="figure-defs" width="0" height="0" aria-hidden="true">,   <defs><marker id="arrow-base" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="arrow" d="M0,0 L10,5 L0,10 z"/></marker><marker id="arrow-to-accent" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="arrow-accent" d="M0,0 L10,5 L0,10 z"/></marker><marker id="arrow-to-bad" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="arrow-bad" d="M0,0 L10,5 L0,10 z"/></marker><marker id="arrow-to-warn" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="arrow-warn" d="M0,0 L10,5 L0,10 z"/></marker></defs>, </svg> }
- Defined by: The page
- Read in: HTML markup
- Depends on: The page, Figures in the page, Drawing of a graph, Element over several lines, HTML element, Self-closing tag, Path data

### Fonts

Syntax element · `FontLinks` · **held**

- Owner: trame
- Section: 4.6.7.11 Link type preconnect; 4.6.7.17 Link type stylesheet; 2.5.4 CORS settings attributes
- Address: https://html.spec.whatwg.org/multipage/links.html#link-type-preconnect
- Marks: { link: { value: link, meaning: A link from the page to a resource }, rel: { value: rel, meaning: What the resource is to the page }, href: { value: href, meaning: Its address }, preconnect: { value: preconnect, meaning: An origin to connect to before it is asked }, stylesheet: { value: stylesheet, meaning: A style sheet of the page }, crossorigin: { value: crossorigin, meaning: Fetched without credentials } }
- Parameters: { standard: std/html.Html, startTag: html.HtmlStartTag, texts: std/algebra.Texts }
- Examples: { input: https://fonts.example, https://files.example, https://fonts.example/css, output: <link rel="preconnect" href="https://fonts.example"><link rel="preconnect" href="https://files.example" crossorigin><link rel="stylesheet" href="https://fonts.example/css"> }
- Read in: HTML markup
- Depends on: Start tag

### Logo

Syntax element · `Logo` · **held**

- Owner: trame
- Section: Brand
- Marks: { size: { value: 26, meaning: The side of the drawing, in pixels, and of the grid it is drawn on }, radius: { value: 6, meaning: The radius of the corners of the square }, thread: { value: 2.2, meaning: The width of a thread }, warp: { value: M7 5v16M13 5v16M19 5v16, meaning: The warp: three vertical threads }, weft: { value: M5 9h3M10 9h6M18 9h3M5 17h3M10 17h6M18 17h3, meaning: The weft: two horizontal threads, in pieces between the threads of warp }, background: { value: accent-soft, meaning: The colour of the square: the soft accent of the palette }, warpColour: { value: accent, meaning: The colour of the warp: the accent of the palette } }
- Parameters: { standard: page.ThePage, svg: std/html.Svg, aria: std/html.Aria, palette: appearance.Palette, counts: std/algebra.Counts, block: html.HtmlBlock, element: html.HtmlElement, empty: html.SelfClosingTag, variable: html.CssVariable }
- Examples: { input: , output: <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">,   <rect x="0" y="0" width="26" height="26" rx="6" fill="var(--accent-soft)"/>,   <g stroke="var(--accent)" stroke-width="2.2" stroke-linecap="round" fill="none"><path d="M7 5v16M13 5v16M19 5v16"/></g>,   <g stroke="var(--ink)" stroke-width="2.2" stroke-linecap="round" fill="none"><path d="M5 9h3M10 9h6M18 9h3M5 17h3M10 17h6M18 17h3"/></g>, </svg> }
- Defined by: The page
- Read in: HTML markup
- Depends on: The page, Palette, Element over several lines, HTML element, Self-closing tag, Variable

### Main area

Syntax element · `MainArea` · **held**

- Owner: trame
- Section: Main area
- Marks: { tag: { value: main, meaning: The main content of the page }, article: { value: article, meaning: The document } }
- Parameters: { standard: page.ThePage, regions: page.PageRegions, html: std/html.Html, block: html.HtmlBlock, element: html.HtmlElement, banner: page.Banner, head: page.DocumentHead, texts: std/algebra.Texts }
- Examples: { input: { subtitle: graph, dates: Dates, navigation: Views, document: Document, rendering: Rendering, renderings: Rendered, Markdown, Text }, output: <main>,   <div class="banner" id="banner" hidden></div>,   <header class="doc-head">,     <div class="path" id="doc-path"></div>,     <div class="toggle" id="toggle" role="group" aria-label="Rendering">,       <button type="button" id="view-rendered" aria-pressed="true">Rendered</button>,       <button type="button" id="view-markdown" aria-pressed="false">Markdown</button>,       <button type="button" id="view-text" aria-pressed="false">Text</button>,     </div>,   </header>,   <article class="doc" id="doc"></article>, </main> }
- Defined by: The page
- Read in: HTML markup
- Depends on: The page, Regions of the page, Element over several lines, HTML element, Banner, Head of the document

### Rules of a narrow screen

Syntax element · `NarrowScreenRule` · **held**

- Owner: trame
- Section: Style
- Marks: { maxWidth: { value: max-width, meaning: The viewport is at most this wide (Media Queries Level 4, § 4.1 width) } }
- Parameters: { standard: page.ThePage, media: html.MediaRule, feature: html.MediaFeature }
- Examples: { input: 920px, .nav { display: none; }, output: @media (max-width: 920px) { .nav { display: none; } } }
- Defined by: The page
- Read in: CSS style sheets
- Depends on: The page, Media rule, Media feature

### Navigation

Syntax element · `Navigation` · **held**

- Owner: trame
- Section: Side bar
- Marks: { tag: { value: nav, meaning: The region of navigation } }
- Parameters: { standard: page.ThePage, regions: page.PageRegions, html: std/html.Html, aria: std/html.Aria, element: html.HtmlElement, texts: std/algebra.Texts }
- Examples: { input: Documents and views, output: <nav class="nav" id="nav" aria-label="Documents and views"></nav> }
- Defined by: The page
- Read in: HTML markup
- Depends on: The page, Regions of the page, HTML element

### Document of the page

Syntax element · `PageDocument` · **held**

- Owner: trame
- Section: Document
- Marks: { html: { value: html, meaning: The root element }, head: { value: head, meaning: What the document says of itself }, body: { value: body, meaning: What it shows }, title: { value: title, meaning: The title of the document }, style: { value: style, meaning: A style sheet written in the document }, meta: { value: meta, meaning: What the document says of itself, as a name and a content }, name: { value: name, meaning: The name of a meta element }, content: { value: content, meaning: Its content }, charset: { value: charset, meaning: The encoding of the document }, encoding: { value: utf-8, meaning: UTF-8, as the WHATWG Encoding standard labels it }, viewport: { value: viewport, meaning: How a mobile browser lays the page out (CSS Viewport Module Level 1) }, deviceWidth: { value: width=device-width, initial-scale=1, viewport-fit=cover, meaning: As wide as the device, not zoomed, drawn under the notch and the rounded corners }, hostFit: { value: claude:viewport-fit-sides, meaning: What the host that shows the page as an artifact (claude.ai) reads to draw it }, cover: { value: cover, meaning: To the edges of the screen } }
- Parameters: { standard: page.ThePage, htmlNames: std/html.Html, doctype: html.Doctype, startTag: html.HtmlStartTag, endTag: html.HtmlEndTag, element: html.HtmlElement, file: std/text.TextFile, texts: std/algebra.Texts }
- Examples: { input: { lang: en-GB, title: Trame graph, fonts: <link>, style: body { margin: 0; }, shell: <div class="app">, </div>, scripts: <script>start()</script> }, output: <!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="claude:viewport-fit-sides" content="cover">
<title>Trame graph</title>
<link>
<style>body { margin: 0; }</style>
</head>
<body>
<div class="app">
</div>
<script>start()</script>
</body>
</html>
 }, { input: { lang: en-GB, title: Trame graph, fonts: <link>, style: body { margin: 0; }, shell: <div class="app">, </div>, scripts: <script>start()</script>, fragment: true }, output: <title>Trame graph</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link>
<style>body { margin: 0; }</style>
<div class="app">
</div>
<script>start()</script>
 }
- Defined by: The page
- Read in: HTML markup
- Depends on: The page, DOCTYPE, Start tag, End tag, HTML element

### Scripts of the page

Syntax element · `PageScripts` · **held**

- Owner: trame
- Section: Scripts
- Marks: {  }
- Parameters: { standard: page.ThePage, html: std/html.Html, script: html.ScriptElement, json: html.JsonInScript, member: typescript.MemberAccess, assignment: typescript.Assignment, texts: std/algebra.Texts }
- Examples: { input: start(), H4sIAAAA, true, output: <script>window.TRAME_DEV = true</script><script>window.TRAME_BUNDLE_GZIP = "H4sIAAAA"</script><script type="module">start()</script> }, { input: start(), none, none, output: <script type="module">start()</script> }
- Defined by: The page
- Read in: HTML markup
- Depends on: The page, Script, JSON in a script, Property access, Assignment

### Choice of rendering

Syntax element · `RenderingToggle` · **held**

- Owner: trame
- Section: Main area
- Marks: {  }
- Parameters: { standard: page.ThePage, modes: page.RenderingModes, regions: page.PageRegions, html: std/html.Html, aria: std/html.Aria, block: html.HtmlBlock, element: html.HtmlElement, sequences: std/algebra.Sequences }
- Examples: { input: Rendering, Rendered, Markdown, Text, output: <div class="toggle" id="toggle" role="group" aria-label="Rendering">,   <button type="button" id="view-rendered" aria-pressed="true">Rendered</button>,   <button type="button" id="view-markdown" aria-pressed="false">Markdown</button>,   <button type="button" id="view-text" aria-pressed="false">Text</button>, </div> }
- Defined by: The page
- Read in: HTML markup
- Depends on: The page, The renderings of a document, Regions of the page, Element over several lines, HTML element

### Shell

Syntax element · `Shell` · **held**

- Owner: trame
- Section: Shell
- Marks: { app: { value: app, meaning: The class of the whole: a grid of the side bar and the main area } }
- Parameters: { standard: page.ThePage, html: std/html.Html, block: html.HtmlBlock, side: page.SideBar, main: page.MainArea, markers: page.FigureMarkers }
- Examples: { input: { subtitle: graph, dates: Dates, navigation: Views, document: Document, rendering: Rendering, renderings: Rendered, Markdown, Text }, output: <div class="app">,   <aside class="side">,     <div class="brand">,       <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">,         <rect x="0" y="0" width="26" height="26" rx="6" fill="var(--accent-soft)"/>,         <g stroke="var(--accent)" stroke-width="2.2" stroke-linecap="round" fill="none"><path d="M7 5v16M13 5v16M19 5v16"/></g>,         <g stroke="var(--ink)" stroke-width="2.2" stroke-linecap="round" fill="none"><path d="M5 9h3M10 9h6M18 9h3M5 17h3M10 17h6M18 17h3"/></g>,       </svg>,       <div class="brand-name">trame <span>graph</span></div>,     </div>,     <div class="status" id="status"></div>,     <div>,       <p class="label" id="dates-label">Dates</p>,       <div class="dates" id="dates" role="group" aria-labelledby="dates-label"></div>,       <div class="date-note" id="date-note"></div>,     </div>,     <nav class="nav" id="nav" aria-label="Views"></nav>,     <div class="mobile-pick">,       <label class="label" for="doc-select">Document</label>,       <select id="doc-select"></select>,     </div>,   </aside>,   <main>,     <div class="banner" id="banner" hidden></div>,     <header class="doc-head">,       <div class="path" id="doc-path"></div>,       <div class="toggle" id="toggle" role="group" aria-label="Rendering">,         <button type="button" id="view-rendered" aria-pressed="true">Rendered</button>,         <button type="button" id="view-markdown" aria-pressed="false">Markdown</button>,         <button type="button" id="view-text" aria-pressed="false">Text</button>,       </div>,     </header>,     <article class="doc" id="doc"></article>,   </main>,   <svg class="figure-defs" width="0" height="0" aria-hidden="true">,     <defs><marker id="arrow-base" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="arrow" d="M0,0 L10,5 L0,10 z"/></marker><marker id="arrow-to-accent" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="arrow-accent" d="M0,0 L10,5 L0,10 z"/></marker><marker id="arrow-to-bad" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="arrow-bad" d="M0,0 L10,5 L0,10 z"/></marker><marker id="arrow-to-warn" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="arrow-warn" d="M0,0 L10,5 L0,10 z"/></marker></defs>,   </svg>, </div> }
- Defined by: The page
- Read in: HTML markup
- Depends on: The page, Element over several lines, Side bar, Main area, Arrowheads of the figures

### Side bar

Syntax element · `SideBar` · **held**

- Owner: trame
- Section: Side bar
- Marks: { tag: { value: aside, meaning: The side bar is beside the main content }, side: { value: side, meaning: Its class } }
- Parameters: { standard: page.ThePage, html: std/html.Html, block: html.HtmlBlock, brand: page.Brand, state: page.CompilationState, dates: page.DatePicker, navigation: page.Navigation, picker: page.DocumentPicker }
- Examples: { input: { subtitle: graph, dates: Dates, navigation: Views, document: Document, rendering: Rendering, renderings: Rendered, Markdown, Text }, output: <aside class="side">,   <div class="brand">,     <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">,       <rect x="0" y="0" width="26" height="26" rx="6" fill="var(--accent-soft)"/>,       <g stroke="var(--accent)" stroke-width="2.2" stroke-linecap="round" fill="none"><path d="M7 5v16M13 5v16M19 5v16"/></g>,       <g stroke="var(--ink)" stroke-width="2.2" stroke-linecap="round" fill="none"><path d="M5 9h3M10 9h6M18 9h3M5 17h3M10 17h6M18 17h3"/></g>,     </svg>,     <div class="brand-name">trame <span>graph</span></div>,   </div>,   <div class="status" id="status"></div>,   <div>,     <p class="label" id="dates-label">Dates</p>,     <div class="dates" id="dates" role="group" aria-labelledby="dates-label"></div>,     <div class="date-note" id="date-note"></div>,   </div>,   <nav class="nav" id="nav" aria-label="Views"></nav>,   <div class="mobile-pick">,     <label class="label" for="doc-select">Document</label>,     <select id="doc-select"></select>,   </div>, </aside> }
- Defined by: The page
- Read in: HTML markup
- Depends on: The page, Element over several lines, Brand, State of the compilation, Dates, Navigation, Document picker

### Colours of a status

Syntax element · `StatusStyle` · **held**

- Owner: trame
- Section: Style
- Marks: { background: { value: background, meaning: The background of the pill (CSS Backgrounds Level 3) }, color: { value: color, meaning: The colour of its text (CSS Color Level 4) }, figureNode: { value: fn, meaning: The class of a node in a figure the script draws }, box: { value: box, meaning: The class of the box of that node } }
- Parameters: { standard: page.ThePage, css: std/html.Css, svg: std/html.Svg, rule: html.CssRule, declaration: html.CssDeclaration, variable: html.CssVariable, selector: html.ClassSelector }
- Examples: { input: held, ok-soft, ok, output: .st-held { background: var(--ok-soft); color: var(--ok); }, .fn.st-held rect.box { fill: var(--ok-soft); stroke: var(--ok); } }
- Defined by: The page
- Read in: CSS style sheets
- Depends on: The page, Rule, Declaration, Variable, Class selector

### Theme

Syntax element · `Theme` · **held**

- Owner: trame
- Section: Style
- Marks: { root: { value: :root, meaning: The root element: its variables hold for the whole page }, colorScheme: { value: color-scheme, meaning: The scheme the browser draws its own controls in (CSS Color Adjustment Level 1) }, preference: { value: prefers-color-scheme, meaning: The scheme the system prefers (Media Queries Level 5) }, dark: { value: dark, meaning: The dark scheme, as both name it } }
- Parameters: { standard: page.ThePage, rule: html.CssRule, media: html.MediaRule, feature: html.MediaFeature, attribute: html.AttributeSelector, negation: html.NegationSelector, property: html.CustomProperty, declaration: html.CssDeclaration }
- Examples: { input: { bg: #fff }, { bg: #000 }, { font-ui: sans-serif }, { space-sm: 8px }, { radius-md: 6px }, output: :root { --bg: #fff; --font-ui: sans-serif; --space-sm: 8px; --radius-md: 6px; }, @media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { --bg: #000; color-scheme: dark; } }, :root[data-theme="dark"] { --bg: #000; color-scheme: dark; } }
- Defined by: The page
- Read in: CSS style sheets
- Depends on: The page, Rule, Media rule, Media feature, Attribute selector, Negation, Custom property, Declaration

### Files for tools in the page

Decision · `MachineHighlighting`

- Decided by: trame
- Value: { pattern: (&quot;(?:[^&]|&(?!quot;))*?&quot;)(\s*:)?|\b(true|false|null)\b|(-?\d+(?:\.\d+)?), flags: g }

### A page carries its graph compressed

Decision · `PackedGraph`

- Decided by: trame
- Value: { format: gzip, encoding: base64 }
- Rejected: The graph in JSON, as it is, a page of 15 MB a date: slow to open, and too big for some hosts; Fewer dates in a page, reading the graph at another date is what an exported page is for; A compression library in the page, every browser decompresses gzip itself

### Bundle of the page

Decision · `PageBundle`

- Decided by: trame
- Value: { format: esm, target: es2022, legalComments: none, charset: utf8 }

### Regions of the page

Decision · `PageRegions`

- Decided by: trame
- Value: { status: status, dates: dates, dateNote: date-note, nav: nav, documents: doc-select, nodes: node-select, banner: banner, bannerClose: banner-close, toggle: toggle, rendering: view-, path: doc-path, doc: doc }

### Style of the standalone document

Decision · `StandaloneStyle`

- Decided by: trame
- Value: { :root: { padding-top: env(safe-area-inset-top,0px), padding-bottom: env(safe-area-inset-bottom,0px) }, body: { margin: 0 }, [hidden]: { display: none!important }, img: { max-width: 100% } }

### The page

Decision · `ThePage`

- Decided by: trame
- Value: { label: label, themeAttribute: data-theme, themes: { light: light, dark: dark }, statusClass: st-, globals: { packedBundle: TRAME_BUNDLE_GZIP, dev: TRAME_DEV }, memory: trame-page, machine: machine, nodeView: impact, prompt: $  }
- Rejected: A page per document, the page must work without a server (trame export): one file holds the graph at every date and all its documents; A front-end framework, one program, assembled from the graph like the command line, is enough to show the intermediate format

### A style sheet writes no value

Architecture decision · `StyleThroughVariables` · **held**

- Decided by: trame
- Context: A style sheet is a body like any other: a value written in it hides its meaning, and the sheet of the page held 355. CSS cannot import a value, but it reads a variable declared before it.
- Consequences: Each family of measures is a decision of appearance, and the theme writes them in :root with the colours and the fonts; the page refuses a style that uses a variable it does not write. A media query cannot read a variable: the width of a narrow screen is a decision, which the page writes in the media rule around the second sheet. The lines of a grid are named, not numbered. The scale was taken as it was, so the page looks as it did; folding it is a change of decisions.
- Rejected: Folding the values into a lighter scale first, the page would have changed at the same time as its sheet was brought into the graph; Writing the rules as syntax elements, the sheet is where the appearance is chosen; two hundred rules spread over elements would hide it; An exception for style sheets, a value without its meaning is the same problem in a sheet as in code
- Serves: A single source of truth
- Applied by: Style sheet of the page, Style sheet of a narrow screen, Theme, Rules of a narrow screen, Page

### Page

Function · `Page` · **held**

- Owner: trame
- Parameters: { pageBundle: page.PageBundle, standalone: page.StandaloneStyle, encodings: std/system.NodeEncodings, file: std/text.TextFile, palette: appearance.Palette, typography: appearance.Typography, narrowScreen: appearance.NarrowScreen, spacing: appearance.Spacing, radii: appearance.Radii, typeScale: appearance.TypeScale, opacities: appearance.Opacities, strokes: appearance.Strokes, motion: appearance.Motion, pageLayout: appearance.PageLayout, resources: architecture.Resources, reading: architecture.FileReading, bundler: architecture.Bundler, compression: architecture.Compression, shell: page.Shell, theme: page.Theme, statusStyle: page.StatusStyle, narrow: page.NarrowScreenRule, fonts: page.FontLinks, scripts: page.PageScripts, document: page.PageDocument, rule: html.CssRule, declaration: html.CssDeclaration, messages: messages.OutputMessages, language: messages.Language, reader: syntax.SyntaxReader, markup: html.HtmlMarkup, sheets: html.CssStyleSheets, gnu: std/text.GnuPositions }
- Serves: A specification that runs
- Depends on: Bundle of the page, Style of the standalone document, Palette, Typography, Narrow screen, Spacing, Radii, Type scale, Opacities, Strokes, Motion, Page layout, Page resources, File reading, Bundler, Compression, Shell, Theme, Colours of a status, Rules of a narrow screen, Fonts, Scripts of the page, Document of the page, Rule, Declaration, Messages of the outputs, Language, Syntax reader, HTML markup, CSS style sheets

### Style sheet of a narrow screen

Style sheet · `NarrowScreenStyle`

- Owner: trame
- Uses the variables of: Spacing, Type scale, Page layout
- Styles: Page

### Style sheet of the page

Style sheet · `PageStyle`

- Owner: trame
- Uses the variables of: Palette, Typography, Spacing, Radii, Type scale, Opacities, Strokes, Motion, Page layout
- Styles: Page

## Trame · Platform

### Where the engine's own files are

Decision · `EngineFiles`

- Decided by: trame
- Value: { prelude: ../../../trame/internal, preludeExtension: .ts, root: ../../../, pageStyle: ../page/page.css, narrowStyle: ../page/narrow.css }

### Example project

Decision · `ExampleRoot`

- Decided by: trame
- Value: examples/reservations

### Lines shown on an exit in test

Decision · `LinesOnExit`

- Decided by: trame
- Value: 3

### Temporary directories in memory

Decision · `MemoryTemporary`

- Decided by: trame
- Value: { prefix: .scenario- }

### Day of the scenarios

Decision · `TestDay`

- Decided by: trame
- Value: 2026-10-30

### Time of the scenarios

Decision · `TestTime`

- Decided by: trame
- Value: 08:00:00.000Z

### Runner of TypeScript

Decision · `TypeScriptRunner`

- Decided by: trame
- Value: tsx

### Example process

Function · `ExampleProcess` · **held**

- Owner: trame
- Parameters: { root: platform.ExampleRoot, paths: architecture.Paths, line: conventions.TrameCommands, events: std/system.NodeEvents, messages: messages.PlatformMessages }
- Implements: Process, Programs, Process log
- Depends on: Example project, Paths, Trame's commands, Messages of the platform

### A server in memory

Function · `MemoryHttpServer` · **held**

- Owner: trame
- Parameters: { events: std/system.NodeEvents, texts: std/algebra.Texts, messages: messages.PlatformMessages }
- Implements: HTTP server, Server log
- Depends on: Messages of the platform

### Terminal in memory

Function · `MemoryTerminal` · **held**

- Owner: trame
- Parameters: { kept: platform.LinesOnExit, sequences: std/algebra.Sequences, messages: messages.PlatformMessages }
- Implements: Terminal, Terminal log
- Depends on: Lines shown on an exit in test, Messages of the platform

### No registry in test

Function · `NoReportsInTest` · **held**

- Owner: trame
- Implements: Reports on packages

### Stopped clock

Function · `StoppedClock` · **held**

- Owner: trame
- Parameters: { day: platform.TestDay, time: platform.TestTime, iso: std/measures.Iso8601 }
- Implements: Clock
- Depends on: Day of the scenarios, Time of the scenarios

### System files, for reading

Implementation · `DiskReading` · **held**

- Owner: trame
- Implements: File reading

### Trees on disk

Implementation · `DiskTrees` · **held**

- Owner: trame
- Parameters: { diff: std/text.UnifiedDiff, node: std/system.NodeCli, events: std/system.NodeEvents }
- Implements: File trees

### System files, for writing

Implementation · `DiskWriting` · **held**

- Owner: trame
- Implements: File writing

### esbuild

Implementation · `Esbuild` · **held**

- Owner: trame
- Implements: Bundler
- Uses: esbuild

### Files in memory, over the disk

Implementation · `MemoryFiles` · **held**

- Owner: trame
- Parameters: { paths: architecture.Paths, temporary: platform.MemoryTemporary, diff: std/text.UnifiedDiff, file: std/text.TextFile, events: std/system.NodeEvents, encodings: std/system.NodeEncodings, texts: std/algebra.Texts, counts: std/algebra.Counts, sequences: std/algebra.Sequences, values: std/algebra.ValueTypes, messages: messages.PlatformMessages }
- Implements: File reading, File writing, File trees, Write log
- Depends on: Paths, Temporary directories in memory, Messages of the platform

### Command line

Implementation · `NodeCommandLine` · **held**

- Owner: trame
- Parameters: { terminal: architecture.Terminal, exitStatus: std/system.ExitStatus, line: conventions.TrameCommands, messages: messages.PlatformMessages }
- Implements: Command line
- Depends on: Terminal, Trame's commands, Messages of the platform

### gzip, with Node's zlib

Implementation · `NodeCompression` · **held**

- Owner: trame
- Parameters: { packing: page.PackedGraph }
- Implements: Compression
- Depends on: A page carries its graph compressed

### SHA-256 hashes

Implementation · `NodeHashing` · **held**

- Owner: trame
- Implements: Hashing

### Node HTTP server

Implementation · `NodeHttpServer` · **held**

- Owner: trame
- Implements: HTTP server

### Node paths

Implementation · `NodePaths` · **held**

- Owner: trame
- Implements: Paths

### Node process

Implementation · `NodeProcess` · **held**

- Owner: trame
- Parameters: { argv: std/system.NodeArguments, node: std/system.NodeCli, runner: platform.TypeScriptRunner }
- Implements: Process
- Depends on: Runner of TypeScript

### Node programs

Implementation · `NodePrograms` · **held**

- Owner: trame
- Parameters: { node: std/system.NodeCli, runner: platform.TypeScriptRunner, events: std/system.NodeEvents }
- Implements: Programs
- Depends on: Runner of TypeScript

### Node terminal

Implementation · `NodeTerminal` · **held**

- Owner: trame
- Parameters: { argv: std/system.NodeArguments, exitStatus: std/system.ExitStatus, events: std/system.NodeEvents, posix: std/system.Posix, messages: messages.PlatformMessages }
- Implements: Terminal
- Depends on: Messages of the platform

### Node timer

Implementation · `NodeTimer` · **held**

- Owner: trame
- Implements: Timer

### npm's reports

Implementation · `NpmReports` · **held**

- Owner: trame
- Parameters: { npm: std/system.NpmCli, values: std/algebra.ValueTypes, counts: std/algebra.Counts, punctuation: documents.Punctuation }
- Implements: Reports on packages
- Depends on: Punctuation of documents

### Page resources

Implementation · `PageResources` · **held**

- Owner: trame
- Parameters: { files: platform.EngineFiles, layout: conventions.Layout, advancement: generations.Advancement, language: typescript.TypeScript, specifiers: std/system.NodeModuleSpecifiers, texts: std/algebra.Texts, sequences: std/algebra.Sequences }
- Implements: Page resources
- Depends on: Where the engine's own files are, Project layout, What an advance assembles, TypeScript

### TypeScript compiler

Implementation · `RealTypeScript` · **held**

- Owner: trame
- Implements: TypeScript compiler
- Uses: TypeScript, Types of Node.js

### Results kept in the process

Implementation · `ResultsInTheProcess` · **held**

- Owner: trame
- Implements: Results kept

### Runs kept in the process

Implementation · `RunsInTheProcess` · **held**

- Owner: trame
- Implements: Where runs are kept

### Runs kept on disk

Implementation · `RunsOnDisk` · **held**

- Owner: trame
- Parameters: { layout: conventions.Layout, files: platform.EngineFiles, engines: engine.EngineFingerprint, scope: engine.KeptRunsScope, encodings: std/system.NodeEncodings }
- Implements: Where runs are kept
- Depends on: Project layout, Where the engine's own files are, The fingerprint of an engine, What tells a project's runs apart

### System clock

Implementation · `SystemClock` · **held**

- Owner: trame
- Parameters: { iso: std/measures.Iso8601, environment: conventions.TrameEnvironment, sequences: std/algebra.Sequences }
- Implements: Clock
- Depends on: Trame's environment

### Trame's prelude

Implementation · `TramePrelude` · **held**

- Owner: trame
- Parameters: { files: platform.EngineFiles }
- Implements: Prelude
- Depends on: Where the engine's own files are

### tsx loader

Implementation · `TsxLoader` · **held**

- Owner: trame
- Implements: Module loader
- Uses: tsx

### tree-sitter in WebAssembly

Implementation · `WebTreeSitter` · **held**

- Owner: trame
- Parameters: { messages: messages.PlatformMessages }
- Implements: Syntax trees
- Uses: web-tree-sitter
- Depends on: Messages of the platform

### The TypeScript compiler reads the declarations

Technical choice · `CompilerReadsDeclarations` · **held**

- Decided by: trame
- Context: The static analysis needs what only types say: the type argument of a decision, the documentation comment of a declaration, the module a reference points to.
- Rejected: tree-sitter alone, it sees the syntax, not the types
- Chooses: TypeScript compiler
- In: Local, Test
- Serves: A technology is changed in one node

### The engine's own files sit beside its code

Technical choice · `EngineFilesBesideCode` · **held**

- Decided by: trame
- Context: A frozen generation runs from its own directory, and reaches the shared language through links.
- Rejected: A path set in a configuration, one more value to keep in step with where the generation is
- Chooses: Trame's prelude, Page resources
- In: Local, Test
- Serves: A technology is changed in one node

### esbuild bundles the page's program

Technical choice · `EsbuildBundles` · **held**

- Decided by: trame
- Context: The page's program is TypeScript in several modules, the graph's among them; a standalone page needs it as one script, built when the page is asked for.
- Rejected: tsc alone, it compiles but does not bundle: the page would load its modules one by one; Rollup or webpack, plugins and configuration for what esbuild does in one call
- Chooses: esbuild
- In: Local, Test
- Serves: A technology is changed in one node

### Scenarios write in memory, over the disk

Technical choice · `FilesInMemoryOverTheDisk` · **held**

- Decided by: trame
- Context: A scenario runs commands that write, then read what they wrote: a shipment rereads the evidence it recorded, a release reads the copy it froze.
- Consequences: Reading and writing are one realization in the scenarios, so that what is written is read back; the disk is never written.
- Rejected: Reading the disk, writing in memory, apart, what a command wrote could not be read back: the shipment, the release and the manifest would be verified nowhere
- Chooses: Files in memory, over the disk
- In: Test
- Serves: A technology is changed in one node

### Scenarios run in memory

Technical choice · `InMemoryScenarios` · **held**

- Decided by: trame
- Context: A scenario runs the described engine on the example and reads what it wrote and printed; it must give the same result every day and leave nothing behind.
- Consequences: These realizations touch nothing but the disk they read: the logs a scenario reads come with what writes them, chosen together. The disk, the processes and the server of a machine are verified by the checks the candidate runs on one.
- Rejected: A temporary directory, slower, and a scenario could read what was written only through the platform; The system clock, the documents of the example would change every day; Commands that refuse in test, the advance, the release, the manifest, the shipment and trame dev would be verified nowhere
- Chooses: Terminal in memory, Stopped clock, No registry in test, Example process, A server in memory
- In: Test
- Serves: A technology is changed in one node

### On a machine, Node.js reads, writes and runs

Technical choice · `NodeMachine` · **held**

- Decided by: trame
- Context: What changes the world (files written, processes, the terminal, the clock) is real only on a machine; the scenarios keep it in memory.
- Consequences: Writing goes through FileWriting and FileTrees only, which the rule "Only commands write" checks; comparing trees uses GNU diff, through a process.
- Rejected: A library to compare trees, GNU diff writes the unified format the advance keeps, and is on every machine that runs it
- Chooses: System files, for reading, System files, for writing, Trees on disk, Node process, Node programs, Node terminal, System clock, npm's reports, Node HTTP server
- In: Local
- Serves: A technology is changed in one node

### NodePlatform

Technical choice · `NodePlatform` · **held**

- Decided by: trame
- Context: The bootstrap ran on Node.js, and the tools Trame uses are npm packages that resolve the Node way: the TypeScript compiler, esbuild, tsx, the tree-sitter grammars.
- Consequences: Node's built-in modules appear only in these implementations; moving to another runtime is a new family of adapters and this choice changed, the engine untouched.
- Rejected: Deno, its module resolution and its permissions would change how every package above loads; Bun, faster to start, but the WebAssembly grammars and the TypeScript compiler were not tried on it
- Chooses: Node paths, SHA-256 hashes, gzip, with Node's zlib, Node timer, Command line, Results kept in the process
- In: Local, Test
- Serves: A technology is changed in one node

### A run is kept while what it reads is as it was

Technical choice · `RunsByWhatTheyRead` · **held**

- Decided by: trame
- Context: A build of Trame played its scenarios 2,030 times: Poselia's eleven times, the example's thirty-six, for a hundred seconds of the hundred and forty; a shipment compiles Trame's graph a dozen times with the same code.
- Consequences: A scenario is played again only when the code it wires or a file its project reads has changed: a body or the declaration of a node changed plays again the scenarios that wire it, any other file (a kind, a helper in a module, a file of another project) all of them.
- Rejected: Playing every scenario at every compilation, the same code on the same files gives the same result; a shipment took thirty-six minutes
- Chooses: The runs of a project
- In: Local, Test
- Serves: A technology is changed in one node

### In the scenarios, runs are kept in the process

Technical choice · `RunsKeptInTheProcess` · **held**

- Decided by: trame
- Context: A scenario compiles its project again and again in memory: Poselia's scenarios were played eleven times in a build of Trame, the example's thirty-six.
- Consequences: What a scenario of a scenario's project played is found again in the process while nothing it reads has changed; the disk is never written.
- Rejected: On disk, as on a machine, a scenario must leave nothing behind
- Chooses: Runs kept in the process
- In: Test
- Serves: A technology is changed in one node

### On a machine, runs are kept on disk

Technical choice · `RunsKeptOnDisk` · **held**

- Decided by: trame
- Context: The commands of a shipment and of an advance run as separate processes, each compiling the same graph: what one played, the next can find only on disk.
- Consequences: Each project keeps its runs under .trame/runs, by engine; the oldest go. Deleting the directory loses nothing but time.
- Rejected: A server that keeps them, one more process to start, for what files under the project do
- Chooses: Runs kept on disk
- In: Local
- Serves: A technology is changed in one node

### tree-sitter reads the bodies

Technical choice · `TreeSitterReads` · **held**

- Decided by: trame
- Context: Bodies are written in several languages (TypeScript, Terraform, CSS) and read alike, by one reader and the queries of each language.
- Rejected: The TypeScript compiler's API, it reads TypeScript only: every other language would need its own parser; Regular expressions, the old drivers; they missed what a grammar sees; Native tree-sitter bindings, a compiler at install time; WebAssembly runs wherever Node does
- Chooses: tree-sitter in WebAssembly
- In: Local, Test
- Serves: A technology is changed in one node

### tsx runs TypeScript

Technical choice · `TsxRuns` · **held**

- Decided by: trame
- Context: The graph, its bodies and the generations are TypeScript, run as they are written.
- Consequences: The processes the engine starts import the same runner (the decision TypeScriptRunner).
- Rejected: Compiling with tsc first, one more step, and each generation would keep JavaScript beside its sources; ts-node, slower to start than tsx, which already runs the engine
- Chooses: tsx loader
- In: Local, Test
- Serves: A technology is changed in one node

## Trame · Principles

### A change to a node is a claim

Architecture decision · `ChangesAreClaims` · **held**

- Decided by: trame
- Context: Several people change the same decision: support asks for a longer period while legal caps it.
- Consequences: The compiler detects overlaps, always records them, and applies what the kind settles; the settlement names the nodes it read. It never depends on the value it settles, nor on the order of the claims.
- Rejected: The most recent wins, it hides disagreements; a kind may choose it where it makes sense
- Serves: A single source of truth
- Applied by: Compiler, Laws

### The data a product carries is a dataset

Architecture decision · `DataAsDatasets` · **held**

- Decided by: trame
- Context: An app carries content written by some and checked by others, in several languages: as nodes, each pose would have been code; as loose files, nothing would check a row, say which text lacks a language, or know that a validated row has changed since.
- Consequences: A dataset (kind dataset) holds its rows as a typed value, so the TypeScript compiler checks each row against its type; its rules run on each row at every build, and a broken one is an error naming the row; a text in several languages is an object keyed by the languages offered, and each must be there. A review is dated evidence on the dataset (the row, the language, who, and the fingerprint of what was seen): it holds while the row, in that language, still has that fingerprint, which the engine gives the kinds (lib.fingerprint). The dataset's status is held when every row is approved in every language. Wired as a dependency, it gives its rows, frozen into the program like any value.
- Rejected: A node per row, content would be code, and a person who checks a text would read the graph; JSON files read by the engine, no type checks the rows; TypeScript does for typed rows, and the same rules can check a downloaded update; A review as a field of the row, the content would change when it is reviewed, and the fingerprint with it
- Serves: A single source of truth
- Applied by: Fingerprints, Graph

### A product is delivered by a node of the graph

Architecture decision · `DeliveredByTheGraph` · **held**

- Decided by: trame
- Context: An application is opened in a browser, then installed on phones: the steps from the graph to what people open (assemble, bundle, wrap in a document, then a web application and Capacitor) were nowhere, and each product would have written them in a script.
- Consequences: The first target is a page a browser opens as it is: the component is assembled for its environment as trame assemble does, its program bundled with the page's bundler settings, its style sheets written after the variables they use, in one document with its language and its title. A delivery is refused while the graph is in error; its component must run in its environment.
- Rejected: A script beside the graph, each product would write its own, and nothing would say what reaches people; The page Trame writes for its graph, it carries a compiled graph and its explorer: a product's page carries the product
- Serves: A specification that runs
- Applied by: Deliver, Style of a delivered page

### The engine: a graph like any product's

Architecture decision · `EngineLayer` · **held**

- Decided by: trame
- Context: The engine follows the rules it imposes on products, or those rules are not credible.
- Consequences: The engine is a component (TrameCli) whose commands are entry points; its bodies pass the same checks as a product's; three architecture rules hold at every build.
- Serves: A specification that runs
- Applied by: Trame on the command line, Rendering does not read the graph, Only commands write, Effects come from the vocabulary

### A literal in a body is an error

Architecture decision · `EveryLiteralDeclared` · **held**

- Decided by: trame
- Context: The checks of a body kept the platform out, but a value written in a body was still a decision nobody answered for: Trame's own bodies held 1,077 of them.
- Consequences: One error per node, with each place, in every language a driver reads; trame.json says nothing about literals. Trame's bodies and the example's went to none before the rule came (g27, g28).
- Rejected: A list of refused values (0, 1, -1, ""), it said which literals mattered, while every one hides a meaning; A baseline of tolerated literals, it would never shrink
- Serves: A single source of truth
- Applied by: Compiler, Syntax reader

### Generations: frozen engines

Architecture decision · `GenerationLayer` · **held**

- Decided by: trame
- Context: A described engine needs an engine to build it; the one that builds it must not change while it does.
- Consequences: The language (prelude and kinds) stays shared through links until a change a generation cannot follow gives it its own copy. A wanted difference on the example is declared in the graph before it is accepted.
- Serves: A specification that runs
- Applied by: Advance, Accept a candidate, The build writes the same documents as the engine in place, Expected differences on the example

### The graph is written in TypeScript

Architecture decision · `GraphInTypeScript` · **held**

- Decided by: trame
- Context: A product's description must be checked by a compiler, navigable in an editor, and written by an LLM together with the people who decide.
- Consequences: The static reading takes titles, lines, references and type errors from the TypeScript compiler; a body is TypeScript, or another language a node of the graph describes.
- Rejected: YAML or JSON, no types, no references between nodes, no code; A language of its own, no editor, no type checker, and an LLM writes it less well
- Serves: A specification that runs
- Applied by: Static reading, TypeScript compiler, TypeScript, Documentation comment

### The graph: the description of a product

Architecture decision · `GraphLayer` · **held**

- Decided by: trame
- Context: The description changes every day, live, while the people who decide talk with the LLM that writes it.
- Consequences: Every build checks the whole graph and says what is undecided, contested, violated or untested, and who must act.
- Serves: A specification that runs
- Applied by: Compiler, Build

### The source carries the history

Architecture decision · `HistoryInTheSource` · **held**

- Decided by: trame
- Context: A decision is read by people who took it, people who apply it, and auditors who must know what was in force on a date.
- Consequences: trame publish freezes the fingerprint of each declaration in trame.lock; changing or removing a published one is an error. --at gives the graph of any date.
- Rejected: The history of Git, it records lines, not decisions, and it is not read by the build
- Serves: A single source of truth
- Applied by: Lock, Publish

### A key is made of its parts

Architecture decision · `KeysOfParts` · **held**

- Decided by: trame
- Context: Keys joined with a bar or a colon needed a separator nobody declared, which a part could contain, and which had to be split again.
- Consequences: A record that needs a part carries it (an overlap carries its target and its paths); nothing parses a key.
- Rejected: A declared separator, a part may still contain it, and the key must still be split
- Serves: A single source of truth
- Applied by: Compiler, Compilation API, Payload, Static reading, Laws

### A library is a Trame project, imported by path

Architecture decision · `LibrariesAreProjects` · **held**

- Decided by: trame
- Context: Trame's graph held generic nodes every product needs (the structures bodies share, published standards, design patterns); the example copied some of them, and the next product would have copied them again: copies drift, and their issues are counted twice.
- Consequences: A project names its libraries in its configuration (trame.json, under libraries), each by its name and its path. Their modules join its graph under the library's name (std/algebra); its nodes depend on theirs and its kinds read them. What a build shows as the project's own stops there: its documents link to the library's, which the library writes; its issues and its lock leave the library's out, and its index counts them apart. An advance builds Trame's libraries like the example, and a generation keeps a copy of each, which its program imports. A version of a library, frozen and released, comes with delivery.
- Rejected: Copying the generic nodes into each project, what the example did: the copies drift; A folder of shared modules, without a project, its nodes would have no documents, no owner and no laws of their own; An npm package from the start, a release at each change, while the library is still taking shape; it comes when a version can be frozen; Modules named alike across projects, two libraries, or a library and a project, have modules of the same name (standards): the library's name keeps them apart
- Serves: What is generic is written once
- Applied by: Project, Compiler, Compilation API, References, What belongs to a library, Advance

### A library is imported by its name

Architecture decision · `LibrariesByName` · **held**

- Decided by: trame
- Context: A project imported the standard library by paths (../std/src/algebra): moving to a frozen version would have meant rewriting every import, and nothing said which version the code was written against.
- Consequences: trame.json names each library by a path, or by a path and a version (frozen under releases/<version> by trame release, with its documents). trame manifest writes the import map of the project's manifest (package.json, imports): #<name>/* leads to the library's sources, inside the package, or through a link under .trame/ when the library is outside it. The engine gives the TypeScript compiler the same names, leading to the sources as they are on disk (it does not follow a link of the package as Node.js does). The laws refuse a file of the project that reaches into a library by a path. A release copies the library's graph, code and documents, writes again from the copy's place the imports that leave the library (the language), and is written in the library's module of releases, never in its own copy.
- Rejected: Paths into the library, every import changes with the version, and the code does not say which library it reads; An alias in the TypeScript configuration only, TypeScript would resolve it, Node.js and the bundler would not; An npm package at once, a registry and a publication for a library that changes with the product; it can come later, the import map then leads to the package; A link to the library under node_modules, the TypeScript compiler refuses a module of TypeScript found there; Links to the language beside the releases, the TypeScript compiler keeps the linked path, and would read the kinds twice
- Serves: What is generic is written once
- Applied by: Project, Laws, Write the manifest, Release a version, A release is settled, Names of a library's releases

### Code holds no hidden decision

Architecture decision · `NoHiddenDecision` · **held**

- Decided by: trame
- Context: A decision hidden in code is answered for by nobody, and nobody knows who else relies on it.
- Consequences: The checks of a body refuse a hidden dependency, an access to the platform outside an implementation, and since g28 a literal; effects come from a vocabulary; only commands write.
- Rejected: Code reviews alone, they find what a reader notices, not what the graph can check every time
- Serves: A single source of truth
- Applied by: Checks of a body, Drivers, Compiler, Effects come from the vocabulary, Only commands write

### The prelude and the compiler know no kind of node

Architecture decision · `NoKindInTheCore` · **held**

- Decided by: trame
- Context: The vocabulary of products differs from one to the next (a service level objective here, a regulation there) and keeps growing.
- Consequences: A new kind needs no change to the engine; each kind is tried on nodes drawn at random against seven laws. The assembly names only what it assembles: a component, an environment, an entry point.
- Rejected: A fixed metamodel, it would freeze the vocabulary of every product; Kinds as nodes, a node per kind would need a kind of kinds
- Serves: A specification that runs
- Applied by: Laws, Compiler, Project

### A literal in a kind or a view is an error

Architecture decision · `NoLiteralInTheLanguage` · **held**

- Decided by: trame
- Context: The kinds and the views are files, not nodes: from g44 the catalogue reported the 854 values they wrote, without errors, since no node could answer for them. From g48 the engine gave them the graph's values (Lib), and by g52 they wrote none.
- Consequences: Since g53 a file of the language that writes a literal is an error, one per file with each place, like a body: it belongs to no node, it names its file, and an assembly refuses it. A project that takes Trame's language does not write it, and is not checked for it.
- Rejected: A report, as before, nothing would stop the values from coming back; A law of the kinds, a law plays a kind on drawn values; a literal is read in the file, by the syntax reader, as in a body
- Serves: A single source of truth
- Applied by: Compiler, Syntax reader

### One output for each reader

Architecture decision · `OneOutputPerReader` · **held**

- Decided by: trame
- Context: People read the history and the reasons; an agent that writes code needs the exact expected state; a machine needs a program.
- Consequences: One source, several outputs, each from the same compilation: the documents in Markdown, the page, graph.json and snapshot.json, the frozen programs and their infrastructure.
- Serves: A single source of truth
- Applied by: Build, Take the snapshot, Machine outputs, Page, Assembly

### The traversal API is the only way to read the graph

Architecture decision · `OneWayToRead` · **held**

- Decided by: trame
- Context: Kinds and views are written by an LLM and reviewed by people: what they can read must be small, sorted, finite and read-only.
- Consequences: Two moments of the graph: the frozen one, where reading a value being settled throws, and the consolidated one. Results are sorted; traversals ignore cycles; views are frozen.
- Rejected: Access to the registry, a kind could read a value while it is being settled, or change it
- Serves: A specification that runs
- Applied by: Compilation API, Graph, Views, Rendering does not read the graph

### The prelude: the runtime of the language

Architecture decision · `PreludeLayer` · **held**

- Decided by: trame
- Context: Kinds, views and the engine must share one registry and one format, as the runtime of a compiler is shared by what it compiles.
- Consequences: The graph describes the prelude as a port; a body imports only its public API; a frozen program calls only its frozen API. The laws of kinds and views, and every generation that runs on it, protect it.
- Rejected: The prelude as nodes, it is what nodes are made of: the graph cannot produce it
- Serves: A specification that runs
- Applied by: Prelude, The prelude's public API, The frozen API, Laws

### A version ships through the graph

Architecture decision · `ShippedThroughTheGraph` · **held**

- Decided by: trame
- Context: Two products ship differently (a page placed where it is served, an engine frozen into a generation) and their pipelines lived in scripts and in their authors' heads: nothing said what had been checked, by whom, on which version, nor why a version could go.
- Consequences: A shipment holds when each obligation holds; trame ship builds its artefacts, runs its checks, records the evidence (in the evidence directory, one file of the SDLC), refuses while an obligation does not hold and names its owner, deploys with the programs the graph names (assembled for the shipment's environment, tested in memory like any code), and writes a dossier. Evidence is an attribution today (who, when, on which fingerprint); a signature type in the graph can ask for more. Each project chooses its own obligations: the language gives the kinds, the project its SDLC.
- Rejected: A continuous integration service's configuration, the steps and their reasons would live outside the graph, which would not know what was checked; such a service can run trame ship; Checks as scenarios only, a scenario runs in memory; opening the page delivered in a browser, or a phone in a hand, is evidence of another kind; A review as an approval in a pull request, it names neither what was seen nor in which language, and a later change does not undo it
- Serves: A specification that runs
- Applied by: Ship, Record evidence, Evidence of the SDLC, Where the SDLC's evidence is kept, Ship only what holds, The next generation, The candidate plays the laws

### A technology is chosen in one node

Architecture decision · `TechnologyInOneNode` · **held**

- Decided by: trame
- Context: Each implementation said which environments it served: the choice of a technology was spread over its realizations, nothing said why, and a test double or a repository over a database port had to be declared as if it touched the platform.
- Consequences: A binding chooses the realizations of one or more ports in some environments, with its reasons and the options it rejected; changing a technology is writing its realization and changing that node. A realization is reached through its port only. Strategy, Adapter, Bridge, Abstract Factory and Repository are nodes: each says what shape it requires of a choice that follows it. A graph without bindings still works as before: an implementation that names its environments answers there.
- Rejected: Environments named by each implementation, the choice is spread, and replacing a technology means editing every realization; A decision whose value names the technology, read by the code, a strategy hidden in a body, which the graph cannot follow; One kind per pattern, five mechanics for one idea: a port, its realizations, the choice that binds them
- Serves: A technology is changed in one node
- Applied by: NodePlatform, On a machine, Node.js reads, writes and runs, Scenarios run in memory, esbuild bundles the page's program, tree-sitter reads the bodies, tsx runs TypeScript, The TypeScript compiler reads the declarations, The engine's own files sit beside its code, Documents in Markdown, Figures in Mermaid, The terminal in plain text, Figures in the terminal, as text, The page in HTML, The page's figures in SVG

### Trame builds Trame

Architecture decision · `TrameBuildsTrame` · **held**

- Decided by: trame
- Context: An engine that describes products must show that its description is enough to build a product, starting with itself.
- Consequences: A capability exists only once it is written in the graph, and serves from the next generation on. A candidate is accepted only if it builds everything as the generation in place did, reassembles itself to a fixed point, and keeps the laws.
- Rejected: Editing the engine by hand, the graph would describe an engine that does not exist
- Serves: A specification that runs
- Applied by: Advance, Accept a candidate, The described engine compiles the example, The build writes the same documents as the engine in place, The laws of the kinds hold

### An undecided value blocks; it does not crash

Architecture decision · `UndecidedBlocks` · **held**

- Decided by: trame
- Context: A graph is written before everything is decided, and must still build, render and run what can run.
- Consequences: A criterion that reads an undecided value is blocked, a service that computes with one refuses with the name of the value, and the documents say who must decide.
- Rejected: A default value, the product would run on a decision nobody took
- Serves: A specification that runs
- Applied by: Compiler, Wiring

### Without evidence, a status is unknown

Architecture decision · `UnknownWithoutEvidence` · **held**

- Decided by: trame
- Context: A status read as held when nothing checked it gives a false confidence, worse than none.
- Consequences: One of the laws of the kinds: the first version of the service level objective, which declared itself held without a measurement, was refused by it.
- Serves: A specification that runs
- Applied by: Laws, The laws of the kinds hold

### Kinds and views: the vocabulary, as reviewed files

Architecture decision · `VocabularyLayer` · **held**

- Decided by: trame
- Context: The vocabulary changes less often than a product, and a mistake in it misleads every product that uses it.
- Consequences: A project names the directories of its kinds and views (trame.json), so that several share them; each kind and each view is tried against its laws before anything is built.
- Serves: A specification that runs
- Applied by: Laws, Views, Project

### The words are in catalogs

Architecture decision · `WordsInCatalogs` · **held**

- Decided by: trame
- Context: Words people read change for reasons code does not know (a clearer phrasing, another language), and they hold literals by nature.
- Consequences: A catalog's text is what it declares: it is not a literal to declare. The page, which runs where nothing is wired, calls the renderers' catalog directly. The reader and the checks of a body hold it: a sentence written in a body is a literal, an error.
- Rejected: Texts in the code, a sentence to change would mean code to change, and no language could replace another
- Serves: A single source of truth
- Applied by: Syntax reader, Checks of a body, Messages of the compiler, Messages of the drivers, Messages of the laws, Messages of the views, Messages of the outputs, Messages of trame dev, Messages of the commands, Messages of an advance, Messages of the renderers, Messages of the platform, Messages of the scenarios

## Trame · Product

### A specification that runs

Goal · `ExecutableSpecification`

- Owner: trame

### A technology is changed in one node

Goal · `ReplaceableTechnology`

- Owner: trame

### A single source of truth

Goal · `SingleSource`

- Owner: trame

### What is generic is written once

Goal · `WrittenOnce`

- Owner: trame

### Sort problems by severity

Requirement · `SeverityOrder` · **held**

- Owner: trame
- Refines: A specification that runs

### Candidate dates

Decision · `CandidateDates`

- Decided by: trame
- Value: { afterAnEnd: 1, beforeTheFirstChange: -1 }

### Claim sets

Decision · `ClaimSets`

- Decided by: trame
- Value: 30
- Allowed range: from 5 to 200

### Debouncing of saves

Decision · `DevDebounce`

- Decided by: trame
- Value: 150
- Allowed range: from 50 to 2000

### Port of trame dev

Decision · `DevPort`

- Decided by: trame
- Value: 4170

### Nodes drawn per kind

Decision · `SampleCount`

- Decided by: trame
- Value: 50
- Allowed range: from 10 to 500

### Owners drawn at random

Decision · `SampledOwners`

- Decided by: trame
- Value: person-a, person-b

### Values drawn by the laws

Decision · `SampledValues`

- Decided by: trame
- Value: { numbers: 0, 100, minutes: 1, 120, rangeStart: 0, 50, rangeWidth: 1, 50, claimantsPerSet: 3, claimsPerClaimant: 1, 2, claimValues: 0, 99, shuffledOrders: 3, year: 2026, text: text, map: { x: y }, parts: a, b, wholeValue: value, chances: { number: 0.4, record: 0.8, undecidedPart: 0.5, emptyPatch: 0.2, patchNumber: 0.5, leftOut: 0.3, undecided: 0.15, linked: 0.4, shuffle: 0.5 }, names: { module: law, target: Target, trial: Trial, seed: :resolve } }

### Values drawn by the laws of a structure

Decision · `StructureDraws`

- Decided by: trame
- Value: { draws: 100, integers: -20, 20, naturals: 0, 12, alphabet: a, b,  , `, textLength: 0, 4, listLength: 0, 6, chance: 0.5, seed: # }

### Criteria of the sort by severity

Acceptance criteria · `SeverityOrderCriteria` · **held**

- Owner: trame
- Accepts: Sort problems by severity

## Trame · Releases

### Generation 1

Release · `G1`

- Released by: trame
- Version: g1
- Released on: 2026-10-17
- What changes: A node can declare its constants; its body receives them as parameters
- Fingerprint: be0e0abd65fe24ce
- Language: own
- Releases: Trame on the command line

### Generation 10

Release · `G10`

- Released by: trame
- Version: g10
- Released on: 2026-10-18
- What changes: The language's vocabulary values in English; the transitional aliases removed. Built as g9, character for character
- Fingerprint: d12448c3f1e4ff27
- Language: own
- Releases: Trame on the command line
- Assembled by: Generation 9

### Generation 11

Release · `G11`

- Released by: trame
- Version: g11
- Released on: 2026-10-18
- What changes: Freezing writes only plain JSON data, checked at every depth; the program's variables avoid ECMAScript's reserved words
- Fingerprint: 4b677ea8158491d1
- Language: own
- Releases: Trame on the command line
- Assembled by: Generation 10

### Generation 12

Release · `G12`

- Released by: trame
- Version: g12
- Released on: 2026-10-18
- What changes: The export command is the node `Export` again: g11 assembles it as `commands_export`
- Fingerprint: 3f6083e2d55c3d8d
- Language: own
- Releases: Trame on the command line
- Assembled by: Generation 11

### Generation 13

Release · `G13`

- Released by: trame
- Version: g13
- Released on: 2026-10-18
- What changes: The `structure` kind and the `algebra` module (Counts, Sequences, Texts), whose laws are played at every compilation; the engine's core writes no 0, 1 or `""` any more
- Fingerprint: 83bc969f0c085070
- Language: own
- Releases: Trame on the command line
- Assembled by: Generation 12

### Generation 14

Release · `G14`

- Released by: trame
- Version: g14
- Released on: 2026-10-18
- What changes: Documents as blocks: a `BlankLine` element closes each Markdown block; "A, B and C" comes from the language (Intl.ListFormat); the empty text shows as `""` in constant tables
- Fingerprint: 513aee60abaff3ed
- Language: own
- Accepted differences: differences.diff
- Releases: Trame on the command line
- Assembled by: Generation 13

### Generation 15

Release · `G15`

- Released by: trame
- Version: g15
- Released on: 2026-10-18
- What changes: Commands, platform and scenarios: arguments named by destructuring, options taken by position, `NodeArguments`, `Iso8601`
- Fingerprint: c95a45534a5d0b1e
- Language: own
- Releases: Trame on the command line
- Assembled by: Generation 14

### Generation 16

Release · `G16`

- Released by: trame
- Version: g16
- Released on: 2026-10-18
- What changes: The laws draw from decided ranges (`SampledValues`); Trame's bodies write no 0, 1 or `""` any more
- Fingerprint: 2554e025a41c2360
- Language: own
- Releases: Trame on the command line
- Assembled by: Generation 15

### Generation 17

Release · `G17`

- Released by: trame
- Version: g17
- Released on: 2026-10-18
- What changes: The lock: `trame.json` refuses 0, 1, -1 and `""` in bodies unless something declares them; the assembly of a graph that writes one is refused
- Fingerprint: 0548196056128b46
- Language: own
- Accepted differences: differences.diff
- Releases: Trame on the command line
- Assembled by: Generation 16

### Generation 18

Release · `G18`

- Released by: trame
- Version: g18
- Released on: 2026-10-19
- What changes: A constant can refine a constant of another node: its value is written once, its meaning is its own, and an edge "Refines" links them
- Fingerprint: 3fbfb03eed17669a
- Language: own
- Accepted differences: differences.diff
- Releases: Trame on the command line
- Assembled by: Generation 17

### Generation 19

Release · `G19`

- Released by: trame
- Version: g19
- Released on: 2026-10-19
- What changes: The syntax layer, beside the TypeScript driver: tree-sitter behind the `SyntaxTrees` port, the `language` kind, the `syntax` and `languages` modules; `ReaderLikeBefore` finds every literal the driver finds, alike
- Fingerprint: 1eab6ff41875441e
- Language: own
- Releases: Trame on the command line
- Assembled by: Generation 18

### Generation 2

Release · `G2`

- Released by: trame
- Version: g2
- Released on: 2026-10-17
- What changes: The Markdown spec: 19 syntax elements; the Markdown renderer composes them; the page receives the engine's renderings
- Fingerprint: 7252e7e1678a47fa
- Language: own
- Releases: Trame on the command line
- Assembled by: Generation 1

### Generation 20

Release · `G20`

- Released by: trame
- Version: g20
- Released on: 2026-10-19
- What changes: The compiler reads every body through the syntax reader (`languages.Drivers`): checks and literals come from the reading, and a literal that a type expects is a literal; the old reading code leaves the engine
- Fingerprint: a96e5b4249e9af9b
- Language: own
- Accepted differences: differences.diff
- Releases: Trame on the command line
- Assembled by: Generation 19

### Generation 21

Release · `G21`

- Released by: trame
- Version: g21
- Released on: 2026-10-19
- What changes: What Trame writes in TypeScript is specified: the module `typescript` holds the language node, 20 syntax elements read back as TypeScript, and the writer that composes them; an assembled program is read back before it is written, and its values must come back
- Fingerprint: fcaaa2d5792337c4
- Language: own
- Releases: Trame on the command line
- Assembled by: Generation 20

### Generation 22

Release · `G22`

- Released by: trame
- Version: g22
- Released on: 2026-10-19
- What changes: Terraform is a language node: its queries replace the HCL driver's regular expressions, its variables are checked against the provisioning dependencies; the module `terraform` specifies what Trame writes (5 syntax elements read back as Terraform) and its writer. The old drivers are gone
- Fingerprint: cd3e2ae38cfb2714
- Language: own
- Releases: Trame on the command line
- Assembled by: Generation 21

### Generation 23

Release · `G23`

- Released by: trame
- Version: g23
- Released on: 2026-10-19
- What changes: The domains of the literals, first part: the vocabularies of the intermediate format and of the graph API in the prelude, the structure `ValueTypes`, the standards of Node and POSIX (450 → 232 literals)
- Fingerprint: c1372e9e4a3d7e33
- Language: own
- Releases: Trame on the command line
- Assembled by: Generation 22

### Generation 24

Release · `G24`

- Released by: trame
- Version: g24
- Released on: 2026-10-19
- What changes: Second part: Trame's commands and configuration, the files and paths of the engine, what `trame dev` serves (232 → 166)
- Fingerprint: 37b89a4fd821f778
- Language: own
- Releases: Trame on the command line
- Assembled by: Generation 23

### Generation 25

Release · `G25`

- Released by: trame
- Version: g25
- Released on: 2026-10-19
- What changes: Third part: the terminal text is a format of Trame's own, defined by a decision and written by 7 syntax elements (module `text`); the punctuation of documents; the words of values in the rendering catalog (166 → 82)
- Fingerprint: c2617affd59db26e
- Language: own
- Releases: Trame on the command line
- Assembled by: Generation 24

### Generation 26

Release · `G26`

- Released by: trame
- Version: g26
- Released on: 2026-10-19
- What changes: Fourth part: the page (module `page`: what it is made of, its shell, its theme and its document as 17 syntax elements) on the elements of HTML, ARIA, SVG and CSS (module `html`) (82 → 63)
- Fingerprint: 631d52d2a0370f2f
- Language: own
- Releases: Trame on the command line
- Assembled by: Generation 25

### Generation 27

Release · `G27`

- Released by: trame
- Version: g27
- Released on: 2026-10-19
- What changes: Last part: the laws' draws, keys as JSON, the names of documents, the places of a sentence, module titles read by the TypeScript API. No literal is left to specify (63 → 0)
- Fingerprint: f41aab14b09b9f7a
- Language: own
- Releases: Trame on the command line
- Assembled by: Generation 26

### Generation 28

Release · `G28`

- Released by: trame
- Version: g28
- Released on: 2026-10-19
- What changes: The rule of the language: a literal written in a body is an error, except in a catalog; no list of refused values, no setting. The example declares its standards, messages and statements
- Fingerprint: b3b3b169ec3b8d50
- Language: own
- Releases: Trame on the command line
- Assembled by: Generation 27

### Generation 29

Release · `G29`

- Released by: trame
- Version: g29
- Released on: 2026-10-19
- What changes: The graph explains Trame: the kind `adr` (architecture decisions) and the view `adrs`; the ten principles, the five layers and the decisions taken on the way are nodes, with what applies them
- Fingerprint: a2c2e4e00acd2eec
- Language: own
- Releases: Trame on the command line
- Assembled by: Generation 28

### Generation 3

Release · `G3`

- Released by: trame
- Version: g3
- Released on: 2026-10-17
- What changes: Code spans and code blocks follow CommonMark (the "backtick string" element)
- Fingerprint: e731437b5da9ad5e
- Language: own
- Accepted differences: ecarts.diff
- Releases: Trame on the command line
- Assembled by: Generation 2

### Generation 30

Release · `G30`

- Released by: trame
- Version: g30
- Released on: 2026-10-19
- What changes: `trame advance`, a command of the graph: the requirement "Accept a candidate" decides, its criteria say how; ports to run other engines and to compare trees of files
- Fingerprint: 2101e0c4e445e0bc
- Language: own
- Releases: Trame on the command line
- Assembled by: Generation 29

### Generation 31

Release · `G31`

- Released by: trame
- Version: g31
- Released on: 2026-10-19
- What changes: The first generation frozen by `trame advance`; `advance.sh` only finds the last generation and runs its command
- Fingerprint: 316cc1a13acbb87f
- Language: own
- Releases: Trame on the command line
- Assembled by: Generation 30

### Generation 32

Release · `G32`

- Released by: trame
- Version: g32
- Released on: 2026-10-20
- What changes: Trame reads HTML and CSS: two language nodes (`HtmlMarkup`, `CssStyleSheets`); the HTML, CSS and page elements are read in them, and the page reads back its style and itself
- Fingerprint: 8baaf8b55ca7fc40
- Language: own
- Releases: Trame on the command line
- Assembled by: Generation 31

### Generation 33

Release · `G33`

- Released by: trame
- Version: g33
- Released on: 2026-10-20
- What changes: The style sheets are bodies (kind `stylesheet`, a CSS driver): `page.css` and `narrow.css` write no value, only the variables of a design scale of seven decisions, taken as it was (355 → 0); the page refuses a variable it does not write
- Fingerprint: e37acd6e5fc36d65
- Language: own
- Accepted differences: differences.diff
- Releases: Trame on the command line
- Assembled by: Generation 32

### Generation 34

Release · `G34`

- Released by: trame
- Version: g34
- Released on: 2026-10-21
- What changes: Technical choices: a binding chooses what answers each port in each environment, with its reasons; a function may answer a port; five design patterns are nodes that check the shape of the choices following them (see "Technical choices and patterns")
- Fingerprint: d5e1dddea8128e50
- Language: own
- Releases: Trame on the command line
- Assembled by: Generation 33

### Generation 35

Release · `G35`

- Released by: trame
- Version: g35
- Released on: 2026-10-21
- What changes: The example's SQL behind a dialect port: each database is chosen with its dialect (Abstract Factory), SQLite and Postgres, and the repositories write no SQL; the page explores the layers of the graph step by step instead of drawing 42,000 px of them
- Fingerprint: a54fbdd07d1ce39c
- Language: own
- Releases: Trame on the command line
- Assembled by: Generation 34

### Generation 36

Release · `G36`

- Released by: trame
- Version: g36
- Released on: 2026-10-21
- What changes: One renderer, its syntax a choice (Bridge): Markdown, terminal text and the page's HTML are realizations of a syntax port per audience, the figures a second port; the page shows the HTML the engine writes, and carries its graph compressed (24 MB → 3.7 MB) (see "One renderer, its syntax a choice")
- Fingerprint: 171e1bd764c72030
- Language: own
- Releases: Trame on the command line
- Assembled by: Generation 35

### Generation 37

Release · `G37`

- Released by: trame
- Version: g37
- Released on: 2026-10-22
- What changes: The layers drawn as a map: a band per layer, a box per module with the share of each status, the edges gathered between boxes and lit with a box; a box opens on its nodes, a node on its neighbours
- Fingerprint: 27974ec4ee12c740
- Language: own
- Releases: Trame on the command line
- Assembled by: Generation 36

### Generation 38

Release · `G38`

- Released by: trame
- Version: g38
- Released on: 2026-10-23
- What changes: Generations and their deployment in the graph: each generation is a release (kind release, module releases) that trame advance writes; a project pins the generation it runs; a generation keeps its packages; its language is archived, and an older generation that no longer runs on today's receives it
- Fingerprint: 05e29ac9dd153995
- Language: own
- Releases: Trame on the command line
- Assembled by: Generation 37

### Generation 39

Release · `G39`

- Released by: trame
- Version: g39
- Released on: 2026-10-23
- What changes: The first generation deployed by trame advance: its release written in the graph by the command, its packages frozen beside it, its language archived, Trame and the example pinned to it
- Fingerprint: 6f13e4743c59aa7e
- Language: own
- Language archived: 0ff3c893800d8a56
- Releases: Trame on the command line
- Assembled by: Generation 38

### Generation 4

Release · `G4`

- Released by: trame
- Version: g4
- Released on: 2026-10-17
- What changes: A constant surrounded by spaces is shown between quotes
- Fingerprint: 5f1f31d75479e8c8
- Language: own
- Accepted differences: ecarts.diff
- Releases: Trame on the command line
- Assembled by: Generation 3

### Generation 40

Release · `G40`

- Released by: trame
- Version: g40
- Released on: 2026-10-23
- What changes: The words in catalogs: the page's script, the kinds and the views say nothing of their own; four catalogs of the language (the page, the kinds, the views, Trame's views) hold their 530 words, and the documents are the same, character for character
- Fingerprint: 9a51bae52cc202d2
- Language: own
- Language archived: 3f6b4e20cd4d0f8f
- Releases: Trame on the command line
- Assembled by: Generation 39

### Generation 41

Release · `G41`

- Released by: trame
- Version: g41
- Released on: 2026-10-23
- What changes: The page's figures drawn by the engine: graphs, their legends and timelines in SVG, from the geometry of three decisions of appearance and the words of the page's catalog; the arrowheads defined once in the page; only the explorer of a large graph is drawn by the page's script
- Fingerprint: 54ebe4248c16ef91
- Language: own
- Language archived: 4d61601a906bd372
- Releases: Trame on the command line
- Assembled by: Generation 40

### Generation 42

Release · `G42`

- Released by: trame
- Version: g42
- Released on: 2026-10-23
- What changes: Packages and their reports in the graph: a kind package, checked against the lockfile; implementations and languages name the packages they use, and implementations take their status; trame audit asks the registry and keeps its answers as dated evidence (vulnerabilities, breaking releases behind)
- Fingerprint: 0d8da7afe804a127
- Language: own
- Language archived: 753ce4f0022a96f2
- Accepted differences: differences.diff
- Releases: Trame on the command line
- Assembled by: Generation 41

### Generation 43

Release · `G43`

- Released by: trame
- Version: g43
- Released on: 2026-10-23
- What changes: The renderings of a document are a vocabulary the page script is typed by; the laws of kinds and views are requirements with acceptance criteria, applied by the engine as oracles
- Fingerprint: 8d9641685fa6927b
- Language: own
- Language archived: 753ce4f0022a96f2
- Releases: Trame on the command line
- Assembled by: Generation 42

### Generation 44

Release · `G44`

- Released by: trame
- Version: g44
- Released on: 2026-10-23
- What changes: The page is a component assembled for the browser: its entry point and its explorer are bodies of the graph, its values the graph's, the browser's globals in five implementations; the literals of the language are reported
- Fingerprint: a141a5848a796d6d
- Language: own
- Language archived: 446f44932abd9bbd
- Accepted differences: differences.diff
- Releases: Trame on the command line
- Assembled by: Generation 43

### Generation 45

Release · `G45`

- Released by: trame
- Version: g45
- Released on: 2026-10-23
- What changes: The page's program is found where the assembly writes it, named by the advancement; the releases module has a title of one line; the advance assembles and freezes both programs
- Fingerprint: ced728c24daf9348
- Language: own
- Language archived: 446f44932abd9bbd
- Releases: Trame on the command line
- Assembled by: Generation 44

### Generation 46

Release · `G46`

- Released by: trame
- Version: g46
- Released on: 2026-10-23
- What changes: The graph decides the packages' versions: trame manifest writes them into package.json; TypeScript 6.0.3 and the types of Node 22 are held below their next major, with the reason; esbuild 0.28.2, tsx 4.23.15, web-tree-sitter 0.27.1, tree-sitter-css 0.25.0; no known vulnerability, nothing behind
- Fingerprint: ff1b47202ca17d5e
- Language: own
- Language archived: 2d890e1dc7a46877
- Releases: Trame on the command line
- Assembled by: Generation 45

### Generation 47

Release · `G47`

- Released by: trame
- Version: g47
- Released on: 2026-10-24
- What changes: The engine gives the kinds and the views what they need from the graph (Lib: the algebraic structures, the lists of the language, punctuation, positions, references, dates, settings of the documents, draws, layout); the prelude names every kind, every view and the edges kinds share, and derives the names of fields and edges from their declarations
- Fingerprint: b645c7b95fecea45
- Language: own
- Language archived: 1646530513154c00
- Releases: Trame on the command line
- Assembled by: Generation 46

### Generation 48

Release · `G48`

- Released by: trame
- Version: g48
- Released on: 2026-10-24
- What changes: The lib gives the dates as the language of the documents writes them; a literal's value reaches the views
- Fingerprint: 2e61c45d55d07fe6
- Language: own
- Language archived: 9e403b58c51e8c7d
- Releases: Trame on the command line
- Assembled by: Generation 47

### Generation 49

Release · `G49`

- Released by: trame
- Version: g49
- Released on: 2026-10-24
- What changes: The punctuation is the language's: its marks are in the Language decision, and Punctuation gives those of the language decided. The kinds and the views receive the language of the declarations and the order of versions (VersionOrder, which trame audit uses too); the reports of a package and how a release reaches its language are words of the prelude; a kind names what an undecided value blocks with a noun; a literal's role has a family; the catalogue leaves the separators out of the repeated values; the seed of a law's draws is declared.
- Fingerprint: 0e3a4cfb886a5acd
- Language: own
- Language archived: 07ce4a08cc2b45a0
- Releases: Trame on the command line
- Assembled by: Generation 48

### Generation 5

Release · `G5`

- Released by: trame
- Version: g5
- Released on: 2026-10-17
- What changes: The style of history nodes is written `stroke-dasharray:4 3`, without a space; a wanted difference on the example is declared in the graph
- Fingerprint: bd17ecaa9fd4cdc7
- Language: own
- Accepted differences: ecarts.diff
- Releases: Trame on the command line
- Assembled by: Generation 4

### Generation 50

Release · `G50`

- Released by: trame
- Version: g50
- Released on: 2026-10-24
- What changes: The kinds and the views receive the graph's values: the 29 kinds, the 18 views and the 2 engine views take names from the prelude (KindName, ViewName, EdgeName, PackageReport, LanguageUse, LanguageEffect), their own fields and edges from their declarations, another kind's from it (fieldsOf, edgesOf), values, punctuation, lists, dates, positions, paths, settings, draws and versions from the lib, and their words from their catalogs: 775 literals in the language become 11. A kind names what an undecided value blocks with a noun only; the advance gives the archived language to every older generation that shares a language it cannot follow.
- Fingerprint: 0595bee532bb09c1
- Language: own
- Language archived: 0c25c647c34d39c4
- Releases: Trame on the command line
- Assembled by: Generation 49

### Generation 51

Release · `G51`

- Released by: trame
- Version: g51
- Released on: 2026-10-25
- What changes: Values with their units come from a node of the language (Units, UnitWords, UnitsOfMeasure, NumberDisplay); a text is shown visibly by a node (VisibleText, from the Unicode escape and the invisible characters); the percentiles an SLO may hold are a setting; the fields of a package and the edges of a release that the engine reads are words of the prelude (PackageField, ReleaseEdge); the catalogs count by the plural rules of their language and join with its lists; the page speaks the decided language until a payload says another; tree-sitter says which predicates of a query it keeps aside; a standard that is a language names its highlighting.
- Fingerprint: 5c678abe2b82acf4
- Language: shared
- Language archived: 23d57e3cc11c9254
- Releases: Trame on the command line
- Assembled by: Generation 50

### Generation 52

Release · `G52`

- Released by: trame
- Version: g52
- Released on: 2026-10-25
- What changes: The language holds no literal: the kinds take values with their units, texts shown visibly and the percentiles of an objective from the graph, and declare under the prelude's names the fields and edges the engine reads. The prelude presumes no language: the English plural rule, joinList, formatUnit and the default language left it; dates and lists always say their language, and counts follow the plural rules of the catalog's language. The language kind reads the predicates tree-sitter keeps aside, and names the code block of its queries as their standard does.
- Fingerprint: 9f375468ee77a9d9
- Language: shared
- Language archived: 4ecadc2e74354469
- Releases: Trame on the command line
- Assembled by: Generation 51

### Generation 53

Release · `G53`

- Released by: trame
- Version: g53
- Released on: 2026-10-25
- What changes: A literal in a kind or a view is an error: the language follows the rule of the bodies, one error per file with each place, which an assembly refuses.
- Fingerprint: 2d64787b40dd57e2
- Language: shared
- Language archived: 4ecadc2e74354469
- Releases: Trame on the command line
- Assembled by: Generation 52

### Generation 54

Release · `G54`

- Released by: trame
- Version: g54
- Released on: 2026-10-26
- What changes: Libraries: a project imports Trame projects by name and path; their modules join its graph under the library's name, their documents, issues and lock stay their own; the index and the summary count them apart; an advance builds and keeps Trame's libraries
- Fingerprint: 56e47e707e793f47
- Language: shared
- Language archived: 6939523836cb08ef
- Releases: Trame on the command line
- Assembled by: Generation 53

### Generation 55

Release · `G55`

- Released by: trame
- Version: g55
- Released on: 2026-10-26
- What changes: The standard library: std/, a Trame project of its own, holds the structures, the published standards and the design patterns; Trame and the example import it; standards, structures and vocabularies may serve a goal
- Fingerprint: 77532e277299fdaa
- Language: shared
- Language archived: ecda5f73f142c24f
- Releases: Trame on the command line
- Assembled by: Generation 54

### Generation 56

Release · `G56`

- Released by: trame
- Version: g56
- Released on: 2026-10-26
- What changes: Libraries by name and at a version: code names a library #std/…, trame manifest writes the import map (through a link when the library is outside the package), the compiler is told where each name leads; trame release freezes a library's version with its documents; a project imports a library at a version
- Fingerprint: 50d7db4258ef07d0
- Language: shared
- Language archived: c159d87e5a49cb9c
- Releases: Trame on the command line
- Assembled by: Generation 55

### Generation 57

Release · `G57`

- Released by: trame
- Version: g57
- Released on: 2026-10-26
- What changes: Delivery: the kind delivery names a component, its environment, a target and where it is written; trame deliver writes a page a browser opens as it is (the program bundled, the style sheets after their variables); the loading of a page and its browser realization move to the standard library
- Fingerprint: acf2864115f42aba
- Language: shared
- Language archived: d00b74fb8945d994
- Releases: Trame on the command line
- Assembled by: Generation 56

### Generation 58

Release · `G58`

- Released by: trame
- Version: g58
- Released on: 2026-10-26
- What changes: Data: the kind dataset holds typed rows, the key that names them, the rules each keeps and the languages its texts are written in; a review is evidence tied to the fingerprint of what was seen, which the engine gives the kinds (lib.fingerprint)
- Fingerprint: 7a4c300ef140b947
- Language: shared
- Language archived: cce6c5d4c43d02c8
- Releases: Trame on the command line
- Assembled by: Generation 57

### Generation 59

Release · `G59`

- Released by: trame
- Version: g59
- Released on: 2026-10-26
- What changes: HTML and CSS standards move to the standard library; a catalog may translate another (the same messages, in another language)
- Fingerprint: 78fc84b1b3538077
- Language: shared
- Language archived: 9b0ab6f71de5af6b
- Releases: Trame on the command line
- Assembled by: Generation 58

### Generation 6

Release · `G6`

- Released by: trame
- Version: g6
- Released on: 2026-10-17
- What changes: The Mermaid spec: 14 elements; the display choices as decisions; a figure renderer that composes the spec
- Fingerprint: da2cb6aad88f9d95
- Language: own
- Releases: Trame on the command line
- Assembled by: Generation 5

### Generation 60

Release · `G60`

- Released by: trame
- Version: g60
- Released on: 2026-10-26
- What changes: An issue belongs to whoever raised it: a rule of the project that judges a library's node raises the project's issue; the rule on effects knows the language's own (asynchronous)
- Fingerprint: fb50c1bf7082eefe
- Language: shared
- Language archived: 9b0ab6f71de5af6b
- Releases: Trame on the command line
- Assembled by: Generation 59

### Generation 61

Release · `G61`

- Released by: trame
- Version: g61
- Released on: 2026-10-26
- What changes: The graph's page names its project: Poselia graph, Standard library graph
- Fingerprint: 7925677d85e42bb0
- Language: shared
- Language archived: 9b0ab6f71de5af6b
- Releases: Trame on the command line
- Assembled by: Generation 60

### Generation 62

Release · `G62`

- Released by: trame
- Version: g62
- Released on: 2026-10-27
- What changes: SDLC in the graph: trame ship and trame evidence, the shipment's environment, an artefact's path from its delivery
- Fingerprint: 160d8b1a169ba24e
- Language: shared
- Language archived: 7f551646aaeefd4a
- Releases: Trame on the command line
- Assembled by: Generation 61

### Generation 63

Release · `G63`

- Released by: trame
- Version: g63
- Released on: 2026-10-27
- What changes: A shipment's pipeline computed once by the engine: trame ship runs it, the views can show it
- Fingerprint: def179a5fef839e8
- Language: shared
- Language archived: a4237a44fc085b74
- Releases: Trame on the command line
- Assembled by: Generation 62

### Generation 64

Release · `G64`

- Released by: trame
- Version: g64
- Released on: 2026-10-27
- What changes: Two shipments of a day are two events: evidence replaced only for the same version, a dossier named by its fingerprint
- Fingerprint: 1e3bd4ce10b74b01
- Language: shared
- Language archived: 5f58752909549014
- Releases: Trame on the command line
- Assembled by: Generation 63

### Generation 65

Release · `G65`

- Released by: trame
- Version: g65
- Released on: 2026-10-28
- What changes: The plan of a run elsewhere: what a runner prepares and the words that ship, computed from the graph; an artefact written by a writer of a library
- Fingerprint: a273888e24830957
- Language: shared
- Language archived: cf4a8cc55357ac63
- Releases: Trame on the command line
- Assembled by: Generation 64

### Generation 66

Release · `G66`

- Released by: trame
- Version: g66
- Released on: 2026-10-28
- What changes: What a place makes available is what the graph says it publishes, never a default; the plan names what it delivers, where the evidence is, and the words that record a deployment
- Fingerprint: 19892031729e7faf
- Language: shared
- Language archived: 88a097b017197d20
- Releases: Trame on the command line
- Assembled by: Generation 65

### Generation 67

Release · `G67`

- Released by: trame
- Version: g67
- Released on: 2026-10-28
- What changes: A program assembled is fingerprinted with everything it imports: a change in a body changes the candidate's fingerprint
- Fingerprint: 40fc2a709097506c
- Language: shared
- Language archived: 88a097b017197d20
- Releases: Trame on the command line
- Assembled by: Generation 66

### Generation 68

Release · `G68`

- Released by: trame
- Version: g68
- Released on: 2026-10-28
- What changes: Derived obligations: a shipment follows a policy, one obligation per family (std/obligations), and derives what it must prove from what it reaches; the foundations (no literal, a sound graph) are proven by every shipment; a gap blocks or is said, as its obligation says
- Fingerprint: 53a6a93a88e4aea5
- Language: shared
- Language archived: 4596818f4b19624e
- Accepted differences: differences.diff
- Releases: Trame on the command line
- Assembled by: Generation 67

### Generation 69

Release · `G69`

- Released by: trame
- Version: g69
- Released on: 2026-10-29
- What changes: What verifies code is backed by what runs it: a scenario verifies only what it wires (and what that code uses), a check what its program runs on a machine or what its artefacts carry; implementations are verified; trame doctor asks the machine; the graph page ships and is opened in Chromium; programs run with the loader resolved where the engine is installed; a failed check keeps the shipment but not the next build; the search of cycles no longer reports a vertex that only reaches a cycle; a live library's packages are the project's own
- Fingerprint: 5fd0249624d38496
- Language: shared
- Language archived: 4be4b86ee3b6101e
- Releases: Trame on the command line
- Assembled by: Generation 68

### Generation 7

Release · `G7`

- Released by: trame
- Version: g7
- Released on: 2026-10-18
- What changes: No literal is let through any more: 0, 1 and `""` are recorded like the others; each literal carries its role
- Fingerprint: 83690982c0d0e95a
- Language: own
- Accepted differences: ecarts.diff
- Releases: Trame on the command line
- Assembled by: Generation 6

### Generation 70

Release · `G70`

- Released by: trame
- Version: g70
- Released on: 2026-10-29
- What changes: Evidence expires with the code: the engine fingerprints the code of each node (its declaration as written, its values, the files of its bodies) and gives it to the kinds; trame ship records with each artefact built the code it was made from and with each check the code of its program; an artefact holds while that code is the code as it is, a check while its artefacts do and its program is the one that ran
- Fingerprint: 74775e272a5487e4
- Language: shared
- Language archived: f87346639e366b6d
- Accepted differences: differences.diff
- Releases: Trame on the command line
- Assembled by: Generation 69

### Generation 71

Release · `G71`

- Released by: trame
- Version: g71
- Released on: 2026-10-29
- What changes: Faster builds: the graph indexes its edges by node, so a query steps through a node's own edges (the view why, which looked for paths through every edge, took a third of a build); the reading of a program by the compiler of TypeScript and the parsing of a file by tree-sitter are kept while the process runs, given again while what they read is as it was. A build of Trame goes from about 460 to about 150 seconds
- Fingerprint: f6194e7caed45964
- Language: shared
- Language archived: f87346639e366b6d
- Releases: Trame on the command line
- Assembled by: Generation 70

### Generation 72

Release · `G72`

- Released by: trame
- Version: g72
- Released on: 2026-10-29
- What changes: Evidence sealed and tied to its engine: each record of the SDLC carries a seal computed from what it says, and a record changed by hand afterwards is not counted, an error; what a program of the engine builds or checks carries the fingerprint of that engine, which a generation records beside itself (engine.json), and holds while the project pins it; a shipment assembles a program for the environment its artefact names, so the graph page carries the page's program of the engine shipped
- Fingerprint: 0daa44db2de1dd97
- Language: shared
- Language archived: cb9186370639d1c6
- Releases: Trame on the command line
- Assembled by: Generation 71

### Generation 73

Release · `G73`

- Released by: trame
- Version: g73
- Released on: 2026-10-29
- What changes: trame plan says what a build would change, written nowhere; the engine evidence names is the fingerprint of its code, its prelude and its kinds (g72's carried the date of its assembled programs); trame ship judges what it just built by the engine that built it; a shipment builds first the artefacts its components produce (the page's program before the page); a node's code is fingerprinted from its declared data, whatever claim a compilation earlier in the process left applied
- Fingerprint: 66deff0d30098751
- Language: shared
- Language archived: cb9186370639d1c6
- Accepted differences: differences.diff
- Releases: Trame on the command line
- Assembled by: Generation 72

### Generation 74

Release · `G74`

- Released by: trame
- Version: g74
- Released on: 2026-10-30
- What changes: A run is kept: a scenario played is given back while the code it wires and the files its project reads are as they were (in the process in the scenarios, on disk under .trame/runs on a machine, by engine); the reading of TypeScript and the syntax elements' readings are kept the same way, the kinds' laws in the process; the doctor asks that a run be kept until a file changes
- Fingerprint: 165c3268cf4619b8
- Language: shared
- Language archived: 8181856b27439738
- Releases: Trame on the command line
- Assembled by: Generation 73

### Generation 75

Release · `G75`

- Released by: trame
- Version: g75
- Released on: 2026-10-30
- What changes: Dates are real: evidence counts from the day it was given; an export offers the last seven days of the project's history (a version released, evidence given), each with what had been proven by then and what was given that day, the documents that differ only by the date carried once; the day of the scenarios is the 30th of October; the view journal tells the project's history day by day
- Fingerprint: f34ec41fc249cf4c
- Language: shared
- Language archived: 1deebd97967ac43b
- Releases: Trame on the command line
- Assembled by: Generation 74

### Generation 76

Release · `G76`

- Released by: trame
- Version: g76
- Released on: 2026-10-30
- What changes: A graph compiled at a day before today judges evidence as it was given (the code and the engine of that day are not known); a day of history in an export carries its documents and figures, not the views of each node
- Fingerprint: f1f5af94b6e4092f
- Language: shared
- Language archived: 8115939989b9fc6b
- Releases: Trame on the command line
- Assembled by: Generation 75

### Generation 77

Release · `G77`

- Released by: trame
- Version: g77
- Released on: 2026-10-30
- What changes: A build does less: a view runs once (twice when the laws are played), one search finds a node's way to every goal, date formatters are kept, a directory listed in memory does not walk its tree, a file is hashed again only once changed; a run is told apart by the declarations of the nodes it wires as by their bodies; a day of history runs no view of a node
- Fingerprint: 18d8a17fa9d099a8
- Language: shared
- Language archived: 9966fe46b969be85
- Releases: Trame on the command line
- Assembled by: Generation 76

### Generation 78

Release · `G78`

- Released by: trame
- Version: g78
- Released on: 2026-10-30
- What changes: The reading of a program by TypeScript is kept apart from its check: a body changed checks the program again but reads its modules again only when one of them changed; what a body says is kept for its text in its project, beyond the process
- Fingerprint: d2b150f6bb34c5fb
- Language: shared
- Language archived: 9966fe46b969be85
- Releases: Trame on the command line
- Assembled by: Generation 77

### Generation 79

Release · `G79`

- Released by: trame
- Version: g79
- Released on: 2026-10-31
- What changes: A requirement's rule is code: written as a body (body, since g79), it receives what it reads as parameters and is held to what holds a body. The engine wires such a rule so that the node called is the rule its dependencies make (given to kinds through their views), builds a node from its body before what its kind gives from its declaration, and refuses to freeze a body amended in force
- Fingerprint: 7ce72f994d90a87d
- Language: shared
- Language archived: 49119db4a1500f21
- Accepted differences: differences.diff
- Releases: Trame on the command line
- Assembled by: Generation 78

### Generation 8

Release · `G8`

- Released by: trame
- Version: g8
- Released on: 2026-10-18
- What changes: The domain behind those values: POSIX exit status, severity order, positions, depth-first search, Trame references…
- Fingerprint: df45bf57c8925c55
- Language: own
- Releases: Trame on the command line
- Assembled by: Generation 7

### Generation 80

Release · `G80`

- Released by: trame
- Version: g80
- Released on: 2026-10-31
- What changes: Units are quantities of the graph: the engine reads in the types what each declared value measures (Quantity<typeof Time>), refuses code that adds, subtracts or compares two quantities, or multiplies them when neither is a ratio, and writes every value of a quantity in its units with the words of its catalog. trame publish --migrate publishes again the declarations the language changed the form of, with why
- Fingerprint: 3ba22adcd7f03bfb
- Language: shared
- Language archived: 0d666b812cb782bb
- Releases: Trame on the command line
- Assembled by: Generation 79

### Generation 81

Release · `G81`

- Released by: trame
- Version: g81
- Released on: 2026-10-31
- What changes: A3: a rule constrains another on examples; the engine says how each rule is called, and two rules that answer the same question for the same need are warned
- Fingerprint: 30942a8095e596ce
- Language: shared
- Language archived: 8be4500a4d9aadd5
- Accepted differences: differences.diff
- Releases: Trame on the command line
- Assembled by: Generation 80

### Generation 82

Release · `G82`

- Released by: trame
- Version: g82
- Released on: 2026-10-31
- What changes: A2, first half: a port's effects method by method, a body has those of the methods it calls; code made of a text refuses the build
- Fingerprint: ae373c71659a40be
- Language: shared
- Language archived: 99cd2acedf3b14ce
- Releases: Trame on the command line
- Assembled by: Generation 81

### Generation 83

Release · `G83`

- Released by: trame
- Version: g83
- Released on: 2026-10-31
- What changes: A2, second half: an implementation is held to what its body reaches (std's PlatformEffects, the packages' declared effects); wiring hands each node a capability limited to the methods it calls
- Fingerprint: e5498c43cb460e7d
- Language: shared
- Language archived: d03618584d3ed6d9
- Releases: Trame on the command line
- Assembled by: Generation 82

### Generation 9

Release · `G9`

- Released by: trame
- Version: g9
- Released on: 2026-10-18
- What changes: The whole workspace in English; messages in catalog nodes, in the language the graph decides; assembly always frozen
- Fingerprint: 5e8f445aa20a896f
- Language: own
- Accepted differences: differences.diff
- Releases: Trame on the command line
- Assembled by: Generation 8

## Trame · Rendering

### Places in a sentence

Decision · `SentenceSlots`

- Decided by: trame
- Value: { delimiter:   }

### Kinds and views say what; renderers say how

Architecture decision · `MeaningThenLook` · **held**

- Decided by: trame
- Context: The same answer is read in a review, in a terminal, in a page and by an agent; a kind written for one format would be wrong in the others.
- Consequences: Three points of extension: a kind says what a node is, a view which question is asked, a syntax in which format the answer comes. Renderers compose the syntax elements of their format and never read the graph.
- Rejected: Kinds that write Markdown, one format only, and the page would have to parse it back
- Serves: A specification that runs
- Applied by: Rendering of the files, Rendering in the terminal, Rendering in the page, Common rendering, Rendering does not read the graph

### One renderer, its syntax a choice

Architecture decision · `OneRendererManySyntaxes` · **held**

- Decided by: trame
- Context: Markdown, the terminal and the page each had their renderer: three walks of the same blocks, three ways of saying a status or an overlap, and the page's outside the graph.
- Consequences: The words of a document are said once, by the renderer; a new format is a realization of a syntax port and a choice, without touching the renderer. Syntax and figures vary apart: Markdown with figures as text is two choices, not a new renderer.
- Rejected: A renderer per format, the walk and the words repeated, and drifting; Figures in each syntax, a syntax and a way of drawing tied together, which no longer vary apart
- Serves: A technology is changed in one node
- Applied by: Rendering of the files, Rendering in the terminal, Rendering in the page, Documents in Markdown, Figures in Mermaid, The terminal in plain text, Figures in the terminal, as text, The page in HTML, The page's figures in SVG

### Figures of the documents written as files

Port · `FileFigures`

- Owner: trame
- Declared effects: 

### Syntax of the documents written as files

Port · `FileSyntax`

- Owner: trame
- Declared effects: 

### Figures of the page

Port · `PageFigures`

- Owner: trame
- Declared effects: 

### Syntax of the page

Port · `PageSyntax`

- Owner: trame
- Declared effects: 

### Figures of the terminal

Port · `TerminalFigures`

- Owner: trame
- Declared effects: 

### Syntax of the terminal

Port · `TerminalSyntax`

- Owner: trame
- Declared effects: 

### Common rendering

Function · `Common` · **held**

- Owner: trame
- Parameters: { values: std/algebra.ValueTypes, syntax: conventions.ReferenceSyntax, slots: rendering.SentenceSlots, dates: messages.Dates, lists: messages.Lists, texts: std/algebra.Texts, messages: messages.RenderingMessages, units: documents.Units }
- Serves: A specification that runs
- Depends on: Trame references, Places in a sentence, Dates, Lists, Messages of the renderers, Values with their units

### Rendering of the files

Function · `FileRendering` · **held**

- Owner: trame
- Parameters: { common: rendering.Common, syntax: rendering.FileSyntax, values: std/algebra.ValueTypes, texts: std/algebra.Texts, counts: std/algebra.Counts, messages: messages.RenderingMessages }
- Serves: A specification that runs
- Depends on: Common rendering, Syntax of the documents written as files, Messages of the renderers

### HTML writer

Function · `HtmlSyntax` · **held**

- Owner: trame
- Parameters: { figures: rendering.PageFigures, html: std/html.Html, markup: markup.DocumentMarkup, page: page.ThePage, element: html.HtmlElement, heading: html.HtmlHeading, escape: html.EscapedText, punctuation: documents.Punctuation, slots: rendering.SentenceSlots, counts: std/algebra.Counts, texts: std/algebra.Texts, messages: messages.RenderingMessages }
- Serves: A specification that runs
- Implements: Syntax of the page
- Depends on: Figures of the page, Documents in the page, The page, HTML element, Heading of a rank, Escaped text, Punctuation of documents, Places in a sentence, Messages of the renderers

### Markdown writer

Function · `MarkdownSyntax` · **held**

- Owner: trame
- Parameters: { figures: rendering.FileFigures, textRendering: documents.TextRendering, punctuation: documents.Punctuation, blocks: markdown.Blocks, heading: markdown.Heading, listItem: markdown.ListItem, blockQuote: markdown.BlockQuote, codeBlock: markdown.CodeBlock, emphasis: markdown.Emphasis, strong: markdown.StrongEmphasis, codeSpan: markdown.CodeSpan, link: markdown.Link, relativeReference: markdown.RelativeReference, tableCell: markdown.TableCell, table: markdown.Table, anchor: markdown.Anchor, details: markdown.Details, counts: std/algebra.Counts, texts: std/algebra.Texts, messages: messages.RenderingMessages }
- Serves: A specification that runs
- Implements: Syntax of the documents written as files
- Depends on: Figures of the documents written as files, Heading levels of Markdown documents, Punctuation of documents, Sequence of blocks, Heading, List item, Block quote, Code block, Emphasis, Strong emphasis, Code span, Link, Relative reference, Table cell, Table, Anchor, Collapsible block, Messages of the renderers

### Mermaid diagrams

Function · `MermaidDiagrams` · **held**

- Owner: trame
- Parameters: { mermaid: mermaid.Mermaid, figures: documents.MermaidFigures, palette: appearance.Palette, small: markdown.Small, flowchart: mermaid.Flowchart, node: mermaid.MermaidNode, subgraph: mermaid.Subgraph, link: mermaid.MermaidLink, classDefinition: mermaid.ClassDefinition, nodeStyle: mermaid.NodeStyle, gantt: mermaid.Gantt, ganttSection: mermaid.GanttSection, ganttTask: mermaid.GanttTask, milestone: mermaid.Milestone, counts: std/algebra.Counts, dates: messages.Dates, messages: messages.RenderingMessages }
- Serves: A specification that runs
- Implements: Figures of the documents written as files
- Depends on: Mermaid, How Mermaid figures are drawn, Palette, Small text, Flowchart, Node, Subgraph, Link, Class definition, Node style, Gantt chart, Section, Task, Milestone, Dates, Messages of the renderers

### Rendering in the page

Function · `PageRendering` · **held**

- Owner: trame
- Parameters: { common: rendering.Common, syntax: rendering.PageSyntax, values: std/algebra.ValueTypes, texts: std/algebra.Texts, counts: std/algebra.Counts, messages: messages.RenderingMessages }
- Serves: A specification that runs
- Depends on: Common rendering, Syntax of the page, Messages of the renderers

### Plain text writer

Function · `PlainTextSyntax` · **held**

- Owner: trame
- Parameters: { figures: rendering.TerminalFigures, layout: text.TerminalText, columns: text.TerminalColumns, punctuation: documents.Punctuation, cell: text.PaddedCell, table: text.Columns, item: text.ItemLine, code: text.CodeLines, lines: text.TerminalLines, counts: std/algebra.Counts, texts: std/algebra.Texts, messages: messages.RenderingMessages }
- Serves: A specification that runs
- Implements: Syntax of the terminal
- Depends on: Figures of the terminal, Terminal text, Columns in the terminal, Punctuation of documents, Padded cell, Columns, Item line, Code lines, Lines of the terminal, Messages of the renderers

### Figures in SVG

Function · `SvgFigures` · **held**

- Owner: trame
- Parameters: { html: std/html.Html, svg: std/html.Svg, aria: std/html.Aria, css: std/html.Css, markup: markup.DocumentMarkup, figures: markup.FigureMarkup, page: page.ThePage, graph: appearance.GraphDrawing, timeline: appearance.TimelineDrawing, legend: appearance.LegendDrawing, element: html.HtmlElement, empty: html.SelfClosingTag, path: html.PathData, declaration: html.CssDeclaration, escape: html.EscapedText, common: rendering.Common, dates: messages.Dates, words: messages.PageWords, messages: messages.RenderingMessages, punctuation: documents.Punctuation, iso: std/measures.Iso8601, counts: std/algebra.Counts, sequences: std/algebra.Sequences, texts: std/algebra.Texts }
- Serves: A specification that runs
- Implements: Figures of the page
- Depends on: Documents in the page, Figures in the page, The page, Drawing of a graph, Drawing of a timeline, Legend of a graph, HTML element, Self-closing tag, Path data, Declaration, Escaped text, Common rendering, Dates, Words of the page, Messages of the renderers, Punctuation of documents

### Rendering in the terminal

Function · `TerminalRendering` · **held**

- Owner: trame
- Parameters: { common: rendering.Common, syntax: rendering.TerminalSyntax, values: std/algebra.ValueTypes, texts: std/algebra.Texts, counts: std/algebra.Counts, messages: messages.RenderingMessages }
- Serves: A specification that runs
- Depends on: Common rendering, Syntax of the terminal, Messages of the renderers

### Figures as text

Function · `TextFigures` · **held**

- Owner: trame
- Parameters: { common: rendering.Common, columns: text.TerminalColumns, punctuation: documents.Punctuation, cell: text.PaddedCell, table: text.Columns, branch: text.TreeBranch, step: text.PathStep, dates: messages.Dates, counts: std/algebra.Counts, sequences: std/algebra.Sequences, texts: std/algebra.Texts, messages: messages.RenderingMessages }
- Serves: A specification that runs
- Implements: Figures of the terminal
- Depends on: Common rendering, Columns in the terminal, Punctuation of documents, Padded cell, Columns, Tree branch, Path step, Dates, Messages of the renderers

### Documents in Markdown

Technical choice · `DocumentsInMarkdown` · **held**

- Decided by: trame
- Context: The documents are read in reviews, in editors, on forges, and compared line by line by the advance: their syntax must be text that every one of them displays.
- Consequences: Another syntax for the files is a realization of "Syntax of the documents written as files" and this choice changed: the renderer, the views and the kinds do not change; the figures stay a choice of their own.
- Rejected: HTML only, unreadable as plain text, and a review no longer compares lines; AsciiDoc or reStructuredText, less well displayed by forges and editors; Plain text, no links, no tables, no figures
- Chooses: Markdown writer
- In: Local, Test
- Serves: A technology is changed in one node

### Figures in Mermaid

Technical choice · `FiguresInMermaid` · **held**

- Decided by: trame
- Context: A figure of a document must be drawn by the forges and editors that display the document, and stay text that a review compares.
- Consequences: The Markdown writer puts the lines of a figure in a code block, in the language the drawing says: figures as text in the documents would be the text figures answering "Figures of the documents written as files" too, and this choice changed; the writer does not change.
- Rejected: Images (SVG, PNG), to regenerate at every change, and silent in a text review; Graphviz (DOT), neither GitHub nor GitLab draws it; PlantUML, needs a rendering server
- Chooses: Mermaid diagrams
- In: Local, Test
- Serves: A technology is changed in one node

### The page's figures in SVG

Technical choice · `PageFiguresDrawn` · **held**

- Decided by: trame
- Context: The page's script drew the figures, outside the graph, with its own geometry and its own words; only the exploration of a large graph needs the browser, where it follows the reader's clicks.
- Consequences: Graphs, legends and timelines are written by the engine, with the geometry of the decisions of appearance; the place of an explored graph carries its index, and the page's script draws the explorer there.
- Rejected: Mermaid in the page, a library of several hundred kilobytes, and diagrams that cannot be explored; Everything drawn by the page's script, a renderer outside the graph, whose numbers no decision holds
- Chooses: Figures in SVG
- In: Local, Test
- Serves: A technology is changed in one node

### The page in HTML

Technical choice · `PageInHtml` · **held**

- Decided by: trame
- Context: The page wrote its own HTML from the intermediate format, in its script: a second renderer, outside the graph, whose words and layout could drift from the documents'.
- Consequences: The payload holds each document in Markdown, in text and in HTML; the page puts the HTML in place and draws the explorer of a large graph. A page in another markup would be another realization of "Syntax of the page".
- Rejected: HTML written by the page's script, a renderer outside the graph, with its own words; Markdown converted to HTML in the browser, a library in the page, and what Markdown cannot say (statuses, the views of a card) lost
- Chooses: HTML writer
- In: Local, Test
- Serves: A technology is changed in one node

### Figures in the terminal, as text

Technical choice · `TerminalFiguresAsText` · **held**

- Decided by: trame
- Context: A terminal draws no diagram: a figure must read as lines.
- Consequences: The terminal syntax indents the lines of a figure like any other content.
- Rejected: Mermaid in the terminal, its source does not read as a figure
- Chooses: Figures as text
- In: Local, Test
- Serves: A technology is changed in one node

### The terminal in plain text

Technical choice · `TerminalInText` · **held**

- Decided by: trame
- Context: A terminal shows characters: marks of a syntax (asterisks, pipes, tags) would be noise there.
- Consequences: A view printed in Markdown is the --format md option, which renders with the files' renderer; a terminal syntax with colours would be another realization of "Syntax of the terminal".
- Rejected: Markdown in the terminal, its marks are noise when they are not displayed; ANSI colours, lost in logs and pipes, and the scenarios compare text
- Chooses: Plain text writer
- In: Local, Test
- Serves: A technology is changed in one node

## Trame · Scenarios

### How the documents write what they show, checked

Decision · `DocumentWordsData`

- Decided by: trame
- Value: { day: { iso: 2026-10-17, written: 17 October 2026, short: 17 Oct, month: Oct }, list: { items: kinds, views, the prelude, conjunction: kinds, views and the prelude }, durations: { seconds: 900, written: 15 min }, { seconds: 7200, written: 2 h }, { seconds: 45, written: 45 s }, ratio: { value: 0.5, written: 50% }, amount: { value: 20, written: CHF 20 }, hidden: { text: a b, shown: "a\u00a0b" }, plain: a b, versions: { older: 1.9.0, newer: 1.10.0, behind: { current: 2.1.0, latest: 4.0.0, breaking: 2 }, { current: 0.3.1, latest: 0.5.0, breaking: 2 } } }

### Shape of the example

Decision · `ExampleShape`

- Decided by: trame
- Value: { scenarios: 3 }

### Expected differences on the example

Decision · `ExpectedDifferences`

- Decided by: trame
- Value: {  }

### What the engine's reckoning is checked with

Decision · `ReckoningData`

- Decided by: trame
- Value: { relation: { a: b, b: c, c: a, d: a }, cycleStarts: a, seeds: kind laws, view laws, draws: 20, bounds: { lo: 1, hi: 6 }, reference: { ref: engine.Compiler, module: engine, identifier: Compiler }, library: { module: std/algebra, name: std, own: algebra }, fingerprinted: { value: { a: 1, b: 2 }, reordered: { b: 2, a: 1 }, changed: { a: 1, b: 3 } }, place: { file: src/engine.ts, tsLine: 9, line: 10, written: src/engine.ts:10 } }

### The build writes the same documents as the engine in place

Scenario · `BuildLikeBefore` · **held**

- Owner: trame
- Parameters: { build: commands.Build, exitStatus: std/system.ExitStatus, expected: scenarios.ExpectedDifferences, writeLog: architecture.WriteLog, terminalLog: architecture.TerminalLog, layout: conventions.Layout, reading: architecture.FileReading, paths: architecture.Paths, currentProcess: architecture.Process, encodings: std/system.NodeEncodings, line: conventions.TrameCommands, counts: std/algebra.Counts, commandMessages: messages.CommandMessages, messages: messages.ScenarioMessages }
- Verifies: Build, Preparation, Compilation API, Views, Rendering of the files, Common rendering, Markdown writer, Mermaid diagrams, Machine outputs, Lock, Files in memory, over the disk, Terminal in memory, Stopped clock
- In: Test
- Depends on: Build, Expected differences on the example, Write log, Terminal log, Project layout, File reading, Paths, Process, Trame's commands, Messages of the commands, Messages of the scenarios

### The described engine compiles the example

Scenario · `CompileExample` · **held**

- Owner: trame
- Parameters: { compiler: engine.Compiler, currentProcess: architecture.Process, clock: architecture.Clock, shape: scenarios.ExampleShape, counts: std/algebra.Counts, messages: messages.ScenarioMessages }
- Verifies: Compiler, Project, Static reading, Wiring, Graph, TypeScript compiler, tsx loader, Trame's prelude, Files in memory, over the disk, Node paths, Example process, Results kept in the process
- In: Test
- Depends on: Compiler, Process, Clock, Shape of the example, Messages of the scenarios

### The documents write in the decided language

Scenario · `DocumentWords` · **held**

- Owner: trame
- Parameters: { dates: messages.Dates, lists: messages.Lists, units: documents.Units, visible: documents.VisibleText, punctuation: documents.Punctuation, language: messages.Language, versions: packages.VersionOrder, data: scenarios.DocumentWordsData, texts: std/algebra.Texts, messages: messages.ScenarioMessages }
- Verifies: Dates, Lists, Values with their units, Visible text, Punctuation of documents, Order of versions
- In: Test
- Depends on: Dates, Lists, Values with their units, Visible text, Punctuation of documents, Language, Order of versions, How the documents write what they show, checked, Messages of the scenarios

### The engine reckons as it says

Scenario · `EngineReckons` · **held**

- Owner: trame
- Parameters: { cycles: engine.Cycles, generator: engine.Generator, fingerprints: engine.Fingerprints, references: engine.References, positions: engine.Positions, data: scenarios.ReckoningData, messages: messages.ScenarioMessages }
- Verifies: Cycles, Pseudo-random generator, Fingerprints, References, Positions
- In: Test
- Depends on: Cycles, Pseudo-random generator, Fingerprints, References, Positions, What the engine's reckoning is checked with, Messages of the scenarios

### The laws of the kinds hold

Scenario · `KindLaws` · **held**

- Owner: trame
- Parameters: { laws: engine.Laws, compiler: engine.Compiler, currentProcess: architecture.Process, clock: architecture.Clock, counts: std/algebra.Counts, messages: messages.ScenarioMessages }
- Verifies: Laws
- In: Test
- Depends on: Laws, Compiler, Process, Clock, Messages of the scenarios

## Trame · SDLC

### How the graph page is opened

Decision · `GraphPageOpening`

- Decided by: trame
- Value: { settle: 2 }

### What the scenario of the graph page shows

Decision · `GraphPageScenarioData`

- Decided by: trame
- Value: { error: The page broke }

### Trame's SDLC

Component · `TrameSdlc`

- Owner: trame
- Language: typescript
- Startup: { exposure: std/tooling.ProgramCommands }
- Deployed in: Local

### What the graph page is asked

Function · `GraphPageSelectors` · **held**

- Owner: trame
- Parameters: { regions: page.PageRegions, markup: markup.DocumentMarkup, attribute: html.AttributeSelector, html: std/html.Html, css: std/html.Css, svg: std/html.Svg }
- Serves: A specification that runs
- Depends on: Regions of the page, Documents in the page, Attribute selector

### Open the graph page

Entry point · `OpenTheGraphPage` · **held**

- Owner: trame
- Trigger: { type: command, name: open-graph-page }
- Parameters: { browser: std/tooling.HeadlessBrowser, page: sdlc.GraphPage, language: messages.Language, selectors: sdlc.GraphPageSelectors, opening: sdlc.GraphPageOpening, say: sdlc.SdlcWords, exit: std/system.ExitStatus, counts: std/algebra.Counts }
- Serves: A specification that runs
- Part of: Trame's SDLC
- Depends on: The graph page, Language, What the graph page is asked, How the graph page is opened, What the programs of Trame's SDLC say

### What the programs of Trame's SDLC say

Message catalog · `SdlcWords`

- Owner: trame
- Written in: Language

### The SDLC in memory

Technical choice · `SdlcInMemory` · **held**

- Decided by: trame
- Context: A program of the SDLC is code like the engine's: its scenarios play it before it runs on a machine.
- In: Test

### The SDLC on the machine

Technical choice · `SdlcOnTheMachine` · **held**

- Decided by: trame
- Context: The graph page must be opened as a person opens it: the file exported, in a real browser.
- In: Local

### The graph page is opened as a person would

Scenario · `OpeningTheGraphPage` · **held**

- Owner: trame
- Parameters: { open: sdlc.OpenTheGraphPage, script: std/tooling.BrowserScripted, page: sdlc.GraphPage, selectors: sdlc.GraphPageSelectors, exit: std/system.ExitStatus, say: sdlc.SdlcWords, data: sdlc.GraphPageScenarioData, counts: std/algebra.Counts, messages: messages.ScenarioMessages }
- Verifies: Open the graph page, What the graph page is asked
- In: Test
- Depends on: Open the graph page, The graph page, What the graph page is asked, What the programs of Trame's SDLC say, What the scenario of the graph page shows, Messages of the scenarios

### Trame's maintainers

Role · `Maintainers`

- Owner: trame
- People: ghalaax, claude

### The candidate engine

Artefact · `EngineCandidate` · **held**

- Owner: trame
- Path: out/local/trame-cli.ts
- Produced by: Trame on the command line

### The graph page

Artefact · `GraphPage` · **held**

- Owner: trame
- Path: trame-page.html
- Media type: text/html; charset=utf-8
- Produced by: Export the page
- Carries: The page in a browser

### The page's program

Artefact · `PageProgram` · **held**

- Owner: trame
- Path: out/browser/page-app.ts
- Produced by: The page in a browser
- Assembled for: Browser

### The candidate plays the laws

Check · `CandidateKeepsTheLaws` · **held**

- Owner: trame
- Checks: The candidate engine
- Run by: Test the laws
- Signed by: Trame's maintainers

### The candidate runs on the machine

Check · `CandidateRunsOnTheMachine` · **held**

- Owner: trame
- Checks: The candidate engine
- Run by: Ask the machine
- Signed by: Trame's maintainers
- Verifies: System files, for reading, System files, for writing, Trees on disk, Node process, Node programs, Node terminal, System clock, npm's reports, Node HTTP server, Runs kept on disk

### The graph page opens

Check · `GraphPageOpens` · **held**

- Owner: trame
- Checks: The graph page
- Run by: Open the graph page
- Signed by: Trame's maintainers
- Verifies: Show the graph, Explorer of a graph, The browser's window, Local storage, The globals of the page, and trame dev, The browser's gzip

### The next generation

Shipment · `NextGeneration` · **held**

- Owner: trame
- Target: generation
- Ships: The candidate engine, The page's program, The graph page
- Deployed by: Advance
- Programs assembled for: Local
- Follows the policy: How a generation is made

### The decisions of the architecture hold

Obligation · `ArchitectureApplied`

- Owner: trame
- Serves: A specification that runs

### The rules of the architecture hold

Obligation · `ArchitectureRuled`

- Owner: trame
- Serves: A specification that runs

### The candidate is checked by programs

Obligation · `CandidateChecked`

- Owner: trame
- Serves: A specification that runs

### The packages are safe

Obligation · `EnginePackagesSafe`

- Owner: trame
- Serves: A specification that runs

### The engine is verified

Obligation · `EngineVerified`

- Owner: trame
- A gap weighs: error
- Serves: A specification that runs

### The language serves what it says

Obligation · `LanguageServed`

- Owner: trame
- Serves: A specification that runs

### How a generation is made

Policy · `GenerationMode`

- Owner: trame
- Its obligations: The engine is verified, The language serves what it says, The decisions of the architecture hold, The candidate is checked by programs, The rules of the architecture hold, The packages are safe

## Trame · Shipping

### Ship only what holds

Requirement · `ShipOnlyWhatHolds` · **held**

- Owner: trame
- Parameters: { counts: std/algebra.Counts }
- Refines: A specification that runs

### The fingerprint of a program

Decision · `ProgramBundle`

- Decided by: trame
- Value: { platform: node, format: esm, packages: external, source: ts }
- Rejected: The program's file alone, its bodies are imported, not written in it: g65 and g66 differed in a body, and their candidates had the same fingerprint; Each file it imports, listed, a fingerprint per file says more, but the bundle already holds them all, in the order Node.js reads them

### Where the SDLC's evidence is kept

Decision · `ShippingRecords`

- Decided by: trame
- Value: { evidence: sdlc, dossiers: shipments }
- Rejected: A file per shipment, a check or a review serves several shipments: its evidence is read by all of them

### Criteria of shipping only what holds

Acceptance criteria · `ShipOnlyWhatHoldsCriteria` · **held**

- Owner: trame
- Accepts: Ship only what holds

### Attribution

Function · `Attribution` · **held**

- Owner: trame
- Parameters: { hashing: architecture.Hashing, sha256: std/algorithms.Sha256, encodings: std/system.NodeEncodings, values: std/algebra.ValueTypes }
- Implements: Signatures
- Depends on: Hashing

### Evidence of the SDLC

Function · `SdlcEvidence` · **held**

- Owner: trame
- Parameters: { layout: conventions.Layout, records: shipping.ShippingRecords, reading: architecture.FileReading, paths: architecture.Paths, hashing: architecture.Hashing, sha256: std/algorithms.Sha256, encodings: std/system.NodeEncodings, json: conventions.JsonFormatting, fingerprints: engine.Fingerprints, signatures: architecture.Signatures }
- Serves: A specification that runs
- Depends on: Project layout, Where the SDLC's evidence is kept, File reading, Paths, Hashing, JSON formatting, Fingerprints, Signatures

### The plan of a run elsewhere

Function · `ShipmentRunPlan` · **held**

- Owner: trame
- Parameters: { line: conventions.TrameCommands, project: engine.Project, layout: conventions.Layout, pin: generations.EnginePin, reading: architecture.FileReading, paths: architecture.Paths, encodings: std/system.NodeEncodings, values: std/algebra.ValueTypes, sequences: std/algebra.Sequences, posix: std/system.Posix }
- Serves: A specification that runs
- Depends on: Trame's commands, Project, Project layout, The engine a project runs, File reading, Paths

### Evidence sealed by attribution

Technical choice · `SealedByAttribution` · **held**

- Decided by: trame
- Context: The evidence of the SDLC is a file anyone can edit: a record changed by hand would count as if the engine had written it, and AGENTS.md could only ask not to.
- Consequences: Each record carries its seal; the compiler counts a record only while its seal matches, and says which one does not. A signature with a key is another realization of the same port, chosen here.
- Rejected: A key now, where keys live is a question still open; the seal changes nothing to how a record is given; No seal, a rule in AGENTS.md, a rule nobody checks protects nothing
- Chooses: Attribution
- In: Local, Test
- Serves: A specification that runs

## Trame · Standards

### tree-sitter API

Standard · `TreeSitterApi`

- Maintained by: trame
- Source: tree-sitter, Using Parsers: Point (row, column), counted from zero; web-tree-sitter 0.27, Node.startPosition and startIndex
- Address: https://tree-sitter.github.io/tree-sitter/using-parsers/
- Constants: { firstRow: { value: 0, meaning: The row tree-sitter gives to the first line of a text }, firstColumn: { value: 0, meaning: The column tree-sitter gives to the first character of a line } }

### tree-sitter queries

Standard · `TreeSitterQueries`

- Maintained by: trame
- Source: tree-sitter, Query Syntax: Predicates and Directives; the predicates evaluated by web-tree-sitter 0.27 (Query.matches, Query.captures)
- Address: https://tree-sitter.github.io/tree-sitter/using-parsers/queries/3-predicates-and-directives.html
- Named in code blocks: scheme
- Constants: { eq: { value: #eq?, meaning: The capture's text equals a string, or another capture's text }, notEq: { value: #not-eq?, meaning: The capture's text differs from a string, or from another capture's text }, anyEq: { value: #any-eq?, meaning: One of the quantified capture's nodes equals the string }, anyNotEq: { value: #any-not-eq?, meaning: One of the quantified capture's nodes differs from the string }, match: { value: #match?, meaning: The capture's text matches a regular expression }, notMatch: { value: #not-match?, meaning: The capture's text does not match a regular expression }, anyMatch: { value: #any-match?, meaning: One of the quantified capture's nodes matches the regular expression }, anyNotMatch: { value: #any-not-match?, meaning: One of the quantified capture's nodes does not match the regular expression }, anyOf: { value: #any-of?, meaning: The capture's text is one of the strings that follow }, notAnyOf: { value: #not-any-of?, meaning: The capture's text is none of the strings that follow }, is: { value: #is?, meaning: Asserts a property of the match (kept aside for the reader) }, isNot: { value: #is-not?, meaning: Refutes a property of the match (kept aside for the reader) }, set: { value: #set!, meaning: Sets a property on the match: a directive, not a filter } }

### TypeScript compiler API

Standard · `TypeScriptApi`

- Maintained by: trame
- Source: TypeScript, compiler API: ts.LineAndCharacter (getLineAndCharacterOfPosition)
- Address: https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API
- Constants: { firstLine: { value: 0, meaning: The number the API gives to the first line } }

## Trame · Syntax

### Captures

Standard · `Captures`

- Maintained by: trame
- Source: Trame, the contract between the language nodes and the syntax reader; local.definition follows tree-sitter's locals convention
- Address: https://tree-sitter.github.io/tree-sitter/4-code-navigation.html
- Constants: { literalText: { value: literal.text, meaning: A text written as a value. Its value is its parts, escape sequences decoded }, literalNumber: { value: literal.number, meaning: A number, its minus sign included: -1 is one literal }, literalRegex: { value: literal.regex, meaning: A regular expression }, literalTemplate: { value: literal.template, meaning: A text with substitutions; without any, it is a text. What it substitutes is read on its own }, literalKey: { value: literal.key, meaning: A key that is not an identifier: a value written where a name goes. No name capture removes it }, literalPart: { value: literal.part, meaning: A fixed part of a text or a template, as written }, literalEscape: { value: literal.escape, meaning: An escape sequence of a text or a template, decoded as the language's escapes say }, literalSubstitution: { value: literal.substitution, meaning: What a template substitutes: shown as an ellipsis, read as code }, name: { value: name, meaning: Written like a value but names something (an identifier key, a module, a type): no literal, import or global inside it counts }, importValue: { value: import.value, meaning: A module imported as a value. It wins over import.type for the same module }, importType: { value: import.type, meaning: A module imported: for its types only, unless import.value names it too }, importComputed: { value: import.computed, meaning: An import whose path is computed: no reading can tell what it loads }, localDefinition: { value: local.definition, meaning: A name the body defines (tree-sitter's locals convention). It hides a global of the same name }, global: { value: global, meaning: What may reach outside the body: an identifier, a member, a construction }, globalName: { value: global.name, meaning: In the match of a global, the name a local definition would hide (Date, in Date.now) }, entry: { value: entry, meaning: What the body gives: its default export }, declaration: { value: declaration, meaning: A declaration of a module: an inline body is looked for in the one on its line }, body: { value: body, meaning: In a declaration, the value of a property: the body, when the property is the body's field }, bodyName: { value: body.name, meaning: In the match of a body, the name of its property }, rolePrefix: { value: role., meaning: Opens the name of a role capture: role.index catches the place of an index. What follows is a role of LiteralRoles }, callee: { value: callee, meaning: In the match of a role.argument, the name of the function called }, parameter: { value: parameter, meaning: A parameter the body declares itself (a Terraform variable): the graph must pass it, and only it }, output: { value: output, meaning: What the body gives back by name (a Terraform output) } }

### Categories of literals

Decision · `LiteralCategories`

- Decided by: trame
- Value: { regular expression: { kinds: regex }, HTTP status: { kinds: number, text: { source: ^[1-5]\d\d$ }, near: { source: writeHead|status|code, flags: i } }, number: { kinds: number }, colour: { text: { source: #[0-9a-fA-F]{3,8}\b|rgba?\( } }, media type: { text: { source: ^[a-z]+\/[a-z0-9.+-]+(;|$), flags: i } }, address: { text: { source: ^https?:\/\/ } }, file: { text: { source: \.(json|md|ts|tf|lock|html|css|db)$|^\.{0,2}\/ } }, markup: { text: { source: <[a-z]+[\s>], flags: i } }, separator: { text: { source: ^[\s\p{P}\p{S}]*$, flags: u } }, sentence: { text: { source: \p{L}[\s\p{L}'\u2019,]*\s+\p{L}, flags: u }, { source: [a-z\u00e0-\u00ff], flags: i } }, identifier: { text: { source: ^[\p{L}\d_.:-]+$, flags: u } }, template: { kinds: template }, text: {  } }

### How a literal is shown

Decision · `LiteralDisplay`

- Decided by: trame
- Value: { value: { longest: 70, kept: 67 }, context: { longest: 110, kept: 107 } }

### tree-sitter says what it keeps aside

Architecture decision · `PredicatesAsTreeSitterReadsThem` · **held**

- Decided by: trame
- Context: The kind of a language looked for the predicates of its queries with a pattern of its own (a number sign, a name, a question or an exclamation mark): it said again what the grammar of queries says, a text inside a query could fool it, and it was a literal of the language.
- Consequences: The port SyntaxTrees gives, for a query, the predicates tree-sitter keeps aside when it compiles it; the reader gives them by query; the kind of a language makes each one an error. The constants of TreeSitterQueries say which predicates tree-sitter evaluates; the standard names its highlighting, "scheme", until a package gives the grammar of queries, which would let Trame read them as a language.
- Rejected: A syntax element for a predicate, it would say how a predicate is written, and still need a pattern to find one in a query; A pattern among the standard's constants, it would count as one more predicate tree-sitter evaluates; The queries as a language now, no maintained package gives their grammar in WebAssembly
- Serves: A specification that runs
- Applied by: Syntax reader, Syntax trees

### Every language is read alike, with tree-sitter

Architecture decision · `ReadLanguagesAlike` · **held**

- Decided by: trame
- Context: Trame reads bodies to check them and to find their literals, in every language a product's bodies are written in: TypeScript and Terraform today.
- Consequences: The checks of a body are the same for every language; the queries of a language are checked against what tree-sitter evaluates, and its examples are played at every build; the port SyntaxTrees is the only place that touches tree-sitter, and no tree crosses it.
- Rejected: The TypeScript compiler API, it reads one language, and each other one would need a reader of its own; Regular expressions, the old Terraform driver: blind to texts, comments and nesting
- Serves: A specification that runs
- Applied by: Syntax reader, Checks of a body, Syntax trees

### Checks of a body

Function · `BodyChecks` · **held**

- Owner: trame
- Parameters: { prelude: conventions.PreludeApi, specifiers: std/system.NodeModuleSpecifiers, gnu: std/text.GnuPositions, sequences: std/algebra.Sequences, messages: messages.DriverMessages }
- Serves: A specification that runs
- Depends on: The prelude's public API, Messages of the drivers

### Syntax reader

Function · `SyntaxReader` · **held**

- Owner: trame
- Parameters: { trees: architecture.SyntaxTrees, captures: syntax.Captures, roles: syntax.LiteralRoles, categories: syntax.LiteralCategories, display: syntax.LiteralDisplay, treeSitter: standards.TreeSitterApi, gnu: std/text.GnuPositions, ecma: std/ecmascript.EcmaScript, textFile: std/text.TextFile, encodings: std/system.NodeEncodings, reading: architecture.FileReading, kept: architecture.KeptResults, runs: architecture.RunStore, layout: conventions.Layout, paths: architecture.Paths, hashing: architecture.Hashing, sha256: std/algorithms.Sha256, counts: std/algebra.Counts, sequences: std/algebra.Sequences, texts: std/algebra.Texts }
- Serves: A specification that runs, A single source of truth
- Depends on: Syntax trees, Captures, Roles of a literal, Categories of literals, How a literal is shown, tree-sitter API, File reading, Results kept, Where runs are kept, Project layout, Paths, Hashing

### Roles of a literal

Message catalog · `LiteralRoles`

- Owner: trame
- Written in: Language

## Trame · Terraform

### HCL

Standard · `HclSyntax`

- Maintained by: trame
- Source: HCL Native Syntax Specification (hashicorp/hcl v2, hclsyntax/spec.md); Terraform: style conventions (terraform fmt)
- Address: https://github.com/hashicorp/hcl/blob/main/hclsyntax/spec.md
- Constants: { endOfLine: { value: 
, meaning: Ends each line of a file, refines: { node: std/text.TextFile, name: endOfLine } }, space: { value:  , meaning: Separates two tokens where the layout wants it }, indent: { value:   , meaning: Begins each line of a block's body: two spaces }, equals: { value: =, meaning: Gives an attribute, or an element of an object, its value }, comma: { value: ,, meaning: Separates the elements of a tuple or of an object written on one line }, openBrace: { value: {, meaning: Opens a block's body, an object }, closeBrace: { value: }, meaning: Closes what { opened }, quote: { value: ", meaning: Opens and closes a quoted template, a block's label } }

### Terraform modules

Standard · `TerraformModules`

- Maintained by: trame
- Source: Terraform: Standard Module Structure; Module Blocks (the source meta-argument, local paths)
- Address: https://developer.hashicorp.com/terraform/language/modules/develop/structure
- Constants: { main: { value: main.tf, meaning: The file of a module's main content: a module named by its directory is read there }, module: { value: module, meaning: The type of the block that calls a module }, source: { value: source, meaning: The meta-argument of a module block that says where the module is: a local path starts with ./ or ../ } }

### Attribute

Syntax element · `HclAttribute` · **held**

- Owner: trame
- Section: Structural Elements (attribute definitions); Terraform style conventions (aligned equals signs)
- Address: https://github.com/hashicorp/hcl/blob/main/hclsyntax/spec.md#attribute-definitions
- Marks: {  }
- Parameters: { standard: terraform.HclSyntax }
- Examples: { input: name, "reservations", 21, output: name                  = "reservations" }, { input: source, "./x", 3, output: source = "./x" }
- Defined by: HCL
- Read in: Terraform
- Depends on: HCL

### Comment

Syntax element · `HclComment` · **held**

- Owner: trame
- Section: Comments and Whitespace
- Address: https://github.com/hashicorp/hcl/blob/main/hclsyntax/spec.md#comments-and-whitespace
- Marks: { opener: { value: #, meaning: Opens a comment that runs to the end of the line } }
- Parameters: { standard: terraform.HclSyntax }
- Examples: { input: infra.DatabaseName, output: # infra.DatabaseName }
- Defined by: HCL
- Read in: Terraform
- Depends on: HCL

### Text

Syntax element · `HclString` · **held**

- Owner: trame
- Section: Template Expressions (quoted templates, escape sequences)
- Address: https://github.com/hashicorp/hcl/blob/main/hclsyntax/spec.md#template-expressions
- Marks: { control: { value: 32, meaning: The characters below this code are control characters: written as escape sequences }, fill: { value: 0, meaning: Fills a numeric escape sequence up to its number of digits } }
- Parameters: { standard: terraform.HclSyntax, terraform: terraform.Terraform, ecma: std/ecmascript.EcmaScript, counts: std/algebra.Counts, sequences: std/algebra.Sequences, texts: std/algebra.Texts }
- Examples: { input: reservations, output: "reservations" }, { input: a "b"
${c} %{d}, output: "a \"b\"\n$${c} %%{d}" }
- Read as: { before: x = , after:  }
- Defined by: HCL
- Read in: Terraform
- Depends on: HCL, Terraform

### Value

Syntax element · `HclValue` · **held**

- Owner: trame
- Section: Expressions (literal values, collection values)
- Address: https://github.com/hashicorp/hcl/blob/main/hclsyntax/spec.md#collection-values
- Marks: { openBracket: { value: [, meaning: Opens a tuple }, closeBracket: { value: ], meaning: Closes a tuple }, nothing: { value: null, meaning: The value of what is not there }, identifier: { value: ^[\p{ID_Start}_][\p{ID_Continue}_-]*$, meaning: An identifier (ID_Start, then ID_Continue or a hyphen): a key that needs no quotes }, unicode: { value: u, meaning: The flag that lets the pattern read Unicode properties } }
- Parameters: { standard: terraform.HclSyntax, text: terraform.HclString, values: std/algebra.ValueTypes, counts: std/algebra.Counts }
- Examples: { input: reservations, output: "reservations" }, { input: { cpu: 2, memory_gb: 4 }, output: { cpu = 2, memory_gb = 4 } }, { input: 1, a, -2.5, output: [1, "a", -2.5] }, { input: { content type: true, memory-gb: 4, empty: {  } }, output: { "content type" = true, memory-gb = 4, empty = {} } }, { input: none, output: null }
- Read as: { before: x = , after:  }
- Defined by: HCL
- Read in: Terraform
- Depends on: HCL, Text

### Module call

Syntax element · `ModuleBlock` · **held**

- Owner: trame
- Section: Structural Elements (blocks); Terraform: Module Blocks
- Address: https://developer.hashicorp.com/terraform/language/modules/syntax
- Marks: { joint: { value: _, meaning: Joins the words of a label (snake_case) } }
- Parameters: { standard: terraform.HclSyntax, modules: terraform.TerraformModules, text: terraform.HclString, texts: std/algebra.Texts }
- Examples: { input: PostgresDatabase, source = "./x", output: module "postgres_database" {
  source = "./x"
} }, { input: Cache2Db, , output: module "cache2_db" {
} }
- Defined by: HCL
- Read in: Terraform
- Depends on: HCL, Terraform modules, Text

### Terraform

Language · `Terraform` · **held**

- Owner: trame
- Named in bodies: hcl
- Grammar: { module: @tree-sitter-grammars/tree-sitter-hcl/tree-sitter-terraform.wasm }
- Extensions: .tf
- Queries: { values: { value: 
(unary_operation "-" (literal_value (numeric_lit))) @literal.number
(numeric_lit) @literal.number
(string_lit) @literal.text
(quoted_template) @literal.template, meaning: The values written in a module: a negative number is the minus and its number }, parts: { value: 
(string_lit (template_literal) @literal.part)
(quoted_template (template_literal) @literal.part)
(template_interpolation (expression) @literal.substitution), meaning: What a text is made of: its fixed parts (escape sequences included, the grammar does not catch them apart), what a template substitutes }, keys: { value: 
((object_elem key: (expression (literal_value (string_lit) @literal.key))) (#not-match? @literal.key "^\"[A-Za-z_][A-Za-z0-9_-]*\"$")), meaning: A key of an object written as a text that is not an identifier (an identifier may hold hyphens): a value disguised as a name }, names: { value: 
(block (string_lit) @name)
(object_elem key: (expression (literal_value (string_lit) @name))), meaning: What is written like a value but names something: the labels of a block, a key of an object }, declarations: { value: 
((block (identifier) @_type (string_lit (template_literal) @parameter)) (#eq? @_type "variable"))
((block (identifier) @_type (string_lit (template_literal) @output)) (#eq? @_type "output")), meaning: What a module declares: its variables, the parameters the graph passes; its outputs, what it gives back }, roles: { value: 
(attribute (expression (literal_value) @role.initial))
(attribute (expression (template_expr) @role.initial))
(object_elem val: (expression) @role.property)
(tuple (expression) @role.element)
(template_interpolation (expression) @role.template)
(function_call (identifier) @callee (function_arguments (expression) @role.argument)), meaning: The places that give a literal its role (syntax.LiteralRoles): the value of an attribute, of an object's element, an element of a tuple, an argument } }
- Escape sequences: { mark: \, single: { n: 
, r: , t: 	, ": ", \: \ }, numeric: { prefix: U, radix: 16, digits: 8 }, { prefix: u, radix: 16, digits: 4 }, literal: { $${: ${, %%{: %{ } }
- Examples: { code: variable "name" {
  type = string
}

output "url" {
  value = "x"
}
, parameters: name, outputs: url, literals: "x", roles: initial value }, { code: size = { cpu = 2, "memory gb" = -4.5, "ok-too" = true }
, literals: 2, "memory gb", -4.5, values: 2, memory gb, -4.5, roles: property value, other, property value }, { code: url = "postgres://${var.name}:5432 $${kept}"
, literals: "postgres://${…}:5432 $${kept}", values: postgres://…:5432 ${kept} }, { code: list = ["a\n\u00e9", 3]
, values: a
é, 3, roles: element of a list, element of a list }
- Defined by: HCL
- Queries written in: tree-sitter queries
- Read by: Syntax reader
- Uses: Grammar of HCL

### Terraform writer

Function · `TerraformWriter` · **held**

- Owner: trame
- Parameters: { syntax: terraform.HclSyntax, modules: terraform.TerraformModules, layout: conventions.Layout, specifiers: std/system.NodeModuleSpecifiers, comment: terraform.HclComment, text: terraform.HclString, value: terraform.HclValue, attribute: terraform.HclAttribute, block: terraform.ModuleBlock, paths: architecture.Paths, prelude: architecture.Prelude, counts: std/algebra.Counts, sequences: std/algebra.Sequences, texts: std/algebra.Texts, dates: messages.Dates, messages: messages.DriverMessages }
- Serves: A specification that runs
- Depends on: HCL, Terraform modules, Project layout, Comment, Text, Value, Attribute, Module call, Paths, Prelude, Dates, Messages of the drivers

## Trame · Terminal text

### Box drawing

Standard · `BoxDrawing`

- Maintained by: trame
- Source: The Unicode Standard, Version 15.1, code chart Box Drawing (U+2500 to U+257F)
- Address: https://www.unicode.org/charts/PDF/U2500.pdf
- Constants: { vertical: { value: │, meaning: U+2502 BOX DRAWINGS LIGHT VERTICAL: a line that goes on below }, verticalAndRight: { value: ├, meaning: U+251C BOX DRAWINGS LIGHT VERTICAL AND RIGHT: a branch, with others below it }, upAndRight: { value: └, meaning: U+2514 BOX DRAWINGS LIGHT UP AND RIGHT: the last branch, or a step under the one before } }

### Code lines

Syntax element · `CodeLines` · **held**

- Owner: trame
- Section: Code
- Marks: { margin: { value:     , meaning: Four spaces before each line: two steps of indentation } }
- Parameters: { standard: text.TerminalText, file: std/text.TextFile }
- Examples: { input:   , const a = 1
export default a, output:       const a = 1,       export default a }
- Defined by: Terminal text
- Depends on: Terminal text

### Columns

Syntax element · `Columns` · **held**

- Owner: trame
- Section: Columns
- Marks: {  }
- Parameters: { standard: text.TerminalText, cell: text.PaddedCell, columns: text.TerminalColumns, texts: std/algebra.Texts, sequences: std/algebra.Sequences }
- Examples: { input: none, Owner, trame, Review planned, 1 March 2027,   , output:   Owner           trame,   Review planned  1 March 2027 }, { input: Name, Kind, Text, function, , output: NAME  KIND, Text  function }
- Defined by: Terminal text
- Depends on: Terminal text, Padded cell, Columns in the terminal

### Item line

Syntax element · `ItemLine` · **held**

- Owner: trame
- Section: Lists
- Marks: { bullet: { value: -, meaning: Marks an item of a list } }
- Parameters: { standard: text.TerminalText }
- Examples: { input:   , Owner: trame, output:   - Owner: trame }
- Defined by: Terminal text
- Depends on: Terminal text

### Padded cell

Syntax element · `PaddedCell` · **held**

- Owner: trame
- Section: Columns
- Marks: {  }
- Parameters: { standard: text.TerminalText, columns: text.TerminalColumns }
- Examples: { input: held, 8, output: held     }, { input: a long name, 4, output: a long name  }
- Defined by: Terminal text
- Depends on: Terminal text, Columns in the terminal

### Path step

Syntax element · `PathStep` · **held**

- Owner: trame
- Section: Paths
- Marks: { shift: { value:    , meaning: Three spaces per position: the corner of the step before, its space, and one more } }
- Parameters: { standard: text.TerminalText, box: text.BoxDrawing }
- Examples: { input: 0, serves, Bookings (goal), output: └ serves Bookings (goal) }, { input: 2, uses, Store (port), output:       └ uses Store (port) }
- Defined by: Terminal text
- Depends on: Terminal text, Box drawing

### Lines of the terminal

Syntax element · `TerminalLines` · **held**

- Owner: trame
- Section: Lines
- Marks: {  }
- Parameters: { standard: text.TerminalText, file: std/text.TextFile, counts: std/algebra.Counts }
- Examples: { input: Layers, , , , rank 1   Goals,   , output: Layers

rank 1   Goals
 }, { input: a, b, output: a
b
 }
- Defined by: Terminal text
- Depends on: Terminal text

### Tree branch

Syntax element · `TreeBranch` · **held**

- Owner: trame
- Section: Trees
- Marks: {  }
- Parameters: { standard: text.TerminalText, box: text.BoxDrawing }
- Examples: { input: , false, serves, Bookings (goal), output: { line: ├ serves Bookings (goal), under: │  } }, { input: │ , true, uses, Store (port), output: { line: │ └ uses Store (port), under: │    } }
- Defined by: Terminal text
- Depends on: Terminal text, Box drawing

### Columns in the terminal

Decision · `TerminalColumns`

- Decided by: trame
- Value: { gap: 2, minimumGap: 1, widths: { rank: 9, severity: 15, source: 22, name: 14 } }

### Terminal text

Decision · `TerminalText`

- Decided by: trame
- Value: { space:  , indent:   , maxBlankLines: 1 }
- Rejected: Markdown, a terminal does not render it: its marks would be read as they are; Colours and control sequences, an output is not always a terminal (a file, a pipe, a test): the text must say everything without them, and it is compared line by line from one generation to the next; Tabs, their width depends on the terminal: columns would no longer line up

## Trame · TypeScript

### TypeScript's libraries of types

Standard · `TypeScriptLibraries`

- Maintained by: trame
- Source: TypeScript, the lib option and the declaration files under src/lib of the compiler
- Address: https://www.typescriptlang.org/tsconfig/#lib
- Constants: { ecmaScript: { value: lib.es, meaning: How the file of an ECMAScript library of types starts its name } }
- Serves: A specification that runs

### The syntax of the programs Trame writes

Standard · `TypeScriptSyntax`

- Maintained by: trame
- Source: ECMA-262, ECMAScript 2024 (§ 12 lexical grammar, § 13 expressions, § 14 statements, § 16 modules); TypeScript 5.6 handbook (type assertions, object types, union types)
- Address: https://tc39.es/ecma262/2024/
- Constants: { endOfLine: { value: 
, meaning: Ends each line of a program, refines: { node: std/text.TextFile, name: endOfLine } }, space: { value:  , meaning: Separates two tokens where the layout wants it (§ 12.2: U+0020) }, indent: { value:   , meaning: Begins an element written on a line of its own: two spaces }, comma: { value: ,, meaning: Separates the elements of a list: arguments, properties, elements of an array (§ 12.8) }, openParenthesis: { value: (, meaning: Opens arguments, a condition, a group (§ 12.8) }, closeParenthesis: { value: ), meaning: Closes what ( opened }, openBrace: { value: {, meaning: Opens an object, the names of an import, an object type (§ 12.8) }, closeBrace: { value: }, meaning: Closes what { opened }, equals: { value: =, meaning: Gives a value: the initializer of a declaration, an assignment (§ 12.8) }, colon: { value: :, meaning: Separates a property's name from its value or its type (§ 12.8) }, importKeyword: { value: import, meaning: Opens an import declaration (§ 16.2.2) }, fromKeyword: { value: from, meaning: Introduces the module an import reads (§ 16.2.2) }, undefined: { value: undefined, meaning: The value of what is not there (§ 19.1.4), and its type }, stringType: { value: string, meaning: The type of texts (TypeScript) }, numberType: { value: number, meaning: The type of numbers (TypeScript) }, docComment: { value: /**, meaning: Opens a documentation comment: a multi-line comment whose first character is an asterisk (JSDoc) }, commentEnd: { value: */, meaning: Closes a multi-line comment (§ 12.4) } }

### Globals that reach outside

Vocabulary · `WorldGlobals`

- Owner: trame
- Words: { fetch: The network (WHATWG Fetch), process: The running process: its arguments, its environment, its exit, require: Loads a module that no import declares, globalThis: The global object, and through it everything else, setTimeout: The time: runs code later, setInterval: The time: runs code again and again, setImmediate: The event loop: runs code after the current turn, crypto: Randomness, and the platform's cryptography, performance: The time, measured by the platform, XMLHttpRequest: The network, the older way, WebSocket: The network, a connection kept open, localStorage: The browser's storage, Date.now: The time: the current instant, Math.random: Randomness, new Date(): The time: a date made of the current instant }

### List on several lines

Syntax element · `ArrayLiteral` · **held**

- Owner: trame
- Section: 13.2.4 Array initializer
- Address: https://tc39.es/ecma262/2024/#sec-array-initializer
- Marks: { open: { value: [, meaning: Opens the list }, close: { value: ], meaning: Closes the list } }
- Parameters: { standard: typescript.TypeScriptSyntax }
- Examples: { input: a, b, output: [
  a,
  b,
] }, { input: , output: [
] }
- Read as: { before: (, after: ) }
- Defined by: The syntax of the programs Trame writes
- Read in: TypeScript
- Depends on: The syntax of the programs Trame writes

### Type assertion

Syntax element · `AsExpression` · **held**

- Owner: trame
- Section: TypeScript: type assertions
- Address: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
- Marks: { keyword: { value: as, meaning: Asserts the type of what precedes it } }
- Parameters: { standard: typescript.TypeScriptSyntax }
- Examples: { input: (start()), { code?: number } | undefined, output: (start()) as { code?: number } | undefined }
- Read as: { before: (, after: ) }
- Defined by: The syntax of the programs Trame writes
- Read in: TypeScript
- Depends on: The syntax of the programs Trame writes

### Assignment

Syntax element · `Assignment` · **held**

- Owner: trame
- Section: 13.15 Assignment operators
- Address: https://tc39.es/ecma262/2024/#sec-assignment-operators
- Marks: {  }
- Parameters: { standard: typescript.TypeScriptSyntax }
- Examples: { input: process.exitCode, started.code, output: process.exitCode = started.code }
- Defined by: The syntax of the programs Trame writes
- Read in: TypeScript
- Depends on: The syntax of the programs Trame writes

### Waiting

Syntax element · `Await` · **held**

- Owner: trame
- Section: 15.8 Async function definitions (AwaitExpression)
- Address: https://tc39.es/ecma262/2024/#sec-async-function-definitions
- Marks: { keyword: { value: await, meaning: Waits for a promise, and gives its value } }
- Parameters: { standard: typescript.TypeScriptSyntax }
- Examples: { input: body_counts({}), output: await body_counts({}) }
- Read as: { before: async () => , after:  }
- Defined by: The syntax of the programs Trame writes
- Read in: TypeScript
- Depends on: The syntax of the programs Trame writes

### Call

Syntax element · `Call` · **held**

- Owner: trame
- Section: 13.3.6 Function calls
- Address: https://tc39.es/ecma262/2024/#sec-function-calls
- Marks: {  }
- Parameters: { standard: typescript.TypeScriptSyntax }
- Examples: { input: frozen.data, Rule, "m.Rule", {}, output: frozen.data(Rule, "m.Rule", {}) }, { input: f, , output: f() }
- Read as: { before: (, after: ) }
- Defined by: The syntax of the programs Trame writes
- Read in: TypeScript
- Depends on: The syntax of the programs Trame writes

### Constant

Syntax element · `ConstDeclaration` · **held**

- Owner: trame
- Section: 14.3.1 Let and const declarations
- Address: https://tc39.es/ecma262/2024/#sec-let-and-const-declarations
- Marks: { keyword: { value: const, meaning: Declares a name whose value does not change } }
- Parameters: { standard: typescript.TypeScriptSyntax }
- Examples: { input: severityOrder, frozen.value(SeverityOrder), output: const severityOrder = frozen.value(SeverityOrder) }
- Defined by: The syntax of the programs Trame writes
- Read in: TypeScript
- Depends on: The syntax of the programs Trame writes

### Default import

Syntax element · `DefaultImport` · **held**

- Owner: trame
- Section: 16.2.2 Imports (ImportedDefaultBinding)
- Address: https://tc39.es/ecma262/2024/#sec-imports
- Marks: {  }
- Parameters: { standard: typescript.TypeScriptSyntax, text: typescript.StringLiteral }
- Examples: { input: body_counts, ../../std/src/code/algebra/counts.ts, output: import body_counts from "../../std/src/code/algebra/counts.ts" }
- Defined by: The syntax of the programs Trame writes
- Read in: TypeScript
- Depends on: The syntax of the programs Trame writes, Text

### Documentation comment

Syntax element · `DocBlock` · **held**

- Owner: trame
- Section: 12.4 Comments (MultiLineComment), as JSDoc writes them
- Address: https://tc39.es/ecma262/2024/#sec-comments
- Marks: { star: { value: *, meaning: Begins each line inside a documentation comment } }
- Parameters: { standard: typescript.TypeScriptSyntax }
- Examples: { input: Generation 38, output: /**
 * Generation 38
 */ }
- Defined by: The syntax of the programs Trame writes
- Read in: TypeScript
- Depends on: The syntax of the programs Trame writes

### Export

Syntax element · `ExportDeclaration` · **held**

- Owner: trame
- Section: 16.2.3 Exports
- Address: https://tc39.es/ecma262/2024/#sec-exports
- Marks: { keyword: { value: export, meaning: Makes a declaration part of what the module gives } }
- Parameters: { standard: typescript.TypeScriptSyntax }
- Examples: { input: const G38 = 1, output: export const G38 = 1 }
- Defined by: The syntax of the programs Trame writes
- Read in: TypeScript
- Depends on: The syntax of the programs Trame writes

### Condition

Syntax element · `IfStatement` · **held**

- Owner: trame
- Section: 14.6 The if statement
- Address: https://tc39.es/ecma262/2024/#sec-if-statement
- Marks: { keyword: { value: if, meaning: Runs a statement only when its condition holds } }
- Parameters: { standard: typescript.TypeScriptSyntax }
- Examples: { input: started?.address, console.log(started.address), output: if (started?.address) console.log(started.address) }
- Defined by: The syntax of the programs Trame writes
- Read in: TypeScript
- Depends on: The syntax of the programs Trame writes

### List on one line

Syntax element · `InlineArray` · **held**

- Owner: trame
- Section: 13.2.4 Array initializer
- Address: https://tc39.es/ecma262/2024/#sec-array-initializer
- Marks: { open: { value: [, meaning: Opens the list }, close: { value: ], meaning: Closes the list } }
- Parameters: { standard: typescript.TypeScriptSyntax }
- Examples: { input: Foundations, Answers, output: [Foundations, Answers] }, { input: , output: [] }
- Read as: { before: (, after: ) }
- Defined by: The syntax of the programs Trame writes
- Read in: TypeScript
- Depends on: The syntax of the programs Trame writes

### Comment

Syntax element · `LineComment` · **held**

- Owner: trame
- Section: 12.4 Comments (SingleLineComment)
- Address: https://tc39.es/ecma262/2024/#sec-comments
- Marks: { opener: { value: //, meaning: Opens a comment that runs to the end of the line } }
- Parameters: { standard: typescript.TypeScriptSyntax }
- Examples: { input: Frozen program., output: // Frozen program. }
- Defined by: The syntax of the programs Trame writes
- Read in: TypeScript
- Depends on: The syntax of the programs Trame writes

### Property access

Syntax element · `MemberAccess` · **held**

- Owner: trame
- Section: 13.3.2 Property accessors
- Address: https://tc39.es/ecma262/2024/#sec-property-accessors
- Marks: { dot: { value: ., meaning: Separates an object from the name of its property } }
- Parameters: { standard: typescript.TypeScriptSyntax }
- Examples: { input: frozen, value, output: frozen.value }
- Read as: { before: (, after: ) }
- Defined by: The syntax of the programs Trame writes
- Read in: TypeScript
- Depends on: The syntax of the programs Trame writes

### Title of a module

Syntax element · `ModuleTitle` · **held**

- Owner: trame
- Section: 12.4 Comments (MultiLineComment), as JSDoc writes them
- Address: https://tc39.es/ecma262/2024/#sec-comments
- Marks: {  }
- Parameters: { standard: typescript.TypeScriptSyntax }
- Examples: { input: Trame · Releases, output: /** Trame · Releases */ }
- Defined by: The syntax of the programs Trame writes
- Read in: TypeScript
- Depends on: The syntax of the programs Trame writes

### Import of names

Syntax element · `NamedImport` · **held**

- Owner: trame
- Section: 16.2.2 Imports (NamedImports)
- Address: https://tc39.es/ecma262/2024/#sec-imports
- Marks: {  }
- Parameters: { standard: typescript.TypeScriptSyntax, text: typescript.StringLiteral }
- Examples: { input: Positions, References, ../../src/engine.ts, output: import { Positions, References } from "../../src/engine.ts" }
- Defined by: The syntax of the programs Trame writes
- Read in: TypeScript
- Depends on: The syntax of the programs Trame writes, Text

### Object on several lines

Syntax element · `ObjectBlock` · **held**

- Owner: trame
- Section: 13.2.5 Object initializer
- Address: https://tc39.es/ecma262/2024/#sec-object-initializer
- Marks: {  }
- Parameters: { standard: typescript.TypeScriptSyntax }
- Examples: { input: owner: "trame", version: "g38", output: {
  owner: "trame",
  version: "g38",
} }, { input: , output: {
} }
- Read as: { before: (, after: ) }
- Defined by: The syntax of the programs Trame writes
- Read in: TypeScript
- Depends on: The syntax of the programs Trame writes

### Object

Syntax element · `ObjectLiteral` · **held**

- Owner: trame
- Section: 13.2.5 Object initializer
- Address: https://tc39.es/ecma262/2024/#sec-object-initializer
- Marks: {  }
- Parameters: { standard: typescript.TypeScriptSyntax, counts: std/algebra.Counts }
- Examples: { input: exposure: nodeCommandLine, output: { exposure: nodeCommandLine } }, { input: a, b: c, output: { a, b: c } }, { input: , output: {} }
- Read as: { before: (, after: ) }
- Defined by: The syntax of the programs Trame writes
- Read in: TypeScript
- Depends on: The syntax of the programs Trame writes

### Object type

Syntax element · `ObjectType` · **held**

- Owner: trame
- Section: TypeScript: object types
- Address: https://www.typescriptlang.org/docs/handbook/2/objects.html
- Marks: { separator: { value: ;, meaning: Separates the properties of an object type } }
- Parameters: { standard: typescript.TypeScriptSyntax }
- Examples: { input: address?: string, code?: number, output: { address?: string; code?: number } }
- Read as: { before: type T = , after:  }
- Defined by: The syntax of the programs Trame writes
- Read in: TypeScript
- Depends on: The syntax of the programs Trame writes

### Optional property access

Syntax element · `OptionalAccess` · **held**

- Owner: trame
- Section: 13.3.9 Optional chains
- Address: https://tc39.es/ecma262/2024/#sec-optional-chains
- Marks: { mark: { value: ?., meaning: Reads a property only if the object is there } }
- Parameters: { standard: typescript.TypeScriptSyntax }
- Examples: { input: started, code, output: started?.code }
- Read as: { before: (, after: ) }
- Defined by: The syntax of the programs Trame writes
- Read in: TypeScript
- Depends on: The syntax of the programs Trame writes

### Optional property of a type

Syntax element · `OptionalPropertySignature` · **held**

- Owner: trame
- Section: TypeScript: optional properties
- Address: https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties
- Marks: { question: { value: ?, meaning: Marks a property that may be missing } }
- Parameters: { standard: typescript.TypeScriptSyntax }
- Examples: { input: code, number, output: code?: number }
- Read as: { before: type T = { , after:  } }
- Defined by: The syntax of the programs Trame writes
- Read in: TypeScript
- Depends on: The syntax of the programs Trame writes

### Group

Syntax element · `Parenthesized` · **held**

- Owner: trame
- Section: 13.2.9 The grouping operator
- Address: https://tc39.es/ecma262/2024/#sec-grouping-operator
- Marks: {  }
- Parameters: { standard: typescript.TypeScriptSyntax }
- Examples: { input: a ?? b, output: (a ?? b) }
- Read as: { before: (, after: ) }
- Defined by: The syntax of the programs Trame writes
- Read in: TypeScript
- Depends on: The syntax of the programs Trame writes

### Property

Syntax element · `Property` · **held**

- Owner: trame
- Section: 13.2.5 Object initializer (PropertyDefinition)
- Address: https://tc39.es/ecma262/2024/#sec-object-initializer
- Marks: { identifier: { value: ^[\p{ID_Start}_$][\p{ID_Continue}$\u200C\u200D]*$, meaning: An IdentifierName (§ 12.7): a name that needs no quotes }, unicode: { value: u, meaning: The flag that lets the pattern read Unicode properties } }
- Parameters: { standard: typescript.TypeScriptSyntax, text: typescript.StringLiteral }
- Examples: { input: layout, layout, output: layout }, { input: terminal, nodeTerminal, output: terminal: nodeTerminal }, { input: content-type, "text/html", output: "content-type": "text/html" }
- Read as: { before: ({ , after:  }) }
- Defined by: The syntax of the programs Trame writes
- Read in: TypeScript
- Depends on: The syntax of the programs Trame writes, Text

### Strict inequality

Syntax element · `StrictInequality` · **held**

- Owner: trame
- Section: 13.11 Equality operators
- Address: https://tc39.es/ecma262/2024/#sec-equality-operators
- Marks: { operator: { value: !==, meaning: Holds when the two values differ, without converting them } }
- Parameters: { standard: typescript.TypeScriptSyntax }
- Examples: { input: started?.code, undefined, output: started?.code !== undefined }
- Read as: { before: (, after: ) }
- Defined by: The syntax of the programs Trame writes
- Read in: TypeScript
- Depends on: The syntax of the programs Trame writes

### Text

Syntax element · `StringLiteral` · **held**

- Owner: trame
- Section: 12.9.4 String literals; 25.5.2 JSON.stringify
- Address: https://tc39.es/ecma262/2024/#sec-literals-string-literals
- Marks: {  }
- Parameters: { standard: typescript.TypeScriptSyntax }
- Examples: { input: Build, output: "Build" }, { input: "Trame" · Local ·, output: "\"Trame\" · Local ·" }
- Read as: { before: (, after: ) }
- Defined by: The syntax of the programs Trame writes
- Read in: TypeScript
- Depends on: The syntax of the programs Trame writes

### Union type

Syntax element · `UnionType` · **held**

- Owner: trame
- Section: TypeScript: union types
- Address: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
- Marks: { bar: { value: |, meaning: Separates the types of a union } }
- Parameters: { standard: typescript.TypeScriptSyntax }
- Examples: { input: { code?: number }, undefined, output: { code?: number } | undefined }
- Read as: { before: type T = , after:  }
- Defined by: The syntax of the programs Trame writes
- Read in: TypeScript
- Depends on: The syntax of the programs Trame writes

### TypeScript

Language · `TypeScript` · **held**

- Owner: trame
- Named in bodies: typescript
- Grammar: { module: tree-sitter-typescript/tree-sitter-typescript.wasm }
- Extensions: .ts
- Queries: { values: { value: 
(unary_expression operator: "-" argument: (number)) @literal.number
(number) @literal.number
(string) @literal.text
(template_string) @literal.template
(regex) @literal.regex, meaning: The values written in the code: a negative number is the minus and its number }, parts: { value: 
(string (string_fragment) @literal.part)
(template_string (string_fragment) @literal.part)
(escape_sequence) @literal.escape
(template_substitution (_) @literal.substitution), meaning: What a text is made of: its fragments, its escape sequences, what a template substitutes }, keys: { value: 
((pair key: (string) @literal.key) (#not-match? @literal.key "^[\"'][A-Za-z_$][A-Za-z0-9_$]*[\"']$")), meaning: A key written as a text that is not an identifier ("content-type"): a value disguised as a name }, names: { value: 
(pair key: (string) @name)
(public_field_definition name: (string) @name)
(method_definition name: (string) @name)
(subscript_expression index: (string) @name)
(export_statement source: (string) @name)
((expression_statement (string) @name) (#eq? @name "\"use strict\""))
(literal_type) @name
(type_annotation) @name
(type_arguments) @name
(type_parameters) @name
(type_query) @name
(interface_declaration) @name
(type_alias_declaration) @name, meaning: What is written like a value but names something: a key, a property read by its name, a re-exported module, the directive, the types }, imports: { value: 
(import_statement source: (string) @import.type)
((import_statement (import_clause (identifier)) source: (string) @import.value) @_import (#not-match? @_import "^import\\s+type\\s"))
((import_statement (import_clause (namespace_import)) source: (string) @import.value) @_import (#not-match? @_import "^import\\s+type\\s"))
((import_statement (import_clause (named_imports (import_specifier) @_specifier)) source: (string) @import.value) @_import
  (#not-match? @_specifier "^type\\s") (#not-match? @_import "^import\\s+type\\s"))
((import_statement source: (string) @import.value) @_import (#match? @_import "^import\\s*[\"']"))
(call_expression function: (import) arguments: (arguments . (string) @import.value))
((call_expression function: (import) arguments: (arguments . (_) @import.computed)) (#not-match? @import.computed "^[\"']")), meaning: The modules imported: for their types only, unless a default, a namespace, a name without type, a bare import or a load asks for the value }, locals: { value: 
(variable_declarator name: (identifier) @local.definition)
(required_parameter pattern: (identifier) @local.definition)
(optional_parameter pattern: (identifier) @local.definition)
(function_declaration name: (identifier) @local.definition)
(catch_clause parameter: (identifier) @local.definition)
(shorthand_property_identifier_pattern) @local.definition
(pair_pattern value: (identifier) @local.definition)
(array_pattern (identifier) @local.definition)
(assignment_pattern left: (identifier) @local.definition)
(import_clause (identifier) @local.definition)
(namespace_import (identifier) @local.definition)
(import_specifier name: (identifier) @local.definition)
(import_specifier alias: (identifier) @local.definition), meaning: The names a body defines: variables, parameters, functions, what it imports. They hide a global of the same name }, globals: { value: 
((identifier) @global (#any-of? @global "fetch" "process" "require" "globalThis" "setTimeout" "setInterval" "setImmediate" "crypto" "performance" "XMLHttpRequest" "WebSocket" "localStorage"))
((shorthand_property_identifier) @global (#any-of? @global "fetch" "process" "require" "globalThis" "setTimeout" "setInterval" "setImmediate" "crypto" "performance" "XMLHttpRequest" "WebSocket" "localStorage"))
((member_expression object: (identifier) @global.name) @global (#any-of? @global "Date.now" "Math.random"))
((new_expression constructor: (identifier) @global.name) @global (#any-of? @global "new Date()")), meaning: The globals that reach outside (WorldGlobals): an identifier, a member read, a date made of the current instant }, entry: { value: (export_statement "default") @entry, meaning: What a body gives: its default export }, bodies: { value: 
(program (_) @declaration)
(pair key: (property_identifier) @body.name value: (_) @body), meaning: Where an inline body is: the declarations of a module, and the properties of what they declare }, roles: { value: 
(subscript_expression index: [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.index)
(binary_expression left: [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.arithmetic operator: ["+" "-" "*" "/" "%" "**"])
(binary_expression operator: ["+" "-" "*" "/" "%" "**"] right: [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.arithmetic)
(binary_expression left: [(string) (template_string)] @role.concatenation operator: ["+" "-" "*" "/" "%" "**"])
(binary_expression operator: ["+" "-" "*" "/" "%" "**"] right: [(string) (template_string)] @role.concatenation)
(augmented_assignment_expression operator: ["+=" "-="] right: [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.arithmetic)
(augmented_assignment_expression operator: ["+=" "-="] right: [(string) (template_string)] @role.concatenation)
(binary_expression left: [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.bitwise operator: ["&" "|" "^" "<<" ">>" ">>>"])
(binary_expression operator: ["&" "|" "^" "<<" ">>" ">>>"] right: [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.bitwise)
(binary_expression left: [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.comparison operator: ["===" "!==" "==" "!=" "<" "<=" ">" ">="])
(binary_expression operator: ["===" "!==" "==" "!=" "<" "<=" ">" ">="] right: [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.comparison)
(binary_expression left: [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.default operator: ["??" "||"])
(binary_expression operator: ["??" "||"] right: [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.default)
(binary_expression left: [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.condition operator: "&&")
(binary_expression operator: "&&" right: [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.condition)
(assignment_expression right: [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.assignment)
(ternary_expression condition: [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.condition)
(ternary_expression consequence: [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.branch)
(ternary_expression alternative: [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.branch)
(call_expression arguments: (arguments [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.argument))
(call_expression function: (identifier) @callee arguments: (arguments [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.argument))
(call_expression function: (member_expression property: (_) @callee) arguments: (arguments [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.argument))
(call_expression function: (await_expression (identifier) @callee) arguments: (arguments [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.argument))
(call_expression function: (await_expression (member_expression property: (_) @callee)) arguments: (arguments [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.argument))
(new_expression arguments: (arguments [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.argument))
(new_expression constructor: (identifier) @callee arguments: (arguments [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.argument))
(new_expression constructor: (member_expression property: (_) @callee) arguments: (arguments [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.argument))
(variable_declarator value: [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.initial)
(pair key: (string) @role.property)
(pair value: [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.property)
(return_statement [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.returned)
(arrow_function body: [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.returned)
(array [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.element)
(switch_case value: [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.case)
(template_substitution [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.template)
(required_parameter value: [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.default)
(optional_parameter value: [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.default)
(object_assignment_pattern right: [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.default)
(assignment_pattern right: [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.default)
(spread_element [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.statement)
(expression_statement [(number) (string) (template_string) (regex) (unary_expression operator: "-") (parenthesized_expression [(number) (string) (template_string) (regex) (unary_expression operator: "-")])] @role.statement), meaning: The places that give a literal its role (syntax.LiteralRoles), and the function an argument goes to (the grammar reads await f<T>(x) as a call of await f) } }
- Escape sequences: { mark: \, single: { 0:  , n: 
, t: 	, r: , b: , f: , v: , 
: , 
: , : ,  : ,  :  }, numeric: { prefix: u{, radix: 16, close: } }, { prefix: u, radix: 16, digits: 4 }, { prefix: x, radix: 16, digits: 2 } }
- Examples: { code: xs[0], literals: 0, roles: index, values: 0 }, { code: const o = { owner: "trame", "content-type": 1 }, literals: "trame", "content-type", 1, roles: property value, property value, property value }, { code: const s = `${a} · ${b}` + "\u2192", literals: `${…} · ${…}`, "\u2192", values: … · …, →, roles: concatenation, concatenation }, { code: const n = -1; f(x, 2); new Map([3]); o.m(4), literals: -1, 2, 3, 4, roles: initial value, argument of f, element of a list, argument of m }, { code: const r = /ab+/g; const t = `${a} ${b}`; const u = `${`b${c}`}`, literals: /ab+/g, `${…} ${…}`, `${…}`, `b${…}`, roles: initial value, initial value, initial value, in a template }, { code: type K = "a" | "b"; const x = y as "c"; z["key"] = 1; const f = (n: 2) => n, literals: 1, roles: assignment }, { code: import type { T } from "./t"
import { readFileSync } from "node:fs"
import x, { type U } from "./x"
import { type V } from "./v"
const m = await import(name), literals: , imports: { module: ./t, typeOnly: true }, { module: node:fs, typeOnly: false }, { module: ./x, typeOnly: false }, { module: ./v, typeOnly: true }, { module: name, typeOnly: false } }, { code: function f(process: P) { return process.env }
fetch(url); Date.now(); new Date(); new Date(t), globals: fetch, Date.now, new Date() }, { code: export default body, literals: , entry: true }, { code: interface E {
  on: T
  in: Node<"c">
}, literals: "c", errors: 2 }, { code: interface E {
  on: T;
  in: Node<"c">
}, literals:  }
- Queries written in: tree-sitter queries
- Read by: Syntax reader
- Watches the globals: Globals that reach outside
- Uses: Grammar of TypeScript

### Names of a program

Decision · `ProgramNames`

- Decided by: trame
- Value: { result: started, bodyPrefix: body_ }

### TypeScript writer

Function · `TypeScriptWriter` · **held**

- Owner: trame
- Parameters: { language: typescript.TypeScript, syntax: typescript.TypeScriptSyntax, frozen: conventions.FrozenApi, node: std/system.NodeProcessApi, specifiers: std/system.NodeModuleSpecifiers, names: typescript.ProgramNames, stepNames: conventions.StepNames, references: conventions.ReferenceSyntax, comment: typescript.LineComment, text: typescript.StringLiteral, member: typescript.MemberAccess, optional: typescript.OptionalAccess, call: typescript.Call, wait: typescript.Await, group: typescript.Parenthesized, property: typescript.Property, object: typescript.ObjectLiteral, array: typescript.ArrayLiteral, constant: typescript.ConstDeclaration, namedImport: typescript.NamedImport, defaultImport: typescript.DefaultImport, assertion: typescript.AsExpression, optionalProperty: typescript.OptionalPropertySignature, objectType: typescript.ObjectType, union: typescript.UnionType, condition: typescript.IfStatement, differs: typescript.StrictInequality, assignment: typescript.Assignment, paths: architecture.Paths, prelude: architecture.Prelude, reservedWords: std/ecmascript.EcmaScriptReservedWords, sequences: std/algebra.Sequences, texts: std/algebra.Texts, dates: messages.Dates, messages: messages.DriverMessages }
- Serves: A specification that runs
- Depends on: TypeScript, The syntax of the programs Trame writes, The frozen API, Names of a program, Names of steps, Trame references, Comment, Text, Property access, Optional property access, Call, Waiting, Group, Property, Object, List on several lines, Constant, Import of names, Default import, Type assertion, Optional property of a type, Object type, Union type, Condition, Strict inequality, Assignment, Paths, Prelude, Dates, Messages of the drivers
