// The page's script and its stylesheet are kept next to the engine's code.

import { fileURLToPath } from "node:url"
import type { BodyOf } from "../../../trame/kernel"
import type { PageResources } from "../../platform"

const body: BodyOf<typeof PageResources> = ({ files }) => ({
  script: fileURLToPath(new URL(files.pageScript, import.meta.url)),
  style: fileURLToPath(new URL(files.pageStyle, import.meta.url)),
})

export default body
