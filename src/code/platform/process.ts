// The current process. Relaunching means starting this same program again (whichever engine is running), with the
// same loader; restarting, starting the engine the project pins now, through the launcher that started this one (its
// path in the environment), which installs it first when it must. A program of commands run here (since g119) is
// imported into this process, once, with the engine as the one that runs it: it offers its commands, and the engine
// runs the one named.

import { spawn } from "node:child_process"
import { resolve } from "node:path"
import { pathToFileURL } from "node:url"
import { TriggerType, withEngine } from "../../../trame/kernel"
import type { BodyOf } from "../../../trame/kernel"
import type { Route } from "../../../kinds/component"
import type { NodeProcess } from "../../platform"

/** The commands each program offered when it was imported, by its URL: a module runs once in a process. */
const offered = new Map<string, readonly Route[]>()

const body: BodyOf<typeof NodeProcess> = ({ argv, node, runner, variables, exit, values }) => ({
  cwd: () => process.cwd(),
  program: () => resolve(process.argv[argv.script]),
  env: process.env,
  relaunch: (args, cwd) => spawn(process.execPath, [...process.execArgv, process.argv[argv.script], ...args], { cwd, env: process.env }),
  restart: (args, cwd) => {
    const launcher = process.env[variables.launcher]
    return launcher
      ? spawn(launcher, args, { cwd, env: process.env })
      : spawn(process.execPath, [...process.execArgv, process.argv[argv.script], ...args], { cwd, env: process.env })
  },
  runTs: (file, args) =>
    // The loader resolved from where the engine is installed: the program it runs runs the same from any directory.
    spawn(process.execPath, [node.importFirst, import.meta.resolve(runner), file, ...args], { stdio: node.inherit, env: { ...process.env, NODE_NO_WARNINGS: node.enabled } }),
  runHere: async (program, args, api) => {
    const url = pathToFileURL(program).href
    let routes = offered.get(url)
    if (routes === undefined) {
      const routed: Route[] = []
      await withEngine({ offer: (r) => void routed.push(...(r as readonly Route[])), api }, () => import(url))
      routes = routed
      offered.set(url, routes)
    }
    const [name, ...rest] = args
    const route = routes.find((r) => r.trigger.type === TriggerType.command && r.trigger.name === name)
    if (!route) return exit.failure
    // The engine runs with the API given for this command: the project as the dispatch prepared it this time.
    const response = await withEngine({ offer: () => undefined, api }, () => route.handler({ params: { command: name }, body: { args: rest } }))
    // What it answers, when it is lines of text, is written on the standard output, as Node's command line does.
    if (Array.isArray(response.body)) for (const line of response.body.filter(values.isText)) console.log(line)
    return response.status ?? exit.success
  },
  onSignal: (signal, f) => void process.on(signal, f),
})

export default body
