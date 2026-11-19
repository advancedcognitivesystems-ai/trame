/** Standard library · Repositories on GitHub */

import { code } from "#trame/kernel"
import type { ProvidedBy } from "#trame/kernel"
import { standard } from "#trame/kinds/standard"
import { vocabulary } from "#trame/kinds/vocabulary"
import { port } from "#trame/kinds/port"
import { implementation } from "#trame/kinds/implementation"
import { fn } from "#trame/kinds/function"
import { adr } from "#trame/kinds/adr"
import { NodeCli, NodeEvents, ExitStatus } from "./system"
import { Texts, ValueTypes } from "./algebra"
import { RealizedOnce, CitedNotCopied } from "./product"

// The settings of a repository on GitHub, as a project's graph decides them: its main branch receives nothing but pull
// requests, which pass the checks the graph names and as many approvals as it says; GitHub may merge one once it holds,
// by the method the graph chooses, and delete its branch then; its pages are published by a workflow. A project applies
// them with a program of its SDLC, through the port RepositoryApi, and reads them back (std 0.20.0): nothing changes a
// repository's settings but a person who may, by trame ship, and what the repository holds is compared with what the
// graph decides.

/**
 * How GitHub merges a pull request
 * A merge commit keeps each commit of the branch (a generation is a commit); squashed, the branch is one commit;
 * rebased, its commits are replayed on the main branch.
 */
export const MergeMethods = vocabulary({
  owner: "trame",
  serves: [CitedNotCopied],
  words: { merge: "A merge commit: each commit of the branch kept", squash: "One commit for the branch", rebase: "Each commit replayed on the main branch" },
})
export type MergeMethod = ProvidedBy<typeof MergeMethods>[number]

/** How a repository merges into its main branch, and publishes its pages: what a project decides for its repository. */
export interface RepositorySettings {
  /** The branch pull requests merge into: nothing reaches it but a pull request; it is never deleted nor rewritten. */
  readonly branch: string
  /** The checks a pull request must pass, by the names of the jobs that run them. */
  readonly checks: readonly string[]
  /** Whether a pull request must be up to date with the branch before it merges. */
  readonly upToDate: boolean
  /** How many people must approve a pull request. */
  readonly approvals: number
  /** How GitHub merges a pull request (a word of MergeMethods): the only method it offers. */
  readonly method: MergeMethod
  /** Whether GitHub may merge a pull request once it holds, when someone asked it to. */
  readonly autoMerge: boolean
  /** Whether the branch of a pull request is deleted once it merged. */
  readonly deletesMerged: boolean
  /** Whether its pages are published by a workflow (GitHub Pages). */
  readonly pages: boolean
}

/** A repository's settings as they are, read back: what a project's settings are compared with. */
export interface RepositoryState {
  /** The methods a pull request may be merged by. */
  readonly methods: readonly MergeMethod[]
  /** Whether GitHub may merge a pull request once it holds. */
  readonly autoMerge: boolean
  /** Whether the branch of a pull request is deleted once it merged. */
  readonly deletesMerged: boolean
  /** Whether the branch is never deleted nor rewritten, and reached only by a pull request. */
  readonly protected: boolean
  /** How many approvals a pull request needs; nothing when no rule asks for a pull request. */
  readonly approvals?: number
  /** The checks a pull request into the branch must pass. */
  readonly checks: readonly string[]
  /** Whether a pull request must be up to date with the branch first. */
  readonly upToDate: boolean
  /** Whether its pages are built by a workflow; nothing when it was not asked. */
  readonly pages?: boolean
}

/**
 * The parts of a repository's settings
 * What a repository read back is compared on, each with what it says.
 */
