// trame snapshot: snapshot.json, and the snapshot's documents if a view produces some.

import type { ProvidedBy } from "../../../trame/kernel"
import type { Handler } from "../../../kinds/entry-point"
import type { FileWriting, Layout, Paths, Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { Api as PreparationApi } from "./preparation"
import type { Api as MachineApi } from "../engine/machine"
import type { Api as RenderingApi } from "../rendering/document"
import { DocumentName } from "../../../trame/kernel"

export interface Deps {
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  layout: Layout
  preparation: PreparationApi
  machine: MachineApi
  /** The renderer of the documents written as files. */
  files: RenderingApi
  writing: FileWriting
  paths: Paths
  terminal: Terminal
  messages: ProvidedBy<typeof CommandMessages>
}

/** The view whose documents are part of the snapshot. */
const SNAPSHOT_VIEW = DocumentName.snapshot

const body = (deps: Deps): Handler => async (req) => {
  const { options, prepare, views, renderingContext } = deps.preparation
  const { join } = deps.paths
  const o = options(req.params.command, (req.body as { args: string[] }).args)
  const { c, comp } = await prepare(o)
  const docs = views(o, comp)
  deps.writing.writeFileSync(join(o.root, deps.layout.snapshot), deps.machine.snapshotJson(c))
  const written = [deps.layout.snapshot]
  for (const d of docs.filter((x) => x.view === SNAPSHOT_VIEW && x.file)) {
    deps.writing.writeFileSync(join(o.root, d.file!), deps.files.render(d, renderingContext(docs)))
    written.push(d.file!)
  }
  deps.terminal.write(deps.messages.snapshotTaken(o.today, written))
  return { status: deps.exitStatus.success, body: written }
}

export default body
