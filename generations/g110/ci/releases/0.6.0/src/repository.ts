/** Continuous integration · The repository on GitHub */

import { standard } from "#trame/kinds/standard"
import { syntax } from "#trame/kinds/syntax"
import { vocabulary } from "#trame/kinds/vocabulary"
import type { ProvidedBy } from "#trame/kernel"
import { OneWriterPerPlace } from "./product"
import { BashScripts } from "./shell"

// The settings of a repository on GitHub, as a project's graph decides them (D1): its main branch receives nothing but
// pull requests, which pass the checks the graph names; GitHub may merge one once it holds, by the method the graph
// chooses; its pages are published by a workflow. A writer of this module writes them as a script of calls to GitHub's
// API, which an administrator runs: nothing changes a repository's settings but a person who may, and the script says
// what the graph decided.

/**
 * How GitHub merges a pull request
 * A merge commit keeps each commit of the branch (a generation is a commit); squashed, the branch is one commit;
 * rebased, its commits are replayed on the main branch.
 */
export const MergeMethods = vocabulary({
  owner: "trame",
  serves: [OneWriterPerPlace],
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
  serves: [OneWriterPerPlace],
  source: "GitHub REST API: Repositories (Update a repository), Rules (Create, Get and Update a repository ruleset), Pages (Create a GitHub Pages site, build_type workflow); GitHub CLI manual: gh api (--method, --input, --jq, -f)",
  url: "https://docs.github.com/en/rest/repos/rules",
  constants: {
    gh: { value: "gh api", meaning: "Calls GitHub's API, with the token of the person who runs it" },
    method: { value: "--method", meaning: "The method of the call" },
    patch: { value: "PATCH", meaning: "Changes what it names" },
    post: { value: "POST", meaning: "Creates" },
    put: { value: "PUT", meaning: "Replaces" },
    input: { value: "--input -", meaning: "The body of the call, read from what the command is given" },
    field: { value: "-f", meaning: "A field of the body, as a text" },
    jq: { value: "--jq", meaning: "What gh keeps of the answer, a jq filter" },
    repos: { value: "repos/", meaning: "Before the repository, owner/name" },
    rulesets: { value: "/rulesets", meaning: "After it: its rulesets" },
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
    buildType: { value: "build_type=workflow", meaning: "Pages built and published by a workflow" },
    named: { value: ".[] | select(.name == ", meaning: "Opens the jq filter of the ruleset of a name, given as a JSON text" },
    identified: { value: ") | .id", meaning: "Closes it: the ruleset's identifier" },
  },
})

/**
 * The settings of a repository
 * The script an administrator of the repository runs, giving it as owner/name: it sets the merge methods (the one the
 * graph chooses, alone), whether GitHub merges a pull request once it holds and deletes its branch; writes the ruleset of
 * the main branch (created, or replaced when one of its name exists): never deleted nor rewritten, reached only by a pull
 * request that passes the checks the graph names, merged by that method; and has the pages built by a workflow when the
 * graph says so. It stops at the first call that fails.
 */
