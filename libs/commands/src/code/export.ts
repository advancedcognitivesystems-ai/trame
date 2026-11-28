// trame export [file] [--fragment]: a page a browser opens as it is. The engine compiles the project at each date the
// page offers, its history too, in a fresh process; the page is libs/documents', its program the engine's, bundled; the
// graph is packed in it.

import { BundleMode } from "#trame/kernel"
import type { BodyOf } from "#trame/kernel"
import type { CommandRequest } from "#trame/kinds/entry-point"
import type { Export } from "../commands"

const body: BodyOf<typeof Export> = ({ project, files, page, packing, say, exit }) => async (req) => {
  const { arguments: given, options } = (req as CommandRequest).body ?? {}
  const compiled = await project.compiled()
  const bundle = await compiled.bundle(BundleMode.export)
  if (bundle.error !== undefined) return { status: exit.failure, body: [bundle.error] }
  const file = given?.file ?? project.layout().page
  files.write(file, await page.pageHtml({
    script: await project.page(), program: project.program(), packed: packing.pack(JSON.stringify(bundle)),
    fragment: options?.fragment !== undefined, project: compiled.title,
  }))
  return { status: exit.success, body: [say.exported(bundle.dates.length, file)] }
}

export default body
