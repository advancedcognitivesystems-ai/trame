// Markdown: the syntax of the documents written as files (choice "Documents in Markdown").
// The syntax comes from the elements of the Markdown spec (src/markdown.ts): this body only composes them. A document is
// a list of blocks; the spec closes each one with a blank line. A figure is drawn by the figures' port, and carried in a
// code block in the language of its drawing. Depth is the level of a heading. Pure.

import { BlockType, Outcome } from "../../../trame/kernel"
import type { ProvidedBy } from "../../../trame/kernel"
import type * as md from "../../markdown"
import type { Punctuation, TextRendering } from "../../documents"
import type { RenderingMessages } from "../../messages"
import type { Counts, Texts } from "#std/algebra"
import type { MarkdownBlock } from "../../markdown"
import type { DocumentSyntax, FigureSyntax, Written } from "../../rendering"

export interface Deps {
  figures: FigureSyntax
  /** The heading levels of the document. */
  textRendering: ProvidedBy<typeof TextRendering>
  punctuation: ProvidedBy<typeof Punctuation>
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

const body = (deps: Deps): DocumentSyntax => {
  const { heading, listItem, blockQuote, codeBlock, emphasis, strong, codeSpan, link, relativeReference, tableCell, anchor, details } = deps
  const { textRendering, figures, messages } = deps
  const { parts, items } = deps.punctuation
  const { any, next } = deps.counts
  const { empty, optional } = deps.texts

  /** The blocks that are there: a block left out is false, empty or absent. */
  const present = (...list: MarkdownBlock[]): Written[] => list.filter((b): b is Written => Boolean(b))
  /** A table: every cell escaped, the head as the rows. */
  const table = (head: string[], rows: string[][]): Written => deps.table(head.map(tableCell), rows)
  const same = (words: string) => words

  return {
    text: same,
    value: (words, open) => (open ? strong(words) : words),
    ref: (title, _ref, target) => (target ? link(title, relativeReference(target.file, target.anchor)) : title),
    doc: (title, _id, file) => (file ? link(title, relativeReference(file)) : title),
    file: (title, path) => link(title, relativeReference(path)),
    status: (words) => strong(words),
    severity: same,
    date: same,
    person: same,
    ident: (text) => codeSpan(text),

    start: textRendering.sectionLevel,
    within: (block, depth) => (block === BlockType.details ? depth : next(depth)),

    paragraph: (line) => [[line]],
    facts: (rows) => [rows.map((f) => listItem(messages.fact(f.label, f.value)))],
    list: (lines) => [lines.map(listItem)],
    table: (head, rows) => [table(head, rows.map((r) => r.map(tableCell)))],
    code: (lang, text) => [codeBlock(lang, [text])],
    checks: (title, checks) => present(
      title !== undefined && [strong(title)],
      table([messages.criterionHeader(), messages.resultHeader()], checks.map((x) => {
        if (x.outcome === Outcome.passed) return [tableCell(x.name), x.words]
        return [tableCell(x.name), x.detail !== undefined ? messages.fact(strong(x.words), tableCell(x.detail)) : strong(x.words)]
      })),
    ),
    validity: (head, rest) => [[strong(head) + rest]],
    details: (summary, content) => [details(summary, content)],
    section: (title, id, content, depth) => present(id && [anchor(id)], [heading(depth, title)], ...content),
    summary: (line) => [[blockQuote(strong(line))]],
    issues: (issues) => [table(
      [messages.severityHeader(), messages.whatHeader(), messages.whereHeader(), messages.ownerHeader(), messages.effectHeader()],
      issues.map((x) => [
        x.words, tableCell(x.what),
        x.whereText !== undefined ? tableCell(x.whereText) : x.whereRef ?? empty,
        x.owner ?? messages.unassigned(), tableCell(optional(x.effect)),
      ]),
    )],
    resolution: (line) => [[blockQuote(line)]],

    /** A card: its anchor, its title, what it says, its facts, then its children. Each piece is a block. */
    card: (w, depth) => {
      const c = w.card
      const facts = [
        ...w.facts.map((f) => messages.fact(f.label, f.value)),
        ...w.links.map((l) => messages.fact(l.active ? l.label : messages.inactiveLabel(l.label), l.targets.join(items))),
      ]
      return present(
        [anchor(c.id)],
        [heading(depth, c.repealedBy ? messages.repealedTitle(c.title) : c.title)],
        [[
          codeSpan(c.id),
          c.source && codeSpan(c.source),
          w.status && messages.cardStatus(strong(w.status)),
          c.published && messages.published(),
        ].filter(Boolean).join(parts)],
        c.description && [c.description],
        w.repealedBy !== undefined && [messages.repealedNote(strong(messages.repealed()), w.repealedBy)],
        ...w.body,
        ...w.resolutions.map((r) => [blockQuote(r)]),
        any(facts) && facts.map(listItem),
        ...w.children.flatMap((ch) => [[anchor(ch.anchor)], ...ch.body]),
      )
    },

    figure: (f, caption, _depth, index) => {
      const drawn = figures.figure(f, index)
      return present(codeBlock(optional(drawn.language), drawn.lines), caption && [emphasis(caption)])
    },

    document: (title, intro, content) => deps.blocks([
      [heading(textRendering.titleLevel, title)],
      intro !== undefined && [emphasis(intro)],
      ...content,
    ]),
    join: (content) => deps.blocks(content),
  }
}

export default body
