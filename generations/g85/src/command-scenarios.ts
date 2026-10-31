/** Trame · Scenarios of the commands */

import type { Bundle, Payload } from "../trame/kernel"
import { AmendmentField, BundleMode, EvidenceSource, KindName, Severity, ShipmentEdge, Status, TriggerType } from "../trame/kernel"
import { scenario } from "../kinds/scenario"
import { decision } from "../kinds/decision"
import {
  Process, WriteLog, TerminalLog, ProcessLog, ServerLog, Test, Compression, Clock, FileReading, FileWriting, FileTrees, Paths, Timer, CommandLine,
  Signatures,
} from "./architecture"
import { PayloadBuilder, Differences, Assembly, Project, Compiler, DateBundle, DevServer, DevService, ShipmentPipeline, Views, EngineFingerprint, ProjectRuns } from "./engine"
import {
  ShowView, ViewByName, RenderView, EmitPayload, Assemble, Assembler, TestKinds, TakeSnapshot, Publish, Audit, Release, WriteManifest, Export, Run, Dev,
  Deliver, Ship, RecordEvidence, Doctor, DoctorProbe, Advance, Build, Plan, Amend, BuildComparison,
} from "./commands"
import { SyntaxReader, BodyChecks } from "./syntax"
import { TypeScript, TypeScriptWriter, StringLiteral } from "./typescript"
import { TerraformWriter } from "./terraform"
import { Drivers } from "./languages"
import { Page } from "./page"
import { Doctype } from "./html"
import { TerminalRendering, PlainTextSyntax, TextFigures, PageRendering, HtmlSyntax, SvgFigures } from "./rendering"
import {
  WebTreeSitter, Esbuild, NodeCompression, PageResources, StoppedClock, NoReportsInTest, MemoryHttpServer, NodeTimer, NodeCommandLine, MemoryTerminal,
  NodeHashing, RunsInTheProcess, InPlaceSources,
} from "./platform"
import { ReleaseRecords } from "./generations"
import { PackageAudit } from "./packages"
import { SdlcEvidence, ShipmentRunPlan, ShippingRecords, Attribution } from "./shipping"
import { DevDebounce } from "./product"
import { ExitStatus, NodeEncodings } from "#std/system"
import { Counts, Sequences, Texts, ValueTypes } from "#std/algebra"
import { ServerSentEvents, Http } from "#std/web"
import { TrameCommands, Layout } from "./conventions"
import { ScenarioMessages, DriverMessages, OutputMessages, CommandMessages, PlatformMessages, AdvanceMessages, CompilerMessages } from "./messages"
import { GnuPositions, TextFile } from "#std/text"

// The commands run by the described engine on the example, in memory: what they print, what they write, what they
// refuse. Each scenario says what it verifies, and runs it (a node it does not wire, it may not claim).

/**
 * Bodies the reader is given
 * A body with a literal, and what the reader finds in it; a body that imports a module of the project; one that reaches
 * the network through a global; a file body that exports nothing; a text that is not TypeScript.
 */
export const BodySamples = decision<{
  literal: { code: string; literals: string[]; roles: string[] }
  hidden: { code: string; module: string }
  global: { code: string; name: string }
  silent: string
  broken: string
}>({
  owner: "trame",
  value: {
    literal: { code: "export default (o: O) => ({ owner: \"trame\", at: o.list[2] })", literals: ["\"trame\"", "2"], roles: ["property value", "index"] },
    hidden: { code: "import { limit } from \"./limits\"\nexport default () => limit", module: "./limits" },
    global: { code: "export default (url: string) => fetch(url)", name: "fetch" },
    silent: "const body = () => undefined",
    broken: "export default ( =>",
  },
})

/**
 * A body is read and checked
 * The reader finds the literals of a body with their roles, through tree-sitter; the checks refuse a body that imports
 * a module of the project (a hidden dependency), one that reaches the platform through a global unless its kind may, a
 * file body that exports nothing, and a text that does not follow the grammar.
 */
export const BodiesReadAndChecked = scenario({
  owner: "trame",
  verifies: [SyntaxReader, BodyChecks, WebTreeSitter],
  env: Test,
  deps: {
    reader: SyntaxReader, checks: BodyChecks, typescript: TypeScript, samples: BodySamples, driver: DriverMessages, gnu: GnuPositions, counts: Counts,
    messages: ScenarioMessages,
  },
  body: ({ reader, checks, typescript, samples, driver, gnu, counts, messages }) => async (check) => {
    await reader.load(typescript)
    const found = reader.example(typescript, samples.literal.code)
    check(messages.literalsFound(samples.literal.literals.length),
      found.literals.join() === samples.literal.literals.join() && found.roles.join() === samples.literal.roles.join())
    const body = { language: typescript.name, ambient: false, entry: true }
    const whats = (code: string, ambient: boolean) => checks.check(reader.read(typescript, code), { ...body, ambient }).map((i) => i.what)
    check(messages.hiddenDependencyRefused(samples.hidden.module), whats(samples.hidden.code, false).join() === driver.hiddenDependency(samples.hidden.module))
    check(messages.globalRefusedUnlessAmbient(samples.global.name),
      whats(samples.global.code, false).join() === driver.platformAccess(samples.global.name) && counts.isEmpty(whats(samples.global.code, true)))
    check(messages.silentBodyRefused(), whats(samples.silent, false).join() === driver.noDefaultExport())
    const broken = reader.read(typescript, samples.broken)
    const [first] = checks.check(broken, body)
    check(messages.brokenBodyRefused(), counts.any(broken.errors) && first?.severity === Severity.error &&
      first.what === driver.notTheLanguage(typescript.name, broken.errors.map((e) => e.line + gnu.separator + e.column)))
  },
})

/**
 * Views asked of the example
 * A view of the whole project and what it shows; a view of one module, with a figure, and a node the figure draws; a
 * word that names neither a command nor a view.
 */
export const ViewSamples = decision<{ project: { view: string; shows: string }; module: { view: string; module: string; draws: string }; unknown: string }>({
  owner: "trame",
  value: {
    project: { view: "adrs", shows: "Secrets stay out of the graph" },
    module: { view: "module", module: "architecture", draws: "Reservations API" },
    unknown: "nothing-named-so",
  },
})

