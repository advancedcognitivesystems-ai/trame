// HTML: the syntax of the page (choice "The page in HTML").
// The elements are HTML's (src/html.ts), the names the page's style sheet and script know are the decision "Documents in
// the page" (src/markup.ts): this body only composes them. Text is escaped; a sentence of the catalog that holds pieces
// is escaped around them (decision "Places in a sentence"). A figure is the place the figures' port gives, in a figure
// element with its caption. Depth is the rank of a section's heading. Pure.

import { BlockType, Nature, Outcome, Severity, Status, Validity, keyOf } from "../../../trame/kernel"
import type { ProvidedBy } from "../../../trame/kernel"
import type { Html, HtmlElement, HtmlHeading, EscapedText } from "../../html"
import type { DocumentMarkup } from "../../markup"
import type { ThePage } from "../../page"
import type { Punctuation } from "../../documents"
import type { DocumentSyntax, FigureSyntax, SentenceSlots, Written } from "../../rendering"
import type { RenderingMessages } from "../../messages"
import type { Counts, Texts } from "../../algebra"

type Attributes = Readonly<Record<string, string | true>>

export interface Deps {
  figures: FigureSyntax
  html: ProvidedBy<typeof Html>
  markup: ProvidedBy<typeof DocumentMarkup>
  page: ProvidedBy<typeof ThePage>
  element: ProvidedBy<typeof HtmlElement>
  heading: ProvidedBy<typeof HtmlHeading>
  escape: ProvidedBy<typeof EscapedText>
  punctuation: ProvidedBy<typeof Punctuation>
  slots: ProvidedBy<typeof SentenceSlots>
  counts: ProvidedBy<typeof Counts>
  texts: ProvidedBy<typeof Texts>
  messages: ProvidedBy<typeof RenderingMessages>
}

