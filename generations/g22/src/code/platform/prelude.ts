// The prelude: the language's internal module, shared with the kinds and the views (same file, same registry).

import * as internal from "#trame/internal"
import { fileURLToPath } from "node:url"
import { realpathSync } from "node:fs"
import type { BodyOf } from "../../../trame/kernel"
import type { TramePrelude } from "../../platform"

// The real path: a frozen generation of the engine (generations/gN) reaches the shared prelude through a link.
// The path is that of the module, without its extension: the program imports it so.
const body: BodyOf<typeof TramePrelude> = ({ texts }) => ({
  internal,
  path: texts.without(realpathSync(fileURLToPath(new URL("../../../trame/internal.ts", import.meta.url))), /\.ts$/),
})

export default body
