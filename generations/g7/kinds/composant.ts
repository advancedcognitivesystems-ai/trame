import {
  defineKind, field, edge, optionalEdge, hole, doc,
  type AnyNode, type Node, type HasDeps, type Provides, type View,
} from "../trame/kernel"
import type { Declencheur, Traitement } from "./point-entree"

/** Ce qu'une exposition (un serveur HTTP, une ligne de commande…) sait faire des points d'entrée d'un composant. */
export interface Route { declencheur: Declencheur; nom: string; traitement: Traitement }
export interface Demarrage {
  /** Où le composant répond, s'il répond quelque part. */
  adresse?: string
  /** Le code de sortie, pour un composant qui s'arrête de lui-même (une commande). */
  code?: number
  arreter?(): Promise<void>
}
export interface Exposition { servir(routes: Route[]): Promise<Demarrage> }

/**
 * Un composant : ce qu'on déploie. Il expose ses points d'entrée par une exposition.
 * Assemblé pour un environnement, il devient un programme : les choix d'implémentation y sont écrits en dur.
 */
const kind = defineKind({
  name: "component",
  label: { one: "Composant", many: "Composants" },
  order: 100,
  fields: {
    owner: field.owner(),
    langage: field.value<string>("Langage"),
    deps: field.deps("Démarrage"),
  },
  edges: {
    environments: optionalEdge(edge.many(["environment"], { label: "Déployé dans", inverse: "Déploie" })),
  },

  /** Assemblé dans chaque environnement où il est déployé : ce qui ne peut pas être branché bloque. */
  holes: (self, g) => {
    const envs = self.environments.length ? self.environments : g.all("environment").nodes()
    const needed = [...self.dependencies.map((d) => d.node), ...g.from(self).in("in").where((v) => v.kind === "entry").nodes()]
    // Une même erreur dans plusieurs environnements n'est dite qu'une fois.
    const byError = new Map<string, Set<string>>()
    for (const env of envs) for (const e of g.plan(needed, env).errors) byError.set(e, (byError.get(e) ?? new Set()).add(env.title))
    return [...byError].map(([e, where]) => hole.blocking(`${[...where].join(", ")} : ${e}`, self.owner))
  },

  async start(self, entries, ctx) {
    const { exposition } = (await ctx.wireDeps(self)) as { exposition: Exposition }
    const routes = entries.map((e): Route => ({ declencheur: e.node.field("declencheur") as Declencheur, nom: e.node.title, traitement: e.value as Traitement }))
    return exposition.servir(routes)
  },

  render: (self, g) => {
    const entries = g.from(self).in("in").where((v) => v.kind === "entry").nodes()
    return entries.length ? [doc.para(`${entries.length} point${entries.length > 1 ? "s" : ""} d'entrée : `, ...entries.flatMap((v: View, i) => [...(i ? [", "] : []), doc.ref(v)]))] : []
  },
})

interface ComposantInput<D extends { exposition: AnyNode & Provides<Exposition> }> {
  owner: string
  environments?: readonly Node<"environment">[]
  langage: string
  deps: D
}

export function composant<D extends { exposition: AnyNode & Provides<Exposition> }>(input: ComposantInput<D>): Node<"component"> & HasDeps<D> {
  return kind(input as never) as never
}

export const componentKind = kind
