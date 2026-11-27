/** A small project · Product */

// The project the library's scenarios compile (std's ProjectCompiledHere), as #commands/samples/small: a goal, the
// requirement that refines it, the decision it reads, and the person who owns them. It is never built: its graph is
// what the engine compiles of it.

import { ActorSort } from "#trame/kernel"
import { actor } from "#trame/kinds/actor"
import { goal } from "#trame/kinds/goal"
import { decision } from "#trame/kinds/decision"
import { requirement } from "#trame/kinds/requirement"

/**
 * Guests are welcome
 * Whoever comes is greeted, in their language.
 */
export const Welcome = goal({ owner: "ada" })

/**
 * Ada
 * Who owns the small project.
 */
export const Ada = actor({ owner: "ada", handle: "ada", sort: ActorSort.person, serves: [Welcome] })

/**
 * How long a greeting lasts
 * In seconds.
 */
export const GreetingLength = decision<number>({ owner: "ada", value: 3, rejected: { "Ten seconds": "guests wait" } })

/**
 * A greeting is short
 * A greeting lasts no longer than decided.
 */
export const ShortGreeting = requirement({
  owner: "ada",
  refines: [Welcome],
  deps: { length: GreetingLength },
  body: ({ length }) => (seconds: number): boolean => seconds <= length,
})
