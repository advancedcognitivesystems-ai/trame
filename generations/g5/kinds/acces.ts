import { defineKind, field, hole, doc, type Graph, type Node, type Provides, type View } from "../trame/kernel"

/**
 * Un accès : ce qu'un nœud de code peut demander au monde (lire des réservations, appeler un prestataire).
 * Il déclare un contrat et des effets. Dans chaque environnement, une implémentation exactement le réalise.
 */
const kind = defineKind({
  name: "port",
  label: { one: "Accès", many: "Accès" },
  order: 105,
  renderOwns: ["effets"],
  fields: {
    owner: field.owner(),
    effets: field.value<readonly string[]>("Effets déclarés"),
  },
  edges: {},

  effects: (self) => (Array.isArray(self.effets) ? self.effets : []),

  /** Au branchement : l'implémentation prévue pour cet environnement. */
  delegate(self, ctx) {
    const impls = implementations(ctx.g, self, ctx.env)
    if (impls.length > 1) throw new Error(`Plusieurs implémentations de « ${self.title} »${ctx.env ? ` pour « ${ctx.env.title} »` : ""} : ${impls.map((v) => v.title).join(", ")}`)
    return impls[0]
  },

  // Un environnement sans implémentation n'est un trou que si quelqu'un en a besoin là : c'est l'assemblage qui le dit.
  holes: (self, g) => [
    !implementations(g, self, undefined).length && hole.warning("Aucune implémentation, dans aucun environnement", self.owner),
    ...g.all("environment").nodes().map((env) => {
      const mine = implementations(g, self, env)
      return mine.length > 1 && hole.error(`Plusieurs implémentations pour « ${env.title} » : ${mine.map((v) => v.title).join(", ")}`)
    }),
  ],

  render: (self, g) => [
    doc.table(["Environnement", "Implémentation"], g.all("environment").nodes().map((env) => {
      const mine = implementations(g, self, env)
      return [[doc.ref(env)], mine.length ? mine.flatMap((v, i) => [...(i ? [", "] : []), doc.ref(v)]) : ["aucune"]]
    })),
  ],
})


/** Les implémentations en vigueur d'un accès, prévues pour un environnement (toutes, sans environnement). */
function implementations(g: Graph, port: View, env: View | undefined): View[] {
  return g.from(port).in("implements").where((v) => v.active && (!env || g.from(v).out("environments").nodes().some((e) => e.node === env.node))).nodes()
}

/** Déclare un accès, avec le type de son contrat : `acces<LectureReservations>({ … })`. */
export function acces<C>(input: { owner: string; effets: readonly string[] }): Node<"port"> & Provides<C> {
  return kind(input as never) as never
}

export const portKind = kind
