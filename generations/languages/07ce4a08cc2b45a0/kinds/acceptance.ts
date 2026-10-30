import { defineKind, field, edge, hole, doc, plural, Hole, Outcome, Status, type Inline } from "../trame/kernel"
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

/** The acceptance criteria of a requirement. Shown inside the requirement. */
export const acceptance = defineKind({
  name: "acceptance",
  label: { one: say.acceptanceAcceptanceCriteria(), many: say.acceptanceAcceptanceCriteria() },
  inline: "accepts",
  fields: {
    owner: field.owner(),
    criteria: field.fn<Criteria>(() => (criterion) => criterion("example", () => true)),
  },
  edges: {
    accepts: edge.one(["requirement"], { label: say.acceptanceAccepts(), inverse: say.acceptanceAcceptanceCriteria() }),
  },

  evaluate(self, g): Result[] {
    const list: [string, Check][] = []
    self.criteria((name, check) => list.push([name, check]))
    return list.map(([name, check]): Result => {
      try {
        return { name, status: check() ? Outcome.passed : Outcome.failed }
      } catch (e) {
        if (e instanceof Hole) {
          g.blocked(e, "criterion", self.accepts)
          const v = g.view(e.node)
          return { name, status: Outcome.blocked, waiting: { ref: v.ref, title: v.title, suffix: e.label.startsWith(v.id) ? e.label.slice(v.id.length) : "" } }
        }
        return { name, status: Outcome.error, error: (e as Error).message }
      }
    })
  },

  status(self) {
    const r = self.result<Result[]>()
    if (!r?.length) return Status.unknown
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
    const detail = (x: Result): Inline[] | undefined =>
      x.waiting ? [say.acceptanceWaitingForTheDecision(), { t: "ref", ref: x.waiting.ref, title: x.waiting.title }, x.waiting.suffix]
        : x.error ? [x.error] : undefined
    return [doc.checks(r.map((x) => ({ name: x.name, outcome: x.status, detail: detail(x) })), [self.title, say.acceptanceOwner(), doc.person(self.owner)])]
  },

  summary(selves) {
    const all = selves.flatMap((s) => s.result<Result[]>() ?? [])
    if (!all.length) return undefined
    const ok = all.filter((r) => r.status === Outcome.passed).length
    return say.acceptancePassedOutOf(plural(ok, say.acceptanceAcceptanceCriterion(), say.acceptanceAcceptanceCriteria2()), all.length)
  },
})
