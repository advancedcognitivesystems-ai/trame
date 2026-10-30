/** Trame · Conventions */

import { decision } from "../kinds/decision"
import type { Disposition as DispositionType } from "./architecture"

/**
 * Disposition d'un projet
 * Où un projet Trame range ses sources, ses documents, ses sorties ; comment s'appellent ses fichiers.
 */
export const Disposition = decision<DispositionType>({
  owner: "trame",
  value: {
    sources: "src", documents: "docs", extensionDocuments: ".md", sortie: "out", preuves: "evidence",
    types: "kinds", vues: "views", configuration: "trame.json", verrou: "trame.lock",
    graphe: "graph.json", instantane: "snapshot.json", page: "trame-page.html",
  },
})

/**
 * Rang par défaut
 * La place d'un type ou d'une vue qui n'en déclare pas, dans les documents et les listes.
 */
export const RangParDefaut = decision<number>({ owner: "trame", value: 100 })
