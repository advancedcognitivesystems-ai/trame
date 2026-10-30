// The laws of kinds: what every kind must respect, whether it comes from the project or from an LLM.
// Each kind is tried on nodes drawn at random (fixed seed: reproducible results).

import { AnyTarget, EdgeMode, FieldType, KindHook, Moment, ResolutionKind, Severity, Status, min, pct } from "../../../trame/kernel"
import type { ProvidedBy, AnyKind, AnyNode, FieldSpec, HoleSpec, Resolution } from "../../../trame/kernel"
import type { FileReading, Layout, Paths, Prelude } from "../../architecture"
import type { LawMessages } from "../../messages"
import type { Api as ProjectApi } from "./project"
import type { Api as GraphApi, Edge } from "./graph"
import type { Api as GeneratorApi } from "./generator"
import type { SampledValues } from "../../product"
import type { Iso8601, NodeEncodings } from "../../standards"
import type { Counts, Sequences, Texts } from "../../algebra"

export interface LawFailure {
  law: string
  count: number
  example: string
}

export interface KindReport {
  kind: AnyKind
  samples: number
  failures: LawFailure[]
}

export interface Deps {
  encodings: ProvidedBy<typeof NodeEncodings>
  layout: Layout
  samples: number
  claimSets: number
  generator: GeneratorApi
  /** The owners that the laws draw at random. */
  owners: string[]
  reading: FileReading
  paths: Paths
  project: ProjectApi
  graph: GraphApi
  prelude: Prelude
  messages: ProvidedBy<typeof LawMessages>
  sampled: ProvidedBy<typeof SampledValues>
  iso: ProvidedBy<typeof Iso8601>
  counts: ProvidedBy<typeof Counts>
  sequences: ProvidedBy<typeof Sequences>
  texts: ProvidedBy<typeof Texts>
}

