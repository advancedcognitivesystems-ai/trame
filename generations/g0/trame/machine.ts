// Les sorties pour les outils : graph.json (le graphe avec son historique) et snapshot.json (l'état attendu, sans historique).

import type { Compiled } from "./compile"
import { kinds, meta, isHole, isNode, refOf } from "./internal"
import type { AnyKind, View } from "./kernel"

const defOf = (v: View): AnyKind => kinds.find((k) => k.name === v.kind)!

function serial(v: unknown): unknown {
  if (isHole(v)) return "TODO"
  if (typeof v === "function") return "(fonction)"
  if (typeof v === "symbol") return String(v.description)
  if (isNode(v)) return refOf(v)
  if (Array.isArray(v)) return v.map(serial)
  if (v !== null && typeof v === "object") return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, serial(x)]))
  return v
}

const fields = (v: View) =>
  Object.fromEntries(Object.keys(defOf(v).fields).map((k) => [k, serial(v.field(k))]).filter(([, x]) => x !== undefined))

export function graphJson(c: Compiled): string {
  const g = c.graph
  const conflicts = c.resolutions.filter((r) => r.claimants.length > 1)
  return JSON.stringify({
    generated: c.today,
    nodes: c.nodes.map((n) => {
      const v = g.view(n)
      return {
        id: v.ref,
        kind: v.kind,
        title: v.decl?.title,
        source: v.decl ? `${v.decl.file}:${v.decl.line}` : undefined,
        status: v.status,
        fields: fields(v),
        amendedBy: v.amendedBy.length ? v.amendedBy.map((a) => ({ by: a.by.ref, paths: a.paths })) : undefined,
        repealedBy: v.repealedBy?.ref,
        contested: v.contested.length ? v.contested : undefined,
        active: defOf(v).activeAt ? v.active : undefined,
        result: serial(v.result()),
        diagnostics: c.diags.filter((d) => d.node === n).map((d) => `${d.severity}: ${d.what}`),
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
  }, null, 2)
}

/** L'instantané consolidé : ni historique, ni nœud abrogé. */
export function snapshotJson(c: Compiled): string {
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
    open: c.diags.filter((d) => d.node && kept.has(d.node) && d.severity === "bloquant").map((d) => ({ node: refOf(d.node!), what: d.what, owner: d.owner })),
  }, null, 2)
}
