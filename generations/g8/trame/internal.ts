// Noyau Trame · partie interne.
// Les types (kinds/) n'importent jamais ce fichier : ils lisent le graphe par l'API (kernel.ts).

import type { AnyKind, AnyNode, ViewDef } from "./kernel"

export const HOLE = Symbol.for("trame.todo")
export const REMOVE = Symbol.for("trame.remove")
const META = Symbol.for("trame.meta")

export const isHole = (v: unknown): boolean => v === HOLE

export interface Applied {
  by: AnyNode
  paths: string[]
}

export interface NodeMeta {
  def: AnyKind
  /** Les données en vigueur, après résolution des revendications. */
  data: Record<string, unknown>
  /** Les données déclarées, conservées dès qu'une revendication s'applique. */
  base?: Record<string, unknown>
  amendedBy?: Applied[]
  repealedBy?: AnyNode
  contested?: Set<string>
  id?: string
  module?: string
}

export const meta = (n: unknown): NodeMeta => (n as Record<symbol, NodeMeta>)[META]
export const isNode = (v: unknown): v is AnyNode =>
  (typeof v === "object" || typeof v === "function") && v !== null && META in (v as object)
export const refOf = (n: AnyNode): string => {
  const m = meta(n)
  return m.id ? `${m.module}.${m.id}` : `(${m.def.name} sans nom)`
}

/** Levée quand on lit une valeur non décidée ou contestée, ou un nœud abrogé. Ce n'est pas un plantage : c'est un blocage. */
export class Hole extends Error {
  constructor(public node: AnyNode, public path: string) {
    super(path ? `décision non prise : ${meta(node).id ?? "?"}.${path}` : `nœud abrogé : ${meta(node).id ?? "?"}`)
  }
  get key(): string {
    return this.path ? `${refOf(this.node)}.${this.path}` : refOf(this.node)
  }
  /** « DelaiGratuit pour ultra », « PlafondFrais », « Rembourser (abrogé) »… */
  get label(): string {
    const m = meta(this.node)
    const base = m.id ?? m.def.name
    if (!this.path) return `${base} (abrogé)`
    const [first, ...rest] = this.path.split(".")
    if (first === m.def.main) return rest.length ? `${base} pour ${rest.join(".")}` : base
    return `${base} (${first}${rest.length ? " pour " + rest.join(".") : ""})`
  }
}

/** Levée quand une résolution lit une valeur en cours de résolution. */
export class Contested extends Error {
  constructor(public node: AnyNode, public path: string) {
    super(`lecture d'une valeur en cours de résolution : ${refOf(node)}.${path}`)
  }
}

// Registres ------------------------------------------------------------------

export const kinds: AnyKind[] = []
export const views: ViewDef[] = []
let registry: AnyNode[] = []

export const allNodes = (): AnyNode[] => registry

/** Exécute `fn` avec un registre vide (lois des types : ne pas polluer le graphe). */
export function sandbox<T>(fn: () => T): T {
  const saved = registry
  registry = []
  try {
    return fn()
  } finally {
    registry = saved
  }
}

const FN_RESERVED = ["name", "length", "prototype", "caller", "arguments", "call", "apply", "bind"]
const VIEW_RESERVED = [
  "node", "ref", "id", "kind", "module", "title", "active", "status", "link", "decl", "evidence",
  "amendedBy", "repealedBy", "contested", "field", "base", "fieldInfo", "result", "dependencies", "effects",
]
/** Noms de champs interdits : ils masqueraient l'API d'une vue ou d'une fonction. `owner` est permis. */
export const RESERVED = new Set([...FN_RESERVED, ...VIEW_RESERVED])

// Chemins dans les données ---------------------------------------------------

// Corps de code dans un fichier ------------------------------------------------

const FILE = Symbol.for("trame.file")

/** Un corps de fonction écrit dans un fichier, dans un langage. Le chemin est relatif au module qui déclare le nœud. */
export interface FileBody<F = unknown> {
  readonly [FILE]: true
  readonly file: string
  readonly language: string
  /** Le type du corps (jamais présent à l'exécution) : TypeScript le confronte aux dépendances du nœud. */
  readonly __corps?: F
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fileBody = (file: string, language: string): FileBody<any> => ({ [FILE]: true, file, language })
export const isFileBody = (v: unknown): v is FileBody => typeof v === "object" && v !== null && FILE in v

export const isPlain = (v: unknown): v is Record<string, unknown> =>
  v !== null && typeof v === "object" && !Array.isArray(v) && !isNode(v) && !isFileBody(v)

export function patchLeaves(patch: unknown, path = ""): [string, unknown][] {
  if (isPlain(patch)) return Object.entries(patch).flatMap(([k, v]) => patchLeaves(v, path ? `${path}.${k}` : k))
  return path ? [[path, patch]] : []
}

export function getPath(data: Record<string, unknown>, path: string): unknown {
  if (path === "") return data
  let cur: unknown = data
  for (const k of path.split(".")) {
    if (!isPlain(cur)) return undefined
    cur = cur[k]
  }
  return cur
}

export function setPath(data: Record<string, unknown>, path: string, value: unknown): void {
  const keys = path.split(".")
  let cur = data
  for (const k of keys.slice(0, -1)) {
    if (!isPlain(cur[k])) cur[k] = {}
    cur = cur[k] as Record<string, unknown>
  }
  cur[keys[keys.length - 1]] = value
}

export function cloneData<T>(v: T): T {
  if (Array.isArray(v)) return v.map(cloneData) as T
  if (isPlain(v)) return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, cloneData(x)])) as T
  return v
}

