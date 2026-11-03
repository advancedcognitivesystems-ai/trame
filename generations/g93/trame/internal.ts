// Trame kernel · internal part.
// Kinds (kinds/) never import this file: they read the graph through the API (kernel.ts).

import type { AnyKind, AnyNode, ViewDef } from "./kernel"
import { FieldType, Stage } from "./ir"

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
  /** The data in force, once claims are resolved. */
  data: Record<string, unknown>
  /** The declared data, kept as soon as a claim applies. */
  base?: Record<string, unknown>
  amendedBy?: Applied[]
  repealedBy?: AnyNode
  contested?: Set<string>
  id?: string
  module?: string
  /**
   * What the node gives once the engine wired it, when its kind's callable field is a body (a requirement's rule with
   * its dependencies, since g79): the node called is then that. It throws what wiring met (a value nobody decided).
   */
  give?: () => unknown
}

export const meta = (n: unknown): NodeMeta => (n as Record<symbol, NodeMeta>)[META]
export const isNode = (v: unknown): v is AnyNode =>
  (typeof v === "object" || typeof v === "function") && v !== null && META in (v as object)
export const refOf = (n: AnyNode): string => {
  const m = meta(n)
  return m.id ? `${m.module}.${m.id}` : `(unnamed ${m.def.name})`
}

/** Thrown when code reads an undecided or contested value, or a repealed node. Not a crash: a block. */
export class Hole extends Error {
  constructor(public node: AnyNode, public path: string) {
    super(path ? `undecided: ${meta(node).id ?? "?"}.${path}` : `repealed node: ${meta(node).id ?? "?"}`)
  }
  get key(): string {
    return this.path ? `${refOf(this.node)}.${this.path}` : refOf(this.node)
  }
  /** "FreePeriod for ultra", "FeeCap", "Refund (repealed)"… */
  get label(): string {
    const m = meta(this.node)
    const base = m.id ?? m.def.name
    if (!this.path) return `${base} (repealed)`
    const [first, ...rest] = this.path.split(".")
    if (first === m.def.main) return rest.length ? `${base} for ${rest.join(".")}` : base
    return `${base} (${first}${rest.length ? " for " + rest.join(".") : ""})`
  }
}

/** Thrown when a resolution reads a value that is being resolved. */
export class Contested extends Error {
  constructor(public node: AnyNode, public path: string) {
    super(`read of a value being resolved: ${refOf(node)}.${path}`)
  }
}

// Registries -----------------------------------------------------------------

export const kinds: AnyKind[] = []
export const views: ViewDef[] = []
let registry: AnyNode[] = []

export const allNodes = (): AnyNode[] => registry

/** Runs `fn` with an empty registry (the kind laws must not pollute the graph). */
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
  "amendedBy", "repealedBy", "contested", "field", "base", "fieldInfo", "result", "dependencies", "effects", "library",
]
/** Forbidden field names: they would hide the API of a view or of a function. `owner` is allowed. */
export const RESERVED = new Set([...FN_RESERVED, ...VIEW_RESERVED])

// Code bodies in a file ---------------------------------------------------------

const FILE = Symbol.for("trame.file")

