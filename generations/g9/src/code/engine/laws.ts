// The laws of kinds: what every kind must respect, whether it comes from the project or from an LLM.
// Each kind is tried on nodes drawn at random (fixed seed: reproducible results).

import { FieldType, Moment, Severity, Status } from "../../../trame/kernel"
import type { ProvidedBy, AnyKind, AnyNode, FieldSpec, HoleSpec, Resolution } from "../../../trame/kernel"
import type { FileReading, Layout, Paths, Prelude } from "../../architecture"
import type { LawMessages } from "../../messages"
import type { Api as ProjectApi } from "./project"
import type { Api as GraphApi, Edge } from "./graph"
import type { Api as GeneratorApi } from "./generator"

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
}

const body = (deps: Deps) => {
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

  const { prng } = deps.generator

  function sampleField(f: FieldSpec, rnd: () => number): unknown {
    const int = (lo: number, hi: number) => lo + Math.floor(rnd() * (hi - lo + 1))
    const pad = (n: number) => String(n).padStart(2, "0")
    switch (f.type) {
      case FieldType.person: return deps.owners[Math.floor(rnd() * deps.owners.length)]
      case FieldType.text: return "text"
      case FieldType.date: return `2026-${pad(int(1, 12))}-${pad(int(1, 28))}`
      case FieldType.number: return int(f.min ?? 0, f.max ?? 100)
      case FieldType.duration: return 60 * int(1, 120)
      case FieldType.percent: return int(0, 100) / 100
      case FieldType.chf: return int(0, 100)
      case FieldType.range: { const lo = int(0, 50); return [lo, lo + int(1, 50)] }
      case FieldType.map: return { x: "y" }
      case FieldType.value: {
        const r = rnd()
        return r < 0.4 ? int(0, 100) : r < 0.8 ? { a: int(0, 100), b: rnd() < 0.5 ? HOLE : int(0, 100) } : HOLE
      }
      case FieldType.fn: return f.sample ? f.sample() : () => undefined
      case FieldType.patch: return rnd() < 0.2 ? {} : { value: rnd() < 0.5 ? int(0, 100) : { a: int(0, 100) } }
      case FieldType.deps: return {}
      case FieldType.body: return () => () => undefined
      case FieldType.constants: return { c: { value: int(0, 100), meaning: String(int(0, 100)) } }
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
      if (e.mode === "many") {
        input[k] = []
        continue
      }
      // `*`: any kind; one is drawn at random.
      const pool = e.targets.includes("*") ? kinds : kinds.filter((x) => e.targets.includes(x.name))
      const target = pool[Math.floor(rnd() * pool.length)]
      if (target) input[k] = instantiate(target, {})
    }
    return input
  }

  /** Laws 6 and 7, for a kind that knows how to settle: claims drawn at random, presented in several orders. */
  function checkResolve(def: AnyKind, today: string, fail: (law: string, example: string) => void) {
    const rnd = prng(def.name + ":resolve")
    const targetKind = kinds.find((k) => k !== def && Object.values(k.fields).some((f) => f.type === FieldType.value)) ?? def
    const key = Object.entries(targetKind.fields).find(([, f]) => f.type === FieldType.value)?.[0] ?? Object.keys(targetKind.fields)[0] ?? "value"
    const paths = [key, `${key}.a`, `${key}.b`]

    for (let round = 0; round < RESOLVE_ROUNDS; round++) {
      sandbox(() => {
        const target = instantiate(targetKind, sampleInput(targetKind, rnd))
        Object.assign(meta(target), { id: "Target", module: "law" })
        const claimants = [0, 1, 2].map((j) => {
          const c = instantiate(def, sampleInput(def, rnd))
          Object.assign(meta(c), { id: `Trial${j}`, module: "law" })
          return c
        })
        // Edges between claimants (for instance "replaces"): towards an earlier trial only, hence without a cycle.
        const edges: Edge[] = []
        claimants.forEach((c, j) => {
          for (const [k, e] of Object.entries(def.edges)) {
            if (e.mode !== "many" || !e.targets.includes(def.name)) continue
            const linked = claimants.slice(0, j).filter(() => rnd() < 0.4)
            meta(c).data[k] = linked
            for (const t of linked) edges.push({ from: c, to: t, name: k, label: e.label, inverse: e.inverse, inferred: false, derived: false, active: true })
          }
        })
        const raw = claimants.flatMap((c) =>
          Array.from({ length: 1 + Math.floor(rnd() * 2) }, () => ({ by: c, path: paths[Math.floor(rnd() * paths.length)], value: Math.floor(rnd() * 100) })))
        const g = makeGraph({
          moment: Moment.frozen, today, nodes: [target, ...claimants], edges, infos: new Map(), inactive: new Set(),
          claimed: new Map([[target, raw.map((c) => c.path)]]),
        })
        const tv = g.view(target)
        const orders = [raw, [...raw].reverse(), ...[0, 1, 2].map(() => [...raw].sort(() => rnd() - 0.5))]
        const answers = orders.map((list) => {
          try {
            const r = def.resolve!(tv, list.map((c) => ({ by: g.view(c.by), target: tv, path: c.path, value: c.value })), g)
            return { r }
          } catch (e) {
            if (e instanceof Hole) return { blocked: true }
            if (e instanceof Contested) fail(LAWS.total, messages.resolveReadsContested())
            else fail(LAWS.total, messages.methodThrows("resolve", (e as Error).message))
            return { failed: true }
          }
        })
        const norm = (a: { r?: Resolution; blocked?: boolean; failed?: boolean }) => {
          if (!a.r) return JSON.stringify(a)
          const r = a.r
          return JSON.stringify(r.kind === "apply"
            ? { kind: r.kind, order: r.order.map((v) => v.ref), replaced: (r.replaced ?? []).map(([x, y]) => `${x.ref}>${y.ref}`).sort() }
            : { kind: r.kind, arbiter: r.arbiter })
        }
        if (new Set(answers.map(norm)).size > 1) fail(LAWS.orderFree, messages.orderChangesAnswer())
        for (const a of answers) {
          if (a.r?.kind !== "apply") continue
          const given = new Set<AnyNode>(raw.map((c) => c.by))
          const out = [...a.r.order, ...(a.r.replaced ?? []).flat()].filter((v) => !given.has(v.node))
          if (out.length) fail(LAWS.closed, messages.resolveReturnsNonClaimant(out[0].ref))
        }
      })
    }
  }

  function checkKinds(today: string): KindReport[] {
    return kinds.map((def) => {
      const failures = new Map<string, LawFailure>()
      const fail = (law: string, example: string) => {
        const cur = failures.get(law)
        if (cur) cur.count++
        else failures.set(law, { law, count: 1, example })
      }

      if (!def.label?.one || !def.label?.many) fail(LAWS.declared, messages.missingLabel())
      for (const k of [...Object.keys(def.fields), ...Object.keys(def.edges)]) {
        if (RESERVED.has(k)) fail(LAWS.declared, messages.reservedName(k))
      }
      for (const [k, e] of Object.entries(def.edges)) {
        for (const t of e.targets) {
          if (t !== "*" && !kinds.some((x) => x.name === t)) fail(LAWS.declared, messages.unknownEdgeTarget(k, t))
        }
      }
      if (Object.values(def.fields).filter((f) => f.owner).length > 1) fail(LAWS.declared, messages.severalOwnerFields())
      if (def.resolve && !def.claims) fail(LAWS.declared, messages.resolveWithoutClaims())

      const rnd = prng(def.name)
      sandbox(() => {
        for (let i = 0; i < SAMPLES; i++) {
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
          run("evaluate", () => {
            const r = def.evaluate?.(evaluated.self(n) as never, evaluated)
            // An asynchronous evaluation (a scenario) is not played by the laws: it has no wiring here.
            if (r instanceof Promise) r.catch(() => {})
            else evaluated.state.results!.set(n, r)
          })
          const once = (g: typeof bare) => ({
            active: run("activeAt", () => def.activeAt?.(frozen.self(n) as never, frozen)),
            claims: run("claims", () => def.claims?.(frozen.self(n) as never, frozen)?.map((c) => [c.target?.ref, c.path])),
            holes: run("holes", () => def.holes?.(g.self(n) as never, g)),
            status: run("status", () => def.status?.(g.self(n) as never, g)),
            render: run("render", () => def.render?.(g.self(n) as never, g)),
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
        }
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
          const text = readFileSync(join(dir, e.name), "utf8")
          for (const m of text.matchAll(/(?:from\s+|import\s*\(\s*)["']([^"']+)["']/g)) {
            const spec = m[1].replace(/\.(ts|js)$/, "")
            if (spec.includes("/trame/") && !spec.endsWith("/trame/kernel")) {
              out.push(messages.privateImport(`${rel}/${e.name}`, m[1]))
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
