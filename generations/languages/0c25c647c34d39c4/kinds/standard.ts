import { defineKind, field, optional, doc, isHole, isConstant, keysOf, KindName, type Node, type Provides, type Inline, type Constant, type Values, type Declares, type Lib, type View } from "../trame/kernel"
import words from "./words"

const say = words()

const entries = (raw: unknown, lib: Lib): [string, Constant][] =>
  lib.values.isObject(raw) && !isHole(raw) ? Object.entries(raw as Record<string, unknown>).flatMap(([k, v]): [string, Constant][] => (isConstant(v) ? [[k, v]] : [])) : []

/** Where a text published elsewhere is: what cites it, and its address. */
export const sourceFields = {
  source: field.value<string>(say.patternSource()),
  url: optional(field.value<string>(say.patternAddress())),
}
const S = keysOf(sourceFields)
/** The source a node cites, and its address. */
export const sourceShown = [S.source, S.url]

/** "Source: …, · address": the source a standard or a pattern cites, with its address. */
export function sourceOf(self: View, lib: Lib): Inline[] {
  const url = self.field(S.url)
  const source = self.field(S.source)
  return [say.patternSource2(), lib.values.isText(source) ? source : lib.texts.empty, ...(lib.values.isText(url) ? [lib.punctuation.parts, doc.ident(url)] : [])]
}

const fields = {
  owner: field.owner(say.patternMaintainedBy()),
  ...sourceFields,
  constants: field.constants(),
}
const F = keysOf(fields)

/**
 * A standard: a text published elsewhere (an RFC, a registry, an algorithm), whose constants the graph declares,
 * with their meaning. Nothing is decided there: the source is cited. Code receives the values through a dependency,
 * and the graph knows who uses which standard. The engine shows its constants, like those of any node.
 */
const kind = defineKind({
  name: KindName.standard,
  label: { one: say.standardStandard(), many: say.standardStandards() },
  main: F.constants,
  renderOwns: sourceShown,
  fields,
  edges: {},

  /** Wired as a dependency: its values, by name. */
  provide: (self, ctx) => Object.fromEntries(entries(self.field(F.constants), ctx.g.lib).map(([k, c]) => [k, c.value])),

  render: (self, g) => [doc.para(...sourceOf(self, g.lib))],
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
