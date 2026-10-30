// What all the renderers share: a value in words, the sentence of an overlap, where the card of a node lives.
// Pure: no dependency on Node. The page uses it too.

import { BlockType, InlineType, OPEN_KEY, Openness, Outcome, ResolutionOutcome, RuleState, Severity, Status, Validity, ValueType, ViewGroup, keyFor, keyOf } from "../../../trame/kernel"
import type { Block, Document, Inline, Json, KeyOf, NodeRef, ProvidedBy, ResolutionBlock, Unit } from "../../../trame/kernel"
import type { Dates, Lists, RenderingMessages } from "../../messages"
import type { Texts, ValueTypes } from "../../../std/src/algebra"
import type { ReferenceSyntax } from "../../conventions"
import type { SentenceSlots } from "../../rendering"
import type { Units } from "../../documents"

type ValueInline = Extract<Inline, { t: typeof InlineType.value }>
type ValidityBlock = Extract<Block, { type: "validity" }>

export interface Location {
  doc: string
  file?: string
  anchor: string
}

export interface Deps {
  values: ProvidedBy<typeof ValueTypes>
  syntax: ProvidedBy<typeof ReferenceSyntax>
  slots: ProvidedBy<typeof SentenceSlots>
  dates: ProvidedBy<typeof Dates>
  lists: ProvidedBy<typeof Lists>
  texts: ProvidedBy<typeof Texts>
  messages: ProvidedBy<typeof RenderingMessages>
  units: ProvidedBy<typeof Units>
}

