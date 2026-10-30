/** Trame · Scénarios */

import { scenario } from "../kinds/scenario"
import { Test } from "./plateforme"
import { Processus, Horloge, LectureFichiers, JournalEcritures, JournalTerminal } from "./architecture"
import { Compilateur, Lois } from "./moteur"
import { Construire } from "./commandes"

/**
 * Le moteur décrit compile l'exemple
 * Le compilateur assemblé depuis ce graphe charge le projet des réservations et le compile à la date des scénarios.
 */
export const CompilerExemple = scenario({
  owner: "trame",
  verifies: [Compilateur],
  env: Test,
  deps: { compilateur: Compilateur, processus: Processus, horloge: Horloge },
  body: ({ compilateur, processus, horloge }) => async (verifie) => {
    const racine = processus.repertoire()
    await compilateur.loadKinds(racine)
    const l = await compilateur.load(racine)
    verifie("TypeScript accepte l'exemple", l.typeErrors.length === 0)
    const c = await compilateur.compileAt(l, horloge.aujourdhui())
    verifie(`L'exemple a ${c.nodes.length} nœuds, dont 3 scénarios`, c.nodes.filter((n) => c.graph.view(n).kind === "scenario").length === 3)
    verifie("Aucune erreur dans l'exemple", c.diags.every((d) => d.severity !== "erreur"))
    verifie("Les scénarios de l'exemple tiennent", c.nodes.filter((n) => c.graph.view(n).kind === "scenario").every((n) => c.graph.view(n).status === "tenu"))
  },
})

/**
 * Les lois des types tiennent
 */
export const LoisDesTypes = scenario({
  owner: "trame",
  verifies: [Lois],
  env: Test,
  deps: { lois: Lois, compilateur: Compilateur, processus: Processus, horloge: Horloge },
  body: ({ lois, compilateur, processus, horloge }) => async (verifie) => {
    const kinds = await compilateur.loadKinds(processus.repertoire())
    const rapports = lois.checkKinds(horloge.aujourdhui())
    verifie(`${rapports.length} types sur ${kinds.length} respectent toutes leurs lois`, rapports.every((r) => r.failures.length === 0))
  },
})

/**
 * La construction écrit les mêmes documents que l'amorce
 * trame build, joué par le moteur décrit sur l'exemple, écrit au caractère près ce qu'a écrit l'amorce (docs/, graph.json, snapshot.json).
 */
export const ConstruireCommeAmorce = scenario({
  owner: "trame",
  verifies: [Construire],
  env: Test,
  deps: { construire: Construire, journal: JournalEcritures, terminal: JournalTerminal, lecture: LectureFichiers, processus: Processus },
  body: ({ construire, journal, terminal, lecture, processus }) => async (verifie) => {
    const racine = processus.repertoire()
    const r = await construire({ params: { commande: "build" }, corps: { args: [] } })
    verifie("La construction réussit", r.statut === 0)
    verifie("Le bilan est affiché", terminal.lignes().some((l) => l.startsWith("écrit : ")))
    const ecrits = [...journal.fichiers()].sort(([a], [b]) => a.localeCompare(b))
    const differents = ecrits.filter(([chemin, contenu]) => !lecture.existsSync(chemin) || lecture.readFileSync(chemin, "utf8") !== contenu)
    verifie(`${ecrits.length} fichiers écrits, identiques à ceux de l'amorce`, ecrits.length > 0 && differents.length === 0)
    for (const [chemin] of differents) verifie(`${chemin.replace(racine + "/", "")} diffère de l'amorce`, false)
  },
})
