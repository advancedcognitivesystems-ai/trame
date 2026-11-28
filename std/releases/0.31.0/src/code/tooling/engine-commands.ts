// The commands of a program run in the engine that imports it (E3, since g119): they are offered to the engine, which
// runs the one its command line names, in its own process, each one's line read and its answer written by std's
// command lines (std 0.31.0). Run alone, the program finds no engine: it runs nothing.

import { runningEngine } from "#trame/kernel"
import type { BodyOf } from "#trame/kernel"
import type { CommandsInTheEngine } from "../../tooling"

const body: BodyOf<typeof CommandsInTheEngine> = ({ exit, lines }) => ({
  async serve(routes) {
    const engine = runningEngine()
    if (!engine) return { code: exit.failure }
    // Each command's line read by what it declares, its answer of documents written in the format the line names.
    engine.offer(routes.map(lines.route))
    return {}
  },
})

export default body
