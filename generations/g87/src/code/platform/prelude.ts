// The prelude: the language's internal module, shared with the kinds and the views (same file, same registry).

import * as internal from "#trame/internal"
import { fileURLToPath } from "node:url"
import { realpathSync } from "node:fs"
import { basename, dirname, join } from "node:path"
import type { BodyOf } from "../../../trame/kernel"
import type { TramePrelude } from "../../platform"

// The real path: a frozen generation of the engine (generations/gN) reaches the shared prelude through a link.
// The path is that of the module, without its extension: the program imports it so. The language is the directory
// that holds the prelude's: its kinds and its views are beside it.
const body: BodyOf<typeof TramePrelude> = ({ files }) => {
  const real = realpathSync(fileURLToPath(new URL(files.prelude + files.preludeExtension, import.meta.url)))
  return { internal, path: join(dirname(real), basename(real, files.preludeExtension)), root: dirname(dirname(real)) }
}

export default body
