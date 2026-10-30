import { defineKind, field, hole, doc, keysOf, KindName, EdgeName, type Graph, type Node, type Provides, type View } from "../trame/kernel"
import { choicesOf, holdsIn } from "./binding"
import words from "./words"

const say = words()

const fields = {
  owner: field.owner(),
  /** (Not `effects`: a view already has `effects`, the effects computed from the dependencies.) */
  declaredEffects: field.value<readonly string[]>(say.portDeclaredEffects()),
}
const F = keysOf(fields)

/**
 * A port: what a code node may ask of the world (read reservations, call a provider), or any abstraction behind which
 * a technical choice is made. It declares a contract and effects. In each environment, exactly one realization answers
 * it: an implementation if it touches the platform, a function otherwise, chosen by a technical choice (a binding).
 * In a graph that has no choice for it, the implementation that names the environment answers it (as before bindings).
 */
const kind = defineKind({
  name: KindName.port,
  label: { one: say.bindingPort(), many: say.portPorts() },
  renderOwns: [F.declaredEffects],
  fields,
  edges: {},

  effects: (self) => (Array.isArray(self.declaredEffects) ? self.declaredEffects : []),

  /** When wiring: the realization chosen for this environment. */
  delegate(self, ctx) {
    const { counts, texts, lists } = ctx.g.lib
    const impls = answering(ctx.g, self, ctx.env)
    if (counts.several(impls)) {
      throw new Error(say.portSeveralRealizationsOf(self.title, ctx.env ? say.portFor(ctx.env.title) : texts.empty, texts.concat(lists.enumeration(impls.map((v) => v.title)))))
    }
    return ctx.g.lib.sequences.head(impls)
  },

  // An environment without a realization is a hole only if something needs it there: the assembly says so.
  holes: (self, g) => {
    const { counts, texts, lists } = g.lib
    return [
      !g.from(self).in(EdgeName.implements).exists() && hole.warning(say.portNoRealizationInAnyEnvironment(), self.owner),
      ...g.all(KindName.environment).nodes().map((env) => {
        const mine = answering(g, self, env)
        return counts.several(mine) && hole.error(say.portSeveralRealizationsFor(env.title, texts.concat(lists.enumeration(mine.map((v) => v.title)))))
      }),
    ]
  },

  render: (self, g) => {
    const { counts, lists, punctuation } = g.lib
    const refs = (vs: View[], none: string) => (counts.any(vs) ? lists.enumeration(vs.map(doc.ref)) : [none])
    return [
      doc.table([say.environmentEnvironment(), say.bindingAnsweredBy(), say.bindingChosenBy()], g.all(KindName.environment).nodes().map((env) => {
        const mine = answering(g, self, env)
        const by = mine.flatMap((r) => choicesOf(g, r).filter((b) => holdsIn(g, b, env)))
        return [[doc.ref(env)], refs(mine, say.portNone()), refs(by, punctuation.absent)]
      })),
    ]
  },
})

/** The realizations of a port in force. */
const realizations = (g: Graph, port: View): View[] => g.from(port).in(EdgeName.implements).where((v) => v.active).nodes()

/**
 * What answers a port in an environment (everything chosen for it, without an environment): the realizations a choice
 * makes there; in a graph where no choice makes any of its realizations, the implementations that name the environment.
 */
function answering(g: Graph, port: View, env: View | undefined): View[] {
  const all = realizations(g, port)
  if (all.some((r) => g.lib.counts.any(choicesOf(g, r)))) return all.filter((r) => choicesOf(g, r).some((b) => holdsIn(g, b, env)))
  return all.filter((v) => !env || g.from(v).out(EdgeName.environments).nodes().some((e) => e.node === env.node))
}

/** Declares a port, with the type of its contract: `port<ReservationReading>({ … })`. */
export function port<C>(input: { owner: string; declaredEffects: readonly string[] }): Node<"port"> & Provides<C> {
  return kind(input as never) as never
}

export const portKind = kind
