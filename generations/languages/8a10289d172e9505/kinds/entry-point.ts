import {
  defineKind, field, optional, edge, optionalEdge, doc, hole, keysOf, edgesOf, Status, KindName, EdgeName, TriggerType, EntryField, EntryEdge,
  OwnedField, Identity, type AnyNode, type Node, type Provides, type HasDeps, type Provided, type FileBody, type Signature, type View, type Graph,
} from "../trame/kernel"
import { verifiedStatus } from "./scenario"
import { carriedBy, bySystem, overEveryOwner } from "./audience"
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

const fields = {
  owner: field.owner(),
  [EntryField.trigger]: field.value<Trigger>(say.entryPointTrigger()),
  deps: optional(field.deps()),
  body: field.body(),
}
const F = keysOf(fields)

/** An entry point: a function a component exposes to the world. */
const kind = defineKind({
  name: KindName.entry,
  label: { one: say.entryPointEntryPoint(), many: say.entryPointEntryPoints() },
  renderOwns: [F.trigger],
  fields,
  edges: {
    [EdgeName.serves]: optionalEdge(edge.many([KindName.requirement, KindName.goal], { label: say.adrServes(), inverse: say.adrServedBy() })),
    [EdgeName.partOf]: edge.one([KindName.component], { label: say.entryPointPartOf(), inverse: say.entryPointExposes() }),
    [EntryEdge.audience]: edge.one([KindName.audience], { label: say.audienceFor(), inverse: say.audienceCalls() }),
  },

  /** Its status: that of the scenarios and the checks that verify it. */
  status: (self, g) => verifiedStatus(self, g),

  /**
   * Who may call it (C6): it says its audience. One nobody calls (a schedule, a message) is for nothing a person
   * triggers; and the records it reaches, in each environment its component runs in, are those its audience may be
   * scoped to: records that belong to a person or a tenant ask an audience that carries one, or reaches every owner's.
   */
  holes: (self, g) => {
    const audience = g.from(self).out(EntryEdge.audience).first()
    if (!audience) return [hole.error(say.entryPointWithoutAudience(), self.owner)]
    const t = self.field(F.trigger) as Trigger | undefined
    const called = !!t && g.lib.values.isObject(t) && t.type !== TriggerType.scheduled && t.type !== TriggerType.message
    return [
      bySystem(audience) && called && hole.error(say.entryPointSystemCalled(audience.title, triggerWords(t)), self.owner),
      ...ownedUnreached(self, audience, g).map((u) => hole.error(say.entryPointOwnedUnreached(
        audience.title, u.data.title, g.lib.texts.concat(g.lib.lists.conjunction(u.identities.map(identityWord)).map(String)),
        g.lib.texts.concat(g.lib.lists.conjunction(u.environments.map((e) => e.title)).map(String)),
      ), self.owner)),
    ]
  },

  render(self, g) {
    const t = self.field(F.trigger) as Trigger | undefined
    if (!t || !g.lib.values.isObject(t)) return []
    return [doc.para(say.entryPointTriggeredBy(), doc.ident(triggerWords(t)))]
  },
})

/** A trigger, in words. */
const triggerWords = (t: Trigger | undefined): string =>
  !t ? String() : t.type === TriggerType.http ? say.entryPointRequest(t.method, t.path)
    : t.type === TriggerType.command ? say.entryPointCommand(t.name)
      : t.type === TriggerType.message ? say.entryPointMessageOn(t.queue)
        : t.type === TriggerType.load ? say.entryPointThePageLoads() : say.entryPointScheduled(t.when)

/** An identity, in words. */
const identityWord = (i: Identity): string => (i === Identity.person ? say.audiencePerson() : say.audienceTenant())

/** The identities a node's records belong to, as its kind says (an entity of data: `ownedBy`); none for anything else. */
const ownersOf = (v: View, g: Graph): Identity[] => {
  const owned = v.field(OwnedField.ownedBy)
  return owned && g.lib.values.isObject(owned) ? Object.values(Identity).filter((i) => i in owned) : []
}

/** Records an entry point reaches: the node that holds them, the identities they belong to, where it reaches them. */
export interface Owned {
  data: View
  identities: Identity[]
  environments: View[]
}

/**
 * The records an entry point reaches that belong to someone (a person, a tenant), in each environment its component
 * runs in: what it wires there, through its ports, to the data.
 */
export const ownedReached = (self: View, g: Graph): Owned[] => {
  const component = g.from(self).out(EdgeName.partOf).first()
  if (!component) return []
  const named = g.from(component).out(EdgeName.environments).nodes()
  const envs = named.length ? named : g.all(KindName.environment).nodes().filter((v) => v.library === component.library)
  const found = new Map<AnyNode, Owned>()
  for (const env of envs) {
    for (const step of g.plan([self], env).steps) {
      const identities = ownersOf(step.node, g)
      if (!identities.length) continue
      const known = found.get(step.node.node) ?? { data: step.node, identities, environments: [] }
      known.environments.push(env)
      found.set(step.node.node, known)
    }
  }
  return [...found.values()]
}

/**
 * The records an entry point reaches that belong to an identity its audience does not carry, with those identities. An
 * audience that reaches every owner's records reaches them all.
 */
export const ownedUnreached = (self: View, audience: View, g: Graph): Owned[] => {
  if (overEveryOwner(audience)) return []
  const carried = carriedBy(audience)
  return ownedReached(self, g).map((o) => ({ ...o, identities: o.identities.filter((i) => !carried.includes(i)) })).filter((o) => o.identities.length)
}

/** Where an entry point is called from, by its trigger: a network, a machine, a device; nobody, for a schedule or a message. */
export const ReachFrom = keysOf({
  network: say.entryPointFromNetwork(), machine: say.entryPointFromMachine(), device: say.entryPointFromDevice(), nobody: say.entryPointFromNobody(),
})
export const reachOf = (t: Trigger | undefined): (typeof ReachFrom)[keyof typeof ReachFrom] =>
  t?.type === TriggerType.http ? ReachFrom.network : t?.type === TriggerType.command ? ReachFrom.machine
    : t?.type === TriggerType.load ? ReachFrom.device : ReachFrom.nobody

type Deps = Record<string, AnyNode>

interface EntryPointInput<D extends Deps> {
  owner: string
  trigger: Trigger
  in: Node<typeof KindName.component>
  /** Who may call it (C6): an audience of std (Anyone, TheSystem, TheOperators) or of the product. */
  for: Node<typeof KindName.audience>
  serves?: readonly Node<typeof KindName.requirement | typeof KindName.goal>[]
  deps?: D
  body: ((deps: Provided<D>) => Handler | Promise<Handler>) | FileBody<(deps: Provided<D>) => Handler | Promise<Handler>>
  signature?: Signature<Handler>
}

export function entryPoint<D extends Deps = {}>(input: EntryPointInput<D>): Node<"entry"> & Provides<Handler> & HasDeps<D> {
  const { signature: _s, ...rest } = input
  return kind(rest as never) as never
}

export const entryKind = kind
export const entryFields = F
