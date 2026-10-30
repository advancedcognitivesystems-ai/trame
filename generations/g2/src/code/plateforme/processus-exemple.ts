import { resolve } from "node:path"
import type { BodyOf } from "../../../trame/kernel"
import type { ProcessusExemple } from "../../plateforme"

const aucun = (): never => {
  throw new Error("En test, le moteur ne lance aucun processus")
}

const corps: BodyOf<typeof ProcessusExemple> = ({ racine }) => ({
  repertoire: () => resolve(racine),
  env: {},
  relancer: aucun,
  lancerTs: aucun,
  surSignal: () => undefined,
})

export default corps
