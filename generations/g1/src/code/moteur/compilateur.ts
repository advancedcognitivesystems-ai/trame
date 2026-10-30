// Compilation du graphe, en couches :
// 1. Lire et exécuter le code : chaque export devient un nœud.
// 2. Graphe figé : qui est en vigueur, et ce que chacun revendique chez les autres.
// 3. Résolution : les revendications qui se recoupent sont tranchées par leur type, ou contestées.
// 4. Graphe consolidé : les valeurs en vigueur, évaluées puis vérifiées.
// Rien ici ne connaît un type particulier : tout passe par les définitions de kinds/.

import type { Chargeur, Chemins, Disposition, LectureFichiers, Prelude } from "../../architecture"
import type { Api as AnalyseApi } from "./analyse"
import type { Api as ProjetApi } from "./projet"
import type { Api as GrapheApi } from "./graphe"
import type { Edge, GraphImpl } from "./graphe"
import type { Api as BranchementApi } from "./branchement"
import type { Api as DriversApi, LiteralFound, LiteralSource } from "./drivers"
import type { Hole, Contested } from "#trame/interne"
import type { AnyNode, AnyKind, Evidence, HoleSpec, Resolution, Severity, StaticInfo } from "../../../trame/kernel"
// À PORTER : export type { Edge }

export interface Diag {
  severity: Severity
  /** D'où vient le problème : une valeur à décider, un recoupement, un type, la structure du graphe, la publication. */
  origin?: "valeur" | "recoupement" | "type" | "graphe" | "publication" | "code"
  node?: AnyNode
  /** Pour un diagnostic sans nœud (un élément publié puis supprimé) : son module et sa référence. */
  module?: string
  where?: string
  what: string
  owner?: string
  effect?: string
}

/** Une revendication telle que déclarée, en vigueur ou non. */
export interface ClaimRecord {
  by: AnyNode
  target: AnyNode
  path: string
  value: unknown
  active: boolean
}

/** Ce que la résolution a fait d'un groupe de revendications qui se recoupent sur une cible. */
export interface ResolutionRecord {
  target: AnyNode
  paths: string[]
  claimants: AnyNode[]
  outcome: "appliqué" | "contesté"
  /** Dans l'ordre d'application. */
  applied: AnyNode[]
  /** [qui remplace, qui est remplacé] */
  replaced: [AnyNode, AnyNode][]
  reason: string
  arbiter?: string
  /** Les nœuds lus pour trancher, hors cible et revendicateurs. */
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
  /** Les références figées dans trame.lock (renseigné par la ligne de commande). */
  published?: Set<string>
  /** Ce que le code fait aux déclarations publiées (renseigné par la ligne de commande). */
  lockIssues?: Diag[]
  /** Les erreurs de type : la compilation les signale, la ligne de commande refuse. */
  typeErrors: string[]
  literals: Map<AnyNode, { file: string; items: LiteralFound[] }[]>
}

/** Le graphe chargé : le code lu et exécuté une fois. On peut ensuite le compiler à autant de dates qu'on veut. */
export interface Loaded {
  root: string
  modules: string[]
  moduleTitle: Map<string, string>
  nodes: AnyNode[]
  /** Les nœuds créés par les modules du projet sans être exportés. */
  anonymous: AnyNode[]
  infos: Map<AnyNode, StaticInfo>
  typeErrors: string[]
  evidence: Map<string, Evidence[]>
  /** Les littéraux de chaque corps de code, relevés par le driver de son langage. */
  literals: Map<AnyNode, { file: string; items: LiteralFound[] }[]>
  /** Le projet demande de les signaler. */
  signalLiterals: boolean
}

export interface Deps {
  disposition: Disposition
  chargeur: Chargeur
  lecture: LectureFichiers
  chemins: Chemins
  analyse: AnalyseApi
  projet: ProjetApi
  graphe: GrapheApi
  branchement: BranchementApi
  drivers: DriversApi
  prelude: Prelude
}

