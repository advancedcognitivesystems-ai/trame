/** Documents · Releases */

// Written by trame release at each version, from the releases already here and the one it freezes: do not edit. A
// release's own record is written after its sources are copied, so it is not in its own copy.

import { release } from "#trame/kinds/release"
import { RenderedOnce, ShownInAPage } from "./product"

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

/**
 * Version 0.1.1
 */
export const R0_1_1 = release({
  owner: "trame",
  version: "0.1.1",
  date: "2026-11-27",
  what: "its own language of words; the decision behind its choices: the documents speak the engine's language",
  fingerprint: "f0c7ad53400d19af",
  language: "shared",
  serves: [RenderedOnce],
})

/**
 * Version 0.2.0
 */
export const R0_2_0 = release({
  owner: "trame",
  version: "0.2.0",
  date: "2026-11-27",
  what: "The renderers: one walk given a syntax, Markdown with Mermaid for files, text for the terminal, the common rendering and its words, the syntax elements of Markdown, Mermaid, the terminal and HTML, the format decisions and the palette",
  fingerprint: "85e5bed88e2c5ef3",
  language: "shared",
  serves: [RenderedOnce],
})

/**
 * Version 0.3.0
 */
export const R0_3_0 = release({
  owner: "trame",
  version: "0.3.0",
  date: "2026-11-27",
  what: "The renderers' context is the kernel's places, which the engine's API gives (g132); generation 132",
  fingerprint: "70cc1beb5f8ab540",
  language: "shared",
  serves: [RenderedOnce],
})

/**
 * Version 0.4.0
 */
export const R0_4_0 = release({
  owner: "trame",
  version: "0.4.0",
  date: "2026-11-28",
  what: "The formats of std's answers: text at a terminal and Markdown with where each card is; std 0.31.0",
  fingerprint: "720a23669214f66a",
  language: "shared",
  serves: [RenderedOnce],
})

/**
 * Version 0.5.0
 */
export const R0_5_0 = release({
  owner: "trame",
  version: "0.5.0",
  date: "2026-11-28",
  what: "The page, Trame's before: its HTML, SVG and CSS, its syntax and figures, its look, its words, its shell and scripts, Page (given its program by the command, read back by std's reader), its style sheets read beside the library, the graph packed; its program, the component PageApp, offered: each project assembles it for its environment of a browser with the browser's realizations, which the library offers",
  fingerprint: "6548a54818c5140a",
  language: "shared",
  serves: [RenderedOnce, ShownInAPage],
})
