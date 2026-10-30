// La Compilation : ce que les vues voient du graphe compilé.
// L'API de parcours, plus ce que la compilation a trouvé (trous, revendications, recoupements, publication),
// et la composition standard d'une fiche de nœud à partir de ce que rend son type.

import { doc, unitOf, plural } from "../../../trame/kernel"
import type { Prelude } from "../../architecture"
import type { ClaimRecord, Compiled, Diag, ResolutionRecord } from "./compilateur"
import type { Hole } from "#trame/interne"
import type { AnyKind, AnyNode, Block, Card, ClaimInfo, Compilation, DateInfo, Fact, FigureEdge, FigureNode, Inline, Issue, IssueItem, KindInfo, Nature, NodeRef, ResolutionBlock, ResolutionInfo, Severity, View, LiteralInfo, ViewDef } from "../../../trame/kernel"

export interface CompilationOptions {
  published?: Set<string>
  lockIssues?: Diag[]
  /** Les vues du projet (par défaut, toutes celles du registre). */
  views?: ViewDef[]
}

export interface Deps {
  rang: number
  prelude: Prelude
}

const corps = (deps: Deps) => {
  const { kinds, views, meta, refOf, isHole, overlaps, REMOVE, Hole } = deps.prelude.interne

  const byOrder = (a: AnyKind, b: AnyKind) => (a.order ?? deps.rang) - (b.order ?? deps.rang)

  function makeCompilation(c: Compiled, o: CompilationOptions = {}): Compilation {
    const g = c.graph
    const view = (n: AnyNode) => g.view(n)
    const defOf = (v: View): AnyKind => meta(v.node).def
    const nref = (v: View): NodeRef => ({ ref: v.ref, title: v.title })
    const kindInfo = (k: AnyKind): KindInfo => ({
      name: k.name, label: k.label, order: k.order ?? deps.rang, root: !!k.root, history: !!k.history, inline: k.inline,
      fields: Object.entries(k.fields).map(([name, f]) => ({ name, type: f.type, label: f.label, role: f.role })),
    })
    const toIssue = (d: Diag): Issue => ({
      severity: d.severity, origin: d.origin, what: d.what, node: d.node && view(d.node), module: d.node ? meta(d.node).module : d.module,
      where: d.where, owner: d.owner, effect: d.effect,
    })
    const allIssues = () => c.diags.map(toIssue)
    const location = (v: View) => (v.decl ? `${v.decl.file}:${String(v.decl.line).padStart(6, "0")}` : v.ref)
    const projectViews = o.views ?? views
    const nodeViews = () => projectViews.filter((x) => x.per === "nœud").sort((a, b) => (a.order ?? deps.rang) - (b.order ?? deps.rang))
    const perModule = () => projectViews.filter((x) => x.per === "module").sort((a, b) => (a.order ?? deps.rang) - (b.order ?? deps.rang))

    const value = (target: View, path: string, raw: unknown): Inline => {
      const first = path.split(".")[0]
      const info = target.fieldInfo(first)
      const nodeUnit = unitOf(target.decl?.typeArgs[0])
      const unit = info?.type === "duration" || info?.type === "percent" || info?.type === "chf"
        ? info.type
        : info?.type === "value" || info?.type === "range" ? nodeUnit : undefined
      const type = info?.type === "date" ? "date" as const
        : info?.type === "range" && first === path ? "range" as const
        : info?.type === "map" && first === path ? "map" as const : undefined
      const contested = isHole(raw) && target.contested.some((p) => overlaps(p, path))
      if (typeof raw === "function") return doc.value(raw, undefined, { rule: "d'origine" })
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
      const before: Inline = !x.path ? "en vigueur" : typeof base === "function" ? doc.value(base, undefined, { rule: "d'origine" }) : value(target, x.path, base)
      const after: Inline = x.value === REMOVE ? "abrogé" : typeof x.value === "function" ? doc.value(x.value, undefined, { rule: "redéfinie" }) : value(target, x.path, x.value)
      const info = { by: view(x.by), target, path: x.path, active: x.active, before, after, winners: [] as View[] }
      if (!x.active) return { ...info, outcome: "pas en vigueur" }
      const r = c.resolutions.find((y) => y.target === x.target && y.claimants.includes(x.by) && y.paths.some((p) => overlaps(p, x.path)))
      if (!r) return { ...info, outcome: "appliqué" }
      const winners = r.applied.map(view)
      const replacedBy = r.replaced.find(([, lost]) => lost === x.by)?.[0]
      if (r.outcome === "contesté") return { ...info, outcome: "contesté", reason: r.reason, arbiter: r.arbiter }
      if (r.applied.includes(x.by)) return { ...info, outcome: "appliqué", winners, reason: r.claimants.length > 1 ? r.reason : undefined }
      if (replacedBy) return { ...info, outcome: "remplacé", winners, replacedBy: view(replacedBy), reason: r.reason }
      return { ...info, outcome: "écarté", winners, reason: r.reason }
    }

    const render = (v: View): Block[] => {
      const def = defOf(v)
      if (!def.render || v.repealedBy) return []
      try {
        return def.render(g.self(v.node) as never, g)
      } catch (e) {
        if (e instanceof Hole) return [doc.para("Rendu impossible : une valeur n'est pas décidée.")]
        throw e
      }
    }

    const comp: Compilation = Object.assign(Object.create(g) as Compilation, {
      modules: () => c.modules.map((id) => ({ id, title: c.moduleTitle.get(id) ?? id })),
      kinds: () => [...kinds].sort(byOrder).map(kindInfo),
      kindOf: (v: View) => kindInfo(defOf(v)),
      moduleDoc: (module: string) => (perModule().length > 1 ? `${perModule()[0].name}.${module}` : module),

      issues: (scope: { node?: View; module?: string } = {}) =>
        allIssues().filter((i) =>
          (!scope.node || i.node?.node === scope.node.node) && (!scope.module || i.module === scope.module)),
      lockIssues: () => (o.lockIssues ?? []).map(toIssue),
      published: (v: View) => (o.published ? o.published.has(v.ref) : undefined),

      claims: (v: View, side: "sur" | "par") =>
        c.claims
          .filter((x) => (side === "sur" ? x.target : x.by) === v.node)
          .map(claimInfo)
          .sort((a, b) => location(a.by).localeCompare(location(b.by)) || a.path.localeCompare(b.path)),
      resolutions: (v?: View) =>
        c.resolutions
          .filter((r) => r.claimants.length > 1 && (!v || r.target === v.node || r.claimants.includes(v.node)))
          .map(resolutionInfo),

      value,
      resolution: (r: ResolutionInfo): ResolutionBlock => ({
        type: "resolution", target: nref(r.target), paths: r.paths, claimants: r.claimants.map(nref), outcome: r.outcome,
        applied: r.applied.map(nref), replaced: r.replaced.map(([a, b]) => [nref(a), nref(b)]), reason: r.reason,
        arbiter: r.arbiter, because: r.because.map(nref),
      }),
      issueItem: (i: Issue): IssueItem => ({
        severity: i.severity, what: i.what,
        where: i.node ? nref(i.node) : i.where,
        source: i.node?.decl ? `${i.node.decl.file}:${i.node.decl.line}` : i.where,
        owner: i.owner, effect: i.effect,
      }),

      card: (v: View): Card => {
        /** Les constantes que le nœud déclare, en tableau : leur nom, leur valeur, leur sens. */
        const constantsBlocks = (v: View): Block[] => {
          const def = defOf(v)
          const out: Block[] = []
          for (const [k, f] of Object.entries(def.fields)) {
            const raw = v.field(k)
            if (f.type !== "constantes" || def.renderOwns?.includes(k) || !raw || typeof raw !== "object" || isHole(raw)) continue
            const rows = Object.entries(raw as Record<string, { valeur?: unknown; sens?: unknown }>)
              .map(([name, c]): Inline[][] => [[doc.ident(name)], [doc.ident(String(c?.valeur))], [String(c?.sens ?? "")]])
            if (rows.length) out.push(doc.table(["Constante", "Valeur", "Sens"], rows))
          }
          return out
        }
        const def = defOf(v)
        const repealed = v.repealedBy
        const facts: Fact[] = []
        for (const [k, f] of Object.entries(def.fields)) {
          const raw = v.field(k)
          if (f.type === "body") {
            if (raw !== undefined) {
              const file = raw as { file?: string; language?: string }
              const where: Inline[] = typeof raw === "object" && raw !== null && file.file
                ? [doc.ident(file.file), ` (${file.language})`]
                : ["en ligne, dans la déclaration"]
              facts.push({ label: f.stage === "provisionnement" ? "Provisionnement" : "Corps", value: where })
            }
            continue
          }
          if (f.type === "constantes") continue // dites dans le corps de la fiche, en tableau
          if (f.type === "deps") {
            const mine = v.dependencies.filter((d) => d.stage === (f.stage ?? "exécution"))
            if (mine.length) {
              facts.push({
                label: f.label ?? "Paramètres",
                value: mine.flatMap((d, i): Inline[] => [...(i ? [" · "] : []), doc.ident(d.name), " ← ", doc.ref(d.node)]),
              })
            }
            continue
          }
          if (!f.label || raw === undefined || (def.renderOwns?.includes(k) && !repealed)) continue
          const shown: Inline = f.type === "person" && typeof raw === "string" ? doc.person(raw)
            : f.type === "text" && typeof raw === "string" ? raw
            : value(v, k, raw)
          facts.push({ label: f.label, value: [shown] })
        }
        if (v.effects.length) facts.push({ label: "Effets", value: [v.effects.join(", ")] })
        const isChild = (e: { name: string; other: View }) => defOf(e.other).inline === e.name
        const groups = new Map<string, Card["links"][number]>()
        const add = (label: string, nature: Nature, active: boolean, target: View) => {
          const key = `${label}|${nature}|${active}`
          const cur = groups.get(key) ?? { label, nature, active, targets: [] }
          if (!cur.targets.some((t) => t.ref === target.ref)) cur.targets.push(nref(target))
          groups.set(key, cur)
        }
        const natureOf = (e: { inferred: boolean; derived: boolean }): Nature => (e.derived ? "calculée" : e.inferred ? "déduite" : "déclarée")
        // Les dépendances nommées sont déjà dites dans les paramètres.
        for (const e of g.edges(v, "out")) if (e.param === undefined) add(e.label, natureOf(e), e.active, e.other)
        for (const e of g.edges(v, "in")) if (!isChild(e)) add(e.inverse, natureOf(e), e.active, e.other)
        return {
          type: "card",
          ref: v.ref, id: v.id, title: v.title, module: v.module, kind: v.kind, kindLabel: def.label.one,
          source: v.decl ? `${v.decl.file}:${v.decl.line}` : undefined,
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
          children: g.edges(v, "in").filter(isChild).map((e) => ({ ref: e.other.ref, body: render(e.other) })),
          views: nodeViews().filter((x) => !x.applies || x.applies(v, comp)).map((x) => ({ name: x.name, label: x.label })),
        }
      },

      figureNode: (v: View, layer: number): FigureNode => {
        const def = defOf(v)
        return {
          ref: v.ref, title: v.title, kind: v.kind, kindLabel: def.label.one, module: v.module, status: v.status,
          active: v.active, history: !!def.history, root: !!def.root, repealed: !!v.repealedBy,
          open: c.diags.some((d) => d.node === v.node && d.severity === "bloquant"), layer,
        }
      },
      figureEdges: (nodes: View[]): FigureEdge[] => {
        const set = new Set(nodes.map((v) => v.node))
        return c.edges
          .filter((e) => set.has(e.from) && set.has(e.to))
          .map((e) => ({
            from: refOf(e.from), to: refOf(e.to), label: e.label, inverse: e.inverse,
            nature: e.derived ? "calculée" : e.inferred ? "déduite" : "déclarée", active: e.active,
          }))
      },

      summary: (issues: Issue[], nodes: View[]): Inline[] => {
        const count = (s: Severity) => issues.filter((i) => i.severity === s).length
        const parts: string[] = []
        if (count("bloquant")) parts.push(`${plural(count("bloquant"), "décision")} à prendre`)
        if (count("erreur")) parts.push(plural(count("erreur"), "erreur"))
        if (count("avertissement")) parts.push(`${plural(count("avertissement"), "point")} à surveiller`)
        for (const k of [...kinds].sort(byOrder)) {
          const mine = nodes.filter((v) => v.kind === k.name && !v.repealedBy)
          if (!k.summary || !mine.length) continue
          const s = k.summary(mine.map((v) => g.self(v.node)) as never, g)
          if (s) parts.push(s)
        }
        return [parts.join(" · ") || "Rien à signaler"]
      },

      dates: (): DateInfo[] => {
        const out: DateInfo[] = []
        for (const n of c.nodes) {
          const v = view(n)
          if (v.repealedBy) continue
          for (const [k, f] of Object.entries(defOf(v).fields)) {
            const raw = v.field(k)
            if (f.type !== "date" || typeof raw !== "string") continue
            out.push({ date: raw, label: f.label ?? k, role: f.role ?? "échéance", node: v })
          }
        }
        return out.sort((a, b) => a.date.localeCompare(b.date) || a.node.title.localeCompare(b.node.title))
      },

      literals: (v?: View): LiteralInfo[] =>
        [...c.literals].filter(([n]) => !v || n === v.node).flatMap(([n, groups]) =>
          groups.flatMap((gr) => gr.items.map((i): LiteralInfo => ({ node: view(n), file: gr.file, ...i })))),

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

export type Api = ReturnType<typeof corps>
export default corps
