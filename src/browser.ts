/** Trame · The page in a browser */

import { binding } from "../kinds/binding"
import { adr } from "../kinds/adr"
import { Browser } from "./architecture"
import { BrowserLoading } from "#std/platform"
import { Adapter } from "#std/patterns"
import { ExecutableSpecification, ReplaceableTechnology } from "./product"
import { BrowserWindow, BrowserMemory, BrowserFeed, BrowserAmendments, BrowserDecompression, ThePageIsAssembled } from "#documents/browser"

// The page Trame writes is libs/documents' program (since documents 0.5.0), which Trame assembles for its environment
// Browser, with the browser's realizations the library offers.

/**
 * The browser runs the page
 * In the browser, the page loads, writes in its window, keeps the person's place, receives the graph and makes it whole
 * again with what every browser has: the DOM, local storage, fetch and server-sent events, DecompressionStream.
 */
export const TheBrowserRunsThePage = binding({
  owner: "trame",
  chooses: [BrowserLoading, BrowserWindow, BrowserMemory, BrowserFeed, BrowserAmendments, BrowserDecompression],
  environments: [Browser],
  follows: [Adapter],
  serves: [ReplaceableTechnology],
  context: "The page's script took what it needed from the browser itself, here and there: the graph could not say what the page asks of the browser, nor try it elsewhere.",
  consequences: "The browser's globals appear only in these implementations; the entry point and the explorer are bodies like any other, and their values are the graph's.",
  rejected: {
    "A framework for the page": "a dependency, and its own way of writing the page, for a page that writes HTML strings and listens to a few events",
    "Libraries for storage and decompression": "every browser the page targets has local storage and gzip",
  },
})

/**
 * Trame's page, assembled
 * Trame assembles the library's page for its environment Browser, as the command line for a machine.
 */
export const OurPageAssembled = adr({
  owner: "trame",
  context: "The page's program is libs/documents' component, which names no environment: a project assembles it where it chooses the browser's realizations.",
  consequences: "Trame's environment Browser chooses the library's realizations; the page's program is assembled there with the engine, and bundled for every page the engine writes.",
  rejected: { "Realizations of Trame's own": "the browser's are what every project's page needs, written once" },
  serves: [ExecutableSpecification],
  adopts: [ThePageIsAssembled],
  appliedBy: [TheBrowserRunsThePage],
})
