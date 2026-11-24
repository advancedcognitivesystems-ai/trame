/** Trame · SDLC */

import { artifact } from "../kinds/artifact"
import { check } from "../kinds/check"
import { role } from "../kinds/role"
import { shipment } from "../kinds/shipment"
import { obligation } from "../kinds/obligation"
import { policy } from "../kinds/policy"
import { code, KindName, Severity, ViewName } from "../trame/kernel"
import { component } from "../kinds/component"
import { binding } from "../kinds/binding"
import { fn } from "../kinds/function"
import { catalog } from "../kinds/catalog"
import { decision } from "../kinds/decision"
import { scenario } from "../kinds/scenario"
import { entryPoint, command } from "../kinds/entry-point"
import {
  ProgramCommands, HeadlessBrowser, NodeProgramCommands, PlaywrightBrowser, BrowserInMemory, BrowserScripted, NodeProgramRuns, MachineFiles, ProgramRuns,
  ProgramRunsInMemory, ProgramRunsKept, FilesInMemory,
} from "#std/tooling"
import { Adapter, Strategy, Command } from "#std/patterns"
import { OpenPullRequest, MergePullRequest, Propagate, PullRequestSettings, PropagationSettings } from "#std/commands"
import { GitCliBranches, GitHubCliPullRequests, AutoMergeByGitHubCli, AutoMergeInAClaudeSession } from "#std/repository"
import { Layout, TrameCommands, TrameEnvironment, ProjectStart } from "./conventions"
import { TypeScript } from "./typescript"
import { Posix, NodeEvents } from "#std/system"
import { Texts, Sequences } from "#std/algebra"
import { TestDay } from "./platform"
import { Html, Css, Svg } from "#std/html"
import { ExitStatus } from "#std/system"
import { BrowserLoading } from "#std/platform"
import { Counts } from "#std/algebra"
import { PageApp, Test, Browser } from "./architecture"
import { Export } from "./commands"
import { PageRegions } from "./page"
import { DocumentMarkup } from "./markup"
import { AttributeSelector } from "./html"
import { Language, ScenarioMessages } from "./messages"
import { ShowGraph, ExplorerFigures, BrowserWindow, BrowserMemory, BrowserFeed, BrowserAmendments, BrowserDecompression } from "./browser"
import { Verified, Served, Applied, Checked, Ruled, Safe, Identified } from "#std/obligations"
import { TrameCli, Local, Session, Process, ProcessLog } from "./architecture"
import { ProgramNames } from "./typescript"
import { TestKinds, Advance, Doctor } from "./commands"
import { DiskReading, DiskWriting, DiskTrees, NodeProcess, NodePrograms, NodeTerminal, SystemClock, NpmReports, NpmInstall, NodeHttpServer, RunsOnDisk } from "./platform"
import { ExecutableSpecification } from "./product"
import { TheOperators } from "#std/access"
import { GitHubWorkflow, MergeWays, type WorkflowSettings, type MergeWay } from "#ci/github"
import { RepositoryApi, RepositoryKept, RepositoryCompared, GitHubCliRepository, RepositoryInMemory } from "#std/repository"
import type { RepositorySettings, RepositoryState } from "#std/repository"

// How a new version of Trame becomes the one projects run, in Trame's graph. The engine described by the graph is
// assembled into a program (the candidate); it plays the laws of the kinds and the views; the rules of the
// architecture, the scenarios and the requirements of the engine hold (the policy of a generation derives them from
// what the candidate reaches); then the candidate advances: it builds the libraries, the example and Trame as the
// generation in place did, reassembles itself to a fixed point, replays the older generations, and, accepted, is
// frozen into the next generation with the libraries it imports, its release written, the pins of Trame and of the
// example moved to it. trame ship NextGeneration --promote "what changes" runs it
// all, and keeps the evidence and the dossier.

/**
 * Trame's maintainers
 * Who changes Trame's engine and language, and ships its generations.
 */
export const Maintainers = role({ owner: "trame", people: ["ghalaax", "claude"] })

/**
 * The candidate engine
 * The program of Trame's command line, assembled from the graph for a machine: what the next generation freezes.
 */
export const EngineCandidate = artifact({ owner: "trame", path: "out/local/trame-cli.ts", producedBy: TrameCli })

/**
 * The candidate plays the laws
 * The candidate engine plays the laws of every kind and view on drawn values: one broken law, and it is not shipped.
 */
export const CandidateKeepsTheLaws = check({ owner: "trame", on: [EngineCandidate], runs: TestKinds, by: Maintainers })

/**
 * The engine is verified
 * Every scenario that verifies code a generation reaches is played; an entry point or a function it reaches that no
 * scenario verifies is an error of the graph: engine code nothing proves. A component is verified through its entry
 * points.
 */
