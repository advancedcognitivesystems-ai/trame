// The drivers: what Trame knows how to do with a body written in a language. Reading and checking are generic (the
// syntax reader, the checks of a body); writing is not (the writer of the language); running goes through the module
// loader. A language without a driver cannot be checked. What a writer writes is read back before it is written: it must
// follow the grammar, and the values written in it must come back.

import { LiteralKind, Severity } from "../../../trame/kernel"
import type { ProvidedBy } from "../../../trame/kernel"
import type { FileReading, ModuleLoader, Paths } from "../../architecture"
import type { EcmaScriptTypes, GnuPositions } from "../../standards"
import type { DriverMessages } from "../../messages"
import type { BodySource, CheckContext, DriverIssue, LiteralRead } from "../../syntax"
import type { LanguageDescription } from "../../../kinds/language"
import type { Api as ReaderApi } from "../syntax/reader"
import type { Api as ChecksApi } from "../syntax/checks"
import type { Api as WriterApi } from "../typescript/writer"
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
  types: ProvidedBy<typeof EcmaScriptTypes>
  gnu: ProvidedBy<typeof GnuPositions>
  messages: ProvidedBy<typeof DriverMessages>
}

const body = async ({ reader, checks, graph, writer, hcl, loader, reading, paths, types, gnu, messages }: Deps) => {
  await reader.load(graph)

  /** The texts and numbers of a value, in the order JSON writes them: what a reader finds in it, keys aside. */
  const leaves = (v: unknown): (string | number)[] =>
    typeof v === types.string || typeof v === types.number ? [v as string | number]
      : Array.isArray(v) ? v.flatMap(leaves)
        : v !== null && typeof v === types.object ? Object.values(v as object).flatMap(leaves) : []

  /** A file written in the language of the graph, read back: refused if it does not follow the grammar, or if a value does not come back. */
  function readBack(file: Emitted): Emitted {
    const reading = reader.read(graph, file.content)
    if (reading.errors.length) {
      throw new Error(messages.programNotTheLanguage(file.path, graph.name, reading.errors.map((e) => e.line + gnu.separator + e.column)))
    }
    if (file.values) {
      const written = JSON.stringify(file.values.flatMap(leaves))
      const read = JSON.stringify(reading.literals.filter((l) => l.kind !== LiteralKind.key).map((l) => l.raw))
      if (written !== read) throw new Error(messages.valuesDoNotComeBack(file.path, written, read))
    }
    return file
  }

  const typescript: Driver = {
    language: graph.tag,
    extensions: graph.extensions,
    check(source, ctx) {
      if (!reading.existsSync(source.file)) return [{ severity: Severity.error, what: messages.bodyNotFound(paths.relative(ctx.root, source.file)) }]
      return checks.check(reader.readSource(graph, source), { language: graph.name, ambient: ctx.ambient, file: !source.inline })
    },
    literals: (sources) => reader.literals(graph, sources),
    load: async (file) => (await loader.import(file)).default,
    emitProgram: (a, name) => writer.emitProgram(a, name).map(readBack),
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
