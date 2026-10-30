/** Trame · Languages */

import { code } from "../trame/kernel"
import { fn } from "../kinds/function"
import { ExecutableSpecification } from "./product"
import { EcmaScriptTypes, GnuPositions } from "./standards"
import { FileReading, ModuleLoader, Paths, Prelude } from "./architecture"
import { Dates, DriverMessages } from "./messages"
import { SyntaxReader, BodyChecks } from "./syntax"
import { TypeScript, TypeScriptWriter } from "./typescript"

// Each language has its module (typescript; terraform to come): how Trame reads it, what Trame writes in it. Here,
// Drivers binds each language to the reader and the checks of a body, its writer and the module loader; and the HCL
// driver waits for Terraform to become a language node.

/**
 * HCL driver
 * Confronts the variables of a Terraform module with the provisioning dependencies, writes the call of the module.
 * Until Terraform is a language node, it reads the module with two regular expressions.
 */
export const DriverHcl = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: { reading: FileReading, paths: Paths, prelude: Prelude, dates: Dates, messages: DriverMessages },
  body: code.file<typeof import("./code/languages/driver-hcl").default>("./code/languages/driver-hcl.ts"),
})

/**
 * Drivers
 * The driver of each language, for the compiler (check, literals), the wiring (load) and the assembly (write): the
 * syntax reader and the checks of a body for reading, the writer of the language for writing, the module loader for
 * running. The language of the graph is that of the bodies written inline in its declarations.
 */
export const Drivers = fn({
  owner: "trame",
  serves: [ExecutableSpecification],
  deps: {
    reader: SyntaxReader, checks: BodyChecks, graph: TypeScript, writer: TypeScriptWriter, hcl: DriverHcl,
    loader: ModuleLoader, reading: FileReading, paths: Paths, types: EcmaScriptTypes, gnu: GnuPositions, messages: DriverMessages,
  },
  body: code.file<typeof import("./code/languages/drivers").default>("./code/languages/drivers.ts"),
})
