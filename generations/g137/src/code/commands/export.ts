// trame export: a standalone page, the graph compiled at each candidate date, without dependencies.

import type { ProvidedBy } from "../../../trame/kernel"
import type { Handler } from "../../../kinds/entry-point"
import type { FileWriting, Layout, Paths, Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { Api as PreparationApi } from "./preparation"
import type { Api as DateBundleApi } from "../engine/date-bundle"
import type { Api as PageApi } from "#documents/code/page/page"
import type { Api as ScriptApi } from "../page/script"
import type { Packing } from "#documents/page"
import type { TrameCommands } from "../../conventions"
import type { Api as ProjectApi } from "../engine/project"
import { BundleMode } from "../../../trame/kernel"

export interface Deps {
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  layout: Layout
  preparation: PreparationApi
  bundle: DateBundleApi
  page: PageApi
  /** The page's program, bundled by the engine; how the graph it carries is packed; the program's name, which its brand writes. */
  script: ScriptApi
  packing: Packing
  line: ProvidedBy<typeof TrameCommands>
  project: ProjectApi
  writing: FileWriting
  paths: Paths
  terminal: Terminal
  messages: ProvidedBy<typeof CommandMessages>
}

const body = (deps: Deps): Handler => async (req) => {
  const { options, refuse } = deps.preparation
  const o = options(req.params.command, (req.body as { args: string[] }).args, req.params.commands)
  const [file = deps.layout.page] = o.args
  const bundle = await deps.bundle.makeBundle(o.root, o.today, BundleMode.export)
  if (bundle.error) refuse(o, [bundle.error])
  const page = await deps.preparation.asTheEngine(async () => deps.page.pageHtml({
    script: await deps.script.script(), program: deps.line.program, packed: deps.packing.pack(JSON.stringify(bundle)), fragment: o.fragment,
    project: deps.project.projectDirs(o.root).title,
  }))
  deps.writing.writeFileSync(deps.paths.resolve(o.root, file), page)
  deps.terminal.write(deps.messages.exported(bundle.dates.length, file))
  return { status: deps.exitStatus.success, body: file }
}

export default body
