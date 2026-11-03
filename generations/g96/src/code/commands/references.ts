// A module of references: the packages of Trame a project uses, each a package node that says how it joins the graph,
// where it comes from and its version, written as a person would. trame init writes the first; an advance writes the
// example's language at each promotion.

import { AmendmentField, PackageField, EdgeName, type ProvidedBy } from "../../../trame/kernel"
import type { ConstDeclaration, Call, ExportDeclaration, DocBlock, ModuleTitle, NamedImport, ObjectLiteral, Property, StringLiteral, InlineArray, TypeScriptSyntax } from "../../typescript"
import type { Texts } from "#std/algebra"

/** A package referenced: the name of its node, its title and description, and its fields. */
export interface Reference {
  node: string
  doc: readonly string[]
  owner: string
  name: string
  version: string
  joins: string
  at?: string
}

export interface Deps {
  syntax: ProvidedBy<typeof TypeScriptSyntax>
  title: ProvidedBy<typeof ModuleTitle>
  doc: ProvidedBy<typeof DocBlock>
  exported: ProvidedBy<typeof ExportDeclaration>
  constant: ProvidedBy<typeof ConstDeclaration>
  call: ProvidedBy<typeof Call>
  object: ProvidedBy<typeof ObjectLiteral>
  property: ProvidedBy<typeof Property>
  text: ProvidedBy<typeof StringLiteral>
  list: ProvidedBy<typeof InlineArray>
  imports: ProvidedBy<typeof NamedImport>
  texts: ProvidedBy<typeof Texts>
}

const body = (deps: Deps) => ({
  /** The module's text: its title, the imports of the kind and of the goal served, then each reference. */
  module(title: string, kind: { from: string; facade: string }, refs: readonly Reference[], served?: { goal: string; from: string }): string {
    const { property, text, texts } = deps
    const declaration = (r: Reference) => [
      deps.doc(r.doc),
      deps.exported(deps.constant(r.node, deps.call(kind.facade, [deps.object([
        property(AmendmentField.owner, text(r.owner)), property(PackageField.name, text(r.name)), property(PackageField.version, text(r.version)),
        property(PackageField.joins, text(r.joins)),
        ...(r.at === undefined ? [] : [property(PackageField.at, text(r.at))]),
        ...(served === undefined ? [] : [property(EdgeName.serves, deps.list([served.goal]))]),
      ])]))),
      texts.empty,
    ]
    return [
      deps.title(title), texts.empty,
      deps.imports([kind.facade], kind.from), ...(served === undefined ? [] : [deps.imports([served.goal], served.from)]), texts.empty,
      ...refs.flatMap(declaration),
    ].join(deps.syntax.endOfLine)
  },
})

export type Api = ReturnType<typeof body>
export default body
