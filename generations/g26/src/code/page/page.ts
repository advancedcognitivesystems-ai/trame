// Puts the page together: its shell, its theme and the style of a standalone document (the syntax elements of the page),
// its style sheet and its script (main.ts, bundled by esbuild), the compiled graph.

import { Status } from "../../../trame/kernel"
import type { ProvidedBy, Bundle, KeyOf } from "../../../trame/kernel"
import type { Bundler, FileReading, Palette, Resources, Typography } from "../../architecture"
import type { OutputMessages } from "../../messages"
import type { NodeEncodings, TextFile } from "../../standards"
import type { CssDeclaration, CssRule } from "../../html"
import type * as page from "../../page"

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
  resources: Resources
  reading: FileReading
  bundler: Bundler
  shell: ProvidedBy<typeof page.Shell>
  theme: ProvidedBy<typeof page.Theme>
  statusStyle: ProvidedBy<typeof page.StatusStyle>
  fonts: ProvidedBy<typeof page.FontLinks>
  scripts: ProvidedBy<typeof page.PageScripts>
  document: ProvidedBy<typeof page.PageDocument>
  rule: ProvidedBy<typeof CssRule>
  declaration: ProvidedBy<typeof CssDeclaration>
  messages: ProvidedBy<typeof OutputMessages>
  language: { tag: string }
}

const body = (deps: Deps) => {
  const { pageBundle, encodings, palette, typography, resources, messages, language } = deps
  const { theme, statusStyle, scripts, document, rule, declaration } = deps
  const { endOfLine } = deps.file
  const { readFileSync } = deps.reading
  const { build } = deps.bundler

  const [origin, files, stylesheet] = typography.loading
  const fonts = deps.fonts(origin, files, stylesheet)
  // The colours of each status, by its key in the `Status` vocabulary: the pill, and the box of a node in a figure.
  const statuses = (Object.keys(Status) as KeyOf<typeof Status>[]).flatMap((key) => statusStyle(key, palette.statuses[key].fill, palette.statuses[key].stroke))
  const themed = [...theme(palette.light, palette.dark, typography.fonts), ...statuses].join(endOfLine)
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
    const css = [themed, readFileSync(resources.style, encodings.utf8)].join(endOfLine)
    const parts = {
      lang: language.tag,
      title: o.title ?? messages.pageTitle(),
      fonts,
      shell,
      scripts: scripts(await bundleScript(), o.bundle, o.dev),
    }
    if (o.fragment) return document({ ...parts, style: css, fragment: true })
    return document({ ...parts, style: [...standalone, css].join(endOfLine) })
  }

  return { pageHtml }
}

export type Api = ReturnType<typeof body>
export default body
