import {
  defineKind, field, optional, hole, doc, plural, isFileBody, Status,
  type AnyNode, type Node, type Provides, type HasDeps, type Provided, type FileBody, type Constant, type Values, type Inline, type Declares,
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

/** How many times each law is played. */
const DRAWS = 100

const lawsOf = (raw: unknown): Law<unknown>[] =>
  Array.isArray(raw)
    ? raw.filter((l): l is Law<unknown> => !!l && typeof l === "object" && typeof (l as Law<unknown>).says === "string" && typeof (l as Law<unknown>).holds === "function")
    : []

const show = (v: unknown) => JSON.stringify(v) ?? String(v)

/** Mulberry32, seeded by a text: the draws of a law depend only on the structure and the law. */
function generator(seed: string): () => number {
  let a = [...seed].reduce((h, c) => Math.imul(h ^ c.charCodeAt(0), 2654435761) >>> 0, 2166136261)
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function makeDraw(rnd: () => number, log: unknown[]): Draw {
  const int = (lo: number, hi: number) => lo + Math.floor(rnd() * (hi - lo + 1))
  const alphabet = ["a", "b", " ", "`"]
  let depth = 0
  // Only what the law draws itself is recorded: the items of a list are in the list.
  const record = <T>(v: T): T => {
    if (depth === 0) log.push(v)
    return v
  }
  return {
    integer: () => record(int(-20, 20)),
    natural: () => record(int(0, 12)),
    text: () => {
      depth++
      const t = Array.from({ length: int(0, 4) }, () => alphabet[int(0, alphabet.length - 1)]).join("")
      depth--
      return record(t)
    },
    list: (item) => {
      depth++
      const xs = Array.from({ length: int(0, 6) }, item)
      depth--
      return record(xs)
    },
    boolean: () => record(rnd() < 0.5),
  }
}

/**
 * An algebraic structure: operations that several bodies share (taking the first element of a list, counting under a
 * key, joining texts), the constants that define them (the count of nothing is 0), and the laws they obey.
 * A body that receives it names what it does, instead of writing the literal that does it.
 * Its laws are played at every compilation, on values drawn at random: a law that does not hold is an error.
 */
const kind = defineKind({
  name: "structure",
  label: { one: say.structureAlgebraicStructure(), many: say.structureAlgebraicStructures() },
  renderOwns: ["operations", "laws"],
  fields: {
    owner: field.owner(),
    constants: optional(field.constants(say.structureConstants())),
    deps: optional(field.deps()),
    operations: field.body(),
    laws: field.value<readonly Law<never>[]>(say.structureLaws()),
  },
  edges: {},

  /** Each law, played on the wired operations, with values drawn from a seed of its own. */
  async evaluate(self, g): Promise<Result[]> {
    const laws = lawsOf(self.field("laws"))
    let operations: unknown
    try {
      operations = (await g.wire([{ name: "operations", node: self }], undefined)).operations
    } catch (e) {
      return laws.map((l) => ({ says: l.says, draws: 0, error: (e as Error).message }))
    }
    return laws.map((law, i) => {
      const rnd = generator(`${self.ref}#${i}`)
      for (let n = 1; n <= DRAWS; n++) {
        const log: unknown[] = []
        try {
          if (!law.holds(operations, makeDraw(rnd, log))) return { says: law.says, draws: n, drawn: log.map(show).join(", ") }
        } catch (e) {
          return { says: law.says, draws: n, drawn: log.map(show).join(", "), error: (e as Error).message }
        }
      }
      return { says: law.says, draws: DRAWS }
    })
  },

  status(self) {
    const r = self.result<Result[]>()
    if (!r?.length) return Status.unknown
    return r.every((x) => x.drawn === undefined && x.error === undefined) ? Status.held : Status.violated
  },

  holes: (self) =>
    (self.result<Result[]>() ?? [])
      .filter((r) => r.drawn !== undefined || r.error !== undefined)
      .map((r) => hole.error(r.drawn === undefined
        ? say.structureLawNotPlayed(r.says, r.error)
        : say.structureLawBrokenWith(r.says, r.drawn || say.structureNoValueDrawn(), r.error ? ` (${r.error})` : ""))),

  render(self) {
    const body = self.field("operations")
    const source = self.decl && `${self.decl.file}:${self.decl.line}`
    const written = self.decl?.props.operations
    const operations = isFileBody(body)
      ? [doc.para(say.structureTheOperationsAreWrittenIn(), doc.ident(body.file), ".")]
      : written ? [doc.details(say.structureTheOperationsInCode(), [doc.code("ts", written, source)])] : []
    const results = self.result<Result[]>() ?? []
    const verdict = (r: Result | undefined): Inline[] =>
      !r ? [say.languageNotPlayed()]
        : r.drawn === undefined && r.error === undefined ? [say.structureHeldOn(plural(r.draws, "draw"))]
          : r.drawn === undefined ? [say.structureNotPlayed(), r.error ?? ""]
            : [say.structureBrokenWith(), doc.ident(r.drawn || say.structureNoValue()), ...(r.error ? [` (${r.error})`] : [])]
    const rows = lawsOf(self.field("laws")).map((l, i): Inline[][] => [[l.says], verdict(results[i])])
    return [...operations, ...(rows.length ? [doc.table([say.structureLaw(), say.languageChecked()], rows)] : [])]
  },

  summary(selves) {
    const all = selves.flatMap((s) => s.result<Result[]>() ?? [])
    if (!all.length) return undefined
    const held = all.filter((r) => r.drawn === undefined && r.error === undefined).length
    return say.structureHeldOutOf(plural(held, "law"), all.length)
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
}

/** Declares an algebraic structure. Those who receive it get its operations, typed. */
export function structure<O, const C extends Record<string, Constant> = {}, D extends Deps = {}>(
  input: StructureInput<C, D, O>,
): Node<"structure"> & Provides<O> & HasDeps<D> & Declares<C> {
  return kind(input as never) as never
}

export const structureKind = kind
