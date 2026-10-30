// trame payload : le graphe compilé en format intermédiaire (pour trame dev et l'export), à la date du jour,
// et avec --all à chaque date où il peut changer. Le code n'est lu et exécuté qu'une fois.
// Chaque document y est aussi rendu en Markdown et en texte, par les rendus du moteur : la page n'en refait aucun.

import type { Document, Payload } from "../../../trame/kernel"
import type { Traitement } from "../../../kinds/point-entree"
import type { Terminal } from "../../architecture"
import type { Api as PreparationApi } from "./preparation"
import type { Api as ChargeApi } from "../moteur/charge"
import type { Api as MarkdownApi } from "../rendu/markdown"
import type { Api as TexteApi } from "../rendu/texte"

export interface Deps {
  preparation: PreparationApi
  charge: ChargeApi
  markdown: MarkdownApi
  texte: TexteApi
  terminal: Terminal
}

const corps = (deps: Deps): Traitement => async (req) => {
  const { options, prepare, at, views, markdownContext } = deps.preparation
  const { toMarkdown } = deps.markdown
  const { toText } = deps.texte
  const rendus = (docs: Document[]): Payload["rendus"] => {
    const ctx = markdownContext(docs)
    return Object.fromEntries(docs.map((d) => [d.id, { markdown: toMarkdown(d, ctx), texte: toText(d) }]))
  }
  const makePayload: typeof deps.charge.makePayload = (...a) => {
    const p = deps.charge.makePayload(...a)
    return { ...p, rendus: rendus(p.documents) }
  }
  const o = options(req.params.commande, (req.corps as { args: string[] }).args)
  const { c, comp } = await prepare(o)
  const first = makePayload(c, comp, views(o, comp))
  if (!o.all) {
    deps.terminal.ecrireBrut(JSON.stringify(first))
    return { statut: 0, corps: undefined }
  }
  const dates: { date: string; payload?: Payload; error?: string }[] = [{ date: o.today, payload: first }]
  for (const date of first.candidates.filter((d) => d !== o.today)) {
    try {
      const x = await at(o, date)
      dates.push({ date, payload: makePayload(x.c, x.comp, views(o, x.comp)) })
    } catch (e) {
      dates.push({ date, error: (e as Error).message })
    }
  }
  deps.terminal.ecrireBrut(JSON.stringify(dates.sort((a, b) => a.date.localeCompare(b.date))))
  return { statut: 0, corps: undefined }
}

export default corps
