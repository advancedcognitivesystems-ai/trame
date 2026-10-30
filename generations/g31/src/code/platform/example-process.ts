import { resolve } from "node:path"
import type { BodyOf } from "../../../trame/kernel"
import type { ExampleProcess } from "../../platform"

const body: BodyOf<typeof ExampleProcess> = ({ root, messages }) => {
  const none = (): never => {
    throw new Error(messages.noProcessInTest())
  }
  return {
    cwd: () => resolve(root),
    env: {},
    relaunch: none,
    runTs: none,
    onSignal: () => undefined,
  }
}

export default body
