// Text rendering: what the terminal shows. Figures become trees, paths, lists of dates.
// The format is the decision "Terminal text"; its constructs come from the syntax elements of the module text: this body
// only composes them. Pure.

import { BlockType, DateRole, FigureType, InlineType, Shape } from "../../../trame/kernel"
import type { Block, Card, Document, Figure, FigureNode, Inline, ProvidedBy } from "../../../trame/kernel"
import type { Dates, RenderingMessages } from "../../messages"
import type { Punctuation } from "../../documents"
import type * as text from "../../text"
import type { Counts, Sequences, Texts } from "../../algebra"
import type { Api as CommonApi } from "./common"

export interface Deps {
  common: CommonApi
  layout: ProvidedBy<typeof text.TerminalText>
  columns: ProvidedBy<typeof text.TerminalColumns>
  punctuation: ProvidedBy<typeof Punctuation>
  cell: ProvidedBy<typeof text.PaddedCell>
  table: ProvidedBy<typeof text.Columns>
  item: ProvidedBy<typeof text.ItemLine>
  code: ProvidedBy<typeof text.CodeLines>
  lines: ProvidedBy<typeof text.TerminalLines>
  branch: ProvidedBy<typeof text.TreeBranch>
  step: ProvidedBy<typeof text.PathStep>
  dates: ProvidedBy<typeof Dates>
  counts: ProvidedBy<typeof Counts>
  sequences: ProvidedBy<typeof Sequences>
  texts: ProvidedBy<typeof Texts>
  messages: ProvidedBy<typeof RenderingMessages>
}

const body = (deps: Deps) => {
  const { inlinesText, resolutionInlines, validityText, idOf, statusText, severityText, outcomeText } = deps.common
  const { cell, table, item, code, lines, branch, step, dates, messages } = deps
  const { indent: deeper } = deps.layout
  const { widths } = deps.columns
  const { parts, items, opensAside, closesAside } = deps.punctuation
  const { next, previous: before } = deps.counts
  const { isFirst, isLast, previous } = deps.sequences
  const { empty, concat, when } = deps.texts
  /** A line with nothing on it: it separates what comes before from what follows. */
  const blankLine = empty

  /** What qualifies a text, after it, in parentheses. */
  const aside = (what: string) => concat([opensAside, what, closesAside])
  const nodeLabel = (n: FigureNode) => idOf(n.ref) + aside(n.kindLabel.toLowerCase())

  function figureText(f: Figure, indent: string): string[] {
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
      return table(undefined, rows.map(([d, what, t]) => [dates.format(d), what, t]), indent)
    }
    const byRef = new Map(f.nodes.map((n) => [n.ref, n]))
    if (f.shape === Shape.path) {
      const ordered = [...f.nodes].sort((a, b) => a.layer - b.layer)
      // Each step under the one before, indented one step less than its position.
      return ordered.map((n, i) => {
        if (isFirst(i)) return indent + nodeLabel(n)
        const prev = previous(ordered, i)!
        const e = f.edges.find((x) => (x.from === prev.ref && x.to === n.ref) || (x.to === prev.ref && x.from === n.ref))
        const via = e ? (e.from === prev.ref ? e.label : e.inverse).toLowerCase() : messages.linkedTo()
        return indent + step(before(i), via, nodeLabel(n))
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
      L.push(indent + nodeLabel(byRef.get(f.focus)!))
      walk(f.focus, indent)
      return L
    }
    const layers = [...new Set(f.nodes.map((n) => n.layer))].sort((a, b) => a - b)
    return layers.map((l) => indent + cell(messages.rank(l), widths.rank) + f.nodes.filter((n) => n.layer === l).map((n) => n.title).join(parts))
  }

  function toText(d: Document): string {
    const line = (list: Inline[]) => inlinesText(list)

    const card = (c: Card, indent: string): string[] => {
      const inner = indent + deeper
      const L = [indent + (c.repealedBy ? messages.repealedTitle(c.title) : c.title)]
      L.push(inner + [
        c.kindLabel.toLowerCase(),
        c.id,
        c.source,
        c.status && messages.cardStatusPlain(statusText(c.status)),
        c.published && messages.published(),
      ].filter(Boolean).join(parts))
      if (c.repealedBy) L.push(inner + messages.repealedBy(c.repealedBy.title))
      L.push(...blocks(c.body, inner))
      for (const r of c.resolutions) L.push(inner + line(resolutionInlines(r)))
      const rows = [
        ...c.facts.map((f) => [f.label, line(f.value)]),
        ...c.links.map((l) => [l.active ? l.label : messages.inactiveLabel(l.label), l.targets.map((t) => t.title).join(items)]),
      ]
      if (rows.length) L.push(...table(undefined, rows, inner))
      for (const ch of c.children) L.push(...blocks(ch.body, inner))
      L.push(blankLine)
      return L
    }

    const blocks = (list: Block[], indent: string): string[] => {
      const L: string[] = []
      for (const b of list) {
        switch (b.type) {
          case BlockType.para: L.push(indent + line(b.content)); break
          case BlockType.facts: L.push(...table(undefined, b.items.map((f) => [f.label, line(f.value)]), indent)); break
          case BlockType.list: L.push(...b.items.map((x) => item(indent, line(x)))); break
          case BlockType.table: L.push(...table(b.head, b.rows.map((r) => r.map(line)), indent)); break
          case BlockType.code: L.push(...code(indent, b.text)); break
          case BlockType.checks:
            if (b.title) L.push(indent + line(b.title))
            L.push(...table(undefined, b.items.map((x) => [outcomeText(x.outcome), x.name + when(x.detail, (detail) => aside(line(detail)))]), indent + deeper))
            break
          case BlockType.validity: L.push(indent + validityText(b)); break
          case BlockType.details: L.push(indent + b.summary, ...blocks(b.blocks, indent + deeper)); break
          case BlockType.section: L.push(blankLine, indent + b.title.toLowerCase(), ...blocks(b.blocks, indent + deeper)); break
          case BlockType.summary: L.push(indent + line(b.content)); break
          case BlockType.issues:
            L.push(...b.items.map((x) => concat([
              indent,
              cell(severityText(x.severity), widths.severity),
              when(x.source, (source) => cell(source, widths.source)),
              x.what,
              when(x.owner, (owner) => parts + owner),
              when(x.effect, (effect) => parts + effect),
            ])))
            break
          case BlockType.resolution: L.push(indent + line(resolutionInlines(b))); break
          case BlockType.card: L.push(...card(b, indent)); break
          case BlockType.figure: L.push(...figureText(b.figure, indent)); break
          default: {
            const never: never = b
            throw new Error(messages.unknownBlock(JSON.stringify(never)))
          }
        }
      }
      return L
    }

    const L = [d.title]
    if (d.intro) L.push(line(d.intro))
    L.push(...blocks(d.blocks, empty))
    return lines(L)
  }

  return { toText }
}

export type Api = ReturnType<typeof body>
export default body
