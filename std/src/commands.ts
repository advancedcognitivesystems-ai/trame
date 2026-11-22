/** Standard library · Commands */

import { code } from "#trame/kernel"
import { component } from "#trame/kinds/component"
import { port } from "#trame/kinds/port"
import { entryPoint, command } from "#trame/kinds/entry-point"
import { catalog } from "#trame/kinds/catalog"
import { decision } from "#trame/kinds/decision"
import { adr } from "#trame/kinds/adr"
import { MergeWays } from "#ci/github"
import type { MergeWay } from "#ci/github"
import { ChosenCommands } from "./product"
import { TheOperators } from "./access"
import { ProgramCommands, Files, ProgramRuns } from "./tooling"
import { Branches, PullRequests } from "./repository"
import type { MergeMethod } from "./repository"
import { ExitStatus, Posix } from "./system"
import { Counts, Sequences, Texts, ValueTypes } from "./algebra"
import { Command } from "./patterns"

// The commands the library offers (E3, std 0.22.0). A project runs one when a technical choice of its own chooses it,
// with what answers the ports of its settings: a function of the project that gives its own decisions (the repository,
// the way pull requests merge, the projects of the repository). trame <name> then assembles the commands the project
// chose, for the environment the choice holds in, and runs the one named. A command never carries a value of a project.

/**
 * The library's commands
 * The component whose entry points are the commands the library offers: a program's command line, whose first argument
 * names the command. It names no environment: a project assembles it where its choice holds.
 */
export const LibraryCommands = component({
  owner: "trame",
  language: "typescript",
  deps: { exposure: ProgramCommands },
})

/** How a project's pull requests are opened and merged: what it decides. */
export interface PullRequestWay {
  /** The repository on GitHub, owner/name. */
  readonly repository: string
  /** The branch a pull request goes into. */
  readonly base: string
  /** How it is merged. */
  readonly method: MergeMethod
  /** Whether GitHub merges it once it holds (a word of ci's MergeWays). */
  readonly merge: MergeWay
  /** The file a project freezes what people decide in. */
  readonly lock: string
  /** The repository's projects, by their name and directory from its root: a lock changed in one is what people decided. */
  readonly projects: readonly { readonly name: string; readonly dir: string }[]
}

/**
 * How pull requests are opened
 * The settings of the command pull-request: a project answers it with its own decisions.
 */
export const PullRequestSettings = port<PullRequestWay>({ owner: "trame", declaredEffects: [] })

/** A project of the repository, as a version is carried across them. */
export interface ProjectToPropagate {
  /** Its name, by which the others import it as a library. */
  readonly name: string
  /** Its directory from the repository's root. */
  readonly dir: string
  /** The day it builds at, when not today: its documents are compared at that day. */
  readonly day?: string
  /** The shipment that writes its files that run elsewhere. */
  readonly runners?: string
  /** The projects it reads besides its libraries, by name: what they write comes first. */
  readonly reads?: readonly string[]
}

/** How a version is carried across the projects of a repository: what the project at its root decides. */
export interface Propagation {
  /** The engine as each project runs it: its launcher from the repository's root, and the words of its command line. */
  readonly engine: {
    readonly launcher: string; readonly upgrade: string; readonly ship: string; readonly build: string; readonly by: string; readonly today: string
  }
  /** The file a project is described in, which names its libraries. */
  readonly configuration: string
  /**
   * The files that record the versions a project references, from its directory: what an upgrade moves (its
   * configuration, its module of packages); its files that run elsewhere are written again when one of them moved.
   */
  readonly references: readonly string[]
  /** The repository's projects. */
  readonly projects: readonly ProjectToPropagate[]
}

/**
 * How a version is carried
 * The settings of the command propagate: the project at the repository's root answers it with its own decisions.
 */
export const PropagationSettings = port<Propagation>({ owner: "trame", declaredEffects: [] })

/** The language the library's commands speak in. */
export const CommandLanguage = decision<{ tag: string }>({ owner: "trame", value: { tag: "en-GB" } })

/**
 * What the library's commands say
 */
