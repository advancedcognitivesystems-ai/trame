/** Trame · Conventions */

import { decision } from "../kinds/decision"
import { norme } from "../kinds/norme"
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

/**
 * Références Trame
 * Comment le langage nomme un nœud et un champ : « module.Identifiant », « valeur.cas ». Un chemin vide désigne le nœud entier.
 */
export const SyntaxeDesReferences = norme({
  owner: "trame",
  source: "Trame, le prélude (trame/kernel.ts : refOf, getPath)",
  constantes: {
    separateur: { valeur: ".", sens: "Sépare le module de l'identifiant, et les étapes d'un chemin dans un champ" },
    noeudEntier: { valeur: "", sens: "Le chemin vide : le nœud entier, pas un de ses champs" },
  },
})

/**
 * Commentaire de documentation
 * Ce que dit le commentaire qui précède une déclaration : ses premières lignes sont le titre du nœud, les suivantes sa description.
 */
export const CommentaireDeDocumentation = decision<{ lignesDuTitre: number }>({ owner: "trame", value: { lignesDuTitre: 1 } })

/**
 * Mise en forme du JSON
 * Le JSON que Trame écrit pour être lu (le verrou, une vue en JSON) : indenté.
 */
export const MiseEnFormeJson = decision<{ indentation: number }>({ owner: "trame", value: { indentation: 2 } })
