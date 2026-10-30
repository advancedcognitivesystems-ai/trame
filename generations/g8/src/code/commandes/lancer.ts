// trame run : assemble (la commande trame assemble elle-même), puis lance le programme et sort avec son code.

import type { Traitement } from "../../../kinds/point-entree"
import type { Processus } from "../../architecture"

export interface Deps {
  /** Le statut que la commande rend au système (POSIX). */
  sortie: { succes: number; echec: number }
  assemble: Traitement
  processus: Processus
}

const corps = (deps: Deps): Traitement => async (req) => {
  const program = (await deps.assemble(req)).corps as string
  const child = deps.processus.lancerTs(program, [])
  for (const sig of ["SIGINT", "SIGTERM"] as const) deps.processus.surSignal(sig, () => child.kill(sig))
  const code = await new Promise<number>((fin) => child.on("exit", (c) => fin(c ?? deps.sortie.succes)))
  return { statut: code, corps: undefined }
}

export default corps
