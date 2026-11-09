// The configuration of a project: where its kinds and its views are, and the libraries it imports. The kinds and the
// views of the language come from the engine that reads the project (since g87): those of the generation it pins; a
// trame.json names the project's own besides, and its libraries. A library carries kinds and views in its sources
// (src/kinds, src/views, since g104): they join the language of every project that imports it, as the library's own
// build reads them, and a version frozen of the library carries those it was frozen with. A library is named by
// its path, or by its path and a version: the version frozen under its releases. A project names the language as a
// package (#trame/kinds/decision), unless it is the language's home, which holds its sources.

import type { FileReading, Layout, Paths, Prelude } from "../../architecture"
import type { NodeEncodings, NodeModuleSpecifiers } from "#std/system"
import type { ValueTypes } from "#std/algebra"
import type { ProvidedBy } from "../../../trame/kernel"
import type { LanguageNames } from "../../conventions"
import type { LanguageDescription } from "../../../kinds/language"

/** A library the project imports: its name in the project's graph, its root (absolute), and its version if frozen. */
export interface Library {
  name: string
  root: string
  /** Where the library itself is, absolute: its root, unless a version of it is imported. */
  home: string
  version?: string
}

export interface ProjectDirs {
  kinds: string[]
  views: string[]
  /** In the order of their names. */
  libraries: Library[]
  /** What the project calls itself: what the titles of its modules start with. */
  title?: string
  /** The generation of the engine it pins, where it is. */
  engine?: string
}

export interface Deps {
  encodings: ProvidedBy<typeof NodeEncodings>
  values: ProvidedBy<typeof ValueTypes>
  layout: Layout
  reading: FileReading
  paths: Paths
  /** The key under which a project names the generation it pins. */
  pin: { key: string }
  /** Where the language the engine speaks is. */
  prelude: Prelude
  names: ProvidedBy<typeof LanguageNames>
  specifiers: ProvidedBy<typeof NodeModuleSpecifiers>
  /** The language of the graph: the extension of its modules. */
  language: LanguageDescription
}

const body = (deps: Deps) => {
  const { encodings } = deps
  const { existsSync, readFileSync } = deps.reading
  const { join, resolve, relative, sep } = deps.paths
  const { specifiers, names } = deps
  const [extension] = deps.language.extensions
  /** The language's directories first, then the project's own, each once. */
  const withLanguage = (dir: string, listed: string[] | undefined, root: string) =>
    [...new Set([join(deps.prelude.root, dir), ...(listed ?? []).map((x) => resolve(root, x))])]

  /** Whether the project holds the language's sources: its home, which reaches them where they are. */
  const isHome = (root: string) =>
    Object.values(names.modules).filter((m) => !m.endsWith(specifiers.pattern)).every((m) => existsSync(join(root, m + extension)))

  /**
   * How a file of the project, in `from`, names a module of the language (`kinds/amendment`): by the language's name
   * (#trame/kinds/amendment), or by its path from the language's home.
   */
  function languageModule(root: string, from: string, module: string): string {
    if (!isHome(root)) return specifiers.imports + names.name + specifiers.separator + module
    const path = relative(from, join(root, module)).split(sep).join(specifiers.separator)
    return path.startsWith(specifiers.parent) ? path : specifiers.current + path
  }

  /** The kinds or the views a project carries in its sources (src/kinds, src/views), if it has any. */
  const carried = (root: string, dir: string) => [join(root, deps.layout.sources, dir)].filter(existsSync)

  function projectDirs(root: string): ProjectDirs {
    const l = deps.layout
    const file = join(root, l.configuration)
    const raw = existsSync(file)
      ? (JSON.parse(readFileSync(file, encodings.utf8)) as {
          kinds?: string[]; views?: string[]; title?: string; libraries?: Record<string, string | { path?: string; at?: string; version?: string }>
        } & Record<string, unknown>)
      : {}
    const pinned = raw[deps.pin.key]
    const libraries = Object.entries(raw.libraries ?? {})
        .map(([name, at]): Library => {
          const entry: { path?: string; at?: string; version?: string } = deps.values.isText(at) ? { path: at } : at
          // Placed by where it comes from (since g91): the version itself, as the manifest wrote it.
          if (entry.at !== undefined) {
            const placed = resolve(root, entry.at)
            return { name, home: placed, version: entry.version, root: placed }
          }
          const home = resolve(root, entry.path ?? root)
          return { name, home, version: entry.version, root: entry.version === undefined ? home : join(home, l.releases, entry.version) }
        })
        .sort((a, b) => a.name.localeCompare(b.name))
    // The language's, the project's own, then those its libraries carry, each once.
    const joined = (dir: string, listed: string[] | undefined) =>
      [...new Set([...withLanguage(dir, listed, root), ...carried(root, dir), ...libraries.flatMap((lib) => carried(lib.root, dir))])]
    return {
      kinds: joined(l.kinds, raw.kinds),
      views: joined(l.views, raw.views),
      libraries,
      title: raw.title,
      engine: deps.values.isText(pinned) ? resolve(root, pinned) : undefined,
    }
  }

  return { projectDirs, isHome, languageModule }
}

export type Api = ReturnType<typeof body>
export default body
