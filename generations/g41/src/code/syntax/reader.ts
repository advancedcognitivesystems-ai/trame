// The syntax reader: a body read with the grammar and the queries of its language, through the SyntaxTrees port.
// It knows the captures (syntax.Captures), and nothing of any grammar: what is a literal, a name, an import, a global,
// where a role or an inline body is, the language's queries say it. It reads each file once, then within ranges.
// Places are offsets in the text (string indices, as tree-sitter gives them in JavaScript), and rows from tree-sitter.

import { LiteralKind } from "../../../trame/kernel"
import type { ProvidedBy } from "../../../trame/kernel"
import type { FileReading, SyntaxCapture, SyntaxPoint, SyntaxTrees } from "../../architecture"
import type { EcmaScript, GnuPositions, NodeEncodings, TextFile, TreeSitterApi } from "../../standards"
import type { BodySource, Captures, GlobalRead, ImportRead, LiteralCategories, LiteralDisplay, LiteralRead, LiteralRoles, Pattern, Reading } from "../../syntax"
import type { Counts, Sequences, Texts } from "../../algebra"
import type { Escapes, ExampleReading, LanguageDescription } from "../../../kinds/language"

export interface Deps {
  trees: SyntaxTrees
  captures: ProvidedBy<typeof Captures>
  roles: ProvidedBy<typeof LiteralRoles>
  categories: ProvidedBy<typeof LiteralCategories>
  display: ProvidedBy<typeof LiteralDisplay>
  treeSitter: ProvidedBy<typeof TreeSitterApi>
  gnu: ProvidedBy<typeof GnuPositions>
  ecma: ProvidedBy<typeof EcmaScript>
  textFile: ProvidedBy<typeof TextFile>
  encodings: ProvidedBy<typeof NodeEncodings>
  reading: FileReading
  counts: ProvidedBy<typeof Counts>
  sequences: ProvidedBy<typeof Sequences>
  texts: ProvidedBy<typeof Texts>
}

/** A stretch of text: from an offset, up to another (excluded). */
interface Range {
  start: number
  end: number
}

/** A text parsed once, and what its queries caught. */
interface Parsed {
  text: string
  lines: string[]
  /** The captures under each name, each node once, in the order of the text (the outer one first). */
  byName: Map<string, SyntaxCapture[]>
  /** The captures of each match. */
  byMatch: Map<number, SyntaxCapture[]>
  /** The matches in which a node was caught under a name. */
  matchesOf: Map<string, number[]>
  errors: SyntaxPoint[]
}

/** A piece of a text's value, at its place. */
interface Piece {
  at: number
  text: string
}

