// Exiting throws an error instead of stopping the process: the scenario that ran the command fails, and its report
// shows this error's message, with the last lines the engine printed. A scenario types the arguments the next command
// line reads.

import type { BodyOf } from "../../../trame/kernel"
import type { MemoryTerminal } from "../../platform"

const body: BodyOf<typeof MemoryTerminal> = ({ kept, sequences, messages }) => {
  const lines: string[] = []
  const terminal = {
    args: [] as string[],
    write: (line: string) => void lines.push(line),
    writeRaw: (text: string) => void lines.push(text),
    error: (line: string) => void lines.push(line),
    exit: (code: number): never => {
      throw new Error(messages.engineExited(code, sequences.takeLast(lines, kept)))
    },
    lines: () => [...lines],
    type: (args: readonly string[]) => {
      terminal.args = [...args]
    },
  }
  return terminal
}

export default body
