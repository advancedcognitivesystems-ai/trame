// trame ship <shipment> --by <name> [--dry-run]: runs the shipment's pipeline as the engine computes it (the one the
// views show): builds its artefacts (and those its checks read; a file written by a writer, from the plan of a run
// elsewhere), runs the checks a program of the SDLC makes, records
// what they found as evidence attributed to the person who ships, then compiles again: while an obligation does not
// hold, it says which and refuses; otherwise it runs the programs that deploy it and writes the shipment's dossier. The
// programs of the SDLC are assembled for the shipment's environment. An artefact a shipment that precedes this one
// shipped first is promoted, not built again: the file as it is must be the one last built, which that shipment shipped
// (C2, since g103); once deployed, each artefact records that this shipment shipped it, as which file.

import {
  KindName, EdgeName, Severity, Status, ShipmentField, ReviewEdge, ArtifactEdge, EntryField, EvidenceSource, SignatureType, TriggerType, PipelineStage,
  type ProvidedBy, type View, type Compilation, type Pipeline, type RunPlan,
} from "../../../trame/kernel"
import type { Handler, Trigger } from "../../../kinds/entry-point"
import type { Bundler, FileReading, FileWriting, Paths, Process, Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { TrameCommands } from "../../conventions"
import type { NodeEvents, NodeEncodings } from "#std/system"
import type { Counts, Sequences, ValueTypes } from "#std/algebra"
import type { Api as PreparationApi } from "./preparation"
import type { Api as AssemblyApi } from "../engine/assembly"
import type { Api as SdlcApi, Entry } from "./sdlc-evidence"
import type { Api as EnginesApi } from "../engine/engine-fingerprint"
import type { Api as RunPlanApi } from "./run-plan"

export interface Deps {
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  line: ProvidedBy<typeof TrameCommands>
  preparation: PreparationApi
  deliver: Handler
  assembly: AssemblyApi
  sdlc: SdlcApi
  /** What a runner elsewhere needs to run a shipment, which a writer gives a form. */
  runPlan: RunPlanApi
  bundler: Bundler
  /** What leads the bundler by the names of packages, as the engine leads Node.js (since g95). */
  led: import("esbuild").Plugin
  /** How a program assembled is bundled to be fingerprinted. */
  programBundle: { platform: "node"; format: "esm"; packages: "external"; source: "ts" }
  /** The rule of the requirement "Ship only what holds". */
  holds: (obligations: readonly Status[]) => boolean
  currentProcess: Process
  events: ProvidedBy<typeof NodeEvents>
  reading: FileReading
  writing: FileWriting
  paths: Paths
  encodings: ProvidedBy<typeof NodeEncodings>
  terminal: Terminal
  sequences: ProvidedBy<typeof Sequences>
  counts: ProvidedBy<typeof Counts>
  values: ProvidedBy<typeof ValueTypes>
  /** The fingerprint of the engine that runs: what it builds and checks carries it. */
  engines: EnginesApi
  messages: ProvidedBy<typeof CommandMessages>
}

const body = (deps: Deps): Handler => async (req) => {
  const { options, prepare, reread, refuse } = deps.preparation
  const { messages, sdlc, terminal, line, exitStatus } = deps
  const { join, dirname, basename, relative } = deps.paths
  const { head } = deps.sequences
  const { one, zero } = deps.counts
  const o = options(req.params.command, (req.body as { args: string[] }).args)
  const [name] = o.args
  const by = o.by
  if (by === undefined) return refuse(o, [messages.evidenceNeedsBy()])
  let { c, comp } = await prepare(o)
  const shipmentsOf = (g: Compilation) => g.all(KindName.shipment).nodes()
  const found = shipmentsOf(comp).find((s) => s.id === name || s.ref === name)
  if (!found) return refuse(o, [messages.noShipment(name, shipmentsOf(comp).map((s) => s.id))])
  const ref = found.ref
  const out = (v: View, edge: string) => comp.from(v).out(edge).nodes()
  const signed = { by, signature: SignatureType.attribution }
  const save = (file: string, text: string) => {
    deps.writing.mkdirSync(dirname(file), { recursive: true })
    deps.writing.writeFileSync(file, text)
    return file
  }
  const record = (entries: readonly Entry[]) => {
    const { file, text } = sdlc.added(o.root, entries)
    return save(file, text)
  }

  // The pipeline, as the engine computes it for the views too: its steps, in order, and what keeps it from running.
  const pipelineOf = (g: Compilation, shipment: View) => g.pipeline!(shipment)
  const stepsOf = (p: Pipeline, stage: PipelineStage) => p.steps.filter((s) => s.stage === stage)
  const pipeline = pipelineOf(comp, found)
  if (pipeline.errors.length) return refuse(o, [...pipeline.errors])
  const { environment } = pipeline

  // The foundations first, which no policy chooses: no literal in a body, a sound graph. What an obligation finds wrong
  // (a check that failed, a rule broken) is judged after the checks run again.
  const foundations = (p: Pipeline) => stepsOf(p, PipelineStage.prove).find((s) => s.origin?.foundations)?.origin?.foundations?.problems ?? zero
  if (foundations(pipeline) > zero) return refuse(o, [messages.foundationsBroken(foundations(pipeline))])

  /**
   * A program: its component assembled (once) for the shipment's environment, or for the one an artefact names (the
   * page's program, for the browser); a program of the SDLC is then run with its command.
   */
  const programs = new Map<string, string>()
  const program = (component: View, where: View | undefined = environment): string => {
    const known = programs.get(JSON.stringify([component.ref, where?.ref]))
    if (known !== undefined) return known
    if (!where) return refuse(o, [messages.shipmentWithoutEnvironment(found.title)])
    const { assembly, errors: refused } = deps.assembly.prepareAssembly(c, o.root, component.id, where.id)
    if (!assembly) return refuse(o, [messages.assemblyRefused(), ...refused])
    const { files, errors: emitErrors } = deps.assembly.emitAssembly(assembly)
    if (emitErrors.length) return refuse(o, emitErrors)
    for (const f of files) save(f.path, f.content)
    // What Node.js runs: the program's launcher, which leads the names of packages first (since g99).
    const [first] = files
    const runs = files.find((f) => f.launches) ?? first
    programs.set(JSON.stringify([component.ref, where.ref]), runs.path)
    return runs.path
  }
  /** A program bundled with what it imports, as the decision "The fingerprint of a program" says. */
  const bundled = async (program: string): Promise<string> => {
    const { source, ...options } = deps.programBundle
    const contents = String(deps.reading.readFileSync(program, deps.encodings.utf8))
    const stdin = { contents, resolveDir: dirname(program), sourcefile: basename(program), loader: source }
    const { outputFiles: [only] } = await deps.bundler.build({ stdin, bundle: true, write: false, plugins: [deps.led], ...options })
    return only.text
  }
  const run = async (entry: View, forwarded: readonly string[] = []): Promise<number> => {
    const component = head(out(entry, EdgeName.partOf))
    if (!component) return exitStatus.failure
    const trigger = entry.field(EntryField.trigger) as Trigger | undefined
    const child = deps.currentProcess.runTs(program(component), [...(trigger?.type === TriggerType.command ? [trigger.name] : []), ...forwarded])
    return new Promise<number>((end) => child.on(deps.events.exit, (code: number | null) => end(code ?? exitStatus.failure)))
  }

  /** The code that made what a step builds or checks, as the graph gives it: the evidence carries it. */
  const codeOf = (v: View): { code?: string } => {
    const code = v.result<{ code?: unknown }>()?.code
    return deps.values.isText(code) ? { code } : {}
  }

  // Its artefacts, each produced by what produces it, then fingerprinted as it is on disk.
  const built = new Map<string, string>()
  const recorded: Entry[] = []
  for (const step of stepsOf(pipeline, PipelineStage.produce)) {
    // Promoted: the file a shipment that precedes shipped first, taken as it is, never built again (C2).
    if (step.promoted?.length) {
      const path = join(o.root, step.path!)
      const before = step.promoted.map((s) => s.title)
      const fingerprint = sdlc.built(path)
      const last = step.node.evidence.filter((e) => e.source === EvidenceSource.built).map((e) => e.fingerprint)
      if (fingerprint === undefined || fingerprint !== deps.sequences.last(last)) return refuse(o, [messages.promotedChanged(step.node.title, relative(o.root, path), before)])
      built.set(step.node.ref, fingerprint)
      terminal.write(messages.artifactPromoted(step.node.title, relative(o.root, path), fingerprint, before))
      continue
    }
    const producer = step.runs
    if (producer?.kind === KindName.delivery) await deps.deliver({ params: { command: line.deliver }, body: { args: [producer.id, line.at, o.today] } })
    if (producer?.kind === KindName.component) program(producer, head(out(step.node, EdgeName.environment)) ?? environment)
    if (producer?.kind === KindName.entry) {
      const code = await run(producer)
      if (code !== exitStatus.success) return refuse(o, [messages.programFailed(producer.title, code)])
    }
    if (producer?.kind === KindName.syntax) {
      // A writer: the plan to run elsewhere the shipment the artefact names, written in the writer's form, with its settings.
      const runs = head(out(step.node, ArtifactEdge.runs))
      if (!runs) return refuse(o, [messages.writerRunsNothing(step.node.title)])
      const settings = head(out(step.node, ArtifactEdge.settings))
      const wired = await comp.wire([{ name: producer.ref, node: producer }, ...(settings ? [{ name: settings.ref, node: settings }] : [])], undefined)
      const write = wired[producer.ref] as (plan: RunPlan, settings: unknown) => string
      const file = join(o.root, step.path!)
      save(file, write(deps.runPlan(o.root, comp, pipelineOf(comp, runs), step.node, file), settings ? wired[settings.ref] : undefined))
    }
    const path = join(o.root, step.path!)
    // A program assembled is fingerprinted with everything it imports: its bodies are not written in its file.
    const fingerprint = producer?.kind === KindName.component && sdlc.built(path) !== undefined
      ? sdlc.digest(await bundled(path))
      : sdlc.built(path)
    if (fingerprint === undefined) return refuse(o, [messages.artifactMissing(step.node.title, relative(o.root, path))])
    built.set(step.node.ref, fingerprint)
    recorded.push({ node: step.node.ref, at: o.today, source: EvidenceSource.built, value: one, fingerprint, ...codeOf(step.node), ...signed })
    terminal.write(messages.artifactBuilt(step.node.title, relative(o.root, path), fingerprint))
  }
  // The engine that built them, and that runs the checks: what it built holds while the project pins it.
  const engine = deps.engines.identity(deps.currentProcess.program())
  const madeBy = engine === undefined ? {} : { engine }
  for (const entry of recorded) Object.assign(entry, madeBy)

  // The checks a program makes, on the artefacts as they were just built.
  for (const step of stepsOf(pipeline, PipelineStage.check)) {
    const fingerprint = sdlc.checked((step.on ?? []).map((a) => built.get(a.ref)))
    const passed = (await run(step.runs!)) === exitStatus.success
    recorded.push({ node: step.node.ref, at: o.today, source: EvidenceSource.check, value: passed ? one : zero, fingerprint, ...codeOf(step.node), ...madeBy, ...signed })
    terminal.write(messages.checkRan(step.node.title, passed))
  }
  terminal.write(messages.evidenceRecorded(recorded.length, relative(o.root, record(recorded))))

  // The graph, with that evidence, judged by the engine that built it: does every obligation hold? A build judges by
  // the engine the project pins, which a generation's own shipment is once deployed; a project shipped by another
  // engine than its pin sees its artefacts to build again once built by its pin.
  ;({ c, comp } = await reread(o, engine))
  const shipment = shipmentsOf(comp).find((s) => s.ref === ref)!
  const proven = pipelineOf(comp, shipment)
  const obligations = stepsOf(proven, PipelineStage.prove).filter((s) => !s.origin?.foundations)
  // A step is judged by its standing when it has one (a shipment that precedes: shipped first), else by its node's status.
  const statusOf = (s: { node: View; standing?: Status }) => s.standing ?? s.node.status ?? Status.unknown
  // A gap its policy says blocks (shipped code nothing proves) keeps it as an obligation unknown does.
  const blocking = (shipment.result<{ gaps?: readonly { node: string; obligation: string; weight?: string }[] }>()?.gaps ?? [])
    .filter((x) => x.weight === Severity.error)
  if (foundations(proven) > zero) return refuse(o, [messages.foundationsBroken(foundations(proven))])
  if (!deps.holds(obligations.map(statusOf)) || blocking.length) {
    const missing = obligations.filter((s) => statusOf(s) !== Status.held)
    const title = (ref: string) => comp.node(ref).first()?.title ?? ref
    return refuse(o, [
      messages.shipmentKept(shipment.title),
      ...missing.flatMap((s) => [
        messages.obligationMissing(s.node.title, statusOf(s)),
        ...comp.issues({ node: s.node }).map((i) => messages.obligationIssue(i.what, i.owner)),
      ]),
      ...blocking.map((x) => messages.gapBlocks(title(x.node), title(x.obligation))),
    ])
  }
  if (o.dryRun) {
    terminal.write(messages.shipmentWouldShip(shipment.title))
    return { status: exitStatus.success, body: undefined }
  }

  // Deployed, in order: a program that fails stops it. What the person said of the deployment goes on to the programs
  // that deploy (--promote "what changes", --accept), not to those that build or check.
  // A deployment is evidence on the program that deploys, for the artefacts as they were built: the version deployed.
  const forwarded = [...(o.promote === undefined ? [] : [line.promote, o.promote]), ...(o.accept ? [line.accept] : [])]
  const version = sdlc.checked(stepsOf(proven, PipelineStage.produce).map((s) => built.get(s.node.ref)))
  const deployed: Entry[] = []
  for (const step of stepsOf(proven, PipelineStage.deploy)) {
    const code = await run(step.node, forwarded)
    if (code !== exitStatus.success) {
      record([...deployed, { node: step.node.ref, at: o.today, source: EvidenceSource.deployed, value: zero, fingerprint: version, ...signed }])
      return refuse(o, [messages.deploymentFailed(step.node.title, code)])
    }
    deployed.push({ node: step.node.ref, at: o.today, source: EvidenceSource.deployed, value: one, fingerprint: version, ...signed })
    terminal.write(messages.deployed(step.node.title))
  }

  // The dossier: what shipped, what it required and the evidence that each held, who shipped it.
  const reviewed = (v: View) =>
    v.kind === KindName.review ? out(v, ReviewEdge.of).flatMap((s) => s.evidence.filter((e) => e.source === EvidenceSource.review)) : []
  const dossier = {
    shipment: shipment.ref, title: shipment.title, target: shipment.field(ShipmentField.target), at: o.today, ...signed,
    artifacts: stepsOf(proven, PipelineStage.produce).map((s) => ({ node: s.node.ref, path: s.path, fingerprint: built.get(s.node.ref) })),
    foundations: { problems: foundations(proven) },
    obligations: obligations.map((step) => ({ step, v: step.node, origin: step.origin })).map(({ step, v, origin }) => ({
      node: v.ref, kind: v.kind, status: statusOf(step), owner: v.owner, evidence: [...v.evidence, ...reviewed(v)],
      ...(origin?.obligation ? { obligation: origin.obligation.ref, via: origin.via?.ref } : {}),
      // A scenario's evidence is what it found at the build: each of its checks and its outcome.
      ...(v.kind === KindName.scenario ? { outcome: v.result() } : {}),
    })),
    deployed: deployed.map((d) => d.node),
  }
  const fingerprint = sdlc.of(dossier)
  const file = sdlc.dossier(o.root, shipment.id, o.today, fingerprint)
  save(file, sdlc.text(dossier))
  // Each artefact says this shipment shipped it, as which file: what a shipment that follows it takes (C2).
  const shippedAs: Entry[] = stepsOf(proven, PipelineStage.produce).map((s) => ({
    node: s.node.ref, at: o.today, source: EvidenceSource.shipped, value: one, fingerprint: built.get(s.node.ref), subject: shipment.ref, ...signed,
  }))
  record([...deployed, ...shippedAs, { node: shipment.ref, at: o.today, source: EvidenceSource.shipped, value: one, fingerprint, url: relative(o.root, file), ...signed }])
  terminal.write(messages.shipped(shipment.title, String(shipment.field(ShipmentField.target)), relative(o.root, file)))
  return { status: exitStatus.success, body: relative(o.root, file) }
}

export default body