export const RepositoryParts = vocabulary({
  owner: "trame",
  serves: [RealizedOnce],
  words: {
    methods: "The ways a pull request may be merged: only the one decided",
    autoMerge: "Whether GitHub merges a pull request once it holds, when asked",
    deletesMerged: "Whether the branch of a pull request is deleted once merged",
    protected: "Whether the branch is never deleted nor rewritten, and receives nothing but pull requests",
    approvals: "How many approvals a pull request needs",
    checks: "The checks a pull request must pass",
    upToDate: "Whether a pull request must be up to date with the branch first",
    pages: "Whether the pages are built by a workflow",
  },
})
export type RepositoryPart = ProvidedBy<typeof RepositoryParts>[number]

/** A part of the settings that the repository does not hold as decided: what was decided, what was found. */
export interface RepositoryDifference {
  readonly part: RepositoryPart
  readonly decided: unknown
  readonly found: unknown
}

/**
 * A repository compared with its settings
 * The parts of the settings a repository read back does not hold: it offers the one method decided and no other, the
 * automatic merge and the deletion of merged branches as decided, its branch protected, as many approvals, the same
 * checks in any order, up to date as decided, and its pages as decided when they were read. Nothing when it holds them
 * all.
 */
export const RepositoryCompared = fn({
  owner: "trame",
  serves: [RealizedOnce],
  deps: { parts: RepositoryParts },
  body: ({ parts }) => {
    const [methods, autoMerge, deletesMerged, protection, approvals, checks, upToDate, pages] = parts
    const sameSet = (a: readonly string[], b: readonly string[]) => a.length === b.length && a.every((x) => b.includes(x))
    const differs = (part: RepositoryPart, decided: unknown, found: unknown, holds: boolean): readonly RepositoryDifference[] =>
      holds ? [] : [{ part, decided, found }]
    return (settings: RepositorySettings, state: RepositoryState): readonly RepositoryDifference[] => [
      ...differs(methods, [settings.method], state.methods, sameSet([settings.method], state.methods)),
      ...differs(autoMerge, settings.autoMerge, state.autoMerge, settings.autoMerge === state.autoMerge),
      ...differs(deletesMerged, settings.deletesMerged, state.deletesMerged, settings.deletesMerged === state.deletesMerged),
      ...differs(protection, true, state.protected, state.protected),
      ...differs(approvals, settings.approvals, state.approvals, settings.approvals === state.approvals),
      ...differs(checks, settings.checks, state.checks, sameSet(settings.checks, state.checks)),
      ...differs(upToDate, settings.upToDate, state.upToDate, settings.upToDate === state.upToDate),
      ...(state.pages === undefined ? [] : differs(pages, settings.pages, state.pages, settings.pages === state.pages)),
    ]
  },
})

/** What a repository on GitHub is asked: to take the settings a project decides, and what its settings are. */
export interface Repository {
  /**
   * Sets the repository (owner/name) as the settings say: its merge methods, automatic merge and deletion of merged
   * branches, the ruleset of the branch, its pages. The call that failed, by its path; nothing when every call was made.
   */
  apply(repository: string, settings: RepositorySettings): Promise<string | undefined>
  /** The repository's settings as they are, for the branch, its pages when asked; nothing when they cannot be read. */
  read(repository: string, branch: string, pages: boolean): Promise<RepositoryState | undefined>
}

/**
 * A repository on GitHub
 * Applies a project's settings to a repository and reads them back, with the rights of whoever asks: only an
 * administrator of the repository may apply them; whoever may push to it may read them.
 */
export const RepositoryApi = port<Repository>({
  owner: "trame",
  declaredEffects: { apply: ["process", "network", "asynchronous"], read: ["process", "network", "asynchronous"] },
})

/**
 * GitHub's API for a repository
 * The calls and the words that set a repository: its merge methods, automatic merges and merged branches deleted, its
 * rulesets (a branch, the rules that protect it: no deletion, no rewriting, a pull request, the status checks required),
 * the rules in force on a branch, its pages built by a workflow; and GitHub's command line, which makes the calls with
 * the token of whoever runs it.
 */
