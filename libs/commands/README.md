# Commands

A Trame library of the commands every project runs at a terminal (E3): each one is written once, on std's ports of
the engine, and a project runs it when a choice of its own takes it. The engine keeps `init`, `doctor`, `help` and
`manifest`; every other command it still has gives way to the project's of the same name (g119), and leaves the
engine once every project of the repository runs this library's.

- `src/commands.ts` — the component `Commands` (a program's command line, offered to the engine that runs it) and
  its commands: `Plan` (`trame plan [--at <date>]`: what a build would change against graph.json, written nowhere),
  with the function `BuildComparison` (two builds compared); `Build` (`trame build [--at <date>]`: the documents the
  views give, written in the syntax of files with libs/documents' renderers, graph.json and snapshot.json, the summary
  printed) and `Snapshot` (`trame snapshot`: snapshot.json and the snapshot's documents), since 0.3.0, on the
  documents the engine's API gives (g132); `View` (`trame view <view> [node|module]`, since 0.4.0: its arguments
  declared on its line, its document answered and written in the format std's `--format` names), with `ViewRefused`
  (why a view gives no document, which the engine's view says too); since 0.5.0 the page's commands, the engine's
  before: `Payload` (`trame payload [--all] [--history]`: the graph in the intermediate format at each date a page
  offers, each document rendered for files, the terminal and the page, with `SameAsToday`), `Export` (`trame export
  [file] [--fragment]`: libs/documents' page, the project compiled at each date in a fresh process by the engine, its
  program the engine's, the graph packed) and `Dev` (`trame dev [--port <port>]`: the page served with std's
  `HttpServing`, compiled again after each save, the open page told on a stream, an amendment prepared and recorded by
  the engine), with `PayloadDifferences` (what the last change changed), `DevPort` and `DevDebounce`; the words they
  say (`CommandWords`).
- `src/scenarios.ts` — the commands played on a real graph: `samples/small`, a project of the library's own, compiled
  by the engine that plays the scenarios (std's `ProjectCompiledHere`), the files kept in memory; the page's commands
  in an environment of their own (`Served`), where the small project's bundle is made in the scenario's process and
  the server, the clock and the lines printed are std's realizations kept in memory.
- `src/sdlc.ts` — how a version ships (its code verified by the scenarios, its packages safe), and the workflow that
  checks each pull request (job `commands`).

A command reaches the engine through std's port `TheProject` only (the project at hand, compiled at the day its line
says: what a view receives, the graph as a build writes it, where its files are); on a machine, std's
`ProjectInTheEngine` reads it from the engine's API, which the language defines (g124). A project takes a command
with one binding in the environment of its machine (pattern `Command`), with `ProjectInTheEngine` and the machine's
files beside it:

```ts
export const CommandsWrittenOnce = binding({
  owner: "…", chooses: [Plan, Build, Snapshot, View, ProjectInTheEngine], environments: [Local], follows: [Command], …
})
```

`trame plan` then runs the library's command, in the engine's process, on the project the engine prepared. `Build`
and `Snapshot` render with libs/documents: the project chooses the syntaxes of its files and its terminal (Markdown
and Mermaid, plain text) and realizes the documents' language, as Trame does. In the library itself the component
names no environment: it is offered, and the engine's commands answer there (g133).
