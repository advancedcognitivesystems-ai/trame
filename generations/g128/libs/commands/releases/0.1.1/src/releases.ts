/** Commands · Releases */

// Written by trame release at each version, from the releases already here and the one it freezes: do not edit. A
// release's own record is written after its sources are copied, so it is not in its own copy.

import { release } from "#trame/kinds/release"
import { WrittenOnce } from "./product"

/**
 * Version 0.1.0
 */
export const R0_1_0 = release({
  owner: "trame",
  version: "0.1.0",
  date: "2026-11-26",
  what: "the commands every project runs, written once on std's ports of the engine: plan",
  fingerprint: "492f7f0c05958db9",
  language: "shared",
  serves: [WrittenOnce],
})