const body = (deps: Deps) => {
  const { trees, captures: names, roles, categories, display, treeSitter, gnu, ecma, textFile, encodings, reading } = deps
  const counts = deps.counts
  const { any } = counts
  const { head, take } = deps.sequences
  const { concat, optional, without, shorten, ellipsis } = deps.texts

  /** The kind of literal each capture stands for, in the order that settles two captures of one node. */
  const literalKinds = new Map<string, LiteralKind>([
    [names.literalKey, LiteralKind.key], [names.literalText, LiteralKind.text], [names.literalNumber, LiteralKind.number],
    [names.literalRegex, LiteralKind.regex], [names.literalTemplate, LiteralKind.template],
  ])
  const kindOrder = [...literalKinds.keys()]

  /** The labels of the roles, by name; their order settles two role captures of the same size. */
  const labels: Readonly<Record<string, ((callee?: string) => string) | undefined>> = roles
  const roleOrder = Object.keys(roles)

  const compile = (p: Pattern) => new RegExp(p.source, p.flags)
  const rules = Object.entries(categories).map(([category, rule]) => ({
    category, kinds: rule.kinds, text: (rule.text ?? []).map(compile), near: rule.near && compile(rule.near),
  }))
  /** The first category whose rule the literal meets (a number's text is its value). */
  const categoryOf = (kind: LiteralKind, text: string, near: string): string =>
    rules.find((r) => (!r.kinds || r.kinds.includes(kind)) && r.text.every((p) => p.test(text)) && (!r.near || r.near.test(near)))?.category ?? kind

  const rangeOf = (c: SyntaxCapture): Range => ({ start: c.start.offset, end: c.end.offset })
  const within = (inner: Range, outer: Range) => outer.start <= inner.start && inner.end <= outer.end
  const same = (a: Range, b: Range) => a.start === b.start && a.end === b.end
  const sizeOf = (r: Range) => r.end - r.start
  const idOf = (c: SyntaxCapture) => JSON.stringify([c.name, c.start.offset, c.end.offset])
  const whole = (text: string): Range => ({ start: ecma.firstIndex, end: text.length })
  /** The number a message gives to the line of this row. */
  const lineOf = (row: number) => row - treeSitter.firstRow + gnu.firstLine

  function parse(language: LanguageDescription, text: string): Parsed {
    const r = trees.read(language.grammar, text, Object.values(language.queries))
    const byName = new Map<string, SyntaxCapture[]>()
    const byMatch = new Map<number, SyntaxCapture[]>()
    const matchesOf = new Map<string, number[]>()
    for (const c of r.captures) {
      const inMatch = byMatch.get(c.match) ?? []
      inMatch.push(c)
      byMatch.set(c.match, inMatch)
      const id = idOf(c)
      const seen = matchesOf.get(id)
      if (seen) {
        seen.push(c.match)
        continue
      }
      matchesOf.set(id, [c.match])
      const named = byName.get(c.name) ?? []
      named.push(c)
      byName.set(c.name, named)
    }
    for (const cs of byName.values()) cs.sort((a, b) => a.start.offset - b.start.offset || b.end.offset - a.end.offset)
    return { text, lines: text.split(textFile.endOfLine), byName, byMatch, matchesOf, errors: r.errors }
  }

  /** The captures of a name, within a range. */
  const caught = (p: Parsed, name: string, r?: Range) => (p.byName.get(name) ?? []).filter((c) => !r || within(rangeOf(c), r))

  /** Another capture, under this name, in a match where this node was caught. */
  const besides = (p: Parsed, c: SyntaxCapture, name: string) =>
    (p.matchesOf.get(idOf(c)) ?? []).flatMap((m) => p.byMatch.get(m) ?? []).find((x) => x.name === name)

  /**
   * A text as the language's escapes read it: each escape sequence decoded (named, numeric, or standing for the
   * character it escapes), each literal sequence replaced. Used on an escape sequence caught alone, and on the fixed
   * parts of a text, which may hold sequences in the languages whose grammar does not catch them apart (HCL).
   */
  /** Is this character a digit of the radix? */
  const isDigit = (char: string, radix: number) => !Number.isNaN(parseInt(char, radix))
  /** How many digits of the radix a text starts with, up to a most. */
  const digitsAt = (text: string, radix: number, most: number) => {
    let n: number = counts.zero
    while (n < most && isDigit(text.charAt(ecma.firstIndex + n), radix)) n = counts.next(n)
    return n
  }

  function decode(escapes: Escapes, text: string): string {
    const out: string[] = []
    const literal = Object.entries(escapes.literal ?? {})
    let i: number = ecma.firstIndex
    while (i < text.length) {
      const rest = text.slice(i)
      const sequence = literal.find(([written]) => rest.startsWith(written))
      if (sequence) {
        const [written, stands] = sequence
        out.push(stands)
        i += written.length
        continue
      }
      if (!rest.startsWith(escapes.mark)) {
        out.push(text.charAt(i))
        i = counts.next(i)
        continue
      }
      const after = rest.slice(escapes.mark.length)
      const named = Object.keys(escapes.single).filter((k) => after.startsWith(k)).sort((a, b) => b.length - a.length)[ecma.firstIndex]
      // A numeric sequence: its prefix, then at least one digit of its radix.
      const numeric = escapes.numeric.find((n) => after.startsWith(n.prefix) && isDigit(after.charAt(n.prefix.length), n.radix))
      if (named !== undefined) {
        out.push(escapes.single[named])
        i += escapes.mark.length + named.length
      } else if (numeric) {
        const from = numeric.prefix.length
        const to = numeric.digits !== undefined ? from + numeric.digits
          : numeric.close ? after.indexOf(numeric.close, from)
            : numeric.most !== undefined ? from + digitsAt(after.slice(from), numeric.radix, numeric.most)
              : after.length
        out.push(String.fromCodePoint(parseInt(after.slice(from, to), numeric.radix)))
        const end = to + (numeric.close && numeric.digits === undefined ? numeric.close.length : counts.zero)
        const trailing = (numeric.trailing ?? []).find((t) => after.startsWith(t, end))
        i += escapes.mark.length + end + (trailing?.length ?? counts.zero)
      } else if (escapes.keepUnknown) {
        out.push(escapes.mark)
        i += escapes.mark.length
      } else {
        out.push(after.charAt(ecma.firstIndex))
        i += escapes.mark.length + counts.one
      }
    }
    return concat(out)
  }

  /** The line of a row, trimmed and shortened, as the catalogue shows it. */
  const contextOf = (p: Parsed, row: number) =>
    shorten(optional(p.lines[row - treeSitter.firstRow + ecma.firstIndex]).trim(), display.context)

  function readIn(language: LanguageDescription, p: Parsed, r: Range): Reading {
    const nameRanges = caught(p, names.name, r).map(rangeOf)
    const isNamed = (x: Range) => nameRanges.some((n) => within(x, n))
    const importCaptures = [names.importValue, names.importType, names.importComputed].flatMap((n) => caught(p, n, r))
    const importRanges = importCaptures.map(rangeOf)
    const substitutions = caught(p, names.literalSubstitution, r).map(rangeOf)
    const pieces = [names.literalPart, names.literalEscape].flatMap((n) => caught(p, n, r))
    const roleCaptures = [...p.byName].filter(([n]) => n.startsWith(names.rolePrefix)).flatMap(([, cs]) => cs)

    /** The substitutions of a literal that no other of its substitutions holds. */
    const ownSubstitutions = (l: Range) => {
      const inside = substitutions.filter((s) => within(s, l) && !same(s, l))
      return inside.filter((s) => !inside.some((o) => !same(o, s) && within(s, o)))
    }
    /** Its value: its parts as written, its escape sequences decoded, an ellipsis for each substitution. */
    const textOf = (l: Range, subs: Range[]) => {
      const mine = pieces.filter((c) => within(rangeOf(c), l) && !subs.some((s) => within(rangeOf(c), s)))
      const all: Piece[] = [
        ...mine.map((c) => ({ at: c.start.offset, text: decode(language.escapes, c.text) })),
        ...subs.map((s) => ({ at: s.start, text: ellipsis })),
      ]
      return concat(all.sort((a, b) => a.at - b.at).map((x) => x.text))
    }
    /** As written, each substitution shown as an ellipsis. */
    const shownOf = (l: SyntaxCapture, subs: Range[]) => {
      const out: string[] = []
      let from = l.start.offset
      for (const s of subs) {
        out.push(l.text.slice(from - l.start.offset, s.start - l.start.offset), ellipsis)
        from = s.end
      }
      out.push(l.text.slice(from - l.start.offset))
      return concat(out)
    }
    /**
     * The smallest role capture that holds the literal, without a substitution between them (what a template substitutes
     * has its own place); the first role between two of the same size.
     */
    const roleOf = (l: Range): string => {
      const across = (c: Range) => substitutions.some((s) => within(l, s) && within(s, c) && sizeOf(s) < sizeOf(c))
      const holding = roleCaptures.filter((c) => within(l, rangeOf(c)) && !across(rangeOf(c)))
      const rank = (c: SyntaxCapture) => roleOrder.indexOf(without(c.name, names.rolePrefix))
      const best = head(holding.sort((a, b) => sizeOf(rangeOf(a)) - sizeOf(rangeOf(b)) || rank(a) - rank(b)))
      if (!best) return roles.other()
      const label = labels[without(best.name, names.rolePrefix)] ?? roles.other
      return label(besides(p, best, names.callee)?.text)
    }

    // A literal: a literal capture that no name holds (a key excepted), that is not the module of an import, and that is
    // not part of another literal (outside that one's substitutions).
    const candidates = kindOrder.flatMap((n) => caught(p, n, r))
      .filter((c) => (c.name === names.literalKey || !isNamed(rangeOf(c))) && !importRanges.some((i) => same(i, rangeOf(c))))
      .sort((a, b) => a.start.offset - b.start.offset || b.end.offset - a.end.offset || kindOrder.indexOf(a.name) - kindOrder.indexOf(b.name))
    const partOfAnother = (x: SyntaxCapture, i: number) =>
      take(candidates, i).some((l) => within(rangeOf(x), rangeOf(l)) && !substitutions.some((s) => within(s, rangeOf(l)) && within(rangeOf(x), s)))
    const literals = candidates.filter((x, i) => !partOfAnother(x, i)).map((l): LiteralRead => {
      const subs = ownSubstitutions(rangeOf(l))
      const written = literalKinds.get(l.name) ?? LiteralKind.text
      const kind = written === LiteralKind.template && !any(subs) ? LiteralKind.text : written
      const number = Number(l.text)
      const raw = kind === LiteralKind.number ? (Number.isNaN(number) ? l.text : number) : kind === LiteralKind.regex ? l.text : textOf(rangeOf(l), subs)
      const context = contextOf(p, l.start.row)
      return {
        line: lineOf(l.start.row), value: shorten(shownOf(l, subs), display.value), kind,
        category: categoryOf(kind, String(raw), context), context, role: roleOf(rangeOf(l)), raw,
      }
    })

    const values = caught(p, names.importValue, r).filter((c) => !isNamed(rangeOf(c)))
    const typed = caught(p, names.importType, r).filter((c) => !isNamed(rangeOf(c)) && !values.some((v) => same(rangeOf(v), rangeOf(c))))
    const computed = caught(p, names.importComputed, r).filter((c) => !isNamed(rangeOf(c)))
    const imports = [
      ...values.map((c) => ({ c, typeOnly: false, computed: false })),
      ...typed.map((c) => ({ c, typeOnly: true, computed: false })),
      ...computed.map((c) => ({ c, typeOnly: false, computed: true })),
    ].sort((a, b) => a.c.start.offset - b.c.start.offset).map(({ c, typeOnly, computed }): ImportRead => ({
      module: computed ? c.text : textOf(rangeOf(c), []), typeOnly, computed, line: lineOf(c.start.row),
    }))

    const defined = new Set(caught(p, names.localDefinition, r).map((c) => c.text))
    const globals = caught(p, names.global, r).filter((c) => !isNamed(rangeOf(c)))
      .filter((c) => !defined.has(besides(p, c, names.globalName)?.text ?? c.text))
      .map((c): GlobalRead => ({ name: c.text, line: lineOf(c.start.row) }))

    const declared = (name: string) => caught(p, name, r).map((c) => ({ name: c.text, line: lineOf(c.start.row) }))
    return {
      literals, imports, globals,
      entry: any(caught(p, names.entry, r)),
      parameters: declared(names.parameter),
      outputs: declared(names.output),
      errors: p.errors.filter((e) => r.start <= e.offset && e.offset <= r.end)
        .map((e) => ({ line: lineOf(e.row), column: e.column - treeSitter.firstColumn + gnu.firstColumn })),
    }
  }

  /** In the declaration on this line, the value of the property named like the field: an inline body. */
  function inlineBody(p: Parsed, line: number, field: string): Range | undefined {
    const declaration = caught(p, names.declaration).find((d) => lineOf(d.start.row) === line)
    if (!declaration) return undefined
    const found = caught(p, names.body, rangeOf(declaration)).find((b) => besides(p, b, names.bodyName)?.text === field)
    return found && rangeOf(found)
  }

  const nothing = (): Reading => ({ literals: [], imports: [], globals: [], entry: false, parameters: [], outputs: [], errors: [] })

  /** The files already parsed, by language and path: parsed again only when their text changed. */
  const files = new Map<string, Parsed>()
  function parsedFile(language: LanguageDescription, file: string): Parsed {
    const text = reading.readFileSync(file, encodings.utf8)
    const id = JSON.stringify([language.name, file])
    const known = files.get(id)
    if (known?.text === text) return known
    const p = parse(language, text)
    files.set(id, p)
    return p
  }

  /** Reads a body: a file, or the inline body of a declaration. A file that is not there reads nothing. */
  function readSource(language: LanguageDescription, source: BodySource): Reading {
    if (!reading.existsSync(source.file)) return nothing()
    const p = parsedFile(language, source.file)
    const r = source.inline ? inlineBody(p, source.inline.line, source.inline.field) : whole(p.text)
    return r ? readIn(language, p, r) : nothing()
  }

  /** Reads a text: whole, or the inline body of the declaration on this line. */
  function read(language: LanguageDescription, text: string, inline?: { line: number; field: string }): Reading {
    const p = parse(language, text)
    const r = inline ? inlineBody(p, inline.line, inline.field) : whole(text)
    return r ? readIn(language, p, r) : nothing()
  }

  return {
    /** Loads the grammar of a language, once. */
    async load(language: LanguageDescription) {
      await trees.load(language.grammar)
    },

    read,

    readSource,

    /** The literals of these bodies, by key. Each file is parsed once, whatever the number of its bodies. */
    literals: (language: LanguageDescription, sources: readonly BodySource[]): Map<string, LiteralRead[]> =>
      new Map(sources.map((s) => [s.key, readSource(language, s).literals])),

    /** What the reader finds in an example of the language, as the language kind compares it. */
    example(language: LanguageDescription, code: string): ExampleReading {
      const r = read(language, code)
      return {
        literals: r.literals.map((l) => l.value),
        roles: r.literals.map((l) => l.role),
        values: r.literals.map((l) => l.raw),
        imports: r.imports.map(({ module, typeOnly }) => ({ module, typeOnly })),
        globals: r.globals.map((g) => g.name),
        entry: r.entry,
        parameters: r.parameters.map((x) => x.name),
        outputs: r.outputs.map((x) => x.name),
        errors: r.errors.length,
      }
    },
  }
}

export type Api = ReturnType<typeof body>
export default body
