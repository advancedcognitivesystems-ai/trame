/** Trame · Languages */

import { code } from "../trame/kernel"
import { fn } from "../kinds/function"
import { ExecutableSpecification } from "./product"
import { GnuPositions } from "./standards"
import { ValueTypes } from "./algebra"
import { FileReading, ModuleLoader, Paths } from "./architecture"
import { DriverMessages } from "./messages"
import { SyntaxReader, BodyChecks } from "./syntax"
import { TypeScript, TypeScriptWriter } from "./typescript"
import { Terraform, TerraformModules, TerraformWriter } from "./terraform"

// Each language has its module (typescript, terraform): how Trame reads it, what Trame writes in it. Here, Drivers binds
// each language to the reader and the checks of a body, its writer and, for the languages that run, the module loader.

/**
 * Drivers
 * The driver of each language, for the compiler (check, literals), the wiring (load) and the assembly (write): the
 * syntax reader and the checks of a body for reading, the writer of the language for writing, the module loader for
 * running TypeScript. A Terraform module is named by its directory, and declares its parameters: each dependency the
 * graph passes must be one of them. What a writer writes is read back before it is written. The language of the graph
 * is that of the bodies written inline in its declarations.
 */
export const Drivers = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: {
    reader: SyntaxReader, checks: BodyChecks, graph: TypeScript, typeScriptWriter: TypeScriptWriter,
    terraform: Terraform, modules: TerraformModules, terraformWriter: TerraformWriter,
    loader: ModuleLoader, reading: FileReading, paths: Paths, values: ValueTypes, gnu: GnuPositions, messages: DriverMessages,
  },
  body: code.file<typeof import("./code/languages/drivers").default>("./code/languages/drivers.ts"),
})
