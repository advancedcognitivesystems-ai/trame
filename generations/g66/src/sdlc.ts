/** Trame · SDLC */

import { artifact } from "../kinds/artifact"
import { check } from "../kinds/check"
import { role } from "../kinds/role"
import { shipment } from "../kinds/shipment"
import { TrameCli, Local, RenderingWithoutGraph, OnlyCommandsWrite, KnownEffects } from "./architecture"
import { TestKinds, Advance } from "./commands"
import { CompileExample, KindLaws, BuildLikeBefore } from "./scenarios"
import { AcceptCandidate } from "./generations"
import { SeverityOrder } from "./product"
import { ShipOnlyWhatHolds } from "./shipping"
import { ReleaseIsSettled, LibraryOfAModule } from "./libraries"

// How a new version of Trame becomes the one projects run, in Trame's graph. The engine described by the graph is
// assembled into a program (the candidate); it plays the laws of the kinds and the views; the rules of the
// architecture, the scenarios and the requirements of the engine hold; then the candidate advances: it builds the
// libraries, the example and Trame as the generation in place did, reassembles itself to a fixed point, replays the
// older generations, and, accepted, is frozen into the next generation with the libraries it imports, its release
// written, the pins of Trame and of the example moved to it. trame ship NextGeneration --promote "what changes" runs it
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
 * The next generation
 * The engine as the graph describes it now, frozen into the next generation and pinned by Trame and the example: it
 * ships when the candidate keeps the laws, the rules of the architecture, the scenarios and the requirements of the
 * engine hold; the advance deploys it, and refuses a candidate the requirement "Accept a candidate" does not accept.
 */
export const NextGeneration = shipment({
  owner: "trame",
  target: "generation",
  ships: [EngineCandidate],
  requires: [
    CandidateKeepsTheLaws, RenderingWithoutGraph, OnlyCommandsWrite, KnownEffects, CompileExample, KindLaws, BuildLikeBefore,
    AcceptCandidate, SeverityOrder, ShipOnlyWhatHolds, ReleaseIsSettled, LibraryOfAModule,
  ],
  deploys: [Advance],
  environment: Local,
})
