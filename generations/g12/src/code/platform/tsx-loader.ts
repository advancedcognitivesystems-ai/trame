import { pathToFileURL } from "node:url"
import type { BodyOf } from "../../../trame/kernel"
import type { TsxLoader } from "../../platform"

const body: BodyOf<typeof TsxLoader> = () => ({
  import: async (file) => (await import(pathToFileURL(file).href)) as Record<string, unknown>,
})

export default body
