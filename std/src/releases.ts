/** Standard library · Releases */

// Written by trame release at each version, from the releases already here and the one it freezes: do not edit. A
// release's own record is written after its sources are copied, so it is not in its own copy.

import { release } from "#trame/kinds/release"
import { CitedNotCopied, KnownDesigns, RealizedOnce, SharedOperations, SharedRules } from "./product"

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

/**
 * Version 0.2.0
 */
export const R0_2_0 = release({
  owner: "trame",
  version: "0.2.0",
  date: "2026-10-26",
  what: "The device's services as ports: preferences, the device's languages, a voice, the screen kept awake, with the browser's realizations and, for scenarios, realizations kept in memory; the Screen Wake Lock API",
  fingerprint: "29b96f4135a8d58c",
  language: "shared",
  serves: [CitedNotCopied, KnownDesigns, RealizedOnce, SharedOperations],
})

/**
 * Version 0.3.0
 */
export const R0_3_0 = release({
  owner: "trame",
  version: "0.3.0",
  date: "2026-10-26",
  what: "HTML and CSS: the HTML, WAI-ARIA, SVG and CSS standards move here from Trame, with the elements a page is made of (headings, header, main, footer, nav)",
  fingerprint: "f69c88114c3c885d",
  language: "shared",
  serves: [CitedNotCopied, KnownDesigns, RealizedOnce, SharedOperations],
})

/**
 * Version 0.4.0
 */
export const R0_4_0 = release({
  owner: "trame",
  version: "0.4.0",
  date: "2026-10-26",
  what: "The frames of the screen as a port (AnimationFrames, with the browser's and, for scenarios, frames turned by hand), what a voice said and whether the screen is kept awake for scenarios, the SVG namespace and the pointer-down event",
  fingerprint: "9bc7811c6e6acfe9",
  language: "shared",
  serves: [CitedNotCopied, KnownDesigns, RealizedOnce, SharedOperations],
})

/**
 * Version 0.5.0
 */
export const R0_5_0 = release({
  owner: "trame",
  version: "0.5.0",
  date: "2026-10-26",
  what: "Seeded draws: a number, an integer between bounds, an element by its weight, the same from the same seed",
  fingerprint: "c0645b631e7479b5",
  language: "shared",
  serves: [CitedNotCopied, KnownDesigns, RealizedOnce, SharedOperations],
})

/**
 * Version 0.6.0
 */
export const R0_6_0 = release({
  owner: "trame",
  version: "0.6.0",
  date: "2026-10-26",
  what: "The voice says whether the device can speak, and picks a voice of the language asked (Chrome on Android); language tags",
  fingerprint: "040d790c0122ef2a",
  language: "shared",
  serves: [CitedNotCopied, KnownDesigns, RealizedOnce, SharedOperations],
})

/**
 * Version 0.7.0
 */
export const R0_7_0 = release({
  owner: "trame",
  version: "0.7.0",
  date: "2026-10-26",
  what: "The voice keeps what it last failed with; Web Speech and Web Audio standards",
  fingerprint: "88ea655c5914f2ee",
  language: "shared",
  serves: [CitedNotCopied, KnownDesigns, RealizedOnce, SharedOperations],
})

/**
 * Version 0.8.0
 */
export const R0_8_0 = release({
  owner: "trame",
  version: "0.8.0",
  date: "2026-10-27",
  what: "Rules a project applies with their parameters (Reaches, NeverReaches, Linked, WithoutEffects, WordsOf); the SDLC's tooling: program commands, project files, a headless browser, each for a machine and in memory; class selectors in CSS",
  fingerprint: "07a1e5e13baf675b",
  language: "shared",
  serves: [CitedNotCopied, KnownDesigns, RealizedOnce, SharedOperations, SharedRules],
})

/**
 * Version 0.9.0
 */
export const R0_9_0 = release({
  owner: "trame",
  version: "0.9.0",
  date: "2026-10-28",
  what: "The vocabulary Directions for the way a rule follows an edge; what Playwright asks once installed (its Chromium), for the plan of a run elsewhere; the current directory of POSIX",
  fingerprint: "bb918531117eb046",
  language: "shared",
  serves: [CitedNotCopied, KnownDesigns, RealizedOnce, SharedOperations, SharedRules],
})

/**
 * Version 0.10.0
 */
export const R0_10_0 = release({
  owner: "trame",
  version: "0.10.0",
  date: "2026-10-28",
  what: "Obligations: the families of what a shipment must prove, derived from what it reaches (Verified, Served, Applied, Reviewed, Checked and the vocabulary CheckWays, Ruled, Safe), each with acceptance criteria",
  fingerprint: "ee326c1d4ec718a5",
  language: "shared",
  serves: [CitedNotCopied, KnownDesigns, RealizedOnce, SharedOperations, SharedRules],
})

/**
 * Version 0.11.0
 */
export const R0_11_0 = release({
  owner: "trame",
  version: "0.11.0",
  date: "2026-10-29",
  what: "Scenarios of its own: an environment Test where it plays what it offers, its realizations kept in memory chosen there, and three scenarios (the seeded draws, the device in memory, the tooling in memory); a check whose program verifies reached code is an obligation of Verified and closes its gap; a page chooses an option of a list (BrowserPage.choose, Playwright's selectOption, recorded in memory); the CSS id selector, the hunk and range separator of unified differences, fs.watch's change event",
  fingerprint: "1b784454ac5ba502",
  language: "shared",
  serves: [CitedNotCopied, KnownDesigns, RealizedOnce, SharedOperations, SharedRules],
})

/**
 * Version 0.11.1
 */
export const R0_11_1 = release({
  owner: "trame",
  version: "0.11.1",
  date: "2026-10-29",
  what: "Verified obliges only what a machine runs: the scenarios and the checks a program runs; a check made by hand is the family Checked's business, and leaves the gap of what it alone verifies",
  fingerprint: "e2b6550a84f52c8b",
  language: "shared",
  serves: [CitedNotCopied, KnownDesigns, RealizedOnce, SharedOperations, SharedRules],
})

/**
 * Version 0.12.0
 */
export const R0_12_0 = release({
  owner: "trame",
  version: "0.12.0",
  date: "2026-11-01",
  what: "The language named by its names (#trame/kernel, #trame/kinds/*), the rules written as bodies (g79), the quantities Time and Ratio (g80), what the platform may do and typed commands (module effects, g83–g84), where a package comes from (PackageSources, g87)",
  fingerprint: "644a5f0395a97522",
  language: "shared",
  serves: [CitedNotCopied, KnownDesigns, RealizedOnce, SharedOperations, SharedRules],
})

/**
 * Version 0.13.0
 */
export const R0_13_0 = release({
  owner: "trame",
  version: "0.13.0",
  date: "2026-11-01",
  what: "Where a package comes from publishes too, and names its origins (PackageOrigins: by its path, from a registry); node:module's registerHooks in the table of the platform",
  fingerprint: "a2c76173f7693d92",
  language: "shared",
  serves: [CitedNotCopied, KnownDesigns, RealizedOnce, SharedOperations, SharedRules],
})

/**
 * Version 0.14.0
 */
export const R0_14_0 = release({
  owner: "trame",
  version: "0.14.0",
  date: "2026-11-03",
  what: "Time counts milliseconds too, and the bodies that met JavaScript's clocks receive Time instead of the prelude's ms and elapsed",
  fingerprint: "b82c816013d69bed",
  language: "shared",
  serves: [CitedNotCopied, KnownDesigns, RealizedOnce, SharedOperations, SharedRules],
})
