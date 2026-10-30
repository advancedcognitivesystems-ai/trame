import {
  defineKind, field, optional, edge, doc, isFileBody,
  type AnyNode, type Node, type Provides, type HasDeps, type Provided, type FileBody,
} from "../trame/kernel"
import words from "./words"

const say = words()

/** A message: what code says to a person, built from typed parameters. */
type Message = (...args: never[]) => string

/**
 * A message catalog: the text a part of the product says to people (in a terminal, in a document), written in one
 * language. Code holds no text: it receives its catalog as a dependency and calls its messages by name. The catalog
 * is a body that returns its messages; it may receive dependencies of its own (the dates of its language, say). Written
 * in a file, it can also be read by code that runs where nothing is wired (the page, in the browser).
 * The text written in it is what it declares: it is not left to specify.
 */
const kind = defineKind({
  name: "catalog",
  label: { one: say.catalogMessageCatalog(), many: say.catalogMessageCatalogs() },
  order: 150,
  declaresLiterals: true,
  renderOwns: ["messages"],
  fields: {
    owner: field.owner(),
    deps: optional(field.deps()),
    messages: field.body(),
  },
  edges: {
    language: edge.one(["decision"], { label: say.catalogWrittenIn(), inverse: say.catalogLanguageOf() }),
  },

  render(self) {
    const body = self.field("messages")
    if (isFileBody(body)) return [doc.para(say.catalogTheMessagesAreWrittenIn(), doc.ident(body.file), ".")]
    const source = self.decl && `${self.decl.file}:${self.decl.line}`
    const messages = self.decl?.props.messages
    return messages ? [doc.details(say.catalogTheMessagesInCode(), [doc.code("ts", messages, source)])] : []
  },
})

type Deps = Record<string, AnyNode>

interface CatalogInput<D extends Deps, M extends Record<string, Message>> {
  owner: string
  /** The language decision it is written in. */
  language: Node<"decision">
  deps?: D
  /** Its messages, by name: `({ dates }) => ({ written: (file: string) => \`written: ${file}\` })`, inline or `code.file(…)`. */
  messages: ((deps: Provided<D>) => M) | FileBody<(deps: Provided<D>) => M>
}

/** Declares a message catalog. Those who receive it get its messages, typed. */
export function catalog<M extends Record<string, Message>, D extends Deps = {}>(input: CatalogInput<D, M>): Node<"catalog"> & Provides<M> & HasDeps<D> {
  return kind(input as never) as never
}

export const catalogKind = kind
