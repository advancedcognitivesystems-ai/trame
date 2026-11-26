// The browser's languages: the list it sends with each request, or its one language.

import type { BodyOf } from "#trame/kernel"
import type { BrowserLanguages } from "../../platform"

const body: BodyOf<typeof BrowserLanguages> = () => ({
  languages: () => (navigator.languages?.length ? [...navigator.languages] : [navigator.language]),
})

export default body
