import { defineKind, field, hole, doc, keysOf, isNode, KindName, EdgeName, BindingEdge, PortField, type Graph, type Node, type Provides, type Realizes, type View, HoleCode } from "../trame/kernel"
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
  /**
   * An extension point (since g120): every realization chosen in an environment answers it, in the order of the one
   * choice that makes them there; what depends on it receives the list of what they give, none when nothing is chosen.
   */
  [PortField.extension]: field.value<boolean>(say.portExtension()),
}
const F = keysOf(fields)

/**
 * A port: what a code node may ask of the world (read reservations, call a provider), or any abstraction behind which
 * a technical choice is made. It declares a contract and effects. In each environment, exactly one realization answers
 * it: an implementation if it touches the platform, a function otherwise, chosen by a technical choice (a binding).
 * In a graph that has no choice for it, the implementation that names the environment answers it (as before bindings).
 * An extension point (since g120) is answered by every realization chosen, in the order one choice gives them.
 */
const kind = defineKind({
  name: KindName.port,
  label: { one: say.bindingPort(), many: say.portPorts() },
  renderOwns: [F.declaredEffects],
  fields,
  edges: {},

  // What is used of an extension point's list says nothing of what is used of each add-on: all its effects (since g120).
  effects: (self, uses) => promised(self.declaredEffects, isExtension(self) ? undefined : uses),

  /** When wiring: the realization chosen for this environment; for an extension point, each one, in order. */
  delegate(self, ctx) {
    const { counts, texts, lists } = ctx.g.lib
    if (isExtension(self)) return answering(ctx.g, self, ctx.env)
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
    // An extension point may have no add-on: nothing answers it then. Its order is one choice's in each environment.
    if (isExtension(self)) {
      return g.all(KindName.environment).nodes().map((env) => {
        const making = extendingIn(g, self, env)
        return counts.several(making) && hole.error(HoleCode.extensionOrderAmbiguous, say.portExtensionOrderAmbiguous(env.title, texts.concat(lists.enumeration(making.map((b) => b.title)))), self.owner)
      })
    }
    return [
      !g.from(self).in(EdgeName.implements).exists() && hole.warning(HoleCode.portUnrealized, say.portNoRealizationInAnyEnvironment(), self.owner),
      ...g.all(KindName.environment).nodes().map((env) => {
        const mine = answering(g, self, env)
        return counts.several(mine) && hole.error(HoleCode.portRealizedTwice, say.portSeveralRealizationsFor(env.title, texts.concat(lists.enumeration(mine.map((v) => v.title)))))
      }),
    ]
  },

  render: (self, g) => {
    const { counts, lists, punctuation } = g.lib
    const refs = (vs: View[], none: string) => (counts.any(vs) ? lists.enumeration(vs.map(doc.ref)) : [none])
    const byMethod = methodsOf(self.field(F.declaredEffects))
    return [
      ...(isExtension(self) ? [doc.para(say.portExtensionSays())] : []),
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

/** Is this port an extension point (since g120)? */
const isExtension = (port: View): boolean => port.field(PortField.extension) === true

/** The choices that make realizations of an extension point in an environment: one gives their order. */
function extendingIn(g: Graph, port: View, env: View | undefined): View[] {
  const mine = new Set(realizations(g, port).map((r) => r.ref))
  const choices = realizations(g, port).flatMap((r) => choicesOf(g, r)).filter((b) => holdsIn(g, b, env))
  return [...new Map(choices.filter((b) => g.from(b).out(BindingEdge.chooses).nodes().some((r) => mine.has(r.ref))).map((b) => [b.ref, b])).values()]
}

/**
 * What answers a port in an environment (everything chosen for it, without an environment): the realizations a choice
 * makes there; in a graph where no choice makes any of its realizations, the implementations that name the environment.
 * An extension point's, in the order of the choices that make them (one, when the graph is sound).
 */
function answering(g: Graph, port: View, env: View | undefined): View[] {
  const all = realizations(g, port)
  if (isExtension(port) && all.some((r) => g.lib.counts.any(choicesOf(g, r)))) {
    const mine = new Map(all.map((r) => [r.ref, r]))
    // In the order the choice writes them, which its edges, sorted, do not keep.
    const written = (b: View): View[] => {
      const chosen = b.field(BindingEdge.chooses)
      return Array.isArray(chosen) ? chosen.flatMap((n) => (isNode(n) ? [g.view(n)] : [])) : []
    }
    return extendingIn(g, port, env).flatMap((b) => written(b).flatMap((r) => mine.get(r.ref) ?? []))
  }
  if (all.some((r) => g.lib.counts.any(choicesOf(g, r)))) return all.filter((r) => choicesOf(g, r).some((b) => holdsIn(g, b, env)))
  return all.filter((v) => !env || g.from(v).out(EdgeName.environments).nodes().some((e) => e.node === env.node))
}

/**
 * Declares an extension point (since g120), with the type of each realization's contract: what depends on it receives
 * the list of them, in the order of the choice that makes them. `extensionPoint<MachineNeed>({ … })`.
 */
export function extensionPoint<C>(input: { owner: string; declaredEffects: readonly string[] | { readonly [M in keyof C & string]: readonly string[] } }): Node<typeof KindName.port> & Provides<readonly C[]> & Realizes<C> {
  return kind({ ...input, [PortField.extension]: true } as never) as never
}

/** Declares a port, with the type of its contract: `port<ReservationReading>({ … })`. */
export function port<C>(input: { owner: string; declaredEffects: readonly string[] | { readonly [M in keyof C & string]: readonly string[] } }): Node<typeof KindName.port> & Provides<C> {
  return kind(input as never) as never
}

export const portKind = kind
