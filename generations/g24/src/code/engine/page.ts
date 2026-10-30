// Puts the page together: the HTML rendering (main.ts, bundled by esbuild), its stylesheet, and the compiled graph.

import { Status } from "../../../trame/kernel"
import type { ProvidedBy, Bundle, KeyOf } from "../../../trame/kernel"
import type { Bundler, FileReading, Palette, Resources, Typography } from "../../architecture"
import type { OutputMessages } from "../../messages"
import type { Texts } from "../../algebra"
import type { NodeEncodings } from "../../standards"

export interface PageOptions {
  bundle?: Bundle
  dev?: boolean
  /** Without <html>, <head>, <body>: for a hosted page that provides its own skeleton (an artifact). */
  fragment?: boolean
  title?: string
}

export interface Deps {
  pageBundle: { format: "iife"; target: string; legalComments: "none"; charset: "utf8" }
  encodings: ProvidedBy<typeof NodeEncodings>
  palette: Palette
  typography: Typography
  resources: Resources
  reading: FileReading
  bundler: Bundler
  messages: ProvidedBy<typeof OutputMessages>
  language: { tag: string }
  texts: ProvidedBy<typeof Texts>
}

const body = (deps: Deps) => {
  const { pageBundle } = deps
  const { encodings } = deps
  const { when } = deps.texts
  const { readFileSync } = deps.reading
  const { build } = deps.bundler
  const { resources, palette, typography, messages, language } = deps

  // The fonts: preconnection to the origins, then the stylesheet that declares them.
  const [origin, files, stylesheet] = typography.loading
  const FONTS = `<link rel="preconnect" href="${origin}"><link rel="preconnect" href="${files}" crossorigin><link rel="stylesheet" href="${stylesheet}">`
  // The theme: the CSS variables of the palette and of the fonts, light, then dark (system preference or explicit choice).
  const vars = (m: Record<string, string>) => Object.entries(m).map(([k, v]) => `--${k}: ${v};`).join(" ")
  // The colours of each status, by its key in the `Status` vocabulary: the pill (`st-held`), and the box of a node in a figure.
  const statuses = (Object.keys(Status) as KeyOf<typeof Status>[]).map((key) => {
    const { fill, stroke } = palette.statuses[key]
    return `.st-${key} { background: var(--${fill}); color: var(--${stroke}); }\n.fn.st-${key} rect.box { fill: var(--${fill}); stroke: var(--${stroke}); }`
  })
  const THEME = [
    `:root { ${vars(palette.light)} ${vars(typography.fonts)} }`,
    `@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { ${vars(palette.dark)} color-scheme: dark; } }`,
    `:root[data-theme="dark"] { ${vars(palette.dark)} color-scheme: dark; }`,
    ...statuses,
  ].join("\n")

  const SHELL = `<div class="app">
  <aside class="side">
    <div class="brand">
      <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
        <rect x="0" y="0" width="26" height="26" rx="6" fill="var(--accent-soft)"/>
        <g stroke="var(--accent)" stroke-width="2.2" stroke-linecap="round" fill="none"><path d="M7 5v16M13 5v16M19 5v16"/></g>
        <g stroke="var(--${palette.ink})" stroke-width="2.2" stroke-linecap="round" fill="none"><path d="M5 9h3M10 9h6M18 9h3M5 17h3M10 17h6M18 17h3"/></g>
      </svg>
      <div class="brand-name">trame <span>${messages.brandSubtitle()}</span></div>
    </div>
    <div class="status" id="status"></div>
    <div>
      <p class="label" id="dates-label">${messages.datesLabel()}</p>
      <div class="dates" id="dates" role="group" aria-labelledby="dates-label"></div>
      <div class="date-note" id="date-note"></div>
    </div>
    <nav class="nav" id="nav" aria-label="${messages.navigationLabel()}"></nav>
    <div class="mobile-pick">
      <label class="label" for="doc-select">${messages.documentLabel()}</label>
      <select id="doc-select"></select>
    </div>
  </aside>
  <main>
    <div class="banner" id="banner" hidden></div>
    <header class="doc-head">
      <div class="path" id="doc-path"></div>
      <div class="toggle" id="toggle" role="group" aria-label="${messages.renderingLabel()}">
        <button type="button" id="view-rendered" aria-pressed="true">${messages.renderedButton()}</button>
        <button type="button" id="view-markdown" aria-pressed="false">${messages.markdownButton()}</button>
        <button type="button" id="view-text" aria-pressed="false">${messages.textButton()}</button>
      </div>
    </header>
    <article class="doc" id="doc"></article>
  </main>
</div>`

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
    const css = THEME + "\n" + readFileSync(resources.style, encodings.utf8)
    const js = await bundleScript()
    const title = o.title ?? messages.pageTitle()
    const data = when(o.bundle, (b) => `<script>window.TRAME_BUNDLE=${JSON.stringify(b).replace(/</g, "\\u003c")}</script>`)
    const dev = when(o.dev, () => "<script>window.TRAME_DEV=true</script>")
    const scripts = `${dev}${data}<script>${js.replace(/<\/script/gi, "<\\/script")}</script>`
    if (o.fragment) {
      return `<title>${title}</title>\n<meta name="claude:viewport-fit-sides" content="cover">\n${FONTS}\n<style>${css}</style>\n${SHELL}\n${scripts}\n`
    }
    return `<!doctype html>
<html lang="${language.tag}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="claude:viewport-fit-sides" content="cover">
<title>${title}</title>
${FONTS}
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}[hidden]{display:none!important}img{max-width:100%}${css}</style>
</head>
<body>
${SHELL}
${scripts}
</body>
</html>
`
  }

  return { pageHtml }
}

export type Api = ReturnType<typeof body>
export default body
