// Markdown rendering: the text rendering of documents (decision "Text rendering of documents: Markdown").
// The syntax comes from the elements of the Markdown spec (src/markdown.ts): this body only composes them. A document is
// a list of blocks; the spec closes each one with a blank line. Figures are Mermaid diagrams, written by the figure
// renderer, in mermaid blocks. Pure.

import { BlockType, InlineType, Outcome } from "../../../trame/kernel"
import type { Block, Card, Document, Figure, Inline, ProvidedBy } from "../../../trame/kernel"
import type * as md from "../../markdown"
import type * as mm from "../../mermaid"
import type * as engine from "../../engine"
import type { Punctuation, TextRendering } from "../../documents"
import type { RenderingMessages } from "../../messages"
import type { Counts, Texts, ValueTypes } from "../../algebra"
import type { MarkdownBlock } from "../../markdown"
import type { Api as DiagramsApi } from "./mermaid"
import type { Api as CommonApi, Location } from "./common"

export interface MarkdownContext {
  /** Where the card of each node lives. */
  locate: Map<string, Location>
  /** The file of each document (for links between documents). */
  files: Map<string, string | undefined>
}
export interface Deps {
  values: ProvidedBy<typeof ValueTypes>
  common: CommonApi
  references: ProvidedBy<typeof engine.References>
  /** The heading levels of the document. */
  textRendering: ProvidedBy<typeof TextRendering>
  punctuation: ProvidedBy<typeof Punctuation>
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
  counts: ProvidedBy<typeof Counts>
  texts: ProvidedBy<typeof Texts>
  messages: ProvidedBy<typeof RenderingMessages>
}

const body = (deps: Deps) => {
  const { values } = deps
  const { inlineText, isOpen, resolutionInlines, validityParts, valueText, statusText, severityText, outcomeText } = deps.common
  const { heading, listItem, blockQuote, codeBlock, emphasis, strong, codeSpan, link, relativeReference, tableCell, table, anchor, details } = deps
  const { textRendering, mermaidBlock, messages } = deps
  const { parts, items } = deps.punctuation
  const { diagram } = deps.diagrams
  const { identifier } = deps.references
  const { any, next } = deps.counts
  const { concat, optional, when } = deps.texts

  function toMarkdown(d: Document, ctx: MarkdownContext): string {
    const href = (ref: string): string | undefined => {
      const loc = ctx.locate.get(ref)
      if (!loc) return undefined
      if (loc.doc === d.id) return relativeReference(undefined, loc.anchor)
      return loc.file ? relativeReference(loc.file, loc.anchor) : undefined
    }

    const inline = (i: Inline): string => {
      if (values.isText(i)) return i
      switch (i.t) {
        case InlineType.value: return isOpen(i) ? strong(valueText(i)) : valueText(i)
        case InlineType.ref: {
          const h = href(i.ref)
          return h ? link(i.title, h) : i.title
        }
        case InlineType.doc: {
          const file = ctx.files.get(i.id)
          return file ? link(i.title, relativeReference(file)) : i.title
        }
        case InlineType.status: return strong(statusText(i.status))
        case InlineType.severity: return severityText(i.severity)
        case InlineType.date: return inlineText(i)
        case InlineType.person: return i.name
        case InlineType.ident: return codeSpan(i.text)
      }
    }
    const line = (list: Inline[]) => concat(list.map(inline))
    const cell = (list: Inline[]) => tableCell(line(list))

    const tableLines = (head: string[], rows: string[][]): string[] => table(head.map(tableCell), rows)

    /** A card: its anchor, its title, what it says, its facts, then its children. Each piece is a block. */
    const card = (c: Card, level: number): MarkdownBlock[] => {
      const facts = [
        ...c.facts.map((f) => messages.fact(f.label, line(f.value))),
        ...c.links.map((l) => messages.fact(l.active ? l.label : messages.inactiveLabel(l.label), l.targets.map((t) => inline({ t: InlineType.ref, ...t })).join(items))),
      ]
      return [
        [anchor(c.id)],
        [heading(level, c.repealedBy ? messages.repealedTitle(c.title) : c.title)],
        [[
          codeSpan(c.id),
          c.source && codeSpan(c.source),
          c.status && messages.cardStatus(strong(statusText(c.status))),
          c.published && messages.published(),
        ].filter(Boolean).join(parts)],
        c.description && [c.description],
        c.repealedBy && [messages.repealedNote(strong(messages.repealed()), inline({ t: InlineType.ref, ...c.repealedBy }))],
        ...blocks(c.body, next(level)),
        ...c.resolutions.map((r) => [blockQuote(line(resolutionInlines(r)))]),
        any(facts) && facts.map(listItem),
        ...c.children.flatMap((ch) => [[anchor(identifier(ch.ref))], ...blocks(ch.body, next(level))]),
      ]
    }

    const figure = (f: Figure, caption?: string): MarkdownBlock[] => [mermaidBlock(diagram(f)), caption && [emphasis(caption)]]

    const blocks = (list: Block[], level: number): MarkdownBlock[] => list.flatMap((b): MarkdownBlock[] => {
      switch (b.type) {
        case BlockType.para: return [[line(b.content)]]
        case BlockType.facts: return [b.items.map((f) => listItem(messages.fact(f.label, line(f.value))))]
        case BlockType.list: return [b.items.map((x) => listItem(line(x)))]
        case BlockType.table: return [tableLines(b.head, b.rows.map((r) => r.map(cell)))]
        case BlockType.code: return [codeBlock(b.lang, [b.text])]
        case BlockType.checks:
          return [
            b.title && [strong(line(b.title))],
            tableLines([messages.criterionHeader(), messages.resultHeader()], b.items.map((x) => {
              const outcome = outcomeText(x.outcome)
              if (x.outcome === Outcome.passed) return [tableCell(x.name), outcome]
              return [tableCell(x.name), x.detail ? messages.fact(strong(outcome), cell(x.detail)) : strong(outcome)]
            })),
          ]
        case BlockType.validity: {
          const [head, rest] = validityParts(b)
          return [[strong(head) + rest]]
        }
        case BlockType.details: return [details(b.summary, blocks(b.blocks, level))]
        case BlockType.section: return [b.id && [anchor(b.id)], [heading(level, b.title)], ...blocks(b.blocks, next(level))]
        case BlockType.summary: return [[blockQuote(strong(line(b.content)))]]
        case BlockType.issues:
          return [tableLines(
            [messages.severityHeader(), messages.whatHeader(), messages.whereHeader(), messages.ownerHeader(), messages.effectHeader()],
            b.items.map((x) => [
              severityText(x.severity), tableCell(x.what),
              values.isText(x.where) ? tableCell(x.where) : when(x.where, (where) => inline({ t: InlineType.ref, ...where })),
              x.owner ?? messages.unassigned(), tableCell(optional(x.effect)),
            ]),
          )]
        case BlockType.resolution: return [[blockQuote(line(resolutionInlines(b)))]]
        case BlockType.card: return card(b, level)
        case BlockType.figure: return figure(b.figure, b.caption)
        default: {
          const never: never = b
          throw new Error(messages.unknownBlock(JSON.stringify(never)))
        }
      }
    })

    return deps.blocks([
      [heading(textRendering.titleLevel, d.title)],
      d.intro && [emphasis(line(d.intro))],
      ...blocks(d.blocks, textRendering.sectionLevel),
    ])
  }

  return { toMarkdown }
}

export type Api = ReturnType<typeof body>
export default body
