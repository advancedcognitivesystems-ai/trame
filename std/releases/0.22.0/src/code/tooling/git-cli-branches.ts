// The branches of the repository, asked of Git in the directory the program runs in: the branch checked out, pushed to
// its remote and followed there, the files it changes since it parted from another as the remote has it.

import { spawn } from "node:child_process"
import type { BodyOf } from "#trame/kernel"
import type { GitCliBranches } from "../../repository"

const body: BodyOf<typeof GitCliBranches> = ({ git, cli, events, exit, texts, file }) => {
  /** Runs Git with these arguments: what it writes, when it ends well; nothing otherwise. What it says goes to the terminal. */
  const run = (args: readonly string[]) =>
    new Promise<string | undefined>((done) => {
      const child = spawn(git.program, [...args], { stdio: [cli.ignore, cli.pipe, cli.inherit] })
      const chunks: string[] = []
      child.stdout.on(events.data, (chunk: unknown) => void chunks.push(String(chunk)))
      child.on(events.error, () => done(undefined))
      child.on(events.close, (status: number | null) => done(status === exit.success ? texts.concat(chunks) : undefined))
    })
  const lines = (text: string) => text.split(file.endOfLine).filter(Boolean)
  return {
    current: async () => {
      const [name] = lines((await run([git.revParse, git.abbreviated, git.head])) ?? texts.empty)
      return name === git.detached ? undefined : name
    },
    push: async (branch: string) => (await run([git.push, git.upstream, git.remote, branch])) !== undefined,
    changed: async (base: string) => {
      if ((await run([git.fetch, git.remote, base])) === undefined) return undefined
      const listed = await run([git.diff, git.names, texts.concat([git.fetched, git.since, git.head])])
      return listed === undefined ? undefined : lines(listed)
    },
  }
}

export default body
