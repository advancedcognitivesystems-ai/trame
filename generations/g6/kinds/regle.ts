import { defineKind, field, hole, doc, type Graph, type View } from "../trame/kernel"

export interface Violation { on: View; what: string }

/**
 * Une règle d'architecture : une requête sur le graphe consolidé. Chaque violation devient une erreur
 * posée sur le nœud fautif, avec le responsable de la règle.
 */
export const regle = defineKind({
  name: "rule",
  label: { one: "Règle d'architecture", many: "Règles d'architecture" },
  order: 110,
  main: "check",
  /** Une règle d'architecture est une racine de sa couche, comme un objectif l'est du produit. */
  root: true,
  fields: {
    owner: field.owner(),
    check: field.fn<(g: Graph) => Violation[]>(() => () => []),
  },
  edges: {},

  evaluate: (self, g) => self.check(g),

  status(self) {
    const r = self.result<Violation[]>()
    return r === undefined ? "inconnu" : r.length ? "violé" : "tenu"
  },

  holes: (self) => (self.result<Violation[]>() ?? []).map((v) => hole.on(v.on, hole.error(`${v.what} (règle « ${self.title} »)`, self.owner))),

  render(self) {
    const source = self.decl && `${self.decl.file}:${self.decl.line}`
    const check = self.decl?.props.check
    const r = self.result<Violation[]>() ?? []
    return [
      r.length ? doc.list(r.map((v) => [doc.ref(v.on), " : ", v.what])) : doc.para("Respectée partout."),
      ...(check ? [doc.details("La règle, dans le code", [doc.code("ts", check, source)])] : []),
    ]
  },
})
