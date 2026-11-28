/** Commands · Commands */

import { TerminalText, CodeLines } from "#documents/text"
import { FileRendering, TerminalRendering, PageRendering } from "#documents/rendering"
import { Page, DevService, GraphPacking } from "#documents/page"
import { Dates, Lists, Punctuation, DocumentLanguage } from "#documents/language"
import { TheClock, Waiting, HttpServing, LinesPrinted } from "#std/running"
import { Http, MediaTypes, ServerSentEvents, Uri } from "#std/web"
import { NodeEvents } from "#std/system"
import { TextFile } from "#std/text"
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
import { Counts, Sequences, Texts } from "#std/algebra"
import { WrittenOnce } from "./product"

// The commands every project runs (E3): each reaches the engine through std's ports (the project at hand, compiled at
// the day its line says), the files through std's Files, and says what it found in lines, which the program's exposure
// writes out. The engine keeps its own until the generation that removes them; a project that chooses one of these
// runs it instead (g119). Since 0.5.0 the page's commands too (payload, export, dev): the page is libs/documents', the
// engine gives the project at each date and the page's program, std what a command that keeps running asks of the
// machine.

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
      /** The last line of a build: the files it wrote. */
      written: (files: readonly string[]) => `written: ${files.join(", ")}`,
      /** Why a view gives no document (moved from the engine's words, commands 0.4.0). */
      unknownView: (name: string | undefined, views: readonly string[]) => `Unknown view: ${name ?? "(none)"}. Views: ${views.join(", ")}`,
      unknownNode: (node: string | undefined) => `Unknown node: ${node ?? "(none)"}`,
      viewDoesNotApply: (view: string, node: string) => `The view "${view}" does not apply to ${node}.`,
      unknownModule: (module: string | undefined, modules: readonly string[]) => `Unknown module: ${module ?? "(none)"}. Modules: ${modules.join(", ")}`,
      /** What a snapshot wrote, and the day of the graph it took. */
      snapshotTaken: (date: string, files: readonly string[]) => `snapshot of ${date} · written: ${files.join(", ")}`,
      /** What an export wrote: how many dates its page offers, and where it went (0.5.0). */
      exported: (dates: number, file: string) => `export · ${plural(dates, { one: "date", other: "dates" })} · written: ${file}`,
      // What trame dev prints while it follows the project (0.5.0, the engine's before).
      listening: (program: string, address: string, date: string) => `${program} dev · ${address} · graph of ${date}`,
      /** What the stream of compilations says first, as a comment. */
      devStream: (program: string) => `${program} dev`,
      /** What trame dev follows: the paths watched, joined as a list in the language of the documents. */
      watching: (paths: string) => `watching ${paths} · Ctrl+C to stop`,
      compilationRefused: (time: string, ms: number) => `✗ ${time}  compilation refused (${ms} ms): the page keeps the last valid graph`,
      compiled: (time: string, ms: number, dates: number, changes: number, reason: string) =>
        `✓ ${time}  compiled in ${ms} ms · ${plural(dates, { one: "date", other: "dates" })}${changes ? ` · ${plural(changes, { one: "change", other: "changes" })}` : ""} (${reason})`,
      startup: () => "startup",
      filesChanged: (n: number) => plural(n, { one: "file", other: "files" }),
      changedDuringCompilation: () => "changes during the compilation",
      // What the last change changed: the pieces of each line, around the nodes, statuses and values it names (0.5.0).
      changesTitle: () => "What the last change changed",
      newNode: () => "New node: ",
      nodeRemoved: (title: string) => `Node removed: ${title}`,
      statusGoesFrom: () => " goes from ",
      statusGoesTo: () => " to ",
      noStatus: () => "no status",
      issueAdded: () => " added: ",
      issueResolved: () => " resolved: ",
      newOverlapOn: () => "New overlap on ",
      overlapOn: () => "The overlap on ",
      overlapOf: () => " of ",
      settledDifferently: () => " is settled differently: ",
      contested: () => "contested",
      prevails: (titles: string[]) => `${titles.join(", ")} ${titles.length > 1 ? "prevail" : "prevails"}`,
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

/**
 * Build
 * trame build [--at <date>]: the documents of the project at hand written for people, its graph for tools and agents.
 * The engine runs the views at the day the line says: each document a view writes as a file is written in the syntax of
 * files (libs/documents), with where each card is; graph.json and snapshot.json as the engine gives them; the summary
 * printed in the syntax of the terminal; then the files written, named.
 */
export const Build = entryPoint({
  owner: "trame",
  in: Commands, for: Anyone,
  serves: [WrittenOnce],
  trigger: command("build"),
  deps: { project: TheProject, files: Files, written: FileRendering, printed: TerminalRendering, say: CommandWords, exit: ExitStatus },
  body: code.file("./code/build.ts"),
})

/**
 * Snapshot
 * trame snapshot [--at <date>]: snapshot.json, the graph in force for agents, at the day the line says; then the
 * documents of the snapshot's view, written in the syntax of files, and the files written, named.
 */
export const Snapshot = entryPoint({
  owner: "trame",
  in: Commands, for: Anyone,
  serves: [WrittenOnce],
  trigger: command("snapshot"),
  deps: { project: TheProject, files: Files, written: FileRendering, say: CommandWords, exit: ExitStatus },
  body: code.file("./code/snapshot.ts"),
})

/**
 * Why a view gives no document, said
 * The reason the engine's API gives (no view of that name, no such node or module, a view that does not apply to the
 * node), in the words of the commands: the library's view and the engine's own say it alike.
 */
