// Node, recent enough: the major of the version that runs, at least the one the project's decisions need.

import type { BodyOf } from "#trame/kernel"
import type { NodeRecentEnough } from "../machine"

const body: BodyOf<typeof NodeRecentEnough> = ({ settings, versioning, words }) => ({
  ask: async () => {
    const { node: least } = settings.required()
    const version = process.versions.node
    const [major] = version.split(versioning.separator)
    const holds = Number(major) >= least
    return { holds, says: holds ? words.nodeSupported(version, least) : words.nodeTooOld(version, least) }
  },
})

export default body
