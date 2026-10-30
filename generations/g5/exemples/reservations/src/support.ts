/** Demandes du support */

import { min } from "../../../trame/kernel"
import { amend } from "../../../kinds/amendment"
import { DelaiGratuit } from "./annulation"

/**
 * Délai ultra demandé par le support
 * Le support reçoit des plaintes : sans délai gratuit, les conducteurs des bornes ultra paient des frais pour une annulation à la dernière minute.
 */
export const DelaiUltraSupport = amend(DelaiGratuit, { value: { ultra: min(12) } }, {
  owner: "karim",
  why: "plaintes reçues par le support",
  from: "2026-10-10",
})
