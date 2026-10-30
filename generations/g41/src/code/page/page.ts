// Puts the page together: its shell, its theme and the style of a standalone document (the syntax elements of the page),
// its style sheets (the page's, then the rules of a narrow screen) and its script (main.ts, bundled by esbuild), the
// compiled graph. What it writes is read back before it is given: the style in CSS, where each variable used must be
// written, then the page in HTML; each must follow the grammar of its language.

import { Status } from "../../../trame/kernel"
import type { ProvidedBy, Bundle, KeyOf } from "../../../trame/kernel"
import type { Bundler, Compression, FileReading, Palette, Resources, Typography } from "../../architecture"
import type { OutputMessages } from "../../messages"
import type { GnuPositions, NodeEncodings, TextFile } from "../../standards"
import type { LanguageDescription } from "../../../kinds/language"
import type { Api as ReaderApi } from "../syntax/reader"
import type { CssDeclaration, CssRule } from "../../html"
import type * as page from "../../page"
import type * as appearance from "../../appearance"

export interface PageOptions {
  bundle?: Bundle
  dev?: boolean
  /** Without <html>, <head>, <body>: for a hosted page that provides its own skeleton (an artifact). */
  fragment?: boolean
  title?: string
}

export interface Deps {
  pageBundle: ProvidedBy<typeof page.PageBundle>
  standalone: ProvidedBy<typeof page.StandaloneStyle>
  encodings: ProvidedBy<typeof NodeEncodings>
  file: ProvidedBy<typeof TextFile>
  palette: Palette
  typography: Typography
  narrowScreen: ProvidedBy<typeof appearance.NarrowScreen>
  /** The measures of the page: its design scale, written as variables beside the colours and the fonts. */
  spacing: ProvidedBy<typeof appearance.Spacing>
  radii: ProvidedBy<typeof appearance.Radii>
  typeScale: ProvidedBy<typeof appearance.TypeScale>
  opacities: ProvidedBy<typeof appearance.Opacities>
  strokes: ProvidedBy<typeof appearance.Strokes>
  motion: ProvidedBy<typeof appearance.Motion>
  pageLayout: ProvidedBy<typeof appearance.PageLayout>
  resources: Resources
  reading: FileReading
  bundler: Bundler
  /** The graph of a standalone page, compressed (decision "A page carries its graph compressed"). */
  compression: Compression
  shell: ProvidedBy<typeof page.Shell>
  theme: ProvidedBy<typeof page.Theme>
  statusStyle: ProvidedBy<typeof page.StatusStyle>
  narrow: ProvidedBy<typeof page.NarrowScreenRule>
  fonts: ProvidedBy<typeof page.FontLinks>
  scripts: ProvidedBy<typeof page.PageScripts>
  document: ProvidedBy<typeof page.PageDocument>
  rule: ProvidedBy<typeof CssRule>
  declaration: ProvidedBy<typeof CssDeclaration>
  messages: ProvidedBy<typeof OutputMessages>
  language: { tag: string }
  reader: ReaderApi
  /** The languages the page and its style are read back in. */
  markup: LanguageDescription
  sheets: LanguageDescription
  gnu: ProvidedBy<typeof GnuPositions>
}

const body = async (deps: Deps) => {
  const { pageBundle, encodings, palette, typography, narrowScreen, resources, messages, language, reader, markup, sheets, gnu } = deps
  const { theme, statusStyle, narrow, scripts, document, rule, declaration } = deps
  const { endOfLine } = deps.file
  const { readFileSync } = deps.reading
  const { build } = deps.bundler

  const [origin, files, stylesheet] = typography.loading
  const fonts = deps.fonts(origin, files, stylesheet)
  // The colours of each status, by its key in the `Status` vocabulary: the pill, and the box of a node in a figure.
  const statuses = (Object.keys(Status) as KeyOf<typeof Status>[]).flatMap((key) => statusStyle(key, palette.statuses[key].fill, palette.statuses[key].stroke))
  const measures = [deps.spacing, deps.radii, deps.typeScale, deps.opacities, deps.strokes, deps.motion, deps.pageLayout]
  const themed = [...theme(palette.light, palette.dark, typography.fonts, measures), ...statuses].join(endOfLine)
  const standalone = Object.entries(deps.standalone).map(([selector, declarations]) =>
    rule(selector, Object.entries(declarations).map(([property, value]) => declaration(property, value))))
  const shell = deps.shell({
    subtitle: messages.brandSubtitle(),
    dates: messages.datesLabel(),
    navigation: messages.navigationLabel(),
    document: messages.documentLabel(),
    rendering: messages.renderingLabel(),
    renderings: [messages.renderedButton(), messages.markdownButton(), messages.textButton()],
  })

  await reader.load(markup)
  await reader.load(sheets)
  /** A text of the page, read back in its language: refused if it does not follow the grammar. */
  const readBack = (written: string, read: LanguageDescription, refused: (language: string, places: string[]) => string) => {
    const reading = reader.read(read, written)
    if (reading.errors.length) throw new Error(refused(read.name, reading.errors.map((e) => e.line + gnu.separator + e.column)))
    return reading
  }

  let script: string | undefined

  async function bundleScript(): Promise<string> {
    if (script) return script
    const out = await build({
      entryPoints: [resources.script], bundle: true, write: false, format: pageBundle.format, target: pageBundle.target,
      minify: true, legalComments: pageBundle.legalComments, charset: pageBundle.charset,
    })
    const [bundle] = out.outputFiles
    script = bundle.text
    return script
  }

  async function pageHtml(_root: string, o: PageOptions): Promise<string> {
    // The variables, the style sheet of the page, then the rules of a narrow screen. A standalone document gives its
    // own skeleton the style of a document; a host gives it in a fragment.
    const narrowRules = narrow(narrowScreen, readFileSync(resources.narrowStyle, encodings.utf8))
    const sheet = [themed, readFileSync(resources.style, encodings.utf8), narrowRules].join(endOfLine)
    const style = o.fragment ? sheet : [...standalone, sheet].join(endOfLine)
    // Each variable the style uses is one it writes: a variable that nothing writes gives nothing, silently.
    const { parameters, outputs } = readBack(style, sheets, messages.styleNotTheLanguage)
    const written = new Set(outputs.map((v) => v.name))
    const missing = [...new Set(parameters.map((v) => v.name).filter((v) => !written.has(v)))]
    if (missing.length) throw new Error(messages.variablesNotWritten(missing))
    const page = document({
      lang: language.tag,
      title: o.title ?? messages.pageTitle(),
      fonts,
      style,
      shell,
      scripts: scripts(await bundleScript(), o.bundle && deps.compression.pack(JSON.stringify(o.bundle)), o.dev),
      fragment: o.fragment,
    })
    readBack(page, markup, messages.pageNotTheLanguage)
    return page
  }

  return { pageHtml }
}

export type Api = Awaited<ReturnType<typeof body>>
export default body
