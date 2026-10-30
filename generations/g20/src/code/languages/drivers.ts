// The drivers: what Trame knows how to do with a body written in a language. Reading and checking are generic (the
// syntax reader, the checks of a body); writing is not (the writer of the language); running goes through the module
// loader. A language without a driver cannot be checked.

import { Severity } from "../../../trame/kernel"
import type { ProvidedBy } from "../../../trame/kernel"
import type { FileReading, ModuleLoader, Paths } from "../../architecture"
import type { DriverMessages } from "../../messages"
import type { BodySource, CheckContext, DriverIssue, LiteralRead } from "../../syntax"
import type { LanguageDescription } from "../../../kinds/language"
import type { Api as ReaderApi } from "../syntax/reader"
import type { Api as ChecksApi } from "../syntax/checks"
import type { Api as WriterApi } from "./typescript-writer"
import type { Api as HclApi } from "./driver-hcl"
import type { Assembly, Emitted, Provision } from "../engine/assembly"

export type { CheckContext, DriverIssue }

/** A literal found in a body, and what declares it when something does (a message catalog). */
export type LiteralFound = LiteralRead & { declaredBy?: string }

/** A body to read: a file, or an inline property in the declaration of a node. */
export type LiteralSource = BodySource

export interface Driver {
  language: string
  extensions: string[]
  /** Checks a body: a file, or a body written inline in the declaration of its node. */
  check(source: BodySource, ctx: CheckContext): DriverIssue[]
  /** Finds the literals of these bodies, in one pass. */
  literals?(sources: readonly BodySource[]): Map<string, LiteralFound[]>
  /** Loads a runnable body into the process (only the languages that lend themselves to it). */
  load?(file: string): Promise<unknown>
  /** Writes the program of an assembled component (in the language of the component). */
  emitProgram?(a: Assembly, name: string): Emitted[]
  /** Writes the infrastructure of the implementations that are provisioned in this language. */
  emitProvision?(a: Assembly, items: Provision[]): Emitted[]
}

export interface Deps {
  reader: ReaderApi
  checks: ChecksApi
  /** The language the graph is written in, and with it its inline bodies. */
  graph: LanguageDescription
  writer: WriterApi
  hcl: HclApi
  loader: ModuleLoader
  reading: FileReading
  paths: Paths
  messages: ProvidedBy<typeof DriverMessages>
}

const body = async ({ reader, checks, graph, writer, hcl, loader, reading, paths, messages }: Deps) => {
  await reader.load(graph)

  const typescript: Driver = {
    language: graph.tag,
    extensions: graph.extensions,
    check(source, ctx) {
      if (!reading.existsSync(source.file)) return [{ severity: Severity.error, what: messages.bodyNotFound(paths.relative(ctx.root, source.file)) }]
      return checks.check(reader.readSource(graph, source), { language: graph.name, ambient: ctx.ambient, file: !source.inline })
    },
    literals: (sources) => reader.literals(graph, sources),
    load: async (file) => (await loader.import(file)).default,
    emitProgram: writer.emitProgram,
  }

  const drivers: Driver[] = [typescript, hcl.hcl]

  return {
    driverFor: (language: string): Driver | undefined => drivers.find((d) => d.language === language),
    allDrivers: () => drivers,
    /** The driver of the language the graph is written in: that of the bodies written inline in its declarations. */
    graphDriver: () => typescript,
  }
}

export type Api = Awaited<ReturnType<typeof body>>
export default body
