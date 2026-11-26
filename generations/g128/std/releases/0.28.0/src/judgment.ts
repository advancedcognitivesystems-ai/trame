/** Standard library · Judgment */

import { code, HoleCode, Severity } from "#trame/kernel"
import { structure, type Draw } from "#trame/kinds/structure"
import { port } from "#trame/kinds/port"
import { fn } from "#trame/kinds/function"
import { adr } from "#trame/kinds/adr"
import { SharedOperations, RealizedOnce } from "./product"
import type { Judge } from "./code/judgment/raising"

// How a project judges harder than the language (C4, std 0.21.0): the language judges each problem with a severity, by
// its code; a project may raise it, never lower it. The way it raises is a strategy: a realization of the port
// Hardening that a binding chooses where the project's build evaluates. The engine asks it for each problem, keeps the
// harder of the two severities, and says when a way would have lowered one. In E3, this module joins the library of the
// judgment, whose version the engine runs.

export type { Judge, Problem } from "./code/judgment/raising"

/** The severities, for a law to draw one. */
const severities = [Severity.blocking, Severity.error, Severity.warning]
const drawSeverity = (d: Draw) => severities[d.natural() % severities.length]

/**
 * Raising
 * The ways of judging harder than the language: nothing raised, every warning an error, the warnings of the codes a
 * project lists made errors; and the harder of two severities. A project's strategy is one of them, with what it
 * lists.
 */
export const Raising = structure({
  owner: "trame",
  serves: [SharedOperations],
  operations: code.file<typeof import("./code/judgment/raising").default>("./code/judgment/raising.ts"),
  laws: [
    {
      says: "Each way raises a problem or leaves it, never lowers it",
      holds: (r, d) => {
        const severity = drawSeverity(d)
        const problem = { code: d.text(), severity }
        return [r.asTheLanguageSays, r.everyWarning, r.codes([problem.code]), r.codes([])].every((j) => r.atLeast(j.severityOf(problem), severity))
      },
    },
    {
      says: "As the language says changes nothing",
      holds: (r, d) => {
        const severity = drawSeverity(d)
        return r.asTheLanguageSays.severityOf({ code: d.text(), severity }) === severity
      },
    },
    {
      says: "Every warning becomes an error; an error and a blocking problem stay as they are",
      holds: (r, d) => {
        const code = d.text()
        return r.everyWarning.severityOf({ code, severity: Severity.warning }) === Severity.error &&
          r.everyWarning.severityOf({ code, severity: Severity.error }) === Severity.error &&
          r.everyWarning.severityOf({ code, severity: Severity.blocking }) === Severity.blocking
      },
    },
    {
      says: "Raising codes makes the warnings of those codes errors, and leaves the others",
      holds: (r, d) => {
        const listed = d.text()
        const other = listed + d.text() + HoleCode.ownerMissing
        const judge = r.codes([listed])
        return judge.severityOf({ code: listed, severity: Severity.warning }) === Severity.error &&
          judge.severityOf({ code: other, severity: Severity.warning }) === Severity.warning
      },
    },
    {
      says: "The harder of two severities is one of them, at least as serious as both",
      holds: (r, d) => {
        const [a, b] = [drawSeverity(d), drawSeverity(d)]
        const h = r.harder(a, b)
        return (h === a || h === b) && r.atLeast(h, a) && r.atLeast(h, b) && r.harder(a, b) === r.harder(b, a)
      },
    },
  ],
})

/**
 * Hardening
 * How a project judges the problems the language raises: the severity it gives each one, by its code, its kind, its
 * module. The engine asks the realization a binding chooses where the project's build evaluates; without one, each
 * problem is as the language judged it.
 */
export const Hardening = port<Judge>({ owner: "trame", declaredEffects: [] })

/**
 * As the language says
 * Nothing raised: each problem as the language judged it. A project chooses it to say so where its build evaluates.
 */
export const AsTheLanguageSays = fn({
  owner: "trame", implements: [Hardening], serves: [RealizedOnce],
  deps: { raising: Raising },
  body: ({ raising }) => raising.asTheLanguageSays,
})

/**
 * Every warning an error
 * A project that leaves nothing to watch: every warning the language raises is an error, which stops what assembles and
 * delivers as any error does.
 */
export const EveryWarning = fn({
  owner: "trame", implements: [Hardening], serves: [RealizedOnce],
  deps: { raising: Raising },
  body: ({ raising }) => raising.everyWarning,
})

/**
 * A project judges harder than the language, never softer
 * A project raises the problems the language judges (a warning it will not leave, by its code), by a strategy of its
 * own; the engine keeps the harder severity whatever the strategy answers.
 */
export const HarderNeverSofter = adr({
  owner: "trame",
  context: "The language judges every project alike; a project that wants no missing owner, or no warning at all, has no way to say so, and a way to lower a problem would let it hide what the language guarantees.",
  consequences: "A project chooses a realization of Hardening by a binding where its build evaluates: AsTheLanguageSays, EveryWarning, or one of its own built on Raising (the codes it lists in a decision of its own); the engine keeps the harder of the two severities, and a way that would lower one is an error of the project (hardening-lowers).",
  rejected: {
    "A decision the engine reads": "one way only, the codes listed; a project that wants every warning raised, or to raise by kind, would wait for the engine",
    "A rule of std, Raised": "a broken rule is one error for all, not each problem raised where it is, with its owner",
  },
  serves: [RealizedOnce],
  appliedBy: [Raising, Hardening, AsTheLanguageSays, EveryWarning],
})
