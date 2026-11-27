/** Standard library · Scenarios */

import { environment } from "#trame/kinds/environment"
import { binding } from "#trame/kinds/binding"
import { decision } from "#trame/kinds/decision"
import { catalog } from "#trame/kinds/catalog"
import { scenario } from "#trame/kinds/scenario"
import { adr } from "#trame/kinds/adr"
import { SharedOperations, RealizedOnce } from "./product"
import { SeededDraws } from "./algorithms"
import {
  PreferencesStore, MemoryPreferences, SpeechVoice, SpeechHeard, WrittenSpeech, ScreenAwake, ScreenKeptAwake, AwakeInMemory, AnimationFrames, TimeTurned,
  FramesByHand,
} from "./platform"
import { Files, FilesKept, FilesInMemory, HeadlessBrowser, BrowserScripted, BrowserInMemory, ProgramRunsInMemory, ProgramRunsKept } from "./tooling"
import { fn } from "#trame/kinds/function"
import {
  OpenPullRequest, MergePullRequest, Propagate, PullRequestSettings, PropagationSettings, CommandWords, type PullRequestWay, type Propagation,
} from "./commands"
import { BranchesInMemory, BranchesKept, PullRequestsInMemory, PullRequestsKept, type PullRequestOpen } from "./repository"
import { Strategy, Adapter } from "./patterns"
import { ReadByTheEngine, LanguageReading } from "./engine"
import { HtmlMarkup, CssStyleSheets } from "./languages"
import { Commands, Effects } from "./effects"
import { Counts, Sequences } from "./algebra"
import { ExitStatus } from "./system"
import { RepositoryApi, RepositoryKept, RepositoryInMemory, RepositoryCompared } from "./repository"
import { Hardening, AsTheLanguageSays, EveryWarning } from "./judgment"
import { HoleCode, Severity } from "#trame/kernel"
import type { RepositorySettings, RepositoryState } from "./repository"

// What the library offers to scenarios is code like the rest: its realizations kept in memory are played here, against
// the contract of their ports, and its draws against what they promise. Its realizations on a device or a machine are
// chosen, and verified, by the projects that run them.

/**
 * Test
 * Where the library's scenarios run: its realizations kept in memory.
 */
export const Test = environment({ owner: "trame", evaluates: true })

/**
 * In memory
 * In the library's scenarios, each port of a device or of the tooling is answered by its realization kept in memory.
 */
export const InMemory = binding({
  owner: "trame",
  chooses: [
    MemoryPreferences, WrittenSpeech, AwakeInMemory, FramesByHand, FilesInMemory, BrowserInMemory, RepositoryInMemory, BranchesInMemory, PullRequestsInMemory,
    ProgramRunsInMemory,
  ],
  environments: [Test],
  follows: [Strategy],
  serves: [RealizedOnce],
  context: "A realization kept in memory is what a project's scenarios run in place of the device: it must keep its port's promise.",
})

/**
 * Read by the engine that builds
 * Where the library's build evaluates, its languages (HTML, CSS) are read by the engine that compiles it: their
 * examples, and what the syntax elements of a library write in them.
 */
export const ReadInTheEngine = binding({
  owner: "trame",
  chooses: [ReadByTheEngine],
  environments: [Test],
  follows: [Adapter],
  serves: [RealizedOnce],
  context: "Reading a language is the engine's: the grammar and its reader are the engine's packages, which no library carries.",
})

/**
 * Judged as the language says
 * Where the library's build evaluates, it raises nothing: each problem as the language judges it.
 */
export const LanguageJudgment = binding({
  owner: "trame",
  chooses: [AsTheLanguageSays],
  environments: [Test],
  follows: [Strategy],
  serves: [RealizedOnce],
  context: "The library raises nothing the language does not: its warnings are points to watch, as in any project that says nothing.",
})

/**
 * Strict
 * Where a scenario plays the strict judgment: every warning an error.
 */
export const Strict = environment({ owner: "trame" })

/**
 * Judged strictly
 * In Strict, every warning is an error.
 */
export const StrictJudgment = binding({
  owner: "trame",
  chooses: [EveryWarning],
  environments: [Strict],
  follows: [Strategy],
  serves: [RealizedOnce],
  context: "A project that leaves nothing to watch chooses it; the library plays it here, through its port, as such a project would.",
})

