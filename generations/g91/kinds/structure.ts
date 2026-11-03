import {
  defineKind, field, edge, optionalEdge, optional, hole, doc, isFileBody, keysOf, Status, KindName, EdgeName,
  type AnyNode, type Node, type Provides, type HasDeps, type Provided, type FileBody, type Constant, type Values, type Inline, type Declares, type Lib,
} from "../trame/kernel"
import words from "./words"

const say = words()

/** What a law receives to draw its values. The draws are reproducible: the same structure draws the same values. */
export interface Draw {
  /** An integer, negative, zero or positive. */
  integer(): number
  /** A natural number: zero or more. */
  natural(): number
  /** A short text, possibly empty, from a small alphabet (so that values repeat and meet). */
  text(): string
  /** A list of drawn values, possibly empty. */
  list<T>(item: () => T): T[]
  boolean(): boolean
}

/** A law of a structure: what holds, in words, and its check on drawn values. */
export interface Law<O> {
  says: string
  holds: (operations: O, draw: Draw) => boolean
}

interface Result {
  says: string
  /** The number of draws played. */
  draws: number
  /** The values drawn when the law broke. */
  drawn?: string
  error?: string
}

const lawsOf = (raw: unknown, { values }: Lib): Law<unknown>[] =>
  Array.isArray(raw)
    ? raw.filter((l): l is Law<unknown> => values.isObject(l) && values.isText((l as Law<unknown>).says) && values.isFunction((l as Law<unknown>).holds))
    : []

const show = (v: unknown) => JSON.stringify(v) ?? String(v)

/** The draws of a law, from the generator of its seed, as the graph decides them (StructureDraws). */
function makeDraw(rnd: () => number, log: unknown[], lib: Lib): Draw {
  const { counts, texts, draws } = lib
  const { integers, naturals, alphabet, textLength, listLength, chance } = draws.structures
  const int = ([lo, hi]: readonly [number, number]) => draws.integer(rnd, lo, hi)
  let depth = counts.zero
  // Only what the law draws itself is recorded: the items of a list are in the list.
  const record = <T>(v: T): T => {
    if (depth === counts.zero) log.push(v)
    return v
  }
  return {
    integer: () => record(int(integers)),
    natural: () => record(int(naturals)),
    text: () => {
      depth = counts.next(depth)
      const t = texts.concat(Array.from({ length: int(textLength) }, () => alphabet[int([counts.zero, counts.previous(alphabet.length)])]))
      depth = counts.previous(depth)
      return record(t)
    },
    list: (item) => {
      depth = counts.next(depth)
      const xs = Array.from({ length: int(listLength) }, item)
      depth = counts.previous(depth)
      return record(xs)
    },
    boolean: () => record(rnd() < chance),
  }
}

const fields = {
  owner: field.owner(),
  constants: optional(field.constants(say.structureConstants())),
  deps: optional(field.deps()),
  operations: field.body(),
  laws: field.value<readonly Law<never>[]>(say.structureLaws()),
}
const F = keysOf(fields)

/** Did a law hold on every draw? */
const held = (r: Result) => r.drawn === undefined && r.error === undefined

/**
 * An algebraic structure: operations that several bodies share (taking the first element of a list, counting under a
 * key, joining texts), the constants that define them (the count of nothing is 0), and the laws they obey.
 * A body that receives it names what it does, instead of writing the literal that does it.
 * Its laws are played at every compilation, on values drawn at random: a law that does not hold is an error.
 */
