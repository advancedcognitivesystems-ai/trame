/** Team · Product */

import { goal } from "#trame/kinds/goal"

// What the library is for (C4). Every node of a project names its owner, a role names its people, a piece of evidence
// names who gave it: each is a text, and each must name someone the graph declares. The people who work on Trame's
// repository are declared here once, as actors, and every project of the repository imports them.

/**
 * Who acts is declared once
 * The people, the agents and the machines that work on Trame's repository are actors of a graph, declared once for
 * every project of the repository: an owner, a role's people, a piece of evidence name one of them, or the graph says
 * so.
 */
export const DeclaredOnce = goal({ owner: "trame" })
