/** Commands · Scenarios */

import { environment } from "#trame/kinds/environment"
import { binding } from "#trame/kinds/binding"
import { decision } from "#trame/kinds/decision"
import { catalog } from "#trame/kinds/catalog"
import { scenario } from "#trame/kinds/scenario"
import { fn } from "#trame/kinds/function"
import { TheProject, ProjectOfTheScenario, ProjectCompiledHere, type ProjectChosen } from "#std/engine"
import { Files, FilesInMemory, CommandLanguage } from "#std/tooling"
import { Strategy, Adapter } from "#std/patterns"
import { ExitStatus } from "#std/system"
import { Counts } from "#std/algebra"
import { WrittenOnce } from "./product"
import { Plan, BuildComparison, CommandWords, TerminalLines } from "./commands"
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
 * The project the scenarios compile, by its directory in the library, at the day they are played: a goal, the decision
 * that serves it, the requirement that refines it, the person who owns them.
 */
export const SmallProject = decision<ProjectChosen>({ owner: "trame", value: { root: "samples/small", today: "2026-11-26" } })

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
  language: CommandLanguage,
  messages: () => ({
    planNamesWhatIsNew: (title: string) => `The plan names ${title}, which the last build did not have, and counts it in its first line`,
    planNamesTheStatus: (title: string) => `The plan names the status of ${title}, which the last build did not give`,
    planWithoutABuild: () => "Without graph.json, the plan says there is nothing to compare with, and succeeds",
    planAfterTheSameBuild: () => "Against the graph a build of the same day wrote, the plan counts nothing and says nothing changes",
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
  deps: { plan: Plan, project: TheProject, files: Files, say: CommandWords, lines: TerminalLines, checks: ScenarioWords, exit: ExitStatus, counts: Counts },
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
