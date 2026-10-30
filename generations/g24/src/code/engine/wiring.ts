// The wiring: connecting each code node to what it depends on, in an environment.
// A plan first (what to build, in which order, with what), then its execution. The same plan serves
// the scenarios (run in the process) and the assembly (written into a file).

import type { Layout, Paths, Prelude } from "../../architecture"
import type { FileBody } from "#trame/internal"
import { FieldType, Stage, WireMode, isConstant } from "../../../trame/kernel"
import type { AnyNode, ProvidedBy, View, WireContext } from "../../../trame/kernel"
import type { CompilerMessages } from "../../messages"
import type { Sequences, Texts, ValueTypes } from "../../algebra"
import type { GraphImpl } from "./graph"
import type { Api as DriversApi } from "../languages/drivers"
import type { StepNames } from "../../conventions"

export interface WireHost {
  graph: GraphImpl
  root: string
  today: string
  /** The nodes whose body was refused when checked: they are never run. */
  refused?: Set<AnyNode>
}

export interface Step {
  /** The name of the variable that will hold what the node gives. */
  name: string
  node: AnyNode
  /** body: the body called with its dependencies; value: what the kind gives (a decision, a rule). */
  how: WireMode
  deps: { param: string; name: string }[]
  /** The constants the node declares: its body receives them as parameters, next to its dependencies. */
  constants: Record<string, string | number>
  /** The ports crossed to reach this node (a port delegates to its implementation). */
  via: AnyNode[]
}

export interface Plan {
  steps: Step[]
  names: Map<AnyNode, string>
  errors: string[]
}

export interface Deps {
  steps: ProvidedBy<typeof StepNames>
  values: ProvidedBy<typeof ValueTypes>
  layout: Layout
  paths: Paths
  prelude: Prelude
  drivers: DriversApi
  sequences: ProvidedBy<typeof Sequences>
  texts: ProvidedBy<typeof Texts>
  messages: ProvidedBy<typeof CompilerMessages>
}

