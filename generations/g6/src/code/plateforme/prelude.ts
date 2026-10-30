// Le prélude : le module interne du langage, partagé avec les types et les vues (même fichier, même registre).

import * as interne from "#trame/interne"
import { fileURLToPath } from "node:url"
import { realpathSync } from "node:fs"
import type { BodyOf } from "../../../trame/kernel"
import type { PreludeTrame } from "../../plateforme"

// Le chemin réel : une génération figée du moteur (generations/gN) atteint le prélude partagé par un lien.
const corps: BodyOf<typeof PreludeTrame> = () => ({
  interne,
  chemin: realpathSync(fileURLToPath(new URL("../../../trame/internal.ts", import.meta.url))).replace(/\.ts$/, ""),
})

export default corps
