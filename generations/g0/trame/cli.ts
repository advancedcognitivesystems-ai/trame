// trame build | view <vue> [nœud|module] | <vue> [nœud] | why | history | snapshot | publish | test-kinds | payload | export | dev
//       assemble <composant> --env <environnement> | run <composant> --env <environnement>

import { writeFileSync, mkdirSync } from "node:fs"
import { join, resolve } from "node:path"
import { load, compileAt, loadKinds, type Compiled, type Diag, type Loaded } from "./compile"
import { makeCompilation } from "./compilation"
import { checkKinds, checkImports, type KindReport } from "./laws"
import { loadViews, runViews, checkViewDecls, sortedViews, type ViewFailure } from "./views"
import { checkLock, publish as publishLock, readLock } from "./lock"
import { graphJson, snapshotJson } from "./machine"
import { makePayload } from "./payload"
import type { Payload } from "./ir"
import { toMarkdown } from "./render/markdown"
import { toText } from "./render/text"
import { locate } from "./render/common"
import type { Compilation, Document, View } from "./kernel"

// Une promesse oubliée dans du code exécuté (un scénario, un corps) ne fait pas tomber le compilateur.
process.on("unhandledRejection", (e) => console.error(`avertissement : promesse rejetée sans être attendue (${(e as Error)?.message ?? e})`))

// Sortie coupée par un « | head » : on s'arrête sans bruit.
process.stdout.on("error", (e: NodeJS.ErrnoException) => {
  if (e.code === "EPIPE") process.exit(0)
  throw e
})

const root = process.cwd()
const argv = process.argv.slice(2)
const take = (flag: string) => {
  const i = argv.indexOf(flag)
  return i >= 0 ? argv.splice(i, 2)[1] : undefined
}
const has = (flag: string) => {
  const i = argv.indexOf(flag)
  return i >= 0 ? (argv.splice(i, 1), true) : false
}
// --at AAAA-MM-JJ : le graphe tel qu'il est (ou sera) en vigueur à cette date.
const today = take("--at") ?? process.env.TRAME_TODAY ?? new Date().toISOString().slice(0, 10)
const format = take("--format")
const port = Number(take("--port") ?? 4170)
const fragment = has("--fragment")
const envName = take("--env")
const figer = has("--figer")
const all = has("--all")
const [command = "build", ...args] = argv
const pad = (s: string, n: number) => s + " ".repeat(Math.max(1, n - s.length))
const severityOrder = { bloquant: 0, erreur: 1, avertissement: 2 }

function printLaws(reports: KindReport[], verbose: boolean) {
  const failed = reports.filter((r) => r.failures.length)
  if (verbose) {
    console.log(`lois des types · ${reports.length} types · ${reports[0]?.samples ?? 0} nœuds tirés au hasard par type`)
    for (const r of reports) {
      if (!r.failures.length) {
        console.log("  " + pad(r.kind.name, 14) + "ok")
        continue
      }
      r.failures.forEach((f, i) => {
        console.log("  " + pad(i === 0 ? r.kind.name : "", 14) + `✗ « ${f.law} »`)
        console.log("  " + pad("", 16) + `${f.example} (${f.count} fois)`)
      })
    }
  }
  return failed
}

/** Refuse (sortie 1) : sur la sortie d'erreur pour `payload`, sinon sur la sortie normale. */
function refuse(lines: string[]): never {
  const out = command === "payload" ? console.error : console.log
  for (const l of lines) out(l)
  process.exit(1)
}

/** Imports, lois des types et des vues, TypeScript, compilation, trame.lock. */
async function prepare(): Promise<{ c: Compiled; comp: Compilation }> {
  await loadKinds(root)
  await loadViews(root)
  const imports = checkImports(root)
  const kindsRefused = printLaws(checkKinds(today), false)
  const viewsRefused = checkViewDecls()
  if (imports.length || kindsRefused.length || viewsRefused.length) {
    refuse([
      ...imports.map((i) => `refusé : ${i}`),
      ...kindsRefused.map((r) => `type « ${r.kind.name} » refusé : ${r.failures.map((f) => `« ${f.law} »`).join(", ")} non respectée`),
      ...viewsRefused.map((f) => `vue « ${f.view} » refusée : « ${f.law} » (${f.example})`),
      ...(kindsRefused.length ? ["détails : npm run test-kinds"] : []),
    ])
  }
  loaded = await load(root)
  if (loaded.typeErrors.length) refuse(["TypeScript refuse le graphe :", ...loaded.typeErrors.map((e) => `  ${e}`)])
  return await at(today)
}

let loaded: Loaded | undefined

