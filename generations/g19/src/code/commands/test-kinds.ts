// trame test-kinds: the laws of kinds and views, and the imports.

import type { ProvidedBy } from "../../../trame/kernel"
import type { Handler } from "../../../kinds/entry-point"
import type { Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { Api as PreparationApi } from "./preparation"
import type { Api as CompilerApi } from "../engine/compiler"
import type { Api as ViewsApi } from "../engine/views"
import type { Api as LawsApi } from "../engine/laws"

export interface Deps {
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  preparation: PreparationApi
  compiler: CompilerApi
  views: ViewsApi
  laws: LawsApi
  terminal: Terminal
  messages: ProvidedBy<typeof CommandMessages>
}

const body = (deps: Deps): Handler => {
  const { options, prepare, printLaws, pad } = deps.preparation
  const { loadKinds } = deps.compiler
  const { loadViews, checkViewDecls, runViews, sortedViews } = deps.views
  const { checkImports, checkKinds } = deps.laws
  const { terminal, messages } = deps
  return async (req) => {
    const o = options(req.params.command, (req.body as { args: string[] }).args)
    await loadKinds(o.root)
    await loadViews(o.root)
    const imports = checkImports(o.root)
    terminal.write(messages.importsChecked(imports.length))
    for (const i of imports) terminal.write("  " + messages.importFailed(i))
    const failed = printLaws(checkKinds(o.today), true)
    if (failed.length || imports.length) return { status: deps.exitStatus.failure, body: undefined }
    const decls = checkViewDecls()
    const { comp } = await prepare(o)
    const { failures } = runViews(comp)
    const viewFailures = [...decls, ...failures]
    terminal.write(messages.viewLaws(sortedViews().length, o.today))
    for (const v of sortedViews()) {
      const mine = viewFailures.filter((f) => f.view === v.name)
      terminal.write("  " + pad(v.name, 14) + (mine.length ? messages.viewLawsFailed(mine) : messages.lawsHold()))
    }
    return { status: viewFailures.length ? deps.exitStatus.failure : deps.exitStatus.success, body: undefined }
  }
}

export default body