const kind = defineKind({
  name: KindName.structure,
  label: { one: say.structureAlgebraicStructure(), many: say.structureAlgebraicStructures() },
  renderOwns: [F.operations, F.laws],
  fields,
  edges: {
    [EdgeName.serves]: optionalEdge(edge.many([KindName.goal], { label: say.adrServes(), inverse: say.adrServedBy() })),
  },

  /** Each law, played on the wired operations, with values drawn from a seed of its own. */
  async evaluate(self, g): Promise<Result[]> {
    const { counts, texts, lists, draws } = g.lib
    const laws = lawsOf(self.field(F.laws), g.lib)
    let operations: unknown
    try {
      operations = (await g.wire([{ name: self.ref, node: self }], undefined))[self.ref]
    } catch (e) {
      return laws.map((l) => ({ says: l.says, draws: counts.zero, error: (e as Error).message }))
    }
    const drawn = (log: unknown[]) => texts.concat(lists.enumeration(log.map(show)))
    return laws.map((law, i) => {
      const rnd = draws.generator(texts.concat([self.ref, draws.structures.seed, String(i)]))
      for (let n = counts.one; n <= draws.structures.draws; n = counts.next(n)) {
        const log: unknown[] = []
        try {
          if (!law.holds(operations, makeDraw(rnd, log, g.lib))) return { says: law.says, draws: n, drawn: drawn(log) }
        } catch (e) {
          return { says: law.says, draws: n, drawn: drawn(log), error: (e as Error).message }
        }
      }
      return { says: law.says, draws: draws.structures.draws }
    })
  },

  status(self, g) {
    const r = self.result<Result[]>()
    if (!r || g.lib.counts.isEmpty(r)) return Status.unknown
    return r.every(held) ? Status.held : Status.violated
  },

  holes: (self) =>
    (self.result<Result[]>() ?? [])
      .filter((r) => !held(r))
      .map((r) => hole.error(r.drawn === undefined
        ? say.structureLawNotPlayed(r.says, r.error)
        : say.structureLawBroken(r.says, r.drawn || say.structureNoValueDrawn(), r.error))),

  render(self, g) {
    const { positions, declarations, counts } = g.lib
    const body = self.field(F.operations)
    const source = self.decl && positions.reference(self.decl.file, self.decl.line)
    const written = self.decl?.props[F.operations]
    const operations = isFileBody(body)
      ? [doc.para(...say.structureTheOperationsAreWrittenIn(doc.ident(body.file)))]
      : written ? [doc.details(say.structureTheOperationsInCode(), [doc.code(declarations.language, written, source)])] : []
    const results = self.result<Result[]>() ?? []
    const verdict = (r: Result | undefined): Inline[] =>
      !r ? [say.languageNotPlayed()]
        : held(r) ? [say.structureHeldOn(r.draws)]
          : r.drawn === undefined ? say.structureNotPlayedBecause(r.error)
            : say.structureBrokenWith(doc.ident(r.drawn || say.structureNoValue()), r.error)
    const rows = lawsOf(self.field(F.laws), g.lib).map((l, i): Inline[][] => [[l.says], verdict(results[i])])
    return [...operations, ...(counts.any(rows) ? [doc.table([say.structureLaw(), say.languageChecked()], rows)] : [])]
  },

  summary(selves, g) {
    const all = selves.flatMap((s) => s.result<Result[]>() ?? [])
    if (g.lib.counts.isEmpty(all)) return undefined
    return say.structureHeldOutOf(all.filter(held).length, all.length)
  },
})

type Deps = Record<string, AnyNode>

interface StructureInput<C extends Record<string, Constant>, D extends Deps, O> {
  owner: string
  /** The constants that define it: its body receives them as parameters, with their meaning written here. */
  constants?: C
  /** What it builds on: a standard that already declares a constant, another structure. */
  deps?: D
  /** Its operations, by name: inline, or `code.file(…)`. */
  operations: ((p: Values<C> & Provided<D>) => O) | FileBody<(p: Values<C> & Provided<D>) => O>
  /** What its operations obey, played at every compilation on drawn values. */
  laws: readonly Law<NoInfer<O>>[]
  /** The goals it serves, in a library where nothing else uses it yet. */
  serves?: readonly Node<"goal">[]
}

/** Declares an algebraic structure. Those who receive it get its operations, typed. */
export function structure<O, const C extends Record<string, Constant> = {}, D extends Deps = {}>(
  input: StructureInput<C, D, O>,
): Node<"structure"> & Provides<O> & HasDeps<D> & Declares<C> {
  return kind(input as never) as never
}

export const structureKind = kind
