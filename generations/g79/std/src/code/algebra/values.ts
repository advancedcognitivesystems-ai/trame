import type { ProvidedBy } from "../../../../trame/kernel"
import type { EcmaScriptTypes } from "../../ecmascript"

export interface Deps {
  types: ProvidedBy<typeof EcmaScriptTypes>
}

/** A function, whatever it takes and gives. */
type AnyFunction = (...args: never[]) => unknown

const body = ({ types }: Deps) => ({
  /** A text. */
  isText: (v: unknown): v is string => typeof v === types.string,
  /** A number, NaN and the infinities included. */
  isNumber: (v: unknown): v is number => typeof v === types.number,
  /** True or false. */
  isBoolean: (v: unknown): v is boolean => typeof v === types.boolean,
  /** Something that can be called. */
  isFunction: (v: unknown): v is AnyFunction => typeof v === types.function,
  /** A symbol. */
  isSymbol: (v: unknown): v is symbol => typeof v === types.symbol,
  /** An object that is not a function: a list, a record. Not null, whatever typeof says of it. */
  isObject: (v: unknown): v is object => v !== null && typeof v === types.object,
})

export type Api = ReturnType<typeof body>
export default body
