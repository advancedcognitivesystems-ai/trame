// Runs the TypeScript modules of the project as they are, tsx having registered itself when the engine started. The
// language a module names (#trame/kernel, #trame/kinds/decision) is the language of the engine that reads it (since
// g91): a library published once runs with whichever generation reads it, as a peer dependency, and the generation in
// place and the candidate each read a project in their own language. Every other name resolves as Node.js would.

import { registerHooks } from "node:module"
import { pathToFileURL } from "node:url"
import { join } from "node:path"
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
  registerHooks({
    resolve: (specifier, context, next) => {
      const file = specifier.startsWith(prefix) ? target(specifier.slice(prefix.length)) : undefined
      return file === undefined ? next(specifier, context) : { url: pathToFileURL(file).href, shortCircuit: true }
    },
  })
  return { import: async (file) => (await import(pathToFileURL(file).href)) as Record<string, unknown> }
}

export default body
