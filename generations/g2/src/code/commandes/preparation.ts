// Ce que toutes les commandes partagent : lire les options, vérifier et compiler le projet, refuser proprement.
// Portage de l'amorce (trame/cli.ts) : mêmes options, mêmes messages, même ordre des vérifications.

import type { Compilation, Document, Severity, View } from "../../../trame/kernel"
import type { Horloge, Processus, Terminal } from "../../architecture"
import type { Api as CompilateurApi, Compiled, Loaded } from "../moteur/compilateur"
import type { Api as ApiCompilationApi } from "../moteur/api-compilation"
import type { Api as LoisApi, KindReport } from "../moteur/lois"
import type { Api as VuesApi, ViewFailure } from "../moteur/vues"
import type { Api as VerrouApi } from "../moteur/verrou"
import type { Api as CommunApi } from "../rendu/commun"

export interface Deps {
  compilateur: CompilateurApi
  apiCompilation: ApiCompilationApi
  lois: LoisApi
  vues: VuesApi
  verrou: VerrouApi
  commun: CommunApi
  terminal: Terminal
  processus: Processus
  horloge: Horloge
  /** Le tri des problèmes : la règle de l'exigence « Trier les problèmes par gravité ». */
  ordre: (gravite: Severity) => number
  portDev: number
}

export interface Options {
  root: string
  command: string
  /** --at AAAA-MM-JJ : le graphe tel qu'il est (ou sera) en vigueur à cette date. */
  today: string
  format?: string
  port: number
  fragment: boolean
  envName?: string
  figer: boolean
  all: boolean
  /** Ce qui reste une fois les options lues. */
  args: string[]
}

export type Ctx = { c: Compiled; comp: Compilation }

const corps = (deps: Deps) => {
  const { load, compileAt, loadKinds } = deps.compilateur
  const { makeCompilation } = deps.apiCompilation
  const { checkKinds, checkImports } = deps.lois
  const { loadViews, runViews, checkViewDecls } = deps.vues
  const { checkLock, readLock } = deps.verrou
  const { locate } = deps.commun
  const { terminal } = deps

  function options(command: string, raw: string[]): Options {
    const argv = [...raw]
    const take = (flag: string) => {
      const i = argv.indexOf(flag)
      return i >= 0 ? argv.splice(i, 2)[1] : undefined
    }
    const has = (flag: string) => {
      const i = argv.indexOf(flag)
      return i >= 0 ? (argv.splice(i, 1), true) : false
    }
    const today = take("--at") ?? deps.horloge.aujourdhui()
    const format = take("--format")
    const port = Number(take("--port") ?? deps.portDev)
    const fragment = has("--fragment")
    const envName = take("--env")
    const figer = has("--figer")
    const all = has("--all")
    return { root: deps.processus.repertoire(), command, today, format, port, fragment, envName, figer, all, args: argv }
  }

  const pad = (s: string, n: number) => s + " ".repeat(Math.max(1, n - s.length))

  function printLaws(reports: KindReport[], verbose: boolean) {
    const failed = reports.filter((r) => r.failures.length)
    if (verbose) {
      terminal.ecrire(`lois des types · ${reports.length} types · ${reports[0]?.samples ?? 0} nœuds tirés au hasard par type`)
      for (const r of reports) {
        if (!r.failures.length) {
          terminal.ecrire("  " + pad(r.kind.name, 14) + "ok")
          continue
        }
        r.failures.forEach((f, i) => {
          terminal.ecrire("  " + pad(i === 0 ? r.kind.name : "", 14) + `✗ « ${f.law} »`)
          terminal.ecrire("  " + pad("", 16) + `${f.example} (${f.count} fois)`)
        })
      }
    }
    return failed
  }

  /** Refuse (sortie 1) : sur la sortie d'erreur pour `payload`, sinon sur la sortie normale. */
  function refuse(o: Options, lines: string[]): never {
    for (const l of lines) (o.command === "payload" ? terminal.erreur : terminal.ecrire)(l)
    return terminal.quitter(1)
  }

  let loaded: Loaded | undefined

  /** Imports, lois des types et des vues, TypeScript, compilation, trame.lock. */
  async function prepare(o: Options): Promise<Ctx> {
    await loadKinds(o.root)
    await loadViews(o.root)
    const imports = checkImports(o.root)
    const kindsRefused = printLaws(checkKinds(o.today), false)
    const viewsRefused = checkViewDecls()
    if (imports.length || kindsRefused.length || viewsRefused.length) {
      refuse(o, [
        ...imports.map((i) => `refusé : ${i}`),
        ...kindsRefused.map((r) => `type « ${r.kind.name} » refusé : ${r.failures.map((f) => `« ${f.law} »`).join(", ")} non respectée`),
        ...viewsRefused.map((f) => `vue « ${f.view} » refusée : « ${f.law} » (${f.example})`),
        ...(kindsRefused.length ? ["détails : npm run test-kinds"] : []),
      ])
    }
    loaded = await load(o.root)
    if (loaded.typeErrors.length) refuse(o, ["TypeScript refuse le graphe :", ...loaded.typeErrors.map((e) => `  ${e}`)])
    return await at(o, o.today)
  }

  /** Compile le graphe déjà chargé à une date, avec trame.lock. */
  async function at(o: Options, date: string): Promise<Ctx> {
    const c = await compileAt(loaded!, date)
    const lockIssues = checkLock(c, o.root)
    c.diags.push(...lockIssues)
    c.diags.sort((a, b) => deps.ordre(a.severity) - deps.ordre(b.severity))
    const published = new Set(Object.keys(readLock(o.root).published))
    c.published = published
    c.lockIssues = lockIssues
    return { c, comp: makeCompilation(c, { published, lockIssues, views: deps.vues.sortedViews() }) }
  }

  function views(o: Options, comp: Compilation): Document[] {
    const { documents, failures } = runViews(comp)
    if (failures.length) refuse(o, failures.map((f: ViewFailure) => `vue « ${f.view} » refusée : « ${f.law} » (${f.example})`))
    return documents
  }

  const markdownContext = (docs: Document[]) => ({ locate: locate(docs), files: new Map(docs.map((d) => [d.id, d.file])) })

  return { options, pad, printLaws, refuse, prepare, at, views, markdownContext }
}

export type Api = ReturnType<typeof corps>
export type { View }
export default corps
