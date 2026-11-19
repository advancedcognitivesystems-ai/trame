import { defineView, doc, ClaimSide, Origin, RuleState, Severity, ViewGroup, ViewName, type Block, type Inline, type View } from "../trame/kernel"
import { outcomeOf } from "./lib/claims"
import words from "./words"

const say = words()

/** What the declarations that are not published yet add to the published graph: what to read before merging. */
export default defineView({
  name: ViewName.review,
  label: say.reviewBranchReview(),
  group: ViewGroup.document,
  run(c) {
    const { counts, texts, values, punctuation, positions, references, layout } = c.lib
    const all = c.all().nodes()
    const intro: Inline[] = say.reviewIntroduction(doc.ident(layout.lock), doc.date(c.today))
    if (!all.some((v) => c.published(v))) {
      return { title: say.reviewBranchReview(), intro, blocks: [doc.para(say.reviewNothingIsPublishedYetTheWhole(), doc.ident(say.reviewNpmRunPublish()), say.reviewFreezesTheCurrentState())] }
    }
    const fresh = all.filter((v) => !c.published(v))
    const isFresh = (v: View) => fresh.some((f) => f.ref === v.ref)
    const lock = c.lockIssues()
    const claims = fresh.flatMap((v) => c.claims(v, ClaimSide.by))
    const conflicts = c.resolutions().filter((r) => r.claimants.some(isFresh))
    const added = c.issues().filter((i) => i.origin !== Origin.publication && i.node &&
      (isFresh(i.node) || (i.origin === Origin.resolution && conflicts.some((r) => r.target.ref === i.node!.ref))))
    const blocking = added.filter((i) => i.severity === Severity.blocking).length

    const blocks: Block[] = [doc.summary(say.reviewSummary(fresh.length, lock.length, conflicts.length, blocking))]

    const redefined: Block[] = []
    if (counts.isEmpty(claims)) redefined.push(doc.para(say.reviewTheNewDeclarationsRedefineNothingThat()))
    else {
      redefined.push(doc.table([say.historyTarget(), say.historyPath(), say.historyDeclared(), say.reviewRequested(), say.historyBy(), say.historyOutcome()], claims.map((x) => [
        [doc.ref(x.target)], [doc.ident(x.path || say.historyWholeNode())], [x.before], [x.after], [doc.ref(x.by)], outcomeOf(x, c),
      ])))
      const targets = [...new Map(claims.map((x) => [x.target.ref, x.target])).values()]
      redefined.push(doc.list(targets.map((t) => {
        const firsts = [...new Set(claims.filter((x) => x.target.ref === t.ref).map((x) => references.firstSegment(x.path)))]
        const now = firsts.flatMap((f, i): Inline[] => [
          ...(i ? [punctuation.parts] : []),
          ...(f ? [doc.ident(f), punctuation.equals, values.isFunction(t.field(f))
            ? doc.value(undefined, undefined, { rule: t.amendedBy.some((a) => a.paths.includes(f)) ? RuleState.redefined : RuleState.original })
            : c.value(t, f, t.field(f))] : [t.repealedBy ? say.historyRepealed() : say.historyInForce()]),
        ])
        return [doc.ref(t), say.reviewInForceOn(), doc.date(c.today), say.reviewWithTheBranch(), ...now]
      })))
    }
    blocks.push(doc.section(say.reviewWhatTheBranchRedefines(), redefined))
    if (counts.any(conflicts)) blocks.push(doc.section(say.historyOverlaps(), conflicts.map(c.resolution)))
    const checks = [...lock, ...added]
    blocks.push(doc.section(say.reviewToCheckBeforeMerging(), [counts.any(checks)
      ? doc.issues(checks.map(c.issueItem))
      : doc.para(say.reviewTheBranchAddsNoHoleAnd())]))
    blocks.push(doc.section(say.reviewNewDeclarations(), [doc.table([say.reviewDeclaration(), say.ownersKind(), say.historyOwner(), say.historySource()], fresh.map((v) => [
      [doc.ref(v)], [c.kindOf(v).label.one], v.owner ? [doc.person(v.owner)] : [texts.empty], [doc.ident(v.decl ? positions.reference(v.decl.file, v.decl.line) : v.ref)],
    ]))]))
    return { title: say.reviewBranchReview(), intro, blocks }
  },
})
