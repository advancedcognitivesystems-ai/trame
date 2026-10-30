// Ce que `trame payload` produit : le graphe compilé à une date, en format intermédiaire, prêt pour une page.

import type { Compiled } from "./compile"
import type { Compilation, Document, Payload } from "./kernel"
import { addDays, fullDate } from "./format"
import { graphJson, snapshotJson } from "./machine"
import { sortedViews } from "./views"

/** Les dates où le graphe peut changer : chaque début, chaque échéance, le lendemain de chaque fin, et la veille du premier changement. */
export function candidateDates(c: Compilation): string[] {
  const out = new Set<string>([c.today])
  const dates = c.dates()
  for (const d of dates) out.add(d.role === "fin" ? addDays(d.date, 1) : fullDate(d.date))
  const first = [...out].sort()[0]
  if (first) out.add(addDays(first, -1))
  return [...out].sort()
}

export function makePayload(c: Compiled, comp: Compilation, documents: Document[]): Payload {
  const nodes = comp.all().nodes()
  return {
    date: c.today,
    generatedAt: new Date().toISOString(),
    modules: comp.modules(),
    nodes: nodes.map((v) => ({ ref: v.ref, title: v.title, module: v.module, kindLabel: comp.kindOf(v).label.one })),
    views: sortedViews().map((v) => ({ name: v.name, label: v.label, group: v.group, per: v.per })),
    documents,
    machine: { "graph.json": graphJson(c), "snapshot.json": snapshotJson(c) },
    candidates: candidateDates(comp),
    events: comp.dates().map((d) => ({ ref: d.node.ref, title: d.node.title, date: d.date, label: d.label, role: d.role })),
    state: {
      statuses: Object.fromEntries(nodes.map((v) => [v.ref, v.status ?? null])),
      issues: comp.issues().map((i) => ({
        key: `${i.severity}|${i.node?.ref ?? i.where ?? ""}|${i.what}`, severity: i.severity, what: i.what, ref: i.node?.ref, owner: i.owner,
      })),
      resolutions: comp.resolutions().map((r) => ({
        key: `${r.target.ref}|${r.paths.join(",")}`, outcome: r.outcome, applied: r.applied.map((v) => v.ref),
      })),
    },
  }
}
