// Reads Trame's repository on GitHub as it is and compares it with the settings the graph decides: it says whether the
// repository holds them, and each part it does not, with what was decided and what was found. It fails only when the
// repository cannot be read: what differs is said, and set by the shipment that applies the settings.

import type { BodyOf } from "../../../trame/kernel"
import type { ReadTheRepositorySettings } from "../../sdlc"

const body: BodyOf<typeof ReadTheRepositorySettings> = ({ repository, name, settings, compared, say, exit, counts }) => async () => {
  const state = await repository.read(name.name, settings.branch, settings.pages)
  if (state === undefined) return { status: exit.failure, body: [say.unreadable(name.name)] }
  const differences = compared(settings, state)
  return counts.isEmpty(differences)
    ? { status: exit.success, body: [say.asDecided(name.name)] }
    : {
      status: exit.success,
      body: [say.notAsDecided(name.name), ...differences.map((d) => say.differs(d.part, JSON.stringify(d.decided) ?? say.nothing(), JSON.stringify(d.found) ?? say.nothing()))],
    }
}

export default body
