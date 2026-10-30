import { defineKind, field, optional, doc, isHole, type Node, type Provides, type Inline, type Constant, type Values, type Declares } from "../trame/kernel"
import words from "./words"

const say = words()

const entries = (raw: unknown): [string, Constant][] =>
  raw !== null && typeof raw === "object" && !isHole(raw)
    ? Object.entries(raw as Record<string, unknown>).filter((e): e is [string, Constant] => typeof e[1] === "object" && e[1] !== null && "value" in e[1])
    : []

/**
 * A standard: a text published elsewhere (an RFC, a registry, an algorithm), whose constants the graph declares,
 * with their meaning. Nothing is decided there: the source is cited. Code receives the values through a dependency,
 * and the graph knows who uses which standard. The engine shows its constants, like those of any node.
 */
const kind = defineKind({
  name: "standard",
  label: { one: say.standardStandard(), many: say.standardStandards() },
  order: 35,
  main: "constants",
  renderOwns: ["source", "url"],
  fields: {
    owner: field.owner(say.patternMaintainedBy()),
    source: field.value<string>(say.patternSource()),
    url: optional(field.value<string>(say.patternAddress())),
    constants: field.constants(),
  },
  edges: {},

  /** Wired as a dependency: its values, by name. */
  provide: (self) => Object.fromEntries(entries(self.field("constants")).map(([k, c]) => [k, c.value])),

  render(self) {
    const url = self.field("url")
    const source = self.field("source")
    const head: Inline[] = [say.patternSource2(), typeof source === "string" ? source : "", ...(typeof url === "string" ? [" · ", doc.ident(url)] : [])]
    return [doc.para(...head)]
  },
})

interface StandardInput<C extends Record<string, Constant>> {
  owner: string
  source: string
  url?: string
  constants: C
}

/** `standard({ … constants: { notFound: { value: 404, meaning: "…" } } })`: code receives `{ notFound: 404 }`, typed down to the literal. */
export function standard<const C extends Record<string, Constant>>(input: StandardInput<C>): Node<"standard"> & Provides<Values<C>> & Declares<C> {
  return kind(input as never) as never
}

export const standardKind = kind
