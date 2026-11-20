/** Standard library · Packages */

import { pkg } from "#trame/kinds/package"
import { RealizedOnce, VersionsThatHold } from "./product"

/**
 * Trame
 * The language the library is written in, at the generation it pins: reached by its path in Trame's repository. Its
 * owner moves it when a version of the library needs a newer language.
 */
export const Language = pkg({
  owner: "trame", packageName: "trame", version: "112", joins: "language", from: "path", at: "../generations/g112",
  serves: [RealizedOnce],
})

/**
 * The library of continuous integration
 * The writers of the files that run a shipment elsewhere (GitHub Actions), at the version the project uses, by its path
 * in Trame's repository: the workflow that checks each pull request is written from the graph.
 */
export const ContinuousIntegration = pkg({
  owner: "trame", packageName: "ci", version: "0.7.0", joins: "library", from: "path", at: "../ci/releases/0.7.0",
  serves: [VersionsThatHold],
})
