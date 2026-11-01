/** Standard library · Effects */

import { LanguageEffect, CommandMark } from "#trame/kernel"
import { vocabulary, type WordOf } from "#trame/kinds/vocabulary"
import { decision } from "#trame/kinds/decision"
import { fn } from "#trame/kinds/function"
import { RealizedOnce } from "./product"

/**
 * Effects
 * What code may do to the world, in one vocabulary: a port declares what each of its methods may do in these words, and
 * what a module of the platform, a package or a global of a host may do is said in the same words. Code that touches
 * nothing has none.
 */
export const Effects = vocabulary({
  owner: "trame",
  serves: [RealizedOnce],
  words: {
    read: "Reads a state (files, a database)",
    write: "Changes a state",
    execution: "Runs loaded code",
    process: "Starts or controls processes",
    terminal: "Reads the arguments, writes on the outputs",
    time: "Reads the time, or waits",
    network: "Talks to another machine",
    display: "Shows a page to a person, and hears what they do on it",
    keeps: "Keeps what was computed, to give it back the same: what it writes, only it reads",
    random: "Draws what nobody can foresee",
  },
})
/** A word of the vocabulary of effects, or one the language itself gives (asynchronous). */
export type Effect = WordOf<typeof Effects> | (typeof LanguageEffect)[keyof typeof LanguageEffect]

/** What a part of the platform may do: one list for all of it, or a list for each of its parts (a module's exports). */
export type MayDo = readonly Effect[] | Readonly<Record<string, readonly Effect[]>>

/** What the platform's modules and globals may do, as Trame reads their documentation. */
export interface PlatformReach {
  /** A module of a runtime, imported by its specifier: all of it, or each name it exports. */
  modules: Readonly<Record<string, MayDo>>
  /** A global a host gives (a browser, Node.js): all of it, or each member read of it. */
  hosts: Readonly<Record<string, MayDo>>
  /** The few members of ECMAScript's globals that do something outside; the others do nothing. */
  ecmaScript: Readonly<Record<string, Readonly<Record<string, readonly Effect[]>>>>
  /** ECMAScript's constructors that, called with no argument, read something outside: `new Date()` reads the time. */
  constructed: Readonly<Record<string, readonly Effect[]>>
  /** The names of the global object: a member read of it is that global (`globalThis.fetch` is fetch); whole, it is everything. */
  globalObjects: readonly string[]
}

/**
 * What the platform may do
 * How Trame reads the documentation of Node.js (its modules), of the browsers (WHATWG, W3C: their globals) and of
 * ECMA-262 (Math.random, Date.now, a date made of the current instant): what each module, each of its exports, each
 * global may do, in the words of the vocabulary of effects. An implementation may do what the modules and the globals
 * it reaches may do, and no more than its ports promise; one it reaches that nobody describes here, nor as a package of
 * the graph, cannot be promised anything.
 */
