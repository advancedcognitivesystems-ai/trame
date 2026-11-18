/** Standard library · Tooling */

import { code } from "#trame/kernel"
import { standard } from "#trame/kinds/standard"
import { port } from "#trame/kinds/port"
import { implementation } from "#trame/kinds/implementation"
import { fn } from "#trame/kinds/function"
import { decision } from "#trame/kinds/decision"
import { pkg } from "#trame/kinds/package"
import { vocabulary } from "#trame/kinds/vocabulary"
import { adr } from "#trame/kinds/adr"
import { Counts, Texts, ValueTypes } from "./algebra"
import { Sha256, SeededDraws } from "./algorithms"
import { NodeEncodings, NodeArguments, ExitStatus } from "./system"
import type { Exposure } from "#trame/kinds/component"
import { RealizedOnce, CitedNotCopied } from "./product"
import { Time } from "./measures"

// The ports the code of a project's SDLC uses, beside the product's: the project's files (read, written, copied, their
// fingerprint), and a browser without a screen that opens a page the project delivered and answers what it shows. Each
// has a realization for a machine and one kept in memory, so that a check or a deployment is played in a scenario before
// it runs for real.

/**
 * Commands of a program
 * A program of the SDLC (a check, a deployment), run by a person or by trame ship: its first argument names the
 * command that runs.
 */
export const ProgramCommands = port<Exposure>({ owner: "trame", declaredEffects: ["terminal"] })

/**
 * Node's command line
 * The first argument given to the program chooses the entry point whose command it names, which receives the others;
 * what it answers, when it is lines of text, is written on the standard output; the program ends with the status the
 * entry point answers, or fails when no command has that name.
 */
export const NodeProgramCommands = implementation({
  owner: "trame", implements: [ProgramCommands],
  deps: { argv: NodeArguments, exit: ExitStatus, values: ValueTypes },
  body: code.file("./code/tooling/node-commands.ts"),
})

/** The files of a project, by their path from its root. */
export interface ProjectFiles {
  exists(path: string): boolean
  read(path: string): string
  write(path: string, content: string): void
  copy(from: string, to: string): void
  /** What tells a file's content from any other: a digest of it. */
  fingerprint(path: string): string
}

/**
 * Project files
 * Reads, writes and copies the files of the project, and gives a file's fingerprint.
 */
export const Files = port<ProjectFiles>({
  owner: "trame",
  declaredEffects: { exists: ["read"], read: ["read"], fingerprint: ["read"], write: ["write"], copy: ["read", "write"] },
})

/** What a scenario reads of the files: those written, by path. */
export interface FilesWritten {
  written(): ReadonlyMap<string, string>
}

/**
 * Files written
 * The files a check or a deployment wrote, for a scenario to read: realized together with the files kept in memory.
 */
export const FilesKept = port<FilesWritten>({ owner: "trame", declaredEffects: [] })

/**
 * The machine's files
 * The files of the project on the machine, from the directory the program runs in; a fingerprint is the SHA-256 digest
 * of the file, in hexadecimal.
 */
export const MachineFiles = implementation({
  owner: "trame", implements: [Files],
  deps: { sha: Sha256, encodings: NodeEncodings },
  body: code.file("./code/tooling/machine-files.ts"),
})

/**
 * Files kept in memory
 * In a scenario, the project's files are kept in memory, empty at first; a fingerprint is the hash of the text.
 */
export const FilesInMemory = fn({
  owner: "trame", implements: [Files, FilesKept],
  deps: { draws: SeededDraws, texts: Texts },
  body: ({ draws, texts }) => {
    const files = new Map<string, string>()
    return {
      exists: (path: string) => files.has(path),
      read: (path: string) => files.get(path) ?? texts.empty,
      write: (path: string, content: string) => void files.set(path, content),
      copy: (from: string, to: string) => void files.set(to, files.get(from) ?? texts.empty),
      fingerprint: (path: string) => String(draws.seedOf(files.get(path) ?? texts.empty)),
      written: () => new Map(files),
    }
  },
})

