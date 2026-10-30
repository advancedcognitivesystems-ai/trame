// Markdown rendering: the text rendering of documents (decision "Text rendering of documents: Markdown").
// The syntax comes from the elements of the Markdown spec (src/markdown.ts): this body only composes them.
// Figures are Mermaid diagrams, written by the figure renderer, in mermaid blocks. Pure.

import { Outcome } from "../../../trame/kernel"
import type { Block, Card, Document, Figure, Inline, ProvidedBy } from "../../../trame/kernel"
import type * as md from "../../markdown"
import type * as mm from "../../mermaid"
import type * as engine from "../../engine"
import type { TextRendering } from "../../documents"
import type { RenderingMessages } from "../../messages"
import type { Api as DiagramsApi } from "./mermaid"
import type { Api as CommonApi, Location } from "./common"

export interface MarkdownContext {
  /** Where the card of each node lives. */
  locate: Map<string, Location>
  /** The file of each document (for links between documents). */
  files: Map<string, string | undefined>
}
export interface Deps {
  common: CommonApi
  references: ProvidedBy<typeof engine.References>
  /** The heading levels of the document. */
  textRendering: ProvidedBy<typeof TextRendering>
  diagrams: DiagramsApi
  mermaidBlock: ProvidedBy<typeof mm.MermaidBlock>
  blocks: ProvidedBy<typeof md.Blocks>
  heading: ProvidedBy<typeof md.Heading>
  listItem: ProvidedBy<typeof md.ListItem>
  blockQuote: ProvidedBy<typeof md.BlockQuote>
  codeBlock: ProvidedBy<typeof md.CodeBlock>
  emphasis: ProvidedBy<typeof md.Emphasis>
  strong: ProvidedBy<typeof md.StrongEmphasis>
  codeSpan: ProvidedBy<typeof md.CodeSpan>
  link: ProvidedBy<typeof md.Link>
  relativeReference: ProvidedBy<typeof md.RelativeReference>
  tableCell: ProvidedBy<typeof md.TableCell>
  table: ProvidedBy<typeof md.Table>
  anchor: ProvidedBy<typeof md.Anchor>
  details: ProvidedBy<typeof md.Details>
  messages: ProvidedBy<typeof RenderingMessages>
}