/** A function body written in a file, in some language. The path is relative to the module that declares the node. */
export interface FileBody<F = unknown> {
  readonly [FILE]: true
  readonly file: string
  readonly language: string
  /** The type of the body (never present at run time): TypeScript checks it against the node's dependencies. */
  readonly __body?: F
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

/** Two paths overlap when they are equal or nested; "" (the whole node) overlaps everything. */
export const overlaps = (a: string, b: string): boolean =>
  a === b || a === "" || b === "" || a.startsWith(b + ".") || b.startsWith(a + ".")

// Nodes ----------------------------------------------------------------------

/** Guarded read for product code: an undecided value throws a `Hole`, even deep inside an object. */
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
      const f = m.give ? m.give() : m.data[key]
      if (isHole(f)) throw new Hole(node as AnyNode, key)
      return (f as (...a: unknown[]) => unknown)(...args)
    }
  } else {
    node = {}
  }
  Object.defineProperty(node, META, { value: m })
  for (const k of Object.keys(def.fields)) {
    if (FN_RESERVED.includes(k)) continue // reported by the laws
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

/** A node's owner: its field marked `owner`, when decided. */
export function ownerOf(n: AnyNode): string | undefined {
  const m = meta(n)
  for (const [k, f] of Object.entries(m.def.fields)) {
    if (f.owner && typeof m.data[k] === "string") return m.data[k] as string
  }
  return undefined
}

// Frozen programs --------------------------------------------------------------
// A "frozen" assembled program does not compile the graph when it starts. It imports the few declarations it needs
// (inline bodies, rules, the component), and these tools read them as declared. The values are written in the program
// at the date of the assembly.

// A node as its kind reads it in such a program: its title, its fields by name, and by path as a view gives them.
const declared = (n: AnyNode) =>
  new Proxy({} as Record<string, unknown>, {
    get: (_t, k) =>
      k === "title" ? meta(n).id
      : k === "field" ? (path: string) => getPath(meta(n).data, path)
      : typeof k === "string" ? meta(n).data[k] : undefined,
  })

const frozenContext = (deps: Record<string, unknown> = {}) => ({
  env: undefined,
  date: "",
  g: undefined as never,
  wire: () => Promise.reject(new Error("frozen program: nothing is wired at startup")),
  wireDeps: async () => deps,
})

/**
 * A capability (since g83): what a port's realization gives, with only these members of it, read through. A method keeps
 * its realization as `this`; any other member reads as nothing, and nothing can be set: what may be done through it is
 * what the graph says the consumer uses.
 */
export const limited = (value: unknown, members: readonly string[]): unknown => {
  if (value === null || (typeof value !== "object" && typeof value !== "function")) return value
  const allowed = new Set(members)
  const target = value as Record<string | symbol, unknown>
  return new Proxy(target, {
    // A symbol is a protocol of the language (iteration, conversion), not an operation of the contract: it reads through.
    get: (t, k) => {
      if (typeof k === "string" && !allowed.has(k)) return undefined
      const v = Reflect.get(t, k)
      return typeof v === "function" ? (v as (...a: unknown[]) => unknown).bind(t) : v
    },
    has: (t, k) => (typeof k === "string" ? allowed.has(k) : Reflect.has(t, k)),
    ownKeys: () => [...allowed],
    getOwnPropertyDescriptor: (t, k) => (typeof k === "string" && allowed.has(k) ? { ...Reflect.getOwnPropertyDescriptor(t, k), configurable: true } : undefined),
    set: () => false,
    defineProperty: () => false,
    deleteProperty: () => false,
    setPrototypeOf: () => false,
  })
}

export const frozen = {
  /** A capability: a realization limited to what its consumer uses. */
  limited,
  /** The data in force of a node that a rule reads by name, at the date of the assembly. */
  data(n: AnyNode, ref: string, data: Record<string, unknown>): void {
    const m = meta(n)
    const [module, id] = ref.split(".")
    m.module ??= module
    m.id ??= id
    m.data = { ...m.data, ...data }
  },
  /** A node's inline body, as declared. */
  body(n: AnyNode): (deps: Record<string, unknown>) => unknown {
    const k = Object.entries(meta(n).def.fields).find(([, f]) => f.type === FieldType.body && (f.stage ?? Stage.execution) === Stage.execution)?.[0]
    const body = k ? meta(n).data[k] : undefined
    if (typeof body !== "function") throw new Error(`"${refOf(n)}" has no inline body`)
    return body as (deps: Record<string, unknown>) => unknown
  },
  /** What a node without a body gives (a rule), read from its declaration. */
  value(n: AnyNode): unknown {
    const provide = meta(n).def.provide
    if (!provide) throw new Error(`"${refOf(n)}" gives nothing`)
    return provide(declared(n) as never, frozenContext() as never)
  },
  /** Starts a component with its dependencies and its entry points already built. */
  async start(n: AnyNode, deps: Record<string, unknown>, entries: { title: string; fields: Record<string, unknown>; value: unknown }[]): Promise<unknown> {
    const start = meta(n).def.start
    if (!start) throw new Error(`"${refOf(n)}" cannot start`)
    const nodes = entries.map((e) => ({ node: { title: e.title, field: (p: string) => e.fields[p] } as never, value: e.value }))
    return start(declared(n) as never, nodes, frozenContext(deps) as never)
  },
}
