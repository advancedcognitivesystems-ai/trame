/** Trame · Terraform */

import { HclGrammar } from "./packages"
import { code, refines } from "../trame/kernel"
import { language } from "../kinds/language"
import { standard } from "../kinds/standard"
import { syntax } from "../kinds/syntax"
import { fn } from "../kinds/function"
import { ExecutableSpecification } from "./product"
import { TreeSitterQueries, TextFile, EcmaScript, NodeModuleSpecifiers } from "./standards"
import { Layout } from "./conventions"
import { Paths, Prelude } from "./architecture"
import { Counts, Sequences, Texts, ValueTypes } from "./algebra"
import { Dates, DriverMessages } from "./messages"
import { SyntaxReader } from "./syntax"

// Terraform, the language of the infrastructure an implementation provisions: how Trame reads a module (its variables
// are the parameters the graph passes, its outputs what it gives back), and what Trame writes (the call of each module,
// with the values of the graph). A module is a directory of files written in HCL, Terraform's syntax.

/**
 * HCL
 * The native syntax of the HashiCorp Configuration Language, which Terraform files are written in: blocks, attributes,
 * expressions, templates. The marks that several constructs share are here, with the layout of the files Trame writes,
 * aligned as terraform fmt aligns them.
 */
export const HclSyntax = standard({
  owner: "trame",
  source: "HCL Native Syntax Specification (hashicorp/hcl v2, hclsyntax/spec.md); Terraform: style conventions (terraform fmt)",
  url: "https://github.com/hashicorp/hcl/blob/main/hclsyntax/spec.md",
  constants: {
    endOfLine: refines(TextFile, "endOfLine", "Ends each line of a file"),
    space: { value: " ", meaning: "Separates two tokens where the layout wants it" },
    indent: { value: "  ", meaning: "Begins each line of a block's body: two spaces" },
    equals: { value: "=", meaning: "Gives an attribute, or an element of an object, its value" },
    comma: { value: ",", meaning: "Separates the elements of a tuple or of an object written on one line" },
    openBrace: { value: "{", meaning: "Opens a block's body, an object" },
    closeBrace: { value: "}", meaning: "Closes what { opened" },
    quote: { value: "\"", meaning: "Opens and closes a quoted template, a block's label" },
  },
})

/**
 * Terraform modules
 * How Terraform lays out a module, and calls one: the file that holds a module's main content, the meta-argument that
 * says where the called module is.
 */
export const TerraformModules = standard({
  owner: "trame",
  source: "Terraform: Standard Module Structure; Module Blocks (the source meta-argument, local paths)",
  url: "https://developer.hashicorp.com/terraform/language/modules/develop/structure",
  constants: {
    main: { value: "main.tf", meaning: "The file of a module's main content: a module named by its directory is read there" },
    module: { value: "module", meaning: "The type of the block that calls a module" },
    source: { value: "source", meaning: "The meta-argument of a module block that says where the module is: a local path starts with ./ or ../" },
  },
})

/**
 * Terraform
 * The language of the modules an implementation provisions, read with tree-sitter's HCL grammar in its Terraform
 * variant: the variables a module declares (its parameters), its outputs, the values written in it. A module is named
 * "hcl" in the graph (code.file(path, "hcl")).
 */
