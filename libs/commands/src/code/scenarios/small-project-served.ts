// The small project, served, in the scenarios of the page's commands: compiled once by the engine that plays them; its
// bundle holds the day of the line only, its payload made in this process (on a machine, a fresh process of the engine
// compiles every date); its watch follows nothing and says what it would; an amendment is refused; the page's program
// is a sample.

import { runningEngine } from "#trame/kernel"
import type { AmendmentAnswer, BodyOf, Bundle, BundleMode, CompiledProject, EngineApi } from "#trame/kernel"
import type { TheSmallProjectServed } from "../../scenarios"

const body: BodyOf<typeof TheSmallProjectServed> = ({ chosen, sample, say }) => {
  const api = (): EngineApi => {
    const engine = runningEngine()
    if (!engine) throw new Error(say.noEngine())
    return engine.api
  }
  const served = async (): Promise<CompiledProject> => {
    const c = await api().compile(chosen.root, chosen.today)
    const bundle = async (mode: BundleMode): Promise<Bundle> =>
      ({ generatedAt: sample.instant, today: c.today, mode, dates: [{ date: c.today, payload: await c.payload((await c.documents()).documents) }] })
    const amend = async (): Promise<AmendmentAnswer> => ({ refused: sample.refused, lines: [] })
    return { ...c, bundle, watch: () => sample.watched, amend }
  }
  let compiled: Promise<CompiledProject> | undefined
  return {
    layout: () => api().layout,
    compiled: () => (compiled ??= served()),
    page: async () => sample.script,
    program: () => sample.program,
  }
}

export default body
