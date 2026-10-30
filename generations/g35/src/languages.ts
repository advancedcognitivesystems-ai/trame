/** Trame · Languages */

import { code } from "../trame/kernel"
import { fn } from "../kinds/function"
import { adr } from "../kinds/adr"
import { ExecutableSpecification } from "./product"
import { GnuPositions } from "./standards"
import { ValueTypes } from "./algebra"
import { FileReading, ModuleLoader, Paths } from "./architecture"
import { DriverMessages } from "./messages"
import { SyntaxReader, BodyChecks } from "./syntax"
import { TypeScript, TypeScriptWriter } from "./typescript"
import { Terraform, TerraformModules, TerraformWriter } from "./terraform"
import { Page } from "./page"
import { CssStyleSheets } from "./html"

// Each language has its module (typescript, terraform, html): how Trame reads it, what Trame writes in it. Here, Drivers
// binds each language to the reader and the checks of a body, its writer and, for the languages that run, the module
// loader.

/**
 * Drivers
 * The driver of each language, for the compiler (check, literals), the wiring (load) and the assembly (write): the
 * syntax reader and the checks of a body for reading, the writer of the language for writing, the module loader for
 * running TypeScript. A Terraform module is named by its directory, and declares its parameters: each dependency the
 * graph passes must be one of them. A style sheet is read and checked, never run nor written. What a writer writes is
 * read back before it is written. The language of the graph is that of the bodies written inline in its declarations.
 */
export const Drivers = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: {
    reader: SyntaxReader, checks: BodyChecks, graph: TypeScript, sheets: CssStyleSheets, typeScriptWriter: TypeScriptWriter,
    terraform: Terraform, modules: TerraformModules, terraformWriter: TerraformWriter,
    loader: ModuleLoader, reading: FileReading, paths: Paths, values: ValueTypes, gnu: GnuPositions, messages: DriverMessages,
  },
  body: code.file<typeof import("./code/languages/drivers").default>("./code/languages/drivers.ts"),
})

/**
 * What a writer writes is read back before it is written
 * A program or a call of modules that Trame writes is read in its language: it must follow the grammar, and the values
 * written in it must come back, in their order. The page is read back too, in HTML, and its style in CSS: they must
 * follow the grammar.
 */
export const ReadBackWhatIsWritten = adr({
  owner: "trame",
  context: "A writer composes syntax elements whose examples are checked one by one; a program is more than its pieces, and a value badly escaped changes meaning silently.",
  consequences: "Each language has its module (how Trame reads it, what Trame writes in it); languages binds them in Drivers, which reads back every file a writer gives before it reaches the disk. The page reads back its style and itself before it is given; a browser forgives what it cannot parse, so no one would see the fault.",
  rejected: { "Trusting the writer": "a broken program would be found when it runs, an escaped value perhaps never" },
  serves: [ExecutableSpecification],
  appliedBy: [Drivers, Page],
})
