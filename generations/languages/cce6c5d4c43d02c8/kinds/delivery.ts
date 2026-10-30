import { defineKind, field, edge, optionalEdge, hole, doc, keysOf, KindName, EdgeName, DeliveryField, DeliveryTarget, type Node } from "../trame/kernel"
import words from "./words"

const say = words()

const fields = {
  owner: field.owner(),
  [DeliveryField.target]: field.value<DeliveryTarget>(say.deliveryTarget()),
  [DeliveryField.output]: field.value<string>(say.deliveryOutput()),
  [DeliveryField.shownAs]: field.value<string>(say.deliveryShownAs()),
}
const F = keysOf(fields)

const edges = {
  [EdgeName.delivers]: edge.one([KindName.component], { label: say.deliveryDelivers(), inverse: say.deliveryDeliveredBy() }),
  [EdgeName.environment]: edge.one([KindName.environment], { label: say.deliveryFor(), inverse: say.deliveryDeliveryFor() }),
  [EdgeName.language]: optionalEdge(edge.one([KindName.decision], { label: say.deliveryIn(), inverse: say.deliveryLanguageOf() })),
  [EdgeName.styles]: optionalEdge(edge.many([KindName.stylesheet], { label: say.deliveryStyledBy(), inverse: say.deliveryStyles() })),
  [EdgeName.serves]: optionalEdge(edge.many([KindName.goal], { label: say.adrServes(), inverse: say.adrServedBy() })),
}
const E = keysOf(edges)

/** The names of a delivery's fields and edges: the engine and the views name them by these. */
export const deliveryFields = F
export const deliveryEdges = E

/**
 * A delivery: how a component reaches the people who use it, for a target. A page: the component assembled for its
 * environment, its program bundled into a single document with its style, written at the output, which a browser opens
 * as it is. trame deliver writes it. The component must run in that environment.
 */
const kind = defineKind({
  name: KindName.delivery,
  label: { one: say.deliveryDelivery(), many: say.deliveryDeliveries() },
  renderOwns: [F.target, F.output, F.shownAs],
  fields,
  edges,

  holes(self, g) {
    const { sequences, texts, lists } = g.lib
    const target = self.field(F.target)
    const comp = sequences.head(g.from(self).out(E.delivers).nodes())
    const env = sequences.head(g.from(self).out(E.environment).nodes())
    return [
      !Object.values(DeliveryTarget).includes(target as never) && hole.error(say.deliveryUnknownTarget(String(target), texts.concat(lists.conjunction(Object.values(DeliveryTarget))))),
      comp && env && !g.from(comp).out(EdgeName.environments).nodes().some((v) => v.node === env.node) && hole.error(say.deliveryComponentNotIn(comp.title, env.title)),
    ]
  },

  render(self) {
    return [doc.facts([
      { label: say.deliveryTarget(), value: [doc.ident(String(self.field(F.target)))] },
      { label: say.deliveryOutput(), value: [doc.ident(String(self.field(F.output)))] },
      { label: say.deliveryShownAs(), value: [String(self.field(F.shownAs))] },
    ])]
  },
})

interface DeliveryInput {
  owner: string
  /** What it delivers: for now, a page a browser opens as it is. */
  target: DeliveryTarget
  /** The component delivered, and the environment it is assembled for. */
  delivers: Node<typeof KindName.component>
  environment: Node<typeof KindName.environment>
  /** Where it is written, from the project's root. */
  output: string
  /** What people see it named: the title of the page. */
  shownAs: string
  /** The language decision the page is written in. */
  language?: Node<typeof KindName.decision>
  /** The style sheets written in the page, with the variables they use. */
  styles?: readonly Node<typeof KindName.stylesheet>[]
  serves?: readonly Node<typeof KindName.goal>[]
}

/** `delivery({ owner, target: "page", delivers: PoseliaApp, environment: Browser, output: "dist/poselia.html", shownAs: "Poselia" })` */
export function delivery(input: DeliveryInput): Node<typeof KindName.delivery> {
  return kind(input as never) as never
}

export const deliveryKind = kind