/**
 * The language of the library's scenarios
 */
export const ScenarioLanguage = decision<{ tag: string }>({ owner: "trame", value: { tag: "en-GB" } })

/**
 * What the library's scenarios check
 */
export const ScenarioChecks = catalog({
  owner: "trame",
  language: ScenarioLanguage,
  messages: () => ({
    sameSeedSameDraws: () => "The same seed draws the same numbers, a text the same seed",
    languageRead: (language: string) => `The engine loads ${language}'s grammar and its queries, which use only the predicates tree-sitter evaluates`,
    otherSeedOthers: () => "Another seed draws others",
    integersWithin: (lo: number, hi: number) => `Integers drawn between ${lo} and ${hi} stay between them, and reach both`,
    weightedByWeight: () => "An element is drawn by its weight: one that weighs nothing never is; nothing from a list that weighs nothing",
    preferencesKept: () => "A preference set is read back, another stays unset",
    speechHeard: () => "What the voice says is heard, in its language",
    awakeKept: () => "The screen is kept awake, then released",
    framesTurned: () => "Time turned by hand calls each frame started with the seconds since its start, until it stops",
    filesKept: () => "A file written exists, is read back, copied, fingerprinted alike, and kept for the scenario",
    pageShown: () => "A page scripted shows what it was given: its elements, their text, its errors; the clicks and the choices are kept",
    commandsMade: () => "A command is made for each effect, from its text, which it keeps as it is",
    repositoryLeft: () => "A repository left by hand is read back as it was left, and differs from the settings where it does",
    repositoryApplied: () => "Settings applied are kept, and the repository read back holds them all, its pages when asked",
    judgedAsTheLanguage: () => "As the language says, a warning stays a warning and an error an error",
    judgedStrictly: () => "Strictly, a warning becomes an error, and an error and a blocking problem stay as they are",
    pullRequestMerging: () => "A branch that changes nothing people decided is pushed, its pull request opened into the base, and GitHub asked to merge it once it holds",
    pullRequestDecided: () => "A branch that changes a project's lock gets its pull request, which a person merges: GitHub is not asked",
    pullRequestFound: () => "A branch whose pull request is open finds it, and opens no other",
    pullRequestOnTheBase: () => "On the base itself, nothing is pushed nor opened",
    mergeWaitsForChecks: () => "A pull request is not merged while no check ran on its last commit, nor while one failed or still runs",
    mergedOnceItHolds: () => "Once its checks passed, it is merged by the method decided, saying whose decisions it changes, and the base is checked out as the repository has it",
    mergedOnce: () => "A pull request merged is no longer open: merging it again is refused",
    propagatedInOrder: () => "Each project is carried after the libraries it imports and the projects it reads, built at its day when it has one",
    runnersWhenMoved: () => "Its files that run elsewhere are written again only where the upgrade moved a reference",
    propagationStops: () => "A step that fails stops the propagation there, saying where",
  }),
})

/**
 * What the library's scenarios are given
 * Two seeds and a text; how many numbers to draw, between which bounds; items and their weights; a preference and a
 * value; a sentence and its language; the seconds turned; a file, its text and its copy; a page, a selector, a text, an
 * error.
 */
