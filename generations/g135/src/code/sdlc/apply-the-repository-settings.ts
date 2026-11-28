// Sets Trame's repository on GitHub as the graph decides, with the rights of whoever runs it (an administrator of the
// repository), then reads it back and compares: it succeeds when the repository holds every part of the settings, and
// fails saying the call GitHub refused, or each part that still differs.

import type { BodyOf } from "../../../trame/kernel"
import type { ApplyTheRepositorySettings } from "../../sdlc"

const body: BodyOf<typeof ApplyTheRepositorySettings> = ({ repository, name, settings, compared, say, exit, counts }) => async () => {
  const refused = await repository.apply(name.name, settings)
  if (refused !== undefined) return { status: exit.failure, body: [say.callRefused(refused)] }
  const state = await repository.read(name.name, settings.branch, settings.pages)
  if (state === undefined) return { status: exit.failure, body: [say.unreadable(name.name)] }
  const differences = compared(settings, state)
  return counts.isEmpty(differences)
    ? { status: exit.success, body: [say.set(name.name)] }
    : {
      status: exit.failure,
      body: [say.notAsDecided(name.name), ...differences.map((d) => say.differs(d.part, JSON.stringify(d.decided) ?? say.nothing(), JSON.stringify(d.found) ?? say.nothing()))],
    }
}

export default body
