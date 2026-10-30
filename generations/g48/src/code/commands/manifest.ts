// trame manifest: writes the packages of the graph, each at the version its node declares, as the dependencies of the
// project's manifest; npm install then installs them, and the lockfile says what it installed, which each package
// checks. The graph decides the versions: the manifest is written from it.

import type { ProvidedBy } from "../../../trame/kernel"
import type { Handler } from "../../../kinds/entry-point"
import type { FileReading, FileWriting, Layout, Paths, Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { NodeEncodings, NpmManifest, TextFile } from "../../standards"
import type { PackageAudit } from "../../packages"
import type { Api as PreparationApi } from "./preparation"

export interface Deps {
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  preparation: PreparationApi
  packages: ProvidedBy<typeof PackageAudit>
  npm: ProvidedBy<typeof NpmManifest>
  layout: Layout
  reading: FileReading
  writing: FileWriting
  paths: Paths
  encodings: ProvidedBy<typeof NodeEncodings>
  file: ProvidedBy<typeof TextFile>
  json: { indentation: number }
  terminal: Terminal
  messages: ProvidedBy<typeof CommandMessages>
}

const body = (deps: Deps): Handler => async (req) => {
  const { options, prepare } = deps.preparation
  const { packages, npm, layout } = deps
  const o = options(req.params.command, (req.body as { args: string[] }).args)
  const { comp } = await prepare(o)
  const versions = comp.all(packages.kind).nodes()
    .map((v): [string, string] => [String(v.field(packages.name)), String(v.field(packages.version))])
    .sort(([a], [b]) => a.localeCompare(b))
  const file = deps.paths.join(o.root, layout.manifest)
  const manifest = deps.reading.existsSync(file) ? (JSON.parse(deps.reading.readFileSync(file, deps.encodings.utf8)) as Record<string, unknown>) : {}
  manifest[npm.dependencies] = Object.fromEntries(versions)
  deps.writing.writeFileSync(file, JSON.stringify(manifest, undefined, deps.json.indentation) + deps.file.endOfLine)
  deps.terminal.write(deps.messages.manifestWritten(versions.length, layout.manifest))
  return { status: deps.exitStatus.success, body: versions.length }
}

export default body
