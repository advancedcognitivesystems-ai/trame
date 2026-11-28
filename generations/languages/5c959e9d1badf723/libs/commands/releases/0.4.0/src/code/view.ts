// trame view <view> [node|module]: one view of the project at hand, at the day the line says. The engine runs it; the
// command answers its document, which std's exposure writes in the format the line names, with where each card is
// when that format links (computed only then); or why there is none, in the commands' words.

import type { BodyOf } from "#trame/kernel"
import type { CommandRequest } from "#trame/kinds/entry-point"
import type { View } from "../commands"

const body: BodyOf<typeof View> = ({ project, refused, exit }) => async (req) => {
  const { view, subject } = (req as CommandRequest).body?.arguments ?? {}
  const compiled = await project.compiled()
  const answer = await compiled.view(view ?? String(), subject)
  if (answer.refused !== undefined) return { status: exit.failure, body: [refused(answer)] }
  return { status: exit.success, body: { documents: [answer.document], places: async () => (await compiled.documents()).places } }
}

export default body
