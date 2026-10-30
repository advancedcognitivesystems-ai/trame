// Text rendering: what the terminal shows. Figures become trees, paths, lists of dates.
// Pure: the page uses it too.

import { DateRole, Shape } from "../../../trame/kernel"
import type { Block, Card, Document, Figure, FigureNode, Inline, ProvidedBy } from "../../../trame/kernel"
import type { Dates, RenderingMessages } from "../../messages"
import type { Api as CommonApi } from "./common"

export interface Deps {
  common: CommonApi
  dates: ProvidedBy<typeof Dates>
  messages: ProvidedBy<typeof RenderingMessages>
}

const body = (deps: Deps) => {
  const { inlinesText, resolutionInlines, validityText, idOf, statusText, severityText, outcomeText } = deps.common
  const { dates, messages } = deps

  const pad = (s: string, n: number) => s + " ".repeat(Math.max(1, n - [...s].length))
  const width = (s: string) => [...s].length

  function columns(head: string[] | undefined, rows: string[][], indent: string): string[] {
    const all = head ? [head, ...rows] : rows
    const n = Math.max(...all.map((r) => r.length))
    const w = Array.from({ length: n }, (_, i) => Math.max(...all.map((r) => width(r[i] ?? ""))))
    const fmt = (r: string[]) => indent + r.map((x, i) => (i === r.length - 1 ? x : pad(x, w[i] + 2))).join("").trimEnd()
    return [...(head ? [fmt(head.map((h) => h.toUpperCase()))] : []), ...rows.map(fmt)]
  }

  const nodeLabel = (n: FigureNode) => `${idOf(n.ref)} (${n.kindLabel.toLowerCase()})`

  function figureText(f: Figure, indent: string): string[] {
    if (f.type === "timeline") {
      const rows: string[][] = []
      for (const lane of f.lanes) {
        for (const p of lane.periods) {
          if (p.from) rows.push([p.from, messages.periodStart(), lane.title])
          if (p.until) rows.push([p.until, messages.periodEnd(), lane.title])
        }
        for (const m of lane.marks) if (m.role !== DateRole.start && m.role !== DateRole.end) rows.push([m.date, m.label.toLowerCase(), lane.title])
      }
      rows.push([f.today, messages.graphDate(), ""])
      rows.sort((a, b) => a[0].localeCompare(b[0]))
      return columns(undefined, rows.map(([d, what, t]) => [dates.format(d), what, t]), indent)
    }
    const byRef = new Map(f.nodes.map((n) => [n.ref, n]))
    if (f.shape === Shape.path) {
      const ordered = [...f.nodes].sort((a, b) => a.layer - b.layer)
      return ordered.map((n, i) => {
        if (i === 0) return indent + nodeLabel(n)
        const prev = ordered[i - 1]
        const e = f.edges.find((x) => (x.from === prev.ref && x.to === n.ref) || (x.to === prev.ref && x.from === n.ref))
        const via = e ? (e.from === prev.ref ? e.label : e.inverse).toLowerCase() : messages.linkedTo()
        return `${indent}${"   ".repeat(i - 1)}└ ${via} ${nodeLabel(n)}`
      })
    }
    if (f.shape === Shape.tree && f.focus) {
      const L: string[] = []
      const seen = new Set<string>([f.focus])
      const walk = (ref: string, prefix: string) => {
        const n = byRef.get(ref)!
        const kids = f.edges
          .filter((e) => (e.to === ref || e.from === ref))
          .map((e) => ({ e, other: e.to === ref ? e.from : e.to }))
          .filter(({ other }) => byRef.get(other)?.layer === n.layer + 1 && !seen.has(other))
        kids.forEach(({ other }) => seen.add(other))
        kids.forEach(({ e, other }, i) => {
          const last = i === kids.length - 1
          const label = (e.to === ref ? e.inverse : e.label).toLowerCase()
          const via = e.active ? label : messages.inactiveLabel(label)
          L.push(`${indent}${prefix}${last ? "└" : "├"} ${via} ${nodeLabel(byRef.get(other)!)}`)
          walk(other, prefix + (last ? "  " : "│ "))
        })
      }
      L.push(indent + nodeLabel(byRef.get(f.focus)!))
      walk(f.focus, "")
      return L
    }
    const layers = [...new Set(f.nodes.map((n) => n.layer))].sort((a, b) => a - b)
    return layers.map((l) => `${indent}${pad(messages.rank(l), 9)}${f.nodes.filter((n) => n.layer === l).map((n) => n.title).join(" · ")}`)
  }

  function toText(d: Document): string {
    const line = (list: Inline[]) => inlinesText(list)

    const card = (c: Card, indent: string): string[] => {
      const L = [`${indent}${c.repealedBy ? messages.repealedTitle(c.title) : c.title}`]
      L.push(`${indent}  ${[
        c.kindLabel.toLowerCase(),
        c.id,
        c.source,
        c.status && messages.cardStatusPlain(statusText(c.status)),
        c.published && messages.published(),
      ].filter(Boolean).join(" · ")}`)
      if (c.repealedBy) L.push(`${indent}  ${messages.repealedBy(c.repealedBy.title)}`)
      L.push(...blocks(c.body, indent + "  "))
      for (const r of c.resolutions) L.push(`${indent}  ${line(resolutionInlines(r))}`)
      const rows = [
        ...c.facts.map((f) => [f.label, line(f.value)]),
        ...c.links.map((l) => [l.active ? l.label : messages.inactiveLabel(l.label), l.targets.map((t) => t.title).join(", ")]),
      ]
      if (rows.length) L.push(...columns(undefined, rows, indent + "  "))
      for (const ch of c.children) L.push(...blocks(ch.body, indent + "  "))
      L.push("")
      return L
    }

    const blocks = (list: Block[], indent: string): string[] => {
      const L: string[] = []
      for (const b of list) {
        switch (b.type) {
          case "para": L.push(indent + line(b.content)); break
          case "facts": L.push(...columns(undefined, b.items.map((f) => [f.label, line(f.value)]), indent)); break
          case "list": L.push(...b.items.map((x) => `${indent}- ${line(x)}`)); break
          case "table": L.push(...columns(b.head, b.rows.map((r) => r.map(line)), indent)); break
          case "code": L.push(...b.text.split("\n").map((x) => `${indent}    ${x}`)); break
          case "checks":
            if (b.title) L.push(indent + line(b.title))
            L.push(...columns(undefined, b.items.map((x) => [outcomeText(x.outcome), x.name + (x.detail ? ` (${line(x.detail)})` : "")]), indent + "  "))
            break
          case "validity": L.push(indent + validityText(b)); break
          case "details": L.push(`${indent}${b.summary}`, ...blocks(b.blocks, indent + "  ")); break
          case "section": L.push("", `${indent}${b.title.toLowerCase()}`, ...blocks(b.blocks, indent + "  ")); break
          case "summary": L.push(indent + line(b.content)); break
          case "issues":
            L.push(...b.items.map((x) =>
              `${indent}${pad(severityText(x.severity), 15)}${x.source ? pad(x.source, 22) : ""}${x.what}${x.owner ? ` · ${x.owner}` : ""}${x.effect ? ` · ${x.effect}` : ""}`))
            break
          case "resolution": L.push(indent + line(resolutionInlines(b))); break
          case "card": L.push(...card(b, indent)); break
          case "figure": L.push(...figureText(b.figure, indent)); break
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
    L.push(...blocks(d.blocks, ""))
    return L.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n"
  }

  return { toText }
}

export type Api = ReturnType<typeof body>
export default body
