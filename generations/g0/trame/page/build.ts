// Assemble la page : le rendu HTML (main.ts, empaqueté par esbuild), sa feuille de style, et le graphe compilé.

import { readFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import { build } from "esbuild"
import type { Bundle } from "../ir"

const here = dirname(fileURLToPath(import.meta.url))

const FONTS = `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Literata:opsz,wght@7..72,400;7..72,500;7..72,600&display=swap">`

const SHELL = `<div class="app">
  <aside class="side">
    <div class="brand">
      <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
        <rect x="0" y="0" width="26" height="26" rx="6" fill="var(--accent-soft)"/>
        <g stroke="var(--accent)" stroke-width="2.2" stroke-linecap="round" fill="none"><path d="M7 5v16M13 5v16M19 5v16"/></g>
        <g stroke="var(--ink)" stroke-width="2.2" stroke-linecap="round" fill="none"><path d="M5 9h3M10 9h6M18 9h3M5 17h3M10 17h6M18 17h3"/></g>
      </svg>
      <div class="brand-name">trame <span>graphe</span></div>
    </div>
    <div class="status" id="status"></div>
    <div>
      <p class="label" id="dates-label">Graphe en vigueur le</p>
      <div class="dates" id="dates" role="group" aria-labelledby="dates-label"></div>
      <div class="date-note" id="date-note"></div>
    </div>
    <nav class="nav" id="nav" aria-label="Documents et vues"></nav>
    <div class="mobile-pick">
      <label class="label" for="doc-select">Document</label>
      <select id="doc-select"></select>
    </div>
  </aside>
  <main>
    <div class="banner" id="banner" hidden></div>
    <header class="doc-head">
      <div class="path" id="doc-path"></div>
      <div class="toggle" id="toggle" role="group" aria-label="Rendu">
        <button type="button" id="view-rendu" aria-pressed="true">Rendu</button>
        <button type="button" id="view-markdown" aria-pressed="false">Markdown</button>
        <button type="button" id="view-texte" aria-pressed="false">Texte</button>
      </div>
    </header>
    <article class="doc" id="doc"></article>
  </main>
</div>`

let script: string | undefined

async function bundleScript(): Promise<string> {
  if (script) return script
  const out = await build({
    entryPoints: [join(here, "main.ts")], bundle: true, write: false, format: "iife", target: "es2020",
    minify: true, legalComments: "none", charset: "utf8",
  })
  script = out.outputFiles[0].text
  return script
}

export interface PageOptions {
  bundle?: Bundle
  dev?: boolean
  /** Sans <html>, <head>, <body> : pour une page hébergée qui fournit son propre squelette (un artifact). */
  fragment?: boolean
  title?: string
}

export async function pageHtml(_root: string, o: PageOptions): Promise<string> {
  const css = readFileSync(join(here, "page.css"), "utf8")
  const js = await bundleScript()
  const title = o.title ?? "Graphe Trame"
  const data = o.bundle ? `<script>window.TRAME_BUNDLE=${JSON.stringify(o.bundle).replace(/</g, "\\u003c")}</script>` : ""
  const dev = o.dev ? "<script>window.TRAME_DEV=true</script>" : ""
  const scripts = `${dev}${data}<script>${js.replace(/<\/script/gi, "<\\/script")}</script>`
  if (o.fragment) {
    return `<title>${title}</title>\n<meta name="claude:viewport-fit-sides" content="cover">\n${FONTS}\n<style>${css}</style>\n${SHELL}\n${scripts}\n`
  }
  return `<!doctype html>
<html lang="fr">
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
