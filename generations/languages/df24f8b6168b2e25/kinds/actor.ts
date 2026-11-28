import {
  defineKind, field, optional, optionalEdge, edge, hole, doc, keysOf, KindName, EdgeName, ActorField, ActorEdge, ActorSort, ChangeWay, HoleCode,
  type Node, type View, type Graph,
} from "../trame/kernel"
import words from "./words"

const say = words()

const fields = {
  owner: field.owner(),
  [ActorField.handle]: field.text(say.actorHandle()),
  [ActorField.sort]: field.value<ActorSort>(say.actorSort()),
  [ActorField.identities]: optional(field.map(say.actorIdentities())),
}
const F = keysOf(fields)
const edges = {
  [ActorEdge.members]: optionalEdge(edge.many([KindName.actor], { label: say.actorMembers(), inverse: say.actorMemberOf() })),
  [EdgeName.serves]: optionalEdge(edge.many([KindName.requirement, KindName.goal], { label: say.adrServes(), inverse: say.adrServedBy() })),
}
const E = keysOf(edges)

/** An actor's handle, as it is declared: the text owners, roles and evidence give. */
export const handleOf = (v: { field(path: string): unknown }): unknown => v.field(F.handle)

/** The handles of the actors a graph declares, its own and its libraries'. */
export const declaredHandles = (g: Graph): Set<string> =>
  new Set(g.all(KindName.actor).nodes().map(handleOf).filter(g.lib.values.isText))

/** What tells two declarations of an actor apart: what it is, its identities, the handles of its members. */
const shapeOf = (v: View, g: Graph): string =>
  JSON.stringify([v.field(F.sort), v.field(F.identities) ?? {}, g.from(v).out(E.members).nodes().map(handleOf).sort()])

/**
 * An actor: who acts in a project (C4), a person, a team of actors, an agent that acts for people (Claude), a machine
 * (a runner). Its handle is the text an owner gives, and a role's people, and the evidence someone gives: a handle no
 * actor declares is an error. The same actor may be declared in several places (a library of the repository's people,
 * a project's own), each time the same way.
 */
const kind = defineKind({
  name: KindName.actor,
  label: { one: say.actorActor(), many: say.actorActors() },
  renderOwns: [F.handle, F.sort, F.identities],
  fields,
  edges,
  statement: ChangeWay.stated,
  changes: { [F.handle]: ChangeWay.chosen, [F.sort]: ChangeWay.chosen, [F.identities]: ChangeWay.chosen, [E.members]: ChangeWay.chosen },

  holes: (self, g) => {
    const { values, counts } = g.lib
    const sort = self.field(F.sort)
    const name = handleOf(self)
    const known = Object.values(ActorSort).some((s) => s === sort)
    const others = values.isText(name)
      ? g.all(KindName.actor).where((v) => v.ref !== self.ref && handleOf(v) === name && shapeOf(v, g) !== shapeOf(self, g)).nodes()
      : []
    return [
      !known && hole.error(HoleCode.actorSortUnknown, say.actorSortUnknown(String(sort)), self.owner),
      sort === ActorSort.team && counts.isEmpty(g.from(self).out(E.members).nodes()) &&
        hole.warning(HoleCode.teamWithoutMembers, say.actorTeamWithoutMembers(), self.owner),
      ...others.map((o) => hole.error(HoleCode.actorDeclaredTwice, say.actorDeclaredTwice(String(name), o.title), self.owner)),
    ]
  },

  render(self, g) {
    const { texts, values } = g.lib
    const sort = self.field(F.sort)
    const sorts: Record<ActorSort, () => string> = {
      [ActorSort.person]: say.actorPerson, [ActorSort.team]: say.actorTeam, [ActorSort.agent]: say.actorAgent, [ActorSort.machine]: say.actorMachine,
    }
    const said = Object.values(ActorSort).find((s) => s === sort)
    const identities = self.field(F.identities)
    const entries = values.isObject(identities) ? Object.entries(identities as Record<string, unknown>).filter(([, v]) => values.isText(v)) : []
    return [doc.facts([
      { label: say.actorHandle(), value: [doc.ident(String(handleOf(self)))] },
      { label: say.actorSort(), value: [said ? sorts[said]() : String(sort)] },
      ...entries.map(([where, who]) => ({ label: texts.concat([say.actorIdentities(), texts.space, where]), value: [doc.ident(String(who))] })),
    ])]
  },
})

interface ActorInput {
  owner: string
  /** The text by which owners, roles and evidence name it. */
  handle: string
  /** A person, a team, an agent, a machine (a word of ActorSort). */
  sort: ActorSort
  /** Its identities elsewhere, by place: its login on GitHub. */
  identities?: Readonly<Record<string, string>>
  /** The actors a team gathers. */
  members?: readonly Node<typeof KindName.actor>[]
  /** What it is declared for. */
  serves?: readonly Node<typeof KindName.requirement | typeof KindName.goal>[]
}

/** `actor({ owner: "ghalaax", handle: "ghalaax", sort: ActorSort.person, identities: { github: "ghalaax" } })` */
export function actor(input: ActorInput): Node<typeof KindName.actor> {
  return kind(input as never) as never
}

export const actorKind = kind
