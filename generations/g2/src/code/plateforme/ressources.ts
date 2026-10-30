// Le script de la page et sa feuille de style sont rangés à côté du code du moteur.

import { fileURLToPath } from "node:url"
import type { BodyOf } from "../../../trame/kernel"
import type { RessourcesPage } from "../../plateforme"

const corps: BodyOf<typeof RessourcesPage> = () => ({
  script: fileURLToPath(new URL("../page/main.ts", import.meta.url)),
  style: fileURLToPath(new URL("../page/page.css", import.meta.url)),
})

export default corps
