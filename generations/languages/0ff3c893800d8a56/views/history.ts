import { defineView, doc, formatDate, ClaimSide, RuleState, ViewGroup, ViewScope, type Block, type Inline, type View } from "../trame/kernel"
import { outcomeOf } from "./lib/claims"

/**
 * The history of a node, read from the code: what was claimed on it, in order, what it claims itself, and what remains
 * of it.
 */
export default defineView({
  name: "history",
  label: "History",
  group: ViewGroup.node,
  per: ViewScope.node,
  order: 30,
  applies: (v, c) => c.claims(v, ClaimSide.on).length > 0 || c.claims(v, ClaimSide.by).length > 0,
  run(c, { node }) {
    const v = node!
    const published = c.published(v)
    const source = v.decl ? `${v.decl.file}:${v.decl.line}` : v.ref
    const blocks: Block[] = [doc.para(c.kindOf(v).label.one, " · ", doc.ident(source), published === undefined ? "" : published ? " · published" : " · not published yet")]

    const own = c.claims(v, ClaimSide.by)
    if (own.length) {
      blocks.push(doc.section("What it claims", [doc.table(["Target", "Path", "Before", "After", "Outcome"], own.map((x) => [
        [doc.ref(x.target)], [doc.ident(x.path || "(whole node)")], [x.before], [x.after], outcomeOf(x, c.today),
      ]))]))
    }

    const on = c.claims(v, ClaimSide.on)
    if (on.length) {
      const firsts = [...new Set(on.map((x) => x.path.split(".")[0]))]
      const state = (now: boolean): Inline[] => firsts.flatMap((f, i): Inline[] => {
        const sep: Inline[] = i ? [" · "] : []
        if (!f) return [...sep, now && v.repealedBy ? "repealed" : "in force"]
        const raw = now ? v.field(f) : v.base(f)
        const shown = typeof raw === "function"
          ? doc.value(undefined, undefined, { rule: now && v.amendedBy.some((a) => a.paths.some((p) => p.split(".")[0] === f)) ? RuleState.redefined : RuleState.original })
          : c.value(v, f, raw)
        return [...sep, doc.ident(f), " = ", shown]
      })
      const by = (x: View) => [x.owner ? doc.person(x.owner) : "", x.decl ? doc.ident(`${x.decl.file}:${x.decl.line}`) : ""]
      blocks.push(doc.section("What is claimed on it", [
        doc.facts([{ label: "Declared", value: state(false) }]),
        doc.table(["", "By", "Owner", "Source", "Path", "Before", "After", "Outcome"], on.map((x, i) => [
          [String(i + 1)], [doc.ref(x.by)], [by(x.by)[0]], [by(x.by)[1]], [doc.ident(x.path || "(whole node)")], [x.before], [x.after], outcomeOf(x, c.today),
        ])),
        doc.facts([{ label: `In force on ${formatDate(c.today)}`, value: state(true) }]),
      ]))
    }
    const conflicts = c.resolutions(v)
    if (conflicts.length) blocks.push(doc.section("Overlaps", conflicts.map(c.resolution)))
    return { title: `History · ${v.title}`, intro: ["What the code says about ", doc.ref(v), ": what was claimed, in the order of the code, and what remains of it on ", doc.date(c.today), "."], blocks }
  },
})
