// trame build: the documents of the project at hand written for people, its graph for tools and agents. The engine
// runs the views (the language's) at the day the line says; each document a view writes as a file is written in the
// syntax of files, with where each card is; graph.json and snapshot.json as the engine gives them; the summary printed
// in the syntax of the terminal; then the files written, named.

import { ViewGroup } from "#trame/kernel"
import type { BodyOf } from "#trame/kernel"
import type { Build } from "../commands"

const body: BodyOf<typeof Build> = ({ project, files, written, printed, say, exit }) => async () => {
  const compiled = await project.compiled()
  const { graph, snapshot } = project.layout()
  const { documents, places } = await compiled.documents()
  const named: string[] = []
  for (const d of documents) {
    if (d.file === undefined) continue
    files.write(d.file, written.render(d, places))
    named.push(d.file)
  }
  files.write(graph, compiled.written())
  files.write(snapshot, compiled.snapshot())
  const summaries = documents.filter((d) => d.group === ViewGroup.summary).map((d) => printed.render(d))
  return { status: exit.success, body: [...summaries, say.written([...named, graph, snapshot])] }
}

export default body
