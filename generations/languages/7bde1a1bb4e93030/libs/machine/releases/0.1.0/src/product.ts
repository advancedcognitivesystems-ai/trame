/** Machine · Product */

import { goal } from "#trame/kinds/goal"

// What the library is for (E3): trame doctor asks the machine what the engine needs to run, then what the project's
// add-ons ask. What every project may ask of its machine, and belongs to no provider (the system, Node's version, Git),
// is written here once; what each project requires is its own decision, which the questions read.

/**
 * The machine is asked once
 * What a project needs of the machine it runs on, and that no provider of the graph brings (the system, Node's version,
 * Git), is asked by questions written once, which read what each project requires from its own decisions: trame doctor
 * asks them, and a check proves them.
 */
export const AskedOnce = goal({ owner: "trame" })
