// trame plan: what a build would change, written nowhere. It compiles the graph now (or at --at) and compares it with
// graph.json, the last build: the nodes added and removed, the statuses that change, the nodes whose fields, result or
// edges change, the issues raised and resolved, and the shipments whose obligations are touched.

import { KindName, ShipmentEdge } from "../../../trame/kernel"
import type { ProvidedBy } from "../../../trame/kernel"
import type { Handler } from "../../../kinds/entry-point"
import type { FileReading, Layout, Paths, Terminal } from "../../architecture"
import type { CommandMessages, OutputMessages } from "../../messages"
import type { Api as PreparationApi } from "./preparation"
import type { Api as MachineApi } from "../engine/machine"
import type { NodeEncodings } from "#std/system"

/** A node as graph.json writes it: what a plan compares. */
interface Written { id: string; kind: string; title?: string; status?: string; fields?: unknown; result?: unknown; diagnostics?: string[] }
/** A build as graph.json writes it. */
interface Build {
  generated?: string
  nodes: Written[]
  edges: { from: string; to: string; kind: string }[]
  diagnostics?: { severity: string; where?: string; what: string }[]
}
/** An issue a plan raises or resolves: on a node, or on the graph (no node). */
interface Issue { node?: string; what: string }

/** What a build would change. */
export interface Plan {
  /** The date of the build compared with. */
  since?: string
  added: string[]
  removed: string[]
  statuses: { node: string; from?: string; to?: string }[]
  /** Nodes whose status stays, but whose fields, result or edges change. */
  changed: { node: string; fields: boolean; result: boolean; edges: boolean }[]
  raised: Issue[]
  resolved: Issue[]
  /** The shipments touched: changed themselves, or one of their obligations is. */
  shipments: string[]
}

export interface Deps {
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  layout: Layout
  text: { indent: string }
  preparation: PreparationApi
  machine: MachineApi
  reading: FileReading
  paths: Paths
  encodings: ProvidedBy<typeof NodeEncodings>
  terminal: Terminal
  messages: ProvidedBy<typeof CommandMessages>
  /** How graph.json writes an issue: the issues of the graph are compared as those of its nodes. */
  output: ProvidedBy<typeof OutputMessages>
}

