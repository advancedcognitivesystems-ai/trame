/** Trame · TypeScript */

import { TypeScriptGrammar } from "./packages"
import { code, refines } from "../trame/kernel"
import { language } from "../kinds/language"
import { vocabulary } from "../kinds/vocabulary"
import { standard } from "../kinds/standard"
import { decision } from "../kinds/decision"
import { syntax } from "../kinds/syntax"
import { fn } from "../kinds/function"
import { ExecutableSpecification } from "./product"
import { EcmaScript, EcmaScriptReservedWords } from "../std/src/ecmascript"
import { TreeSitterQueries } from "./standards"
import { TextFile } from "../std/src/text"
import { NodeModuleSpecifiers, NodeProcessApi } from "../std/src/system"
import { FrozenApi, ReferenceSyntax, StepNames } from "./conventions"
import { Paths, Prelude } from "./architecture"
import { Counts, Sequences, Texts } from "../std/src/algebra"
import { Dates, DriverMessages } from "./messages"
import { SyntaxReader } from "./syntax"

// TypeScript, the language of the graph, of its kinds and of its bodies: how Trame reads it (the language node, its
// queries and its examples), and what Trame writes in it (the syntax elements of an assembled program, and the writer
// that composes them). Each element writes one construct; its examples are read back by the TypeScript reader, as the
// fragment they claim to be.

/** A literal as a role capture catches it: a value written, a negative number. */
const bare = String.raw`(number) (string) (template_string) (regex) (unary_expression operator: "-")`
/** Where a literal gets its role: a literal itself, or in parentheses. */
const literal = String.raw`[${bare} (parenthesized_expression [${bare}])]`

/**
 * Globals that reach outside
 * The globals through which a body would touch the world: the network, the process, the time, randomness, storage.
 * Only the kinds that may touch the platform (implementations) use them; the TypeScript queries watch each one.
 */
export const WorldGlobals = vocabulary({
  owner: "trame",
  words: {
    fetch: "The network (WHATWG Fetch)",
    process: "The running process: its arguments, its environment, its exit",
    require: "Loads a module that no import declares",
    globalThis: "The global object, and through it everything else",
    setTimeout: "The time: runs code later",
    setInterval: "The time: runs code again and again",
    setImmediate: "The event loop: runs code after the current turn",
    crypto: "Randomness, and the platform's cryptography",
    performance: "The time, measured by the platform",
    XMLHttpRequest: "The network, the older way",
    WebSocket: "The network, a connection kept open",
    localStorage: "The browser's storage",
    "Date.now": "The time: the current instant",
    "Math.random": "Randomness",
    "new Date()": "The time: a date made of the current instant",
  },
})

/**
 * TypeScript
 * The language of the graph, its kinds and its bodies. Read with the tree-sitter grammar for TypeScript: literals,
 * names, imports, roles, the globals that reach outside, the default export, and the inline bodies of declarations.
 */