/** Deux chemins se recoupent s'ils sont égaux ou imbriqués ; "" (le nœud entier) recoupe tout. */
export const overlaps = (a: string, b: string): boolean =>
  a === b || a === "" || b === "" || a.startsWith(b + ".") || b.startsWith(a + ".")

// Nœuds ----------------------------------------------------------------------

/** Lecture protégée pour le code du produit : une valeur non décidée lève un `Hole`, même au fond d'un objet. */
export function guard(v: unknown, node: AnyNode, path: string): unknown {
  if (isHole(v)) throw new Hole(node, path)
  if (isPlain(v)) {
    return new Proxy(v, {
      get: (t, k) => (typeof k === "symbol" ? Reflect.get(t, k) : guard(Reflect.get(t, k), node, `${path}.${k}`)),
    })
  }
  return v
}

export function instantiate(def: AnyKind, input: Record<string, unknown>): AnyNode {
  const m: NodeMeta = { def, data: { ...input } }
  let node: object
  const alive = () => {
    if (m.repealedBy) throw new Hole(node as AnyNode, "")
  }
  if (def.callable) {
    const key = def.callable
    node = (...args: unknown[]) => {
      alive()
      const f = m.data[key]
      if (isHole(f)) throw new Hole(node as AnyNode, key)
      return (f as (...a: unknown[]) => unknown)(...args)
    }
  } else {
    node = {}
  }
  Object.defineProperty(node, META, { value: m })
  for (const k of Object.keys(def.fields)) {
    if (FN_RESERVED.includes(k)) continue // signalé par les lois
    Object.defineProperty(node, k, {
      get: () => {
        alive()
        return guard(m.data[k], node as AnyNode, k)
      },
      enumerable: true,
    })
  }
  for (const k of Object.keys(def.edges)) {
    Object.defineProperty(node, k, { get: () => m.data[k], enumerable: true })
  }
  registry.push(node as AnyNode)
  return node as AnyNode
}

/** Le responsable d'un nœud : son champ marqué `owner`, s'il est décidé. */
export function ownerOf(n: AnyNode): string | undefined {
  const m = meta(n)
  for (const [k, f] of Object.entries(m.def.fields)) {
    if (f.owner && typeof m.data[k] === "string") return m.data[k] as string
  }
  return undefined
}

// Programmes figés ---------------------------------------------------------------
// Un programme assemblé « figé » ne compile pas le graphe au démarrage. Il importe les quelques déclarations
// dont il a besoin (corps en ligne, règles, le composant), et cet outillage les lit telles qu'elles sont déclarées.
// Les valeurs, elles, sont écrites dans le programme à la date de l'assemblage.

const declared = (n: AnyNode) =>
  new Proxy({} as Record<string, unknown>, {
    get: (_t, k) => (k === "title" ? meta(n).id : typeof k === "string" ? meta(n).data[k] : undefined),
  })

const frozenContext = (deps: Record<string, unknown> = {}) => ({
  env: undefined,
  date: "",
  g: undefined as never,
  wire: () => Promise.reject(new Error("programme figé : rien n'est branché au démarrage")),
  wireDeps: async () => deps,
})

export const fige = {
  /** Les données en vigueur d'un nœud qu'une règle lit par son nom, à la date de l'assemblage. */
  donnees(n: AnyNode, ref: string, data: Record<string, unknown>): void {
    const m = meta(n)
    const [module, id] = ref.split(".")
    m.module ??= module
    m.id ??= id
    m.data = { ...m.data, ...data }
  },
  /** Le corps en ligne d'un nœud, tel qu'il est déclaré. */
  corps(n: AnyNode): (deps: Record<string, unknown>) => unknown {
    const k = Object.entries(meta(n).def.fields).find(([, f]) => f.type === "body" && (f.stage ?? "exécution") === "exécution")?.[0]
    const body = k ? meta(n).data[k] : undefined
    if (typeof body !== "function") throw new Error(`« ${refOf(n)} » n'a pas de corps en ligne`)
    return body as (deps: Record<string, unknown>) => unknown
  },
  /** Ce que donne un nœud sans corps (une règle), lu dans sa déclaration. */
  valeur(n: AnyNode): unknown {
    const provide = meta(n).def.provide
    if (!provide) throw new Error(`« ${refOf(n)} » ne donne rien`)
    return provide(declared(n) as never, frozenContext() as never)
  },
  /** Démarre un composant avec ses dépendances et ses points d'entrée déjà construits. */
  async demarrer(n: AnyNode, deps: Record<string, unknown>, entrees: { titre: string; champs: Record<string, unknown>; valeur: unknown }[]): Promise<unknown> {
    const start = meta(n).def.start
    if (!start) throw new Error(`« ${refOf(n)} » ne sait pas démarrer`)
    const nodes = entrees.map((e) => ({ node: { title: e.titre, field: (p: string) => e.champs[p] } as never, value: e.valeur }))
    return start(declared(n) as never, nodes, frozenContext(deps) as never)
  },
}
