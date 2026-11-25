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
import { TextFile } from "./text"
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

// Branches and pull requests (E3, std 0.22.0): what a command of the library asks of the repository a project lives in
// (the branch checked out, pushed, what it changes against another) and of GitHub (a pull request opened, merged once it
// holds). How GitHub is asked to merge once it holds is a choice of its own: its command line asks GitHub's GraphQL,
// which a session of Claude Code cannot reach; it asks a route of its proxy instead.

/** What a command asks of the branches of the repository it runs in. */
export interface GitBranches {
  /** The branch checked out; nothing when none is (a detached head). */
  current(): Promise<string | undefined>
  /** Pushes the branch where it came from, and follows it there: whether it was pushed. */
  push(branch: string): Promise<boolean>
  /** The files the branch changes against another, as the repository has that one: paths from its root; nothing when unread. */
  changed(base: string): Promise<readonly string[] | undefined>
  /** Checks a branch out as its remote has it, moving it forward only: whether it was. */
  update(branch: string): Promise<boolean>
}

/**
 * The branches
 * The branch a person works on in the repository: which it is, pushed, and what it changes against another.
 */
export const Branches = port<GitBranches>({
  owner: "trame",
  declaredEffects: {
    current: ["process", "asynchronous"], push: ["process", "network", "asynchronous"], changed: ["process", "network", "asynchronous"],
    update: ["process", "network", "write", "asynchronous"],
  },
})

/**
 * Git's command line
 * The commands that say which branch is checked out, push it and follow it, fetch another and list the files that
 * differ since the two parted.
 */
export const GitCommandLine = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "Git manual: git (--version), git-rev-parse (--abbrev-ref), git-push (--set-upstream), git-fetch, git-diff (--name-only, A...B: since the merge base), git-checkout, git-merge (--ff-only)",
  url: "https://git-scm.com/docs/git-diff",
  constants: {
    program: { value: "git", meaning: "Git's command line" },
    version: { value: "--version", meaning: "Says which Git this is: it answers when Git is installed" },
    revParse: { value: "rev-parse", meaning: "Says what a name stands for" },
    abbreviated: { value: "--abbrev-ref", meaning: "The short name of a reference: the branch's" },
    head: { value: "HEAD", meaning: "What is checked out" },
    detached: { value: "HEAD", meaning: "What rev-parse --abbrev-ref says when no branch is checked out" },
    push: { value: "push", meaning: "Sends a branch to a remote" },
    upstream: { value: "--set-upstream", meaning: "The branch follows the one it was sent to" },
    remote: { value: "origin", meaning: "The remote the repository came from" },
    fetch: { value: "fetch", meaning: "Brings a branch of a remote" },
    fetched: { value: "FETCH_HEAD", meaning: "What was just fetched" },
    diff: { value: "diff", meaning: "Shows what differs" },
    names: { value: "--name-only", meaning: "Only the paths of the files that differ" },
    since: { value: "...", meaning: "Between two names: what the second changes since it parted from the first" },
    checkout: { value: "checkout", meaning: "Checks a branch out" },
    merge: { value: "merge", meaning: "Joins another history into the branch checked out" },
    forwardOnly: { value: "--ff-only", meaning: "Only by moving the branch forward: refused if it would need a merge commit" },
  },
})

/**
 * Git's branches
 * Asks Git, in the directory the program runs in: the branch checked out, pushed to its remote, the files it changes
 * since it parted from another as the remote has it.
 */
export const GitCliBranches = implementation({
  owner: "trame", implements: [Branches],
  deps: { git: GitCommandLine, cli: NodeCli, events: NodeEvents, exit: ExitStatus, texts: Texts, file: TextFile },
  body: code.file("./code/tooling/git-cli-branches.ts"),
})

/** What a scenario does with the branches kept in memory: sets them, reads what was pushed. */
export interface BranchesScript {
  /** The branch checked out, and the files it changes against any other. */
  set(current: string | undefined, changed: readonly string[]): void
  /** The branches pushed, in their order. */
  pushed(): readonly string[]
  /** The branch checked out now. */
  checkedOut(): string | undefined
}

/** The branches a scenario keeps */
export const BranchesKept = port<BranchesScript>({ owner: "trame", declaredEffects: [] })

/**
 * Branches kept in memory
 * In a scenario, the branch checked out and what it changes are as the scenario sets them; a push is kept.
 */
