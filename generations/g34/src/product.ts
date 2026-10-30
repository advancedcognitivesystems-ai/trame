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
 * A technology is changed in one node
 * The code that uses an abstraction never names what answers it: a technical choice does, in one node, with its
 * reasons. Replacing a technology is writing its realization and changing that choice.
 */
export const ReplaceableTechnology = goal()

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
 * Values drawn by the laws
 * The ranges, both ends included, from which the laws draw the values of the nodes they make up, and the shape of the
 * claim sets they present to a resolution. The ranges are small so that drawn values meet: equal numbers, overlapping
 * ranges, claims on the same path. A text, a map and the year of a date are always the same: a law only compares them.
 * A value drawn is a record of two parts (claims are made on the whole value and on each part), a number, or a value
 * to decide; the chances say how often each case comes: a number below the first, a record below the second. The nodes
 * the laws make have a module and names of their own, and the seed of the claims drawn for a kind follows its name.
 */
export const SampledValues = decision<{
  numbers: [number, number]
  minutes: [number, number]
  rangeStart: [number, number]
  rangeWidth: [number, number]
  claimantsPerSet: number
  claimsPerClaimant: [number, number]
  claimValues: [number, number]
  shuffledOrders: number
  year: number
  text: string
  map: Record<string, string>
  parts: [string, string]
  wholeValue: string
  chances: {
    number: number; record: number; undecidedPart: number; emptyPatch: number; patchNumber: number
    leftOut: number; undecided: number; linked: number; shuffle: number
  }
  names: { module: string; target: string; trial: string; seed: string }
}>({
  owner: "trame",
  value: {
    numbers: [0, 100],
    minutes: [1, 120],
    rangeStart: [0, 50],
    rangeWidth: [1, 50],
    claimantsPerSet: 3,
    claimsPerClaimant: [1, 2],
    claimValues: [0, 99],
    shuffledOrders: 3,
    year: 2026,
    text: "text",
    map: { x: "y" },
    parts: ["a", "b"],
    wholeValue: "value",
    chances: {
      number: 0.4, record: 0.8, undecidedPart: 0.5, emptyPatch: 0.2, patchNumber: 0.5,
      leftOut: 0.3, undecided: 0.15, linked: 0.4, shuffle: 0.5,
    },
    names: { module: "law", target: "Target", trial: "Trial", seed: ":resolve" },
  },
})

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