export const ScenarioData = decision<{
  seeds: number[]; text: string; draws: number; bounds: { lo: number; hi: number }
  weighted: { item: string; weight: number }[]; never: string
  preference: { name: string; value: string; unset: string }
  sentence: { text: string; language: string }
  turned: number[]
  file: { path: string; text: string; copy: string }
  page: { path: string; selector: string; count: number; text: string; error: string; language: string }
  command: string
  repository: { name: string; settings: RepositorySettings; left: RepositoryState; differs: string[] }
  pullRequest: { way: PullRequestWay; branch: string; title: string; free: string[]; decided: string[]; open: PullRequestOpen; elsewhere: string; check: string }
  propagation: { settings: Propagation; by: string; person: string; described: Record<string, string>; order: string[]; moves: { dir: string; path: string; to: string } }
}>({
  owner: "trame",
  value: {
    seeds: [1, 2], text: "a seed", draws: 200, bounds: { lo: 1, hi: 6 },
    weighted: [{ item: "light", weight: 1 }, { item: "heavy", weight: 3 }, { item: "never", weight: 0 }], never: "never",
    preference: { name: "voice", value: "off", unset: "pace" },
    sentence: { text: "Breathe in", language: "en" },
    turned: [0.5, 0.25],
    file: { path: "dist/page.html", text: "<p>a page</p>", copy: "public/index.html" },
    page: { path: "dist/page.html", selector: ".poses li", count: 12, text: "Mountain", error: "The page broke", language: "fr" },
    command: "SELECT 1",
    repository: {
      name: "owner/project",
      settings: { branch: "main", checks: ["project", "library"], upToDate: false, approvals: 1, method: "merge", autoMerge: true, deletesMerged: true, pages: true },
      left: { methods: ["merge", "squash"], autoMerge: false, deletesMerged: true, protected: false, checks: ["library"], upToDate: false },
      differs: ["methods", "autoMerge", "protected", "approvals", "checks"],
    },
    pullRequest: {
      way: {
        repository: "owner/project", base: "main", method: "merge", merge: "onceItHoldsUnlessDecided", lock: "trame.lock",
        projects: [{ name: "project", dir: "." }, { name: "app", dir: "apps/app" }],
      },
      branch: "work", title: "A change",
      free: ["src/product.ts", "apps/app/src/app.ts"], decided: ["apps/app/trame.lock", "apps/app/src/app.ts"],
      open: { number: 7, url: "https://github.com/owner/project/pull/7" }, elsewhere: "more-work", check: "project",
    },
    propagation: {
      settings: {
        engine: { launcher: "trame.sh", upgrade: "upgrade", ship: "ship", build: "build", by: "--by", today: "TRAME_TODAY" },
        configuration: "trame.json",
        references: ["trame.json", "src/packages.ts"],
        projects: [
          { name: "project", dir: ".", reads: ["example"], runners: "RunnersWritten" },
          { name: "example", dir: "examples/example", day: "2026-10-30", runners: "RunnersWritten" },
          { name: "app", dir: "apps/app", runners: "RunnersWritten" },
          { name: "lib", dir: "libs/lib" },
        ],
      },
      by: "--by", person: "ada",
      described: {
        "./trame.json": "{\"libraries\":{\"lib\":\"libs/lib\"}}",
        "examples/example/trame.json": "{\"libraries\":{\"lib\":\"../../libs/lib\",\"app\":\"../../apps/app\"}}",
        "apps/app/trame.json": "{\"libraries\":{\"lib\":{\"path\":\"../../libs/lib\",\"version\":\"0.1.0\"}}}",
        "libs/lib/trame.json": "{\"libraries\":{\"app\":{\"path\":\"../../apps/app\",\"version\":\"0.1.0\"}}}",
      },
      order: ["app", "lib", "example", "project"],
      moves: { dir: "apps/app", path: "apps/app/trame.json", to: "{\"libraries\":{\"lib\":{\"path\":\"../../libs/lib\",\"version\":\"0.2.0\"}}}" },
    },
  },
})

/**
 * How the scenarios' pull requests are opened
 * The settings of pull-request in the library's scenarios: a repository, its base and its two projects.
 */
export const ScenarioPullRequests = fn({
  owner: "trame", implements: [PullRequestSettings], serves: [RealizedOnce],
  deps: { data: ScenarioData },
  body: ({ data }) => data.pullRequest.way,
})

/**
 * How the scenarios' versions are carried
 * The settings of propagate in the library's scenarios: four projects, one read by the root, one built at its day.
 */
export const ScenarioPropagation = fn({
  owner: "trame", implements: [PropagationSettings], serves: [RealizedOnce],
  deps: { data: ScenarioData },
  body: ({ data }) => data.propagation.settings,
})

/**
 * The scenarios' settings
 * Where the library's scenarios run, its commands read the settings the scenarios give.
 */
export const ScenarioSettings = binding({
  owner: "trame",
  chooses: [ScenarioPullRequests, ScenarioPropagation],
  environments: [Test],
  follows: [Strategy],
  serves: [RealizedOnce],
  context: "A command of the library reads its settings through its ports: a scenario answers them with its own.",
})

