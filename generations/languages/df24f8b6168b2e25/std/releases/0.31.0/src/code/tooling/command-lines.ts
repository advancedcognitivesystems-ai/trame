// What std's exposures do with each command (std 0.31.0): its line read by what it declares, refused when it lacks an
// argument or names an option nobody declares; the command given its arguments and options by name, its line as typed
// without std's options; then, when it answers documents, its answer written in the format the line names, the first
// the project chose when it names none.

import { TriggerType } from "#trame/kernel"
import type { ProvidedBy } from "#trame/kernel"
import type { Route } from "#trame/kinds/component"
import type { Counts, Sequences, ValueTypes } from "../../algebra"
import type { ExitStatus } from "../../system"
import type { AnswerFormat, DocumentsAnswer, LineWords, LongOptions, StandardOptions } from "../../tooling"
import type { Api as LineReading } from "./command-line"

export interface Deps {
  read: LineReading
  formats: readonly AnswerFormat[]
  long: ProvidedBy<typeof LongOptions>
  standard: ProvidedBy<typeof StandardOptions>
  exit: ProvidedBy<typeof ExitStatus>
  values: ProvidedBy<typeof ValueTypes>
  sequences: ProvidedBy<typeof Sequences>
  counts: ProvidedBy<typeof Counts>
  say: ProvidedBy<typeof LineWords>
}

const body = ({ read, formats, long, standard, exit, values, sequences, say }: Deps) => {
  /** An answer of documents, which a format writes: their list, and where each card is when a format asks. */
  const isDocuments = (body: unknown): body is DocumentsAnswer =>
    values.isObject(body) && Array.isArray((body as Partial<DocumentsAnswer>).documents)

  const route = (r: Route): Route => r.trigger.type !== TriggerType.command ? r : {
    ...r,
    handler: async (req) => {
      const typed = (req.body as { args?: readonly string[] } | undefined)?.args ?? []
      const line = read(r.trigger, typed)
      if (line.missing !== undefined) return { status: exit.failure, body: [say.argumentMissing(r.name, line.missing)] }
      if (line.unknown !== undefined) return { status: exit.failure, body: [say.optionUnknown(r.name, long.prefix + line.unknown)] }
      const answer = await r.handler({ ...req, body: { args: line.args, arguments: line.arguments, options: line.options } })
      if (!isDocuments(answer.body)) return answer
      const asked = line.standard[standard.format.name]
      const format = values.isText(asked) ? formats.find((f) => f.word === asked) : sequences.head(formats)
      if (!format) {
        return { status: exit.failure, body: [values.isText(asked) ? say.formatUnknown(asked, formats.map((f) => f.word)) : say.formatNone()] }
      }
      return { status: answer.status, body: await format.write(answer.body) }
    },
  }

  return { route }
}

export type Api = ReturnType<typeof body>
export default body
