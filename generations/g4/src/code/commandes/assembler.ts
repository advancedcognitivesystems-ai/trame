// Le programme d'un composant pour un environnement (et son infrastructure), prêt à écrire. Refuse un graphe qui a des erreurs.
// Ce nœud n'écrit rien : c'est la commande qui écrit (règle « Seules les commandes écrivent »).

import type { Api as PreparationApi, Options } from "./preparation"
import type { Api as AssemblageApi, Emitted } from "../moteur/assemblage"

export interface Deps {
  preparation: PreparationApi
  assemblage: AssemblageApi
}

const corps = (deps: Deps) => {
  const { prepare, refuse } = deps.preparation
  const { prepareAssembly, emitAssembly } = deps.assemblage

  async function assembler(o: Options): Promise<{ files: Emitted[]; steps: number }> {
    const { c, comp } = await prepare(o)
    const name = o.args[0]
    if (!name || !o.envName) refuse(o, [`Usage : trame ${o.command} <composant> --env <environnement>`])
    const errors = c.diags.filter((d) => d.severity === "erreur")
    if (errors.length) refuse(o, [`Assemblage refusé : le graphe a ${errors.length} erreur${errors.length > 1 ? "s" : ""}.`, ...errors.map((d) => `  ${d.node ? c.graph.view(d.node).ref : d.module ?? ""} · ${d.what}`)])
    const changes = comp.dates().filter((d) => d.date > c.today && (d.role === "début" || d.role === "fin"))
      .map((d) => `${d.date} (${d.node.title})`)
    const a = prepareAssembly(c, o.root, name!, o.envName!, { figer: o.figer, changes: [...new Set(changes)].sort() })
    if ("errors" in a) return refuse(o, [`Assemblage refusé :`, ...a.errors.map((e) => `  ${e}`)])
    const { files, errors: emitErrors } = emitAssembly(a)
    if (emitErrors.length) refuse(o, emitErrors)
    return { files, steps: a.plan.steps.length }
  }

  return { assembler }
}

export type Api = ReturnType<typeof corps>
export default corps
