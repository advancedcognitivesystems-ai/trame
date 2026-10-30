// The page's script and its stylesheet are kept next to the engine's code.

import { fileURLToPath } from "node:url"
import type { BodyOf } from "../../../trame/kernel"
import type { PageResources } from "../../platform"

const body: BodyOf<typeof PageResources> = () => ({
  script: fileURLToPath(new URL("../page/main.ts", import.meta.url)),
  style: fileURLToPath(new URL("../page/page.css", import.meta.url)),
})

export default body
