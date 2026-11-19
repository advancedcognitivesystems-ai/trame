import { defineKind, field, optional, edge, optionalEdge, hole, doc, keysOf, fieldsOf, Status, KindName, EdgeName, ReviewState, ReviewEdge, type Inline, type Lib, type Node, type PathOf, type Provides, type View, ChangeWay} from "../trame/kernel"
import { decision } from "./decision"
import { waitingFor } from "./review"
import words from "./words"

const say = words()

/** A rule every row of a dataset keeps: what it says, and the test, given the row and all the rows. */
export interface DataRule<R> {
  says: string
  holds: (row: R, rows: readonly R[]) => boolean
}

const Review = ReviewState
type Review = ReviewState

/** What the evaluation of a dataset found. */
interface Result {
  rows: number
  /** The fingerprint of all its rows: the version of its content. */
  version?: string
  /** What breaks a rule, a key or a text: the row, and what. */
  findings: { row: string; what: Inline[] }[]
  /** The rows that break one of its rules, or on which one failed. */
  broken: string[]
  /**
   * Each row's review in each language offered (one, unnamed, when none is offered), with the fingerprint a review must
   * have seen and the people whose latest review approves the row as it is.
   */
  reviews: { row: string; language?: string; review: Review; by?: string; fingerprint?: string; approvedBy: string[] }[]
}

const fields = {
  owner: field.owner(),
  rows: field.value<readonly unknown[]>(say.datasetRows()),
  key: field.fn<(row: never) => string>((lib) => () => lib.texts.empty),
  rules: optional(field.value<readonly DataRule<never>[]>(say.datasetRules())),
  technical: optional(field.value<readonly string[]>(say.datasetTechnical())),
}
const F = keysOf(fields)

const edges = {
  [EdgeName.language]: optionalEdge(edge.one([KindName.decision], { label: say.datasetLanguagesOffered(), inverse: say.datasetLanguagesOf() })),
  [EdgeName.serves]: optionalEdge(edge.many([KindName.goal], { label: say.adrServes(), inverse: say.adrServedBy() })),
}
const E = keysOf(edges)

/** The names of a dataset's fields and edges: the views name them by these. */
export const datasetFields = F
export const datasetEdges = E

/** The rows, whatever the field holds: something else than a list gives none. */
const rowsOf = (self: View): readonly unknown[] => {
  const rows = self.field(F.rows)
  return Array.isArray(rows) ? rows : []
}

/** The languages offered: the value of the decision the dataset names, if it is a list of texts. */
const languagesOf = (self: View, g: { from(v: View): { out(e: string): { nodes(): View[] } } }, lib: Lib): string[] => {
  const chosen = lib.sequences.head(g.from(self).out(E[EdgeName.language]).nodes())
  const value = chosen?.field(fieldsOf(decision).value)
  return Array.isArray(value) ? value.filter(lib.values.isText) : []
}

/**
 * A dataset: rows a product carries as data (the poses of an app, its sequences), with the rules each row keeps, the
 * key that names it, and the languages its texts are written in. A text in several languages is an object whose keys
 * are languages offered: each must be there. A review is evidence on the dataset: a row (its key), a language, who, the
 * fingerprint of what was seen, and whether it is approved; a review holds while the row, in that language, is what
 * was seen. What a review does not judge (its technical parts, by path) is left out of what it sees (C3a): moving where
 * a label is drawn expires no review, while a field added tomorrow is reviewed by default. Reviewed by review nodes, it holds when they await nothing of it: their role, their number of approvals.
 * Wired as a dependency, a dataset gives its rows.
 */