/** A page opened in a browser without a screen: what it shows, and what a person would do on it. */
export interface BrowserPage {
  /** The errors the page raised since it opened. */
  errors(): readonly string[]
  /** How many elements a CSS selector finds. */
  count(selector: string): Promise<number>
  /** The text of the first element a selector finds, if any. */
  text(selector: string): Promise<string | undefined>
  /** Clicks the first element a selector finds. */
  click(selector: string): Promise<void>
  /** Chooses, in the first list a selector finds (a select), the option of this value. */
  choose(selector: string, value: string): Promise<void>
  /** Lets the page run for a while, in seconds. */
  wait(seconds: number): Promise<void>
  close(): Promise<void>
}

/** A browser without a screen. */
export interface Browser {
  /** Opens a file of the project as a page, in a language. */
  open(path: string, language: string): Promise<BrowserPage>
}

/**
 * Headless browser
 * Opens a page the project delivered, without a screen, and answers what it shows.
 */
export const HeadlessBrowser = port<Browser>({ owner: "trame", declaredEffects: ["process", "display", "time", "network", "asynchronous"] })

/**
 * Playwright
 * Drives Chromium without a screen: the version whose browser the machine has. Once installed, it installs the Chromium
 * it drives, with what the system needs to run it: a machine that runs a check of the page does it first.
 */
export const PlaywrightPackage = pkg({
  owner: "trame", packageName: "playwright", version: "1.56.0", url: "https://www.npmjs.com/package/playwright",
  prepare: "npx playwright install --with-deps chromium",
  declaredEffects: ["process", "display", "network", "time", "asynchronous"],
})

/**
 * Playwright's API
 * The names Playwright gives to what a page tells: the event of an error the page raised.
 */
export const PlaywrightApi = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "Playwright documentation, class Page, event \"pageerror\"",
  url: "https://playwright.dev/docs/api/class-page#page-event-page-error",
  constants: {
    pageError: { value: "pageerror", meaning: "An error the page raised and did not catch" },
  },
})

/**
 * Chromium without a screen
 * How Chromium starts without a screen: WebGL drawn by software (ANGLE on SwiftShader), so that a page drawing in three
 * dimensions runs on a machine without a graphics card; the window's size, in pixels.
 */
export const HeadlessChromium = decision<{ args: string[]; width: number; height: number }>({
  owner: "trame",
  value: {
    args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"],
    width: 420, height: 900,
  },
  rejected: { "Chromium as it starts": "without a graphics card, WebGL fails and a page that draws in three dimensions shows nothing" },
})

/**
 * Chromium, driven by Playwright
 * The headless browser of a machine: Chromium started by Playwright as decided, a page opened from the file's address,
 * its errors kept as they come.
 */
export const PlaywrightBrowser = implementation({
  owner: "trame", implements: [HeadlessBrowser],
  packages: [PlaywrightPackage],
  deps: { chromium: HeadlessChromium, api: PlaywrightApi, counts: Counts, time: Time },
  body: code.file("./code/tooling/playwright-browser.ts"),
})

/** A page as a scenario writes it: what each selector finds (how many, the first one's text), the errors it raises. */
export interface ScriptedPage {
  elements: Record<string, { count: number; text?: string }>
  errors: string[]
}

/** What a scenario gives the browser kept in memory: the page it shows for each file, and the clicks it saw. */
export interface BrowserScript {
  show(path: string, page: ScriptedPage): void
  clicks(): readonly string[]
  /** The options chosen, each with the list it was chosen in. */
  choices(): readonly { selector: string; value: string }[]
}

/**
 * Browser script
 * The pages the browser kept in memory shows, as a scenario writes them, and what was clicked on them.
 */
export const BrowserScripted = port<BrowserScript>({ owner: "trame", declaredEffects: [] })

/**
 * A browser kept in memory
 * In a scenario, a page opened shows what the scenario wrote for its file (nothing found, no error, when it wrote
 * nothing); clicks are recorded; waiting takes no time.
 */