export const TypeScript = language({
  owner: "trame",
  packages: [TypeScriptGrammar],
  tag: "typescript",
  standard: EcmaScript,
  queryLanguage: TreeSitterQueries,
  reader: SyntaxReader,
  globals: WorldGlobals,
  grammar: { module: "tree-sitter-typescript/tree-sitter-typescript.wasm" },
  extensions: [".ts"],
  queries: {
    values: {
      value: String.raw`
(unary_expression operator: "-" argument: (number)) @literal.number
(number) @literal.number
(string) @literal.text
(template_string) @literal.template
(regex) @literal.regex`,
      meaning: "The values written in the code: a negative number is the minus and its number",
    },
    parts: {
      value: String.raw`
(string (string_fragment) @literal.part)
(template_string (string_fragment) @literal.part)
(escape_sequence) @literal.escape
(template_substitution (_) @literal.substitution)`,
      meaning: "What a text is made of: its fragments, its escape sequences, what a template substitutes",
    },
    keys: {
      value: String.raw`
((pair key: (string) @literal.key) (#not-match? @literal.key "^[\"'][A-Za-z_$][A-Za-z0-9_$]*[\"']$"))`,
      meaning: "A key written as a text that is not an identifier (\"content-type\"): a value disguised as a name",
    },
    names: {
      value: String.raw`
(pair key: (string) @name)
(public_field_definition name: (string) @name)
(method_definition name: (string) @name)
(subscript_expression index: (string) @name)
(export_statement source: (string) @name)
((expression_statement (string) @name) (#eq? @name "\"use strict\""))
(literal_type) @name
(type_annotation) @name
(type_arguments) @name
(type_parameters) @name
(type_query) @name
(interface_declaration) @name
(type_alias_declaration) @name`,
      meaning: "What is written like a value but names something: a key, a property read by its name, a re-exported module, the directive, the types",
    },
    imports: {
      value: String.raw`
(import_statement source: (string) @import.type)
((import_statement (import_clause (identifier)) source: (string) @import.value) @_import (#not-match? @_import "^import\\s+type\\s"))
((import_statement (import_clause (namespace_import)) source: (string) @import.value) @_import (#not-match? @_import "^import\\s+type\\s"))
((import_statement (import_clause (named_imports (import_specifier) @_specifier)) source: (string) @import.value) @_import
  (#not-match? @_specifier "^type\\s") (#not-match? @_import "^import\\s+type\\s"))
((import_statement source: (string) @import.value) @_import (#match? @_import "^import\\s*[\"']"))
(call_expression function: (import) arguments: (arguments . (string) @import.value))
((call_expression function: (import) arguments: (arguments . (_) @import.computed)) (#not-match? @import.computed "^[\"']"))`,
      meaning: "The modules imported: for their types only, unless a default, a namespace, a name without type, a bare import or a load asks for the value",
    },
    locals: {
      value: String.raw`
(variable_declarator name: (identifier) @local.definition)
(required_parameter pattern: (identifier) @local.definition)
(optional_parameter pattern: (identifier) @local.definition)
(function_declaration name: (identifier) @local.definition)
(catch_clause parameter: (identifier) @local.definition)
(shorthand_property_identifier_pattern) @local.definition
(pair_pattern value: (identifier) @local.definition)
(array_pattern (identifier) @local.definition)
(assignment_pattern left: (identifier) @local.definition)
(import_clause (identifier) @local.definition)
(namespace_import (identifier) @local.definition)
(import_specifier name: (identifier) @local.definition)
(import_specifier alias: (identifier) @local.definition)`,
      meaning: "The names a body defines: variables, parameters, functions, what it imports. They hide a global of the same name",
    },
    globals: {
      value: String.raw`
((identifier) @global (#any-of? @global "fetch" "process" "require" "globalThis" "setTimeout" "setInterval" "setImmediate" "crypto" "performance" "XMLHttpRequest" "WebSocket" "localStorage"))
((shorthand_property_identifier) @global (#any-of? @global "fetch" "process" "require" "globalThis" "setTimeout" "setInterval" "setImmediate" "crypto" "performance" "XMLHttpRequest" "WebSocket" "localStorage"))
((member_expression object: (identifier) @global.name) @global (#any-of? @global "Date.now" "Math.random"))
((new_expression constructor: (identifier) @global.name) @global (#any-of? @global "new Date()"))`,
      meaning: "The globals that reach outside (WorldGlobals): an identifier, a member read, a date made of the current instant",
    },
    entry: {
      value: String.raw`(export_statement "default") @entry`,
      meaning: "What a body gives: its default export",
    },
    bodies: {
      value: String.raw`
(program (_) @declaration)
(pair key: (property_identifier) @body.name value: (_) @body)`,
      meaning: "Where an inline body is: the declarations of a module, and the properties of what they declare",
    },
    roles: {
      value: String.raw`
(subscript_expression index: ${literal} @role.index)
(binary_expression left: ${literal} @role.arithmetic operator: ["+" "-" "*" "/" "%" "**"])
(binary_expression operator: ["+" "-" "*" "/" "%" "**"] right: ${literal} @role.arithmetic)
(binary_expression left: [(string) (template_string)] @role.concatenation operator: ["+" "-" "*" "/" "%" "**"])
(binary_expression operator: ["+" "-" "*" "/" "%" "**"] right: [(string) (template_string)] @role.concatenation)
(augmented_assignment_expression operator: ["+=" "-="] right: ${literal} @role.arithmetic)
(augmented_assignment_expression operator: ["+=" "-="] right: [(string) (template_string)] @role.concatenation)
(binary_expression left: ${literal} @role.bitwise operator: ["&" "|" "^" "<<" ">>" ">>>"])
(binary_expression operator: ["&" "|" "^" "<<" ">>" ">>>"] right: ${literal} @role.bitwise)
(binary_expression left: ${literal} @role.comparison operator: ["===" "!==" "==" "!=" "<" "<=" ">" ">="])
(binary_expression operator: ["===" "!==" "==" "!=" "<" "<=" ">" ">="] right: ${literal} @role.comparison)
(binary_expression left: ${literal} @role.default operator: ["??" "||"])
(binary_expression operator: ["??" "||"] right: ${literal} @role.default)
(binary_expression left: ${literal} @role.condition operator: "&&")
(binary_expression operator: "&&" right: ${literal} @role.condition)
(assignment_expression right: ${literal} @role.assignment)
(ternary_expression condition: ${literal} @role.condition)
(ternary_expression consequence: ${literal} @role.branch)
(ternary_expression alternative: ${literal} @role.branch)
(call_expression arguments: (arguments ${literal} @role.argument))
(call_expression function: (identifier) @callee arguments: (arguments ${literal} @role.argument))
(call_expression function: (member_expression property: (_) @callee) arguments: (arguments ${literal} @role.argument))
(call_expression function: (await_expression (identifier) @callee) arguments: (arguments ${literal} @role.argument))
(call_expression function: (await_expression (member_expression property: (_) @callee)) arguments: (arguments ${literal} @role.argument))
(new_expression arguments: (arguments ${literal} @role.argument))
(new_expression constructor: (identifier) @callee arguments: (arguments ${literal} @role.argument))
(new_expression constructor: (member_expression property: (_) @callee) arguments: (arguments ${literal} @role.argument))
(variable_declarator value: ${literal} @role.initial)
(pair key: (string) @role.property)
(pair value: ${literal} @role.property)
(return_statement ${literal} @role.returned)
(arrow_function body: ${literal} @role.returned)
(array ${literal} @role.element)
(switch_case value: ${literal} @role.case)
(template_substitution ${literal} @role.template)
(required_parameter value: ${literal} @role.default)
(optional_parameter value: ${literal} @role.default)
(object_assignment_pattern right: ${literal} @role.default)
(assignment_pattern right: ${literal} @role.default)
(spread_element ${literal} @role.statement)
(expression_statement ${literal} @role.statement)`,
      meaning: "The places that give a literal its role (syntax.LiteralRoles), and the function an argument goes to (the grammar reads await f<T>(x) as a call of await f)",
    },
  },
  escapes: {
    mark: "\\",
    single: { n: "\n", t: "\t", r: "\r", b: "\b", f: "\f", v: "\v", "0": "\0", "\n": "", "\r\n": "", "\r": "", "\u2028": "", "\u2029": "" },
    numeric: [{ prefix: "u{", radix: 16, close: "}" }, { prefix: "u", radix: 16, digits: 4 }, { prefix: "x", radix: 16, digits: 2 }],
  },
  examples: [
    { code: "xs[0]", literals: ["0"], roles: ["index"], values: [0] },
    { code: `const o = { owner: "trame", "content-type": 1 }`, literals: [`"trame"`, `"content-type"`, "1"], roles: ["property value", "property value", "property value"] },
    { code: "const s = `${a} · ${b}` + \"\\u2192\"", literals: ["`${…} · ${…}`", `"\\u2192"`], values: ["… · …", "→"], roles: ["concatenation", "concatenation"] },
    { code: "const n = -1; f(x, 2); new Map([3]); o.m(4)", literals: ["-1", "2", "3", "4"], roles: ["initial value", "argument of f", "element of a list", "argument of m"] },
    { code: "const r = /ab+/g; const t = `${a} ${b}`; const u = `${`b${c}`}`", literals: ["/ab+/g", "`${…} ${…}`", "`${…}`", "`b${…}`"], roles: ["initial value", "initial value", "initial value", "in a template"] },
    { code: `type K = "a" | "b"; const x = y as "c"; z["key"] = 1; const f = (n: 2) => n`, literals: ["1"], roles: ["assignment"] },
    {
      code: `import type { T } from "./t"\nimport { readFileSync } from "node:fs"\nimport x, { type U } from "./x"\nimport { type V } from "./v"\nconst m = await import(name)`,
      literals: [], imports: [{ module: "./t", typeOnly: true }, { module: "node:fs", typeOnly: false }, { module: "./x", typeOnly: false }, { module: "./v", typeOnly: true }, { module: "name", typeOnly: false }],
    },
    { code: "function f(process: P) { return process.env }\nfetch(url); Date.now(); new Date(); new Date(t)", globals: ["fetch", "Date.now", "new Date()"] },
    { code: "export default body", literals: [], entry: true },
    // A gap of the grammar (tree-sitter-typescript 0.23.2, its latest version): a property named in, after a property whose
    // type is a name, without a separator, is not read; the literal of its type is then read as a value. With a separator,
    // or with a type that names no literal (Node<typeof KindName.component>), nothing is missed.
    { code: `interface E {\n  on: T\n  in: Node<"c">\n}`, literals: [`"c"`], errors: 2 },
    { code: `interface E {\n  on: T;\n  in: Node<"c">\n}`, literals: [] },
  ],
})

