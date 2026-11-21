import { defineKind, field, optional, hole, doc, keysOf, daysBetween, KindName, RoleField, ChangeWay, type Delegation, type Node, type SignatureType, HoleCode } from "../trame/kernel"
import { declaredHandles } from "./actor"
import words from "./words"

const say = words()

const fields = {
  owner: field.owner(),
  [RoleField.people]: field.value<string[]>(say.rolePeople()),
  [RoleField.notAuthor]: optional(field.value<boolean>(say.roleNotAuthor())),
  [RoleField.signature]: optional(field.value<string>(say.roleSignature())),
  [RoleField.delegations]: optional(field.value<readonly Delegation[]>(say.roleDelegations())),
}
const F = keysOf(fields)

/** The delegations of a role, as declared: those whose agent, person and day are texts. */
export const delegationsOf = (v: { field(path: string): unknown }, isText: (x: unknown) => x is string): Delegation[] => {
  const d = v.field(RoleField.delegations)
  return Array.isArray(d) ? d.filter((x): x is Delegation => isText(x?.agent) && isText(x?.for)) : []
}

/** The people of a role, as declared: none when it lists nobody. */
export const peopleOf = (v: { field(path: string): unknown }, isText: (x: unknown) => x is string): string[] => {
  const p = v.field(F.people)
  return Array.isArray(p) ? p.filter(isText) : []
}

/**
 * A role: the people who may produce or sign a kind of evidence (review a content, sign a check by hand), whether they
 * may do it on their own work, and the signature their evidence carries (an attribution: who, when, on which
 * fingerprint). Checks and reviews name the role; the graph knows who must do what.
 */
const kind = defineKind({
  name: KindName.role,
  label: { one: say.roleRole(), many: say.roleRoles() },
  renderOwns: [F.people, F.notAuthor, F.signature, F.delegations],
  fields,
  edges: {},
  // Who holds it, and who may act for them in it until when (C4): what people decide, which a publication freezes.
  changes: { [F.people]: ChangeWay.chosen, [F.notAuthor]: ChangeWay.chosen, [F.delegations]: ChangeWay.chosen },

  holes: (self, g) => {
    const { counts, values, texts, lists, dates } = g.lib
    const people = peopleOf(self, values.isText)
    const delegations = delegationsOf(self, values.isText)
    // Each person it lists, and each agent and person a delegation names, is an actor of the graph (C4), once the graph
    // declares any.
    const declared = declaredHandles(g)
    const named = [...new Set([...people, ...delegations.flatMap((d) => [d.agent, d.for])])]
    const undeclared = counts.any(declared) ? named.filter((p) => !declared.has(p)) : []
    return [
      counts.isEmpty(people) && hole.warning(HoleCode.roleEmpty, say.roleNobody(), self.owner),
      counts.any(undeclared) && hole.error(HoleCode.personUndeclared, say.actorPeopleUndeclared(texts.concat(lists.conjunction(undeclared).map(String))), self.owner),
      ...delegations.flatMap((d) => {
        const bounded = values.isText(d.until) && dates.isCalendarDate(d.until)
        return [
          !people.includes(d.for) && hole.error(HoleCode.delegationOutsideRole, say.roleDelegationOutside(d.agent, d.for), self.owner),
          !bounded && hole.error(HoleCode.delegationUnbounded, say.roleDelegationUnbounded(d.agent, d.for), self.owner),
          bounded && daysBetween(g.today, d.until) < counts.zero &&
            hole.warning(HoleCode.delegationExpired, say.roleDelegationExpired(d.agent, d.for, dates.format(d.until)), self.owner),
        ]
      }),
    ]
  },

  render(self, g) {
    const { texts, lists, values, counts, dates } = g.lib
    const signature = self.field(F.signature)
    const delegations = delegationsOf(self, values.isText)
    return [
      doc.facts([
        { label: say.rolePeople(), value: [texts.concat(lists.conjunction(peopleOf(self, values.isText)).map(String))] },
        ...(self.field(F.notAuthor) === true ? [{ label: say.roleNotAuthor(), value: [say.roleYes()] }] : []),
        ...(values.isText(signature) ? [{ label: say.roleSignature(), value: [doc.ident(signature)] }] : []),
      ]),
      ...(counts.any(delegations)
        ? [doc.table([say.roleAgent(), say.roleFor(), say.roleUntil()], delegations.map((d) => [
          [d.agent], [d.for], [values.isText(d.until) && dates.isCalendarDate(d.until) ? dates.format(d.until) : String(d.until)],
        ]))]
        : []),
    ]
  },
})

interface RoleInput {
  owner: string
  /** The people who hold the role. */
  people: readonly string[]
  /** True: they never review or sign their own work. */
  notAuthor?: boolean
  /** How their evidence is signed. */
  signature?: SignatureType
  /** Who may act for one of its people, until a day: an agent gives the evidence, which is that person's. */
  delegations?: readonly Delegation[]
}

/** `role({ owner, people: ["Anne"], notAuthor: true, delegations: [{ agent: "Ben", for: "Anne", until: "2026-12-31" }] })` */
export function role(input: RoleInput): Node<typeof KindName.role> {
  return kind(input as never) as never
}

export const roleKind = kind
