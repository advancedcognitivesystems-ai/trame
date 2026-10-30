// The outputs for tools: graph.json (the graph with its history) and snapshot.json (the expected state, without history).

import { JsonMark, Severity } from "../../../trame/kernel"
import type { ProvidedBy, AnyKind, View } from "../../../trame/kernel"
import type { Prelude } from "../../architecture"
import type { OutputMessages } from "../../messages"
import type { Compiled } from "./compiler"
import type { Counts, ValueTypes } from "../../algebra"
import type { JsonFormatting } from "../../conventions"

export interface Deps {
  values: ProvidedBy<typeof ValueTypes>
  json: ProvidedBy<typeof JsonFormatting>
  positions: { reference(file: string, line: number): string }
  prelude: Prelude
  messages: ProvidedBy<typeof OutputMessages>
  counts: ProvidedBy<typeof Counts>
}

const body = (deps: Deps) => {
  const { values } = deps
  const { several } = deps.counts
  const { kinds, meta, isHole, isNode, refOf } = deps.prelude.internal
  const { messages } = deps

  const defOf = (v: View): AnyKind => kinds.find((k) => k.name === v.kind)!

  function serial(v: unknown): unknown {
    if (isHole(v)) return JsonMark.undecided
    if (values.isFunction(v)) return messages.functionValue()
    if (values.isSymbol(v)) return String(v.description)
    if (isNode(v)) return refOf(v)
    if (Array.isArray(v)) return v.map(serial)
    if (v !== null && values.isObject(v)) return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, serial(x)]))
    return v
  }

  const fields = (v: View) =>
    Object.fromEntries(Object.keys(defOf(v).fields).map((k) => [k, serial(v.field(k))]).filter(([, x]) => x !== undefined))

  function graphJson(c: Compiled): string {
    const g = c.graph
    const conflicts = c.resolutions.filter((r) => several(r.claimants))
    return JSON.stringify({
      generated: c.today,
      nodes: c.nodes.map((n) => {
        const v = g.view(n)
        return {
          id: v.ref,
          kind: v.kind,
          title: v.decl?.title,
          source: v.decl ? deps.positions.reference(v.decl.file, v.decl.line) : undefined,
          status: v.status,
          fields: fields(v),
          amendedBy: v.amendedBy.length ? v.amendedBy.map((a) => ({ by: a.by.ref, paths: a.paths })) : undefined,
          repealedBy: v.repealedBy?.ref,
          contested: v.contested.length ? v.contested : undefined,
          active: defOf(v).activeAt ? v.active : undefined,
          result: serial(v.result()),
          diagnostics: c.diags.filter((d) => d.node === n).map((d) => messages.diagnostic(d.severity, d.what)),
        }
      }),
      edges: c.edges.map((e) => ({
        from: refOf(e.from), to: refOf(e.to), kind: e.name,
        inferred: e.inferred || undefined, derived: e.derived || undefined, active: e.active ? undefined : false,
      })),
      resolutions: conflicts.map((r) => ({
        target: refOf(r.target),
        paths: r.paths,
        claimants: r.claimants.map(refOf),
        outcome: r.outcome,
        applied: r.applied.map(refOf),
        replaced: r.replaced.length ? r.replaced.map(([a, b]) => ({ by: refOf(a), replaced: refOf(b) })) : undefined,
        reason: r.reason,
        arbiter: r.arbiter,
        because: r.because.length ? r.because.map(refOf) : undefined,
      })),
      diagnostics: c.diags.filter((d) => !d.node).map((d) => ({ severity: d.severity, where: d.where, what: d.what })),
    }, null, deps.json.indentation)
  }

  /** The consolidated snapshot: neither history nor repealed node. */
  function snapshotJson(c: Compiled): string {
    const g = c.graph
    const keep = c.nodes.filter((n) => !meta(n).def.history && !meta(n).repealedBy)
    const kept = new Set(keep)
    return JSON.stringify({
      at: c.today,
      nodes: keep.map((n) => {
        const v = g.view(n)
        return { id: v.ref, kind: v.kind, title: v.decl?.title, status: v.status, fields: fields(v) }
      }),
      edges: c.edges.filter((e) => !e.derived && kept.has(e.from) && kept.has(e.to)).map((e) => ({ from: refOf(e.from), to: refOf(e.to), kind: e.name })),
      open: c.diags.filter((d) => d.node && kept.has(d.node) && d.severity === Severity.blocking).map((d) => ({ node: refOf(d.node!), what: d.what, owner: d.owner })),
    }, null, deps.json.indentation)
  }

  return { graphJson, snapshotJson }
}

export type Api = ReturnType<typeof body>
export default body
