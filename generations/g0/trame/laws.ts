// Lois des types : ce que tout type doit respecter, qu'il vienne du projet ou d'un LLM.
// Chaque type est essayé sur des nœuds tirés au hasard (graine fixe : résultats reproductibles).

import { readdirSync, readFileSync, existsSync } from "node:fs"
import { join, relative } from "node:path"
import { projectDirs } from "./project"
import { emptyGraph, makeGraph, type Edge } from "./graph"
import { kinds, sandbox, instantiate, ownerOf, meta, isNode, Hole, Contested, RESERVED, HOLE } from "./internal"
import type { AnyKind, AnyNode, FieldSpec, HoleSpec, Resolution } from "./kernel"

export const LAWS = {
  declared: "Déclaration complète",
  total: "Répond sur toute valeur, sans planter",
  owner: "Un trou bloquant a un responsable",
  unknown: "Sans preuve, le statut est inconnu",
  deterministic: "Même entrée, même réponse",
  orderFree: "La résolution ne dépend pas de l'ordre",
  closed: "La résolution ne renvoie que ce qu'on lui donne",
} as const

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

const SAMPLES = 50
const RESOLVE_ROUNDS = 30

function prng(seedText: string): () => number {
  let a = [...seedText].reduce((h, c) => Math.imul(h ^ c.charCodeAt(0), 2654435761) >>> 0, 1779033703)
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function sampleField(f: FieldSpec, rnd: () => number): unknown {
  const int = (lo: number, hi: number) => lo + Math.floor(rnd() * (hi - lo + 1))
  const pad = (n: number) => String(n).padStart(2, "0")
  switch (f.type) {
    case "person": return rnd() < 0.5 ? "lea" : "karim"
    case "text": return "texte"
    case "date": return `2026-${pad(int(1, 12))}-${pad(int(1, 28))}`
    case "number": return int(f.min ?? 0, f.max ?? 100)
    case "duration": return 60 * int(1, 120)
    case "percent": return int(0, 100) / 100
    case "chf": return int(0, 100)
    case "range": { const lo = int(0, 50); return [lo, lo + int(1, 50)] }
    case "map": return { x: "y" }
    case "value": {
      const r = rnd()
      return r < 0.4 ? int(0, 100) : r < 0.8 ? { a: int(0, 100), b: rnd() < 0.5 ? HOLE : int(0, 100) } : HOLE
    }
    case "fn": return f.sample ? f.sample() : () => undefined
    case "patch": return rnd() < 0.2 ? {} : { value: rnd() < 0.5 ? int(0, 100) : { a: int(0, 100) } }
    case "deps": return {}
    case "body": return () => () => undefined
  }
}

function sampleInput(def: AnyKind, rnd: () => number): Record<string, unknown> {
  const input: Record<string, unknown> = {}
  for (const [k, f] of Object.entries(def.fields)) {
    if (f.optional && rnd() < 0.3) continue
    input[k] = f.type !== "fn" && f.type !== "patch" && f.type !== "deps" && f.type !== "body" && !f.owner && rnd() < 0.15 ? HOLE : sampleField(f, rnd)
  }
  for (const [k, e] of Object.entries(def.edges)) {
    if (e.mode === "many") {
      input[k] = []
      continue
    }
    // `*` : n'importe quel type ; on en prend un au hasard.
    const pool = e.targets.includes("*") ? kinds : kinds.filter((x) => e.targets.includes(x.name))
    const target = pool[Math.floor(rnd() * pool.length)]
    if (target) input[k] = instantiate(target, {})
  }
  return input
}

/** Lois 6 et 7, pour un type qui sait trancher : des revendications tirées au hasard, présentées dans plusieurs ordres. */
function checkResolve(def: AnyKind, today: string, fail: (law: string, example: string) => void) {
  const rnd = prng(def.name + ":resolve")
  const targetKind = kinds.find((k) => k !== def && Object.values(k.fields).some((f) => f.type === "value")) ?? def
  const key = Object.entries(targetKind.fields).find(([, f]) => f.type === "value")?.[0] ?? Object.keys(targetKind.fields)[0] ?? "valeur"
  const paths = [key, `${key}.a`, `${key}.b`]

  for (let round = 0; round < RESOLVE_ROUNDS; round++) {
    sandbox(() => {
      const target = instantiate(targetKind, sampleInput(targetKind, rnd))
      Object.assign(meta(target), { id: "Cible", module: "loi" })
      const claimants = [0, 1, 2].map((j) => {
        const c = instantiate(def, sampleInput(def, rnd))
        Object.assign(meta(c), { id: `Essai${j}`, module: "loi" })
        return c
      })
      // Arêtes entre revendicateurs (par exemple « remplace ») : vers un essai précédent seulement, donc sans cycle.
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
        moment: "figé", today, nodes: [target, ...claimants], edges, infos: new Map(), inactive: new Set(),
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
          if (e instanceof Contested) fail(LAWS.total, "resolve() lit une valeur en cours de résolution")
          else fail(LAWS.total, `resolve() lève « ${(e as Error).message} »`)
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
      if (new Set(answers.map(norm)).size > 1) fail(LAWS.orderFree, "les mêmes revendications, dans un autre ordre, donnent une autre réponse")
      for (const a of answers) {
        if (a.r?.kind !== "apply") continue
        const given = new Set<AnyNode>(raw.map((c) => c.by))
        const out = [...a.r.order, ...(a.r.replaced ?? []).flat()].filter((v) => !given.has(v.node))
        if (out.length) fail(LAWS.closed, `resolve() renvoie « ${out[0].ref} », qui ne revendique rien`)
      }
    })
  }
}

export function checkKinds(today: string): KindReport[] {
  return kinds.map((def) => {
    const failures = new Map<string, LawFailure>()
    const fail = (law: string, example: string) => {
      const cur = failures.get(law)
      if (cur) cur.count++
      else failures.set(law, { law, count: 1, example })
    }

    if (!def.label?.one || !def.label?.many) fail(LAWS.declared, "libellé manquant")
    for (const k of [...Object.keys(def.fields), ...Object.keys(def.edges)]) {
      if (RESERVED.has(k)) fail(LAWS.declared, `nom réservé par l'API : ${k}`)
    }
    for (const [k, e] of Object.entries(def.edges)) {
      for (const t of e.targets) {
        if (t !== "*" && !kinds.some((x) => x.name === t)) fail(LAWS.declared, `l'arête « ${k} » vise un type inconnu : ${t}`)
      }
    }
    if (Object.values(def.fields).filter((f) => f.owner).length > 1) fail(LAWS.declared, "plusieurs champs responsables")
    if (def.resolve && !def.claims) fail(LAWS.declared, "resolve() sans claims()")

    const rnd = prng(def.name)
    sandbox(() => {
      for (let i = 0; i < SAMPLES; i++) {
        const n = instantiate(def, sampleInput(def, rnd))
        const frozen = emptyGraph(today, "figé", [n])
        // Deux graphes consolidés : l'un sans aucune preuve (ni mesure, ni évaluation), l'autre après évaluation.
        const bare = emptyGraph(today, "consolidé", [n])
        const evaluated = emptyGraph(today, "consolidé", [n])
        const run = <T>(name: string, f: () => T): T | undefined => {
          try {
            return f()
          } catch (e) {
            if (e instanceof Hole) return undefined // lire une valeur non décidée bloque, ça ne plante pas
            fail(LAWS.total, `${name}() lève « ${(e as Error).message} »`)
            return undefined
          }
        }
        run("evaluate", () => {
          const r = def.evaluate?.(evaluated.self(n) as never, evaluated)
          // Une évaluation asynchrone (un scénario) n'est pas jouée par les lois : elle n'a pas de branchement ici.
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
          if (JSON.stringify(a) !== JSON.stringify(b)) fail(LAWS.deterministic, "deux appels identiques donnent deux réponses")
          for (const x of (a.holes ?? []).filter((y): y is HoleSpec => !!y)) {
            if (x.severity === "bloquant" && !(x.owner ?? ownerOf(n))) fail(LAWS.owner, `« ${x.what} » n'a pas de responsable`)
          }
          if (g === bare && (a.status === "tenu" || a.status === "violé")) {
            fail(LAWS.unknown, `status() renvoie « ${a.status} » alors qu'aucune preuve n'existe`)
          }
        }
        for (const c of def.claims?.(frozen.self(n) as never, frozen) ?? []) {
          if (c.target && !isNode(c.target.node)) fail(LAWS.declared, "claims() vise autre chose qu'un nœud")
        }
      }
    })
    if (def.resolve) checkResolve(def, today, fail)
    return { kind: def, samples: SAMPLES, failures: [...failures.values()] }
  })
}

/** Les types, les vues et le graphe ne lisent le noyau que par son API publique. */
export function checkImports(root: string): string[] {
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
            out.push(`${rel}/${e.name} importe « ${m[1]} » : seule l'API publique (trame/kernel) est permise`)
          }
        }
      }
    }
  }
  const dirs = projectDirs(root)
  for (const dir of [...dirs.kinds, ...dirs.views, join(root, "src")]) scan(dir, relative(root, dir) || ".")
  return out
}
