import {
  defineKind, field, optional, edge, optionalEdge, hole, doc, isHole, keysOf, edgesOf, Status, KindName, EdgeName,
  type AnyNode, type Node, type Provides, type ProvidedBy, type HasDeps, type Provided, type Constant, type Values, type Inline, type Declares, type Lib,
} from "../trame/kernel"
import { languageKind } from "./language"
import words from "./words"

const say = words()

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

const examplesOf = (raw: unknown, { values }: Lib): Example[] =>
  Array.isArray(raw) ? raw.filter((e): e is Example => values.isObject(e) && Array.isArray((e as Example).input)) : []

const show = (v: unknown) => JSON.stringify(v) ?? String(v)

/** The inputs of an example, as a list. */
const inputsOf = (r: { input: readonly unknown[] }, { texts, lists }: Lib) => texts.concat(lists.enumeration(r.input.map(show)))

const fields = {
  owner: field.owner(),
  section: field.value<string>(say.syntaxSection()),
  url: optional(field.value<string>(say.patternAddress())),
  constants: field.constants(say.syntaxMarks()),
  deps: optional(field.deps()),
  write: field.body(),
  examples: field.value<Example[]>(say.languageExamples()),
  fragment: optional(field.value<Fragment>(say.syntaxReadAs())),
}
const F = keysOf(fields)

/**
 * A syntax element: a construct of a format. The format is a published standard (a CommonMark heading, a GFM table
 * row…), or a decision of its owner when the format is its own (the text Trame shows in a terminal).
 * It declares its marks as constants, with their meaning; its body receives them and writes the construct;
 * its examples say what it must write, and are checked at every compilation. It may compose others.
 * What defines it is also a parameter of its body ("standard"): the marks shared by several elements are declared there.
 */
const kind = defineKind({
  name: KindName.syntax,
  label: { one: say.syntaxSyntaxElement(), many: say.syntaxSyntaxElements() },
  main: F.constants,
  renderOwns: [F.section, F.url, F.constants, F.examples],
  fields,
  edges: {
    [EdgeName.standard]: edge.one([KindName.standard, KindName.decision], { label: say.languageDefinedBy(), inverse: say.syntaxDefines() }),
    [EdgeName.language]: optionalEdge(edge.one([KindName.language], { label: say.syntaxReadIn(), inverse: say.syntaxReadsTheElements() })),
  },

  /** The examples, played on the wired element with its marks and what it composes. */
  async evaluate(self, g): Promise<Result[]> {
    const { values, texts, counts, sequences, file } = g.lib
    const examples = examplesOf(self.field(F.examples), g.lib)
    let write: (...a: unknown[]) => unknown
    try {
      write = (await g.wire([{ name: self.ref, node: self }], undefined))[self.ref] as (...a: unknown[]) => unknown
      if (!values.isFunction(write)) throw new Error(say.syntaxTheBodyDoesNotReturnA())
    } catch (e) {
      return examples.map((x) => ({ input: x.input, expected: x.output, error: (e as Error).message, held: false }))
    }
    // An element of a language Trame reads: each output it must write is read, in its context, by the language's reader.
    let parses: ((text: string) => boolean) | undefined
    const language = self.language
    if (language) {
      try {
        const reader = sequences.head(g.from(language).out(edgesOf(languageKind).reader).nodes())
        if (!reader) throw new Error(say.syntaxItsLanguage())
        const wired = await g.wire([{ name: reader.ref, node: reader }, { name: language.ref, node: language }], undefined)
        const r = wired[reader.ref] as Reader
        await r.load(wired[language.ref])
        const around = (self.field(F.fragment) ?? { before: texts.empty, after: texts.empty }) as Fragment
        parses = (text) => r.example(wired[language.ref], around.before + text + around.after).errors === counts.zero
      } catch (e) {
        return examples.map((x) => ({ input: x.input, expected: x.output, error: (e as Error).message, held: false }))
      }
    }
    return examples.map((x) => {
      try {
        const actual = write(...x.input)
        // A text, or its lines.
        const text = values.isText(x.output) ? x.output
          : Array.isArray(x.output) && x.output.every((l) => values.isText(l)) ? x.output.join(file.endOfLine) : undefined
        const read = parses && text !== undefined ? parses(text) : undefined
        return { input: x.input, expected: x.output, actual, parses: read, held: show(actual) === show(x.output) && read !== false }
      } catch (e) {
        return { input: x.input, expected: x.output, error: (e as Error).message, held: false }
      }
    })
  },

  status(self, g) {
    const r = self.result<Result[]>()
    if (!r || g.lib.counts.isEmpty(r)) return Status.unknown
    return r.every((x) => x.held) ? Status.held : Status.violated
  },

  holes: (self, g) =>
    (self.result<Result[]>() ?? []).filter((r) => !r.held).map((r) =>
      hole.error(r.parses === false
        ? say.syntaxExampleNotReadDoesNotFollow(show(r.expected), self.language?.title ?? say.syntaxItsLanguage())
        : say.syntaxExampleNotMetMustWrite(inputsOf(r, g.lib), show(r.expected), r.error ? say.syntaxFails(r.error) : say.syntaxWritesValue(show(r.actual))))),

  render(self, g) {
    const { values, punctuation } = g.lib
    const section = self.field(F.section)
    const url = self.field(F.url)
    const head: Inline[] = [
      say.syntaxSection2(), values.isText(section) && !isHole(section) ? section : say.syntaxToSpecify(),
      ...(values.isText(url) ? [punctuation.parts, doc.ident(url)] : []),
    ]
    const r = self.result<Result[]>() ?? []
    const rows = examplesOf(self.field(F.examples), g.lib).map((x, i): Inline[][] => {
      const res = r[i]
      const verdict: Inline[] = !res ? [say.languageNotPlayed()]
        : res.held ? [res.parses ? say.syntaxHeldReadAs(self.language?.title) : say.syntaxHeld()]
          : res.error ? say.syntaxFailsWith(res.error)
            : res.parses === false ? [say.syntaxNotReadAs(self.language?.title)] : say.syntaxWritesShown(doc.ident(show(res.actual)))
      return [[doc.ident(inputsOf(x, g.lib))], [doc.ident(show(x.output))], verdict]
    })
    const raw = self.field(F.constants)
    const marks = Object.entries((values.isObject(raw) && !isHole(raw) ? raw : {}) as Record<string, Constant>)
      .filter(([, c]) => values.isObject(c))
      .map(([k, c]): Inline[][] => [
        [doc.ident(k)],
        [doc.ident(values.isText(c.value) && (c.value.trim() !== c.value || !c.value) ? show(c.value) : String(c.value))],
        [c.refines ? say.syntaxRefines(c.meaning, g.view(c.refines.node).id, c.refines.name) : c.meaning],
      ])
    return [
      doc.para(...head),
      ...(g.lib.counts.any(marks) ? [doc.table([say.syntaxMark(), say.decisionValue(), say.syntaxMeaning()], marks)] : []),
      ...(g.lib.counts.any(rows) ? [doc.table([say.syntaxInput(), say.syntaxWrites(), say.languageChecked()], rows)] : []),
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
