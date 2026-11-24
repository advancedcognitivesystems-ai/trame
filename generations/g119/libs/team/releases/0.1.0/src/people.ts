/** Team · People */

import { ActorSort } from "#trame/kernel"
import { actor } from "#trame/kinds/actor"
import { DeclaredOnce } from "./product"

// Who works on Trame's repository (C4): a person, an agent that acts for people, a machine that runs what they start,
// and the team they make, which owns most of the repository's nodes.

/**
 * ghalaax
 * The person who leads Trame and owns its repository on GitHub.
 */
export const Ghalaax = actor({ owner: "ghalaax", handle: "ghalaax", sort: ActorSort.person, identities: { github: "ghalaax" }, serves: [DeclaredOnce] })

/**
 * Claude
 * An agent, Anthropic's model, who writes Trame with ghalaax and gives the evidence of what it runs, in its own name.
 */
export const Claude = actor({ owner: "ghalaax", handle: "claude", sort: ActorSort.agent, serves: [DeclaredOnce] })

/**
 * The runner of GitHub Actions
 * The machine GitHub starts for a workflow of the repository: it ships what the workflow runs, for whoever started it.
 */
export const GitHubRunner = actor({ owner: "ghalaax", handle: "github-actions", sort: ActorSort.machine, identities: { github: "github-actions[bot]" }, serves: [DeclaredOnce] })

/**
 * Trame's team
 * The people who write Trame together: the owner of the nodes of the engine, the language and the libraries.
 */
export const Trame = actor({ owner: "ghalaax", handle: "trame", sort: ActorSort.team, members: [Ghalaax, Claude], serves: [DeclaredOnce] })