export const EngineVerified = obligation({
  owner: "trame", applies: Verified, params: { kinds: [KindName.entry, KindName.function] }, gaps: Severity.error,
  serves: [ExecutableSpecification],
})

/**
 * The language serves what it says
 * Every requirement of the goals the reached code serves holds, at any depth.
 */
export const LanguageServed = obligation({ owner: "trame", applies: Served, serves: [ExecutableSpecification] })

/**
 * The decisions of the architecture hold
 * Every ADR a reached node applies holds: an ADR applied only by what proves nothing is a hole to close, not one to
 * leave out of the policy.
 */
export const ArchitectureApplied = obligation({ owner: "trame", applies: Applied, serves: [ExecutableSpecification] })

/**
 * The candidate is checked by programs
 * Every check of the candidate a program runs: a generation is advanced by a machine, not by hand.
 */
export const CandidateChecked = obligation({ owner: "trame", applies: Checked, params: { by: "programs" }, serves: [ExecutableSpecification] })

/**
 * The rules of the architecture hold
 * Every rule of Trame's graph holds: none broken.
 */
export const ArchitectureRuled = obligation({ owner: "trame", applies: Ruled, serves: [ExecutableSpecification] })

/**
 * The packages are safe
 * Every package the engine uses is installed at its version, without a known vulnerability.
 */
export const EnginePackagesSafe = obligation({ owner: "trame", applies: Safe, serves: [ExecutableSpecification] })

/**
 * Its callers identified
 * Each command is for an audience that carries no identity (whoever is at the terminal, the operators of the project),
 * or one that something identifies: an audience carrying an identity that nothing identifies keeps the generation (C6).
 */
export const EngineCallersIdentified = obligation({ owner: "trame", applies: Identified, gaps: Severity.error, serves: [ExecutableSpecification] })

/**
 * How a generation is made
 * The way Trame advances its engine: the code it reaches verified (a gap is an error), the goals it serves held, the
 * decisions it applies held, the candidate checked by programs, the rules held, the packages safe, its callers
 * identified; and the foundations, as always.
 */
export const GenerationMode = policy({
  owner: "trame",
  obligations: [EngineVerified, LanguageServed, ArchitectureApplied, CandidateChecked, ArchitectureRuled, EnginePackagesSafe, EngineCallersIdentified],
})

/**
 * The candidate runs on the machine
 * The candidate engine asks the machine it was assembled for whether it runs Trame (trame doctor): it reads and writes
 * files, copies and compares trees, runs programs, serves HTTP, keeps the time, asks the registry. What its run proves
 * is what no scenario in memory can run: the realizations of the machine.
 */
export const CandidateRunsOnTheMachine = check({
  owner: "trame", on: [EngineCandidate], runs: Doctor, by: Maintainers,
  verifies: [DiskReading, DiskWriting, DiskTrees, NodeProcess, NodePrograms, NodeTerminal, SystemClock, NpmReports, NpmInstall, NodeHttpServer, RunsOnDisk],
})

/**
 * Trame's SDLC
 * The programs that check what a generation ships and that the engine does not run itself: the first word names the
 * command. Assembled for the machine, like the engine.
 */
export const TrameSdlc = component({
  owner: "trame",
  language: "typescript",
  environments: [Local],
  deps: { exposure: ProgramCommands },
})

/**
 * The SDLC on the machine
 * On the machine, the programs of the SDLC read their command from Node's command line, open pages in Chromium driven
 * by Playwright, and set the repository on GitHub by its command line, as the standard library realizes them.
 */
export const SdlcOnTheMachine = binding({
  owner: "trame",
  chooses: [NodeProgramCommands, PlaywrightBrowser, GitHubCliRepository],
  environments: [Local, Session],
  follows: [Adapter],
  context: "The graph page must be opened as a person opens it: the file exported, in a real browser; the repository is set and read by GitHub's command line, with the token of whoever runs it.",
})

/**
 * The SDLC in memory
 * In the scenarios, the browser shows the page a scenario writes, and the repository is kept in memory.
 */
export const SdlcInMemory = binding({
  owner: "trame",
  chooses: [BrowserInMemory, RepositoryInMemory, ProgramRunsInMemory, FilesInMemory],
  environments: [Test],
  follows: [Strategy],
  context: "A program of the SDLC is code like the engine's: its scenarios play it before it runs on a machine.",
})

/**
 * The page's program
 * The component that shows the graph page, assembled for the browser where the engine finds it: built before the page,
 * so that the page shipped carries the program of the engine shipped, not the one the last advance assembled.
 */
