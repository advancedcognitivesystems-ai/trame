// trame dev: the page, recompiled at each save.

import type { Handler } from "../../../kinds/entry-point"
import type { Api as PreparationApi } from "./preparation"
import type { Api as DevServerApi } from "../engine/dev-server"

export interface Deps {
  preparation: PreparationApi
  devServer: DevServerApi
}

const body = (deps: Deps): Handler => async (req) => {
  const o = deps.preparation.options(req.params.command, (req.body as { args: string[] }).args)
  await deps.devServer.startDev(o.root, o.today, o.port)
  // The server stays open: no exit status.
  return { body: undefined }
}

export default body
