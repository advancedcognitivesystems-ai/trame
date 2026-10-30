import { defineView, doc, plural, ClaimSide, Origin, RuleState, Severity, ViewGroup, type Block, type Inline, type View } from "../trame/kernel"
import { outcomeOf } from "./lib/claims"
import words from "./words"

const say = words()

/** What the declarations that are not published yet add to the published graph: what to read before merging. */
export default defineView({
  name: "review",
  label: say.reviewBranchReview(),
  group: ViewGroup.document,
  run(c) {
    const all = c.all().nodes()
    const intro: Inline[] = [say.reviewWhatTheDeclarationsThatAreNot(), doc.ident("trame.lock"), say.reviewAsOf(), doc.date(c.today), "."]
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

    const blocks: Block[] = [doc.summary(
      `${plural(fresh.length, say.reviewNewDeclaration())} · ${plural(lock.length, say.reviewPublishedDeclarationAffected(), say.reviewPublishedDeclarationsAffected())} · ${plural(conflicts.length, "overlap")} · ${plural(blocking, say.reviewBlockingHoleAdded(), say.reviewBlockingHolesAdded())}`,
    )]

    const redefined: Block[] = []
    if (!claims.length) redefined.push(doc.para(say.reviewTheNewDeclarationsRedefineNothingThat()))
    else {
      redefined.push(doc.table([say.historyTarget(), say.historyPath(), say.historyDeclared(), say.reviewRequested(), say.historyBy(), say.historyOutcome()], claims.map((x) => [
        [doc.ref(x.target)], [doc.ident(x.path || say.historyWholeNode())], [x.before], [x.after], [doc.ref(x.by)], outcomeOf(x, c.today),
      ])))
      const targets = [...new Map(claims.map((x) => [x.target.ref, x.target])).values()]
      redefined.push(doc.list(targets.map((t) => {
        const firsts = [...new Set(claims.filter((x) => x.target.ref === t.ref).map((x) => x.path.split(".")[0]))]
        const now = firsts.flatMap((f, i): Inline[] => [
          ...(i ? [" · "] : []),
          ...(f ? [doc.ident(f), " = ", typeof t.field(f) === "function"
            ? doc.value(undefined, undefined, { rule: t.amendedBy.some((a) => a.paths.includes(f)) ? RuleState.redefined : RuleState.original })
            : c.value(t, f, t.field(f))] : [t.repealedBy ? "repealed" : say.historyInForce()]),
        ])
        return [doc.ref(t), say.reviewInForceOn(), doc.date(c.today), say.reviewWithTheBranch(), ...now]
      })))
    }
    blocks.push(doc.section(say.reviewWhatTheBranchRedefines(), redefined))
    if (conflicts.length) blocks.push(doc.section(say.historyOverlaps(), conflicts.map(c.resolution)))
    const checks = [...lock, ...added]
    blocks.push(doc.section(say.reviewToCheckBeforeMerging(), [checks.length
      ? doc.issues(checks.map(c.issueItem))
      : doc.para(say.reviewTheBranchAddsNoHoleAnd())]))
    blocks.push(doc.section(say.reviewNewDeclarations(), [doc.table([say.reviewDeclaration(), say.ownersKind(), say.historyOwner(), say.historySource()], fresh.map((v) => [
      [doc.ref(v)], [c.kindOf(v).label.one], v.owner ? [doc.person(v.owner)] : [""], [doc.ident(v.decl ? `${v.decl.file}:${v.decl.line}` : v.ref)],
    ]))]))
    return { title: say.reviewBranchReview(), intro, blocks }
  },
})
