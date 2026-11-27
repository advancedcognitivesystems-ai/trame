// The command line: the first argument chooses the command (build by default, or when the first argument is an option).
// An unknown command goes to the "*" command, if there is one (in Trame: a view, or a command of the project). A
// command the engine does not keep goes there first too (since g119): the project's own, chosen or written, replaces
// the engine's of the same name; when the project has none, the "*" command answers no status, and the engine's runs.

import { TriggerType } from "../../../trame/kernel"
import type { BodyOf } from "../../../trame/kernel"
import type { NodeCommandLine } from "../../platform"

const body: BodyOf<typeof NodeCommandLine> = ({ terminal, exitStatus, line, kept, messages }) => ({
  async serve(routes) {
    const [first, ...rest] = terminal.args
    const [name, args] = first === undefined || first.startsWith(line.optionPrefix) ? [line.build, terminal.args] : [first, rest]
    const command = (n: string) => routes.find((r) => r.trigger.type === TriggerType.command && r.trigger.name === n)
    const own = command(name)
    const fallback = command(line.fallback)
    // The "*" route also receives the names of the other commands (to say which ones exist).
    const others = routes.flatMap((r) => (r.trigger.type === TriggerType.command && r.trigger.name !== line.fallback ? [r.trigger.name] : []))
    const commands = others.join(line.separator)
    if (own && (kept.includes(name) || !fallback)) {
      const response = await own.handler({ params: { command: name, commands }, body: { args } })
      return response.status === undefined ? {} : { code: response.status }
    }
    if (!fallback) {
      terminal.error(messages.unknownCommand(name))
      return { code: exitStatus.failure }
    }
    // A command of the engine the project may replace: the project is asked first, the engine's answers otherwise.
    const asked = await fallback.handler({ params: { command: name, commands, ...(own ? { builtIn: name } : {}) }, body: { args } })
    if (own && asked.status === undefined) {
      const response = await own.handler({ params: { command: name, commands }, body: { args } })
      return response.status === undefined ? {} : { code: response.status }
    }
    return asked.status === undefined ? {} : { code: asked.status }
  },
})

export default body
