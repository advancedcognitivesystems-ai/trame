// The page's script and its style sheets are kept next to the engine's code.

import { fileURLToPath } from "node:url"
import type { BodyOf } from "../../../trame/kernel"
import type { PageResources } from "../../platform"

const body: BodyOf<typeof PageResources> = ({ files }) => ({
  script: fileURLToPath(new URL(files.pageScript, import.meta.url)),
  style: fileURLToPath(new URL(files.pageStyle, import.meta.url)),
  narrowStyle: fileURLToPath(new URL(files.narrowStyle, import.meta.url)),
})

export default body