/**
 * A pull request opened
 * A branch that changes nothing people decided is pushed, its pull request opened and GitHub asked to merge it once it
 * holds; one that changes a project's lock is opened, and left to a person; one whose pull request is open finds it; on
 * the base itself, nothing happens.
 */
export const PullRequestOpened = scenario({
  owner: "trame",
  verifies: [OpenPullRequest, BranchesInMemory, PullRequestsInMemory, ScenarioPullRequests],
  env: Test,
  deps: {
    open: OpenPullRequest, branches: BranchesKept, pulls: PullRequestsKept, data: ScenarioData, say: CommandWords, checks: ScenarioChecks, counts: Counts,
    exit: ExitStatus,
  },
  body: ({ open, branches, pulls, data, say, checks, counts, exit }) => async (check) => {
    const { way, branch, title, free, decided, open: existing, elsewhere } = data.pullRequest
    const asked = { params: { command: title }, body: { args: [title] } }
    const said = (answered: { body?: unknown }) => (answered.body ?? []) as readonly string[]
    branches.set(branch, free)
    const merging = await open(asked)
    const [first] = pulls.opened()
    check(checks.pullRequestMerging(), merging.status === exit.success && first?.asked.head === branch && first.asked.base === way.base &&
      counts.single(pulls.merging()) && branches.pushed().includes(branch) && said(merging).includes(say.mergesOnceItHolds(way.method)))
    branches.set(elsewhere, decided)
    const left = await open(asked)
    const [, second] = pulls.opened()
    const locks = decided.filter((path) => path.endsWith(way.lock))
    check(checks.pullRequestDecided(), left.status === exit.success && second?.asked.head === elsewhere && counts.single(pulls.merging()) &&
      said(left).includes(say.decided(locks)))
    pulls.openFrom(way.repository, elsewhere, existing)
    const found = await open(asked)
    check(checks.pullRequestFound(), said(found).includes(say.alreadyOpen(existing.number, existing.url)) && pulls.opened().length === [first, second].length)
    branches.set(way.base, free)
    const none = await open(asked)
    check(checks.pullRequestOnTheBase(), none.status === exit.failure && said(none).includes(say.onTheBase(way.base)))
  },
})

/**
 * A pull request merged once it holds
 * The pull request of the branch checked out waits while no check ran, one runs or one failed; once its checks passed
 * it is merged by the method decided, saying that it changes a project's lock, and the base is checked out; merged, it
 * is not merged again.
 */
export const MergedOnceItHolds = scenario({
  owner: "trame",
  verifies: [MergePullRequest, OpenPullRequest, BranchesInMemory, PullRequestsInMemory, ScenarioPullRequests],
  env: Test,
  deps: {
    open: OpenPullRequest, merge: MergePullRequest, branches: BranchesKept, pulls: PullRequestsKept, data: ScenarioData, say: CommandWords,
    checks: ScenarioChecks, counts: Counts, exit: ExitStatus,
  },
  body: ({ open, merge, branches, pulls, data, say, checks, counts, exit }) => async (check) => {
    const { way, branch, title, decided, check: name } = data.pullRequest
    const said = (answered: { body?: unknown }) => (answered.body ?? []) as readonly string[]
    branches.set(branch, decided)
    pulls.changes(branch, decided)
    await open({ params: { command: title }, body: { args: [title] } })
    const [opened] = pulls.opened()
    const number = pulls.opened().length
    const asked = { params: { command: name }, body: { args: [] } }
    const none = await merge(asked)
    pulls.ran(branch, [{ name }])
    const running = await merge(asked)
    pulls.ran(branch, [{ name, passed: false }])
    const failed = await merge(asked)
    check(checks.mergeWaitsForChecks(), [none, running, failed].every((r) => r.status === exit.failure) && counts.isEmpty(pulls.merged()) &&
      said(none).includes(say.noCheck(number)) && said(running).includes(say.checksRunning(number, [name])) && said(failed).includes(say.checksFailed(number, [name])))
    pulls.ran(branch, [{ name, passed: true }])
    const merged = await merge(asked)
    const locks = decided.filter((path) => path.endsWith(way.lock))
    check(checks.mergedOnceItHolds(), merged.status === exit.success && opened?.asked.head === branch && counts.single(pulls.merged()) &&
      JSON.stringify(said(merged)) === JSON.stringify([say.mergingDecided(locks), say.merged(number, way.method), say.baseUpdated(way.base)]) &&
      branches.checkedOut() === way.base)
    const again = await merge({ params: { command: name }, body: { args: [String(number)] } })
    check(checks.mergedOnce(), again.status === exit.failure && said(again).includes(say.notOpen(number)) && counts.single(pulls.merged()))
  },
})