export const GitHubRepository = syntax({
  owner: "trame",
  standard: GitHubRepositoryApi,
  section: "Repository rulesets: rules deletion, non_fast_forward, pull_request, required_status_checks",
  url: "https://docs.github.com/en/rest/repos/rules#create-a-repository-ruleset",
  constants: {
    repository: { value: "repo", meaning: "The variable that holds the repository, owner/name" },
    usage: { value: "give the repository, as owner/name", meaning: "What the script says when it is run without one" },
    found: { value: "id", meaning: "The variable that holds the identifier of the ruleset already there" },
    written: { value: "Written by trame ship from the graph: the settings of the repository, for the branch", meaning: "What the script's first comment says" },
    run: { value: "Run by an administrator: bash <this script> owner/name", meaning: "Who runs it, and how" },
    edit: { value: "Do not edit: edit the graph, then ship.", meaning: "The comment that says where to change it" },
    document: { value: "<<'JSON'", meaning: "Opens the body of a call, written as it is until its end (a here-document)" },
    end: { value: "JSON", meaning: "Ends it" },
    quiet: { value: "> /dev/null", meaning: "Keeps the answer of a call off the terminal" },
    test: { value: "if [ -n", meaning: "Opens the test of a text that is not empty" },
    then: { value: "]; then", meaning: "Then" },
    otherwise: { value: "; else", meaning: "Otherwise" },
    done: { value: "; fi", meaning: "Ends the test" },
    or: { value: "||", meaning: "When the call before fails" },
    capture: { value: "\"$(", meaning: "Opens a command whose output is kept, as one word" },
    captured: { value: ")\"", meaning: "Closes it" },
    indentation: { value: 2, meaning: "The spaces of a level of the body" },
    filter: { value: "'", meaning: "Around the jq filter, which the shell gives as it is" },
    approvals: { value: 0, meaning: "The approvals a pull request needs: none, the checks hold it, and a person merges what people decided" },
  },
  deps: { sh: BashScripts, methods: MergeMethods },
  write: ({
    standard: api, sh, methods, repository, usage, found, written, run, edit, document, end, quiet, test, then, otherwise, done, or,
    capture, captured, indentation, filter, approvals,
  }) => (_plan: unknown, settings: RepositorySettings): string => {
    const words = (ws: readonly string[]) => ws.join(sh.space)
    const quoted = (w: string) => sh.quote + w + sh.quote
    const repo = sh.dollar + repository
    const path = (after = String()) => quoted(api.repos + repo + after)
    const call = (method: string, at: string, ...rest: string[]) => words([api.gh, api.method, method, at, ...rest])
    const body = (value: unknown) => JSON.stringify(value, null, indentation)
    const [merge, squash, rebase] = methods
    const repositoryBody = {
      [api.allowMerge]: settings.method === merge, [api.allowSquash]: settings.method === squash, [api.allowRebase]: settings.method === rebase,
      [api.allowAutoMerge]: settings.autoMerge, [api.deleteBranch]: true,
    }
    const rulesetBody = {
      [api.name]: settings.branch,
      [api.target]: api.branchTarget,
      [api.enforcement]: api.active,
      [api.conditions]: { [api.refName]: { [api.include]: [api.heads + settings.branch], [api.exclude]: [] } },
      [api.rules]: [
        { [api.type]: api.deletion },
        { [api.type]: api.nonFastForward },
        { [api.type]: api.pullRequest, [api.parameters]: {
          [api.approvals]: approvals, [api.dismissStale]: false, [api.codeOwners]: false, [api.lastPush]: false,
          [api.threads]: false, [api.methods]: [settings.method],
        } },
        { [api.type]: api.statusChecks, [api.parameters]: {
          [api.strict]: false, [api.statusChecks]: settings.checks.map((c) => ({ [api.context]: c })),
        } },
      ],
    }
    const rulesets = path(api.rulesets)
    return [
      sh.interpreter,
      words([sh.comment, written, settings.branch]),
      words([sh.comment, run]),
      words([sh.comment, edit]),
      sh.strict,
      repository + sh.assign + quoted(sh.required + usage + sh.closeBrace),
      words([call(api.patch, path(), api.input), quiet, document]),
      body(repositoryBody),
      end,
      found + sh.assign + capture + words([api.gh, rulesets, api.jq, filter + api.named + JSON.stringify(settings.branch) + api.identified + filter]) + captured,
      words([test, quoted(sh.dollar + found), then, call(api.put, path(api.rulesets + api.separator + sh.dollar + found), api.input), quiet,
        otherwise, call(api.post, rulesets, api.input), quiet, done, document]),
      body(rulesetBody),
      end,
      ...(settings.pages ? [words([call(api.post, path(api.pages), api.field, api.buildType), quiet, or, call(api.put, path(api.pages), api.field, api.buildType), quiet])] : []),
    ].join(sh.endOfLine) + sh.endOfLine
  },
  examples: [
    {
      input: [
        undefined,
        { branch: "main", checks: ["trame", "poselia"], method: "merge", autoMerge: true, pages: true },
      ],
      output: [
        "#!/usr/bin/env bash",
        "# Written by trame ship from the graph: the settings of the repository, for the branch main",
        "# Run by an administrator: bash <this script> owner/name",
        "# Do not edit: edit the graph, then ship.",
        "set -euo pipefail",
        "repo=\"${1:?give the repository, as owner/name}\"",
        "gh api --method PATCH \"repos/$repo\" --input - > /dev/null <<'JSON'",
        "{",
        "  \"allow_merge_commit\": true,",
        "  \"allow_squash_merge\": false,",
        "  \"allow_rebase_merge\": false,",
        "  \"allow_auto_merge\": true,",
        "  \"delete_branch_on_merge\": true",
        "}",
        "JSON",
        "id=\"$(gh api \"repos/$repo/rulesets\" --jq '.[] | select(.name == \"main\") | .id')\"",
        "if [ -n \"$id\" ]; then gh api --method PUT \"repos/$repo/rulesets/$id\" --input - > /dev/null ; else gh api --method POST \"repos/$repo/rulesets\" --input - > /dev/null ; fi <<'JSON'",
        "{",
        "  \"name\": \"main\",",
        "  \"target\": \"branch\",",
        "  \"enforcement\": \"active\",",
        "  \"conditions\": {",
        "    \"ref_name\": {",
        "      \"include\": [",
        "        \"refs/heads/main\"",
        "      ],",
        "      \"exclude\": []",
        "    }",
        "  },",
        "  \"rules\": [",
        "    {",
        "      \"type\": \"deletion\"",
        "    },",
        "    {",
        "      \"type\": \"non_fast_forward\"",
        "    },",
        "    {",
        "      \"type\": \"pull_request\",",
        "      \"parameters\": {",
        "        \"required_approving_review_count\": 0,",
        "        \"dismiss_stale_reviews_on_push\": false,",
        "        \"require_code_owner_review\": false,",
        "        \"require_last_push_approval\": false,",
        "        \"required_review_thread_resolution\": false,",
        "        \"allowed_merge_methods\": [",
        "          \"merge\"",
        "        ]",
        "      }",
        "    },",
        "    {",
        "      \"type\": \"required_status_checks\",",
        "      \"parameters\": {",
        "        \"strict_required_status_checks_policy\": false,",
        "        \"required_status_checks\": [",
        "          {",
        "            \"context\": \"trame\"",
        "          },",
        "          {",
        "            \"context\": \"poselia\"",
        "          }",
        "        ]",
        "      }",
        "    }",
        "  ]",
        "}",
        "JSON",
        "gh api --method POST \"repos/$repo/pages\" -f build_type=workflow > /dev/null || gh api --method PUT \"repos/$repo/pages\" -f build_type=workflow > /dev/null",
        "",
      ].join("\n"),
    },
  ],
})
