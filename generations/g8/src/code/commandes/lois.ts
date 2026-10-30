// trame test-kinds : les lois des types et des vues, et les imports.

import type { Traitement } from "../../../kinds/point-entree"
import type { Terminal } from "../../architecture"
import type { Api as PreparationApi } from "./preparation"
import type { Api as CompilateurApi } from "../moteur/compilateur"
import type { Api as VuesApi } from "../moteur/vues"
import type { Api as LoisApi } from "../moteur/lois"

export interface Deps {
  /** Le statut que la commande rend au système (POSIX). */
  sortie: { succes: number; echec: number }
  preparation: PreparationApi
  compilateur: CompilateurApi
  vues: VuesApi
  lois: LoisApi
  terminal: Terminal
}

const corps = (deps: Deps): Traitement => {
  const { options, prepare, printLaws, pad } = deps.preparation
  const { loadKinds } = deps.compilateur
  const { loadViews, checkViewDecls, runViews, sortedViews } = deps.vues
  const { checkImports, checkKinds } = deps.lois
  const { terminal } = deps
  return async (req) => {
    const o = options(req.params.commande, (req.corps as { args: string[] }).args)
    await loadKinds(o.root)
    await loadViews(o.root)
    const imports = checkImports(o.root)
    terminal.ecrire(`imports · ${imports.length ? `${imports.length} refusé${imports.length > 1 ? "s" : ""}` : "seule l'API publique est utilisée"}`)
    for (const i of imports) terminal.ecrire(`  ✗ ${i}`)
    const failed = printLaws(checkKinds(o.today), true)
    if (failed.length || imports.length) return { statut: deps.sortie.echec, corps: undefined }
    const decls = checkViewDecls()
    const { comp } = await prepare(o)
    const { failures } = runViews(comp)
    const viewFailures = [...decls, ...failures]
    terminal.ecrire(`lois des vues · ${sortedViews().length} vues, exécutées deux fois sur le graphe du ${o.today}`)
    for (const v of sortedViews()) {
      const mine = viewFailures.filter((f) => f.view === v.name)
      terminal.ecrire("  " + pad(v.name, 14) + (mine.length ? mine.map((f) => `✗ « ${f.law} » : ${f.example}`).join(" ; ") : "ok"))
    }
    return { statut: viewFailures.length ? deps.sortie.echec : deps.sortie.succes, corps: undefined }
  }
}

export default corps
