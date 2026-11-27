// A project judges harder than the language, never softer (C4, since g112). For each of the project's problems, its way
// of judging (the realization of std's Hardening a binding chooses where its build evaluates) answers a severity: a
// harder one is kept, with the one the language gave; the same changes nothing. A way that would lower a problem, that
// answers what is no severity, or that fails, is a problem of the project's judgment: the language's severity stays.

import { HoleCode, Severity } from "../../../trame/kernel"
import type { ProvidedBy } from "../../../trame/kernel"
import type { SeverityOrder } from "../../product"
import type { CompilerMessages } from "../../messages"

export interface Deps {
  severityOrder: ProvidedBy<typeof SeverityOrder>
  messages: ProvidedBy<typeof CompilerMessages>
}

/** A problem as the engine holds it: its severity, by its code; the severity the language gave it, once raised. */
export interface Judged {
  severity: Severity
  code?: string
  raisedFrom?: Severity
}

/** A way of judging, as a project's graph realizes it: the severity it gives a problem. */
export interface Judge {
  severityOf(problem: { code: string; severity: Severity; kind?: string; module?: string }): unknown
}

/** A problem of the project's judgment: what went wrong, by its code. */
export interface Misjudged {
  code: HoleCode
  what: string
}

const body = ({ severityOrder, messages }: Deps) => {
  const severities = new Set<unknown>(Object.values(Severity))
  return <P extends Judged>(problems: readonly P[], judge: Judge, placeOf: (p: P) => { kind?: string; module?: string }): Misjudged[] => {
    const out: Misjudged[] = []
    for (const p of problems) {
      if (p.code === undefined) continue
      let asked: unknown
      try {
        asked = judge.severityOf({ code: p.code, severity: p.severity, ...placeOf(p) })
      } catch (e) {
        out.push({ code: HoleCode.hardeningFailed, what: messages.hardeningFailed(e instanceof Error ? e.message : String(e)) })
        break
      }
      if (!severities.has(asked)) {
        out.push({ code: HoleCode.hardeningFailed, what: messages.hardeningGaveNoSeverity(p.code, String(asked)) })
        continue
      }
      const severity = asked as Severity
      if (severityOrder(severity) > severityOrder(p.severity)) {
        out.push({ code: HoleCode.hardeningLowers, what: messages.hardeningLowers(p.code, p.severity, severity) })
      } else if (severity !== p.severity) {
        p.raisedFrom = p.severity
        p.severity = severity
      }
    }
    return out
  }
}

export type Api = ReturnType<typeof body>
export default body
