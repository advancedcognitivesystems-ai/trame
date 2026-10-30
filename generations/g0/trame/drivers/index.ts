// Les drivers : ce que Trame sait faire d'un corps écrit dans un langage.
// Vérifier ce qu'il touche, le charger pour l'exécuter, l'assembler. Un langage sans driver ne peut pas être vérifié.

import type { Assembly, Emitted, Provision } from "../assemble"
import { typescript } from "./typescript"
import { hcl } from "./hcl"

export interface DriverIssue {
  severity: "erreur" | "avertissement"
  what: string
}

export interface CheckContext {
  /** Le type du nœud peut toucher la plateforme. */
  ambient: boolean
  /** Les noms des dépendances déclarées pour ce corps. */
  deps: string[]
  root: string
}

export interface Driver {
  language: string
  extensions: string[]
  check(file: string, ctx: CheckContext): DriverIssue[]
  /** Vérifie un corps écrit en ligne, dans la déclaration du nœud. */
  checkSource?(source: string, ctx: CheckContext): DriverIssue[]
  /** Charge un corps exécutable dans le processus (seulement les langages qui s'y prêtent). */
  load?(file: string): Promise<unknown>
  /** Écrit le programme d'un composant assemblé (le langage du composant). */
  emitProgram?(a: Assembly, name: string): Emitted[]
  /** Écrit l'infrastructure des implémentations qui se provisionnent dans ce langage. */
  emitProvision?(a: Assembly, items: Provision[]): Emitted[]
}

const drivers: Driver[] = [typescript, hcl]

export const driverFor = (language: string): Driver | undefined => drivers.find((d) => d.language === language)
export const allDrivers = () => drivers