// What Trame writes -------------------------------------------------------------------------

/**
 * The syntax of the programs Trame writes
 * ECMAScript's grammar, and the few constructs of TypeScript an assembled program uses (a type assertion, an object
 * type, a union). The marks that several constructs share are here, with the layout of the programs: a space between
 * tokens where it reads better, two spaces before an element on a line of its own.
 */
export const TypeScriptSyntax = standard({
  owner: "trame",
  source: "ECMA-262, ECMAScript 2024 (§ 12 lexical grammar, § 13 expressions, § 14 statements, § 16 modules); TypeScript 5.6 handbook (type assertions, object types, union types)",
  url: "https://tc39.es/ecma262/2024/",
  constants: {
    endOfLine: refines(TextFile, "endOfLine", "Ends each line of a program"),
    space: { value: " ", meaning: "Separates two tokens where the layout wants it (§ 12.2: U+0020)" },
    indent: { value: "  ", meaning: "Begins an element written on a line of its own: two spaces" },
    comma: { value: ",", meaning: "Separates the elements of a list: arguments, properties, elements of an array (§ 12.8)" },
    openParenthesis: { value: "(", meaning: "Opens arguments, a condition, a group (§ 12.8)" },
    closeParenthesis: { value: ")", meaning: "Closes what ( opened" },
    openBrace: { value: "{", meaning: "Opens an object, the names of an import, an object type (§ 12.8)" },
    closeBrace: { value: "}", meaning: "Closes what { opened" },
    equals: { value: "=", meaning: "Gives a value: the initializer of a declaration, an assignment (§ 12.8)" },
    colon: { value: ":", meaning: "Separates a property's name from its value or its type (§ 12.8)" },
    importKeyword: { value: "import", meaning: "Opens an import declaration (§ 16.2.2)" },
    fromKeyword: { value: "from", meaning: "Introduces the module an import reads (§ 16.2.2)" },
    undefined: { value: "undefined", meaning: "The value of what is not there (§ 19.1.4), and its type" },
    stringType: { value: "string", meaning: "The type of texts (TypeScript)" },
    numberType: { value: "number", meaning: "The type of numbers (TypeScript)" },
    docComment: { value: "/**", meaning: "Opens a documentation comment: a multi-line comment whose first character is an asterisk (JSDoc)" },
    commentEnd: { value: "*/", meaning: "Closes a multi-line comment (§ 12.4)" },
  },
})