/**
 * A view in the terminal
 * trame view writes a view of the example in plain text, its figures drawn as text; the same view asked by its name
 * alone is written alike; asked in JSON, it is the intermediate format; a word that names no command and no view is
 * refused, with the views there are.
 */
export const ViewsInTheTerminal = scenario({
  owner: "trame",
  verifies: [ShowView, ViewByName, RenderView, TerminalRendering, PlainTextSyntax, TextFigures],
  env: Test,
  deps: {
    show: ShowView, byName: ViewByName, terminalLog: TerminalLog, line: TrameCommands, exitStatus: ExitStatus, samples: ViewSamples,
    texts: Texts, counts: Counts, messages: ScenarioMessages,
  },
  body: ({ show, byName, terminalLog, line, exitStatus, samples, texts, counts, messages }) => async (check) => {
    const printed = (from: number) => texts.concat(terminalLog.lines().slice(from))
    const { project, module } = samples
    const shown = await show({ params: { command: line.view }, body: { args: [project.view] } })
    const asView = printed(counts.zero)
    check(messages.viewWritten(project.view), shown.status === exitStatus.success && asView.includes(project.shows))
    let from = terminalLog.lines().length
    await byName({ params: { command: project.view, commands: line.build }, body: { args: [] } })
    check(messages.viewByItsName(project.view), printed(from) === asView)
    from = terminalLog.lines().length
    await show({ params: { command: line.view }, body: { args: [module.view, module.module] } })
    check(messages.figureDrawnAsText(module.draws), printed(from).includes(module.draws))
    from = terminalLog.lines().length
    await show({ params: { command: line.view }, body: { args: [project.view, line.format, line.json] } })
    const json = JSON.parse(printed(from)) as { view?: string }
    check(messages.viewInJson(), json.view === project.view)
    const unknown = await byName({ params: { command: samples.unknown, commands: line.build }, body: { args: [] } })
    check(messages.unknownWordRefused(samples.unknown), unknown.status === exitStatus.failure)
  },
})

/**
 * What an SVG figure opens with
 */
export const SvgSample = decision<{ opening: string }>({ owner: "trame", value: { opening: "<svg" } })

/**
 * The graph in the intermediate format
 * trame payload writes the example compiled at its date: its nodes, its documents, each rendered in Markdown, in text
 * and in HTML (its figures in SVG), the dates where it may change. Two payloads alike differ in nothing; a node removed,
 * a status changed, the difference says so.
 */
export const PayloadOfTheGraph = scenario({
  owner: "trame",
  verifies: [EmitPayload, PayloadBuilder, PageRendering, HtmlSyntax, SvgFigures, Differences],
  env: Test,
  deps: {
    payload: EmitPayload, differences: Differences, terminalLog: TerminalLog, line: TrameCommands, exitStatus: ExitStatus, output: OutputMessages,
    texts: Texts, counts: Counts, messages: ScenarioMessages, svg: SvgSample,
  },
  body: ({ payload, differences, terminalLog, line, exitStatus, output, texts, counts, messages, svg }) => async (check) => {
    const r = await payload({ params: { command: line.payload }, body: { args: [] } })
    const p = JSON.parse(texts.concat(terminalLog.lines())) as Payload
    check(messages.payloadWritten(p.nodes.length, p.documents.length), r.status === exitStatus.success && counts.any(p.nodes) && counts.any(p.documents))
    const renders = Object.values(p.renders ?? {})
    check(messages.documentsRenderedThrice(), renders.length === p.documents.length && renders.every((x) => x.markdown && x.text && x.html))
    check(messages.figuresInSvg(), renders.some((x) => x.html?.includes(svg.opening) === true))
    check(messages.samePayloadNoChange(), differences.diffPayloads(p, p) === undefined)
    const [gone, ...kept] = p.nodes
    const changed = { ...p, nodes: kept }
    const said = JSON.stringify(differences.diffPayloads(p, changed) ?? null)
    check(messages.removalSaid(), gone !== undefined && said.includes(JSON.stringify(output.nodeRemoved(gone.title))))
  },
})

/**
 * The page of the graph
 * The page is made of the example's payload: its program bundled by esbuild, its style read back in CSS, the page read
 * back in HTML, the graph it carries packed in it, its title the project's.
 */
export const PageOfTheGraph = scenario({
  owner: "trame",
  verifies: [Page, Esbuild, NodeCompression, PageResources],
  env: Test,
  deps: {
    payload: EmitPayload, page: Page, compression: Compression, project: Project, currentProcess: Process, clock: Clock, terminalLog: TerminalLog,
    line: TrameCommands, output: OutputMessages, texts: Texts, messages: ScenarioMessages,
  },
  body: ({ payload, page, compression, project, currentProcess, clock, terminalLog, line, output, texts, messages }) => async (check) => {
    await payload({ params: { command: line.payload }, body: { args: [] } })
    const p = JSON.parse(texts.concat(terminalLog.lines())) as Payload
    const bundle: Bundle = { generatedAt: clock.now().toISOString(), today: p.date, mode: BundleMode.export, dates: [{ date: p.date, payload: p }] }
    const root = currentProcess.cwd()
    const title = project.projectDirs(root).title
    const html = await page.pageHtml(root, { bundle, fragment: false, project: title })
    check(messages.pageTitled(output.pageTitle(title)), html.includes(output.pageTitle(title)))
    check(messages.pageCarriesTheGraph(), html.includes(compression.pack(JSON.stringify(bundle))))
    const fragment = await page.pageHtml(root, { bundle, fragment: true, project: title })
    check(messages.fragmentShorter(), fragment.length < html.length)
  },
})

/**
 * What the example is assembled for
 * Its component, an environment where it runs on a machine, and one that provisions its infrastructure.
 */
export const AssemblySamples = decision<{ component: string; machine: string; provisioned: string; program: string; provision: string }>({
  owner: "trame",
  value: { component: "ReservationsApi", machine: "Local", provisioned: "Production", program: ".ts", provision: ".tf" },
})

