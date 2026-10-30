// The Compilation: what views see of the compiled graph.
// The traversal API, plus what the compilation found (holes, claims, overlaps, publication),
// and the standard composition of a node's card from what its kind renders.

import { BlockType, ClaimOutcome, ClaimSide, DateRole, Direction, FieldType, JsonMark, Nature, ResolutionOutcome, RuleState, Severity, Stage, Validity, ValueType, ViewName, ViewScope, doc, unitOf } from "../../../trame/kernel"
import type {
  ProvidedBy, AnyKind, AnyNode, Block, Card, ClaimInfo, Compilation, DateInfo, Fact, FigureEdge, FigureNode, Inline, Issue,
  IssueItem, KindInfo, NodeRef, ResolutionBlock, ResolutionInfo, View, LiteralInfo, LanguageLiteral, ViewDef, LibraryInfo,
} from "../../../trame/kernel"
import type { Layout, Prelude } from "../../architecture"
import type { Uri } from "../../standards"
import type { ViewMessages } from "../../messages"
import type { Punctuation } from "../../documents"
import type { DocumentIds } from "../../conventions"
import type { Counts, Sequences, Texts, ValueTypes } from "../../algebra"
import type { ClaimRecord, Compiled, Diag, ResolutionRecord } from "./compiler"

export interface CompilationOptions {
  published?: Set<string>
  lockIssues?: Diag[]
  /** The views of the project (by default, all those of the registry). */
  views?: ViewDef[]
}

export interface Deps {
  values: ProvidedBy<typeof ValueTypes>
  rank: number
  positions: { reference(file: string, line: number): string }
  references: { firstSegment(path: string): string; join(steps: string[]): string }
  prelude: Prelude
  counts: ProvidedBy<typeof Counts>
  sequences: ProvidedBy<typeof Sequences>
  texts: ProvidedBy<typeof Texts>
  punctuation: ProvidedBy<typeof Punctuation>
  ids: ProvidedBy<typeof DocumentIds>
  /** Where a library keeps its documents: the layout of every project. */
  layout: Layout
  uri: ProvidedBy<typeof Uri>
  messages: ProvidedBy<typeof ViewMessages>
}