export const Terraform = language({
  owner: "trame",
  packages: [HclGrammar],
  tag: "hcl",
  standard: HclSyntax,
  queryLanguage: TreeSitterQueries,
  reader: SyntaxReader,
  grammar: { package: "@tree-sitter-grammars/tree-sitter-hcl", version: "1.2.0", module: "@tree-sitter-grammars/tree-sitter-hcl/tree-sitter-terraform.wasm" },
  extensions: [".tf"],
  queries: {
    values: {
      value: String.raw`
(unary_operation "-" (literal_value (numeric_lit))) @literal.number
(numeric_lit) @literal.number
(string_lit) @literal.text
(quoted_template) @literal.template`,
      meaning: "The values written in a module: a negative number is the minus and its number",
    },
    parts: {
      value: String.raw`
(string_lit (template_literal) @literal.part)
(quoted_template (template_literal) @literal.part)
(template_interpolation (expression) @literal.substitution)`,
      meaning: "What a text is made of: its fixed parts (escape sequences included, the grammar does not catch them apart), what a template substitutes",
    },
    keys: {
      value: String.raw`
((object_elem key: (expression (literal_value (string_lit) @literal.key))) (#not-match? @literal.key "^\"[A-Za-z_][A-Za-z0-9_-]*\"$"))`,
      meaning: "A key of an object written as a text that is not an identifier (an identifier may hold hyphens): a value disguised as a name",
    },
    names: {
      value: String.raw`
(block (string_lit) @name)
(object_elem key: (expression (literal_value (string_lit) @name)))`,
      meaning: "What is written like a value but names something: the labels of a block, a key of an object",
    },
    declarations: {
      value: String.raw`
((block (identifier) @_type (string_lit (template_literal) @parameter)) (#eq? @_type "variable"))
((block (identifier) @_type (string_lit (template_literal) @output)) (#eq? @_type "output"))`,
      meaning: "What a module declares: its variables, the parameters the graph passes; its outputs, what it gives back",
    },
    roles: {
      value: String.raw`
(attribute (expression (literal_value) @role.initial))
(attribute (expression (template_expr) @role.initial))
(object_elem val: (expression) @role.property)
(tuple (expression) @role.element)
(template_interpolation (expression) @role.template)
(function_call (identifier) @callee (function_arguments (expression) @role.argument))`,
      meaning: "The places that give a literal its role (syntax.LiteralRoles): the value of an attribute, of an object's element, an element of a tuple, an argument",
    },
  },
  escapes: {
    mark: "\\",
    single: { n: "\n", r: "\r", t: "\t", "\"": "\"", "\\": "\\" },
    numeric: [{ prefix: "U", radix: 16, digits: 8 }, { prefix: "u", radix: 16, digits: 4 }],
    literal: { "$${": "${", "%%{": "%{" },
  },
  examples: [
    { code: "variable \"name\" {\n  type = string\n}\n\noutput \"url\" {\n  value = \"x\"\n}\n", parameters: ["name"], outputs: ["url"], literals: ["\"x\""], roles: ["initial value"] },
    { code: "size = { cpu = 2, \"memory gb\" = -4.5, \"ok-too\" = true }\n", literals: ["2", "\"memory gb\"", "-4.5"], values: [2, "memory gb", -4.5], roles: ["property value", "other", "property value"] },
    { code: "url = \"postgres://${var.name}:5432 $${kept}\"\n", literals: ["\"postgres://${…}:5432 $${kept}\""], values: ["postgres://…:5432 ${kept}"] },
    { code: "list = [\"a\\n\\u00e9\", 3]\n", values: ["a\né", 3], roles: ["element of a list", "element of a list"] },
  ],
})

// What Trame writes -------------------------------------------------------------------------

/**
 * Comment
 * A number sign, a space, then the text, to the end of the line.
 */
export const HclComment = syntax({
  owner: "trame",
  standard: HclSyntax,
  section: "Comments and Whitespace",
  url: "https://github.com/hashicorp/hcl/blob/main/hclsyntax/spec.md#comments-and-whitespace",
  language: Terraform,
  constants: {
    opener: { value: "#", meaning: "Opens a comment that runs to the end of the line" },
  },
  write: ({ standard: { space }, opener }) => (text: string) => opener + space + text,
  examples: [{ input: ["infra.DatabaseName"], output: "# infra.DatabaseName" }],
})

