// GitHub asked to merge a pull request once it holds, by its command line (gh pr merge --auto, GraphQL), by the method
// decided, with the token of whoever runs it: whether GitHub took it.

import { spawn } from "node:child_process"
import type { BodyOf } from "#trame/kernel"
import type { AutoMergeByGitHubCli, MergeMethod } from "../../repository"

const body: BodyOf<typeof AutoMergeByGitHubCli> = ({ auto, repos, methods, cli, events, exit }) => {
  const [merge, squash, rebase] = methods as readonly MergeMethod[]
  const flags = new Map<MergeMethod | undefined, string>([[merge, auto.byMerge], [squash, auto.bySquash], [rebase, auto.byRebase]])
  return {
    ask: (repository: string, number: number, method: MergeMethod) =>
      new Promise<boolean>((done) => {
        const by = flags.get(method) ?? auto.byMerge
        const child = spawn(repos.program, [auto.pr, auto.merge, String(number), auto.auto, by, auto.repo, repository], { stdio: [cli.ignore, cli.inherit, cli.inherit] })
        child.on(events.error, () => done(false))
        child.on(events.close, (status: number | null) => done(status === exit.success))
      }),
  }
}

export default body
