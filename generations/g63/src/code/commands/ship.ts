// trame ship <shipment> --by <name> [--dry-run]: runs the shipment's pipeline as the engine computes it (the one the
// views show): builds its artefacts (and those its checks read), runs the checks a program of the SDLC makes, records
// what they found as evidence attributed to the person who ships, then compiles again: while an obligation does not
// hold, it says which and refuses; otherwise it runs the programs that deploy it and writes the shipment's dossier. The
// programs of the SDLC are assembled for the shipment's environment.

import {
  KindName, EdgeName, Severity, Status, ShipmentField, ReviewEdge, EntryField, EvidenceSource, SignatureType, TriggerType, PipelineStage,
  type ProvidedBy, type View, type Compilation, type Pipeline,
} from "../../../trame/kernel"
import type { Handler, Trigger } from "../../../kinds/entry-point"
import type { FileWriting, Paths, Process, Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { TrameCommands } from "../../conventions"
import type { NodeEvents } from "#std/system"
import type { Counts, Sequences } from "#std/algebra"
import type { Api as PreparationApi } from "./preparation"
import type { Api as AssemblyApi } from "../engine/assembly"
import type { Api as SdlcApi, Entry } from "./sdlc-evidence"

export interface Deps {
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  line: ProvidedBy<typeof TrameCommands>
  preparation: PreparationApi
  deliver: Handler
  assembly: AssemblyApi
  sdlc: SdlcApi
  /** The rule of the requirement "Ship only what holds". */
  holds: (obligations: readonly Status[]) => boolean
  currentProcess: Process
  events: ProvidedBy<typeof NodeEvents>
  writing: FileWriting
  paths: Paths
  terminal: Terminal
  sequences: ProvidedBy<typeof Sequences>
  counts: ProvidedBy<typeof Counts>
  messages: ProvidedBy<typeof CommandMessages>
}

const body = (deps: Deps): Handler => async (req) => {
  const { options, prepare, reread, refuse } = deps.preparation
  const { messages, sdlc, terminal, line, exitStatus } = deps
  const { join, dirname, relative } = deps.paths
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

  // What it requires that a program checks is checked again: such a check that failed does not keep it from trying.
  const rerun = stepsOf(pipeline, PipelineStage.prove).map((s) => s.node).filter((v) => v.kind === KindName.check)
  const errors = c.diags.filter((d) => d.severity === Severity.error && !rerun.some((k) => k.node === d.node))
  if (errors.length) return refuse(o, [messages.shipRefusedForErrors(errors.length)])

  /** A program of the SDLC: its component assembled for the shipment's environment (once), run with its command. */
  const programs = new Map<string, string>()
  const program = (component: View): string => {
    const known = programs.get(component.ref)
    if (known !== undefined) return known
    if (!environment) return refuse(o, [messages.shipmentWithoutEnvironment(found.title)])
    const { assembly, errors: refused } = deps.assembly.prepareAssembly(c, o.root, component.id, environment.id)
    if (!assembly) return refuse(o, [messages.assemblyRefused(), ...refused])
    const { files, errors: emitErrors } = deps.assembly.emitAssembly(assembly)
    if (emitErrors.length) return refuse(o, emitErrors)
    for (const f of files) save(f.path, f.content)
    const [first] = files
    programs.set(component.ref, first.path)
    return first.path
  }
  const run = async (entry: View, forwarded: readonly string[] = []): Promise<number> => {
    const component = head(out(entry, EdgeName.partOf))
    if (!component) return exitStatus.failure
    const trigger = entry.field(EntryField.trigger) as Trigger | undefined
    const child = deps.currentProcess.runTs(program(component), [...(trigger?.type === TriggerType.command ? [trigger.name] : []), ...forwarded])
    return new Promise<number>((end) => child.on(deps.events.exit, (code: number | null) => end(code ?? exitStatus.failure)))
  }

  // Its artefacts, each produced by what produces it, then fingerprinted as it is on disk.
  const built = new Map<string, string>()
  const recorded: Entry[] = []
  for (const step of stepsOf(pipeline, PipelineStage.produce)) {
    const producer = step.runs
    if (producer?.kind === KindName.delivery) await deps.deliver({ params: { command: line.deliver }, body: { args: [producer.id, line.at, o.today] } })
    if (producer?.kind === KindName.component) program(producer)
    if (producer?.kind === KindName.entry) {
      const code = await run(producer)
      if (code !== exitStatus.success) return refuse(o, [messages.programFailed(producer.title, code)])
    }
    const path = join(o.root, step.path!)
    const fingerprint = sdlc.built(path)
    if (fingerprint === undefined) return refuse(o, [messages.artifactMissing(step.node.title, relative(o.root, path))])
    built.set(step.node.ref, fingerprint)
    recorded.push({ node: step.node.ref, at: o.today, source: EvidenceSource.built, value: one, fingerprint, ...signed })
    terminal.write(messages.artifactBuilt(step.node.title, relative(o.root, path), fingerprint))
  }

  // The checks a program makes, on the artefacts as they were just built.
  for (const step of stepsOf(pipeline, PipelineStage.check)) {
    const fingerprint = sdlc.checked((step.on ?? []).map((a) => built.get(a.ref)))
    const passed = (await run(step.runs!)) === exitStatus.success
    recorded.push({ node: step.node.ref, at: o.today, source: EvidenceSource.check, value: passed ? one : zero, fingerprint, ...signed })
    terminal.write(messages.checkRan(step.node.title, passed))
  }
  terminal.write(messages.evidenceRecorded(recorded.length, relative(o.root, record(recorded))))

  // The graph, with that evidence: does every obligation hold?
  ;({ c, comp } = await reread(o))
  const shipment = shipmentsOf(comp).find((s) => s.ref === ref)!
  const proven = pipelineOf(comp, shipment)
  const obligations = stepsOf(proven, PipelineStage.prove).map((s) => s.node)
  const statusOf = (v: View) => v.status ?? Status.unknown
  if (!deps.holds(obligations.map(statusOf))) {
    const missing = obligations.filter((v) => statusOf(v) !== Status.held)
    return refuse(o, [
      messages.shipmentKept(shipment.title),
      ...missing.flatMap((v) => [
        messages.obligationMissing(v.title, statusOf(v)),
        ...comp.issues({ node: v }).map((i) => messages.obligationIssue(i.what, i.owner)),
      ]),
    ])
  }
  if (o.dryRun) {
    terminal.write(messages.shipmentWouldShip(shipment.title))
    return { status: exitStatus.success, body: undefined }
  }

  // Deployed, in order: a program that fails stops it. What the person said of the deployment goes on to the programs
  // that deploy (--promote "what changes", --accept), not to those that build or check.
  const forwarded = [...(o.promote === undefined ? [] : [line.promote, o.promote]), ...(o.accept ? [line.accept] : [])]
  const deployed: Entry[] = []
  for (const step of stepsOf(proven, PipelineStage.deploy)) {
    const code = await run(step.node, forwarded)
    if (code !== exitStatus.success) {
      record([...deployed, { node: step.node.ref, at: o.today, source: EvidenceSource.deployed, value: zero, ...signed }])
      return refuse(o, [messages.deploymentFailed(step.node.title, code)])
    }
    deployed.push({ node: step.node.ref, at: o.today, source: EvidenceSource.deployed, value: one, ...signed })
    terminal.write(messages.deployed(step.node.title))
  }

  // The dossier: what shipped, what it required and the evidence that each held, who shipped it.
  const reviewed = (v: View) =>
    v.kind === KindName.review ? out(v, ReviewEdge.of).flatMap((s) => s.evidence.filter((e) => e.source === EvidenceSource.review)) : []
  const dossier = {
    shipment: shipment.ref, title: shipment.title, target: shipment.field(ShipmentField.target), at: o.today, ...signed,
    artifacts: stepsOf(proven, PipelineStage.produce).map((s) => ({ node: s.node.ref, path: s.path, fingerprint: built.get(s.node.ref) })),
    obligations: obligations.map((v) => ({
      node: v.ref, kind: v.kind, status: statusOf(v), owner: v.owner, evidence: [...v.evidence, ...reviewed(v)],
      // A scenario's evidence is what it found at the build: each of its checks and its outcome.
      ...(v.kind === KindName.scenario ? { outcome: v.result() } : {}),
    })),
    deployed: deployed.map((d) => d.node),
  }
  const file = sdlc.dossier(o.root, shipment.id, o.today)
  save(file, sdlc.text(dossier))
  record([
    ...deployed,
    { node: shipment.ref, at: o.today, source: EvidenceSource.shipped, value: one, fingerprint: sdlc.of(dossier), url: relative(o.root, file), ...signed },
  ])
  terminal.write(messages.shipped(shipment.title, String(shipment.field(ShipmentField.target)), relative(o.root, file)))
  return { status: exitStatus.success, body: relative(o.root, file) }
}

export default body
