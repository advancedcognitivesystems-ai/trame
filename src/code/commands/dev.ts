// trame dev: the page, recompiled at each save. The page may amend a chosen value (since g86): the amendment is prepared
// as trame amend prepares it, then recorded where the project's amendments go, unless it is refused or only previewed;
// the server, which watches the sources, recompiles and pushes the page again.

import type { Handler } from "../../../kinds/entry-point"
import type { AmendmentPlace, Paths } from "../../architecture"
import type { Api as PreparationApi } from "./preparation"
import type { Api as DevServerApi } from "../engine/dev-server"
import type { Api as AmendingApi, AmendmentAsked } from "./amending"

export interface Deps {
  preparation: PreparationApi
  devServer: DevServerApi
  amending: AmendingApi
  place: AmendmentPlace
  paths: Paths
}

const body = (deps: Deps): Handler => async (req) => {
  const o = deps.preparation.options(req.params.command, (req.body as { args: string[] }).args)
  /** An amendment the page posts: prepared, then recorded unless refused or only previewed. */
  const amend = async (asked: unknown) => {
    const a = asked as AmendmentAsked & { dryRun?: boolean }
    const prepared = await deps.amending.prepareAmendment(o, a)
    if (prepared.refused !== undefined || !prepared.record || a.dryRun) return prepared
    const recorded = deps.place.record(prepared.record)
    return { ...prepared, file: deps.paths.relative(o.root, recorded.file) }
  }
  await deps.devServer.startDev(o.root, o.today, o.port, amend)
  // The server stays open: no exit status.
  return { body: undefined }
}

export default body