const body = (deps: Deps) => {
  const { steps } = deps
  const { values } = deps
  const { dirname, resolve } = deps.paths
  const { meta, refOf, isNode, isFileBody } = deps.prelude.internal
  const { driverFor } = deps.drivers
  const { messages } = deps
  const { head, rest } = deps.sequences
  const { optional } = deps.texts

  const fieldOf = (n: AnyNode, type: FieldType, stage: Stage = Stage.execution) => {
    const fields = meta(n).def.fields
    return Object.keys(fields).find((k) => fields[k].type === type && (fields[k].stage ?? Stage.execution) === stage)
  }

  /** The named dependencies of a node, for a stage (execution or provisioning). */
  function depsOf(n: AnyNode, stage: Stage = Stage.execution): [string, AnyNode][] {
    const k = fieldOf(n, FieldType.deps, stage)
    const v = k ? meta(n).data[k] : undefined
    return v && values.isObject(v) ? Object.entries(v as Record<string, unknown>).flatMap(([name, x]): [string, AnyNode][] => (isNode(x) ? [[name, x]] : [])) : []
  }

  /** The values of the constants a node declares, by name. */
  function constantsOf(n: AnyNode): Record<string, string | number> {
    const k = fieldOf(n, FieldType.constants)
    const v = k ? meta(n).data[k] : undefined
    if (!v || !values.isObject(v)) return {}
    const out: Record<string, string | number> = {}
    for (const [name, c] of Object.entries(v as Record<string, unknown>)) {
      if (!isConstant(c)) continue
      // A constant that refines another one takes its value from it.
      const { value, refines } = c as { value: string | number; refines?: { node: AnyNode; name: string } }
      out[name] = refines ? constantsOf(refines.node)[refines.name] ?? value : value
    }
    return out
  }

  function bodyOf(n: AnyNode, stage: Stage = Stage.execution): unknown {
    const k = fieldOf(n, FieldType.body, stage)
    return k ? meta(n).data[k] : undefined
  }

  /** The absolute path of a body written in a file: relative to the module that declares the node. */
  function bodyPath(host: WireHost, n: AnyNode, body: FileBody): string {
    const decl = host.graph.view(n).decl
    return resolve(host.root, decl ? dirname(decl.file) : deps.layout.sources, body.file)
  }

  const varName = (n: AnyNode, taken: Set<string>) => {
    const id = meta(n).id ?? meta(n).def.name
    // The name of a parameter: the identifier, its first letter in lower case.
    let name = optional(head(id)).toLowerCase() + rest(id)
    if (taken.has(name)) name = meta(n).module + steps.joint + name
    taken.add(name)
    return name
  }

  function context(host: WireHost, env: AnyNode | undefined, session?: Session): WireContext {
    const g = host.graph
    return {
      env: env ? g.view(env) : undefined,
      date: host.today,
      g,
      wire: async (v: View) => {
        if (!session) throw new Error(messages.wiringOutsideSession())
        return session.wire(v.node)
      },
      wireDeps: async (v: View) => {
        if (!session) throw new Error(messages.wiringOutsideSession())
        return session.wireDeps(v.node)
      },
    }
  }

  /** The wiring plan of these nodes, in this environment. Nothing is run. */
  function plan(host: WireHost, entries: AnyNode[], env: AnyNode | undefined, into?: Plan): Plan {
    const p: Plan = into ?? { steps: [], names: new Map(), errors: [] }
    const taken = new Set(p.steps.map((s) => s.name))
    const g = host.graph
    const ctx = context(host, env)
    const title = (n: AnyNode) => g.view(n).title
    const visiting = new Set<AnyNode>()

    const visit = (n: AnyNode, via: AnyNode[]): string | undefined => {
      if (p.names.has(n)) return p.names.get(n)
      const def = meta(n).def
      if (visiting.has(n)) {
        p.errors.push(messages.circularDependency(title(n)))
        return undefined
      }
      visiting.add(n)
      try {
        if (host.refused?.has(n)) {
          p.errors.push(messages.bodyRefused(title(n)))
          return undefined
        }
        if (def.delegate) {
          let d: View | undefined
          try {
            d = def.delegate(g.self(n) as never, ctx)
          } catch (e) {
            p.errors.push((e as Error).message)
            return undefined
          }
          if (!d) {
            p.errors.push(messages.noImplementation(title(n), env ? title(env) : undefined))
            return undefined
          }
          const name = visit(d.node, [])
          if (name) {
            p.names.set(n, name)
            const step = p.steps.find((s) => s.name === name)
            if (step && !step.via.includes(n)) step.via.push(n)
          }
          return name
        }
        if (def.provide) {
          const name = varName(n, taken)
          p.steps.push({ name, node: n, how: WireMode.value, deps: [], constants: {}, via })
          p.names.set(n, name)
          return name
        }
        if (bodyOf(n) !== undefined) {
          const deps: Step["deps"] = []
          for (const [param, target] of depsOf(n)) {
            const name = visit(target, [])
            if (name) deps.push({ param, name })
          }
          const name = varName(n, taken)
          p.steps.push({ name, node: n, how: WireMode.body, deps, constants: constantsOf(n), via })
          p.names.set(n, name)
          return name
        }
        p.errors.push(messages.cannotBeWired(title(n)))
        return undefined
      } finally {
        visiting.delete(n)
      }
    }
    for (const e of entries) visit(e, [])
    return p
  }

  /** Loads a body: an inline function, or a file through the driver of its language. */
  async function loadBody(host: WireHost, n: AnyNode, stage: Stage = Stage.execution): Promise<(deps: Record<string, unknown>) => unknown> {
    const body = bodyOf(n, stage)
    if (values.isFunction(body)) return body as (deps: Record<string, unknown>) => unknown
    if (isFileBody(body)) {
      const driver = driverFor(body.language)
      if (!driver?.load) throw new Error(messages.noDriverToRun(body.language, host.graph.view(n).title))
      return (await driver.load(bodyPath(host, n, body))) as (deps: Record<string, unknown>) => unknown
    }
    throw new Error(messages.noBody(host.graph.view(n).title))
  }

  /** A wiring session: each node is built only once in it. */
  class Session {
    readonly values = new Map<AnyNode, unknown>()
    readonly plan: Plan = { steps: [], names: new Map(), errors: [] }
    constructor(readonly host: WireHost, readonly env: AnyNode | undefined) {}

    async run(step: Step): Promise<unknown> {
      if (this.values.has(step.node)) return this.values.get(step.node)
      const def = meta(step.node).def
      const g = this.host.graph
      let value: unknown
      if (step.how === WireMode.value) {
        value = await def.provide!(g.self(step.node) as never, context(this.host, this.env, this))
      } else {
        const fn = await loadBody(this.host, step.node)
        const byName = new Map(this.plan.steps.map((s) => [s.name, s.node]))
        const args = { ...step.constants, ...Object.fromEntries(step.deps.map((d) => [d.param, this.values.get(byName.get(d.name)!)])) }
        value = await fn(args)
      }
      this.values.set(step.node, value)
      return value
    }

    async wire(n: AnyNode): Promise<unknown> {
      const before = this.plan.steps.length
      plan(this.host, [n], this.env, this.plan)
      if (this.plan.errors.length) throw new Error(messages.wiringErrors(this.plan.errors))
      for (const step of this.plan.steps.slice(before)) await this.run(step)
      return this.values.get(this.target(n))
    }

    async wireDeps(n: AnyNode): Promise<Record<string, unknown>> {
      const out: Record<string, unknown> = {}
      for (const [param, target] of depsOf(n)) out[param] = await this.wire(target)
      return out
    }

    /** The node actually built for n (its implementation, if n delegates). */
    target(n: AnyNode): AnyNode {
      const name = this.plan.names.get(n)
      return this.plan.steps.find((s) => s.name === name)?.node ?? n
    }
  }

  /** Wires named dependencies in a fresh session (what a scenario does). */
  async function wireDeps(host: WireHost, deps: { name: string; node: AnyNode }[], env: AnyNode | undefined): Promise<Record<string, unknown>> {
    const session = new Session(host, env)
    const out: Record<string, unknown> = {}
    for (const d of deps) out[d.name] = await session.wire(d.node)
    return out
  }

  const refName = (n: AnyNode) => refOf(n)

  return { depsOf, constantsOf, bodyOf, bodyPath, plan, loadBody, Session, wireDeps, refName }
}

export type Api = ReturnType<typeof body>
export default body
