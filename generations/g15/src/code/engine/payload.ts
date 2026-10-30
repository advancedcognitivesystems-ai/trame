// What `trame payload` produces: the graph compiled at a date, in the intermediate format, ready for a page.

import { addDays, fullDate, DateRole } from "../../../trame/kernel"
import type { Compilation, Document, Payload, ProvidedBy } from "../../../trame/kernel"
import type { Clock, Layout } from "../../architecture"
import type { Compiled } from "./compiler"
import type { Api as MachineApi } from "./machine"
import type { Api as ViewsApi } from "./views"
import type { Texts } from "../../algebra"

export interface Deps {
  layout: Layout
  candidateDates: { afterAnEnd: number; beforeTheFirstChange: number }
  clock: Clock
  machine: MachineApi
  views: ViewsApi
  language: { tag: string }
  texts: ProvidedBy<typeof Texts>
}

const body = (deps: Deps) => {
  const { optional } = deps.texts
  const { graphJson, snapshotJson } = deps.machine
  const { sortedViews } = deps.views

  /** The dates where the graph may change: each start, each deadline, the day after each end, and the day before the first change. */
  function candidateDates(c: Compilation): string[] {
    const out = new Set<string>([c.today])
    const dates = c.dates()
    for (const d of dates) out.add(d.role === DateRole.end ? addDays(d.date, deps.candidateDates.afterAnEnd) : fullDate(d.date))
    const [first] = [...out].sort()
    if (first) out.add(addDays(first, deps.candidateDates.beforeTheFirstChange))
    return [...out].sort()
  }

  function makePayload(c: Compiled, comp: Compilation, documents: Document[]): Payload {
    const nodes = comp.all().nodes()
    return {
      date: c.today,
      language: deps.language.tag,
      generatedAt: deps.clock.now().toISOString(),
      modules: comp.modules(),
      nodes: nodes.map((v) => ({ ref: v.ref, title: v.title, module: v.module, kindLabel: comp.kindOf(v).label.one })),
      views: sortedViews().map((v) => ({ name: v.name, label: v.label, group: v.group, per: v.per })),
      documents,
      machine: { [deps.layout.graph]: graphJson(c), [deps.layout.snapshot]: snapshotJson(c) },
      candidates: candidateDates(comp),
      events: comp.dates().map((d) => ({ ref: d.node.ref, title: d.node.title, date: d.date, label: d.label, role: d.role })),
      state: {
        statuses: Object.fromEntries(nodes.map((v) => [v.ref, v.status ?? null])),
        issues: comp.issues().map((i) => ({
          key: `${i.severity}|${optional(i.node?.ref ?? i.where)}|${i.what}`, severity: i.severity, what: i.what, ref: i.node?.ref, owner: i.owner,
        })),
        resolutions: comp.resolutions().map((r) => ({
          key: `${r.target.ref}|${r.paths.join(",")}`, outcome: r.outcome, applied: r.applied.map((v) => v.ref),
        })),
      },
    }
  }

  return { candidateDates, makePayload }
}

export type Api = ReturnType<typeof body>
export default body
