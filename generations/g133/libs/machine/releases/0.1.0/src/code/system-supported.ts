// The system, one the project runs on: Node's name for it, among those the project's decisions list.

import { platform } from "node:os"
import type { BodyOf } from "#trame/kernel"
import type { SystemSupported } from "../machine"

const body: BodyOf<typeof SystemSupported> = ({ settings, words }) => ({
  ask: async () => {
    const { systems } = settings.required()
    const system = platform()
    const holds = systems.includes(system)
    return { holds, says: holds ? words.systemSupported(system) : words.systemUnsupported(system, systems) }
  },
})

export default body
