/** Trame · Syntax */

import { code, type LiteralKind, type Severity } from "../trame/kernel"
import { standard } from "../kinds/standard"
import { decision } from "../kinds/decision"
import { catalog } from "../kinds/catalog"
import { fn } from "../kinds/function"
import { adr } from "../kinds/adr"
import { ExecutableSpecification, SingleSource } from "./product"
import { SyntaxTrees, FileReading } from "./architecture"
import { TreeSitterApi, GnuPositions, EcmaScript, TextFile, NodeEncodings, NodeModuleSpecifiers } from "./standards"
import { PreludeApi } from "./conventions"
import { Counts, Sequences, Texts } from "./algebra"
import { Language, DriverMessages } from "./messages"
import type { Shortening } from "./code/algebra/texts"

// What is true of every language Trame reads. A language node (module languages) declares its grammar and its queries;
// the queries name what they catch with the captures below; the reader knows these names, and no node type of any
// grammar. Reading is generic: the language declares, the reader reads.

/** A literal found in a body, as the catalogue shows it. */
export interface LiteralRead {
  line: number
  /** As written, shortened; a template shows each substitution as an ellipsis. */
  value: string
  kind: LiteralKind
  category: string
  /** The line it appears on, trimmed and shortened. */
  context: string
  /** What it does, from its place in the code: index, comparison, argument of a call… */
  role: string
  /** Its value: a number, or the text its parts and escape sequences make. */
  raw: string | number
}

/** A module a body imports. */
export interface ImportRead {
  module: string
  typeOnly: boolean
  /** Its path is computed: `module` is the expression, as written. */
  computed: boolean
  line: number
}

/** What may reach outside a body, and that nothing in the body defines. */
export interface GlobalRead {
  name: string
  line: number
}

/** A name a body declares: a parameter, an output. */
export interface NameRead {
  name: string
  line: number
}

/** What the reader finds in a body. */
export interface Reading {
  literals: LiteralRead[]
  imports: ImportRead[]
  globals: GlobalRead[]
  /** It gives something (an entry). */
  entry: boolean
  /** The parameters it declares itself (Terraform's variables). */
  parameters: NameRead[]
  /** What it gives back by name (Terraform's outputs). */
  outputs: NameRead[]
  /** The places where the text does not follow the language's grammar. */
  errors: { line: number; column: number }[]
}

/** A body to read: a file, or an inline property of a declaration (the file of the declaration, its line, the field). */
export interface BodySource {
  key: string
  file: string
  inline?: { line: number; field: string }
}

/** What a check finds wrong in a body. */
export interface DriverIssue {
  severity: typeof Severity.error | typeof Severity.warning
  what: string
}

/** What a driver knows of the node of the body it checks. */
export interface CheckContext {
  /** The kind of the node may touch the platform. */
  ambient: boolean
  /** The names of the dependencies declared for this body. */
  deps: string[]
  root: string
}

/** A pattern, as a regular expression's source and flags. */
export interface Pattern {
  source: string
  flags?: string
}

/** When a literal falls into a category: its kinds, patterns its text matches (all of them), a pattern of its line. */
export interface CategoryRule {
  kinds?: LiteralKind[]
  text?: Pattern[]
  near?: Pattern
}

/** The name of a category of literals. */
type Category = string

/** What is shown of a literal: its value, and the line it appears on. */
type Shown = "value" | "context"

/** The label of a role; the argument of a call names the function called. */
type RoleLabel = (callee?: string) => string

/**
 * Captures
 * The names a language's queries give to what they catch, each with what the reader does with it: the contract between
 * a language node and the reader. A capture whose name is not here is ignored (tree-sitter's convention: those that
 * start with _ only serve a predicate).
 */
