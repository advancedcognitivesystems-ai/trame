import { defineView, doc, Direction, Severity, ViewGroup, ViewName, type Block } from "../trame/kernel"
import words from "./words"

const say = words()

/** The exact expected state, without history: the values in force, without the amendments that produced them. */
export default defineView({
  name: ViewName.snapshot,
  label: say.snapshotSnapshot(),
  group: ViewGroup.document,
  run(c) {
    const { counts, texts, lists, punctuation } = c.lib
    const history = new Set(c.kinds().filter((k) => k.history).map((k) => k.name))
    const kept = c.all().where((v) => !history.has(v.kind) && !v.repealedBy).nodes()
    const keptRefs = new Set(kept.map((v) => v.ref))
    const blocks: Block[] = []
    for (const m of c.modules()) {
      const mine = kept.filter((v) => v.module === m.id)
      if (counts.isEmpty(mine)) continue
      const nodes: Block[] = []
      for (const k of c.kinds()) {
        for (const v of mine.filter((x) => x.kind === k.name)) {
          const facts = k.fields
            .filter((f) => f.label && v.field(f.name) !== undefined)
            .map((f) => ({ label: f.label!, value: [c.value(v, f.name, v.field(f.name))] }))
          const links = new Map<string, string[]>()
          for (const e of c.edges(v, Direction.out)) {
            if (e.derived || !keptRefs.has(e.other.ref)) continue
            links.set(e.label, [...(links.get(e.label) ?? []), e.other.title])
          }
          for (const [label, titles] of links) facts.push({ label, value: [texts.concat(lists.enumeration(titles))] })
          nodes.push(doc.section(v.title, [
            doc.para(k.label.one, punctuation.parts, doc.ident(v.id), ...(v.status ? [punctuation.parts, doc.status(v.status)] : [])),
            ...(counts.any(facts) ? [doc.facts(facts)] : []),
          ]))
        }
      }
      blocks.push(doc.section(m.title, nodes))
    }
    const open = c.issues().filter((i) => i.severity === Severity.blocking && i.node && keptRefs.has(i.node.ref))
    if (counts.any(open)) blocks.push(doc.section(say.snapshotStillOpen(), [doc.list(open.map((i) => [i.what, ...(i.owner ? [punctuation.parts, doc.person(i.owner)] : [])]))]))
    return {
      title: say.snapshotSnapshot(),
      intro: [say.snapshotTheExactStateExpectedOn(), doc.date(c.today), say.snapshotWithoutHistoryTheValuesInForce()],
      blocks,
    }
  },
})
