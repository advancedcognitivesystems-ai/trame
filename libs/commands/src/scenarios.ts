/** Commands · Scenarios */

import { environment } from "#trame/kinds/environment"
import { binding } from "#trame/kinds/binding"
import { decision } from "#trame/kinds/decision"
import { catalog } from "#trame/kinds/catalog"
import { scenario } from "#trame/kinds/scenario"
import { adr } from "#trame/kinds/adr"
import { fn } from "#trame/kinds/function"
import { TheProject, ProjectOfTheScenario, ProjectCompiledHere, EngineAsAProvider, type ProjectChosen } from "#std/engine"
import { Files, FilesInMemory } from "#std/tooling"
import { Strategy, Adapter, Bridge } from "#std/patterns"
import { ExitStatus } from "#std/system"
import { Counts, Sequences } from "#std/algebra"
import { DocumentName, ViewGroup, ViewName } from "#trame/kernel"
import type { Places } from "#trame/kernel"
import { MarkdownSyntax, MermaidDiagrams, PlainTextSyntax, TextFigures, FileRendering, TerminalRendering, OneRendererManySyntaxes } from "#documents/rendering"
import { WrittenForTheScenarios } from "#documents/scenarios"
import { WrittenOnce } from "./product"
import { Plan, BuildComparison, CommandWords, WordsLanguage, Build as BuildCommand, Snapshot, View, ViewRefused } from "./commands"
import { TerminalText } from "#documents/text"
import type { Build } from "./code/comparison"

// What the library's commands compute from a graph is played on a real one: a small project of the library's own,
// compiled by the engine that plays the scenarios (std's ProjectCompiledHere, since g124); only the platform is kept in
// memory (the project's files, which hold no build until a scenario writes one).

/**
 * Test
 * Where the library's scenarios run: the small project compiled by the engine, the files kept in memory.
 */
export const Test = environment({ owner: "trame", evaluates: true })

/**
 * The small project
 * The project the scenarios compile, at the day they are played: a goal, the requirement that refines it, the decision
 * it reads, the person who owns them. It lies in the library's sources, named by the library's package: a version
 * carries it, and a project that imports the version plays the scenarios on it there.
 */
export const SmallProject = decision<ProjectChosen>({ owner: "trame", value: { root: "#commands/samples/small", today: "2026-11-26" } })

/**
 * Which project the scenarios compile
 * The small project, as decided.
 */
export const TheSmallProject = fn({
  owner: "trame", implements: [ProjectOfTheScenario],
  deps: { small: SmallProject },
  body: ({ small }) => small,
})

/**
 * Compiled by the engine that plays them
 * In the library's scenarios, the project at hand is compiled by the engine that plays them, as on a machine it is
 * compiled by the engine that runs the command.
 */
export const CompiledByTheEngine = binding({
  owner: "trame",
  chooses: [ProjectCompiledHere],
  environments: [Test],
  follows: [Adapter],
  serves: [WrittenOnce],
  context: "A command computes from a graph the engine compiled: a graph a scenario wrote by hand would check the command against what its author thought the engine gives.",
  rejected: { "A graph written by the scenario": "it proves nothing of what the engine gives, which is what the command reads on a machine" },
})

/**
 * Played on a small project
 * In the library's scenarios, the project at hand is the small project, and the project's files are kept in memory.
 */
export const PlayedOnASmallProject = binding({
  owner: "trame",
  chooses: [TheSmallProject, FilesInMemory],
  environments: [Test],
  follows: [Strategy],
  serves: [WrittenOnce],
  context: "The library's own project is the one being compiled when its scenarios play: they compile another, small and of the library's own, whose files are read again when they change.",
})

/**
 * What the scenarios check
 */