/** Compile le graphe déjà chargé à une date, avec trame.lock. */
async function at(date: string): Promise<{ c: Compiled; comp: Compilation }> {
  const c = await compileAt(loaded!, date)
  const lockIssues = checkLock(c, root)
  c.diags.push(...lockIssues)
  c.diags.sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity])
  const published = new Set(Object.keys(readLock(root).published))
  c.published = published
  c.lockIssues = lockIssues
  return { c, comp: makeCompilation(c, { published, lockIssues }) }
}

function views(comp: Compilation): Document[] {
  const { documents, failures } = runViews(comp)
  if (failures.length) refuse(failures.map((f: ViewFailure) => `vue « ${f.view} » refusée : « ${f.law} » (${f.example})`))
  return documents
}

const markdownContext = (docs: Document[]) => ({ locate: locate(docs), files: new Map(docs.map((d) => [d.id, d.file])) })

async function build() {
  const { c, comp } = await prepare()
  const docs = views(comp)
  const ctx = markdownContext(docs)
  mkdirSync(join(root, "docs"), { recursive: true })
  const written: string[] = []
  for (const d of docs.filter((x) => x.file)) {
    writeFileSync(join(root, d.file!), toMarkdown(d, ctx))
    written.push(d.file!)
  }
  writeFileSync(join(root, "graph.json"), graphJson(c))
  writeFileSync(join(root, "snapshot.json"), snapshotJson(c))
  written.push("graph.json", "snapshot.json")
  for (const d of docs.filter((x) => x.group === "bilan")) console.log(toText(d))
  console.log(`écrit : ${written.join(", ")}`)
}

/** Une vue, rendue pour le terminal (en Markdown avec --format md, en JSON avec --format json). */
async function view(name: string | undefined, arg: string | undefined) {
  const { comp } = await prepare()
  const def = sortedViews().find((v) => v.name === name)
  if (!def) return refuse([`Vue inconnue : ${name ?? "(aucune)"}. Vues : ${sortedViews().map((v) => v.name).join(", ")}`])
  let runArg: { module?: string; node?: View } = {}
  if (def.per === "nœud") {
    const node = arg ? comp.node(arg).first() : undefined
    if (!node) return refuse([`Nœud inconnu : ${arg ?? "(aucun)"}`])
    if (def.applies && !def.applies(node, comp)) refuse([`La vue « ${def.label} » ne s'applique pas à ${node.id}.`])
    runArg = { node }
  } else if (def.per === "module") {
    if (!arg || !comp.modules().some((m) => m.id === arg)) refuse([`Module inconnu : ${arg ?? "(aucun)"}. Modules : ${comp.modules().map((m) => m.id).join(", ")}`])
    runArg = { module: arg }
  }
  const out = def.run(comp, runArg)
  const d: Document = { id: def.name, view: def.name, group: def.group, title: out.title, intro: out.intro, blocks: out.blocks, arg }
  if (format === "json") console.log(JSON.stringify(d, null, 2))
  else if (format === "md") console.log(toMarkdown(d, markdownContext(views(comp))))
  else process.stdout.write(toText(d))
}

async function testKinds() {
  await loadKinds(root)
  await loadViews(root)
  const imports = checkImports(root)
  console.log(`imports · ${imports.length ? `${imports.length} refusé${imports.length > 1 ? "s" : ""}` : "seule l'API publique est utilisée"}`)
  for (const i of imports) console.log(`  ✗ ${i}`)
  const failed = printLaws(checkKinds(today), true)
  if (failed.length || imports.length) process.exit(1)
  const decls = checkViewDecls()
  const { comp } = await prepare()
  const { failures } = runViews(comp)
  const viewFailures = [...decls, ...failures]
  console.log(`lois des vues · ${sortedViews().length} vues, exécutées deux fois sur le graphe du ${today}`)
  for (const v of sortedViews()) {
    const mine = viewFailures.filter((f) => f.view === v.name)
    console.log("  " + pad(v.name, 14) + (mine.length ? mine.map((f) => `✗ « ${f.law} » : ${f.example}`).join(" ; ") : "ok"))
  }
  process.exit(viewFailures.length ? 1 : 0)
}

/** L'instantané seul : snapshot.json, et les documents de l'instantané si une vue en produit. */
async function snapshot() {
  const { c, comp } = await prepare()
  const docs = views(comp)
  writeFileSync(join(root, "snapshot.json"), snapshotJson(c))
  const written = ["snapshot.json"]
  for (const d of docs.filter((x) => x.view === "instantane" && x.file)) {
    writeFileSync(join(root, d.file!), toMarkdown(d, markdownContext(docs)))
    written.push(d.file!)
  }
  console.log(`instantané du ${today} · écrit : ${written.join(", ")}`)
}

