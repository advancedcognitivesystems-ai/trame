// A date's documents that are as today's but for the date of the graph: written once, on today's, with the order of them
// all, so that a page of several dates carries what differs only. The page moves them back to their date.

import { movedTo } from "#trame/kernel"
import type { Payload } from "#trame/kernel"

const body = () => ({
  /** The documents of a date's payload that are today's, moved to its date. */
  asToday: (p: Payload, today: Payload): Set<string> => {
    const theirs = new Map(today.documents.map((doc) => [doc.id, movedTo(JSON.stringify(doc), today.date, p.date, p.language)]))
    return new Set(p.documents.filter((doc) => theirs.get(doc.id) === JSON.stringify(doc)).map((doc) => doc.id))
  },
})

export type Api = ReturnType<typeof body>
export default body
