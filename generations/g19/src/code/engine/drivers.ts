// The drivers: what Trame knows how to do with a body written in a language.
// Check what it touches, load it to run it, assemble it. A language without a driver cannot be checked.

import type { Assembly, Emitted, Provision } from "./assembly"
import type { Api as DriverTypeScriptApi } from "./driver-typescript"
import type { Api as DriverHclApi } from "./driver-hcl"
import type { LiteralKind, Severity } from "../../../trame/kernel"

export interface DriverIssue {
  severity: typeof Severity.error | typeof Severity.warning
  what: string
}

export interface CheckContext {
  /** The kind of the node may touch the platform. */
  ambient: boolean
  /** The names of the dependencies declared for this body. */
  deps: string[]
  root: string
}

/** A literal found in a body. */
export interface LiteralFound {
  line: number
  value: string
  kind: LiteralKind
  category: string
  context: string
  declaredBy?: string
  /** What it does, from its place in the code: index, arithmetic, comparison, initial value, argument of… */
  role: string
  /** The value itself: a number, or the text without its quotes. */
  raw: string | number
}

/** A body to read: a file, or an inline property in the declaration of a node (its line, the field). */
export interface LiteralSource {
  key: string
  file: string
  inline?: { line: number; field: string }
}

export interface Driver {
  language: string
  extensions: string[]
  check(file: string, ctx: CheckContext): DriverIssue[]
  /** Checks a body written inline, in the declaration of the node. */
  checkSource?(source: string, ctx: CheckContext): DriverIssue[]
  /** Finds the literals of these bodies, in one pass (the driver may resolve types). */
  literals?(sources: LiteralSource[], root: string): Map<string, LiteralFound[]>
  /** Loads a runnable body into the process (only the languages that lend themselves to it). */
  load?(file: string): Promise<unknown>
  /** Writes the program of an assembled component (in the language of the component). */
  emitProgram?(a: Assembly, name: string): Emitted[]
  /** Writes the infrastructure of the implementations that are provisioned in this language. */
  emitProvision?(a: Assembly, items: Provision[]): Emitted[]
}

export interface Deps {
  driverTypeScript: DriverTypeScriptApi
  driverHcl: DriverHclApi
}

const body = (deps: Deps) => {
  const { typescript } = deps.driverTypeScript
  const { hcl } = deps.driverHcl

  const drivers: Driver[] = [typescript, hcl]

  const driverFor = (language: string): Driver | undefined => drivers.find((d) => d.language === language)
  const allDrivers = () => drivers

  return { driverFor, allDrivers }
}

export type Api = ReturnType<typeof body>
export default body
