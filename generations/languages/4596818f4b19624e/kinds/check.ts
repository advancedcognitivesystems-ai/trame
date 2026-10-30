import {
  defineKind, field, optional, edge, optionalEdge, hole, doc, keysOf, Status, KindName, CheckField, CheckEdge, EvidenceSource,
  type Node, type View, type Graph,
} from "../trame/kernel"
import { latestOf, builtFingerprint } from "./artifact"
import { peopleOf } from "./role"
import words from "./words"

const say = words()

const fields = {
  owner: field.owner(),
  [CheckField.steps]: optional(field.value<string[]>(say.checkSteps())),
}
const F = keysOf(fields)
const edges = {
  [CheckEdge.on]: edge.many([KindName.artifact], { label: say.checkOn(), inverse: say.checkCheckedBy() }),
  [CheckEdge.runs]: optionalEdge(edge.one([KindName.entry], { label: say.checkRuns(), inverse: say.checkRunsFor() })),
  [CheckEdge.by]: optionalEdge(edge.one([KindName.role], { label: say.checkBy(), inverse: say.checkSigns() })),
}
const E = keysOf(edges)

/** The fingerprint a check holds for: that of the artefacts it checks, as they were last built; none while one is not. */
export const checkedFingerprint = (self: View, g: Graph): string | undefined => {
  const built = g.from(self).out(E.on).nodes().map(builtFingerprint)
  return built.some((b) => b === undefined) ? undefined : g.lib.fingerprint?.(built)
}

/** The latest evidence of a check, and whether it holds now: on the artefacts as they are, signed by the role. */
const judged = (self: View, g: Graph) => {
  const last = latestOf(self, EvidenceSource.check)
  const role = g.from(self).out(E.by).first()
  const signer = !role || (last?.by !== undefined && peopleOf(role, g.lib.values.isText).includes(last.by))
  const fresh = last !== undefined && last.fingerprint !== undefined && last.fingerprint === checkedFingerprint(self, g)
  return { last, fresh: fresh && signer, passed: last?.value === g.lib.counts.one }
}

/**
 * A check a scenario in memory cannot make: run by a program of the SDLC on the artefacts it checks (a page opened in a
 * browser), or made by hand and signed by a role (on a phone: the voice speaks, the animations look right). It holds
 * while its latest evidence passed, on the artefacts as they were last built, signed by the role.
 */
const kind = defineKind({
  name: KindName.check,
  label: { one: say.checkCheck(), many: say.checkChecks() },
  renderOwns: [F.steps],
  fields,
  edges,

  status(self, g) {
    const j = judged(self, g)
    return !j.fresh ? Status.unknown : j.passed ? Status.held : Status.violated
  },

  holes(self, g) {
    const { texts, lists, values, counts } = g.lib
    const j = judged(self, g)
    if (j.fresh && j.passed) return []
    const role = g.from(self).out(E.by).first()
    const owner = role?.title ?? self.owner
    if (j.fresh) return [hole.error(say.checkFailed(j.last?.by ?? owner ?? texts.empty), owner)]
    const steps = self.field(F.steps)
    const listed = Array.isArray(steps) ? steps.filter(values.isText) : []
    return [
      j.last !== undefined && hole.warning(say.checkStale(), owner),
      j.last === undefined && hole.warning(g.from(self).out(E.runs).exists() || counts.isEmpty(listed) ? say.checkToRun() : say.checkToSign(texts.concat(lists.enumeration(listed).map(String))), owner),
    ]
  },

  render(self, g) {
    const { values, texts } = g.lib
    const steps = self.field(F.steps)
    const last = latestOf(self, EvidenceSource.check)
    return [
      ...(Array.isArray(steps) ? [doc.list(steps.filter(values.isText).map((s) => [s]))] : []),
      ...(last ? [doc.para(...say.checkLast(last.value === g.lib.counts.one ? say.checkPassed() : say.checkFailedShort(), doc.date(last.at), last.by ?? texts.empty))] : []),
    ]
  },
})

interface CheckInput {
  owner: string
  /** The artefacts it checks. */
  on: readonly Node<typeof KindName.artifact>[]
  /** The program of the SDLC that runs it, if a machine can. */
  runs?: Node<typeof KindName.entry>
  /** By hand: what to do, and the role that signs it. */
  steps?: readonly string[]
  by?: Node<typeof KindName.role>
}

/** `check({ owner, on: [Page], runs: CheckPage })` or `check({ owner, on: [Page], steps: ["…"], by: Testers })` */
export function check(input: CheckInput): Node<typeof KindName.check> {
  return kind(input as never) as never
}

export const checkKind = kind
