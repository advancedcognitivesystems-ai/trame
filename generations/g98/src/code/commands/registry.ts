// trame registry [gN…]: publishes to the registry of this machine the versions frozen in the language's home: each
// generation named, or every one that records its engine (its language: its own copy when it has one, the home's while
// it shares it through links), and each release of the home's libraries. A version the registry holds stays as it is;
// after a clone on another machine, this is what fills the registry again.

import type { ProvidedBy } from "../../../trame/kernel"
import type { Handler } from "../../../kinds/entry-point"
import type { FileReading, FileTrees, Layout, Paths, Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { LanguageNames } from "../../conventions"
import type { PackageSource } from "#std/tooling"
import type { Api as PreparationApi } from "./preparation"
import type { Api as ProjectApi } from "../engine/project"

export interface Deps {
  exitStatus: { success: number; failure: number }
  preparation: PreparationApi
  layout: Layout
  project: ProjectApi
  packages: PackageSource
  names: ProvidedBy<typeof LanguageNames>
  reading: FileReading
  trees: FileTrees
  paths: Paths
  terminal: Terminal
  messages: ProvidedBy<typeof CommandMessages>
}

const body = (deps: Deps): Handler => async (req) => {
  const { layout, paths, messages } = deps
  const { join, basename } = paths
  const { existsSync, readdirSync } = deps.reading
  const o = deps.preparation.options(req.params.command, (req.body as { args: string[] }).args)
  const generations = join(o.root, layout.generations)
  const named = (dir: string) => !o.args.length || o.args.includes(dir)
  const published: string[] = []
  for (const e of readdirSync(generations, { withFileTypes: true })) {
    const gen = join(generations, e.name)
    if (!e.isDirectory() || !named(e.name) || !existsSync(join(gen, layout.engine))) continue
    const at = deps.packages.publish({ name: deps.names.name, version: e.name.slice(layout.generation.length), from: gen })
    const entries = readdirSync(gen, { withFileTypes: true })
    for (const d of [layout.prelude, layout.kinds, layout.views]) {
      const own = entries.find((x) => x.name === d)
      const source = own?.isSymbolicLink() ? join(o.root, d) : join(gen, d)
      if (!existsSync(source)) continue
      deps.trees.remove(join(at, d))
      deps.trees.copy(source, join(at, d))
    }
    published.push(at)
  }
  for (const lib of deps.project.projectDirs(o.root).libraries) {
    const releases = join(lib.home, layout.releases)
    if (o.args.length || !existsSync(releases)) continue
    for (const version of readdirSync(releases)) published.push(deps.packages.publish({ name: basename(lib.home), version, from: join(releases, version) }))
  }
  deps.terminal.write(messages.registryFilled(published.length))
  return { status: deps.exitStatus.success, body: published.length }
}

export default body
