import {
  defineKind, field, edge, optionalEdge, hole, doc, isHole, keysOf, fieldsOf, Status, KindName, EdgeName,
  type Node, type Provides, type Constant, type Inline, type HoleSpec, type View, type Lib,
} from "../trame/kernel"
import { standardFields } from "./standard"
import { vocabularyFields } from "./vocabulary"
import { packageKind } from "./package"
import words from "./words"

const say = words()

/**
 * A tree-sitter grammar: the module that resolves to its WebAssembly file. The package and its version are those of the
 * language's packages; a language written before packages were nodes names them here.
 */
export interface Grammar {
  module: string
  package?: string
  version?: string
}

/**
 * How the escape sequences of a text decode. A sequence opens with the mark; what follows it is either named in `single`
 * (n, t, a line terminator…, the longest that fits), or numeric (a prefix, then digits of a radix: a given number of
 * them, or up to a closing mark, or as many as there are up to a most; a character of `trailing` that follows them
 * belongs to the sequence), or neither: the mark then escapes the character that follows it (\q is q), unless
 * `keepUnknown` says that it stands for itself (HTML: an ampersand that opens no known reference is an ampersand).
 * Some languages also write a text with other sequences (HCL: $${ for ${): `literal`.
 */
export interface Escapes {
  mark: string
  single: Record<string, string>
  numeric: { prefix: string; radix: number; digits?: number; close?: string; most?: number; trailing?: string[] }[]
  literal?: Record<string, string>
  keepUnknown?: boolean
}

/** What a language gives to those who receive it: its description, as data. */
export interface LanguageDescription {
  name: string
  /** The name bodies give to the language: the language of a file body (code.file), of a component's program. */
  tag: string
  grammar: Grammar
  extensions: string[]
  /** The queries, by concern (values, names, imports…). */
  queries: Record<string, string>
  escapes: Escapes
}

/** What the reader must find in a piece of code: an example of the language. Only what it states is compared. */
export interface LanguageExample {
  code: string
  /** The literals, as written, in their order. */
  literals?: string[]
  /** Their roles, in the same order. */
  roles?: string[]
  /** Their values: a number, or the text the parts and escapes make. */
  values?: (string | number)[]
  /** The modules it imports, and whether for types only. */
  imports?: { module: string; typeOnly: boolean }[]
  /** What may reach outside, that the code does not define. */
  globals?: string[]
  /** Whether it gives something (an entry). */
  entry?: boolean
  /** The parameters it declares (Terraform's variables). */
  parameters?: string[]
  /** What it gives back (Terraform's outputs). */
  outputs?: string[]
  /**
   * The places where the code does not follow the grammar, for a gap of the grammar itself (none, when it is not said):
   * an example that states them keeps the gap in sight.
   */
  errors?: number
}

/** What a reader gives back for an example, so that the kind can compare. */
export interface ExampleReading {
  literals: string[]
  roles: string[]
  values: (string | number)[]
  imports: { module: string; typeOnly: boolean }[]
  globals: string[]
  entry: boolean
  parameters: string[]
  outputs: string[]
  errors: number
}

/** The reader a language is read by, as the kind sees it once wired. */
interface Reader {
  load(language: LanguageDescription): Promise<void>
  example(language: LanguageDescription, code: string): ExampleReading
  /** The predicates each query uses that tree-sitter keeps aside, as tree-sitter parsed the query: [query, operator]. */
  aside(language: LanguageDescription): [string, string][]
}

interface Result {
  code: string
  held: boolean
  found?: ExampleReading
  error?: string
}

/** What a language's evaluation finds: each example, read; the predicates its queries use that tree-sitter keeps aside. */
interface Evaluation {
  examples: Result[]
  aside: [string, string][]
}

const examplesOf = (raw: unknown, { values }: Lib): LanguageExample[] =>
  Array.isArray(raw) ? raw.filter((e): e is LanguageExample => values.isObject(e) && values.isText((e as LanguageExample).code)) : []

const queriesOf = (raw: unknown, { values }: Lib): [string, Constant][] =>
  values.isObject(raw) && !isHole(raw)
    ? Object.entries(raw as Record<string, Constant>).filter(([, c]) => values.isObject(c) && values.isText(c.value))
    : []

const show = (v: unknown) => JSON.stringify(v)

