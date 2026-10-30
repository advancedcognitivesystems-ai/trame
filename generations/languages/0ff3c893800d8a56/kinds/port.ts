import { defineKind, field, hole, doc, type Graph, type Node, type Provides, type View } from "../trame/kernel"
import { choicesOf, holdsIn } from "./binding"

/**
 * A port: what a code node may ask of the world (read reservations, call a provider), or any abstraction behind which
 * a technical choice is made. It declares a contract and effects. In each environment, exactly one realization answers
 * it: an implementation if it touches the platform, a function otherwise, chosen by a technical choice (a binding).
 * In a graph that has no choice for it, the implementation that names the environment answers it (as before bindings).
 */
const kind = defineKind({
  name: "port",
  label: { one: "Port", many: "Ports" },
  order: 105,
  renderOwns: ["declaredEffects"],
  fields: {
    owner: field.owner(),
    /** (Not `effects`: a view already has `effects`, the effects computed from the dependencies.) */
    declaredEffects: field.value<readonly string[]>("Declared effects"),
  },
  edges: {},

  effects: (self) => (Array.isArray(self.declaredEffects) ? self.declaredEffects : []),

  /** When wiring: the realization chosen for this environment. */
  delegate(self, ctx) {
    const impls = answering(ctx.g, self, ctx.env)
    if (impls.length > 1) throw new Error(`Several realizations of "${self.title}"${ctx.env ? ` for "${ctx.env.title}"` : ""}: ${impls.map((v) => v.title).join(", ")}`)
    return impls[0]
  },

  // An environment without a realization is a hole only if something needs it there: the assembly says so.
  holes: (self, g) => [
    !g.from(self).in("implements").exists() && hole.warning("No realization, in any environment", self.owner),
    ...g.all("environment").nodes().map((env) => {
      const mine = answering(g, self, env)
      return mine.length > 1 && hole.error(`Several realizations for "${env.title}": ${mine.map((v) => v.title).join(", ")}`)
    }),
  ],

  render: (self, g) => [
    doc.table(["Environment", "Answered by", "Chosen by"], g.all("environment").nodes().map((env) => {
      const mine = answering(g, self, env)
      const by = mine.flatMap((r) => choicesOf(g, r).filter((b) => holdsIn(g, b, env)))
      return [
        [doc.ref(env)],
        mine.length ? mine.flatMap((v, i) => [...(i ? [", "] : []), doc.ref(v)]) : ["none"],
        by.length ? by.flatMap((v, i) => [...(i ? [", "] : []), doc.ref(v)]) : ["—"],
      ]
    })),
  ],
})

/** The realizations of a port in force. */
const realizations = (g: Graph, port: View): View[] => g.from(port).in("implements").where((v) => v.active).nodes()

/**
 * What answers a port in an environment (everything chosen for it, without an environment): the realizations a choice
 * makes there; in a graph where no choice makes any of its realizations, the implementations that name the environment.
 */
function answering(g: Graph, port: View, env: View | undefined): View[] {
  const all = realizations(g, port)
  if (all.some((r) => choicesOf(g, r).length)) return all.filter((r) => choicesOf(g, r).some((b) => holdsIn(g, b, env)))
  return all.filter((v) => !env || g.from(v).out("environments").nodes().some((e) => e.node === env.node))
}

/** Declares a port, with the type of its contract: `port<ReservationReading>({ … })`. */
export function port<C>(input: { owner: string; declaredEffects: readonly string[] }): Node<"port"> & Provides<C> {
  return kind(input as never) as never
}

export const portKind = kind