const body = (deps: Deps): Handler => {
  const { options, prepare } = deps.preparation
  const { readFileSync, existsSync } = deps.reading
  const { indent } = deps.text
  const { messages, terminal } = deps

  const same = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b)
  const edgesOf = (b: Build) => {
    const of = new Map<string, string[]>()
    for (const e of b.edges) of.set(e.from, [...(of.get(e.from) ?? []), JSON.stringify([e.kind, e.to])])
    return (id: string) => [...(of.get(id) ?? [])].sort()
  }
  /** What each shipment must prove, as the build wrote it: what it ships, what it requires, what its policy derives. */
  const obliged = (b: Build) => {
    const of = new Map<string, Set<string>>()
    const proving = new Set<string>([ShipmentEdge.ships, ShipmentEdge.requires])
    for (const n of b.nodes.filter((x) => x.kind === KindName.shipment)) {
      const derived = ((n.result as { derived?: { node: string }[] } | undefined)?.derived ?? []).map((d) => d.node)
      const edged = b.edges.filter((e) => e.from === n.id && proving.has(e.kind)).map((e) => e.to)
      of.set(n.id, new Set([...derived, ...edged]))
    }
    return of
  }
  const issuesOf = (b: Build): Issue[] => [
    ...b.nodes.flatMap((n) => (n.diagnostics ?? []).map((what) => ({ node: n.id, what }))),
    ...(b.diagnostics ?? []).map((d) => ({ what: deps.output.diagnostic(d.severity, d.what) })),
  ]

  function compare(before: Build, now: Build): Plan {
    const was = new Map(before.nodes.map((n) => [n.id, n]))
    const is = new Map(now.nodes.map((n) => [n.id, n]))
    const added = now.nodes.filter((n) => !was.has(n.id)).map((n) => n.id)
    const removed = before.nodes.filter((n) => !is.has(n.id)).map((n) => n.id)
    const kept = now.nodes.filter((n) => was.has(n.id))
    const statuses = kept.filter((n) => n.status !== was.get(n.id)!.status).map((n) => ({ node: n.id, from: was.get(n.id)!.status, to: n.status }))
    const edgesBefore = edgesOf(before), edgesNow = edgesOf(now)
    const changed = kept
      .filter((n) => n.status === was.get(n.id)!.status)
      .map((n) => ({
        node: n.id,
        fields: !same(n.fields, was.get(n.id)!.fields),
        result: !same(n.result, was.get(n.id)!.result),
        edges: !same(edgesNow(n.id), edgesBefore(n.id)),
      }))
      .filter((x) => x.fields || x.result || x.edges)
    // An issue of a removed node goes with it; the removal says so.
    const key = (i: Issue) => JSON.stringify([i.node, i.what])
    const issuesBefore = issuesOf(before), issuesNow = issuesOf(now)
    const hadIssue = new Set(issuesBefore.map(key)), hasIssue = new Set(issuesNow.map(key))
    const raised = issuesNow.filter((i) => !hadIssue.has(key(i)))
    const resolved = issuesBefore.filter((i) => !hasIssue.has(key(i)) && (i.node === undefined || is.has(i.node)))
    const touched = new Set([
      ...added, ...removed, ...statuses.map((x) => x.node), ...changed.map((x) => x.node),
      ...[...raised, ...resolved].flatMap((i) => (i.node === undefined ? [] : [i.node])),
    ])
    const owing = [obliged(before), obliged(now)]
    const shipments = [...new Set(owing.flatMap((o) => [...o.keys()]))]
      .filter((s) => touched.has(s) || owing.some((o) => [...(o.get(s) ?? [])].some((node) => touched.has(node))))
      .sort()
    return { since: before.generated, added, removed, statuses, changed, raised, resolved, shipments }
  }

  return async (req) => {
    const o = options(req.params.command, (req.body as { args: string[] }).args)
    const { c } = await prepare(o)
    const file = deps.paths.join(o.root, deps.layout.graph)
    if (!existsSync(file)) {
      terminal.write(messages.planNothingBuilt(deps.layout.graph))
      return { status: deps.exitStatus.success, body: undefined }
    }
    const before = JSON.parse(String(readFileSync(file, deps.encodings.utf8))) as Build
    const now = JSON.parse(deps.machine.graphJson(c)) as Build
    const plan = compare(before, now)
    const nodes = new Map([...before.nodes, ...now.nodes].map((n) => [n.id, n]))
    const titled = (id: string) => nodes.get(id)?.title ?? id
    const kindOf = (id: string) => nodes.get(id)?.kind
    const where = (i: Issue) => (i.node === undefined ? undefined : titled(i.node))
    terminal.write(messages.planHeading(plan.since, o.today, {
      added: plan.added.length, removed: plan.removed.length, statuses: plan.statuses.length, changed: plan.changed.length,
      raised: plan.raised.length, resolved: plan.resolved.length,
    }))
    const lines = [
      ...plan.added.map((id) => messages.planAdded(titled(id), kindOf(id))),
      ...plan.removed.map((id) => messages.planRemoved(titled(id), kindOf(id))),
      ...plan.statuses.map((x) => messages.planStatus(titled(x.node), x.from, x.to)),
      ...plan.changed.map((x) => messages.planChanged(titled(x.node), x)),
      ...plan.raised.map((i) => messages.planRaised(where(i), i.what)),
      ...plan.resolved.map((i) => messages.planResolved(where(i), i.what)),
    ]
    for (const l of lines) terminal.write(indent + l)
    terminal.write(lines.length ? messages.planShipments(plan.shipments.map(titled)) : messages.planNothing())
    return { status: deps.exitStatus.success, body: plan }
  }
}

export default body
