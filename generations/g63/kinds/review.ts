import {
  defineKind, field, optional, edge, hole, doc, keysOf, Status, KindName, AnyTarget, ReviewField, ReviewEdge, ReviewState, RoleField, EvidenceSource,
  type Node, type View, type Graph,
} from "../trame/kernel"
import { peopleOf } from "./role"
import words from "./words"

const say = words()

const fields = {
  owner: field.owner(),
  [ReviewField.approvals]: optional(field.number(say.reviewApprovals())),
}
const F = keysOf(fields)
const edges = {
  [ReviewEdge.of]: edge.many([AnyTarget], { label: say.reviewOf(), inverse: say.reviewReviewedBy() }),
  [ReviewEdge.by]: edge.one([KindName.role], { label: say.reviewBy(), inverse: say.reviewGives() }),
}
const E = keysOf(edges)

/** A row of a dataset, as the dataset judged its review: and who approves it as it is. */
interface RowReview { row: string; language?: string; review: string; by?: string; approvedBy?: string[] }

/**
 * What a review still awaits of one subject: for a dataset, the rows in each language not yet approved, as they are, by
 * as many people of the role as the review asks (one), the dataset's owner not counted when the role never reviews its
 * own work, and a change asked by anyone holding them back; for another node, the same of the node as it is now.
 */
export const waitingFor = (self: View, subject: View, g: Graph): { row: string; language?: string }[] => {
  const { values, counts } = g.lib
  const role = g.from(self).out(E.by).first()
  const people = role ? peopleOf(role, values.isText) : []
  const own = role?.field(RoleField.notAuthor) === true
  const needed = self.field(F.approvals)
  const enough = (approvers: readonly string[]) => {
    const fair = new Set(approvers.filter((by) => people.includes(by) && !(own && by === subject.owner)))
    return fair.size >= (values.isNumber(needed) ? needed : counts.one)
  }
  const r = subject.result<{ reviews?: RowReview[] }>()
  if (subject.kind === KindName.dataset && r?.reviews) {
    return r.reviews
      .filter((x) => x.review !== ReviewState.approved || !enough(x.approvedBy ?? []))
      .map((x) => ({ row: x.row, language: x.language }))
  }
  // Each person's latest review of the node, on the node as it is now.
  const now = g.lib.fingerprint?.(subject.decl?.sourceText)
  const latest = [...new Map(subject.evidence.filter((e) => e.source === EvidenceSource.review).map((e) => [e.by, e])).values()]
    .filter((e) => now !== undefined && e.fingerprint === now)
  const ok = !latest.some((e) => e.value !== counts.one) && enough(latest.map((e) => e.by).filter(values.isText))
  return ok ? [] : [{ row: subject.ref, language: undefined }]
}

/** What a review still awaits, subject by subject. */
const awaited = (self: View, g: Graph) =>
  g.from(self).out(E.of).nodes().map((subject) => {
    const r = subject.result<{ reviews?: RowReview[] }>()
    const total = subject.kind === KindName.dataset && r?.reviews ? r.reviews.length : g.lib.counts.one
    return { subject, total, waiting: waitingFor(self, subject, g) }
  })

/**
 * A review: what must be reviewed (the rows of a dataset in each language, an ADR, a decision), by which role, and how
 * many approvals; it holds when each has been approved, as it is now, by that many people of the role, and no change
 * is asked of it. The graph knows who must review what: each review awaited is an issue of the role.
 */
const kind = defineKind({
  name: KindName.review,
  label: { one: say.reviewReview(), many: say.reviewReviews() },
  renderOwns: [F.approvals],
  fields,
  edges,

  status(self, g) {
    const all = awaited(self, g)
    return g.lib.counts.any(all) && all.every((a) => g.lib.counts.isEmpty(a.waiting)) ? Status.held : Status.unknown
  },

  holes(self, g) {
    const { texts, lists, values, counts } = g.lib
    const role = g.from(self).out(E.by).first()
    const listed = role ? peopleOf(role, values.isText) : []
    const owner = role?.title ?? self.owner
    // Who may give it: the people of the role, or the role itself while nobody holds it.
    const people = counts.isEmpty(listed) ? owner ?? texts.empty : texts.concat(lists.conjunction(listed).map(String))
    return awaited(self, g).flatMap((a) => {
      if (a.subject.kind !== KindName.dataset) return counts.any(a.waiting) ? [hole.warning(say.reviewNodeAwaiting(a.subject.title, people), owner)] : []
      const languages = [...new Set(a.waiting.map((w) => w.language))]
      return languages.map((language) =>
        hole.warning(say.reviewAwaiting(a.waiting.filter((w) => w.language === language).length, a.subject.title, language, people), owner))
    })
  },

  render(self, g) {
    const all = awaited(self, g)
    const total = all.reduce((n, a) => n + a.total, g.lib.counts.zero)
    const waiting = all.reduce((n, a) => n + a.waiting.length, g.lib.counts.zero)
    return [doc.para(...say.reviewSummary(total - waiting, total))]
  },
})

interface ReviewInput {
  owner: string
  /** What is reviewed: datasets (each row in each language), ADRs, decisions… */
  of: readonly Node[]
  /** The role whose people review. */
  by: Node<typeof KindName.role>
  /** How many approvals each needs (one). */
  approvals?: number
}

/** `review({ owner, of: [Poses, Sequences], by: Teachers })` */
export function review(input: ReviewInput): Node<typeof KindName.review> {
  return kind(input as never) as never
}

export const reviewKind = kind
