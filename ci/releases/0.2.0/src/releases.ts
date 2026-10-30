/** Continuous integration · Releases */

// Written by trame release at each version, from the releases already here and the one it freezes: do not edit. A
// release's own record is written after its sources are copied, so it is not in its own copy.

import { release } from "../../../../kinds/release"
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