const body = (deps: Deps) => {
  const { values } = deps
  const { dates, messages } = deps
  const { conjunction } = deps.lists
  const { concat } = deps.texts

  /** The words for a vocabulary value, from the catalog; a value the vocabulary does not know is shown as it is. */
  const named = <V extends Record<string, string>>(vocabulary: V, name: (key: KeyOf<V>) => string) => (value: string): string => {
    const key = keyOf(vocabulary, value)
    return key ? name(key) : value
  }
  /** A status in words: "held", "violated"… */
  const statusText = named(Status, messages.statusName)
  /** A severity in words: "blocking", "error", "warning". */
  const severityText = named(Severity, messages.severityName)
  /** The outcome of a check in words: "passed", "failed"… */
  const outcomeText = named(Outcome, messages.outcomeName)

  function jsonText(v: Json, unit?: Unit, type?: ValueInline["type"]): string {
    if (v === null) return messages.none()
    if (values.isObject(v) && !Array.isArray(v) && OPEN_KEY in v) return messages.undecided()
    if (type === ValueType.date && values.isText(v)) return dates.format(v)
    if (type === ValueType.range && Array.isArray(v)) {
      const [from, to] = v
      return messages.range(jsonText(from, unit), jsonText(to, unit))
    }
    if (type === ValueType.map && values.isObject(v) && !Array.isArray(v)) return messages.valueMap(Object.entries(v).map(([k, x]) => [k, jsonText(x)]))
    if (Array.isArray(v)) return messages.valueList(v.map((x) => jsonText(x, unit)))
    if (values.isObject(v)) return messages.valueRecord(Object.entries(v).map(([k, x]) => [k, jsonText(x, unit)]))
    if (values.isNumber(v)) return deps.units.format(v, unit)
    return String(v)
  }

  /** A value in words: "15 min", "to be decided", "contested, to be settled", "redefined rule". */
  function valueText(i: ValueInline): string {
    if (i.open) return i.open === Openness.contested ? messages.contested() : messages.undecided()
    if (i.rule) return i.rule === RuleState.redefined ? messages.redefinedRule() : messages.originalRule()
    return jsonText(i.value, i.unit, i.type)
  }

  /** A value that remains open (undecided or contested), even deep inside a composite value. */
  function isOpen(i: ValueInline): boolean {
    if (i.open) return true
    const walk = (v: Json): boolean =>
      v !== null && values.isObject(v) && (Array.isArray(v) ? v.some(walk) : OPEN_KEY in v || Object.values(v).some(walk))
    return walk(i.value)
  }

  /** The plain text of a piece of sentence. */
  function inlineText(i: Inline): string {
    if (values.isText(i)) return i
    switch (i.t) {
      case InlineType.value: return valueText(i)
      case InlineType.ref: return i.title
      case InlineType.doc: return i.title
      case InlineType.status: return statusText(i.status)
      case InlineType.severity: return severityText(i.severity)
      case InlineType.date: return dates.format(i.date)
      case InlineType.person: return i.name
      case InlineType.ident: return i.text
      case InlineType.file: return i.title
    }
  }

  const inlinesText = (list: Inline[]) => concat(list.map(inlineText))

  const refI = (r: NodeRef): Inline => ({ t: InlineType.ref, ...r })

  /** "A, B and C", keeping the references: the words come from the language. */
  const listInline = (items: Inline[]): Inline[] => conjunction(items)

  /**
   * A sentence of the catalog whose parameters are pieces of sentence (references, values): the catalog writes the words
   * and places a mark for each part (decision "Places in a sentence"), and the parts come back as they are, where it
   * placed them.
   */
  function sentence<A extends string[]>(message: (...slots: A) => string, ...parts: { [K in keyof A]: Inline[] }): Inline[] {
    const { delimiter } = deps.slots
    const marks = parts.map((_, n) => delimiter + String(n) + delimiter) as A
    return marks.reduce<Inline[]>((pieces, mark, n) => pieces.flatMap((piece): Inline[] =>
      values.isText(piece) ? piece.split(mark).flatMap((text, i) => [...(i ? parts[n] : []), ...(text ? [text] : [])]) : [piece]),
    [message(...marks)])
  }

  /** The sentence that tells an overlap: who claimed what, who prevailed, and why. */
  function resolutionInlines(r: ResolutionBlock): Inline[] {
    const paths = listInline(r.paths.map((p): Inline => (p ? { t: InlineType.ident, text: p } : messages.wholeNode())))
    const target = [refI(r.target)]
    const claimants = listInline(r.claimants.map(refI))
    if (r.outcome === ResolutionOutcome.contested) {
      const arbiter: Inline = r.arbiter ? { t: InlineType.person, name: r.arbiter } : messages.arbiterToAppoint()
      const verdict = sentence(messages.contestedBy, [{ t: InlineType.value, value: null, open: Openness.contested }], [arbiter])
      return sentence(messages.resolution, paths, target, claimants, verdict, [r.reason])
    }
    const winners = listInline(r.applied.map(refI))
    const verdict = r.applied.length === r.claimants.length
      ? sentence(messages.allApply, winners)
      : sentence((w: string) => messages.prevails(w, r.applied.length), winners)
    const reason = r.reason || messages.noReason()
    const because = r.because.length ? sentence(messages.seeAlso, [reason], listInline(r.because.map(refI))) : [reason]
    return sentence(messages.resolution, paths, target, claimants, verdict, because)
  }

  /** "In force" and what follows (" since 15 October 2026, until …"). */
  function validityParts(b: ValidityBlock): [string, string] {
    const state = keyFor(Validity, b.state)
    const from = b.from ? dates.format(b.from) : undefined
    const until = b.until ? dates.format(b.until) : undefined
    return [messages.validityName(state), messages.validityDetail(state, from, until)]
  }

  const validityText = (b: ValidityBlock) => concat(validityParts(b))

  /** The identifier of a reference, without its module ("engine.Compiler" gives "Compiler"). */
  const identifier = (ref: string) => {
    const [, ...rest] = ref.split(deps.syntax.separator)
    return rest.join(deps.syntax.separator)
  }

  /** Walks through all the blocks, sections and cards included. */
  function walkBlocks(blocks: Block[], fn: (b: Block) => void): void {
    for (const b of blocks) {
      fn(b)
      if (b.type === BlockType.section || b.type === BlockType.details) walkBlocks(b.blocks, fn)
      if (b.type === BlockType.card) {
        walkBlocks(b.body, fn)
        for (const ch of b.children) walkBlocks(ch.body, fn)
      }
    }
  }

  /** Where the card of each node lives: the first document that contains it (a module document, first). */
  function locate(docs: Document[]): Map<string, Location> {
    const map = new Map<string, Location>()
    const isModule = (d: Document) => d.group === ViewGroup.module
    const ordered = [...docs.filter(isModule), ...docs.filter((d) => !isModule(d))]
    for (const d of ordered) {
      walkBlocks(d.blocks, (b) => {
        if (b.type !== BlockType.card) return
        if (!map.has(b.ref)) map.set(b.ref, { doc: d.id, file: d.file, anchor: b.id })
        for (const ch of b.children) {
          if (!map.has(ch.ref)) map.set(ch.ref, { doc: d.id, file: d.file, anchor: identifier(ch.ref) })
        }
      })
    }
    return map
  }

  const idOf = (ref: string) => identifier(ref) || ref

  return {
    valueText, isOpen, inlineText, inlinesText, listInline, resolutionInlines, validityParts, validityText,
    statusText, severityText, outcomeText, walkBlocks, locate, idOf,
  }
}

export type Api = ReturnType<typeof body>
export default body
