// The releases of the engine: read back from graph.json, and written as the module that declares them, in TypeScript,
// with the syntax elements of the module typescript. trame advance writes the module at each promotion. Pure.

import type { ProvidedBy } from "../../../trame/kernel"
import type * as ts from "../../typescript"
import type { Releases } from "../../generations"
import type { ReferenceSyntax } from "../../conventions"
import type { GnuPositions } from "../../standards"
import type { AdvanceMessages } from "../../messages"
import type { Texts, ValueTypes } from "../../algebra"

/** A release, as the module declares it. */
export interface ReleaseRecord {
  /** The name of its declaration. */
  id: string
  title: string
  version: string
  date: string
  what: string
  fingerprint: string
  language: string
  archive?: string
  differences?: string
  /** The name of the release that assembled it. */
  assembledBy?: string
}

/** What the module needs of graph.json: the nodes with their fields, and the edges. */
export interface GraphRecords {
  nodes: { id: string; kind: string; title: string; source?: string; fields?: Record<string, unknown> }[]
  edges: { from: string; to: string; kind: string }[]
}

export interface Deps {
  releases: ProvidedBy<typeof Releases>
  syntax: ProvidedBy<typeof ts.TypeScriptSyntax>
  references: ProvidedBy<typeof ReferenceSyntax>
  /** Where a node is declared: its file, then its line. */
  positions: ProvidedBy<typeof GnuPositions>
  doc: ProvidedBy<typeof ts.DocBlock>
  comment: ProvidedBy<typeof ts.LineComment>
  imports: ProvidedBy<typeof ts.NamedImport>
  exported: ProvidedBy<typeof ts.ExportDeclaration>
  constant: ProvidedBy<typeof ts.ConstDeclaration>
  call: ProvidedBy<typeof ts.Call>
  object: ProvidedBy<typeof ts.ObjectBlock>
  property: ProvidedBy<typeof ts.Property>
  text: ProvidedBy<typeof ts.StringLiteral>
  texts: ProvidedBy<typeof Texts>
  values: ProvidedBy<typeof ValueTypes>
  messages: ProvidedBy<typeof AdvanceMessages>
}

const body = (deps: Deps) => {
  const { releases, doc, comment, imports, exported, constant, call, object, property, text, messages } = deps
  const { endOfLine } = deps.syntax
  const { separator } = deps.references
  const { empty, optional } = deps.texts
  /** The name of a node in its module: what follows the separator of its reference. */
  const nameOf = (ref: string) => ref.slice(ref.lastIndexOf(separator) + separator.length)
  const said = (x: unknown) => (deps.values.isText(x) && x !== empty ? x : undefined)

  /** The line a node is declared at, read from its position ("src/releases.ts:14"). */
  const lineOf = (source: string | undefined) => Number(optional(source).slice(optional(source).lastIndexOf(deps.positions.separator) + deps.positions.separator.length))

  /** The releases of a graph, in the order of their declarations (graph.json sorts its nodes by name). */
  function read(graph: GraphRecords): ReleaseRecord[] {
    const assembledBy = new Map(graph.edges.filter((e) => e.kind === releases.assembledBy).map((e) => [e.from, nameOf(e.to)]))
    const declared = graph.nodes.filter((n) => n.kind === releases.kind).sort((a, b) => lineOf(a.source) - lineOf(b.source))
    return declared.map((n) => {
      const f = n.fields ?? {}
      return {
        id: nameOf(n.id), title: n.title, version: String(f.version), date: String(f.date), what: String(f.what),
        fingerprint: String(f.fingerprint), language: String(f.language), archive: said(f.archive), differences: said(f.differences),
        assembledBy: assembledBy.get(n.id),
      }
    })
  }

  /** The module that declares the releases of a component: its title, why it is written, its imports, one declaration each. */
  function module(records: ReleaseRecord[], component: { name: string; from: string }, kind: string): string {
    const declaration = (r: ReleaseRecord) => {
      const fields: Record<string, string | undefined> = {
        owner: text(releases.owner), component: component.name, version: text(r.version), date: text(r.date), what: text(r.what),
        fingerprint: text(r.fingerprint), language: text(r.language),
        archive: r.archive && text(r.archive), differences: r.differences && text(r.differences), assembledBy: r.assembledBy,
      }
      const properties = Object.entries(fields).flatMap(([k, v]) => (v === undefined ? [] : [property(k, v)]))
      return [doc([r.title]), exported(constant(r.id, call(releases.kind, [object(properties)]))), empty]
    }
    return [
      doc([messages.releasesTitle()]),
      empty,
      ...messages.releasesHeader().split(endOfLine).map(comment),
      empty,
      imports([releases.kind], kind),
      imports([component.name], component.from),
      empty,
      ...records.flatMap(declaration),
    ].join(endOfLine)
  }

  return { read, module }
}

export type Api = ReturnType<typeof body>
export default body
