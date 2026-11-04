/** Geometry · Releases */

// Written by trame release at each version, from the releases already here and the one it freezes: do not edit. A
// release's own record is written after its sources are copied, so it is not in its own copy.

import { release } from "#trame/kinds/release"
import { GeometryWrittenOnce } from "./product"

/**
 * Version 0.1.0
 */
export const R0_1_0 = release({
  owner: "ghalaax",
  version: "0.1.0",
  date: "2026-11-01",
  what: "Vectors in three dimensions with their laws, the quantity Angle (radian, degree, turn), the axes and the tolerance",
  fingerprint: "669d0698ae31c1c1",
  language: "shared",
  serves: [GeometryWrittenOnce],
})

/**
 * Version 0.2.0
 */
export const R0_2_0 = release({
  owner: "ghalaax",
  version: "0.2.0",
  date: "2026-11-04",
  what: "On g101 and std 0.16.0; the library ships its versions through its own graph: NextVersion, its decisions applied and its packages safe",
  fingerprint: "541c5d013c8f9a50",
  language: "shared",
  serves: [GeometryWrittenOnce],
})
