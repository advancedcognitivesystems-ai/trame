// trame build: checks, writes docs/ in Markdown, graph.json and snapshot.json, shows the summary.

import { ViewGroup, type ProvidedBy } from "../../../trame/kernel"
import type { Handler } from "../../../kinds/entry-point"
import type { FileWriting, Layout, Paths, Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { Api as PreparationApi } from "./preparation"
import type { Api as MachineApi } from "../engine/machine"
import type { Api as RenderingApi } from "../rendering/document"

export interface Deps {
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  layout: Layout
  preparation: PreparationApi
  machine: MachineApi
  /** The renderer of the documents written as files. */
  files: RenderingApi
  /** The renderer of what the terminal shows. */
  screen: RenderingApi
  writing: FileWriting
  paths: Paths
  terminal: Terminal
  messages: ProvidedBy<typeof CommandMessages>
}

const body = (deps: Deps): Handler => {
  const { options, prepare, views, renderingContext } = deps.preparation
  const { graphJson, snapshotJson } = deps.machine
  const { writeFileSync, mkdirSync } = deps.writing
  const { join } = deps.paths
  return async (req) => {
    const o = options(req.params.command, (req.body as { args: string[] }).args)
    const { c, comp } = await prepare(o)
    const docs = views(o, comp)
    const ctx = renderingContext(docs)
    const layout = deps.layout
    mkdirSync(join(o.root, layout.documents), { recursive: true })
    const written: string[] = []
    for (const d of docs.filter((x) => x.file)) {
      writeFileSync(join(o.root, d.file!), deps.files.render(d, ctx))
      written.push(d.file!)
    }
    writeFileSync(join(o.root, layout.graph), graphJson(c))
    writeFileSync(join(o.root, layout.snapshot), snapshotJson(c))
    written.push(layout.graph, layout.snapshot)
    for (const d of docs.filter((x) => x.group === ViewGroup.summary)) deps.terminal.write(deps.screen.render(d))
    deps.terminal.write(deps.messages.written(written))
    return { status: deps.exitStatus.success, body: written }
  }
}

export default body
