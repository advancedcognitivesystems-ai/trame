import { defineKind, field, doc, isHole, keysOf, KindName, type Lib, type Node, type Provides, type ProvidedBy } from "../trame/kernel"
import words from "./words"

const say = words()

/** The words of a vocabulary and their meanings, whatever the field holds: a value badly written gives none. */
const entries = (raw: unknown, { values }: Lib): [string, string][] =>
  values.isObject(raw) && !isHole(raw)
    ? Object.entries(raw as Record<string, unknown>).filter((e): e is [string, string] => values.isText(e[1]))
    : []

const fields = {
  owner: field.owner(),
  words: field.value<Record<string, string>>(say.vocabularyWords()),
}
const F = keysOf(fields)

/**
 * A vocabulary: a closed set of words, each with its meaning (effects, severities…). The type of its words is
 * their union: a literal that belongs to it is declared; an unknown word is a type error.
 */
const kind = defineKind({
  name: KindName.vocabulary,
  label: { one: say.vocabularyVocabulary(), many: say.vocabularyVocabularies() },
  main: F.words,
  renderOwns: [F.words],
  fields,
  edges: {},

  /** Wired as a dependency: the list of its words. */
  provide: (self, ctx) => entries(self.field(F.words), ctx.g.lib).map(([k]) => k),

  render: (self, g) => [doc.table([say.vocabularyWord(), say.syntaxMeaning()], entries(self.field(F.words), g.lib).map(([k, meaning]) => [[doc.ident(k)], [meaning]]))],
})

/** The names of a vocabulary's fields: the kinds and views that read one name them by these. */
export const vocabularyFields = F

/** The words of a vocabulary, as a type: `type Effect = WordOf<typeof Effects>`. */
export type WordOf<N> = ProvidedBy<N> extends readonly (infer W)[] ? W : never

export function vocabulary<const W extends Record<string, string>>(input: { owner: string; words: W }): Node<"vocabulary"> & Provides<readonly (keyof W & string)[]> {
  return kind(input as never) as never
}

export const vocabularyKind = kind
