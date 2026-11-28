/** Standard library · Packages */

// The people of the repository, who own this project's nodes: loaded so that the graph declares them (C4).
import "#team/people"
import { pkg } from "#trame/kinds/package"
import { RealizedOnce, VersionsThatHold } from "./product"

/**
 * Trame
 * The language the library is written in, at the generation it pins: reached by its path in Trame's repository. Its
 * owner moves it when a version of the library needs a newer language.
 */
export const Language = pkg({
  owner: "trame", packageName: "trame", version: "135", joins: "language", from: "path", at: "../generations/g135",
  serves: [RealizedOnce],
})

/**
 * The library of continuous integration
 * The writers of the files that run a shipment elsewhere (GitHub Actions), at the version the project uses, by its path
 * in Trame's repository: the workflow that checks each pull request is written from the graph.
 */
export const ContinuousIntegration = pkg({
  owner: "trame", packageName: "ci", version: "0.8.0", joins: "library", from: "path", at: "../ci/releases/0.8.0",
  serves: [VersionsThatHold],
})

/**
 * The people of the repository
 * Who works on Trame's repository, declared once as actors (C4): every owner of this project names one of them.
 */
export const People = pkg({
  owner: "trame", packageName: "team", version: "0.1.0", joins: "library", from: "path", at: "../libs/team/releases/0.1.0",
  serves: [VersionsThatHold],
})
