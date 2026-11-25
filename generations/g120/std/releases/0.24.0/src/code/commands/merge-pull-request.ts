// trame merge [number]: a pull request merged once it holds, by the method decided. The one of the branch checked out,
// or the one named; refused while no check ran on its last commit, or one failed or still runs; whose decisions it
// changes (a project's lock) is said; then, when its branch was the one checked out, the base is checked out as the
// repository has it.

import type { BodyOf } from "#trame/kernel"
import type { MergePullRequest } from "../../commands"

const body: BodyOf<typeof MergePullRequest> = ({ settings, branches, pulls, say, exit, counts, posix, texts, values }) => async (req) => {
  const [given] = (req.body as { args: readonly string[] }).args
  const refused = (...lines: string[]) => ({ status: exit.failure, body: lines })
  const { repository, method, lock, projects } = settings
  const branch = await branches.current()
  const named = given === undefined ? undefined : Number(given)
  if (named !== undefined && !Number.isInteger(named)) return refused(say.mergeUsage())
  const number = named ?? (branch === undefined ? undefined : (await pulls.find(repository, branch))?.number)
  if (number === undefined) return refused(say.noPullRequest(branch ?? texts.empty))
  const read = await pulls.read(repository, number)
  if (!read) return refused(say.pullRequestUnread(number))
  if (!read.open) return refused(say.notOpen(number))

  // What proves it: the checks run on its last commit, all ended and passed.
  const runs = await pulls.checks(repository, read.commit)
  if (runs === undefined) return refused(say.checksUnread(number))
  if (counts.isEmpty(runs)) return refused(say.noCheck(number))
  const failed = runs.filter((r) => r.passed === false).map((r) => r.name)
  if (counts.any(failed)) return refused(say.checksFailed(number, failed))
  const running = runs.filter((r) => !values.isBoolean(r.passed)).map((r) => r.name)
  if (counts.any(running)) return refused(say.checksRunning(number, running))

  // Whose decisions it changes: the lock of one of the repository's projects.
  const files = (await pulls.files(repository, number)) ?? []
  const lockOf = (dir: string) => (dir === posix.currentDirectory ? lock : texts.concat([dir, posix.slash, lock]))
  const decided = projects.map((p) => lockOf(p.dir)).filter((path) => files.includes(path))
  const lines = counts.any(decided) ? [say.mergingDecided(decided)] : []
  if (!(await pulls.merge(repository, number, method))) return refused(...lines, say.mergeRefusedNow(number))
  lines.push(say.merged(number, method))
  if (branch === read.head) lines.push((await branches.update(read.base)) ? say.baseUpdated(read.base) : say.baseNotUpdated(read.base))
  return { status: exit.success, body: lines }
}

export default body
