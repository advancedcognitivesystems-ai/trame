// What the last change changed: the difference between two compilations, in the intermediate format.
// Pure: the dev server uses it, the page shows it.

import { BlockType, InlineType, ResolutionOutcome, ViewGroup } from "../../../trame/kernel"
import type { ProvidedBy, Block, Document, Inline, Payload } from "../../../trame/kernel"
import type { OutputMessages } from "../../messages"

export interface Deps {
  messages: ProvidedBy<typeof OutputMessages>
}

const body = (deps: Deps) => {
  const { messages } = deps

  function diffPayloads(prev: Payload, next: Payload): Document | undefined {
    const title = (ref: string) => next.nodes.find((n) => n.ref === ref)?.title ?? prev.nodes.find((n) => n.ref === ref)?.title ?? ref
    const ref = (r: string): Inline => ({ t: InlineType.ref, ref: r, title: title(r) })
    const items: Inline[][] = []

    const before = new Set(prev.nodes.map((n) => n.ref))
    const after = new Set(next.nodes.map((n) => n.ref))
    for (const r of after) if (!before.has(r)) items.push([messages.newNode(), ref(r)])
    for (const r of before) if (!after.has(r)) items.push([messages.nodeRemoved(title(r))])

    for (const [r, s] of Object.entries(next.state.statuses)) {
      const old = prev.state.statuses[r]
      if (r in prev.state.statuses && old !== s) {
        items.push([
          ref(r), messages.statusGoesFrom(), old ? { t: InlineType.status, status: old } : messages.noStatus(),
          messages.statusGoesTo(), s ? { t: InlineType.status, status: s } : messages.noStatus(),
        ])
      }
    }
    const oldIssues = new Set(prev.state.issues.map((i) => i.key))
    const newIssues = new Set(next.state.issues.map((i) => i.key))
    for (const i of next.state.issues) {
      if (!oldIssues.has(i.key)) items.push([{ t: InlineType.severity, severity: i.severity }, messages.issueAdded(), i.what, ...(i.owner ? [" · ", { t: InlineType.person, name: i.owner } as Inline] : [])])
    }
    for (const i of prev.state.issues) {
      if (!newIssues.has(i.key)) items.push([{ t: InlineType.severity, severity: i.severity }, messages.issueResolved(), i.what])
    }
    const oldRes = new Map(prev.state.resolutions.map((r) => [r.key, r]))
    for (const r of next.state.resolutions) {
      const o = oldRes.get(r.key)
      const [target, paths] = r.key.split("|")
      if (!o) items.push([messages.newOverlapOn(), { t: InlineType.ident, text: paths }, messages.overlapOf(), ref(target)])
      else if (o.outcome !== r.outcome || o.applied.join() !== r.applied.join()) {
        items.push([
          messages.overlapOn(), { t: InlineType.ident, text: paths }, messages.overlapOf(), ref(target), messages.settledDifferently(),
          r.outcome === ResolutionOutcome.contested ? messages.contested() : messages.prevails(r.applied.map(title)),
        ])
      }
    }
    if (!items.length) return undefined
    const blocks: Block[] = [{ type: BlockType.list, items }]
    return { id: "changes", view: "changes", group: ViewGroup.document, title: messages.changesTitle(), blocks }
  }

  return { diffPayloads }
}

export type Api = ReturnType<typeof body>
export default body