export const Captures = standard({
  owner: "trame",
  source: "Trame, the contract between the language nodes and the syntax reader; local.definition follows tree-sitter's locals convention",
  url: "https://tree-sitter.github.io/tree-sitter/4-code-navigation.html",
  constants: {
    literalText: { value: "literal.text", meaning: "A text written as a value. Its value is its parts, escape sequences decoded" },
    literalNumber: { value: "literal.number", meaning: "A number, its minus sign included: -1 is one literal" },
    literalRegex: { value: "literal.regex", meaning: "A regular expression" },
    literalTemplate: { value: "literal.template", meaning: "A text with substitutions; without any, it is a text. What it substitutes is read on its own" },
    literalKey: { value: "literal.key", meaning: "A key that is not an identifier: a value written where a name goes. No name capture removes it" },
    literalPart: { value: "literal.part", meaning: "A fixed part of a text or a template, as written" },
    literalEscape: { value: "literal.escape", meaning: "An escape sequence of a text or a template, decoded as the language's escapes say" },
    literalSubstitution: { value: "literal.substitution", meaning: "What a template substitutes: shown as an ellipsis, read as code" },
    name: { value: "name", meaning: "Written like a value but names something (an identifier key, a module, a type): no literal, import or global inside it counts" },
    importValue: { value: "import.value", meaning: "A module imported as a value. It wins over import.type for the same module" },
    importType: { value: "import.type", meaning: "A module imported: for its types only, unless import.value names it too" },
    importComputed: { value: "import.computed", meaning: "An import whose path is computed: no reading can tell what it loads" },
    localDefinition: { value: "local.definition", meaning: "A name the body defines (tree-sitter's locals convention). It hides a global of the same name" },
    global: { value: "global", meaning: "What may reach outside the body: an identifier, a member, a construction" },
    globalName: { value: "global.name", meaning: "In the match of a global, the name a local definition would hide (Date, in Date.now)" },
    entry: { value: "entry", meaning: "What the body gives: its default export" },
    declaration: { value: "declaration", meaning: "A declaration of a module: an inline body is looked for in the one on its line" },
    body: { value: "body", meaning: "In a declaration, the value of a property: the body, when the property is the body's field" },
    bodyName: { value: "body.name", meaning: "In the match of a body, the name of its property" },
    rolePrefix: { value: "role.", meaning: "Opens the name of a role capture: role.index catches the place of an index. What follows is a role of LiteralRoles" },
    callee: { value: "callee", meaning: "In the match of a role.argument, the name of the function called" },
    parameter: { value: "parameter", meaning: "A parameter the body declares itself (a Terraform variable): the graph must pass it, and only it" },
    output: { value: "output", meaning: "What the body gives back by name (a Terraform output)" },
  },
})

/**
 * Roles of a literal
 * What a literal does, from its place in the code, and how the catalogue says it. A language catches each place with a
 * capture named role.<role>. The role of a literal is the smallest role capture that holds it; between two of the same
 * size, the first role here. A literal that no role capture holds is "other".
 */
export const LiteralRoles = catalog({
  owner: "trame",
  language: Language,
  messages: () => ({
    /** The position in a list or a text. */
    index: () => "index",
    /** A text joined to another with + (before arithmetic: a text added is joined). */
    concatenation: () => "concatenation",
    /** An operand of + - * / % **, or of += and -=. */
    arithmetic: () => "arithmetic",
    /** An operand of & | ^ << >> >>>. */
    bitwise: () => "bitwise arithmetic",
    /** An operand of a comparison: === !== == != < <= > >=. */
    comparison: () => "comparison",
    /** What ?? and || fall back on, a parameter's default value. */
    default: () => "default value",
    /** An operand of &&, the condition of a choice. */
    condition: () => "condition",
    /** The value assigned with =. */
    assignment: () => "assignment",
    /** One of the two branches of a choice (a ? b : c). */
    branch: () => "branch of a condition",
    /** An argument of a call, or of a construction (new). */
    argument: (callee?: string) => `argument of ${callee ?? "?"}`,
    /** The value a variable starts with. */
    initial: () => "initial value",
    /** The value of a property of an object. */
    property: () => "property value",
    /** What a function returns. */
    returned: () => "returned value",
    /** An element of a list. */
    element: () => "element of a list",
    /** A case of a switch. */
    case: () => "case of a switch",
    /** A substitution of a template. */
    template: () => "in a template",
    /** A statement on its own, or a spread element. */
    statement: () => "statement",
    /** The value of an attribute of a markup element. */
    attribute: () => "attribute value",
    /** The content of a markup element: its text. */
    content: () => "content of an element",
    /** Any other place. */
    other: () => "other",
  }) satisfies Record<string, RoleLabel>,
})

/**
 * Categories of literals
 * How the catalogue sorts the literals it lists: the first category whose rule a literal meets is its own. A hint to
 * sort the catalogue, not a truth about the value. A rule may name the kinds of literal it takes, patterns its text must
 * all match (a number's text is its value), and a pattern of the line it appears on.
 */
