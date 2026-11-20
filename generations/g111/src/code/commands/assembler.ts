// The program of a component for an environment (and its infrastructure), ready to write. Refuses a graph that has errors.
// This node writes nothing: the command writes (rule "Only commands write").

import { DateRole, Severity, addDays, type ProvidedBy } from "../../../trame/kernel"
import type { CommandMessages } from "../../messages"
import type { Api as PreparationApi, Ctx, Options } from "./preparation"
import type { Api as AssemblyApi, Assembly, Emitted, Period } from "../engine/assembly"
import type { Counts, Texts } from "#std/algebra"
import type { TerminalText } from "../../text"
import type { Punctuation } from "../../documents"

export interface Deps {
  preparation: PreparationApi
  assembly: AssemblyApi
  messages: ProvidedBy<typeof CommandMessages>
  layout: ProvidedBy<typeof TerminalText>
  punctuation: ProvidedBy<typeof Punctuation>
  texts: ProvidedBy<typeof Texts>
  counts: ProvidedBy<typeof Counts>
}

const body = (deps: Deps) => {
  const { concat, optional } = deps.texts
  const { indent } = deps.layout
  const { parts } = deps.punctuation
  const { prepare, refuse, at } = deps.preparation
  const { prepareAssembly, stepSignature, reaches, emitAssembly } = deps.assembly
  const { messages } = deps

  /**
   * A component prepared for an environment, with the periods of its program (since g106): the days after the
   * assembly when an amendment that reaches what it runs starts, or ends (the day after its last). The graph is compiled
   * at each of those days, and a day that changes nothing in the program is left out; then compiled again at the day of
   * the assembly, which the command goes on with.
   */
  async function prepared(o: Options, { c, comp }: Ctx, componentRef: string, envRef: string): Promise<{ assembly?: Assembly; errors: string[] }> {
    const first = prepareAssembly(c, o.root, componentRef, envRef)
    const a = first.assembly
    if (!a) return first
    const days = [...new Set(comp.dates().flatMap((d) => {
      const day = d.role === DateRole.end ? addDays(d.date, deps.counts.one) : d.role === DateRole.start ? d.date : undefined
      return day !== undefined && day > c.today && reaches(a, d.node.node) ? [day] : []
    }))].sort()
    if (!days.length) return first
    const periods: Period[] = []
    try {
      let previous = a
      for (const day of days) {
        const then = await at(o, day)
        const { assembly: x, errors } = prepareAssembly(then.c, o.root, componentRef, envRef)
        if (!x) return { errors: errors.map((e) => messages.onDay(day, e)) }
        const same = x.plan.steps.length === previous.plan.steps.length &&
          x.plan.steps.every((s, i) => stepSignature(x, s) === stepSignature(previous, previous.plan.steps[i]))
        if (same) continue
        periods.push({ from: day, assembly: x })
        previous = x
      }
    } finally {
      await at(o, c.today)
    }
    return { assembly: { ...a, periods }, errors: [] }
  }

  /** Always frozen: the program carries the values of the graph, it does not compile the graph when it starts. */
  async function assemble(o: Options): Promise<{ files: Emitted[]; steps: number }> {
    const { c, comp } = await prepare(o)
    const [name] = o.args
    if (!name || !o.envName) refuse(o, [messages.assembleUsage(o.command)])
    const errors = c.diags.filter((d) => d.severity === Severity.error)
    if (errors.length) {
      refuse(o, [messages.assemblyRefusedForErrors(errors.length), ...errors.map((d) => concat([indent, d.node ? c.graph.view(d.node).ref : optional(d.module), parts, d.what]))])
    }
    const { assembly: a, errors: refused } = await prepared(o, { c, comp }, name!, o.envName!)
    if (!a) return refuse(o, [messages.assemblyRefused(), ...refused.map((e) => indent + e)])
    const { files, errors: emitErrors } = emitAssembly(a)
    if (emitErrors.length) refuse(o, emitErrors)
    return { files, steps: a.plan.steps.length }
  }

  return { assemble, prepared }
}

export type Api = ReturnType<typeof body>
export default body
