// Exiting throws an error instead of stopping the process: the scenario that ran the command fails, and its report
// shows this error's message, with the last lines the engine printed.

import type { BodyOf } from "../../../trame/kernel"
import type { MemoryTerminal } from "../../platform"

const body: BodyOf<typeof MemoryTerminal> = ({ kept, sequences, messages }) => {
  const lines: string[] = []
  return {
    args: [],
    write: (line) => void lines.push(line),
    writeRaw: (text) => void lines.push(text),
    error: (line) => void lines.push(line),
    exit: (code) => {
      throw new Error(messages.engineExited(code, sequences.takeLast(lines, kept)))
    },
    lines: () => [...lines],
  }
}

export default body
