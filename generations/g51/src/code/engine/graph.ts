// The traversal API: the only way to read the graph.
// The kernel builds a Graph at each moment of the compilation (frozen, then consolidated)
// and passes it to the functions of the kinds. Every read goes through a view, and can be recorded.

import type { Prelude } from "../../architecture"
import type { Hole } from "#trame/internal"
import { Direction, EdgeMode, Moment, Stage, Status } from "../../../trame/kernel"
import type { AnyNode, View, Q, Graph, EdgeInfo, StaticInfo, Evidence, SelfOf, Fields, Edges, ProvidedBy, WireMode, Lib, Noun } from "../../../trame/kernel"
import type { CompilerMessages, Dates, Lists } from "../../messages"
import type { Layout } from "../../architecture"
import type { ReferenceSyntax } from "../../conventions"
import type { Counts, Sequences, Texts, ValueTypes } from "../../algebra"
import type { Punctuation, LanguageSettings } from "../../documents"
import type { StructureDraws } from "../../product"
import type { Iso8601, TextFile } from "../../standards"
import type { Api as GeneratorApi } from "./generator"
import type { References } from "../../engine"
import type { VersionOrder } from "../../packages"
import type { Units, VisibleText } from "../../documents"

export interface Edge {
  from: AnyNode
  to: AnyNode
  name: string
  label: string
  inverse: string
  /** Inferred from the code (a reference), not declared. */
  inferred: boolean
  /** Computed by the kernel (two claims that overlap). */
  derived: boolean
  /** False for an edge that leaves a node not in force. */
  active: boolean
  /** For a named dependency: the name of the parameter, and what it serves (execution or provisioning). */
  param?: string
  stage?: Stage
}

export interface GraphState {
  moment: Moment
  today: string
  nodes: AnyNode[]
  edges: Edge[]
  infos: Map<AnyNode, StaticInfo>
  inactive: Set<AnyNode>
  /** Frozen graph: the claimed paths, hence being resolved. */
  claimed?: Map<AnyNode, string[]>
  results?: Map<AnyNode, unknown>
  evidence?: Map<string, Evidence[]>
  /** The versions of the packages installed in the project, by name (its lockfile). */
  installed?: Map<string, string>
  onBlocked?: (hole: Hole, what: Noun, of: View) => void
  onStatusError?: (n: AnyNode, e: Error) => void
  /** Consolidated graph: the effects of each node (its own and those of its dependencies). */
  effects?: Map<AnyNode, string[]>
  /** Consolidated graph: wires dependencies in an environment. */
  wire?: (deps: { name: string; node: AnyNode }[], env: AnyNode | undefined) => Promise<Record<string, unknown>>
  plan?: (entries: AnyNode[], env: AnyNode | undefined) => { steps: { name: string; node: AnyNode; how: WireMode; deps: { param: string; name: string }[]; via: AnyNode[] }[]; errors: string[] }
}

export type AnySelf = SelfOf<Fields, Edges>

export interface Tracked<T> {
  value?: T
  error?: unknown
  reads: Set<AnyNode>
}

/** What the kernel sees in addition to the public API. */
export interface GraphImpl extends Graph {
  readonly state: GraphState
  self(n: AnyNode): AnySelf
  status(n: AnyNode): Status | undefined
  /** Runs `fn` and records each node it reads. */
  track<T>(fn: () => T): Tracked<T>
}

export interface Deps {
  prelude: Prelude
  syntax: ProvidedBy<typeof ReferenceSyntax>
  counts: ProvidedBy<typeof Counts>
  sequences: ProvidedBy<typeof Sequences>
  texts: ProvidedBy<typeof Texts>
  messages: ProvidedBy<typeof CompilerMessages>
  // What the graph gives the kinds and the views.
  values: ProvidedBy<typeof ValueTypes>
  lists: ProvidedBy<typeof Lists>
  punctuation: ProvidedBy<typeof Punctuation>
  positions: { reference(file: string, line: number): string }
  references: ProvidedBy<typeof References>
  iso: ProvidedBy<typeof Iso8601>
  dates: ProvidedBy<typeof Dates>
  file: ProvidedBy<typeof TextFile>
  settings: ProvidedBy<typeof LanguageSettings>
  generator: GeneratorApi
  structureDraws: ProvidedBy<typeof StructureDraws>
  layout: Layout
  typescript: { tag: string }
  versions: ProvidedBy<typeof VersionOrder>
  units: ProvidedBy<typeof Units>
  visible: ProvidedBy<typeof VisibleText>
}

