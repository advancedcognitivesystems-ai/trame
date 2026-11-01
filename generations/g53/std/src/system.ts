/** Standard library · System */

import { standard } from "../../kinds/standard"
import { CitedNotCopied } from "./product"

// What a program on a machine deals with: the exit status and the signals of POSIX, Node.js's process, events,
// command line, modules and encodings, npm's command line and manifest.

/**
 * Exit status
 * What a command returns to the system that started it: zero if it succeeded, something else otherwise.
 */
export const ExitStatus = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "POSIX.1-2017, exit(); ISO C, EXIT_SUCCESS and EXIT_FAILURE",
  url: "https://pubs.opengroup.org/onlinepubs/9699919799/functions/exit.html",
  constants: {
    success: { value: 0, meaning: "The command succeeded (EXIT_SUCCESS)" },
    failure: { value: 1, meaning: "The command failed (EXIT_FAILURE)" },
  },
})

/**
 * POSIX signals and errors
 * The signals a program forwards to the one it runs, and the error that says the reader of its output went away.
 */
export const Posix = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "POSIX.1-2017, Base Definitions: <signal.h> (SIGINT, SIGTERM), <errno.h> (EPIPE), § 4.13 Pathname Resolution (dot)",
  url: "https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/signal.h.html",
  constants: {
    currentDirectory: { value: ".", meaning: "The directory a path starts from: a command in it is run as ./name" },
    interrupt: { value: "SIGINT", meaning: "The interruption asked from the terminal (Ctrl-C)" },
    terminate: { value: "SIGTERM", meaning: "The polite request to end" },
    brokenPipe: { value: "EPIPE", meaning: "Writing to a pipe that nobody reads any more (the output piped into head, say)" },
  },
})

/**
 * Node.js process arguments
 * What process.argv holds: the path of Node, then the path of the script being run, then the arguments given to it.
 */
export const NodeArguments = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "Node.js documentation, process.argv",
  url: "https://nodejs.org/api/process.html#processargv",
  constants: {
    script: { value: 1, meaning: "The position of the path of the script being run" },
    firstArgument: { value: 2, meaning: "The position of the first argument given to the script" },
  },
})

/**
 * Node.js process and console
 * What a program reads and sets on Node's process, and how it prints a line.
 */
export const NodeProcessApi = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "Node.js documentation: process (process.exitCode), console (console.log)",
  url: "https://nodejs.org/api/process.html#processexitcode_1",
  constants: {
    process: { value: "process", meaning: "The global object of the running process" },
    exitCode: { value: "exitCode", meaning: "The code the process exits with once nothing is left to run" },
    console: { value: "console", meaning: "The global console" },
    log: { value: "log", meaning: "Prints its arguments on the standard output, separated by spaces, then a line feed" },
  },
})

/**
 * Node.js events
 * The events a program listens to on Node's streams, child processes, requests and process.
 */
export const NodeEvents = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "Node.js documentation: stream.Readable ('data', 'close', 'error'), ChildProcess ('exit', 'close'), process ('unhandledRejection'), fs.watch ('change')",
  url: "https://nodejs.org/api/events.html",
  constants: {
    data: { value: "data", meaning: "A readable stream gives a chunk of what it reads" },
    close: { value: "close", meaning: "A stream, a request or a child process is closed: nothing more will come" },
    end: { value: "end", meaning: "A readable stream has nothing more to give: what it read is whole" },
    exit: { value: "exit", meaning: "A child process ended, with its exit code" },
    change: { value: "change", meaning: "fs.watch: a file under what is watched changed" },
    error: { value: "error", meaning: "A stream failed" },
    unhandledRejection: { value: "unhandledRejection", meaning: "A promise was rejected and nothing waited for it" },
  },
})

/**
 * Node.js command line and child processes
 * How a program is run by Node: a module imported before it, the warnings silenced; how a child shares the terminal.
 */
export const NodeCli = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "Node.js documentation: Command-line API (--import, NODE_NO_WARNINGS), child_process (options.stdio)",
  url: "https://nodejs.org/api/cli.html",
  constants: {
    importFirst: { value: "--import", meaning: "Imports a module before the program: a loader, say" },
    enabled: { value: "1", meaning: "The value that turns an environment flag on (NODE_NO_WARNINGS=1)" },
    inherit: { value: "inherit", meaning: "A child process writes on the same terminal as its parent" },
    ignore: { value: "ignore", meaning: "A child process reads nothing from its parent" },
    pipe: { value: "pipe", meaning: "The parent reads what a child process writes" },
  },
})

/**
 * Node.js module specifiers
 * How an import names a module: a relative specifier starts from the importing file; any other names a package, a
 * built-in module (node:fs) or an import map entry (#trame/kernel).
 */
export const NodeModuleSpecifiers = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "Node.js documentation, ECMAScript modules: Terminology (relative, bare and absolute specifiers); Packages: Subpath imports",
  url: "https://nodejs.org/api/esm.html#terminology",
  constants: {
    current: { value: "./", meaning: "Opens a relative specifier from the importing file's directory" },
    parent: { value: "../", meaning: "Opens a relative specifier from the directory above" },
    separator: { value: "/", meaning: "Separates the segments of a specifier, as in a URL path, whatever the platform" },
    packages: { value: "node_modules", meaning: "The directory where the packages a project imports are installed" },
    imports: { value: "#", meaning: "Opens a specifier the package's own import map resolves (subpath imports): #std/algebra" },
    pattern: { value: "*", meaning: "Stands for the rest of a subpath, in an entry of an import map and in its target" },
  },
})

/**
 * Node.js character encodings
 * The names Node gives to the encodings in which it reads and writes text (fs.readFileSync, Buffer).
 */
export const NodeEncodings = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "Node.js documentation, Buffer: buffers and character encodings",
  url: "https://nodejs.org/api/buffer.html#buffers-and-character-encodings",
  constants: {
    utf8: { value: "utf8", meaning: "UTF-8: the encoding of the text files of a project" },
    hex: { value: "hex", meaning: "Each byte written as two hexadecimal digits: how a digest is shown" },
  },
})

/**
 * npm's command line
 * The registry's reports, asked of npm in a project: its audit and its outdated packages, in JSON.
 */
export const NpmCli = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "npm documentation: npm audit, npm outdated (--json)",
  url: "https://docs.npmjs.com/cli/commands/npm-audit",
  constants: {
    command: { value: "npm", meaning: "The command line of npm" },
    audit: { value: "audit", meaning: "Asks the registry for the known vulnerabilities of the packages installed" },
    outdated: { value: "outdated", meaning: "Lists the packages installed that are not at their latest version" },
    json: { value: "--json", meaning: "Answers in JSON rather than in a table" },
  },
})

/**
 * npm's manifest
 * The file where a project names the packages it depends on, each at its version, for npm to install them, and its
 * import map: where the specifiers it opens with # lead.
 */
export const NpmManifest = standard({
  owner: "trame",
  serves: [CitedNotCopied],
  source: "npm documentation: package.json (dependencies); Node.js documentation, Packages: \"imports\"",
  url: "https://docs.npmjs.com/cli/configuring-npm/package-json#dependencies",
  constants: {
    dependencies: { value: "dependencies", meaning: "The packages the project needs to run, by name, each at its version" },
    imports: { value: "imports", meaning: "The package's import map: each specifier opened by # and where it leads" },
  },
})
