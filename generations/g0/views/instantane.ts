import { defineView, doc, type Block } from "../trame/kernel"

/** L'état exact attendu, sans historique : les valeurs en vigueur, sans les amendements qui les ont produites. */
export default defineView({
  name: "instantane",
  label: "Instantané",
  group: "document",
  order: 20,
  run(c) {
    const history = new Set(c.kinds().filter((k) => k.history).map((k) => k.name))
    const kept = c.all().where((v) => !history.has(v.kind) && !v.repealedBy).nodes()
    const keptRefs = new Set(kept.map((v) => v.ref))
    const blocks: Block[] = []
    for (const m of c.modules()) {
      const mine = kept.filter((v) => v.module === m.id)
      if (!mine.length) continue
      const nodes: Block[] = []
      for (const k of c.kinds()) {
        for (const v of mine.filter((x) => x.kind === k.name)) {
          const facts = k.fields
            .filter((f) => f.label && v.field(f.name) !== undefined)
            .map((f) => ({ label: f.label!, value: [c.value(v, f.name, v.field(f.name))] }))
          const links = new Map<string, string[]>()
          for (const e of c.edges(v, "out")) {
            if (e.derived || !keptRefs.has(e.other.ref)) continue
            links.set(e.label, [...(links.get(e.label) ?? []), e.other.title])
          }
          for (const [label, titles] of links) facts.push({ label, value: [titles.join(", ")] })
          nodes.push(doc.section(v.title, [
            doc.para(k.label.one, " · ", doc.ident(v.id), ...(v.status ? [" · ", doc.status(v.status)] : [])),
            ...(facts.length ? [doc.facts(facts)] : []),
          ]))
        }
      }
      blocks.push(doc.section(m.title, nodes))
    }
    const open = c.issues().filter((i) => i.severity === "bloquant" && i.node && keptRefs.has(i.node.ref))
    if (open.length) blocks.push(doc.section("Encore ouvert", [doc.list(open.map((i) => [i.what, ...(i.owner ? [" · ", doc.person(i.owner)] : [])]))]))
    return {
      title: "Instantané",
      intro: ["L'état exact attendu le ", doc.date(c.today), ", sans historique : les valeurs en vigueur, sans les amendements qui les ont produites."],
      blocks,
    }
  },
})