/**
 * Text
 * A quoted template with no substitution: the text between double quotes, written with the escape sequences the
 * Terraform reader decodes (a quote, a backslash, a line feed…, any other control character in \u form), and with $${
 * and %%{ where the text holds ${ and %{, so that nothing in it is read as a substitution.
 */
export const HclString = syntax({
  owner: "trame",
  standard: HclSyntax,
  section: "Template Expressions (quoted templates, escape sequences)",
  url: "https://github.com/hashicorp/hcl/blob/main/hclsyntax/spec.md#template-expressions",
  language: Terraform,
  fragment: { before: "x = ", after: "" },
  constants: {
    control: { value: 32, meaning: "The characters below this code are control characters: written as escape sequences" },
    fill: { value: "0", meaning: "Fills a numeric escape sequence up to its number of digits" },
  },
  deps: { terraform: Terraform, ecma: EcmaScript, counts: Counts, sequences: Sequences, texts: Texts },
  write: ({ standard: { quote }, control, fill, terraform: { escapes }, ecma, counts, sequences, texts }) => {
    // The sequence of each character that has a name (\n, \", \\…), and the texts a sequence stands for ($${ for ${).
    const named = new Map(Object.entries(escapes.single).map(([written, char]) => [char, escapes.mark + written]))
    const literal = Object.entries(escapes.literal ?? {})
    // Any other control character: the numeric sequence with the fewest digits (\u0001).
    const numeric = sequences.head(escapes.numeric.filter((n) => n.digits !== undefined).sort((a, b) => (a.digits ?? counts.zero) - (b.digits ?? counts.zero)))
    const coded = (code: number, char: string) =>
      numeric ? escapes.mark + numeric.prefix + code.toString(numeric.radix).padStart(numeric.digits ?? counts.zero, fill) : char
    return (text: string) => {
      const out: string[] = []
      let rest = text
      while (counts.any(rest)) {
        const sequence = literal.find(([, stands]) => rest.startsWith(stands))
        if (sequence) {
          const [written, stands] = sequence
          out.push(written)
          rest = rest.slice(stands.length)
          continue
        }
        const code = rest.codePointAt(ecma.firstIndex) ?? counts.zero
        const char = String.fromCodePoint(code)
        out.push(named.get(char) ?? (code < control ? coded(code, char) : char))
        rest = rest.slice(char.length)
      }
      return quote + texts.concat(out) + quote
    }
  },
  examples: [
    { input: ["reservations"], output: "\"reservations\"" },
    { input: ["a \"b\"\n${c} %{d}"], output: "\"a \\\"b\\\"\\n$${c} %%{d}\"" },
  ],
})

/**
 * Value
 * A value of the graph, written in HCL: a text, a number, true or false, a tuple between brackets, an object between
 * braces (a key that is not an identifier is written as a text), null for nothing.
 */
export const HclValue = syntax({
  owner: "trame",
  standard: HclSyntax,
  section: "Expressions (literal values, collection values)",
  url: "https://github.com/hashicorp/hcl/blob/main/hclsyntax/spec.md#collection-values",
  language: Terraform,
  fragment: { before: "x = ", after: "" },
  constants: {
    openBracket: { value: "[", meaning: "Opens a tuple" },
    closeBracket: { value: "]", meaning: "Closes a tuple" },
    nothing: { value: "null", meaning: "The value of what is not there" },
    identifier: { value: "^[\\p{ID_Start}_][\\p{ID_Continue}_-]*$", meaning: "An identifier (ID_Start, then ID_Continue or a hyphen): a key that needs no quotes" },
    unicode: { value: "u", meaning: "The flag that lets the pattern read Unicode properties" },
  },
  deps: { text: HclString, values: ValueTypes, counts: Counts },
  write: ({ standard: { space, equals, comma, openBrace, closeBrace }, openBracket, closeBracket, nothing, identifier, unicode, text, values, counts }) => {
    const name = new RegExp(identifier, unicode)
    const key = (k: string) => (name.test(k) ? k : text(k))
    const value = (v: unknown): string =>
      values.isText(v) ? text(v)
        : values.isNumber(v) || values.isBoolean(v) ? String(v)
          : Array.isArray(v) ? openBracket + v.map(value).join(comma + space) + closeBracket
            : values.isObject(v) ? object(Object.entries(v))
              : nothing
    const object = (entries: [string, unknown][]) => counts.any(entries)
      ? openBrace + space + entries.map(([k, x]) => key(k) + space + equals + space + value(x)).join(comma + space) + space + closeBrace
      : openBrace + closeBrace
    return value
  },
  examples: [
    { input: ["reservations"], output: "\"reservations\"" },
    { input: [{ cpu: 2, memory_gb: 4 }], output: "{ cpu = 2, memory_gb = 4 }" },
    { input: [[1, "a", -2.5]], output: "[1, \"a\", -2.5]" },
    { input: [{ "content type": true, "memory-gb": 4, empty: {} }], output: "{ \"content type\" = true, memory-gb = 4, empty = {} }" },
    { input: [null], output: "null" },
  ],
})

