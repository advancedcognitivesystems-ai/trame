/** Trame · Generations */

import { decision } from "../kinds/decision"
import { requirement } from "../kinds/requirement"
import { acceptance } from "../kinds/acceptance"
import { ExecutableSpecification } from "./product"

// The engine advances by frozen generations: the generation in place compiles the engine's graph and assembles the next
// one (the command `trame advance`). What makes a candidate acceptable is a requirement, whose rule the command
// receives; its criteria say what it must answer.

/** What an advance found, check by check. */
export interface AdvanceReport {
  /** The scenarios of the graph hold, run by the generation in place on the example. */
  scenariosHold: boolean
  /** The candidate builds the example as the generation in place did, character for character. */
  exampleAsBefore: boolean
  /** The candidate builds Trame's graph as the generation in place did. */
  selfAsBefore: boolean
  /** The program the candidate assembles builds Trame's graph as the candidate did. */
  secondAsFirst: boolean
  /** That program reassembles itself character for character. */
  fixedPoint: boolean
  /** The laws of the kinds and of the views hold. */
  lawsHold: boolean
  /** The differences shown are wanted (trame advance --accept). */
  accepted: boolean
}

/**
 * What an advance assembles
 * The candidate is the component of the engine assembled for the environment of a machine; beside the documents of
 * each build, an advance keeps what it printed, in a file of its own, and names what it keeps by whose build it is: the
 * reference (the generation in place), the candidate, the second assembly. The terminal names the first files that
 * differ; the file of differences has them all.
 */
export const Advancement = decision<{
  component: string
  environment: string
  terminal: string
  saves: { reference: string; candidate: string; second: string }
  shown: number
}>({
  owner: "trame",
  value: {
    component: "TrameCli",
    environment: "Local",
    terminal: "terminal.txt",
    saves: { reference: "reference", candidate: "candidate", second: "second" },
    shown: 12,
  },
})

/**
 * Accept a candidate
 * A candidate becomes the next generation only if its second assembly builds Trame's graph as it did and reassembles
 * itself character for character (the fixed point), and the laws hold; and if it builds the example and Trame's graph as
 * the generation in place, whose scenarios hold, unless the differences are declared wanted.
 */
export const AcceptCandidate = requirement({
  refines: [ExecutableSpecification],
  rule: (r: AdvanceReport): boolean =>
    r.secondAsFirst && r.fixedPoint && r.lawsHold && (r.accepted || (r.scenariosHold && r.exampleAsBefore && r.selfAsBefore)),
})

/** What a candidate needs to be accepted */
export const AcceptCandidateCriteria = acceptance({
  accepts: AcceptCandidate,
  owner: "trame",
  criteria: (criterion) => {
    const sound = { scenariosHold: true, exampleAsBefore: true, selfAsBefore: true, secondAsFirst: true, fixedPoint: true, lawsHold: true, accepted: false }
    criterion("A candidate that builds everything as before, reaches its fixed point and keeps the laws is accepted", () => AcceptCandidate(sound))
    criterion("A difference on the example refuses it, unless it is wanted", () => !AcceptCandidate({ ...sound, exampleAsBefore: false }) && AcceptCandidate({ ...sound, exampleAsBefore: false, accepted: true }))
    criterion("A difference on Trame's graph refuses it, unless it is wanted", () => !AcceptCandidate({ ...sound, selfAsBefore: false }) && AcceptCandidate({ ...sound, selfAsBefore: false, accepted: true }))
    criterion("A scenario that does not hold refuses it, unless the differences are wanted", () => !AcceptCandidate({ ...sound, scenariosHold: false }) && AcceptCandidate({ ...sound, scenariosHold: false, accepted: true }))
    criterion("Without a fixed point, nothing is accepted, not even when wanted", () => !AcceptCandidate({ ...sound, fixedPoint: false, accepted: true }))
    criterion("A second assembly that builds differently refuses it, even when wanted", () => !AcceptCandidate({ ...sound, secondAsFirst: false, accepted: true }))
    criterion("A law that breaks refuses it, even when wanted", () => !AcceptCandidate({ ...sound, lawsHold: false, accepted: true }))
  },
})
