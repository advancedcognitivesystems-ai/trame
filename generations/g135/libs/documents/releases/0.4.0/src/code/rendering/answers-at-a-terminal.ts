// Documents at a terminal: a format of std's answers, each document printed in the syntax of the terminal.

import type { ProvidedBy } from "#trame/kernel"
import type { AnswerFormat } from "#std/tooling"
import type { MediaTypes } from "#std/web"
import type { Api as Renderer } from "./document"

export interface Deps {
  word: string
  printed: Renderer
  media: ProvidedBy<typeof MediaTypes>
}

const body = ({ word, printed, media }: Deps): AnswerFormat => ({
  word,
  media: media.plain,
  write: async ({ documents }) => documents.map((d) => printed.render(d)),
})

export default body
