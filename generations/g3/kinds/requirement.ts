import { defineKind, field, edge, optionalEdge, hole, doc, type Node, type Provides } from "../trame/kernel"

/** Une exigence : une fonction pure, l'oracle contre lequel le code projeté sera jugé. */
const kind = defineKind({
  name: "requirement",
  label: { one: "Exigence", many: "Exigences" },
  order: 20,
  main: "rule",
  callable: "rule",
  fields: {
    rule: field.fn<(...args: never[]) => unknown>(() => () => 0),
  },
  edges: {
    refines: edge.many(["goal", "requirement"], { label: "Précise", inverse: "Précisé par", acyclic: true }),
    assumes: optionalEdge(edge.many(["assumption"], { label: "Suppose", inverse: "Supposé par" })),
  },

  holes: (self, g) => [!g.from(self).in("accepts").exists() && hole.warning("Exigence sans critère d'acceptation")],

  status(self, g) {
    const all = g.from(self).in("accepts").nodes().map((a) => a.status)
    if (!all.length) return "inconnu"
    if (all.includes("violé")) return "violé"
    if (all.includes("bloqué")) return "bloqué"
    return all.every((s) => s === "tenu") ? "tenu" : "inconnu"
  },

  /** Branchée comme dépendance : la règle elle-même, qui sert alors d'oracle et de code. */
  provide: (self) => self.rule,

  render(self) {
    const rule = self.decl?.props.rule
    const source = self.decl && `${self.decl.file}:${self.decl.line}`
    const by = self.amendedBy.find((a) => a.paths.includes("rule"))?.by
    return [
      ...(by ? [doc.para("Règle redéfinie par ", doc.ref(by), ". Le code ci-dessous est la règle d'origine.")] : []),
      ...(rule ? [doc.details(by ? "La règle d'origine, dans le code" : "La règle, dans le code", [doc.code("ts", rule, source)])] : []),
    ]
  },
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Fn = (...args: any[]) => any

interface RequirementInput<F extends Fn> {
  refines: readonly Node<"goal" | "requirement">[]
  assumes?: readonly Node<"assumption">[]
  rule: F
}

/** Façade typée : le nœud s'appelle comme la règle qu'il porte. */
export const requirement = kind as unknown as
  (<F extends Fn>(input: RequirementInput<F>) => Node<"requirement"> & F & { readonly rule: F } & Provides<F>) & { def: typeof kind.def }