const body = (deps: Deps) => {
  const { inlineText, isOpen, resolutionInlines, validityParts, valueText, statusText, severityText, outcomeText } = deps.common
  const { heading, listItem, blockQuote, codeBlock, emphasis, strong, codeSpan, link, relativeReference, tableCell, table, anchor, details } = deps
  const { textRendering, mermaidBlock, messages } = deps
  const { diagram } = deps.diagrams
  const { identifier } = deps.references

  function toMarkdown(d: Document, ctx: MarkdownContext): string {
    const href = (ref: string): string | undefined => {
      const loc = ctx.locate.get(ref)
      if (!loc) return undefined
      if (loc.doc === d.id) return relativeReference(undefined, loc.anchor)
      return loc.file ? relativeReference(loc.file, loc.anchor) : undefined
    }

    const inline = (i: Inline): string => {
      if (typeof i === "string") return i
      switch (i.t) {
        case "value": return isOpen(i) ? strong(valueText(i)) : valueText(i)
        case "ref": {
          const h = href(i.ref)
          return h ? link(i.title, h) : i.title
        }
        case "doc": {
          const file = ctx.files.get(i.id)
          return file ? link(i.title, relativeReference(file)) : i.title
        }
        case "status": return strong(statusText(i.status))
        case "severity": return severityText(i.severity)
        case "date": return inlineText(i)
        case "person": return i.name
        case "ident": return codeSpan(i.text)
      }
    }
    const line = (list: Inline[]) => list.map(inline).join("")
    const cell = (list: Inline[]) => tableCell(line(list))

    const tableLines = (head: string[], rows: string[][]): string[] => [...table(head.map(tableCell), rows), ""]

    const card = (c: Card, level: number): string[] => {
      const L: string[] = [anchor(c.id), "", heading(level, c.repealedBy ? messages.repealedTitle(c.title) : c.title), ""]
      L.push([
        codeSpan(c.id),
        c.source && codeSpan(c.source),
        c.status && messages.cardStatus(strong(statusText(c.status))),
        c.published && messages.published(),
      ].filter(Boolean).join(" · "), "")
      if (c.description) L.push(c.description, "")
      if (c.repealedBy) L.push(messages.repealedNote(strong(messages.repealed()), inline({ t: "ref", ...c.repealedBy })), "")
      L.push(...blocks(c.body, level + 1))
      for (const r of c.resolutions) L.push(blockQuote(line(resolutionInlines(r))), "")
      const facts = [
        ...c.facts.map((f) => messages.fact(f.label, line(f.value))),
        ...c.links.map((l) => messages.fact(l.active ? l.label : messages.inactiveLabel(l.label), l.targets.map((t) => inline({ t: "ref", ...t })).join(", "))),
      ]
      for (const f of facts) L.push(listItem(f))
      if (facts.length) L.push("")
      for (const ch of c.children) L.push(anchor(identifier(ch.ref)), "", ...blocks(ch.body, level + 1))
      return L
    }

    const figure = (f: Figure, caption?: string): string[] => {
      const out = [...mermaidBlock(diagram(f)), ""]
      if (caption) out.push(emphasis(caption), "")
      return out
    }

    const blocks = (list: Block[], level: number): string[] => {
      const L: string[] = []
      for (const b of list) {
        switch (b.type) {
          case "para": L.push(line(b.content), ""); break
          case "facts": L.push(...b.items.map((f) => listItem(messages.fact(f.label, line(f.value)))), ""); break
          case "list": L.push(...b.items.map((x) => listItem(line(x))), ""); break
          case "table": L.push(...tableLines(b.head, b.rows.map((r) => r.map(cell)))); break
          case "code": L.push(...codeBlock(b.lang, [b.text]), ""); break
          case "checks":
            if (b.title) L.push(strong(line(b.title)), "")
            L.push(...tableLines([messages.criterionHeader(), messages.resultHeader()], b.items.map((x) => {
              const outcome = outcomeText(x.outcome)
              if (x.outcome === Outcome.passed) return [tableCell(x.name), outcome]
              return [tableCell(x.name), x.detail ? messages.fact(strong(outcome), cell(x.detail)) : strong(outcome)]
            })))
            break
          case "validity": {
            const [head, rest] = validityParts(b)
            L.push(`${strong(head)}${rest}`, "")
            break
          }
          case "details": L.push(...details(b.summary, blocks(b.blocks, level)), ""); break
          case "section": {
            if (b.id) L.push(anchor(b.id), "")
            L.push(heading(level, b.title), "", ...blocks(b.blocks, level + 1))
            break
          }
          case "summary": L.push(blockQuote(strong(line(b.content))), ""); break
          case "issues":
            L.push(...tableLines(
              [messages.severityHeader(), messages.whatHeader(), messages.whereHeader(), messages.ownerHeader(), messages.effectHeader()],
              b.items.map((x) => [
                severityText(x.severity), tableCell(x.what),
                typeof x.where === "string" ? tableCell(x.where) : x.where ? inline({ t: "ref", ...x.where }) : "",
                x.owner ?? messages.unassigned(), tableCell(x.effect ?? ""),
              ]),
            ))
            break
          case "resolution": L.push(blockQuote(line(resolutionInlines(b))), ""); break
          case "card": L.push(...card(b, level)); break
          case "figure": L.push(...figure(b.figure, b.caption)); break
          default: {
            const never: never = b
            throw new Error(messages.unknownBlock(JSON.stringify(never)))
          }
        }
      }
      return L
    }

    const L: string[] = [heading(textRendering.titleLevel, d.title), ""]
    if (d.intro) L.push(emphasis(line(d.intro)), "")
    L.push(...blocks(d.blocks, textRendering.sectionLevel))
    return deps.blocks(L)
  }

  return { toMarkdown }
}

export type Api = ReturnType<typeof body>
export default body
