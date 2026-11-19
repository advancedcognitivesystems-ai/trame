// The command line: the first argument chooses the command (build by default, or when the first argument is an option).
// An unknown command goes to the "*" command, if there is one (in Trame: the name of a view).

import { TriggerType } from "../../../trame/kernel"
import type { BodyOf } from "../../../trame/kernel"
import type { NodeCommandLine } from "../../platform"

const body: BodyOf<typeof NodeCommandLine> = ({ terminal, exitStatus, line, messages }) => ({
  async serve(routes) {
    const [first, ...rest] = terminal.args
    const [name, args] = first === undefined || first.startsWith(line.optionPrefix) ? [line.build, terminal.args] : [first, rest]
    const command = (n: string) => routes.find((r) => r.trigger.type === TriggerType.command && r.trigger.name === n)
    const route = command(name) ?? command(line.fallback)
    if (!route) {
      terminal.error(messages.unknownCommand(name))
      return { code: exitStatus.failure }
    }
    // The "*" route also receives the names of the other commands (to say which ones exist).
    const others = routes.flatMap((r) => (r.trigger.type === TriggerType.command && r.trigger.name !== line.fallback ? [r.trigger.name] : []))
    const response = await route.handler({ params: { command: name, commands: others.join(line.separator) }, body: { args } })
    return response.status === undefined ? {} : { code: response.status }
  },
})

export default body
