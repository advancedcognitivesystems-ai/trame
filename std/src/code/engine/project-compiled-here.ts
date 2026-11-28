// The project at hand, in a scenario: the one the scenario names, compiled once by the engine that plays it (since
// g124), at the day it says.

import { runningEngine } from "#trame/kernel"
import type { BodyOf, CompiledProject, EngineApi } from "#trame/kernel"
import type { ProjectCompiledHere } from "../../engine"

const body: BodyOf<typeof ProjectCompiledHere> = ({ chosen, say }) => {
  const api = (): EngineApi => {
    const engine = runningEngine()
    if (!engine) throw new Error(say.noEngine())
    return engine.api
  }
  let compiled: Promise<CompiledProject> | undefined
  return {
    layout: () => api().layout,
    page: () => api().page(),
    program: () => api().program,
    compiled: () => (compiled ??= api().compile(chosen.root, chosen.today)),
  }
}

export default body
