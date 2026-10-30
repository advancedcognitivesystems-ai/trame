import {
  defineKind, field, edge, optionalEdge, hole, doc, isHole, Status,
  type Node, type Provides, type Constant, type Inline, type HoleSpec, type View,
} from "../trame/kernel"
import words from "./words"

const say = words()

/** A tree-sitter grammar: the npm package, its version, and the module that resolves to its WebAssembly file. */
export interface Grammar {
  package: string
  version: string
  module: string
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
}

interface Result {
  code: string
  held: boolean
  found?: ExampleReading
  error?: string
}

const examplesOf = (raw: unknown): LanguageExample[] =>
  Array.isArray(raw) ? raw.filter((e): e is LanguageExample => !!e && typeof e === "object" && typeof (e as LanguageExample).code === "string") : []

const queriesOf = (raw: unknown): [string, Constant][] =>
  raw && typeof raw === "object" && !isHole(raw)
    ? Object.entries(raw as Record<string, Constant>).filter(([, c]) => c && typeof c === "object" && typeof c.value === "string")
    : []

const show = (v: unknown) => JSON.stringify(v)

/** The parts of the reading that the example states. */
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
const holds = (x: LanguageExample, r: ExampleReading) =>
  (x.literals === undefined || show(x.literals) === show(r.literals)) &&
  (x.roles === undefined || show(x.roles) === show(r.roles)) &&
  (x.values === undefined || show(x.values) === show(r.values)) &&
  (x.imports === undefined || show(x.imports) === show(r.imports)) &&
  (x.globals === undefined || show(x.globals) === show(r.globals)) &&
  (x.entry === undefined || x.entry === r.entry) &&
  (x.parameters === undefined || show(x.parameters) === show(r.parameters)) &&
  (x.outputs === undefined || show(x.outputs) === show(r.outputs)) &&
  r.errors === 0

const isRecord = (v: unknown): v is Record<string, unknown> => !!v && typeof v === "object" && !Array.isArray(v) && !isHole(v)
/** A text in quotes, the characters that do not show written as escape sequences. */
const quoted = (s: string) => show(s).replace(/[\u00a0\u2028\u2029]/g, (c) => `\\u${c.charCodeAt(0).toString(16).padStart(4, "0")}`)
const visible = (s: string) => (/[\u0000-\u001f\u00a0\u2028\u2029]/.test(s) ? quoted(s) : s)
const listed = (items: Inline[][]): Inline[] => items.flatMap((x, i): Inline[] => [...(i ? [", "] : []), ...x])

/** How a reader decodes the escape sequences of a language, said in a sentence. */
function escapesShown(raw: unknown): Inline[] {
  if (!isRecord(raw) || typeof raw.mark !== "string") return []
  const mark = raw.mark
  const texts = (v: unknown) => (isRecord(v) ? Object.entries(v).filter((e): e is [string, string] => typeof e[1] === "string") : [])
  const single = texts(raw.single)
  const literal = texts(raw.literal)
  const numeric = (Array.isArray(raw.numeric) ? raw.numeric : []).filter(isRecord)
  const digits = (n: Record<string, unknown>): Inline[] => {
    const base = say.languageInBase(String(n.radix))
    return typeof n.digits === "number" ? [say.languageThenDigits(n.digits, base)]
      : typeof n.close === "string" ? [say.languageThenDigitsUpTo(base), doc.ident(n.close)]
        : typeof n.most === "number" ? [say.languageThen1ToDigits(n.most, base)] : [say.languageThenDigits2(base)]
  }
  const trailing = (n: Record<string, unknown>): Inline[] =>
    Array.isArray(n.trailing) && n.trailing.length ? [say.languageOneOfAfterThemBelongsTo(n.trailing.map((t) => quoted(String(t))).join(" "))] : []
  return [
    say.languageEscapeSequencesOpenWith(), doc.ident(mark),
    ...(single.length ? [say.languageNamed(), ...listed(single.map(([w, c]): Inline[] => [doc.ident(visible(mark + w)), ` ${quoted(c)}`]))] : []),
    ...(numeric.length ? [say.languageNumeric(), ...listed(numeric.map((n): Inline[] => [doc.ident(visible(mark + String(n.prefix ?? ""))), ...digits(n), ...trailing(n)]))] : []),
    ...(literal.length ? [say.languageWrittenForAnotherText(), ...listed(literal.map(([w, x]): Inline[] => [doc.ident(visible(w)), ` for ${quoted(x)}`]))] : []),
    raw.keepUnknown === true ? say.languageAMarkThatOpensNoKnown() : say.languageOtherwiseTheMarkEscapesTheCharacter(),
  ]
}

