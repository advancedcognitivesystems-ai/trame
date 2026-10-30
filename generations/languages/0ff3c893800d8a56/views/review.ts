import { defineView, doc, plural, ClaimSide, Origin, RuleState, Severity, ViewGroup, type Block, type Inline, type View } from "../trame/kernel"
import { outcomeOf } from "./lib/claims"

/** What the declarations that are not published yet add to the published graph: what to read before merging. */
export default defineView({
  name: "review",
  label: "Branch review",
  group: ViewGroup.document,
  order: 50,
  run(c) {
    const all = c.all().nodes()
    const intro: Inline[] = ["What the declarations that are not published yet add to the published graph (", doc.ident("trame.lock"), "), as of ", doc.date(c.today), "."]
    if (!all.some((v) => c.published(v))) {
      return { title: "Branch review", intro, blocks: [doc.para("Nothing is published yet: the whole graph is under review. ", doc.ident("npm run publish"), " freezes the current state.")] }
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
      `${plural(fresh.length, "new declaration")} · ${plural(lock.length, "published declaration affected", "published declarations affected")} · ${plural(conflicts.length, "overlap")} · ${plural(blocking, "blocking hole added", "blocking holes added")}`,
    )]

    const redefined: Block[] = []
    if (!claims.length) redefined.push(doc.para("The new declarations redefine nothing that is published."))
    else {
      redefined.push(doc.table(["Target", "Path", "Declared", "Requested", "By", "Outcome"], claims.map((x) => [
        [doc.ref(x.target)], [doc.ident(x.path || "(whole node)")], [x.before], [x.after], [doc.ref(x.by)], outcomeOf(x, c.today),
      ])))
      const targets = [...new Map(claims.map((x) => [x.target.ref, x.target])).values()]
      redefined.push(doc.list(targets.map((t) => {
        const firsts = [...new Set(claims.filter((x) => x.target.ref === t.ref).map((x) => x.path.split(".")[0]))]
        const now = firsts.flatMap((f, i): Inline[] => [
          ...(i ? [" · "] : []),
          ...(f ? [doc.ident(f), " = ", typeof t.field(f) === "function"
            ? doc.value(undefined, undefined, { rule: t.amendedBy.some((a) => a.paths.includes(f)) ? RuleState.redefined : RuleState.original })
            : c.value(t, f, t.field(f))] : [t.repealedBy ? "repealed" : "in force"]),
        ])
        return [doc.ref(t), ", in force on ", doc.date(c.today), " with the branch: ", ...now]
      })))
    }
    blocks.push(doc.section("What the branch redefines", redefined))
    if (conflicts.length) blocks.push(doc.section("Overlaps", conflicts.map(c.resolution)))
    const checks = [...lock, ...added]
    blocks.push(doc.section("To check before merging", [checks.length
      ? doc.issues(checks.map(c.issueItem))
      : doc.para("The branch adds no hole and no error, and touches no published declaration.")]))
    blocks.push(doc.section("New declarations", [doc.table(["Declaration", "Kind", "Owner", "Source"], fresh.map((v) => [
      [doc.ref(v)], [c.kindOf(v).label.one], v.owner ? [doc.person(v.owner)] : [""], [doc.ident(v.decl ? `${v.decl.file}:${v.decl.line}` : v.ref)],
    ]))]))
    return { title: "Branch review", intro, blocks }
  },
})
