/** Standard library · Releases */

// Written by trame release at each version, from the releases already here and the one it freezes: do not edit. A
// release's own record is written after its sources are copied, so it is not in its own copy.

import { release } from "../../../../kinds/release"
import { CitedNotCopied, KnownDesigns, RealizedOnce, SharedOperations } from "./product"

/**
 * Version 0.1.0
 */
export const R0_1_0 = release({
  owner: "trame",
  version: "0.1.0",
  date: "2026-10-26",
  what: "First version of the standard library: the structures bodies share (counts, sequences, texts, value types), the published standards (web, ECMAScript, text, algorithms, measures, system), the design patterns, and the loading of a page with its browser realization",
  fingerprint: "c8a0e8c2e66af0aa",
  language: "shared",
  serves: [CitedNotCopied, KnownDesigns, RealizedOnce, SharedOperations],
})