/** The parts of the reading that the example states, in the order of an example. */
const stated = (x: LanguageExample, r: ExampleReading) => ({
  ...(x.literals && { literals: r.literals }),
  ...(x.roles && { roles: r.roles }),
  ...(x.values && { values: r.values }),
  ...(x.imports && { imports: r.imports }),
  ...(x.globals && { globals: r.globals }),
  ...(x.entry !== undefined && { entry: r.entry }),
  ...(x.parameters && { parameters: r.parameters }),
  ...(x.outputs && { outputs: r.outputs }),
  ...(r.errors && { errors: r.errors }),
})

/** Does the reading say what the example expects, and does the code follow the grammar? */
const holds = (x: LanguageExample, r: ExampleReading, { counts }: Lib) =>
  (x.literals === undefined || show(x.literals) === show(r.literals)) &&
  (x.roles === undefined || show(x.roles) === show(r.roles)) &&
  (x.values === undefined || show(x.values) === show(r.values)) &&
  (x.imports === undefined || show(x.imports) === show(r.imports)) &&
  (x.globals === undefined || show(x.globals) === show(r.globals)) &&
  (x.entry === undefined || x.entry === r.entry) &&
  (x.parameters === undefined || show(x.parameters) === show(r.parameters)) &&
  (x.outputs === undefined || show(x.outputs) === show(r.outputs)) &&
  r.errors === (x.errors ?? counts.zero)

const isRecord = (v: unknown, { values }: Lib): v is Record<string, unknown> => values.isObject(v) && !Array.isArray(v) && !isHole(v)
/** A text in quotes, the characters that do not show written as escape sequences. */
const quoted = (s: string) => show(s).replace(/[\u00a0\u2028\u2029]/g, (c) => `\\u${c.charCodeAt(0).toString(16).padStart(4, "0")}`)
const visible = (s: string) => (/[\u0000-\u001f\u00a0\u2028\u2029]/.test(s) ? quoted(s) : s)
/** Groups of pieces, as an enumeration of the language. */
const listed = (items: Inline[][], { lists }: Lib): Inline[] => lists.enumeration(items).flatMap((x) => (Array.isArray(x) ? x : [x]))

/** How a reader decodes the escape sequences of a language, said in a sentence. */
function escapesShown(raw: unknown, lib: Lib): Inline[] {
  const { values, texts, counts } = lib
  if (!isRecord(raw, lib) || !values.isText(raw.mark)) return []
  const mark = raw.mark
  const textsOf = (v: unknown) => (isRecord(v, lib) ? Object.entries(v).flatMap(([k, x]): [string, string][] => (values.isText(x) ? [[k, x]] : [])) : [])
  const single = textsOf(raw.single)
  const literal = textsOf(raw.literal)
  const numeric = (Array.isArray(raw.numeric) ? raw.numeric : []).filter((n): n is Record<string, unknown> => isRecord(n, lib))
  const digits = (n: Record<string, unknown>): Inline[] => {
    const base = say.languageInBase(String(n.radix))
    return values.isNumber(n.digits) ? [say.languageThenDigits(n.digits, base)]
      : values.isText(n.close) ? [say.languageThenDigitsUpTo(base), doc.ident(n.close)]
        : values.isNumber(n.most) ? [say.languageThen1ToDigits(n.most, base)] : [say.languageThenDigits2(base)]
  }
  const trailing = (n: Record<string, unknown>): Inline[] =>
    Array.isArray(n.trailing) && counts.any(n.trailing) ? [say.languageOneOfAfterThemBelongsTo(n.trailing.map((t) => quoted(String(t))).join(texts.space))] : []
  return [
    say.languageEscapeSequencesOpenWith(), doc.ident(mark),
    ...(counts.any(single) ? [say.languageNamed(), ...listed(single.map(([w, c]) => say.languageDecodedAs(doc.ident(visible(mark + w)), quoted(c))), lib)] : []),
    ...(counts.any(numeric) ? [say.languageNumeric(), ...listed(numeric.map((n): Inline[] => [doc.ident(visible(mark + texts.optional(n.prefix as string | undefined))), ...digits(n), ...trailing(n)]), lib)] : []),
    ...(counts.any(literal) ? [say.languageWrittenForAnotherText(), ...listed(literal.map(([w, x]) => say.languageWrittenFor(doc.ident(visible(w)), quoted(x))), lib)] : []),
    raw.keepUnknown === true ? say.languageAMarkThatOpensNoKnown() : say.languageOtherwiseTheMarkEscapesTheCharacter(),
  ]
}

