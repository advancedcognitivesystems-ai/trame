// trame snapshot: snapshot.json, the graph in force for agents, at the day the line says; then the documents of the
// snapshot's view, written in the syntax of files, and the files written, named.

import { DocumentName } from "#trame/kernel"
import type { BodyOf } from "#trame/kernel"
import type { Snapshot } from "../commands"

const body: BodyOf<typeof Snapshot> = ({ project, files, written, say, exit }) => async () => {
  const compiled = await project.compiled()
  const { snapshot } = project.layout()
  files.write(snapshot, compiled.snapshot())
  const { documents, places } = await compiled.documents()
  const named = [snapshot]
  for (const d of documents) {
    if (d.view !== DocumentName.snapshot || d.file === undefined) continue
    files.write(d.file, written.render(d, places))
    named.push(d.file)
  }
  return { status: exit.success, body: [say.snapshotTaken(compiled.today, named)] }
}

export default body
