import { defineKind, field, edge, hole, doc, keysOf, Hole, Outcome, Status, KindName, type Inline } from "../trame/kernel"
import words from "./words"

const say = words()

type Check = () => boolean
type Criteria = (criterion: (name: string, check: Check) => void) => void

interface Result {
  name: string
  status: Outcome
  /** The missing decision, when the criterion is blocked. */
  waiting?: { ref: string; title: string; suffix: string }
  error?: string
}

const edges = {
  accepts: edge.one([KindName.requirement], { label: say.acceptanceAccepts(), inverse: say.acceptanceAcceptanceCriteria() }),
}
const E = keysOf(edges)

/** The acceptance criteria of a requirement. Shown inside the requirement. */
export const acceptance = defineKind({
  name: KindName.acceptance,
  label: { one: say.acceptanceAcceptanceCriteria(), many: say.acceptanceAcceptanceCriteria() },
  inline: E.accepts,
  fields: {
    owner: field.owner(),
    criteria: field.fn<Criteria>(() => (criterion) => criterion(say.acceptanceExample(), () => true)),
  },
  edges,

  evaluate(self, g): Result[] {
    const list: [string, Check][] = []
    self.criteria((name, check) => list.push([name, check]))
    return list.map(([name, check]): Result => {
      try {
        return { name, status: check() ? Outcome.passed : Outcome.failed }
      } catch (e) {
        if (e instanceof Hole) {
          g.blocked(e, { one: say.acceptanceCriterion(), many: say.acceptanceCriteria() }, self.accepts)
          const v = g.view(e.node)
          return { name, status: Outcome.blocked, waiting: { ref: v.ref, title: v.title, suffix: e.label.startsWith(v.id) ? e.label.slice(v.id.length) : g.lib.texts.empty } }
        }
        return { name, status: Outcome.error, error: (e as Error).message }
      }
    })
  },

  status(self, g) {
    const r = self.result<Result[]>()
    if (!r || g.lib.counts.isEmpty(r)) return Status.unknown
    if (r.some((x) => x.status === Outcome.failed || x.status === Outcome.error)) return Status.violated
    if (r.some((x) => x.status === Outcome.blocked)) return Status.blocked
    return Status.held
  },

  holes: (self) =>
    (self.result<Result[]>() ?? [])
      .filter((r) => r.status === Outcome.failed || r.status === Outcome.error)
      .map((r) => hole.error(say.acceptanceCriterionNotMet(r.name))),

  render(self) {
    const r = self.result<Result[]>() ?? []
    return [doc.checks(r.map((x) => ({ name: x.name, outcome: x.status, detail: detailOf(x) })), [self.title, say.acceptanceOwner(), doc.person(self.owner)])]
  },

  summary(selves, g) {
    const all = selves.flatMap((s) => s.result<Result[]>() ?? [])
    if (g.lib.counts.isEmpty(all)) return undefined
    return say.acceptancePassedOutOf(all.filter((r) => r.status === Outcome.passed).length, all.length)
  },
})

/** What a criterion that did not pass says: the decision it waits for, or its error. */
const detailOf = (x: Result): Inline[] | undefined =>
  x.waiting ? [...say.acceptanceWaitingFor(doc.refTo(x.waiting)), x.waiting.suffix] : x.error ? [x.error] : undefined
