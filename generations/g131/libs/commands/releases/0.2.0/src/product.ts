/** Commands · Product */

import { goal } from "#trame/kinds/goal"

// What the library is for (E3, decided 23 November): the commands every project runs at a terminal (what a build would
// change, a view, a build, a shipment) are written once, on std's ports of the engine, with Trame's algorithms; a
// project takes those it runs by a choice of its own, and specializes them by composition, never by a copy.

/**
 * Commands every project runs, written once
 * What a project asks of its graph at a terminal is a command written once here, on std's ports of the engine, which
 * each project chooses: it works with the graph as freely as the engine's own commands did, and changes with a version
 * of the library.
 */
export const WrittenOnce = goal({ owner: "trame" })
