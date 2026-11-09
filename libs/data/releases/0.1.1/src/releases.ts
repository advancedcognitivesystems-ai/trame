/** Data · Releases */

// Written by trame release at each version, from the releases already here and the one it freezes: do not edit. A
// release's own record is written after its sources are copied, so it is not in its own copy.

import { release } from "#trame/kinds/release"
import { DataDescribedOnce } from "./product"

/**
 * Version 0.1.0
 */
export const R0_1_0 = release({
  owner: "trame",
  version: "0.1.0",
  date: "2026-11-09",
  what: "The kind entity: data described once, its migrations computed from what deployments kept; documents kept in the preferences; the family Migrated",
  fingerprint: "b59ea0bf2828ba1b",
  language: "shared",
  serves: [DataDescribedOnce],
})