/**
 * A version carried across the projects
 * Each project is carried after the libraries it imports and the projects it reads, built at its day when it has one;
 * its files that run elsewhere are written again where the upgrade moved a reference, and only there; a step that fails
 * stops it there.
 */
export const PropagatedInOrder = scenario({
  owner: "trame",
  verifies: [Propagate, ProgramRunsInMemory, ScenarioPropagation],
  env: Test,
  deps: {
    propagate: Propagate, files: Files, runs: ProgramRunsKept, data: ScenarioData, say: CommandWords, checks: ScenarioChecks, counts: Counts,
    sequences: Sequences, exit: ExitStatus,
  },
  body: ({ propagate, files, runs, data, say, checks, counts, sequences, exit }) => async (check) => {
    const { settings, by, person, described, order, moves } = data.propagation
    const { engine, projects } = settings
    for (const [path, text] of Object.entries(described)) files.write(path, text)
    runs.writeIn(moves.dir, moves.path, moves.to)
    const asked = { params: { command: by }, body: { args: [by, person] } }
    const done = await propagate(asked)
    const ran = runs.runs()
    const nameOf = (dir: string) => projects.find((p) => p.dir === dir)?.name
    const carried = [...new Set(ran.map((r) => nameOf(r.dir)))]
    const [dated] = projects.filter((p) => p.day !== undefined)
    const built = ran.filter((r) => r.args.includes(engine.build))
    check(checks.propagatedInOrder(), done.status === exit.success && JSON.stringify(carried) === JSON.stringify(order) &&
      built.some((r) => r.dir === dated?.dir && r.variables?.[engine.today] === dated.day))
    const shipped = ran.filter((r) => r.args.includes(engine.ship))
    check(checks.runnersWhenMoved(), counts.single(shipped) && shipped.every((r) => r.dir === moves.dir && r.args.includes(person)))
    const before = ran.length
    runs.failIn(moves.dir)
    const stopped = await propagate(asked)
    const last = sequences.last(runs.runs().slice(before))
    const moved = nameOf(moves.dir) ?? moves.dir
    check(checks.propagationStops(), stopped.status === exit.failure && last?.dir === moves.dir &&
      JSON.stringify(stopped.body) === JSON.stringify([say.propagationStopped(moved, say.upgrading(moved))]))
  },
})

/**
 * A repository kept in memory
 * A repository left by hand is read back as it was, and compared with the settings: what differs is said, part by part.
 * The settings applied are kept for the scenario, and the repository read back holds them all, its pages when asked.
 */
export const RepositoryInMemoryKeeps = scenario({
  owner: "trame",
  verifies: [RepositoryInMemory, RepositoryCompared],
  env: Test,
  deps: { repository: RepositoryApi, kept: RepositoryKept, compared: RepositoryCompared, data: ScenarioData, checks: ScenarioChecks, counts: Counts },
  body: ({ repository, kept, compared, data, checks, counts }) => async (check) => {
    const { name, settings, left, differs } = data.repository
    kept.set(name, left)
    const before = await repository.read(name, settings.branch, false)
    const found = before && compared(settings, before).map((d) => d.part)
    check(checks.repositoryLeft(), JSON.stringify(before) === JSON.stringify(left) && JSON.stringify(found) === JSON.stringify(differs))
    const failed = await repository.apply(name, settings)
    const after = await repository.read(name, settings.branch, settings.pages)
    const [applied] = kept.applied()
    check(checks.repositoryApplied(), failed === undefined && after !== undefined && after.pages === settings.pages &&
      counts.isEmpty(compared(settings, after)) && applied?.repository === name && counts.single(kept.applied()))
  },
})

/**
 * Judged as the language says
 * Through its port where the library's build evaluates, a warning stays a warning, an error an error.
 */
