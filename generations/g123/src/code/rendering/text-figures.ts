// Figures as text: a tree drawn with box-drawing characters, a path step by step, the dates of a timeline in columns,
// the layers one per line. The constructs come from the syntax elements of the module text; the syntax that carries a
// figure indents its lines. Pure.

import { DateRole, FigureType, Shape } from "../../../trame/kernel"
import type { Figure, FigureNode, ProvidedBy } from "../../../trame/kernel"
import type { Dates, RenderingMessages } from "../../messages"
import type { Punctuation } from "../../documents"
import type { FigureSyntax } from "../../rendering"
import type * as text from "../../text"
import type { Counts, Sequences, Texts } from "#std/algebra"
import type { Api as CommonApi } from "./common"

export interface Deps {
  common: CommonApi
  columns: ProvidedBy<typeof text.TerminalColumns>
  punctuation: ProvidedBy<typeof Punctuation>
  cell: ProvidedBy<typeof text.PaddedCell>
  table: ProvidedBy<typeof text.Columns>
  branch: ProvidedBy<typeof text.TreeBranch>
  step: ProvidedBy<typeof text.PathStep>
  dates: ProvidedBy<typeof Dates>
  counts: ProvidedBy<typeof Counts>
  sequences: ProvidedBy<typeof Sequences>
  texts: ProvidedBy<typeof Texts>
  messages: ProvidedBy<typeof RenderingMessages>
}

const body = (deps: Deps): FigureSyntax => {
  const { idOf } = deps.common
  const { cell, table, branch, step, dates, messages } = deps
  const { widths } = deps.columns
  const { parts, opensAside, closesAside } = deps.punctuation
  const { next, previous: before } = deps.counts
  const { isFirst, isLast, previous } = deps.sequences
  const { empty, concat } = deps.texts

  /** What qualifies a text, after it, in parentheses. */
  const aside = (what: string) => concat([opensAside, what, closesAside])
  const nodeLabel = (n: FigureNode) => idOf(n.ref) + aside(n.kindLabel.toLowerCase())

  function lines(f: Figure): string[] {
    if (f.type === FigureType.timeline) {
      const rows: string[][] = []
      for (const lane of f.lanes) {
        for (const p of lane.periods) {
          if (p.from) rows.push([p.from, messages.periodStart(), lane.title])
          if (p.until) rows.push([p.until, messages.periodEnd(), lane.title])
        }
        for (const m of lane.marks) if (m.role !== DateRole.start && m.role !== DateRole.end) rows.push([m.date, m.label.toLowerCase(), lane.title])
      }
      rows.push([f.today, messages.graphDate(), empty])
      rows.sort(([a], [b]) => a.localeCompare(b))
      return table(undefined, rows.map(([d, what, t]) => [dates.format(d), what, t]), empty)
    }
    const byRef = new Map(f.nodes.map((n) => [n.ref, n]))
    if (f.shape === Shape.path) {
      const ordered = [...f.nodes].sort((a, b) => a.layer - b.layer)
      // Each step under the one before, indented one step less than its position.
      return ordered.map((n, i) => {
        if (isFirst(i)) return nodeLabel(n)
        const prev = previous(ordered, i)!
        const e = f.edges.find((x) => (x.from === prev.ref && x.to === n.ref) || (x.to === prev.ref && x.from === n.ref))
        const via = e ? (e.from === prev.ref ? e.label : e.inverse).toLowerCase() : messages.linkedTo()
        return step(before(i), via, nodeLabel(n))
      })
    }
    if (f.shape === Shape.tree && f.focus) {
      const L: string[] = []
      const seen = new Set<string>([f.focus])
      const walk = (ref: string, left: string) => {
        const n = byRef.get(ref)!
        const kids = f.edges
          .filter((e) => (e.to === ref || e.from === ref))
          .map((e) => ({ e, other: e.to === ref ? e.from : e.to }))
          .filter(({ other }) => byRef.get(other)?.layer === next(n.layer) && !seen.has(other))
        kids.forEach(({ other }) => seen.add(other))
        kids.forEach(({ e, other }, i) => {
          const last = isLast(kids, i)
          const label = (e.to === ref ? e.inverse : e.label).toLowerCase()
          const via = e.active ? label : messages.inactiveLabel(label)
          const drawn = branch(left, last, via, nodeLabel(byRef.get(other)!))
          L.push(drawn.line)
          walk(other, drawn.under)
        })
      }
      L.push(nodeLabel(byRef.get(f.focus)!))
      walk(f.focus, empty)
      return L
    }
    const layers = [...new Set(f.nodes.map((n) => n.layer))].sort((a, b) => a - b)
    return layers.map((l) => cell(messages.rank(l), widths.rank) + f.nodes.filter((n) => n.layer === l).map((n) => n.title).join(parts))
  }

  return { figure: (f) => ({ lines: lines(f) }) }
}

export default body