const body = (deps: Deps) => {
  const { values } = deps
  const { kinds, views, meta, refOf, isHole, overlaps, REMOVE, Hole } = deps.prelude.internal
  const { messages } = deps
  const { zero, isEmpty, several } = deps.counts
  const { head } = deps.sequences
  const { concat, optional } = deps.texts
  const { parts, items, givenBy, opensAside, closesAside } = deps.punctuation

  const byOrder = (a: AnyKind, b: AnyKind) => (a.order ?? deps.rank) - (b.order ?? deps.rank)

  function makeCompilation(c: Compiled, o: CompilationOptions = {}): Compilation {
    const g = c.graph
    const view = (n: AnyNode) => g.view(n)
    const defOf = (v: View): AnyKind => meta(v.node).def
    const nref = (v: View): NodeRef => ({ ref: v.ref, title: v.title })
    const kindInfo = (k: AnyKind): KindInfo => ({
      name: k.name, label: k.label, order: k.order ?? deps.rank, root: !!k.root, history: !!k.history, inline: k.inline,
      fields: Object.entries(k.fields).map(([name, f]) => ({ name, type: f.type, label: f.label, role: f.role })),
    })
    const toIssue = (d: Diag): Issue => ({
      severity: d.severity, origin: d.origin, what: d.what, node: d.node && view(d.node), module: d.node ? meta(d.node).module : d.module,
      where: d.where, owner: d.owner, effect: d.effect,
    })
    const allIssues = () => c.diags.map(toIssue)
    /** Where a node is declared: its file, then its line; a node without a declaration, by its reference. */
    const location = (v: View): [string, number] => (v.decl ? [v.decl.file, v.decl.line] : [v.ref, zero])
    const byLocation = (a: View, b: View) => {
      const [fileA, lineA] = location(a)
      const [fileB, lineB] = location(b)
      return fileA.localeCompare(fileB) || lineA - lineB
    }
    const projectViews = o.views ?? views
    const nodeViews = () => projectViews.filter((x) => x.per === ViewScope.node).sort((a, b) => (a.order ?? deps.rank) - (b.order ?? deps.rank))
    const perModule = () => projectViews.filter((x) => x.per === ViewScope.module).sort((a, b) => (a.order ?? deps.rank) - (b.order ?? deps.rank))

    const value = (target: View, path: string, raw: unknown): Inline => {
      const first = deps.references.firstSegment(path)
      const info = target.fieldInfo(first)
      const nodeUnit = unitOf(head(target.decl?.typeArgs))
      const unit = info?.type === FieldType.duration || info?.type === FieldType.percent || info?.type === FieldType.chf
        ? info.type
        : info?.type === FieldType.value || info?.type === FieldType.range ? nodeUnit : undefined
      const type = info?.type === FieldType.date ? ValueType.date
        : info?.type === FieldType.range && first === path ? ValueType.range
        : info?.type === FieldType.map && first === path ? ValueType.map : undefined
      const contested = isHole(raw) && target.contested.some((p) => overlaps(p, path))
      if (values.isFunction(raw)) return doc.value(raw, undefined, { rule: RuleState.original })
      return doc.value(raw, unit, { type, contested })
    }

    const resolutionInfo = (r: ResolutionRecord): ResolutionInfo => ({
      target: view(r.target), paths: r.paths, claimants: r.claimants.map(view), outcome: r.outcome,
      applied: r.applied.map(view), replaced: r.replaced.map(([a, b]) => [view(a), view(b)]),
      reason: r.reason, arbiter: r.arbiter, because: r.because.map(view),
    })

    const claimInfo = (x: ClaimRecord): ClaimInfo => {
      const target = view(x.target)
      const base = x.path ? target.base(x.path) : undefined
      const before: Inline = !x.path ? Validity.inForce : values.isFunction(base) ? doc.value(base, undefined, { rule: RuleState.original }) : value(target, x.path, base)
      const after: Inline = x.value === REMOVE ? JsonMark.removed : values.isFunction(x.value) ? doc.value(x.value, undefined, { rule: RuleState.redefined }) : value(target, x.path, x.value)
      const info = { by: view(x.by), target, path: x.path, active: x.active, before, after, winners: [] as View[] }
      if (!x.active) return { ...info, outcome: ClaimOutcome.notInForce }
      const r = c.resolutions.find((y) => y.target === x.target && y.claimants.includes(x.by) && y.paths.some((p) => overlaps(p, x.path)))
      if (!r) return { ...info, outcome: ClaimOutcome.applied }
      const winners = r.applied.map(view)
      const replacedBy = head(r.replaced.filter(([, lost]) => lost === x.by).map(([winner]) => winner))
      if (r.outcome === ResolutionOutcome.contested) return { ...info, outcome: ClaimOutcome.contested, reason: r.reason, arbiter: r.arbiter }
      if (r.applied.includes(x.by)) return { ...info, outcome: ClaimOutcome.applied, winners, reason: several(r.claimants) ? r.reason : undefined }
      if (replacedBy) return { ...info, outcome: ClaimOutcome.replaced, winners, replacedBy: view(replacedBy), reason: r.reason }
      return { ...info, outcome: ClaimOutcome.discarded, winners, reason: r.reason }
    }

    const render = (v: View): Block[] => {
      const def = defOf(v)
      if (!def.render || v.repealedBy) return []
      try {
        return def.render(g.self(v.node) as never, g)
      } catch (e) {
        if (e instanceof Hole) return [doc.para(messages.cannotRender())]
        throw e
      }
    }

    const natureOf = (e: { inferred: boolean; derived: boolean }): Nature => (e.derived ? Nature.computed : e.inferred ? Nature.inferred : Nature.declared)

    /** The path of a library's file, from the project's root. */
    const under = (...steps: string[]) => steps.join(deps.uri.pathSeparator)
    const comp: Compilation = Object.assign(Object.create(g) as Compilation, {
      // What a view reads as the graph is the project's own: a library's nodes are reached through the edges.
      all: (kind?: string) => g.all(kind).where((v) => v.library === undefined),
      modules: () => c.modules.map((id) => ({ id, title: c.moduleTitle.get(id) ?? id })),
      libraries: (): LibraryInfo[] => c.libraries.map((lib) => ({
        name: lib.name,
        path: lib.path,
        index: under(lib.path, deps.layout.documents, ViewName.index + deps.layout.documentExtension),
        modules: lib.modules.map((id) => ({ id, title: c.moduleTitle.get(id) ?? id })),
        nodes: lib.nodes.length,
        issues: lib.diags.map(toIssue),
      })),
      kinds: () => [...kinds].sort(byOrder).map(kindInfo),
      kindOf: (v: View) => kindInfo(defOf(v)),
      moduleDoc: (module: string) => {
        const first = head(perModule())
        return first && several(perModule()) ? first.name + deps.ids.ofModule + module : module
      },

      issues: (scope: { node?: View; module?: string } = {}) =>
        allIssues().filter((i) =>
          (!scope.node || i.node?.node === scope.node.node) && (!scope.module || i.module === scope.module)),
      lockIssues: () => (o.lockIssues ?? []).map(toIssue),
      published: (v: View) => (o.published ? o.published.has(v.ref) : undefined),

      claims: (v: View, side: ClaimSide) =>
        c.claims
          .filter((x) => (side === ClaimSide.on ? x.target : x.by) === v.node)
          .map(claimInfo)
          .sort((a, b) => byLocation(a.by, b.by) || a.path.localeCompare(b.path)),
      resolutions: (v?: View) =>
        c.resolutions
          .filter((r) => several(r.claimants) && (!v || r.target === v.node || r.claimants.includes(v.node)))
          .map(resolutionInfo),

      value,
      resolution: (r: ResolutionInfo): ResolutionBlock => ({
        type: BlockType.resolution, target: nref(r.target), paths: r.paths, claimants: r.claimants.map(nref), outcome: r.outcome,
        applied: r.applied.map(nref), replaced: r.replaced.map(([a, b]) => [nref(a), nref(b)]), reason: r.reason,
        arbiter: r.arbiter, because: r.because.map(nref),
      }),
      issueItem: (i: Issue): IssueItem => ({
        severity: i.severity, what: i.what,
        where: i.node ? nref(i.node) : i.where,
        source: i.node?.decl ? deps.positions.reference(i.node.decl.file, i.node.decl.line) : i.where,
        owner: i.owner, effect: i.effect,
      }),

      card: (v: View): Card => {
        /** The constants that the node declares, as a table: their name, their value, their meaning. */
        const constantsBlocks = (v: View): Block[] => {
          const def = defOf(v)
          const out: Block[] = []
          for (const [k, f] of Object.entries(def.fields)) {
            const raw = v.field(k)
            if (f.type !== FieldType.constants || def.renderOwns?.includes(k) || !raw || !values.isObject(raw) || isHole(raw)) continue
            // A value bordered by blanks (a space, a newline), or the empty text, is written as in the code, between quotes:
            // otherwise it does not show.
            const shown = (x: unknown) => (values.isText(x) && (x.trim() !== x || isEmpty(x)) ? JSON.stringify(x) : String(x))
            // A constant that refines another one says which.
            const meaningOf = (c: { meaning?: unknown; refines?: { node: AnyNode; name: string } } | undefined) => c?.refines
              ? messages.refiningMeaning(optional(c.meaning, String), deps.references.join([g.view(c.refines.node).id, c.refines.name]))
              : optional(c?.meaning, String)
            const rows = Object.entries(raw as Record<string, { value?: unknown; meaning?: unknown; refines?: { node: AnyNode; name: string } }>)
              .map(([name, c]): Inline[][] => [[doc.ident(name)], [doc.ident(shown(c?.value))], [meaningOf(c)]])
            if (rows.length) out.push(doc.table([messages.constantColumn(), messages.valueColumn(), messages.meaningColumn()], rows))
          }
          return out
        }
        const def = defOf(v)
        const repealed = v.repealedBy
        const facts: Fact[] = []
        for (const [k, f] of Object.entries(def.fields)) {
          const raw = v.field(k)
          if (f.type === FieldType.body) {
            if (raw !== undefined) {
              const file = raw as { file?: string; language?: string }
              const where: Inline[] = values.isObject(raw) && raw !== null && file.file
                ? [doc.ident(file.file), concat([opensAside, optional(file.language), closesAside])]
                : [messages.inlineBody()]
              facts.push({ label: f.stage === Stage.provisioning ? messages.provisioningLabel() : messages.bodyLabel(), value: where })
            }
            continue
          }
          if (f.type === FieldType.constants) continue // said in the body of the card, as a table
          if (f.type === FieldType.deps) {
            const mine = v.dependencies.filter((d) => d.stage === (f.stage ?? Stage.execution))
            if (mine.length) {
              facts.push({
                label: f.label ?? messages.parametersLabel(),
                value: mine.flatMap((d, i): Inline[] => [...(i ? [parts] : []), doc.ident(d.name), givenBy, doc.ref(d.node)]),
              })
            }
            continue
          }
          if (!f.label || raw === undefined || (def.renderOwns?.includes(k) && !repealed)) continue
          const shown: Inline = f.type === FieldType.person && values.isText(raw) ? doc.person(raw)
            : f.type === FieldType.text && values.isText(raw) ? raw
            : value(v, k, raw)
          facts.push({ label: f.label, value: [shown] })
        }
        if (v.effects.length) facts.push({ label: messages.effectsLabel(), value: [v.effects.join(items)] })
        const isChild = (e: { name: string; other: View }) => defOf(e.other).inline === e.name
        const groups = new Map<string, Card["links"][number]>()
        const add = (label: string, nature: Nature, active: boolean, target: View) => {
          const key = JSON.stringify([label, nature, active])
          const cur = groups.get(key) ?? { label, nature, active, targets: [] }
          if (!cur.targets.some((t) => t.ref === target.ref)) cur.targets.push(nref(target))
          groups.set(key, cur)
        }
        // The named dependencies are already said in the parameters.
        for (const e of g.edges(v, Direction.out)) if (e.param === undefined) add(e.label, natureOf(e), e.active, e.other)
        for (const e of g.edges(v, Direction.in)) if (!isChild(e)) add(e.inverse, natureOf(e), e.active, e.other)
        return {
          type: BlockType.card,
          ref: v.ref, id: v.id, title: v.title, module: v.module, kind: v.kind, kindLabel: def.label.one,
          source: v.decl ? deps.positions.reference(v.decl.file, v.decl.line) : undefined,
          status: v.status,
          published: comp.published(v),
          repealedBy: repealed && nref(repealed),
          description: v.decl?.description,
          history: !!def.history,
          active: v.active,
          body: [...render(v), ...constantsBlocks(v)],
          facts,
          links: [...groups.values()],
          resolutions: comp.resolutions(v).map(comp.resolution),
          children: g.edges(v, Direction.in).filter(isChild).map((e) => ({ ref: e.other.ref, body: render(e.other) })),
          views: nodeViews().filter((x) => !x.applies || x.applies(v, comp)).map((x) => ({ name: x.name, label: x.label })),
        }
      },

      figureNode: (v: View, layer: number): FigureNode => {
        const def = defOf(v)
        return {
          ref: v.ref, title: v.title, kind: v.kind, kindLabel: def.label.one, module: v.module, status: v.status,
          active: v.active, history: !!def.history, root: !!def.root, repealed: !!v.repealedBy,
          open: c.diags.some((d) => d.node === v.node && d.severity === Severity.blocking), layer,
        }
      },
      figureEdges: (nodes: View[]): FigureEdge[] => {
        const set = new Set(nodes.map((v) => v.node))
        return c.edges
          .filter((e) => set.has(e.from) && set.has(e.to))
          .map((e) => ({
            from: refOf(e.from), to: refOf(e.to), label: e.label, inverse: e.inverse,
            nature: natureOf(e), active: e.active,
          }))
      },

      summary: (issues: Issue[], nodes: View[]): Inline[] => {
        const count = (s: Severity) => issues.filter((i) => i.severity === s).length
        const counted: string[] = []
        if (count(Severity.blocking)) counted.push(messages.decisionsToTake(count(Severity.blocking)))
        if (count(Severity.error)) counted.push(messages.errors(count(Severity.error)))
        if (count(Severity.warning)) counted.push(messages.pointsToWatch(count(Severity.warning)))
        for (const k of [...kinds].sort(byOrder)) {
          const mine = nodes.filter((v) => v.kind === k.name && !v.repealedBy)
          if (!k.summary || !mine.length) continue
          const s = k.summary(mine.map((v) => g.self(v.node)) as never, g)
          if (s) counted.push(s)
        }
        return [counted.join(parts) || messages.nothingToReport()]
      },

      dates: (): DateInfo[] => {
        const out: DateInfo[] = []
        for (const n of c.nodes) {
          const v = view(n)
          if (v.repealedBy) continue
          for (const [k, f] of Object.entries(defOf(v).fields)) {
            const raw = v.field(k)
            if (f.type !== FieldType.date || !values.isText(raw)) continue
            out.push({ date: raw, label: f.label ?? k, role: f.role ?? DateRole.deadline, node: v })
          }
        }
        return out.sort((a, b) => a.date.localeCompare(b.date) || a.node.title.localeCompare(b.node.title))
      },

      literals: (v?: View): LiteralInfo[] =>
        [...c.literals].filter(([n]) => !v || n === v.node).flatMap(([n, groups]) =>
          groups.flatMap((gr) => gr.items.map((i): LiteralInfo => ({ node: view(n), file: gr.file, ...i })))),

      languageLiterals: (): LanguageLiteral[] =>
        c.language.flatMap((gr) => gr.items.map(({ declaredBy: _declared, ...i }): LanguageLiteral => ({ file: gr.file, ...i }))),

      counts: () => ({
        edges: c.edges.length,
        inferred: c.edges.filter((e) => e.inferred).length,
        derived: c.edges.filter((e) => e.derived).length,
      }),
    })
    return comp
  }

  return { makeCompilation }
}

export type Api = ReturnType<typeof body>
export default body
