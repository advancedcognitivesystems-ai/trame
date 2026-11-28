// The memory of the page, in a browser: the local storage of its origin, under the name the page decides. A browser that
// keeps nothing (a private window, storage refused) leaves the page as it starts.

import type { BodyOf } from "../../../trame/kernel"
import type { BrowserMemory } from "../../browser"

const body: BodyOf<typeof BrowserMemory> = ({ page }) => ({
  recall: () => {
    try {
      return localStorage.getItem(page.memory) ?? undefined
    } catch {
      return undefined
    }
  },
  keep: (text) => {
    try {
      localStorage.setItem(page.memory, text)
    } catch {
      /* nothing is kept */
    }
  },
})

export default body
