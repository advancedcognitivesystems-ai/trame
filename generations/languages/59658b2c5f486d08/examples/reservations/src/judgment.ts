/** Reservations · Judgment */

import { HoleCode, Severity } from "#trame/kernel"
import { decision } from "#trame/kinds/decision"
import { fn } from "#trame/kinds/function"
import { binding } from "#trame/kinds/binding"
import { scenario } from "#trame/kinds/scenario"
import { Hardening, Raising } from "#std/judgment"
import { Strategy } from "#std/patterns"
import { Test } from "./infra"
import { catalog } from "#trame/kinds/catalog"
import { Language } from "./messages"
import { CancelWithoutStress } from "./cancellation"

// How the service judges harder than the language (C4): what the language leaves as a point to watch, the service will
// not leave. Its build raises the warnings of the codes it lists to errors, which stop what assembles and delivers.

/**
 * The problems the service will not leave
 * A node nobody answers for, a requirement nobody can check, an architecture decision nothing applies: each would be a
 * warning; the service makes it an error.
 */
export const CodesWeRaise = decision<{ codes: string[] }>({
  owner: "karim",
  value: { codes: [HoleCode.ownerMissing, HoleCode.requirementWithoutCriteria, HoleCode.adrNotApplied] },
  rejected: {
    "Every warning an error": "a check awaited, a review awaited, an assumption to check are work in progress, not mistakes: the service would never ship",
    "As the language says": "a requirement without criteria would ship as a wish",
  },
})

/**
 * Judged our way
 * The warnings of the codes the service raises are errors; the rest as the language judges it.
 */
export const OurJudgment = fn({
  owner: "karim", implements: [Hardening], serves: [CancelWithoutStress],
  deps: { raising: Raising, raised: CodesWeRaise },
  body: ({ raising, raised }) => raising.codes(raised.codes),
})

/**
 * How the service is judged
 * Where its build evaluates, the service judges its own way.
 */
export const JudgedOurWay = binding({
  owner: "karim",
  chooses: [OurJudgment],
  environments: [Test],
  follows: [Strategy],
  context: "The build of the service evaluates in Test: its way of judging applies there, to the whole graph.",
})

/**
 * What the scenario of the judgment checks
 */
export const JudgmentChecks = catalog({
  owner: "lea",
  language: Language,
  messages: () => ({
    raisedOurWay: () => "A node without an owner is an error, an assumption to check a warning",
  }),
})

/**
 * The service's problems judged
 * A node without an owner, a warning, becomes an error; an assumption to check stays a warning.
 */
export const OurJudgmentApplied = scenario({
  owner: "karim",
  verifies: [OurJudgment],
  env: Test,
  deps: { judge: Hardening, checks: JudgmentChecks },
  body: ({ judge, checks }) => async (check) => {
    check(checks.raisedOurWay(), judge.severityOf({ code: HoleCode.ownerMissing, severity: Severity.warning }) === Severity.error &&
      judge.severityOf({ code: HoleCode.assumptionToCheck, severity: Severity.warning }) === Severity.warning)
  },
})
