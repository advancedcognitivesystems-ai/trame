// Leads the names of packages for a program Node.js runs, as the engine leads them when it reads a project (since g99):
// the names of the language (#trame/kernel, #trame/kinds/…) to the language the program was assembled with, and a
// library's name (#std/algebra), in the files of the project and of its libraries, to the library the project reads. A
// library published once then runs with the language and the libraries of the project that runs it, as a peer,
// wherever the program runs: the assembly writes the table in the program's launcher, each path from the program.
// Node-only: a launcher imports it, never a program that may run in a browser.

import { registerHooks } from "node:module"
import { fileURLToPath, pathToFileURL } from "node:url"
import { resolve, sep } from "node:path"
import { existsSync, realpathSync } from "node:fs"
import type { Leading } from "./kernel"

/** Registers the leading for this process: `program` is the URL of the launcher that holds the table. */
export function lead(table: Leading, program: string): void {
  const here = fileURLToPath(new URL(".", program))
  // By their real paths, as Node.js names a module: through a link, a file would be a second module.
  const real = (p: string) => (existsSync(p) ? realpathSync(p) : p)
  const at = (p: string) => real(resolve(here, p))
  const { imports, separator, pattern, extension } = table.names
  const within = table.within.map(at)
  const libraries = Object.fromEntries(Object.entries(table.libraries).map(([name, dir]) => [name, at(dir)]))
  const language = Object.entries(table.language).map(([name, file]) => ({ name, file }))
  const languageFile = (specifier: string): string | undefined => {
    for (const { name, file } of language) {
      const [before, after] = name.split(pattern)
      if (after === undefined) {
        if (specifier === name) return at(file)
      } else if (specifier.startsWith(before) && specifier.endsWith(after)) {
        return at(file.split(pattern).join(specifier.slice(before.length, specifier.length - after.length)))
      }
    }
    return undefined
  }
  const libraryFile = (specifier: string, parent: string | undefined): string | undefined => {
    if (!specifier.startsWith(imports) || parent === undefined || !parent.startsWith("file:")) return undefined
    const [name, ...rest] = specifier.slice(imports.length).split(separator)
    const sources = libraries[name]
    const from = fileURLToPath(parent)
    if (sources === undefined || !within.some((dir) => from === dir || from.startsWith(dir + sep))) return undefined
    return real(resolve(sources, ...rest) + extension)
  }
  registerHooks({
    resolve: (specifier, context, next) => {
      const file = languageFile(specifier) ?? libraryFile(specifier, context.parentURL)
      return file === undefined ? next(specifier, context) : { url: pathToFileURL(file).href, shortCircuit: true }
    },
  })
}