export const CommandWords = catalog({
  owner: "trame",
  language: CommandLanguage,
  messages: () => ({
    pullRequestUsage: () => `Give the pull request's title: trame pull-request "Title" ["What it changes"]`,
    noBranch: () => "No branch is checked out",
    onTheBase: (base: string) => `${base} is checked out: open a pull request from the branch of your work`,
    notPushed: (branch: string) => `The branch ${branch} could not be pushed`,
    changesUnread: (base: string) => `What the branch changes against ${base} could not be read`,
    openRefused: () => "GitHub refused to open the pull request",
    opened: (number: number, url: string) => `Pull request #${number} opened: ${url}`,
    alreadyOpen: (number: number, url: string) => `Pull request #${number} is already open: ${url}`,
    mergesOnceItHolds: (method: string) => `GitHub merges it once it holds, by ${method}`,
    mergeRefused: () => "GitHub did not take the merge once it holds: a person merges it",
    decided: (locks: readonly string[]) => `It changes what people decided (${locks.join(", ")}): a person merges it`,
    byHand: () => "A person merges it",
    pullRequestBody: (description: string, projects: readonly string[], locks: readonly string[]) =>
      [
        description,
        projects.length ? `Projects it changes: ${projects.join(", ")}.` : "It changes no project.",
        locks.length ? `It changes what people decided: ${locks.join(", ")}. A person merges it.` : "It changes nothing people decided.",
        "Opened by trame pull-request, from the graph.",
      ].filter(Boolean).join("\n\n"),
    mergeUsage: () => "Merge the pull request of the branch checked out, or name it: trame merge [number]",
    noPullRequest: (branch: string) => `No pull request is open from ${branch || "the branch checked out"}: name it by its number`,
    pullRequestUnread: (number: number) => `Pull request #${number} could not be read`,
    notOpen: (number: number) => `Pull request #${number} is no longer open`,
    checksUnread: (number: number) => `The checks of pull request #${number} could not be read`,
    noCheck: (number: number) => `No check ran on pull request #${number}: nothing proves it, it is not merged`,
    checksFailed: (number: number, names: readonly string[]) => `Pull request #${number} is not merged: ${names.join(", ")} failed`,
    checksRunning: (number: number, names: readonly string[]) => `Pull request #${number} is not merged yet: ${names.join(", ")} still running`,
    mergingDecided: (locks: readonly string[]) => `It changes what people decided (${locks.join(", ")}): merged by the person who asks it`,
    mergeRefusedNow: (number: number) => `GitHub refused to merge pull request #${number}`,
    merged: (number: number, method: string) => `Pull request #${number} merged, by ${method}`,
    baseUpdated: (base: string) => `${base} checked out, as the repository has it now`,
    baseNotUpdated: (base: string) => `${base} could not be checked out as the repository has it: do it before going on`,
    propagateUsage: (by: string) => `Give the name of the person who propagates: trame propagate ${by} <name>`,
    upgrading: (name: string) => `${name}: its packages at their newest versions`,
    writingRunners: (name: string, shipment: string) => `${name}: its files that run elsewhere, written again (${shipment})`,
    building: (name: string, day?: string) => (day ? `${name}: built at ${day}` : `${name}: built`),
    propagationStopped: (name: string, step: string) => `Propagation stopped in ${name}, when ${step}`,
    propagated: (names: readonly string[]) => `Propagated: ${names.join(", ")}`,
  }),
})

/**
 * Open a pull request
 * trame pull-request "Title" ["What it changes"]: pushes the branch checked out, opens its pull request into the base
 * (or finds the one open), saying which projects it changes and whether it changes what people decided (a project's
 * lock); then asks GitHub to merge it once it holds, unless it changes what people decided and the project's way says a
 * person merges it then. Refused on the base itself.
 */
export const OpenPullRequest = entryPoint({
  owner: "trame",
  in: LibraryCommands, for: TheOperators,
  serves: [ChosenCommands],
  trigger: command("pull-request"),
  deps: {
    settings: PullRequestSettings, branches: Branches, pulls: PullRequests, ways: MergeWays, say: CommandWords, exit: ExitStatus, counts: Counts,
    posix: Posix, texts: Texts,
  },
  body: code.file("./code/commands/open-pull-request.ts"),
})

/**
 * Merge a pull request
 * trame merge [number]: the pull request of the branch checked out, or the one named by its number. Refused while no
 * check ran on its last commit, or one failed or still runs; says whose decisions it changes (a project's lock); merges
 * it now by the method decided; then, when its branch was the one checked out, checks the base out as the repository
 * has it.
 */
export const MergePullRequest = entryPoint({
  owner: "trame",
  in: LibraryCommands, for: TheOperators,
  serves: [ChosenCommands],
  trigger: command("merge"),
  deps: { settings: PullRequestSettings, branches: Branches, pulls: PullRequests, say: CommandWords, exit: ExitStatus, counts: Counts, posix: Posix, texts: Texts, values: ValueTypes },
  body: code.file("./code/commands/merge-pull-request.ts"),
})

/**
 * Propagate
 * trame propagate --by <name>: carries the versions published across the projects of the repository, each after the
 * libraries it imports and the projects it reads (two that import each other: the one decided first): its packages at
 * their newest versions, its files that run elsewhere written again when a reference moved, its documents built again
 * (at its day, when it has one). It stops at the first step that fails, saying where.
 */
export const Propagate = entryPoint({
  owner: "trame",
  in: LibraryCommands, for: TheOperators,
  serves: [ChosenCommands],
  trigger: command("propagate"),
  deps: { settings: PropagationSettings, files: Files, programs: ProgramRuns, say: CommandWords, exit: ExitStatus, sequences: Sequences, posix: Posix, texts: Texts },
  body: code.file("./code/commands/propagate.ts"),
})

/**
 * A library offers commands, a project chooses them
 * The commands any project of a repository needs (open a pull request, carry a version across) are written once, in
 * the library; a project runs one when a technical choice of its own chooses it, with its decisions as settings.
 */
export const CommandsOfALibrary = adr({
  owner: "trame",
  context: "Opening a pull request, carrying a version across the projects, were done by hand or by a script of whoever worked: nothing in the graph said how, nor checked it.",
  consequences: "The library's component LibraryCommands holds the commands; a project chooses those it runs by a binding that follows Command, with a function of its own for each port of settings (its repository, its way of merging, its projects); trame <name> runs them as the project's own commands. A command reads no value of a project but through its settings.",
  rejected: {
    "A command written by each project": "the same pull request opened six ways, none of them checked",
    "Settings named by the binding": "a new concept in two kinds, and nothing checks that the decision has the type the command reads",
  },
  serves: [ChosenCommands],
  appliedBy: [LibraryCommands, OpenPullRequest, MergePullRequest, Propagate, Command],
})
