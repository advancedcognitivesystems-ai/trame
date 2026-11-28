// A command's line, read by what the command declares (std 0.31.0). A word that does not begin a long option is an
// argument, in its place; an option is the long option of its name, followed by its value when it takes one; std's
// options (those of every command) are read apart and leave the line, whether the command declares its line or not.

import type { CommandOption, Trigger } from "#trame/kinds/entry-point"
import { TriggerType } from "#trame/kernel"
import type { ProvidedBy } from "#trame/kernel"
import type { Counts, Sequences } from "../../algebra"
import type { LineRead, LongOptions, StandardOptions } from "../../tooling"

export interface Deps {
  long: ProvidedBy<typeof LongOptions>
  standard: ProvidedBy<typeof StandardOptions>
  sequences: ProvidedBy<typeof Sequences>
  counts: ProvidedBy<typeof Counts>
}

const body = ({ long, standard, sequences, counts }: Deps) =>
  (trigger: Trigger, line: readonly string[]): LineRead => {
    const declared = trigger.type === TriggerType.command ? trigger : undefined
    const own = new Map<string, CommandOption>((declared?.options ?? []).map((o) => [o.name, o]))
    const everyCommand = new Map<string, CommandOption>(Object.values(standard).map((o) => [o.name, o]))
    const nameOf = (word: string) => (word.startsWith(long.prefix) ? word.slice(long.prefix.length) : undefined)
    const positional: string[] = []
    const args: string[] = []
    const options: Record<string, string | true> = {}
    const std: Record<string, string | true> = {}
    let unknown: string | undefined
    const rest = [...line]
    for (let word = sequences.head(rest); word !== undefined; word = sequences.head(rest)) {
      rest.shift()
      const name = nameOf(word)
      if (name === undefined) {
        positional.push(word)
        args.push(word)
        continue
      }
      const option = everyCommand.get(name) ?? own.get(name)
      if (!option) {
        unknown ??= name
        args.push(word)
        continue
      }
      const value = option.takes ? rest.shift() ?? true : true
      if (everyCommand.has(name)) {
        std[name] = value
        continue
      }
      options[name] = value
      args.push(word)
      if (option.takes && value !== true) args.push(value)
    }
    const wanted = declared?.arguments ?? []
    const given = Object.fromEntries(wanted.flatMap((a, i) => (positional[i] === undefined ? [] : [[a.name, positional[i]]])))
    const missing = wanted.find((a, i) => !a.optional && positional[i] === undefined)?.name
    return {
      arguments: given, options, standard: std, args,
      ...(missing === undefined ? {} : { missing }),
      ...(unknown === undefined || !counts.any([...own.keys(), ...wanted]) ? {} : { unknown }),
    }
  }

export type Api = ReturnType<typeof body>
export default body
