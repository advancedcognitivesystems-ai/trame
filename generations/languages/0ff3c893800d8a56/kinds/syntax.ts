import {
  defineKind, field, optional, edge, optionalEdge, hole, doc, isHole, Status,
  type AnyNode, type Node, type Provides, type ProvidedBy, type HasDeps, type Provided, type Constant, type Values, type Inline, type Declares,
} from "../trame/kernel"

/** An example: what the element is given, and what it must write. */
export interface Example {
  input: readonly unknown[]
  output: unknown
}

interface Result {
  input: readonly unknown[]
  expected: unknown
  actual?: unknown
  error?: string
  /** For an element of a language Trame reads: does what it writes follow the language's grammar? */
  parses?: boolean
  held: boolean
}

/** Where a fragment is read: what comes before it and after it, so that it is read as what it is (an expression…). */
export interface Fragment {
  before: string
  after: string
}

/** The reader of a language, as the kind sees it once wired. */
interface Reader {
  load(language: unknown): Promise<void>
  example(language: unknown, code: string): { errors: number }
}

const examplesOf = (raw: unknown): Example[] =>
  Array.isArray(raw) ? raw.filter((e): e is Example => !!e && typeof e === "object" && Array.isArray((e as Example).input)) : []

const show = (v: unknown) => JSON.stringify(v) ?? String(v)

/**
 * A syntax element: a construct of a format. The format is a published standard (a CommonMark heading, a GFM table
 * row…), or a decision of its owner when the format is its own (the text Trame shows in a terminal).
 * It declares its marks as constants, with their meaning; its body receives them and writes the construct;
 * its examples say what it must write, and are checked at every compilation. It may compose others.
 * What defines it is also a parameter of its body ("standard"): the marks shared by several elements are declared there.
 */
const kind = defineKind({
  name: "syntax",
  label: { one: "Syntax element", many: "Syntax elements" },
  order: 37,
  main: "constants",
  renderOwns: ["section", "url", "constants", "examples"],
  fields: {
    owner: field.owner(),
    section: field.value<string>("Section"),
    url: optional(field.value<string>("Address")),
    constants: field.constants("Marks"),
    deps: optional(field.deps()),
    write: field.body(),
    examples: field.value<Example[]>("Examples"),
    fragment: optional(field.value<Fragment>("Read as")),
  },
  edges: {
    standard: edge.one(["standard", "decision"], { label: "Defined by", inverse: "Defines" }),
    language: optionalEdge(edge.one(["language"], { label: "Read in", inverse: "Reads the elements" })),
  },

  /** The examples, played on the wired element with its marks and what it composes. */
  async evaluate(self, g): Promise<Result[]> {
    const examples = examplesOf(self.field("examples"))
    let write: (...a: unknown[]) => unknown
    try {
      write = (await g.wire([{ name: "write", node: self }], undefined)).write as (...a: unknown[]) => unknown
      if (typeof write !== "function") throw new Error("the body does not return a function")
    } catch (e) {
      return examples.map((x) => ({ input: x.input, expected: x.output, error: (e as Error).message, held: false }))
    }
    // An element of a language Trame reads: each output it must write is read, in its context, by the language's reader.
    let parses: ((text: string) => boolean) | undefined
    const language = self.language
    if (language) {
      try {
        const reader = g.from(language).out("reader").nodes()[0]
        const wired = await g.wire([{ name: "reader", node: reader }, { name: "language", node: language }], undefined)
        const r = wired.reader as Reader
        await r.load(wired.language)
        const around = (self.field("fragment") ?? { before: "", after: "" }) as Fragment
        parses = (text) => r.example(wired.language, around.before + text + around.after).errors === 0
      } catch (e) {
        return examples.map((x) => ({ input: x.input, expected: x.output, error: (e as Error).message, held: false }))
      }
    }
    return examples.map((x) => {
      try {
        const actual = write(...x.input)
        // A text, or its lines.
        const text = typeof x.output === "string" ? x.output
          : Array.isArray(x.output) && x.output.every((l) => typeof l === "string") ? x.output.join("\n") : undefined
        const read = parses && text !== undefined ? parses(text) : undefined
        return { input: x.input, expected: x.output, actual, parses: read, held: show(actual) === show(x.output) && read !== false }
      } catch (e) {
        return { input: x.input, expected: x.output, error: (e as Error).message, held: false }
      }
    })
  },

  status(self) {
    const r = self.result<Result[]>()
    if (!r?.length) return Status.unknown
    return r.every((x) => x.held) ? Status.held : Status.violated
  },

  holes: (self) =>
    (self.result<Result[]>() ?? []).filter((r) => !r.held).map((r) =>
      hole.error(r.parses === false
        ? `Example not read: ${show(r.expected)} does not follow the grammar of ${self.language?.title ?? "its language"}`
        : `Example not met: (${r.input.map(show).join(", ")}) must write ${show(r.expected)}, ${r.error ? `fails (${r.error})` : `writes ${show(r.actual)}`}`)),

  render(self, g) {
    const section = self.field("section")
    const url = self.field("url")
    const head: Inline[] = ["Section: ", typeof section === "string" && !isHole(section) ? section : "to specify", ...(typeof url === "string" ? [" · ", doc.ident(url)] : [])]
    const r = self.result<Result[]>() ?? []
    const rows = examplesOf(self.field("examples")).map((x, i): Inline[][] => {
      const res = r[i]
      const verdict: Inline[] = !res ? ["not played"]
        : res.held ? [res.parses ? `held, read as ${self.language?.title}` : "held"]
          : res.error ? ["fails: ", res.error]
            : res.parses === false ? [`not read as ${self.language?.title}`] : ["writes ", doc.ident(show(res.actual))]
      return [[doc.ident(x.input.map(show).join(", "))], [doc.ident(show(x.output))], verdict]
    })
    const raw = self.field("constants")
    const marks = Object.entries((raw && typeof raw === "object" && !isHole(raw) ? raw : {}) as Record<string, Constant>)
      .filter(([, c]) => c && typeof c === "object")
      .map(([k, c]): Inline[][] => [
        [doc.ident(k)],
        [doc.ident(typeof c.value === "string" && (c.value.trim() !== c.value || !c.value) ? show(c.value) : String(c.value))],
        [c.refines ? `${c.meaning} (refines ${g.view(c.refines.node).id}.${c.refines.name})` : c.meaning],
      ])
    return [
      doc.para(...head),
      ...(marks.length ? [doc.table(["Mark", "Value", "Meaning"], marks)] : []),
      ...(rows.length ? [doc.table(["Input", "Writes", "Checked"], rows)] : []),
    ]
  },
})

