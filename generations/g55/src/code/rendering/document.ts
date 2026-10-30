// The renderer: one walk of the blocks of a document, whatever its format. It says each piece in words (a value, a
// status, the sentence of an overlap, the validity of a node) and finds where each reference leads; the syntax it is
// given (a port, chosen per audience) writes the pieces, and says how deep nested content goes. Pure.

import { BlockType, InlineType } from "../../../trame/kernel"
import type { Block, Card, Document, Inline, NodeRef, ProvidedBy } from "../../../trame/kernel"
import type { DocumentSyntax, Target, Written } from "../../rendering"
import type { RenderingMessages } from "../../messages"
import type { Counts, Texts, ValueTypes } from "../../../std/src/algebra"
import type { Api as CommonApi, Location } from "./common"

/** What a syntax that links needs: where the card of each node lives, and the file of each document. */
export interface RenderingContext {
  locate: Map<string, Location>
  files: Map<string, string | undefined>
}

export interface Deps {
  common: CommonApi
  syntax: DocumentSyntax
  values: ProvidedBy<typeof ValueTypes>
  texts: ProvidedBy<typeof Texts>
  counts: ProvidedBy<typeof Counts>
  messages: ProvidedBy<typeof RenderingMessages>
}

const body = (deps: Deps) => {
  const { syntax: s, values, messages } = deps
  const { inlineText, isOpen, resolutionInlines, validityParts, valueText, statusText, severityText, outcomeText, idOf } = deps.common
  const { concat } = deps.texts
  const { zero, next } = deps.counts

  /** The blocks of a document, written at a depth; references lead to the cards the context locates. */
  function writer(d: Document | undefined, ctx: RenderingContext | undefined) {
    // The figures, counted in the order the document holds them.
    let figures: number = zero
    const target = (ref: string): Target | undefined => {
      const loc = ctx?.locate.get(ref)
      if (!loc) return undefined
      if (loc.doc === d?.id) return { anchor: loc.anchor }
      return loc.file ? { file: loc.file, anchor: loc.anchor } : undefined
    }

    const inline = (i: Inline): string => {
      if (values.isText(i)) return s.text(i)
      switch (i.t) {
        case InlineType.value: return s.value(valueText(i), isOpen(i), i.rule)
        case InlineType.ref: return s.ref(i.title, i.ref, target(i.ref))
        case InlineType.doc: return s.doc(i.title, i.id, ctx?.files.get(i.id))
        case InlineType.status: return s.status(statusText(i.status), i.status)
        case InlineType.severity: return s.severity(severityText(i.severity), i.severity)
        case InlineType.date: return s.date(inlineText(i), i.date)
        case InlineType.person: return s.person(i.name)
        case InlineType.ident: return s.ident(i.text)
        case InlineType.file: return s.file(i.title, i.path)
      }
    }
    const line = (list: Inline[]) => concat(list.map(inline))
    const reference = (r: NodeRef) => inline({ t: InlineType.ref, ...r })

    const card = (c: Card, depth: number): Written[] => {
      const inner = s.within(BlockType.card, depth)
      return s.card({
        card: c,
        status: c.status && statusText(c.status),
        repealedBy: c.repealedBy && reference(c.repealedBy),
        body: blocks(c.body, inner),
        resolutions: c.resolutions.map((r) => line(resolutionInlines(r))),
        facts: c.facts.map((f) => ({ label: f.label, value: line(f.value) })),
        links: c.links.map((l) => ({ label: l.label, active: l.active, nature: l.nature, targets: l.targets.map(reference) })),
        children: c.children.map((ch) => ({ anchor: idOf(ch.ref), body: blocks(ch.body, inner) })),
      }, depth)
    }

    const blocks = (list: Block[], depth: number): Written[] => list.flatMap((b): Written[] => {
      switch (b.type) {
        case BlockType.para: return s.paragraph(line(b.content), depth)
        case BlockType.facts: return s.facts(b.items.map((f) => ({ label: f.label, value: line(f.value) })), depth)
        case BlockType.list: return s.list(b.items.map(line), depth)
        case BlockType.table: return s.table(b.head, b.rows.map((r) => r.map(line)), depth)
        case BlockType.code: return s.code(b.lang, b.text, b.source, depth)
        case BlockType.checks:
          return s.checks(b.title && line(b.title), b.items.map((x) => ({
            name: x.name, outcome: x.outcome, words: outcomeText(x.outcome), detail: x.detail && line(x.detail),
          })), depth)
        case BlockType.validity: {
          const [head, rest] = validityParts(b)
          return s.validity(head, rest, b.state, depth)
        }
        case BlockType.details: return s.details(b.summary, blocks(b.blocks, s.within(BlockType.details, depth)), depth)
        case BlockType.section: return s.section(b.title, b.id, blocks(b.blocks, s.within(BlockType.section, depth)), depth)
        case BlockType.summary: return s.summary(line(b.content), depth)
        case BlockType.issues:
          return s.issues(b.items.map((x) => ({
            severity: x.severity, words: severityText(x.severity), source: x.source, what: x.what,
            whereText: values.isText(x.where) ? x.where : undefined,
            whereRef: x.where && !values.isText(x.where) ? reference(x.where) : undefined,
            owner: x.owner, effect: x.effect,
          })), depth)
        case BlockType.resolution: return s.resolution(line(resolutionInlines(b)), depth)
        case BlockType.card: return card(b, depth)
        case BlockType.figure: {
          const index = figures
          figures = next(figures)
          return s.figure(b.figure, b.caption, depth, index)
        }
        default: {
          const never: never = b
          throw new Error(messages.unknownBlock(JSON.stringify(never)))
        }
      }
    })

    return { line, blocks }
  }

  /** A document, whole: its title, its introduction, its blocks. */
  function render(d: Document, ctx?: RenderingContext): string {
    const { line, blocks } = writer(d, ctx)
    return s.document(d.title, d.intro && line(d.intro), blocks(d.blocks, s.start))
  }

  /** The blocks of a document, as a part of another one (the changes a page announces): one level down. */
  function part(d: Document, ctx?: RenderingContext): string {
    const { blocks } = writer(undefined, ctx)
    return s.join(blocks(d.blocks, s.within(BlockType.section, s.start)))
  }

  return { render, part }
}

export type Api = ReturnType<typeof body>
export default body
