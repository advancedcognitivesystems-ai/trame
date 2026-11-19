/** Continuous integration · SDLC */

import { artifact } from "#trame/kinds/artifact"
import { shipment } from "#trame/kinds/shipment"
import { GitHubWorkflow, type WorkflowSettings } from "./github"
import { ShellScript } from "./shell"
import { YamlDocument } from "./yaml"
import { decision } from "#trame/kinds/decision"

// How a version of the library becomes available (C1): as Trame ships its generations, the library ships its versions
// through its own graph. The library holds no function, requirement or decision a policy would derive from: what a
// version must prove is its writers, each held by its examples (which every build plays), and the foundations (no
// literal, no value nobody decided, no error of the graph), before trame release freezes it.

/**
 * The library of writers
 * The library as its people write it: what a version freezes, and what projects import at that version.
 */
export const TheLibrary = artifact({ owner: "trame", path: "src", version: true })

/**
 * The next version
 * A version of the library of writers, for the projects that import it: shipped by trame release, which freezes and
 * publishes it once it holds.
 */
export const NextVersion = shipment({
  owner: "trame", target: "version", ships: [TheLibrary], requires: [YamlDocument, ShellScript, GitHubWorkflow],
})

/**
 * How a pull request is checked on GitHub
 * At each pull request into main, on GitHub's Ubuntu 24.04 machine with Node.js 22: its job, named ci, is a check the
 * repository requires; it keeps GitHub from merging a pull request that changes what people decided (a
 * trame.lock of the repository), which a person then merges (D1).
 */
export const PullRequestsOnGitHub = decision<WorkflowSettings>({
  owner: "trame",
  value: {
    on: { pullRequests: ["main"] }, job: "ci", runsOn: "ubuntu-24.04", node: 22, artefacts: { days: 30 },
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
  path: "../.github/workflows/ci-pull-request.yml",
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
