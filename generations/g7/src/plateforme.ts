/** Trame · Plateforme */

import { code } from "../trame/kernel"
import { decision } from "../kinds/decision"
import { environnement } from "../kinds/environnement"
import { implementation } from "../kinds/implementation"
import {
  Prelude, LectureFichiers, EcritureFichiers, Chemins, Chargeur, CompilateurTs, Empreinte, Processus, Terminal,
  Horloge, Minuteur, Http, Empaqueteur, Ressources, LigneDeCommande, JournalEcritures, JournalTerminal,
} from "./architecture"

/**
 * Local
 * Le poste où l'on lance `trame` : vrais fichiers, vrai terminal, vraie horloge.
 */
export const Local = environnement({ owner: "trame" })

/**
 * Test
 * Les scénarios : le moteur lit les vrais fichiers de l'exemple, mais ce qu'il écrit et affiche est gardé en mémoire.
 */
export const Test = environnement({ owner: "trame" })

/**
 * Projet d'exemple
 * Le projet sur lequel les scénarios font tourner le moteur, relatif à la racine de Trame.
 */
export const RacineExemple = decision<string>({ owner: "trame", value: "exemples/reservations" })

/**
 * Jour des scénarios
 * La date que voit le moteur en test : celle où les documents attendus de l'exemple ont été construits.
 */
export const JourDeTest = decision<string>({ owner: "trame", value: "2026-10-17" })

// Communes à Local et Test --------------------------------------------------------------

/**
 * Prélude de Trame
 */
export const PreludeTrame = implementation({
  owner: "trame", implements: [Prelude], environments: [Local, Test],
  body: code.file("./code/plateforme/prelude.ts"),
})

/**
 * Fichiers du système, en lecture
 */
export const LectureDisque = implementation({
  owner: "trame", implements: [LectureFichiers], environments: [Local, Test],
  body: code.file("./code/plateforme/lecture-disque.ts"),
})

/**
 * Chemins de Node
 */
export const CheminsNode = implementation({
  owner: "trame", implements: [Chemins], environments: [Local, Test],
  body: code.file("./code/plateforme/chemins.ts"),
})

/**
 * Chargeur tsx
 * Exécute les modules TypeScript du projet tels quels.
 */
export const ChargeurTsx = implementation({
  owner: "trame", implements: [Chargeur], environments: [Local, Test],
  body: code.file("./code/plateforme/chargeur.ts"),
})

/**
 * Compilateur TypeScript
 */
export const TypeScriptReel = implementation({
  owner: "trame", implements: [CompilateurTs], environments: [Local, Test],
  body: code.file("./code/plateforme/typescript.ts"),
})

/**
 * Empreintes SHA-256
 */
export const EmpreinteNode = implementation({
  owner: "trame", implements: [Empreinte], environments: [Local, Test],
  body: code.file("./code/plateforme/empreinte.ts"),
})

/**
 * Minuteur de Node
 */
export const MinuteurNode = implementation({
  owner: "trame", implements: [Minuteur], environments: [Local, Test],
  body: code.file("./code/plateforme/minuteur.ts"),
})

/**
 * Serveur HTTP de Node
 */
export const HttpNode = implementation({
  owner: "trame", implements: [Http], environments: [Local, Test],
  body: code.file("./code/plateforme/http.ts"),
})

/**
 * esbuild
 */
export const Esbuild = implementation({
  owner: "trame", implements: [Empaqueteur], environments: [Local, Test],
  body: code.file("./code/plateforme/esbuild.ts"),
})

/**
 * Ressources de la page
 */
export const RessourcesPage = implementation({
  owner: "trame", implements: [Ressources], environments: [Local, Test],
  body: code.file("./code/plateforme/ressources.ts"),
})

// Local ---------------------------------------------------------------------------------

/**
 * Fichiers du système, en écriture
 */
export const EcritureDisque = implementation({
  owner: "trame", implements: [EcritureFichiers], environments: [Local],
  body: code.file("./code/plateforme/ecriture-disque.ts"),
})

/**
 * Processus de Node
 */
export const ProcessusNode = implementation({
  owner: "trame", implements: [Processus], environments: [Local],
  body: code.file("./code/plateforme/processus.ts"),
})

/**
 * Terminal de Node
 */
export const TerminalNode = implementation({
  owner: "trame", implements: [Terminal], environments: [Local],
  body: code.file("./code/plateforme/terminal.ts"),
})

/**
 * Horloge du système
 */
export const HorlogeSysteme = implementation({
  owner: "trame", implements: [Horloge], environments: [Local],
  body: code.file("./code/plateforme/horloge.ts"),
})

/**
 * Ligne de commande
 * Le premier argument choisit la commande ; les suivants lui sont passés tels quels.
 */
export const LigneDeCommandeNode = implementation({
  owner: "trame", implements: [LigneDeCommande], environments: [Local, Test],
  deps: { terminal: Terminal },
  body: code.file("./code/plateforme/ligne-de-commande.ts"),
})

// Test ----------------------------------------------------------------------------------

/**
 * Processus de l'exemple
 * Le dossier courant est celui du projet d'exemple ; aucun processus n'est lancé.
 */
export const ProcessusExemple = implementation({
  owner: "trame", implements: [Processus], environments: [Test],
  deps: { racine: RacineExemple },
  body: code.file("./code/plateforme/processus-exemple.ts"),
})

/**
 * Écriture en mémoire
 */
export const EcritureMemoire = implementation({
  owner: "trame", implements: [EcritureFichiers, JournalEcritures], environments: [Test],
  body: code.file("./code/plateforme/ecriture-memoire.ts"),
})

/**
 * Terminal en mémoire
 * Garde chaque ligne. Quitter lève une erreur au lieu d'arrêter le processus.
 */
export const TerminalMemoire = implementation({
  owner: "trame", implements: [Terminal, JournalTerminal], environments: [Test],
  body: code.file("./code/plateforme/terminal-memoire.ts"),
})

/**
 * Horloge arrêtée
 */
export const HorlogeArretee = implementation({
  owner: "trame", implements: [Horloge], environments: [Test],
  deps: { jour: JourDeTest },
  body: code.file("./code/plateforme/horloge-arretee.ts"),
})
