// Any other command: the name of a view (`trame impact FreeCancellationPeriod`, `trame why …`).

import type { ProvidedBy } from "../../../trame/kernel"
import type { Handler } from "../../../kinds/entry-point"
import type { Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { Api as PreparationApi } from "./preparation"
import type { Api as RenderViewApi } from "./render-view"
import type { Api as CompilerApi } from "../engine/compiler"
import type { Api as ViewsApi } from "../engine/views"

export interface Deps {
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  preparation: PreparationApi
  renderView: RenderViewApi
  compiler: CompilerApi
  views: ViewsApi
  terminal: Terminal
  messages: ProvidedBy<typeof CommandMessages>
}

const body = (deps: Deps): Handler => async (req) => {
  const o = deps.preparation.options(req.params.command, (req.body as { args: string[] }).args)
  await deps.compiler.loadKinds(o.root)
  await deps.views.loadViews(o.root)
  const names = deps.views.sortedViews().map((v) => v.name)
  if (names.includes(o.command)) {
    await deps.renderView.view(o, o.command, o.args[0])
    return { status: deps.exitStatus.success, body: undefined }
  }
  const commands = (req.params.commands ?? "").split(" ").filter(Boolean)
  deps.terminal.error(deps.messages.unknownCommandOrView(o.command, commands, names))
  return { status: deps.exitStatus.failure, body: undefined }
}

export default body