/** Read as an expression: in parentheses. */
const expression = { before: "(", after: ")" }
/** Read as a property: in an object, in parentheses. */
const inObject = { before: "({ ", after: " })" }
/** Read as a type: in a type alias. */
const asType = { before: "type T = ", after: "" }

/**
 * Comment
 * Two slashes, a space, then the text, to the end of the line.
 */
export const LineComment = syntax({
  owner: "trame",
  standard: TypeScriptSyntax,
  section: "12.4 Comments (SingleLineComment)",
  url: "https://tc39.es/ecma262/2024/#sec-comments",
  language: TypeScript,
  constants: {
    opener: { value: "//", meaning: "Opens a comment that runs to the end of the line" },
  },
  write: ({ standard: { space }, opener }) => (text: string) => opener + space + text,
  examples: [{ input: ["Frozen program."], output: "// Frozen program." }],
})

/**
 * Text
 * A text, between double quotes, escaped as JSON escapes it: since ECMAScript 2019, every JSON text is an ECMAScript
 * expression.
 */
export const StringLiteral = syntax({
  owner: "trame",
  standard: TypeScriptSyntax,
  section: "12.9.4 String literals; 25.5.2 JSON.stringify",
  url: "https://tc39.es/ecma262/2024/#sec-literals-string-literals",
  language: TypeScript,
  fragment: expression,
  constants: {},
  write: () => (text: string) => JSON.stringify(text),
  examples: [
    { input: ["Build"], output: "\"Build\"" },
    { input: ["\"Trame\" · Local ·"], output: "\"\\\"Trame\\\" · Local ·\"" },
  ],
})

/**
 * Property access
 * An object, a dot, then the name of the property.
 */
