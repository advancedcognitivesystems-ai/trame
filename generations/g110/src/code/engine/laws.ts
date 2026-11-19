// The laws of kinds: what every kind must respect, whether it comes from the project or from an LLM.
// Each kind is tried on nodes drawn at random (fixed seed: reproducible results).

import { AnyTarget, EdgeMode, FieldType, KindHook, Moment, ResolutionKind } from "../../../trame/kernel"
import type { LanguageNames } from "../../conventions"
import type { ProvidedBy, AnyKind, FieldSpec, HoleSpec, Resolution } from "../../../trame/kernel"
import type { FileReading, KeptResults, Layout, Paths, Prelude } from "../../architecture"
import type { LawMessages } from "../../messages"
import type { Api as ProjectApi } from "./project"
import type { Api as GraphApi, Edge } from "./graph"
import type { Api as GeneratorApi } from "./generator"
import type { SampledValues } from "../../product"
import type { References } from "../../engine"
import type { Iso8601 } from "#std/measures"
import type { NodeModuleSpecifiers } from "#std/system"
import type { Counts, Sequences, Texts } from "#std/algebra"
import type { Api as DriversApi } from "../languages/drivers"
import type { AnswersWithoutCrashing, BlockingHoleHasOwner, ClosedResolution, CompleteDeclaration, OrderFree, SameInputSameAnswer, UnknownWithoutEvidence } from "../../laws"

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
  /** Where the reports of the kinds' laws are kept while the process runs. */
  kept: KeptResults
  drivers: DriversApi
  preludeApi: { directory: string; endings: readonly string[] }
  /** How an import names a module: relative, or by the package's import map. */
  specifiers: ProvidedBy<typeof NodeModuleSpecifiers>
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
  /** How a file names the language: what an import out of its package should have written. */
  names: ProvidedBy<typeof LanguageNames>
  messages: ProvidedBy<typeof LawMessages>
  references: ProvidedBy<typeof References>
  sampled: ProvidedBy<typeof SampledValues>
  iso: ProvidedBy<typeof Iso8601>
  counts: ProvidedBy<typeof Counts>
  sequences: ProvidedBy<typeof Sequences>
  texts: ProvidedBy<typeof Texts>
  // The laws of kinds, each the rule of its requirement (module laws).
  declaration: ProvidedBy<typeof CompleteDeclaration>
  answers: ProvidedBy<typeof AnswersWithoutCrashing>
  owned: ProvidedBy<typeof BlockingHoleHasOwner>
  evidence: ProvidedBy<typeof UnknownWithoutEvidence>
  same: ProvidedBy<typeof SameInputSameAnswer>
  orderFree: ProvidedBy<typeof OrderFree>
  closed: ProvidedBy<typeof ClosedResolution>
}

