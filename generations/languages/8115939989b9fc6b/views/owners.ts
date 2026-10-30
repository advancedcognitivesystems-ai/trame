import { defineView, doc, DateRole, Severity, ViewGroup, ViewName, KindName, RoleField, ReviewEdge, CheckEdge, type Block, type Inline, type View } from "../trame/kernel"
import words from "./words"

const say = words()

/**
 * For each person, and each role: what they must decide, settle or watch, and what they own. A role says who holds it,
 * a person the roles they hold, and each piece of evidence a role awaits (a check by hand, a review) comes with the
 * command that gives it.
 */
export default defineView({
  name: ViewName.owners,
  label: say.ownersOwners(),
  group: ViewGroup.document,
  run(c) {
    const { counts, texts } = c.lib
    const views = c.all().where((v) => !v.repealedBy).nodes()
    const issues = c.issues()
    const people = [...new Set([...issues.map((i) => i.owner), ...views.map((v) => v.owner)].filter((x): x is string => !!x))].sort()
    const state = (v: View) =>
      v.status ? [doc.status(v.status)]
        : c.kindOf(v).fields.some((f) => f.role === DateRole.start) ? [v.active ? say.historyInForce() : say.ownersNotInForce()]
          : issues.some((i) => i.node?.ref === v.ref && i.severity === Severity.blocking) ? [say.ownersToDecide()] : [texts.empty]
    const count = (list: typeof issues, s: Severity) => String(list.filter((i) => i.severity === s).length)
    // The roles, by the name their issues carry, and the people of each.
    const roles = c.all(KindName.role).nodes()
    const peopleOf = (role: View) => {
      const listed = role.field(RoleField.people)
      return Array.isArray(listed) ? listed.filter(c.lib.values.isText) : []
    }
    const roleNamed = (name: string | undefined) => roles.find((r) => r.title === name)
    const held = (person: string) => roles.filter((r) => peopleOf(r).includes(person))
    const blocks: Block[] = [doc.table([say.historyOwner(), say.ownersToDecideOrSettle(), say.ownersErrors(), say.ownersToWatch(), say.ownersOwns()], people.map((p) => {
      const mine = issues.filter((i) => i.owner === p)
      return [[doc.person(p)], [count(mine, Severity.blocking)], [count(mine, Severity.error)], [count(mine, Severity.warning)], [String(views.filter((v) => v.owner === p).length)]]
    }))]
    /** Who a role awaits, and how each piece of evidence it awaits is given: a check by hand, a review of rows or of a node. */
    const forRole = (role: View, mine: typeof issues): Block[] => {
      const holders = peopleOf(role)
      const who = c.lib.sequences.head(holders) ?? say.ownersAPerson()
      const awaiting = [...new Map(mine.flatMap((i) => (i.node ? [[i.node.ref, i.node] as const] : []))).values()]
      const how = awaiting.flatMap((v): Inline[][] =>
        v.kind === KindName.check && !c.from(v).out(CheckEdge.runs).exists() ? [[doc.ref(v), c.lib.punctuation.introduces, doc.ident(say.ownersCheckCommand(v.id, who))]]
          : v.kind === KindName.review ? c.from(v).out(ReviewEdge.of).nodes().map((subject) =>
            [doc.ref(subject), c.lib.punctuation.introduces, doc.ident(subject.kind === KindName.dataset ? say.ownersRowCommand(subject.id, who) : say.ownersCheckCommand(subject.id, who))])
            : [])
      return [
        doc.facts([{ label: say.ownersHeldBy(), value: c.lib.counts.any(holders) ? [c.lib.texts.concat(c.lib.lists.conjunction(holders).map(String))] : [say.ownersNobodyHoldsIt()] }]),
        ...(c.lib.counts.any(how) ? [doc.section(say.ownersToGive(), [doc.list(how)])] : []),
      ]
    }
    const orphans = issues.filter((i) => !i.owner)
    for (const p of [...people, ...(counts.any(orphans) ? [undefined] : [])]) {
      const mine = issues.filter((i) => i.owner === p)
      const inner: Block[] = []
      const role = roleNamed(p)
      if (role) inner.push(...forRole(role, mine))
      const holds = p ? held(p) : []
      if (counts.any(holds)) inner.push(doc.facts([{ label: say.ownersHolds(), value: c.lib.lists.conjunction(holds.map(doc.ref)) }]))
      if (counts.isEmpty(mine)) inner.push(doc.para(say.ownersNothingToDecideOrWatch()))
      else inner.push(doc.issues(mine.map(c.issueItem)))
      const owned = views.filter((v) => p && v.owner === p)
      if (counts.any(owned)) {
        inner.push(doc.section(say.ownersOwns(), [doc.table([say.assemblyNode(), say.ownersKind(), say.ownersState()], owned.map((v) => [[doc.ref(v)], [c.kindOf(v).label.one], state(v)]))]))
      }
      blocks.push(doc.section(p ?? say.ownersUnassigned(), inner, p))
    }
    return { title: say.ownersOwners(), intro: [say.ownersWhatEachPersonMustDecideSettle(), doc.date(c.today), say.ownersAndWhatTheyOwn()], blocks }
  },
})
