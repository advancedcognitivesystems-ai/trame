// GitHub asked to merge a pull request once it holds from a session of Claude Code, whose proxy refuses GraphQL: the
// route it offers, PUT on the pull request's ccr/auto_merge by gh api, with the method decided. Whether it was taken.

import { spawn } from "node:child_process"
import type { BodyOf } from "#trame/kernel"
import type { AutoMergeInAClaudeSession, MergeMethod } from "../../repository"

const body: BodyOf<typeof AutoMergeInAClaudeSession> = ({ auto, repos, api, cli, events, exit, texts }) => ({
  ask: (repository: string, number: number, method: MergeMethod) =>
    new Promise<boolean>((done) => {
      const route = texts.concat([repos.repos, repository, api.pulls, repos.separator, String(number), auto.route])
      const child = spawn(repos.program, [repos.api, repos.method, repos.put, route, repos.input, repos.standardInput], { stdio: [cli.pipe, cli.ignore, cli.inherit] })
      child.on(events.error, () => done(false))
      child.on(events.close, (status: number | null) => done(status === exit.success))
      child.stdin.end(JSON.stringify({ [auto.method]: method }))
    }),
})

export default body