export const GitHubRepositoryApi = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "GitHub REST API: Repositories (Get, Update a repository), Rules (Get rules for a branch; Get, Create and Update a repository ruleset), Pages (Get, Create a GitHub Pages site, build_type workflow); GitHub CLI manual: gh api (--method, --input)",
  url: "https://docs.github.com/en/rest/repos/rules",
  constants: {
    program: { value: "gh", meaning: "GitHub's command line, with the token of the person who runs it" },
    api: { value: "api", meaning: "Calls GitHub's API" },
    method: { value: "--method", meaning: "The method of the call" },
    patch: { value: "PATCH", meaning: "Changes what it names" },
    post: { value: "POST", meaning: "Creates" },
    put: { value: "PUT", meaning: "Replaces" },
    input: { value: "--input", meaning: "The body of the call, read from a file" },
    standardInput: { value: "-", meaning: "As a file: what the command is given" },
    repos: { value: "repos/", meaning: "Before the repository, owner/name" },
    rulesets: { value: "/rulesets", meaning: "After it: its rulesets" },
    branchRules: { value: "/rules/branches/", meaning: "After it, before a branch: the rules in force on the branch" },
    pages: { value: "/pages", meaning: "After it: its pages" },
    separator: { value: "/", meaning: "Between the steps of a path" },
    allowMerge: { value: "allow_merge_commit", meaning: "Whether a pull request may be merged with a merge commit" },
    allowSquash: { value: "allow_squash_merge", meaning: "Whether it may be squashed" },
    allowRebase: { value: "allow_rebase_merge", meaning: "Whether it may be rebased" },
    allowAutoMerge: { value: "allow_auto_merge", meaning: "Whether GitHub may merge it once it holds, when asked" },
    deleteBranch: { value: "delete_branch_on_merge", meaning: "Whether its branch is deleted once merged" },
    name: { value: "name", meaning: "The name of a ruleset" },
    target: { value: "target", meaning: "What a ruleset protects" },
    branchTarget: { value: "branch", meaning: "Branches" },
    enforcement: { value: "enforcement", meaning: "Whether a ruleset applies" },
    active: { value: "active", meaning: "It applies" },
    conditions: { value: "conditions", meaning: "Which branches it protects" },
    refName: { value: "ref_name", meaning: "By their names" },
    include: { value: "include", meaning: "Those it protects" },
    exclude: { value: "exclude", meaning: "Those it leaves out" },
    heads: { value: "refs/heads/", meaning: "Before a branch's name" },
    rules: { value: "rules", meaning: "Its rules" },
    type: { value: "type", meaning: "The kind of a rule" },
    parameters: { value: "parameters", meaning: "What a rule is given" },
    deletion: { value: "deletion", meaning: "The branch is never deleted" },
    nonFastForward: { value: "non_fast_forward", meaning: "The branch is never rewritten" },
    pullRequest: { value: "pull_request", meaning: "The branch receives nothing but pull requests" },
    approvals: { value: "required_approving_review_count", meaning: "How many approvals a pull request needs" },
    dismissStale: { value: "dismiss_stale_reviews_on_push", meaning: "Whether a push dismisses the approvals given (GitHub's default: no)" },
    codeOwners: { value: "require_code_owner_review", meaning: "Whether the owners of the files changed must approve (GitHub's default: no)" },
    lastPush: { value: "require_last_push_approval", meaning: "Whether the last push needs an approval of its own (GitHub's default: no)" },
    threads: { value: "required_review_thread_resolution", meaning: "Whether every thread of the review must be resolved (GitHub's default: no)" },
    methods: { value: "allowed_merge_methods", meaning: "How a pull request may be merged" },
    statusChecks: { value: "required_status_checks", meaning: "The checks a pull request must pass" },
    strict: { value: "strict_required_status_checks_policy", meaning: "Whether the branch must be up to date with the main one first" },
    context: { value: "context", meaning: "A check, by the name of the job that runs it" },
    buildType: { value: "build_type", meaning: "How the pages are built" },
    workflow: { value: "workflow", meaning: "By a workflow" },
    id: { value: "id", meaning: "The identifier of a ruleset" },
  },
})

