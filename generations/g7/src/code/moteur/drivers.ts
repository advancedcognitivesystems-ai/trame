// Les drivers : ce que Trame sait faire d'un corps écrit dans un langage.
// Vérifier ce qu'il touche, le charger pour l'exécuter, l'assembler. Un langage sans driver ne peut pas être vérifié.

import type { Assembly, Emitted, Provision } from "./assemblage"
import type { Api as DriverTypeScriptApi } from "./driver-typescript"
import type { Api as DriverHclApi } from "./driver-hcl"

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

/** Un littéral trouvé dans un corps. */
export interface LiteralFound {
  line: number
  value: string
  kind: "texte" | "nombre" | "gabarit" | "regex" | "clé"
  category: string
  context: string
  declaredBy?: string
  /** Ce qu'il fait, d'après sa place dans le code : indice, calcul, comparaison, valeur initiale, argument de… */
  role: string
}

/** Un corps à lire : un fichier, ou une propriété en ligne dans la déclaration d'un nœud. */
export type LiteralSource = { key: string; file: string } | { key: string; file: string; line: number; field: string }

export interface Driver {
  language: string
  extensions: string[]
  check(file: string, ctx: CheckContext): DriverIssue[]
  /** Vérifie un corps écrit en ligne, dans la déclaration du nœud. */
  checkSource?(source: string, ctx: CheckContext): DriverIssue[]
  /** Relève les littéraux de ces corps, en une passe (le driver peut résoudre les types). */
  literals?(sources: LiteralSource[], root: string): Map<string, LiteralFound[]>
  /** Charge un corps exécutable dans le processus (seulement les langages qui s'y prêtent). */
  load?(file: string): Promise<unknown>
  /** Écrit le programme d'un composant assemblé (le langage du composant). */
  emitProgram?(a: Assembly, name: string): Emitted[]
  /** Écrit l'infrastructure des implémentations qui se provisionnent dans ce langage. */
  emitProvision?(a: Assembly, items: Provision[]): Emitted[]
}

export interface Deps {
  driverTypeScript: DriverTypeScriptApi
  driverHcl: DriverHclApi
}

const corps = (deps: Deps) => {
  const { typescript } = deps.driverTypeScript
  const { hcl } = deps.driverHcl

  const drivers: Driver[] = [typescript, hcl]

  const driverFor = (language: string): Driver | undefined => drivers.find((d) => d.language === language)
  const allDrivers = () => drivers

  return { driverFor, allDrivers }
}

export type Api = ReturnType<typeof corps>
export default corps
