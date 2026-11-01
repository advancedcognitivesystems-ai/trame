// The preferences in a browser: the storage of the page's origin. A browser that keeps nothing leaves them unset.

import type { BodyOf } from "../../../../../../trame/kernel"
import type { BrowserPreferences } from "../../platform"

const body: BodyOf<typeof BrowserPreferences> = () => ({
  get: (name) => {
    try {
      return localStorage.getItem(name) ?? undefined
    } catch {
      return undefined
    }
  },
  set: (name, value) => {
    try {
      localStorage.setItem(name, value)
    } catch {
      /* nothing is kept */
    }
  },
})

export default body