const body = (deps: Deps): DocumentSyntax => {
  const { html, element, heading, escape, figures, messages } = deps
  const { classes, prefixes, attributes, headings } = deps.markup
  const { statusClass } = deps.page
  const { parts, items } = deps.punctuation
  const { delimiter } = deps.slots
  const { any, next } = deps.counts
  const { empty, concat, optional, when } = deps.texts

  /** No attribute. */
  const none: Attributes = {}
  /** An element of one class. */
  const classed = (name: string, cls: string, content: string) => element(name, { [html.class]: cls }, content)
  /** The classes that apply, in one attribute. */
  const classList = (...names: (string | false | undefined)[]) => names.filter(Boolean).join(html.space)
  /** The class part of a vocabulary value: its key, which does not change when the words do. */
  const key = <V extends Record<string, string>>(vocabulary: V, value: string) => optional(keyOf(vocabulary, value))
  const pill = (cls: string, words: string) => classed(html.span, classList(classes.pill, cls), escape(words))
  const one = (written: string): Written[] => [[written]]
  const joined = (content: Written[]) => concat(content.flat())

  /** A sentence of the catalog whose parameters are written pieces: its words escaped, the pieces put where it placed them. */
  const placed = (message: (...marks: string[]) => string, ...pieces: string[]): string => {
    const marks = pieces.map((_, n) => delimiter + String(n) + delimiter)
    return pieces.reduce((written, piece, n) => written.split(marks[n]).join(piece), escape(message(...marks)))
  }

  /** A table: its head escaped, its rows written. */
  const table = (head: string[], rows: string[][]) => classed(html.div, classes.tableWrap, element(html.table, none,
    element(html.thead, none, element(html.tr, none, concat(head.map((h) => element(html.th, none, escape(h)))))) +
    element(html.tbody, none, concat(rows.map((r) => element(html.tr, none, concat(r.map((c) => element(html.td, none, c)))))))))

  const severity = (words: string, value: Severity) => classed(html.span, classList(classes.severity, prefixes.severity + key(Severity, value)), escape(words))
  const nature = (n: Nature) =>
    n === Nature.declared ? empty : classed(html.span, classes.nature, escape(n === Nature.inferred ? messages.inferredNature() : messages.computedNature()))

  return {
    text: escape,
    value: (words, open, rule) =>
      open ? classed(html.mark, classes.open, escape(words)) : rule ? classed(html.span, classes.rule, escape(words)) : escape(words),
    ref: (title, ref) => element(html.a, { [html.class]: classes.reference, [attributes.reference]: escape(ref), [html.tabindex]: html.focusable }, escape(title)),
    doc: (title, id) => element(html.a, { [attributes.doc]: escape(id), [html.tabindex]: html.focusable }, escape(title)),
    status: (words, status) => pill(statusClass + key(Status, status), words),
    severity,
    date: (words, iso) => element(html.time, { [html.datetime]: escape(iso) }, escape(words)),
    person: (name) => classed(html.span, classes.person, escape(name)),
    ident: (text) => element(html.code, none, escape(text)),

    start: headings.section,
    within: (block, depth) => (block === BlockType.section ? next(depth) : block === BlockType.card ? headings.nested : depth),

    paragraph: (line) => one(element(html.p, none, line)),
    facts: (rows) => one(classed(html.dl, classes.facts, concat(rows.map((f) => element(html.dt, none, escape(f.label)) + element(html.dd, none, f.value))))),
    list: (lines) => one(element(html.ul, none, concat(lines.map((x) => element(html.li, none, x))))),
    table: (head, rows) => one(table(head, rows)),
    code: (_lang, text, source) =>
      one(classed(html.pre, classes.code, element(html.code, none, escape(text))) + when(source, (from) => classed(html.p, classes.codeSource, escape(from)))),
    checks: (title, checks) => one(
      (title !== undefined ? classed(html.p, classes.checksTitle, title) : empty) +
      table([messages.criterionHeader(), messages.resultHeader()], checks.map((x) => [
        escape(x.name), pill(prefixes.outcome + key(Outcome, x.outcome), x.words) + (x.detail !== undefined ? html.space + x.detail : empty),
      ])),
    ),
    validity: (head, rest, state) => one(classed(html.p, classes.validity, pill(prefixes.validity + key(Validity, state), head) + escape(rest))),
    details: (summary, content) => one(element(html.details, none, element(html.summary, none, escape(summary)) + joined(content))),
    section: (title, id, content, depth) => one(element(html.section, id ? { [html.id]: escape(id) } : none,
      heading(depth > headings.section ? headings.nested : headings.section, none, escape(title)) + joined(content))),
    summary: (line) => one(classed(html.div, classes.summary, line)),
    issues: (issues) => one(table(
      [messages.severityHeader(), messages.whatHeader(), messages.whereHeader(), messages.ownerHeader(), messages.effectHeader()],
      issues.map((x) => [
        severity(x.words, x.severity), escape(x.what),
        x.whereText !== undefined ? element(html.code, none, escape(x.whereText)) : x.whereRef ?? empty,
        x.owner ? classed(html.span, classes.person, escape(x.owner)) : escape(messages.unassigned()), escape(optional(x.effect)),
      ]),
    )),
    resolution: (line) => one(classed(html.div, classes.resolution, line)),

    /** A card: an article named by the node's identifier, its title, its head, what it says, its views, its facts, its children. */
    card: (w) => {
      const c = w.card
      const meta = concat([
        element(html.span, none, escape(c.kindLabel) + (c.active ? empty : escape(parts + messages.notInForce()))),
        element(html.code, none, escape(c.id)),
        when(c.source, (source) => element(html.code, none, escape(source))),
        c.status && w.status ? pill(statusClass + key(Status, c.status), w.status) : empty,
        c.published ? pill(classes.published, messages.published()) : empty,
      ])
      const views = any(c.views)
        ? classed(html.div, classes.views, concat(c.views.map((v) => element(html.button,
          { [html.type]: html.buttonType, [html.class]: classes.viewButton, [attributes.view]: escape(v.name), [attributes.node]: escape(c.ref) },
          escape(v.label)))))
        : empty
      const facts = [
        ...w.facts.map((f) => element(html.dt, none, escape(f.label)) + element(html.dd, none, f.value)),
        ...w.links.map((l) => {
          const state = { [html.class]: l.active ? empty : classes.inactive }
          return element(html.dt, state, escape(l.label)) +
            element(html.dd, state, l.targets.join(items) + nature(l.nature) + (l.active ? empty : classed(html.span, classes.nature, escape(messages.notInForce()))))
        }),
      ]
      return one(element(html.article, { [html.class]: classList(classes.card, c.history && classes.history, c.repealedBy && classes.repealed), [html.id]: escape(c.id) }, concat([
        heading(headings.card, none, escape(c.repealedBy ? messages.repealedTitle(c.title) : c.title)),
        classed(html.div, classes.meta, meta),
        c.description ? element(html.p, none, escape(c.description)) : empty,
        w.repealedBy !== undefined
          ? element(html.p, none, placed(messages.repealedNote, pill(statusClass + key(Status, Status.violated), messages.repealed()), w.repealedBy))
          : empty,
        views,
        joined(w.body),
        concat(w.resolutions.map((r) => classed(html.div, classes.resolution, r))),
        any(facts) ? classed(html.dl, classes.facts, concat(facts)) : empty,
        concat(w.children.map((ch) => element(html.div, { [html.class]: classes.child, [html.id]: escape(ch.anchor) }, joined(ch.body)))),
      ])))
    },

    figure: (f, caption, _depth, index) => one(classed(html.figure, classes.figure,
      concat(figures.figure(f, index).lines) + (caption ? element(html.figcaption, none, escape(caption)) : empty))),

    document: (title, intro, content) => concat([
      heading(headings.title, none, escape(title)),
      intro !== undefined ? classed(html.p, classes.intro, intro) : empty,
      joined(content),
    ]),
    join: joined,
  }
}

export default body
