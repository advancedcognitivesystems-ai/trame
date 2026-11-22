// The releases of the engine, or of a library: read back from graph.json, and written as the module that declares them,
// in TypeScript, with the syntax elements of the module typescript. trame advance writes the engine's at each promotion,
// trame release a library's at each version. Pure.

import { EdgeName, KindName, ReleaseEdge, type ProvidedBy } from "../../../trame/kernel"
import type * as ts from "../../typescript"
import type { Releases } from "../../generations"
import type { ReferenceSyntax } from "../../conventions"
import type { GnuPositions } from "#std/text"
import type { Texts, ValueTypes } from "#std/algebra"

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
  /** Who released it; by default, the owner the decision "Releases of the engine" names. */
  owner?: string
  /** The goals it serves, by name: those of a library, whose versions release no component. */
  serves?: string[]
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
  /** The title of the module, on one line: the title its documents take. */
  title: ProvidedBy<typeof ts.ModuleTitle>
  comment: ProvidedBy<typeof ts.LineComment>
  imports: ProvidedBy<typeof ts.NamedImport>
  exported: ProvidedBy<typeof ts.ExportDeclaration>
  constant: ProvidedBy<typeof ts.ConstDeclaration>
  call: ProvidedBy<typeof ts.Call>
  object: ProvidedBy<typeof ts.ObjectBlock>
  property: ProvidedBy<typeof ts.Property>
  text: ProvidedBy<typeof ts.StringLiteral>
  list: ProvidedBy<typeof ts.InlineArray>
  texts: ProvidedBy<typeof Texts>
  values: ProvidedBy<typeof ValueTypes>
}

const body = (deps: Deps) => {
  const { releases, doc, title, comment, imports, exported, constant, call, object, property, text, list } = deps
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
    const assembledBy = new Map(graph.edges.filter((e) => e.kind === ReleaseEdge.assembledBy).map((e) => [e.from, nameOf(e.to)]))
    const served = (id: string) => graph.edges.filter((e) => e.from === id && e.kind === EdgeName.serves).map((e) => nameOf(e.to))
    const declared = graph.nodes.filter((n) => n.kind === KindName.release).sort((a, b) => lineOf(a.source) - lineOf(b.source))
    return declared.map((n) => {
      const f = n.fields ?? {}
      return {
        id: nameOf(n.id), title: n.title, version: String(f.version), date: String(f.date), what: String(f.what),
        fingerprint: String(f.fingerprint), language: String(f.language), archive: said(f.archive), differences: said(f.differences),
        assembledBy: assembledBy.get(n.id), owner: said(f.owner),
        serves: served(n.id).length ? served(n.id) : undefined,
      }
    })
  }

  /**
   * The module that declares the releases of a component, or of a library (no component): its title, why it is written,
   * its imports, one declaration each.
   */
  function module(
    records: ReleaseRecord[], component: { name: string; from: string } | undefined, kind: string, heading: { title: string; header: string },
    others: { names: string[]; from: string }[] = [],
  ): string {
    const declaration = (r: ReleaseRecord) => {
      const fields: Record<string, string | undefined> = {
        owner: text(r.owner ?? releases.owner), [ReleaseEdge.component]: component?.name, version: text(r.version), date: text(r.date), what: text(r.what),
        fingerprint: text(r.fingerprint), language: text(r.language),
        archive: r.archive && text(r.archive), differences: r.differences && text(r.differences), [ReleaseEdge.assembledBy]: r.assembledBy,
        [EdgeName.serves]: r.serves && list(r.serves),
      }
      const properties = Object.entries(fields).flatMap(([k, v]) => (v === undefined ? [] : [property(k, v)]))
      return [doc([r.title]), exported(constant(r.id, call(releases.kind, [object(properties)]))), empty]
    }
    return [
      title(heading.title),
      empty,
      ...heading.header.split(endOfLine).map(comment),
      empty,
      imports([releases.kind], kind),
      ...(component ? [imports([component.name], component.from)] : []),
      ...others.map((o) => imports(o.names, o.from)),
      empty,
      ...records.flatMap(declaration),
    ].join(endOfLine)
  }

  return { read, module }
}

export type Api = ReturnType<typeof body>
export default body
