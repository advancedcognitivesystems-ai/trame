// The pull requests of a repository on GitHub, by its command line (gh api, REST), with the token of whoever runs it:
// the one a branch has open, one opened; the merge once it holds is asked through the automatic merge chosen where it
// runs. A call that fails is nothing.

import { spawn } from "node:child_process"
import type { BodyOf } from "#trame/kernel"
import type { GitHubCliPullRequests, MergeMethod, PullRequestAsked, PullRequestOpen, CheckRun } from "../../repository"

type Json = { readonly [key: string]: unknown }

const body: BodyOf<typeof GitHubCliPullRequests> = ({ repos, api, cli, events, exit, texts, values, merging }) => {
  /** Calls gh api with what it is given: what it answers, when it ends well; nothing otherwise. */
  const call = (args: readonly string[], input?: unknown) =>
    new Promise<string | undefined>((done) => {
      const given = input === undefined ? [] : [repos.input, repos.standardInput]
      const child = spawn(repos.program, [repos.api, ...args, ...given], { stdio: [cli.pipe, cli.pipe, cli.inherit] })
      const chunks: string[] = []
      child.stdout.on(events.data, (chunk: unknown) => void chunks.push(String(chunk)))
      child.on(events.error, () => done(undefined))
      child.on(events.close, (status: number | null) => done(status === exit.success ? texts.concat(chunks) : undefined))
      child.stdin.end(input === undefined ? texts.empty : JSON.stringify(input))
    })
  const parsed = <T>(text: string | undefined): T | undefined => (text === undefined ? undefined : (JSON.parse(text) as T))
  const pullsOf = (repository: string) => texts.concat([repos.repos, repository, api.pulls])
  /** A pull request as GitHub answers it: its number and where a person opens it. */
  const openOf = (answered: Json | undefined): PullRequestOpen | undefined => {
    const number = answered?.[api.number]
    const url = answered?.[api.url]
    return values.isNumber(number) && values.isText(url) ? { number, url } : undefined
  }
  const parameter = (name: string, value: string) => texts.concat([name, api.equals, value])
  const pullOf = (repository: string, number: number) => texts.concat([pullsOf(repository), repos.separator, String(number)])
  const branchOf = (side: unknown) => (values.isObject(side) ? (side as Json)[api.ref] : undefined)
  const commitOf = (side: unknown) => (values.isObject(side) ? (side as Json)[api.sha] : undefined)
  return {
    find: async (repository: string, branch: string) => {
      const [owner] = repository.split(repos.separator)
      const head = parameter(api.head, texts.concat([owner ?? texts.empty, api.owner, branch]))
      const listed = parsed<readonly Json[]>(await call([texts.concat([pullsOf(repository), api.query, head, api.and, parameter(api.state, api.openState)])]))
      const [first] = listed ?? []
      return openOf(first)
    },
    open: async (repository: string, asked: PullRequestAsked) =>
      openOf(parsed<Json>(await call([repos.method, repos.post, pullsOf(repository)], {
        [api.title]: asked.title, [api.head]: asked.head, [api.base]: asked.base, [api.body]: asked.body,
      }))),
    mergeOnceItHolds: (repository: string, number: number, method: MergeMethod) => merging.ask(repository, number, method),
    read: async (repository: string, number: number) => {
      const answered = parsed<Json>(await call([pullOf(repository, number)]))
      const made = openOf(answered)
      const [head, base, commit] = [branchOf(answered?.[api.head]), branchOf(answered?.[api.base]), commitOf(answered?.[api.head])]
      return made && values.isText(head) && values.isText(base) && values.isText(commit)
        ? { ...made, head, base, commit, open: answered?.[api.state] === api.openState }
        : undefined
    },
    checks: async (repository: string, commit: string) => {
      const route = texts.concat([repos.repos, repository, api.commits, repos.separator, commit, api.checkRuns, api.query, parameter(api.perPage, api.most)])
      const listed = parsed<Json>(await call([route]))?.[api.runs]
      if (!Array.isArray(listed)) return undefined
      return (listed as Json[]).flatMap((run): CheckRun[] => {
        const name = run[api.name]
        if (!values.isText(name)) return []
        const ended = run[api.status] === api.completed
        return [ended ? { name, passed: run[api.conclusion] === api.success || run[api.conclusion] === api.skipped } : { name }]
      })
    },
    files: async (repository: string, number: number) => {
      // Page after page, until one lists fewer than a page holds: a generation changes more files than a page lists.
      const found: string[] = []
      for (let page = Number(api.first); ; page++) {
        const route = texts.concat([pullOf(repository, number), api.files, api.query, parameter(api.perPage, api.most), api.and, parameter(api.page, String(page))])
        const listed = parsed<readonly Json[]>(await call([route]))
        if (listed === undefined) return undefined
        found.push(...listed.flatMap((f) => (values.isText(f[api.filename]) ? [f[api.filename] as string] : [])))
        if (listed.length < Number(api.most)) return found
      }
    },
    merge: async (repository: string, number: number, method: MergeMethod) =>
      (await call([repos.method, repos.put, texts.concat([pullOf(repository, number), api.merging])], { [api.method]: method })) !== undefined,
  }
}

export default body