/**
 * GitHub's command line
 * Applies the settings by gh api, with the token of whoever runs it: the merge methods, the automatic merge and the
 * deletion of merged branches; the ruleset named after the branch, created or replaced, whose rule of pull requests asks
 * nothing but the approvals decided (GitHub's defaults otherwise); the pages built by a workflow, created or replaced.
 * Reads back the repository, the rules in force on the branch, and its pages when asked. A call that fails stops what
 * applies, and is answered.
 */
export const GitHubCliRepository = implementation({
  owner: "trame", implements: [RepositoryApi],
  deps: { api: GitHubRepositoryApi, cli: NodeCli, events: NodeEvents, exit: ExitStatus, methods: MergeMethods, texts: Texts, values: ValueTypes },
  body: code.file("./code/tooling/github-cli-repository.ts"),
})

/** What a scenario does with a repository kept in memory: sets it as someone changed it by hand, reads what was applied. */
export interface RepositoryScript {
  /** The repository as it is now, as someone left it. */
  set(repository: string, state: RepositoryState): void
  /** The settings applied, in their order. */
  applied(): readonly { repository: string; settings: RepositorySettings }[]
}

/**
 * The repositories a scenario keeps
 * What a scenario sets of a repository kept in memory, and the settings applied to it.
 */
export const RepositoryKept = port<RepositoryScript>({ owner: "trame", declaredEffects: [] })

/**
 * A repository kept in memory
 * In a scenario, applying settings keeps them and makes the repository so: one method, the automatic merge and the
 * deletion of merged branches as said, the branch protected, the approvals and the checks as said, up to date as said,
 * the pages as said; reading gives back what the repository is, protected by nothing until something was applied or
 * set, its pages only when asked.
 */
export const RepositoryInMemory = fn({
  owner: "trame", implements: [RepositoryApi, RepositoryKept], serves: [RealizedOnce],
  body: () => {
    const states = new Map<string, RepositoryState>()
    const applied: { repository: string; settings: RepositorySettings }[] = []
    const none: RepositoryState = { methods: [], autoMerge: false, deletesMerged: false, protected: false, checks: [], upToDate: false }
    return {
      apply: async (repository: string, settings: RepositorySettings) => {
        applied.push({ repository, settings })
        const { method, autoMerge, deletesMerged, approvals, checks, upToDate, pages } = settings
        states.set(repository, { methods: [method], autoMerge, deletesMerged, protected: true, approvals, checks, upToDate, pages })
        return undefined
      },
      read: async (repository: string, _branch: string, pages: boolean) => {
        const { pages: built, ...state } = states.get(repository) ?? none
        return pages ? { ...state, pages: built === true } : state
      },
      set: (repository: string, state: RepositoryState) => void states.set(repository, state),
      applied: () => applied,
    }
  },
})

/**
 * A repository is set by its project's graph
 * The settings of a repository are a decision of the project's graph, applied through a port of the library and read
 * back: realized once for a machine (GitHub's command line) and once in memory.
 */
export const RepositoryThroughItsApi = adr({
  owner: "trame",
  context: "A repository's settings decide what reaches its main branch: set by hand in GitHub's pages, nothing says why, and nothing tells when they drift from what the project decided.",
  consequences: "A project decides its settings (RepositorySettings) and applies them by a program of its SDLC that a shipment deploys, which reads them back and compares them (RepositoryCompared); its scenarios play that program with the repository kept in memory, and a check reads the repository as it is.",
  rejected: {
    "A script the graph writes, which an administrator runs": "nothing reads the repository back, and nothing records who set it",
    "A writer in ci": "a program that calls GitHub is code a project runs and verifies, not a file a place runs",
  },
  serves: [RealizedOnce],
  appliedBy: [MergeMethods, RepositoryParts, RepositoryCompared, RepositoryApi, GitHubCliRepository, RepositoryKept, RepositoryInMemory],
})
