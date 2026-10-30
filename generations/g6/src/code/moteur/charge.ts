// Ce que `trame payload` produit : le graphe compilé à une date, en format intermédiaire, prêt pour une page.

import { addDays, fullDate } from "../../../trame/kernel"
import type { Compiled } from "./compilateur"
import type { Compilation, Document, Payload } from "../../../trame/kernel"
import type { Api as MachineApi } from "./machine"
import type { Api as VuesApi } from "./vues"

import type { Disposition, Horloge } from "../../architecture"

export interface Deps {
  disposition: Disposition
  horloge: Horloge
  machine: MachineApi
  vues: VuesApi
}

const corps = (deps: Deps) => {
  const { graphJson, snapshotJson } = deps.machine
  const { sortedViews } = deps.vues

  /** Les dates où le graphe peut changer : chaque début, chaque échéance, le lendemain de chaque fin, et la veille du premier changement. */
  function candidateDates(c: Compilation): string[] {
    const out = new Set<string>([c.today])
    const dates = c.dates()
    for (const d of dates) out.add(d.role === "fin" ? addDays(d.date, 1) : fullDate(d.date))
    const first = [...out].sort()[0]
    if (first) out.add(addDays(first, -1))
    return [...out].sort()
  }

  function makePayload(c: Compiled, comp: Compilation, documents: Document[]): Payload {
    const nodes = comp.all().nodes()
    return {
      date: c.today,
      generatedAt: deps.horloge.maintenant().toISOString(),
      modules: comp.modules(),
      nodes: nodes.map((v) => ({ ref: v.ref, title: v.title, module: v.module, kindLabel: comp.kindOf(v).label.one })),
      views: sortedViews().map((v) => ({ name: v.name, label: v.label, group: v.group, per: v.per })),
      documents,
      machine: { [deps.disposition.graphe]: graphJson(c), [deps.disposition.instantane]: snapshotJson(c) },
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

  return { candidateDates, makePayload }
}

export type Api = ReturnType<typeof corps>
export default corps
