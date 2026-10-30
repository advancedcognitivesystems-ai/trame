// Le processus courant. Se relancer, c'est relancer ce programme-ci (l'amorce ou un moteur assemblé), avec le même chargeur.

import { spawn } from "node:child_process"
import type { BodyOf } from "../../../trame/kernel"
import type { ProcessusNode } from "../../plateforme"

const corps: BodyOf<typeof ProcessusNode> = () => ({
  repertoire: () => process.cwd(),
  env: process.env,
  relancer: (args, cwd) => spawn(process.execPath, [...process.execArgv, process.argv[1], ...args], { cwd, env: process.env }),
  lancerTs: (fichier, args) =>
    spawn(process.execPath, ["--import", "tsx", fichier, ...args], { stdio: "inherit", env: { ...process.env, NODE_NO_WARNINGS: "1" } }),
  surSignal: (signal, f) => void process.on(signal, f),
})

export default corps
