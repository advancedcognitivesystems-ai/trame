import { pathToFileURL } from "node:url"
import type { BodyOf } from "../../../trame/kernel"
import type { ChargeurTsx } from "../../plateforme"

const corps: BodyOf<typeof ChargeurTsx> = () => ({
  importer: async (fichier) => (await import(pathToFileURL(fichier).href)) as Record<string, unknown>,
})

export default corps
