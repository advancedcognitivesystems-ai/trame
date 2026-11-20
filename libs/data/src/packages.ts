/** Data · Packages */

import { pkg } from "#trame/kinds/package"
import { DataDescribedOnce } from "./product"

/**
 * Trame
 * The language the project is written in, at the generation that started it: its owner moves it by an amendment.
 */
export const Language = pkg({ owner: "trame", packageName: "trame", version: "111", joins: "language", at: "../../generations/g111", serves: [DataDescribedOnce] })

/**
 * std
 * A library the project builds on, at the version the language's home uses.
 */
export const stdLibrary = pkg({ owner: "trame", packageName: "std", version: "0.20.0", joins: "library", at: "../../std/releases/0.20.0", serves: [DataDescribedOnce] })

/**
 * The library of continuous integration
 * The writers of the files that run a shipment elsewhere (GitHub Actions), at the version the project uses, by its path
 * in Trame's repository: the workflow that checks each pull request is written from the graph.
 */
export const ContinuousIntegration = pkg({
  owner: "trame", packageName: "ci", version: "0.7.0", joins: "library", from: "path", at: "../../ci/releases/0.7.0",
  serves: [DataDescribedOnce],
})
