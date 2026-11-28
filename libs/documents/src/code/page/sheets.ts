// The page's style sheets, read beside the code that reads them: in the library's sources, and in each of its
// versions, which carry them.

import { readFileSync } from "node:fs"
import type { BodyOf } from "#trame/kernel"
import type { SheetsBesideTheLibrary } from "../../page"

const body: BodyOf<typeof SheetsBesideTheLibrary> = ({ files, encodings }) => {
  const read = (file: string) => readFileSync(new URL(file, import.meta.url), encodings.utf8)
  return {
    style: () => read(files.style),
    narrow: () => read(files.narrow),
  }
}

export default body