export const BrowserInMemory = fn({
  owner: "trame", implements: [HeadlessBrowser, BrowserScripted],
  deps: { counts: Counts },
  body: ({ counts }) => {
    const pages = new Map<string, ScriptedPage>()
    const clicked: string[] = []
    const chosen: { selector: string; value: string }[] = []
    return {
      show: (path: string, page: ScriptedPage) => void pages.set(path, page),
      clicks: () => [...clicked],
      choices: () => [...chosen],
      open: async (path: string) => {
        const page = pages.get(path) ?? { elements: {}, errors: [] }
        return {
          errors: () => page.errors,
          count: async (selector: string) => page.elements[selector]?.count ?? counts.zero,
          text: async (selector: string) => page.elements[selector]?.text,
          click: async (selector: string) => void clicked.push(selector),
          choose: async (selector: string, value: string) => void chosen.push({ selector, value }),
          wait: async () => undefined,
          close: async () => undefined,
        }
      },
    }
  },
})

/** A package a project uses, as its configuration names it. */
export interface PackageWanted {
  /** The project's root, absolute. */
  project: string
  /** The directory under the project's root where a package reached from elsewhere is placed. */
  under: string
  /** Its name in the project: what its specifiers start with, after the mark of the import map (#std/algebra). */
  name: string
  /** Where the package is, absolute, for a package reached by its path: its root, or that of the version wanted. */
  at?: string
  /** The version wanted, when one is frozen. */
  version?: string
  /** Where it comes from, in the words of PackageOrigins: by its path, from a registry. */
  from?: string
}

/** A version of a package, published: its name, its version, the directory that holds it. */
export interface PackagePublished {
  name: string
  version: string
  from: string
}

/** How a project reaches a package. */
export interface PackageSource {
  /** Makes the package reachable from the project; gives where its import map leads, relative to the project's root. */
  place(wanted: PackageWanted): string
  /** Publishes a version where the strategy keeps them (a version is never written twice); gives where it went. */
  publish(published: PackagePublished): string
  /**
   * The versions of the package its origin holds, as the reference names them (since 0.15.0): the versions frozen
   * beside the one a path reaches, those published in a registry; none for a package reached as it is.
   */
  versions(wanted: PackageWanted): readonly string[]
}

/**
 * Where a package comes from
 * A project uses packages (the language of the generation it pins, its libraries) by their name only, each at its
 * version; where the package's files come from is a choice with its strategies: a local path (a directory on the
 * machine, reached through a link under the project), a registry (a package fetched at its version). The project's
 * import map leads to where the strategy placed the package; moving a package elsewhere changes only its source.
 */
export const PackageSources = port<PackageSource>({
  owner: "trame",
  declaredEffects: { place: ["read", "write"], publish: ["read", "write"], versions: ["read"] },
})

/**
 * Where a package comes from
 * The origins a reference to a package names: by its path (a directory on the machine, the package as it is or a
 * version it froze), from a registry (a version published). npm will be one more.
 */
export const PackageOrigins = vocabulary({
  owner: "trame",
  serves: [RealizedOnce],
  words: {
    path: "Reached where it is on the machine, by its path",
    registry: "Installed at its version from a registry where it was published",
  },
})


/**
 * The SDLC's tooling is realized once
 * The files of a project and a headless browser are ports of the library, each realized for a machine and in memory:
 * every project's checks and deployments use them, and play them in scenarios, rather than calling the machine itself.
 */
export const ToolingAsPorts = adr({
  owner: "trame",
  context: "The code that builds, checks and deploys a product is code like the product's: written once, tested before it runs.",
  consequences: "A check opens the delivered page through HeadlessBrowser, a deployment copies through Files, a project reaches the packages it uses through PackageSources wherever they come from; scenarios play them with the realizations kept in memory.",
  serves: [RealizedOnce],
  appliedBy: [ProgramCommands, NodeProgramCommands, Files, FilesKept, MachineFiles, FilesInMemory, HeadlessBrowser, PlaywrightBrowser, BrowserScripted, BrowserInMemory, PackageSources],
})
