// Documents in JSON: as the intermediate format gives them, indented; a document alone is written alone, not in a list.

import type { ProvidedBy } from "#trame/kernel"
import type { Counts } from "../../algebra"
import type { MediaTypes } from "../../web"
import type { JsonFormatting } from "../../text"
import type { AnswerFormat } from "../../tooling"

export interface Deps {
  word: string
  media: ProvidedBy<typeof MediaTypes>
  json: ProvidedBy<typeof JsonFormatting>
  counts: ProvidedBy<typeof Counts>
}

const body = ({ word, media, json, counts }: Deps): AnswerFormat => ({
  word,
  media: media.json,
  write: async ({ documents }) => {
    const [only, ...more] = documents
    const written = only !== undefined && counts.isEmpty(more) ? only : documents
    return [JSON.stringify(written, undefined, json.indentation)]
  },
})

export default body
