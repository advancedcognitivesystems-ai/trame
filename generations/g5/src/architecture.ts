/** Trame · Architecture */

import type { Graph, View } from "../trame/kernel"
import { acces } from "../kinds/acces"
import { composant, type Exposition } from "../kinds/composant"
import { regle } from "../kinds/regle"
import { vocabulaire, type MotDe } from "../kinds/vocabulaire"

// Les contrats : ce que le moteur demande à la plateforme. Des types, pas des implémentations.
// Quand Node a déjà le bon type, le contrat le reprend (une partie de node:fs, node:path…).

/** Les couleurs, par nom de variable CSS (« ok-soft » : le fond de ce qui tient). */
export interface Palette {
  clair: Record<string, string>
  sombre: Record<string, string>
  /** Pour chaque statut (et « neutre »), la couleur de fond et celle du trait, par nom de variable. */
  statuts: Record<string, { fond: string; trait: string }>
  /** La couleur du texte. */
  encre: string
}
export interface Typographie {
  /** Par nom de variable CSS. */
  polices: Record<string, string>
  /** Les adresses à précharger, puis la feuille qui déclare les polices. */
  chargement: string[]
}
/** Où un projet range ses fichiers. */
export interface Disposition {
  sources: string
  documents: string
  extensionDocuments: string
  sortie: string
  preuves: string
  types: string
  vues: string
  configuration: string
  verrou: string
  graphe: string
  instantane: string
  page: string
}

/** Le prélude : la partie du langage que les types, les vues et le moteur partagent (le registre des nœuds et des types). */
export interface Prelude {
  interne: typeof import("#trame/interne")
  /** Le chemin du module, pour qu'un programme figé l'importe. */
  chemin: string
}
export type LectureFichiers = Pick<typeof import("node:fs"), "readFileSync" | "existsSync" | "readdirSync" | "statSync" | "watch">
export type EcritureFichiers = Pick<typeof import("node:fs"), "writeFileSync" | "mkdirSync">
export type Chemins = Pick<typeof import("node:path"), "join" | "resolve" | "relative" | "dirname" | "basename">
export interface Chargeur {
  /** Exécute un module TypeScript et rend ce qu'il exporte. */
  importer(fichier: string): Promise<Record<string, unknown>>
}
export type CompilateurTs = typeof import("typescript")
export type Empreinte = Pick<typeof import("node:crypto"), "createHash">
export interface Processus {
  repertoire(): string
  env: Record<string, string | undefined>
  /** Relance ce programme (le moteur lui-même) avec d'autres arguments, dans un autre dossier. */
  relancer(args: string[], cwd: string): import("node:child_process").ChildProcess
  /** Lance un programme TypeScript ; ses sorties sont celles du terminal. */
  lancerTs(fichier: string, args: string[]): import("node:child_process").ChildProcess
  surSignal(signal: "SIGINT" | "SIGTERM", f: () => void): void
}
export interface Terminal {
  args: string[]
  /** Une ligne sur la sortie normale. */
  ecrire(ligne: string): void
  /** Du texte tel quel sur la sortie normale. */
  ecrireBrut(texte: string): void
  /** Une ligne sur la sortie d'erreur. */
  erreur(ligne: string): void
  quitter(code: number): never
}
export interface Horloge {
  maintenant(): Date
  /** La date du jour, ou celle que fixe TRAME_TODAY. */
  aujourdhui(): string
}
export type Minuteur = Pick<typeof globalThis, "setTimeout" | "clearTimeout">
export type Http = Pick<typeof import("node:http"), "createServer">
export type Empaqueteur = Pick<typeof import("esbuild"), "build">
export interface Ressources {
  /** Le script de la page (pour le navigateur) et sa feuille de style, chemins absolus. */
  script: string
  style: string
}

/**
 * Effets
 * Ce qu'un accès peut faire au monde. Un accès ne déclare que des mots de ce vocabulaire.
 */
export const Effets = vocabulaire({
  owner: "trame",
  mots: {
    lecture: "Lit un état (des fichiers, une base)",
    écriture: "Change un état",
    exécution: "Exécute du code chargé",
    processus: "Lance ou contrôle des processus",
    terminal: "Lit les arguments, écrit sur les sorties",
    temps: "Lit l'heure, ou attend",
    réseau: "Parle à une autre machine",
  },
})
export type Effet = MotDe<typeof Effets>
/** Les effets d'un accès, vérifiés par TypeScript contre le vocabulaire. */
const effets = (...e: Effet[]): Effet[] => e

/**
 * Prélude
 * Le registre des nœuds et des types, et l'outillage des programmes figés : ce que le langage partage avec le moteur.
 */
export const Prelude = acces<Prelude>({ owner: "trame", effets: effets() })

/**
 * Lecture des fichiers
 */
export const LectureFichiers = acces<LectureFichiers>({ owner: "trame", effets: effets("lecture") })

/**
 * Écriture des fichiers
 */
export const EcritureFichiers = acces<EcritureFichiers>({ owner: "trame", effets: effets("écriture") })

/**
 * Chemins
 * Calculs sur les chemins de fichiers, sans les toucher.
 */
