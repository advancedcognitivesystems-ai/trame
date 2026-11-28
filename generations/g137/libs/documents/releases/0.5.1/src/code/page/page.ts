// Puts the page together: its shell, its theme and the style of a standalone document (the syntax elements of the page),
// its style sheets (the page's, then the rules of a narrow screen), its program (which the command that writes the
// page gives, bundled) and the compiled graph, packed. What it writes is read back before it is given: the style in CSS,
// where each variable used must be written, then the page in HTML; each must follow the grammar of its language.

import { Status } from "#trame/kernel"
import type { ProvidedBy, KeyOf, LanguageDescription, LanguageReader, TextReader } from "#trame/kernel"
import type { Colours as Palette, Fonts } from "../../appearance"
import type { GnuPositions, TextFile } from "#std/text"
import type { CssDeclaration, CssRule } from "../../html"
import type * as page from "../../page"
import type * as appearance from "../../appearance"

export interface PageOptions {
  /** The page's program, bundled for a browser: the engine assembles it, the command gives it. */
  script: string
  /** The program that writes the page: its brand names it. */
  program: string
  /** The graph compiled at its dates, packed (decision "A page carries its graph compressed"): an exported page. */
  packed?: string
  dev?: boolean
  /** Without <html>, <head>, <body>: for a hosted page that provides its own skeleton (an artifact). */
  fragment?: boolean
  /** What the project calls itself: the page's title names it. */
  project?: string
}

export interface Deps {
  standalone: ProvidedBy<typeof page.StandaloneStyle>
  file: ProvidedBy<typeof TextFile>
  palette: Palette
  typography: Fonts
  narrowScreen: ProvidedBy<typeof appearance.NarrowScreen>
  /** The measures of the page: its design scale, written as variables beside the colours and the fonts. */
  spacing: ProvidedBy<typeof appearance.Spacing>
  radii: ProvidedBy<typeof appearance.Radii>
  typeScale: ProvidedBy<typeof appearance.TypeScale>
  opacities: ProvidedBy<typeof appearance.Opacities>
  strokes: ProvidedBy<typeof appearance.Strokes>
  motion: ProvidedBy<typeof appearance.Motion>
  pageLayout: ProvidedBy<typeof appearance.PageLayout>
  sheets: { style(): string; narrow(): string }
  shell: ProvidedBy<typeof page.Shell>
  theme: ProvidedBy<typeof page.Theme>
  statusStyle: ProvidedBy<typeof page.StatusStyle>
  narrow: ProvidedBy<typeof page.NarrowScreenRule>
  fonts: ProvidedBy<typeof page.FontLinks>
  scripts: ProvidedBy<typeof page.PageScripts>
  document: ProvidedBy<typeof page.PageDocument>
  rule: ProvidedBy<typeof CssRule>
  declaration: ProvidedBy<typeof CssDeclaration>
  words: ProvidedBy<typeof page.PageWords>
  language: { tag: string }
  reading: LanguageReader & TextReader
  /** The languages the page and its style are read back in. */
  markup: LanguageDescription
  css: LanguageDescription
  gnu: ProvidedBy<typeof GnuPositions>
}

const body = (deps: Deps) => {
  const { palette, typography, narrowScreen, words, language, reading, markup, css, gnu } = deps
  const { theme, statusStyle, narrow, scripts, document, rule, declaration } = deps
  const { endOfLine } = deps.file

  const [origin, files, stylesheet] = typography.loading
  const fonts = deps.fonts(origin, files, stylesheet)
  // The colours of each status, by its key in the `Status` vocabulary: the pill, and the box of a node in a figure.
  const statuses = (Object.keys(Status) as KeyOf<typeof Status>[]).flatMap((key) => statusStyle(key, palette.statuses[key].fill, palette.statuses[key].stroke))
  const measures = [deps.spacing, deps.radii, deps.typeScale, deps.opacities, deps.strokes, deps.motion, deps.pageLayout]
  const themed = [...theme(palette.light, palette.dark, typography.fonts, measures), ...statuses].join(endOfLine)
  const standalone = Object.entries(deps.standalone).map(([selector, declarations]) =>
    rule(selector, Object.entries(declarations).map(([property, value]) => declaration(property, value))))

  /** The languages the page is read back in, loaded when a page is first asked: the reader may be the running engine's. */
  let loaded: Promise<void> | undefined
  const load = () => (loaded ??= reading.load(markup).then(() => reading.load(css)))
  /** A text of the page, read back in its language: refused if it does not follow the grammar. */
  const readBack = (written: string, read: LanguageDescription, refused: (language: string, places: string[]) => string) => {
    const r = reading.readText(read, written)
    if (r.errors.length) throw new Error(refused(read.name, r.errors.map((e) => e.line + gnu.separator + e.column)))
    return r
  }

  async function pageHtml(o: PageOptions): Promise<string> {
    await load()
    // The variables, the style sheet of the page, then the rules of a narrow screen. A standalone document gives its
    // own skeleton the style of a document; a host gives it in a fragment.
    const sheet = [themed, deps.sheets.style(), narrow(narrowScreen, deps.sheets.narrow())].join(endOfLine)
    const style = o.fragment ? sheet : [...standalone, sheet].join(endOfLine)
    // Each variable the style uses is one it writes: a variable that nothing writes gives nothing, silently.
    const { parameters, outputs } = readBack(style, css, words.styleNotTheLanguage)
    const written = new Set(outputs)
    const missing = [...new Set(parameters.filter((v) => !written.has(v)))]
    if (missing.length) throw new Error(words.variablesNotWritten(missing))
    const shell = deps.shell({
      program: o.program,
      subtitle: words.brandSubtitle(),
      dates: words.datesLabel(),
      navigation: words.navigationLabel(),
      document: words.documentLabel(),
      rendering: words.renderingLabel(),
      renderings: [words.renderedButton(), words.markdownButton(), words.textButton()],
    })
    const made = document({
      lang: language.tag,
      title: words.pageTitle(o.project),
      fonts,
      style,
      shell,
      scripts: scripts(o.script, o.packed, o.dev),
      fragment: o.fragment,
    })
    readBack(made, markup, words.pageNotTheLanguage)
    return made
  }

  return { pageHtml }
}

export type Api = ReturnType<typeof body>
export default body