export const PageProgram = artifact({ owner: "trame", path: "out/browser/page-app.ts", producedBy: PageApp, environment: Browser })

/**
 * The graph page
 * The page trame export writes of Trame's graph, which a browser opens as it is: it carries the program of the page,
 * assembled for the browser. A generation ships it with its engine.
 */
export const GraphPage = artifact({ owner: "trame", path: "trame-page.html", media: "text/html; charset=utf-8", producedBy: Export, carries: [PageApp] })

/**
 * How the graph page is opened
 * How long the page settles once opened, and once a document is chosen, in seconds.
 */
export const GraphPageOpening = decision<{ settle: number }>({ owner: "trame", value: { settle: 2 } })

/**
 * What the graph page is asked
 * The selectors of what a person sees, from the regions the page declares: the documents of its navigation, the links
 * of the document shown, the nodes of its picker, the entry of the figure of the layers, the picker of documents (what a
 * phone shows in place of the navigation) and the figure's document, and a figure drawn.
 */
export const GraphPageSelectors = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { regions: PageRegions, markup: DocumentMarkup, attribute: AttributeSelector, html: Html, css: Css, svg: Svg },
  body: ({ regions, markup, attribute, html, css, svg }) => {
    const id = (name: string) => css.idSelector + name
    const inside = (...parts: string[]) => parts.join(css.descendant)
    return {
      documents: inside(id(regions.nav), html.li),
      shown: inside(id(regions.doc), html.a),
      nodes: inside(id(regions.nodes), html.option),
      figureDocument: inside(id(regions.nav), attribute(markup.attributes.doc, ViewName.layers)),
      picker: id(regions.documents),
      figureView: ViewName.layers,
      figure: inside(id(regions.doc), svg.svg),
    }
  },
})

/**
 * What the programs of Trame's SDLC say
 */
export const SdlcWords = catalog({
  owner: "trame",
  language: Language,
  messages: () => ({
    advanceUsage: (by: string, accept: string, promote: string) => `Say who advances: trame advance ${by} <name> [${accept}] [${promote} "what changes"]`,
    advanceAssembling: (component: string) => `The generation in place assembles ${component}`,
    advanceStopped: (component: string) => `The advance stopped: ${component} could not be assembled`,
    opens: () => "The graph page opens: its documents, a document shown, its nodes, the figure of the layers drawn, no error",
    noDocuments: () => "The navigation lists no document",
    noDocument: () => "No document is shown",
    noNodes: () => "The picker lists no node",
    noFigureDocument: () => "The navigation has no figure of the layers",
    noFigure: () => "The figure of the layers is not drawn",
    pageError: (error: string) => `The page raised "${error}"`,
    asDecided: (repository: string) => `${repository} holds the settings the graph decides`,
    notAsDecided: (repository: string) => `${repository} does not hold the settings the graph decides:`,
    differs: (part: string, decided: string, found: string) => `  ${part}: decided ${decided}, found ${found}`,
    nothing: () => "nothing",
    set: (repository: string) => `${repository} is set as the graph decides, and read back so`,
    callRefused: (call: string) => `GitHub did not take the call ${call}: only an administrator of the repository may set it`,
    unreadable: (repository: string) => `${repository} cannot be read: GitHub's command line, signed in, reads it`,
  }),
})

/**
 * Open the graph page
 * Opens the graph page in Chromium without a screen, a phone's width: the navigation lists the documents, a document is
 * shown, the picker lists the nodes, the figure of the layers is drawn once its document is chosen (in the picker of
 * documents, what a phone shows in place of the navigation), and the page raises no error. What is missing is said; it
 * fails when anything is.
 */
export const OpenTheGraphPage = entryPoint({
  owner: "trame",
  in: TrameSdlc, for: TheOperators,
  serves: [ExecutableSpecification],
  trigger: command("open-graph-page"),
  deps: {
    browser: HeadlessBrowser, page: GraphPage, language: Language, selectors: GraphPageSelectors, opening: GraphPageOpening, say: SdlcWords,
    exit: ExitStatus, counts: Counts,
  },
  body: code.file("./code/sdlc/open-the-graph-page.ts"),
})

/**
 * The graph page opens
 * The graph page exported, opened in a browser without a screen by a program of the SDLC: the program of the page runs
 * there, with what realizes it in a browser.
 */
export const GraphPageOpens = check({
  owner: "trame", on: [GraphPage], runs: OpenTheGraphPage, by: Maintainers,
  verifies: [ShowGraph, ExplorerFigures, BrowserLoading, BrowserWindow, BrowserMemory, BrowserFeed, BrowserAmendments, BrowserDecompression, NodeProgramCommands, PlaywrightBrowser],
})

