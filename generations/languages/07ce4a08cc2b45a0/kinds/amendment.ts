import {
  defineKind, field, optional, edge, optionalEdge, hole, doc, unitOf, patchLeaves, DateRole, FieldType, RuleState, Validity,
  type AnyNode, type Node, type PatchOf, type Unit, type View, type Resolution,
} from "../trame/kernel"
import words from "./words"

const say = words()

/** An amendment: redefines part of another node, possibly for a period. */
const kind = defineKind({
  name: "amendment",
  label: { one: say.amendmentAmendment(), many: say.amendmentAmendments() },
  history: true,
  fields: {
    owner: field.owner(say.adrDecidedBy()),
    why: field.text(say.amendmentReason()),
    from: optional(field.date(say.amendmentInForceFrom(), DateRole.start)),
    until: optional(field.date(say.amendmentUntil(), DateRole.end)),
    patch: field.patch(),
  },
  edges: {
    amends: edge.amends({ label: say.amendmentAmends(), inverse: say.amendmentAmendedBy() }),
    replaces: optionalEdge(edge.many(["amendment"], { label: say.amendmentReplaces(), inverse: say.amendmentReplacedBy(), acyclic: true })),
  },

  activeAt: (self, g) => (!self.from || self.from <= g.today) && (!self.until || g.today <= self.until),

  /** Each leaf of the patch is a claim on the target. */
  claims: (self) => patchLeaves(self.field("patch")).map(([path, value]) => ({ target: self.amends, path, value })),

  /**
   * Two amendments in force touch the same value. In order:
   * 1. the one that explicitly replaces another one wins over it;
   * 2. if the paths are nested without being equal, the more precise one applies last;
   * 3. if the target's owner approved only one of them, that one wins;
   * 4. otherwise the value is contested: the target's owner has to settle it.
   * Never "the latest wins".
   */
  resolve(target, claims, g): Resolution {
    const claimants = [...new Map(claims.map((c) => [c.by.node, c.by])).values()].sort((a, b) => a.ref.localeCompare(b.ref))
    const same = (a: View, b: View) => a.node === b.node
    const replaced: [View, View][] = []
    for (const a of claimants) {
      for (const r of g.from(a).out("replaces").nodes()) {
        const hit = claimants.find((b) => same(b, r))
        if (hit) replaced.push([a, hit])
      }
    }
    const remaining = claimants.filter((b) => !replaced.some(([, r]) => same(r, b)))
    const why = (text: string) =>
      [...replaced.map(([a, b]) => say.amendmentReplaces2(a.title, b.title)), text].filter(Boolean).join("; ")
    if (remaining.length === 1) return { kind: "apply", order: remaining, reason: why(""), replaced }

    const mine = claims.filter((c) => remaining.some((b) => same(b, c.by)))
    const paths = mine.map((c) => c.path)
    if (remaining.length > 1 && new Set(paths).size === paths.length) {
      const depth = (v: View) => Math.min(...mine.filter((c) => same(c.by, v)).map((c) => (c.path ? c.path.split(".").length : 0)))
      const order = [...remaining].sort((a, b) => depth(a) - depth(b) || a.ref.localeCompare(b.ref))
      return { kind: "apply", order, reason: why(say.amendmentNestedPathsTheMorePreciseOne()), replaced }
    }

    const arbiter = target.owner
    const approved = remaining.filter((a) => g.from(a).in("approves").where((v) => !!arbiter && v.owner === arbiter).exists())
    if (approved.length === 1) {
      return { kind: "apply", order: approved, reason: why(say.amendmentApprovedByOwnerOf(arbiter, target.title)), replaced }
    }
    return {
      kind: "contested",
      reason: approved.length > 1
        ? say.amendmentApprovedSeveralOfTheseAmendments(arbiter)
        : say.amendmentNoneReplacesTheOtherAndThe(),
      arbiter,
    }
  },

  holes(self) {
    const leaves = patchLeaves(self.field("patch"))
    if (!leaves.length) return [hole.warning(say.amendmentAmendmentWithoutEffectItRedefinesNothing())]
    const target = self.amends
    if (!target) return []
    return leaves
      .filter(([p, v]) => typeof v !== "function" && JSON.stringify(target.base(p)) === JSON.stringify(v))
      .map(([p]) => hole.warning(say.amendmentChangesNothingAlreadyHasThisValue(p)))
  },

  render(self, g) {
    const target = self.amends
    if (!target) return []
    const state = self.active ? Validity.inForce : self.from && g.today < self.from ? Validity.notYet : Validity.noLonger
    const show = (v: unknown, path: string, rule: RuleState) =>
      typeof v === "function" ? doc.value(v, undefined, { rule }) : doc.value(v, unitFor(target, path))
    const rows = patchLeaves(self.field("patch")).map(([path, v]) => [
      [doc.ident(path)],
      [show(target.base(path), path, RuleState.original)],
      [show(v, path, RuleState.redefined)],
    ])
    const code = self.decl?.args[1]
    const source = self.decl && `${self.decl.file}:${self.decl.line}`
    return [
      doc.validity(state, self.from, self.until),
      doc.table([say.amendmentWhatChanges(), say.amendmentBefore(), say.amendmentAfter()], rows),
      ...(code ? [doc.details(say.amendmentTheAmendmentInTheCode(), [doc.code("ts", code, source)])] : []),
    ]
  },
})

/** The unit of one of the target's values, to show it the way the target shows it. */
function unitFor(target: View, path: string): Unit | undefined {
  const info = target.fieldInfo(path.split(".")[0])
  if (info?.type === FieldType.duration) return "duration"
  if (info?.type === FieldType.percent) return "percent"
  if (info?.type === FieldType.chf) return "chf"
  if (info?.type === FieldType.value) return unitOf(target.decl?.typeArgs[0])
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
