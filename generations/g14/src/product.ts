/** Trame · Product */

import { Severity } from "../trame/kernel"
import { goal } from "../kinds/goal"
import { decision } from "../kinds/decision"
import { requirement } from "../kinds/requirement"
import { acceptance } from "../kinds/acceptance"

/**
 * A specification that runs
 * A product's graph is written in code, checks itself, renders into documents, and produces the code that realises it.
 */
export const ExecutableSpecification = goal()

/**
 * A single source of truth
 * A value is decided once, in the graph; code, documents and infrastructure read it from there.
 */
export const SingleSource = goal()

/**
 * Sort problems by severity
 * What blocks first, then the errors, then what must be watched.
 */
export const SeverityOrder = requirement({
  refines: [ExecutableSpecification],
  rule: (severity: Severity): number => (severity === Severity.blocking ? 0 : severity === Severity.error ? 1 : 2),
})

/** Criteria of the sort by severity */
export const SeverityOrderCriteria = acceptance({
  accepts: SeverityOrder,
  owner: "trame",
  criteria: (criterion) => {
    criterion("A blocking hole comes before an error", () => SeverityOrder(Severity.blocking) < SeverityOrder(Severity.error))
    criterion("An error comes before a warning", () => SeverityOrder(Severity.error) < SeverityOrder(Severity.warning))
  },
})

/**
 * Nodes drawn per kind
 * How many nodes drawn at random to test the laws of a kind.
 */
export const SampleCount = decision<number>({ owner: "trame", value: 50, range: [10, 500] })

/**
 * Claim sets
 * How many sets of claims to test the resolution of a kind, each presented in several orders.
 */
export const ClaimSets = decision<number>({ owner: "trame", value: 30, range: [5, 200] })

/**
 * Owners drawn at random
 * The names that the laws give to the nodes they make. Neutral: they are the people of no project.
 */
export const SampledOwners = decision<string[]>({ owner: "trame", value: ["person-a", "person-b"] })

/**
 * Candidate dates
 * The dates at which the page offers to see the graph: each start, each deadline, the day after each end, and the day
 * before the first change (to see the graph from before). The offsets are in days.
 */
export const CandidateDates = decision<{ afterAnEnd: number; beforeTheFirstChange: number }>({
  owner: "trame",
  value: { afterAnEnd: 1, beforeTheFirstChange: -1 },
})

/**
 * Port of trame dev
 */
export const DevPort = decision<number>({ owner: "trame", value: 4170 })

/**
 * Debouncing of saves
 * In trame dev, saves close together trigger a single recompilation. In milliseconds.
 */
export const DevDebounce = decision<number>({ owner: "trame", value: 150, range: [50, 2000] })