/**
 * What the scenario of the graph page shows
 * The error a page raises in it.
 */
export const GraphPageScenarioData = decision<{ error: string }>({ owner: "trame", value: { error: "The page broke" } })

/**
 * The graph page is opened as a person would
 * In memory, the browser shows a page with its documents, a document, its nodes and the figure of the layers: the
 * program passes and says so; the same page raising an error, its figure not drawn, fails and says why.
 */
export const OpeningTheGraphPage = scenario({
  owner: "trame",
  verifies: [OpenTheGraphPage, GraphPageSelectors, BrowserInMemory],
  env: Test,
  deps: {
    open: OpenTheGraphPage, script: BrowserScripted, page: GraphPage, selectors: GraphPageSelectors, exit: ExitStatus, say: SdlcWords,
    data: GraphPageScenarioData, counts: Counts, messages: ScenarioMessages,
  },
  body: ({ open, script, page, selectors, exit, say, data, counts, messages }) => async (check) => {
    const one = { count: counts.one }
    const whole = { [selectors.documents]: one, [selectors.shown]: one, [selectors.nodes]: one, [selectors.figureDocument]: one, [selectors.figure]: one }
    script.show(page.path, { elements: whole, errors: [] })
    const passed = await open({ params: {} })
    check(messages.graphPagePasses(), passed.status === exit.success && JSON.stringify(passed.body) === JSON.stringify([say.opens()]) &&
      script.choices().some((c) => c.selector === selectors.picker && c.value === selectors.figureView))
    const { [selectors.figure]: _, ...without } = whole
    script.show(page.path, { elements: without, errors: [data.error] })
    const failed = await open({ params: {} })
    const found = failed.body as string[]
    check(messages.graphPageFails(), failed.status === exit.failure && found.includes(say.noFigure()) && found.includes(say.pageError(data.error)))
  },
})

/**
 * The next generation
 * The engine as the graph describes it now, frozen into the next generation and pinned by Trame and the example, the
 * way a generation is made: what it must prove is derived from what the candidate reaches (the laws it plays, the
 * scenarios of its code, the requirements of the goals it serves, the rules, the packages), nothing listed by hand. The
 * advance deploys it, and refuses a candidate the requirement "Accept a candidate" does not accept.
 */
export const NextGeneration = shipment({
  owner: "trame",
  target: "generation",
  ships: [EngineCandidate, PageProgram, GraphPage],
  policy: GenerationMode,
  deploys: [Advance],
  environment: Local,
})

/**
 * The engine
 * Trame as its people write it: what a pull request brings into the main branch, all its code.
 */
export const TheEngine = artifact({ owner: "trame", path: "src", version: true })

/**
 * How a change merges
 * The way Trame takes a change into its main branch: the code it brings verified (a gap is an error), the rules held;
 * and the foundations, as always. What the candidate of a generation proves besides is the advance's business.
 */
export const MergeMode = policy({ owner: "trame", obligations: [EngineVerified, ArchitectureRuled] })

/**
 * Into the main branch
 * A pull request into main: it merges once it holds, as the repository's settings say (D1). The programs of the SDLC
 * it reaches are those of this machine.
 */
export const IntoMain = shipment({ owner: "trame", target: "main", ships: [TheEngine], policy: MergeMode, environment: Local })

/**
 * How a pull request is checked on GitHub
 * At each pull request into main, on GitHub's Ubuntu 24.04 machine with Node.js 22: its job, named trame, is a check the
 * repository requires; it keeps GitHub from merging a pull request that changes what people decided (a trame.lock of the
 * repository), which a person then merges (D1). It installs Poselia's packages too: the scenarios enter Poselia
 * (ScenarioProjects), whose code uses three.js.
 */
export const PullRequestsOnGitHub = decision<WorkflowSettings>({
  owner: "trame",
  value: {
    on: { pullRequests: ["main"] }, job: "trame", alsoInstalls: ["apps/poselia"], runsOn: "ubuntu-24.04", node: 22, artefacts: { days: 30 },
    pullRequest: { review: false, merge: "onceItHoldsUnlessDecided" },
  },
  rejected: {
    "Only when a pull request touches the project": "GitHub keeps a pull request waiting for a check it requires and that never ran",
    "Merged by GitHub whatever it changes": "what people decided would reach main without a person",
    "The review of the branch": "Trame publishes nothing yet: its graph is published once the plan is done",
  },
})

/**
 * The pull requests' workflow
 * The workflow that checks a pull request on GitHub, written from the pipeline of the shipment into main: it prepares
 * the machine as the plan says, keeps GitHub from merging what people decided, then runs trame ship.
 */