export const ScenarioWords = catalog({
  owner: "trame",
  language: WordsLanguage,
  messages: () => ({
    planNamesWhatIsNew: (title: string) => `The plan names ${title}, which the last build did not have, and counts it in its first line`,
    planNamesTheStatus: (title: string) => `The plan names the status of ${title}, which the last build did not give`,
    planWithoutABuild: () => "Without graph.json, the plan says there is nothing to compare with, and succeeds",
    planAfterTheSameBuild: () => "Against the graph a build of the same day wrote, the plan counts nothing and says nothing changes",
    buildWritesTheDocuments: () => "A build writes each document a view writes as a file, in the syntax of files, with where each card is",
    buildWritesTheGraph: () => "A build writes graph.json and snapshot.json as the engine gives them",
    buildPrintsTheSummary: () => "A build prints the summary in the syntax of the terminal, then names the files it wrote",
    snapshotWritesItsDocuments: () => "A snapshot writes snapshot.json and the documents of the snapshot's view, then names them with the day",
    viewAnswersItsDocument: () => "A view answers the document the engine's view gives, and where each card is when a format asks",
    viewSaysWhyNot: () => "A view the engine cannot give (no view of that name, a view of a node without its node) says why, in the commands' words",
  }),
})

/**
 * A plan says what a build would change
 * The last build had neither the first node of the graph nor the status of another: the plan names the node added and
 * the status that changes, by their titles, and counts them in its first line.
 */
export const PlanSaysWhatChanges = scenario({
  owner: "trame",
  verifies: [Plan, BuildComparison, ProjectCompiledHere, TheSmallProject],
  env: Test,
  deps: { plan: Plan, project: TheProject, files: Files, say: CommandWords, lines: TerminalText, checks: ScenarioWords, exit: ExitStatus, counts: Counts },
  body: ({ plan, project, files, say, lines, checks, exit, counts }) => async (check) => {
    const compiled = await project.compiled()
    const now = JSON.parse(compiled.written()) as Build
    const [added, ...rest] = now.nodes
    const statused = rest.find((n) => n.status !== undefined)
    if (!added || !statused) return check(checks.planNamesWhatIsNew(compiled.root), false)
    const before: Build = {
      ...now,
      nodes: rest.map((n) => (n === statused ? { ...n, status: undefined } : n)),
      edges: now.edges.filter((e) => e.from !== added.id && e.to !== added.id),
    }
    files.write(project.layout().graph, JSON.stringify(before))
    const answered = await plan({ params: {}, body: { args: [] } })
    const said = (answered.body ?? []) as readonly string[]
    const [heading] = said
    const one = counts.one
    check(checks.planNamesWhatIsNew(added.title ?? added.id),
      answered.status === exit.success && said.includes(lines.indent + say.planAdded(added.title ?? added.id, added.kind)) &&
      heading === say.planHeading(now.generated, compiled.today, { added: one, removed: counts.zero, statuses: one, changed: counts.zero, raised: counts.zero, resolved: counts.zero }))
    check(checks.planNamesTheStatus(statused.title ?? statused.id), said.includes(lines.indent + say.planStatus(statused.title ?? statused.id, undefined, statused.status)))
  },
})

/**
 * Without a build, a plan says so
 * A project that was never built has no graph.json: the plan says there is nothing to compare with, and succeeds.
 */
export const PlanWithoutABuild = scenario({
  owner: "trame",
  verifies: [Plan, ProjectCompiledHere],
  env: Test,
  deps: { plan: Plan, project: TheProject, say: CommandWords, checks: ScenarioWords, exit: ExitStatus },
  body: ({ plan, project, say, checks, exit }) => async (check) => {
    const answered = await plan({ params: {}, body: { args: [] } })
    check(checks.planWithoutABuild(), answered.status === exit.success && JSON.stringify(answered.body) === JSON.stringify([say.planNothingBuilt(project.layout().graph)]))
  },
})

/**
 * After a build, nothing changes
 * Against the graph a build of the same day wrote, the plan counts nothing and says nothing changes.
 */
export const PlanAfterTheSameBuild = scenario({
  owner: "trame",
  verifies: [Plan, BuildComparison, ProjectCompiledHere],
  env: Test,
  deps: { plan: Plan, project: TheProject, files: Files, say: CommandWords, checks: ScenarioWords, exit: ExitStatus, counts: Counts },
  body: ({ plan, project, files, say, checks, exit, counts }) => async (check) => {
    const compiled = await project.compiled()
    files.write(project.layout().graph, compiled.written())
    const answered = await plan({ params: {}, body: { args: [] } })
    const none = counts.zero
    const said = [
      say.planHeading(compiled.today, compiled.today, { added: none, removed: none, statuses: none, changed: none, raised: none, resolved: none }),
      say.planNothing(),
    ]
    check(checks.planAfterTheSameBuild(), answered.status === exit.success && JSON.stringify(answered.body) === JSON.stringify(said))
  },
})