const body = (deps: Deps) => {
  const { drivers, preludeApi } = deps
  const { one, any, previous: before } = deps.counts
  const { head, take, times } = deps.sequences
  const { sampled, iso, references } = deps
  const { chances, names } = sampled
  const [first, second] = sampled.parts
  const { readdirSync, existsSync } = deps.reading
  const { join, relative } = deps.paths
  const { projectDirs } = deps.project
  const { emptyGraph, makeGraph } = deps.graph
  /** What the kinds receive from the engine, to make their samples with: the same for any graph. */
  const { lib } = emptyGraph(deps.texts.empty, Moment.frozen)
  const { kinds, sandbox, instantiate, ownerOf, meta, isNode, Hole, Contested, RESERVED, HOLE } = deps.prelude.internal
  const { messages } = deps
  const { declaration, answers, owned, evidence, same, orderFree, closed } = deps
  /** A kind may stop at an undecided value: that is a decision to take, not a crash. */
  const kindsMayStop = true

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
    switch (f.type) {
      case FieldType.person: return deps.owners[Math.floor(rnd() * deps.owners.length)]
      case FieldType.text: return sampled.text
      case FieldType.date: return take(new Date(Date.UTC(sampled.year, before(int(iso.firstMonth, iso.lastMonth)), int(iso.firstDay, iso.shortestMonth))).toISOString(), iso.dateLength)
      case FieldType.number: return int(f.min ?? low, f.max ?? high)
      case FieldType.range: { const lo = int(...sampled.rangeStart); return [lo, lo + int(...sampled.rangeWidth)] }
      case FieldType.map: return { ...sampled.map }
      case FieldType.value: {
        const r = rnd()
        return r < chances.number ? number() : r < chances.record ? { [first]: number(), [second]: rnd() < chances.undecidedPart ? HOLE : number() } : HOLE
      }
      case FieldType.fn: return f.sample ? f.sample(lib) : () => undefined
      case FieldType.patch: return rnd() < chances.emptyPatch ? {} : { value: rnd() < chances.patchNumber ? number() : { [first]: number() } }
      case FieldType.deps: return {}
      case FieldType.body: return () => () => undefined
      case FieldType.constants: return { c: { value: number(), meaning: String(number()) } }
    }
  }

  function sampleInput(def: AnyKind, rnd: () => number): Record<string, unknown> {
    const input: Record<string, unknown> = {}
    const neverUndecided: FieldSpec["type"][] = [FieldType.fn, FieldType.patch, FieldType.deps, FieldType.body, FieldType.constants]
    for (const [k, f] of Object.entries(def.fields)) {
      if (f.optional && rnd() < chances.leftOut) continue
      input[k] = !neverUndecided.includes(f.type) && !f.owner && rnd() < chances.undecided ? HOLE : sampleField(f, rnd)
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
    const rnd = prng(def.name + names.seed)
    const targetKind = kinds.find((k) => k !== def && Object.values(k.fields).some((f) => f.type === FieldType.value)) ?? def
    const fields = targetKind.fields
    const key = Object.keys(fields).find((k) => fields[k].type === FieldType.value) ?? head(Object.keys(fields)) ?? sampled.wholeValue
    const paths = [key, ...sampled.parts.map((part) => references.join([key, part]))]

    times(RESOLVE_ROUNDS, () => {
      sandbox(() => {
        const target = instantiate(targetKind, sampleInput(targetKind, rnd))
        Object.assign(meta(target), { id: names.target, module: names.module })
        const claimants = times(sampled.claimantsPerSet, (j) => {
          const c = instantiate(def, sampleInput(def, rnd))
          Object.assign(meta(c), { id: names.trial + String(j), module: names.module })
          return c
        })
        // Edges between claimants (for instance "replaces"): towards an earlier trial only, hence without a cycle.
        const edges: Edge[] = []
        claimants.forEach((c, j) => {
          for (const [k, e] of Object.entries(def.edges)) {
            if (e.mode !== EdgeMode.many || !e.targets.includes(def.name)) continue
            const linked = take(claimants, j).filter(() => rnd() < chances.linked)
            meta(c).data[k] = linked
            for (const t of linked) edges.push({ from: c, to: t, name: k, label: e.label, inverse: e.inverse, inferred: false, derived: false, active: true })
          }
        })
        const raw = claimants.flatMap((c) =>
          Array.from({ length: integer(rnd, ...sampled.claimsPerClaimant) }, () => ({ by: c, path: paths[Math.floor(rnd() * paths.length)], value: integer(rnd, ...sampled.claimValues) })))
        const g = makeGraph({
          moment: Moment.frozen, today, nodes: [target, ...claimants], edges, infos: new Map(), inactive: new Set(),
          claimed: new Map([[target, raw.map((c) => c.path)]]),
        })
        const tv = g.view(target)
        const orders = [raw, [...raw].reverse(), ...times(sampled.shuffledOrders, () => [...raw].sort(() => rnd() - chances.shuffle))]
        const results = orders.map((list) => {
          try {
            const r = def.resolve!(tv, list.map((c) => ({ by: g.view(c.by), target: tv, path: c.path, value: c.value })), g)
            return { r }
          } catch (e) {
            const undecided = e instanceof Hole
            if (!answers({ threw: true, undecided }, kindsMayStop)) {
              fail(LAWS.total, e instanceof Contested ? messages.resolveReadsContested() : messages.methodThrows(KindHook.resolve, (e as Error).message))
            }
            return undecided ? { blocked: true } : { failed: true }
          }
        })
        const norm = (a: { r?: Resolution; blocked?: boolean; failed?: boolean }) => {
          if (!a.r) return JSON.stringify(a)
          const r = a.r
          return JSON.stringify(r.kind === ResolutionKind.apply
            ? { kind: r.kind, order: r.order.map((v) => v.ref), replaced: (r.replaced ?? []).map(([x, y]) => JSON.stringify([x.ref, y.ref])).sort() }
            : { kind: r.kind, arbiter: r.arbiter })
        }
        if (!orderFree(results.map(norm))) fail(LAWS.orderFree, messages.orderChangesAnswer())
        const given = new Set(raw.map((c) => g.view(c.by).ref))
        for (const a of results) {
          if (a.r?.kind !== ResolutionKind.apply) continue
          const outsider = head(closed(given, [...a.r.order, ...(a.r.replaced ?? []).flat()].map((v) => v.ref)))
          if (outsider) fail(LAWS.closed, messages.resolveReturnsNonClaimant(outsider))
        }
      })
    })
  }

  function checkKinds(today: string): KindReport[] {
    // The same kinds, drawn on the same day, give the same reports: played once in the process.
    const id = JSON.stringify([today, SAMPLES, kinds.map((k) => k.name)])
    const known = deps.kept.get(id) as { kinds: readonly AnyKind[]; reports: KindReport[] } | undefined
    if (known && known.kinds.length === kinds.length && known.kinds.every((k, i) => k === kinds[i])) return known.reports
    const reports = playKinds(today)
    deps.kept.set(id, { kinds: [...kinds], reports })
    return reports
  }

  function playKinds(today: string): KindReport[] {
    return kinds.map((def) => {
      const failures = new Map<string, LawFailure>()
      const fail = (law: string, example: string) => {
        const cur = failures.get(law)
        if (cur) cur.count++
        else failures.set(law, { law, count: one, example })
      }

      /** The claims, made on the nodes drawn, that target something other than a node. */
      const offNodes: unknown[] = []
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
              // Reading an undecided value stops the call: it does not crash it.
              if (!answers({ threw: true, undecided: e instanceof Hole }, kindsMayStop)) fail(LAWS.total, messages.methodThrows(name, (e as Error).message))
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
            if (!same([JSON.stringify(a), JSON.stringify(b)])) fail(LAWS.deterministic, messages.twoCallsTwoAnswers())
            for (const x of (a.holes ?? []).filter((y): y is HoleSpec => !!y)) {
              if (!owned(x, ownerOf(n))) fail(LAWS.owner, messages.noOwner(x.what))
            }
            if (!evidence(a.status, g !== bare)) fail(LAWS.unknown, messages.statusWithoutEvidence(String(a.status)))
          }
          for (const c of def.claims?.(frozen.self(n) as never, frozen) ?? []) {
            if (c.target && !isNode(c.target.node)) offNodes.push(c.target)
          }
        })
      })
      const faults = declaration({
        labelled: Boolean(def.label?.one && def.label?.many),
        names: [...Object.keys(def.fields), ...Object.keys(def.edges)],
        targets: Object.entries(def.edges).flatMap(([k, e]) => e.targets.map((t) => [k, t] as const)),
        ownerFields: Object.entries(def.fields).filter(([, f]) => f.owner).map(([k]) => k),
        resolves: Boolean(def.resolve), claims: Boolean(def.claims), claimsOffNodes: any(offNodes),
      }, { reserved: RESERVED, kinds: new Set(kinds.map((x) => x.name)), any: AnyTarget })
      if (faults.unlabelled) fail(LAWS.declared, messages.missingLabel())
      for (const k of faults.reserved) fail(LAWS.declared, messages.reservedName(k))
      for (const [k, t] of faults.unknownTargets) fail(LAWS.declared, messages.unknownEdgeTarget(k, t))
      if (faults.severalOwners) fail(LAWS.declared, messages.severalOwnerFields())
      if (faults.resolveWithoutClaims) fail(LAWS.declared, messages.resolveWithoutClaims())
      if (faults.claimsOffNodes) fail(LAWS.declared, messages.claimNotOnNode())
      if (def.resolve) checkResolve(def, today, fail)
      return { kind: def, samples: SAMPLES, failures: [...failures.values()] }
    })
  }

  /**
   * Kinds, views and the graph read the kernel only through its public API; a file of the project names a library by
   * its name (#std/algebra), never by a path into it (ADR "A library is imported by its name"); and no file reaches
   * out of its package by a relative path (since g88, ADR "A package is used by its name"): the language is named
   * #trame/kernel, #trame/kinds/decision. A file belongs to the library whose home holds it, else to the project, else
   * to the language.
   */
  function checkImports(root: string): string[] {
    const out: string[] = []
    const language = drivers.graphDriver()
    const dirs = projectDirs(root)
    const { specifiers } = deps
    const within = (path: string, dir: string) => path === dir || path.startsWith(dir + deps.paths.sep)
    /** The library a file reaches into by a path, with the name it should use; nothing if it reaches none. */
    const reached = (file: string, module: string) => {
      if (!module.startsWith(specifiers.current) && !module.startsWith(specifiers.parent)) return undefined
      const target = deps.paths.resolve(deps.paths.dirname(file), module)
      const lib = dirs.libraries.find((l) => within(target, l.home) && !within(file, l.home))
      if (!lib) return undefined
      const inside = relative(join(lib.root, deps.layout.sources), target).split(deps.paths.sep).join(specifiers.separator)
      const named = language.extensions.reduce((x, ext) => (x.endsWith(ext) ? deps.sequences.take(x, x.length - ext.length) : x), inside)
      return { lib, named: specifiers.imports + lib.name + specifiers.separator + named }
    }
    const languageRoot = deps.prelude.root
    const packageOf = (file: string) =>
      dirs.libraries.find((l) => within(file, l.home))?.home ?? (within(file, root) ? root : within(file, languageRoot) ? languageRoot : root)
    const asSpecifier = (path: string) => path.split(deps.paths.sep).join(specifiers.separator)
    const withoutExtension = (x: string) => language.extensions.reduce((y, ext) => (y.endsWith(ext) ? deps.sequences.take(y, y.length - ext.length) : y), x)
    /** The name of a module of the language, as its import map has it: #trame/kinds/decision. */
    const languageName = (target: string): string | undefined => {
      if (!within(target, languageRoot)) return undefined
      const inside = withoutExtension(asSpecifier(relative(languageRoot, target)))
      for (const [name, module] of Object.entries(deps.names.modules)) {
        const prefix = module.endsWith(specifiers.pattern) ? deps.sequences.take(module, module.length - specifiers.pattern.length) : undefined
        const rest = prefix !== undefined && inside.startsWith(prefix) ? inside.slice(prefix.length) : inside === module ? deps.texts.empty : undefined
        if (rest !== undefined) return specifiers.imports + deps.names.name + specifiers.separator + (prefix !== undefined ? name.split(specifiers.pattern).join(rest) : name)
      }
      return undefined
    }
    /** A relative import that leaves the file's package: where it leads, and the name to write instead, if there is one. */
    const leaving = (file: string, module: string) => {
      if (!module.startsWith(specifiers.current) && !module.startsWith(specifiers.parent)) return undefined
      const target = deps.paths.resolve(deps.paths.dirname(file), module)
      // A version frozen of a library is its release's business: it was checked when it was frozen, and is never changed.
      if (dirs.libraries.some((l) => l.version !== undefined && within(file, l.root))) return undefined
      return within(target, packageOf(file)) ? undefined : { named: languageName(target) }
    }
    const scan = (dir: string, rel: string) => {
      if (!existsSync(dir)) return
      for (const e of readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
        const file = join(dir, e.name)
        if (e.isDirectory()) scan(file, join(rel, e.name))
        else if (language.extensions.some((x) => e.name.endsWith(x))) {
          for (const i of language.read?.({ key: file, file }).imports ?? []) {
            if (i.module.includes(preludeApi.directory) && !preludeApi.endings.some((ending) => i.module.endsWith(ending))) {
              out.push(messages.privateImport(join(rel, e.name), i.module))
            }
            const byPath = reached(file, i.module)
            if (byPath) out.push(messages.libraryByPath(join(rel, e.name), i.module, byPath.lib.name, byPath.named))
            else {
              const leaves = leaving(file, i.module)
              if (leaves) out.push(messages.outsidePackage(join(rel, e.name), i.module, leaves.named))
            }
          }
        }
      }
    }
    const sources = [root, ...dirs.libraries.map((lib) => lib.root)].map((at) => join(at, deps.layout.sources))
    for (const dir of [...dirs.kinds, ...dirs.views, ...sources]) scan(dir, relative(root, dir))
    return out
  }

  return { LAWS, checkKinds, checkImports }
}

export type Api = ReturnType<typeof body>
export default body
