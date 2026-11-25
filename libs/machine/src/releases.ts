/** Machine · Releases */

// Written by trame release at each version, from the releases already here and the one it freezes: do not edit. A
// release's own record is written after its sources are copied, so it is not in its own copy.

import { release } from "#trame/kinds/release"
import { AskedOnce } from "./product"

/**
 * Version 0.1.0
 */
export const R0_1_0 = release({
  owner: "trame",
  version: "0.1.0",
  date: "2026-11-25",
  what: "The questions of the machine (E3): the system among those the project runs on, Node recent enough, Git installed, each reading what the project requires through WhatTheMachineRuns",
  fingerprint: "050324449fb6a4b7",
  language: "shared",
  serves: [AskedOnce],
})