/**
 * A command is played on a real graph
 * What a command computes from a graph is played on one the engine compiles: a small project the library carries in its
 * sources, compiled by the engine that plays the scenarios, only the platform kept in memory. The library adopts std's
 * decision that the engine is a provider, reached through std's ports.
 */
export const PlayedOnARealGraph = adr({
  owner: "trame",
  context: "A command reads what the engine gives (the graph as a build writes it, what a view receives): written by hand, a graph would check the command against what its author thought the engine gives.",
  consequences: "The small project travels with each version, named by the library's package; a project that imports the library plays the scenarios on it there.",
  rejected: { "A graph written by the scenario": "it proves nothing of what the engine gives, which is what the command reads on a machine" },
  serves: [WrittenOnce],
  adopts: [EngineAsAProvider],
  appliedBy: [CompiledByTheEngine, PlayedOnASmallProject],
})

// The documents a command writes ------------------------------------------------------------------------------------

/**
 * Files in Markdown, the terminal in text
 * In the library's scenarios, the documents a command writes as files are in Markdown with Mermaid figures, and what it
 * prints is plain text with figures as text, as libs/documents plays them.
 */
export const DocumentsAsFiles = binding({
  owner: "trame",
  chooses: [MarkdownSyntax, PlainTextSyntax],
  environments: [Test],
  follows: [Bridge, Strategy],
  serves: [WrittenOnce],
  context: "A command writes its documents with the renderers of libs/documents, in the syntaxes a project chooses.",
})

/**
 * Figures in Mermaid and in text
 * In the library's scenarios, the figures of the files are Mermaid diagrams, those of the terminal lines of text.
 */
export const FiguresOfTheDocuments = binding({
  owner: "trame",
  chooses: [MermaidDiagrams, TextFigures],
  environments: [Test],
  follows: [Strategy],
  serves: [WrittenOnce],
  context: "Each syntax reaches its figures through a port of its own, chosen apart.",
})

/**
 * In the language of libs/documents' scenarios
 * In the library's scenarios, the documents are written in the language libs/documents decided for its own.
 */
export const DocumentsLanguage = binding({
  owner: "trame",
  chooses: [WrittenForTheScenarios],
  environments: [Test],
  follows: [Strategy],
  serves: [WrittenOnce],
  context: "The documents speak the language of the engine that compiles the graph: in a library's scenarios, a language decided for them.",
})

/**
 * A command writes documents as a project does
 * The library's commands write the documents the views give with the renderers of libs/documents: one renderer, its
 * syntax a choice per audience. Its scenarios choose the syntaxes a project chooses.
 */
export const WrittenAsAProjectDoes = adr({
  owner: "trame",
  context: "A command that wrote its documents itself would be a second renderer, whose words and layout could drift from the others'.",
  consequences: "What a build writes is what the engine's build wrote, character for character: the same views, the same renderer, the same places.",
  rejected: { "A renderer of the commands' own": "the walk and the words of the documents repeated" },
  serves: [WrittenOnce],
  adopts: [OneRendererManySyntaxes],
  appliedBy: [DocumentsAsFiles, FiguresOfTheDocuments, DocumentsLanguage],
})

/**
 * A build writes the documents and the graph
 * The small project, built in memory: each document a view writes as a file holds what the renderer of files gives it,
 * graph.json and snapshot.json what the engine gives, and the build prints the summary, then the files it wrote.
 */