export const MemberAccess = syntax({
  owner: "trame",
  standard: TypeScriptSyntax,
  section: "13.3.2 Property accessors",
  url: "https://tc39.es/ecma262/2024/#sec-property-accessors",
  language: TypeScript,
  fragment: expression,
  constants: {
    dot: { value: ".", meaning: "Separates an object from the name of its property" },
  },
  write: ({ dot }) => (object: string, property: string) => object + dot + property,
  examples: [{ input: ["frozen", "value"], output: "frozen.value" }],
})

/**
 * Optional property access
 * An object that may be absent, a question mark and a dot, then the name of the property: nothing when the object is
 * not there.
 */
export const OptionalAccess = syntax({
  owner: "trame",
  standard: TypeScriptSyntax,
  section: "13.3.9 Optional chains",
  url: "https://tc39.es/ecma262/2024/#sec-optional-chains",
  language: TypeScript,
  fragment: expression,
  constants: {
    mark: { value: "?.", meaning: "Reads a property only if the object is there" },
  },
  write: ({ mark }) => (object: string, property: string) => object + mark + property,
  examples: [{ input: ["started", "code"], output: "started?.code" }],
})

/**
 * Call
 * What is called, then its arguments in parentheses, separated by commas.
 */
export const Call = syntax({
  owner: "trame",
  standard: TypeScriptSyntax,
  section: "13.3.6 Function calls",
  url: "https://tc39.es/ecma262/2024/#sec-function-calls",
  language: TypeScript,
  fragment: expression,
  constants: {},
  write: ({ standard: { openParenthesis, closeParenthesis, comma, space } }) => (callee: string, args: readonly string[]) =>
    callee + openParenthesis + args.join(comma + space) + closeParenthesis,
  examples: [
    { input: ["frozen.data", ["Rule", "\"m.Rule\"", "{}"]], output: "frozen.data(Rule, \"m.Rule\", {})" },
    { input: ["f", []], output: "f()" },
  ],
})

/**
 * Waiting
 * The keyword await, a space, then the promise waited for.
 */
export const Await = syntax({
  owner: "trame",
  standard: TypeScriptSyntax,
  section: "15.8 Async function definitions (AwaitExpression)",
  url: "https://tc39.es/ecma262/2024/#sec-async-function-definitions",
  language: TypeScript,
  fragment: { before: "async () => ", after: "" },
  constants: {
    keyword: { value: "await", meaning: "Waits for a promise, and gives its value" },
  },
  write: ({ standard: { space }, keyword }) => (expression: string) => keyword + space + expression,
  examples: [{ input: ["body_counts({})"], output: "await body_counts({})" }],
})

/**
 * Group
 * An expression in parentheses: what follows applies to all of it.
 */
export const Parenthesized = syntax({
  owner: "trame",
  standard: TypeScriptSyntax,
  section: "13.2.9 The grouping operator",
  url: "https://tc39.es/ecma262/2024/#sec-grouping-operator",
  language: TypeScript,
  fragment: expression,
  constants: {},
  write: ({ standard: { openParenthesis, closeParenthesis } }) => (expression: string) => openParenthesis + expression + closeParenthesis,
  examples: [{ input: ["a ?? b"], output: "(a ?? b)" }],
})

/**
 * Property
 * A name, a colon, a space, then the value; only the name when the value is a variable of that name. A name that is
 * not an identifier is written as a text.
 */
export const Property = syntax({
  owner: "trame",
  standard: TypeScriptSyntax,
  section: "13.2.5 Object initializer (PropertyDefinition)",
  url: "https://tc39.es/ecma262/2024/#sec-object-initializer",
  language: TypeScript,
  fragment: inObject,
  constants: {
    identifier: { value: "^[\\p{ID_Start}_$][\\p{ID_Continue}$\\u200C\\u200D]*$", meaning: "An IdentifierName (§ 12.7): a name that needs no quotes" },
    unicode: { value: "u", meaning: "The flag that lets the pattern read Unicode properties" },
  },
  deps: { text: StringLiteral },
  write: ({ standard: { colon, space }, identifier, unicode, text }) => {
    const name = new RegExp(identifier, unicode)
    return (key: string, value: string) => (key === value && name.test(key) ? key : (name.test(key) ? key : text(key)) + colon + space + value)
  },
  examples: [
    { input: ["layout", "layout"], output: "layout" },
    { input: ["terminal", "nodeTerminal"], output: "terminal: nodeTerminal" },
    { input: ["content-type", "\"text/html\""], output: "\"content-type\": \"text/html\"" },
  ],
})

/**
 * Object
 * Its properties between braces, separated by commas, a space inside each brace; two braces for no property.
 */
