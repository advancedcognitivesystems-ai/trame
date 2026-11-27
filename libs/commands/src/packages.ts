/** Commands · Packages */

// The people of the repository, who own this project's nodes: loaded so that the graph declares them (C4).
import "#team/people"
import { pkg } from "#trame/kinds/package"
import { WrittenOnce } from "./product"

/**
 * Trame
 * The language the library is written in, at the generation the repository runs, by its path: the one whose engine
 * gives the API std's ports of the engine read (g124).
 */
export const Language = pkg({ owner: "trame", packageName: "trame", version: "131", joins: "language", at: "../../generations/g131", serves: [WrittenOnce] })

/**
 * std
 * The library the commands are written with: the ports of the engine (the project at hand), of the files and of the
 * program's command line, its structures and standards.
 */
export const StandardLibrary = pkg({ owner: "trame", packageName: "std", version: "0.30.0", joins: "library", at: "../../std/releases/0.30.0", serves: [WrittenOnce] })

/**
 * The library of continuous integration
 * The writers of the files that run a shipment elsewhere (GitHub Actions), at the version the project uses, by its path
 * in Trame's repository: the workflow that checks each pull request is written from the graph.
 */
export const ContinuousIntegration = pkg({
  owner: "trame", packageName: "ci", version: "0.8.0", joins: "library", from: "path", at: "../../ci/releases/0.8.0",
  serves: [WrittenOnce],
})

/**
 * The people of the repository
 * Who works on Trame's repository, declared once as actors (C4): every owner of this project names one of them.
 */
export const People = pkg({
  owner: "trame", packageName: "team", version: "0.1.0", joins: "library", from: "path", at: "../team/releases/0.1.0",
  serves: [WrittenOnce],
})

/**
 * The renderers of documents
 * What writes for people what a command computes (E3): the terminal's text, its lines and their indentation, then the
 * documents a command renders; at the version the library uses, by its path in Trame's repository.
 */
export const Documents = pkg({
  owner: "trame", packageName: "documents", version: "0.2.0", joins: "library", from: "path", at: "../documents/releases/0.2.0",
  serves: [WrittenOnce],
})
