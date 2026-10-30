/** Trame · SDLC */

import { artifact } from "../kinds/artifact"
import { check } from "../kinds/check"
import { role } from "../kinds/role"
import { shipment } from "../kinds/shipment"
import { obligation } from "../kinds/obligation"
import { policy } from "../kinds/policy"
import { KindName, Severity } from "../trame/kernel"
import { Verified, Served, Checked, Ruled, Safe } from "#std/obligations"
import { TrameCli, Local } from "./architecture"
import { TestKinds, Advance } from "./commands"
import { ExecutableSpecification } from "./product"

// How a new version of Trame becomes the one projects run, in Trame's graph. The engine described by the graph is
// assembled into a program (the candidate); it plays the laws of the kinds and the views; the rules of the
// architecture, the scenarios and the requirements of the engine hold (the policy of a generation derives them from
// what the candidate reaches); then the candidate advances: it builds the libraries, the example and Trame as the
// generation in place did, reassembles itself to a fixed point, replays the older generations, and, accepted, is
// frozen into the next generation with the libraries it imports, its release written, the pins of Trame and of the
// example moved to it. trame ship NextGeneration --promote "what changes" runs it
// all, and keeps the evidence and the dossier.

/**
 * Trame's maintainers
 * Who changes Trame's engine and language, and ships its generations.
 */
export const Maintainers = role({ owner: "trame", people: ["ghalaax", "claude"] })

/**
 * The candidate engine
 * The program of Trame's command line, assembled from the graph for a machine: what the next generation freezes.
 */
export const EngineCandidate = artifact({ owner: "trame", path: "out/local/trame-cli.ts", producedBy: TrameCli })

/**
 * The candidate plays the laws
 * The candidate engine plays the laws of every kind and view on drawn values: one broken law, and it is not shipped.
 */
export const CandidateKeepsTheLaws = check({ owner: "trame", on: [EngineCandidate], runs: TestKinds, by: Maintainers })

/**
 * The engine is verified
 * Every scenario that verifies code a generation reaches is played; an entry point, a function or a component it reaches
 * that no scenario verifies is said, not blocking: the laws of the kinds and the examples cover much of the engine.
 */
export const EngineVerified = obligation({
  owner: "trame", applies: Verified, params: { kinds: [KindName.entry, KindName.function, KindName.component] }, gaps: Severity.warning,
  serves: [ExecutableSpecification],
})

/**
 * The language serves what it says
 * Every requirement of the goals the reached code serves holds, at any depth.
 */
export const LanguageServed = obligation({ owner: "trame", applies: Served, serves: [ExecutableSpecification] })

/**
 * The candidate is checked by programs
 * Every check of the candidate a program runs: a generation is advanced by a machine, not by hand.
 */
export const CandidateChecked = obligation({ owner: "trame", applies: Checked, params: { by: "programs" }, serves: [ExecutableSpecification] })

/**
 * The rules of the architecture hold
 * Every rule of Trame's graph holds: none broken.
 */
export const ArchitectureRuled = obligation({ owner: "trame", applies: Ruled, serves: [ExecutableSpecification] })

/**
 * The packages are safe
 * Every package the engine uses is installed at its version, without a known vulnerability.
 */
export const EnginePackagesSafe = obligation({ owner: "trame", applies: Safe, serves: [ExecutableSpecification] })

/**
 * How a generation is made
 * The way Trame advances its engine: the code it reaches verified (a gap said), the goals it serves held, the candidate
 * checked by programs, the rules held, the packages safe; and the foundations, as always. Not the decisions it applies
 * (family Applied): ten ADRs are applied only by nodes that carry no status (catalogs, functions no scenario verifies),
 * so they stay unknown, and a generation would never ship; an ADR joins when something with evidence applies it.
 */
export const GenerationMode = policy({
  owner: "trame",
  obligations: [EngineVerified, LanguageServed, CandidateChecked, ArchitectureRuled, EnginePackagesSafe],
})

/**
 * The next generation
 * The engine as the graph describes it now, frozen into the next generation and pinned by Trame and the example, the
 * way a generation is made: what it must prove is derived from what the candidate reaches (the laws it plays, the
 * scenarios of its code, the requirements of the goals it serves, the rules, the packages), nothing listed by hand. The
 * advance deploys it, and refuses a candidate the requirement "Accept a candidate" does not accept.
 */
export const NextGeneration = shipment({
  owner: "trame",
  target: "generation",
  ships: [EngineCandidate],
  policy: GenerationMode,
  deploys: [Advance],
  environment: Local,
})
