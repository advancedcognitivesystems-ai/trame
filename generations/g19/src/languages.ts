/** Trame · Languages */

import { language } from "../kinds/language"
import { vocabulary } from "../kinds/vocabulary"
import { EcmaScript, TreeSitterQueries } from "./standards"
import { SyntaxReader } from "./syntax"

// The languages bodies are written in, one section each: the grammar, the queries that say what Trame sees in the code,
// the escape sequences of its texts, and examples of what the reader must find. The captures the queries use are those
// of syntax.Captures; the reader is the same for all.

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
  standard: EcmaScript,
  queryLanguage: TreeSitterQueries,
  reader: SyntaxReader,
  globals: WorldGlobals,
  grammar: { package: "tree-sitter-typescript", version: "0.23.2", module: "tree-sitter-typescript/tree-sitter-typescript.wasm" },
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
    numeric: [{ prefix: "u{", radix: 16, close: "}" }, { prefix: "u", radix: 16 }, { prefix: "x", radix: 16 }],
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
  ],
})