/**
 * Attribute
 * A name, padded to the width of the longest name of its block, an equals sign between spaces, then the value: the
 * equals signs of a block line up, as terraform fmt lines them up.
 */
export const HclAttribute = syntax({
  owner: "trame",
  standard: HclSyntax,
  section: "Structural Elements (attribute definitions); Terraform style conventions (aligned equals signs)",
  url: "https://github.com/hashicorp/hcl/blob/main/hclsyntax/spec.md#attribute-definitions",
  language: Terraform,
  constants: {},
  write: ({ standard: { space, equals } }) => (name: string, value: string, width: number) => name.padEnd(width) + space + equals + space + value,
  examples: [
    { input: ["name", "\"reservations\"", 21], output: "name                  = \"reservations\"" },
    { input: ["source", "\"./x\"", 3], output: "source = \"./x\"" },
  ],
})

/**
 * Module call
 * The block that calls a module: its type, its label (the name of the node in snake_case, Terraform's convention for
 * names), then its attributes, one per line, indented, between braces.
 */
export const ModuleBlock = syntax({
  owner: "trame",
  standard: HclSyntax,
  section: "Structural Elements (blocks); Terraform: Module Blocks",
  url: "https://developer.hashicorp.com/terraform/language/modules/syntax",
  language: Terraform,
  constants: {
    joint: { value: "_", meaning: "Joins the words of a label (snake_case)" },
  },
  deps: { modules: TerraformModules, text: HclString, texts: Texts },
  write: ({ standard: { space, indent, endOfLine, openBrace, closeBrace }, joint, modules, text, texts }) => (name: string, attributes: readonly string[]) =>
    [modules.module + space + text(texts.lowerWords(name, joint)) + space + openBrace, ...attributes.map((a) => indent + a), closeBrace].join(endOfLine),
  examples: [
    { input: ["PostgresDatabase", ["source = \"./x\""]], output: "module \"postgres_database\" {\n  source = \"./x\"\n}" },
    { input: ["Cache2Db", []], output: "module \"cache2_db\" {\n}" },
  ],
})

/**
 * Terraform writer
 * Writes the infrastructure of the provisioned implementations of an assembly: the call of each module, with the
 * values of the graph and, beside each one, the node it comes from. What it writes is read back before it is written
 * (Drivers).
 */
export const TerraformWriter = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: {
    syntax: HclSyntax, modules: TerraformModules, layout: Layout, specifiers: NodeModuleSpecifiers,
    comment: HclComment, text: HclString, value: HclValue, attribute: HclAttribute, block: ModuleBlock,
    paths: Paths, prelude: Prelude, counts: Counts, sequences: Sequences, texts: Texts, dates: Dates, messages: DriverMessages,
  },
  body: code.file<typeof import("./code/terraform/writer").default>("./code/terraform/writer.ts"),
})