export const BranchesInMemory = fn({
  owner: "trame", implements: [Branches, BranchesKept], serves: [RealizedOnce],
  body: () => {
    let current: string | undefined
    let changed: readonly string[] = []
    const pushed: string[] = []
    return {
      current: async () => current,
      push: async (branch: string) => (pushed.push(branch), true),
      changed: async () => changed,
      update: async (branch: string) => ((current = branch), true),
      set: (branch: string | undefined, files: readonly string[]) => void ((current = branch), (changed = files)),
      pushed: () => pushed,
      checkedOut: () => current,
    }
  },
})

/** A pull request, by its number and the address a person opens it at. */
export interface PullRequestOpen {
  readonly number: number
  readonly url: string
}

/** What a pull request asks: to bring its branch into another. */
export interface PullRequestAsked {
  readonly title: string
  readonly body: string
  readonly head: string
  readonly base: string
}

/** What a command asks of the pull requests of a repository on GitHub. */
export interface PullRequestsOfARepository {
  /** The pull request open from this branch; nothing when none is. */
  find(repository: string, branch: string): Promise<PullRequestOpen | undefined>
  /** Opens a pull request: it, or nothing when GitHub refused. */
  open(repository: string, asked: PullRequestAsked): Promise<PullRequestOpen | undefined>
  /** Asks GitHub to merge it by this method once it holds: whether GitHub took it. */
  mergeOnceItHolds(repository: string, number: number, method: MergeMethod): Promise<boolean>
  /** A pull request by its number: its branches, its last commit, whether it is still open; nothing when unread. */
  read(repository: string, number: number): Promise<PullRequestRead | undefined>
  /** The checks run on a commit: each by its name, and whether it passed, failed or still runs. */
  checks(repository: string, commit: string): Promise<readonly CheckRun[] | undefined>
  /** The files a pull request changes: paths from the repository's root. */
  files(repository: string, number: number): Promise<readonly string[] | undefined>
  /** Merges it now by this method: whether GitHub merged it. */
  merge(repository: string, number: number, method: MergeMethod): Promise<boolean>
}

/** A pull request as GitHub has it. */
export interface PullRequestRead extends PullRequestOpen {
  readonly head: string
  readonly base: string
  /** Its last commit. */
  readonly commit: string
  readonly open: boolean
}

/** A check run on a commit, as GitHub says it went. */
export interface CheckRun {
  readonly name: string
  /** Whether it ended, and how: passed, failed; nothing while it runs. */
  readonly passed?: boolean
}

/**
 * Pull requests
 * The pull requests of a repository on GitHub: the one a branch has open, one opened, merged once it holds.
 */
export const PullRequests = port<PullRequestsOfARepository>({
  owner: "trame",
  declaredEffects: {
    find: ["process", "network", "asynchronous"], open: ["process", "network", "asynchronous"], mergeOnceItHolds: ["process", "network", "asynchronous"],
    read: ["process", "network", "asynchronous"], checks: ["process", "network", "asynchronous"], files: ["process", "network", "asynchronous"],
    merge: ["process", "network", "asynchronous"],
  },
})

/**
 * GitHub's API for pull requests
 * The calls that list the pull requests a branch has open, open one, and what GitHub answers of it.
 */
