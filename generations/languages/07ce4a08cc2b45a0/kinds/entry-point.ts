import {
  defineKind, field, optional, edge, optionalEdge, doc, Status,
  type AnyNode, type Node, type Provides, type HasDeps, type Provided, type FileBody, type Signature, KindName, EdgeName, TriggerType } from "../trame/kernel"
import words from "./words"

const say = words()

/** What triggers an entry point. An HTTP request or a command today; a message or a schedule tomorrow. */
export type Trigger =
  | { type: typeof TriggerType.http; method: "GET" | "POST" | "PUT" | "DELETE"; path: string }
  | { type: typeof TriggerType.command; name: string; help?: string }
  | { type: typeof TriggerType.message; queue: string }
  | { type: typeof TriggerType.scheduled; when: string }
  | { type: typeof TriggerType.load }

export const http = (method: "GET" | "POST" | "PUT" | "DELETE", path: string): Trigger => ({ type: TriggerType.http, method, path })
export const command = (name: string, help?: string): Trigger => ({ type: TriggerType.command, name, ...(help ? { help } : {}) })
/** The loading of the page that runs the component: a page shown in a browser. */
export const load = (): Trigger => ({ type: TriggerType.load })

/** What an entry point triggered by a request receives and returns. */
export interface Request {
  params: Record<string, string>
  body?: unknown
}
export interface Response {
  status?: number
  body: unknown
}
export type Handler = (request: Request) => Promise<Response>

/** An entry point: a function a component exposes to the world. */
const kind = defineKind({
  name: KindName.entry,
  label: { one: say.entryPointEntryPoint(), many: say.entryPointEntryPoints() },
  renderOwns: ["trigger"],
  fields: {
    owner: field.owner(),
    trigger: field.value<Trigger>(say.entryPointTrigger()),
    deps: optional(field.deps()),
    body: field.body(),
  },
  edges: {
    serves: optionalEdge(edge.many(["requirement", "goal"], { label: say.adrServes(), inverse: say.adrServedBy() })),
    [EdgeName.partOf]: edge.one([KindName.component], { label: say.entryPointPartOf(), inverse: say.entryPointExposes() }),
  },

  /** Its status: that of the scenarios that verify it. */
  status(self, g) {
    const all = g.from(self).in("verifies").nodes().map((s) => s.status)
    if (!all.length) return Status.unknown
    if (all.includes(Status.violated)) return Status.violated
    if (all.includes(Status.blocked)) return Status.blocked
    return all.every((s) => s === Status.held) ? Status.held : Status.unknown
  },

  render(self) {
    const t = self.field("trigger") as Trigger | undefined
    if (!t || typeof t !== "object") return []
    const text = t.type === TriggerType.http ? `${t.method} ${t.path}` : t.type === TriggerType.command ? `command ${t.name}` : t.type === TriggerType.message ? say.entryPointMessageOn(t.queue) : t.type === TriggerType.load ? say.entryPointThePageLoads() : `scheduled: ${t.when}`
    return [doc.para(say.entryPointTriggeredBy(), doc.ident(text))]
  },
})

type Deps = Record<string, AnyNode>

interface EntryPointInput<D extends Deps> {
  owner: string
  trigger: Trigger
  in: Node<"component">
  serves?: readonly Node<"requirement" | "goal">[]
  deps?: D
  body: ((deps: Provided<D>) => Handler | Promise<Handler>) | FileBody<(deps: Provided<D>) => Handler | Promise<Handler>>
  signature?: Signature<Handler>
}

export function entryPoint<D extends Deps = {}>(input: EntryPointInput<D>): Node<"entry"> & Provides<Handler> & HasDeps<D> {
  const { signature: _s, ...rest } = input
  return kind(rest as never) as never
}

export const entryKind = kind
