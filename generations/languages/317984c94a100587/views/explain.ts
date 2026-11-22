import {
  defineView, doc, ClaimSide, Direction, EdgeName, EvidenceSource, KindName, ViewGroup, ViewName, ViewScope,
  type Block, type Evidence, type Inline, type View,
} from "../trame/kernel"
import words from "./words"

const say = words()

/**
 * Everything the graph says of a node, in one place (E3): what it is (its kind, owner, place, publication, status, and
 * what its kind shows of it), why it is there (its shortest path to a goal, what it serves, the architecture decisions
 * it applies), what was decided about it (the decisions, standards, vocabularies and catalogs it reads, the amendments
 * on it), what holds it (what verifies it, the latest evidence), what depends on it directly, and its open issues.
 */
export default defineView({
  name: ViewName.explain,
  label: say.explainExplain(),
  group: ViewGroup.node,
  per: ViewScope.node,
  run(c, { node }) {
    const { counts, sequences, lists, positions, texts, dates } = c.lib
    const v = node!
    const refs = (xs: readonly View[]): Inline[] => lists.conjunction(xs.map(doc.ref))
    const unique = (xs: readonly View[]) => [...new Map(xs.map((x) => [x.ref, x])).values()]

    // What it is.
    const published = c.published(v)
    const card = c.card(v)
    const facts = [
      { label: say.explainKind(), value: [c.kindOf(v).label.one] },
      ...(v.owner ? [{ label: say.explainOwner(), value: [doc.person(v.owner)] }] : []),
      ...(v.decl ? [{ label: say.explainDeclared(), value: [doc.ident(positions.reference(v.decl.file, v.decl.line))] }] : []),
      ...(published === undefined ? [] : [{ label: say.explainPublished(), value: [published ? say.explainYes() : say.explainNotYet()] }]),
      { label: say.explainStatus(), value: [v.status ? doc.status(v.status) : say.explainNoStatus()] },
    ]
    const what: Block[] = [...(v.decl?.description ? [doc.para(v.decl.description)] : []), doc.facts(facts), ...card.body]

    // Why it is there.
    const why: Block[] = []
    if (c.kindOf(v).root) why.push(doc.para(say.explainAGoal()))
    else {
      const roots = c.all().where((x) => c.kindOf(x).root).nodes()
      const from = c.from(v)
      const found = from.paths ? from.paths(roots) : roots.map((r) => from.path(r))
      const path = sequences.head(found.filter((p): p is View[] => !!p).sort((a, b) => a.length - b.length))
      why.push(doc.para(...(path ? say.explainPath(path.map(doc.ref)) : [say.explainNoGoal()])))
    }
    const serves = c.from(v).out(EdgeName.serves).nodes()
    if (counts.any(serves)) why.push(doc.para(...say.explainServes(refs(serves))))
    const applies = c.from(v).in(EdgeName.appliedBy).nodes()
    if (counts.any(applies)) why.push(doc.para(...say.explainApplies(refs(applies))))

    // What was decided about it.
    const decided = [KindName.decision, KindName.standard, KindName.vocabulary, KindName.catalog] as readonly string[]
    const read = unique(v.dependencies.map((d) => d.node).filter((x) => decided.includes(x.kind)))
    const amendments = c.claims(v, ClaimSide.on)
    const decisions: Block[] = [
      doc.para(...(counts.any(read) ? say.explainReads(refs(read)) : [say.explainReadsNothing()])),
      ...(counts.any(amendments) ? [doc.para(...say.explainAmended(amendments.length, refs(unique(amendments.map((a) => a.by)))))] : []),
      ...(v.repealedBy ? [doc.para(...say.explainRepealed(doc.ref(v.repealedBy)))] : []),
    ]

    // What holds it.
    const verifiers = c.from(v).in(EdgeName.verifies).nodes()
    const said = (e: Evidence): Inline =>
      e.source === EvidenceSource.built ? say.explainBuilt()
        : e.source === EvidenceSource.check ? (e.value === counts.one ? say.explainCheckPassed() : say.explainCheckFailed())
          : e.source === EvidenceSource.review ? (e.value === counts.one ? say.explainApproved() : say.explainChangeAsked())
            : e.source === EvidenceSource.deployed ? say.explainDeployed()
              : e.source === EvidenceSource.shipped ? say.explainShipped()
                : say.explainGiven()
    const latest = sequences.last([...v.evidence].filter((e) => e.at <= c.today).sort((a, b) => a.at.localeCompare(b.at)))
    const givenBy = (e: Evidence): Inline[] =>
      e.by ? [doc.person(e.by), ...(counts.any(e.through ?? []) ? say.explainThrough(texts.concat(lists.conjunction(e.through ?? []).map(String))) : [])] : []
    const holds: Block[] = [
      ...(counts.any(verifiers) ? [doc.para(...say.explainVerifiedBy(refs(verifiers)))] : []),
      doc.para(...(latest ? say.explainLatest([said(latest)], dates.isCalendarDate(latest.at) ? doc.date(latest.at) : latest.at, givenBy(latest)) : [say.explainNoEvidence()])),
    ]

    // What depends on it, directly; the view impact follows the rest.
    const dependents = unique(c.edges(v, Direction.in).filter((e) => !e.derived).map((e) => e.other))
    const depends = [doc.para(...(counts.any(dependents) ? say.explainDependents(dependents.length, refs(dependents)) : [say.explainNothingDepends()]))]

    const issues = c.issues({ node: v })
    return {
      title: say.explainTitle(v.title),
      intro: say.explainIntroduction(doc.ref(v), doc.date(c.today)),
      blocks: [
        doc.section(say.explainWhatItIs(), what),
        doc.section(say.explainWhyItIsThere(), why),
        doc.section(say.explainWhatWasDecided(), decisions),
        doc.section(say.explainWhatHoldsIt(), holds),
        doc.section(say.explainWhatDependsOnIt(), depends),
        doc.section(say.explainOpenIssues(), counts.any(issues) ? [doc.issues(issues.map(c.issueItem))] : [doc.para(say.explainNoIssue())]),
      ],
    }
  },
})
