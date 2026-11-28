// Documents in Markdown: a format of std's answers, each document in the syntax of files, its references leading where
// each card is when the answer says it.

import type { ProvidedBy } from "#trame/kernel"
import type { AnswerFormat } from "#std/tooling"
import type { MediaTypes } from "#std/web"
import type { Api as Renderer } from "./document"

export interface Deps {
  word: string
  written: Renderer
  media: ProvidedBy<typeof MediaTypes>
}

const body = ({ word, written, media }: Deps): AnswerFormat => ({
  word,
  media: media.markdown,
  write: async ({ documents, places }) => {
    const where = await places?.()
    return documents.map((d) => written.render(d, where))
  },
})

export default body