export const ViewRefused = fn({
  owner: "trame",
  serves: [WrittenOnce],
  deps: { say: CommandWords, texts: Texts },
  body: code.file<typeof import("./code/view-refused").default>("./code/view-refused.ts"),
})

/**
 * View
 * trame view <view> [node|module] [--at <date>]: one view of the project at hand, at the day the line says, which the
 * engine runs; a view of a node or of a module is given its name. It answers the view's document, written in the
 * format the line names (std's --format: text, Markdown with where each card is, JSON); or why there is none.
 */
export const View = entryPoint({
  owner: "trame",
  in: Commands, for: Anyone,
  serves: [WrittenOnce],
  trigger: command("view", {
    help: "One view of the project at hand",
    arguments: [
      { name: "view", meaning: "the view, by its name" },
      { name: "subject", meaning: "the node or the module a view of a node or of a module is for", optional: true },
    ],
  }),
  deps: { project: TheProject, refused: ViewRefused, exit: ExitStatus },
  body: code.file("./code/view.ts"),
})

// The page's commands (0.5.0) ---------------------------------------------------------------------------------------

/**
 * What the last change changed
 * Between two payloads of the same day, compiled one after the other: the nodes added and removed, the statuses that
 * change, the issues raised and resolved, the overlaps new or settled differently; a document the page announces, or
 * nothing when nothing changed. Pure: trame dev uses it, the engine's own too until it leaves.
 */
export const PayloadDifferences = fn({
  owner: "trame",
  serves: [WrittenOnce],
  deps: { punctuation: Punctuation, say: CommandWords },
  body: code.file<typeof import("./code/differences").default>("./code/differences.ts"),
})

/**
 * A date's documents as today's
 * The documents of another date that are today's but for the date of the graph: a page of several dates carries them
 * once, on today's, which it moves back to their date. The engine's own payload uses it too until it leaves.
 */
export const SameAsToday = fn({
  owner: "trame",
  serves: [WrittenOnce],
  body: code.file<typeof import("./code/same-as-today").default>("./code/same-as-today.ts"),
})

/**
 * The port of trame dev
 * Where the page of trame dev is served on the machine, unless the line says another.
 */
export const DevPort = decision<number>({ owner: "trame", value: 4170 })

/**
 * Debouncing of saves
 * In trame dev, saves close together trigger a single recompilation. In milliseconds.
 */
export const DevDebounce = decision<number>({ owner: "trame", value: 150, range: [50, 2000] })

/**
 * Payload
 * trame payload [--all] [--history]: the project at hand in the intermediate format, at the day its line says, each
 * document rendered for files, for the terminal and for the page, by libs/documents in each audience's syntax; with
 * --all, at each date a page offers too, a document as today's carried once; with --history, the last days something
 * was given. What trame export and trame dev compile in a fresh process.
 */
export const Payload = entryPoint({
  owner: "trame",
  in: Commands, for: Anyone,
  serves: [WrittenOnce],
  trigger: command("payload", {
    help: "The graph in the intermediate format, for a page",
    options: [
      { name: "all", meaning: "at each date a page offers, not only the day of the line" },
      { name: "history", meaning: "with --all, the last days something was given too" },
    ],
  }),
  deps: { project: TheProject, written: FileRendering, printed: TerminalRendering, page: PageRendering, same: SameAsToday, exit: ExitStatus },
  body: code.file("./code/payload.ts"),
})

/**
 * Export
 * trame export [file] [--fragment]: a page a browser opens as it is, the project compiled at each date it offers (in a
 * fresh process, with its history), packed in it; its program the engine's, bundled. Without a skeleton with
 * --fragment, for a host that gives its own.
 */
export const Export = entryPoint({
  owner: "trame",
  in: Commands, for: Anyone,
  serves: [WrittenOnce],
  trigger: command("export", {
    help: "A page a browser opens as it is",
    arguments: [{ name: "file", meaning: "where the page goes, from the project's root (the layout's page by default)", optional: true }],
    options: [{ name: "fragment", meaning: "without the skeleton of a document, for a host that gives its own" }],
  }),
  deps: { project: TheProject, files: Files, page: Page, packing: GraphPacking, say: CommandWords, exit: ExitStatus },
  body: code.file("./code/export.ts"),
})

/**
 * Dev
 * trame dev [--port <port>]: the page served, the project compiled at each date in a fresh process, again at each save
 * after a pause, the open page told on a stream of events; a compilation refused keeps the last valid graph. The page
 * may amend a chosen value: the engine prepares the amendment and records it, unless it is refused or only previewed.
 */
export const Dev = entryPoint({
  owner: "trame",
  in: Commands, for: Anyone,
  serves: [WrittenOnce],
  trigger: command("dev", {
    help: "The page, compiled again at each save",
    options: [{ name: "port", meaning: "the port it is served on", takes: "port" }],
  }),
  deps: {
    project: TheProject, page: Page, rendering: PageRendering, differences: PayloadDifferences, service: DevService, port: DevPort, debounce: DevDebounce,
    server: HttpServing, waiting: Waiting, clock: TheClock, printing: LinesPrinted, http: Http, media: MediaTypes, events: ServerSentEvents,
    node: NodeEvents, uri: Uri, codeLines: CodeLines, dates: Dates, lists: Lists, language: DocumentLanguage, file: TextFile,
    say: CommandWords, exit: ExitStatus, counts: Counts, sequences: Sequences, texts: Texts,
  },
  body: code.file("./code/dev.ts"),
})
