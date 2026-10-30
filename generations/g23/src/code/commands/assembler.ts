// The program of a component for an environment (and its infrastructure), ready to write. Refuses a graph that has errors.
// This node writes nothing: the command writes (rule "Only commands write").

import { DateRole, Severity, type ProvidedBy } from "../../../trame/kernel"
import type { CommandMessages } from "../../messages"
import type { Api as PreparationApi, Options } from "./preparation"
import type { Api as AssemblyApi, Emitted } from "../engine/assembly"
import type { Texts } from "../../algebra"

export interface Deps {
  preparation: PreparationApi
  assembly: AssemblyApi
  messages: ProvidedBy<typeof CommandMessages>
  texts: ProvidedBy<typeof Texts>
}

const body = (deps: Deps) => {
  const { optional } = deps.texts
  const { prepare, refuse } = deps.preparation
  const { prepareAssembly, emitAssembly } = deps.assembly
  const { messages } = deps

  /** Always frozen: the program carries the values of the graph, it does not compile the graph when it starts. */
  async function assemble(o: Options): Promise<{ files: Emitted[]; steps: number }> {
    const { c, comp } = await prepare(o)
    const [name] = o.args
    if (!name || !o.envName) refuse(o, [messages.assembleUsage(o.command)])
    const errors = c.diags.filter((d) => d.severity === Severity.error)
    if (errors.length) {
      refuse(o, [messages.assemblyRefusedForErrors(errors.length), ...errors.map((d) => `  ${d.node ? c.graph.view(d.node).ref : optional(d.module)} · ${d.what}`)])
    }
    // The dated changes the program will not see: "date (node)", in the order of the dates.
    const changes = comp.dates().filter((d) => d.date > c.today && (d.role === DateRole.start || d.role === DateRole.end))
      .map((d) => `${d.date} (${d.node.title})`)
    const a = prepareAssembly(c, o.root, name!, o.envName!, { changes: [...new Set(changes)].sort() })
    if ("errors" in a) return refuse(o, [messages.assemblyRefused(), ...a.errors.map((e) => `  ${e}`)])
    const { files, errors: emitErrors } = emitAssembly(a)
    if (emitErrors.length) refuse(o, emitErrors)
    return { files, steps: a.plan.steps.length }
  }

  return { assemble }
}

export type Api = ReturnType<typeof body>
export default body
