/** Continuous integration · npm */

import { standard } from "../../kinds/standard"
import { OneWriterPerPlace } from "./product"

/**
 * npm
 * How a runner installs the packages of a directory: exactly as its lockfile says, in a clean node_modules (the
 * lockfiles of Trame, of its libraries and of the project are the ones the plan names).
 */
export const Npm = standard({
  owner: "trame",
  serves: [OneWriterPerPlace],
  source: "npm documentation, CLI commands: npm ci",
  url: "https://docs.npmjs.com/cli/commands/npm-ci",
  constants: {
    install: { value: "npm ci", meaning: "Installs what the lockfile says, nothing else, after removing node_modules" },
  },
})