type Writer = (...args: never[]) => unknown

interface SyntaxInput<N extends Node<"standard"> | Node<"decision">, C extends Record<string, Constant>, D extends Record<string, AnyNode>, F extends Writer> {
  owner: string
  /**
   * What defines this construct: a standard, or a decision of its owner for a format of its own. The body also receives
   * its constants (its value, for a decision), under the name "standard".
   */
  standard: N
  /** Where, in the standard (in the format, for a decision). */
  section: string
  url?: string
  /** The marks of the construct: the body receives them as parameters. */
  constants: C
  /** The elements it composes. */
  deps?: D
  /** The language Trame reads, if it is one: each output of the examples must follow its grammar. */
  language?: Node<"language">
  /** What surrounds an output when it is read, so that it is read as what it is (an expression in parentheses…). */
  fragment?: Fragment
  /** Writes the construct, from its marks and what it composes. */
  write: (p: Values<C> & Provided<D> & { standard: ProvidedBy<N> }) => F
  /**
   * What it must write: checked at every compilation, by the engine. (TypeScript cannot type them from the body
   * without fixing F before reading it: the examples that are played are what counts.)
   */
  examples: readonly Example[]
}

/** `syntax({ standard: CommonMark, constants: { hash: { value: "#", meaning: "…" } }, write: ({ hash }) => (…) => …, examples })` */
export function syntax<N extends Node<"standard"> | Node<"decision">, const C extends Record<string, Constant>, F extends Writer, D extends Record<string, AnyNode> = {}>(
  input: SyntaxInput<N, C, D, F>,
): Node<"syntax"> & Provides<F> & HasDeps<D & { standard: N }> & Declares<C> {
  return kind({ ...input, deps: { standard: input.standard, ...(input.deps ?? {}) } } as never) as never
}

export const syntaxKind = kind