/**
 * A component assembled
 * trame assemble writes the example's component for an environment: a program in TypeScript, frozen, read back before
 * it is written; for the environment that provisions it, its infrastructure in Terraform too. Without an environment,
 * it is refused.
 */
export const ComponentAssembled = scenario({
  owner: "trame",
  verifies: [Assemble, Assembler, Assembly, TypeScriptWriter, TerraformWriter, Drivers, StoppedClock],
  env: Test,
  deps: {
    assemble: Assemble, writeLog: WriteLog, terminalLog: TerminalLog, line: TrameCommands, exitStatus: ExitStatus, layout: Layout, samples: AssemblySamples,
    commands: CommandMessages, counts: Counts, messages: ScenarioMessages,
  },
  body: ({ assemble, writeLog, terminalLog, line, exitStatus, layout, samples, commands, counts, messages }) => async (check) => {
    const written = () => [...writeLog.written().keys()]
    const local = await assemble({ params: { command: line.assemble }, body: { args: [samples.component, line.env, samples.machine] } })
    const programs = written().filter((path) => path.includes(layout.output) && path.endsWith(samples.program))
    check(messages.programWritten(samples.machine), local.status === exitStatus.success && programs.length === counts.one && written().every((p) => !p.endsWith(samples.provision)))
    await assemble({ params: { command: line.assemble }, body: { args: [samples.component, line.env, samples.provisioned] } })
    check(messages.infrastructureWritten(samples.provisioned), written().some((path) => path.endsWith(samples.provision)))
    let refused = false
    try {
      await assemble({ params: { command: line.assemble }, body: { args: [samples.component] } })
    } catch {
      refused = terminalLog.lines().includes(commands.assembleUsage(line.assemble))
    }
    check(messages.assemblyWithoutEnvironmentRefused(), refused)
  },
})

/**
 * The laws, tested by their command
 * trame test-kinds plays the laws of every kind of the example's language on drawn values, and says each one holds.
 */
export const LawsTested = scenario({
  owner: "trame",
  verifies: [TestKinds],
  env: Test,
  deps: {
    testKinds: TestKinds, compiler: Compiler, views: Views, currentProcess: Process, terminalLog: TerminalLog, line: TrameCommands, exitStatus: ExitStatus,
    commands: CommandMessages, messages: ScenarioMessages,
  },
  body: ({ testKinds, compiler, views, currentProcess, terminalLog, line, exitStatus, commands, messages }) => async (check) => {
    const kinds = await compiler.loadKinds(currentProcess.cwd())
    await views.loadViews(currentProcess.cwd())
    const r = await testKinds({ params: { command: line.testKinds }, body: { args: [] } })
    const holding = terminalLog.lines().filter((l) => l.endsWith(commands.lawsHold()))
    check(messages.everyKindHolds(kinds.length, views.sortedViews().length), r.status === exitStatus.success && holding.length === kinds.length + views.sortedViews().length)
  },
})

/**
 * The snapshot, taken by its command
 * trame snapshot writes the example's snapshot.json as the build of the engine in place wrote it.
 */
export const SnapshotTaken = scenario({
  owner: "trame",
  verifies: [TakeSnapshot],
  env: Test,
  deps: {
    snapshot: TakeSnapshot, writeLog: WriteLog, reading: FileReading, currentProcess: Process, paths: Paths, layout: Layout, line: TrameCommands,
    encodings: NodeEncodings, messages: ScenarioMessages,
  },
  body: ({ snapshot, writeLog, reading, currentProcess, paths, layout, line, encodings, messages }) => async (check) => {
    const file = paths.join(currentProcess.cwd(), layout.snapshot)
    const before = String(reading.readFileSync(file, encodings.utf8))
    await snapshot({ params: { command: line.snapshot }, body: { args: [] } })
    check(messages.snapshotAsBefore(), writeLog.written().get(file) === before)
  },
})

/**
 * What a plan is checked with
 * A node no build wrote, and an issue no build raised: what the scenario adds by hand to graph.json.
 */
export const PlanSamples = decision<{ invented: { id: string; kind: string; title: string }; issue: string }>({
  owner: "trame",
  value: { invented: { id: "imagined.Node", kind: "decision", title: "A node nobody declared" }, issue: "warning: an issue a build had raised" },
})

/**
 * A build planned
 * trame plan writes nothing. Right after a build, nothing changes. Against the graph.json of that build changed by hand
 * in memory (a node the shipment ships taken out, a status changed, a node invented, an issue added), the plan says
 * the node is added, the status changes back, the invented node is removed, the issue is resolved, and the shipment
 * is touched.
 */
