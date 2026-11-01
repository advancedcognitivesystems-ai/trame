// Packages from the registry on this machine: each version a package published, side by side, under a directory of
// the home the graph decides (LocalRegistryPlace). A project reaches the version it references through a link under
// its directory of links; a publication copies a version once (its links followed: a version holds what it needs), and
// a version is never written again.

import { homedir } from "node:os"
import type { BodyOf } from "../../../trame/kernel"
import type { LocalRegistry } from "../../platform"

const body: BodyOf<typeof LocalRegistry> = ({ trees, writing, reading, paths, place }) => {
  const { join, relative, dirname } = paths
  const registry = join(homedir(), place.directory)
  const versionOf = (name: string, version?: string) => join(registry, name, ...(version === undefined ? [] : [version]))
  return {
    place: ({ project, under, name, version }) => {
      const link = join(project, under, name)
      trees.remove(link)
      writing.mkdirSync(dirname(link), { recursive: true })
      trees.link(versionOf(name, version), link)
      return join(under, name)
    },
    publish: ({ name, version, from }) => {
      const at = versionOf(name, version)
      if (!reading.existsSync(at)) trees.copy(from, at)
      return at
    },
  }
}

export default body