const corps = (deps: Deps) => {
  const { chargeur } = deps
  const { readdirSync, readFileSync, existsSync } = deps.lecture
  const { join, basename, dirname, relative } = deps.chemins
  const { analyze } = deps.analyse
  const { projectDirs } = deps.projet
  const { makeGraph } = deps.graphe
  const { wireDeps, bodyPath, depsOf, plan } = deps.branchement
  const { driverFor } = deps.drivers
  const { kinds, allNodes, meta, isNode, isHole, refOf, ownerOf, Hole, Contested, HOLE, REMOVE, getPath, setPath, cloneData, overlaps, isFileBody } = deps.prelude.interne

  const moduleOf = (d: Diag): string | undefined => (d.node ? meta(d.node).module : d.module)

  const tsFiles = (dir: string) =>
    existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith(".ts")).sort().map((f) => join(dir, f)) : []

  const bodyFiles = (dir: string): string[] =>
    existsSync(dir)
      ? readdirSync(dir, { withFileTypes: true }).filter((e) => e.isDirectory()).sort((a, b) => a.name.localeCompare(b.name)).flatMap((e) => {
          const sub = join(dir, e.name)
          return [...tsFiles(sub), ...bodyFiles(sub)]
        })
      : []

  /** Charge tout le vocabulaire du projet, même les types qu'aucun nœud n'utilise encore. */
  async function loadKinds(root: string): Promise<AnyKind[]> {
    for (const dir of projectDirs(root).kinds) for (const f of tsFiles(dir)) await chargeur.importer(f)
    return kinds
  }

  function loadEvidence(root: string): Map<string, Evidence[]> {
    const out = new Map<string, Evidence[]>()
    const dir = join(root, deps.disposition.preuves)
    if (!existsSync(dir)) return out
    for (const f of readdirSync(dir)) {
      if (!f.endsWith(".json")) continue
      const list = JSON.parse(readFileSync(join(dir, f), "utf8")) as (Evidence & { node: string })[]
      for (const e of list) out.set(e.node, [...(out.get(e.node) ?? []), e].sort((a, b) => a.at.localeCompare(b.at)))
    }
    return out
  }

  const byRef = (a: AnyNode, b: AnyNode) => refOf(a).localeCompare(refOf(b))
  const uniq = <T>(list: T[]) => [...new Set(list)]
  const depth = (path: string) => (path === "" ? 0 : path.split(".").length)
  const message = (e: unknown) => (e instanceof Error ? e.message : String(e))

  /** Les revendications d'une cible, regroupées : deux revendications dont les chemins se recoupent sont dans le même groupe. */
  function groupsOf(list: ClaimRecord[]): ClaimRecord[][] {
    const groups: ClaimRecord[][] = []
    for (const c of list) {
      const hit = groups.filter((gr) => gr.some((x) => overlaps(x.path, c.path)))
      for (const h of hit) groups.splice(groups.indexOf(h), 1)
      groups.push([...hit.flat(), c])
    }
    return groups
      .map((gr) => gr.sort((a, b) => byRef(a.by, b.by) || a.path.localeCompare(b.path)))
      .sort((a, b) => a[0].path.localeCompare(b[0].path))
  }

  /** Les chemins qui couvrent tous les autres (sans `value.ultra` si `value` y est). */
  const covering = (paths: string[]) =>
    uniq(paths).filter((p, _, all) => !all.some((q) => q !== p && overlaps(q, p) && depth(q) < depth(p))).sort()

  /** 1. Lire et exécuter les modules ; le nom d'export devient l'identifiant du nœud. */
  async function load(root: string): Promise<Loaded> {
    await loadKinds(root)
    const files = tsFiles(join(root, deps.disposition.sources))
    // Les corps écrits dans des fichiers (sous-dossiers de src/) sont vérifiés par TypeScript avec le reste.
    const dirs = projectDirs(root)
    const extra = [...dirs.kinds.flatMap(tsFiles), ...dirs.views.flatMap(tsFiles), ...bodyFiles(join(root, deps.disposition.sources))]
    const { infos: analysis, moduleTitle, typeErrors } = analyze(files, extra, root)
    // Les nœuds du projet : ceux qu'exportent ses modules. Le registre du noyau est commun à tout le processus
    // (un autre projet peut y être chargé) : on ne le lit pas en entier.
    const before = allNodes().length
    const mine = new Set<AnyNode>()
    for (const file of files) {
      const mod: Record<string, unknown> = await chargeur.importer(file)
      for (const [name, v] of Object.entries(mod)) {
        if (!isNode(v)) continue
        if (!meta(v).id) {
          meta(v).id = name
          meta(v).module = basename(file, ".ts")
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
    return {
      root, modules: files.map((f) => basename(f, ".ts")), moduleTitle, nodes, anonymous, infos, typeErrors, evidence: loadEvidence(root),
      literals: readLiterals(root, nodes, infos), signalLiterals: dirs.literals,
    }
  }

  /** Les littéraux de tous les corps, en une passe par langage. Un corps partagé est lu une fois. */
  function readLiterals(root: string, nodes: AnyNode[], infos: Map<AnyNode, StaticInfo>): Loaded["literals"] {
    const byLanguage = new Map<string, { sources: LiteralSource[]; owners: Map<string, { node: AnyNode; file: string }[]> }>()
    for (const n of nodes) {
      const info = infos.get(n)
      if (!info) continue
      for (const [k, f] of Object.entries(meta(n).def.fields)) {
        if (f.type !== "body") continue
        const v = meta(n).data[k]
        let language: string, source: LiteralSource, file: string
        if (typeof v === "function") {
          language = "typescript"
          file = info.file
          source = { key: `${info.file}:${info.line}:${k}`, file: join(root, info.file), line: info.line, field: k }
        } else if (isFileBody(v)) {
          language = v.language
          const abs = join(root, dirname(info.file), v.file)
          file = relative(root, abs)
          source = { key: abs, file: abs }
        } else continue
        const entry: { sources: LiteralSource[]; owners: Map<string, { node: AnyNode; file: string }[]> } = byLanguage.get(language) ?? { sources: [], owners: new Map() }
        if (!entry.owners.has(source.key)) entry.sources.push(source)
        entry.owners.set(source.key, [...(entry.owners.get(source.key) ?? []), { node: n, file }])
        byLanguage.set(language, entry)
      }
    }
    const out: Loaded["literals"] = new Map()
    for (const [language, { sources, owners }] of byLanguage) {
      const driver = driverFor(language)
      if (!driver?.literals) continue
      for (const [key, items] of driver.literals(sources, root)) {
        for (const { node, file } of owners.get(key) ?? []) out.set(node, [...(out.get(node) ?? []), { file, items }])
      }
    }
    return out
  }

  async function compile(root: string, today: string): Promise<Compiled> {
    return await compileAt(await load(root), today)
  }

  /**
   * Compile le graphe chargé à une date. Repart toujours des déclarations : ce qu'une compilation précédente
   * a appliqué (revendications, contestations, abrogations) est d'abord défait.
   * Une seule compilation vit à la fois : ses vues lisent les nœuds tels qu'elle les a laissés.
   */
  /** `evaluate: false` : sans exécuter les critères ni les scénarios (au démarrage d'un composant, seules les valeurs comptent). */
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
    const error = (node: AnyNode, what: string, owner?: string) => diags.push({ severity: "erreur", origin: "graphe", node, what, owner })

    for (const n of l.anonymous) {
      error(n, `Nœud « ${meta(n).def.label.one} » sans nom : exportez-le`)
    }

    /** Arêtes déclarées (lues dans les données courantes), puis arêtes déduites du code (« dépend de »). */
    const buildEdges = (inactive: Set<AnyNode>, check: boolean): Edge[] => {
      const edges: Edge[] = []
      for (const n of nodes) {
        const { def, data } = meta(n)
        const active = !inactive.has(n)
        for (const [name, spec] of Object.entries(def.edges)) {
          const v = data[name]
          const targets = spec.mode === "many" ? (Array.isArray(v) ? v : []) : v ? [v] : []
          if (check && !spec.optional && targets.length === 0 && spec.mode === "one") {
            error(n, `Arête obligatoire « ${spec.label} » manquante`)
          }
          for (const t of targets) {
            if (!isNode(t)) continue
            edges.push({ from: n, to: t, name, label: spec.label, inverse: spec.inverse, inferred: false, derived: false, active })
            if (!check) continue
            const tk = meta(t).def.name
            if (!spec.targets.includes(tk) && !spec.targets.includes("*")) {
              error(n, `« ${spec.label} » doit viser ${spec.targets.join(" ou ")}, pas ${tk}`)
            }
            if (!meta(t).id) error(n, `« ${spec.label} » vise un nœud sans nom`)
          }
        }
        // Les dépendances nommées : une arête par paramètre.
        for (const [k, f] of Object.entries(def.fields)) {
          if (f.type !== "deps") continue
          const v = data[k]
          if (!v || typeof v !== "object") continue
          for (const [param, t] of Object.entries(v as Record<string, unknown>)) {
            if (!isNode(t)) {
              if (check) error(n, `Le paramètre « ${param} » ne désigne pas un nœud`)
              continue
            }
            edges.push({
              from: n, to: t, name: "deps", label: "Dépend de", inverse: "Utilisé par",
              inferred: false, derived: false, active, param, stage: f.stage ?? "exécution",
            })
            if (check && !meta(t).id) error(n, `Le paramètre « ${param} » vise un nœud sans nom`)
          }
        }
      }
      for (const n of nodes) {
        const def = meta(n).def
        for (const r of infos.get(n)?.refs ?? []) {
          if (r.prop && r.prop in def.edges) continue // déjà déclarée
          // Un corps qui nomme un autre nœud au lieu de le recevoir en paramètre : une dépendance cachée.
          if (check && r.prop && def.fields[r.prop]?.type === "body") {
            diags.push({ severity: "erreur", origin: "code", node: n, what: `Dépendance cachée : le corps lit « ${r.target.split(".")[1]} » sans le recevoir en paramètre` })
          }
          const target = nodes.find((x) => refOf(x) === r.target)
          if (!target || target === n) continue
          if (edges.some((e) => e.from === n && e.to === target)) continue
          edges.push({ from: n, to: target, name: "uses", label: "Dépend de", inverse: "Utilisé par", inferred: true, derived: false, active: !inactive.has(n) })
        }
      }
      return edges
    }

    // 2. Graphe figé : en vigueur ou non, puis revendications. -----------------------------
    const frozen = { moment: "figé" as const, today, nodes, infos }
    const g0 = makeGraph({ ...frozen, edges: buildEdges(new Set(), false), inactive: new Set() })
    const inactive = new Set<AnyNode>()
    for (const n of nodes) {
      const def = meta(n).def
      if (!def.activeAt) continue
      const r = g0.track(() => def.activeAt!(g0.self(n) as never, g0))
      if (r.error instanceof Hole) continue // date non décidée : on le considère en vigueur
      if (r.error) error(n, `activeAt() a échoué : ${message(r.error)}`)
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
        if (!(r.error instanceof Hole)) error(n, `claims() a échoué : ${message(r.error)}`)
        continue
      }
      for (const c of r.value ?? []) {
        if (!c.target) continue // arête manquante : signalée plus bas
        const target = c.target.node
        if (!nodes.includes(target)) {
          error(n, "Revendique un nœud absent du graphe")
          continue
        }
        const tdef = meta(target).def
        if (c.path === "") {
          if (c.value !== REMOVE) {
            error(n, `Revendiquer « ${title(target)} » en entier n'est possible que pour l'abroger`)
            continue
          }
        } else {
          const first = c.path.split(".")[0]
          if (!(first in tdef.fields) && !(first in tdef.edges)) {
            error(n, `« ${c.path} » n'existe pas sur « ${title(target)} »`)
            continue
          }
        }
        claims.push({ by: n, target, path: c.path, value: c.value, active: !inactive.has(n) })
      }
    }

    // 3. Résolution, sur le graphe figé : rien n'est appliqué tant que tout n'est pas tranché. --
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
          outcome: "appliqué", applied: claimants, replaced: [], reason: "", because: [],
        }
        plans.push({ group, record })
        if (claimants.length < 2) continue

        claimants.forEach((a, i) => claimants.slice(i + 1).forEach((b) => {
          if (!derived.some((e) => e.from === a && e.to === b)) {
            derived.push({ from: a, to: b, name: "overlaps", label: "Chevauche", inverse: "Chevauché par", inferred: false, derived: true, active: true })
          }
        }))
        const contest = (reason: string, arbiter?: string) => {
          record.outcome = "contesté"
          record.applied = []
          record.reason = reason
          record.arbiter = arbiter ?? ownerOf(target)
        }

        const defs = uniq(claimants.map((c) => meta(c).def))
        const def = defs[0]
        if (defs.length > 1 || !def.resolve) {
          contest(defs.length > 1 ? "revendications de types différents" : `le type « ${def.name} » ne sait pas trancher`)
          continue
        }
        const tv = g2.view(target)
        const sorted = [...group]
        const asClaims = (list: ClaimRecord[]) =>
          list.map((c) => ({ by: g2.view(c.by), target: tv, path: c.path, value: c.value }))
        // Loi 6 : la réponse ne dépend pas de l'ordre des revendications. On essaie dans les deux sens.
        const runs = [sorted, [...sorted].reverse()].map((list) => g2.track(() => def.resolve!(tv, asClaims(list), g2)))
        const failed = runs.find((r) => r.error)
        if (failed) {
          const e = failed.error
          if (e instanceof Hole) contest(`une décision manque pour trancher : ${e.label}`)
          else {
            error(claimants[0], e instanceof Contested
              ? `Le type « ${def.name} » lit une valeur en cours de résolution pour trancher (${e.message})`
              : `resolve() a échoué : ${message(e)}`)
            contest("la résolution a échoué")
          }
          continue
        }
        const norm = (r: Resolution) => JSON.stringify(r.kind === "apply"
          ? { kind: r.kind, order: r.order.map((v) => v.ref), replaced: (r.replaced ?? []).map(([a, b]) => `${a.ref}>${b.ref}`).sort() }
          : { kind: r.kind, arbiter: r.arbiter })
        if (norm(runs[0].value!) !== norm(runs[1].value!)) {
          error(claimants[0], `Le type « ${def.name} » enfreint la loi « La résolution ne dépend pas de l'ordre »`)
          contest("la résolution dépend de l'ordre des revendications")
          continue
        }
        const res = runs[0].value!
        if (res.kind === "apply") {
          // Loi 7 : la résolution ne renvoie que des revendications qu'on lui a données.
          const outside = [...res.order, ...(res.replaced ?? []).flat()].filter((v) => !claimants.includes(v.node))
          if (outside.length) {
            error(claimants[0], `Le type « ${def.name} » enfreint la loi « La résolution ne renvoie que ce qu'on lui donne » (${outside[0].title})`)
            contest("la résolution a renvoyé un nœud qui ne revendique rien ici")
            continue
          }
          record.applied = uniq(res.order.map((v) => v.node))
          record.replaced = (res.replaced ?? []).map(([a, b]) => [a.node, b.node])
          record.reason = res.reason
        } else {
          contest(res.reason, res.arbiter)
        }
        record.because = [...runs[0].reads].filter((n) => n !== target && !claimants.includes(n)).sort(byRef)
      }
    }

    // Application : les gagnants dans l'ordre rendu ; une contestation laisse un trou.
    const apply = (c: ClaimRecord) => {
      const tm = meta(c.target)
      if (c.path === "") {
        tm.repealedBy = c.by
        return
      }
      tm.base ??= cloneData(tm.data)
      const previous = getPath(tm.data, c.path)
      let value = c.value
      if (tm.def.fields[c.path.split(".")[0]]?.type === "fn" && typeof value === "function") {
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
      if (record.outcome === "contesté") {
        tm.contested ??= new Set()
        for (const p of record.paths) {
          tm.contested.add(p)
          if (p === "") continue // l'abrogation est contestée : le nœud reste
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

    // 4. Graphe consolidé. ----------------------------------------------------------------
    const edges = [...buildEdges(inactive, true), ...derived]
    const repealed = (n: AnyNode) => !!meta(n).repealedBy

    // Lois du graphe : cycles interdits, tout est relié à une racine.
    const acyclic = new Set(kinds.flatMap((k) => Object.entries(k.edges).filter(([, e]) => e.acyclic).map(([name]) => name)))
    for (const name of acyclic) {
      const sub = edges.filter((e) => e.name === name)
      const state = new Map<AnyNode, 1 | 2>()
      const dfs = (n: AnyNode): boolean => {
        state.set(n, 1)
        for (const e of sub.filter((x) => x.from === n)) {
          if (state.get(e.to) === 1) return true
          if (!state.has(e.to) && dfs(e.to)) return true
        }
        state.set(n, 2)
        return false
      }
      for (const n of nodes) if (!state.has(n) && dfs(n)) error(n, `Cycle sur l'arête « ${sub[0].label} »`)
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
        if (!reached.has(n) && !repealed(n)) diags.push({ severity: "avertissement", origin: "graphe", node: n, what: `Relié à aucune racine (${kinds.filter((k) => k.root).map((k) => k.label.one.toLowerCase()).join(", ")})` })
      }
    }

    const blocked = new Map<string, Map<string, { what: string; of: AnyNode; count: number }>>()
    const results = new Map<AnyNode, unknown>()
    const effects = new Map<AnyNode, string[]>()
    // Rempli après la vérification des corps, avant toute exécution.
    const refused = new Set<AnyNode>()
    const g: GraphImpl = makeGraph({
      moment: "consolidé", today, nodes, edges, infos, inactive, results, effects,
      wire: (deps, env) => wireDeps({ graph: g, root: l.root, today, refused }, deps, env),
      plan: (entries, env) => plan({ graph: g, root: l.root, today, refused }, entries, env),
      evidence: l.evidence,
      onBlocked: (hole, what, of) => {
        const byKey = blocked.get(hole.key) ?? new Map()
        const k = `${what}|${of.ref}`
        const cur = byKey.get(k) ?? { what, of: of.node, count: 0 }
        cur.count++
        byKey.set(k, cur)
        blocked.set(hole.key, byKey)
      },
      onStatusError: (n, e) => error(n, `status() a échoué : ${e.message}`),
    })
    // Effets : ceux du nœud, plus ceux de tout ce dont il dépend à l'exécution.
    const own = new Map<AnyNode, readonly string[]>()
    for (const n of nodes) {
      const def = meta(n).def
      try {
        own.set(n, def.effects ? def.effects(g.self(n) as never) : [])
      } catch (e) {
        if (!(e instanceof Hole)) error(n, `effects() a échoué : ${message(e)}`)
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
        if (e.from === n && e.param !== undefined && e.stage === "exécution") for (const x of effectsOf(e.to)) set.add(x)
      }
      visiting.delete(n)
      const out = [...set].sort((a, b) => a.localeCompare(b, "fr"))
      effects.set(n, out)
      return out
    }
    for (const n of nodes) effectsOf(n)

    // Constantes : chacune a une valeur (un texte ou un nombre) et un sens, et ne porte pas le nom d'une dépendance.
    for (const n of nodes) {
      const { def, data } = meta(n)
      for (const [k, f] of Object.entries(def.fields)) {
        const v = data[k]
        if (f.type !== "constantes" || v === undefined) continue
        if (!v || typeof v !== "object" || isHole(v)) {
          error(n, `« ${f.label ?? k} » : des constantes nommées, chacune avec sa valeur et son sens`)
          continue
        }
        const params = new Set(depsOf(n).map(([p]) => p))
        for (const [name, c] of Object.entries(v as Record<string, { valeur?: unknown; sens?: unknown }>)) {
          const valeur = c && typeof c === "object" ? c.valeur : undefined
          const sens = c && typeof c === "object" ? c.sens : undefined
          if ((typeof valeur !== "string" && typeof valeur !== "number") || typeof sens !== "string" || !sens.trim()) {
            error(n, `La constante « ${name} » doit avoir une valeur (un texte ou un nombre) et un sens`)
          }
          if (params.has(name)) error(n, `La constante « ${name} » porte le nom d'une dépendance : le corps ne saurait pas laquelle il reçoit`)
        }
      }
    }

    // Corps : le driver de leur langage les vérifie, qu'ils soient en ligne (TypeScript, le langage du graphe) ou dans un fichier.
    for (const n of nodes) {
      const { def, data } = meta(n)
      for (const [k, f] of Object.entries(def.fields)) {
        const v = data[k]
        if (f.type === "body" && typeof v === "function") {
          const source = l.infos.get(n)?.props[k]
          const ts = driverFor("typescript")
          const deps = depsOf(n, f.stage ?? "exécution").map(([p]) => p)
          if (source && ts?.checkSource) {
            for (const issue of ts.checkSource(source, { ambient: !!def.ambient, deps, root: l.root })) {
              diags.push({ severity: issue.severity, origin: "code", node: n, what: `corps en ligne : ${issue.what}` })
            }
          }
          continue
        }
        if (f.type !== "body" || !isFileBody(v)) continue
        const driver = driverFor(v.language)
        if (!driver) {
          diags.push({ severity: "avertissement", origin: "code", node: n, what: `Aucun driver pour le langage « ${v.language} » : ce corps n'est pas vérifié` })
          continue
        }
        const file = bodyPath({ graph: g, root: l.root, today }, n, v)
        const deps = depsOf(n, f.stage ?? "exécution").map(([p]) => p)
        for (const issue of driver.check(file, { ambient: !!def.ambient, deps, root: l.root })) {
          diags.push({ severity: issue.severity, origin: "code", node: n, what: `${v.file} : ${issue.what}` })
        }
      }
    }

    // Littéraux à spécifier : un avertissement par nœud, si le projet le demande.
    if (l.signalLiterals) {
      for (const n of nodes) {
        const items = (l.literals.get(n) ?? []).flatMap((x) => x.items).filter((i) => !i.admitted && !i.declaredBy)
        if (!items.length) continue
        const byCat = new Map<string, number>()
        for (const i of items) byCat.set(i.category, (byCat.get(i.category) ?? 0) + 1)
        const detail = [...byCat].sort((a, b) => b[1] - a[1]).map(([c, k]) => `${k} ${c}`).join(", ")
        diags.push({ severity: "avertissement", origin: "code", node: n, what: `${items.length} littéra${items.length > 1 ? "ux" : "l"} à spécifier dans le corps : ${detail}` })
      }
    }

    // Un corps refusé (dépendance cachée, accès à la plateforme…) n'est jamais exécuté, ni par un scénario ni à l'assemblage.
    for (const d of diags) if (d.origin === "code" && d.severity === "erreur" && d.node) refused.add(d.node)

    for (const n of nodes) {
      const def = meta(n).def
      if (!def.evaluate || repealed(n) || opts.evaluate === false) continue
      try {
        results.set(n, await def.evaluate(g.self(n) as never, g))
      } catch (e) {
        if (!(e instanceof Hole)) error(n, `evaluate() a échoué : ${message(e)}`)
      }
    }
    for (const n of nodes) g.status(n)

    // Trous : valeurs à décider, revendications contestées, puis ceux de chaque type. ----------
    const effectOf = (n: AnyNode, paths: string[]): string | undefined => {
      const keys = paths.map((p) => (p ? `${refOf(n)}.${p}` : refOf(n)))
      const hits = [...blocked].filter(([k]) => keys.some((x) => k === x || k.startsWith(x + "."))).flatMap(([, m]) => [...m.values()])
      if (hits.length) return hits.map((b) => `bloque ${b.count} ${b.what}${b.count > 1 ? "s" : ""} de « ${title(b.of)} »`).join(", ")
      const dependents = uniq(edges.filter((e) => e.to === n && !e.derived).map((e) => e.from))
      return dependents.length ? `concerne ${dependents.map((d) => `« ${title(d)} »`).join(", ")}` : undefined
    }
    const names = (list: AnyNode[]) => {
      const parts = list.map((c) => `« ${title(c)} » (${ownerOf(c) ?? "sans responsable"})`)
      return parts.length > 1 ? `${parts.slice(0, -1).join(", ")} et ${parts.at(-1)}` : parts.join("")
    }

    for (const n of nodes) {
      const { def, data, contested } = meta(n)
      if (repealed(n)) continue
      const isContested = (path: string) => [...(contested ?? [])].some((p) => overlaps(p, path))
      const todo: string[] = []
      const scan = (v: unknown, path: string) => {
        if (isHole(v)) {
          if (!isContested(path)) todo.push(path)
        } else if (v !== null && typeof v === "object" && !isNode(v) && !Array.isArray(v)) {
          for (const [k, x] of Object.entries(v)) scan(x, `${path}.${k}`)
        }
      }
      for (const [k, f] of Object.entries(def.fields)) if (f.type !== "patch") scan(data[k], k)
      for (const path of todo) {
        const [first, ...rest] = path.split(".")
        const sub = rest.length ? ` pour ${rest.join(".")}` : ""
        const what = first === def.main || first === def.callable
          ? `Décider « ${title(n)} »${sub}`
          : `Décider « ${title(n)} » : ${(def.fields[first]?.label ?? first).toLowerCase()}${sub}`
        diags.push({ severity: "bloquant", origin: "valeur", node: n, what, owner: ownerOf(n), effect: effectOf(n, [path]) })
      }
    }

    for (const r of resolutions.filter((x) => x.outcome === "contesté")) {
      const paths = r.paths.map((p) => p || "le nœud entier").join(", ")
      diags.push({
        severity: "bloquant",
        origin: "recoupement",
        node: r.target,
        what: `Trancher « ${title(r.target)} » : ${paths} revendiqué par ${names(r.claimants)}`,
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
        if (!(e instanceof Hole)) error(n, `holes() a échoué : ${message(e)}`)
      }
      for (const x of list) {
        const on = x.on ? x.on.node : n
        diags.push({ severity: x.severity, origin: "type", node: on, what: x.what, owner: x.owner ?? ownerOf(on) ?? ownerOf(n), effect: x.effect })
      }
    }

    const order: Record<Severity, number> = { bloquant: 0, erreur: 1, avertissement: 2 }
    diags.sort((a, b) => order[a.severity] - order[b.severity])
    return { today, modules, moduleTitle, nodes, edges, diags, claims, resolutions, graph: g, typeErrors, literals: l.literals }
  }

  return { moduleOf, loadKinds, load, compile, compileAt }
}

export type Api = ReturnType<typeof corps>
export default corps
