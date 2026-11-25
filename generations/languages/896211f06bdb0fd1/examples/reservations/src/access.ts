/** Reservations · Access */

import { Identity } from "#trame/kernel"
import { audience } from "#trame/kinds/audience"
import { CancelWithoutStress } from "./cancellation"

// Who may call the service (C6). A reservation is a driver's: reading it and cancelling it are for drivers, each the
// driver of their own reservations, once identification says who calls (C7). The deployment is for the operators, who
// reach every record.

/**
 * Drivers
 * The people who reserve a charger: each is the driver of the reservations they made, and of their refunds.
 */
export const Drivers = audience({ owner: "karim", carries: [Identity.person], serves: [CancelWithoutStress] })