export const ObjectLiteral = syntax({
  owner: "trame",
  standard: TypeScriptSyntax,
  section: "13.2.5 Object initializer",
  url: "https://tc39.es/ecma262/2024/#sec-object-initializer",
  language: TypeScript,
  fragment: expression,
  constants: {},
  deps: { counts: Counts },
  write: ({ standard: { openBrace, closeBrace, comma, space }, counts }) => (properties: readonly string[]) =>
    counts.any(properties) ? openBrace + space + properties.join(comma + space) + space + closeBrace : openBrace + closeBrace,
  examples: [
    { input: [["exposure: nodeCommandLine"]], output: "{ exposure: nodeCommandLine }" },
    { input: [["a", "b: c"]], output: "{ a, b: c }" },
    { input: [[]], output: "{}" },
  ],
})

/**
 * List on several lines
 * An opening bracket, then each element on a line of its own, indented and followed by a comma, then the closing
 * bracket on a line of its own.
 */
export const ArrayLiteral = syntax({
  owner: "trame",
  standard: TypeScriptSyntax,
  section: "13.2.4 Array initializer",
  url: "https://tc39.es/ecma262/2024/#sec-array-initializer",
  language: TypeScript,
  fragment: expression,
  constants: {
    open: { value: "[", meaning: "Opens the list" },
    close: { value: "]", meaning: "Closes the list" },
  },
  write: ({ standard: { endOfLine, indent, comma }, open, close }) => (elements: readonly string[]) =>
    [open, ...elements.map((e) => indent + e + comma), close].join(endOfLine),
  examples: [
    { input: [["a", "b"]], output: "[\n  a,\n  b,\n]" },
    { input: [[]], output: "[\n]" },
  ],
})

/**
 * Object on several lines
 * An opening brace, then each property on a line of its own, indented and followed by a comma, then the closing brace
 * on a line of its own.
 */
export const ObjectBlock = syntax({
  owner: "trame",
  standard: TypeScriptSyntax,
  section: "13.2.5 Object initializer",
  url: "https://tc39.es/ecma262/2024/#sec-object-initializer",
  language: TypeScript,
  fragment: expression,
  constants: {},
  write: ({ standard: { endOfLine, indent, comma, openBrace, closeBrace } }) => (properties: readonly string[]) =>
    [openBrace, ...properties.map((p) => indent + p + comma), closeBrace].join(endOfLine),
  examples: [
    { input: [["owner: \"trame\"", "version: \"g38\""]], output: "{\n  owner: \"trame\",\n  version: \"g38\",\n}" },
    { input: [[]], output: "{\n}" },
  ],
})

/**
 * Export
 * The keyword export, then a declaration: what the module gives to those who import it.
 */
export const ExportDeclaration = syntax({
  owner: "trame",
  standard: TypeScriptSyntax,
  section: "16.2.3 Exports",
  url: "https://tc39.es/ecma262/2024/#sec-exports",
  language: TypeScript,
  constants: {
    keyword: { value: "export", meaning: "Makes a declaration part of what the module gives" },
  },
  write: ({ standard: { space }, keyword }) => (declaration: string) => keyword + space + declaration,
  examples: [{ input: ["const G38 = 1"], output: "export const G38 = 1" }],
})

/**
 * Documentation comment
 * The opening of a documentation comment on its line, then each line of the text after a space, an asterisk and a
 * space, then the end of the comment after a space: the comment Trame reads a node's title and description from.
 */
export const DocBlock = syntax({
  owner: "trame",
  standard: TypeScriptSyntax,
  section: "12.4 Comments (MultiLineComment), as JSDoc writes them",
  url: "https://tc39.es/ecma262/2024/#sec-comments",
  language: TypeScript,
  constants: {
    star: { value: "*", meaning: "Begins each line inside a documentation comment" },
  },
  write: ({ standard: { endOfLine, space, docComment, commentEnd }, star }) => (lines: readonly string[]) =>
    [docComment, ...lines.map((l) => space + star + space + l), space + commentEnd].join(endOfLine),
  examples: [{ input: [["Generation 38"]], output: "/**\n * Generation 38\n */" }],
})

/**
 * Title of a module
 * A documentation comment on one line, at the very start of a module of the graph: the title its documents take.
 */
