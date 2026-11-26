// A repository's settings applied and read back by GitHub's command line (gh api), with the token of whoever runs it:
// the merge methods, the automatic merge and the deletion of merged branches; the ruleset named after the branch,
// created or replaced when one of its name exists; the pages built by a workflow, created or replaced. Read back: the
// repository, the rules in force on the branch, and its pages when asked. A call that fails stops what applies, and is
// answered by its path; read back, a repository that cannot be read is nothing, pages GitHub does not have are not built.

import { spawn } from "node:child_process"
import type { BodyOf } from "#trame/kernel"
import type { GitHubCliRepository, MergeMethod, RepositorySettings, RepositoryState } from "../../repository"

type Json = { readonly [key: string]: unknown }

const body: BodyOf<typeof GitHubCliRepository> = ({ api, cli, events, exit, methods, texts, values }) => {
  const [merge, squash, rebase] = methods as readonly MergeMethod[]
  /** Calls gh api with what it is given: what it answers, when it ends well; nothing otherwise. */
  const call = (args: readonly string[], input?: unknown) =>
    new Promise<string | undefined>((done) => {
      const given = input === undefined ? [] : [api.input, api.standardInput]
      const child = spawn(api.program, [api.api, ...args, ...given], { stdio: [cli.pipe, cli.pipe, cli.inherit] })
      const chunks: string[] = []
      child.stdout.on(events.data, (chunk: unknown) => void chunks.push(String(chunk)))
      child.on(events.error, () => done(undefined))
      child.on(events.close, (status: number | null) => done(status === exit.success ? texts.concat(chunks) : undefined))
      child.stdin.end(input === undefined ? texts.empty : JSON.stringify(input))
    })
  const parsed = <T>(text: string | undefined): T | undefined => (text === undefined ? undefined : (JSON.parse(text) as T))
  const repos = (repository: string, after: string = texts.empty) => texts.concat([api.repos, repository, after])

  /** The ruleset of the branch, as the settings say. */
  const rulesetOf = (settings: RepositorySettings) => ({
    [api.name]: settings.branch,
    [api.target]: api.branchTarget,
    [api.enforcement]: api.active,
    [api.conditions]: { [api.refName]: { [api.include]: [texts.concat([api.heads, settings.branch])], [api.exclude]: [] } },
    [api.rules]: [
      { [api.type]: api.deletion },
      { [api.type]: api.nonFastForward },
      {
        [api.type]: api.pullRequest,
        [api.parameters]: {
          [api.approvals]: settings.approvals, [api.dismissStale]: false, [api.codeOwners]: false, [api.lastPush]: false, [api.threads]: false,
          [api.methods]: [settings.method],
        },
      },
      {
        [api.type]: api.statusChecks,
        [api.parameters]: { [api.strict]: settings.upToDate, [api.statusChecks]: settings.checks.map((c) => ({ [api.context]: c })) },
      },
    ],
  })

  return {
    apply: async (repository: string, settings: RepositorySettings) => {
      const flags = {
        [api.allowMerge]: settings.method === merge, [api.allowSquash]: settings.method === squash, [api.allowRebase]: settings.method === rebase,
        [api.allowAutoMerge]: settings.autoMerge, [api.deleteBranch]: settings.deletesMerged,
      }
      if ((await call([api.method, api.patch, repos(repository)], flags)) === undefined) return repos(repository)
      const rulesets = repos(repository, api.rulesets)
      const existing = parsed<readonly Json[]>(await call([rulesets]))
      if (existing === undefined) return rulesets
      const found = existing.find((r) => r[api.name] === settings.branch)?.[api.id]
      const at = found === undefined ? rulesets : texts.concat([rulesets, api.separator, String(found)])
      if ((await call([api.method, found === undefined ? api.post : api.put, at], rulesetOf(settings))) === undefined) return at
      if (settings.pages) {
        const pages = repos(repository, api.pages)
        const built = { [api.buildType]: api.workflow }
        const made = (await call([api.method, api.post, pages], built)) ?? (await call([api.method, api.put, pages], built))
        if (made === undefined) return pages
      }
      return undefined
    },
    read: async (repository: string, branch: string, pages: boolean): Promise<RepositoryState | undefined> => {
      const repo = parsed<Json>(await call([repos(repository)]))
      const rules = parsed<readonly Json[]>(await call([repos(repository, texts.concat([api.branchRules, branch]))]))
      if (repo === undefined || rules === undefined) return undefined
      const parameters = (type: string) => rules.find((r) => r[api.type] === type)?.[api.parameters] as Json | undefined
      const asked = parameters(api.pullRequest)
      const required = parameters(api.statusChecks)
      const allowed = [[api.allowMerge, merge], [api.allowSquash, squash], [api.allowRebase, rebase]] as const
      const checks = (required?.[api.statusChecks] as readonly Json[] | undefined) ?? []
      const built = pages ? parsed<Json>(await call([repos(repository, api.pages)])) : undefined
      const approvals = asked?.[api.approvals]
      return {
        methods: allowed.filter(([flag]) => repo[flag] === true).map(([, method]) => method),
        autoMerge: repo[api.allowAutoMerge] === true,
        deletesMerged: repo[api.deleteBranch] === true,
        protected: [api.deletion, api.nonFastForward, api.pullRequest].every((t) => rules.some((r) => r[api.type] === t)),
        ...(values.isNumber(approvals) ? { approvals } : {}),
        checks: checks.map((c) => String(c[api.context])),
        upToDate: required?.[api.strict] === true,
        ...(pages ? { pages: built?.[api.buildType] === api.workflow } : {}),
      }
    },
  }
}

export default body
