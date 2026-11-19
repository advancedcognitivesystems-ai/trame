/** Continuous integration · SDLC */

import { artifact } from "#trame/kinds/artifact"
import { shipment } from "#trame/kinds/shipment"
import { GitHubWorkflow } from "./github"
import { ShellScript } from "./shell"
import { YamlDocument } from "./yaml"

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