export const GitHubPullRequestsApi = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "GitHub REST API: Pulls (List pull requests: head, state; Create a pull request: title, head, base, body; number, html_url; Get a pull request: head.ref, head.sha, base.ref, state; List pull requests files: filename; Merge a pull request: merge_method), Checks (List check runs for a Git reference: check_runs, name, status, conclusion); GitHub CLI manual: gh api (--method, --input, a query)",
  url: "https://docs.github.com/en/rest/pulls/pulls",
  constants: {
    pulls: { value: "/pulls", meaning: "After the repository: its pull requests" },
    query: { value: "?", meaning: "Opens the parameters of a call" },
    and: { value: "&", meaning: "Between two parameters" },
    equals: { value: "=", meaning: "Between a parameter and its value" },
    head: { value: "head", meaning: "The branch a pull request brings, owner:branch when listed" },
    owner: { value: ":", meaning: "Between the owner and the branch, in head" },
    state: { value: "state", meaning: "Which pull requests are listed" },
    openState: { value: "open", meaning: "Those still open" },
    base: { value: "base", meaning: "The branch it goes into" },
    title: { value: "title", meaning: "Its title" },
    body: { value: "body", meaning: "What it says" },
    number: { value: "number", meaning: "Its number in the repository" },
    url: { value: "html_url", meaning: "Where a person opens it" },
    ref: { value: "ref", meaning: "The name of a branch, in head and base" },
    sha: { value: "sha", meaning: "A commit, by its hash" },
    files: { value: "/files", meaning: "After a pull request: the files it changes" },
    filename: { value: "filename", meaning: "The path of a file it changes" },
    merging: { value: "/merge", meaning: "After a pull request: merges it" },
    method: { value: "merge_method", meaning: "How it is merged" },
    commits: { value: "/commits", meaning: "After the repository: its commits" },
    checkRuns: { value: "/check-runs", meaning: "After a commit: the checks run on it" },
    runs: { value: "check_runs", meaning: "The checks listed" },
    name: { value: "name", meaning: "A check's name" },
    status: { value: "status", meaning: "Whether a check still runs" },
    completed: { value: "completed", meaning: "A check that ended" },
    conclusion: { value: "conclusion", meaning: "How a check ended" },
    success: { value: "success", meaning: "A check that passed" },
    skipped: { value: "skipped", meaning: "A check that did not need to run: it does not keep a merge" },
    perPage: { value: "per_page", meaning: "How many are listed at once" },
    page: { value: "page", meaning: "Which page of a list, from the first" },
    first: { value: "1", meaning: "The first page" },
    most: { value: "100", meaning: "The most a page lists" },
  },
})

/** What asks GitHub to merge a pull request once it holds. */
export interface MergeAsker {
  /** Asks it, by this method: whether GitHub took it. */
  ask(repository: string, number: number, method: MergeMethod): Promise<boolean>
}

/**
 * The automatic merge
 * How GitHub is asked to merge a pull request once it holds: by its command line where GitHub's GraphQL is reached, by
 * a route of the proxy in a session of Claude Code.
 */
export const AutoMerge = port<MergeAsker>({ owner: "trame", declaredEffects: { ask: ["process", "network", "asynchronous"] } })

/**
 * GitHub's ways of asking a merge once it holds
 * GitHub's command line asks it by GraphQL (enablePullRequestAutoMerge); a session of Claude Code reaches GitHub through
 * a proxy that refuses GraphQL and offers a route of its own, PUT on the pull request's ccr/auto_merge, as it says when
 * GraphQL is called.
 */
export const GitHubAutoMerge = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "GitHub CLI manual: gh pr merge (--auto, --merge, --squash, --rebase, --repo); the proxy of a Claude Code session, answering a call to GraphQL: PUT /repos/{owner}/{repo}/pulls/{n}/ccr/auto_merge",
  url: "https://cli.github.com/manual/gh_pr_merge",
  constants: {
    pr: { value: "pr", meaning: "The commands of pull requests" },
    merge: { value: "merge", meaning: "Merges one, or asks it merged" },
    auto: { value: "--auto", meaning: "Once it holds: its checks passed" },
    byMerge: { value: "--merge", meaning: "By a merge commit" },
    bySquash: { value: "--squash", meaning: "Squashed into one commit" },
    byRebase: { value: "--rebase", meaning: "Its commits rebased" },
    repo: { value: "--repo", meaning: "The repository, owner/name" },
    route: { value: "/ccr/auto_merge", meaning: "After the pull request: the route of the proxy that asks GitHub to merge it once it holds" },
    method: { value: "merge_method", meaning: "How it is merged, in the body of that route" },
  },
})

/**
 * GitHub's pull requests, by its command line
 * Lists the pull requests a branch has open and opens one by gh api (REST), with the token of whoever runs it; asks the
 * merge once it holds through the automatic merge chosen where it runs.
 */
export const GitHubCliPullRequests = implementation({
  owner: "trame", implements: [PullRequests],
  deps: { repos: GitHubRepositoryApi, api: GitHubPullRequestsApi, cli: NodeCli, events: NodeEvents, exit: ExitStatus, texts: Texts, values: ValueTypes, merging: AutoMerge },
  body: code.file("./code/tooling/github-cli-pull-requests.ts"),
})

/**
 * The automatic merge, by GitHub's command line
 * gh pr merge --auto, by the method decided: GitHub's GraphQL, with the token of whoever runs it.
 */
export const AutoMergeByGitHubCli = implementation({
  owner: "trame", implements: [AutoMerge],
  deps: { auto: GitHubAutoMerge, repos: GitHubRepositoryApi, methods: MergeMethods, cli: NodeCli, events: NodeEvents, exit: ExitStatus },
  body: code.file("./code/tooling/auto-merge-by-github-cli.ts"),
})