export const PullRequestWorkflow = artifact({
  owner: "trame",
  path: ".github/workflows/trame-pull-request.yml",
  media: "application/yaml",
  producedBy: GitHubWorkflow,
  runs: IntoMain,
  settings: PullRequestsOnGitHub,
})

/**
 * How the repository merges into main
 * The main branch of the repository receives nothing but pull requests, and is never deleted nor rewritten; a pull
 * request passes the check of each project the repository holds (its job), need not be up to date with main, and merges
 * as a merge commit, which keeps each commit of the branch (a generation is a commit); GitHub may merge it once it
 * holds, when someone asks it to, and deletes its branch then. No approval is required: the workflows keep from merging
 * itself what people decided, which a person merges.
 */
export const MainBranch = decision<RepositorySettings>({
  owner: "trame",
  value: {
    branch: "main", checks: ["trame", "std", "ci", "data", "team", "reservations", "poselia"], upToDate: false, approvals: 0,
    method: "merge", autoMerge: true, deletesMerged: true, pages: false,
  },
  rejected: {
    "Squashed": "a branch would merge as one commit, and the generations it advances are each a commit",
    "An approval required": "the person who opens a pull request with their own account cannot approve it",
    "Up to date with main first": "each pull request would merge main into itself again, and run its checks again, whenever another one merged",
    "The check of geometry": "geometry runs from the registry of a machine, which a runner of GitHub does not have yet",
    "Pages now": "the site that gathers Trame's graph and Poselia's preview is still to be decided",
  },
})

/**
 * Trame's repository
 * Where Trame lives on GitHub, by its owner and name: what its settings are applied to.
 */
export const TheRepository = decision<{ name: string }>({ owner: "trame", value: { name: "advancedcognitivesystems-ai/trame" } })

/**
 * Read the repository's settings
 * Reads Trame's repository on GitHub as it is and compares it with the settings the graph decides: it says whether it
 * holds them, and each part it does not, with what was decided and what was found. It fails only when the repository
 * cannot be read; what differs, the shipment that sets the repository sets.
 */
export const ReadTheRepositorySettings = entryPoint({
  owner: "trame",
  in: TrameSdlc, for: TheOperators,
  serves: [ExecutableSpecification],
  trigger: command("read-repository-settings"),
  deps: { repository: RepositoryApi, name: TheRepository, settings: MainBranch, compared: RepositoryCompared, say: SdlcWords, exit: ExitStatus, counts: Counts },
  body: code.file("./code/sdlc/read-the-repository-settings.ts"),
})

/**
 * Set the repository's settings
 * Sets Trame's repository on GitHub as the graph decides, with the rights of whoever runs it (an administrator of the
 * repository), then reads it back: it succeeds when the repository holds every part of the settings, and fails saying
 * the call GitHub did not take, or each part that still differs.
 */
export const ApplyTheRepositorySettings = entryPoint({
  owner: "trame",
  in: TrameSdlc, for: TheOperators,
  serves: [ExecutableSpecification],
  trigger: command("apply-repository-settings"),
  deps: { repository: RepositoryApi, name: TheRepository, settings: MainBranch, compared: RepositoryCompared, say: SdlcWords, exit: ExitStatus, counts: Counts },
  body: code.file("./code/sdlc/apply-the-repository-settings.ts"),
})

/**
 * The repository is read from GitHub
 * A program of the SDLC reads Trame's repository through GitHub's command line, with the token of whoever ships: what
 * its run proves is the realization of the machine, which no scenario in memory runs. It passes whether or not the
 * repository holds the settings, which it says.
 */
export const RepositoryRead = check({ owner: "trame", on: [], runs: ReadTheRepositorySettings, by: Maintainers, verifies: [GitHubCliRepository] })

/**
 * The repository left by hand, in the scenario
 * The state of the repository as someone left it: every method offered, nothing protected, one check required.
 */
export const RepositoryScenarioData = decision<{ left: RepositoryState }>({
  owner: "trame",
  value: { left: { methods: ["merge", "squash", "rebase"], autoMerge: false, deletesMerged: false, protected: false, checks: ["trame"], upToDate: false } },
})

/**
 * The repository is set as the graph decides
 * In memory, a repository left by hand is read: it does not hold the settings, and each part that differs is said;
 * setting it applies the settings once, and it holds them, read back; read again, it says so.
 */