/** The predicates a query uses: #eq?, #match?, #set!… */
const predicatesIn = (query: string) => query.match(/#[a-z-]+[?!]/g) ?? []

/** The values of a standard's constants. */
const valuesOf = (v: View | undefined) => queriesOf(v?.field("constants")).map(([, c]) => c.value)

/**
 * A language that bodies are written in: its tree-sitter grammar, the queries that say what Trame sees in its code
 * (values, names, imports, roles…), and examples of what the reader must find, played at every compilation.
 * Reading is generic: the language declares, the reader reads. What a language gives is its description.
 * Its queries use only the predicates that tree-sitter evaluates (any other one would be kept aside silently, and its
 * pattern would catch too much); the globals it watches are those of its vocabulary.
 */
const kind = defineKind({
  name: "language",
  label: { one: say.componentLanguage(), many: say.languageLanguages() },
  order: 38,
  main: "queries",
  renderOwns: ["tag", "grammar", "extensions", "queries", "examples", "escapes"],
  fields: {
    owner: field.owner(),
    tag: field.value<string>(say.languageNamedInBodies()),
    grammar: field.value<Grammar>(say.languageGrammar()),
    extensions: field.value<string[]>(say.languageExtensions()),
    queries: field.constants(say.languageQueries()),
    escapes: field.value<Escapes>(say.languageEscapeSequences()),
    examples: field.value<LanguageExample[]>(say.languageExamples()),
  },
  edges: {
    standard: edge.one(["standard"], { label: say.languageDefinedBy(), inverse: say.languageDefinesTheLanguage() }),
    queryLanguage: edge.one(["standard"], { label: say.languageQueriesWrittenIn(), inverse: say.languageLanguageOfTheQueriesOf() }),
    reader: edge.one(["function"], { label: say.languageReadBy(), inverse: say.languageReads() }),
    globals: optionalEdge(edge.one(["vocabulary"], { label: say.languageWatchesTheGlobals(), inverse: say.languageGlobalsWatchedIn() })),
    packages: optionalEdge(edge.many(["package"], { label: say.packageUses(), inverse: say.packageUsedBy() })),
  },

  provide: (self) => ({
    name: self.id,
    tag: self.field("tag"),
    grammar: self.field("grammar"),
    extensions: self.field("extensions"),
    queries: Object.fromEntries(queriesOf(self.field("queries")).map(([k, c]) => [k, c.value])),
    escapes: self.field("escapes"),
  }),

  /** The examples, read by the language's reader. */
  async evaluate(self, g): Promise<Result[]> {
    const examples = examplesOf(self.field("examples"))
    let reader: Reader
    let language: LanguageDescription
    try {
      const wired = await g.wire([{ name: "reader", node: self.reader }, { name: "language", node: self }], undefined)
      reader = wired.reader as Reader
      language = wired.language as LanguageDescription
      await reader.load(language)
    } catch (e) {
      return examples.map((x) => ({ code: x.code, held: false, error: (e as Error).message }))
    }
    return examples.map((x) => {
      try {
        const found = reader.example(language, x.code)
        return { code: x.code, held: holds(x, found), found }
      } catch (e) {
        return { code: x.code, held: false, error: (e as Error).message }
      }
    })
  },

  status(self) {
    const r = self.result<Result[]>()
    if (!r?.length) return Status.unknown
    return r.every((x) => x.held) ? Status.held : Status.violated
  },

  holes(self) {
    const out: HoleSpec[] = []
    const queries = queriesOf(self.field("queries"))
    const known = new Set(valuesOf(self.queryLanguage))
    for (const [name, c] of queries) {
      for (const p of new Set(predicatesIn(String(c.value)))) {
        if (!known.has(p)) out.push(hole.error(say.languageTheQueryUsesWhichTreeSitter(name, p)))
      }
    }
    const watched = self.globals
    const words = watched ? Object.keys((watched.field("words") ?? {}) as Record<string, string>) : []
    const all = queries.map(([, c]) => String(c.value)).join("\n")
    for (const w of words) if (!all.includes(show(w))) out.push(hole.error(say.languageNoQueryWatchesTheGlobalOf(w, watched!.title)))
    for (const r of self.result<Result[]>() ?? []) {
      if (!r.held) out.push(hole.error(r.error ? say.languageExampleNotRead(show(r.code), r.error) : say.languageExampleNotMetReads(show(r.code), show(r.found))))
    }
    return out
  },

  render(self) {
    const grammar = self.field("grammar") as Grammar | undefined
    const extensions = self.field("extensions")
    const head: Inline[] = grammar && typeof grammar === "object" && !isHole(grammar)
      ? [say.languageGrammar2(), doc.ident(`${grammar.package}@${grammar.version}`), " (", doc.ident(grammar.module), ")"]
      : [say.languageGrammarToSpecify()]
    const files: Inline[] = Array.isArray(extensions) ? [say.languageFiles(), ...extensions.flatMap((x, i): Inline[] => [...(i ? [", "] : []), doc.ident(String(x))])] : []
    const tag = self.field("tag")
    const named: Inline[] = typeof tag === "string" ? [say.languageNamed2(), doc.ident(tag), say.languageInBodies()] : []
    const queries = queriesOf(self.field("queries")).map(([k, c]) => doc.details(`${k}: ${c.meaning}`, [doc.code("scheme", String(c.value).trim())]))
    // The escape sequences, as a reader decodes them (whatever the field holds: a value badly written is not shown).
    const decoding = escapesShown(self.field("escapes"))
    const r = self.result<Result[]>() ?? []
    const rows = examplesOf(self.field("examples")).map((x, i): Inline[][] => {
      const res = r[i]
      const expected = [
        x.literals && `literals ${show(x.literals)}`, x.roles && `roles ${show(x.roles)}`, x.values && `values ${show(x.values)}`,
        x.imports && `imports ${show(x.imports)}`, x.globals && `globals ${show(x.globals)}`, x.entry !== undefined && `entry ${x.entry}`,
        x.parameters && `parameters ${show(x.parameters)}`, x.outputs && `outputs ${show(x.outputs)}`,
      ].filter(Boolean).join(" · ")
      const verdict: Inline[] = !res ? [say.languageNotPlayed()] : res.held ? ["held"] : res.error ? ["fails: ", res.error] : ["reads ", doc.ident(show(res.found && stated(x, res.found)))]
      return [[doc.ident(x.code)], [expected], verdict]
    })
    return [
      doc.para(...head, ...files, ...named),
      ...queries,
      ...(decoding.length ? [doc.para(...decoding)] : []),
      ...(rows.length ? [doc.table([say.languageCode(), say.languageMustRead(), say.languageChecked()], rows)] : []),
    ]
  },

  summary(selves) {
    const all = selves.flatMap((s) => s.result<Result[]>() ?? [])
    if (!all.length) return undefined
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