export const BuildPlanned = scenario({
  owner: "trame",
  verifies: [Plan],
  env: Test,
  deps: {
    build: Build, plan: Plan, writeLog: WriteLog, terminalLog: TerminalLog, writing: FileWriting, currentProcess: Process, paths: Paths, layout: Layout,
    samples: PlanSamples, line: TrameCommands, exitStatus: ExitStatus, counts: Counts, commands: CommandMessages, messages: ScenarioMessages,
  },
  body: (d) => async (check) => {
    const { writeLog, line, samples, messages } = d
    const file = d.paths.join(d.currentProcess.cwd(), d.layout.graph)
    await d.build({ params: { command: line.build }, body: { args: [] } })
    type Written = { id: string; kind: string; title?: string; status?: string; diagnostics?: string[] }
    type Graph = { nodes: Written[]; edges: { from: string; to: string; kind: string }[] }
    type Planned = { added: string[]; removed: string[]; statuses: { node: string; from?: string; to?: string }[]; resolved: { node?: string; what: string }[]; shipments: string[] }
    const built = writeLog.written().get(file) ?? JSON.stringify({ nodes: [], edges: [] })
    const writes = () => JSON.stringify([...writeLog.written()])
    const before = writes()
    const quiet = await d.plan({ params: { command: line.plan }, body: { args: [] } })
    const nothing = quiet.body as Planned
    check(messages.planAfterBuild(),
      quiet.status === d.exitStatus.success && writes() === before && d.terminalLog.lines().includes(d.commands.planNothing())
      && [nothing.added, nothing.removed, nothing.statuses, nothing.resolved].every((x) => d.counts.isEmpty(x)))
    const graph = JSON.parse(built) as Graph
    const shipment = graph.nodes.find((n) => n.kind === KindName.shipment)
    const shipped = graph.edges.find((e) => e.from === shipment?.id && e.kind === ShipmentEdge.ships)?.to
    const held = graph.nodes.find((n) => n.status === Status.held && n.id !== shipped)
    const noted = graph.nodes.find((n) => n.id !== shipped && n.id !== held?.id)
    const changed: Graph = {
      ...graph,
      nodes: [
        ...graph.nodes
          .filter((n) => n.id !== shipped)
          .map((n) => (n.id === held?.id ? { ...n, status: Status.violated } : n))
          .map((n) => (n.id === noted?.id ? { ...n, diagnostics: [...(n.diagnostics ?? []), samples.issue] } : n)),
        samples.invented,
      ],
    }
    d.writing.writeFileSync(file, JSON.stringify(changed))
    const planned = (await d.plan({ params: { command: line.plan }, body: { args: [] } })).body as Planned
    check(messages.planSaysWhatChanges(),
      shipped !== undefined && planned.added.includes(shipped) && planned.removed.includes(samples.invented.id)
      && planned.statuses.some((x) => x.node === held?.id && x.from === Status.violated && x.to === Status.held)
      && planned.resolved.some((i) => i.node === noted?.id && i.what === samples.issue))
    check(messages.planTouchesShipments(shipment?.title ?? String(shipment?.id)), shipment !== undefined && planned.shipments.includes(shipment.id))
  },
})

/**
 * What an amendment is checked with
 * In the example: a late fee lowered, which a criterion of the refund refuses; a free period moved a minute on a fast
 * charger, which its owner writes; a rule's body, which changes in the code only.
 */
export const AmendmentSamples = decision<{
  refused: { node: string; path: string; value: string }
  recorded: { node: string; path: string; value: string; name: string; module: string }
  code: { node: string; path: string; value: string }
  why: string
  by: string
}>({
  owner: "trame",
  value: {
    refused: { node: "LateFee", path: "value", value: "0.4" },
    recorded: { node: "FreeCancellationPeriod", path: "value.fast", value: "360", name: "FreeCancellationPeriodAmendment", module: "src/cancellation.ts" },
    code: { node: "Refund", path: "body", value: "0" },
    why: "A scenario amends the example",
    by: "lea",
  },
})

/**
 * A value amended
 * trame amend first says what an amendment would change: lowering the example's late fee makes a criterion of the
 * refund fail, so nothing is recorded; a rule's body changes in the code only. Moving the free period of a fast charger
 * by a minute raises no error: with --dry-run nothing is written, then the amendment is recorded at the end of the
 * module of the period, with the import of amendments.
 */
export const ValueAmended = scenario({
  owner: "trame",
  verifies: [Amend, BuildComparison, InPlaceSources],
  env: Test,
  deps: {
    amend: Amend, writeLog: WriteLog, currentProcess: Process, paths: Paths, line: TrameCommands, exitStatus: ExitStatus, samples: AmendmentSamples,
    messages: ScenarioMessages,
  },
  body: (d) => async (check) => {
    const { line, samples, messages, writeLog } = d
    const run = (s: { node: string; path: string; value: string }, extra: readonly string[]) =>
      d.amend({ params: { command: line.amend }, body: { args: [s.node, s.path, s.value, line.why, samples.why, line.by, samples.by, ...extra] } })
        .then((r) => r.status, () => d.exitStatus.failure)
    const module = d.paths.join(d.currentProcess.cwd(), samples.recorded.module)
    check(messages.amendmentRefusedByACriterion(), (await run(samples.refused, [])) === d.exitStatus.failure && !writeLog.written().has(module))
    check(messages.amendmentOfCodeRefused(), (await run(samples.code, [])) === d.exitStatus.failure)
    check(messages.amendmentSaidFirst(), (await run(samples.recorded, [line.dryRun])) === d.exitStatus.success && !writeLog.written().has(module))
    const recorded = await run(samples.recorded, [])
    const text = writeLog.written().get(module) ?? String()
    check(messages.amendmentRecordedInPlace(samples.recorded.module),
      recorded === d.exitStatus.success && text.includes(samples.recorded.name) && text.includes(AmendmentField.facade))
  },
})

/**
 * Declarations published
 * trame publish freezes the example's declarations not yet published in trame.lock, with their fingerprints; published
 * again, nothing is new.
 */
export const DeclarationsPublished = scenario({
  owner: "trame",
  verifies: [Publish],
  env: Test,
  deps: {
    publish: Publish, writeLog: WriteLog, terminalLog: TerminalLog, currentProcess: Process, paths: Paths, layout: Layout, line: TrameCommands,
    exitStatus: ExitStatus, commands: CommandMessages, messages: ScenarioMessages,
  },
  body: ({ publish, writeLog, terminalLog, currentProcess, paths, layout, line, exitStatus, commands, messages }) => async (check) => {
    const lock = paths.join(currentProcess.cwd(), layout.lock)
    const first = await publish({ params: { command: line.publish }, body: { args: [] } })
    const added = first.body as string[]
    const published = Object.keys((JSON.parse(writeLog.written().get(lock) ?? JSON.stringify({ published: {} })) as { published: Record<string, string> }).published)
    check(messages.declarationsFrozen(added.length), first.status === exitStatus.success && added.every((ref) => published.includes(ref)))
    await publish({ params: { command: line.publish }, body: { args: [] } })
    check(messages.nothingNewThen(), terminalLog.lines().includes(commands.nothingToPublish()))
  },
})

/**
 * The projects of the repository the scenarios enter
 * A library, which releases versions; an application, which imports libraries outside its package and ships.
 */
export const ScenarioProjects = decision<{ library: string; application: string }>({
  owner: "trame",
  value: { library: "std", application: "apps/poselia" },
})

/**
 * What the scenarios ask of those projects
 * A version to release and what it changes; a library the application imports, and the name it imports it by; the
 * delivery of its page; its shipments (the files that run it elsewhere, a preview); a check by hand, someone of its role
 * and someone who is not.
 */