export const SettingTheRepository = scenario({
  owner: "trame",
  verifies: [ReadTheRepositorySettings, ApplyTheRepositorySettings],
  env: Test,
  deps: {
    read: ReadTheRepositorySettings, apply: ApplyTheRepositorySettings, kept: RepositoryKept, name: TheRepository, settings: MainBranch,
    data: RepositoryScenarioData, say: SdlcWords, exit: ExitStatus, counts: Counts, messages: ScenarioMessages,
  },
  body: ({ read, apply, kept, name, settings, data, say, exit, counts, messages }) => async (check) => {
    kept.set(name.name, data.left)
    const left = await read({ params: {} })
    const [first, ...parts] = left.body as string[]
    check(messages.repositoryReadAsLeft(), left.status === exit.success && first === say.notAsDecided(name.name) && counts.any(parts))
    const set = await apply({ params: {} })
    const [applied] = kept.applied()
    check(messages.repositorySet(), set.status === exit.success && JSON.stringify(set.body) === JSON.stringify([say.set(name.name)]) &&
      counts.single(kept.applied()) && applied?.repository === name.name && JSON.stringify(applied?.settings) === JSON.stringify(settings))
    const after = await read({ params: {} })
    check(messages.repositoryReadAsSet(), after.status === exit.success && JSON.stringify(after.body) === JSON.stringify([say.asDecided(name.name)]))
  },
})

/**
 * How the repository is set
 * The way Trame sets its repository: the program that sets it verified (a gap is an error), the rules held, its callers
 * identified; and the foundations, as always.
 */
export const SettingsMode = policy({ owner: "trame", obligations: [EngineVerified, ArchitectureRuled, EngineCallersIdentified] })

/**
 * The repository as decided
 * Trame's repository on GitHub set as the graph decides (MainBranch): the repository read from GitHub first, then set by
 * a program of the SDLC and read back. An administrator of the repository ships it, with their own token:
 * ./trame.sh ship RepositorySet --by <name>.
 */
export const RepositorySet = shipment({
  owner: "trame",
  target: "github",
  ships: [],
  requires: [RepositoryRead],
  policy: SettingsMode,
  deploys: [ApplyTheRepositorySettings],
  environment: Local,
})

/**
 * The files that run it elsewhere
 * The workflow that checks each pull request, written by trame ship from the graph and kept in the repository where
 * GitHub finds it.
 */
export const RunnersWritten = shipment({
  owner: "trame",
  target: "repository",
  ships: [PullRequestWorkflow],
})

// The commands Trame takes from std (E3, P2a) ---------------------------------------------------------------------------

/** A project of Trame's repository, as Trame decides it. */
export interface RepositoryProject {
  /** Its name, by which the others import it as a library. */
  readonly name: string
  /** Its directory from the repository's root. */
  readonly dir: string
  /** The shipment that writes its files that run elsewhere. */
  readonly runners?: string
  /** It builds at the day of Trame's scenarios, which compare their documents with it. */
  readonly scenarios?: boolean
  /** The projects it reads besides its libraries. */
  readonly reads?: readonly string[]
}

/**
 * The repository's projects
 * The projects Trame's repository holds, by their name and directory: what a pull request may change, what a version
 * is carried across. Each writes the workflow that checks its pull requests by its shipment RunnersWritten, but
 * geometry, which GitHub's runners cannot build; the example builds at the day of Trame's scenarios, and Trame, which
 * reads its documents, after it.
 */
export const RepositoryProjects = decision<readonly RepositoryProject[]>({
  owner: "trame",
  value: [
    { name: "trame", dir: ".", runners: "RunnersWritten", reads: ["reservations"] },
    { name: "std", dir: "std", runners: "RunnersWritten" },
    { name: "ci", dir: "ci", runners: "RunnersWritten" },
    { name: "team", dir: "libs/team", runners: "RunnersWritten" },
    { name: "data", dir: "libs/data", runners: "RunnersWritten" },
    { name: "geometry", dir: "libs/geometry" },
    { name: "reservations", dir: "examples/reservations", runners: "RunnersWritten", scenarios: true },
    { name: "poselia", dir: "apps/poselia", runners: "RunnersWritten" },
  ],
  rejected: {
    "Found on the disk, by their trame.json": "a generation keeps a copy of the example, which is not a project of the repository",
    "In the order they are carried": "the order follows from the libraries each one imports; what one reads besides is said",
  },
})

/**
 * How Trame's pull requests are opened
 * Into main, merged as the repository merges them, by GitHub once they hold unless they change what people decided (as
 * the pull requests' workflow says): a lock of one of the repository's projects.
 */
export const OurPullRequests = fn({
  owner: "trame", implements: [PullRequestSettings], serves: [ExecutableSpecification],
  deps: { repository: TheRepository, main: MainBranch, workflow: PullRequestsOnGitHub, layout: Layout, projects: RepositoryProjects, ways: MergeWays },
  body: ({ repository, main, workflow, layout, projects, ways }) => {
    // Without a way said for pull requests, a person merges them.
    const [byHand] = ways as readonly [MergeWay]
    return {
      repository: repository.name, base: main.branch, method: main.method, merge: workflow.pullRequest?.merge ?? byHand,
      lock: layout.lock, projects: projects.map(({ name, dir }) => ({ name, dir })),
    }
  },
})

