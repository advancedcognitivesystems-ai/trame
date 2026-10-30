// trame export: a standalone page, the graph compiled at each candidate date, without dependencies.

import type { ProvidedBy } from "../../../trame/kernel"
import type { Handler } from "../../../kinds/entry-point"
import type { FileWriting, Layout, Paths, Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { Api as PreparationApi } from "./preparation"
import type { Api as DateBundleApi } from "../engine/date-bundle"
import type { Api as PageApi } from "../engine/page"

export interface Deps {
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  layout: Layout
  preparation: PreparationApi
  bundle: DateBundleApi
  page: PageApi
  writing: FileWriting
  paths: Paths
  terminal: Terminal
  messages: ProvidedBy<typeof CommandMessages>
}

const body = (deps: Deps): Handler => async (req) => {
  const { options, refuse } = deps.preparation
  const o = options(req.params.command, (req.body as { args: string[] }).args)
  const file = o.args[0] ?? deps.layout.page
  const bundle = await deps.bundle.makeBundle(o.root, o.today, "export")
  if (bundle.error) refuse(o, [bundle.error])
  deps.writing.writeFileSync(deps.paths.resolve(o.root, file), await deps.page.pageHtml(o.root, { bundle, fragment: o.fragment }))
  deps.terminal.write(deps.messages.exported(bundle.dates.length, file))
  return { status: deps.exitStatus.success, body: file }
}

export default body