export const ProjectSamples = decision<{
  release: { version: string; what: string }
  imported: { library: string; specifier: string; module: string }
  delivery: string
  shipments: { runners: string; preview: string }
  handCheck: { check: string; tester: string; stranger: string }
}>({
  owner: "trame",
  value: {
    release: { version: "99.0.0", what: "A version released in memory, by a scenario" },
    imported: { library: "std", specifier: "#std/*", module: "src/algebra.ts" },
    delivery: "PoseliaPage",
    shipments: { runners: "RunnersWritten", preview: "Preview" },
    handCheck: { check: "OnAPhone", tester: "ghalaax", stranger: "someone-else" },
  },
})

/**
 * The packages audited
 * trame audit, in the application, asks the registry about each package of its graph (in memory, the registry knows of
 * no advisory and no later version) and keeps its answers as evidence: two pieces for each package, none vulnerable.
 */
export const PackagesAudited = scenario({
  owner: "trame",
  verifies: [Audit, NoReportsInTest],
  env: Test,
  deps: {
    audit: Audit, processLog: ProcessLog, writeLog: WriteLog, terminalLog: TerminalLog, projects: ScenarioProjects, line: TrameCommands,
    exitStatus: ExitStatus, counts: Counts, messages: ScenarioMessages, report: PackageAudit,
  },
  body: ({ audit, processLog, writeLog, terminalLog, projects, line, exitStatus, counts, messages, report }) => async (check) => {
    processLog.enter(projects.application)
    const r = await audit({ params: { command: line.audit }, body: { args: [] } })
    const [file, text] = [...writeLog.written()].find(([path]) => path.includes(report.evidence)) ?? []
    const entries = JSON.parse(text ?? JSON.stringify([])) as { value: number; at: string }[]
    check(messages.packagesAudited(entries.length), r.status === exitStatus.success && file !== undefined && counts.any(entries) &&
      entries.every((e) => e.value === counts.zero) && terminalLog.lines().some((l) => l.includes(file)))
  },
})

/**
 * A library released
 * trame release, in the library, freezes a version: its graph, its code and its documents under releases/, its record
 * written in its module of releases; refused in the example, where a value is still to decide.
 */
export const LibraryReleased = scenario({
  owner: "trame",
  verifies: [Release, ReleaseRecords],
  env: Test,
  deps: {
    release: Release, processLog: ProcessLog, writeLog: WriteLog, terminalLog: TerminalLog, currentProcess: Process, paths: Paths, layout: Layout,
    projects: ScenarioProjects, samples: ProjectSamples, line: TrameCommands, exitStatus: ExitStatus, text: StringLiteral, messages: ScenarioMessages,
  },
  body: ({ release, processLog, writeLog, terminalLog, currentProcess, paths, layout, projects, samples, line, exitStatus, text, messages }) => async (check) => {
    let refused = false
    try {
      await release({ params: { command: line.release }, body: { args: [samples.release.version, samples.release.what] } })
    } catch {
      refused = true
    }
    check(messages.releaseRefusedUnsettled(), refused)
    processLog.enter(projects.library)
    const home = currentProcess.cwd()
    const r = await release({ params: { command: line.release }, body: { args: [samples.release.version, samples.release.what] } })
    const frozen = paths.join(home, layout.releases, samples.release.version)
    const written = [...writeLog.written().keys()]
    check(messages.versionFrozen(samples.release.version),
      r.status === exitStatus.success && written.some((p) => p.startsWith(frozen + paths.sep + layout.sources)) && written.some((p) => p.startsWith(frozen + paths.sep + layout.documents)))
    const [, records] = [...writeLog.written()].find(([p]) => p.startsWith(paths.join(home, layout.sources)) && !p.startsWith(frozen)) ?? []
    check(messages.releaseRecorded(), records?.includes(text(samples.release.version)) === true && terminalLog.lines().some((l) => l.includes(samples.release.version)))
  },
})

/**
 * The manifest written
 * trame manifest, in the application, writes the packages of its graph into package.json, and the import map of the
 * libraries it imports from outside its package: each name leads to a link, and the link to the version it pins.
 */
export const ManifestWritten = scenario({
  owner: "trame",
  verifies: [WriteManifest],
  env: Test,
  deps: {
    manifest: WriteManifest, processLog: ProcessLog, writeLog: WriteLog, reading: FileReading, currentProcess: Process, paths: Paths, layout: Layout,
    projects: ScenarioProjects, samples: ProjectSamples, line: TrameCommands, exitStatus: ExitStatus, messages: ScenarioMessages,
  },
  body: ({ manifest, processLog, writeLog, reading, currentProcess, paths, layout, projects, samples, line, exitStatus, messages }) => async (check) => {
    processLog.enter(projects.application)
    const home = currentProcess.cwd()
    const r = await manifest({ params: { command: line.manifest }, body: { args: [] } })
    const written = JSON.parse(writeLog.written().get(paths.join(home, layout.manifest)) ?? JSON.stringify({})) as { imports?: Record<string, string> }
    const leads = written.imports?.[samples.imported.specifier]
    check(messages.importMapWritten(samples.imported.specifier), r.status === exitStatus.success && leads !== undefined)
    const linked = paths.join(home, layout.libraryLinks, samples.imported.library, samples.imported.module)
    check(messages.linkLeadsToTheLibrary(samples.imported.library), reading.existsSync(linked))
  },
})

/**
 * The page exported
 * trame export compiles the example at each date where it may change, in a fresh process of the engine (here, one that
 * answers what the payload command printed), and writes the page that carries them all.
 */
