// Compiling the graph, in layers:
// 1. Read and run the code: each export becomes a node.
// 2. Frozen graph: who is in force, and what each one claims on the others.
// 3. Resolution: overlapping claims are settled by their kind, or contested.
// 4. Consolidated graph: the values in force, evaluated, then checked.
// Nothing here knows a particular kind: everything goes through the definitions of kinds/.

import type { FileReading, Layout, ModuleLoader, Paths, Prelude } from "../../architecture"
import type { Api as AnalysisApi } from "./static-analysis"
import type { Api as ProjectApi } from "./project"
import type { Api as GraphApi } from "./graph"
import type { Edge, GraphImpl } from "./graph"
import type { Api as WiringApi } from "./wiring"
import type { Api as CyclesApi } from "./cycles"
import type { Api as DriversApi, LiteralFound, LiteralSource } from "../languages/drivers"
import { AnyTarget, EdgeMode, EdgeName, FieldType, KindHook, Moment, Origin, ResolutionKind, ResolutionOutcome, Severity, Stage } from "../../../trame/kernel"
import type { AnyNode, AnyKind, Constant, Evidence, HoleSpec, ProvidedBy, Resolution, StaticInfo } from "../../../trame/kernel"
import type { References } from "../../engine"
import type { Counts, Sequences, Texts, ValueTypes } from "../../algebra"
import type { CompilerMessages } from "../../messages"
import type { NodeEncodings } from "../../standards"
// To port: export type { Edge }

export interface Diag {
  severity: Severity
  /** Where the problem comes from: a value to decide, a resolution of claims, a kind, the structure of the graph, publication, code. */
  origin?: Origin
  node?: AnyNode
  /** For a diagnostic without a node (a published declaration that was deleted): its module and its reference. */
  module?: string
  where?: string
  what: string
  owner?: string
  effect?: string
}

/** A claim as declared, in force or not. */
export interface ClaimRecord {
  by: AnyNode
  target: AnyNode
  path: string
  value: unknown
  active: boolean
}

/** What the resolution did with a group of claims that overlap on a target. */
export interface ResolutionRecord {
  target: AnyNode
  paths: string[]
  claimants: AnyNode[]
  outcome: ResolutionOutcome
  /** In the order of application. */
  applied: AnyNode[]
  /** [who replaces, who is replaced] */
  replaced: [AnyNode, AnyNode][]
  reason: string
  arbiter?: string
  /** The nodes read to settle, apart from the target and the claimants. */
  because: AnyNode[]
}

export interface Compiled {
  today: string
  modules: string[]
  moduleTitle: Map<string, string>
  nodes: AnyNode[]
  edges: Edge[]
  diags: Diag[]
  claims: ClaimRecord[]
  resolutions: ResolutionRecord[]
  graph: GraphImpl
  /** The references frozen in trame.lock (filled in by the command line). */
  published?: Set<string>
  /** What the code does to the published declarations (filled in by the command line). */
  lockIssues?: Diag[]
  /** The type errors: the compilation reports them, the command line refuses. */
  typeErrors: string[]
  literals: Map<AnyNode, { file: string; items: LiteralFound[] }[]>
  /** The literal values the project refuses in bodies. */
  refusedLiterals: (string | number)[]
}

/** The loaded graph: the code read and run once. It can then be compiled at as many dates as wanted. */
export interface Loaded {
  root: string
  modules: string[]
  moduleTitle: Map<string, string>
  nodes: AnyNode[]
  /** The nodes created by the modules of the project without being exported. */
  anonymous: AnyNode[]
  infos: Map<AnyNode, StaticInfo>
  typeErrors: string[]
  evidence: Map<string, Evidence[]>
  /** The bodies of the graph, by language: a file, or an inline property of a declaration. A shared body is listed once. */
  bodies: Map<string, LiteralSource[]>
  /** The literals of each code body, found by the driver of its language. */
  literals: Map<AnyNode, { file: string; items: LiteralFound[] }[]>
  /** The project asks to report them. */
  reportLiterals: boolean
  /** The values it refuses in bodies, unless something declares them. */
  refusedLiterals: (string | number)[]
}

export interface Deps {
  encodings: ProvidedBy<typeof NodeEncodings>
  values: ProvidedBy<typeof ValueTypes>
  layout: Layout
  /** The rank of a severity: the rule of the requirement "Sort problems by severity". */
  severityOrder: (severity: Severity) => number
  cycles: CyclesApi
  references: ProvidedBy<typeof References>
  loader: ModuleLoader
  reading: FileReading
  paths: Paths
  analysis: AnalysisApi
  project: ProjectApi
  graph: GraphApi
  wiring: WiringApi
  drivers: DriversApi
  prelude: Prelude
  counts: ProvidedBy<typeof Counts>
  sequences: ProvidedBy<typeof Sequences>
  texts: ProvidedBy<typeof Texts>
  messages: ProvidedBy<typeof CompilerMessages>
}