export const LiteralCategories = decision<Record<Category, CategoryRule>>({
  owner: "trame",
  value: {
    "regular expression": { kinds: ["regex"] },
    "HTTP status": { kinds: ["number"], text: [{ source: "^[1-5]\\d\\d$" }], near: { source: "writeHead|status|code", flags: "i" } },
    "number": { kinds: ["number"] },
    "colour": { text: [{ source: "#[0-9a-fA-F]{3,8}\\b|rgba?\\(" }] },
    "media type": { text: [{ source: "^[a-z]+\\/[a-z0-9.+-]+(;|$)", flags: "i" }] },
    "address": { text: [{ source: "^https?:\\/\\/" }] },
    "file": { text: [{ source: "\\.(json|md|ts|tf|lock|html|css|db)$|^\\.{0,2}\\/" }] },
    "markup": { text: [{ source: "<[a-z]+[\\s>]", flags: "i" }] },
    "separator": { text: [{ source: "^[\\s\\p{P}\\p{S}]*$", flags: "u" }] },
    "sentence": { text: [{ source: "\\p{L}[\\s\\p{L}'\\u2019,]*\\s+\\p{L}", flags: "u" }, { source: "[a-z\\u00e0-\\u00ff]", flags: "i" }] },
    "identifier": { text: [{ source: "^[\\p{L}\\d_.:-]+$", flags: "u" }] },
    "template": { kinds: ["template"] },
    "text": {},
  },
})

/**
 * How a literal is shown
 * The catalogue shows a literal as written, and the line it appears on, cut when they are too long.
 */
export const LiteralDisplay = decision<Record<Shown, Shortening>>({
  owner: "trame",
  value: {
    value: { longest: 70, kept: 67 },
    context: { longest: 110, kept: 107 },
  },
})

/**
 * Syntax reader
 * Reads a body with the grammar and the queries of its language: the literals, the imports, what may reach outside,
 * whether it gives something, and where it does not follow the grammar. It parses each file once; an inline body is
 * read in the property of its declaration. It knows the captures, and nothing of any grammar.
 */
export const SyntaxReader = fn({
  owner: "trame",
  serves: [ExecutableSpecification, SingleSource],
  deps: {
    trees: SyntaxTrees, captures: Captures, roles: LiteralRoles, categories: LiteralCategories, display: LiteralDisplay,
    treeSitter: TreeSitterApi, gnu: GnuPositions, ecma: EcmaScript, textFile: TextFile, encodings: NodeEncodings, reading: FileReading,
    counts: Counts, sequences: Sequences, texts: Texts,
  },
  body: code.file<typeof import("./code/syntax/reader").default>("./code/syntax/reader.ts"),
})

/**
 * Checks of a body
 * What a body may touch, read on its reading, the same for every language: the prelude's public API only as a value
 * import; no other module of the project (a hidden dependency: declare it as a parameter); the platform (a package, a
 * built-in module, a computed load, a global that reaches outside) only for the kinds that may touch it. A file body
 * exports what it gives; a body follows the grammar of its language. A refused body is never run.
 */
export const BodyChecks = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { prelude: PreludeApi, specifiers: NodeModuleSpecifiers, gnu: GnuPositions, sequences: Sequences, messages: DriverMessages },
  body: code.file<typeof import("./code/syntax/checks").default>("./code/syntax/checks.ts"),
})

/**
 * Every language is read alike, with tree-sitter
 * A language is a node of the graph: its grammar, its queries, the escapes of its texts, examples of what must be found.
 * One reader reads every body with it, and knows the captures of the queries, not the node types of any grammar.
 */
export const ReadLanguagesAlike = adr({
  owner: "trame",
  context: "Trame reads bodies to check them and to find their literals, in every language a product's bodies are written in: TypeScript and Terraform today.",
  consequences: "The checks of a body are the same for every language; the queries of a language are checked against what tree-sitter evaluates, and its examples are played at every build; the port SyntaxTrees is the only place that touches tree-sitter, and no tree crosses it.",
  rejected: {
    "The TypeScript compiler API": "it reads one language, and each other one would need a reader of its own",
    "Regular expressions": "the old Terraform driver: blind to texts, comments and nesting",
  },
  serves: [ExecutableSpecification],
  appliedBy: [SyntaxReader, BodyChecks, SyntaxTrees],
})