export const ModuleTitle = syntax({
  owner: "trame",
  standard: TypeScriptSyntax,
  section: "12.4 Comments (MultiLineComment), as JSDoc writes them",
  url: "https://tc39.es/ecma262/2024/#sec-comments",
  language: TypeScript,
  constants: {},
  write: ({ standard: { space, docComment, commentEnd } }) => (title: string) => docComment + space + title + space + commentEnd,
  examples: [{ input: ["Trame · Releases"], output: "/** Trame · Releases */" }],
})

/**
 * Constant
 * The keyword const, the name, an equals sign, then the value.
 */
export const ConstDeclaration = syntax({
  owner: "trame",
  standard: TypeScriptSyntax,
  section: "14.3.1 Let and const declarations",
  url: "https://tc39.es/ecma262/2024/#sec-let-and-const-declarations",
  language: TypeScript,
  constants: {
    keyword: { value: "const", meaning: "Declares a name whose value does not change" },
  },
  write: ({ standard: { space, equals }, keyword }) => (name: string, value: string) => keyword + space + name + space + equals + space + value,
  examples: [{ input: ["severityOrder", "frozen.value(SeverityOrder)"], output: "const severityOrder = frozen.value(SeverityOrder)" }],
})

/**
 * Import of names
 * The keyword import, the names between braces, the keyword from, then the module as a text.
 */
export const NamedImport = syntax({
  owner: "trame",
  standard: TypeScriptSyntax,
  section: "16.2.2 Imports (NamedImports)",
  url: "https://tc39.es/ecma262/2024/#sec-imports",
  language: TypeScript,
  constants: {},
  deps: { text: StringLiteral },
  write: ({ standard: { importKeyword, fromKeyword, openBrace, closeBrace, comma, space }, text }) => (names: readonly string[], module: string) =>
    importKeyword + space + openBrace + space + names.join(comma + space) + space + closeBrace + space + fromKeyword + space + text(module),
  examples: [{ input: [["Positions", "References"], "../../src/engine.ts"], output: "import { Positions, References } from \"../../src/engine.ts\"" }],
})

/**
 * Default import
 * The keyword import, a name for what the module exports by default, the keyword from, then the module as a text.
 */
export const DefaultImport = syntax({
  owner: "trame",
  standard: TypeScriptSyntax,
  section: "16.2.2 Imports (ImportedDefaultBinding)",
  url: "https://tc39.es/ecma262/2024/#sec-imports",
  language: TypeScript,
  constants: {},
  deps: { text: StringLiteral },
  write: ({ standard: { importKeyword, fromKeyword, space }, text }) => (name: string, module: string) =>
    importKeyword + space + name + space + fromKeyword + space + text(module),
  examples: [{ input: ["body_counts", "../../std/src/code/algebra/counts.ts"], output: "import body_counts from \"../../std/src/code/algebra/counts.ts\"" }],
})

/**
 * Type assertion
 * An expression, the keyword as, then the type the program asserts it has.
 */
export const AsExpression = syntax({
  owner: "trame",
  standard: TypeScriptSyntax,
  section: "TypeScript: type assertions",
  url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions",
  language: TypeScript,
  fragment: expression,
  constants: {
    keyword: { value: "as", meaning: "Asserts the type of what precedes it" },
  },
  write: ({ standard: { space }, keyword }) => (expression: string, type: string) => expression + space + keyword + space + type,
  examples: [{ input: ["(start())", "{ code?: number } | undefined"], output: "(start()) as { code?: number } | undefined" }],
})

/**
 * Optional property of a type
 * A name, a question mark, a colon, a space, then the type: the property may be missing.
 */
export const OptionalPropertySignature = syntax({
  owner: "trame",
  standard: TypeScriptSyntax,
  section: "TypeScript: optional properties",
  url: "https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties",
  language: TypeScript,
  fragment: { before: "type T = { ", after: " }" },
  constants: {
    question: { value: "?", meaning: "Marks a property that may be missing" },
  },
  write: ({ standard: { colon, space }, question }) => (name: string, type: string) => name + question + colon + space + type,
  examples: [{ input: ["code", "number"], output: "code?: number" }],
})

/**
 * Object type
 * Its properties between braces, separated by semicolons, a space inside each brace.
 */
export const ObjectType = syntax({
  owner: "trame",
  standard: TypeScriptSyntax,
  section: "TypeScript: object types",
  url: "https://www.typescriptlang.org/docs/handbook/2/objects.html",
  language: TypeScript,
  fragment: asType,
  constants: {
    separator: { value: ";", meaning: "Separates the properties of an object type" },
  },
  write: ({ standard: { openBrace, closeBrace, space }, separator }) => (properties: readonly string[]) =>
    openBrace + space + properties.join(separator + space) + space + closeBrace,
  examples: [{ input: [["address?: string", "code?: number"]], output: "{ address?: string; code?: number }" }],
})

