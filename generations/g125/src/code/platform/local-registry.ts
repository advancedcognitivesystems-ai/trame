// Packages from the registry on this machine: each version a package published, side by side, under a directory of
// the home the graph decides (LocalRegistryPlace). A project reaches the version it references through a link under
// its directory of links; a publication copies a version once (its links followed: a version holds what it needs), and
// a version is never written again.

import { homedir } from "node:os"
import type { BodyOf } from "../../../trame/kernel"
import type { LocalRegistry } from "../../platform"

const body: BodyOf<typeof LocalRegistry> = ({ trees, writing, reading, paths, place, npm, layout }) => {
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
      if (!reading.existsSync(at)) {
        trees.copy(from, at)
        // A version holds its manifest: without one, Node.js would read its modules as CommonJS.
        const file = join(at, layout.manifest)
        if (!reading.existsSync(file)) writing.writeFileSync(file, JSON.stringify({ [npm.type]: npm.module }))
      }
      return at
    },
    // The versions published, each a directory of the package's.
    versions: ({ name }) => {
      const dir = versionOf(name)
      return reading.existsSync(dir) ? reading.readdirSync(dir, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name) : []
    },
  }
}

export default body
