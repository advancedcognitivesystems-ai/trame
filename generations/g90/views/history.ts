import { defineView, doc, ClaimSide, RuleState, ViewGroup, ViewName, ViewScope, type Block, type Inline, type View } from "../trame/kernel"
import { outcomeOf } from "./lib/claims"
import words from "./words"

const say = words()

/**
 * The history of a node, read from the code: what was claimed on it, in order, what it claims itself, and what remains
 * of it.
 */
export default defineView({
  name: ViewName.history,
  label: say.historyHistory(),
  group: ViewGroup.node,
  per: ViewScope.node,
  applies: (v, c) => c.lib.counts.any(c.claims(v, ClaimSide.on)) || c.lib.counts.any(c.claims(v, ClaimSide.by)),
  run(c, { node }) {
    const { counts, texts, values, punctuation, positions, references, dates } = c.lib
    const v = node!
    const published = c.published(v)
    const source = v.decl ? positions.reference(v.decl.file, v.decl.line) : v.ref
    const blocks: Block[] = [doc.para(c.kindOf(v).label.one, punctuation.parts, doc.ident(source), published === undefined ? texts.empty : published ? say.historyPublished() : say.historyNotPublishedYet())]

    const own = c.claims(v, ClaimSide.by)
    if (counts.any(own)) {
      blocks.push(doc.section(say.historyWhatItClaims(), [doc.table([say.historyTarget(), say.historyPath(), say.historyBefore(), say.historyAfter(), say.historyOutcome()], own.map((x) => [
        [doc.ref(x.target)], [doc.ident(x.path || say.historyWholeNode())], [x.before], [x.after], outcomeOf(x, c),
      ]))]))
    }

    const on = c.claims(v, ClaimSide.on)
    if (counts.any(on)) {
      const firsts = [...new Set(on.map((x) => references.firstSegment(x.path)))]
      const state = (now: boolean): Inline[] => firsts.flatMap((f, i): Inline[] => {
        const sep: Inline[] = i ? [punctuation.parts] : []
        if (!f) return [...sep, now && v.repealedBy ? say.historyRepealed() : say.historyInForce()]
        const raw = now ? v.field(f) : v.base(f)
        const shown = values.isFunction(raw)
          ? doc.value(undefined, undefined, { rule: now && v.amendedBy.some((a) => a.paths.some((p) => references.firstSegment(p) === f)) ? RuleState.redefined : RuleState.original })
          : c.value(v, f, raw)
        return [...sep, doc.ident(f), punctuation.equals, shown]
      })
      const ownerOf = (x: View): Inline => (x.owner ? doc.person(x.owner) : texts.empty)
      const sourceOf = (x: View): Inline => (x.decl ? doc.ident(positions.reference(x.decl.file, x.decl.line)) : texts.empty)
      blocks.push(doc.section(say.historyWhatIsClaimedOnIt(), [
        doc.facts([{ label: say.historyDeclared(), value: state(false) }]),
        doc.table([texts.empty, say.historyBy(), say.historyOwner(), say.historySource(), say.historyPath(), say.historyBefore(), say.historyAfter(), say.historyOutcome()], on.map((x, i) => [
          [String(counts.next(i))], [doc.ref(x.by)], [ownerOf(x.by)], [sourceOf(x.by)], [doc.ident(x.path || say.historyWholeNode())], [x.before], [x.after], outcomeOf(x, c),
        ])),
        doc.facts([{ label: say.historyInForceOn(dates.format(c.today)), value: state(true) }]),
      ]))
    }
    const conflicts = c.resolutions(v)
    if (counts.any(conflicts)) blocks.push(doc.section(say.historyOverlaps(), conflicts.map(c.resolution)))
    return { title: say.historyHistory2(v.title), intro: say.historyIntroduction(doc.ref(v), doc.date(c.today)), blocks }
  },
})
