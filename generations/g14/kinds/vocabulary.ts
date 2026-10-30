import { defineKind, field, doc, isHole, type Node, type Provides, type ProvidedBy } from "../trame/kernel"
import words from "./words"

const say = words()

const entries = (raw: unknown): [string, string][] =>
  raw !== null && typeof raw === "object" && !isHole(raw)
    ? Object.entries(raw as Record<string, unknown>).filter((e): e is [string, string] => typeof e[1] === "string")
    : []

/**
 * A vocabulary: a closed set of words, each with its meaning (effects, severities…). The type of its words is
 * their union: a literal that belongs to it is declared; an unknown word is a type error.
 */
const kind = defineKind({
  name: "vocabulary",
  label: { one: say.vocabularyVocabulary(), many: say.vocabularyVocabularies() },
  order: 36,
  main: "words",
  renderOwns: ["words"],
  fields: {
    owner: field.owner(),
    words: field.value<Record<string, string>>(say.vocabularyWords()),
  },
  edges: {},

  /** Wired as a dependency: the list of its words. */
  provide: (self) => entries(self.field("words")).map(([k]) => k),

  render: (self) => [doc.table([say.vocabularyWord(), say.syntaxMeaning()], entries(self.field("words")).map(([k, meaning]) => [[doc.ident(k)], [meaning]]))],
})

/** The words of a vocabulary, as a type: `type Effect = WordOf<typeof Effects>`. */
export type WordOf<N> = ProvidedBy<N> extends readonly (infer W)[] ? W : never

export function vocabulary<const W extends Record<string, string>>(input: { owner: string; words: W }): Node<"vocabulary"> & Provides<readonly (keyof W & string)[]> {
  return kind(input as never) as never
}

export const vocabularyKind = kind
