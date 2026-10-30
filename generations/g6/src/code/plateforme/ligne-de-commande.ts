// La ligne de commande : le premier argument choisit la commande (build par défaut, ou si le premier argument est une option).
// Une commande inconnue va à la commande « * », s'il y en a une (chez Trame : le nom d'une vue).

import type { BodyOf } from "../../../trame/kernel"
import type { LigneDeCommandeNode } from "../../plateforme"

const corps: BodyOf<typeof LigneDeCommandeNode> = ({ terminal }) => ({
  async servir(routes) {
    const premier = terminal.args[0]
    const [nom, args] = premier === undefined || premier.startsWith("-") ? ["build", terminal.args] : [premier, terminal.args.slice(1)]
    const commande = (n: string) => routes.find((r) => r.declencheur.type === "commande" && r.declencheur.nom === n)
    const route = commande(nom) ?? commande("*")
    if (!route) {
      terminal.erreur(`Commande inconnue : ${nom}`)
      return { code: 1 }
    }
    // La route « * » reçoit aussi le nom des autres commandes (pour dire lesquelles existent).
    const autres = routes.flatMap((r) => (r.declencheur.type === "commande" && r.declencheur.nom !== "*" ? [r.declencheur.nom] : []))
    const r = await route.traitement({ params: { commande: nom, commandes: autres.join(" ") }, corps: { args } })
    return r.statut === undefined ? {} : { code: r.statut }
  },
})

export default corps
