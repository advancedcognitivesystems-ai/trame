// Terminal text: the syntax of what a command prints (choice "The terminal in plain text").
// The format is the decision "Terminal text"; its constructs come from the syntax elements of the module text: this
// body only composes them. Depth is indentation: one step per level. A figure is drawn by the figures' port, its lines
// indented. Pure.

import type { ProvidedBy } from "../../../trame/kernel"
import type { RenderingMessages } from "../../messages"
import type { Punctuation } from "../../documents"
import type { DocumentSyntax, FigureSyntax, Written } from "../../rendering"
import type * as text from "../../text"
import type { Counts, Texts } from "../../../std/src/algebra"

export interface Deps {
  figures: FigureSyntax
  layout: ProvidedBy<typeof text.TerminalText>
  columns: ProvidedBy<typeof text.TerminalColumns>
  punctuation: ProvidedBy<typeof Punctuation>
  cell: ProvidedBy<typeof text.PaddedCell>
  table: ProvidedBy<typeof text.Columns>
  item: ProvidedBy<typeof text.ItemLine>
  code: ProvidedBy<typeof text.CodeLines>
  lines: ProvidedBy<typeof text.TerminalLines>
  counts: ProvidedBy<typeof Counts>
  texts: ProvidedBy<typeof Texts>
  messages: ProvidedBy<typeof RenderingMessages>
}

const body = (deps: Deps): DocumentSyntax => {
  const { cell, table, item, code, lines, figures, messages } = deps
  const { widths } = deps.columns
  const { parts, items, opensAside, closesAside } = deps.punctuation
  const { zero, next, any } = deps.counts
  const { empty, concat, when } = deps.texts
  /** A line with nothing on it: it separates what comes before from what follows. */
  const blankLine = empty
  /** The margin of a depth: one indentation step per level. */
  const indent = (depth: number) => deps.layout.indent.repeat(depth)

  /** What qualifies a text, after it, in parentheses. */
  const aside = (what: string) => concat([opensAside, what, closesAside])
  const same = (words: string) => words
  /** One line, at its margin. */
  const at = (depth: number, line: string): Written[] => [[indent(depth) + line]]

  return {
    text: same,
    value: same,
    ref: same,
    doc: same,
    file: (title, path) => title + aside(path),
    status: same,
    severity: same,
    date: same,
    person: same,
    ident: same,

    start: zero,
    within: (_block, depth) => next(depth),

    paragraph: (line, depth) => at(depth, line),
    facts: (rows, depth) => [table(undefined, rows.map((f) => [f.label, f.value]), indent(depth))],
    list: (list, depth) => [list.map((x) => item(indent(depth), x))],
    table: (head, rows, depth) => [table(head, rows, indent(depth))],
    code: (_lang, source, _from, depth) => [code(indent(depth), source)],
    checks: (title, checks, depth) => [
      ...(title !== undefined ? at(depth, title) : []),
      table(undefined, checks.map((x) => [x.words, x.name + (x.detail !== undefined ? aside(x.detail) : empty)]), indent(next(depth))),
    ],
    validity: (head, rest, _state, depth) => at(depth, head + rest),
    details: (summary, content, depth) => [...at(depth, summary), ...content],
    section: (title, _id, content, depth) => [[blankLine, indent(depth) + title.toLowerCase()], ...content],
    summary: (line, depth) => at(depth, line),
    issues: (issues, depth) => [issues.map((x) => concat([
      indent(depth),
      cell(x.words, widths.severity),
      when(x.source, (source) => cell(source, widths.source)),
      x.what,
      when(x.owner, (owner) => parts + owner),
      when(x.effect, (effect) => parts + effect),
    ]))],
    resolution: (line, depth) => at(depth, line),

    card: (w, depth) => {
      const c = w.card
      const inner = indent(next(depth))
      const rows = [
        ...w.facts.map((f) => [f.label, f.value]),
        ...w.links.map((l) => [l.active ? l.label : messages.inactiveLabel(l.label), l.targets.join(items)]),
      ]
      return [
        [indent(depth) + (c.repealedBy ? messages.repealedTitle(c.title) : c.title)],
        [inner + [
          c.kindLabel.toLowerCase(),
          c.id,
          c.source,
          w.status && messages.cardStatusPlain(w.status),
          c.published && messages.published(),
        ].filter(Boolean).join(parts)],
        ...(w.repealedBy !== undefined ? [[inner + messages.repealedBy(w.repealedBy)]] : []),
        ...w.body,
        ...w.resolutions.map((r) => [inner + r]),
        ...(any(rows) ? [table(undefined, rows, inner)] : []),
        ...w.children.flatMap((ch) => ch.body),
        [blankLine],
      ]
    },

    figure: (f, _caption, depth, index) => [figures.figure(f, index).lines.map((line) => indent(depth) + line)],

    document: (title, intro, content) => lines([title, ...(intro !== undefined ? [intro] : []), ...content.flat()]),
    join: (content) => lines(content.flat()),
  }
}

export default body
