// L'API de parcours : la seule façon de lire le graphe.
// Le noyau construit un Graph à chaque moment de la compilation (figé, puis consolidé)
// et le passe aux fonctions des types. Chaque lecture passe par une vue, et peut être enregistrée.

import { meta, isNode, refOf, ownerOf, guard, getPath, overlaps, Hole, Contested, RESERVED } from "./internal"
import type {
  AnyNode, View, Q, Graph, EdgeInfo, StaticInfo, Evidence, Status, SelfOf, Fields, Edges,
} from "./kernel"

export interface Edge {
  from: AnyNode
  to: AnyNode
  name: string
  label: string
  inverse: string
  /** Déduite du code (une référence), pas déclarée. */
  inferred: boolean
  /** Calculée par le noyau (deux revendications qui se recoupent). */
  derived: boolean
  /** Faux pour une arête qui part d'un nœud pas en vigueur. */
  active: boolean
  /** Pour une dépendance nommée : le nom du paramètre, et ce qu'elle sert (exécution ou provisionnement). */
  param?: string
  stage?: string
}

export interface GraphState {
  moment: "figé" | "consolidé"
  today: string
  nodes: AnyNode[]
  edges: Edge[]
  infos: Map<AnyNode, StaticInfo>
  inactive: Set<AnyNode>
  /** Graphe figé : les chemins revendiqués, donc en cours de résolution. */
  claimed?: Map<AnyNode, string[]>
  results?: Map<AnyNode, unknown>
  evidence?: Map<string, Evidence[]>
  onBlocked?: (hole: Hole, what: string, of: View) => void
  onStatusError?: (n: AnyNode, e: Error) => void
  /** Graphe consolidé : les effets de chaque nœud (les siens et ceux de ses dépendances). */
  effects?: Map<AnyNode, string[]>
  /** Graphe consolidé : brancher des dépendances dans un environnement. */
  wire?: (deps: { name: string; node: AnyNode }[], env: AnyNode | undefined) => Promise<Record<string, unknown>>
  plan?: (entries: AnyNode[], env: AnyNode | undefined) => { steps: { name: string; node: AnyNode; how: "corps" | "valeur"; deps: { param: string; name: string }[]; via: AnyNode[] }[]; errors: string[] }
}

export type AnySelf = SelfOf<Fields, Edges>

export interface Tracked<T> {
  value?: T
  error?: unknown
  reads: Set<AnyNode>
}

/** Ce que le noyau voit en plus de l'API publique. */
export interface GraphImpl extends Graph {
  readonly state: GraphState
  self(n: AnyNode): AnySelf
  status(n: AnyNode): Status | undefined
  /** Exécute `fn` en enregistrant chaque nœud lu. */
  track<T>(fn: () => T): Tracked<T>
}

const toNode = (x: View | AnyNode): AnyNode => (isNode(x) ? x : (x as View).node)

