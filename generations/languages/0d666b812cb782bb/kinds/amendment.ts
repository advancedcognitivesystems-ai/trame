import {
  defineKind, field, optional, edge, optionalEdge, hole, doc, unitOf, patchLeaves, keysOf, edgesOf, DateRole, FieldType, RuleState, Validity,
  KindName, ResolutionKind, Unit, type AnyNode, type Lib, type Node, type PatchOf, type View, type Resolution,
} from "../trame/kernel"
import { approval } from "./approval"
import words from "./words"

const say = words()

const fields = {
  owner: field.owner(say.adrDecidedBy()),
  why: field.text(say.amendmentReason()),
  from: optional(field.date(say.amendmentInForceFrom(), DateRole.start)),
  until: optional(field.date(say.amendmentUntil(), DateRole.end)),
  patch: field.patch(),
}
const F = keysOf(fields)

const edges = {
  amends: edge.amends({ label: say.amendmentAmends(), inverse: say.amendmentAmendedBy() }),
  replaces: optionalEdge(edge.many([KindName.amendment], { label: say.amendmentReplaces(), inverse: say.amendmentReplacedBy(), acyclic: true })),
}
const E = keysOf(edges)

/** An amendment: redefines part of another node, possibly for a period. */
const kind = defineKind({
  name: KindName.amendment,
  label: { one: say.amendmentAmendment(), many: say.amendmentAmendments() },
  history: true,
  fields,
  edges,

  activeAt: (self, g) => (!self.from || self.from <= g.today) && (!self.until || g.today <= self.until),

  /** Each leaf of the patch is a claim on the target. */
  claims: (self) => patchLeaves(self.field(F.patch)).map(([path, value]) => ({ target: self.amends, path, value })),

  /**
   * Two amendments in force touch the same value. In order:
   * 1. the one that explicitly replaces another one wins over it;
   * 2. if the paths are nested without being equal, the more precise one applies last;
   * 3. if the target's owner approved only one of them, that one wins;
   * 4. otherwise the value is contested: the target's owner has to settle it.
   * Never "the latest wins".
   */
  resolve(target, claims, g): Resolution {
    const { counts, texts, punctuation, references } = g.lib
    const claimants = [...new Map(claims.map((c) => [c.by.node, c.by])).values()].sort((a, b) => a.ref.localeCompare(b.ref))
    const same = (a: View, b: View) => a.node === b.node
    const replaced: [View, View][] = []
    for (const a of claimants) {
      for (const r of g.from(a).out(E.replaces).nodes()) {
        const hit = claimants.find((b) => same(b, r))
        if (hit) replaced.push([a, hit])
      }
    }
    const remaining = claimants.filter((b) => !replaced.some(([, r]) => same(r, b)))
    const why = (text: string) =>
      [...replaced.map(([a, b]) => say.amendmentReplaces2(a.title, b.title)), text].filter(Boolean).join(punctuation.clauses)
    if (counts.single(remaining)) return { kind: ResolutionKind.apply, order: remaining, reason: why(texts.empty), replaced }

    const mine = claims.filter((c) => remaining.some((b) => same(b, c.by)))
    const paths = mine.map((c) => c.path)
    if (counts.several(remaining) && new Set(paths).size === paths.length) {
      const depth = (v: View) => Math.min(...mine.filter((c) => same(c.by, v)).map((c) => references.depth(c.path)))
      const order = [...remaining].sort((a, b) => depth(a) - depth(b) || a.ref.localeCompare(b.ref))
      return { kind: ResolutionKind.apply, order, reason: why(say.amendmentNestedPathsTheMorePreciseOne()), replaced }
    }

    const arbiter = target.owner
    const approved = remaining.filter((a) => g.from(a).in(edgesOf(approval).approves).where((v) => !!arbiter && v.owner === arbiter).exists())
    if (counts.single(approved)) {
      return { kind: ResolutionKind.apply, order: approved, reason: why(say.amendmentApprovedByOwnerOf(arbiter, target.title)), replaced }
    }
    return {
      kind: ResolutionKind.contested,
      reason: counts.several(approved)
        ? say.amendmentApprovedSeveralOfTheseAmendments(arbiter)
        : say.amendmentNoneReplacesTheOtherAndThe(),
      arbiter,
    }
  },

  holes(self, g) {
    const leaves = patchLeaves(self.field(F.patch))
    if (g.lib.counts.isEmpty(leaves)) return [hole.warning(say.amendmentAmendmentWithoutEffectItRedefinesNothing())]
    const target = self.amends
    if (!target) return []
    return leaves
      .filter(([p, v]) => !g.lib.values.isFunction(v) && JSON.stringify(target.base(p)) === JSON.stringify(v))
      .map(([p]) => hole.warning(say.amendmentChangesNothingAlreadyHasThisValue(p)))
  },

  render(self, g) {
    const { values, positions, declarations } = g.lib
    const target = self.amends
    if (!target) return []
    const state = self.active ? Validity.inForce : self.from && g.today < self.from ? Validity.notYet : Validity.noLonger
    const show = (v: unknown, path: string, rule: RuleState) =>
      values.isFunction(v) ? doc.value(v, undefined, { rule }) : doc.value(v, unitFor(target, path, g.lib))
    const rows = patchLeaves(self.field(F.patch)).map(([path, v]) => [
      [doc.ident(path)],
      [show(target.base(path), path, RuleState.original)],
      [show(v, path, RuleState.redefined)],
    ])
    // The code of the patch: the second argument of amend(target, patch, meta).
    const [, code] = self.decl?.args ?? []
    const source = self.decl && positions.reference(self.decl.file, self.decl.line)
    return [
      doc.validity(state, self.from, self.until),
      doc.table([say.amendmentWhatChanges(), say.amendmentBefore(), say.amendmentAfter()], rows),
      ...(code ? [doc.details(say.amendmentTheAmendmentInTheCode(), [doc.code(declarations.language, code, source)])] : []),
    ]
  },
})

/** The unit of one of the target's values, to show it the way the target shows it. */
function unitFor(target: View, path: string, lib: Lib): Unit | undefined {
  const info = target.fieldInfo(lib.references.firstSegment(path))
  if (info?.type === FieldType.duration) return Unit.duration
  if (info?.type === FieldType.percent) return Unit.percent
  if (info?.type === FieldType.chf) return Unit.chf
  if (info?.type === FieldType.value) return unitOf(lib.sequences.head(target.decl?.typeArgs))
  return undefined
}

interface AmendMeta {
  owner: string
  why: string
  from?: string
  until?: string
  /** The amendments this one explicitly replaces, when they overlap. */
  replaces?: readonly Node<"amendment">[]
}

/**
 * Amends a node: `patch` holds only what changes.
 * A value replaces the previous one; a rule is redefined from the previous one.
 */
export function amend<T extends AnyNode>(target: T, patch: PatchOf<T>, m: AmendMeta): Node<"amendment"> {
  return kind({ amends: target, patch: patch as Record<string, unknown>, ...m })
}

export const amendment = kind
