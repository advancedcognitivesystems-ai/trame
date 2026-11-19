import { defineKind, field, optional, hole, doc, keysOf, KindName, RoleField, type Node, type SignatureType } from "../trame/kernel"
import words from "./words"

const say = words()

const fields = {
  owner: field.owner(),
  [RoleField.people]: field.value<string[]>(say.rolePeople()),
  [RoleField.notAuthor]: optional(field.value<boolean>(say.roleNotAuthor())),
  [RoleField.signature]: optional(field.value<string>(say.roleSignature())),
}
const F = keysOf(fields)

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
  renderOwns: [F.people, F.notAuthor, F.signature],
  fields,
  edges: {},

  holes: (self, g) => [g.lib.counts.isEmpty(peopleOf(self, g.lib.values.isText)) && hole.warning(say.roleNobody(), self.owner)],

  render(self, g) {
    const { texts, lists, values } = g.lib
    const signature = self.field(F.signature)
    return [doc.facts([
      { label: say.rolePeople(), value: [texts.concat(lists.conjunction(peopleOf(self, values.isText)).map(String))] },
      ...(self.field(F.notAuthor) === true ? [{ label: say.roleNotAuthor(), value: [say.roleYes()] }] : []),
      ...(values.isText(signature) ? [{ label: say.roleSignature(), value: [doc.ident(signature)] }] : []),
    ])]
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
}

/** `role({ owner, people: ["Anne"], notAuthor: true, signature: "attribution" })` */
export function role(input: RoleInput): Node<typeof KindName.role> {
  return kind(input as never) as never
}

export const roleKind = kind
