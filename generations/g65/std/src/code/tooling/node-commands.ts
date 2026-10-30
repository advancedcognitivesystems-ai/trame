// The command line of a program of the SDLC, in Node: the first argument names the command, the others go to it; the
// lines of text it answers are written out; the status it answers is the program's.

import { TriggerType } from "../../../../trame/kernel"
import type { BodyOf } from "../../../../trame/kernel"
import type { NodeProgramCommands } from "../../tooling"

const body: BodyOf<typeof NodeProgramCommands> = ({ argv, exit, values }) => ({
  async serve(routes) {
    const [name, ...args] = process.argv.slice(argv.firstArgument)
    const route = routes.find((r) => r.trigger.type === TriggerType.command && r.trigger.name === name)
    if (!route) return { code: exit.failure }
    const response = await route.handler({ params: { command: name }, body: { args } })
    // What it answers, when it is lines of text, is written on the standard output.
    if (Array.isArray(response.body)) for (const line of response.body.filter(values.isText)) console.log(line)
    return { code: response.status ?? exit.success }
  },
})

export default body