export const JudgedAsTheLanguage = scenario({
  owner: "trame",
  verifies: [AsTheLanguageSays],
  env: Test,
  deps: { judge: Hardening, checks: ScenarioChecks },
  body: ({ judge, checks }) => async (check) => {
    check(checks.judgedAsTheLanguage(), judge.severityOf({ code: HoleCode.ownerMissing, severity: Severity.warning }) === Severity.warning &&
      judge.severityOf({ code: HoleCode.literalInBody, severity: Severity.error }) === Severity.error)
  },
})

/**
 * Judged strictly
 * Through its port in Strict, a warning becomes an error, an error and a blocking problem stay as they are.
 */
export const JudgedStrictly = scenario({
  owner: "trame",
  verifies: [EveryWarning],
  env: Strict,
  deps: { judge: Hardening, checks: ScenarioChecks },
  body: ({ judge, checks }) => async (check) => {
    check(checks.judgedStrictly(), judge.severityOf({ code: HoleCode.ownerMissing, severity: Severity.warning }) === Severity.error &&
      judge.severityOf({ code: HoleCode.literalInBody, severity: Severity.error }) === Severity.error &&
      judge.severityOf({ code: HoleCode.valueUndecided, severity: Severity.blocking }) === Severity.blocking)
  },
})

/**
 * Commands are made for each effect
 * The command maker gives, for each word of effects, a command of that intent from its text, and the text it was given
 * is the command: nothing added, nothing lost.
 */
export const CommandsMade = scenario({
  owner: "trame",
  verifies: [Commands],
  env: Test,
  deps: { commands: Commands, effects: Effects, data: ScenarioData, checks: ScenarioChecks },
  body: ({ commands, effects, data, checks }) => async (check) => {
    const made = effects.map((e) => commands[e](data.command))
    check(checks.commandsMade(), made.length === effects.length && made.every((c) => c === data.command))
  },
})

/**
 * Seeded draws keep their promise
 * The same seed draws the same numbers, another seed others; integers drawn stay within their bounds and reach both; an
 * element is drawn by its weight, and one that weighs nothing never is.
 */
export const DrawsKeepTheirPromise = scenario({
  owner: "trame",
  verifies: [SeededDraws],
  env: Test,
  deps: { draws: SeededDraws, data: ScenarioData, counts: Counts, checks: ScenarioChecks },
  body: ({ draws, data, counts, checks }) => async (check) => {
    const [seed = counts.one, other = counts.zero] = data.seeds
    const series = (s: number) => {
      const next = draws.from(s)
      return Array.from({ length: data.draws }, () => next())
    }
    check(checks.sameSeedSameDraws(), series(seed).join() === series(seed).join() && draws.seedOf(data.text) === draws.seedOf(data.text))
    check(checks.otherSeedOthers(), series(seed).join() !== series(other).join())
    const next = draws.from(seed)
    const { lo, hi } = data.bounds
    const integers = Array.from({ length: data.draws }, () => draws.integer(next, lo, hi))
    check(checks.integersWithin(lo, hi), integers.every((n) => n >= lo && n <= hi) && integers.includes(lo) && integers.includes(hi))
    const picked = Array.from({ length: data.draws }, () => draws.weighted(next, data.weighted))
    check(checks.weightedByWeight(), !picked.includes(data.never) && picked.every((p) => p !== undefined) &&
      draws.weighted(next, data.weighted.filter((x) => x.item === data.never)) === undefined)
  },
})

/**
 * The device, in memory
 * The preferences kept read back what was set; the voice is heard saying what it says, in its language; the screen kept
 * awake is released; time turned by hand calls each frame started, with the seconds since its start, until it stops.
 */
