// trame assemble <composant> --env <environnement> [--figer] : écrit le programme et son infrastructure.

import type { Traitement } from "../../../kinds/point-entree"
import type { Chemins, EcritureFichiers, Terminal } from "../../architecture"
import type { Api as PreparationApi } from "./preparation"
import type { Api as AssemblerApi } from "./assembler"

export interface Deps {
  /** Le statut que la commande rend au système (POSIX). */
  sortie: { succes: number; echec: number }
  preparation: PreparationApi
  assembler: AssemblerApi
  ecriture: EcritureFichiers
  chemins: Chemins
  terminal: Terminal
}

const corps = (deps: Deps): Traitement => async (req) => {
  const o = deps.preparation.options(req.params.commande, (req.corps as { args: string[] }).args)
  const { files, steps } = await deps.assembler.assembler(o)
  for (const f of files) {
    deps.ecriture.mkdirSync(deps.chemins.dirname(f.path), { recursive: true })
    deps.ecriture.writeFileSync(f.path, f.content)
  }
  const written = files.map((f) => f.path)
  deps.terminal.ecrire(`assemblé · ${steps} nœuds construits · écrit : ${written.map((f) => f.replace(o.root + "/", "")).join(", ")}`)
  return { statut: deps.sortie.succes, corps: written[0] }
}

export default corps