export const PageExported = scenario({
  owner: "trame",
  verifies: [Export, DateBundle],
  env: Test,
  deps: {
    payload: EmitPayload, exported: Export, processLog: ProcessLog, writeLog: WriteLog, terminalLog: TerminalLog, project: Project, currentProcess: Process,
    paths: Paths, layout: Layout, line: TrameCommands, exitStatus: ExitStatus, output: OutputMessages, texts: Texts, messages: ScenarioMessages,
  },
  body: ({ payload, exported, processLog, writeLog, terminalLog, project, currentProcess, paths, layout, line, exitStatus, output, texts, messages }) => async (check) => {
    await payload({ params: { command: line.payload }, body: { args: [line.all] } })
    const dates = texts.concat(terminalLog.lines())
    processLog.answer(dates, exitStatus.success)
    const r = await exported({ params: { command: line.export }, body: { args: [] } })
    const root = currentProcess.cwd()
    const page = writeLog.written().get(paths.resolve(root, layout.page)) ?? texts.empty
    const [relaunched] = processLog.started()
    check(messages.datesCompiledApart(), relaunched?.args.includes(line.payload) === true && relaunched.args.includes(line.all))
    check(messages.pageWritten(layout.page), r.status === exitStatus.success && page.includes(output.pageTitle(project.projectDirs(root).title)))
  },
})

/**
 * What a program run in a scenario answers
 */
export const RunSamples = decision<{ output: string; status: number }>({ owner: "trame", value: { output: "listening", status: 3 } })

/**
 * A component run
 * trame run assembles the example's component, runs the program it wrote, and exits with the program's status.
 */
export const ComponentRun = scenario({
  owner: "trame",
  verifies: [Run],
  env: Test,
  deps: {
    run: Run, processLog: ProcessLog, writeLog: WriteLog, line: TrameCommands, samples: AssemblySamples, data: RunSamples, messages: ScenarioMessages,
  },
  body: ({ run, processLog, writeLog, line, samples, data, messages }) => async (check) => {
    processLog.answer(data.output, data.status)
    const r = await run({ params: { command: line.run }, body: { args: [samples.component, line.env, samples.machine] } })
    const [program] = processLog.started()
    check(messages.programRun(), program !== undefined && writeLog.written().has(program.program))
    check(messages.statusOfTheProgram(data.status), r.status === data.status)
  },
})

/**
 * What trame dev is shown in a scenario
 * The file written under the project and its text; how many pauses of the debounce the scenario waits; how many times the
 * engine is relaunched (at the start, then after the change).
 */
export const DevSamples = decision<{ touched: string; content: string; pauses: number; compilations: number }>({
  owner: "trame",
  value: { touched: "touched-by-a-scenario.ts", content: "// touched", pauses: 4, compilations: 2 },
})

/**
 * trame dev
 * trame dev serves the page of the example and its graph, compiled at each date in a fresh process of the engine, and
 * opens a stream of events; a file written under the project is seen, and after a pause the graph is compiled again
 * and announced on the stream.
 */
export const DevFollowsTheGraph = scenario({
  owner: "trame",
  verifies: [Dev, DevServer, MemoryHttpServer, NodeTimer],
  env: Test,
  deps: {
    payload: EmitPayload, dev: Dev, processLog: ProcessLog, serverLog: ServerLog, terminalLog: TerminalLog, writing: FileWriting, timer: Timer,
    currentProcess: Process, paths: Paths, layout: Layout, service: DevService, sse: ServerSentEvents, http: Http, debounce: DevDebounce, project: Project,
    line: TrameCommands, exitStatus: ExitStatus, output: OutputMessages, texts: Texts, data: DevSamples, messages: ScenarioMessages,
  },
  body: (d) => async (check) => {
    const { processLog, serverLog, service, sse, line, texts, messages } = d
    await d.payload({ params: { command: line.payload }, body: { args: [line.all] } })
    const dates = texts.concat(d.terminalLog.lines())
    processLog.answer(dates, d.exitStatus.success)
    processLog.answer(dates, d.exitStatus.success)
    await d.dev({ params: { command: line.dev }, body: { args: [] } })
    const root = d.currentProcess.cwd()
    const [page] = service.page
    const html = serverLog.request(page ?? service.bundle)
    check(messages.devPageServed(), html.status === d.http.ok && html.body().includes(d.output.pageTitle(d.project.projectDirs(root).title)))
    const bundle = serverLog.request(service.bundle)
    const served = JSON.parse(bundle.body()) as { dates: unknown[] }
    check(messages.devBundleServed(), bundle.status === d.http.ok && served.dates.length === (JSON.parse(dates) as unknown[]).length)
    const events = serverLog.request(service.events)
    d.writing.writeFileSync(d.paths.join(root, d.layout.sources, d.data.touched), d.data.content)
    await new Promise<void>((done) => d.timer.setTimeout(done, d.debounce * d.data.pauses))
    check(messages.changeAnnounced(), events.body().includes(sse.eventField + service.ready + sse.endOfLine) && processLog.started().length === d.data.compilations)
    events.close()
  },
})


/**
 * The command line
 * The first word typed chooses the command: none, or an option, is the build; a word that names no command goes to the
 * command that takes any word, with the names of the others; without such a command, it is refused.
 */
export const CommandLineChooses = scenario({
  owner: "trame",
  verifies: [NodeCommandLine, MemoryTerminal],
  env: Test,
  deps: {
    commandLine: CommandLine, terminalLog: TerminalLog, line: TrameCommands, exitStatus: ExitStatus, samples: ViewSamples, platform: PlatformMessages,
    sequences: Sequences, messages: ScenarioMessages,
  },
  body: ({ commandLine, terminalLog, line, exitStatus, samples, platform, sequences, messages }) => async (check) => {
    const asked: { command: string; commands?: string; args: string[] }[] = []
    const route = (name: string) => ({
      trigger: { type: TriggerType.command, name },
      handler: async (req: { params: Record<string, string>; body?: unknown }) => {
        asked.push({ command: req.params.command, commands: req.params.commands, args: (req.body as { args: string[] }).args })
        return { status: exitStatus.success, body: undefined }
      },
    })
    const routes = [route(line.build), route(line.view), route(line.fallback)]
    terminalLog.type([])
    await commandLine.serve(routes as never)
    terminalLog.type([line.at, samples.unknown])
    await commandLine.serve(routes as never)
    const [none, option] = asked
    check(messages.buildByDefault(), none?.command === line.build && option?.command === line.build && option.args.includes(samples.unknown))
    terminalLog.type([samples.project.view])
    await commandLine.serve(routes as never)
    const fallback = sequences.last(asked)
    check(messages.anyWordToTheFallback(samples.project.view), fallback?.command === samples.project.view && fallback.commands?.split(line.separator).includes(line.view) === true)
    terminalLog.type([samples.unknown])
    const refused = await commandLine.serve([route(line.build)] as never)
    check(messages.unknownWithoutFallback(samples.unknown), refused.code === exitStatus.failure && terminalLog.lines().includes(platform.unknownCommand(samples.unknown)))
  },
})

