// The commands of a program run in the engine that imports it (E3, since g119): they are offered to the engine, which
// runs the one its command line names, in its own process. Run alone, the program finds no engine: it runs nothing.

import { runningEngine } from "#trame/kernel"
import type { BodyOf } from "#trame/kernel"
import type { CommandsInTheEngine } from "../../tooling"

const body: BodyOf<typeof CommandsInTheEngine> = ({ exit }) => ({
  async serve(routes) {
    const engine = runningEngine()
    if (!engine) return { code: exit.failure }
    engine.offer(routes)
    return {}
  },
})

export default body
