import type { BodyOf } from "../../../trame/kernel"
import type { ExampleProcess } from "../../platform"

const body: BodyOf<typeof ExampleProcess> = ({ root, paths, messages }) => {
  const none = (): never => {
    throw new Error(messages.noProcessInTest())
  }
  return {
    cwd: () => paths.resolve(root),
    env: {},
    relaunch: none,
    runTs: none,
    onSignal: () => undefined,
  }
}

export default body