/**
 * The page delivered
 * trame deliver, in the application, writes its page: the component assembled for the browser, its program bundled into
 * one script, its style sheets, in one document a browser opens as it is.
 */
export const PageDelivered = scenario({
  owner: "trame",
  verifies: [Deliver],
  env: Test,
  deps: {
    deliver: Deliver, processLog: ProcessLog, writeLog: WriteLog, projects: ScenarioProjects, samples: ProjectSamples,
    doctype: Doctype, line: TrameCommands, exitStatus: ExitStatus, counts: Counts, messages: ScenarioMessages,
  },
  body: ({ deliver, processLog, writeLog, projects, samples, doctype, line, exitStatus, counts, messages }) => async (check) => {
    processLog.enter(projects.application)
    const r = await deliver({ params: { command: line.deliver }, body: { args: [samples.delivery] } })
    const pages = [...writeLog.written()].filter(([, text]) => text.startsWith(doctype()))
    check(messages.pageDelivered(samples.delivery), r.status === exitStatus.success && pages.length === counts.one)
  },
})

/**
 * Shipments run, evidence given
 * In the application, its evidence of the SDLC set aside (the scenario's day is before it): trame ship writes the files
 * that run its preview elsewhere (each by its writer, from the plan the engine computes), records that they were built
 * and from which code, each record sealed, compiles again with that evidence, ships, and writes the dossier; a record
 * changed by hand afterwards is not counted, an error;
 * the preview, in a dry run, is delivered, its check run by its program (which answers it passed), and would ship, with
 * nothing deployed and no dossier. trame evidence records a check made by hand by someone of its role, attributed to
 * them; someone who is not of it is refused.
 */
export const ShipmentsRun = scenario({
  owner: "trame",
  verifies: [Ship, RecordEvidence, SdlcEvidence, ShipmentPipeline, ShipmentRunPlan, NodeHashing, Attribution, EngineFingerprint],
  env: Test,
  deps: {
    ship: Ship, evidence: RecordEvidence, processLog: ProcessLog, writeLog: WriteLog, terminalLog: TerminalLog, currentProcess: Process, paths: Paths, trees: FileTrees,
    signatures: Signatures, writing: FileWriting, compiler: Compiler, clock: Clock, compilerMessages: CompilerMessages,
    layout: Layout, records: ShippingRecords, projects: ScenarioProjects, samples: ProjectSamples, line: TrameCommands, exitStatus: ExitStatus,
    texts: Texts, counts: Counts, values: ValueTypes, messages: ScenarioMessages,
  },
  body: (d) => async (check) => {
    const { processLog, writeLog, terminalLog, paths, layout, records, samples, line, exitStatus, messages } = d
    processLog.enter(d.projects.application)
    const home = d.currentProcess.cwd()
    const dossiers = paths.join(home, layout.evidence, records.dossiers)
    const file = paths.join(home, layout.evidence, records.evidence + layout.evidenceExtension)
    const recorded = () =>
      JSON.parse(writeLog.written().get(file) ?? JSON.stringify([])) as { node: string; at: string; source?: string; by?: string; code?: unknown; seal?: unknown }[]
    // What was recorded on later days would be the latest: the shipment must be judged on what it records itself.
    d.trees.remove(file)
    const by = [line.by, samples.handCheck.tester]
    const runners = await d.ship({ params: { command: line.ship }, body: { args: [samples.shipments.runners, ...by] } })
    const dossiersOf = () => [...writeLog.written().keys()].filter((p) => p.startsWith(dossiers + paths.sep))
    check(messages.runnersShipped(samples.shipments.runners), runners.status === exitStatus.success && dossiersOf().length === d.counts.one)
    const built = recorded().filter((e) => e.source === EvidenceSource.built)
    check(messages.builtWithItsCode(), d.counts.any(built) && built.every((e) => d.values.isText(e.code)))
    const sealed = recorded()
    check(messages.recordsSealed(), d.counts.any(sealed) && sealed.every((e) => d.values.isText(e.seal) && d.signatures.seal({ ...e }) === e.seal))
    // A record changed by hand: the compiler no longer counts it, and says which.
    const [first, ...rest] = sealed
    const before = writeLog.written().get(file) ?? JSON.stringify(sealed)
    if (first) d.writing.writeFileSync(file, JSON.stringify([{ ...first, by: samples.handCheck.stranger }, ...rest]))
    const changed = await d.compiler.compileAt(await d.compiler.load(home), d.clock.today())
    const refusal = first && d.compilerMessages.sealBroken(first.source ?? d.texts.empty, first.at, samples.handCheck.stranger)
    check(messages.changedRecordRefused(), changed.diags.some((x) => x.severity === Severity.error && x.what === refusal))
    d.writing.writeFileSync(file, before)
    processLog.answer(d.texts.empty, exitStatus.success)
    const preview = await d.ship({ params: { command: line.ship }, body: { args: [samples.shipments.preview, ...by, line.dryRun] } })
    check(messages.previewWouldShip(samples.shipments.preview),
      preview.status === exitStatus.success && d.counts.any(processLog.started()) && dossiersOf().length === d.counts.one)
    await d.evidence({ params: { command: line.evidence }, body: { args: [samples.handCheck.check, line.passed, ...by] } })
    const given = recorded().filter((e) => e.node.endsWith(samples.handCheck.check) && e.by === samples.handCheck.tester)
    check(messages.handEvidenceRecorded(samples.handCheck.check), d.counts.any(given))
    let refused = false
    try {
      await d.evidence({ params: { command: line.evidence }, body: { args: [samples.handCheck.check, line.passed, line.by, samples.handCheck.stranger] } })
    } catch {
      refused = terminalLog.lines().some((l) => l.startsWith(samples.handCheck.stranger))
    }
    check(messages.strangerRefused(samples.handCheck.stranger), refused)
  },
})

