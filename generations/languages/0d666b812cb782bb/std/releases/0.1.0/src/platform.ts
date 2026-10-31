/** Standard library · Platform */

import { code } from "../../../../trame/kernel"
import { port } from "../../../../kinds/port"
import { implementation } from "../../../../kinds/implementation"
import { adr } from "../../../../kinds/adr"
import type { Exposure } from "../../../../kinds/component"
import { UiEvents } from "./web"
import { RealizedOnce } from "./product"

// What a product needs of a platform, as ports, with their realizations on that platform. A product binds, in each of its
// environments, the realization that answers there; the ports and their realizations are written here once.

/**
 * Loading of a page
 * Runs the entry points of a page once its document is loaded: what exposes a component that runs in a browser.
 */
export const PageLoading = port<Exposure>({ owner: "trame", declaredEffects: ["display"] })

/**
 * The browser loads the page
 * The entry points triggered by the loading run once the document is parsed.
 */
export const BrowserLoading = implementation({
  owner: "trame", implements: [PageLoading],
  deps: { events: UiEvents },
  body: code.file("./code/platform/loading.ts"),
})

/**
 * A component in a browser starts with its page
 * A component that runs in a browser is exposed by the loading of its page: its entry points triggered by the loading
 * run once the document is parsed, and the browser's realization is the one a product binds there.
 */
export const StartsWithThePage = adr({
  owner: "trame",
  context: "A page and the program it carries are opened together; the program must not reach for elements the browser has not parsed yet, and two products would write the same wait.",
  consequences: "The exposure of a browser's component is the port PageLoading; BrowserLoading runs the entry points triggered by the loading once the document is parsed (DOMContentLoaded, or at once when it already is).",
  rejected: { "A script placed at the end of the body": "the order of a document would decide when the program starts, and nothing would say it" },
  serves: [RealizedOnce],
  appliedBy: [PageLoading, BrowserLoading],
})