const body = (deps: Deps) => {
  const { encodings } = deps
  const { values } = deps
  const { loader, references, messages } = deps
  const { zero, any, isEmpty, several, tally } = deps.counts
  const { head, pairs } = deps.sequences
  const { empty, optional } = deps.texts
  const { readdirSync, readFileSync, existsSync } = deps.reading
  const { join, basename, dirname, relative } = deps.paths
  const { analyze } = deps.analysis
  const { projectDirs } = deps.project
  const { makeGraph } = deps.graph
  const { wireDeps, bodyPath, depsOf, plan, constantsOf } = deps.wiring
  const { driverFor, graphDriver } = deps.drivers
  const { kinds, allNodes, meta, isNode, isHole, refOf, ownerOf, Hole, Contested, HOLE, REMOVE, getPath, setPath, cloneData, overlaps, isFileBody } = deps.prelude.internal

  const moduleOf = (d: Diag): string | undefined => (d.node ? meta(d.node).module : d.module)

  /** The extension of the modules of the graph: that of the language it is written in. */
  const moduleExtension = () => optional(head(graphDriver().extensions))
  const tsFiles = (dir: string) =>
    existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith(moduleExtension())).sort().map((f) => join(dir, f)) : []

  const bodyFiles = (dir: string): string[] =>
    existsSync(dir)
      ? readdirSync(dir, { withFileTypes: true }).filter((e) => e.isDirectory()).sort((a, b) => a.name.localeCompare(b.name)).flatMap((e) => {
          const sub = join(dir, e.name)
          return [...tsFiles(sub), ...bodyFiles(sub)]
        })
      : []

  /** Loads the whole vocabulary of the project, even the kinds that no node uses yet. */
  async function loadKinds(root: string): Promise<AnyKind[]> {
    for (const dir of projectDirs(root).kinds) for (const f of tsFiles(dir)) await loader.import(f)
    return kinds
  }

  function loadEvidence(root: string): Map<string, Evidence[]> {
    const out = new Map<string, Evidence[]>()
    const dir = join(root, deps.layout.evidence)
    if (!existsSync(dir)) return out
    for (const f of readdirSync(dir)) {
      if (!f.endsWith(deps.layout.evidenceExtension)) continue
      const list = JSON.parse(readFileSync(join(dir, f), encodings.utf8)) as (Evidence & { node: string })[]
      for (const e of list) out.set(e.node, [...(out.get(e.node) ?? []), e].sort((a, b) => a.at.localeCompare(b.at)))
    }
    return out
  }

  const byRef = (a: AnyNode, b: AnyNode) => refOf(a).localeCompare(refOf(b))
  const uniq = <T>(list: T[]) => [...new Set(list)]
  const depth = references.depth
  const message = (e: unknown) => (e instanceof Error ? e.message : String(e))

  /** The claims on a target, grouped: two claims whose paths overlap are in the same group. */
  function groupsOf(list: ClaimRecord[]): ClaimRecord[][] {
    let groups: ClaimRecord[][] = []
    for (const c of list) {
      const hit = groups.filter((gr) => gr.some((x) => overlaps(x.path, c.path)))
      groups = [...groups.filter((gr) => !hit.includes(gr)), [...hit.flat(), c]]
    }
    return groups
      .map((gr) => gr.sort((a, b) => byRef(a.by, b.by) || a.path.localeCompare(b.path)))
      .sort(([a], [b]) => a.path.localeCompare(b.path))
  }

  /** The paths that cover all the others (without `value.ultra` if `value` is there). */
  const covering = (paths: string[]) =>
    uniq(paths).filter((p, _, all) => !all.some((q) => q !== p && overlaps(q, p) && depth(q) < depth(p))).sort()

  /** 1. Read and run the modules; the name of the export becomes the identifier of the node. */
  async function load(root: string): Promise<Loaded> {
    await loadKinds(root)
    const files = tsFiles(join(root, deps.layout.sources))
    // The bodies written in files (subdirectories of src/) are checked by TypeScript with the rest.
    const dirs = projectDirs(root)
    const extra = [...dirs.kinds.flatMap(tsFiles), ...dirs.views.flatMap(tsFiles), ...bodyFiles(join(root, deps.layout.sources))]
    const { infos: analysis, moduleTitle, typeErrors } = analyze(files, extra, root)
    // The nodes of the project: those its modules export. The registry of the kernel is shared by the whole process
    // (another project may be loaded into it): it is not read in full.
    const before = allNodes().length
    const mine = new Set<AnyNode>()
    for (const file of files) {
      const mod: Record<string, unknown> = await loader.import(file)
      for (const [name, v] of Object.entries(mod)) {
        if (!isNode(v)) continue
        if (!meta(v).id) {
          meta(v).id = name
          meta(v).module = basename(file, moduleExtension())
        }
        mine.add(v)
      }
    }
    const anonymous = allNodes().slice(before).filter((n) => !meta(n).id)
    const nodes = [...mine].sort(byRef)
    const infos = new Map<AnyNode, StaticInfo>()
    for (const n of nodes) {
      const i = analysis.get(refOf(n))
      if (i) infos.set(n, i)
    }
    const bodies = bodiesOf(root, nodes, infos)
    return {
      root, modules: files.map((f) => basename(f, moduleExtension())), moduleTitle, nodes, anonymous, infos, typeErrors, evidence: loadEvidence(root),
      bodies: new Map([...bodies].map(([language, { sources }]) => [language, sources])),
      literals: readLiterals(root, bodies, infos), reportLiterals: dirs.literals, refusedLiterals: dirs.refusedLiterals,
    }
  }

  /**
   * The literals of all the bodies, in one pass per language. A shared body is read once.
   * The literals of a node whose kind declares them (a message catalog) are its declarations: they are not left to specify.
   */
  type Sources = { sources: LiteralSource[]; owners: Map<string, { node: AnyNode; file: string }[]> }

  /** A body written inline: the property of the node's declaration, in the module of the graph that declares it. */
  const inlineSource = (root: string, info: StaticInfo, field: string): LiteralSource =>
    ({ key: `${info.file}:${info.line}:${field}`, file: join(root, info.file), inline: { line: info.line, field } })

  /** The bodies of the graph, by language: a file, or an inline property of a declaration. A shared body is listed once. */
  function bodiesOf(root: string, nodes: AnyNode[], infos: Map<AnyNode, StaticInfo>): Map<string, Sources> {
    const byLanguage = new Map<string, Sources>()
    for (const n of nodes) {
      const info = infos.get(n)
      if (!info) continue
      for (const [k, f] of Object.entries(meta(n).def.fields)) {
        if (f.type !== FieldType.body) continue
        const v = meta(n).data[k]
        let language: string, source: LiteralSource, file: string
        if (values.isFunction(v)) {
          language = graphDriver().language
          file = info.file
          source = inlineSource(root, info, k)
        } else if (isFileBody(v)) {
          language = v.language
          const abs = join(root, dirname(info.file), v.file)
          file = relative(root, abs)
          source = { key: abs, file: abs }
        } else continue
        const entry: Sources = byLanguage.get(language) ?? { sources: [], owners: new Map() }
        if (!entry.owners.has(source.key)) entry.sources.push(source)
        entry.owners.set(source.key, [...(entry.owners.get(source.key) ?? []), { node: n, file }])
        byLanguage.set(language, entry)
      }
    }
    return byLanguage
  }

  function readLiterals(root: string, byLanguage: Map<string, Sources>, infos: Map<AnyNode, StaticInfo>): Loaded["literals"] {
    const declaredBy = (n: AnyNode) => {
      const def = meta(n).def
      return def.declaresLiterals ? messages.literalDeclaredBy(def.label.one, infos.get(n)?.title ?? meta(n).id ?? def.label.one) : undefined
    }
    const out: Loaded["literals"] = new Map()
    for (const [language, { sources, owners }] of byLanguage) {
      const driver = driverFor(language)
      if (!driver?.literals) continue
      for (const [key, items] of driver.literals(sources)) {
        for (const { node, file } of owners.get(key) ?? []) {
          // A shared body may belong to a node that declares nothing: the items are copied, not changed.
          const by = declaredBy(node)
          const mineItems = by ? items.map((i) => (i.declaredBy ? i : { ...i, declaredBy: by })) : items
          out.set(node, [...(out.get(node) ?? []), { file, items: mineItems }])
        }
      }
    }
    return out
  }

  async function compile(root: string, today: string): Promise<Compiled> {
    return await compileAt(await load(root), today)
  }

  /**
   * Compiles the loaded graph at a date. Always starts again from the declarations: what a previous compilation
   * applied (claims, contests, repeals) is undone first.
   * Only one compilation lives at a time: its views read the nodes as it left them.
   * `evaluate: false`: without running the criteria or the scenarios (when only the values count).
   */
  async function compileAt(l: Loaded, today: string, opts: { evaluate?: boolean } = {}): Promise<Compiled> {
    const { modules, moduleTitle, nodes, infos, typeErrors } = l
    for (const n of nodes) {
      const m = meta(n)
      if (m.base) m.data = cloneData(m.base)
      m.base = undefined
      m.amendedBy = undefined
      m.repealedBy = undefined
      m.contested = undefined
    }
    const diags: Diag[] = []
    const title = (n: AnyNode) => infos.get(n)?.title ?? meta(n).id ?? meta(n).def.label.one
    const error = (node: AnyNode, what: string, owner?: string) => diags.push({ severity: Severity.error, origin: Origin.graph, node, what, owner })

    for (const n of l.anonymous) {
      error(n, messages.unnamedNode(meta(n).def.label.one))
    }

    /** Declared edges (read in the current data), then edges inferred from the code ("depends on"). */
    const buildEdges = (inactive: Set<AnyNode>, check: boolean): Edge[] => {
      const edges: Edge[] = []
      for (const n of nodes) {
        const { def, data } = meta(n)
        const active = !inactive.has(n)
        for (const [name, spec] of Object.entries(def.edges)) {
          const v = data[name]
          const targets = spec.mode === EdgeMode.many ? (Array.isArray(v) ? v : []) : v ? [v] : []
          if (check && !spec.optional && isEmpty(targets) && spec.mode === EdgeMode.one) {
            error(n, messages.missingEdge(spec.label))
          }
          for (const t of targets) {
            if (!isNode(t)) continue
            edges.push({ from: n, to: t, name, label: spec.label, inverse: spec.inverse, inferred: false, derived: false, active })
            if (!check) continue
            const tk = meta(t).def.name
            if (!spec.targets.includes(tk) && !spec.targets.includes(AnyTarget)) {
              error(n, messages.wrongEdgeTarget(spec.label, [...spec.targets], tk))
            }
            if (!meta(t).id) error(n, messages.edgeToUnnamedNode(spec.label))
          }
        }
        // The named dependencies: one edge per parameter.
        for (const [k, f] of Object.entries(def.fields)) {
          if (f.type !== FieldType.deps) continue
          const v = data[k]
          if (!v || !values.isObject(v)) continue
          for (const [param, t] of Object.entries(v as Record<string, unknown>)) {
            if (!isNode(t)) {
              if (check) error(n, messages.parameterNotANode(param))
              continue
            }
            edges.push({
              from: n, to: t, name: EdgeName.deps, label: messages.dependsOn(), inverse: messages.usedBy(),
              inferred: false, derived: false, active, param, stage: f.stage ?? Stage.execution,
            })
            if (check && !meta(t).id) error(n, messages.parameterToUnnamedNode(param))
          }
        }
      }
      for (const n of nodes) {
        const def = meta(n).def
        for (const r of infos.get(n)?.refs ?? []) {
          if (r.prop && r.prop in def.edges) continue // already declared
          // A body that names another node instead of receiving it as a parameter: a hidden dependency.
          if (check && r.prop && def.fields[r.prop]?.type === FieldType.body) {
            diags.push({ severity: Severity.error, origin: Origin.code, node: n, what: messages.hiddenDependency(references.identifier(r.target)) })
          }
          const target = nodes.find((x) => refOf(x) === r.target)
          if (!target || target === n) continue
          if (edges.some((e) => e.from === n && e.to === target)) continue
          // Named in a constant: the constant refines one of the target's.
          const refining = r.prop !== undefined && def.fields[r.prop]?.type === FieldType.constants
          edges.push({
            from: n, to: target, name: refining ? EdgeName.refines : EdgeName.uses,
            label: refining ? messages.refines() : messages.dependsOn(), inverse: refining ? messages.refinedBy() : messages.usedBy(),
            inferred: true, derived: false, active: !inactive.has(n),
          })
        }
      }
      return edges
    }

    // 2. Frozen graph: in force or not, then claims. -----------------------------------------
    const frozen = { moment: Moment.frozen, today, nodes, infos }
    const g0 = makeGraph({ ...frozen, edges: buildEdges(new Set(), false), inactive: new Set() })
    const inactive = new Set<AnyNode>()
    for (const n of nodes) {
      const def = meta(n).def
      if (!def.activeAt) continue
      const r = g0.track(() => def.activeAt!(g0.self(n) as never, g0))
      if (r.error instanceof Hole) continue // date not decided: it is considered in force
      if (r.error) error(n, messages.hookFailed(KindHook.activeAt, message(r.error)))
      else if (!r.value) inactive.add(n)
    }
    const frozenEdges = buildEdges(inactive, false)
    const g1 = makeGraph({ ...frozen, edges: frozenEdges, inactive })

    const claims: ClaimRecord[] = []
    for (const n of nodes) {
      const def = meta(n).def
      if (!def.claims) continue
      const r = g1.track(() => def.claims!(g1.self(n) as never, g1))
      if (r.error) {
        if (!(r.error instanceof Hole)) error(n, messages.hookFailed(KindHook.claims, message(r.error)))
        continue
      }
      for (const c of r.value ?? []) {
        if (!c.target) continue // missing edge: reported below
        const target = c.target.node
        if (!nodes.includes(target)) {
          error(n, messages.claimOutsideGraph())
          continue
        }
        const tdef = meta(target).def
        if (references.isWholeNode(c.path)) {
          if (c.value !== REMOVE) {
            error(n, messages.wholeNodeClaim(title(target)))
            continue
          }
        } else {
          const first = references.firstSegment(c.path)
          if (!(first in tdef.fields) && !(first in tdef.edges)) {
            error(n, messages.unknownClaimPath(c.path, title(target)))
            continue
          }
        }
        claims.push({ by: n, target, path: c.path, value: c.value, active: !inactive.has(n) })
      }
    }

    // 3. Resolution, on the frozen graph: nothing is applied until everything is settled. ------
    const live = claims.filter((c) => c.active)
    const claimed = new Map<AnyNode, string[]>()
    for (const c of live) claimed.set(c.target, [...(claimed.get(c.target) ?? []), c.path])
    const g2 = makeGraph({ ...frozen, edges: frozenEdges, inactive, claimed })

    const plans: { group: ClaimRecord[]; record: ResolutionRecord }[] = []
    const derived: Edge[] = []
    for (const target of [...claimed.keys()].sort(byRef)) {
      for (const group of groupsOf(live.filter((c) => c.target === target))) {
        const claimants = uniq(group.map((c) => c.by)).sort(byRef)
        const record: ResolutionRecord = {
          target, paths: covering(group.map((c) => c.path)), claimants,
          outcome: ResolutionOutcome.applied, applied: claimants, replaced: [], reason: empty, because: [],
        }
        plans.push({ group, record })
        if (!several(claimants)) continue

        for (const [a, b] of pairs(claimants)) {
          if (!derived.some((e) => e.from === a && e.to === b)) {
            derived.push({ from: a, to: b, name: EdgeName.overlaps, label: messages.overlaps(), inverse: messages.overlappedBy(), inferred: false, derived: true, active: true })
          }
        }
        const contest = (reason: string, arbiter?: string) => {
          record.outcome = ResolutionOutcome.contested
          record.applied = []
          record.reason = reason
          record.arbiter = arbiter ?? ownerOf(target)
        }

        const defs = uniq(claimants.map((c) => meta(c).def))
        const [def] = defs
        if (several(defs) || !def.resolve) {
          contest(several(defs) ? messages.claimsOfSeveralKinds() : messages.kindCannotResolve(def.name))
          continue
        }
        const tv = g2.view(target)
        const sorted = [...group]
        const asClaims = (list: ClaimRecord[]) =>
          list.map((c) => ({ by: g2.view(c.by), target: tv, path: c.path, value: c.value }))
        // Law 6: the answer does not depend on the order of the claims. Both orders are tried.
        const runs = [sorted, [...sorted].reverse()].map((list) => g2.track(() => def.resolve!(tv, asClaims(list), g2)))
        const [first, second] = runs
        const reporter = head(claimants)!
        const failed = runs.find((r) => r.error)
        if (failed) {
          const e = failed.error
          if (e instanceof Hole) contest(messages.decisionMissingToResolve(e.label))
          else {
            error(reporter, e instanceof Contested
              ? messages.resolutionReadsContested(def.name, e.message)
              : messages.hookFailed(KindHook.resolve, message(e)))
            contest(messages.resolutionFailed())
          }
          continue
        }
        const norm = (r: Resolution) => JSON.stringify(r.kind === ResolutionKind.apply
          ? { kind: r.kind, order: r.order.map((v) => v.ref), replaced: (r.replaced ?? []).map(([a, b]) => `${a.ref}>${b.ref}`).sort() }
          : { kind: r.kind, arbiter: r.arbiter })
        if (norm(first.value!) !== norm(second.value!)) {
          error(reporter, messages.orderLawBroken(def.name))
          contest(messages.resolutionDependsOnOrder())
          continue
        }
        const res = first.value!
        if (res.kind === ResolutionKind.apply) {
          // Law 7: the resolution returns only claims it was given.
          const outside = [...res.order, ...(res.replaced ?? []).flat()].filter((v) => !claimants.includes(v.node))
          const outsider = head(outside)
          if (outsider) {
            error(reporter, messages.givenLawBroken(def.name, outsider.title))
            contest(messages.resolutionReturnedOutsider())
            continue
          }
          record.applied = uniq(res.order.map((v) => v.node))
          record.replaced = (res.replaced ?? []).map(([a, b]) => [a.node, b.node])
          record.reason = res.reason
        } else {
          contest(res.reason, res.arbiter)
        }
        record.because = [...first.reads].filter((n) => n !== target && !claimants.includes(n)).sort(byRef)
      }
    }

    // Application: the winners in the order returned; a contest leaves a hole.
    const apply = (c: ClaimRecord) => {
      const tm = meta(c.target)
      if (references.isWholeNode(c.path)) {
        tm.repealedBy = c.by
        return
      }
      tm.base ??= cloneData(tm.data)
      const previous = getPath(tm.data, c.path)
      let value = c.value
      if (tm.def.fields[references.firstSegment(c.path)]?.type === FieldType.fn && values.isFunction(value)) {
        const before = isHole(previous) ? () => { throw new Hole(c.target, c.path) } : previous
        value = (c.value as (p: unknown) => unknown)(before)
      }
      setPath(tm.data, c.path, value)
      const entry = (tm.amendedBy ??= []).find((a) => a.by === c.by)
      if (entry) entry.paths.push(c.path)
      else tm.amendedBy.push({ by: c.by, paths: [c.path] })
    }
    for (const { group, record } of plans) {
      const tm = meta(record.target)
      if (record.outcome === ResolutionOutcome.contested) {
        tm.contested ??= new Set()
        for (const p of record.paths) {
          tm.contested.add(p)
          if (references.isWholeNode(p)) continue // the repeal is contested: the node stays
          tm.base ??= cloneData(tm.data)
          setPath(tm.data, p, HOLE)
        }
        continue
      }
      for (const by of record.applied) {
        group.filter((c) => c.by === by).sort((a, b) => depth(a.path) - depth(b.path) || a.path.localeCompare(b.path)).forEach(apply)
      }
    }
    const resolutions = plans.map((p) => p.record)

    // 4. Consolidated graph. -------------------------------------------------------------------
    const edges = [...buildEdges(inactive, true), ...derived]
    const repealed = (n: AnyNode) => !!meta(n).repealedBy

    // Laws of the graph: no cycles, everything is connected to a root.
    const acyclic = new Set(kinds.flatMap((k) => Object.entries(k.edges).filter(([, e]) => e.acyclic).map(([name]) => name)))
    for (const name of acyclic) {
      const sub = edges.filter((e) => e.name === name)
      const [first] = sub
      const starts = deps.cycles.cycleStarts(nodes, (n) => sub.filter((e) => e.from === n).map((e) => e.to))
      for (const n of starts) error(n, messages.cycleOnEdge(first.label))
    }
    if (kinds.some((k) => k.root)) {
      const reached = new Set(nodes.filter((n) => meta(n).def.root))
      const queue = [...reached]
      while (queue.length) {
        const n = queue.shift()!
        for (const e of edges) {
          if (e.derived) continue
          const next = e.from === n ? e.to : e.to === n ? e.from : undefined
          if (next && !reached.has(next)) {
            reached.add(next)
            queue.push(next)
          }
        }
      }
      for (const n of nodes) {
        if (!reached.has(n) && !repealed(n)) {
          diags.push({ severity: Severity.warning, origin: Origin.graph, node: n, what: messages.notConnectedToRoot(kinds.filter((k) => k.root).map((k) => k.label.one)) })
        }
      }
    }

    const blocked = new Map<string, Map<string, { what: string; of: AnyNode; count: number }>>()
    const results = new Map<AnyNode, unknown>()
    const effects = new Map<AnyNode, string[]>()
    // Filled after the bodies are checked, before anything is run.
    const refused = new Set<AnyNode>()
    const g: GraphImpl = makeGraph({
      moment: Moment.consolidated, today, nodes, edges, infos, inactive, results, effects,
      wire: (deps, env) => wireDeps({ graph: g, root: l.root, today, refused }, deps, env),
      plan: (entries, env) => plan({ graph: g, root: l.root, today, refused }, entries, env),
      evidence: l.evidence,
      onBlocked: (hole, what, of) => {
        const byKey = blocked.get(hole.key) ?? new Map()
        const k = `${what}|${of.ref}`
        const cur = byKey.get(k) ?? { what, of: of.node, count: zero }
        cur.count++
        byKey.set(k, cur)
        blocked.set(hole.key, byKey)
      },
      onStatusError: (n, e) => error(n, messages.hookFailed(KindHook.status, e.message)),
    })
    // Effects: those of the node, plus those of everything it depends on at run time.
    const own = new Map<AnyNode, readonly string[]>()
    for (const n of nodes) {
      const def = meta(n).def
      try {
        own.set(n, def.effects ? def.effects(g.self(n) as never) : [])
      } catch (e) {
        if (!(e instanceof Hole)) error(n, messages.hookFailed(KindHook.effects, message(e)))
        own.set(n, [])
      }
    }
    const visiting = new Set<AnyNode>()
    const effectsOf = (n: AnyNode): string[] => {
      const known = effects.get(n)
      if (known) return known
      if (visiting.has(n)) return [...(own.get(n) ?? [])]
      visiting.add(n)
      const set = new Set(own.get(n) ?? [])
      for (const e of edges) {
        if (e.from === n && e.param !== undefined && e.stage === Stage.execution) for (const x of effectsOf(e.to)) set.add(x)
      }
      visiting.delete(n)
      const out = [...set].sort()
      effects.set(n, out)
      return out
    }
    for (const n of nodes) effectsOf(n)

    // Constants: each one has a value (a text or a number) and a meaning, and does not bear the name of a dependency.
    for (const n of nodes) {
      const { def, data } = meta(n)
      for (const [k, f] of Object.entries(def.fields)) {
        const v = data[k]
        if (f.type !== FieldType.constants || v === undefined) continue
        if (!v || !values.isObject(v) || isHole(v)) {
          error(n, messages.constantsExpected(f.label ?? k))
          continue
        }
        const params = new Set(depsOf(n).map(([p]) => p))
        for (const [name, c] of Object.entries(v as Record<string, { value?: unknown; meaning?: unknown }>)) {
          const value = c && values.isObject(c) ? c.value : undefined
          const meaning = c && values.isObject(c) ? c.meaning : undefined
          if ((!values.isText(value) && !values.isNumber(value)) || !values.isText(meaning) || !meaning.trim()) {
            error(n, messages.constantNeedsValueAndMeaning(name))
          }
          if (params.has(name)) error(n, messages.constantNamedLikeDependency(name))
          // A refinement has the value of the constant it refines.
          const refined = c && values.isObject(c) ? (c as Constant).refines : undefined
          if (refined && constantsOf(refined.node)[refined.name] !== value) {
            error(n, messages.refinementDiffers(name, references.join([meta(refined.node).id ?? refined.name, refined.name])))
          }
        }
      }
    }

    // Bodies: the driver of their language checks them, whether inline (TypeScript, the language of the graph) or in a file.
    for (const n of nodes) {
      const { def, data } = meta(n)
      for (const [k, f] of Object.entries(def.fields)) {
        const v = data[k]
        if (f.type === FieldType.body && values.isFunction(v)) {
          const info = l.infos.get(n)
          const deps = depsOf(n, f.stage ?? Stage.execution).map(([p]) => p)
          if (info) {
            for (const issue of graphDriver().check(inlineSource(l.root, info, k), { ambient: !!def.ambient, deps, root: l.root })) {
              diags.push({ severity: issue.severity, origin: Origin.code, node: n, what: messages.inlineBodyIssue(issue.what) })
            }
          }
          continue
        }
        if (f.type !== FieldType.body || !isFileBody(v)) continue
        const driver = driverFor(v.language)
        if (!driver) {
          diags.push({ severity: Severity.warning, origin: Origin.code, node: n, what: messages.noDriverForLanguage(v.language) })
          continue
        }
        const file = bodyPath({ graph: g, root: l.root, today }, n, v)
        const deps = depsOf(n, f.stage ?? Stage.execution).map(([p]) => p)
        for (const issue of driver.check({ key: file, file }, { ambient: !!def.ambient, deps, root: l.root })) {
          diags.push({ severity: issue.severity, origin: Origin.code, node: n, what: messages.fileBodyIssue(v.file, issue.what) })
        }
      }
    }

    // Literals to specify: one warning per node, if the project asks for it.
    if (l.reportLiterals) {
      for (const n of nodes) {
        const items = (l.literals.get(n) ?? []).flatMap((x) => x.items).filter((i) => !i.declaredBy)
        if (!items.length) continue
        const byCategory = tally(items, (i) => i.category)
        diags.push({ severity: Severity.warning, origin: Origin.code, node: n, what: messages.literalsToSpecify(items.length, [...byCategory].sort(([, a], [, b]) => b - a)) })
      }
    }

    // A refused body (hidden dependency, access to the platform…) is never run, neither by a scenario nor at assembly.
    for (const d of diags) if (d.origin === Origin.code && d.severity === Severity.error && d.node) refused.add(d.node)

    // Refused literals: a value the project wants declared, written as it is in a body. One error per node, with each
    // place. The body still runs: a literal hides a meaning, it does not reach the platform.
    for (const n of nodes) {
      const literals = (l.literals.get(n) ?? []).flatMap((x) => x.items.map((i) => ({ ...i, file: x.file })))
        .filter((i) => !i.declaredBy && l.refusedLiterals.includes(i.raw))
      if (any(literals)) diags.push({ severity: Severity.error, origin: Origin.code, node: n, what: messages.literalsRefused(literals.map((i) => `${i.value} (${i.file}:${i.line})`)) })
    }

    for (const n of nodes) {
      const def = meta(n).def
      if (!def.evaluate || repealed(n) || opts.evaluate === false) continue
      try {
        results.set(n, await def.evaluate(g.self(n) as never, g))
      } catch (e) {
        if (!(e instanceof Hole)) error(n, messages.hookFailed(KindHook.evaluate, message(e)))
      }
    }
    for (const n of nodes) g.status(n)

    // Holes: values to decide, contested claims, then those of each kind. ---------------------
    const effectOf = (n: AnyNode, paths: string[]): string | undefined => {
      const keys = paths.map((p) => (p ? `${refOf(n)}.${p}` : refOf(n)))
      const hits = [...blocked].filter(([k]) => keys.some((x) => k === x || k.startsWith(x + "."))).flatMap(([, m]) => [...m.values()])
      if (hits.length) return messages.blocks(hits.map((b) => ({ count: b.count, what: b.what, of: title(b.of) })))
      const dependents = uniq(edges.filter((e) => e.to === n && !e.derived).map((e) => e.from))
      return dependents.length ? messages.concerns(dependents.map(title)) : undefined
    }

    for (const n of nodes) {
      const { def, data, contested } = meta(n)
      if (repealed(n)) continue
      const isContested = (path: string) => [...(contested ?? [])].some((p) => overlaps(p, path))
      const todo: string[] = []
      const scan = (v: unknown, path: string) => {
        if (isHole(v)) {
          if (!isContested(path)) todo.push(path)
        } else if (v !== null && values.isObject(v) && !isNode(v) && !Array.isArray(v)) {
          for (const [k, x] of Object.entries(v)) scan(x, references.join([path, k]))
        }
      }
      for (const [k, f] of Object.entries(def.fields)) if (f.type !== FieldType.patch) scan(data[k], k)
      for (const path of todo) {
        const [first, ...rest] = references.segments(path)
        const forCase = rest.length ? references.join(rest) : undefined
        const what = first === def.main || first === def.callable
          ? messages.decide(title(n), undefined, forCase)
          : messages.decide(title(n), def.fields[first]?.label ?? first, forCase)
        diags.push({ severity: Severity.blocking, origin: Origin.value, node: n, what, owner: ownerOf(n), effect: effectOf(n, [path]) })
      }
    }

    for (const r of resolutions.filter((x) => x.outcome === ResolutionOutcome.contested)) {
      const paths = r.paths.map((p) => (references.isWholeNode(p) ? messages.wholeNode() : p))
      diags.push({
        severity: Severity.blocking,
        origin: Origin.resolution,
        node: r.target,
        what: messages.settle(title(r.target), paths, r.claimants.map((c) => ({ title: title(c), owner: ownerOf(c) }))),
        owner: r.arbiter ?? ownerOf(r.target),
        effect: effectOf(r.target, r.paths) ?? r.reason,
      })
    }

    for (const n of nodes) {
      const def = meta(n).def
      if (!def.holes || repealed(n)) continue
      let list: HoleSpec[] = []
      try {
        list = def.holes(g.self(n) as never, g).filter((x): x is HoleSpec => !!x)
      } catch (e) {
        if (!(e instanceof Hole)) error(n, messages.hookFailed(KindHook.holes, message(e)))
      }
      for (const x of list) {
        const on = x.on ? x.on.node : n
        diags.push({ severity: x.severity, origin: Origin.kind, node: on, what: x.what, owner: x.owner ?? ownerOf(on) ?? ownerOf(n), effect: x.effect })
      }
    }

    diags.sort((a, b) => deps.severityOrder(a.severity) - deps.severityOrder(b.severity))
    return { today, modules, moduleTitle, nodes, edges, diags, claims, resolutions, graph: g, typeErrors, literals: l.literals, refusedLiterals: l.refusedLiterals }
  }

  return { moduleOf, loadKinds, load, compile, compileAt }
}

export type Api = ReturnType<typeof body>
export default body