const fields = {
  owner: field.owner(),
  tag: field.value<string>(say.languageNamedInBodies()),
  grammar: field.value<Grammar>(say.languageGrammar()),
  extensions: field.value<string[]>(say.languageExtensions()),
  queries: field.constants(say.languageQueries()),
  escapes: field.value<Escapes>(say.languageEscapeSequences()),
  examples: field.value<LanguageExample[]>(say.languageExamples()),
}
const F = keysOf(fields)

const edges = {
  [EdgeName.standard]: edge.one([KindName.standard], { label: say.languageDefinedBy(), inverse: say.languageDefinesTheLanguage() }),
  queryLanguage: edge.one([KindName.standard], { label: say.languageQueriesWrittenIn(), inverse: say.languageLanguageOfTheQueriesOf() }),
  reader: edge.one([KindName.function], { label: say.languageReadBy(), inverse: say.languageReads() }),
  globals: optionalEdge(edge.one([KindName.vocabulary], { label: say.languageWatchesTheGlobals(), inverse: say.languageGlobalsWatchedIn() })),
  [EdgeName.packages]: optionalEdge(edge.many([KindName.package], { label: say.packageUses(), inverse: say.packageUsedBy() })),
}
const E = keysOf(edges)

/**
 * A language that bodies are written in: its tree-sitter grammar, the queries that say what Trame sees in its code
 * (values, names, imports, roles…), and examples of what the reader must find, played at every compilation.
 * Reading is generic: the language declares, the reader reads. What a language gives is its description.
 * Its queries use only the predicates that tree-sitter evaluates (any other one would be kept aside silently, and its
 * pattern would catch too much); the globals it watches are those of its vocabulary.
 */