/**
 * How a version is carried across Trame's repository
 * By trame.sh at its root, with the words of Trame's command line, across the repository's projects; the example at
 * the day of the scenarios.
 */
export const OurPropagation = fn({
  owner: "trame", implements: [PropagationSettings], serves: [ExecutableSpecification],
  deps: {
    layout: Layout, start: ProjectStart, typescript: TypeScript, posix: Posix, texts: Texts, line: TrameCommands, variables: TrameEnvironment, day: TestDay,
    projects: RepositoryProjects,
  },
  body: ({ layout, start, typescript, posix, texts, line, variables, day, projects }) => {
    // What an upgrade moves: the configuration, and the module of packages trame init writes (since g91).
    const [extension] = typescript.extensions
    const packages = extension === undefined ? [] : [texts.concat([layout.sources, posix.slash, start.references, extension])]
    return {
      engine: { launcher: layout.launcher, upgrade: line.upgrade, ship: line.ship, build: line.build, by: line.by, today: variables.today },
      configuration: layout.configuration,
      references: [layout.configuration, ...packages],
      projects: projects.map(({ scenarios, ...p }) => (scenarios ? { ...p, day } : p)),
    }
  },
})

/**
 * The commands Trame takes from std
 * pull-request, merge and propagate, on the machine and in a session of Claude Code, with Trame's settings.
 */
export const CommandsOfStd = binding({
  owner: "trame",
  chooses: [OpenPullRequest, MergePullRequest, Propagate, OurPullRequests, OurPropagation],
  environments: [Local, Session],
  follows: [Command],
  serves: [ExecutableSpecification],
  context: "Opening a pull request and carrying a version across the repository were done by hand, with gh and a loop of trame.sh, differently each time.",
  rejected: { "Commands of Trame's own": "any project of a repository opens pull requests: std writes them once, Trame chooses them" },
})

/**
 * The repository's work on a machine
 * Git's command line for the branches, GitHub's for the pull requests, Node to run trame.sh in each project, and the
 * machine's files; on the machine and in a session.
 */
export const RepositoryWorkOnAMachine = binding({
  owner: "trame",
  chooses: [GitCliBranches, GitHubCliPullRequests, NodeProgramRuns, MachineFiles],
  environments: [Local, Session],
  follows: [Adapter],
  context: "A pull request is opened, and a version carried, from the repository checked out, with the rights of whoever runs it.",
})

/**
 * GitHub merges once it holds, asked by its command line
 * On a person's machine, gh pr merge --auto: GitHub's GraphQL.
 */
export const AutoMergeOnTheMachine = binding({
  owner: "trame",
  chooses: [AutoMergeByGitHubCli],
  environments: [Local],
  follows: [Adapter],
  context: "GitHub asks the automatic merge by GraphQL, which GitHub's command line calls with the token of the person.",
})

/**
 * GitHub merges once it holds, asked in a session
 * In a session of Claude Code, the route of its proxy: GraphQL is refused there.
 */
export const AutoMergeInASession = binding({
  owner: "trame",
  chooses: [AutoMergeInAClaudeSession],
  environments: [Session],
  follows: [Adapter],
  context: "A session's proxy refuses GitHub's GraphQL, and offers PUT on the pull request's ccr/auto_merge instead.",
})

/**
 * Trame's settings in the scenarios
 * In the scenarios, std's commands read Trame's settings as on the machine.
 */
export const OurSettingsInTheScenarios = binding({
  owner: "trame",
  chooses: [OurPullRequests, OurPropagation],
  environments: [Test],
  follows: [Strategy],
  context: "What the settings give is played before a command of std reads them on the machine.",
})

/**
 * Trame's settings, as std's commands read them
 * A pull request goes into main, merged as the repository merges, by GitHub once it holds unless it changes a lock of
 * one of the repository's projects; a version is carried by trame.sh with Trame's words, across each project, the
 * example at the day of the scenarios and it alone.
 */