const kind = defineKind({
  name: KindName.dataset,
  label: { one: say.datasetDataset(), many: say.datasetDatasets() },
  renderOwns: [F.rows, F.key, F.rules],
  fields,
  changes: { [F.rows]: ChangeWay.chosen },
  edges,

  evaluate(self, g): Result {
    const lib = g.lib
    const { values, counts, texts, sequences } = lib
    const rows = rowsOf(self)
    const languages = languagesOf(self, g, lib)
    const findings: Result["findings"] = []
    const broken: Result["broken"] = []
    const keyFn = self.field(F.key)
    const keyOf = (row: unknown, i: number): string => {
      try {
        const k = values.isFunction(keyFn) ? (keyFn as (r: unknown) => unknown)(row) : undefined
        return values.isText(k) && k !== texts.empty ? k : say.datasetRowAt(counts.next(i))
      } catch {
        return say.datasetRowAt(counts.next(i))
      }
    }
    const keys = rows.map(keyOf)
    keys.forEach((k, i) => {
      if (keys.indexOf(k) !== i) findings.push({ row: k, what: [say.datasetDuplicateKey()] })
    })
    // The rules.
    const rules = self.field(F.rules)
    for (const rule of Array.isArray(rules) ? rules : []) {
      const says = values.isObject(rule) && values.isText((rule as DataRule<unknown>).says) ? (rule as DataRule<unknown>).says : texts.empty
      const holds = values.isObject(rule) ? (rule as DataRule<unknown>).holds : undefined
      if (!values.isFunction(holds)) continue
      rows.forEach((row, i) => {
        try {
          if (!holds(row, rows)) {
            findings.push({ row: keys[i], what: [say.datasetBreaks(says)] })
            broken.push(keys[i])
          }
        } catch (e) {
          findings.push({ row: keys[i], what: [say.datasetRuleFailed(says, (e as Error).message)] })
          broken.push(keys[i])
        }
      })
    }
    // The texts in several languages: an object whose keys are languages offered holds each of them.
    const localized = (v: unknown): v is Record<string, unknown> =>
      counts.any(languages) && v !== null && values.isObject(v) && !Array.isArray(v) && counts.any(Object.keys(v)) && Object.keys(v).every((k) => languages.includes(k))
    const walk = (v: unknown, path: string[], found: (o: Record<string, unknown>, path: string[]) => void): void => {
      if (localized(v)) return found(v, path)
      if (Array.isArray(v)) v.forEach((x, i) => walk(x, [...path, String(i)], found))
      else if (v !== null && values.isObject(v)) for (const [k, x] of Object.entries(v)) walk(x, [...path, k], found)
    }
    rows.forEach((row, i) => walk(row, [], (o, path) => {
      for (const language of languages) {
        const text = o[language]
        if (!values.isText(text) || text.trim() === texts.empty) findings.push({ row: keys[i], what: [say.datasetMissingText(lib.references.join(path), language)] })
      }
    }))
    // A row in one language: each text in that language only.
    const inLanguage = (v: unknown, language: string): unknown =>
      localized(v) ? v[language]
      : Array.isArray(v) ? v.map((x) => inLanguage(x, language))
      : v !== null && values.isObject(v) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, inLanguage(x, language)]))
      : v
    // The reviews of each row in each language: each person's latest, compared with what the row is now. A change asked
    // on the row as it is outweighs the approvals; approved by at least one person, it is approved (how many people a
    // review asks, its review node counts); otherwise what was seen has changed, or nobody looked.
    const fingerprint = lib.fingerprint
    const technical = self.field(F.technical)
    const judged = (row: unknown) => (Array.isArray(technical) && lib.references.without ? lib.references.without(row, technical.filter(values.isText)) : row)
    const reviews: Result["reviews"] = []
    const asked = languages.length ? languages : [undefined]
    rows.forEach((row, i) => {
      for (const language of asked) {
        const given = self.evidence.filter((e) => e.subject === keys[i] && e.language === language)
        const latest = sequences.last(given)
        const now = fingerprint?.(language === undefined ? judged(row) : inLanguage(judged(row), language))
        const latestOf = [...new Map(given.map((e) => [e.by, e])).values()].filter((e) => now !== undefined && e.fingerprint === now)
        const approvedBy = latestOf.filter((e) => e.value === counts.one).map((e) => e.by).filter(values.isText)
        const review: Review = !latest ? Review.none
          : latestOf.some((e) => e.value !== counts.one) ? Review.changes
          : counts.any(approvedBy) ? Review.approved
          : latest.value !== counts.one ? Review.changes
          : Review.stale
        reviews.push({ row: keys[i], language, review, by: latest?.by, fingerprint: now, approvedBy })
      }
    })
    return { rows: rows.length, version: fingerprint?.(rows), findings, broken, reviews }
  },

  status(self, g) {
    const r = self.result<Result>()
    if (!r) return Status.unknown
    if (g.lib.counts.any(r.findings)) return Status.violated
    // Reviewed by review nodes, it holds when none of them awaits anything of it (their role, their number of approvals).
    const reviewers = g.from(self).in(ReviewEdge.of).nodes()
    if (g.lib.counts.any(reviewers)) return reviewers.every((v) => g.lib.counts.isEmpty(waitingFor(v, self, g))) ? Status.held : Status.unknown
    return g.lib.counts.any(r.reviews) && r.reviews.every((x) => x.review === Review.approved) ? Status.held : Status.unknown
  },

  holes(self, g) {
    const r = self.result<Result>()
    if (!r) return []
    const byLanguage = (review: Review) => {
      const languages = [...new Set(r.reviews.filter((x) => x.review === review).map((x) => x.language))]
      return languages.map((language) => [language, r.reviews.filter((x) => x.review === review && x.language === language).length] as const)
    }
    return [
      ...r.findings.map((f) => hole.error(say.datasetFinding(f.row, g.lib.texts.concat(f.what.filter(g.lib.values.isText))))),
      // A review node that reviews the dataset says, for its role, what awaits a review: the dataset says it otherwise.
      ...(g.from(self).in(ReviewEdge.of).exists() ? [] : [
        ...byLanguage(Review.changes).map(([language, n]) => hole.warning(say.datasetChangesAsked(n, language))),
        ...byLanguage(Review.stale).map(([language, n]) => hole.warning(say.datasetStale(n, language))),
        ...byLanguage(Review.none).map(([language, n]) => hole.warning(say.datasetAwaitReview(n, language))),
      ]),
    ]
  },

  render(self, g) {
    const r = self.result<Result>()
    if (!r) return []
    const { counts } = g.lib
    const languages = [...new Set(r.reviews.map((x) => x.language))]
    const rows = [...new Set(r.reviews.map((x) => x.row))]
    const word: Record<Review, string> = {
      approved: say.datasetApproved(), stale: say.datasetStaleShort(), changes: say.datasetChangesShort(), none: say.datasetNoReview(),
    }
    const cell = (row: string, language: string | undefined): Inline[] => {
      const x = r.reviews.find((y) => y.row === row && y.language === language)
      return x ? [word[x.review], ...(x.by ? [say.datasetBy(x.by)] : [])] : []
    }
    return [
      doc.para(...say.datasetSummary(r.rows, languages.filter(g.lib.values.isText), r.version === undefined ? undefined : doc.ident(r.version))),
      ...(counts.any(rows)
        ? [doc.table([say.datasetRow(), ...languages.map((l) => l ?? say.datasetReview())], rows.map((row) => [[doc.ident(row)], ...languages.map((l) => cell(row, l))]))]
        : []),
      ...(counts.any(r.findings) ? [doc.list(r.findings.map((f) => [doc.ident(f.row), g.lib.punctuation.introduces, ...f.what]))] : []),
    ]
  },

  /** Wired as a dependency: its rows. */
  provide: (self) => rowsOf(self),
})

