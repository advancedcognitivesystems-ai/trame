// The assembly: a component, an environment, a wiring plan written into a program.
// The driver of the component's language writes the program; the driver of each provisioning writes the infrastructure.
// Nothing is decided when the program starts: neither which implementation, nor in which order. The values of the
// graph (decisions, rules) are read at the date of the assembly and written into the program: it is frozen.

import type { Layout, Paths, Prelude } from "../../architecture"
import type { Api as WiringApi } from "./wiring"
import type { Plan, WireHost } from "./wiring"
import type { Api as DriversApi } from "../languages/drivers"
import type { Compiled } from "./compiler"
import { Direction, EdgeName, FieldType, KindName, Stage, WireMode } from "../../../trame/kernel"
import type { AnyNode, ProvidedBy, WireContext } from "../../../trame/kernel"
import type { CompilerMessages } from "../../messages"
import type { Texts, ValueTypes } from "../../algebra"
import type { TrameCommands } from "../../conventions"

export interface Provision {
  node: AnyNode
  language: string
  /** The absolute path of the module. */
  module: string
  variables: { name: string; from: AnyNode; value: unknown }[]
}

export interface Assembly {
  host: WireHost
  component: AnyNode
  env: AnyNode
  entries: AnyNode[]
  plan: Plan
  provisions: Provision[]
  /** The output directory, absolute: out/<environment>. */
  out: string
  /** The command line that writes this program again. */
  command: string
  /**
   * For each node that gives a value: the value written as JSON at the date of the assembly, or "declaration" when it
   * cannot be written as JSON (a rule) and is read from the node's declaration.
   */
  frozenValues: Map<AnyNode, { json: string; declaration?: undefined } | { json?: undefined; declaration: true }>
  /**
   * What the "declaration" values read (a rule reads other nodes by their name): the data in force of these nodes,
   * frozen too, so that the rule reads them as they are at the date of the assembly. JSON, by node.
   */
  frozenData: Map<AnyNode, string>
  /** The dated changes of the graph after the assembly, which a frozen program will not see. */
  changes?: string[]
  /** Where the body of each built node is: a file (absolute path), or inline in its declaration. */
  bodies: Map<AnyNode, { file: string; inline?: undefined } | { file?: undefined; inline: true }>
  /** The module of the prelude (the tooling of frozen programs), absolute path without extension. */
  prelude: string
  /** The dependencies of the component, by parameter name. */
  componentDeps: { param: string; node: AnyNode }[]
  /** The simple (JSON) fields of each entry point, which the kind of the component reads when it starts. */
  entryFields: Map<AnyNode, Record<string, unknown>>
}

export interface Emitted {
  path: string
  content: string
  /** The values written in it, in the order of the text: read back by the reader of its language, they must come back. */
  values?: readonly unknown[]
}

export interface Deps {
  line: ProvidedBy<typeof TrameCommands>
  values: ProvidedBy<typeof ValueTypes>
  layout: Layout
  paths: Paths
  wiring: WiringApi
  prelude: Prelude
  drivers: DriversApi
  messages: ProvidedBy<typeof CompilerMessages>
  texts: ProvidedBy<typeof Texts>
}

