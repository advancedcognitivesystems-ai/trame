// The command line of a program of the SDLC, in Node: the first argument names the command, the others go to it; the
// lines of text it answers are written out; the status it answers is the program's.

import { TriggerType } from "#trame/kernel"
import type { BodyOf } from "#trame/kernel"
import type { NodeProgramCommands } from "../../tooling"

const body: BodyOf<typeof NodeProgramCommands> = ({ argv, exit, values, lines }) => ({
  async serve(routes) {
    const [name, ...args] = process.argv.slice(argv.firstArgument)
    const route = routes.find((r) => r.trigger.type === TriggerType.command && r.trigger.name === name)
    if (!route) return { code: exit.failure }
    // Its line read by what it declares, its answer of documents written in the format the line names (std 0.31.0).
    const response = await lines.route(route).handler({ params: { command: name }, body: { args } })
    // What it answers, when it is lines of text, is written on the standard output.
    if (Array.isArray(response.body)) for (const line of response.body.filter(values.isText)) console.log(line)
    return { code: response.status ?? exit.success }
  },
})

export default body
