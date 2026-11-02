// Runs the TypeScript modules of the project as they are, tsx having registered itself when the engine started. The
// language a module names (#trame/kernel, #trame/kinds/decision) is the language of the engine that reads it (since
// g91): a library published once runs with whichever generation reads it, as a peer dependency, and the generation in
// place and the candidate each read a project in their own language. Every other name resolves as Node.js would.

import { registerHooks } from "node:module"
import { pathToFileURL, fileURLToPath } from "node:url"
import { join, sep } from "node:path"
import { existsSync, realpathSync } from "node:fs"
import type { BodyOf } from "../../../trame/kernel"
import type { TsxLoader } from "../../platform"

const body: BodyOf<typeof TsxLoader> = ({ prelude, names, specifiers, language }) => {
  const [extension] = language.extensions
  const prefix = specifiers.imports + names.name + specifiers.separator
  /** Where a name of the language leads in the engine's own language: a module, or a module under a pattern. */
  const target = (name: string): string | undefined => {
    for (const [key, module] of Object.entries(names.modules)) {
      const [before, after] = key.split(specifiers.pattern)
      if (after === undefined ? name === key : name.startsWith(before) && name.endsWith(after)) {
        const rest = after === undefined ? undefined : name.slice(before.length, name.length - after.length)
        return join(prelude.root, (rest === undefined ? module : module.split(specifiers.pattern).join(rest)) + extension)
      }
    }
    return undefined
  }
  // The libraries of the project being read, and the directories whose files they are led for.
  let libraries: Readonly<Record<string, string>> = {}
  let within: readonly string[] = []
  /** A library's name, for a file of the project or of its libraries: the library's sources. */
  const library = (specifier: string, from: () => string | undefined): string | undefined => {
    if (!specifier.startsWith(specifiers.imports)) return undefined
    const [name, ...rest] = specifier.slice(specifiers.imports.length).split(specifiers.separator)
    const sources = libraries[name]
    const dir = sources === undefined ? undefined : from()
    if (sources === undefined || dir === undefined || !within.some((d) => dir === d || dir.startsWith(d + sep))) return undefined
    return join(sources, ...rest) + extension
  }
  const resolve = (specifier: string, from: () => string | undefined) =>
    specifier.startsWith(prefix) ? target(specifier.slice(prefix.length)) : library(specifier, from)
  registerHooks({
    resolve: (specifier, context, next) => {
      const { parentURL } = context
      const file = resolve(specifier, () => (parentURL === undefined ? undefined : fileURLToPath(parentURL)))
      return file === undefined ? next(specifier, context) : { url: pathToFileURL(file).href, shortCircuit: true }
    },
  })
  return {
    import: async (file) => (await import(pathToFileURL(file).href)) as Record<string, unknown>,
    lead: (names, dirs) => {
      // By their real paths too: a module named through a link would be a second module, its nodes without a name.
      libraries = Object.fromEntries(Object.entries(names).map(([name, dir]) => [name, existsSync(dir) ? realpathSync(dir) : dir]))
      // Node.js names a module by its real path: a library reached through a link is within its real directory.
      within = dirs.map((dir) => (existsSync(dir) ? realpathSync(dir) : dir))
    },
    resolve: (specifier, from) => resolve(specifier, () => from),
  }
}

export default body