const body = (deps: Deps) => {
  const { meta, isNode, refOf, ownerOf, guard, getPath, overlaps, Hole, Contested, RESERVED } = deps.prelude.internal
  const { messages } = deps
  const { wholeNode } = deps.syntax
  const { any } = deps.counts
  const { head } = deps.sequences
  const { optional } = deps.texts

  const toNode = (x: View | AnyNode): AnyNode => (isNode(x) ? x : (x as View).node)

  /** What every graph gives the kinds and the views: the graph's structures, lists, punctuation and settings. */
  const calendarDate = new RegExp(deps.iso.calendarDate)
  const lib: Lib = {
    values: deps.values,
    counts: deps.counts,
    sequences: deps.sequences,
    texts: deps.texts,
    lists: deps.lists,
    punctuation: deps.punctuation,
    positions: deps.positions,
    references: deps.references,
    dates: { isCalendarDate: (text) => calendarDate.test(text), format: deps.dates.format },
    file: deps.file,
    settings: deps.settings,
    draws: { generator: deps.generator.prng, integer: deps.generator.integer, structures: deps.structureDraws },
    layout: deps.layout,
    declarations: { language: deps.typescript.tag },
    versions: { compare: deps.versions.compare, below: deps.versions.below },
    units: deps.units,
    shown: deps.visible,
  }

  function makeGraph(st: GraphState): GraphImpl {
    const frozen = st.moment === Moment.frozen
    let reads: Set<AnyNode> | undefined
    const touch = (n: AnyNode) => reads?.add(n)

    const ownerKey = (n: AnyNode) => {
      const fields = meta(n).def.fields
      return Object.keys(fields).find((k) => fields[k].owner)
    }
    const checkClaimed = (n: AnyNode, path: string) => {
      if (frozen && st.claimed?.get(n)?.some((p) => overlaps(p, path))) throw new Contested(n, path)
    }

    // Views ----------------------------------------------------------------------

    const views = new Map<AnyNode, View>()
    const view = (n: AnyNode): View => {
      const cached = views.get(n)
      if (cached) return cached
      const m = meta(n)
      const t = () => touch(n)
      const v: View = {
        get node() { t(); return n },
        get ref() { t(); return refOf(n) },
        get id() { t(); return optional(m.id) },
        get kind() { t(); return m.def.name },
        get module() { t(); return optional(m.module) },
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
            .map((e) => (touch(e.to), { name: e.param!, node: view(e.to), stage: e.stage ?? Stage.execution }))
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

    // What a kind sees of its own nodes: the view, plus its fields and its edges.
    const selves = new Map<AnyNode, AnySelf>()
    const self = (n: AnyNode): AnySelf => {
      const cached = selves.get(n)
      if (cached) return cached
      const m = meta(n)
      const s = Object.create(view(n)) as Record<string, unknown>
      for (const k of Object.keys(m.def.fields)) {
        if (RESERVED.has(k)) continue // refused by the laws
        Object.defineProperty(s, k, {
          get: () => {
            touch(n)
            checkClaimed(n, k)
            if (!frozen && m.repealedBy) throw new Hole(n, wholeNode)
            return guard(m.data[k], n, k)
          },
          enumerable: true,
        })
      }
      for (const [k, e] of Object.entries(m.def.edges)) {
        if (RESERVED.has(k) || Object.hasOwn(s, k)) continue // a field of the same name (the owner) comes first
        Object.defineProperty(s, k, {
          get: () => {
            touch(n)
            checkClaimed(n, k)
            const v = m.data[k]
            if (e.mode === EdgeMode.many) return (Array.isArray(v) ? v : []).filter(isNode).map(view)
            return isNode(v) ? view(v) : undefined
          },
          enumerable: true,
        })
      }
      Object.freeze(s)
      selves.set(n, s as unknown as AnySelf)
      return s as unknown as AnySelf
    }

    // Statuses -------------------------------------------------------------------

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
      if (computing.has(n)) return Status.unknown // circular dependency: we do not know
      computing.add(n)
      let s: Status | undefined
      try {
        s = m.def.status(self(n) as never, g)
      } catch (e) {
        if (e instanceof Hole) s = Status.blocked
        else {
          st.onStatusError?.(n, e as Error)
          s = Status.unknown
        }
      }
      computing.delete(n)
      memo.set(n, s)
      return s
    }

    // Queries --------------------------------------------------------------------

    const q = (list: AnyNode[]): Q => {
      const set = [...new Set(list)].sort((a, b) => refOf(a).localeCompare(refOf(b)))
      const has = new Set(set)
      const step = (dir: Direction, name?: string) =>
        q(st.edges
          .filter((e) => (name ? e.name === name : !e.derived) && has.has(dir === Direction.out ? e.from : e.to))
          .map((e) => (dir === Direction.out ? e.to : e.from)))
      return {
        out: (name) => step(Direction.out, name),
        in: (name) => step(Direction.in, name),
        closure: (name, dir = Direction.out) => {
          const seen = new Set<AnyNode>()
          let frontier = new Set(set)
          while (frontier.size) {
            const next = new Set<AnyNode>()
            for (const e of st.edges) {
              if (e.name !== name) continue
              const [a, b] = dir === Direction.out ? [e.from, e.to] : [e.to, e.from]
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
        first: () => {
          const n = head(set)
          if (n === undefined) return undefined
          touch(n)
          return view(n)
        },
        exists: () => (set.forEach(touch), any(set)),
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

    // The graph ------------------------------------------------------------------

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
          .filter((e) => (dir === Direction.out ? e.from : e.to) === n)
          .map((e) => {
            const other = dir === Direction.out ? e.to : e.from
            touch(other)
            return {
              name: e.name, label: e.label, inverse: e.inverse, other: view(other),
              inferred: e.inferred, derived: e.derived, active: e.active, param: e.param,
            }
          })
      },
      blocked: (hole, what, of) => st.onBlocked?.(hole, what, of),
      lib,
      installed: (pkg) => st.installed?.get(pkg),
      wire: (deps, env) => {
        if (!st.wire) return Promise.reject(new Error(messages.wiringNeedsConsolidatedGraph()))
        return st.wire(deps.map((d) => ({ name: d.name, node: d.node.node })), env?.node)
      },
      plan: (entries, env) => {
        if (!st.plan) return { steps: [], errors: [messages.planNeedsConsolidatedGraph()] }
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

  function emptyGraph(today: string, moment: Moment, nodes: AnyNode[] = []): GraphImpl {
    return makeGraph({
      moment, today, nodes, edges: [], infos: new Map(), inactive: new Set(), results: new Map(), evidence: new Map(),
    })
  }

  return { makeGraph, emptyGraph }
}

export type Api = ReturnType<typeof body>
export default body