export const PlatformEffects = decision<PlatformReach>({
  owner: "trame",
  value: {
    modules: {
      "node:path": [],
      "node:url": [],
      "node:util": [],
      "node:events": [],
      "node:buffer": [],
      "node:zlib": [],
      "node:fs": {
        existsSync: ["read"], readFileSync: ["read"], readdirSync: ["read"], statSync: ["read"], lstatSync: ["read"],
        realpathSync: ["read"], readlinkSync: ["read"], accessSync: ["read"], watch: ["read", "time"],
        writeFileSync: ["write"], appendFileSync: ["write"], mkdirSync: ["write"], mkdtempSync: ["write"], rmSync: ["write"],
        unlinkSync: ["write"], renameSync: ["write"], symlinkSync: ["write"], copyFileSync: ["read", "write"], cpSync: ["read", "write"],
      },
      "node:fs/promises": ["read", "write", "asynchronous"],
      "node:os": { tmpdir: ["read"], homedir: ["read"], platform: [], EOL: [] },
      "node:crypto": { createHash: [], randomUUID: ["random"], randomBytes: ["random"] },
      "node:child_process": ["process"],
      "node:http": ["network", "asynchronous"],
      "node:https": ["network", "asynchronous"],
      "node:net": ["network", "asynchronous"],
      "node:sqlite": ["read", "write"],
      "node:module": { createRequire: ["execution"], registerHooks: ["execution"] },
      "node:readline": ["terminal", "asynchronous"],
      "node:timers": ["time"],
      "node:timers/promises": ["time", "asynchronous"],
    },
    hosts: {
      process: {
        argv: ["terminal"], stdout: ["terminal"], stderr: ["terminal"], stdin: ["terminal"],
        env: ["read"], cwd: ["read"], execPath: ["read"], execArgv: ["read"], pid: ["read"], platform: [],
        on: ["process"], emit: ["process"], exit: ["process"], kill: ["process"], exitCode: ["process"],
        nextTick: ["asynchronous"], hrtime: ["time"],
      },
      Buffer: [],
      Response: [],
      DecompressionStream: [],
      CompressionStream: [],
      CSS: { escape: [] },
      matchMedia: ["display"],
      scrollTo: ["display"],
      console: ["terminal"],
      fetch: ["network", "asynchronous"],
      XMLHttpRequest: ["network", "asynchronous"],
      WebSocket: ["network", "asynchronous"],
      EventSource: ["network", "asynchronous"],
      setTimeout: ["time"],
      clearTimeout: ["time"],
      setInterval: ["time"],
      clearInterval: ["time"],
      setImmediate: ["time"],
      queueMicrotask: ["asynchronous"],
      performance: ["time"],
      crypto: { randomUUID: ["random"], getRandomValues: ["random"], subtle: ["asynchronous"] },
      localStorage: ["read", "write"],
      sessionStorage: ["read", "write"],
      indexedDB: ["read", "write", "asynchronous"],
      document: ["display"],
      window: ["display"],
      getComputedStyle: ["display"],
      scrollX: ["display"],
      scrollY: ["display"],
      innerWidth: ["display"],
      innerHeight: ["display"],
      devicePixelRatio: ["display"],
      ResizeObserver: ["display"],
      IntersectionObserver: ["display"],
      location: ["read"],
      history: ["display"],
      navigator: { languages: ["read"], language: ["read"], wakeLock: ["display", "asynchronous"], userAgent: ["read"] },
      requestAnimationFrame: ["time", "display"],
      cancelAnimationFrame: ["time", "display"],
      speechSynthesis: ["display"],
      SpeechSynthesisUtterance: [],
      AudioContext: ["display"],
      Audio: ["display"],
      URL: [],
      URLSearchParams: [],
      TextEncoder: [],
      TextDecoder: [],
      structuredClone: [],
      AbortController: [],
      Blob: [],
      atob: [],
      btoa: [],
    },
    ecmaScript: {
      Math: { random: ["random"] },
      Date: { now: ["time"] },
    },
    constructed: {
      Date: ["time"],
    },
    globalObjects: ["globalThis", "self"],
  },
})

/**
 * A command another system interprets (a SQL statement, a shell line, a URL), marked with what it may do: a port's
 * method that takes one says which (`read(sql: Command<"read">)`). A text is not a command: TypeScript refuses it where
 * a command is expected, and a cast that makes one refuses the build, but here, where the command's type is declared.
 */
export type Command<E extends Effect> = string & { readonly [CommandMark]: E }

/** What makes commands: for each word of effects, a command of that intent from its text. */
export type CommandMaker = { readonly [E in WordOf<typeof Effects>]: (text: string) => Command<E> }

/**
 * Commands
 * Makes a command from its text, marked with what it may do: the only place a command is made. The code that receives
 * it is the code that makes commands (a dialect of SQL from its statements), and what a command made as a read really
 * does is proven where it runs: on a resource that refuses the rest, by a scenario that tries.
 */
export const Commands = fn({
  owner: "trame",
  serves: [RealizedOnce],
  deps: { effects: Effects },
  body: ({ effects }) => Object.fromEntries(effects.map((e) => [e, (text: string) => text])) as unknown as CommandMaker,
})
