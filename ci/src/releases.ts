/** Continuous integration · Releases */

// Written by trame release at each version, from the releases already here and the one it freezes: do not edit. A
// release's own record is written after its sources are copied, so it is not in its own copy.

import { release } from "#trame/kinds/release"
import { OneWriterPerPlace, RunsElsewhere } from "./product"

/**
 * Version 0.1.0
 */
export const R0_1_0 = release({
  owner: "trame",
  version: "0.1.0",
  date: "2026-10-28",
  what: "Writers that run a shipment elsewhere: a workflow of GitHub Actions and a Bash script, from the plan of the run the engine computes; a YAML document from nodes",
  fingerprint: "1067bfe6fbe29aea",
  language: "shared",
  serves: [OneWriterPerPlace, RunsElsewhere],
})

/**
 * Version 0.2.0
 */
export const R0_2_0 = release({
  owner: "trame",
  version: "0.2.0",
  date: "2026-10-28",
  what: "A workflow publishes only what its artefact publishes in the graph, as an artefact of GitHub kept as many days as its settings say, records its address as evidence, and keeps the evidence only when its settings say so",
  fingerprint: "249723edd6b389fd",
  language: "shared",
  serves: [OneWriterPerPlace, RunsElsewhere],
})

/**
 * Version 0.3.0
 */
export const R0_3_0 = release({
  owner: "trame",
  version: "0.3.0",
  date: "2026-11-02",
  what: "The language named by its names (#trame/kernel, #trame/kinds/*); references in its graph",
  fingerprint: "f021383982b1c18c",
  language: "shared",
  serves: [OneWriterPerPlace, RunsElsewhere],
})

/**
 * Version 0.4.0
 */
export const R0_4_0 = release({
  owner: "trame",
  version: "0.4.0",
  date: "2026-11-04",
  what: "The library ships its versions through its own graph: NextVersion requires its writers, each held by its examples",
  fingerprint: "7519ad6debc3455f",
  language: "shared",
  serves: [OneWriterPerPlace, RunsElsewhere],
})

/**
 * Version 0.5.0
 */
export const R0_5_0 = release({
  owner: "trame",
  version: "0.5.0",
  date: "2026-11-19",
  what: "Pull requests: a workflow names its job, writes the review of the branch, keeps GitHub from merging what people decided; the settings of a repository (D1)",
  fingerprint: "39e1a1af260c128e",
  language: "shared",
  serves: [OneWriterPerPlace, RunsElsewhere],
})

/**
 * Version 0.6.0
 */
export const R0_6_0 = release({
  owner: "trame",
  version: "0.6.0",
  date: "2026-11-19",
  what: "A workflow installs the projects its shipment's scenarios enter",
  fingerprint: "ba68ab30f89a5df8",
  language: "shared",
  serves: [OneWriterPerPlace, RunsElsewhere],
})

/**
 * Version 0.7.0
 */
export const R0_7_0 = release({
  owner: "trame",
  version: "0.7.0",
  date: "2026-11-19",
  what: "A file written names the nodes it comes from at its top (the artefact, the decision of its settings, the file that declares them), and a workflow's name says its job; the repository's settings leave ci for std (0.20.0), where a program of the project's SDLC applies and reads them back, and the writer of a script that set them is gone",
  fingerprint: "b1a205a7d08e6a57",
  language: "shared",
  serves: [OneWriterPerPlace, RunsElsewhere],
})

/**
 * Version 0.8.0
 */
export const R0_8_0 = release({
  owner: "trame",
  version: "0.8.0",
  date: "2026-11-22",
  what: "The pull requests' workflow watches its own project's lock, by its path from the project's directory: a copy of a lock kept elsewhere (a generation's archive) no longer keeps GitHub from merging",
  fingerprint: "5dcdeda40d367c24",
  language: "shared",
  serves: [OneWriterPerPlace, RunsElsewhere],
})
