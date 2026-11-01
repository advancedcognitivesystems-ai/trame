// Packages by their local path: a package on this machine is reached where it is when it lies inside the project, and
// through a link under the project's directory of links otherwise, since an import map leads nowhere outside its
// package. The link is made again each time: it follows the version or the generation the project now pins.

import type { BodyOf } from "../../../trame/kernel"
import type { LocalPaths } from "../../platform"

const body: BodyOf<typeof LocalPaths> = ({ trees, writing, paths, specifiers }) => ({
  place: ({ project, under, name, at }) => {
    const { join, relative, dirname, sep } = paths
    const base = relative(project, at)
    if (!base.split(sep).join(specifiers.separator).startsWith(specifiers.parent)) return base
    const link = join(project, under, name)
    trees.remove(link)
    writing.mkdirSync(dirname(link), { recursive: true })
    trees.link(relative(dirname(link), at), link)
    return join(under, name)
  },
})

export default body
