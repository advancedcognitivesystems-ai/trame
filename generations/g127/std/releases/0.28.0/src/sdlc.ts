/** Standard library · SDLC */

import { artifact } from "#trame/kinds/artifact"
import { obligation } from "#trame/kinds/obligation"
import { policy } from "#trame/kinds/policy"
import { shipment } from "#trame/kinds/shipment"
import { KindName, Severity } from "#trame/kernel"
import { Verified, Served, Applied, Ruled, Safe, Identified, Reviewed } from "./obligations"
import { VersionsThatHold } from "./product"
import { GitHubWorkflow, type WorkflowSettings } from "#ci/github"
import { decision } from "#trame/kinds/decision"

// How a version of the standard library becomes available (C1): as Trame ships its generations, the library ships its
// versions through its own graph. A version is the library as its people write it, which trame release freezes under
// releases/ and publishes, and which projects import at that version; it holds all the library's code, so its policy
// reaches all of it. trame release ships it first and freezes nothing while it does not hold.

/**
 * The standard library
 * The library as its people write it: what a version freezes, and what projects import at that version.
 */
export const TheLibrary = artifact({ owner: "trame", path: "src", version: true })

/**
 * Its functions verified
 * Every function of the library is verified by a scenario: a function nothing proves is an error, and keeps the version.
 * A structure is verified by its laws; an adapter the library offers, by the projects that choose it.
 */
export const FunctionsVerified = obligation({
  owner: "trame", applies: Verified, params: { kinds: [KindName.function] }, gaps: Severity.error, serves: [VersionsThatHold],
})

/**
 * Its requirements held
 * Every requirement of the goals the library's code serves holds, at any depth.
 */
export const RequirementsServed = obligation({ owner: "trame", applies: Served, serves: [VersionsThatHold] })

/**
 * Its decisions applied
 * Every architecture decision the library's nodes apply holds.
 */
export const DecisionsApplied = obligation({ owner: "trame", applies: Applied, serves: [VersionsThatHold] })

/**
 * Its rules held
 * Every rule of the library's graph holds.
 */
export const RulesHeld = obligation({ owner: "trame", applies: Ruled, serves: [VersionsThatHold] })

/**
 * Its packages safe
 * Every package the library's code uses is installed at its version, without a known vulnerability.
 */
export const PackagesSafe = obligation({ owner: "trame", applies: Safe, serves: [VersionsThatHold] })

/**
 * Its callers identified
 * An entry point the library offers is for an audience its version identifies: one carrying an identity that nothing
 * identifies keeps the version (C6; the library offers none yet).
 */
export const CallersIdentified = obligation({ owner: "trame", applies: Identified, gaps: Severity.error, serves: [VersionsThatHold] })

/**
 * Its data reviewed
 * Every dataset the library's version carries is reviewed by the people of a role: one no review reviews keeps the
 * version (the library carries none yet).
 */
export const DataReviewed = obligation({ owner: "trame", applies: Reviewed, gaps: Severity.error, serves: [VersionsThatHold] })

/**
 * How a version is made
 * The way the standard library releases a version: its functions verified (a gap is an error), the requirements of its
 * goals held, its decisions applied, its rules held, its packages safe, its callers identified, its data reviewed; and the
 * foundations, as always.
 */
export const VersionMode = policy({
  owner: "trame",
  obligations: [FunctionsVerified, RequirementsServed, DecisionsApplied, RulesHeld, PackagesSafe, CallersIdentified, DataReviewed],
})

/**
 * The next version
 * A version of the standard library, for the projects that import it: shipped by trame release, which freezes and
 * publishes it once it holds.
 */
export const NextVersion = shipment({ owner: "trame", target: "version", ships: [TheLibrary], policy: VersionMode })

/**
 * How a pull request is checked on GitHub
 * At each pull request into main, on GitHub's Ubuntu 24.04 machine with Node.js 22: its job, named std, is a check the
 * repository requires; it keeps GitHub from merging a pull request that changes what people decided (a
 * trame.lock of the repository), which a person then merges (D1).
 */
export const PullRequestsOnGitHub = decision<WorkflowSettings>({
  owner: "trame",
  value: {
    on: { pullRequests: ["main"] }, job: "std", runsOn: "ubuntu-24.04", node: 22, artefacts: { days: 30 },
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
  path: "../.github/workflows/std-pull-request.yml",
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
