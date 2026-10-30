// Le branchement : relier chaque nœud de code à ce dont il dépend, dans un environnement.
// Un plan d'abord (quoi construire, dans quel ordre, avec quoi), puis son exécution. Le même plan sert
// aux scénarios (exécution dans le processus) et à l'assemblage (écrit en dur dans un fichier).

import { dirname, resolve } from "node:path"
import { meta, refOf, isNode, isFileBody, type FileBody } from "./internal"
import type { AnyNode, View, WireContext } from "./kernel"
import type { GraphImpl } from "./graph"
import { driverFor } from "./drivers"

export interface WireHost {
  graph: GraphImpl
  root: string
  today: string
  /** Les nœuds dont le corps a été refusé à la vérification : ils ne sont jamais exécutés. */
  refused?: Set<AnyNode>
}

export interface Step {
  /** Le nom de la variable qui portera ce que le nœud donne. */
  name: string
  node: AnyNode
  /** « corps » : le corps appelé avec ses dépendances ; « valeur » : ce que le type donne (une décision, une règle). */
  how: "corps" | "valeur"
  deps: { param: string; name: string }[]
  /** Les accès traversés pour arriver à ce nœud (un accès délègue à son implémentation). */
  via: AnyNode[]
}

export interface Plan {
  steps: Step[]
  names: Map<AnyNode, string>
  errors: string[]
}

const fieldOf = (n: AnyNode, type: string, stage = "exécution") =>
  Object.entries(meta(n).def.fields).find(([, f]) => f.type === type && (f.stage ?? "exécution") === stage)?.[0]

/** Les dépendances nommées d'un nœud, pour une étape (exécution ou provisionnement). */
export function depsOf(n: AnyNode, stage = "exécution"): [string, AnyNode][] {
  const k = fieldOf(n, "deps", stage)
  const v = k ? meta(n).data[k] : undefined
  return v && typeof v === "object" ? Object.entries(v as Record<string, unknown>).filter((e): e is [string, AnyNode] => isNode(e[1])) : []
}

export function bodyOf(n: AnyNode, stage = "exécution"): unknown {
  const k = fieldOf(n, "body", stage)
  return k ? meta(n).data[k] : undefined
}

/** Le chemin absolu d'un corps écrit dans un fichier : relatif au module qui déclare le nœud. */
export function bodyPath(host: WireHost, n: AnyNode, body: FileBody): string {
  const decl = host.graph.view(n).decl
  return resolve(host.root, decl ? dirname(decl.file) : "src", body.file)
}

const varName = (n: AnyNode, taken: Set<string>) => {
  const id = meta(n).id ?? meta(n).def.name
  let name = id.charAt(0).toLowerCase() + id.slice(1)
  if (taken.has(name)) name = `${meta(n).module}_${name}`
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
      if (!session) throw new Error("branchement impossible hors d'une session")
      return session.wire(v.node)
    },
    wireDeps: async (v: View) => {
      if (!session) throw new Error("branchement impossible hors d'une session")
      return session.wireDeps(v.node)
    },
  }
}

/** Le plan de branchement de ces nœuds, dans cet environnement. Rien n'est exécuté. */
export function plan(host: WireHost, entries: AnyNode[], env: AnyNode | undefined, into?: Plan): Plan {
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
      p.errors.push(`Dépendance circulaire autour de « ${title(n)} »`)
      return undefined
    }
    visiting.add(n)
    try {
      if (host.refused?.has(n)) {
        p.errors.push(`« ${title(n)} » n'est pas exécuté : la vérification de son corps a échoué`)
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
          p.errors.push(`Aucune implémentation de « ${title(n)} »${env ? ` pour l'environnement « ${title(env)} »` : ""}`)
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
        p.steps.push({ name, node: n, how: "valeur", deps: [], via })
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
        p.steps.push({ name, node: n, how: "corps", deps, via })
        p.names.set(n, name)
        return name
      }
      p.errors.push(`« ${title(n)} » ne peut pas être branché : il ne donne rien et n'a pas de corps`)
      return undefined
    } finally {
      visiting.delete(n)
    }
  }
  for (const e of entries) visit(e, [])
  return p
}

/** Charge un corps : une fonction en ligne, ou un fichier par le driver de son langage. */
export async function loadBody(host: WireHost, n: AnyNode, stage = "exécution"): Promise<(deps: Record<string, unknown>) => unknown> {
  const body = bodyOf(n, stage)
  if (typeof body === "function") return body as (deps: Record<string, unknown>) => unknown
  if (isFileBody(body)) {
    const driver = driverFor(body.language)
    if (!driver?.load) throw new Error(`Aucun driver ne sait exécuter du ${body.language} (« ${host.graph.view(n).title} »)`)
    return (await driver.load(bodyPath(host, n, body))) as (deps: Record<string, unknown>) => unknown
  }
  throw new Error(`« ${host.graph.view(n).title} » n'a pas de corps`)
}

/** Une session de branchement : chaque nœud y est construit une seule fois. */
export class Session {
  readonly values = new Map<AnyNode, unknown>()
  readonly plan: Plan = { steps: [], names: new Map(), errors: [] }
  constructor(readonly host: WireHost, readonly env: AnyNode | undefined) {}

  async run(step: Step): Promise<unknown> {
    if (this.values.has(step.node)) return this.values.get(step.node)
    const def = meta(step.node).def
    const g = this.host.graph
    let value: unknown
    if (step.how === "valeur") {
      value = await def.provide!(g.self(step.node) as never, context(this.host, this.env, this))
    } else {
      const fn = await loadBody(this.host, step.node)
      const byName = new Map(this.plan.steps.map((s) => [s.name, s.node]))
      const args = Object.fromEntries(step.deps.map((d) => [d.param, this.values.get(byName.get(d.name)!)]))
      value = await fn(args)
    }
    this.values.set(step.node, value)
    return value
  }

  async wire(n: AnyNode): Promise<unknown> {
    const before = this.plan.steps.length
    plan(this.host, [n], this.env, this.plan)
    if (this.plan.errors.length) throw new Error(this.plan.errors.join(" ; "))
    for (const step of this.plan.steps.slice(before)) await this.run(step)
    return this.values.get(this.target(n))
  }

  async wireDeps(n: AnyNode): Promise<Record<string, unknown>> {
    const out: Record<string, unknown> = {}
    for (const [param, target] of depsOf(n)) out[param] = await this.wire(target)
    return out
  }

  /** Le nœud réellement construit pour n (son implémentation, si n délègue). */
  target(n: AnyNode): AnyNode {
    const name = this.plan.names.get(n)
    return this.plan.steps.find((s) => s.name === name)?.node ?? n
  }
}

/** Brancher des dépendances nommées dans une session neuve (ce que fait un scénario). */
export async function wireDeps(host: WireHost, deps: { name: string; node: AnyNode }[], env: AnyNode | undefined): Promise<Record<string, unknown>> {
  const session = new Session(host, env)
  const out: Record<string, unknown> = {}
  for (const d of deps) out[d.name] = await session.wire(d.node)
  return out
}

export const refName = (n: AnyNode) => refOf(n)
