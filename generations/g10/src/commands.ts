/** Trame · Commands */

import { code } from "../trame/kernel"
import { fn } from "../kinds/function"
import { entryPoint, command } from "../kinds/entry-point"
import { ExecutableSpecification, SingleSource, SeverityOrder, DevPort } from "./product"
import { TrameCli, Terminal, Process, Clock, FileWriting, Paths } from "./architecture"
import { Compiler, CompilationApi, Laws, Views, Lock, MachineOutputs, PayloadBuilder, DateBundle, Page, DevServer, Assembly } from "./engine"
import { Common, Markdown, Text } from "./rendering"
import { Layout, JsonFormatting } from "./conventions"
import { ExitStatus } from "./standards"
import { CommandMessages } from "./messages"

/**
 * Preparation
 * Reads the options, checks and compiles the project, refuses cleanly: what all commands share.
 */
export const Preparation = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: {
    compiler: Compiler, compilationApi: CompilationApi, laws: Laws, views: Views, lock: Lock, common: Common,
    terminal: Terminal, currentProcess: Process, clock: Clock, severityOrder: SeverityOrder, devPort: DevPort, exitStatus: ExitStatus,
    messages: CommandMessages,
  },
  body: code.file<typeof import("./code/commands/preparation").default>("./code/commands/preparation.ts"),
})

/**
 * Render a view
 * A view, rendered for the terminal, in Markdown or in JSON.
 */
export const RenderView = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { json: JsonFormatting, preparation: Preparation, views: Views, markdown: Markdown, text: Text, terminal: Terminal, messages: CommandMessages },
  body: code.file<typeof import("./code/commands/render-view").default>("./code/commands/render-view.ts"),
})

/**
 * Assembler
 * The program of a component for an environment, and its infrastructure, ready to write.
 */
export const Assembler = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { preparation: Preparation, assembly: Assembly, messages: CommandMessages },
  body: code.file<typeof import("./code/commands/assembler").default>("./code/commands/assembler.ts"),
})

/**
 * Build
 * Checks, writes docs/ in Markdown, graph.json and snapshot.json, shows the summary.
 */
export const Build = entryPoint({
  owner: "trame", in: TrameCli, serves: [ExecutableSpecification],
  trigger: command("build"),
  deps: { exitStatus: ExitStatus, layout: Layout, preparation: Preparation, machine: MachineOutputs, markdown: Markdown, text: Text, writing: FileWriting, paths: Paths, terminal: Terminal, messages: CommandMessages },
  body: code.file<typeof import("./code/commands/build").default>("./code/commands/build.ts"),
})

/**
 * Test the laws
 * The laws of kinds and views, and the imports.
 */
export const TestKinds = entryPoint({
  owner: "trame", in: TrameCli, serves: [ExecutableSpecification],
  trigger: command("test-kinds"),
  deps: { exitStatus: ExitStatus, preparation: Preparation, compiler: Compiler, views: Views, laws: Laws, terminal: Terminal, messages: CommandMessages },
  body: code.file<typeof import("./code/commands/test-kinds").default>("./code/commands/test-kinds.ts"),
})

/**
 * Take the snapshot
 */
export const TakeSnapshot = entryPoint({
  owner: "trame", in: TrameCli, serves: [SingleSource],
  trigger: command("snapshot"),
  deps: { exitStatus: ExitStatus, layout: Layout, preparation: Preparation, machine: MachineOutputs, markdown: Markdown, writing: FileWriting, paths: Paths, terminal: Terminal, messages: CommandMessages },
  body: code.file<typeof import("./code/commands/snapshot").default>("./code/commands/snapshot.ts"),
})

/**
 * Publish
 * The current declarations enter trame.lock and no longer change.
 */
export const Publish = entryPoint({
  owner: "trame", in: TrameCli, serves: [SingleSource],
  trigger: command("publish"),
  deps: { exitStatus: ExitStatus, preparation: Preparation, lock: Lock, writing: FileWriting, terminal: Terminal, messages: CommandMessages },
  body: code.file<typeof import("./code/commands/publish").default>("./code/commands/publish.ts"),
})

/**
 * Payload
 * The compiled graph in the intermediate format, at one date or at all of them.
 */
export const EmitPayload = entryPoint({
  owner: "trame", in: TrameCli, serves: [ExecutableSpecification],
  trigger: command("payload"),
  deps: { exitStatus: ExitStatus, preparation: Preparation, payload: PayloadBuilder, markdown: Markdown, text: Text, terminal: Terminal },
  body: code.file<typeof import("./code/commands/payload").default>("./code/commands/payload.ts"),
})

/**
 * Export the page
 */
export const ExportPage = entryPoint({
  owner: "trame", in: TrameCli, serves: [ExecutableSpecification],
  trigger: command("export"),
  deps: { exitStatus: ExitStatus, layout: Layout, preparation: Preparation, bundle: DateBundle, page: Page, writing: FileWriting, paths: Paths, terminal: Terminal, messages: CommandMessages },
  body: code.file<typeof import("./code/commands/export").default>("./code/commands/export.ts"),
})

/**
 * Start trame dev
 */
export const Dev = entryPoint({
  owner: "trame", in: TrameCli, serves: [ExecutableSpecification],
  trigger: command("dev"),
  deps: { preparation: Preparation, devServer: DevServer },
  body: code.file<typeof import("./code/commands/dev").default>("./code/commands/dev.ts"),
})

/**
 * Assemble a component
 */
export const Assemble = entryPoint({
  owner: "trame", in: TrameCli, serves: [ExecutableSpecification],
  trigger: command("assemble"),
  deps: { exitStatus: ExitStatus, preparation: Preparation, assembler: Assembler, writing: FileWriting, paths: Paths, terminal: Terminal, messages: CommandMessages },
  body: code.file<typeof import("./code/commands/assemble").default>("./code/commands/assemble.ts"),
})

/**
 * Run a component
 * Assembles, then runs the program and exits with its code.
 */
export const Run = entryPoint({
  owner: "trame", in: TrameCli, serves: [ExecutableSpecification],
  trigger: command("run"),
  deps: { exitStatus: ExitStatus, assemble: Assemble, currentProcess: Process },
  body: code.file<typeof import("./code/commands/run").default>("./code/commands/run.ts"),
})

/**
 * Show a view
 */
export const ShowView = entryPoint({
  owner: "trame", in: TrameCli, serves: [ExecutableSpecification],
  trigger: command("view"),
  deps: { exitStatus: ExitStatus, preparation: Preparation, renderView: RenderView },
  body: code.file<typeof import("./code/commands/show-view").default>("./code/commands/show-view.ts"),
})

/**
 * View by its name
 * Any other command: the name of a view.
 */
export const ViewByName = entryPoint({
  owner: "trame", in: TrameCli, serves: [ExecutableSpecification],
  trigger: command("*"),
  deps: { exitStatus: ExitStatus, preparation: Preparation, renderView: RenderView, compiler: Compiler, views: Views, terminal: Terminal, messages: CommandMessages },
  body: code.file<typeof import("./code/commands/view-by-name").default>("./code/commands/view-by-name.ts"),
})
