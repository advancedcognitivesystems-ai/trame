// What all the renderers share: a value in words, the sentence of an overlap, where the card of a node lives.
// Pure: no dependency on Node. The page uses it too.

import { OPEN_KEY, Openness, Outcome, ResolutionOutcome, RuleState, Severity, Status, Validity, ViewGroup, formatUnit, keyOf } from "../../../trame/kernel"
import type { Block, Document, Inline, Json, KeyOf, NodeRef, ProvidedBy, ResolutionBlock, Unit } from "../../../trame/kernel"
import type { Dates, RenderingMessages } from "../../messages"

type ValueInline = Extract<Inline, { t: "value" }>
type ValidityBlock = Extract<Block, { type: "validity" }>

export interface Location {
  doc: string
  file?: string
  anchor: string
}

export interface Deps {
  dates: ProvidedBy<typeof Dates>
  messages: ProvidedBy<typeof RenderingMessages>
}

const body = (deps: Deps) => {
  const { dates, messages } = deps

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
    if (typeof v === "object" && !Array.isArray(v) && OPEN_KEY in v) return messages.undecided()
    if (type === "date" && typeof v === "string") return dates.format(v)
    if (type === "range" && Array.isArray(v)) return messages.range(jsonText(v[0], unit), jsonText(v[1], unit))
    if (type === "map" && typeof v === "object" && !Array.isArray(v)) return Object.entries(v).map(([k, x]) => `${k}, ${jsonText(x)}`).join("; ")
    if (Array.isArray(v)) return v.map((x) => jsonText(x, unit)).join(", ")
    if (typeof v === "object") return `{ ${Object.entries(v).map(([k, x]) => `${k}: ${jsonText(x, unit)}`).join(", ")} }`
    if (typeof v === "number") return formatUnit(v, unit)
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
      v !== null && typeof v === "object" && (Array.isArray(v) ? v.some(walk) : OPEN_KEY in v || Object.values(v).some(walk))
    return walk(i.value)
  }

  /** The plain text of a piece of sentence. */
  function inlineText(i: Inline): string {
    if (typeof i === "string") return i
    switch (i.t) {
      case "value": return valueText(i)
      case "ref": return i.title
      case "doc": return i.title
      case "status": return statusText(i.status)
      case "severity": return severityText(i.severity)
      case "date": return dates.format(i.date)
      case "person": return i.name
      case "ident": return i.text
    }
  }

  const inlinesText = (list: Inline[]) => list.map(inlineText).join("")

  const refI = (r: NodeRef): Inline => ({ t: "ref", ...r })

  /** "A, B and C", keeping the references. */
  function listInline(items: Inline[]): Inline[] {
    const out: Inline[] = []
    items.forEach((x, i) => {
      if (i > 0) out.push(i === items.length - 1 ? messages.listAnd() : ", ")
      out.push(x)
    })
    return out
  }

  /**
   * A sentence of the catalog whose parameters are pieces of sentence (references, values): the catalog writes the words
   * and places each part, and the parts come back as they are, where it placed them.
   */
  function sentence<A extends string[]>(message: (...slots: A) => string, ...parts: { [K in keyof A]: Inline[] }): Inline[] {
    const slots = parts.map((_, n) => `\u0000${n}\u0000`) as A
    return message(...slots)
      .split(/\u0000(\d+)\u0000/)
      .flatMap((piece, n): Inline[] => (n % 2 ? parts[Number(piece)] : piece ? [piece] : []))
  }

  /** The sentence that tells an overlap: who claimed what, who prevailed, and why. */
  function resolutionInlines(r: ResolutionBlock): Inline[] {
    const paths = listInline(r.paths.map((p): Inline => (p ? { t: "ident", text: p } : messages.wholeNode())))
    const target = [refI(r.target)]
    const claimants = listInline(r.claimants.map(refI))
    if (r.outcome === ResolutionOutcome.contested) {
      const arbiter: Inline = r.arbiter ? { t: "person", name: r.arbiter } : messages.arbiterToAppoint()
      const verdict = sentence(messages.contestedBy, [{ t: "value", value: null, open: Openness.contested }], [arbiter])
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
    const state = keyOf(Validity, b.state) ?? "noLonger"
    const from = b.from ? dates.format(b.from) : undefined
    const until = b.until ? dates.format(b.until) : undefined
    return [messages.validityName(state), messages.validityDetail(state, from, until)]
  }

  const validityText = (b: ValidityBlock) => validityParts(b).join("")

  /** Walks through all the blocks, sections and cards included. */
  function walkBlocks(blocks: Block[], fn: (b: Block) => void): void {
    for (const b of blocks) {
      fn(b)
      if (b.type === "section" || b.type === "details") walkBlocks(b.blocks, fn)
      if (b.type === "card") {
        walkBlocks(b.body, fn)
        for (const ch of b.children) walkBlocks(ch.body, fn)
      }
    }
  }

  /** Where the card of each node lives: the first document that contains it (a module document, first). */
  function locate(docs: Document[]): Map<string, Location> {
    const map = new Map<string, Location>()
    const rank = (d: Document) => (d.group === ViewGroup.module ? 0 : 1)
    const ordered = [...docs].sort((a, b) => rank(a) - rank(b))
    for (const d of ordered) {
      walkBlocks(d.blocks, (b) => {
        if (b.type !== "card") return
        if (!map.has(b.ref)) map.set(b.ref, { doc: d.id, file: d.file, anchor: b.id })
        for (const ch of b.children) {
          if (!map.has(ch.ref)) map.set(ch.ref, { doc: d.id, file: d.file, anchor: ch.ref.split(".").slice(1).join(".") })
        }
      })
    }
    return map
  }

  const idOf = (ref: string) => ref.split(".").slice(1).join(".") || ref

  return {
    valueText, isOpen, inlineText, inlinesText, listInline, resolutionInlines, validityParts, validityText,
    statusText, severityText, outcomeText, walkBlocks, locate, idOf,
  }
}

export type Api = ReturnType<typeof body>
export default body
