/** Standard library · Running */

import { code } from "#trame/kernel"
import { port } from "#trame/kinds/port"
import { implementation } from "#trame/kinds/implementation"
import { fn } from "#trame/kinds/function"
import { decision } from "#trame/kinds/decision"
import { catalog } from "#trame/kinds/catalog"
import { adr } from "#trame/kinds/adr"
import { RealizedOnce } from "./product"
import { CommandLanguage } from "./tooling"
import { NodeEvents } from "./system"
import { Http } from "./web"
import { Texts } from "./algebra"

// What a command that keeps running asks of the machine (since 0.32.0: trame dev, moved out of the engine): the time,
// waiting before it acts, serving HTTP, printing a line as it goes. Each is a port, realized on a machine by Node.js
// and, for scenarios, kept in memory where the machine would answer otherwise: a clock stopped, a server nobody reaches
// on the network, the lines printed. Waiting is the machine's in both: a scenario waits as a person would.

/** What a command asks of the clock: the instant it is. */
export interface Clock {
  now(): Date
}

/**
 * The clock
 * The instant it is: when a compilation starts and ends, the time a person reads.
 */
export const TheClock = port<Clock>({ owner: "trame", declaredEffects: ["time"] })

/** Waiting before acting, and giving up a wait. */
export type Timers = Pick<typeof globalThis, "setTimeout" | "clearTimeout">

/**
 * Timers
 * A function called once a time has passed, unless the wait is given up first.
 */
export const Waiting = port<Timers>({ owner: "trame", declaredEffects: ["time"] })

/** A server of HTTP, as Node.js starts one. */
export type HttpServer = Pick<typeof import("node:http"), "createServer">

/**
 * Serving HTTP
 * A server that answers the requests of a browser on a port of the machine.
 */
export const HttpServing = port<HttpServer>({ owner: "trame", declaredEffects: ["network"] })

/** A line printed as a command goes, before it ends. */
export interface Printing {
  line(text: string): void
}

/**
 * Printing as it goes
 * A line on the terminal while a command runs, rather than once it ends (a server, which never does).
 */
export const LinesPrinted = port<Printing>({ owner: "trame", declaredEffects: ["terminal"] })

/** What a scenario asks of a server kept in memory, and sees of its answer. */
export interface ServerResponseSeen {
  status: number
  headers: Readonly<Record<string, string>>
  /** What was written so far: a stream stays open. */
  body(): string
  /** The client goes away. */
  close(): void
  /** Once the server has ended its answer (one it gives after some work). */
  ended(): Promise<void>
}
export interface ServerAsked {
  /** Asks the server started in memory for a path, as a browser would; with a text, posts it. */
  request(url: string, posted?: string): ServerResponseSeen
  /** The ports it was asked to listen on. */
  ports(): number[]
}

/**
 * The server asked
 * In a scenario: asks the server started in memory for a path, as a browser would.
 */
export const ServerKept = port<ServerAsked>({ owner: "trame", declaredEffects: [] })

/** The lines a command printed as it went, for a scenario to read. */
export interface LinesSeen {
  lines(): readonly string[]
}

/**
 * The lines printed
 * In a scenario: what a command printed as it went.
 */
export const LinesKept = port<LinesSeen>({ owner: "trame", declaredEffects: [] })

/**
 * What a realization of this module says
 */
export const RunningWords = catalog({
  owner: "trame",
  language: CommandLanguage,
  messages: () => ({
    noServer: (url: string) => `In a scenario, ${url} was asked, and no server was started`,
  }),
})

/**
 * The machine's clock
 */
export const MachineClock = implementation({
  owner: "trame", implements: [TheClock],
  body: code.file("./code/running/machine-clock.ts"),
})

/**
 * The machine's timers
 * Node.js's: a scenario waits with them too.
 */
export const MachineTimers = implementation({
  owner: "trame", implements: [Waiting],
  body: code.file("./code/running/machine-timers.ts"),
})

/**
 * A server of Node.js
 */
export const NodeHttpServing = implementation({
  owner: "trame", implements: [HttpServing],
  body: code.file("./code/running/node-http.ts"),
})

/**
 * The standard output
 * Each line printed at once, on the terminal the command runs in.
 */
export const StandardOutput = implementation({
  owner: "trame", implements: [LinesPrinted],
  body: code.file("./code/running/standard-output.ts"),
})

/**
 * The instant of the scenarios
 * What the clock of the scenarios shows: a morning, the same date in every time zone of Europe.
 */
export const ScenarioInstant = decision<string>({ owner: "trame", value: "2026-10-30T08:00:00.000Z" })

/**
 * A clock stopped
 * In a scenario, the clock shows one instant, always.
 */
export const ClockStopped = fn({
  owner: "trame", implements: [TheClock], serves: [RealizedOnce],
  deps: { instant: ScenarioInstant },
  body: ({ instant }) => ({ now: () => new Date(instant) }),
})

/**
 * A server in memory
 * A command starts it as it would a server of Node.js; the scenario asks it for a path as a browser would, reading the
 * status, the headers and what was written (a stream of events stays open until the client goes away). Nothing listens
 * on the network.
 */
export const ServerInMemory = fn({
  owner: "trame", implements: [HttpServing, ServerKept], serves: [RealizedOnce],
  deps: { events: NodeEvents, http: Http, texts: Texts, say: RunningWords },
  body: code.file<typeof import("./code/running/server-in-memory").default>("./code/running/server-in-memory.ts"),
})

/**
 * Lines kept
 * In a scenario, each line a command prints as it goes is kept, in order.
 */
export const LinesInMemory = fn({
  owner: "trame", implements: [LinesPrinted, LinesKept], serves: [RealizedOnce],
  body: () => {
    const kept: string[] = []
    return { line: (text: string) => void kept.push(text), lines: () => [...kept] }
  },
})

/**
 * A command that keeps running asks the machine through ports
 * trame dev serves a page, waits before it compiles again, says when it compiled: what it asks of the machine is a port
 * of the library, which a project realizes where its commands run.
 */
export const RunningThroughPorts = adr({
  owner: "trame",
  context: "trame dev leaves the engine for a library of commands: the server, the timers, the clock and the terminal it used were the engine's own ports, which no library reaches.",
  consequences: "A library's command that keeps running is played in memory like any other: its server asked as a browser would, its clock stopped, its lines kept; on a machine, Node.js answers.",
  rejected: { "The engine's API serving the page": "the engine would serve HTTP for a command, a platform it has no reason to give" },
  serves: [RealizedOnce],
  appliedBy: [TheClock, Waiting, HttpServing, LinesPrinted, MachineClock, MachineTimers, NodeHttpServing, StandardOutput, ClockStopped, ServerInMemory, LinesInMemory],
})
