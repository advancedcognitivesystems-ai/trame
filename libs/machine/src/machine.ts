/** Machine · Questions */

import { code } from "#trame/kernel"
import { standard } from "#trame/kinds/standard"
import { port } from "#trame/kinds/port"
import { implementation } from "#trame/kinds/implementation"
import { decision } from "#trame/kinds/decision"
import { catalog } from "#trame/kinds/catalog"
import { MachineNeeds } from "#std/tooling"
import { GitCommandLine } from "#std/repository"
import { SemanticVersioning } from "#std/measures"
import { ExitStatus, NodeCli, NodeEvents } from "#std/system"
import { AskedOnce } from "./product"

// The questions any project may ask of its machine, which belong to no provider: each an add-on of std's MachineNeeds,
// which trame doctor asks and a check proves (since g122). What a project requires is its own decision, read through
// the port WhatTheMachineRuns, which the project realizes with a function of its own: a question never carries a value
// of the project.

/**
 * Node's platforms
 * The names Node gives to the system it runs on, as os.platform() answers: what a project lists among the systems it
 * runs on.
 */
export const NodePlatforms = standard({
  owner: "trame",
  serves: [AskedOnce],
  source: "Node.js documentation: os.platform()",
  url: "https://nodejs.org/api/os.html#osplatform",
  constants: {
    aix: { value: "aix", meaning: "IBM AIX" },
    darwin: { value: "darwin", meaning: "macOS" },
    freebsd: { value: "freebsd", meaning: "FreeBSD" },
    linux: { value: "linux", meaning: "Linux" },
    openbsd: { value: "openbsd", meaning: "OpenBSD" },
    sunos: { value: "sunos", meaning: "Solaris" },
    win32: { value: "win32", meaning: "Windows" },
  },
})

/** What a project requires of the machine: the systems it runs on (Node's names), the least major of Node it needs. */
export interface MachineRequired {
  systems: readonly string[]
  node: number
}

/**
 * What the machine runs
 * The settings of the questions: what the project requires of its machine, which a function of the project answers
 * from its decisions.
 */
export const WhatTheMachineRuns = port<{ required(): MachineRequired }>({ owner: "trame", declaredEffects: { required: [] } })

/** The language the questions speak in. */
export const MachineLanguage = decision<{ tag: string }>({ owner: "trame", value: { tag: "en-GB" } })

/**
 * What the questions say
 */
export const MachineWords = catalog({
  owner: "trame",
  language: MachineLanguage,
  messages: () => ({
    systemSupported: (system: string) => `the system is one the project runs on: ${system}`,
    systemUnsupported: (system: string, systems: readonly string[]) => `the system is ${system}, which the project does not run on (${systems.join(", ")})`,
    nodeSupported: (version: string, least: number) => `Node ${version} is at least the major the project needs (${least})`,
    nodeTooOld: (version: string, least: number) => `Node ${version} is older than the major the project needs (${least})`,
    gitInstalled: () => "Git is installed",
    gitMissing: () => "Git does not answer: install it, the pull requests and the propagation need it",
  }),
})

/**
 * The system, one the project runs on
 * Asks the system the machine runs, as Node names it, among those the project runs on.
 */
export const SystemSupported = implementation({
  owner: "trame", implements: [MachineNeeds],
  deps: { settings: WhatTheMachineRuns, words: MachineWords },
  body: code.file("./code/system-supported.ts"),
})

/**
 * Node, recent enough
 * Asks the version of Node that runs the engine: its major at least the one the project needs.
 */
export const NodeRecentEnough = implementation({
  owner: "trame", implements: [MachineNeeds],
  deps: { settings: WhatTheMachineRuns, versioning: SemanticVersioning, words: MachineWords },
  body: code.file("./code/node-recent-enough.ts"),
})

/**
 * Git, installed
 * Asks Git which it is: it answers when it is installed, as the pull requests and the propagation need it.
 */
export const GitInstalled = implementation({
  owner: "trame", implements: [MachineNeeds],
  deps: { git: GitCommandLine, cli: NodeCli, events: NodeEvents, exit: ExitStatus, words: MachineWords },
  body: code.file("./code/git-installed.ts"),
})
