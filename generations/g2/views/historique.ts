import { defineView, doc, frDate, type Block, type Inline, type View } from "../trame/kernel"
import { outcomeOf } from "./lib/claims"

/** L'histoire d'un nœud, lue dans le code : ce qu'on a revendiqué sur lui, dans l'ordre, ce qu'il revendique lui-même, et ce qu'il en reste. */
export default defineView({
  name: "historique",
  label: "Historique",
  group: "nœud",
  per: "nœud",
  order: 30,
  applies: (v, c) => c.claims(v, "sur").length > 0 || c.claims(v, "par").length > 0,
  run(c, { node }) {
    const v = node!
    const published = c.published(v)
    const source = v.decl ? `${v.decl.file}:${v.decl.line}` : v.ref
    const blocks: Block[] = [doc.para(c.kindOf(v).label.one, " · ", doc.ident(source), published === undefined ? "" : published ? " · publié" : " · pas encore publié")]

    const own = c.claims(v, "par")
    if (own.length) {
      blocks.push(doc.section("Ce qu'il revendique", [doc.table(["Cible", "Chemin", "Avant", "Après", "Issue"], own.map((x) => [
        [doc.ref(x.target)], [doc.ident(x.path || "(nœud entier)")], [x.before], [x.after], outcomeOf(x, c.today),
      ]))]))
    }

    const on = c.claims(v, "sur")
    if (on.length) {
      const firsts = [...new Set(on.map((x) => x.path.split(".")[0]))]
      const state = (now: boolean): Inline[] => firsts.flatMap((f, i): Inline[] => {
        const sep: Inline[] = i ? [" · "] : []
        if (!f) return [...sep, now && v.repealedBy ? "abrogé" : "en vigueur"]
        const raw = now ? v.field(f) : v.base(f)
        const shown = typeof raw === "function"
          ? doc.value(undefined, undefined, { rule: now && v.amendedBy.some((a) => a.paths.some((p) => p.split(".")[0] === f)) ? "redéfinie" : "d'origine" })
          : c.value(v, f, raw)
        return [...sep, doc.ident(f), " = ", shown]
      })
      const by = (x: View) => [x.owner ? doc.person(x.owner) : "", x.decl ? doc.ident(`${x.decl.file}:${x.decl.line}`) : ""]
      blocks.push(doc.section("Ce qu'on revendique sur lui", [
        doc.facts([{ label: "Déclaré", value: state(false) }]),
        doc.table(["", "Par", "Responsable", "Source", "Chemin", "Avant", "Après", "Issue"], on.map((x, i) => [
          [String(i + 1)], [doc.ref(x.by)], [by(x.by)[0]], [by(x.by)[1]], [doc.ident(x.path || "(nœud entier)")], [x.before], [x.after], outcomeOf(x, c.today),
        ])),
        doc.facts([{ label: `En vigueur le ${frDate(c.today)}`, value: state(true) }]),
      ]))
    }
    const conflicts = c.resolutions(v)
    if (conflicts.length) blocks.push(doc.section("Recoupements", conflicts.map(c.resolution)))
    return { title: `Historique · ${v.title}`, intro: ["Ce que le code dit de ", doc.ref(v), " : ce qui a été revendiqué, dans l'ordre du code, et ce qu'il en reste le ", doc.date(c.today), "."], blocks }
  },
})