/**
 * Union type
 * Its types, separated by a vertical bar between spaces: a value of any of them.
 */
export const UnionType = syntax({
  owner: "trame",
  standard: TypeScriptSyntax,
  section: "TypeScript: union types",
  url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types",
  language: TypeScript,
  fragment: asType,
  constants: {
    bar: { value: "|", meaning: "Separates the types of a union" },
  },
  write: ({ standard: { space }, bar }) => (types: readonly string[]) => types.join(space + bar + space),
  examples: [{ input: [["{ code?: number }", "undefined"]], output: "{ code?: number } | undefined" }],
})

/**
 * Condition
 * The keyword if, the condition in parentheses, then the statement it guards.
 */
export const IfStatement = syntax({
  owner: "trame",
  standard: TypeScriptSyntax,
  section: "14.6 The if statement",
  url: "https://tc39.es/ecma262/2024/#sec-if-statement",
  language: TypeScript,
  constants: {
    keyword: { value: "if", meaning: "Runs a statement only when its condition holds" },
  },
  write: ({ standard: { space, openParenthesis, closeParenthesis }, keyword }) => (condition: string, statement: string) =>
    keyword + space + openParenthesis + condition + closeParenthesis + space + statement,
  examples: [{ input: ["started?.address", "console.log(started.address)"], output: "if (started?.address) console.log(started.address)" }],
})

/**
 * Strict inequality
 * Two values, and between them the operator that holds when they differ, without conversion.
 */
export const StrictInequality = syntax({
  owner: "trame",
  standard: TypeScriptSyntax,
  section: "13.11 Equality operators",
  url: "https://tc39.es/ecma262/2024/#sec-equality-operators",
  language: TypeScript,
  fragment: expression,
  constants: {
    operator: { value: "!==", meaning: "Holds when the two values differ, without converting them" },
  },
  write: ({ standard: { space }, operator }) => (left: string, right: string) => left + space + operator + space + right,
  examples: [{ input: ["started?.code", "undefined"], output: "started?.code !== undefined" }],
})

/**
 * Assignment
 * A place, an equals sign, then the value it receives.
 */
export const Assignment = syntax({
  owner: "trame",
  standard: TypeScriptSyntax,
  section: "13.15 Assignment operators",
  url: "https://tc39.es/ecma262/2024/#sec-assignment-operators",
  language: TypeScript,
  constants: {},
  write: ({ standard: { space, equals } }) => (place: string, value: string) => place + space + equals + space + value,
  examples: [{ input: ["process.exitCode", "started.code"], output: "process.exitCode = started.code" }],
})

/**
 * Names of a program
 * How the TypeScript writer names what a program declares: the result of the start, the import of a body (the prefix,
 * then the name of the step). A step whose name is taken takes its module as a prefix, as in the plan (StepNames).
 */
export const ProgramNames = decision<{ result: string; bodyPrefix: string }>({
  owner: "trame",
  value: { result: "started", bodyPrefix: "body_" },
})

/**
 * TypeScript writer
 * Writes the program of an assembled component, always frozen, with the syntax elements above: the build order, the
 * implementation chosen for each port and the values of the graph are written in it; it imports only the bodies, the
 * prelude's tooling and the declarations it must read. What it writes is read back before it is written (Drivers).
 */
export const TypeScriptWriter = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: {
    language: TypeScript, syntax: TypeScriptSyntax, frozen: FrozenApi, node: NodeProcessApi, specifiers: NodeModuleSpecifiers, names: ProgramNames, stepNames: StepNames, references: ReferenceSyntax,
    comment: LineComment, text: StringLiteral, member: MemberAccess, optional: OptionalAccess, call: Call, wait: Await, group: Parenthesized,
    property: Property, object: ObjectLiteral, array: ArrayLiteral, constant: ConstDeclaration, namedImport: NamedImport, defaultImport: DefaultImport,
    assertion: AsExpression, optionalProperty: OptionalPropertySignature, objectType: ObjectType, union: UnionType, condition: IfStatement,
    differs: StrictInequality, assignment: Assignment,
    paths: Paths, prelude: Prelude, reservedWords: EcmaScriptReservedWords, sequences: Sequences, texts: Texts, dates: Dates, messages: DriverMessages,
  },
  body: code.file<typeof import("./code/typescript/writer").default>("./code/typescript/writer.ts"),
})
