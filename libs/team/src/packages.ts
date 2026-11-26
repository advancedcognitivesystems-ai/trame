/** Team · Packages */

import { pkg } from "#trame/kinds/package"
import { DeclaredOnce } from "./product"

/**
 * Trame
 * The language the people are declared in, at the generation the library pins: reached by its path in Trame's
 * repository.
 */
export const Language = pkg({ owner: "trame", packageName: "trame", version: "127", joins: "language", from: "path", at: "../../generations/g127", serves: [DeclaredOnce] })

/**
 * The library of continuous integration
 * The writers of the files that run a shipment elsewhere (GitHub Actions), at the version the project uses, by its path
 * in Trame's repository: the workflow that checks each pull request is written from the graph.
 */
export const ContinuousIntegration = pkg({
  owner: "trame", packageName: "ci", version: "0.8.0", joins: "library", from: "path", at: "../../ci/releases/0.8.0",
  serves: [DeclaredOnce],
})
