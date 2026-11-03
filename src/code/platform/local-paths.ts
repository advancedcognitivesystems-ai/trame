// Packages by their local path: a package on this machine is reached where it is when it lies inside the project, and
// through a link under the project's directory of links otherwise, since an import map leads nowhere outside its
// package. The link is made again each time: it follows the version or the generation the project now pins. A package
// reached by its path is published where it is: nothing is copied. The versions it holds are those frozen beside the
// one a reference reaches, named as that one is (std/releases/0.14.0 beside 0.15.0, generations/g98 beside g99).

import type { BodyOf } from "../../../trame/kernel"
import type { LocalPaths } from "../../platform"

const body: BodyOf<typeof LocalPaths> = ({ trees, writing, reading, paths, specifiers, sequences }) => ({
  place: ({ project, under, name, at }) => {
    const { join, relative, dirname, sep } = paths
    const target = at ?? join(project, under, name)
    const base = relative(project, target)
    if (!base.split(sep).join(specifiers.separator).startsWith(specifiers.parent)) return base
    const link = join(project, under, name)
    trees.remove(link)
    writing.mkdirSync(dirname(link), { recursive: true })
    trees.link(relative(dirname(link), target), link)
    return join(under, name)
  },
  publish: ({ from }) => from,
  versions: ({ at, version }) => {
    if (at === undefined || version === undefined) return []
    const here = paths.basename(at)
    if (!here.endsWith(version)) return []
    // What the directory's name holds before the version: g for a generation, nothing for a release.
    const before = sequences.take(here, here.length - version.length)
    const beside = paths.dirname(at)
    if (!reading.existsSync(beside)) return []
    return reading.readdirSync(beside, { withFileTypes: true })
      .filter((e) => e.isDirectory() && e.name.startsWith(before) && e.name.length > before.length)
      .map((e) => e.name.slice(before.length))
  },
})

export default body
