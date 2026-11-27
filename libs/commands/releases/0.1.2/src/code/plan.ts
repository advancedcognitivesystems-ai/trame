// trame plan: what a build would change, written nowhere. The project at hand, compiled by the engine at the day its
// line says, against graph.json, the last build (the comparison is the function "Two builds compared").

import type { BodyOf } from "#trame/kernel"
import type { Plan } from "../commands"
import type { Build } from "./comparison"

const body: BodyOf<typeof Plan> = ({ project, files, comparison, lines, say, exit, counts }) => async () => {
  const compiled = await project.compiled()
  const { graph } = project.layout()
  if (!files.exists(graph)) return { status: exit.success, body: [say.planNothingBuilt(graph)] }
  const before = JSON.parse(files.read(graph)) as Build
  const now = JSON.parse(compiled.written()) as Build
  const plan = comparison.compare(before, now)
  const said = comparison.lines(plan, before, now)
  const heading = say.planHeading(plan.since, compiled.today, {
    added: plan.added.length, removed: plan.removed.length, statuses: plan.statuses.length, changed: plan.changed.length,
    raised: plan.raised.length, resolved: plan.resolved.length,
  })
  const last = counts.any(said) ? say.planShipments(comparison.shipments(plan, before, now)) : say.planNothing()
  return { status: exit.success, body: [heading, ...said.map((l) => lines.indent + l), last] }
}

export default body
