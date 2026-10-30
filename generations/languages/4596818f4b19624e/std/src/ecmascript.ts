/** Standard library · ECMAScript */

import { standard } from "../../kinds/standard"
import { vocabulary } from "../../kinds/vocabulary"
import { CitedNotCopied } from "./product"

// What ECMA-262 fixes, which code in JavaScript or TypeScript relies on: where a list starts, what typeof answers, the
// words a variable cannot bear, how a character is escaped.

/**
 * ECMAScript
 * What the language fixes itself, and code uses: where a list starts, how an integer comes back to 32 bits.
 */
export const EcmaScript = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "ECMA-262, ECMAScript 2024: § 23.1 Array (indices, indexOf), § 13.9.3 unsigned right shift (ToUint32)",
  url: "https://tc39.es/ecma262/2024/",
  constants: {
    firstIndex: { value: 0, meaning: "The index of the first item of a list, of the first character of a text" },
    notFound: { value: -1, meaning: "What indexOf returns when the value is not in the list (§ 23.1.3.17)" },
    toUnsigned32: { value: 0, meaning: "x >>> 0: a zero, unsigned shift; brings x back to 32 unsigned bits" },
  },
})

/**
 * ECMAScript types
 * What typeof says of a value (ECMA-262 2024, § 13.5.3, Table 41): the names a body compares to know what it holds.
 */
export const EcmaScriptTypes = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "ECMA-262, ECMAScript 2024: § 13.5.3 The typeof operator (Table 41)",
  url: "https://tc39.es/ecma262/2024/#sec-typeof-operator",
  constants: {
    undefined: { value: "undefined", meaning: "What typeof says of undefined" },
    object: { value: "object", meaning: "What typeof says of an object that is not a function, and of null" },
    boolean: { value: "boolean", meaning: "What typeof says of true and false" },
    number: { value: "number", meaning: "What typeof says of a number, NaN and the infinities included" },
    string: { value: "string", meaning: "What typeof says of a text" },
    symbol: { value: "symbol", meaning: "What typeof says of a symbol" },
    bigint: { value: "bigint", meaning: "What typeof says of a big integer" },
    function: { value: "function", meaning: "What typeof says of an object that can be called" },
  },
})

/**
 * ECMAScript reserved words
 * The words a program cannot use as the name of a variable: the reserved words of ECMA-262 2024 (§ 12.7.2), and those
 * that strict mode code adds or forbids to bind (§ 13.1.1). A program written as a module is strict.
 */
export const EcmaScriptReservedWords = vocabulary({
  owner: "trame",
  serves: [CitedNotCopied],
  words: {
    await: "Reserved word (§ 12.7.2)",
    break: "Reserved word (§ 12.7.2)",
    case: "Reserved word (§ 12.7.2)",
    catch: "Reserved word (§ 12.7.2)",
    class: "Reserved word (§ 12.7.2)",
    const: "Reserved word (§ 12.7.2)",
    continue: "Reserved word (§ 12.7.2)",
    debugger: "Reserved word (§ 12.7.2)",
    default: "Reserved word (§ 12.7.2)",
    delete: "Reserved word (§ 12.7.2)",
    do: "Reserved word (§ 12.7.2)",
    else: "Reserved word (§ 12.7.2)",
    enum: "Reserved word (§ 12.7.2)",
    export: "Reserved word (§ 12.7.2)",
    extends: "Reserved word (§ 12.7.2)",
    false: "Reserved word (§ 12.7.2)",
    finally: "Reserved word (§ 12.7.2)",
    for: "Reserved word (§ 12.7.2)",
    function: "Reserved word (§ 12.7.2)",
    if: "Reserved word (§ 12.7.2)",
    import: "Reserved word (§ 12.7.2)",
    in: "Reserved word (§ 12.7.2)",
    instanceof: "Reserved word (§ 12.7.2)",
    new: "Reserved word (§ 12.7.2)",
    null: "Reserved word (§ 12.7.2)",
    return: "Reserved word (§ 12.7.2)",
    super: "Reserved word (§ 12.7.2)",
    switch: "Reserved word (§ 12.7.2)",
    this: "Reserved word (§ 12.7.2)",
    throw: "Reserved word (§ 12.7.2)",
    true: "Reserved word (§ 12.7.2)",
    try: "Reserved word (§ 12.7.2)",
    typeof: "Reserved word (§ 12.7.2)",
    var: "Reserved word (§ 12.7.2)",
    void: "Reserved word (§ 12.7.2)",
    while: "Reserved word (§ 12.7.2)",
    with: "Reserved word (§ 12.7.2)",
    yield: "Reserved word (§ 12.7.2)",
    implements: "Reserved in strict mode code (§ 13.1.1)",
    interface: "Reserved in strict mode code (§ 13.1.1)",
    let: "Reserved in strict mode code (§ 13.1.1)",
    package: "Reserved in strict mode code (§ 13.1.1)",
    private: "Reserved in strict mode code (§ 13.1.1)",
    protected: "Reserved in strict mode code (§ 13.1.1)",
    public: "Reserved in strict mode code (§ 13.1.1)",
    static: "Reserved in strict mode code (§ 13.1.1)",
    arguments: "Cannot be bound in strict mode code (§ 13.1.1)",
    eval: "Cannot be bound in strict mode code (§ 13.1.1)",
  },
})

/**
 * Unicode escape of a text
 * A character a text shows only as an escape: a backslash, u, and four hexadecimal digits (ECMA-262, UnicodeEscapeSequence;
 * JSON writes the same).
 */
export const UnicodeEscape = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "ECMA-262 2024, § 12.9.4 String Literals (UnicodeEscapeSequence :: u Hex4Digits); RFC 8259 § 7",
  url: "https://tc39.es/ecma262/2024/#prod-UnicodeEscapeSequence",
  constants: {
    prefix: { value: "\\u", meaning: "Opens the escape: a backslash and u" },
    radix: { value: 16, meaning: "Its digits are hexadecimal" },
    digits: { value: 4, meaning: "Four of them: the code unit, padded on the left" },
    pad: { value: "0", meaning: "What pads the digits on the left" },
  },
})