export const BuildWritesTheDocuments = scenario({
  owner: "trame",
  verifies: [BuildCommand, ProjectCompiledHere, TheSmallProject],
  env: Test,
  deps: { build: BuildCommand, project: TheProject, files: Files, written: FileRendering, printed: TerminalRendering, say: CommandWords, checks: ScenarioWords, exit: ExitStatus },
  body: ({ build, project, files, written, printed, say, checks, exit }) => async (check) => {
    const answered = await build({ params: {}, body: { args: [] } })
    const compiled = await project.compiled()
    const { graph, snapshot } = project.layout()
    const { documents, places } = await compiled.documents()
    const filed = documents.filter((d) => d.file !== undefined)
    check(checks.buildWritesTheDocuments(), answered.status === exit.success && filed.every((d) => files.exists(d.file!) && files.read(d.file!) === written.render(d, places)))
    check(checks.buildWritesTheGraph(), files.read(graph) === compiled.written() && files.read(snapshot) === compiled.snapshot())
    const said = [
      ...documents.filter((d) => d.group === ViewGroup.summary).map((d) => printed.render(d)),
      say.written([...filed.map((d) => d.file!), graph, snapshot]),
    ]
    check(checks.buildPrintsTheSummary(), JSON.stringify(answered.body) === JSON.stringify(said))
  },
})

/**
 * A snapshot writes the graph in force
 * The small project's snapshot, taken in memory: snapshot.json what the engine gives, the documents of the snapshot's
 * view what the renderer of files gives them, named with the day of the graph.
 */
export const SnapshotTaken = scenario({
  owner: "trame",
  verifies: [Snapshot, ProjectCompiledHere, TheSmallProject],
  env: Test,
  deps: { snapshot: Snapshot, project: TheProject, files: Files, written: FileRendering, say: CommandWords, checks: ScenarioWords, exit: ExitStatus, sequences: Sequences },
  body: ({ snapshot, project, files, written, say, checks, exit }) => async (check) => {
    const answered = await snapshot({ params: {}, body: { args: [] } })
    const compiled = await project.compiled()
    const { documents, places } = await compiled.documents()
    const taken = documents.filter((d) => d.view === DocumentName.snapshot && d.file !== undefined)
    const file = project.layout().snapshot
    check(checks.snapshotWritesItsDocuments(),
      answered.status === exit.success && files.read(file) === compiled.snapshot() &&
      taken.every((d) => files.read(d.file!) === written.render(d, places)) &&
      JSON.stringify(answered.body) === JSON.stringify([say.snapshotTaken(compiled.today, [file, ...taken.map((d) => d.file!)])]))
  },
})

/**
 * Views the scenarios ask for
 * A name no view has.
 */
export const ScenarioViews = decision<{ unknown: string }>({ owner: "trame", value: { unknown: "nothing" } })

/**
 * A view answers its document
 * The small project's index asked by name: the document the engine's view gives, and where each card is once asked;
 * a name no view has, and a view of a node asked without its node, refused in the commands' words.
 */
export const ViewAnswersItsDocument = scenario({
  owner: "trame",
  verifies: [View, ViewRefused, ProjectCompiledHere, TheSmallProject],
  env: Test,
  deps: { view: View, project: TheProject, refused: ViewRefused, views: ScenarioViews, checks: ScenarioWords, exit: ExitStatus },
  body: ({ view, project, refused, views, checks, exit }) => async (check) => {
    const ask = (given: Record<string, string>) => view({ params: {}, body: { args: Object.values(given), arguments: given } })
    const compiled = await project.compiled()
    const answered = await ask({ view: ViewName.index })
    const expected = await compiled.view(ViewName.index)
    const { documents, places } = answered.body as { documents: unknown; places?: () => Promise<Places> }
    const where = await places?.()
    check(checks.viewAnswersItsDocument(),
      answered.status === exit.success && JSON.stringify(documents) === JSON.stringify([expected.document]) &&
      where?.locate.size === (await compiled.documents()).places.locate.size)
    const saidFor = async (name: string) => {
      const answer = await compiled.view(name)
      return answer.refused === undefined ? undefined : JSON.stringify([refused(answer)])
    }
    const unknown = await ask({ view: views.unknown })
    const lacking = await ask({ view: ViewName.impact })
    check(checks.viewSaysWhyNot(),
      unknown.status === exit.failure && JSON.stringify(unknown.body) === await saidFor(views.unknown) &&
      lacking.status === exit.failure && JSON.stringify(lacking.body) === await saidFor(ViewName.impact))
  },
})