const kind = defineKind({
  name: KindName.language,
  label: { one: say.componentLanguage(), many: say.languageLanguages() },
  main: F.queries,
  renderOwns: [F.tag, F.grammar, F.extensions, F.queries, F.examples, F.escapes],
  fields,
  edges,

  provide: (self, ctx) => ({
    name: self.id,
    tag: self.field(F.tag),
    grammar: self.field(F.grammar),
    extensions: self.field(F.extensions),
    queries: Object.fromEntries(queriesOf(self.field(F.queries), ctx.g.lib).map(([k, c]) => [k, c.value])),
    escapes: self.field(F.escapes),
  }),

  /** The examples, read by the language's reader. */
  async evaluate(self, g): Promise<Evaluation> {
    const examples = examplesOf(self.field(F.examples), g.lib)
    let reader: Reader
    let language: LanguageDescription
    try {
      const wired = await g.wire([{ name: self.reader.ref, node: self.reader }, { name: self.ref, node: self }], undefined)
      reader = wired[self.reader.ref] as Reader
      language = wired[self.ref] as LanguageDescription
      await reader.load(language)
    } catch (e) {
      return { examples: examples.map((x) => ({ code: x.code, held: false, error: (e as Error).message })), aside: [] }
    }
    const read = examples.map((x): Result => {
      try {
        const found = reader.example(language, x.code)
        return { code: x.code, held: holds(x, found, g.lib), found }
      } catch (e) {
        return { code: x.code, held: false, error: (e as Error).message }
      }
    })
    // A query tree-sitter cannot compile fails the examples already: its predicates are then not known.
    let aside: [string, string][] = []
    try {
      aside = reader.aside(language)
    } catch {
      aside = []
    }
    return { examples: read, aside }
  },

  status(self, g) {
    const r = self.result<Evaluation>()?.examples
    if (!r || g.lib.counts.isEmpty(r)) return Status.unknown
    return r.every((x) => x.held) ? Status.held : Status.violated
  },

  holes(self, g) {
    const { file } = g.lib
    const out: HoleSpec[] = []
    const queries = queriesOf(self.field(F.queries), g.lib)
    // What tree-sitter keeps aside when it parses a query filters nothing: the pattern would catch too much.
    for (const [name, operator] of self.result<Evaluation>()?.aside ?? []) out.push(hole.error(say.languageTheQueryUsesWhichTreeSitter(name, operator)))
    const watched = self.globals
    const words = watched ? Object.keys((watched.field(vocabularyFields.words) ?? {}) as Record<string, string>) : []
    const all = queries.map(([, c]) => String(c.value)).join(file.endOfLine)
    for (const w of words) if (!all.includes(show(w))) out.push(hole.error(say.languageNoQueryWatchesTheGlobalOf(w, watched!.title)))
    for (const r of self.result<Evaluation>()?.examples ?? []) {
      if (!r.held) out.push(hole.error(r.error ? say.languageExampleNotRead(show(r.code), r.error) : say.languageExampleNotMetReads(show(r.code), show(r.found))))
    }
    return out
  },

  render(self, g) {
    const { values, counts, punctuation, lists } = g.lib
    const grammar = self.field(F.grammar) as Grammar | undefined
    const extensions = self.field(F.extensions)
    const packages = g.from(self).out(E.packages).nodes()
    const grammarOf: Inline[] = grammar?.package !== undefined
      ? [doc.ident(say.languagePackageAt(grammar.package, String(grammar.version)))]
      : listed(packages.map((p) => say.languagePackageVersion(doc.ref(p), doc.ident(String(p.field(fieldsOf(packageKind).version) ?? g.lib.texts.empty)))), g.lib)
    const head: Inline[] = grammar && values.isObject(grammar) && !isHole(grammar)
      ? [say.languageGrammar2(), ...grammarOf, punctuation.opensAside, doc.ident(grammar.module), punctuation.closesAside]
      : [say.languageGrammarToSpecify()]
    const files: Inline[] = Array.isArray(extensions) ? [say.languageFiles(), ...lists.enumeration(extensions.map((x) => doc.ident(String(x))))] : []
    const tag = self.field(F.tag)
    const named: Inline[] = values.isText(tag) ? [say.languageNamed2(), doc.ident(tag), say.languageInBodies()] : []
    // The queries, in a code block named as their language says (a standard that is a language names its highlighting).
    const tagOfQueries = self.queryLanguage?.field(standardFields.tag)
    const fence = values.isText(tagOfQueries) ? tagOfQueries : g.lib.texts.empty
    const queries = queriesOf(self.field(F.queries), g.lib).map(([k, c]) => doc.details(say.languageQuery(k, c.meaning), [doc.code(fence, String(c.value).trim())]))
    // The escape sequences, as a reader decodes them (whatever the field holds: a value badly written is not shown).
    const decoding = escapesShown(self.field(F.escapes), g.lib)
    const r = self.result<Evaluation>()?.examples ?? []
    const rows = examplesOf(self.field(F.examples), g.lib).map((x, i): Inline[][] => {
      const res = r[i]
      // What the example states, in its own terms: the example read as if it were its own reading.
      const expected = Object.entries(stated(x, x as unknown as ExampleReading)).map(([what, v]) => say.languageExpects(what, show(v))).join(punctuation.parts)
      const verdict: Inline[] = !res ? [say.languageNotPlayed()] : res.held ? [say.syntaxHeld()] : res.error ? say.syntaxFailsWith(res.error) : say.languageReadsShown(doc.ident(show(res.found && stated(x, res.found))))
      return [[doc.ident(x.code)], [expected], verdict]
    })
    return [
      doc.para(...head, ...files, ...named),
      ...queries,
      ...(counts.any(decoding) ? [doc.para(...decoding)] : []),
      ...(counts.any(rows) ? [doc.table([say.languageCode(), say.languageMustRead(), say.languageChecked()], rows)] : []),
    ]
  },

  summary(selves, g) {
    const all = selves.flatMap((s) => s.result<Evaluation>()?.examples ?? [])
    if (g.lib.counts.isEmpty(all)) return undefined
    return say.languageLanguageExamplesHeldOutOf(all.filter((r) => r.held).length, all.length)
  },
})

interface LanguageInput<C extends Record<string, Constant>> {
  owner: string
  /** The package of its grammar. */
  packages?: readonly Node<"package">[]
  /** The name bodies give to it: `code.file(path, tag)`, a component's language. */
  tag: string
  /** The language's standard (ECMAScript for TypeScript). */
  standard: Node<"standard">
  /** The standard its queries are written in (tree-sitter's queries). */
  queryLanguage: Node<"standard">
  /** The reader that reads it, and plays its examples. */
  reader: Node<"function">
  /** The globals through which a body would reach outside: each one must be watched by a query. */
  globals?: Node<"vocabulary">
  grammar: Grammar
  extensions: string[]
  /** One query per concern, in tree-sitter's query language, with its meaning. */
  queries: C
  escapes: Escapes
  examples: LanguageExample[]
}

/** Declares a language. Those who receive it get its description. */
export function language<const C extends Record<string, Constant>>(input: LanguageInput<C>): Node<"language"> & Provides<LanguageDescription> {
  return kind(input as never) as never
}

export const languageKind = kind