const body = (deps: Deps) => {
  const { line } = deps
  const { values } = deps
  const { optional } = deps.texts
  const { join } = deps.paths
  const { plan, depsOf, bodyOf, bodyPath } = deps.wiring
  const { meta, refOf, isFileBody, isNode } = deps.prelude.internal
  const { driverFor } = deps.drivers
  const { messages } = deps

  const kebab = (s: string) => deps.texts.lowerWords(s, deps.layout.wordJoint)

  /**
   * Data that JSON writes and reads back unchanged, at every depth: no function, no undefined, no NaN or infinity, no
   * node, no instance of a class (a date, a map). Anything else is read from its declaration by the program instead:
   * written as JSON, a function inside an object would simply disappear.
   */
  const isJsonData = (v: unknown): boolean => {
    if (v === null || values.isText(v) || values.isBoolean(v)) return true
    if (values.isNumber(v)) return Number.isFinite(v)
    if (Array.isArray(v)) return Array.from(v).every(isJsonData)
    if (!values.isObject(v) || isNode(v)) return false
    const proto = Object.getPrototypeOf(v)
    return (proto === Object.prototype || proto === null) && Object.values(v).every(isJsonData)
  }

  function findNode(c: Compiled, ref: string, kind?: string): AnyNode | undefined {
    return c.nodes.find((n) => (refOf(n) === ref || meta(n).id === ref) && (!kind || meta(n).def.name === kind))
  }

  function prepareAssembly(
    c: Compiled, root: string, componentRef: string, envRef: string, opts: { changes?: string[] } = {},
  ): { assembly?: Assembly; errors: string[] } {
    const component = findNode(c, componentRef, KindName.component)
    const env = findNode(c, envRef, KindName.environment)
    if (!component) return { errors: [messages.unknownComponent(componentRef)] }
    if (!env) return { errors: [messages.unknownEnvironment(envRef)] }
    const g = c.graph
    const host: WireHost = { graph: g, root, today: c.today }
    const entries = g.from(component).in(EdgeName.partOf).where((v) => v.kind === KindName.entry).nodes().map((v) => v.node)
    const needed = [...depsOf(component).map(([, n]) => n), ...entries]
    const p = plan(host, needed, env)
    if (p.errors.length) return { errors: p.errors }
    // What a value is read with at the date of the assembly: nothing is wired.
    const ctx: WireContext = { env: g.view(env), date: c.today, g, wire: () => Promise.reject(), wireDeps: () => Promise.reject() }

    const errors: string[] = []
    const provisions: Provision[] = []
    for (const step of p.steps) {
      const provision = bodyOf(step.node, Stage.provisioning)
      if (!isFileBody(provision)) continue
      const variables = depsOf(step.node, Stage.provisioning).map(([name, from]) => {
        const def = meta(from).def
        if (!def.provide) {
          errors.push(messages.variableNeedsValue(g.view(step.node).title, name, g.view(from).title))
          return { name, from, value: undefined }
        }
        try {
          const value = def.provide(g.self(from) as never, ctx)
          return { name, from, value }
        } catch (e) {
          errors.push(messages.variableWithoutValue(g.view(step.node).title, name, (e as Error).message))
          return { name, from, value: undefined }
        }
      })
      provisions.push({ node: step.node, language: provision.language, module: bodyPath(host, step.node, provision), variables })
    }
    // Each value is read now. An amended value that cannot be written as JSON cannot be frozen.
    const frozenValues: Assembly["frozenValues"] = new Map()
    for (const step of p.steps.filter((s) => s.how === WireMode.value)) {
      const v = g.view(step.node)
      try {
        const value = meta(step.node).def.provide!(g.self(step.node) as never, ctx)
        if (isJsonData(value)) frozenValues.set(step.node, { json: JSON.stringify(value) })
        else if (v.amendedBy.length) errors.push(messages.amendedNotJson(v.title))
        else frozenValues.set(step.node, { declaration: true })
      } catch (e) {
        errors.push(messages.nothingToFreeze(v.title, (e as Error).message))
      }
    }
    const frozenData: Assembly["frozenData"] = new Map()
    const hasNode = (v: unknown): boolean =>
      isNode(v) || (Array.isArray(v) ? v.some(hasNode) : v !== null && values.isObject(v) ? Object.values(v).some(hasNode) : false)
    // What a rule reads by name: the fields that are plain data are written as they are in force; the others (a
    // function, a node) are read from the declaration, which is right only if no amendment changed them at this date.
    const visit = (n: AnyNode) => {
      for (const e of g.edges(g.view(n), Direction.out)) {
        if (e.name !== EdgeName.uses || frozenData.has(e.other.node)) continue
        const read = g.view(e.other.node)
        const entries = Object.entries(meta(e.other.node).data).filter(([, v]) => !hasNode(v))
        for (const [k] of entries.filter(([, v]) => !isJsonData(v))) if (read.amendedBy.length) errors.push(messages.amendedFieldNotJson(read.title, k))
        frozenData.set(e.other.node, JSON.stringify(Object.fromEntries(entries.filter(([, v]) => isJsonData(v)))))
        visit(e.other.node)
      }
    }
    for (const [n, f] of frozenValues) if (f.declaration) visit(n)
    if (errors.length) return { errors }
    const bodies: Assembly["bodies"] = new Map()
    for (const step of p.steps.filter((s) => s.how === WireMode.body)) {
      const b = bodyOf(step.node)
      bodies.set(step.node, isFileBody(b) ? { file: bodyPath(host, step.node, b) } : { inline: true })
    }
    const entryFields: Assembly["entryFields"] = new Map()
    for (const e of entries) {
      const { def, data } = meta(e)
      const fields: Record<string, unknown> = {}
      for (const [k, f] of Object.entries(def.fields)) {
        if (f.type !== FieldType.value || data[k] === undefined) continue
        const json = JSON.stringify(data[k])
        if (json !== undefined) fields[k] = JSON.parse(json)
      }
      entryFields.set(e, fields)
    }
    const assembly: Assembly = {
      host, component, env, entries, plan: p, provisions, frozenValues, frozenData, changes: opts.changes, bodies, entryFields,
      prelude: deps.prelude.path,
      componentDeps: depsOf(component).map(([param, node]) => ({ param, node })),
      out: join(root, deps.layout.output, kebab(meta(env).id ?? KindName.environment)),
      command: [line.program, line.assemble, meta(component).id, line.env, meta(env).id].join(line.separator),
    }
    return { assembly, errors }
  }

  /** Writes the program and the infrastructure of a component for an environment. */
  function emitAssembly(a: Assembly): { files: Emitted[]; errors: string[] } {
    // The language of the program: the kind of the component says it.
    const lang = optional(meta(a.component).def.language?.(a.host.graph.self(a.component) as never))
    const program = driverFor(lang)
    if (!program?.emitProgram) return { files: [], errors: [messages.noDriverToAssemble(lang)] }
    const files: Emitted[] = []
    try {
      files.push(...program.emitProgram(a, kebab(meta(a.component).id ?? KindName.component)))
    } catch (e) {
      return { files: [], errors: [(e as Error).message] }
    }
    const byLanguage = new Map<string, Provision[]>()
    for (const p of a.provisions) byLanguage.set(p.language, [...(byLanguage.get(p.language) ?? []), p])
    const errors: string[] = []
    for (const [language, items] of byLanguage) {
      const d = driverFor(language)
      if (!d?.emitProvision) errors.push(messages.noDriverToProvision(language))
      else files.push(...d.emitProvision(a, items))
    }
    return { files, errors }
  }

  return { findNode, prepareAssembly, emitAssembly }
}

export type Api = ReturnType<typeof body>
export default body