/**
 * The automatic merge, in a session of Claude Code
 * The route of the session's proxy, by gh api: PUT on the pull request's ccr/auto_merge, with the method decided.
 */
export const AutoMergeInAClaudeSession = implementation({
  owner: "trame", implements: [AutoMerge],
  deps: { auto: GitHubAutoMerge, repos: GitHubRepositoryApi, api: GitHubPullRequestsApi, cli: NodeCli, events: NodeEvents, exit: ExitStatus, texts: Texts },
  body: code.file("./code/tooling/auto-merge-in-a-claude-session.ts"),
})

/** What a scenario reads of the pull requests kept in memory, and the one it says a branch has open. */
export interface PullRequestsScript {
  /** A pull request already open from a branch. */
  openFrom(repository: string, branch: string, open: PullRequestOpen): void
  /** Those opened, in their order. */
  opened(): readonly { repository: string; asked: PullRequestAsked }[]
  /** Those GitHub was asked to merge once they hold, with the method. */
  merging(): readonly { repository: string; number: number; method: MergeMethod }[]
  /** The checks run on the last commit of a branch (in memory, a branch's last commit is named as the branch). */
  ran(branch: string, runs: readonly CheckRun[]): void
  /** The files a branch's pull request changes. */
  changes(branch: string, files: readonly string[]): void
  /** Those merged, with the method. */
  merged(): readonly { repository: string; number: number; method: MergeMethod }[]
}

/** The pull requests a scenario keeps */
export const PullRequestsKept = port<PullRequestsScript>({ owner: "trame", declaredEffects: [] })

/**
 * Pull requests kept in memory
 * In a scenario, a pull request opened is numbered after those opened before it, its address the path of its call;
 * one open from a branch is found; a merge asked, or made, is kept. A branch's last commit is named as the branch, and
 * the checks run on it are those the scenario says; a pull request changes the files its branch changes, as the
 * scenario says them too.
 */
export const PullRequestsInMemory = fn({
  owner: "trame", implements: [PullRequests, PullRequestsKept], serves: [RealizedOnce],
  deps: { repos: GitHubRepositoryApi, api: GitHubPullRequestsApi, texts: Texts },
  body: ({ repos, api, texts }) => {
    const open = new Map<string, PullRequestOpen>()
    const known = new Map<number, PullRequestRead>()
    const opened: { repository: string; asked: PullRequestAsked }[] = []
    const merging: { repository: string; number: number; method: MergeMethod }[] = []
    const merged: { repository: string; number: number; method: MergeMethod }[] = []
    const runs = new Map<string, readonly CheckRun[]>()
    const changes = new Map<string, readonly string[]>()
    const key = (repository: string, branch: string) => texts.concat([repository, api.owner, branch])
    const keep = (repository: string, head: string, base: string, made: PullRequestOpen) => {
      open.set(key(repository, head), made)
      known.set(made.number, { ...made, head, base, commit: head, open: true })
    }
    return {
      find: async (repository: string, branch: string) => open.get(key(repository, branch)),
      open: async (repository: string, asked: PullRequestAsked) => {
        opened.push({ repository, asked })
        const number = opened.length
        const made = { number, url: texts.concat([repos.repos, repository, api.pulls, repos.separator, String(number)]) }
        keep(repository, asked.head, asked.base, made)
        return made
      },
      mergeOnceItHolds: async (repository: string, number: number, method: MergeMethod) => (merging.push({ repository, number, method }), true),
      read: async (_repository: string, number: number) => known.get(number),
      checks: async (_repository: string, commit: string) => runs.get(commit) ?? [],
      files: async (_repository: string, number: number) => changes.get(known.get(number)?.head ?? texts.empty) ?? [],
      merge: async (repository: string, number: number, method: MergeMethod) => {
        const read = known.get(number)
        if (!read?.open) return false
        merged.push({ repository, number, method })
        known.set(number, { ...read, open: false })
        return true
      },
      openFrom: (repository: string, branch: string, made: PullRequestOpen) => keep(repository, branch, texts.empty, made),
      opened: () => opened,
      merging: () => merging,
      ran: (branch: string, checked: readonly CheckRun[]) => void runs.set(branch, checked),
      changes: (branch: string, files: readonly string[]) => void changes.set(branch, files),
      merged: () => merged,
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
