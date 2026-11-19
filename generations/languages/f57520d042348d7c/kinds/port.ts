import { defineKind, field, hole, doc, keysOf, KindName, EdgeName, type Graph, type Node, type Provides, type View } from "../trame/kernel"
import { choicesOf, holdsIn } from "./binding"
import { environmentFields } from "./environment"
import words from "./words"

const say = words()

const fields = {
  owner: field.owner(),
  /**
   * What it may do: a list, which holds for each of its methods, or what each method may do (since g82), so that code
   * that calls only some of them has only their effects. (Not `effects`: a view already has `effects`, the effects
   * computed from the dependencies.)
   */
  declaredEffects: field.value<readonly string[] | Readonly<Record<string, readonly string[]>>>(say.portDeclaredEffects()),
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

  effects: (self, uses) => promised(self.declaredEffects, uses),

  /** When wiring: the realization chosen for this environment. */
  delegate(self, ctx) {
    const { counts, texts, lists } = ctx.g.lib
    const all = answering(ctx.g, self, ctx.env)
    // Without an environment, when several answer: the one of the environment where the build evaluates, if the project
    // says so (a library's environments are its own).
    const evaluating = ctx.env ? undefined : ctx.g.all(KindName.environment).where((e) => e.library === undefined && e.field(environmentFields.evaluates) === true).first()
    const impls = counts.several(all) && evaluating ? answering(ctx.g, self, evaluating) : all
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
    const byMethod = methodsOf(self.field(F.declaredEffects))
    return [
      ...(byMethod
        ? [doc.table([say.portMethod(), say.portItsEffects()], byMethod.map(([m, e]) => [[doc.ident(m)], counts.any(e) ? lists.enumeration(e) : [say.portNone()]]))]
        : []),
      doc.table([say.environmentEnvironment(), say.bindingAnsweredBy(), say.bindingChosenBy()], g.all(KindName.environment).nodes().map((env) => {
        const mine = answering(g, self, env)
        const by = mine.flatMap((r) => choicesOf(g, r).filter((b) => holdsIn(g, b, env)))
        return [[doc.ref(env)], refs(mine, say.portNone()), refs(by, punctuation.absent)]
      })),
    ]
  },
})

/** What each method may do, when the port says it method by method. */
const methodsOf = (declared: unknown): [string, string[]][] | undefined =>
  declared instanceof Object && !Array.isArray(declared)
    ? Object.entries(declared).map(([m, e]): [string, string[]] => [m, Array.isArray(e) ? e.filter((x): x is string => String(x) === x) : []])
    : undefined

/** What a port promises: all its effects, or those of the methods used, when the engine can tell which. */
function promised(declared: unknown, uses?: readonly string[]): string[] {
  if (Array.isArray(declared)) return declared.filter((x): x is string => String(x) === x)
  const byMethod = methodsOf(declared) ?? []
  return [...new Set(byMethod.filter(([m]) => !uses || uses.includes(m)).flatMap(([, e]) => e))]
}

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
export function port<C>(input: { owner: string; declaredEffects: readonly string[] | { readonly [M in keyof C & string]: readonly string[] } }): Node<typeof KindName.port> & Provides<C> {
  return kind(input as never) as never
}

export const portKind = kind
