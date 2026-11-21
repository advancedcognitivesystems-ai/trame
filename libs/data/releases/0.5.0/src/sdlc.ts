/** Data · SDLC */

import { artifact } from "#trame/kinds/artifact"
import { obligation } from "#trame/kinds/obligation"
import { policy } from "#trame/kinds/policy"
import { shipment } from "#trame/kinds/shipment"
import { KindName, Severity } from "#trame/kernel"
import { Verified, Served, Applied, Safe } from "#std/obligations"
import { DataDescribedOnce } from "./product"
import { GitHubWorkflow, type WorkflowSettings } from "#ci/github"
import { decision } from "#trame/kinds/decision"

// How a version of the library of data becomes available (C1): through its own graph. A version holds all the
// library's code (its kind too, in src/kinds), and trame release ships it before it freezes it.

/**
 * The library of data
 * The library as its people write it: what a version freezes, and what projects import at that version.
 */
export const TheLibrary = artifact({ owner: "trame", path: "src", version: true })

/**
 * Its functions verified
 * Every function of the library is verified by a scenario: one nothing proves is an error, and keeps the version.
 */
export const FunctionsVerified = obligation({
  owner: "trame", applies: Verified, params: { kinds: [KindName.function] }, gaps: Severity.error, serves: [DataDescribedOnce],
})

/**
 * Its requirements held
 * Every requirement of the goal the library serves holds.
 */
export const RequirementsServed = obligation({ owner: "trame", applies: Served, serves: [DataDescribedOnce] })

/**
 * Its decisions applied
 * Every architecture decision the library's nodes apply holds: an entity is described once.
 */
export const DecisionsApplied = obligation({ owner: "trame", applies: Applied, serves: [DataDescribedOnce] })

/**
 * Its packages safe
 * Every package the library's code uses is installed at its version, without a known vulnerability.
 */
export const PackagesSafe = obligation({ owner: "trame", applies: Safe, serves: [DataDescribedOnce] })

/**
 * How a version is made
 * Its functions verified (a gap is an error), its requirements held, its decisions applied, its packages safe; and the
 * foundations, as always.
 */
export const VersionMode = policy({ owner: "trame", obligations: [FunctionsVerified, RequirementsServed, DecisionsApplied, PackagesSafe] })

/**
 * The next version
 * A version of the library of data, for the projects that import it: shipped by trame release, which freezes and
 * publishes it once it holds.
 */
export const NextVersion = shipment({ owner: "trame", target: "version", ships: [TheLibrary], policy: VersionMode })

/**
 * How a pull request is checked on GitHub
 * At each pull request into main, on GitHub's Ubuntu 24.04 machine with Node.js 22: its job, named data, is a check the
 * repository requires; it keeps GitHub from merging a pull request that changes what people decided (a
 * trame.lock of the repository), which a person then merges (D1).
 */
export const PullRequestsOnGitHub = decision<WorkflowSettings>({
  owner: "trame",
  value: {
    on: { pullRequests: ["main"] }, job: "data", runsOn: "ubuntu-24.04", node: 22, artefacts: { days: 30 },
    pullRequest: { review: false, merge: "onceItHoldsUnlessDecided" },
  },
  rejected: {
    "Only when a pull request touches the project": "GitHub keeps a pull request waiting for a check it requires and that never ran",
    "Merged by GitHub whatever it changes": "what people decided would reach main without a person",
  },
})

/**
 * The pull requests' workflow
 * The workflow that checks a pull request on GitHub, written from the pipeline of the shipment it runs: it prepares the
 * machine as the plan says, keeps GitHub from merging what people decided, then
 * runs trame ship.
 */
export const PullRequestWorkflow = artifact({
  owner: "trame",
  path: "../../.github/workflows/data-pull-request.yml",
  media: "application/yaml",
  producedBy: GitHubWorkflow,
  runs: NextVersion,
  settings: PullRequestsOnGitHub,
})

/**
 * The files that run it elsewhere
 * The workflow that checks each pull request, written by trame ship from the graph and kept in the repository where
 * GitHub finds it; shipped again when the pipeline it runs changes.
 */
export const RunnersWritten = shipment({
  owner: "trame",
  target: "repository",
  ships: [PullRequestWorkflow],
})
