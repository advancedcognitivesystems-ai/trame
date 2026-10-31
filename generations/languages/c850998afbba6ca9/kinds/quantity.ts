import { defineKind, field, optional, edge, optionalEdge, hole, doc, isHole, keysOf, KindName, EdgeName, QuantityEdge, QuantityField, type Node, type Provides, type Lib, type Quantity, ChangeWay} from "../trame/kernel"
import { sourceOf } from "./standard"
import words from "./words"

const say = words()

/** The units a quantity declares, by name, with how many of its base unit each one makes: none when badly written. */
const unitsOf = (raw: unknown, lib: Lib): [string, number][] =>
  lib.values.isObject(raw) && !isHole(raw)
    ? Object.entries(raw as Record<string, unknown>).flatMap(([k, v]): [string, number][] => (lib.values.isNumber(v) ? [[k, v]] : []))
    : []

const fields = {
  owner: field.owner(),
  /** Where its units are published, when they are (the SI brochure, ISO 4217). */
  source: optional(field.value<string>(say.patternSource())),
  url: optional(field.value<string>(say.patternAddress())),
  /** Its units, by name: how many of the base unit each one makes (the base unit makes one). */
  [QuantityField.units]: field.value<Record<string, number>>(say.quantityUnits()),
  /** A ratio has no dimension: it multiplies any quantity without changing what that quantity measures. */
  [QuantityField.ratio]: optional(field.value<boolean>(say.quantityRatio())),
}
const F = keysOf(fields)

const edges = {
  /** The catalog that writes a value in each unit: a message per unit, which receives the number already written. */
  [QuantityEdge.written]: edge.one([KindName.catalog], { label: say.quantityWrittenWith(), inverse: say.quantityWrites() }),
  [EdgeName.serves]: optionalEdge(edge.many([KindName.goal], { label: say.adrServes(), inverse: say.adrServedBy() })),
}

/**
 * A quantity: what a number measures (a duration, an amount of one currency, a ratio, a length), its units and where
 * they are published. A value's type says its quantity (`type Duration = Quantity<typeof Time>`): TypeScript refuses a
 * value of one quantity where another is expected, and the compiler refuses to add, subtract or compare two quantities,
 * or to multiply them when neither is a ratio. A document writes a value in the largest of its units it makes a whole
 * number of, with the words of its catalog. Wired, a quantity gives a value from each unit, and each value in a unit.
 */
const kind = defineKind({
  name: KindName.quantity,
  label: { one: say.quantityQuantity(), many: say.quantityQuantities() },
  main: F.units,
  renderOwns: [F.source, F.url, F.units],
  fields,
  changes: { [F.units]: ChangeWay.cited },
  edges,

  holes: (self, g) => {
    const units = unitsOf(self.field(F.units), g.lib)
    return [(g.lib.counts.isEmpty(units) || units.some(([, factor]) => factor <= g.lib.counts.zero)) && hole.error(say.quantityWithoutUnit())]
  },

  /** Wired as a dependency: a value from each unit (`time.minute(15)`), and each value in a unit (`time.in.minute(d)`). */
  provide: (self, ctx) => {
    const units = unitsOf(self.field(F.units), ctx.g.lib)
    return {
      ...Object.fromEntries(units.map(([name, factor]) => [name, (n: number) => n * factor])),
      in: Object.fromEntries(units.map(([name, factor]) => [name, (q: number) => q / factor])),
    }
  },

  render: (self, g) => [
    ...(g.lib.values.isText(self.field(F.source)) ? [doc.para(...sourceOf(self, g.lib))] : []),
    doc.table([say.quantityUnit(), say.quantityOfTheBase()], unitsOf(self.field(F.units), g.lib).map(([name, factor]) => [[doc.ident(name)], [doc.value(factor)]])),
  ],
})

type Units = Record<string, number>
/** The type of a quantity's node: its units, by name, mark it apart from every other quantity. */
type QuantityNode<U extends Units> = Node<"quantity"> & { readonly units: U }

/** What a quantity gives once wired: a value from each of its units, and a value in each of them. */
export type UnitsApi<U extends Units> =
  { readonly [K in keyof U]: (n: number) => Quantity<QuantityNode<U>> } & { readonly in: { readonly [K in keyof U]: (q: Quantity<QuantityNode<U>>) => number } }

interface QuantityInput<U extends Units> {
  owner: string
  source?: string
  url?: string
  units: U
  ratio?: boolean
  written: Node<"catalog">
  serves?: readonly Node<"goal">[]
}

/** `quantity({ units: { second: 1, minute: 60, hour: 3600 }, … })`: its values are typed `Quantity<typeof Time>`. */
export function quantity<const U extends Units>(input: QuantityInput<U>): QuantityNode<U> & Provides<UnitsApi<U>> {
  return kind(input as never) as never
}

export const quantityKind = kind
