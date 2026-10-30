/** Trame · Scénarios */

import { scenario } from "../kinds/scenario"
import { decision } from "../kinds/decision"
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
 * Écarts attendus sur l'exemple
 * Les fichiers de l'exemple qu'un changement voulu du moteur écrit autrement, avec la raison. Le scénario « La construction
 * écrit les mêmes documents » les laisse passer, et seulement eux ; un écart qui n'est pas déclaré ici le fait échouer.
 * Une fois la génération qui les écrit en place, on vide la liste.
 */
export const EcartsAttendus = decision<Record<string, string>>({
  owner: "trame",
  value: {},
})

/**
 * La construction écrit les mêmes documents que le moteur en place
 * trame build, joué par le moteur décrit sur l'exemple, écrit au caractère près ce qu'a écrit le moteur en place
 * (la génération qui l'assemble, l'amorce au départ) : docs/, graph.json, snapshot.json. Seuls les écarts déclarés
 * attendus passent.
 */
export const ConstruireCommeAvant = scenario({
  owner: "trame",
  verifies: [Construire],
  env: Test,
  deps: { construire: Construire, attendus: EcartsAttendus, journal: JournalEcritures, terminal: JournalTerminal, lecture: LectureFichiers, processus: Processus },
  body: ({ construire, attendus, journal, terminal, lecture, processus }) => async (verifie) => {
    const racine = processus.repertoire()
    const r = await construire({ params: { commande: "build" }, corps: { args: [] } })
    verifie("La construction réussit", r.statut === 0)
    verifie("Le bilan est affiché", terminal.lignes().some((l) => l.startsWith("écrit : ")))
    const ecrits = [...journal.fichiers()].sort(([a], [b]) => a.localeCompare(b))
    const relatif = (chemin: string) => chemin.replace(racine + "/", "")
    const differents = ecrits.filter(([chemin, contenu]) => !lecture.existsSync(chemin) || lecture.readFileSync(chemin, "utf8") !== contenu)
    const imprevus = differents.map(([chemin]) => relatif(chemin)).filter((chemin) => !(chemin in attendus))
    const declares = Object.entries(attendus)
    verifie(`${ecrits.length} fichiers écrits, identiques à ceux du moteur en place${declares.length ? `, aux écarts attendus près (${declares.length})` : ""}`, ecrits.length > 0 && imprevus.length === 0)
    for (const [chemin, raison] of declares) verifie(`${chemin} : écart attendu, ${raison}`, true)
    for (const chemin of imprevus) verifie(`${chemin} diffère de ce qu'a écrit le moteur en place`, false)
  },
})