export const DeviceInMemory = scenario({
  owner: "trame",
  verifies: [MemoryPreferences, WrittenSpeech, AwakeInMemory, FramesByHand],
  env: Test,
  deps: {
    preferences: PreferencesStore, voice: SpeechVoice, heard: SpeechHeard, screen: ScreenAwake, awake: ScreenKeptAwake, frames: AnimationFrames,
    time: TimeTurned, data: ScenarioData, counts: Counts, checks: ScenarioChecks,
  },
  body: ({ preferences, voice, heard, screen, awake, frames, time, data, counts, checks }) => async (check) => {
    const { preference, sentence } = data
    preferences.set(preference.name, preference.value)
    check(checks.preferencesKept(), preferences.get(preference.name) === preference.value && preferences.get(preference.unset) === undefined)
    voice.say(sentence.text, sentence.language)
    check(checks.speechHeard(), heard.said().some((s) => s.text === sentence.text && s.language === sentence.language))
    await screen.keep()
    const kept = awake.awake()
    screen.release()
    check(checks.awakeKept(), kept && !awake.awake())
    const seen: number[] = []
    const started = frames.start((seconds) => void seen.push(seconds))
    const [first = counts.zero, second = counts.zero] = data.turned
    time.turn(first)
    time.turn(second)
    started.stop()
    time.turn(first)
    check(checks.framesTurned(), seen.length === data.turned.length && seen.join() === [first, first + second].join())
  },
})

/**
 * The tooling, in memory
 * A file written exists, is read back, copied and fingerprinted alike, and kept for the scenario; a page scripted shows
 * what it was given, and the clicks on it are kept.
 */
export const ToolingInMemory = scenario({
  owner: "trame",
  verifies: [FilesInMemory, BrowserInMemory],
  env: Test,
  deps: { files: Files, kept: FilesKept, browser: HeadlessBrowser, script: BrowserScripted, data: ScenarioData, checks: ScenarioChecks },
  body: ({ files, kept, browser, script, data, checks }) => async (check) => {
    const { file, page } = data
    files.write(file.path, file.text)
    files.copy(file.path, file.copy)
    check(checks.filesKept(), files.exists(file.path) && files.read(file.copy) === file.text && files.fingerprint(file.copy) === files.fingerprint(file.path) &&
      kept.written().get(file.copy) === file.text)
    script.show(page.path, { elements: { [page.selector]: { count: page.count, text: page.text } }, errors: [page.error] })
    const shown = await browser.open(page.path, page.language)
    await shown.click(page.selector)
    await shown.choose(page.selector, page.text)
    check(checks.pageShown(), (await shown.count(page.selector)) === page.count && (await shown.text(page.selector)) === page.text &&
      shown.errors().includes(page.error) && script.clicks().includes(page.selector) &&
      script.choices().some((c) => c.selector === page.selector && c.value === page.text))
  },
})

/**
 * The languages read by the engine
 * HTML and CSS, read through the port the engine realizes: each grammar loads, and each query uses only the predicates
 * tree-sitter evaluates (none kept aside, which would let a pattern catch too much).
 */
export const LanguagesRead = scenario({
  owner: "trame",
  verifies: [ReadByTheEngine],
  env: Test,
  deps: { reader: LanguageReading, html: HtmlMarkup, css: CssStyleSheets, counts: Counts, checks: ScenarioChecks },
  body: ({ reader, html, css, counts, checks }) => async (check) => {
    for (const language of [html, css]) {
      const read = await reader.load(language).then(() => counts.isEmpty(reader.aside(language)), () => false)
      check(checks.languageRead(language.name), read)
    }
  },
})

/**
 * How the library's scenarios run
 * Every port the library's code touches is played in memory, by the realizations the library offers for that (they
 * keep their port's promise, as a project's scenarios need); a command's settings are the scenario's own; the library
 * judges as the language says, and plays the strict way of judging through its port in an environment of its own; its
 * languages are read by the engine that builds it, whose grammars no library carries.
 */
export const HowTheScenariosRun = adr({
  owner: "trame",
  context: "The library offers realizations in memory to every project's scenarios: its own scenarios prove that they keep their ports' promises, before any project relies on them.",
  consequences: "A project that judges harder chooses EveryWarning or one of its own (C4); the library leaves its warnings as points to watch. Reading HTML and CSS needs an engine: the library's build has one.",
  rejected: {
    "Scenarios on the machine": "they would touch the disk, a browser and GitHub at each build of the library",
    "Strict judgment for the library itself": "a library's warnings are often what its projects decide (a port nobody realizes here)",
  },
  serves: [RealizedOnce],
  appliedBy: [InMemory, ScenarioSettings, LanguageJudgment, StrictJudgment, ReadInTheEngine],
})