export function makeGraph(st: GraphState): GraphImpl {
  const frozen = st.moment === "figé"
  let reads: Set<AnyNode> | undefined
  const touch = (n: AnyNode) => reads?.add(n)

  const ownerKey = (n: AnyNode) => Object.entries(meta(n).def.fields).find(([, f]) => f.owner)?.[0]
  const checkClaimed = (n: AnyNode, path: string) => {
    if (frozen && st.claimed?.get(n)?.some((p) => overlaps(p, path))) throw new Contested(n, path)
  }

  // Vues ----------------------------------------------------------------------

  const views = new Map<AnyNode, View>()
  const view = (n: AnyNode): View => {
    const cached = views.get(n)
    if (cached) return cached
    const m = meta(n)
    const t = () => touch(n)
    const v: View = {
      get node() { t(); return n },
      get ref() { t(); return refOf(n) },
      get id() { t(); return m.id ?? "" },
      get kind() { t(); return m.def.name },
      get module() { t(); return m.module ?? "" },
      get title() { t(); return st.infos.get(n)?.title ?? m.id ?? m.def.label.one },
      get owner() {
        t()
        const k = ownerKey(n)
        if (k) checkClaimed(n, k)
        return ownerOf(n)
      },
      get active() { t(); return !st.inactive.has(n) },
      get status() { t(); return status(n) },
      get decl() { t(); return st.infos.get(n) },
      get evidence() { t(); return st.evidence?.get(refOf(n)) ?? [] },
      get amendedBy() {
        t()
        return frozen ? [] : (m.amendedBy ?? []).map((a) => ({ by: view(a.by), paths: [...a.paths] }))
      },
      get repealedBy() { t(); return !frozen && m.repealedBy ? view(m.repealedBy) : undefined },
      get contested() { t(); return frozen ? [] : [...(m.contested ?? [])] },
      field(path: string) {
        t()
        checkClaimed(n, path)
        return getPath(m.data, path)
      },
      base(path: string) {
        t()
        return getPath(m.base ?? m.data, path)
      },
      fieldInfo(name: string) {
        const f = m.def.fields[name]
        return f ? { type: f.type, label: f.label, role: f.role, stage: f.stage } : undefined
      },
      get dependencies() {
        t()
        return st.edges
          .filter((e) => e.from === n && e.param !== undefined)
          .map((e) => (touch(e.to), { name: e.param!, node: view(e.to), stage: e.stage ?? "exécution" }))
      },
      get effects() { t(); return [...(st.effects?.get(n) ?? [])] },
      result<T>() {
        t()
        return st.results?.get(n) as T | undefined
      },
    }
    Object.freeze(v)
    views.set(n, v)
    return v
  }

  // Ce qu'un type voit de ses propres nœuds : la vue, plus ses champs et ses arêtes.
  const selves = new Map<AnyNode, AnySelf>()
  const self = (n: AnyNode): AnySelf => {
    const cached = selves.get(n)
    if (cached) return cached
    const m = meta(n)
    const s = Object.create(view(n)) as Record<string, unknown>
    for (const k of Object.keys(m.def.fields)) {
      if (RESERVED.has(k)) continue // refusé par les lois
      Object.defineProperty(s, k, {
        get: () => {
          touch(n)
          checkClaimed(n, k)
          if (!frozen && m.repealedBy) throw new Hole(n, "")
          return guard(m.data[k], n, k)
        },
        enumerable: true,
      })
    }
    for (const [k, e] of Object.entries(m.def.edges)) {
      if (RESERVED.has(k) || k === "owner") continue
      Object.defineProperty(s, k, {
        get: () => {
          touch(n)
          checkClaimed(n, k)
          const v = m.data[k]
          if (e.mode === "many") return (Array.isArray(v) ? v : []).filter(isNode).map(view)
          return isNode(v) ? view(v) : undefined
        },
        enumerable: true,
      })
    }
    Object.freeze(s)
    selves.set(n, s as unknown as AnySelf)
    return s as unknown as AnySelf
  }

  // Statuts --------------------------------------------------------------------

  const memo = new Map<AnyNode, Status | undefined>()
  const computing = new Set<AnyNode>()
  const status = (n: AnyNode): Status | undefined => {
    if (frozen) return undefined
    if (memo.has(n)) return memo.get(n)
    const m = meta(n)
    if (!m.def.status || m.repealedBy) {
      memo.set(n, undefined)
      return undefined
    }
    if (computing.has(n)) return "inconnu" // dépendance circulaire : on ne sait pas
    computing.add(n)
    let s: Status
    try {
      s = m.def.status(self(n) as never, g)
    } catch (e) {
      if (e instanceof Hole) s = "bloqué"
      else {
        st.onStatusError?.(n, e as Error)
        s = "inconnu"
      }
    }
    computing.delete(n)
    memo.set(n, s)
    return s
  }

  // Requêtes -------------------------------------------------------------------

  const q = (list: AnyNode[]): Q => {
    const set = [...new Set(list)].sort((a, b) => refOf(a).localeCompare(refOf(b)))
    const has = new Set(set)
    const step = (dir: "out" | "in", name?: string) =>
      q(st.edges
        .filter((e) => (name ? e.name === name : !e.derived) && has.has(dir === "out" ? e.from : e.to))
        .map((e) => (dir === "out" ? e.to : e.from)))
    return {
      out: (name) => step("out", name),
      in: (name) => step("in", name),
      closure: (name, dir = "out") => {
        const seen = new Set<AnyNode>()
        let frontier = new Set(set)
        while (frontier.size) {
          const next = new Set<AnyNode>()
          for (const e of st.edges) {
            if (e.name !== name) continue
            const [a, b] = dir === "out" ? [e.from, e.to] : [e.to, e.from]
            if (frontier.has(a) && !seen.has(b)) {
              seen.add(b)
              next.add(b)
            }
          }
          frontier = next
        }
        return q([...seen])
      },
      where: (test) => q(set.filter((n) => test(view(n)))),
      nodes: () => set.map((n) => (touch(n), view(n))),
      first: () => (set.length ? (touch(set[0]), view(set[0])) : undefined),
      exists: () => (set.forEach(touch), set.length > 0),
      count: () => (set.forEach(touch), set.length),
      path: (to, via) => {
        const goal = toNode(to)
        const prev = new Map<AnyNode, AnyNode | null>(set.map((n) => [n, null]))
        const queue = [...set]
        while (queue.length) {
          const n = queue.shift()!
          if (n === goal) {
            const out: AnyNode[] = []
            for (let c: AnyNode | null = n; c; c = prev.get(c) ?? null) out.unshift(c)
            return out.map((x) => (touch(x), view(x)))
          }
          for (const e of st.edges) {
            if (e.derived || (via && !via.includes(e.name))) continue
            const next = e.from === n ? e.to : e.to === n ? e.from : undefined
            if (next && !prev.has(next)) {
              prev.set(next, n)
              queue.push(next)
            }
          }
        }
        return undefined
      },
    }
  }

  // Le graphe ------------------------------------------------------------------

  const g: GraphImpl = {
    moment: st.moment,
    today: st.today,
    state: st,
    node: (ref) => q(st.nodes.filter((n) => refOf(n) === ref || meta(n).id === ref)),
    all: (kind) => q(kind ? st.nodes.filter((n) => meta(n).def.name === kind) : st.nodes),
    from: (start) => q([toNode(start)]),
    view,
    edges: (v, dir): EdgeInfo[] => {
      const n = v.node
      return st.edges
        .filter((e) => (dir === "out" ? e.from : e.to) === n)
        .map((e) => {
          const other = dir === "out" ? e.to : e.from
          touch(other)
          return {
            name: e.name, label: e.label, inverse: e.inverse, other: view(other),
            inferred: e.inferred, derived: e.derived, active: e.active, param: e.param,
          }
        })
    },
    blocked: (hole, what, of) => st.onBlocked?.(hole, what, of),
    wire: (deps, env) => {
      if (!st.wire) return Promise.reject(new Error("le branchement n'est possible que dans le graphe consolidé"))
      return st.wire(deps.map((d) => ({ name: d.name, node: d.node.node })), env?.node)
    },
    plan: (entries, env) => {
      if (!st.plan) return { steps: [], errors: ["le plan n'existe que dans le graphe consolidé"] }
      const p = st.plan(entries.map((v) => v.node), env?.node)
      const byName = new Map(p.steps.map((s) => [s.name, s.node]))
      return {
        steps: p.steps.map((s) => (touch(s.node), {
          node: view(s.node), how: s.how,
          deps: s.deps.map((d) => ({ param: d.param, node: view(byName.get(d.name)!) })),
          via: s.via.map((x) => view(x)),
        })),
        errors: [...p.errors],
      }
    },
    self,
    status,
    track<T>(fn: () => T): Tracked<T> {
      const outer = reads
      const mine = new Set<AnyNode>()
      reads = mine
      const out: Tracked<T> = { reads: mine }
      try {
        out.value = fn()
      } catch (e) {
        out.error = e
      } finally {
        reads = outer
        if (outer) for (const n of mine) outer.add(n)
      }
      return out
    },
  }
  return g
}

export function emptyGraph(today: string, moment: "figé" | "consolidé", nodes: AnyNode[] = []): GraphImpl {
  return makeGraph({
    moment, today, nodes, edges: [], infos: new Map(), inactive: new Set(), results: new Map(), evidence: new Map(),
  })
}
