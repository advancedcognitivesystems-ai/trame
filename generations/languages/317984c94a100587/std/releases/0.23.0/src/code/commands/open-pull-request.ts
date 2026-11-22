// trame pull-request "Title" ["What it changes"]: the branch checked out pushed, its pull request opened into the base
// (or the one open found), saying which projects it changes and whether it changes what people decided (a project's
// lock); GitHub then asked to merge it once it holds, unless the way decided keeps that for a person.

import type { BodyOf } from "#trame/kernel"
import type { OpenPullRequest } from "../../commands"
import type { MergeWay } from "#ci/github"

const body: BodyOf<typeof OpenPullRequest> = ({ settings, branches, pulls, ways, say, exit, counts, posix, texts }) => async (req) => {
  const [title, description] = (req.body as { args: readonly string[] }).args
  const refused = (line: string) => ({ status: exit.failure, body: [line] })
  if (!title) return refused(say.pullRequestUsage())
  const { repository, base, method, merge, lock, projects } = settings
  const [byHand, onceItHolds] = ways as readonly MergeWay[]
  const branch = await branches.current()
  if (branch === undefined) return refused(say.noBranch())
  if (branch === base) return refused(say.onTheBase(base))
  if (!(await branches.push(branch))) return refused(say.notPushed(branch))
  const changed = await branches.changed(base)
  if (changed === undefined) return refused(say.changesUnread(base))

  // Each path to its project: the one whose directory holds it, the deepest.
  const root = (dir: string) => dir === posix.currentDirectory
  const within = (dir: string, path: string) => root(dir) || path.startsWith(texts.concat([dir, posix.slash]))
  const projectOf = (path: string) => {
    const [deepest] = projects.filter((p) => within(p.dir, path)).sort((a, b) => b.dir.length - a.dir.length)
    return deepest
  }
  const lockOf = (dir: string) => (root(dir) ? lock : texts.concat([dir, posix.slash, lock]))
  const names = [...new Set(changed.map(projectOf).flatMap((p) => (p ? [p.name] : [])))]
  const decided = projects.map((p) => lockOf(p.dir)).filter((path) => changed.includes(path))

  const found = await pulls.find(repository, branch)
  const made = found ?? (await pulls.open(repository, { title, head: branch, base, body: say.pullRequestBody(description ?? texts.empty, names, decided) }))
  if (!made) return refused(say.openRefused())
  const lines = [found ? say.alreadyOpen(made.number, made.url) : say.opened(made.number, made.url)]
  // GitHub merges it once it holds when the way says so: always, or unless it changes what people decided.
  const automatic = merge === onceItHolds || (merge !== byHand && counts.isEmpty(decided))
  if (counts.any(decided) && merge !== onceItHolds) lines.push(say.decided(decided))
  else if (merge === byHand) lines.push(say.byHand())
  if (automatic) lines.push((await pulls.mergeOnceItHolds(repository, made.number, method)) ? say.mergesOnceItHolds(method) : say.mergeRefused())
  return { status: exit.success, body: lines }
}

export default body
