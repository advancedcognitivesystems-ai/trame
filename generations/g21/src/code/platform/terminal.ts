// Node's terminal. A cut output ("| head") stops quietly; a forgotten promise does not bring the engine down.

import type { BodyOf } from "../../../trame/kernel"
import type { NodeTerminal } from "../../platform"

const body: BodyOf<typeof NodeTerminal> = ({ argv, exitStatus, messages }) => {
  process.on("unhandledRejection", (e) => console.error(messages.unhandledRejection(String((e as Error)?.message ?? e))))
  process.stdout.on("error", (e: NodeJS.ErrnoException) => {
    if (e.code === "EPIPE") process.exit(exitStatus.success)
    throw e
  })
  return {
    args: process.argv.slice(argv.firstArgument),
    write: (line) => console.log(line),
    writeRaw: (text) => void process.stdout.write(text),
    error: (line) => console.error(line),
    exit: (code) => process.exit(code),
  }
}

export default body
