// trame help: what may be typed here. The commands of the engine, as its command line names them; those of the project
// (E3, since g116), each with the entry point it runs and its component, and the engine's they replace (since g119);
// the views, which a word alone shows too.

import type { ProvidedBy } from "../../../trame/kernel"
import type { Handler } from "../../../kinds/entry-point"
import type { Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { Api as PreparationApi } from "./preparation"
import type { Api as ProjectCommandsApi } from "./project-commands"
import type { Api as ViewsApi } from "../engine/views"
import type { PaddedCell, TerminalColumns } from "../../text"

export interface Deps {
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  preparation: PreparationApi
  projectCommands: ProjectCommandsApi
  views: ViewsApi
  terminal: Terminal
  /** A name padded to the width of the longest, so that the titles line up. */
  cell: ProvidedBy<typeof PaddedCell>
  columns: ProvidedBy<typeof TerminalColumns>
  messages: ProvidedBy<typeof CommandMessages>
}

const body = (deps: Deps): Handler => async (req) => {
  const { messages, terminal } = deps
  const o = deps.preparation.options(req.params.command, (req.body as { args: string[] }).args, req.params.commands)
  const { c } = await deps.preparation.prepare(o)
  const own = deps.projectCommands.of(c).sort((a, b) => a.name.localeCompare(b.name))
  terminal.write(messages.helpEngine([...o.commands].sort()))
  terminal.write(messages.helpProject(own.length))
  // The longest name and its gap: every title starts in the same column.
  const width = Math.max(...own.map((x) => x.name.length)) + deps.columns.minimumGap
  for (const { name, entry, component } of own) terminal.write(messages.helpProjectCommand(deps.cell(name, width), entry.title, component.title))
  const replaced = own.map((x) => x.name).filter((name) => o.commands.includes(name))
  if (replaced.length) terminal.write(messages.helpReplaced(replaced))
  terminal.write(messages.helpViews(deps.views.sortedViews().map((v) => v.name)))
  return { status: deps.exitStatus.success, body: undefined }
}

export default body
