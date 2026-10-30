/** Trame · Produit */

import type { Severity } from "../trame/kernel"
import { goal } from "../kinds/goal"
import { decision } from "../kinds/decision"
import { requirement } from "../kinds/requirement"
import { acceptance } from "../kinds/acceptance"

/**
 * Une spécification qui s'exécute
 * Le graphe d'un produit s'écrit en code, se vérifie, se rend en documents, et produit le code qui le réalise.
 */
export const SpecificationExecutable = goal()

/**
 * Une seule source de vérité
 * Une valeur est décidée une fois, dans le graphe ; le code, les documents et l'infrastructure la lisent de là.
 */
export const SourceUnique = goal()

/**
 * Trier les problèmes par gravité
 * Ce qui bloque d'abord, puis les erreurs, puis ce qu'il faut surveiller.
 */
export const OrdreDesGravites = requirement({
  refines: [SpecificationExecutable],
  rule: (gravite: Severity): number => (gravite === "bloquant" ? 0 : gravite === "erreur" ? 1 : 2),
})

/** Critères du tri par gravité */
export const CriteresOrdre = acceptance({
  accepts: OrdreDesGravites,
  owner: "trame",
  criteria: (criterion) => {
    criterion("Un trou bloquant passe avant une erreur", () => OrdreDesGravites("bloquant") < OrdreDesGravites("erreur"))
    criterion("Une erreur passe avant un avertissement", () => OrdreDesGravites("erreur") < OrdreDesGravites("avertissement"))
  },
})

/**
 * Nœuds tirés par type
 * Combien de nœuds tirés au hasard pour éprouver les lois d'un type.
 */
export const NombreEchantillons = decision<number>({ owner: "trame", value: 50, range: [10, 500] })

/**
 * Jeux de revendications
 * Combien de jeux de revendications pour éprouver la résolution d'un type, chacun présenté dans plusieurs ordres.
 */
export const JeuxDeRevendications = decision<number>({ owner: "trame", value: 30, range: [5, 200] })

/**
 * Littéraux admis
 * Ce qu'un corps de code peut écrire sans le déclarer dans le graphe. Tout autre littéral est relevé par le driver.
 */
export const LitterauxAdmis = decision<(string | number)[]>({ owner: "trame", value: [0, 1, ""] })

/**
 * Responsables tirés au hasard
 * Les noms que les lois donnent aux nœuds qu'elles fabriquent. Neutres : ce ne sont les personnes d'aucun projet.
 */
export const PersonnesDeTirage = decision<string[]>({ owner: "trame", value: ["personne-a", "personne-b"] })

/**
 * Port de trame dev
 */
export const PortDev = decision<number>({ owner: "trame", value: 4170 })

/**
 * Regroupement des enregistrements
 * Dans trame dev, les enregistrements rapprochés déclenchent une seule recompilation. En millisecondes.
 */
export const RegroupementDev = decision<number>({ owner: "trame", value: 150, range: [50, 2000] })