interface DatasetInput<R> {
  owner: string
  /** The rows, typed: the TypeScript compiler checks them against the type of a row. */
  rows: readonly R[]
  /** What names a row: its key, unique in the dataset, by which reviews name it. */
  key: (row: R) => string
  /** What every row keeps. */
  rules?: readonly DataRule<R>[]
  /** What a review does not judge of a row, by path (marks.label): technical parts, which expire no review. */
  technical?: readonly PathOf<R>[]
  /** The decision that lists the languages offered: each text in several languages must be in each of them. */
  language?: Node<typeof KindName.decision>
  serves?: readonly Node<typeof KindName.goal>[]
}

/** `dataset({ owner, rows: poses, key: (p) => p.id, rules: [{ says: "…", holds: (p) => … }], language: Languages })` */
export function dataset<R>(input: DatasetInput<R>): Node<typeof KindName.dataset> & Provides<readonly R[]> {
  return kind(input as never) as never
}

export const datasetKind = kind

/**
 * Whether a dataset keeps its rules (A1): each row checked against each rule, by construction at every build. Held when
 * no row breaks one, violated when one does, unknown before it is evaluated; what its reviews await is not its say on a
 * rule.
 */
export function keepsItsRules(self: View, lib: Lib): Status {
  const r = self.result<Result>()
  if (!r || !Array.isArray(r.broken)) return Status.unknown
  return lib.counts.any(r.broken) ? Status.violated : Status.held
}
