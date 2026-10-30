import type { BodyOf } from "../../../trame/kernel"
import type { MemoryWriting } from "../../platform"

const body: BodyOf<typeof MemoryWriting> = () => {
  const files = new Map<string, string>()
  return {
    writeFileSync: ((path: unknown, content: unknown) => void files.set(String(path), String(content))) as never,
    mkdirSync: (() => undefined) as never,
    files: () => files,
  }
}

export default body
