// The project at hand, on a machine: the one the engine prepared to find the command (since g124). Read when the
// command asks, not when the program is imported: the engine runs with the API of each command it runs.

import { runningEngine } from "#trame/kernel"
import type { BodyOf, EngineApi } from "#trame/kernel"
import type { ProjectInTheEngine } from "../../engine"

const body: BodyOf<typeof ProjectInTheEngine> = ({ say }) => {
  const api = (): EngineApi => {
    const engine = runningEngine()
    if (!engine) throw new Error(say.noEngine())
    return engine.api
  }
  return {
    layout: () => api().layout,
    page: () => api().page(),
    program: () => api().program,
    compiled: async () => {
      const prepared = api().prepared()
      if (!prepared) throw new Error(say.nothingPrepared())
      return prepared
    },
  }
}

export default body