/**
 * The doctor
 * trame doctor asks the machine (here, the one of the scenarios: files in memory, a server in memory, a program that
 * answers what the scenario says) whether it runs Trame, and answers each question on a line; a program that does not
 * print what it was given fails the doctor.
 */
export const DoctorAsks = scenario({
  owner: "trame",
  verifies: [Doctor, ProjectRuns, RunsInTheProcess],
  env: Test,
  deps: {
    doctor: Doctor, processLog: ProcessLog, terminalLog: TerminalLog, probe: DoctorProbe, line: TrameCommands, exitStatus: ExitStatus,
    commands: CommandMessages, file: TextFile, texts: Texts, counts: Counts, messages: ScenarioMessages,
  },
  body: ({ doctor, processLog, terminalLog, probe, line, exitStatus, commands, file, texts, counts, messages }) => async (check) => {
    processLog.answer(probe.text + file.endOfLine, exitStatus.success)
    const healthy = await doctor({ params: { command: line.doctor }, body: { args: [] } })
    const lines = terminalLog.lines()
    const answered = lines.filter((l) => l.startsWith(commands.doctorAnswers(texts.empty)))
    const failing = lines.filter((l) => l.startsWith(commands.doctorFails(texts.empty)))
    check(messages.doctorAllAnswered(answered.length),
      healthy.status === exitStatus.success && counts.isEmpty(failing) && lines.includes(commands.doctorSummary(answered.length, answered.length)))
    const from = terminalLog.lines().length
    processLog.answer(texts.empty, exitStatus.failure)
    const sick = await doctor({ params: { command: line.doctor }, body: { args: [] } })
    check(messages.doctorSaysWhatFails(), sick.status === exitStatus.failure && terminalLog.lines().slice(from).includes(commands.doctorFails(commands.doctorPrograms())))
  },
})

/**
 * What the engines an advance starts answer in a scenario
 * What each prints (a build, an assembly, the laws), how many may be started at most, what the promotion says.
 */
export const AdvanceSamples = decision<{ output: string; runs: number; what: string; shown: number }>({
  owner: "trame",
  value: { output: "an engine run by a scenario", runs: 40, what: "A generation frozen in memory, by a scenario", shown: 3 },
})

/**
 * An advance, in memory
 * trame advance, in Trame's repository: the generation in place builds the libraries, the example and Trame, and
 * assembles the candidate; the candidate builds them as it did, reassembles itself to a fixed point, plays the laws;
 * the older generations run. Here each engine it starts answers what the scenario says, and what it compares is what
 * the disk holds: a build that fails stops it; otherwise the candidate is accepted and, with --promote, frozen as the
 * next generation (its program, its graph, its origin, the fingerprint of its engine for the machines), the pins moved,
 * all in memory.
 */
export const AdvanceInMemory = scenario({
  owner: "trame",
  verifies: [Advance, EngineFingerprint],
  env: Test,
  deps: {
    advance: Advance, processLog: ProcessLog, writeLog: WriteLog, terminalLog: TerminalLog, currentProcess: Process, paths: Paths, layout: Layout,
    reading: FileReading, writing: FileWriting, encodings: NodeEncodings, line: TrameCommands, exitStatus: ExitStatus, advancing: AdvanceMessages, data: AdvanceSamples, texts: Texts, counts: Counts, sequences: Sequences,
    values: ValueTypes, messages: ScenarioMessages,
  },
  body: ({ advance, processLog, writeLog, terminalLog, currentProcess, paths, layout, reading, writing, encodings, line, exitStatus, advancing, data, texts, counts, sequences, values, messages }) => async (check) => {
    processLog.enter(texts.empty)
    const root = currentProcess.cwd()
    processLog.answer(data.output, exitStatus.failure)
    const stopped = await advance({ params: { command: line.advance }, body: { args: [] } })
    check(messages.failedBuildStops(), stopped.status === exitStatus.failure && processLog.started().length === counts.one)
    Array.from({ length: data.runs }, () => processLog.answer(data.output, exitStatus.success))
    // What the build of Trame's graph writes, the engines answering here write nothing: graph.json is as the last build
    // wrote it, its scenarios held, as a build that the advance accepts writes it.
    const graphFile = paths.join(root, layout.graph)
    const graph = JSON.parse(String(reading.readFileSync(graphFile, encodings.utf8))) as { nodes: { kind: string; status?: string }[] }
    writing.writeFileSync(graphFile, JSON.stringify({ ...graph, nodes: graph.nodes.map((n) => (n.kind === KindName.scenario ? { ...n, status: Status.held } : n)) }))
    const r = await advance({ params: { command: line.advance }, body: { args: [line.promote, data.what] } })
    const [inPlace] = processLog.started().slice(counts.one)
    check(messages.inPlaceBuildsFirst(), inPlace?.program.startsWith(paths.join(root, layout.generations)) === true)
    const origins = [...writeLog.written().keys()].filter((p) => p.startsWith(paths.join(root, layout.generations)) && p.endsWith(layout.origin))
    const pinned = JSON.parse(writeLog.written().get(paths.join(root, layout.configuration)) ?? JSON.stringify({})) as Record<string, unknown>
    check(messages.advanceAccepted(sequences.takeLast(terminalLog.lines(), data.shown)), r.status === exitStatus.success && terminalLog.lines().includes(advancing.succeeded()))
    check(messages.candidateFrozen(), counts.one === origins.length && Object.values(pinned).some((v) => origins.some((o) => o.startsWith(paths.join(root, String(v)) + paths.sep))))
    const engines = [...writeLog.written()].filter(([p]) => p.startsWith(paths.join(root, layout.generations)) && p.endsWith(paths.sep + layout.engine))
    const [[, record] = [texts.empty, texts.empty]] = engines
    check(messages.engineRecorded(), counts.one === engines.length && values.isText((JSON.parse(record) as { fingerprint?: unknown }).fingerprint))
  },
})
