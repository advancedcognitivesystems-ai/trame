/** Documents · Releases */

// Written by trame release at each version, from the releases already here and the one it freezes: do not edit. A
// release's own record is written after its sources are copied, so it is not in its own copy.

import { release } from "#trame/kinds/release"
import { RenderedOnce } from "./product"

/**
 * Version 0.1.0
 */
export const R0_1_0 = release({
  owner: "trame",
  version: "0.1.0",
  date: "2026-11-26",
  what: "the language of the documents: the port DocumentLanguage, with Dates, Lists, Punctuation and Units over it",
  fingerprint: "1bba695ab87a7f69",
  language: "shared",
  serves: [RenderedOnce],
})
