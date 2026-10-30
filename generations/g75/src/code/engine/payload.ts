// What `trame payload` produces: the graph compiled at a date, in the intermediate format, ready for a page.

import { addDays, fullDate, DateRole, KindName, ReleaseField } from "../../../trame/kernel"
import type { Compilation, Document, Payload, ProvidedBy } from "../../../trame/kernel"
import type { Clock, Layout } from "../../architecture"
import type { Compiled } from "./compiler"
import type { Api as MachineApi } from "./machine"
import type { Api as ViewsApi } from "./views"
import type { Counts, Sequences, Texts, ValueTypes } from "#std/algebra"

export interface Deps {
  layout: Layout
  candidateDates: { afterAnEnd: number; beforeTheFirstChange: number }
  /** How many days of the project's history an export offers as dates, the most recent. */
  history: { days: number }
  /** How many characters a day is written with (ISO 8601). */
  iso: { dateLength: number }
  values: ProvidedBy<typeof ValueTypes>
  counts: ProvidedBy<typeof Counts>
  sequences: ProvidedBy<typeof Sequences>
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

  /**
   * The dates where the graph may change: each start, each deadline, the day after each end, and the day before the first
   * change (when there is one). With the history, the last days something was given too: a version released, evidence.
   */
  function candidateDates(c: Compilation, withHistory = false): string[] {
    const out = new Set<string>([c.today])
    const dates = c.dates()
    for (const d of dates) out.add(d.role === DateRole.end ? addDays(d.date, deps.candidateDates.afterAnEnd) : fullDate(d.date))
    const [first] = [...out].sort()
    if (first && deps.counts.any(dates)) out.add(addDays(first, deps.candidateDates.beforeTheFirstChange))
    if (withHistory) {
      const days = [...new Set(historyOf(c).map((h) => h.date))].sort()
      for (const d of deps.sequences.takeLast(days, deps.history.days)) out.add(d)
    }
    return [...out].sort()
  }

  /** What was given until the date of the compilation: the versions released, the evidence recorded, by day. */
  function historyOf(c: Compilation): NonNullable<Payload["history"]> {
    const { isText } = deps.values
    const day = (at: string) => deps.sequences.take(at, deps.iso.dateLength)
    const nodes = c.all().nodes()
    const released = nodes.filter((v) => v.kind === KindName.release).flatMap((v) => {
      const date = v.field(ReleaseField.date)
      const version = v.field(ReleaseField.version)
      return isText(date) && isText(version) ? [{ ref: v.ref, title: v.title, date, version }] : []
    })
    const given = nodes.flatMap((v) => v.evidence.map((e) => ({ ref: v.ref, title: v.title, date: day(e.at), source: e.source, value: e.value })))
    return [...released, ...given].filter((h) => h.date <= c.today).sort((a, b) => a.date.localeCompare(b.date) || a.ref.localeCompare(b.ref))
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
      history: historyOf(comp),
      events: comp.dates().map((d) => ({ ref: d.node.ref, title: d.node.title, date: d.date, label: d.label, role: d.role })),
      state: {
        statuses: Object.fromEntries(nodes.map((v) => [v.ref, v.status ?? null])),
        issues: comp.issues().map((i) => ({
          key: JSON.stringify([i.severity, optional(i.node?.ref ?? i.where), i.what]), severity: i.severity, what: i.what, ref: i.node?.ref, owner: i.owner,
        })),
        resolutions: comp.resolutions().map((r) => ({
          key: JSON.stringify([r.target.ref, r.paths]), target: r.target.ref, paths: r.paths, outcome: r.outcome, applied: r.applied.map((v) => v.ref),
        })),
      },
    }
  }

  return { candidateDates, historyOf, makePayload }
}

export type Api = ReturnType<typeof body>
export default body
