// The checks of a body, on what the reader found in it: the same for every language. A body receives the world through
// its parameters only. Only the prelude's public API may be imported as a value; another module of the project would be
// a hidden dependency; the platform (packages, built-in modules, a computed load, the globals that reach outside) is
// reserved for the kinds that may touch it (implementations). A file body gives something; a body follows its grammar.

import { Severity } from "../../../trame/kernel"
import type { ProvidedBy } from "../../../trame/kernel"
import type { GnuPositions } from "../../../std/src/text"
import type { NodeModuleSpecifiers } from "../../../std/src/system"
import type { DriverMessages } from "../../messages"
import type { Sequences } from "../../../std/src/algebra"
import type { DriverIssue, Reading } from "../../syntax"

export interface Deps {
  /** How a body names the prelude's public API: the endings of its module's path. */
  prelude: { endings: readonly string[] }
  specifiers: ProvidedBy<typeof NodeModuleSpecifiers>
  gnu: ProvidedBy<typeof GnuPositions>
  sequences: ProvidedBy<typeof Sequences>
  messages: ProvidedBy<typeof DriverMessages>
}

/** What a check knows of the body beside its reading. */
export interface BodyContext {
  /** The name of its language, as messages give it. */
  language: string
  /** The kind of its node may touch the platform. */
  ambient: boolean
  /** It must give something: a file body of a language whose bodies export what they give. */
  entry: boolean
}

const body = ({ prelude, specifiers, gnu, sequences, messages }: Deps) => {
  const isPrelude = (module: string) => prelude.endings.some((ending) => module.endsWith(ending))
  const isRelative = (module: string) => module.startsWith(specifiers.current) || module.startsWith(specifiers.parent)

  return {
    check(reading: Reading, ctx: BodyContext): DriverIssue[] {
      const found: { line: number; issue: DriverIssue }[] = []
      const error = (line: number, what: string) => found.push({ line, issue: { severity: Severity.error, what } })
      const platform = (line: number, what: string) => {
        if (!ctx.ambient) error(line, messages.platformAccess(what))
      }
      const first = sequences.head(reading.errors)
      if (first) error(first.line, messages.notTheLanguage(ctx.language, reading.errors.map((e) => e.line + gnu.separator + e.column)))
      for (const i of reading.imports) {
        if (i.computed) platform(i.line, messages.computedImport())
        else if (i.typeOnly || isPrelude(i.module)) continue
        else if (isRelative(i.module)) error(i.line, messages.hiddenDependency(i.module))
        else platform(i.line, i.module)
      }
      // Each global once, where it first appears.
      const seen = new Set<string>()
      for (const g of reading.globals) {
        if (seen.has(g.name)) continue
        seen.add(g.name)
        platform(g.line, g.name)
      }
      const issues = found.sort((a, b) => a.line - b.line).map((f) => f.issue)
      if (ctx.entry && !reading.entry) issues.push({ severity: Severity.error, what: messages.noDefaultExport() })
      return issues
    },

    /** A body that declares its parameters (a Terraform module): each dependency the graph passes is one, and each one receives something. */
    parameters(reading: Reading, deps: readonly string[]): DriverIssue[] {
      const declared = reading.parameters.map((p) => p.name)
      return [
        ...deps.filter((d) => !declared.includes(d)).map((d): DriverIssue => ({ severity: Severity.error, what: messages.undeclaredVariable(d) })),
        ...declared.filter((v) => !deps.includes(v)).map((v): DriverIssue => ({ severity: Severity.warning, what: messages.unusedVariable(v) })),
      ]
    },
  }
}

export type Api = ReturnType<typeof body>
export default body
