// trame assemble <component> --env <environment>: writes the frozen program and its infrastructure.

import type { ProvidedBy } from "../../../trame/kernel"
import type { Handler } from "../../../kinds/entry-point"
import type { FileWriting, Paths, Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { Api as PreparationApi } from "./preparation"
import type { Api as AssemblerApi } from "./assembler"

export interface Deps {
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  preparation: PreparationApi
  assembler: AssemblerApi
  writing: FileWriting
  paths: Paths
  terminal: Terminal
  messages: ProvidedBy<typeof CommandMessages>
}

const body = (deps: Deps): Handler => async (req) => {
  const o = deps.preparation.options(req.params.command, (req.body as { args: string[] }).args)
  const { files, steps } = await deps.assembler.assemble(o)
  for (const f of files) {
    deps.writing.mkdirSync(deps.paths.dirname(f.path), { recursive: true })
    deps.writing.writeFileSync(f.path, f.content)
  }
  const written = files.map((f) => f.path)
  deps.terminal.write(deps.messages.assembled(steps, written.map((f) => f.replace(o.root + "/", ""))))
  return { status: deps.exitStatus.success, body: written[0] }
}

export default body
