// The drivers: what Trame knows how to do with a body written in a language. Reading and checking are generic (the
// syntax reader, the checks of a body); writing is not (the writer of the language); running goes through the module
// loader. A style sheet is only read and checked. A language without a driver cannot be checked. What a writer writes is read back before it is written: it must
// follow the grammar, and the values written in it must come back.

import { LiteralKind, Severity } from "../../../trame/kernel"
import type { ProvidedBy } from "../../../trame/kernel"
import type { FileReading, ModuleLoader, Paths } from "../../architecture"
import type { GnuPositions } from "../../standards"
import type { ValueTypes } from "../../algebra"
import type { DriverMessages } from "../../messages"
import type { BodySource, CheckContext, DriverIssue, LiteralRead, Reading } from "../../syntax"
import type { LanguageDescription } from "../../../kinds/language"
import type { Api as ReaderApi } from "../syntax/reader"
import type { Api as ChecksApi } from "../syntax/checks"
import type { Api as TypeScriptWriterApi } from "../typescript/writer"
import type { Api as TerraformWriterApi } from "../terraform/writer"
import type { TerraformModules } from "../../terraform"
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
  /** What the reader finds in a body: its literals, its imports, what reaches outside… */
  read?(source: BodySource): Reading
  /** Finds the literals of these bodies, in one pass. */
  literals?(sources: readonly BodySource[]): Map<string, LiteralFound[]>
  /** The file that holds a body named by its path (a Terraform module is named by its directory). */
  bodyFile?(path: string): string
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
  /** The language of style sheets: read and checked, never run. */
  sheets: LanguageDescription
  typeScriptWriter: TypeScriptWriterApi
  terraform: LanguageDescription
  modules: ProvidedBy<typeof TerraformModules>
  terraformWriter: TerraformWriterApi
  loader: ModuleLoader
  reading: FileReading
  paths: Paths
  values: ProvidedBy<typeof ValueTypes>
  gnu: ProvidedBy<typeof GnuPositions>
  messages: ProvidedBy<typeof DriverMessages>
}

const body = async (deps: Deps) => {
  const { reader, checks, graph, sheets, typeScriptWriter, terraform, modules, terraformWriter, loader, reading, paths, values, gnu, messages } = deps
  await reader.load(graph)
  await reader.load(terraform)
  await reader.load(sheets)

  /** The texts and numbers of a value, in the order JSON writes them: what a reader finds in it, keys aside. */
  const leaves = (v: unknown): (string | number)[] =>
    values.isText(v) || values.isNumber(v) ? [v]
      : Array.isArray(v) ? v.flatMap(leaves)
        : values.isObject(v) ? Object.values(v).flatMap(leaves) : []

  /** A file a writer wrote, read back in its language: refused if it does not follow the grammar, or if a value does not come back. */
  const readBack = (language: LanguageDescription) => (file: Emitted): Emitted => {
    const reading = reader.read(language, file.content)
    if (reading.errors.length) {
      throw new Error(messages.programNotTheLanguage(file.path, language.name, reading.errors.map((e) => e.line + gnu.separator + e.column)))
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
      return checks.check(reader.readSource(graph, source), { language: graph.name, ambient: ctx.ambient, entry: !source.inline })
    },
    read: (source) => reader.readSource(graph, source),
    literals: (sources) => reader.literals(graph, sources),
    load: async (file) => (await loader.import(file)).default,
    emitProgram: (a, name) => typeScriptWriter.emitProgram(a, name).map(readBack(graph)),
  }

  /** A Terraform module is named by its directory: its main content is in the main file. */
  const moduleFile = (path: string) => (reading.existsSync(path) && reading.statSync(path).isDirectory() ? paths.join(path, modules.main) : path)

  const hcl: Driver = {
    language: terraform.tag,
    extensions: terraform.extensions,
    check(source, ctx) {
      const file = moduleFile(source.file)
      if (!reading.existsSync(file)) return [{ severity: Severity.error, what: messages.moduleNotFound(paths.relative(ctx.root, source.file)) }]
      const read = reader.readSource(terraform, { ...source, file })
      return [...checks.check(read, { language: terraform.name, ambient: ctx.ambient, entry: false }), ...checks.parameters(read, ctx.deps)]
    },
    literals: (sources) => reader.literals(terraform, sources.map((s) => ({ ...s, file: moduleFile(s.file) }))),
    bodyFile: moduleFile,
    emitProvision: (a, items) => terraformWriter.emitProvision(a, items).map(readBack(terraform)),
  }

  /** A style sheet is read and checked; nothing runs it, nothing writes it. */
  const css: Driver = {
    language: sheets.tag,
    extensions: sheets.extensions,
    check(source, ctx) {
      if (!reading.existsSync(source.file)) return [{ severity: Severity.error, what: messages.bodyNotFound(paths.relative(ctx.root, source.file)) }]
      return checks.check(reader.readSource(sheets, source), { language: sheets.name, ambient: ctx.ambient, entry: false })
    },
    read: (source) => reader.readSource(sheets, source),
    literals: (sources) => reader.literals(sheets, sources),
  }

  const drivers: Driver[] = [typescript, hcl, css]

  return {
    driverFor: (language: string): Driver | undefined => drivers.find((d) => d.language === language),
    allDrivers: () => drivers,
    /** The driver of the language the graph is written in: that of the bodies written inline in its declarations. */
    graphDriver: () => typescript,
  }
}

export type Api = Awaited<ReturnType<typeof body>>
export default body
