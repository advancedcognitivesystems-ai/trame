/** Commands · Commands */

import { TerminalText } from "#documents/text"
import { code, plurals } from "#trame/kernel"
import { component } from "#trame/kinds/component"
import { entryPoint, command } from "#trame/kinds/entry-point"
import { fn } from "#trame/kinds/function"
import { catalog } from "#trame/kinds/catalog"
import { decision } from "#trame/kinds/decision"
import { ProgramCommands, Files } from "#std/tooling"
import { TheProject } from "#std/engine"
import { Anyone } from "#std/access"
import { ExitStatus } from "#std/system"
import { Counts } from "#std/algebra"
import { WrittenOnce } from "./product"

// The commands every project runs (E3): each reaches the engine through std's ports (the project at hand, compiled at
// the day its line says), the files through std's Files, and says what it found in lines, which the program's exposure
// writes out. The engine keeps its own until the generation that removes them; a project that chooses one of these
// runs it instead (g119).

/**
 * The library's commands
 * The component whose entry points are the commands the library offers: a program's command line, whose first argument
 * names the command. It names no environment: a project assembles it where its choice holds, in the engine's process.
 */
export const Commands = component({
  owner: "trame",
  language: "typescript",
  deps: { exposure: ProgramCommands },
})

/**
 * The language the commands speak
 * British English, the language Trame's engine and its documents speak: what a command says sits beside what the
 * engine and the views say, at the same terminal.
 */
export const WordsLanguage = decision<{ tag: string }>({
  owner: "trame",
  value: { tag: "en-GB" },
  rejected: { "std's language of its commands": "a choice of std's, which may change for std's reasons" },
})

/**
 * What the commands say
 */
export const CommandWords = catalog({
  owner: "trame",
  language: WordsLanguage,
  deps: { language: WordsLanguage },
  messages: ({ language }) => {
    const plural = plurals(language.tag)
    return {
      /** An issue of the graph as a build writes it on a node: its severity, then what it says. */
      issue: (severity: string, what: string) => `${severity}: ${what}`,
      /** The first line: what changes, against the build of which date, compiled at which date. */
      planHeading: (since: string | undefined, today: string, n: { added: number; removed: number; statuses: number; changed: number; raised: number; resolved: number }) =>
        [
          "plan",
          `${n.added} added`, `${n.removed} removed`,
          plural(n.statuses, { one: "status changes", other: "statuses change" }),
          `${n.changed} otherwise changed`,
          plural(n.raised, { one: "issue raised", other: "issues raised" }),
          `${n.resolved} resolved`,
          `against the build of ${since ?? "an unknown date"}, compiled at ${today}`,
        ].join(" · "),
      planAdded: (title: string, kind: string | undefined) => `+ ${title}${kind ? ` (${kind})` : ""}`,
      planRemoved: (title: string, kind: string | undefined) => `- ${title}${kind ? ` (${kind})` : ""}`,
      planStatus: (title: string, from: string | undefined, to: string | undefined) => `~ ${title}: ${from ?? "no status"} → ${to ?? "no status"}`,
      planChanged: (title: string, what: { fields: boolean; result: boolean; edges: boolean }) =>
        `≈ ${title}: ${[what.fields && "its fields", what.result && "what it computes", what.edges && "its edges"].filter(Boolean).join(", ")}`,
      planRaised: (where: string | undefined, issue: string) => `! ${where ? `${where}: ` : "the graph: "}${issue}`,
      planResolved: (where: string | undefined, issue: string) => `✓ ${where ? `${where}: ` : "the graph: "}${issue}`,
      /** The last line of a plan that changes something. */
      planShipments: (shipments: readonly string[]) => (shipments.length ? `shipments touched: ${shipments.join(", ")}` : "no shipment touched"),
      planNothing: () => "nothing changes: a build would write the same graph",
      planNothingBuilt: (file: string) => `no ${file} to compare with: trame build writes it, and every node would be new`,
    }
  },
})

/**
 * Two builds compared
 * The nodes added and removed, the statuses that change, the nodes whose fields, result or edges change, the issues
 * raised and resolved, the shipments whose obligations are touched; then said line by line, with the title and the
 * kind of each node as either build knows it.
 */
export const BuildComparison = fn({
  owner: "trame",
  serves: [WrittenOnce],
  deps: { say: CommandWords },
  body: code.file<typeof import("./code/comparison").default>("./code/comparison.ts"),
})

/**
 * Plan
 * trame plan [--at <date>]: what a build would change, written nowhere. The project at hand, compiled by the engine at
 * the day its line says, is compared with graph.json, the last build: the nodes added and removed, the statuses that
 * change, the nodes otherwise changed, the issues raised and resolved, then the shipments touched. Without a build to
 * compare with, it says so.
 */
export const Plan = entryPoint({
  owner: "trame",
  in: Commands, for: Anyone,
  serves: [WrittenOnce],
  trigger: command("plan"),
  deps: { project: TheProject, files: Files, comparison: BuildComparison, lines: TerminalText, say: CommandWords, exit: ExitStatus, counts: Counts },
  body: code.file("./code/plan.ts"),
})
