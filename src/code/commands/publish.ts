// trame publish: the current declarations enter trame.lock and no longer change.

import type { ProvidedBy } from "../../../trame/kernel"
import type { Handler } from "../../../kinds/entry-point"
import type { FileWriting, Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { Api as PreparationApi } from "./preparation"
import type { Api as LockApi } from "../engine/lock"
import type { Texts } from "#std/algebra"
import type { PaddedCell, TerminalColumns, TerminalText } from "../../text"

export interface Deps {
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  preparation: PreparationApi
  lock: LockApi
  writing: FileWriting
  terminal: Terminal
  layout: ProvidedBy<typeof TerminalText>
  columns: ProvidedBy<typeof TerminalColumns>
  cell: ProvidedBy<typeof PaddedCell>
  texts: ProvidedBy<typeof Texts>
  messages: ProvidedBy<typeof CommandMessages>
}

const body = (deps: Deps): Handler => async (req) => {
  const { options, prepare, refuse } = deps.preparation
  const { cell, messages } = deps
  const { space, indent } = deps.layout
  const { widths } = deps.columns
  const { empty, concat, optional } = deps.texts
  /** A line with nothing on it, between the refused declarations and the reason. */
  const blankLine = empty
  const o = options(req.params.command, (req.body as { args: string[] }).args)
  const { c } = await prepare(o)
  const { added, migrated, refused, file, text } = deps.lock.publish(c, o.root, o.migrate === undefined ? undefined : { at: o.today, why: o.migrate })
  if (refused.length) {
    refuse(o, [...refused.map((d) => concat([cell(d.severity, widths.severity), optional(d.where), space, d.what])), blankLine, messages.publicationRefused()])
  }
  if (file && text !== undefined) deps.writing.writeFileSync(file, text)
  if (migrated.length) deps.terminal.write(messages.publishedAgain(migrated.length))
  for (const ref of migrated) deps.terminal.write(indent + ref)
  deps.terminal.write(added.length ? messages.published(added.length) : messages.nothingToPublish())
  for (const ref of added) deps.terminal.write(indent + ref)
  return { status: deps.exitStatus.success, body: [...migrated, ...added] }
}

export default body
