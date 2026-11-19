import {
  defineKind, field, optional, edge, optionalEdge, hole, doc, keysOf, Status, KindName, EdgeName, CheckField, CheckEdge, ArtifactEdge, EvidenceSource,
  type Node, type View, type Graph,
} from "../trame/kernel"
import { latestOf, builtNow } from "./artifact"
import { peopleOf } from "./role"
import { wiredBy } from "./scenario"
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
  // What it proves of code no scenario in memory can run: its program's, run on a machine (the disk, processes, a
  // registry), or what the artefacts it checks carry, run by its program or by a person (a page's voice, on a phone).
  [EdgeName.verifies]: optionalEdge(edge.many([KindName.entry, KindName.function, KindName.implementation], { label: say.scenarioVerifies(), inverse: say.scenarioVerifiedBy() })),
}
const E = keysOf(edges)

/**
 * The fingerprint a check holds for: that of the artefacts it checks, as they were last built from the code as it is;
 * none while one is not built, or was built from older code.
 */
export const checkedFingerprint = (self: View, g: Graph): string | undefined => {
  const built = g.from(self).out(E.on).nodes().map((a) => builtNow(a, g))
  return built.some((b) => b === undefined) ? undefined : g.lib.fingerprint?.(built)
}

/** What a check computes once: the code of the program it runs, if it runs one. */
interface Ran { code?: string }

/**
 * What its program runs: the entry point and what its component exposes it through, wired in every environment it can
 * be assembled for.
 */
const ranBy = (self: View, g: Graph): View[] => {
  const program = g.from(self).out(E.runs).first()
  if (!program) return []
  const exposed = g.from(program).out(EdgeName.partOf).nodes().flatMap((c) => c.dependencies.map((d) => d.node))
  return g.all(KindName.environment).nodes().flatMap((env) => wiredBy(g, [program, ...exposed], env))
}

/**
 * The latest evidence of a check, and whether it holds now: on the artefacts as they are, by its program as it is, signed
 * by the role.
 */
const judged = (self: View, g: Graph) => {
  const last = latestOf(self, EvidenceSource.check)
  const role = g.from(self).out(E.by).first()
  const signer = !role || (last?.by !== undefined && peopleOf(role, g.lib.values.isText).includes(last.by))
  // Compiled at an earlier day, it is judged as it was given: the code and the engine of that day are not known.
  const asGiven = g.asGiven?.() === true
  const code = asGiven ? undefined : self.result<Ran>()?.code
  // A program's verdict holds for the engine that ran it, while the project pins it; a person's, whatever the engine.
  const engine = g.from(self).out(E.runs).exists() && !asGiven ? g.engine?.() : undefined
  const fresh = last !== undefined && last.fingerprint !== undefined && last.fingerprint === checkedFingerprint(self, g) &&
    (code === undefined || last.code === code) && (engine === undefined || last.engine === engine)
  return { last, fresh: fresh && signer, passed: last?.value === g.lib.counts.one }
}

/**
 * A check a scenario in memory cannot make: run by a program of the SDLC on the artefacts it checks (a page opened in a
 * browser), or made by hand and signed by a role (on a phone: the voice speaks, the animations look right). It holds
 * while its latest evidence passed, on the artefacts as they were last built from the code as it is, by its program as
 * it is and the engine the project pins, signed by the role.
 */
const kind = defineKind({
  name: KindName.check,
  label: { one: say.checkCheck(), many: say.checkChecks() },
  renderOwns: [F.steps],
  fields,
  edges,

  // The code of its program, computed once: trame ship records it with what the program found.
  evaluate: (self, g): Ran | undefined => (g.from(self).out(E.runs).exists() ? { code: g.code?.(ranBy(self, g)) } : undefined),

  status(self, g) {
    const j = judged(self, g)
    return !j.fresh ? Status.unknown : j.passed ? Status.held : Status.violated
  },

  holes(self, g) {
    const { texts, lists, values, counts } = g.lib
    // What it says it verifies, its program wires, in one of the environments it can be assembled for; or the artefacts
    // it checks carry (a page carries its component, assembled for the browser), which run when its program opens them.
    const environments = g.all(KindName.environment).nodes()
    const component = (c: View, env: View | undefined) =>
      wiredBy(g, [...c.dependencies.map((d) => d.node), ...g.from(c).in(EdgeName.partOf).where((v) => v.kind === KindName.entry).nodes()], env)
    const carried = g.from(self).out(E.on).nodes().flatMap((a) => {
      const producer = g.from(a).out(ArtifactEdge.producedBy).first()
      const delivered = producer?.kind === KindName.delivery ? g.from(producer).out(EdgeName.delivers).first() : undefined
      return [
        ...(delivered && producer ? component(delivered, g.from(producer).out(EdgeName.environment).first()) : []),
        // A component assembled is the program the artefact is, for whichever environment it was assembled for.
        ...(producer?.kind === KindName.component ? environments.flatMap((env) => component(producer, env)) : []),
        ...g.from(a).out(ArtifactEdge.carries).nodes().flatMap((c) => environments.flatMap((env) => component(c, env))),
      ]
    })
    // Its program runs as its component assembled: the entry point, and what the component exposes it through.
    const wired = new Set([...ranBy(self, g), ...carried].map((v) => v.ref))
    const unwired = g.from(self).out(E.verifies).where((v) => !wired.has(v.ref)).nodes()
      .map((v) => hole.error(say.checkVerifiesUnwired(v.title), self.owner))
    const j = judged(self, g)
    if (j.fresh && j.passed) return unwired
    const role = g.from(self).out(E.by).first()
    const owner = role?.title ?? self.owner
    // A check that failed is a verdict on a version of the artefacts, not a defect of the graph: it keeps every shipment
    // that proves it (its status is violated) and says so, but does not stop the build that will make the next version.
    if (j.fresh) return [...unwired, hole.warning(say.checkFailed(j.last?.by ?? owner ?? texts.empty), owner)]
    const steps = self.field(F.steps)
    const listed = Array.isArray(steps) ? steps.filter(values.isText) : []
    return [
      ...unwired,
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
  /** The code it proves, which no scenario in memory can run: its program's, or what the artefacts it checks carry. */
  verifies?: readonly Node<"entry" | "function" | "implementation">[]
}

/** `check({ owner, on: [Page], runs: CheckPage })` or `check({ owner, on: [Page], steps: ["…"], by: Testers })` */
export function check(input: CheckInput): Node<typeof KindName.check> {
  return kind(input as never) as never
}

export const checkKind = kind
