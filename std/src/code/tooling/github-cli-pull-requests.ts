// The pull requests of a repository on GitHub, by its command line (gh api, REST), with the token of whoever runs it:
// the one a branch has open, one opened; the merge once it holds is asked through the automatic merge chosen where it
// runs. A call that fails is nothing.

import { spawn } from "node:child_process"
import type { BodyOf } from "#trame/kernel"
import type { GitHubCliPullRequests, PullRequestAsked, PullRequestOpen } from "../../repository"

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
    mergeOnceItHolds: (repository: string, number: number, method: Parameters<typeof merging.ask>[2]) => merging.ask(repository, number, method),
  }
}

export default body
