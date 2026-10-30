import {
  defineKind, field, optional, edge, hole, doc, keysOf, Status, KindName, AnyTarget, ReviewField, ReviewEdge, ReviewState, RoleField, EvidenceSource,
  type Node, type View, type Graph,
} from "../trame/kernel"
import { latestOf } from "./artifact"
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

/** A row of a dataset, as the dataset judged its review. */
interface RowReview { row: string; language?: string; review: string; by?: string }

/**
 * What a review still awaits: for a dataset, the rows in each language whose latest review is not an approval by a
 * person of the role (not by the dataset's owner when the role never reviews its own work); for another node, an
 * approval by a person of the role of the node as it is now.
 */
const awaited = (self: View, g: Graph) => {
  const { values, counts } = g.lib
  const role = g.from(self).out(E.by).first()
  const people = role ? peopleOf(role, values.isText) : []
  const own = role?.field(RoleField.notAuthor) === true
  const fair = (by: string | undefined, author: string | undefined) => by !== undefined && people.includes(by) && !(own && by === author)
  return g.from(self).out(E.of).nodes().map((subject) => {
    const r = subject.result<{ reviews?: RowReview[] }>()
    if (subject.kind === KindName.dataset && r?.reviews) {
      const rows = r.reviews
      const waiting = rows.filter((x) => x.review !== ReviewState.approved || !fair(x.by, subject.owner))
      return { subject, total: rows.length, waiting: waiting.map((x) => ({ row: x.row, language: x.language })) }
    }
    const last = latestOf(subject, EvidenceSource.review)
    const now = g.lib.fingerprint?.(subject.decl?.sourceText)
    const ok = last !== undefined && last.value === counts.one && last.fingerprint === now && fair(last.by, subject.owner)
    return { subject, total: counts.one, waiting: ok ? [] : [{ row: subject.ref, language: undefined }] }
  })
}

/**
 * A review: what must be reviewed (the rows of a dataset in each language, an ADR, a decision), by which role, and how
 * many approvals; it holds when each has been approved, as it is now, by a person of the role. The graph knows who
 * must review what: each review awaited is an issue of the role.
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
