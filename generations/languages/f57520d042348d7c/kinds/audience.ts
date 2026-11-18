import {
  defineKind, field, optional, optionalEdge, edge, hole, doc, keysOf, KindName, EdgeName, AudienceField, Identity, EntryEdge, type Node,
} from "../trame/kernel"
import words from "./words"

const say = words()

const fields = {
  owner: field.owner(),
  [AudienceField.carries]: optional(field.value<readonly Identity[]>(say.audienceCarries())),
  [AudienceField.system]: optional(field.value<boolean>(say.audienceSystem())),
  [AudienceField.everyOwner]: optional(field.value<boolean>(say.audienceEveryOwner())),
}
const F = keysOf(fields)

/** The identities an audience's callers carry, as declared: none when it says none. */
export const carriedBy = (v: { field(path: string): unknown }): readonly Identity[] => {
  const c = v.field(F.carries)
  return Array.isArray(c) ? c.filter((x): x is Identity => Object.values(Identity).some((i) => i === x)) : []
}

/** Whether nobody calls an audience's entry points (a schedule, a message). */
export const bySystem = (v: { field(path: string): unknown }): boolean => v.field(F.system) === true

/** Whether an audience reaches every owner's records. */
export const overEveryOwner = (v: { field(path: string): unknown }): boolean => v.field(F.everyOwner) === true

/**
 * An audience: who may call an entry point (C6). Anyone who reaches it, unidentified; the system, when nobody calls (a
 * schedule, a message); or callers who carry an identity (a person, a tenant), which identification gives them (C7).
 * Where it is reached from (a network, a machine, a device) is not the audience's: the trigger and the environment say
 * it. An audience may reach every owner's records, as the owner of a database bypasses its row-level security: those
 * who run the product's machines and its deployments.
 */
const kind = defineKind({
  name: KindName.audience,
  label: { one: say.audienceAudience(), many: say.audienceAudiences() },
  renderOwns: [F.carries, F.system, F.everyOwner],
  fields,
  edges: {
    [EdgeName.serves]: optionalEdge(edge.many([KindName.requirement, KindName.goal], { label: say.adrServes(), inverse: say.adrServedBy() })),
  },

  holes: (self, g) => {
    const { counts, values } = g.lib
    const declared = self.field(F.carries)
    const unknown = Array.isArray(declared) ? declared.filter((x) => !values.isText(x) || !Object.values(Identity).some((i) => i === x)) : []
    const entries = g.from(self).in(EntryEdge.audience).nodes()
    return [
      ...unknown.map((x) => hole.error(say.audienceCarriesUnknown(String(x)), self.owner)),
      // Until identification comes (C7), nothing identifies an audience that carries an identity.
      counts.any(carriedBy(self)) && counts.any(entries) && hole.warning(say.audienceNotIdentified(entries.length), self.owner),
    ]
  },

  render(self, g) {
    const { texts, lists } = g.lib
    const carried = carriedBy(self).map((i) => (i === Identity.person ? say.audiencePerson() : say.audienceTenant()))
    const carries = bySystem(self) ? say.audienceNobody() : carried.length ? texts.concat(lists.conjunction(carried).map(String)) : say.audienceNothing()
    return [doc.facts([
      { label: say.audienceCarries(), value: [carries] },
      ...(overEveryOwner(self) ? [{ label: say.audienceEveryOwner(), value: [say.roleYes()] }] : []),
    ])]
  },
})

interface AudienceInput {
  owner: string
  /** The identities its callers carry, once identified (C7): a person, a tenant. */
  carries?: readonly Identity[]
  /** Nobody calls: a schedule, a message. */
  system?: boolean
  /** It reaches every owner's records, as the owner of a database bypasses its row-level security. */
  everyOwner?: boolean
  serves?: readonly Node<typeof KindName.requirement | typeof KindName.goal>[]
}

/** `audience({ owner, carries: [Identity.person] })`: who may call an entry point. */
export function audience(input: AudienceInput): Node<typeof KindName.audience> {
  return kind(input as never) as never
}

export const audienceKind = kind