const body = (deps: Deps) => {
  const { encodings } = deps
  const { one, several } = deps.counts
  const { head, take, times } = deps.sequences
  const { without } = deps.texts
  const { sampled, iso } = deps
  const { readdirSync, readFileSync, existsSync } = deps.reading
  const { join, relative } = deps.paths
  const { projectDirs } = deps.project
  const { emptyGraph, makeGraph } = deps.graph
  const { kinds, sandbox, instantiate, ownerOf, meta, isNode, Hole, Contested, RESERVED, HOLE } = deps.prelude.internal
  const { messages } = deps

  const LAWS = {
    declared: messages.lawDeclared(),
    total: messages.lawTotal(),
    owner: messages.lawOwner(),
    unknown: messages.lawUnknown(),
    deterministic: messages.lawDeterministic(),
    orderFree: messages.lawOrderFree(),
    closed: messages.lawClosed(),
  } as const

  const SAMPLES = deps.samples
  const RESOLVE_ROUNDS = deps.claimSets

  const { prng, integer } = deps.generator

  function sampleField(f: FieldSpec, rnd: () => number): unknown {
    const int = (lo: number, hi: number) => integer(rnd, lo, hi)
    const [low, high] = sampled.numbers
    /** A number of the decided range. */
    const number = () => int(low, high)
    const pad = (n: number) => String(n).padStart(2, "0")
    switch (f.type) {
      case FieldType.person: return deps.owners[Math.floor(rnd() * deps.owners.length)]
      case FieldType.text: return "text"
      case FieldType.date: return `2026-${pad(int(iso.firstMonth, iso.lastMonth))}-${pad(int(iso.firstDay, iso.shortestMonth))}`
      case FieldType.number: return int(f.min ?? low, f.max ?? high)
      case FieldType.duration: return min(int(...sampled.minutes))
      case FieldType.percent: return pct(number())
      case FieldType.chf: return number()
      case FieldType.range: { const lo = int(...sampled.rangeStart); return [lo, lo + int(...sampled.rangeWidth)] }
      case FieldType.map: return { x: "y" }
      case FieldType.value: {
        const r = rnd()
        return r < 0.4 ? number() : r < 0.8 ? { a: number(), b: rnd() < 0.5 ? HOLE : number() } : HOLE
      }
      case FieldType.fn: return f.sample ? f.sample() : () => undefined
      case FieldType.patch: return rnd() < 0.2 ? {} : { value: rnd() < 0.5 ? number() : { a: number() } }
      case FieldType.deps: return {}
      case FieldType.body: return () => () => undefined
      case FieldType.constants: return { c: { value: number(), meaning: String(number()) } }
    }
  }

  function sampleInput(def: AnyKind, rnd: () => number): Record<string, unknown> {
    const input: Record<string, unknown> = {}
    const neverUndecided: FieldSpec["type"][] = [FieldType.fn, FieldType.patch, FieldType.deps, FieldType.body, FieldType.constants]
    for (const [k, f] of Object.entries(def.fields)) {
      if (f.optional && rnd() < 0.3) continue
      input[k] = !neverUndecided.includes(f.type) && !f.owner && rnd() < 0.15 ? HOLE : sampleField(f, rnd)
    }
    for (const [k, e] of Object.entries(def.edges)) {
      if (e.mode === EdgeMode.many) {
        input[k] = []
        continue
      }
      // `*`: any kind; one is drawn at random.
      const pool = e.targets.includes(AnyTarget) ? kinds : kinds.filter((x) => e.targets.includes(x.name))
      const target = pool[Math.floor(rnd() * pool.length)]
      if (target) input[k] = instantiate(target, {})
    }
    return input
  }

  /** Laws 6 and 7, for a kind that knows how to settle: claims drawn at random, presented in several orders. */
  function checkResolve(def: AnyKind, today: string, fail: (law: string, example: string) => void) {
    const rnd = prng(def.name + ":resolve")
    const targetKind = kinds.find((k) => k !== def && Object.values(k.fields).some((f) => f.type === FieldType.value)) ?? def
    const fields = targetKind.fields
    const key = Object.keys(fields).find((k) => fields[k].type === FieldType.value) ?? head(Object.keys(fields)) ?? "value"
    const paths = [key, `${key}.a`, `${key}.b`]

    times(RESOLVE_ROUNDS, () => {
      sandbox(() => {
        const target = instantiate(targetKind, sampleInput(targetKind, rnd))
        Object.assign(meta(target), { id: "Target", module: "law" })
        const claimants = times(sampled.claimantsPerSet, (j) => {
          const c = instantiate(def, sampleInput(def, rnd))
          Object.assign(meta(c), { id: `Trial${j}`, module: "law" })
          return c
        })
        // Edges between claimants (for instance "replaces"): towards an earlier trial only, hence without a cycle.
        const edges: Edge[] = []
        claimants.forEach((c, j) => {
          for (const [k, e] of Object.entries(def.edges)) {
            if (e.mode !== EdgeMode.many || !e.targets.includes(def.name)) continue
            const linked = take(claimants, j).filter(() => rnd() < 0.4)
            meta(c).data[k] = linked
            for (const t of linked) edges.push({ from: c, to: t, name: k, label: e.label, inverse: e.inverse, inferred: false, derived: false, active: true })
          }
        })
        const raw = claimants.flatMap((c) =>
          Array.from({ length: integer(rnd, ...sampled.claimsPerClaimant) }, () => ({ by: c, path: paths[Math.floor(rnd() * paths.length)], value: Math.floor(rnd() * 100) })))
        const g = makeGraph({
          moment: Moment.frozen, today, nodes: [target, ...claimants], edges, infos: new Map(), inactive: new Set(),
          claimed: new Map([[target, raw.map((c) => c.path)]]),
        })
        const tv = g.view(target)
        const orders = [raw, [...raw].reverse(), ...times(sampled.shuffledOrders, () => [...raw].sort(() => rnd() - 0.5))]
        const answers = orders.map((list) => {
          try {
            const r = def.resolve!(tv, list.map((c) => ({ by: g.view(c.by), target: tv, path: c.path, value: c.value })), g)
            return { r }
          } catch (e) {
            if (e instanceof Hole) return { blocked: true }
            if (e instanceof Contested) fail(LAWS.total, messages.resolveReadsContested())
            else fail(LAWS.total, messages.methodThrows(KindHook.resolve, (e as Error).message))
            return { failed: true }
          }
        })
        const norm = (a: { r?: Resolution; blocked?: boolean; failed?: boolean }) => {
          if (!a.r) return JSON.stringify(a)
          const r = a.r
          return JSON.stringify(r.kind === ResolutionKind.apply
            ? { kind: r.kind, order: r.order.map((v) => v.ref), replaced: (r.replaced ?? []).map(([x, y]) => `${x.ref}>${y.ref}`).sort() }
            : { kind: r.kind, arbiter: r.arbiter })
        }
        if (several(new Set(answers.map(norm)))) fail(LAWS.orderFree, messages.orderChangesAnswer())
        for (const a of answers) {
          if (a.r?.kind !== ResolutionKind.apply) continue
          const given = new Set<AnyNode>(raw.map((c) => c.by))
          const out = [...a.r.order, ...(a.r.replaced ?? []).flat()].filter((v) => !given.has(v.node))
          const outsider = head(out)
          if (outsider) fail(LAWS.closed, messages.resolveReturnsNonClaimant(outsider.ref))
        }
      })
    })
  }

  function checkKinds(today: string): KindReport[] {
    return kinds.map((def) => {
      const failures = new Map<string, LawFailure>()
      const fail = (law: string, example: string) => {
        const cur = failures.get(law)
        if (cur) cur.count++
        else failures.set(law, { law, count: one, example })
      }

      if (!def.label?.one || !def.label?.many) fail(LAWS.declared, messages.missingLabel())
      for (const k of [...Object.keys(def.fields), ...Object.keys(def.edges)]) {
        if (RESERVED.has(k)) fail(LAWS.declared, messages.reservedName(k))
      }
      for (const [k, e] of Object.entries(def.edges)) {
        for (const t of e.targets) {
          if (t !== AnyTarget && !kinds.some((x) => x.name === t)) fail(LAWS.declared, messages.unknownEdgeTarget(k, t))
        }
      }
      if (several(Object.values(def.fields).filter((f) => f.owner))) fail(LAWS.declared, messages.severalOwnerFields())
      if (def.resolve && !def.claims) fail(LAWS.declared, messages.resolveWithoutClaims())

      const rnd = prng(def.name)
      sandbox(() => {
        times(SAMPLES, () => {
          const n = instantiate(def, sampleInput(def, rnd))
          const frozen = emptyGraph(today, Moment.frozen, [n])
          // Two consolidated graphs: one without any evidence (neither measure nor evaluation), the other after evaluation.
          const bare = emptyGraph(today, Moment.consolidated, [n])
          const evaluated = emptyGraph(today, Moment.consolidated, [n])
          const run = <T>(name: string, f: () => T): T | undefined => {
            try {
              return f()
            } catch (e) {
              if (e instanceof Hole) return undefined // reading an undecided value blocks, it does not crash
              fail(LAWS.total, messages.methodThrows(name, (e as Error).message))
              return undefined
            }
          }
          run(KindHook.evaluate, () => {
            const r = def.evaluate?.(evaluated.self(n) as never, evaluated)
            // An asynchronous evaluation (a scenario) is not played by the laws: it has no wiring here.
            if (r instanceof Promise) r.catch(() => {})
            else evaluated.state.results!.set(n, r)
          })
          const once = (g: typeof bare) => ({
            active: run(KindHook.activeAt, () => def.activeAt?.(frozen.self(n) as never, frozen)),
            claims: run(KindHook.claims, () => def.claims?.(frozen.self(n) as never, frozen)?.map((c) => [c.target?.ref, c.path])),
            holes: run(KindHook.holes, () => def.holes?.(g.self(n) as never, g)),
            status: run(KindHook.status, () => def.status?.(g.self(n) as never, g)),
            render: run(KindHook.render, () => def.render?.(g.self(n) as never, g)),
          })
          for (const g of [bare, evaluated]) {
            const a = once(g)
            const b = once(g)
            if (JSON.stringify(a) !== JSON.stringify(b)) fail(LAWS.deterministic, messages.twoCallsTwoAnswers())
            for (const x of (a.holes ?? []).filter((y): y is HoleSpec => !!y)) {
              if (x.severity === Severity.blocking && !(x.owner ?? ownerOf(n))) fail(LAWS.owner, messages.noOwner(x.what))
            }
            if (g === bare && (a.status === Status.held || a.status === Status.violated)) {
              fail(LAWS.unknown, messages.statusWithoutEvidence(a.status))
            }
          }
          for (const c of def.claims?.(frozen.self(n) as never, frozen) ?? []) {
            if (c.target && !isNode(c.target.node)) fail(LAWS.declared, messages.claimNotOnNode())
          }
        })
      })
      if (def.resolve) checkResolve(def, today, fail)
      return { kind: def, samples: SAMPLES, failures: [...failures.values()] }
    })
  }

  /** Kinds, views and the graph read the kernel only through its public API. */
  function checkImports(root: string): string[] {
    const out: string[] = []
    const scan = (dir: string, rel: string) => {
      if (!existsSync(dir)) return
      for (const e of readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
        if (e.isDirectory()) scan(join(dir, e.name), `${rel}/${e.name}`)
        else if (e.name.endsWith(".ts")) {
          const text = readFileSync(join(dir, e.name), encodings.utf8)
          for (const m of text.matchAll(/(?:from\s+|import\s*\(\s*)["'](?<written>[^"']+)["']/g)) {
            const written = m.groups!.written
            const spec = without(written, /\.(ts|js)$/)
            if (spec.includes("/trame/") && !spec.endsWith("/trame/kernel")) {
              out.push(messages.privateImport(`${rel}/${e.name}`, written))
            }
          }
        }
      }
    }
    const dirs = projectDirs(root)
    for (const dir of [...dirs.kinds, ...dirs.views, join(root, deps.layout.sources)]) scan(dir, relative(root, dir) || ".")
    return out
  }

  return { LAWS, checkKinds, checkImports }
}

export type Api = ReturnType<typeof body>
export default body
