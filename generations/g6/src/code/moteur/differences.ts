// Ce que la dernière modification a changé : la différence entre deux compilations, en format intermédiaire.
// Pur : le serveur de développement s'en sert, la page l'affiche.

import type { Block, Document, Inline, Payload } from "../../../trame/kernel"

export interface Deps {
}

const corps = (deps: Deps) => {

  function diffPayloads(prev: Payload, next: Payload): Document | undefined {
    const title = (ref: string) => next.nodes.find((n) => n.ref === ref)?.title ?? prev.nodes.find((n) => n.ref === ref)?.title ?? ref
    const ref = (r: string): Inline => ({ t: "ref", ref: r, title: title(r) })
    const items: Inline[][] = []

    const before = new Set(prev.nodes.map((n) => n.ref))
    const after = new Set(next.nodes.map((n) => n.ref))
    for (const r of after) if (!before.has(r)) items.push(["Nouveau nœud : ", ref(r)])
    for (const r of before) if (!after.has(r)) items.push([`Nœud retiré : ${title(r)}`])

    for (const [r, s] of Object.entries(next.state.statuses)) {
      const old = prev.state.statuses[r]
      if (r in prev.state.statuses && old !== s) {
        items.push([ref(r), " passe de ", old ? { t: "status", status: old } : "sans statut", " à ", s ? { t: "status", status: s } : "sans statut"])
      }
    }
    const oldIssues = new Set(prev.state.issues.map((i) => i.key))
    const newIssues = new Set(next.state.issues.map((i) => i.key))
    for (const i of next.state.issues) {
      if (!oldIssues.has(i.key)) items.push([{ t: "severity", severity: i.severity }, i.severity === "erreur" ? " ajoutée : " : " ajouté : ", i.what, ...(i.owner ? [" · ", { t: "person", name: i.owner } as Inline] : [])])
    }
    for (const i of prev.state.issues) {
      if (!newIssues.has(i.key)) items.push([{ t: "severity", severity: i.severity }, i.severity === "erreur" ? " résolue : " : " résolu : ", i.what])
    }
    const oldRes = new Map(prev.state.resolutions.map((r) => [r.key, r]))
    for (const r of next.state.resolutions) {
      const o = oldRes.get(r.key)
      const [target, paths] = r.key.split("|")
      if (!o) items.push(["Nouveau recoupement sur ", { t: "ident", text: paths }, " de ", ref(target)])
      else if (o.outcome !== r.outcome || o.applied.join() !== r.applied.join()) {
        items.push(["Le recoupement sur ", { t: "ident", text: paths }, " de ", ref(target), " est tranché autrement : ", r.outcome === "contesté" ? "contesté" : r.applied.map(title).join(", ") + " l'emporte"])
      }
    }
    if (!items.length) return undefined
    const blocks: Block[] = [{ type: "list", items }]
    return { id: "changements", view: "changements", group: "document", title: "Ce que la dernière modification a changé", blocks }
  }

  return { diffPayloads }
}

export type Api = ReturnType<typeof corps>
export default corps
