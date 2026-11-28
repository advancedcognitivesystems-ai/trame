// A language read by the engine that runs (since g128): its reader, given through its API, asked at each reading.

import { runningEngine } from "#trame/kernel"
import type { BodyOf, LanguageReader, TextReader } from "#trame/kernel"
import type { ReadByTheEngine } from "../../engine"

const body: BodyOf<typeof ReadByTheEngine> = ({ say }) => {
  const reader = (): LanguageReader & TextReader => {
    const engine = runningEngine()
    if (!engine) throw new Error(say.noEngine())
    return engine.api.reader
  }
  return {
    load: (language) => reader().load(language),
    example: (language, code) => reader().example(language, code),
    aside: (language) => reader().aside(language),
    readText: (language, text) => reader().readText(language, text),
  }
}

export default body
