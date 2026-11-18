/** Data · Product */

import { goal } from "#trame/kinds/goal"

/**
 * Data described once
 * The data a product keeps outside the graph, from one version to the next (a person's breath on a device, the
 * reservations of a database), is described once, in the graph: its type, its names, the form it is stored in, how what
 * is stored is read, and how it migrates when the description changes, all come from that description.
 */
export const DataDescribedOnce = goal({ owner: "trame" })
