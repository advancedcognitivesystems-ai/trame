// trame deliver [delivery]: writes the deliveries of the project, or the one named. A page: the component assembled for
// its environment (as trame assemble does), its program bundled into one script, its style sheets after the variables
// they use, in a single document a browser opens as it is.

import { DeliveryField, DeliveryTarget, KindName, EdgeName, FieldType, Severity, isFileBody, type ProvidedBy, type View } from "../../../trame/kernel"
import type { Handler } from "../../../kinds/entry-point"
import type { Bundler, FileReading, FileWriting, Paths, Terminal } from "../../architecture"
import type { CommandMessages } from "../../messages"
import type { PageBundle, PageDocument } from "../../page"
import type { Html } from "#std/html"
import type { ScriptElement } from "../../html"
import type { DeliveredStyle } from "../../delivery"
import type { NodeEncodings } from "#std/system"
import type { Sequences, Texts, ValueTypes } from "#std/algebra"
import type { Api as PreparationApi } from "./preparation"
import type { Api as AssemblyApi } from "../engine/assembly"

export interface Deps {
  /** The status the command returns to the system (POSIX). */
  exitStatus: { success: number; failure: number }
  preparation: PreparationApi
  assembly: AssemblyApi
  bundler: Bundler
  /** What leads the bundler by the names of packages, as the engine leads Node.js (since g95). */
  led: import("esbuild").Plugin
  bundle: ProvidedBy<typeof PageBundle>
  document: ProvidedBy<typeof PageDocument>
  html: ProvidedBy<typeof Html>
  script: ProvidedBy<typeof ScriptElement>
  style: ProvidedBy<typeof DeliveredStyle>
  reading: FileReading
  writing: FileWriting
  paths: Paths
  encodings: ProvidedBy<typeof NodeEncodings>
  terminal: Terminal
  sequences: ProvidedBy<typeof Sequences>
  texts: ProvidedBy<typeof Texts>
  values: ProvidedBy<typeof ValueTypes>
  messages: ProvidedBy<typeof CommandMessages>
}

const body = (deps: Deps): Handler => async (req) => {
  const { options, prepare, refuse } = deps.preparation
  const { messages, values } = deps
  const { join, dirname, relative } = deps.paths
  const { head } = deps.sequences
  const { empty } = deps.texts
  const o = options(req.params.command, (req.body as { args: string[] }).args)
  const [name] = o.args
  const { c, comp } = await prepare(o)
  const errors = c.diags.filter((d) => d.severity === Severity.error)
  if (errors.length) return refuse(o, [messages.deliveryRefusedForErrors(errors.length)])
  const deliveries = comp.all(KindName.delivery).nodes().filter((d) => !name || d.id === name || d.ref === name)
  if (!deliveries.length) return refuse(o, [messages.noDelivery(name, comp.all(KindName.delivery).nodes().map((d) => d.id))])

  const written: string[] = []
  for (const d of deliveries) {
    const one = (edge: string) => head(comp.from(d).out(edge).nodes())
    const component = one(EdgeName.delivers)
    const environment = one(EdgeName.environment)
    if (d.field(DeliveryField.target) !== DeliveryTarget.page || !component || !environment) return refuse(o, [messages.deliveryIncomplete(d.title)])

    // The component, assembled for its environment, as trame assemble writes it.
    const { assembly, errors: refused } = deps.assembly.prepareAssembly(c, o.root, component.id, environment.id)
    if (!assembly) return refuse(o, [messages.assemblyRefused(), ...refused])
    const { files, errors: emitErrors } = deps.assembly.emitAssembly(assembly)
    if (emitErrors.length) return refuse(o, emitErrors)
    for (const f of files) {
      deps.writing.mkdirSync(dirname(f.path), { recursive: true })
      deps.writing.writeFileSync(f.path, f.content)
    }
    const [program] = files

    // Its program, bundled into one script.
    const bundled = await deps.bundler.build({
      entryPoints: [program.path], bundle: true, write: false, format: deps.bundle.format, target: deps.bundle.target, plugins: [deps.led],
      minify: true, legalComments: deps.bundle.legalComments, charset: deps.bundle.charset,
    })
    const [script] = bundled.outputFiles

    // Its style: the variables the sheets use, then the sheets.
    const sheets = comp.from(d).out(EdgeName.styles).nodes()
    // A sheet's body is its field of that type; a decision's value, its first field of a value.
    const fieldOf = (v: View, type: FieldType) => {
      const f = comp.kindOf(v).fields.find((x) => x.type === type)
      return f ? v.field(f.name) : undefined
    }
    const sheetText = (s: View) => {
      const b = fieldOf(s, FieldType.body)
      return isFileBody(b) && s.decl ? deps.reading.readFileSync(join(o.root, dirname(s.decl.file), b.file), deps.encodings.utf8) : empty
    }
    const variables = sheets.flatMap((s) => comp.from(s).out().where((v) => v.kind === KindName.decision).nodes())
      .map((v) => fieldOf(v, FieldType.value))
      .filter((x): x is Record<string, string | number> => values.isObject(x) && !Array.isArray(x))
    const language = one(EdgeName.language)
    const tag = language && fieldOf(language, FieldType.value)

    const page = deps.document({
      lang: values.isObject(tag) && values.isText((tag as { tag?: unknown }).tag) ? (tag as { tag: string }).tag : empty,
      title: String(d.field(DeliveryField.shownAs)),
      fonts: empty,
      style: deps.style(variables, sheets.map(sheetText)),
      shell: [],
      scripts: deps.script(script.text, { [deps.html.type]: deps.html.module }),
    })
    const output = join(o.root, String(d.field(DeliveryField.output)))
    deps.writing.mkdirSync(dirname(output), { recursive: true })
    deps.writing.writeFileSync(output, page)
    written.push(relative(o.root, output))
    deps.terminal.write(messages.delivered(d.title, relative(o.root, output), page.length))
  }
  return { status: deps.exitStatus.success, body: written }
}

export default body
