// The ways a project judges harder than the language (C4): each answers, for a problem the language judged, the
// severity the project gives it, never a softer one. As the language says; every warning an error; the warnings of the
// codes a project lists, errors. The engine keeps the harder of the two severities whatever a way answers: a way that
// would lower one is itself an error of the project.

import { Severity } from "#trame/kernel"

/** A problem as the language judged it: what is wrong (its code), how serious it is, and where. */
export interface Problem {
  readonly code: string
  readonly severity: Severity
  /** The kind of the node it is on, when it is on one. */
  readonly kind?: string
  /** The module it is in. */
  readonly module?: string
}

/** A way of judging: the severity a project gives a problem. */
export interface Judge {
  severityOf(problem: Problem): Severity
}

const body = () => {
  /** The severities from the most serious to the least, as the language orders them. */
  const order: readonly Severity[] = [Severity.blocking, Severity.error, Severity.warning]
  /** The more serious of two severities. */
  const harder = (a: Severity, b: Severity): Severity => (order.indexOf(a) <= order.indexOf(b) ? a : b)
  /** A warning made an error; anything else as it is. */
  const raised = (s: Severity): Severity => (s === Severity.warning ? Severity.error : s)
  return {
    harder,
    /** Whether the first severity is at least as serious as the second. */
    atLeast: (a: Severity, b: Severity): boolean => harder(a, b) === a,
    /** Nothing raised: each problem as the language judged it. */
    asTheLanguageSays: { severityOf: (p: Problem) => p.severity } as Judge,
    /** Every warning an error: a project that leaves nothing to watch. */
    everyWarning: { severityOf: (p: Problem) => raised(p.severity) } as Judge,
    /** The warnings of the codes listed made errors; the others as the language judged them. */
    codes: (listed: readonly string[]): Judge => ({ severityOf: (p: Problem) => (listed.includes(p.code) ? raised(p.severity) : p.severity) }),
  }
}

export default body