/** Publie : les déclarations actuelles entrent dans trame.lock et ne changent plus. */
async function publish() {
  const { c } = await prepare()
  const { added, refused } = publishLock(c, root)
  if (refused.length) {
    refuse([...(refused as Diag[]).map((d) => pad(d.severity, 15) + `${d.where ?? ""} ${d.what}`), "", "publication refusée : une déclaration publiée a changé"])
  }
  console.log(added.length ? `publié : ${added.length} déclarations figées dans trame.lock` : "rien de nouveau à publier")
  for (const ref of added) console.log(`  ${ref}`)
}

/**
 * Le graphe compilé en format intermédiaire (pour trame dev et l'export) : à la date du jour,
 * et avec --all à chaque date où il peut changer. Le code n'est lu et exécuté qu'une fois.
 */
async function payload() {
  const { c, comp } = await prepare()
  const first = makePayload(c, comp, views(comp))
  if (!all) return void process.stdout.write(JSON.stringify(first))
  const dates: { date: string; payload?: Payload; error?: string }[] = [{ date: today, payload: first }]
  for (const date of first.candidates.filter((d) => d !== today)) {
    try {
      const x = await at(date)
      dates.push({ date, payload: makePayload(x.c, x.comp, views(x.comp)) })
    } catch (e) {
      dates.push({ date, error: (e as Error).message })
    }
  }
  process.stdout.write(JSON.stringify(dates.sort((a, b) => a.date.localeCompare(b.date))))
}

/** Une page autonome : le graphe compilé à chaque date candidate, sans dépendance. */
async function exportPage() {
  const { makeBundle } = await import("./bundle")
  const { pageHtml } = await import("./page/build")
  const file = args[0] ?? "trame-page.html"
  const bundle = await makeBundle(root, today, "export")
  if (bundle.error) refuse([bundle.error])
  writeFileSync(resolve(root, file), await pageHtml(root, { bundle, fragment }))
  console.log(`export · ${bundle.dates.length} dates · écrit : ${file}`)
}

/** Écrit le programme d'un composant pour un environnement (et son infrastructure). Refuse un graphe qui a des erreurs. */
async function assembleCmd(): Promise<string | undefined> {
  const { prepareAssembly, writeAssembly } = await import("./assemble")
  const { c, comp } = await prepare()
  const name = args[0]
  if (!name || !envName) refuse([`Usage : trame ${command} <composant> --env <environnement>`])
  const errors = c.diags.filter((d) => d.severity === "erreur")
  if (errors.length) refuse([`Assemblage refusé : le graphe a ${errors.length} erreur${errors.length > 1 ? "s" : ""}.`, ...errors.map((d) => `  ${d.node ? c.graph.view(d.node).ref : d.module ?? ""} · ${d.what}`)])
  const changes = comp.dates().filter((d) => d.date > c.today && (d.role === "début" || d.role === "fin"))
    .map((d) => `${d.date} (${d.node.title})`)
  const a = prepareAssembly(c, root, name!, envName!, { figer, changes: [...new Set(changes)].sort() })
  if ("errors" in a) return refuse([`Assemblage refusé :`, ...a.errors.map((e) => `  ${e}`)])
  const { written, errors: emitErrors } = writeAssembly(a)
  if (emitErrors.length) refuse(emitErrors)
  console.log(`assemblé · ${a.plan.steps.length} nœuds construits · écrit : ${written.map((f) => f.replace(root + "/", "")).join(", ")}`)
  return written[0]
}

/** Assemble, puis lance le programme dans un processus à lui. */
async function run() {
  const program = await assembleCmd()
  const { spawn } = await import("node:child_process")
  const child = spawn(process.execPath, ["--import", "tsx", program!], { stdio: "inherit", env: { ...process.env, NODE_NO_WARNINGS: "1" } })
  for (const sig of ["SIGINT", "SIGTERM"] as const) process.on(sig, () => child.kill(sig))
  child.on("exit", (code) => process.exit(code ?? 0))
}

async function dev() {
  const { startDev } = await import("./dev")
  await startDev(root, today, port)
}

const aliases: Record<string, string> = { why: "pourquoi", history: "historique" }
const commands: Record<string, () => Promise<void>> = {
  build, "test-kinds": testKinds, snapshot, publish, payload, export: exportPage, dev, run,
  assemble: async () => void (await assembleCmd()),
  view: () => view(args[0], args[1]),
}
if (commands[command]) await commands[command]()
else {
  // Sinon, le nom d'une vue (ou un alias) : `trame impact DelaiGratuit`.
  await loadKinds(root)
  await loadViews(root)
  const name = aliases[command] ?? command
  if (sortedViews().some((v) => v.name === name)) await view(name, args[0])
  else {
    console.error(`Commande inconnue : ${command}. Commandes : ${Object.keys(commands).join(", ")}, ou une vue : ${sortedViews().map((v) => v.name).join(", ")}`)
    process.exit(1)
  }
}
