/** Continuous integration · The repository on GitHub */

import { standard } from "#trame/kinds/standard"
import { vocabulary } from "#trame/kinds/vocabulary"
import { port } from "#trame/kinds/port"
import { fn } from "#trame/kinds/function"
import type { ProvidedBy } from "#trame/kernel"
import { RepositoryAsDecided } from "./product"

// The settings of a repository on GitHub, as a project's graph decides them (D1): its main branch receives nothing but
// pull requests, which pass the checks the graph names; GitHub may merge one once it holds, by the method the graph
// chooses; its pages are published by a workflow. A project applies them with a program of its SDLC, through the port
// RepositoryApi, and reads them back (ci 0.7.0): nothing changes a repository's settings but a person who may, by trame
// ship, and what the repository holds is compared with what the graph decides.

/**
 * How GitHub merges a pull request
 * A merge commit keeps each commit of the branch (a generation is a commit); squashed, the branch is one commit;
 * rebased, its commits are replayed on the main branch.
 */
export const MergeMethods = vocabulary({
  owner: "trame",
  serves: [RepositoryAsDecided],
  words: { merge: "A merge commit: each commit of the branch kept", squash: "One commit for the branch", rebase: "Each commit replayed on the main branch" },
})
export type MergeMethod = ProvidedBy<typeof MergeMethods>[number]

/** How a repository merges into its main branch, and publishes its pages: what a project decides for its repository. */
export interface RepositorySettings {
  /** The branch pull requests merge into: nothing reaches it but a pull request; it is never deleted nor rewritten. */
  readonly branch: string
  /** The checks a pull request must pass, by the names of the jobs that run them. */
  readonly checks: readonly string[]
  /** How GitHub merges a pull request (a word of MergeMethods): the only method it offers. */
  readonly method: MergeMethod
  /** Whether GitHub may merge a pull request once it holds, when someone asked it to. */
  readonly autoMerge: boolean
  /** Whether its pages are published by a workflow (GitHub Pages). */
  readonly pages: boolean
}

/**
 * GitHub's API for a repository
 * The calls and the words that set a repository: its merge methods and automatic merges, its rulesets (a branch, the
 * rules that protect it: no deletion, no rewriting, a pull request, the status checks required), its pages built by a
 * workflow.
 */
export const GitHubRepositoryApi = standard({
  owner: "trame",
  serves: [RepositoryAsDecided],
  source: "GitHub REST API: Repositories (Update a repository), Rules (Create, Get and Update a repository ruleset), Pages (Create a GitHub Pages site, build_type workflow); GitHub CLI manual: gh api (--method, --input, --jq, -f)",
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
    dismissStale: { value: "dismiss_stale_reviews_on_push", meaning: "Whether a push dismisses the approvals given" },
    codeOwners: { value: "require_code_owner_review", meaning: "Whether the owners of the files changed must approve" },
    lastPush: { value: "require_last_push_approval", meaning: "Whether the last push needs an approval of its own" },
    threads: { value: "required_review_thread_resolution", meaning: "Whether every thread of the review must be resolved" },
    methods: { value: "allowed_merge_methods", meaning: "How a pull request may be merged" },
    statusChecks: { value: "required_status_checks", meaning: "The checks a pull request must pass" },
    strict: { value: "strict_required_status_checks_policy", meaning: "Whether the branch must be up to date with the main one first" },
    context: { value: "context", meaning: "A check, by the name of the job that runs it" },
    buildType: { value: "build_type", meaning: "How the pages are built" },
    workflow: { value: "workflow", meaning: "By a workflow" },
    id: { value: "id", meaning: "The identifier of a ruleset" },
  },
})

/** A repository's settings as they are, read back: what a project's settings can be compared with. */
export interface RepositoryState {
  /** The methods a pull request may be merged by. */
  readonly methods: readonly MergeMethod[]
  /** Whether GitHub may merge a pull request once it holds. */
  readonly autoMerge: boolean
  /** Whether the branch is never deleted nor rewritten, and reached only by a pull request. */
  readonly protected: boolean
  /** The checks a pull request into the branch must pass. */
  readonly checks: readonly string[]
  /** Whether its pages are built by a workflow; nothing when it was not asked. */
  readonly pages?: boolean
}

/** What a repository on GitHub is asked: to take the settings a project decides, and what its settings are. */
export interface Repository {
  /** Sets the repository (owner/name) as the settings say: its merge methods and automatic merge, the ruleset of the branch, its pages. */
  apply(repository: string, settings: RepositorySettings): Promise<void>
  /** The repository's settings as they are, for the branch; its pages when asked. */
  read(repository: string, branch: string, pages: boolean): Promise<RepositoryState>
}

/**
 * A repository on GitHub
 * Applies a project's settings to a repository and reads them back, with the rights of whoever asks: only an
 * administrator of the repository may apply them.
 */
export const RepositoryApi = port<Repository>({
  owner: "trame",
  declaredEffects: { apply: ["process", "network", "asynchronous"], read: ["process", "network", "asynchronous"] },
})

/** What a scenario does with a repository kept in memory: sets it as someone changed it by hand, reads what was applied. */
export interface RepositoryScript {
  /** The repository as it is now, as someone left it. */
  set(repository: string, state: RepositoryState): void
  /** The settings applied, in their order. */
  applied(): readonly { repository: string; settings: RepositorySettings }[]
}

/** The repositories a scenario keeps in memory. */
export const RepositoryKept = port<RepositoryScript>({ owner: "trame", declaredEffects: [] })

/**
 * A repository kept in memory
 * In a scenario, applying settings keeps them and makes the repository so: one method, the automatic merge as said,
 * the branch protected, the checks named, the pages as said; reading gives back what the repository is, protected by
 * nothing until something was applied or set.
 */
export const RepositoryInMemory = fn({
  owner: "trame", implements: [RepositoryApi, RepositoryKept], serves: [RepositoryAsDecided],
  body: () => {
    const states = new Map<string, RepositoryState>()
    const applied: { repository: string; settings: RepositorySettings }[] = []
    const none: RepositoryState = { methods: [], autoMerge: false, protected: false, checks: [] }
    return {
      apply: async (repository: string, settings: RepositorySettings) => {
        applied.push({ repository, settings })
        states.set(repository, { methods: [settings.method], autoMerge: settings.autoMerge, protected: true, checks: settings.checks, pages: settings.pages })
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