export const OurCommandsSettled = scenario({
  owner: "trame",
  verifies: [OurPullRequests, OurPropagation],
  env: Test,
  deps: {
    pulls: PullRequestSettings, carried: PropagationSettings, repository: TheRepository, main: MainBranch, projects: RepositoryProjects, layout: Layout,
    line: TrameCommands, day: TestDay, workflow: PullRequestsOnGitHub, messages: ScenarioMessages,
  },
  body: ({ pulls, carried, repository, main, projects, layout, line, day, workflow, messages }) => async (check) => {
    check(messages.ourPullRequestsSettled(), pulls.repository === repository.name && pulls.base === main.branch && pulls.method === main.method &&
      pulls.merge === workflow.pullRequest?.merge && pulls.lock === layout.lock && pulls.projects.length === projects.length)
    const dated = carried.projects.filter((p) => p.day !== undefined)
    const [scenarios] = projects.filter((p) => p.scenarios)
    check(messages.ourPropagationSettled(), carried.engine.launcher === layout.launcher && carried.engine.upgrade === line.upgrade &&
      carried.configuration === layout.configuration && carried.projects.length === projects.length &&
      dated.length === [scenarios].length && dated.every((p) => p.day === day && p.name === scenarios?.name))
  },
})

// A generation advanced in one command (E3, P2b) ------------------------------------------------------------------------

/** What an advance assembles, for where, and the shipment the candidate then ships: named as the command line names them. */
export interface GenerationAdvance {
  readonly assembled: readonly string[]
  readonly environment: string
  readonly shipment: string
}

/**
 * How a generation advances
 * The generation in place assembles the engine's command line (the candidate) and Trame's SDLC (the programs of its
 * checks), for the machine; then the candidate ships the next generation, judging what it builds as the generation it
 * will be.
 */
export const HowAGenerationAdvances = decision<GenerationAdvance>({
  owner: "trame",
  value: { assembled: ["TrameCli", "TrameSdlc"], environment: "Local", shipment: "NextGeneration" },
  rejected: {
    "Each step typed by hand": "three commands and the candidate called by its path, in an order nothing checked (until g118)",
    "Shipped by the generation in place": "what it built would be judged by the engine that is leaving: evidence of another engine than the one pinned once it is deployed",
  },
})

/**
 * Advance
 * trame advance --by <name> [--accept] [--promote "what changes"]: the generation in place assembles the candidate and
 * Trame's SDLC, then the candidate ships the next generation with the rest of the line (it builds, compares, checks,
 * and with --promote freezes itself and moves the pins). It stops where an assembly fails.
 */
export const AdvanceAGeneration = entryPoint({
  owner: "trame",
  in: TrameSdlc, for: TheOperators,
  serves: [ExecutableSpecification],
  trigger: command("advance"),
  deps: {
    runs: ProgramRuns, currentProcess: Process, events: NodeEvents, exit: ExitStatus, layout: Layout, line: TrameCommands, advancing: HowAGenerationAdvances,
    candidate: EngineCandidate, typescript: TypeScript, names: ProgramNames, say: SdlcWords, posix: Posix, texts: Texts, sequences: Sequences,
  },
  body: code.file("./code/sdlc/advance-a-generation.ts"),
})

/**
 * Who advances, and what changes
 * What the scenario of the advance types after its name.
 */
export const AdvanceSample = decision<{ person: string; what: string }>({
  owner: "trame",
  value: { person: "claude", what: "A change" },
})

/**
 * A generation advanced in one command
 * Without a name, nothing is assembled; with one, the generation in place assembles the candidate and Trame's SDLC for
 * the machine, in that order, then the candidate is started on the next generation's shipment with the rest of the
 * line, its launcher leading the names of the packages; its status is the command's.
 */
export const AdvancedInOneCommand = scenario({
  owner: "trame",
  verifies: [AdvanceAGeneration],
  env: Test,
  deps: {
    advance: AdvanceAGeneration, runs: ProgramRunsKept, processLog: ProcessLog, line: TrameCommands, advancing: HowAGenerationAdvances, sample: AdvanceSample,
    names: ProgramNames, exit: ExitStatus, texts: Texts, messages: ScenarioMessages,
  },
  body: ({ advance, runs, processLog, line, advancing, sample, names, exit, texts, messages }) => async (check) => {
    const refused = await advance({ params: {}, body: { args: [] } })
    check(messages.advanceNeedsAName(), refused.status === exit.failure && runs.runs().length === processLog.started().length)
    processLog.answer(texts.empty, exit.success)
    const rest = [line.by, sample.person, line.promote, sample.what]
    const done = await advance({ params: {}, body: { args: rest } })
    const assembled = runs.runs().map((r) => JSON.stringify(r.args))
    const expected = advancing.assembled.map((c) => JSON.stringify([line.assemble, c, line.env, advancing.environment]))
    const [started] = processLog.started()
    check(messages.advanceAssemblesThenShips(), done.status === exit.success && JSON.stringify(assembled) === JSON.stringify(expected) &&
      JSON.stringify(started?.args) === JSON.stringify([line.ship, advancing.shipment, ...rest]) && !!started?.program.includes(names.launcher))
  },
})
