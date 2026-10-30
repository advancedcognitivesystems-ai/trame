import { defineView, doc, formatDate, ClaimSide, RuleState, ViewGroup, ViewScope, type Block, type Inline, type View } from "../trame/kernel"
import { outcomeOf } from "./lib/claims"
import words from "./words"

const say = words()

/**
 * The history of a node, read from the code: what was claimed on it, in order, what it claims itself, and what remains
 * of it.
 */
export default defineView({
  name: "history",
  label: say.historyHistory(),
  group: ViewGroup.node,
  per: ViewScope.node,
  order: 30,
  applies: (v, c) => c.claims(v, ClaimSide.on).length > 0 || c.claims(v, ClaimSide.by).length > 0,
  run(c, { node }) {
    const v = node!
    const published = c.published(v)
    const source = v.decl ? `${v.decl.file}:${v.decl.line}` : v.ref
    const blocks: Block[] = [doc.para(c.kindOf(v).label.one, " · ", doc.ident(source), published === undefined ? "" : published ? say.historyPublished() : say.historyNotPublishedYet())]

    const own = c.claims(v, ClaimSide.by)
    if (own.length) {
      blocks.push(doc.section(say.historyWhatItClaims(), [doc.table([say.historyTarget(), say.historyPath(), say.historyBefore(), say.historyAfter(), say.historyOutcome()], own.map((x) => [
        [doc.ref(x.target)], [doc.ident(x.path || say.historyWholeNode())], [x.before], [x.after], outcomeOf(x, c.today),
      ]))]))
    }

    const on = c.claims(v, ClaimSide.on)
    if (on.length) {
      const firsts = [...new Set(on.map((x) => x.path.split(".")[0]))]
      const state = (now: boolean): Inline[] => firsts.flatMap((f, i): Inline[] => {
        const sep: Inline[] = i ? [" · "] : []
        if (!f) return [...sep, now && v.repealedBy ? "repealed" : say.historyInForce()]
        const raw = now ? v.field(f) : v.base(f)
        const shown = typeof raw === "function"
          ? doc.value(undefined, undefined, { rule: now && v.amendedBy.some((a) => a.paths.some((p) => p.split(".")[0] === f)) ? RuleState.redefined : RuleState.original })
          : c.value(v, f, raw)
        return [...sep, doc.ident(f), " = ", shown]
      })
      const by = (x: View) => [x.owner ? doc.person(x.owner) : "", x.decl ? doc.ident(`${x.decl.file}:${x.decl.line}`) : ""]
      blocks.push(doc.section(say.historyWhatIsClaimedOnIt(), [
        doc.facts([{ label: say.historyDeclared(), value: state(false) }]),
        doc.table(["", say.historyBy(), say.historyOwner(), say.historySource(), say.historyPath(), say.historyBefore(), say.historyAfter(), say.historyOutcome()], on.map((x, i) => [
          [String(i + 1)], [doc.ref(x.by)], [by(x.by)[0]], [by(x.by)[1]], [doc.ident(x.path || say.historyWholeNode())], [x.before], [x.after], outcomeOf(x, c.today),
        ])),
        doc.facts([{ label: say.historyInForceOn(formatDate(c.today)), value: state(true) }]),
      ]))
    }
    const conflicts = c.resolutions(v)
    if (conflicts.length) blocks.push(doc.section(say.historyOverlaps(), conflicts.map(c.resolution)))
    return { title: say.historyHistory2(v.title), intro: [say.historyWhatTheCodeSaysAbout(), doc.ref(v), say.historyWhatWasClaimedInTheOrder(), doc.date(c.today), "."], blocks }
  },
})