export const Chemins = acces<Chemins>({ owner: "trame", effets: effets() })

/**
 * Chargeur de modules
 * Exécuter un module du graphe, d'un type ou d'une vue, et lire ce qu'il exporte.
 */
export const Chargeur = acces<Chargeur>({ owner: "trame", effets: effets("lecture", "exécution") })

/**
 * Compilateur TypeScript
 * Lire le code du graphe et le vérifier.
 */
export const CompilateurTs = acces<CompilateurTs>({ owner: "trame", effets: effets("lecture") })

/**
 * Empreintes
 */
export const Empreinte = acces<Empreinte>({ owner: "trame", effets: effets() })

/**
 * Processus
 * Le dossier courant, l'environnement, et lancer d'autres processus.
 */
export const Processus = acces<Processus>({ owner: "trame", effets: effets("processus") })

/**
 * Terminal
 * Les arguments, les sorties, le code de sortie.
 */
export const Terminal = acces<Terminal>({ owner: "trame", effets: effets("terminal") })

/**
 * Horloge
 */
export const Horloge = acces<Horloge>({ owner: "trame", effets: effets("temps") })

/**
 * Minuteur
 */
export const Minuteur = acces<Minuteur>({ owner: "trame", effets: effets("temps") })

/**
 * Serveur HTTP
 */
export const Http = acces<Http>({ owner: "trame", effets: effets("réseau") })

/**
 * Empaqueteur
 * Réunir le script de la page et ce qu'il importe en un seul fichier pour le navigateur.
 */
export const Empaqueteur = acces<Empaqueteur>({ owner: "trame", effets: effets("lecture") })

/**
 * Ressources de la page
 */
export const Ressources = acces<Ressources>({ owner: "trame", effets: effets() })

/**
 * Ligne de commande
 * Exposer les commandes de Trame : lire les arguments, appeler la commande, sortir avec son code.
 */
export const LigneDeCommande = acces<Exposition>({ owner: "trame", effets: effets("terminal") })

/**
 * Trame en ligne de commande
 * Le programme `trame` : build, vues, lois, instantané, publication, export, dev, assemblage.
 */
export const TrameCli = composant({
  owner: "trame",
  langage: "typescript",
  deps: { exposition: LigneDeCommande },
})

/** Tout ce dont un nœud dépend à l'exécution, de proche en proche. */
const fermeture = (v: View): View[] => {
  const vus = new Map<string, View>()
  const visiter = (x: View) => {
    for (const d of x.dependencies) {
      if (d.stage !== "exécution" || vus.has(d.node.ref)) continue
      vus.set(d.node.ref, d.node)
      visiter(d.node)
    }
  }
  visiter(v)
  return [...vus.values()]
}

/**
 * Le rendu ne lit pas le graphe
 * Un rendu ne reçoit que le format intermédiaire : il n'atteint jamais le prélude, même de loin.
 */
export const RenduSansGraphe = regle({
  owner: "trame",
  check: (g: Graph) =>
    g.all("function").nodes()
      .filter((v) => v.module === "rendu" && fermeture(v).some((d) => d.node === Prelude))
      .map((v) => ({ on: v, what: "Un rendu atteint le prélude, donc le graphe" })),
})

/**
 * Seules les commandes écrivent
 * Le moteur calcule ce qu'il faut écrire ; seule une commande l'écrit sur le disque.
 */
export const SeulesLesCommandesEcrivent = regle({
  owner: "trame",
  check: (g: Graph) =>
    g.all("function").nodes()
      .filter((v) => v.effects.includes("écriture"))
      .map((v) => {
        const par = v.dependencies.find((d) => d.node.effects.includes("écriture") && d.node.kind !== "port")
        return { on: v, what: par ? `Une fonction du moteur écrit sur le disque, par « ${par.node.title} »` : "Une fonction du moteur écrit sur le disque" }
      }),
})

// Accès qui n'existent qu'en test : ce que les scénarios observent.

export interface JournalEcritures {
  /** Ce qui a été écrit, par chemin absolu. */
  fichiers(): Map<string, string>
}
export interface JournalTerminal {
  lignes(): string[]
}

/**
 * Journal des écritures
 * Ce que le moteur a écrit, quand l'écriture est simulée.
 */
export const JournalEcritures = acces<JournalEcritures>({ owner: "trame", effets: effets() })

/**
 * Journal du terminal
 * Ce que le moteur a affiché, quand le terminal est simulé.
 */
export const JournalTerminal = acces<JournalTerminal>({ owner: "trame", effets: effets() })

/**
 * Les effets sont ceux du vocabulaire
 * Un accès qui déclare un effet hors du vocabulaire « Effets » est refusé : les règles qui lisent les effets le manqueraient.
 */
export const EffetsConnus = regle({
  owner: "trame",
  check: (g: Graph) => {
    const connus = new Set(Object.keys((g.view(Effets).field("mots") as Record<string, string>) ?? {}))
    return g.all("port").nodes().flatMap((v) =>
      ((v.field("effets") as string[]) ?? []).filter((e) => !connus.has(e)).map((e) => ({ on: v, what: `Effet inconnu : « ${e} »` })))
  },
})
