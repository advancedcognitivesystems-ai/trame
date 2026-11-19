// trame view <view> [node|module]

import type { Handler } from "../../../kinds/entry-point"
import type { Api as PreparationApi } from "./preparation"
import type { Api as RenderViewApi } from "./render-view"

export interface Deps {
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  preparation: PreparationApi
  renderView: RenderViewApi
}

const body = (deps: Deps): Handler => async (req) => {
  const o = deps.preparation.options(req.params.command, (req.body as { args: string[] }).args)
  const [view, target] = o.args
  await deps.renderView.view(o, view, target)
  return { status: deps.exitStatus.success, body: undefined }
}

export default body
